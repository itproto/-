'use strict'
const store = require('./store')

test('throw when supplied value is not a buffer', (done) => {
    store('I am not a buffer', (err, data) => {
        expect(data === undefined).toBe(true)
        expect(err).toStrictEqual(Error('input must be a buffer'))
        done()
    })
})

test('should pass when supplied value is a buffer', (done) => {
    const buffer = Buffer.from('node.js application developer')
    store(buffer, (err, data) => {
        expect(err === null).toBe(true)
        expect(typeof data.id).toBe('string')
        expect(data.id.length).toBe(4)
        done()    
    })
})
