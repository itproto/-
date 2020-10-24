const { promisify } = require('util')
const { readFile } = require('fs')
const [ bigFile, mediumFile, smallFile ] = Array.from(Array(3)).fill(__filename)

const read = promisify((cb) => {
  let index = 0
  const print = (err, contents) => {
    index += 1
    if (err) {
      console.error(err)
      if (index === 3) cb()
      return
    }
    console.log(contents.toString())
    if (index === 3) cb()
  }
  readFile(bigFile, print)
  readFile(mediumFile, print)
  readFile(smallFile, print)
})

async function run () {
  await read()
  console.log('finished!')
}

run().catch(console.error)