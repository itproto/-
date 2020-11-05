'use strict'
const { execSync } = require('child_process')
const cmd = `node -e "console.error('subprocess stdio output')"`
const output = execSync(cmd)
console.log(output.toString())