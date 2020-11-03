'use strict'
const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const contents = readFileSync(__filename)
console.log(contents)

const contentsEncoded = readFileSync(__filename, { encoding: 'utf8' })
console.log(contentsEncoded)

writeFileSync(join(__dirname, 'out.txt'), contentsEncoded.toUpperCase(), { flag: 'a' })