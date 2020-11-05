'use strict'
const { execSync } = require('child_process')

try {
    const cmd = `${process.execPath} -e "process.exit(1)"`
    const output = execSync(cmd)
    console.log(output.toString())    
} catch (error) {
    console.error('CAUGHT ERROR:', error)
}
