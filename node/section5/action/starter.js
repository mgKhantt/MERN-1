const getPage1 = (req, res, next) => {
    res.send("<h1>This is page1</h1>");
}

const getPage2 = (req, res, next) => {
    res.send("<h1>This is page2</h1>");
}

const getPage3 = (req, res, next) => {
    res.send("<h1>This is page3</h1>");
}

exports.getPage1 = getPage1;
exports.getPage2 = getPage2;
exports.getPage3 = getPage3;
