const Product = require('../models/product.model')

module.exports.index = (req, res) => {
    res.json({message: "Hello World"})
}

module.exports.allProducts = (req, res) => {
    Product.find({})
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updated => res.json(updated))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(confirm => res.json(confirm))
    .catch(err => console.log(err))
}