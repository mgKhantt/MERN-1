const { getDB } = require("../utils/database");
const mongodb = require("mongodb");

module.exports = class Product {
    constructor(image, name, price) {
        this.image = image;
        this.name = name;
        this.price = price;
    }

    save() {
        const db = getDB();
        return db
            .collection("products")
            .insertOne(this)
            .then(() => {
                console.log("Save successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDB();
        return db
            .collection("products")
            .find({})
            .toArray()
    }

    update(id) {
        const db = getDB();
        return db.collection("products")
            .updateOne({_id: new mongodb.ObjectId(id)}, {$set: this})
    }

    static delete(id) {
        // const productId = req.body.id;

        // Ensure products exist before filtering
        // if (req.session.products) {
        //     req.session.products = req.session.products.filter(
        //         (product) => product.id != productId
        //     );
        // }
        const db = getDB();
        return db
            .collection("products")
            .deleteOne({ _id: new mongodb.ObjectId(id) })
            // .then(() => {
            //     console.log("Delete successfully");
            //     if (req.session.cartItems) {
            //         req.session.cartItems = req.session.cartItems.filter(
            //             (item) => item.id != productId
            //         );
            //     }
            // })
            // .catch((err) => {
            //     console.log(err);
            // });

        // Ensure cart exists before filtering
        // if (req.session.cartItems) {
        //     req.session.cartItems = req.session.cartItems.filter(
        //         (item) => item.id != productId
        //     );
        // }
    }

    static getProductById(id) {
        const db = getDB();
        return db
            .collection("products")
            .find({ _id: new mongodb.ObjectId(id) })
            .next()
    }

    static addToCart(req) {
        const id = req.body.id;
        const product = req.session.products.find(
            (product) => product.id == id
        );
        const productExistsInCart = req.session.cartItems.find(
            (cartItems) => cartItems.id == product.id
        );

        if (!productExistsInCart) {
            product.quantity = 1;
            req.session.cartItems.push(product);
        } else {
            productExistsInCart.quantity += 1;
        }
    }
};
