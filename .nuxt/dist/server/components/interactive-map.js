exports.ids = [13];
exports.modules = {

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0b2e587b", content, true, context)
};

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InteractiveMap_vue_vue_type_style_index_0_id_2d70248c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InteractiveMap_vue_vue_type_style_index_0_id_2d70248c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InteractiveMap_vue_vue_type_style_index_0_id_2d70248c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InteractiveMap_vue_vue_type_style_index_0_id_2d70248c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InteractiveMap_vue_vue_type_style_index_0_id_2d70248c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box-carte-interactive[data-v-2d70248c]{position:relative}.contact[data-v-2d70248c]{margin:1rem 0}.contact a[data-v-2d70248c]{text-decoration:none;padding:.2rem 0;display:inline-block}.business_name[data-v-2d70248c]{font-size:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LmMap/InteractiveMap.vue?vue&type=template&id=2d70248c&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "box-carte-interactive"
  }, [_c('GMap', {
    ref: "gMap",
    attrs: {
      "cluster": {
        options: {
          styles: _vm.clusterStyle
        }
      },
      "center": {
        lat: _vm.centerLat,
        lng: _vm.centerLng
      },
      "options": {
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative'
      },
      "zoom": 12
    },
    on: {
      "bounds_changed": _vm.checkForMarkers
    }
  }, _vm._l(_vm.locations, function (location) {
    return _c('GMapMarker', {
      key: location.id,
      attrs: {
        "position": {
          lat: location.lat,
          lng: location.lng
        }
      },
      on: {
        "click": function ($event) {
          _vm.currentLocation = location;
        }
      }
    }, [_c('GMapInfoWindow', [_c('strong', {
      staticClass: "business_name"
    }, [_vm._v(_vm._s(location.name))]), _vm._v(" "), _c('address', [_vm._v(_vm._s(location.address) + ","), _c('br'), _vm._v(_vm._s(location.city) + ", " + _vm._s(location.province) + " " + _vm._s(location.postal_code))]), _vm._v(" "), _c('div', {
      staticClass: "contact"
    }, [_c('div', [location.phone_1 ? _c('a', {
      attrs: {
        "href": 'tel:' + location.phone_1
      }
    }, [_vm._v("Téléphone: " + _vm._s(location.phone_1))]) : _vm._e()]), _vm._v(" "), _c('div', [location.email_1 ? _c('a', {
      attrs: {
        "href": 'mailto:' + location.email_1
      }
    }, [_vm._v("Courriel: " + _vm._s(location.email_1))]) : _vm._e()]), _vm._v(" "), _c('div', [location.website ? _c('a', {
      attrs: {
        "target": "_blank",
        "href": location.website
      }
    }, [_vm._v("Voir le site web")]) : _vm._e()])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(location.description))])])], 1);
  }), 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LmMap/InteractiveMap.vue?vue&type=template&id=2d70248c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LmMap/InteractiveMap.vue?vue&type=script&lang=js&
/* harmony default export */ var InteractiveMapvue_type_script_lang_js_ = ({
  props: ['locations', 'centerLat', 'centerLng'],

  data() {
    return {
      currentLocation: {},
      locationsVisibleOnMap: "",
      clusterStyle: [{
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }]
    };
  },

  methods: {
    checkForMarkers() {
      this.locations.forEach((location, i) => {
        if (this.$refs.gMap.markers[i]) {
          location.visible = this.$refs.gMap.map.getBounds().contains(this.$refs.gMap.markers[i].getPosition());
        }
      });
      this.locationsVisibleOnMap = this.locations.filter(l => l.visible).map(l => l.name).join(", ");
    }

  }
});
// CONCATENATED MODULE: ./components/LmMap/InteractiveMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var LmMap_InteractiveMapvue_type_script_lang_js_ = (InteractiveMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/LmMap/InteractiveMap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(218)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  LmMap_InteractiveMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2d70248c",
  "213f617f"
  
)

/* harmony default export */ var InteractiveMap = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=interactive-map.js.map