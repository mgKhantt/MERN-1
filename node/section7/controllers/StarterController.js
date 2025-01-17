// const path = require('path');
// const dirName = require('../utils/dirName');

const getHomePage = (req, res) => {
    // res.sendFile(path.join(dirName, "views", "home.html"))

    const buttons = [
        {
            type: 'primary',
            name: "Primary Button"
        },
        {
            type: 'secondary',
            name: "Secondary Button"
        },
        {
            type: 'danger',
            name: "Danger Button"
        }
    ]

    const listItems = [
        {
            data: "Item 1"
        },
        {
            data: "Item 2"
        },
        {
            data: "Item 3"
        },
        {
            data: "Item 4"
        }
    ]

    //list item for homework

    res.render('home', {
        docTitle: "home",
        pageTitle: "Home Page",
        buttons: buttons,
        listItems: listItems,
    })
}

const getPage1 = (req, res) => {
    res.render('page1', {
        docTitle: "page1",
        pageTitle: "Page 1",
    })
}

const getPage2 = (req, res) => {
    res.render('page2', {
        docTitle: "page2",
        pageTitle: "Page 2",
    })
}

const getPage3 = (req, res) => {
    res.render('page3', {
        docTitle: "page3",
        pageTitle: "Page 3",
    })
}

exports.getHomePage = getHomePage;
exports.getPage1 = getPage1;
exports.getPage2 = getPage2;
exports.getPage3 = getPage3;