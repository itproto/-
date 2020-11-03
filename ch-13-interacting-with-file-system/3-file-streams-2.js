'use strict'
const { pipeline, Transform } = require('stream')
const { join } = require('path')
const { createReadStream, createWriteStream  } = require('fs')

const file = join(__dirname, 'out.txt')

const createUpperCaseStream = () => {
    return new Transform({
        transform(chunk, encoding, next) {
            const uppercased = chunk.toString().toUpperCase()
            next(null, uppercased)
        } 
    })
}

pipeline(
    createReadStream(__filename),
    createUpperCaseStream(),
    createWriteStream(file), 
    err => {
        if (err) {
            console.error(err)
            return
        } else {
            console.log('finished writing file')
        }
    }
)