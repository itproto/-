'use strict'
console.log(process.stdin.isTTY ? 'terminal' : 'piped to')

process.stdin.pipe(process.stdout)
