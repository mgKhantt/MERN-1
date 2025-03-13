const routingRouterMiddleware = (req, res, next) => {
    console.log("This is Router Level Middleware");
    next();
}

const isAdult = (req, res, next) => {
    const age = req.body.age ? req.body.age : "No Message"

    if( age >= 18) {
        next();
    } else {
        res.status(403).send(`Your age is ${age}. You are not allowed to view this page`);
    }
}

exports.routingRouterMiddleware = routingRouterMiddleware;
exports.isAdult = isAdult;


