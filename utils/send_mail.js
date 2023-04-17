const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendMail(to, subject, text) {
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    let mailOptions = {
        from: process.env.MAIL_FROM,
        to: to,
        subject: subject,
        text: text
    };

    // await transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info.response;
    } catch (error) {
        console.log('Error sending email: ' + error);
        throw error;
    }
}

module.exports = {
    sendMail
}