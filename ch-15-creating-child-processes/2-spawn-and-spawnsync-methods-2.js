'use strict'
const { spawnSync } = require('child_process')
const cmd = `process.exit(1)`
const result = spawnSync(
    process.execPath,
    ['-e', cmd]
)
console.log(result)
