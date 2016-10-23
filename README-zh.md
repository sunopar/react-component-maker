# react-component-maker

一键式创建React组件

## v1.2.0

支持自由选择创建`css`,`scss`,`less`

## 功能

1. 一键式创建React组件，不是React脚手架！
2. 支持一次创建多个组件
3. 支持自由选择创建`css`,`Scss`,`Less`

### Usage

```
npm i -g react-component-maker
mkreact App
//此时你创建了一个名字为App的组件
mkreact Header,Body,Footer
//此时你创建了三个组件，分别为Header,Body,Footer
```

创建样式为Scss的组件
```
mkreact -s Body
//创建Body组件，但是样式文件为Scss
```
创建样式为Less的组件
```
mkreact -l Body
//创建Body组件，但是样式文件为Scsss
```

## 组件详情

一个组件为一个文件夹，文件夹目录为

- [name].jsx
- [name].css
- package.json

## 文件内容

### [name].jsx

```
import React from 'react';
import s from './[name].css'
class [name] extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = [name];
    }
    render() {
        return <div className={s.container}>[name]</div>;
    }
}
export default [name];
```

### [name].css

```
.container {
  
}
```

### package.json

```
{
    "name": "[name]",
	"version": "0.0.0",
	"private": true,
	"main": "./[name].jsx"
}
```

对于`package.json`可能有人不理解。

例如你创建了一个Header组件，它是一个文件夹，名字为Header，文件夹内部有如下目录

- [name].jsx
- [name].css
- package.json

那么当你使用

```
import Header from './Header'
```

首先模块系统会定位路径，解析发现Header是一个文件夹，那么它会去找该文件夹下是否有`package.json`文件，如果有，那么接下来会去解析package.json文件，找到它的`main`属性，如果有，并且该属性的路径是正确的，那么就将Header文件定位到该属性所指位置；如果以上为否,就会去找index.js，如果都没有就报错。
所以通过package.json可以让文件夹在引入时就像一个文件一样。
