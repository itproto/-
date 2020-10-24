const { EventEmitter: EE } = require('events')
const EventEmitter = require('events')
console.log(EE)
console.log(EventEmitter)

const myEmitter = new EventEmitter()
console.log(myEmitter)

class MyEmitter extends EventEmitter {
    constructor (opts = {}) {
      super(opts)
      this.name = opts.name
    }
}

const emt = new MyEmitter({name: 'Hafeez'})
console.log(emt)