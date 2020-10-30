const buffer = Buffer.from('👀')

const bufferJson = buffer.toJSON()
console.log(bufferJson) // { type: 'Buffer', data: [ 240, 159, 145, 128 ] }

const jsonStringify = JSON.stringify(buffer)
console.log(jsonStringify) // {"type":"Buffer","data":[240,159,145,128]}

const jsonParsed = JSON.parse(jsonStringify)
console.log(jsonParsed) // { type: 'Buffer', data: [ 240, 159, 145, 128 ] }

console.log(jsonParsed.data) // [ 240, 159, 145, 128 ]

console.log(Buffer.from(jsonParsed.data)) // prints <Buffer f0 9f 91 80>