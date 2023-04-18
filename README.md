<p align="center">

<img src="https://cdn.discordapp.com/attachments/1088327875565977644/1097682931012599828/98523187-00e9-4d2c-a224-6eea0637b439.gif" alt="dirname-v1" />

</p>







# dirname and __dirname

This is a simple module that exports `dirname` and `__dirname` constants for use in Node.js modules.

`dirname` returns the directory path of the current module, while `__dirname` returns the full file path of the module.

## Installation

You can install this module using npm:

```sh
npm install dirname-v1
```


## Declaration

To use this module in your Node.js project, import it at the top of your module:

```js
const { dirname, __dirname } = require('dirname-v1');
```

For es6 module =>

```js
import { dirname, __dirname } from 'dirname-v1';
```

## Example Usage

You can then use dirname and __dirname in your code to get the directory and file path of your module, respectively:

```js
console.log(__dirname + '/some-file.js');
```

```js
import {readerSync} from 'fs'
const filepath = __dirname + "/file";
///Just an example
readerSync(filepath)
```

## License<p align="center">
<img src="https://cdn.discordapp.com/attachments/1088327875565977644/1097682931012599828/98523187-00e9-4d2c-a224-6eea0637b439.gif" alt="dirname-v1" />
</p>

# dirname and __dirname

This is a simple module that exports `dirname` and `__dirname` constants for use in Node.js modules.

`dirname` returns the directory path of the current module, while `__dirname` returns the full file path of the module.

## Installation

You can install this module using npm:

```sh
npm install dirname-v1
```


## Declaration

To use this module in your Node.js project, import it at the top of your module:

```js
const { dirname, __dirname } = require('dirname-v1');
```

For es6 module =>

```js
import { dirname, __dirname } from 'dirname-v1';
```

## Example Usage

You can then use dirname and __dirname in your code to get the directory and file path of your module, respectively:

```js
console.log(__dirname + '/some-file.js');
```

```js
import {readerSync} from 'fs'
const filepath = __dirname + "/file";
///Just an example
readerSync(filepath)
```

## License

This code is licensed under the Apache license. See the LICENSE file in the root directory of this source tree for more information.

```xml

In this `README.md` file, we first provide an overview of the purpose and functionality of the module. We then provide installation instructions for installing the module from npm.

Next, we explain how to use the module in your Nodejs project by importing the `dirname` and `__dirname` constants and using them in your code. We provide examples of how to use the constants and what they return.

Finally, we include a license section where we state the license of the code and provide a link to the `LICENSE` file where the license terms are explained in more detail.
```
