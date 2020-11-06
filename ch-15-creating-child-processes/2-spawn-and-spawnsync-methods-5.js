'use strict'
const { exec } = require('child_process')
const cmd = `${process.execPath} -e "console.log('subprocess stdio output')"`
const sp = exec(cmd)
console.log('pid is ', sp.pid)

sp.stdout.pipe(process.stdout)

sp.on('close', status => {
    console.log('exit status was', status)
})
