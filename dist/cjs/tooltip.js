'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-fb310c0c.js');
var __chunk_6 = require('./chunk-13e039f5.js');
var __chunk_23 = require('./chunk-bb4fd303.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_23.Tooltip);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
