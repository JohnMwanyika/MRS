const {
    Request,
    Mail,
    RequestType,
    RequestStatus,
    User,
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
                    requestType: 2 //create New Mail
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
}