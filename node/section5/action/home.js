const getHomePage = (req, res, next) => {
    res.send("<h1>This is the home page</h1>");
}

exports.getHomePage = getHomePage;