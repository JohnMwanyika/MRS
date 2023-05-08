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
                res.redirect('/dashboard/users')
            })
            .catch((error) => {
                res.render('error', {
                    error: error
                })
            });
    },
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
    getAllResetRequests: async (req, res) => {
        console.log('gGetting all reset requests')
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
    passwordReset: async (req, res) => {
        const {
            userId
        } = req.body;
        console.log('User id is as follows',req.body)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash('Welcome2023', saltRounds);
        console.log('this is the hashed password', hashedPassword);

        const user = await User.update({
                password: hashedPassword
            }, {
                where: {
                    id: userId
                }
            }).then((result) => {
                console.log('Response is ',result)
                // res.redirect('/dashboard/users?success=pass_changed')
                res.json({
                    status: 'success',
                    data:'Password reset successfull'
                });
            })
            .catch((err) => {
                // res.redirect('/dashboard/users?error=pass_unchanged')
                res.json({
                    status: 'error',
                    data:'Oops an error has occured while reseting password try again'
                });
            })
    }

}