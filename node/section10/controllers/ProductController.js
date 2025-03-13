const Product = require("../models/product");

const getProductListPage = async(req, res) => {
    const products = await Product.fetchAll()
    res.render("add-to-cart/product-list", {
        docTitle: "Product List",
        pageTitle: "Product List",
        products: products,
    });
};

const getCreateProductPage = (req, res) => {
    res.render("add-to-cart/create-product", {
        docTitle: "Create Product",
        pageTitle: "Create Product",
    });
};

const postCreateProductPage = async(req, res) => {
    const product = new Product(
        // req.session.products.length + 1,
        req.body.image,
        req.body.name,
        req.body.price
    );

    await product.save()
    res.redirect("/product-list");
};

const postDeleteProduct = (req, res) => {
    Product.delete(req.body.id)
    res.redirect("/product-list");
};

const getEditProductPage = async(req, res) => {
    const product = await Product.getProductById(req.params.id);

    res.render("add-to-cart/edit-product", {
        docTitle: "Edit Product",
        pageTitle: "Edit Product",
        product: product,
    });
};

const postEditProductPage = async(req, res) => {
    const product = new Product(
        req.body.image,
        req.body.name,
        req.body.price,
    );
    await product.update(req.body.id);

    res.redirect("/product-list");
};

const postAddToCart = (req, res) => {
    Product.addToCart(req);

    res.redirect("/product-list");
};

exports.getProductListPage = getProductListPage;
exports.getCreateProductPage = getCreateProductPage;
exports.postCreateProductPage = postCreateProductPage;
exports.postDeleteProduct = postDeleteProduct;
exports.getEditProductPage = getEditProductPage;
exports.postEditProductPage = postEditProductPage;
exports.postAddToCart = postAddToCart;
