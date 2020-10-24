const { EventEmitter } = require('events')
const myEmitter = new EventEmitter()

const some = (val) => `some ${val}`
const args = 'arguments'
myEmitter.emit('an-event', some, args)

class MyEmitter extends EventEmitter {
    constructor (opts = {}) {
      super(opts)
      this.name = opts.name
    }

    destroy (err) {
      if (err) { this.emit('error', err) }
      this.emit('close')
    }
}