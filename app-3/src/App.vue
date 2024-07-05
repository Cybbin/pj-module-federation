<template>
  <div id="app">App
  </div>
</template>

<script>
import Vue from 'vue'
import {logVue } from './utils.mjs'

console.log(Vue); // ƒ Vue(options) {...
logVue() // TypeError: vue__WEBPACK_IMPORTED_MODULE_0__ is not a constructor
export default {
}
</script>

<style>
</style>
