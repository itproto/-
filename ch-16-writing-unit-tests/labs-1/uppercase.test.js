'use strict'
const uppercase = require('./uppercase')

test('throw when supplied value is not a string', async () => {
    expect(() => uppercase(5)).toThrowError(Error('input must be a string'))
})

test('should pass when supplied value is a string', async () => {
    const str = 'node.js application developer'
    expect(uppercase(str)).toBe('NODE.JS APPLICATION DEVELOPER')
})
