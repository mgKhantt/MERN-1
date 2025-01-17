const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("This line is always executed and this is middleware");
    next();
})

app.use(router)

app.listen(3000);