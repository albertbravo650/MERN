const express = require('express')
const app = express()
const PORT = 8000

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}))

const JokeRoutes = require('./routes/joke.routes')
JokeRoutes(app)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))