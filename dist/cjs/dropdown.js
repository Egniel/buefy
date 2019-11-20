'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-fb310c0c.js');
var __chunk_6 = require('./chunk-13e039f5.js');
require('./chunk-c5b5b708.js');
var __chunk_13 = require('./chunk-9c73b620.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_13.Dropdown);
    __chunk_6.registerComponent(Vue, __chunk_13.DropdownItem);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
