const { EventEmitter } = require('events')

const ee = new EventEmitter()
ee.on('close', () => { console.log('close event fired!') })
// same as
/* ee.addListener('close', () => {
    console.log('close event fired!')
}) */

ee.emit('close')

ee.on('add', (a, b) => { console.log(a + b) }) // logs 13
ee.emit('add', 7, 6)

ee.on('my-event', () => { console.log('2nd') })
ee.on('my-event', () => { console.log('3rd') })
ee.prependListener('my-event', () => { console.log('1st') })
ee.emit('my-event')