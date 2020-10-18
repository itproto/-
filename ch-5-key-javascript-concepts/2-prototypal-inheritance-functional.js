const wolf = {
    howl: function () { console.log(this.name + ': awoooooooo') }
}
  
const dog = Object.create(wolf, {
    woof: { value: function() { console.log(this.name + ': woof') } }
})

const rufus = Object.create(dog, {
    name: {value: 'Rufus the dog'}
})

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"

function createDog (name) {
    return Object.create(dog, {
      name: {value: name + ' the dog'}
    })
}

const rufus1 = createDog('Rufus')

rufus1.woof() // prints "Rufus the dog: woof"
rufus1.howl() // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === dog) //true
console.log(Object.getPrototypeOf(dog) === wolf) //true