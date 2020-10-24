const { readFile } = require('fs').promises
const [ bigFile, mediumFile, smallFile ] = Array.from(Array(3)).fill(__filename)

const print = (contents) => {
  console.log(contents.toString())
}

async function run () {
  const big = readFile(bigFile)
  const medium = readFile(mediumFile)
  const small = readFile(smallFile)

  big.then(print)
  medium.then(print)
  small.then(print)

  await small
  await medium
  await big
}

run().catch(console.error)