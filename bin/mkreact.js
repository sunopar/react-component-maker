#!/usr/bin/env node

'use strict';

// var createReactComponent = require('react-component-maker')
var createReactComponent = require('../lib/createReactComponent');
var program = require('commander');

function parseVal(val) {
    return val.split(',');
}

program
    .version('1.2.0')
    .option('-s --Scss [names]', 'replace css to Scss', parseVal)
    .option('-l --Less [names]', 'replace css to Less', parseVal)
    .option('-p --pure [names]', 'use pure component',parseVal)
    .parse(process.argv);
var usePureComponent = false
if(program.pure){
    usePureComponent = true
    console.log('you will create pure component for stateless function')
}
var name = typeof program.pure !== 'boolean' && program.pure
if (program.Scss) {
    name = name?name:program.Scss
    console.log(name);
    console.log('you will create components ' + name + ' with Scss');
} else if (program.Less) {
    name = name?name:program.Less    
    console.log(name);
    console.log('you will create components ' + name + ' with Less');
} else {
    name = process
        .argv[2]
        .split(',');
    console.log(name);
    console.log('you will create components ' + name + ' with css');
}
    createReactComponent(name,'css',usePureComponent);

console.log('done!');
