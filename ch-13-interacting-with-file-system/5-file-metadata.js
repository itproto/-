'use strict'
const { readdirSync, statSync } = require('fs')

const files = readdirSync('.')

for(const name of files) {
    const stat = statSync(name)
    const { atime, birthtime, ctime, mtime } = stat
    const typeLabel = stat.isDirectory() ? 'dir: ' : 'file: '
    console.log(typeLabel, name)

    console.group(typeLabel, name)
    console.log('atime', atime.toLocaleString())
    console.log('birthtime', birthtime.toLocaleString())
    console.log('ctime', ctime.toLocaleString())
    console.log('mtime', mtime.toLocaleString())
    console.groupEnd()
    console.log()
}