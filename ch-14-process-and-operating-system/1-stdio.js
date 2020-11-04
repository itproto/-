const crypto = require('crypto')
const randomBytes = crypto.randomBytes(100).toString('hex')
console.log(randomBytes)