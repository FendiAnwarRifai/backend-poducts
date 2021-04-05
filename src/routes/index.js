const express = require('express')
const router = express.Router()

const routerAuth = require('./auth')
const routerProducts = require('./products')
const routerHistory = require('./history')

router.use('/products', routerProducts)
router.use('/history', routerHistory)
router.use('/auth', routerAuth)
module.exports = router