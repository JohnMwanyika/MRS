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
                res.render('users', {
                    title: 'User management',
                    user: req.session.user,
                    status: 'success',
                    data: result,
                    roles
                })
            })
            .catch((err) => {
                console.log(err.message)
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
        // .catch((error) => {
        //     res.render('error', {
        //         error: error
        //     })
        // });
    }
}