class BankAccount {
    constructor(intRate, balance) {
        this.intRate = intRate
        if (balance === undefined) {
            this.balance = 0
        }
        else {
            this.balance = balance
        }
    }

    deposit(amount) {
        this.balance += amount
        return this
    }

    withdraw(amount) {
        if ((this.balance - amount) < 0) {
            console.log("Insufficient funds: Charging a $5 fee")
            this.balance -= 5
            return this
        }
        else {
            this.balance -= amount
            return this
        }
    }

    displayAccountInfo() {
        console.log(`Balance: $${this.balance}`)
        return this
    }

    yieldInterest() {
        this.balance = (this.balance * this.intRate) + this.balance
        return this
    }
}

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.account = new BankAccount()
        this.accounts = []
    }

    userDeposit(amount) {
        this.account.deposit(amount)
        return this
    }

    userWithdraw(amount) {
        this.account.withdraw(amount)
        return this
    }

    userInfo() {
        this.account.displayAccountInfo()
        return this
    }
}

const user1 = new User("Albert", "albert@gmail.com")

user1.userInfo()