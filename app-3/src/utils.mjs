import Vue from "vue";

function logVue() {
  console.log(Vue); // Module
  console.log(new Vue()); // TypeError: vue__WEBPACK_IMPORTED_MODULE_0__ is not a constructor
}

export { logVue };
