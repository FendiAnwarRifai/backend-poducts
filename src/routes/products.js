const express = require('express')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')
const ProductsController = require('../controllers/ProductsController')
router
    .get('/', verifyAccess, ProductsController.view)
    .post('/create', verifyAccess, ProductsController.create)
    .patch('/update', verifyAccess, ProductsController.update)
    .delete('/delete/:id', verifyAccess, ProductsController.delete)

module.exports = router