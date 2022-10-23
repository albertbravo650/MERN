class User{ 
    constructor(name) {
        this.name = name
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount
        return this
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount
        return this
    }

    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`)
        return this
    }

    transferMoney(otherUser, amount) {
        this.accountBalance -= amount
        otherUser.accountBalance += amount
        return this
    }
}

const albert = new User("Albert Bravo")
const elon = new User("Elon Musk")
const lana = new User("Lana del Rey")

albert.makeDeposit(50).makeDeposit(100).makeDeposit(200).makeWithdrawal(50).displayBalance()

elon.makeDeposit(500).makeDeposit(400).makeWithdrawal(50).makeWithdrawal(150).displayBalance()

lana.makeDeposit(5000).makeWithdrawal(100).makeWithdrawal(200).makeWithdrawal(100).displayBalance()

albert.transferMoney(lana, 100)
albert.displayBalance()
lana.displayBalance()