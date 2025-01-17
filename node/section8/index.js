const express = require('express')
const {router} = require('./routes/routes')

const expressHbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('hbs', expressHbs())
app.set('view engine', 'hbs')
app.set('views', './section8/views')

app.use((req, res, next) => {
    console.log("This is middleware");
    next();
})

app.use(router)

app.listen(port)