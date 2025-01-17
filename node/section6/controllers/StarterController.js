const path = require('path');
const dirName = require('../utils/dirName');

const getPage1 = (req, res, next) => {
    res.sendFile(path.join(dirName, "views", "page1.html"))
}

const getPage2 = (req, res, next) => {
    res.sendFile(path.join(dirName, "views", "page2.html"))
}

const getPage3 = (req, res, next) => {
    res.sendFile(path.join(dirName, "views", "page3.html"))
}

const getPage4 = (req, res, next) => {
    res.sendFile(path.join(dirName, "views", "page4.html"))
}

exports.getPage1 = getPage1;
exports.getPage2 = getPage2;
exports.getPage3 = getPage3;
exports.getPage4 = getPage4;