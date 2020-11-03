'use strict'
const { join } = require('path')
const { readFile, writeFile } = require('fs').promises

async function run() {
  const contents = await readFile(__filename, { encoding: 'utf8' })
  const file = join(__dirname, 'out.txt')
  await writeFile(file, contents.toUpperCase())
}

run().catch(console.error)