const getViewOnly = (req, res) => {
    res.render('routing/view-only', {
        docTitle: "View Only",
        pageTitle: "View Only"
    })
}

const getRoutePara = (req, res) => {
    console.log(req.params);
    
    const color = req.params.color
    const bgColor = req.params.bgColor
    res.render('routing/route-para', {
        docTitle: "Route-para",
        pageTitle: "Route para",
        color: color,
        bgColor: bgColor,
    })
}

const postRoutePara = (req, res) => {
    const color = req.body.color
    const bgColor = req.body.bgColor

    return res.redirect(`/routing/route-para/${color}/${bgColor}`)
}

const getMiddlewarePage = (req, res) => {
    res.render('routing/middleware', {
        docTitle: "Middleware",
        pageTitle: "Middleware",
        message: "No Message",
    })
}

const postMiddlewarePage = (req, res) => {
    return res.redirect('/')
}

exports.getViewOnly = getViewOnly
exports.getRoutePara = getRoutePara
exports.postRoutePara = postRoutePara   
exports.getMiddlewarePage = getMiddlewarePage
exports.postMiddlewarePage = postMiddlewarePage