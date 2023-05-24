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

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Confirmed email sent to: ${to} ` + info.response);
        return info.response;
    } catch (error) {
        console.log('Error sending email: ' + error.message);
        throw error.message;
    }
}

sendMail('ict test mail', 'testing mail functionality', 'mwanyikajohn@outlook.com', 'maytimina0@gmail.com', '5476benja@gmail.com')
    .then(response => {
        console.log('Email sent successfully:', response);
    })
    .catch(error => {
        console.error('Error sending email:', error);
    });
module.exports = {
    sendMail
}