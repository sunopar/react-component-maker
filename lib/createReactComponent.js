'use strict';

var fs = require('fs');
var path = require('path');
var _require = require('./writeFile.js'),
    writeCss = _require.writeCss,
    writePackage = _require.writePackage,
    writeJsx = _require.writeJsx;
module.exports = function createReactComponent(dirNames) {
    var cssType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'css';

    switch (dirNames.length) {
        case 0:
            throw Error('请输入组件名称');
        case 1:
            createOne(dirNames[0], cssType);
            break;
        default:
            createMulti(dirNames, cssType);
            break;
    }
};

function createOne(dirName, cssType) {
    var dirPath = path.join(dirName);
    createFiles(dirPath, dirName, cssType);
}

function createMulti(dirNames, cssType) {
    dirNames.forEach(function (ele) {
        dirPath = path.join(ele);
        createFiles(dirPath, ele, cssType);
    });
}

function createFiles(dirPath, dirName, cssType) {
    fs.mkdirSync(dirPath);
    writePackage(dirPath, dirName, fs);
    writeJsx(dirPath, dirName, fs, cssType);
    writeCss(dirPath, dirName, fs, cssType);
}