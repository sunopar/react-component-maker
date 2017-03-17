#!/usr/bin/env node
'use strict'
const createReactComponent = require('../lib/createReactComponent')
const program = require('commander')
function parseVal (val) {
  return val.split(',')
}
function log (name, componentStatus, style) {
  console.log(name)
  console.log(`you will create ${componentStatus}component ${name} with ${style}`)
}
// if use pure and scss or less both, it can find the right name
function getName(name,style){
  const newName = typeof program.pure !== 'boolean' && program.pure? name : program[style]
  return newName;
}
(function () {
  let usePureComponent = false
  let componentStatus = ''
  let style = 'css'
  let name

  program
    .version('1.2.0')
    .option('-s --scss [names]', 'replace css to Scss', parseVal)
    .option('-l --less [names]', 'replace css to Less', parseVal)
    .option('-p --pure [names]', 'use pure component', parseVal)
    .parse(process.argv)

  if (program.pure) {
    usePureComponent = true
    componentStatus = 'pure '
    name = program.pure
  }
  if (program.scss) {
    style = 'scss'
    name = getName(name,style)
    log(name, componentStatus, style)
  } else if (program.less) {
    style = 'less'
    name = getName(name,style)    
    log(name, componentStatus, style)
  } else {
    name = name || process
      .argv[2]
      .split(',')
    log(name, componentStatus, style)
  }
  console.log(name, style, usePureComponent)
  createReactComponent(name, style, usePureComponent)

  console.log('done!')
})()
