const {
    Request,
    Mail,
    RequestType,
    RequestStatus
} = require('../models');

module.exports = {
    getDashboard: async (req, res) => {

        // get all requests
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
                    }
                ],
                order: [
                    ['createdAt', 'DESC']
                ]

            })
            .then((requests) => {
                console.log('####################################################');
                // console.log(JSON.stringify(requests[0].Mail));
                console.log('####################################################');

                // res.json({
                //     requests
                // })
                res.render('dashboard', {
                    title: 'Welcome to MRS Dashboard',
                    user: req.session.user,
                    requests: requests,
                    moment: require('moment'),
                });
            })
            .catch((error) => {
                res.render('error', {
                    error: error,
                    message: error.message
                })
            })

    }
}