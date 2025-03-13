const getHomePage = (req, res) => {
    console.log(req.session.products);
    
    const lists1 = ['item1', 'item2', 'item3', 'item4', 'item5']

    res.render('starters/home', {
        docTitle: "Home Page",
        pageTitle: "Welcome to the Home Page",
        lists1: lists1
    })
}

const getPage1 = (req, res) => {
    console.log(req.session.products);

    res.render('starters/page1', {
        docTitle: "Page 1",
        pageTitle: "Welcome to Page 1"
    })
}

const getPage2 = (req, res) => {
    console.log(req.session.products);

    res.render('starters/page2', {
        docTitle: "Page 2",
        pageTitle: "Welcome to Page 2"
    })
}

const getPage3 = (req, res) => {
    console.log(req.session.products);

    res.render('starters/page3', {
        docTitle: "Page 3",
        pageTitle: "Welcome to Page 3"
    })
}

const getPage4 = (req, res) => {
    console.log(req.session.products);

    res.render('starters/page4', {
        docTitle: "Page 4",
        pageTitle: "Welcome to Page 4"
    })
}

exports.getHomePage = getHomePage
exports.getPage1 = getPage1
exports.getPage2 = getPage2
exports.getPage3 = getPage3
exports.getPage4 = getPage4
