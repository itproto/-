console.log(Buffer)

let buf2, buf3, buf4;
const buffer = Buffer.alloc(10)
console.log(buffer instanceof Buffer) // true
console.log(buffer instanceof Uint8Array) // true

buf2 = buffer.slice(2,3)
console.log(buf2) // <Buffer 00>

buf2[0] = 100
console.log(buf2) // <Buffer 64>
console.log(buffer) // <Buffer 00 00 64 00 00 00 00 00 00 00>

buf3 = new Uint8Array(10)
console.log(buf3) // Uint8Array(10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

buf4 = buf3.slice(2,3)
console.log(buf4) // Uint8Array(1) [ 0 ]

buf4[0] = 100
console.log(buf4) // Uint8Array(1) [ 100 ]
console.log(buf3) // Uint8Array(10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]