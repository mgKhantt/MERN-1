const express = require("express");
const { getPage1, getPage2, getPage3 } = require("../action/starter");
const { getHomePage } = require("../action/home");
const { getMessage, postMessage } = require("../action/send-message");
const router = express.Router();

router.get("/", getHomePage);
router.get("/page1", getPage1);
router.get("/page2", getPage2);
router.get("/page3", getPage3)
router.get("/send-message", getMessage);
router.post("/send-message", postMessage);
exports.routes = router;