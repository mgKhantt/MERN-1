const getPage1 = (req, res) => {
    req.write(`
        <html>
            <head>
                <title>Home page</title>
            </head>
            <body>
                <h1>This is home page2</h1>
            </body>
        </html>
    `);
    req.end()
}

module.exports = {
    getPage1
};