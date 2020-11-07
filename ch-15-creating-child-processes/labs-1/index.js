'use strict'

function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set 
  // named MY_ENV_VAR. The MY_ENV_VAR 
  // environment variable's value should 
  // be the value of the myEnvVar parameter 
  // passed to this exercise function
  const { MY_ENV_VAR } = process.env

  if (MY_ENV_VAR) {
      console.log('Subprocess cwd:', process.cwd())
      console.log('env', process.env)
      console.log('total var::', Object.keys(process.env).length)
  } else {
      const { parse } = require('path')
      const { root } = parse(process.cwd())
      const { spawn } = require('child_process')

      const sp = spawn(process.execPath, [__filename], {
          // cwd: root,
          env: { MY_ENV_VAR: myEnvVar }
      })
      console.log(process.env)
      // console.log('total var::', Object.keys(process.env).length)
      sp.stdout.pipe(process.stdout)
  }  
  return require('child_process').spawnSync(process.argv[0], ['child.js'])
}

exercise('is set')
module.exports = exercise
