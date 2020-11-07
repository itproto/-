const assert = require('assert')
const obj = { id: 1, name: { first: 'David', second: 'Clements' } }

assert.deepEqual(obj, {
    id: '1', 
    name: { first: 'David', second: 'Clements' }
})

// this will fail becuase id is string
assert.strict.deepEqual(obj, {
    id: '1', 
    name: { first: 'David', second: 'Clements' }
})