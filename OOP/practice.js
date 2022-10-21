class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount
    }
}

const anna = new User("Anna", "anna@yahoo.com")

// anna.email = "anna2022@gmail.com"

console.log(anna)
anna.makeDeposit(900)
console.log(anna)