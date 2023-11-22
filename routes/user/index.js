const router = require('express').Router();

const { authentication } = require('../../middlewares/authMiddleware');
const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter');
const orderRouter = require('./orderRouter');

router.use('/products', productRouter);
router.use('/cart', authentication, cartRouter);
router.use('/order', authentication, orderRouter);

module.exports = router;