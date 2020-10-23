const { readFile } = require('fs')
const [ bigFile, mediumFile, smallFile ] = Array.from(Array(3)).fill(__filename)
/* console.log(__filename)
console.log(bigFile)
console.log(mediumFile)
console.log(smallFile)
 */
const data = []

const print = (err, contents) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(contents.toString())
}

readFile(bigFile, (err, contents) => {
    if (err) { 
        print(err)
    } else {
        data.push(contents)
    }
    readFile(mediumFile, (err, contents) => {
        if (err) { 
            print(err)
        } else {
            data.push(contents)
        }
        readFile(smallFile, (err, contents) => {
            if (err) { 
                print(err)
            } else {
                data.push(contents)
            }
            print(null, Buffer.concat(data))
        })
    })
})