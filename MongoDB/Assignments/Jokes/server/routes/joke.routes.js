const JokeController = require('../controllers/joke.controller')

module.exports = (app) => {
    app.get('/api/jokes', JokeController.getAllJokes)
    app.get('/api/jokes/:_id', JokeController.getOneJoke)
    app.post('/api/jokes', JokeController.createNewJoke)
    app.put('/api/jokes/:_id', JokeController.updateJoke)
    app.delete('/api/jokes/:_id', JokeController.deleteJoke)
}