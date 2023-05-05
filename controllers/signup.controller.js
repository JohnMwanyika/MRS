const {
    User
} = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    signUp: async (req, res) => {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('this is the hashed password', hashedPassword);

        console.log(req.body);
        // check if user exists in the database with similar creadentials
        return await User.findOne({
            where: {
                email: email,
            }
        }).then((existingUser) => {
            console.log('Existing user is', existingUser);
            // const saltRounds = 10;
            // const hashedPassword = await bcrypt.hash(password, saltRounds);
            // console.log('this is the hashed password',hashedPassword);

            if (!existingUser) {
                return createdUser = User.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    roleId: 2,
                    statusId: 2
                })

            } else {
                // res.json({
                //     message: {
                //         status: 'warning',
                //         info: 'User already exists'
                //     }
                // })
                return res.redirect('/signup?error=user_exists');
            }
        }).then((createdUser) => {
            console.log(createdUser)
            res.redirect('/login?success=user_created');
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