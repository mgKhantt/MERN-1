const { getHomePage } = require('../actions/home');
const { getPage1 } = require('../actions/page1');
const { getSendMessage, postSendMessage } = require('../actions/sendMessage');

const requestHandler = (req, res) => {

    const uri = req.url;
    const method = req.method;

    if (uri == "/") {
        getHomePage(req, res);
    }

    if (uri == "/page1") {
        getPage1(req, res);
    }

    if (uri == "/sendMessage" && method == "GET") {
        getSendMessage(req, res);
    }

    if (uri == "/sendMessage" && method == "POST") {
        postSendMessage(req, res);
    }
};

//default module system
module.exports = requestHandler;
