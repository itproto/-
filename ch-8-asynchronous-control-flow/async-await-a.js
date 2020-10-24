const { readFile } = require('fs').promises
const print = (contents) => {
  console.log(contents.toString())
}
const [ bigFile, mediumFile, smallFile ] = Array.from(Array(3)).fill(__filename)

async function run () {
  print(await readFile(bigFile))
  print(await readFile(mediumFile))
  print(await readFile(smallFile))
}

run().catch(console.error)

async function run2 () {
  const data = [
    await readFile(bigFile),
    await readFile(mediumFile),
    await readFile(smallFile)
  ]
  print(Buffer.concat(data))
}

run2().catch(console.error)