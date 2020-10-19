const util = require('util')

function Wolf (name) {
    this.name = name
}
  
Wolf.prototype.howl = function () {
    console.log(this.name + ': awoooooooo')
}

const wolf = new Wolf('Rax')

console.log(wolf)
console.log(wolf.howl())

function Dog (name) {
    Wolf.call(this, name + ' the dog')
}

console.log(new Dog('Lo')) // Dog { name: 'Lo the dog' }

function inherit (proto) {
    function ChainLink(){}
    ChainLink.prototype = proto
    return new ChainLink()
}

Dog.prototype = inherit(Wolf.prototype)

Dog.prototype.woof = function () {
    console.log(this.name + ': woof')
}

const rufus = new Dog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === Dog.prototype) //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype) //true

// util.inherits(Dog.prototype, Wolf.prototype)
// Object.setPrototypeOf(Dog.prototype, Wolf.prototype)
