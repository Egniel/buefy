'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-2777282e.js');
require('./chunk-0e2aabff.js');
require('./chunk-fb310c0c.js');
require('./chunk-b0c98f9c.js');
var __chunk_6 = require('./chunk-13e039f5.js');
var __chunk_22 = require('./chunk-80dabf32.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_22.Pagination);
    __chunk_6.registerComponent(Vue, __chunk_22.PaginationButton);
  }
};
__chunk_6.use(Plugin);

exports.default = Plugin;
