const express = require('express')
const app = express()
const PORT = 8000

app.get("/", (req, res) => {
    res.json({
        message: "Hello, how are you?",
        food: "pizza",
        age: 26
    })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})