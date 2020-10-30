const buffer = Buffer.alloc(10)
console.log(buffer) // <Buffer 00 00 00 00 00 00 00 00 00 00>

const unsafeBuffer = Buffer.allocUnsafe(10)
console.log(unsafeBuffer) 
// The output will be different buffer each time
// output <Buffer e8 91 02 07 01 00 00 00 04 00>
// output <Buffer e8 61 02 05 01 00 00 00 04 00>

