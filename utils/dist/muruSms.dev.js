"use strict";

require('dotenv').config();

var axios = require('axios');

var apiKey = process.env.SMS_KEY; // const sendText = (phone,message) = >{
// }

var data = JSON.stringify({
  "profile_code": 2780,
  "messages": [{
    "recipient": "254707438654",
    "message": " Test sucessfull ",
    "message_type": 1,
    "req_type": 1,
    "external_id": "unique_external_id"
  }],
  "dlr_callback_url": "https://posthere.io/"
});
var config = {
  method: 'post',
  url: 'https://sms.murutechinc.com:2780/api/outbox/create',
  headers: {
    'x-api-key': apiKey,
    'Content-Type': 'application/json'
  },
  data: data
};
axios(config).then(function (response) {
  console.log(JSON.stringify(response.data));
})["catch"](function (error) {
  console.log(error);
});