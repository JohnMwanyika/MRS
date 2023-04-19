const {} = require('../models');
module.exports = {
    login: async (req, res) => {
        const {
            username,
            password
        } = req.body;
        const user = await User.findOne({
            where: {
                username
            }
        });
        if (user && user.password === password) {
            req.session.user = user;
            res.redirect('/dashboard');
        } else {
            res.redirect('/login');
        }
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
}