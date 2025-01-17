const { log } = require("console");
const fs = require("fs");
const getSendMessage = (req, res) => {
    res.write(`
        <html>
            <head>
                <title>Home page</title>
            </head>
            <body>
                <form action="/sendMessage" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
    `);
    res.end();
};

const postSendMessage = (req, res) => {
    const body = [];

    req.on("data", (chunk) => {
        body.push(chunk);
    });

    req.on("end", () => {
        const parseBody = Buffer.concat(body).toString();
        console.log(parseBody);
        const message = parseBody.split("=")[1] + "\n";
        console.log(message);

        fs.appendFile("./section4/message.txt", message, (err) => {
            res.statusCode = 302;
            res.setHeader("Location", "/sendMessage");
            res.end();
        });
    });
};

exports.getSendMessage = getSendMessage;
exports.postSendMessage = postSendMessage;
