const express = require('express')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')
const HistoryController = require('../controllers/historyController')
router
    .get('/', verifyAccess, HistoryController.view)
    .post('/create', verifyAccess, HistoryController.create)
module.exports = router