const {
    sendMail
} = require('../utils/send_mail');

const {
    whatsappText
} = require('../utils/whatsapp');

const sendSms = require('../utils/sendSms');

const {
    Mail,
    Department,
    Trial,
    Request
} = require('../models');
const {
    check
} = require('express-validator');
const e = require('express');

module.exports = {
    createMail: async (req, res) => {

        const {
            fullName,
            email,
            password,
            department
        } = req.body;

        // check existing
        const mail = await Mail.findOne({
            where: {
                email: email
            }
        })
        if (mail) {
            return res.json({
                status: 'error',
                data: 'This request has already been resolved'
            });
        }
        // get the department id from the creation request from admin
        const dprt = await Department.findOne({
            where: {
                name: department
            }
        })

        const mailData = {
            name: fullName,
            email,
            password: 'Welcome2020',
            departmentId: dprt.id,
        };

        console.log('Received request');
        console.log(req.body);
        // const NewMail = await Mail.create(mailData)
        return await Mail.create(mailData)
            .then((newMail) => {
                const updatedStatus = Request.update({
                    requestStatus: 1,
                    userId: req.session.user.id
                }, {
                    where: {
                        fullName: fullName,
                        requestType: 2
                    }
                })
            })
            .then((newMail) => {
                console.log(`${newMail} created`);
                res.json({
                    status: 'success',
                    data: 'Email has been created successfully'
                })
            })
            .catch((err) => {
                console.log('Mail creation failed' + err.message)
                res.json({
                    status: 'error',
                    data: err.message
                });
            });
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

        // find department by name provided by user note it comes as id from the selected department name
        const dpt = await Department.findOne({
            where: {
                id: department
            }
        })
        console.log('This is the department', JSON.stringify(dpt))

        function JoinName(fname, lname) {
            let fullName = `${fname} ${lname}`;
            return fullName
        };

        let fullName = JoinName(firstName, lastName);

        const mail = await Mail.findOne({
                include: Department,
                where: {
                    name: fullName,
                },
            })
            .then((mail) => {
                console.log(JSON.stringify(mail));
                console.log('This user is ' + fullName)
                console.log('DepartmentId is ' + department)

                if (!mail) {
                    let failedTrial = {
                        credentials: fullName,
                        typeId: 1,
                        statusId: 1,
                        departmentId: department,
                    }
                    const newTrial = Trial.create(failedTrial)
                    return res.render('serp', {
                        status: 'warning',
                        data: "There is no email under that name. Please Check your spelling before sending an email creation request.",
                        current: {
                            firstName,
                            lastName,
                            dpt
                        }
                    });
                }
                if (mail) { // mail has been found

                    // This update the departmentId to the email that has been found 
                    return Mail.update({
                        departmentId: department
                    }, {
                        where: {
                            id: mail.id
                        },
                    })
                }
            })
            .then((updatedMail) => {
                if (updatedMail) {
                    console.log(JSON.stringify(updatedMail));
                    return Mail.findOne({
                        include: Department,
                        where: {
                            name: fullName
                        }
                    });
                }

            })
            .then((updatedMail) => {
                if (updatedMail) {
                    // This will add a mail check success attempt
                    console.log(JSON.stringify(updatedMail));
                    let trialData = {
                        credentials: updatedMail.name,
                        typeId: 1,
                        statusId: 2,
                        departmentId: updatedMail.departmentId,
                    }
                    const newTrial = Trial.create(trialData)
                    // return the two objects as an array
                    return [newTrial, updatedMail]
                }

            })
            .then((result) => {
                if (result) {
                    console.log(JSON.stringify(result[0]))

                    res.render('serp', {
                        status: 'success',
                        data: result[1],
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
            })
    },
    resetPass: async (req, res) => {
        try {
            const {
                department,
                fullName,
                email,
                phone
            } = req.body;
            console.log('This is the email to be reset', req.body);

            // get department details
            const dprt = await Department.findOne({
                where: {
                    name: department
                }
            });
            // get mail details
            const mailToReset = await Mail.findOne({
                where: {
                    email: email
                }
            });


            // create a success trial
            let trialData = {
                credentials: fullName,
                typeId: 2,
                statusId: 2,
                departmentId: dprt.id,
            };
            const resetTrial = await Trial.create(trialData);

            let mail = {
                to: '5476benja@gmail.com',
                subject: 'Request for password reset',
                text: `Greetings, Sir/Madam! My name is ${fullName} from ${department} department, I would like to request a password reset for my email address, ${email}`
            };

            // uodate mails by adding phone number to the user when they provide it
            if (phone) {
                const userPhoneUpdated = Mail.update({
                    phone
                }, {
                    where: {
                        email: email
                    },
                });

                const recipient = parseInt(phone);
                // seperate first and last name from full name
                const [firstName, lastName] = fullName.split(' ');
                // send an sms to user
                sendSms(recipient, `Dear ${firstName}, we have received your request and we'll inform you when your email has been reset`)
            }


            // send whatsApp Message
            whatsappText(process.env.ADMIN1, mail.text)
                .then(async (response) => {
                    // check if request exists
                    const existingReq = await Request.findOne({
                        where: {
                            requestType: 1,
                            email: email,
                            requestStatus: 2
                        }
                    })
                    // console.log('This is the existing Request***', existingReq)
                    return existingReq
                })
                .then((results) => {
                    // console.log("*******", results)
                    if (!results) {
                        let requestData = {
                            mailId: mailToReset.id,
                            requestType: 1,
                            requestStatus: 2,
                            email: email,
                            fullName: fullName,
                            department: dprt.name
                        }
                        const newRequest = Request.create(requestData)

                        return res.json({
                            status: 'success',
                            data: "Your request has been submitted successfully"
                        })
                        // return newRequest
                    } else {
                        console.log("************The request already exist ********")
                        let data = {
                            requestStatus: 2,
                        };
                        // update the request if it exists
                        const updatedRequest = Request.update(data, {
                            where: {
                                email: email,
                                requestType: 1,
                                requestStatus: 2
                            }
                        })
                        return res.json({
                            status: 'info',
                            data: "You submitted your request earlier, the admins have been reminded"
                        })
                        // return updatedRequest
                    }
                })
                // .then(response => {
                //     res.json({
                //         status: 'success',
                //         data: response
                //     })
                // })
                .catch((error) => {
                    console.log(error.message);
                    res.json({
                        status: 'error',
                        data: error
                    })
                })


            // Send Email
            // sendMail(mail.to, mail.subject, mail.text)
            //     .then((response) => {
            //         let requestData = {
            //             mailId: mailToReset.id,
            //             requestType: 1,
            //             requestStatus: 2,
            //             email: email,
            //             fullName: fullName,
            //             department: dprt.name
            //         }
            //         const newRequest = Request.create(requestData)

            //         console.log(response);
            //         // res.json({
            //         //     status: 'success',
            //         //     data: response
            //         // })
            //         return response;
            //     }).then(response => {
            //         res.json({
            //             status: 'success',
            //             data: response
            //         })
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         res.json({
            //             status: 'error',
            //             data: error
            //         })
            //     })

        } catch (error) {
            res.json({
                status: 'error',
                data: error.message
            })
        }

    },
    requestNewMail: async (req, res) => {
        try {
            const {
                firstName,
                lastName,
                department
            } = req.body;
            const fullName = `${firstName} ${lastName}`;
            const mailToCreate = `${firstName}.${lastName}@taitataveta.go.ke`;

            // get departmentId
            const dprt = await Department.findOne({
                where: {
                    name: department
                }
            });

            // create a success trial
            let trialData = {
                credentials: fullName,
                typeId: 3,
                statusId: 2,
                departmentId: dprt.id,
            };
            const requestTrial = await Trial.create(trialData);

            let mail = {
                // from: 'mwanyikajohn@outlook.com',
                to: '5476benja@gmail.com',
                subject: 'Request for email creation',
                text: `Greetings, Sir/Madam! there is a request to create an email for ${fullName} from ${department} department`
            };

            // Send WhatsApp Message
            whatsappText(process.env.ADMIN1, mail.text)
                .then((response) => {
                    console.log(response);
                    // check if request exists
                    return Request.findOne({
                        where: {
                            email: mailToCreate
                        }
                    })
                })
                .then(async (isExisting) => {
                    console.log('**********************************88');
                    // console.log('is Existing', isExisting);
                    console.log('**********************************88');

                    // check if email exists in Mails
                    const existingMail = await Mail.findOne({
                        where: {
                            email: mailToCreate
                        }
                    })
                    if (existingMail) {
                        // return existingMail
                        return res.json({
                            status: 'info',
                            data: "We kindly inform you that the email you have provided has already been registered by the administrator. Please consider using a different email address or contacting the administrator for further assistance."
                        });

                    }

                    let requestData = {
                        mailId: null,
                        requestType: 2,
                        requestStatus: 2,
                        email: mailToCreate,
                        fullName: fullName,
                        department: dprt.name
                    }

                    if (!isExisting) {
                        // if (existingMail) {
                        //     // return existingMail
                        //     return res.json({
                        //         status: 'warning',
                        //         data: "An email has been found under that name."
                        //     });

                        // } else {
                        const newRequest = Request.create(requestData);
                        // return newRequest;
                        return res.json({
                            status: 'success',
                            data: "We are pleased to inform you that your email creation request has been sent successfully. The admins will review it promptly. Thank you for your submission."
                        });
                        // }

                    } else {
                        let data = {
                            requestStatus: 2,
                        }
                        const updatedRequest = Request.update(data, {
                            where: {
                                email: mailToCreate,
                                requestType: 2,
                            }
                        })

                        // return updatedRequest;
                        return res.json({
                            status: 'info',
                            data: "We have notified the administrators about a similar request and appreciate you bringing it to our attention."
                        });
                    }
                })
                // .then(response => {
                //     console.log(JSON.stringify(response));
                //     res.json({
                //         status: 'success',
                //         data: response,
                //     })
                // })
                .catch((error) => {
                    console.log(error.message);
                    res.json({
                        status: 'error',
                        data: error
                    })
                })


            // sendMail(mail.to, mail.subject, mail.text);
            // sendMail(mail.to, mail.subject, mail.text)
            //     .then((response) => {
            //         console.log(response);

            //         let requestData = {
            //             mailId: null,
            //             requestType: 2,
            //             requestStatus: 2,
            //             email: mailToCreate,
            //             fullName: fullName,
            //             department: dprt.name
            //         }
            //         const newRequest = Request.create(requestData)

            //         return response;
            //     }).then(response => {
            //         res.json({
            //             status: 'success',
            //             data: response
            //         })
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         res.json({
            //             status: 'error',
            //             data: error
            //         })
            //     })

        } catch (error) {
            console.log(error.message);
            res.json({
                status: 'error',
                data: error
            })
        }
    },
    home: async (req, res) => {
        const departments = await Department.findAll()
            .then((allDepartments) => {
                res.render('home', {
                    status: 'error',
                    data: allDepartments
                });
            })
            .catch((err) => {
                console.log(err)
                res.render('error', {
                    status: 'error',
                    error: err,
                    message: err.message
                });
            })

    },
    completeReset: async (req, res) => {
        const {
            fullName,
            email,
            department
        } = req.body;

        const dprt = await Department.findOne({
            where: {
                name: department
            }
        });

        const updatedRequest = await Request.update({
                    requestStatus: 1,
                    userId: req.session.user.id
                }, {
                    where: {
                        requestType: 1,
                        fullName: fullName,
                    }
                }

            )
            .then(async (response) => {
                // get the phone of the user
                const mailUser = await Mail.findOne({
                    where: {
                        email: email
                    }
                })
                // Send feedback to the Mail user
                const recipient = parseInt(mailUser.phone);
                // seperate first and last name from full name
                const [firstName, lastName] = fullName.split(' ');
                // send an sms to user
                sendSms(recipient, `Dear ${firstName}, We are pleased to inform you that your email has been successfully reset. You can now proceed to log in to your account without any issues. regards ${req.session.user.firstName}`)

                console.log(response);
                res.json({
                    status: 'success',
                    data: 'Password reset completed successfully'
                })
            }).catch((error) => {
                res.json({
                    status: 'error',
                    data: error.message
                })
            });

    },
    // newlyCreatedMails: async (req, res) => {
    //     return await Request.findAll({
    //             where: {
    //                 requestStatus: 1, //completed
    //                 requestType: 2 //create New Mail
    //             }
    //         })
    //         .then((newMails) => {
    //             res.render('newMails', {
    //                 status: 'success',
    //                 data: newMails
    //             })
    //         })
    //         .catch((error) => {
    //             res.render('error', {
    //                 error: error
    //             })
    //         });

    // }
}