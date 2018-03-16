# dohtml
Simple utility to create HTML element by a string

<a href="https://travis-ci.org/fabioricali/dohtml" target="_blank"><img src="https://travis-ci.org/fabioricali/dohtml.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

## Installation

### Node.js
```
npm install dohtml --save
```

## Example

```javascript
const dom = require('dohtml');

const myElement = dom.create('<my-component></my-component>');

console.log(myElement);

```

## API

<a name="dom"></a>

## dom : <code>Object</code>
dohtml

**Kind**: global constant  

* [dom](#dom) : <code>Object</code>
    * [.create(str)](#dom.create) ⇒ <code>Element</code> \| <code>Node</code> \| <code>null</code>
    * [.isValidNode(el)](#dom.isValidNode) ⇒ <code>boolean</code>
    * [.render(target, els)](#dom.render) ⇒ <code>Element</code> \| <code>Node</code> \| <code>Error</code>

<a name="dom.create"></a>

### dom.create(str) ⇒ <code>Element</code> \| <code>Node</code> \| <code>null</code>
Create DOM element

**Kind**: static method of [<code>dom</code>](#dom)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td>
    </tr>  </tbody>
</table>

<a name="dom.isValidNode"></a>

### dom.isValidNode(el) ⇒ <code>boolean</code>
Check if is a valid Node

**Kind**: static method of [<code>dom</code>](#dom)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>el</td><td><code>*</code></td>
    </tr>  </tbody>
</table>

<a name="dom.render"></a>

### dom.render(target, els) ⇒ <code>Element</code> \| <code>Node</code> \| <code>Error</code>
Append multiple elements into target element

**Kind**: static method of [<code>dom</code>](#dom)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>target</td><td><code>Element</code></td>
    </tr><tr>
    <td>els</td><td><code>Array</code> | <code>Element</code></td>
    </tr>  </tbody>
</table>


## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/dohtml/blob/master/CHANGELOG.md">here</a>

## License
dohtml is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>
