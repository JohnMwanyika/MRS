const {
    User,
    Role,
    UserStatus
} = require('../models');

const bcrypt = require('bcrypt');
module.exports = {
    login: async (req, res) => {
        const {
            email,
            password
        } = req.body;
        const user = await User.findOne({
            include: [{
                model: Role,
                required: true
            }, {
                model: UserStatus,
                required: true
            }],
            where: {
                email: email,
            }
        });
        if (!user) {
            return res.redirect('/login?error=no_user');

        }
        if (user.UserStatus.name != 'Active') {
            return res.redirect('/login?error=inactive');
        }
        // Compare password with hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        // if passwords do not match redirect user to the login page with an alert of invalid credentials
        if (!isMatch) {
            return res.redirect('/login?error=invalid_credentials');
        }

        console.log('Setting user session')
        req.session.user = user;
        res.redirect('/dashboard');

    },
    logout: async (req, res) => {
        req.session.destroy((err) => {
            if (err) {
              console.error('Error destroying session:', err);
            } else {
              console.log('Session data deleted');
              res.redirect('/login'); // Redirect to login page or any other appropriate route
            }
          });
    }
}