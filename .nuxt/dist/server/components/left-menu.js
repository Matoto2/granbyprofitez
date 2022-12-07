exports.ids = [19];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("be5f0818", content, true, context)
};

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_7f984242_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_7f984242_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_7f984242_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_7f984242_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeftMenu_vue_vue_type_style_index_0_id_7f984242_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu-left[data-v-7f984242]{padding-left:0;list-style:none}nav a[data-v-7f984242]{padding:.5rem;border-bottom:1px solid #ccc;display:block;color:#000;text-decoration:none}a.nuxt-link-active[data-v-7f984242]{font-weight:700;background:#f2f2f2}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Layout/LeftMenu.vue?vue&type=template&id=7f984242&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('nav', {
    staticClass: "menu-left-nav"
  }, [_vm._ssrNode("<ul class=\"menu-left\" data-v-7f984242>", "</ul>", _vm._l(_vm.items, function (item) {
    return _vm._ssrNode("<li data-v-7f984242>", "</li>", [_c('NuxtLink', {
      attrs: {
        "to": item.to
      }
    }, [_c('i', {
      class: item.icon
    }), _vm._v("\n\t\t\t\t" + _vm._s(item.label) + "\n\t\t\t")])], 1);
  }), 0)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Layout/LeftMenu.vue?vue&type=template&id=7f984242&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Layout/LeftMenu.vue?vue&type=script&lang=js&
/* harmony default export */ var LeftMenuvue_type_script_lang_js_ = ({
  props: ['items']
});
// CONCATENATED MODULE: ./components/Layout/LeftMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_LeftMenuvue_type_script_lang_js_ = (LeftMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Layout/LeftMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Layout_LeftMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f984242",
  "929a9338"
  
)

/* harmony default export */ var LeftMenu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=left-menu.js.map