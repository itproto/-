'use strict'
const assert = require('assert')

const isValidURL = (url) => {
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);

  return url.match(regex)
}

function parseUrl (str) {
  if (!isValidURL(str)) {
    return null
  }

  return new URL(str)
}

assert.doesNotThrow(() => { parseUrl('invalid-url') })
assert.equal(parseUrl('invalid-url'), null)
assert.deepEqual(
  parseUrl('http://example.com'), 
  new URL('http://example.com')
)
console.log('passed!')