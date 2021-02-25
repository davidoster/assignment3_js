var TShirt = require('./tshirt')
var Color = require('./color')

console.log(new Color().colors)


let myTShirt = new TShirt(true, "AAA", 'XS', 'RED', 'WOOL')
console.log(myTShirt)
console.log(`${myTShirt.name}, ${myTShirt.size}, ${myTShirt.color}, ${myTShirt.fabric}`)

let myTShirt2 = new TShirt(false, "AAA", 'XS', 'RED', 'WOOL')
console.log(myTShirt2)
console.log(`${myTShirt2.name}, ${myTShirt2.size}, ${myTShirt2.color}, ${myTShirt2.fabric}`)

