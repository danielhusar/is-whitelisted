# is-whitelisted [![Build Status](https://secure.travis-ci.org/danielhusar/is-whitelisted.svg?branch=master)](https://travis-ci.org/danielhusar/is-whitelisted)
> Check if variable is whitelisted

## Install

```sh
$ npm install --save is-whitelisted
```


## Usage

```js
var isWhitelisted = require('is-whitelisted');

isWhitelisted('foo', ['foo', 'bar', 'baz']) // true
isWhitelisted('Lorem', ['foo', 'bar', 'baz']) // false

```

## API

### isWhitelisted(item, whitelist)

#### item

*Required*  
Type: `anything`


#### whitelist

*Required*  
Type: `array`


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
