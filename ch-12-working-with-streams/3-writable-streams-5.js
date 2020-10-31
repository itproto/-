'use strict'
const { Writable } = require('stream')
const createWriteStream = (data) => {
    return new Writable({
        objectMode: true, // default false
        write (chunk, enc, next) {
            console.log(`data: ${data}`)
            console.log(`chunk: ${chunk}`)
            data.push(chunk)
            next()
        }
    })
}
const data = []
const writable = createWriteStream(data)

writable.on('finish', () => { console.log('finished writing', data) })

writable.write('A\n')
// this will cause an error because
// we are writing a value that is not a string
writable.write(1) 
writable.end('nothing more to write')