const { Router } = require('express');
const productControllers = require('../controllers/productControllers');
const router = Router();

router.get('/products', productControllers.get_products);
router.post('/products',productControllers.post_product);
router.put('/products/:id',productControllers.update_product);
router.delete('/products/:id',productControllers.delete_product);

module.exports = router;