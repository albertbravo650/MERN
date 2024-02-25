const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    app.post('/api/pet', PetController.createPet)
    app.get('/api/pets', PetController.getAllPets)
    app.get('/api/pet/:id', PetController.getPet)
    app.put('/api/pet/:id', PetController.updatePet)
    app.delete('/api/pet/:id', PetController.deletePet)
}