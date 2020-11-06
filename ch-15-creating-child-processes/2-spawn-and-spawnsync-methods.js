'use strict'
const { spawnSync } = require('child_process')
const cmd = `console.log('subprocess stdio output')`
const result = spawnSync(
    process.execPath,
    ['-e', cmd]
)
console.log('result: ', result)
console.log('result.stdout: ', result.stdout)
console.log('result.stdout.toString(): ', result.stdout.toString())