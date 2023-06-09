const { body, param } = require('express-validator');


module.exports = {
    create: () => [
        body('firstName')
            .notEmpty()
            .isString()
            .isLength({ max: 128 }),

        body('lastName')
            .notEmpty()
            .isString(),

        body('email')
            .notEmpty()
            // .isIn(['female', 'male']),
            .isString(),

        body('password')
            .notEmpty()
            .isString()
            .isLength({ max: 255 })
    ],
    findById: () => [
        param('id')
            // .notEmpty()
            .isInt()
    ],
    updateById: () => [
        param('id')
            .notEmpty()
            .isInt(),

        body('name')
            .optional()
            .notEmpty()
            .isString()
            .isLength({ max: 128 }),

        body('age')
            .optional()
            .notEmpty()
            .isInt(),

        body('gender')
            .optional()
            .notEmpty()
            .isIn(['female', 'male']),

        body('address')
            .optional()
            .notEmpty()
            .isString()
            .isLength({ max: 255 })
    ],
    deleteById: () => [
        param('id')
           .notEmpty()
           .isInt()
    ]
};