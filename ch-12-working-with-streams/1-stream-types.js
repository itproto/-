const stream = require('stream')
console.log(stream + '') 
// output
/* function Stream(opts) {
    EE.call(this, opts);
  }
*/

console.log(stream.prototype) // Stream { pipe: [Function] }