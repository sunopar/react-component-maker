# react-component-maker

the cli to create react components

[中文版](https://github.com/sunbrother/react-component-maker/blob/master/README-zh.md)

## v1.2.0

support `css`,`scss`,`less`

## support

1. the cli to create react components
2. support create multiple components
3. support `css`,`Scss`,`Less`

### Usage

```
npm i -g react-component-maker
mkreact App
//you will create React component named App
mkreact Header,Body,Footer
//you will create React compoennts named Header,Body,Footer
```

#### create component with Scss
```
mkreact -s Body
//create React components named Body with Scss
```
#### create React component with Less
```
mkreact -l Body
//create React components named Body with Less
```

## component details


- [name].jsx
- [name].css
- package.json

## file details

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

### package.json

```
{
    "name": "[name]",
	"version": "0.0.0",
	"private": true,
	"main": "./[name].jsx"
}
```

I will explain what does `package.json` do.

Assume you created a component name 'Header'. And the compoent itself is a folder,
the folder details like this:

- [name].jsx
- [name].css
- package.json

while you want to import the Header componet, you can do:

```
import Header from './Header'
```

The main field is a module ID that is the primary entry point to your program. That is, if your package is named Header, and a user installs it, and then does require("Header"), then your main module's exports object will be returned.
This should be a module ID relative to the root of your package folder.
For most modules, it makes the most sense to have a main script and often not much else.