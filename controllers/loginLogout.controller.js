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
            res.json({
                message: {
                    status: 'error',
                    info: 'No user under that email'
                }
            });
            return
        }
        // Compare password with hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.json({
                message: {
                    status: 'error',
                    info: 'Invalid username or password try again',
                }
            });
        } else {
            req.session.user = user;
            res.redirect('/dashboard');
            // res.json({
            //     message: {
            //         status: 'error',
            //         info: 'Check password and try again',
            //     }
            // });
        }
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
}