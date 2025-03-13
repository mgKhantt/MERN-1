const express = require('express')
const StarterController = require('../controllers/StarterController')
const RoutingController = require('../controllers/RoutingController')
const Middleware = require('../middleware/middlewares')
const SessionAndCookieController = require('../controllers/SessionAndCookiesController')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')
const router = express.Router()
const routingRouter = express.Router()

//starter
router.get('/', StarterController.getHomePage)
router.get('/page1', StarterController.getPage1)
router.get('/page2', StarterController.getPage2)
router.get('/page3', StarterController.getPage3)
router.get('/page4', StarterController.getPage4)

//routing
routingRouter.use(Middleware.routingRouterMiddleware)
routingRouter.get('/routing/view-only', RoutingController.getViewOnly)
routingRouter.get('/routing/route-para/:color/:bgColor', RoutingController.getRoutePara)
routingRouter.post('/routing/route-para', RoutingController.postRoutePara)
routingRouter.get('/routing/middleware', RoutingController.getMiddlewarePage)
//middleware
routingRouter.post('/routing/middleware', Middleware.isAdult, RoutingController.postMiddlewarePage)

//session
router.get('/session-and-cookie/session', SessionAndCookieController.getSessionPage)
router.post('/session-and-cookie/session/create', SessionAndCookieController.postCreateSession)
router.post('/session-and-cookie/session/delete', SessionAndCookieController.postDeleteSession)

//cookie
router.get('/session-and-cookie/cookie', SessionAndCookieController.cookie)
router.post('/session-and-cookie/cookie/create/without-expiration', SessionAndCookieController.postCreateCookieWithoutExpiration)
router.post('/session-and-cookie/cookie/create/with-expiration', SessionAndCookieController.postCreateCookieWithExpiration)
router.post('/session-and-cookie/cookie/clear', SessionAndCookieController.postClearCookie)

//product list
router.get('/product-list', ProductController.getProductListPage)
router.get('/product-list/create-product', ProductController.getCreateProductPage)
router.post('/product-list/create-product', ProductController.postCreateProductPage)
router.post('/product-list/delete-product', ProductController.postDeleteProduct)
router.get('/product-list/:id/edit-product', ProductController.getEditProductPage)
router.post('/product-list/edit-product', ProductController.postEditProductPage)
router.post('/product-list/add-to-cart', ProductController.postAddToCart)

//cart
router.get('/cart-list', CartController.getCartPage);
router.post('/cart-list/delete-cart-item', CartController.postDeleteCartItem)
// router.post('/cart-list/plus-item', CartController.postPlusItem)
// router.post('/cart-list/minus-item', CartController.postMinusItem)
router.post('/cart-list/update-item', CartController.updateItemQuantity);

exports.router = router
exports.routingRouter = routingRouter