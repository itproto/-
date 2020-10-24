const { readFile } = require('fs').promises
const files = Array.from(Array(3)).fill(__filename)
const print = (data) => {
  console.log(Buffer.concat(data).toString())
}

const readers = files.map((file) => readFile(file))

Promise.all(readers)
  .then(print)
  .catch(console.error)