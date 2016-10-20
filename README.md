# react-component-tool

一键式创建React组件

## Examples

```
npm i -g react-component-maker
mkreact App
//此时便会创建App组件
```

## 组件详情

一个组件为一个文件夹，文件夹目录为

- [name].jsx
- [name].scss
- package.json

## 文件内容

### [name].jsx

```
import React from 'react';
import s from './cc.scss'
class cc extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = cc;
    }
    render() {
        return <div className={s.container}>cc</div>;
    }
}
export default cc;
```

### [name].scss

```
.container {
  
}
```

### package.json

```
{
	"[name]": "cc",
	"version": "0.0.0",
	"private": true,
	"main": "./cc.jsx"
}
```

对于`package.json`可能有人不理解。

例如你创建了一个Header组件，它是一个文件夹，名字为Header，文件夹内部有如下目录

- [name].jsx
- [name].scss
- package.json

那么当你使用

```
import Header from './Header'
```

首先模块系统会定位路径，解析发现Header是一个文件夹，那么它会去找该文件夹下是否有`package.json`文件，如果有，那么接下来会去解析package.json文件，找到它的`main`属性，如果有，并且该属性的路径是正确的，那么就将Header文件定位到该属性所指位置；如果以上为否,就会去找index.js，如果都没有就报错。
所以通过package.json可以让文件夹在引入时就像一个文件一样。
