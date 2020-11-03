'use strict'
const { join } = require('path')

console.log('current filename', __filename)
console.log('current dirname', __dirname)
console.log('out file:', join(__dirname, 'out.txt'))