var path = require('path')

function writePackage(dirPath,dirName,fs){
	let json = {
	  "name": dirName,
	  "version": "0.0.0",
	  "private": true,
	  "main": `./${dirName}.jsx`
	}
	json = JSON.stringify(json,null,'\t')
	json = new Buffer(json)
	fs.writeFile(path.join(dirName,'package.json'),json)

}
function writeJsx(dirPath,dirName,fs){
	let str = (
`import React from 'react';
import s from './${dirName}.scss'
class ${dirName} extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = ${dirName};
    }
    render() {
        return <div className={s.container}>${dirName}</div>;
    }
}
export default ${dirName};`)

	str = new Buffer(str)
	fs.writeFile(path.join(dirName,`${dirName}.jsx`),str)
}
function writeScss(dirPath,dirName,fs){
	let str = (
`.container {
  
}`)
	str = new Buffer(str)
	fs.writeFile(path.join(dirName,`${dirName}.scss`),str)
}
module.exports = {
	writePackage,
	writeJsx,
	writeScss
}