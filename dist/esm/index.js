import './chunk-f2006744.js';
import { m as merge } from './chunk-1e79fcaf.js';
import { s as setOptions, c as config } from './chunk-1628b87d.js';
import './chunk-4f8020cc.js';
import './chunk-587c8f5a.js';
import { a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js';
import './chunk-4ce7cf02.js';
import './chunk-44f567d5.js';
import Plugin from './autocomplete.js';
export { default as Autocomplete } from './autocomplete.js';
import Plugin$1 from './button.js';
export { default as Button } from './button.js';
import './chunk-a1a77ea5.js';
import './chunk-c2cb52bb.js';
import Plugin$2 from './checkbox.js';
export { default as Checkbox } from './checkbox.js';
import Plugin$4 from './collapse.js';
export { default as Collapse } from './collapse.js';
import './chunk-139f8980.js';
import './chunk-b3471279.js';
import './chunk-f1b1e937.js';
import './chunk-746b4ec5.js';
import Plugin$3 from './clockpicker.js';
export { default as Clockpicker } from './clockpicker.js';
import './chunk-5aa84c2f.js';
import './chunk-e76ed03f.js';
import Plugin$5 from './datepicker.js';
export { default as Datepicker } from './datepicker.js';
import './chunk-49ead748.js';
import Plugin$6 from './datetimepicker.js';
export { default as Datetimepicker } from './datetimepicker.js';
import 'vue';
import './chunk-06e6ae4e.js';
import Plugin$7 from './dialog.js';
export { default as Dialog, DialogProgrammatic } from './dialog.js';
import Plugin$8 from './dropdown.js';
export { default as Dropdown } from './dropdown.js';
import Plugin$9 from './field.js';
export { default as Field } from './field.js';
import Plugin$a from './icon.js';
export { default as Icon } from './icon.js';
import Plugin$b from './input.js';
export { default as Input } from './input.js';
import './chunk-b9bdb0e4.js';
import Plugin$c from './loading.js';
export { default as Loading, LoadingProgrammatic } from './loading.js';
import Plugin$d from './menu.js';
export { default as Menu } from './menu.js';
import './chunk-4670b28c.js';
import Plugin$e from './message.js';
export { default as Message } from './message.js';
import Plugin$f from './modal.js';
export { default as Modal, ModalProgrammatic } from './modal.js';
import Plugin$h from './notification.js';
export { default as Notification, NotificationProgrammatic } from './notification.js';
import './chunk-c6bccb69.js';
import Plugin$g from './navbar.js';
export { default as Navbar } from './navbar.js';
import Plugin$i from './numberinput.js';
export { default as Numberinput } from './numberinput.js';
import './chunk-4a61206e.js';
import Plugin$j from './pagination.js';
export { default as Pagination } from './pagination.js';
import Plugin$k from './progress.js';
export { default as Progress } from './progress.js';
import Plugin$l from './radio.js';
export { default as Radio } from './radio.js';
import Plugin$m from './rate.js';
export { default as Rate } from './rate.js';
import Plugin$n from './select.js';
export { default as Select } from './select.js';
import './chunk-0bafc2e4.js';
import Plugin$o from './slider.js';
export { default as Slider } from './slider.js';
import Plugin$p from './snackbar.js';
export { default as Snackbar, SnackbarProgrammatic } from './snackbar.js';
import './chunk-0e3f4fb5.js';
import Plugin$q from './steps.js';
export { default as Steps } from './steps.js';
import Plugin$r from './switch.js';
export { default as Switch } from './switch.js';
import Plugin$s from './table.js';
export { default as Table } from './table.js';
import Plugin$t from './tabs.js';
export { default as Tabs } from './tabs.js';
import './chunk-0baa5f10.js';
import Plugin$u from './tag.js';
export { default as Tag } from './tag.js';
import Plugin$v from './taginput.js';
export { default as Taginput } from './taginput.js';
import Plugin$w from './timepicker.js';
export { default as Timepicker } from './timepicker.js';
import Plugin$x from './toast.js';
export { default as Toast, ToastProgrammatic } from './toast.js';
import Plugin$y from './tooltip.js';
export { default as Tooltip } from './tooltip.js';
import Plugin$z from './upload.js';
export { default as Upload } from './upload.js';



var components = /*#__PURE__*/Object.freeze({
    Autocomplete: Plugin,
    Button: Plugin$1,
    Checkbox: Plugin$2,
    Clockpicker: Plugin$3,
    Collapse: Plugin$4,
    Datepicker: Plugin$5,
    Datetimepicker: Plugin$6,
    Dialog: Plugin$7,
    Dropdown: Plugin$8,
    Field: Plugin$9,
    Icon: Plugin$a,
    Input: Plugin$b,
    Loading: Plugin$c,
    Menu: Plugin$d,
    Message: Plugin$e,
    Modal: Plugin$f,
    Navbar: Plugin$g,
    Notification: Plugin$h,
    Numberinput: Plugin$i,
    Pagination: Plugin$j,
    Progress: Plugin$k,
    Radio: Plugin$l,
    Rate: Plugin$m,
    Select: Plugin$n,
    Slider: Plugin$o,
    Snackbar: Plugin$p,
    Steps: Plugin$q,
    Switch: Plugin$r,
    Table: Plugin$s,
    Tabs: Plugin$t,
    Tag: Plugin$u,
    Taginput: Plugin$v,
    Timepicker: Plugin$w,
    Toast: Plugin$x,
    Tooltip: Plugin$y,
    Upload: Plugin$z
});

var Buefy = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // Options
    setOptions(merge(config, options, true)); // Components


    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    var BuefyProgrammatic = {
      setOptions: function setOptions$1(options) {
        setOptions(merge(config, options, true));
      }
    };
    registerComponentProgrammatic(Vue, 'config', BuefyProgrammatic);
  }
};
use(Buefy);

export default Buefy;
