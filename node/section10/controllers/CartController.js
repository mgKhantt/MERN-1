const Cart = require('../models/cart')

const getCartPage = (req, res) => {
    const cartItems = Cart.fetchAll(req)
    
    res.render('add-to-cart/cart-list', {
        docTitle: 'Cart List',
        pageTitle: 'Cart List',
        cartItems: cartItems,
    })
}

const postDeleteCartItem = (req, res) => {
    Cart.deleteCartItem(req)

    res.redirect('/cart-list')
}

// const postPlusItem = (req, res) => {
//     const id = req.body.id

//     const cartItem = req.session.cartItems.find(item => item.id == id)

//     if(cartItem) {
//         cartItem.quantity += 1
//     }

//     res.redirect('/cart-list')
// }

// const postMinusItem = (req, res) => {
//     const id = req.body.id

//     const cartItem = req.session.cartItems.find(item => item.id == id)

//     if(cartItem.quantity > 1) {
//         cartItem.quantity -= 1
//     }

//     res.redirect('/cart-list')
// }

const updateItemQuantity = (req, res) => {
    Cart.updateItemQuantity(req)

    res.redirect('/cart-list');
};



exports.getCartPage = getCartPage
exports.postDeleteCartItem = postDeleteCartItem
exports.updateItemQuantity = updateItemQuantity
// exports.postPlusItem = postPlusItem
// exports.postMinusItem = postMinusItem