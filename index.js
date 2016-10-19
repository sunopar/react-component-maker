#!/usr/bin/env node
var createReactComponent = require('./lib/index.js')

var version = require('./package.json').version

var program = require('commander').
program
	.version(version)
	.command('mkreact [dirNames...]')
	.description('create react component')
	.action((dirNames)=>{
		createReactComponent();
	})
program.parse(proccess.argv)


