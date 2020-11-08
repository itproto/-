'use strict'
global.setTimeout = require('timers').setTimeout
const store = require('./store')

test('throw when supplied value is not a buffer', async () => {
    const result = store('I am not a buffer')

    await expect(result)
    .rejects
    .toStrictEqual(Error('input must be a buffer'))
})

test('should pass when supplied value is a buffer', async () => {
    const buffer = Buffer.from('node.js application developer')
    const data = await store(buffer)

    expect(typeof data.id).toBe('string')
    expect(data.id.length).toBe(4)
})
