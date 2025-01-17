const express = require('express')
const StarterController = require('../controllers/StarterController')
const router = express.Router()

router.get('/', StarterController.getHomepage)

exports.router = router