const express = require("express");
const bodyParser = require("body-parser");
const { routes } = require("./routes/routes");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

// Middleware
app.use((req, res, next) => {
    console.log("This is middleware");
    next();
});

app.use(routes)

app.listen(3000);