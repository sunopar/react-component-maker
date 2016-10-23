var fs = require('fs')
var path = require('path')
var {writeCss,writePackage,writeJsx} = require('./writeFile.js')
module.exports=function createReactComponent(dirNames,cssType='css'){
	switch(dirNames.length){
		case 0:
			throw  Error('请输入组件名称')
			break
		case 1:
			createOne(dirNames[0],cssType)
			break
		default:
			createMulti(dirNames,cssType)
			break
	}
}
function createOne(dirName,cssType){
	dirPath = path.join(dirName)
	createFiles(dirPath,dirName,cssType)
}

function createMulti(dirNames,cssType){
	dirNames.forEach(ele=>{
		dirPath = path.join(ele)
		createFiles(dirPath,ele,cssType)
	})
}
function createFiles(dirPath,dirName,cssType){
	fs.mkdirSync(dirPath)
	writePackage(dirPath,dirName,fs)
	writeJsx(dirPath,dirName,fs,cssType)
	writeCss(dirPath,dirName,fs,cssType)
}
