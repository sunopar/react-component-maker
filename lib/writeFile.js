'use strict'

var path = require('path')

function writeIndex (dirPath, dirName, fs) {
  let str = `\
import ${dirName} from './${dirName}'
export default ${dirName}
`
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, 'index.jsx'), str, catchErr)
}

function writeJsx (dirPath, dirName, fs, cssType, usePureComponent) {
  let str = `\
import React from 'react'
import styles from './${dirName}.${cssType}'
`
  //  str = "import React from 'react'\nimport styles from './" + dirName + '.' + cssType + "'\n"
  if (usePureComponent) {
    str += `\
function ${dirName}(props){
  return (
    <div className={styles.container}>${dirName}</div>
  )
}  
`
  // str += '\nfunction ' + dirName + '(props){\n  return (\n    <div className={styles.container}>' + dirName + '</div>\n  )\n}\n'
  } else {
    str += `\
class ${dirName} extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={styles.container}>${dirName}</div>
    )
  }
}
`
    // str += 'class ' + dirName + ' extends React.Component {\n  constructor(props) {\n    super(props);\n    this.displayName = ' + '"' + dirName + '"' + ';\n    }\n    render() {\n        return (\n          <div className={styles.container}>\n            ' + dirName + '\n    </div>\n        );\n    }\n}\n'
  }
  str += `export default ${dirName}`;
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, dirName + '.jsx'), str, catchErr)
}

function writeCss (dirPath, dirName, fs, cssType) {
  var str = '.container {\n  \n}'
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, dirName + '.' + cssType), str, catchErr)
}

function catchErr (err) {
  if (err) {
    throw err
  }
}
module.exports = {
  writeIndex: writeIndex,
  writeJsx: writeJsx,
  writeCss: writeCss
}
