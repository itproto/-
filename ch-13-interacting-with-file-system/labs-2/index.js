'use strict'
const assert = require('assert')
const { join, basename } = require('path')
const fs = require('fs')
const project = join(__dirname, 'project')
try { fs.rmdirSync(project, {recursive: true}) } catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2))
})
fs.mkdirSync(project)
for (const f of files) fs.closeSync(fs.openSync(f, 'w'))

const out = join(__dirname, 'out.txt')
fs.writeFileSync(out, '')

function exercise () {
  // TODO read the files in the project folder
  // and write the to the out.txt file
  const totalFiles = files.length
  let fileCount = 1

  for(const fileName of files) {
    const file =  fileCount < totalFiles ? `${basename(fileName)},` : basename(fileName)
    fs.writeFileSync(out, file , {flag: 'a'})
    fileCount++
  }
}

exercise()
assert.deepStrictEqual(
  fs.readFileSync(out).toString().split(',').map((s) => s.trim()),
  files.map((f) => basename(f))
)
console.log('passed!')