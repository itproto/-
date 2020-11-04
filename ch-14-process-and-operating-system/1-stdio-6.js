'use strict'
process.stderr.write(process.stdin.isTTY ? 'terminal\n' : 'piped to\n')

process.stdin.pipe(process.stdout)