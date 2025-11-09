var express = require('express');
var router = express.Router();

router.all('/*', function(req, res, next) {
    res.app.locals.layout = 'home';
    next();
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/index', { title: 'Home Page' });
});
router.get('/cart', function(req, res, next) {
    res.render('home/cart', { title: 'product Page' });
});

router.get('/checkout', function(req, res, next) {
    res.render('home/checkout', { title: 'about Page' });
});
router.get('/contact', function(req, res, next) {
    res.render('home/contact', { title: 'Contact Page' });
});
router.get('/detail', function(req, res, next) {
    res.render('home/detail', { title: 'product-detail Page' });
});
router.get('/shop', function(req, res, next) {
    res.render('home/shop', { title: 'shopping-cart Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
module.exports = router;


