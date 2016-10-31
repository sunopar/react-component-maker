"use strict";

var path = require('path');

function writePackage(dirPath, dirName, fs) {
    var json = {
        "name": dirName,
        "version": "0.0.0",
        "private": true,
        "main": "./" + dirName + ".jsx"
    };
    json = JSON.stringify(json, null, '\t');
    json = new Buffer(json);
    fs.writeFile(path.join(dirName, 'package.json'), json);
}

function writeJsx(dirPath, dirName, fs, cssType) {
    var str = "import React from 'react';\nimport s from './" + dirName + "." + cssType + "'\nclass " + dirName + " extends React.Component {\n    constructor(props) {\n        super(props);\n        this.displayName = " + dirName + ";\n    }\n    render() {\n        return <div className={s.container}>" + dirName + "</div>;\n    }\n}\nexport default " + dirName + ";";

    str = new Buffer(str);
    fs.writeFile(path.join(dirName, dirName + ".jsx"), str);
}

function writeCss(dirPath, dirName, fs, cssType) {
    var str = ".container {\n  \n}";
    str = new Buffer(str);
    fs.writeFile(path.join(dirName, dirName + "." + cssType), str);
}
module.exports = {
    writePackage: writePackage,
	writeJsx: writeJsx,
	writeCss: writeCss
};