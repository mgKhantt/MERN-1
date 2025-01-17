const express = require('express');
const HomeController = require('../controllers/HomeController');
const StarterController = require('../controllers/StarterController');

const router = express.Router();

router.get('/', HomeController.getHomePage)
router.get('/page1', StarterController.getPage1)
router.get('/page2', StarterController.getPage2)
router.get('/page3', StarterController.getPage3)
router.get('/page4', StarterController.getPage4)

exports.router = router;