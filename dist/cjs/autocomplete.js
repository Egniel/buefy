'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-2777282e.js');
require('./chunk-0e2aabff.js');
require('./chunk-fb310c0c.js');
require('./chunk-c5724c2f.js');
require('./chunk-b0c98f9c.js');
var __chunk_6 = require('./chunk-13e039f5.js');
require('./chunk-316fb5b2.js');
var __chunk_8 = require('./chunk-c0700b55.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_8.Autocomplete);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
