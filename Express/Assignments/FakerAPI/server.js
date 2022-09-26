const express = require('express')
const app = express()
const PORT = 8000
const {faker} = require('@faker-js/faker')

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    }
    return newUser
}

app.get('/api/users/new', (req, res) => {
    const user = createUser()
    res.json(user)
})

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany
}

app.get('/api/companies/new', (req, res) => {
    const company = createCompany()
    res.json(company)
})

app.get('/api/user/company', (req, res) => {
    const company = createCompany()
    const user = createUser()
    res.json({user, company})
})
