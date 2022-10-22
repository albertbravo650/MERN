class User{ 
    constructor(name) {
        this.name = name
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount
    }

    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`)
    }

    transferMoney(otherUser, amount) {
        this.accountBalance -= amount
        otherUser.accountBalance += amount
    }
}

const albert = new User("Albert Bravo")
const elon = new User("Elon Musk")
const lana = new User("Lana del Rey")

albert.makeDeposit(50)
albert.makeDeposit(100)
albert.makeDeposit(200)
albert.makeWithdrawal(50)
albert.displayBalance()

elon.makeDeposit(500)
elon.makeDeposit(400)
elon.makeWithdrawal(50)
elon.makeWithdrawal(150)
elon.displayBalance()

lana.makeDeposit(5000)
lana.makeWithdrawal(100)
lana.makeWithdrawal(200)
lana.makeWithdrawal(100)
lana.displayBalance()

albert.transferMoney(lana, 100)
albert.displayBalance()
lana.displayBalance()