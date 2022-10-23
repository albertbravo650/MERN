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

const account1 = new BankAccount(0.02)
const account2 = new BankAccount(0.03, 500)

account1.deposit(50).deposit(25).deposit(25).withdraw(50).yieldInterest().displayAccountInfo()

account2.deposit(200).deposit(100).withdraw(400).withdraw(50).withdraw(50).withdraw(100).yieldInterest().displayAccountInfo()