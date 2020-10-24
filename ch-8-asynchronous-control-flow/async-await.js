const { readFile } = require('fs').promises

async function run () {
  const contents = await readFile(__filename)
  console.log(contents.toString())
}

run().catch(console.error)