'use strict'
const { pipeline } = require('stream')
const { join } = require('path')
const { createReadStream, createWriteStream  } = require('fs')

const file = join(__dirname, 'out.txt')

pipeline(
    createReadStream(__filename),
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