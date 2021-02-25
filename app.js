var TShirt = require('./tshirt')
var CreditDebit = require('./creditdebit')

// console.log(new Color().colors)


// let myTShirt = new TShirt(true, "AAA", 'XS', 'RED', 'WOOL')
// console.log(myTShirt)
// console.log(`${myTShirt.name}, ${myTShirt.size}, ${myTShirt.color}, ${myTShirt.fabric}`)

// let myTShirt2 = new TShirt(false, "AAA", 'XS', 'RED', 'SILK')
// console.log(myTShirt2)
// console.log(`${myTShirt2.name}, ${myTShirt2.size}, ${myTShirt2.color}, ${myTShirt2.fabric}`)

for(let i = 0; i < 15; i++) {
    console.log(new TShirt(true))
}

var creditDebitPayment = new CreditDebit(new TShirt(true))
console.log(creditDebitPayment.pay())