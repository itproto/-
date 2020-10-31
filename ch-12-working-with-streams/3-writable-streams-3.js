'use strict'
const { Writable } = require('stream')
const createWriteStream = (data) => {
    return new Writable({
        decodeStrings: false, // default true
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
writable.write('B\n')
writable.write('C\n')
writable.end('nothing more to write')