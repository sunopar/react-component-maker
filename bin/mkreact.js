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
    .parse(process.argv);

if (program.Scss) {
    console.log(program.Scss);
    console.log('you will create components ' + program.Scss + ' with Scss');
    createReactComponent(program.Scss, 'scss');
    console.log('done!');
} else if (program.Less) {
    console.log(program.Less);
    console.log('you will create components ' + program.Less + ' with Less');
    createReactComponent(program.Less, 'less');
    console.log('done!');
} else {
    var val = process
        .argv[2]
        .split(',');
    console.log(val);
    console.log('you will create components ' + val + ' with css');
    createReactComponent(val);
    console.log('done!');
}