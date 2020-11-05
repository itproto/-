'use strict'
const { execSync } = require('child_process')
const cmd = `${process.execPath} -e "console.error('subprocess stdio output')"`
const output = execSync(cmd)
console.log(output.toString())