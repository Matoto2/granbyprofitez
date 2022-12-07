exports.ids = [2];
exports.modules = {

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2455b5aa", content, true, context)
};

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerPage_vue_vue_type_style_index_0_id_54190d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerPage_vue_vue_type_style_index_0_id_54190d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerPage_vue_vue_type_style_index_0_id_54190d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerPage_vue_vue_type_style_index_0_id_54190d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerPage_vue_vue_type_style_index_0_id_54190d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-54190d27]{max-width:1500px}.banner-page[data-v-54190d27]{height:60vh;min-height:400px;-webkit-clip-path:polygon(0 0,100% 0,100% 86%,0 100%);clip-path:polygon(0 0,100% 0,100% 86%,0 100%)}.banner-page[data-v-54190d27],h1[data-v-54190d27]{position:relative}h1[data-v-54190d27]{text-transform:uppercase;color:#fff;font-weight:500;z-index:10;padding-top:4rem;margin:0;font-size:3rem;text-shadow:1px 1px 5px rgba(0,0,0,.3)}img[data-v-54190d27]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Layout/BannerPage.vue?vue&type=template&id=54190d27&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "banner-page"
  }, [_vm._ssrNode("<div class=\"container\" data-v-54190d27>", "</div>", [_vm._ssrNode((_vm.h1 ? "<h1 data-v-54190d27>" + _vm._ssrEscape(_vm._s(_vm.h1)) + "</h1>" : "<!---->") + " "), _vm._t("default")], 2), _vm._ssrNode(" "), _c('nuxt-img', {
    attrs: {
      "src": _vm.image
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Layout/BannerPage.vue?vue&type=template&id=54190d27&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Layout/BannerPage.vue?vue&type=script&lang=js&
/* harmony default export */ var BannerPagevue_type_script_lang_js_ = ({
  props: ["h1", "image"]
});
// CONCATENATED MODULE: ./components/Layout/BannerPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_BannerPagevue_type_script_lang_js_ = (BannerPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Layout/BannerPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(148)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Layout_BannerPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "54190d27",
  "eeea878e"
  
)

/* harmony default export */ var BannerPage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=banner-page.js.map