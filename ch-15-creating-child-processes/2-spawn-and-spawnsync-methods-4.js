'use strict'
const { spawn } = require('child_process')
const cmd = `process.exit(1)`
const sp = spawn(
    process.execPath,
    ['-e', cmd]
)
console.log('pid is ', sp.pid)

sp.stdout.pipe(process.stdout)

sp.on('close', status => {
    console.log('exit status was', status)
})