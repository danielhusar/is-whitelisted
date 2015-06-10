'use strict';

var assert = require('assert');
var isWhitelisted = require('./');
var arr1 = [0, 1, '1', '2', 'foo', 'bar', 'baz', {"a": "b"}, [0, 1, 2], true, false, null, undefined, NaN, Infinity];
var arr2 = ['0', '1', 3, 'true', 'false', 'null', 'undefined', 'NaN', 'Infinity', '{"a": "b"}', '[0, 1, 2]'];

it('Should return true for elements in array', function () {
  assert(isWhitelisted(0, arr1));
  assert(isWhitelisted(1, arr1));
  assert(isWhitelisted('foo', arr1));
  assert(isWhitelisted({'a': 'b'}, arr1));
  assert(isWhitelisted({"a": "b"}, arr1));
  assert(isWhitelisted([0, 1, 2], arr1));
  assert(isWhitelisted(true, arr1));
  assert(isWhitelisted(false, arr1));
  assert(isWhitelisted(null, arr1));
  assert(isWhitelisted(undefined, arr1));
  assert(isWhitelisted(NaN, arr1));
  assert(isWhitelisted(Infinity, arr1));
});

it('Should return false for elements not in array', function () {
  assert(!isWhitelisted('Lorem ipsum', arr2));
  assert(!isWhitelisted('3', arr2));
  assert(!isWhitelisted(0, arr2));
  assert(!isWhitelisted(1, arr2));
  assert(!isWhitelisted({'a': 'b'}, arr2));
  assert(!isWhitelisted([0, 1, 2], arr2));
  assert(!isWhitelisted(false, arr2));
  assert(!isWhitelisted(true, arr2));
  assert(!isWhitelisted(null, arr2));
  assert(!isWhitelisted(undefined, arr2));
  assert(!isWhitelisted(NaN, arr2));
  assert(!isWhitelisted(Infinity, arr2));
});

it('Should throw on invalid input', function () {
  assert.throws(function () {
    isWhitelisted();
  });
});
