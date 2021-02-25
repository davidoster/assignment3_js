var TShirt = require('./tshirt')
var CreditDebit = require('./creditdebit')
var MoneyBank = require('./moneybank')
var Cash = require('./cash')
var PaymentStrategy = require('./paymentstrategy')

// console.log(new Color().colors)


// let myTShirt = new TShirt(true, "AAA", 'XS', 'RED', 'WOOL')
// console.log(myTShirt)
// console.log(`${myTShirt.name}, ${myTShirt.size}, ${myTShirt.color}, ${myTShirt.fabric}`)

// let myTShirt2 = new TShirt(false, "AAA", 'XS', 'RED', 'SILK')
// console.log(myTShirt2)
// console.log(`${myTShirt2.name}, ${myTShirt2.size}, ${myTShirt2.color}, ${myTShirt2.fabric}`)

// for(let i = 0; i < 15; i++) {
//     console.log(new TShirt(true))
// }

var myTShirt = new TShirt(true)
// console.log(myTShirt.toString())

// console.log(new CreditDebit(myTShirt).pay())
// console.log(new MoneyBank(myTShirt).pay())
// console.log(new Cash(myTShirt).pay())

var cd = new CreditDebit(myTShirt)
var mb = new MoneyBank(myTShirt)
var cash = new Cash(myTShirt)

var paymentStrategy = new PaymentStrategy()
paymentStrategy.type = cd // (mb) (cash)
console.log(paymentStrategy.pay())

paymentStrategy.type = mb // (mb) (cash)
console.log(paymentStrategy.pay())

paymentStrategy.type = cash // (mb) (cash)
console.log(paymentStrategy.pay())