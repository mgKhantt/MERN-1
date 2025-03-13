module.exports = class Cart {
    static fetchAll(req) {
        return req.session.cartItems || []
    }

    static deleteCartItem(req) {
        const id = req.body.id

        req.session.cartItems = req.session.cartItems.filter(cartItems => cartItems.id != id)
    }

    static updateItemQuantity(req) {
        const { id, action } = req.body;

        const cartItem = req.session.cartItems.find(item => item.id == id);

        if (cartItem) {
            if (action === 'plus') {
                cartItem.quantity += 1;
            } else if (action === 'minus' && cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            }
        }
    }
}