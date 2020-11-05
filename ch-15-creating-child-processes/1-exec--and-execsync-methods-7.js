'use strict'
const { execSync } = require('child_process')

try {
    const cmd = `${process.execPath} -e "throw Error('kaboom')"`
    const output = execSync(cmd)
    console.log(output.toString())    
} catch (error) {
    console.error('CAUGHT ERROR:', error)
}
