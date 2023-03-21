# `dirname` and `__dirname` Variables in Node.js

This code exports two variables, `dirname` and `__dirname`, that give you the directory name of the current module's file.

## How to Use

To use these variables in your code, you can import them like this:

```js
import { dirname, __dirname } from 'dirname';
```

Then you can use `dirname` or `__dirname` in your code just like any other variable.


## What They Do

Provides the full absolute path to the directory containing the current module's file.

## Example

Here is an example of how you might use `dirname` or `___dirname` to read a file relative to the current module:

```js
import { dirname } from '__dirname';
//You can also use { __dirname }!
import fs from 'fs';
import path from 'path';

const filePath = path.join(dirname, 'data', 'file.txt');
const fileData = fs.readFileSync(filePath, 'utf8');
console.log(fileData);
```


In this example, we use `dirname` to construct a file path relative to the current module's directory, then use `fs.readFileSync` to read the contents of

the file.
