const {
    User
} = require('../models');

const bcrypt = require('bcrypt');
module.exports = {
    login: async (req, res) => {
        const {
            email,
            password
        } = req.body;
        const user = await User.findOne({
            where: {
                email: email,
            }
        });
        if (!user) {
            return res.json({
                message: {
                    status: 'error',
                    info: 'No user under that email check spelling and try again'
                }
            });

        }
        // Compare password with hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({
                message: {
                    status: 'error',
                    info: 'Invalid username or password try again',
                }
            });
        }
        console.log('Setting user session')
        req.session.user = user;
        res.redirect('/dashboard');

    },
    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
}