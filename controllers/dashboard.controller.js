const {
    Request,
    Mail,
    RequestType,
    RequestStatus,
    User,
    Role,
    UserStatus,
    Department
} = require('../models');
const bcrypt = require('bcrypt');
const csv = require('csv-parser');
const fs = require('fs');

module.exports = {
    getDashboard: async (req, res) => {
        // get all requests where status is pending
        return await Request.findAll({
                include: [{
                        model: Mail,
                        required: false
                    },
                    {
                        model: RequestType,
                        required: true
                    },
                    {
                        model: RequestStatus,
                        required: true
                    },
                    {
                        model: User,
                        required: false
                    }
                ],
                order: [
                    ['createdAt', 'DESC']
                ],
                where: {
                    requestStatus: 2
                }

            })
            .then(async (pendingRequests) => {
                const allRequests = await Request.count();
                const completedRequests = await Request.count({
                    where: {
                        requestStatus: 1
                    }
                });
                const declinedRequests = await Request.count({
                    where: {
                        requestStatus: 3
                    }
                });
                return [pendingRequests, allRequests, completedRequests, declinedRequests];
            }).then((data) => {
                console.log(data)
                res.render('dashboard', {
                    title: 'Dashboard',
                    user: req.session.user,
                    requests: data[0],
                    moment: require('moment'),
                    allRequests: data[1],
                    completedRequests: data[2],
                    declinedRequests: data[3]
                });
            })
            .catch((error) => {
                res.render('error', {
                    error: error,
                    message: error.message
                })
            })
    },
    // list all mails that have been created,,concidering the role of the user in the dashboard
    newlyCreatedMails: async (req, res) => {
        if (req.session.user.Role.name == 'Super Admin') {
            return await Request.findAll({
                    include: [{
                            model: Mail,
                            required: false
                        },
                        {
                            model: RequestType,
                            required: true
                        },
                        {
                            model: RequestStatus,
                            required: true
                        },
                        {
                            model: User,
                            required: true
                        }
                    ],
                    order: [
                        ['createdAt', 'DESC']
                    ],
                    where: {
                        requestStatus: 1, //completed
                        requestType: 2, //create New Mail
                        // userId:req.session.user.id //get all mails that a specific admin has attended to
                    }
                }).then((newMails) => {
                    console.log(JSON.stringify(newMails))
                    // res.json({newMails})
                    res.render('newMails', {
                        title: 'New mails',
                        status: 'success',
                        user: req.session.user,
                        data: newMails,
                        moment: require('moment'),
                        axios: require('axios'),
                    })
                })
                .catch((error) => {
                    res.render('error', {
                        error: error,
                    })
                });
        } else {
            return await Request.findAll({
                    include: [{
                            model: Mail,
                            required: false
                        },
                        {
                            model: RequestType,
                            required: true
                        },
                        {
                            model: RequestStatus,
                            required: true
                        },
                        {
                            model: User,
                            required: true
                        }
                    ],
                    order: [
                        ['createdAt', 'DESC']
                    ],
                    where: {
                        requestStatus: 1, //completed
                        requestType: 2, //create New Mail
                        userId: req.session.user.id //get all mails that a specific admin has attended to
                    }
                })
                .then((newMails) => {
                    console.log(JSON.stringify(newMails))
                    // res.json({newMails})
                    res.render('newMails', {
                        title: 'New mails',
                        status: 'success',
                        user: req.session.user,
                        data: newMails,
                        moment: require('moment'),
                        axios: require('axios'),
                    })
                })
                .catch((error) => {
                    res.render('error', {
                        error: error,
                    })
                });
        }

    },
    // get all the users of the system
    getUsers: async (req, res) => {
        // defining request queries
        const errorMessage = req.query.error === 'user_exists' ? 'This user already exists in the database' : "";
        const successMessage = req.query.success === 'user_created' ? 'User has been created successfully' : "";

        const roles = await Role.findAll()
        return await User.findAll({
                include: [{
                    model: Role,
                    required: true
                }, {
                    model: UserStatus,
                    required: true
                }]
            })
            .then((result) => {
                // res.set('Content-Security-Policy', "script-src 'unsafe-inline' 'unsafe-eval' *");
                return res.render('users', {
                    title: 'User management',
                    user: req.session.user,
                    status: 'success',
                    data: result,
                    roles,
                    errorMessage,
                    successMessage
                })
            })
            .catch((err) => {
                console.log(err.message)
                res.render('error', {
                    error: error
                })
            });
    },
    // this is used to updated any change made to the admin information(Super Admin only)
    updateUser: async (req, res) => {
        const {
            userId
        } = req.params
        console.log(userId)
        const {
            firstName,
            lastName,
            email,
            phone,
            roleId,
        } = req.body
        console.log(req.body)

        const updatedUser = await User.update({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                roleId: roleId
            }, {
                where: {
                    id: parseInt(userId)
                }
            }).then((results) => {
                const currentUser = User.findOne({
                    where: {
                        id: userId
                    }
                })
                console.log(currentUser)
                if (req.session.user.id === currentUser.id) {
                    req.session.user.roleId = roleId;
                }
                console.log('##########################');
                console.log(req.session.user);
                console.log('##########################');
            }).then((results) => {
                res.redirect('/dashboard/users')
            })
            .catch((error) => {
                res.render('error', {
                    error: error
                })
            });
    },
    // this controller is used by the super admin to switch between user status
    toggleStatus: async (req, res) => {
        const {
            userId
        } = req.params;

        const {
            statusId
        } = req.body;
        console.log(req.body);
        console.log('user is', userId)
        if (userId == req.session.user.id) {
            return res.json({
                status: 'error',
                data: 'You cannot change your own status'
            })
        }
        return await User.update({
                statusId: statusId
            }, {
                where: {
                    id: userId
                }
            })
            .then((result) => {
                res.json({
                    status: 'success',
                    data: 'user status updated successfully'
                })
            })
            .catch((error) => {
                res.json({
                    status: 'error',
                    data: 'error updating user status'
                })
            })
    },
    // lists all the password reset requests
    getAllResetRequests: async (req, res) => {
        console.log('Getting all reset requests')
        if (req.session.user.Role.name == 'Super Admin') {
            return await Request.findAll({
                    include: [{
                            model: Mail,
                            required: false
                        },
                        {
                            model: RequestType,
                            required: true
                        },
                        {
                            model: RequestStatus,
                            required: true
                        },
                        {
                            model: User,
                            required: true
                        }
                    ],
                    order: [
                        ['createdAt', 'DESC']
                    ],
                    where: {
                        requestStatus: 1, //completed
                        requestType: 1, //Reset Password
                    }
                }).then((results) => {
                    console.log(JSON.stringify(results))
                    // res.json({newMails})
                    res.render('resetMails', {
                        title: 'Reset requests',
                        status: 'success',
                        user: req.session.user,
                        data: results,
                        moment: require('moment'),
                        axios: require('axios'),
                    })
                })
                .catch((error) => {
                    res.render('error', {
                        error: error,
                    })
                });
        } else {
            return await Request.findAll({
                    include: [{
                            model: Mail,
                            required: false
                        },
                        {
                            model: RequestType,
                            required: true
                        },
                        {
                            model: RequestStatus,
                            required: true
                        },
                        {
                            model: User,
                            required: true
                        }
                    ],
                    order: [
                        ['createdAt', 'DESC']
                    ],
                    where: {
                        requestStatus: 1, //completed
                        requestType: 1, //Reset Password
                        userId: req.session.user.id //get only the mails reset by the logged in user
                    }
                })
                .then((results) => {
                    console.log(JSON.stringify(results))
                    // res.json({newMails})
                    res.render('resetMails', {
                        title: 'Reset requests',
                        status: 'success',
                        user: req.session.user,
                        data: results,
                        moment: require('moment'),
                        axios: require('axios'),
                    })
                })
                .catch((error) => {
                    res.render('error', {
                        error: error,
                    })
                });
        }
    },
    // Super Admin interface to change admin password
    passwordReset: async (req, res) => {
        const {
            userId
        } = req.params;

        const {
            passReset
        } = req.body;

        console.log('User id is as follows', userId)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash('Welcome2023', saltRounds);
        console.log('this is the hashed password', hashedPassword);

        const user = await User.update({
                password: hashedPassword,
                passReset
            }, {
                where: {
                    id: userId
                }
            }).then((result) => {
                console.log('Response is ', result)
                // res.redirect('/dashboard/users?success=pass_changed')
                res.json({
                    status: 'success',
                    data: 'Password reset successfull'
                });
            })
            .catch((err) => {
                // res.redirect('/dashboard/users?error=pass_unchanged')
                res.json({
                    status: 'error',
                    data: 'Oops an error has occured while reseting password try again'
                });
            })
    },
    // this submits the password changed by logged in user via the modal
    ownPasswordReset: async (req, res) => {
        const {
            userId
        } = req.params;
        const {
            password,
            passReset
        } = req.body;

        console.log('User id is as follows', userId)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('this is the hashed password', hashedPassword);

        const user = await User.update({
                password: hashedPassword,
                passReset
            }, {
                where: {
                    id: userId
                }
            }).then((result) => {
                console.log('Response is ', result)
                req.session.user.password = hashedPassword;
                // res.redirect('/dashboard?success=pass_changed')
                res.json({
                    status: 'success',
                    data: 'Password reset successfull'
                });
            })
            .catch((err) => {
                // res.redirect('/dashboard?error=pass_unchanged')
                res.json({
                    status: 'error',
                    data: 'Oops an error has occured while reseting password try again'
                });
            })
    },
    // Imports mails via csv files
    importMails: async (req, res) => {
        try {
            const mails = [];

            fs.createReadStream(req.file.path)
                .pipe(csv())
                .on('data', (row) => {
                    mails.push(row);
                    console.log("*******MAils*****", mails)
                })
                .on('end', async () => {
                    // insert the mails to the database
                    await Mail.bulkCreate(mails);
                    // feedback
                    res.status(200).json({
                        status: 'success',
                        data: 'Mails imported successfully',
                    });
                })
        } catch (error) {
            console.log('Error importing mails', error);
            res.status(500).json({
                status: 'error',
                data: 'Failed to import mails',
            });
        }
    },
    getImportForm: async (req, res) => {
        const mails = await Mail.findAll({
                include: [{
                    model: Department,
                    required: false
                }, ],
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            .then((mails) => {
                // console.log(mails);
                // res.json({
                //     status: 'success',
                //     data: mails
                // });
                res.render('importForm', {
                    title: 'Import Mails',
                    status: 'success',
                    user: req.session.user,
                    data: mails,
                    moment: require('moment'),
                    axios: require('axios'),
                })
            })
            .catch((err) => {
                res.render('error', {
                    error: err,
                })
            })
    }

}