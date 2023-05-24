const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendMail(subject, text, ...to) {
    let transporter = nodemailer.createTransport({
        host: 'mail.govmail.ke',
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

// sendMail('ict test mail', 'testing mail fuctionality', 'mwanyikajohn@outlook.com', 'cypriansmakau@gmail.com', '5476benja@gmail.com');

module.exports = {
    sendMail
}