'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./chunk-2777282e.js');
var __chunk_2 = require('./chunk-0e2aabff.js');
require('./chunk-fb310c0c.js');
var __chunk_6 = require('./chunk-13e039f5.js');
require('./chunk-c5b5b708.js');
var Vue = _interopDefault(require('vue'));
var __chunk_18 = require('./chunk-6d80f5a0.js');

var ModalProgrammatic = {
  open: function open(params) {
    var parent;

    if (typeof params === 'string') {
      params = {
        content: params
      };
    }

    var defaultParam = {
      programmatic: true
    };

    if (params.parent) {
      parent = params.parent;
      delete params.parent;
    }

    var propsData = __chunk_2.merge(defaultParam, params);
    var vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue;
    var ModalComponent = vm.extend(__chunk_18.Modal);
    return new ModalComponent({
      parent: parent,
      el: document.createElement('div'),
      propsData: propsData
    });
  }
};
var Plugin = {
  install: function install(Vue) {
    __chunk_6.registerComponent(Vue, __chunk_18.Modal);
    __chunk_6.registerComponentProgrammatic(Vue, 'modal', ModalProgrammatic);
  }
};
__chunk_6.use(Plugin);

exports.ModalProgrammatic = ModalProgrammatic;
exports.default = Plugin;
