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
}