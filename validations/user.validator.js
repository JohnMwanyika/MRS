const { body, param } = require('express-validator');


module.exports = {
    create: () => [
        body('name')
            .notEmpty()
            .isString()
            .isLength({ max: 128 }),

        body('age')
            .notEmpty()
            .isInt(),

        body('gender')
            .notEmpty()
            .isIn(['female', 'male']),

        body('address')
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