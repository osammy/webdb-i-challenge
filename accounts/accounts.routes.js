const controller = require("./accounts.controllers");

const router = require('express').Router();

router.get('/',controller.find)
router.post('/',controller.createOne)
router.get('/:id',controller.findById)
router.put('/:id',controller.findByIdAndUpdate)
router.delete('/:id',controller.findByIdAndDelete)


module.exports =  router;