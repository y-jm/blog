---
title: [nodejs]xml与object互转
date: 2022-09-07 18:00
categories:
 - nodejs
---
## 1.安装
```bash
 npm install xml2js -S
```
## 2.xml转object
```javascript
const fs = require("fs");
const xml2js =require("xml2js");

// read XML file
var data=fs.readFileSync("databases.xml");
// Buffer -> String
data=data.toString('utf-8');

// xml -> object
xml2js.parseString(data, (err, result) => {
    if (err) {
        throw err;
    }
    // print JSON object
    console.log(JSON.stringify(result, null, 4));
});
```
## 3.object转xml
```javascript
// objec -> XML
const builder = new xml2js.Builder();
const xml = builder.buildObject({name:"MongoDB",type:"NoSQL"});
console.log(xml)
```
打印如下：
```bash
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<root>
  <name>MongoDB</name>
  <type>NoSQL</type>
</root>
```