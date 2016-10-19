#!/usr/bin/env node
var createReactComponent = require('react-component-maker')

require('commander')
	.version('1.0.9')
	.command('mkreact [dirNames...]')
	.description('create react component')
	.action((dirNames)=>{
		console.log(`${dirNames} will be created`)
		createReactComponent(dirNames);
	})
	.parse(process.argv)


