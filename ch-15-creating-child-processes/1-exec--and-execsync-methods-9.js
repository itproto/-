'use strict'
const { exec } = require('child_process')

const cmd = `${process.execPath} -e "console.log('A'); throw Error('B')"`
exec(
    cmd, 
    (err, stdout, stderr) => {
    console.log('err', err)
    console.log('subprocess stdout: ', stdout.toString())
    console.log('subprocess stderr: ', stderr.toString())
})
