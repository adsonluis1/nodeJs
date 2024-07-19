const express = require('express')
const brasileiraoA = require('../controllers/brasileirao')
const router = express.Router()

router.post('/addTime', brasileiraoA.addTime)

module.exports = router