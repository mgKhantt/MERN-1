const path = require('path');
const dirName = require('../utils/dirName');

const getHomePage = (req, res, next) => {
    res.sendFile(path.join(dirName, "views", "home.html"))
}

exports.getHomePage = getHomePage;  