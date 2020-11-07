const assert = require('assert')
const obj = { id: 1, name: { first: 'David', second: 'Clements' } }

// This simple equality check won't work because 
// equality in Javascript is by reference for objects
assert.equal(obj, {
    id: 1, 
    name: { first: 'David', second: 'Clements' }
})