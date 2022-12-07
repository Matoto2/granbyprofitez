exports.ids = [9];
exports.modules = {

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("eb7c5f54", content, true, context)
};

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalerie_vue_vue_type_style_index_0_id_1194dc07_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalerie_vue_vue_type_style_index_0_id_1194dc07_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalerie_vue_vue_type_style_index_0_id_1194dc07_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalerie_vue_vue_type_style_index_0_id_1194dc07_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalerie_vue_vue_type_style_index_0_id_1194dc07_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home-destination-granby[data-v-1194dc07]{padding:5rem 0}.upper[data-v-1194dc07]{padding-bottom:4rem;padding-left:15%}.upper[data-v-1194dc07],h2[data-v-1194dc07]{display:flex}h2[data-v-1194dc07]{align-items:center;margin-left:8rem;font-size:1.8rem;font-weight:500;text-transform:uppercase}h2 span[data-v-1194dc07]{padding-left:1rem}.galerie[data-v-1194dc07]{display:grid;grid-template-columns:1fr 1fr;padding-bottom:3rem}.col2[data-v-1194dc07]{position:relative;margin-top:-7rem}.btn-wrapper[data-v-1194dc07]{display:flex;justify-content:center;margin-top:3.5rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeGalerie.vue?vue&type=template&id=1194dc07&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "home-destination-granby"
  }, [_vm._ssrNode("<div class=\"container\" data-v-1194dc07>", "</div>", [_vm._ssrNode("<div class=\"upper\" data-v-1194dc07><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300.428\" height=\"295.161\" viewBox=\"0 0 300.428 295.161\" data-v-1194dc07><g transform=\"translate(-227.942 -1769.657)\" data-v-1194dc07><path d=\"M513.166,1901.018c-40.176,9.271-58.719,32.449-83.442,38.63s-45.584,9.271-45.584,9.271L374.868,2037s20.861-3.09,45.584-9.271,43.266-29.36,83.442-38.631l-30.9-30.9Z\" transform=\"translate(-61.586 -55.062)\" fill=\"#eda008\" data-v-1194dc07></path><path d=\"M467.473,2028.785s-6.363-12.834-6.363-24.152c0-4.495,2.849-8.576,6.363-9.114s6.356,2.67,6.356,7.165C473.829,2014,467.473,2028.785,467.473,2028.785Z\" transform=\"translate(-97.735 -94.648)\" fill=\"#f9f3e4\" data-v-1194dc07></path><path d=\"M450.3,2054.879s-6.522-15.955-19.732-22.795c-5.821-3.007-3.805-10.273.7-12.344,5.727-2.623,9.534.16,12,3.885C449.456,2033,450.3,2054.879,450.3,2054.879Z\" transform=\"translate(-83.428 -104.393)\" fill=\"#f9f3e4\" data-v-1194dc07></path><path d=\"M477.005,2049.813s6.516-17.953,19.728-28.842c5.821-4.791,3.807-11.439-.7-12.129-5.727-.868-9.533,3.082-12,7.561C477.844,2027.677,477.005,2049.813,477.005,2049.813Z\" transform=\"translate(-104.398 -100.207)\" fill=\"#f9f3e4\" data-v-1194dc07></path><g transform=\"translate(227.942 1769.657)\" data-v-1194dc07><path d=\"M341.442,2183.82l-22.319,24.355-7.193-6.592a15.307,15.307,0,0,1-4.411-6.689,13.3,13.3,0,0,1-.131-7.63,17.569,17.569,0,0,1,4.177-7.312l1.119-1.222a17.492,17.492,0,0,1,6.96-4.824,13.144,13.144,0,0,1,7.64-.446,16.022,16.022,0,0,1,7.15,3.936Zm-23.424,17.064,16.1-17.563-2.76-2.53a8.619,8.619,0,0,0-7.019-2.6q-3.69.449-7.295,4.317l-1.242,1.355q-3.633,3.965-3.827,7.635a8.286,8.286,0,0,0,3.086,6.674Z\" transform=\"translate(-261.035 -1938.762)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M269.453,2119.745l6.685,11.806,8.845-5.009-7.814-13.8,3.988-2.259,10.643,18.8-28.746,16.278L252.488,2126.9l4.028-2.281,7.737,13.662,7.937-4.494-6.685-11.806Z\" transform=\"translate(-238.231 -1912.519)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M256.448,2058.358a3.993,3.993,0,0,0-2.97,2.192,18.457,18.457,0,0,0-1.191,5.9,26.618,26.618,0,0,1-1.308,6.769q-1.843,5-6.3,5.946a8.048,8.048,0,0,1-7.11-1.828,13.183,13.183,0,0,1-4.276-7.736,14.288,14.288,0,0,1-.026-6.279,10.1,10.1,0,0,1,2.665-4.9,9.28,9.28,0,0,1,4.777-2.584l1.18,5.594a5.176,5.176,0,0,0-3.628,2.423,6.7,6.7,0,0,0-.474,4.842,6.988,6.988,0,0,0,2.078,4.026,4,4,0,0,0,3.606.827,3.617,3.617,0,0,0,2.617-2.268,19.326,19.326,0,0,0,1.166-5.9,25.456,25.456,0,0,1,1.274-6.6,9.854,9.854,0,0,1,2.578-4.045,8.742,8.742,0,0,1,4.115-1.981,7.86,7.86,0,0,1,7.08,1.741q3.041,2.593,4.159,7.9a16.135,16.135,0,0,1,.062,6.723,11.057,11.057,0,0,1-2.621,5.329,9.128,9.128,0,0,1-4.984,2.757l-1.185-5.617a5.345,5.345,0,0,0,3.879-2.72,8.149,8.149,0,0,0,.409-5.535,7.084,7.084,0,0,0-2.117-4.156A3.917,3.917,0,0,0,256.448,2058.358Z\" transform=\"translate(-230.031 -1888.231)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M235.25,1979.735l-1.063,10.246,28.254,2.931-.587,5.665-28.255-2.931-1.054,10.156-4.6-.478,2.7-26.066Z\" transform=\"translate(-227.942 -1857.513)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M276.494,1944.808l-2.006,5.354-30.935-11.591,2.006-5.354Z\" transform=\"translate(-234.486 -1838.215)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M307.554,1877.185l-3.391,4.632-27.61-1.96,18.913,13.843-3.39,4.632-26.658-19.511,3.39-4.633,27.71,1.978-18.986-13.9,3.364-4.6Z\" transform=\"translate(-243.651 -1806.55)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M360.51,1830.62l-10.586,7.19,2.106,7.866-4.936,3.353-8.236-34.339,4.26-2.894,28.9,20.3-4.956,3.365Zm-11.854,2.455,7.921-5.38-11.66-8.647Z\" transform=\"translate(-274.434 -1787.32)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M418.07,1778.53l-9.864,2.968,8.183,27.2-5.453,1.641-8.184-27.2-9.777,2.941-1.333-4.432,25.095-7.55Z\" transform=\"translate(-296.559 -1771.519)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M479.96,1802.668l-5.714.218-1.262-33.011,5.714-.218Z\" transform=\"translate(-330.655 -1769.657)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M543.483,1795.875a20.274,20.274,0,0,1-3.574,7.914,12.692,12.692,0,0,1-5.954,4.386,14.077,14.077,0,0,1-13.963-3.263,12.882,12.882,0,0,1-3.455-6.551,19.623,19.623,0,0,1,.215-8.548l.424-1.812a20.084,20.084,0,0,1,3.609-7.917,12.87,12.87,0,0,1,5.994-4.412,14.107,14.107,0,0,1,13.946,3.236,12.711,12.711,0,0,1,3.424,6.533,20.045,20.045,0,0,1-.249,8.644Zm-5.2-2.986q1.249-5.347-.106-8.669a7.326,7.326,0,0,0-11.4-2.675q-2.708,2.361-3.965,7.543l-.434,1.856q-1.239,5.3.15,8.679a6.829,6.829,0,0,0,5.057,4.234,6.751,6.751,0,0,0,6.372-1.492q2.661-2.361,3.931-7.8Z\" transform=\"translate(-348.754 -1771.893)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M601.54,1841.457l-4.8-3.144.519-27.675-12.838,19.608-4.8-3.144,18.095-27.638,4.8,3.144-.531,27.776,12.888-19.685,4.765,3.12Z\" transform=\"translate(-375.35 -1782.151)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M677.137,1931.743a10.972,10.972,0,0,1-5.391-2.856,20.287,20.287,0,0,1-4.308-5.911,14.22,14.22,0,0,1-1.61-7.416,12.542,12.542,0,0,1,2.606-6.827,18.848,18.848,0,0,1,6.5-5.278l2.312-1.159q6.694-3.355,12.063-2.036t8.246,7.059q2.471,4.928,1.481,9.055a11.787,11.787,0,0,1-5.28,7.011l-2.521-5.031q4.908-3.525,2.234-8.86a6.785,6.785,0,0,0-5.111-4q-3.382-.55-8.216,1.8l-2.269,1.138q-4.782,2.4-6.416,5.741a7.448,7.448,0,0,0,.167,6.934q1.973,3.935,4.591,4.7l5.781-2.9-3.05-6.086,3.894-1.952,5.612,11.2Z\" transform=\"translate(-411.475 -1824.245)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M700.018,1990.069l-.842-6.343-12.6,1.672-.755-5.69,32.748-4.346,1.528,11.516q.753,5.669-1.382,9.087t-6.952,4.058a9.3,9.3,0,0,1-5.714-.856,10.178,10.178,0,0,1-4-3.967l-12.661,9.164-.292.04-.808-6.1Zm3.746-6.952.776,5.849a6.563,6.563,0,0,0,2.048,4.306,5.106,5.106,0,0,0,4.185,1.093,5.438,5.438,0,0,0,3.872-2.036,6.412,6.412,0,0,0,.892-4.662l-.8-6Z\" transform=\"translate(-419.87 -1855.88)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M690.548,2064.965l2.465-12.556-7.032-4.109,1.15-5.855,30.014,18.608-.992,5.054-34.824,5.9,1.153-5.877Zm6.7-10.084-1.845,9.4,14.37-2.058Z\" transform=\"translate(-417.984 -1883.999)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M649.955,2135.523l2.95-4.925,27.673-.592-20.107-12.041,2.949-4.925,28.342,16.973-2.949,4.925-27.774.583,20.185,12.088L678.3,2152.5Z\" transform=\"translate(-404.834 -1913.59)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M621.915,2171.618l21.155,25.372-8.7,7.251q-4.3,3.588-7.991,3.738a7.913,7.913,0,0,1-6.534-3.267,7.132,7.132,0,0,1-1.674-3.921,7.888,7.888,0,0,1,.952-4.457,7.293,7.293,0,0,1-4.931.552,7.965,7.965,0,0,1-4.212-2.767,8.794,8.794,0,0,1-2.285-7.4q.693-3.828,4.963-7.388Zm5.138,15.125-6.611-7.929-4.9,4.083a6.167,6.167,0,0,0-2.384,3.73,4.7,4.7,0,0,0,1.214,3.831q3.3,3.956,7.414.672Zm2.7,3.242-4.321,3.6A6.513,6.513,0,0,0,623,2197.2a4.159,4.159,0,0,0,1.043,3.606,4.214,4.214,0,0,0,3.339,1.825,7.041,7.041,0,0,0,4.034-1.946l4.287-3.574Z\" transform=\"translate(-387.067 -1938.144)\" fill=\"#1a1818\" data-v-1194dc07></path><path d=\"M568.653,2231.4l-1.148,17.365-5.886,2.392,2.4-23.507-4.578-11.266,5.339-2.17,4.578,11.267,18.137,15.161-5.906,2.4Z\" transform=\"translate(-366.894 -1956)\" fill=\"#1a1818\" data-v-1194dc07></path></g></g></svg> <div data-v-1194dc07><h2 data-v-1194dc07><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.695\" height=\"99.682\" viewBox=\"0 0 21.695 99.682\" data-v-1194dc07><path d=\"M1156.017,2087.16H1143.7l9.382-99.682H1165.4Z\" transform=\"translate(-1143.703 -1987.478)\" fill=\"#eda008\" data-v-1194dc07></path></svg> <span data-v-1194dc07>Granby et la région <br data-v-1194dc07>en images</span></h2></div></div> "), _vm._ssrNode("<div class=\"galerie\" data-v-1194dc07>", "</div>", [_vm._ssrNode("<div class=\"col1\" data-v-1194dc07>", "</div>", [_c('nuxt-img', {
    attrs: {
      "src": "/images/tempo1.jpg"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col2\" data-v-1194dc07>", "</div>", [_c('nuxt-img', {
    attrs: {
      "src": "/images/tempo1.jpg"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-wrapper\" data-v-1194dc07>", "</div>", [_c('NuxtLink', {
    staticClass: "btn",
    attrs: {
      "to": ""
    }
  }, [_vm._v("Prêts à vous installer?")])], 1)], 2)], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Home/HomeGalerie.vue?vue&type=template&id=1194dc07&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Home/HomeGalerie.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(250)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1194dc07",
  "0cf9997a"
  
)

/* harmony default export */ var HomeGalerie = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-galerie.js.map