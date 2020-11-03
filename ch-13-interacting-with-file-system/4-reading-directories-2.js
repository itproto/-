'use strict'
const { opendirSync } = require('fs')
const { createServer } = require('http')
const { Readable, Transform, pipeline } = require('stream')
const PORT = 3000

const createEntryStream = () => {
    let syntax = '[\n'

    return new Transform({
        writableObjectMode: true,
        readableObjectMode: false,
        transform(entry, encoding, next) {
            next(null, `${syntax} "${entry.name}"`)
            syntax = ',\n'
        },
        final (cb) {
            this.push('\n]\n')
            cb()
        }
    })
}

createServer((req, res) => {
    if (req.url !== '/') {
        res.statusCode = 404
        res.end('Not Found!')
        return
    }

    const dirStream = Readable.from(opendirSync(__dirname))
    const entryStream = createEntryStream()
    res.setHeader('Content-Type', 'application/json')

    pipeline(dirStream, entryStream, res, err => {
        if (err) {
            console.error(err)
        }

        console.log('Files list is available in the browser')
    })

    console.log(`Server is running on port ${PORT}`)
}).listen(PORT)