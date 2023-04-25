const whatsAppClient = require('@green-api/whatsapp-api-client');
require('dotenv').config();


module.exports = {
    whatsappText: async (phone, message) => {
        const restAPI = whatsAppClient.restAPI(({
            idInstance: process.env.ID_INSTANCE,
            apiTokenInstance: process.env.API_TOKEN_INSTANCE
        }))
        await restAPI.message.sendMessage(`254${phone}@c.us`, null, message)
            .then((data) => {
                console.log('Whatsapp message sent');
                console.log(data);
            }).catch((error) => {
                console.log('Failed to send whatsapp message');
                console.log(error.message);
            });

    }
}

// restAPI.message.sendMessage("254707438654@c.us", null, "hello Mwanyika comming from API")
//     .then((data) => {
//         console.log(data);
//     });