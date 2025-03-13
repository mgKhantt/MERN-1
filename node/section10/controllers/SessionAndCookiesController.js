//session
const getSessionPage = (req, res) => {
    console.log(req.session.user);
    const user = req.session.user ? req.session.user : null;
    
    res.render("cookie-and-session/session", {
        pageTitle: "Session",
        docTitle: "Session",
        user: user,
    });
};

const postCreateSession = (req, res) => {
    console.log("Session Created");
    const name = req.body.name
    const age = req.body.age
    const address = req.body.address
    const about = req.body.about

    const user = {
        name: name,
        age: age,
        address: address,
        about: about,
    }

    req.session.user = user;
    res.redirect("/session-and-cookie/session");
    
}

const postDeleteSession = (req, res) => {
    delete req.session.user;

    res.redirect("/session-and-cookie/session");
}

//cookie
const cookie = (req, res) => {
    const website_color = req.cookies.website_color;
    const header_color = req.cookies.header_color;

    res.render("cookie-and-session/cookie", {
        pageTitle: "Cookies",
        docTitle: "Cookie",
        website_color: website_color,
        header_color: header_color,
    });
};

const postCreateCookieWithoutExpiration = (req, res) => {
    const website_color = req.body.website_color;

    res.cookie("website_color", website_color);
    res.redirect("/session-and-cookie/cookie");
};

const postCreateCookieWithExpiration = (req, res) => {
    const header_color = req.body.header_color;
    const expirationTime = 1000 * 5;

    res.cookie("header_color", header_color, { maxAge: expirationTime });
    res.redirect("/session-and-cookie/cookie");
};

const postClearCookie = (req, res) => {
    res.clearCookie('header_color');
    res.clearCookie('website_color');
    res.redirect('/session-and-cookie/cookie');
}


exports.getSessionPage = getSessionPage;
exports.postCreateSession = postCreateSession;
exports.postDeleteSession = postDeleteSession;

exports.cookie = cookie;
exports.postCreateCookieWithoutExpiration = postCreateCookieWithoutExpiration;
exports.postCreateCookieWithExpiration = postCreateCookieWithExpiration;
exports.postClearCookie = postClearCookie;
