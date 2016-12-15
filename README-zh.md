# react-component-maker

一键式创建React组件

## v1.2.0

支持自由选择创建`css`,`scss`,`less`

## 功能

1. 一键式创建React组件，不是React脚手架！
2. 支持一次创建多个组件
3. 支持自由选择创建`css`,`Scss`,`Less`
4. 支持无状态组建（stateless function）

### Usage

```
npm i -g react-component-maker
mkreact App
//此时你创建了一个名字为App的组件
mkreact Header,Body,Footer
//此时你创建了三个组件，分别为Header,Body,Footer
```

#### 创建样式为Scss的组件
```
mkreact -s Body
//创建Body组件，但是样式文件为Scss
```
#### 创建样式为Less的组件
```
#### mkreact -l Body
//创建Body组件，但是样式文件为Scsss
```
#### create React component with stateless
```
mkreact -p Body
//创建Body无状态组件
```
## 组件详情

一个组件为一个文件夹，文件夹目录为

- [name].jsx
- [name].css
- index.jsx

## 文件内容

### [name].jsx

```
import React from 'react';
import styles from './[name].css'
class [name] extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = [name];
    }
    render() {
        return (
            <div className={styles.container}>
            [name]
            </div>
        )
    }
}
export default [name];
```

### [name].css

```
.container {
  
}
```

### index.jsx

```
import [name] from './hh'

export default [name]
```
