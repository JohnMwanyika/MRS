const { body, validationResult } = require('express-validator');


module.exports = {
    validate: (req, res, next) => {
        console.log('validating user')
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors });
        }
        next();
    }
}