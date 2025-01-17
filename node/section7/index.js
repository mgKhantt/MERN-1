const express = require('express');
const { router } = require('./routes/routes');

const app = express();
const port = 3000;

// Set the view engine to 'pug'
app.set('view engine', 'pug');

// Set the views directory
app.set('views', './section7/views');

app.use((req, res, next) => {
    console.log("This is middleware");
    next();
})

app.use(router)

app.listen(port)