const buffer = Buffer.from('hello world')
console.log(buffer) // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

console.log('👀'.length) // will print 2
const buff1 = Buffer.from('👀')
console.log(buff1) // default UTF8 encoding => <Buffer f0 9f 91 80> = 4 bytes
console.log(buff1.length) // will print 4

console.log('ab'.length) // will print 2
const buff2 = Buffer.from('ab')
console.log(buff2) // <Buffer 61 62> = 2 bytes
console.log(buff2.length) // will print 2

const buff3 = Buffer.from('👀', 'utf16le')
console.log(buff3) // UTF16LE encoding => <Buffer 3d d8 40 dc> = 4 bytes
console.log(buff3.length) // will print 4

const buff4 = Buffer.from('A', 'utf16le')
console.log(buff4) // UTF16LE encoding => <Buffer 41 00> = 2 bytes
console.log(buff4.length) // will print 2

const buff5 = Buffer.from('8J+RgA==', 'base64')
console.log(buff5) // base64 encoding => <Buffer f0 9f 91 80> = 4 bytes
console.log(buff5.length) // will print 4