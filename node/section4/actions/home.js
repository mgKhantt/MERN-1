const getHomePage = (req, res) => {
    res.write(`
        <html>
            <head>
                <title>Home page</title>
            </head>
            <body>
                <h1>This is home page</h1>
            </body>
        </html>
    `);
    res.end()
}

//name module system
module.exports = {
    getHomePage
};