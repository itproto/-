function factory () {
    return function doSomething () {}
}

setTimeout(function () { console.log('hello from the future') }, 100)

const obj = { id: 999, fn: function () { console.log(this.id) } }
const obj2 = { id: 2, fn: obj.fn }
obj2.fn() // prints 2
obj.fn() // prints 999

function fn() { console.log(this.id) }
const obj3 = { id: 333 }
const obj4 = { id: 4 }
fn.call(obj4) // prints 4
fn.call(obj3) // prints 333
fn.call(obj) // prints 999
fn.call({id: ':)'}) // prints :)

function fn1() {
    return (offset) => {
        // console.log(this.id + offset)
        return this.id + offset
    }
}

const obj5 = { id: 555 }
const offsetter = fn1.call(obj5)
const result = offsetter(10)
console.log(result) // prints 556 (555 + 10)

function normalFunction () {}
const fatArrowFunction = () => {}
console.log(typeof normalFunction.prototype) // prints 'object'
console.log(typeof fatArrowFunction.prototype) // prints 'undefined'