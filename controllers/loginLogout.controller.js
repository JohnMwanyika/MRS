const {
    User
} = require('../models');
module.exports = {
    signUp: async (req, res) => {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        // check if user exists in the database with similar creadentials
        return existingUser = await User.findOne({
            where: {
                email: email,
            }
        }).then((existingUser) => {
            const saltRounds = 10;
            const hashedPassword = bcrypt.hash(password, saltRounds);

            if (!existingUser) {
                return createdUser = User.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                })

            } else {
                res.json({
                    message: {
                        status: 'error',
                        info: 'User already exists'
                    }
                })
            }
        }).then((createdUser) => {
            res.render('/login');
        }).catch((error) => {
            res.json({
                message: {
                    status: 'error',
                    info: error.message
                }
            })
        });
    },
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
            // req.session.user = user;
            // res.redirect('/dashboard');
            res.json({
                message: {
                    status: 'error',
                    info: 'Check password and try again',
                }
            });
        }
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
}