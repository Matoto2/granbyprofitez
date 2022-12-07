exports.ids = [10];
exports.modules = {

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(245);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0cde52b7", content, true, context)
};

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeImgLinks_vue_vue_type_style_index_0_id_27688bc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeImgLinks_vue_vue_type_style_index_0_id_27688bc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeImgLinks_vue_vue_type_style_index_0_id_27688bc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeImgLinks_vue_vue_type_style_index_0_id_27688bc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeImgLinks_vue_vue_type_style_index_0_id_27688bc4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grid-img-links[data-v-27688bc4]{position:relative;padding-bottom:7rem}.grid-img-links .container[data-v-27688bc4]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:2rem;gap:2rem}.grid-img-links[data-v-27688bc4]:after{content:\"\";width:100%;height:55%;background-color:#ecf0f5;display:block;position:absolute;bottom:0;left:0;z-index:-2;-webkit-clip-path:polygon(0 20%,100% 0,100% 100%,0 100%);clip-path:polygon(0 20%,100% 0,100% 100%,0 100%)}a[data-v-27688bc4]{position:relative;height:730px;display:flex;align-items:flex-end;text-decoration:none;overflow:hidden}img[data-v-27688bc4]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;z-index:-1}.infobox[data-v-27688bc4]{position:relative;background-color:rgba(65,65,65,.8);color:#fff;width:100%;padding:1.5rem 2.5rem;height:181px;display:flex;justify-content:center;flex-direction:column;transition:.5s}a:hover .infobox[data-v-27688bc4]{height:365px}h2[data-v-27688bc4]{font-size:2.3rem;text-transform:uppercase;font-weight:500;margin:0;transition:.3s}a:hover h2[data-v-27688bc4]{opacity:0}.hoverText[data-v-27688bc4]{position:absolute;top:2.5rem;left:2.5rem;text-transform:uppercase;font-size:1.6rem;font-weight:600;opacity:0;transition:.3s}a:hover .hoverText[data-v-27688bc4]{opacity:1}.linkarrow[data-v-27688bc4]{margin-top:1.5rem}.linkarrow svg[data-v-27688bc4]{height:40px;fill:#eda008}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeImgLinks.vue?vue&type=template&id=27688bc4&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "grid-img-links"
  }, [_vm._ssrNode("<div class=\"container\" data-v-27688bc4>", "</div>", _vm._l(_vm.links, function (link) {
    return _c('NuxtLink', {
      key: link.title,
      attrs: {
        "to": link.link
      }
    }, [_c('nuxt-img', {
      attrs: {
        "src": link.img
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "infobox"
    }, [_c('h2', [_vm._v(_vm._s(link.title))]), _vm._v(" "), _c('div', {
      staticClass: "hoverText"
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(link.hoverText)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "linkarrow"
    }, [_c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 448 512",
        "data-v-630ebb82": ""
      }
    }, [_c('path', {
      attrs: {
        "d": "M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z",
        "data-v-630ebb82": ""
      }
    })])])])])], 1);
  }), 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Home/HomeImgLinks.vue?vue&type=template&id=27688bc4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeImgLinks.vue?vue&type=script&lang=js&
/* harmony default export */ var HomeImgLinksvue_type_script_lang_js_ = ({
  data() {
    return {
      links: [{
        link: '#',
        img: '/images/deposit1.jpg',
        title: "Entreprise",
        hoverText: "Recrutement <br>à l'international <br>et accompagnement"
      }, {
        link: '#',
        img: '/images/deposit1.jpg',
        title: "Candidat international",
        hoverText: "Trouve un emploi <br>au Québec"
      }, {
        link: '#',
        img: '/images/deposit1.jpg',
        title: "Étudiant international",
        hoverText: "Planifie ton <br>projet d'étude"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Home/HomeImgLinks.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_HomeImgLinksvue_type_script_lang_js_ = (HomeImgLinksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Home/HomeImgLinks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(244)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_HomeImgLinksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "27688bc4",
  "705e1d7e"
  
)

/* harmony default export */ var HomeImgLinks = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-img-links.js.map