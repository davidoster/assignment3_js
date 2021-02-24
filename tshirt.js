class TShirt {
    constructor(name, size, color, fabric) {
        this.name = name
        this.size = size
        this.color = color
        this.fabric = fabric
        this.price = 0
    }

    set name(value) {
        this._name = value 
    }

    get name() {
        return this._name.toUpperCase()
    }
    
    // setFabric(2) // from outside myTShirt.setFabric(2)
    set fabric(value) {
        this._fabric = value + 100
    }

    get fabric() {
        return this._fabric
    }

}

let myTShirt = new TShirt("aaa", 2, 3, 2)
console.log(myTShirt.fabric)
myTShirt.fabric = 4
console.log(myTShirt.fabric)
console.log(myTShirt._fabric)
console.log(myTShirt.name)