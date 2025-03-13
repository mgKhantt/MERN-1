const products = (req, res, next) => {
    if(!req.session.products) {
        req.session.products = [
            {
                id: 1,
                image: "https://incredideals.co/cdn/shop/files/MYPD3ref_VW_34FR_watch-case-49-titanium-black-ultra2_VW_34FR_watch-face-49-ocean-ultra2_VW_34FR_GEO_AE.webp?v=1737334330",
                name: "Apple Watch Ultra 1",
                price: "799"

            },
            {
                id: 2,
                image: "https://incredideals.co/cdn/shop/files/MYPD3ref_VW_34FR_watch-case-49-titanium-black-ultra2_VW_34FR_watch-face-49-ocean-ultra2_VW_34FR_GEO_AE.webp?v=1737334330",
                name: "Apple Watch Ultra 2",
                price: "799"

            },
        ]
    }
    console.log('This is Application Level Middleware with Products')
    next()
}

const cartItems = (req, res, next) => {
    if(!req.session.cartItems) {
        req.session.cartItems = []
    }

    res.locals.totalQuantity = req.session.cartItems.reduce((total, item) => total + item.quantity, 0)
    
    console.log('This is Application Level Middleware with Cart Items');
    // console.log('Total Quantity:', req.session.totalQuantity);

    next()
}

exports.products = products
exports.cartItems = cartItems