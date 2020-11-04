'use strict'
console.error(process.stdin.isTTY ? 'terminal' : 'piped to')

process.stdin.pipe(process.stdout)
