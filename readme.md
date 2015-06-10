# is-whitelisted [![Build Status](http://img.shields.io/travis/danielhusar/is-whitelisted.svg?style=flat-square)](https://travis-ci.org/danielhusar/is-whitelisted) [![Dependency Status](http://img.shields.io/gemnasium/danielhusar/is-whitelisted.svg?style=flat-square)](https://gemnasium.com/danielhusar/is-whitelisted)
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
