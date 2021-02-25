class PaymentStrategy {
    constructor(paymenttype) {
        this.type = paymenttype
        // console.log(this.type)
    }

    set type(value) {
        this._type = value
    }

    get type() {
        return this._type // CreditDebit || MoneyBank || Cash
    }

    pay() {
        return this.type.pay()
    }
}

module.exports = PaymentStrategy