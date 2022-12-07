exports.ids = [3];
exports.modules = {

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("add23dc6", content, true, context)
};

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarreTitreTexte_vue_vue_type_style_index_0_id_5af1d7d5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarreTitreTexte_vue_vue_type_style_index_0_id_5af1d7d5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarreTitreTexte_vue_vue_type_style_index_0_id_5af1d7d5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarreTitreTexte_vue_vue_type_style_index_0_id_5af1d7d5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarreTitreTexte_vue_vue_type_style_index_0_id_5af1d7d5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-5af1d7d5]{display:grid;grid-template-columns:1fr 50px 1fr;grid-gap:5rem;gap:5rem;align-items:center;max-width:1400px;padding-top:3rem;padding-bottom:3rem}h2[data-v-5af1d7d5]{font-size:5rem;font-weight:500;text-transform:uppercase;color:#8e8e8e;line-height:1}h2 span[data-v-5af1d7d5]{font-size:2.5rem;display:block}.contenu[data-v-5af1d7d5]{font-size:1.3rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarreTitreTexte.vue?vue&type=template&id=5af1d7d5&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<h2 data-v-5af1d7d5>", "</h2>", [_vm._t("title")], 2), _vm._ssrNode(" <span class=\"separator\" data-v-5af1d7d5><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.695\" height=\"99.682\" viewBox=\"0 0 21.695 99.682\" data-v-5af1d7d5><path d=\"M1156.017,2087.16H1143.7l9.382-99.682H1165.4Z\" transform=\"translate(-1143.703 -1987.478)\" fill=\"#eda008\" data-v-5af1d7d5></path></svg></span> "), _vm._ssrNode("<div class=\"contenu\" data-v-5af1d7d5>", "</div>", [_vm._t("default")], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BarreTitreTexte.vue?vue&type=template&id=5af1d7d5&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BarreTitreTexte.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(242)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5af1d7d5",
  "5b68b8d8"
  
)

/* harmony default export */ var BarreTitreTexte = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=barre-titre-texte.js.map