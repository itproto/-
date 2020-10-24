const { readFile } = require('fs').promises
const files = Array.from(Array(3)).fill(__filename)
const data = []
const print = (contents) => {
  console.log(contents.toString())
}
let count = files.length
let index = 0
const read = (file) => {
  return readFile(file).then((contents) => {
    index += 1
    data.push(contents)
    if (index < count) return read(files[index])
    return data
  })
}

read(files[index])
  .then((data) => {
    print(Buffer.concat(data))
  })
  .catch(console.error)