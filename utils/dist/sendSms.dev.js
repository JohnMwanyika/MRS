"use strict";

require('dotenv').config();

var axios = require("axios");

module.exports = function sendSms(phone, message) {
  var data, config;
  return regeneratorRuntime.async(function sendSms$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = JSON.stringify({
            response_type: "json",
            sender_name: "23107",
            service_id: 0,
            message: message,
            mobile: phone
          });
          config = {
            method: "post",
            url: "https://api.mobitechtechnologies.com/sms/sendsms",
            data: data,
            headers: {
              h_api_key: process.env.SMS_API_KEY,
              "Content-Type": "application/json"
            }
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(axios(config).then(function (res) {
            console.log(JSON.stringify(res.data));
          })["catch"](function (err) {
            console.log(err);
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}; // sendSms(+254793712929,"Hello Magotsi from APi");