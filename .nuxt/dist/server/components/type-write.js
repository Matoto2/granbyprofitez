exports.ids = [23];
exports.modules = {

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TypeWrite.vue?vue&type=template&id=1e385e96&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('span', {
    staticStyle: {
      "min-height": "45px"
    }
  }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.typeValue)))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TypeWrite.vue?vue&type=template&id=1e385e96&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TypeWrite.vue?vue&type=script&lang=js&
/* harmony default export */ var TypeWritevue_type_script_lang_js_ = ({
  props: ["displayTextArray"],
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typingSpeed: 50,
      erasingSpeed: 30,
      newTextDelay: 1500,
      displayTextArrayIndex: 0,
      charIndex: 0,
      waitingErased: 300
    };
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },

  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length) this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + this.waitingErased);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/TypeWrite.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TypeWritevue_type_script_lang_js_ = (TypeWritevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TypeWrite.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TypeWritevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d9fddde"
  
)

/* harmony default export */ var TypeWrite = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=type-write.js.map