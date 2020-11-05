'use strict'
const { execSync } = require('child_process')
const cmd = 'node -p process.execPath'
const output = execSync(cmd)
console.log(output.toString())