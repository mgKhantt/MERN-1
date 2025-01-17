const fs = require("fs");

const getMessage = (req, res, next) => {
    res.send(`
        <html>
            <head>
                <title>Home page</title>
            </head>
            <body>
                <form action="/send-message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
    `);
}

const postMessage = (req, res, next) => {
    const message = req.body.message+ "\n";

    fs.appendFile("./section5/message.txt", message, (err) => {
        res.redirect("/send-message");
    })
}

exports.getMessage = getMessage;
exports.postMessage = postMessage;
