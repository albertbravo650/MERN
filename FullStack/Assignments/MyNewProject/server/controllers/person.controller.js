const Person = require('../models/person.model')

module.exports.index = (req, res) => {
    res.json({message: "Hello World"})
}

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
    .then(person => res.json(person))
    .catch(err => res.json(err))
}

module.exports.getAllPeople = (req, res) => {
    Person.find({})
    .then(people => res.json(people))
    .catch(err => res.json(err))
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id: req.params.id})
    .then(person => res.json(person))
    .catch(err => res.json(err))
}