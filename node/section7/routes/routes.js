const express = require('express');
const StarterController = require('../controllers/StarterController');
const router = express.Router();

router.get('/', StarterController.getHomePage);
router.get('/page1', StarterController.getPage1);
router.get('/page2', StarterController.getPage2);
router.get('/page3', StarterController.getPage3);

exports.router = router;