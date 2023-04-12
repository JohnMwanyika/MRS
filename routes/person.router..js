const router = require('express').Router();
const { getAll, createOne, getOne, updateById,deleteUser } = require('../controllers/person.controller');
const { validate } = require('../middlewares/validate');
const validation = require('../validations/user.validator');

router.get('/', getAll);
router.post('/', validation.create(), validate, createOne);
router.get('/:id', validation.findById(), validate, getOne);
router.put('/:id', validation.updateById(),validate,updateById);
router.delete('/:id', validation.deleteById(),validate,deleteUser);
module.exports = router;