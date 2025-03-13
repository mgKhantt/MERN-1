const express = require('express');
const { router, routingRouter } = require('./routers/routes');
const expressEjsLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SessionProducts = require('./middleware/sessionProducts');
const {mongoClient} = require('./utils/database');

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
    secret: 'xz6ANTkBYbe6reuSdrQkOz',
    saveUninitialized: true,
    resave: true,
}))

app.set('layout', './layouts/app.ejs')
app.set('view engine', 'ejs')
app.set('views', 'section10/views')
app.use(expressEjsLayout)

app.use(SessionProducts.products, SessionProducts.cartItems)

app.use(router)
app.use(routingRouter)

mongoClient(()=> {
    app.listen(port)
})