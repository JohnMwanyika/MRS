"use strict";

var nodemailer = require('nodemailer');

require('dotenv').config();

var host = process.env.MAIL_HOST || 'mail.govmail.ke';
var port = process.env.MAIL_PORT || 587;

function sendMail(subject, text) {
  var transporter,
      _len,
      to,
      _key,
      mailOptions,
      info,
      _args = arguments;

  return regeneratorRuntime.async(function sendMail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          transporter = nodemailer.createTransport({
            host: host,
            port: port,
            secure: false,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS
            }
          });

          for (_len = _args.length, to = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            to[_key - 2] = _args[_key];
          }

          mailOptions = {
            from: process.env.MAIL_USER,
            to: to,
            subject: subject,
            text: text
          };
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(transporter.sendMail(mailOptions));

        case 6:
          info = _context.sent;
          console.log("Confirmed email sent to: ".concat(to, " from ").concat(mailOptions.from) + info.response);
          return _context.abrupt("return", info.response);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](3);
          console.log('Error sending email: ' + _context.t0.message);
          throw _context.t0;

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 11]]);
} // sendMail('ict test mail', 'testing mail functionality', 'mwanyikajohn@outlook.com', '5476benja@gmail.com')
//     .then(response => {
//         console.log('Email sent successfully:', response);
//     })
//     .catch(error => {
//         console.error('Error sending email:', error);
//     });


module.exports = {
  sendMail: sendMail
};