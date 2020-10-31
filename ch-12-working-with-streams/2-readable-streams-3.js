'use strict'
const { Readable } = require('stream')
const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    encoding: 'utf8',
    read () {
      if (data.length === 0) {
          this.push(null)
      } else {
          // this block will execute 4 times equal as data length
        this.push(data.shift())
      }
    }
  })
}
const readable = createReadStream()
readable.on('data', (data) => { console.log('got data', data) })
readable.on('end', () => { console.log('finished reading') })