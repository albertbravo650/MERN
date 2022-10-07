const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Established connection with DB'))
.catch(err => console.log('Something went wrong connecting to DB', err))