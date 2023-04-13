const {
    sendMail
} = require('../utils/send_mail');

const {
    Mail,
    Department,
    Trial,
    TrialStatus,
    TrialTypa
} = require('../models');

module.exports = {
    createMail: async (req, res) => {

        const {
            name,
            email,
            password
        } = req.body;

        const data = {
            name,
            email,
            password
        };

        const NewMail = await Mail.create(data)

            .then((newMail) => {
                console.log(`${newMail} created`);
                res.json({
                    status: 'success',
                    data: newMail
                })
            })
            .catch((err) => {
                res.json({
                    status: 'error',
                    data: err.message
                });
            })
    },
    getMailById: async (req, res) => {
        const {
            id
        } = req.params;
        const mail = await Mail.findByPk(id)
            .then((mail) => {
                console.log(mail);
                res.json({
                    status: 'success',
                    data: mail
                });
            })
            .catch((err) => {
                res.json({
                    status: 'error',
                    data: err.message
                });
            })
    },
    getAllMail: async (req, res) => {
        const mails = await Mail.findAll()
            .then((mails) => {
                console.log(mails);
                res.json({
                    status: 'success',
                    data: mails
                });
            })
            .catch((err) => {
                res.json({
                    status: 'error',
                    data: err.message
                });
            })
    },
    getMailByName: async (req, res) => { //This checks for existing mails
        const {
            firstName,
            lastName,
            department, //using it to populate trials and insert it to mails for future identification
        } = req.body;

        function JoinName(fname, lname) {
            let fullName = `${fname} ${lname}`;
            return fullName
        };

        let fullName = JoinName(firstName, lastName);

        const mail = await Mail.findAll({
                where: {
                    name: fullName,
                },
                include:Department
            })
            .then(async (mail) => {
                console.log(JSON.stringify(mail));
                console.log('This user exists ' + fullName)
                console.log('DepartmentId is ' + department)
                if (mail.length > 0) {

                    // This adds or update the departmentId to the email that has been found 
                    const [_, updatedMail] = await Mail.update({
                        departmentId: department
                    }, {
                        where: {
                            id: mail[0].id
                        },
                        returning: true
                    })
                    console.log("Record Updated is", updatedMail.id)
                    // This will add a success trial 
                    let data = {
                        credentials: fullName,
                        typeId: 1,
                        statusId: 2,
                        departmentId: updatedMail.departmentId,
                    }
                    const newTrial = await Trial.create(data)
                    console.log(newTrial.credentials);

                    res.render('serp', {
                        status: 'success',
                        data: mail,
                    });

                } else {
                    // This will let admin know how many trials users have made
                    let data = {
                        credentials: fullName,
                        typeId: 1,
                        statusId: 1,
                        departmentId: department,
                    }
                    const newTrial = await Trial.create(data)
                    console.log(newTrial.credentials);


                    res.render('serp', {
                        status: 'error',
                        data: "There is no email under that name. Please Check your spelling before sending an email creation request.",
                        current: {
                            firstName,
                            lastName
                        }
                    });
                }


            })
            .catch((err) => {
                res.render('serp', {
                    status: 'error',
                    data: err.message,
                    current: {
                        firstName,
                        lastName
                    }
                });
                // res.json({
                //     status: 'error',
                //     data: err.message
                // });
            })
    },
    resetPass: (req, res) => {
        try {
            const {
                fullName,
                email
            } = req.body;

            let mail = {
                from: 'mwanyikajohn@outlook.com',
                to: 'gilkichoi@gmail.com',
                subject: 'Email password reset',
                text: `Greetings, Sir/Madam! My name is ${fullName} I would like to request a password reset for my email address, ${email}`
            };


            sendMail(mail.from, mail.to, mail.subject, mail.text)
            res.render('response', {
                status: 'success',
                data: 'success'
            })

        } catch (error) {
            res.json({
                status: 'error',
                data: error.message
            })
        }

    },
    requestNewMail: (req, res) => {
        try {
            const {
                firstName,
                lastName
            } = req.body;
            const fullName = `${firstName} ${lastName}`;
            const mailToCreate = `${firstName}.${lastName}@taitataveta.go.ke`
            let mail = {
                from: 'mwanyikajohn@outlook.com',
                to: 'gilkichoi@gmail.com',
                subject: 'Email password reset',
                text: `Greetings, Sir/Madam! there is a request to create an email for ${firstName} ${lastName}`
            };

            sendMail(mail.from, mail.to, mail.subject, mail.text);
            res.render('response', {
                current: {
                    fullName,
                    mailToCreate
                }
            });

        } catch (error) {

        }
    },
    home: async (req, res) => {
        const departments = await Department.findAll();
        // console.log(departments)
        res.render('home', {
            status: 'error',
            data: departments
        });
    }
}