'use strict';

module.exports = function (item, whitelist) {
  if (!Array.isArray(whitelist)) {
    throw new TypeError('Expected array as second parameter');
  }

  var match = false;
  var arrayLength = whitelist.length;
  item = JSON.stringify(item);

  for (var i = 0; i < arrayLength; i++) {
    if (JSON.stringify(whitelist[i]) === item) {
      match = true;
      break;
    }
  }

  return match;
};
