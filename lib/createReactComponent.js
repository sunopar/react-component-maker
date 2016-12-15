'use strict';

var fs = require('fs');
var path = require('path');
var _require = require('./writeFile.js'),
    writeCss = _require.writeCss,
    writeIndex = _require.writeIndex,
    writeJsx = _require.writeJsx;
module.exports = function createReactComponent(dirNames, cssType, usePureComponent) {
    switch (dirNames.length) {
        case 0:
            throw Error('请输入组件名称');
        case 1:
            createOne(dirNames[0], cssType, usePureComponent);
            break;
        default:
            createMulti(dirNames, cssType, usePureComponent);
            break;
    }
};

function createOne(dirName, cssType, usePureComponent) {
    var dirPath = path.join(dirName);
    createFiles(dirPath, dirName, cssType, usePureComponent);
}

function createMulti(dirNames, cssType, usePureComponent) {
    dirNames.forEach(function (ele) {
        var dirPath = path.join(ele);
        createFiles(dirPath, ele, cssType, usePureComponent);
    });
}

function createFiles(dirPath, dirName, cssType, usePureComponent) {
    fs.mkdirSync(dirPath);
    writeIndex(dirPath, dirName, fs);
    writeJsx(dirPath, dirName, fs, cssType, usePureComponent);
    writeCss(dirPath, dirName, fs, cssType);
}