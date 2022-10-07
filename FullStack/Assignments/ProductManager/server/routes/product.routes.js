const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api', ProductController.index)
    app.get('/api/all', ProductController.allProducts)
    app.post('/api/product', ProductController.createProduct)
}