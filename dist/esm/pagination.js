import './chunk-f2006744.js';
import './chunk-1e79fcaf.js';
import './chunk-1628b87d.js';
import './chunk-587c8f5a.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-4a61206e.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
