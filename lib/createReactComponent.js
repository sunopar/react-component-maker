var fs = require('fs')
var path = require('path')
var {writeScss,writePackage,writeJsx} = require('./writeFile.js')
module.exports=function createReactComponent(){
	let dirName = process.argv.slice(2)
	switch(dirName.length){
		case 0:
			throw  Error('请输入组件名称')
			break
		case 1:
			createOne(dirName[0])
			break
		default:
			createMulti(dirName)
			break
	}
}

function createOne(dirName){
	dirPath = path.join(dirName)
	fs.mkdirSync(dirPath)
	writePackage(dirPath,dirName,fs)
	writeJsx(dirPath,dirName,fs)
	writeScss(dirPath,dirName,fs)
}

function createMulti(dirNames){
	dirNames.forEach(ele=>{
		dirPath = path.join(ele)
		fs.mkdirSync(dirPath)
		writePackage(dirPath,ele,fs)
		writeJsx(dirPath,ele,fs)
		writeScss(dirPath,ele,fs)
	})
}