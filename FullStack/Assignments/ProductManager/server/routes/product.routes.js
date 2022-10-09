const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api', ProductController.index)
    app.get('/api/products', ProductController.allProducts)
    app.post('/api/product', ProductController.createProduct)
    app.get('/api/product/:id', ProductController.getProduct)
}