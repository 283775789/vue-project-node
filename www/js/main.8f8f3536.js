webpackJsonp([1],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'poppaneBase'
});

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twButtonBase'
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'designGuid',
  data: function data() {
    return {
      scssVars: [],
      styleEl: ''
    };
  },

  methods: {
    changeScssVars: function changeScssVars() {
      var vm = this;

      vm.axios.post('http://localhost:83/css', vm.scssVars).then(function (responed) {
        debugger;
        vm.styleEl.textContent = responed.data;
        debugger;
      }).catch(function (error) {
        debugger;
        console.log(error);
      });
    }
  },
  created: function created() {
    var vm = this;
    vm.styleEl = document.createElement('style');
    document.querySelector('head').appendChild(vm.styleEl);

    vm.axios.get('http://localhost:83/getScssVars').then(function (responed) {
      vm.scssVars = responed.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(116);


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_color_picker_css__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_color_picker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_color_picker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_theme_chalk_base_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_theme_chalk_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib_theme_chalk_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_color_picker__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_button_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_button_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config_components__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_directives__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__examples_config_demo_components_js__ = __webpack_require__(368);






// 引入样式


// 引入库及应用配置








__WEBPACK_IMPORTED_MODULE_6_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button___default.a);
__WEBPACK_IMPORTED_MODULE_6_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_color_picker___default.a);

__WEBPACK_IMPORTED_MODULE_6_vue__["default"].prototype.axios = __WEBPACK_IMPORTED_MODULE_7_axios___default.a;
window.Vue = __WEBPACK_IMPORTED_MODULE_6_vue__["default"];

// 解决ios click bug
var attachFastClick = __webpack_require__(113);
attachFastClick.attach(document.body);

// 创建Vue应用根实例
new __WEBPACK_IMPORTED_MODULE_6_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_9__config_router__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_8__app__["a" /* default */]);
  }
});

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tw_vue_markdown_markdown__ = __webpack_require__(41);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'intro',
  components: {
    twMarkdown: __WEBPACK_IMPORTED_MODULE_0__tw_vue_markdown_markdown__["a" /* default */]
  },
  data: function data() {
    return {
      markdownText: ''
    };
  },

  methods: {
    updateMarkdown: function updateMarkdown() {
      var vm = this;

      vm.axios('http://localhost:83/getMarkdown/?name=' + vm.$route.params.name).then(function (responed) {
        vm.markdownText = responed.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.updateMarkdown();
  },

  watch: {
    '$route': function $route() {
      this.updateMarkdown();
    }
  }
});

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard__);
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twMarkdown',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      renderer: null,
      codes: []
    };
  },

  methods: {
    updateContent: function updateContent() {
      var _this = this;

      var vm = this;

      vm.codes = [];

      var mdHtml = __WEBPACK_IMPORTED_MODULE_1_marked___default()(this.content, {
        renderer: vm.renderer,
        highlight: function highlight(code) {
          vm.codes.push(code);
          return '<a class="tw-markdown-copybtn js-copy">Copy</a>' + __WEBPACK_IMPORTED_MODULE_2_highlight_js___default.a.highlightAuto(code).value;
        }
      });

      this.$el.innerHTML = mdHtml;

      vm.$nextTick(function () {
        // 生成组件demo实例
        var componentDemos = _this.$el.querySelectorAll('.tw-dropdown-demo');

        for (var i = 0; i < componentDemos.length; i++) {
          new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
            el: componentDemos[i]
          });
        }

        // 添加代码复制功能
        var copyBtn = document.querySelectorAll('.js-copy');
        copyBtn.forEach(function (element, index) {
          var copy = new __WEBPACK_IMPORTED_MODULE_3_clipboard___default.a(element, {
            text: function text() {
              return vm.codes[index];
            }
          });

          copy.on('success', function (e) {
            e.trigger.innerHTML = 'Copied';
            setTimeout(function () {
              e.trigger.innerHTML = 'Copy';
            }, 1500);
          });
        });
      });
    }
  },
  created: function created() {
    this.renderer = new __WEBPACK_IMPORTED_MODULE_1_marked___default.a.Renderer();
    this.renderer.heading = function (text, level) {
      return '<h' + level + '>' + text + '</h' + level + '>';
    };
  },
  mounted: function mounted() {
    this.updateContent();
  },

  watch: {
    content: function content() {
      this.updateContent();
    }
  }
});

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'newProject',
  data: function data() {
    return {
      scssVars: [],
      compGroup: null,
      styleEl: null,
      currentComp: null,
      currentCompScssVar: [],
      demosVm: null,
      compOptions: []
    };
  },

  computed: {
    compScssVars: function compScssVars() {
      var result = null;

      this.scssVars.forEach(function (module) {
        if (module.name === '组件变量') {
          result = module;
        }
      });

      return result;
    }
  },
  created: function created() {
    var vm = this;
    vm.styleEl = document.createElement('style');
    document.querySelector('head').appendChild(vm.styleEl);

    vm.axios.get('http://localhost:83/getScssVars').then(function (responed) {
      vm.scssVars = responed.data;
    }).catch(function (error) {
      console.log(error);
    });

    vm.axios.get('http://localhost:83/examples/config/components.json').then(function (responed) {
      vm.compGroup = responed.data;
    }).catch(function (error) {
      console.log(error);
    });
  },

  methods: {
    changeScssVars: function changeScssVars() {
      var vm = this;
      vm.axios.post('http://localhost:83/css', vm.scssVars).then(function (responed) {
        vm.styleEl.textContent = responed.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    clickCompType: function clickCompType(type) {
      var _this = this;

      if (this.demosVm) this.demosVm.$destroy();

      // 生成组件demo
      this.demosVm = new window.Vue({
        el: '#demos',
        render: function render(h) {
          var demoVnodes = [];

          type.demos.forEach(function (demo) {
            demoVnodes.push(h('div', { attrs: { class: 'tw-title xsub' } }, demo.name));
            demoVnodes.push(h(demo.tag));
          });

          return h('div', { attrs: { id: 'demos' } }, [demoVnodes]);
        }
      });

      // 获取组件scss变量
      this.currentCompScssVar = [];
      this.compScssVars.children.forEach(function (compVars) {
        if (compVars.name === type.name) {
          _this.compOptions = [];

          compVars.children.forEach(function (compVar) {
            _this.compOptions.push(_this.createCompVarMap(compVar.value));
          });

          _this.currentCompScssVar = compVars;
        }
      });
    },

    // 通过变量名查找scssVars所在的组与模块
    createCompVarMap: function createCompVarMap(varName) {
      var modules = this.scssVars;

      for (var i = 0; i < modules.length; i++) {
        if (modules[i].name !== '组件变量') {
          var _ret = function () {
            var groups = modules[i].children;

            var _loop = function _loop(j) {
              var scssVars = groups[j].children;
              for (var n = 0; n < scssVars.length; n++) {
                if (scssVars[n].varName === varName) {
                  return {
                    v: {
                      v: [].concat(groups[j]).concat(groups.filter(function (group) {
                        return group !== groups[j] && group.type !== 'NoChange';
                      }))
                    }
                  };
                }
              }
            };

            for (var j = 0; j < groups.length; j++) {
              var _ret2 = _loop(j);

              if ((typeof _ret2 === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(_ret2)) === "object") return _ret2.v;
            }
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(_ret)) === "object") return _ret.v;
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.querySelector('head').removeChild(this.styleEl);
  }
});

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(91);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_bced26ea_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(154);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_app_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_bced26ea_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\app.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bced26ea", Component.options)
  } else {
    hotAPI.reload("data-v-bced26ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("div", { staticClass: "tw-header" }, [
        _c("div", { staticClass: "tw-header-inner" }, [
          _c(
            "h1",
            { staticClass: "tw-header-left" },
            [
              _c("router-link", { attrs: { to: "/" } }, [
                _c("img", { attrs: { src: "/static/images/logo-3d8eedb.png" } })
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "tw-header-body" }, [
            _c("ul", { staticClass: "tw-nav xheader xhorizontal" }, [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/doc/summary" } }, [
                    _c("span", [_vm._v("概要")])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    { staticClass: "js-delegate", attrs: { to: "/doc/guid" } },
                    [_c("span", [_vm._v("规范")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/doc/component" } }, [
                    _c("span", [_vm._v("组件")])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "a",
                    {
                      staticClass: "tw-popswitch xheader js-projects",
                      class: { xactive: /^\/project-/.test(_vm.$route.path) }
                    },
                    [_c("span", [_vm._v("项目")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "tw-poppane",
                    {
                      staticClass: "js-position",
                      attrs: { switch: ".js-projects" }
                    },
                    [
                      _c("ul", { staticClass: "tw-header-menu" }, [
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/project-new" } },
                              [_vm._v("新项目")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("li", [_c("a", [_vm._v("项目库")])])
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("li")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tw-header-right" },
            [
              _c(
                "a",
                { staticClass: "tw-popswitch xheader xcenter js-rightmenu" },
                [_vm._v("右侧内容")]
              ),
              _vm._v(" "),
              _c("tw-poppane", { attrs: { switch: ".js-rightmenu" } }, [
                _c("ul", { staticClass: "tw-header-menu" }, [
                  _c("li", [_c("a", [_vm._v("菜单项1菜单项1")])]),
                  _vm._v(" "),
                  _c("li", [_c("a", [_vm._v("菜单项2")])]),
                  _vm._v(" "),
                  _c("li", [_c("a", [_vm._v("菜单项3")])])
                ])
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "tw-to-bottom",
              rawName: "v-tw-to-bottom",
              value: 80,
              expression: "80"
            }
          ],
          staticClass: "tw-body"
        },
        [_c("router-view")],
        1
      ),
      _vm._v(" "),
      _c("tw-footer", {
        nativeOn: {
          click: function($event) {
            $event.stopPropagation()
            _vm.demoMethod($event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-bced26ea", esExports)
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twFooter'
});

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tw_utils_event__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tw_utils_placement__ = __webpack_require__(64);

//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  isTwPoppane: true,
  name: 'twPoppane',
  props: {
    switch: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: 'auto'
    },
    positionElement: {
      type: String,
      default: 'auto'
    },
    relatedMinWidth: {
      type: String,
      default: '100%',
      validator: function validator(value) {
        return (/^\d+(\.\d{1,5})?%$/.test(value)
        );
      }
    },
    noArrow: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      switchEl: null,
      popLayer: null,
      eventTarget: null,
      created: false,
      open: false,
      hasOpenChildPoppane: false
    };
  },

  methods: {
    isSwitchElement: function isSwitchElement(el) {
      var parent = el;

      do {
        if (parent.twPopSwitch) {
          return true;
        }
        parent = parent.parentNode;
      } while (parent);

      return false;
    },
    eachParent: function eachParent(callback) {
      var returnValue = null;
      var parent = this.switchEl.parentNode;

      for (var _len = arguments.length, agrs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        agrs[_key - 1] = arguments[_key];
      }

      while (parent) {
        if (parent.twPoppane) {
          returnValue = callback.apply(undefined, [parent.twPoppane].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(agrs)));
          if (returnValue.break) break;

          parent = parent.twPoppane.switchEl.parentNode;
        } else {
          parent = parent.parentNode;
        }
      }

      return returnValue !== null ? returnValue.value : false;
    },
    isParentSwitchElement: function isParentSwitchElement(eventTarget) {
      return this.eachParent(function (parentPoppane, eventTarget) {
        if (parentPoppane.switchEl.contains(eventTarget)) {
          return {
            break: true,
            value: true
          };
        }

        return {
          break: false,
          value: false
        };
      }, eventTarget);
    },
    setParent: function setParent(hasOpenChildPoppane) {
      var vm = this;

      this.eachParent(function (parentPoppane, hasOpenChildPoppane) {
        parentPoppane.hasOpenChildPoppane = hasOpenChildPoppane;

        if (!hasOpenChildPoppane && !parentPoppane.switchEl.contains(vm.eventTarget) && (!vm.isSwitchElement(vm.eventTarget) || vm.isParentSwitchElement(vm.eventTarget) || !parentPoppane.$el.contains(vm.eventTarget))) {
          parentPoppane.closePoppane();
        }

        return { break: true };
      }, hasOpenChildPoppane);
    },
    getParent: function getParent() {
      return this.eachParent(function (parentPoppane) {
        return {
          break: true,
          value: parentPoppane
        };
      });
    },
    openPoppane: function openPoppane() {
      var vm = this;
      vm.$emit('show');

      Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["d" /* toggleSpecialTransitionClass */])(this.$el, 'xopen', {
        type: 'add',
        endCallback: function endCallback() {
          vm.$emit('shown');
        }
      });
      Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["a" /* addClass */])(this.switchEl, 'xopen');
      this.open = true;
      this.setParent(true);
    },
    closePoppane: function closePoppane(event) {
      var vm = this;
      vm.$emit('hide');

      if (event) {
        this.eventTarget = event.target;
        if (this.hasOpenChildPoppane) return;
        if (this.switchEl.contains(event.target)) return;
        if (this.$el.contains(event.target) && this.isSwitchElement(event.target)) return;
      }

      Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["d" /* toggleSpecialTransitionClass */])(this.$el, 'xopen', {
        type: 'remove',
        endCallback: function endCallback() {
          vm.$emit('hidden');
        }
      });
      Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["b" /* removeClass */])(this.switchEl, 'xopen');
      this.open = false;
      this.setParent(false);
      this.switchEl.blur();
      document.removeEventListener('click', this.closePoppane, true);
    },
    togglePoppane: function togglePoppane(switchEl, event) {
      var _this = this;

      this.switchEl = switchEl;
      this.eventTarget = event.target;

      if (!this.created) {
        document.body.appendChild(this.popLayer);
        this.created = true;
      }

      if (!switchEl.twPopSwitch) {
        this.noArrow = true;
        this.initSwitch();
        var parent = this.getParent();

        while (parent) {
          parent.hasOpenChildPoppane = true;
          Object(__WEBPACK_IMPORTED_MODULE_1__tw_utils_event__["c" /* trigger */])(parent.switchEl, 'click');
          parent = parent.getParent();
        }
      }

      var poppaneEl = this.$el;
      var positionEl = this.positionElement === 'auto' ? switchEl : this.positionElement;
      var placementStyle = void 0;

      // 计算位置坐标
      if (!/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
        Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["c" /* setTempStyle */])(poppaneEl, 'visibility', 'hidden !important', function () {
          Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["a" /* addClass */])(poppaneEl, 'xopen');
          placementStyle = Object(__WEBPACK_IMPORTED_MODULE_3__tw_utils_placement__["a" /* placement */])(poppaneEl, positionEl, _this.relatedMinWidth)[_this.placement];
          Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["b" /* removeClass */])(poppaneEl, 'xopen');
        });
      }

      for (var name in placementStyle) {
        this.$el.style[name] = placementStyle[name];
      }

      if (/\bxopen\b/.test(poppaneEl.getAttribute('class'))) {
        this.closePoppane();
      } else {
        this.openPoppane();
        document.addEventListener('click', this.closePoppane, true);
      }
    },
    initSwitch: function initSwitch() {
      var switchEls = document.querySelectorAll(this.switch);
      var switchEl = void 0;

      for (var i = 0; i < switchEls.length; i++) {
        switchEl = switchEls[i];

        if (!this.noArrow) {
          var arrow = document.createElement('i');
          arrow.setAttribute('class', 'tw-triangle ' + { a: 'xdown', t: 'xdown', r: 'xright', b: 'xdown', l: 'xleft' }[this.placement.substring(0, 1)]);
          switchEl.appendChild(arrow);
          Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["a" /* addClass */])(switchEl, 'x' + this.placement);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["a" /* addClass */])(switchEl, 'xnoarrow');
        }

        switchEl.twPopSwitch = this;
      }
    }
  },
  created: function created() {
    Object(__WEBPACK_IMPORTED_MODULE_1__tw_utils_event__["a" /* delegate */])(document, 'click.' + this._uid, this.switch, this.togglePoppane);
  },
  mounted: function mounted() {
    var popLayer = document.createElement('div');
    popLayer.setAttribute('class', 'tw-poplayer');
    popLayer.appendChild(this.$el);
    this.popLayer = popLayer;
    this.$el.twPoppane = this;
    this.initSwitch();
  },
  beforeDestroy: function beforeDestroy() {
    Object(__WEBPACK_IMPORTED_MODULE_1__tw_utils_event__["b" /* delegateOff */])(document, 'click.' + this._uid);
    this.created && document.body.removeChild(this.popLayer);
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeClass; });
/* unused harmony export toggleClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setTempStyle; });
/* unused harmony export getToggleClassStyles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return toggleSpecialTransitionClass; });
/**
 * 元素添加class
 * @param {Node} el
 * @param {String} className
 */
var addClass = function addClass(el, className) {
  if (/\s/.test(className)) {
    throw new Error('className不能包含空格.');
  }

  var targetClass = el.getAttribute('class');
  var classReg = new RegExp('\\b' + className + '\\b');

  if (classReg.test(targetClass)) return;

  targetClass = (targetClass + ' ' + className).replace(/^ /, '');
  el.setAttribute('class', targetClass);
};

/**
 * 元素移除class
 * @param {Node} el
 * @param {String} className
 */
var removeClass = function removeClass(el, className) {
  if (/\s/.test(className)) {
    throw new Error('className不能包含空格.');
  }

  var classReg = new RegExp('(\\s|\\b)' + className + '\\b');

  var targetClass = el.getAttribute('class').replace(classReg, '').replace(/ $/, '');
  el.setAttribute('class', targetClass);
};

/**
 * 切换class
 * @param {Node} el
 * @param {String} className
 */
var toggleClass = function toggleClass(el, className) {
  var targetClass = el.getAttribute('class');

  if (targetClass.indexOf(className) !== -1) {
    removeClass(el, className);
    return 'remove';
  } else {
    addClass(el, className);
    return 'add';
  }
};

/**
 * 获取元素应用样式后的属性值
 * @param {Node} el
 * @param {String} className
 * @param {String} props
 */
var getToggleClassStyles = function getToggleClassStyles(el, className) {
  var originalTransition = el.style.transition;

  el.style.transition = 'none';
  toggleClass(el, className);

  var computedStyle = window.getComputedStyle(el);
  var value = {};

  for (var _len = arguments.length, props = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    props[_key - 2] = arguments[_key];
  }

  props.forEach(function (prop) {
    value[prop] = computedStyle[prop];
  });

  toggleClass(el, className);
  el.style.transition = originalTransition;

  /* eslint-disable no-unused-vars */
  var forceRepaint = el.offsetWidth;

  return value;
};

/**
 * 解决display:noen,width:auto,height:auto样式切换时不触发transition
 * @param {HTMLElement} el
 * @param {String} className
 * @param {Object} option
 * option.type 指定切换的类型，不指定时默认为toggle，可选的值为:toggle,add,remove
 * option.transitionClass 过渡状态时临时添加的过渡样式,在过渡开始时添加，完成时移除
 * option.widthAuto 指出需要解决width为 auto时的过渡效果
 * option.heightAuto 指出需要解决height为 auto时的过渡效果
 * option.startCallback 过渡开始时调用的函数
 * option.endCallback 过渡结束后调用的函数
 */
var toggleSpecialTransitionClass = function toggleSpecialTransitionClass(el, className) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var toggle = option.type;

  var toggleFunction = function toggleFunction() {
    if (toggle === 'add') {
      addClass(el, className);
    } else if (toggle === 'remove') {
      removeClass(el, className);
    } else {
      toggle = toggleClass(el, className);
    }
  };

  typeof option.startCallback === 'function' && option.startCallback();

  if (el.style.transition !== undefined) {
    var stylePropName = 'tw' + className + (option.transitionClass || '');

    // 获取当前的dispaly,width,height三个样式值
    var current = {
      display: window.getComputedStyle(el).display,
      width: el.offsetWidth + 'px',
      height: el.offsetHeight + 'px'

      // 保存或还原最初的style值
    };if (typeof el[stylePropName] !== 'undefined') {
      el.setAttribute('style', el[stylePropName] || '');
    } else {
      el[stylePropName] = el.getAttribute('style');
    }

    // 获取切换className后的三个样式值
    var target = getToggleClassStyles(el, className, 'display', 'width', 'height');

    // 修改过渡开始时的辅助样式
    el.style.display = current.display === 'none' ? target.display : current.display;
    if (option.widthAuto) el.style.width = current.width;
    if (option.heightAuto) el.style.height = current.height;
    /* eslint-disable no-unused-vars */
    var forceRepaint = el.offsetWidth;

    // 设置下一帧时的辅助样式,以触发过渡
    var setNextFrame = function setNextFrame() {
      if (option.widthAuto) el.style.width = target.width;
      if (option.heightAuto) el.style.height = target.height;
    };

    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(setNextFrame);
    } else {
      setTimeout(setNextFrame, 17);
    }

    // 设置过渡中间样式
    if (typeof option.transitionClass === 'string') addClass(el, option.transitionClass);

    // 过渡结束调用函数
    el.removeEventListener('transitionend', el[stylePropName + 'end']);

    var end = function end() {
      el.setAttribute('style', el[stylePropName] || '');
      removeClass(el, option.transitionClass);
      el.removeEventListener('transitionend', end);
      delete el[stylePropName];
      delete el[stylePropName + 'end'];
      typeof option.endCallback === 'function' && option.endCallback(toggle);
    };

    el[stylePropName + 'end'] = end;

    el.addEventListener('transitionend', end);
    toggleFunction();
  } else {
    toggleFunction();
    typeof option.endCallback === 'function' && option.endCallback(toggle);
  }
};

/**
 * 设置临时样式值
 * @param {HTMLElement} el
 * @param {String} name
 * 样式属性名称
 * @param {String} value
 * 临时样式值
 * @param {Function} callback
 * 设置临时样式完成后的回调函数
 */
var setTempStyle = function setTempStyle(el, name, value, callback) {
  var originalValue = el.style[name];
  el.style[name] = value;
  callback();
  el.style[name] = originalValue;
};



/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tw_utils_event__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tw_utils_dom__ = __webpack_require__(23);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twCollapse',
  props: {
    switch: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      switchEl: null
    };
  },

  methods: {
    openCollapse: function openCollapse() {
      var vm = this;
      Object(__WEBPACK_IMPORTED_MODULE_1__tw_utils_dom__["d" /* toggleSpecialTransitionClass */])(this.$el, 'xopen', {
        type: 'add',
        transitionClass: 'xtoggling',
        heightAuto: true,
        endCallback: function endCallback() {
          vm.$emit('shown');
        }
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__tw_utils_dom__["a" /* addClass */])(this.switchEl, 'xopen');
    },
    closeCollapse: function closeCollapse() {
      var vm = this;
      Object(__WEBPACK_IMPORTED_MODULE_1__tw_utils_dom__["d" /* toggleSpecialTransitionClass */])(this.$el, 'xopen', {
        type: 'remove',
        transitionClass: 'xtoggling',
        heightAuto: true,
        endCallback: function endCallback() {
          vm.$emit('hidden');
        }
      });
      Object(__WEBPACK_IMPORTED_MODULE_1__tw_utils_dom__["b" /* removeClass */])(this.switchEl, 'xopen');
    },
    toggleCollapse: function toggleCollapse(switchEl) {
      this.switchEl = switchEl;

      if (/\bxopen\b/.test(this.$el.getAttribute('class'))) {
        this.$emit('hide');
        this.closeCollapse();
      } else {
        this.$emit('show');
        this.openCollapse();
      }
    }
  },
  created: function created() {
    Object(__WEBPACK_IMPORTED_MODULE_0__tw_utils_event__["a" /* delegate */])(document, 'click.' + this._uid, this.switch, this.toggleCollapse);
  },
  beforeDestroy: function beforeDestroy() {
    Object(__WEBPACK_IMPORTED_MODULE_0__tw_utils_event__["b" /* delegateOff */])(document, 'click.' + this._uid);
  }
});

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tw_utils_event__ = __webpack_require__(7);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twCollapseGroup',
  data: function data() {
    return {
      activeCollapse: null
    };
  },

  methods: {
    initCollapses: function initCollapses() {
      var vm = this;
      var children = this.$children;

      children.forEach(function (child) {
        if (child.$options.name === 'twCollapse') {
          child.$on('show', function () {
            if (vm.activeCollapse && vm.activeCollapse !== child) {
              vm.activeCollapse.closeCollapse();
            }
            vm.activeCollapse = child;
          });

          child.$on('hide', function () {
            vm.activeCollapse === child && (vm.activeCollapse = null);
          });
        }
      });
    },
    initInactiveBtn: function initInactiveBtn() {
      var vm = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__tw_utils_event__["a" /* delegate */])(vm.$el, 'click.' + this._uid, '.jst-close', function () {
        var activeCollapse = vm.activeCollapse;

        if (activeCollapse) {
          activeCollapse.closeCollapse();
          vm.activeCollapse = null;
        }
      });
    }
  },
  mounted: function mounted() {
    this.initCollapses();
    this.initInactiveBtn();
  }
});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tw_mixins_select_list__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twList',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__tw_mixins_select_list__["a" /* default */]],
  props: {
    filterText: {
      type: String,
      default: ''
    },
    link: {
      type: String
    }
  },
  mounted: function mounted() {
    if (this.link) {
      this.displayElement = document.querySelector(this.link);
      if (!this.displayElement) throw Error('\u4F7F\u7528\u5C5E\u6027link\u672A\u67E5\u627E\u5230\u4EFB\u4F55\u5143\u7D20\uFF0C\u8BF7\u786E\u5B9Alink\u6307\u5B9A\u7684\u9009\u62E9\u5668\u662F\u5426\u6B63\u786E\u5E76\u786E\u4FDDlink\u6307\u5411\u7684\u5143\u7D20\u5DF2\u7ECF\u5728\u9875\u9762\u4E2D\u6E32\u67D3!');
      if (typeof this.displayElement.value !== 'undefined') {
        this.displayElement.value = this.labelText;
        this.labelVisible = false;
      } else {
        this.displayElement.appendChild(this.$refs.listLabel);
      }
    }
  },

  watch: {
    value: function value() {
      this.displayElement.value = this.labelText;
    }
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tw_mixins_select_list__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twSelect',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__tw_mixins_select_list__["a" /* default */]],
  data: function data() {
    return {
      filterText: '',
      switchSelector: ''
    };
  },

  methods: {
    focusInput: function focusInput() {
      this.$refs.filter.select();
    },
    hidePane: function hidePane() {
      this.$refs.filter.blur();
    }
  },
  created: function created() {
    this.switchSelector = 'js-tw-poppane-switch-select-' + this._uid;
  },
  mounted: function mounted() {
    this.$refs.filter.value = this.labelText;
  },

  watch: {
    value: function value() {
      this.$refs.filter.value = this.labelText;
      this.filterText = '';
    }
  }
});

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tw_mixins_select_list__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tw_mixins_select__ = __webpack_require__(75);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twSelectGroup',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__tw_mixins_select_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__tw_mixins_select__["a" /* default */]],
  props: {
    group: {
      type: Object,
      required: true,
      validator: function validator(value) {
        return typeof value.nameKey === 'string' && typeof value.itemsKey === 'string';
      }
    }
  },
  computed: {
    resultItems: function resultItems() {
      var _this = this;

      var vm = this;
      var result = [];

      this.items.forEach(function (item) {
        result.push(item[_this.group.nameKey]);
        result = result.concat(item[vm.group.itemsKey]);
      });

      return result;
    }
  },
  methods: {
    getselectedItem: function getselectedItem(val) {
      var _this2 = this;

      if (this.multiple) {
        this.selectedItem = this.resultItems.filter(function (element) {
          return val.indexOf(element[_this2.valueKey]) !== -1;
        });
      } else {
        for (var i = 0; i < this.resultItems.length; i++) {
          if (val === this.resultItems[i][this.valueKey]) {
            this.selectedItem = this.resultItems[i];
            break;
          }
        }
      }
    }
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twDraggrid',
  props: {
    enableDrag: {
      type: Boolean,
      default: false
    },
    colsData: {
      type: Array,
      required: true
    },
    colspanKey: {
      type: String,
      default: 'colspan'
    },
    idKey: {
      type: String,
      required: true
    },
    draggableKey: {
      type: String,
      default: 'draggable'
    },
    cols: {
      type: Number,
      default: 1
    },
    heightSpan: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      resultColsData: [],
      colStyles: [],
      resultStyles: [],
      lockDrag: false,
      currentDragIndex: 0,
      gridHeight: 0
    };
  },

  methods: {
    updateStyles: function updateStyles() {
      var vm = this;
      vm.resultStyles = [];

      vm.colStyles.forEach(function (colStyle) {
        var result = {};
        result.statusClass = {};
        result.statusClass.xdropping = false;
        result.statusClass.xdragging = false;
        result.statusClass.xresizing = false;

        for (var key in colStyle) {
          if (key === 'top') {
            result[key] = colStyle[key] + 'px';
          } else {
            result[key] = colStyle[key] * 100 + '%';
          }
        }
        vm.resultStyles.push(result);
      });

      vm.$emit('change', vm.resultColsData);
    },
    layout: function layout() {
      var _this = this;

      var vm = this;
      var cols = this.cols;
      vm.colStyles = [];
      var tops = new Array(cols).fill(0); // 每列的当前top值
      var currentCol = 0; // 当前列
      var left = 0;

      vm.resultColsData.forEach(function (col, index) {
        var colspan = col[vm.colspanKey];
        var colStyle = {};

        var top = 0;

        if (currentCol + colspan > cols && currentCol !== 0) {
          currentCol = 0;
          left = 0;
        }

        top = tops[currentCol];

        if (colspan > 1) {
          tops.forEach(function (t, n) {
            if (n > currentCol && n < currentCol + colspan && t > top) {
              top = t;
            }
          });
        }

        colStyle.left = left;
        colStyle.top = top;
        colStyle.width = colspan / vm.cols;
        left += colStyle.width;

        vm.colStyles.push(colStyle);
        top = top + vm.$refs['col' + index][0].offsetHeight;

        for (var i = currentCol; i < currentCol + colspan; i++) {
          tops[i] = top;
        }

        currentCol += colspan;
      });

      vm.gridHeight = Math.max.apply(Math, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(tops)) + 'px';
      vm.$nextTick(function () {
        _this.updateStyles();
        vm.$emit('change', _this.resultColsData);
      });
    },
    handleDragStart: function handleDragStart(index, event) {
      this.currentDragIndex = index;
      this.resultStyles[index].statusClass.xdragging = true;

      event.dataTransfer.setDragImage(document.createElement('img'), 0, 0);
    },
    handleDragend: function handleDragend(index, event) {
      this.resultStyles[index].statusClass.xdragging = false;
    },
    handleDrop: function handleDrop(index) {
      var _this2 = this;

      var dragCol = this.resultColsData[this.currentDragIndex];
      var dropCol = this.resultColsData[index];
      var resultStyle = this.resultStyles[index];

      if (dragCol === dropCol) {
        resultStyle.statusClass.xdropping = false;
        resultStyle.statusClass.xdragging = false;
        return;
      }

      var dragColspan = dragCol.colspan;
      var dropColspan = dropCol.colspan;

      dragCol.colspan = dropColspan;
      dropCol.colspan = dragColspan;

      this.resultColsData.splice(this.currentDragIndex, 1, dropCol);
      this.resultColsData.splice(index, 1, dragCol);

      this.$nextTick(function () {
        _this2.layout();
        _this2.$emit('swap', dragCol, dropCol);
      });
    },
    handleDragenter: function handleDragenter(index, event) {
      this.resultStyles[index].statusClass.xdropping = true;
    },
    handleDragleave: function handleDragleave(index, event) {
      this.resultStyles[index].statusClass.xdropping = false;
    },
    handleDragover: function handleDragover(index, event) {
      this.resultStyles[index].statusClass.xdropping = true;
      event.preventDefault();
    },
    handleResize: function handleResize(index, event) {
      var vm = this;
      vm.resultStyles[index].statusClass.xresizing = true;
      vm.lockDrag = true;

      var col = vm.resultColsData[index];
      var originalX = event.pageX;
      var resultStyle = this.resultStyles[index];
      var colWidth = resultStyle.width;
      var colLeft = resultStyle.left;
      var span = col.colspan;
      var unitWidth = 1 / this.cols * 100;
      var resultSpan = span;

      var resizeBox = document.createElement('div');
      resizeBox.setAttribute('class', 'tw-draggrid-resizebox');
      resizeBox.style.width = colWidth;
      resizeBox.style.height = vm.$refs['col' + index][0].offsetHeight + 'px';
      resizeBox.style.left = colLeft;
      resizeBox.style.top = resultStyle.top;
      vm.$el.appendChild(resizeBox);

      var resizeReady = function resizeReady(event) {
        event.preventDefault();
        var increment = (event.pageX - originalX) / vm.$el.offsetWidth * 100;
        var resultWidth = parseFloat(colWidth) + increment;

        if (colLeft + resultWidth > 100 || resultWidth < unitWidth) return;

        var incrementSpan = increment >= 0 ? (increment / unitWidth).toFixed(0) : Math.floor(increment / unitWidth);
        resultSpan = span + parseInt(incrementSpan);

        resizeBox.style.width = unitWidth * resultSpan + '%';
      };

      document.addEventListener('mousemove', resizeReady);

      var resizeCol = function resizeCol() {
        document.removeEventListener('mousemove', resizeReady);
        document.removeEventListener('mouseup', resizeCol);
        vm.$el.removeChild(resizeBox);
        vm.lockDrag = false;

        if (resultSpan === span) {
          resultStyle.statusClass.xresizing = false;
          return;
        }

        col.colspan = resultSpan;
        vm.$emit('resize', col, span, resultSpan);
        vm.layout();
      };

      document.addEventListener('mouseup', resizeCol);
    }
  },
  created: function created() {
    this.resultColsData = this.colsData;
  },
  mounted: function mounted() {
    this.layout(true);
  },

  watch: {
    colsData: function colsData(value) {
      var _this3 = this;

      this.resultColsData = value;
      this.$nextTick(function () {
        _this3.layout(true);
      });
    }
  }
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twDraggridCol',
  props: {
    no: {
      type: Number,
      required: true
    },
    colspan: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      top: 0,
      left: 0,
      width: 0
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.$emit('ok', this);
  }
});

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
// 注册通用的全局指令

var handleScroll = void 0;

// 仿position:sticky
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].directive('tw-sticky', {
  bind: function bind(el, binding) {
    handleScroll = function handleScroll(e) {
      var body = document.body;
      var html = document.documentElement;
      var docHeight = Math.max(body.offsetHeight, body.scrollHeight, html.clientHeight, html.offsetHeight, html.scrollHeight);

      var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

      var resetEl = function resetEl() {
        el.style.position = '';
        el.style.bottom = '';
        el.style.width = '';
        el.style.left = '';
      };

      var arg = binding.arg ? binding.arg : 'top';
      var toSticky = function toSticky() {
        var elRect = el.getBoundingClientRect();
        el.style.width = elRect.width + 'px';
        el.style.left = elRect.left + 'px';
        el.style.position = 'fixed';
        el.style[arg] = '0';
      };

      if (binding.arg === 'bottom') {
        if (docHeight - scrollTop - window.innerHeight > binding.value) {
          toSticky();
        } else {
          resetEl();
        }
      } else {
        if (scrollTop > binding.value) {
          toSticky();
        } else {
          resetEl();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    document.body.addEventListener('DOMSubtreeModified', handleScroll);
  },
  unbind: function unbind() {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
    document.body.addEventListener('DOMSubtreeModified', handleScroll);
  }
});

// 初始化元素的高度
var updateHeight = void 0;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].directive('tw-to-bottom', {
  inserted: function inserted(el, binding) {
    updateHeight = function updateHeight() {
      var rect = el.getBoundingClientRect();
      var top = rect.top + window.pageYOffset - document.documentElement.clientTop;
      var diffHeight = window.innerHeight - top;

      if (typeof binding.value === 'number') {
        diffHeight -= binding.value;
      }

      if (binding.modifiers.fixed) {
        el.style.height = diffHeight + 'px';
      } else {
        el.style.minHeight = diffHeight + 'px';
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
  },
  unbind: function unbind() {
    window.removeEventListener('resize', updateHeight);
  }
});

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__examples_demo_poppane_base__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_demo_button_base__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_docs_design__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_docs_dev_flow__ = __webpack_require__(375);
// 注册通用的全局组件






var components = [__WEBPACK_IMPORTED_MODULE_1__examples_demo_poppane_base__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__examples_demo_button_base__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__examples_docs_design__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__examples_docs_dev_flow__["default"]];

components.forEach(function (component) {
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component(component.name, component);
});

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_poppane_base_vue__ = __webpack_require__(109);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_50910ff1_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_poppane_base_vue__ = __webpack_require__(370);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_poppane_base_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_50910ff1_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_poppane_base_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\examples\\demo\\poppane-base.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50910ff1", Component.options)
  } else {
    hotAPI.reload("data-v-50910ff1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("tw-poppane", { attrs: { switch: ".js-popbtn" } }, [
        _c("div", [_vm._v("下拉菜单内容")])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "tw-popswitch js-popbtn" }, [
      _c("span", [_vm._v("下拉菜单")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-50910ff1", esExports)
  }
}

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_button_base_vue__ = __webpack_require__(110);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_1aa9f5b0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_button_base_vue__ = __webpack_require__(372);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_button_base_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_1aa9f5b0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_button_base_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\examples\\demo\\button-base.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1aa9f5b0", Component.options)
  } else {
    hotAPI.reload("data-v-1aa9f5b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("a", { staticClass: "tw-btn xmain" }, [_vm._v("主按钮")]),
      _vm._v(" "),
      _c("a", { staticClass: "tw-btn xauxiliary" }, [_vm._v("辅按钮")]),
      _vm._v(" "),
      _c("a", { staticClass: "tw-btn xweaking" }, [_vm._v("弱化按钮")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1aa9f5b0", esExports)
  }
}

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_design_vue__ = __webpack_require__(111);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_203bb9f2_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_design_vue__ = __webpack_require__(374);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_design_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_203bb9f2_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_design_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\examples\\docs\\design.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-203bb9f2", Component.options)
  } else {
    hotAPI.reload("data-v-203bb9f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.scssVars.length > 0
    ? _c("div", [
        _c("h2", [_vm._v("颜色体系")]),
        _vm._v(" "),
        _c("table", [
          _vm._m(0),
          _vm._v(" "),
          _c("tbody", [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _c("tr", [
              _c(
                "td",
                { staticClass: "tw-scsstd", attrs: { colspan: "4" } },
                [
                  _c("div", { staticClass: "tw-title xsub" }, [
                    _vm._v("主题色-示例")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.scssVars[1].children[0].children, function(
                    scssVar,
                    index
                  ) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "tw-scssvar",
                        attrs: { title: scssVar.varName + ":" + scssVar.value }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tw-scssvar-body" },
                          [
                            _c("el-color-picker", {
                              staticClass: "tw-colorcell",
                              on: { change: _vm.changeScssVars },
                              model: {
                                value: scssVar.value,
                                callback: function($$v) {
                                  _vm.$set(scssVar, "value", $$v)
                                },
                                expression: "scssVar.value"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "tw-scssvar-title" }, [
                          _vm._v(_vm._s(scssVar.name))
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _c("tr", [
              _c(
                "td",
                { staticClass: "tw-scsstd", attrs: { colspan: "4" } },
                [
                  _c("div", { staticClass: "tw-title xsub" }, [
                    _vm._v("背景色-示例")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.scssVars[1].children[2].children, function(
                    scssVar,
                    index
                  ) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "tw-scssvar",
                        attrs: { title: scssVar.varName + ":" + scssVar.value }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tw-scssvar-body" },
                          [
                            _c("el-color-picker", {
                              staticClass: "tw-colorcell",
                              on: { change: _vm.changeScssVars },
                              model: {
                                value: scssVar.value,
                                callback: function($$v) {
                                  _vm.$set(scssVar, "value", $$v)
                                },
                                expression: "scssVar.value"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "tw-scssvar-title" }, [
                          _vm._v(_vm._s(scssVar.name))
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm._m(9),
            _vm._v(" "),
            _vm._m(10),
            _vm._v(" "),
            _vm._m(11),
            _vm._v(" "),
            _c("tr", [
              _c(
                "td",
                { staticClass: "tw-scsstd", attrs: { colspan: "4" } },
                [
                  _c("div", { staticClass: "tw-title xsub" }, [
                    _vm._v("标识色-示例")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.scssVars[1].children[1].children, function(
                    scssVar,
                    index
                  ) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "tw-scssvar",
                        attrs: { title: scssVar.varName + ":" + scssVar.value }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tw-scssvar-body" },
                          [
                            _c("el-color-picker", {
                              staticClass: "tw-colorcell",
                              on: { change: _vm.changeScssVars },
                              model: {
                                value: scssVar.value,
                                callback: function($$v) {
                                  _vm.$set(scssVar, "value", $$v)
                                },
                                expression: "scssVar.value"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "tw-scssvar-title" }, [
                          _vm._v(_vm._s(scssVar.name))
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm._m(12),
            _vm._v(" "),
            _vm._m(13),
            _vm._v(" "),
            _vm._m(14),
            _vm._v(" "),
            _vm._m(15),
            _vm._v(" "),
            _vm._m(16),
            _vm._v(" "),
            _vm._m(17),
            _vm._v(" "),
            _vm._m(18),
            _vm._v(" "),
            _vm._m(19),
            _vm._v(" "),
            _c("tr", [
              _c(
                "td",
                { staticClass: "tw-scsstd", attrs: { colspan: "4" } },
                [
                  _c("div", { staticClass: "tw-title xsub" }, [
                    _vm._v("文本色-示例")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.scssVars[1].children[3].children, function(
                    scssVar,
                    index
                  ) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "tw-scssvar",
                        attrs: { title: scssVar.varName + ":" + scssVar.value }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tw-scssvar-body" },
                          [
                            _c("el-color-picker", {
                              staticClass: "tw-colorcell",
                              on: { change: _vm.changeScssVars },
                              model: {
                                value: scssVar.value,
                                callback: function($$v) {
                                  _vm.$set(scssVar, "value", $$v)
                                },
                                expression: "scssVar.value"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "tw-scssvar-title" }, [
                          _vm._v(_vm._s(scssVar.name))
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm._m(20),
            _vm._v(" "),
            _vm._m(21),
            _vm._v(" "),
            _vm._m(22),
            _vm._v(" "),
            _c("tr", [
              _c(
                "td",
                { staticClass: "tw-scsstd", attrs: { colspan: "4" } },
                [
                  _c("div", { staticClass: "tw-title xsub" }, [
                    _vm._v("边框色-示例")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.scssVars[1].children[4].children, function(
                    scssVar,
                    index
                  ) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "tw-scssvar",
                        attrs: { title: scssVar.varName + ":" + scssVar.value }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "tw-scssvar-body" },
                          [
                            _c("el-color-picker", {
                              staticClass: "tw-colorcell",
                              on: { change: _vm.changeScssVars },
                              model: {
                                value: scssVar.value,
                                callback: function($$v) {
                                  _vm.$set(scssVar, "value", $$v)
                                },
                                expression: "scssVar.value"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "tw-scssvar-title" }, [
                          _vm._v(_vm._s(scssVar.name))
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v("字体体系")]),
        _vm._v(" "),
        _c("table", [
          _vm._m(23),
          _vm._v(" "),
          _c("tbody", [
            _vm._m(24),
            _vm._v(" "),
            _vm._m(25),
            _vm._v(" "),
            _vm._m(26),
            _vm._v(" "),
            _vm._m(27),
            _vm._v(" "),
            _vm._m(28),
            _vm._v(" "),
            _vm._m(29),
            _vm._v(" "),
            _c("tr", [
              _c(
                "td",
                { staticClass: "tw-scsstd", attrs: { colspan: "4" } },
                [
                  _c("div", { staticClass: "tw-title xsub" }, [
                    _vm._v("字号-示例")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.scssVars[2].children[1].children, function(
                    scssVar,
                    index
                  ) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "tw-scssvar",
                        attrs: { title: scssVar.varName + ":" + scssVar.value }
                      },
                      [
                        _c("div", { staticClass: "tw-scssvar-body" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: scssVar.value,
                                expression: "scssVar.value"
                              }
                            ],
                            staticClass: "tw-scssvar-value",
                            style: {
                              fontSize:
                                parseInt(scssVar.value) < 10
                                  ? "10px"
                                  : scssVar.value
                            },
                            attrs: { type: "text" },
                            domProps: { value: scssVar.value },
                            on: {
                              change: _vm.changeScssVars,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(scssVar, "value", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "tw-scssvar-title" }, [
                          _vm._v(_vm._s(scssVar.name))
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v("间距体系")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。"
          )
        ]),
        _vm._v(" "),
        _c("table", [
          _vm._m(30),
          _vm._v(" "),
          _c("tbody", [
            _vm._m(31),
            _vm._v(" "),
            _vm._m(32),
            _vm._v(" "),
            _vm._m(33),
            _vm._v(" "),
            _vm._m(34),
            _vm._v(" "),
            _vm._m(35),
            _vm._v(" "),
            _vm._m(36),
            _vm._v(" "),
            _vm._m(37),
            _vm._v(" "),
            _c("tr", [
              _c(
                "td",
                { staticClass: "tw-scsstd", attrs: { colspan: "4" } },
                [
                  _c("div", { staticClass: "tw-title xsub" }, [
                    _vm._v("间距-示例")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.scssVars[3].children[1].children, function(
                    scssVar,
                    index
                  ) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "tw-scssvar",
                        style: { marginLeft: index === 0 ? 0 : scssVar.value },
                        attrs: { title: scssVar.varName }
                      },
                      [
                        _c("div", { staticClass: "tw-scssvar-body" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: scssVar.value,
                                expression: "scssVar.value"
                              }
                            ],
                            staticClass: "tw-scssvar-value",
                            attrs: { type: "text" },
                            domProps: { value: scssVar.value },
                            on: {
                              change: _vm.changeScssVars,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(scssVar, "value", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "tw-scssvar-title" }, [
                          _vm._v(_vm._s(scssVar.name))
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v("尺寸体系")]),
        _vm._v(" "),
        _vm._m(38),
        _vm._v(" "),
        _c("h2", [_vm._v("响应式体系")]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "响应式布局，从用户体验与业界主流应用来说，并不推荐同时响应PC,Pad,phone三端的设计模式，框架体系依然保留了bootstrap的响应式体系，但为了更自然的书写css，pc-web端摒弃了Bootstrap的移动端优先原则，而改为了PC端优先。"
          )
        ]),
        _vm._v(" "),
        _vm._m(39)
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("颜色集")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("概要")]),
        _vm._v(" "),
        _c("th", [_vm._v("成员")]),
        _vm._v(" "),
        _c("th", [_vm._v("应用场景")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { rowspan: "5" } }, [_vm._v("主题色")]),
      _vm._v(" "),
      _c("td", { attrs: { rowspan: "5" } }, [
        _vm._v("品牌定位,引导用户行为,分离主次关系等。")
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("主色")]),
      _vm._v(" "),
      _c("td", [_vm._v("主按钮背景、导航背景、主视觉单元")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("辅色")]),
      _vm._v(" "),
      _c("td", [_vm._v("辅助按钮背景、次视觉单元")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("弱化色")]),
      _vm._v(" "),
      _c("td", [_vm._v("弱化按钮背景、弱化视觉单元")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("滑过色(自动计算)")]),
      _vm._v(" "),
      _c("td", [
        _vm._v("相关视觉单元鼠标滑过效果"),
        _c("br"),
        _vm._v("计算公式:饱和度增加6%,亮度降低6%")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("激活色(自动计算)")]),
      _vm._v(" "),
      _c("td", [
        _vm._v("相关视觉单元激活，选中效果"),
        _c("br"),
        _vm._v("计算公式:饱和度增加10%,亮度降低10%")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { rowspan: "3" } }, [_vm._v("背景色")]),
      _vm._v(" "),
      _c("td", { attrs: { rowspan: "3" } }, [_vm._v("划分区块或功能")]),
      _vm._v(" "),
      _c("td", [_vm._v("页面背景")]),
      _vm._v(" "),
      _c("td", [_vm._v("页面主体背景")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("页脚背景")]),
      _vm._v(" "),
      _c("td", [_vm._v("页面底部版权信息区背景")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("禁用背景")]),
      _vm._v(" "),
      _c("td", [_vm._v("按钮禁用，或表单控件禁用等")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { rowspan: "3" } }, [_vm._v("标识色")]),
      _vm._v(" "),
      _c("td", { attrs: { rowspan: "3" } }, [
        _vm._v("提示操作级别，系统的感情色彩呈现。")
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("成功")]),
      _vm._v(" "),
      _c("td", [_vm._v("提示正常完成的反馈信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("警告")]),
      _vm._v(" "),
      _c("td", [_vm._v("提示不可恢复或有风险的信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("错误")]),
      _vm._v(" "),
      _c("td", [_vm._v("提示异常信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { rowspan: "8" } }, [_vm._v("文本色")]),
      _vm._v(" "),
      _c("td", { attrs: { rowspan: "8" } }, [
        _vm._v("让用户快速识别关键信息，区分信息层级")
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("主文本色")]),
      _vm._v(" "),
      _c("td", [_vm._v("一般为系统的默认字体颜色,主要内容")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("辅助文本")]),
      _vm._v(" "),
      _c("td", [_vm._v("次要信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("弱化文本")]),
      _vm._v(" "),
      _c("td", [_vm._v("突显主文本，表达参考信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("禁用文本")]),
      _vm._v(" "),
      _c("td", [_vm._v("用于禁用按钮等")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("高亮文本")]),
      _vm._v(" "),
      _c("td", [_vm._v("要求识别度最高的关键信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("错误文本")]),
      _vm._v(" "),
      _c("td", [_vm._v("表单错误提示等")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("链接色")]),
      _vm._v(" "),
      _c("td", [_vm._v("用于链接，标签等")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("占位文本")]),
      _vm._v(" "),
      _c("td", [_vm._v("表单占位提示信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { rowspan: "3" } }, [_vm._v("边框色")]),
      _vm._v(" "),
      _c("td", { attrs: { rowspan: "3" } }, [
        _vm._v("模块划分, 降低用户学习成本")
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("主边框")]),
      _vm._v(" "),
      _c("td", [_vm._v("不同模块区分")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("辅边框")]),
      _vm._v(" "),
      _c("td", [_vm._v("同模块内容区分")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("禁用边框")]),
      _vm._v(" "),
      _c("td", [_vm._v("用于特定的禁用元素")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("分类")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("概要")]),
        _vm._v(" "),
        _c("th", [_vm._v("成员")]),
        _vm._v(" "),
        _c("th", [_vm._v("应用场景")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { rowspan: "2" } }, [_vm._v("字体家族")]),
      _vm._v(" "),
      _c("td", { attrs: { rowspan: "2" } }, [_vm._v("使信息易读，友好，专业")]),
      _vm._v(" "),
      _c("td", [_vm._v("web端字体")]),
      _vm._v(" "),
      _c("td", [
        _c("div", [_vm._v("用于PC-Web端项目,取值如下：")]),
        _vm._v(" "),
        _c("div", [
          _vm._v("\"Microsoft YaHei\",SimSun,'\\5b8b\\4f53',sans-serif;")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("移动端字体")]),
      _vm._v(" "),
      _c("td", [
        _c("div", [_vm._v("用于移动端项目,取值如下：")]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            '"-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n           "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",\n           SimSun, sans-serif;'
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { rowspan: "4" } }, [_vm._v("字号")]),
      _vm._v(" "),
      _c("td", { attrs: { rowspan: "4" } }, [
        _vm._v("使信息层次分明，提升阅读体验")
      ]),
      _vm._v(" "),
      _c("td", [_vm._v("小字号(12px)")]),
      _vm._v(" "),
      _c("td", [
        _vm._v("需要尽可能多的显示器上显示信息或受限于容器尺寸限制等情形时使用")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("默认字号(14px)")]),
      _vm._v(" "),
      _c("td", [
        _c("img", {
          staticStyle: { width: "480px" },
          attrs: {
            src:
              "https://gw.alipayobjects.com/zos/rmsportal/yriUFbqOPtVniYYiikfb.png"
          }
        }),
        _vm._v(" "),
        _c("br"),
        _vm._v(
          "\n          为系统的默认字体，以保证整个系统所传递信息的最佳阅读体验\n        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("中号字体(16px)")]),
      _vm._v(" "),
      _c("td", [_vm._v("用于标题或需突出显示的信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("大号字体(20px)")]),
      _vm._v(" "),
      _c("td", [_vm._v("重点强调信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("分类")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("概要")]),
        _vm._v(" "),
        _c("th", [_vm._v("成员")]),
        _vm._v(" "),
        _c("th", [_vm._v("应用场景")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("行高")]),
      _vm._v(" "),
      _c("td", [_vm._v("看不见的文字容器")]),
      _vm._v(" "),
      _c("td", [_vm._v("默认行高(1.5)")]),
      _vm._v(" "),
      _c("td", [
        _c("div", [
          _vm._v(
            "行高可以认为是一个看不见的盒子(行高演示)，一般用于多行文字显示时增强信息的可读性；在单行文字时，设置过小有可能会导致文字被截断，所以我们采用了Bootstrap4的1.5倍文字大小来做为行高，但这也是导致视觉间距与设计稿实际间距看起来不相等的罪魁祸首，所以如果系统对间距有很精确的要求，可以用scss函数getExactSpacing($spacing, $font-size, $line-height)来修正为完全与设计稿一致的间距尺寸。"
          )
        ]),
        _vm._v(" "),
        _c("div")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { rowspan: "6" } }, [_vm._v("间距")]),
      _vm._v(" "),
      _c("td", { attrs: { rowspan: "6" } }, [_vm._v("划分信息层级")]),
      _vm._v(" "),
      _c("td", [_vm._v("间距步长(5px)")]),
      _vm._v(" "),
      _c("td", [_vm._v("用于确定整个系统的间距最小跳跃单位")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("超小间距(10px)")]),
      _vm._v(" "),
      _c("td", [_vm._v("如标题与内容之间")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("小间距(15px)")]),
      _vm._v(" "),
      _c("td", [_vm._v("同一模块的不同元素之间")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("中间距(20px)")]),
      _vm._v(" "),
      _c("td", [_vm._v("不同模块之间")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("大间距(30px)")]),
      _vm._v(" "),
      _c("td", [_vm._v("用于视觉布局，调控模块留白")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("超大间距(40px)")]),
      _vm._v(" "),
      _c("td", [_vm._v("用于视觉布局，调控模块留白")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", { staticStyle: { width: "10%" } }, [_vm._v("分类")]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "20%" } }, [_vm._v("概要")]),
          _vm._v(" "),
          _c("th", [_vm._v("成员")]),
          _vm._v(" "),
          _c("th", [_vm._v("应用场景")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", { attrs: { rowspan: "5" } }, [_vm._v("控件高度")]),
          _vm._v(" "),
          _c("td", { attrs: { rowspan: "5" } }, [
            _vm._v("用于控件排版,使排版简洁，规范")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("高度步长(6px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("控制高度的最小跳跃单位")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("小高度(24px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("节约排版空间时使用")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("默认高度(30px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("用于文本框，按钮等")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("中高度(36px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("大文本框，大按钮")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("大高度(42px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("突显操作特性，如登录页面输入框入按钮")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { rowspan: "7" } }, [_vm._v("控件宽度")]),
          _vm._v(" "),
          _c("td", { attrs: { rowspan: "7" } }, [
            _vm._v("用于控件排版,使排版简洁，规范")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("宽度步长(40px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("控件宽度的最小跳跃单位")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("默认宽度(100%)")]),
          _vm._v(" "),
          _c("td", [_vm._v("默认宽度为父容器的宽度")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("超小宽度(80px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("节约排版空间时使用")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("小宽度(120px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("节约排版空间时使用")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("中宽度(160px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("随输入内容的多少而定")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("大宽度(200px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("随输入内容的多少而定")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("超大宽度(240px)")]),
          _vm._v(" "),
          _c("td", [_vm._v("随输入内容的多少而定")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", { staticStyle: { width: "10%" } }, [_vm._v("分类")]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "20%" } }, [_vm._v("概要")]),
          _vm._v(" "),
          _c("th", [_vm._v("成员")]),
          _vm._v(" "),
          _c("th", [_vm._v("描述")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", { attrs: { rowspan: "5" } }, [_vm._v("PC-Web端系统")]),
          _vm._v(" "),
          _c("td", { attrs: { rowspan: "5" } }, [_vm._v("PC端优先")]),
          _vm._v(" "),
          _c("td", [_vm._v("默认(pc)")]),
          _vm._v(" "),
          _c("td", [_vm._v("所有默认的css都为pc端优先")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("pad横屏(lpad)")]),
          _vm._v(" "),
          _c("td", [_vm._v("@media (max-width:1199px) {...}")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("pad坚屏(pad)")]),
          _vm._v(" "),
          _c("td", [_vm._v("@media (max-width:991px) {...}")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("手机横屏(lphone)")]),
          _vm._v(" "),
          _c("td", [_vm._v("@media (max-width:767px) {...}")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("手机坚屏(phone)")]),
          _vm._v(" "),
          _c("td", [_vm._v("@media (max-width:575px) {...}")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { rowspan: "5" } }, [_vm._v("移动App")]),
          _vm._v(" "),
          _c("td", { attrs: { rowspan: "5" } }, [_vm._v("移动端优先")]),
          _vm._v(" "),
          _c("td", [_vm._v("默认(phone)")]),
          _vm._v(" "),
          _c("td", [_vm._v("所有默认的css都为移动端优先")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("手机横屏(lphone)")]),
          _vm._v(" "),
          _c("td", [_vm._v("@media (min-width:576px) {...}")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("pad坚屏(pad)")]),
          _vm._v(" "),
          _c("td", [_vm._v("@media (min-width:768px) {...}")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("pad横屏(lpad)")]),
          _vm._v(" "),
          _c("td", [_vm._v("@media (min-width:992px) {...}")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("PC端(pc)")]),
          _vm._v(" "),
          _c("td", [_vm._v("@media (min-width:1200px) {...}")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { rowspan: "2" } }, [_vm._v("栅格")]),
          _vm._v(" "),
          _c("td", { attrs: { rowspan: "2" } }, [_vm._v("均分栅格")]),
          _vm._v(" "),
          _c("td", [_vm._v("栅格数量")]),
          _vm._v(" "),
          _c("td", [_vm._v("12列")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("栅格间隔")]),
          _vm._v(" "),
          _c("td", [_vm._v("20px")])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-203bb9f2", esExports)
  }
}

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_dev_flow_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_dev_flow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_dev_flow_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_8b9a5dcc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_dev_flow_vue__ = __webpack_require__(376);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_dev_flow_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_8b9a5dcc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_dev_flow_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\examples\\docs\\dev-flow.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b9a5dcc", Component.options)
  } else {
    hotAPI.reload("data-v-8b9a5dcc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "svg",
      {
        attrs: {
          version: "dev-flow",
          id: "图层_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          width: "1097.945px",
          height: "1618.416px",
          viewBox: "0 0 1097.945 1618.416",
          "enable-background": "new 0 0 1097.945 1618.416",
          "xml:space": "preserve"
        }
      },
      [
        _c("g", [
          _c("polyline", {
            attrs: {
              fill: "#FFFFFF",
              points:
                "510.29,768.068 137.702,768.068 137.702,405.857 253.016,405.857 \t"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "510.29",
                y1: "768.068",
                x2: "508.79",
                y2: "768.068"
              }
            }),
            _vm._v(" "),
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                "stroke-dasharray": "3.0048,3.0048",
                x1: "505.785",
                y1: "768.068",
                x2: "140.704",
                y2: "768.068"
              }
            }),
            _vm._v(" "),
            _c("polyline", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                points:
                  "139.202,768.068 137.702,768.068 \n            137.702,766.568 \t\t"
              }
            }),
            _vm._v(" "),
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                "stroke-dasharray": "3.0186,3.0186",
                x1: "137.702",
                y1: "763.55",
                x2: "137.702",
                y2: "408.867"
              }
            }),
            _vm._v(" "),
            _c("polyline", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                points:
                  "137.702,407.357 137.702,405.857 \n            139.202,405.857 \t\t"
              }
            }),
            _vm._v(" "),
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                "stroke-dasharray": "3.0039,3.0039",
                x1: "142.206",
                y1: "405.857",
                x2: "242.838",
                y2: "405.857"
              }
            }),
            _vm._v(" "),
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "244.34",
                y1: "405.857",
                x2: "245.84",
                y2: "405.857"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "244.381,410.815 253.016,405.83 244.381,400.844 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("path", {
            attrs: {
              fill: "#33485B",
              d:
                "M689.711,95.53c0,3.286-3.609,5.949-8.063,5.949H528.288c-4.452,0-8.063-2.664-8.063-5.949V58.921\n          c0-3.286,3.61-5.949,8.063-5.949h153.361c4.453,0,8.063,2.663,8.063,5.949V95.53z"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c(
              "text",
              {
                attrs: {
                  transform: "matrix(1 0 0 1 536.9878 77.8013)",
                  fill: "#FFFFFF",
                  "font-family": "'MicrosoftYaHeiLight'",
                  "font-size": "20.9115"
                }
              },
              [_vm._v("前端开发流程")]
            ),
            _vm._v(" "),
            _c(
              "text",
              {
                attrs: {
                  transform: "matrix(1 0 0 1 555.0132 92.1172)",
                  fill: "#FFFFFF",
                  "font-family": "'MicrosoftYaHeiLight'",
                  "font-size": "9.3054"
                }
              },
              [_vm._v("(前后端分离开发模式)")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("path", {
            attrs: {
              fill: "#3BAF7E",
              d:
                "M692.463,218.085c0,2.887-3.002,5.228-6.698,5.228H524.17c-3.698,0-6.696-2.341-6.696-5.228v-30.988\n          c0-2.887,2.999-5.228,6.696-5.228h161.595c3.696,0,6.698,2.341,6.698,5.228V218.085z"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 563.147 208.8071)",
                fill: "#FFFFFF",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("需求评审")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("path", {
            attrs: {
              fill: "#3BAF7E",
              d:
                "M949.055,420.31c0,2.887-3.003,5.228-6.698,5.228H780.762c-3.699,0-6.698-2.341-6.698-5.228v-30.988\n          c0-2.887,2.999-5.228,6.698-5.228h161.595c3.695,0,6.698,2.341,6.698,5.228V420.31z"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 818.6274 411.0313)",
                fill: "#FFFFFF",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("高保真评审")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("path", {
            attrs: {
              fill: "#3BAF7E",
              d:
                "M428.006,420.31c0,2.886-3.002,5.228-6.698,5.228H259.713c-3.7,0-6.698-2.342-6.698-5.228v-30.988\n          c0-2.888,2.999-5.228,6.698-5.228h161.595c3.696,0,6.698,2.34,6.698,5.228V420.31z"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 273.7222 411.0313)",
                fill: "#FFFFFF",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("写api文档/评审")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("path", {
            attrs: {
              fill: "#3BAF7E",
              d:
                "M688.562,624.164c0,2.886-3.001,5.228-6.698,5.228H520.27c-3.698,0-6.696-2.342-6.696-5.228v-30.988\n          c0-2.887,2.999-5.228,6.696-5.228h161.594c3.697,0,6.698,2.34,6.698,5.228V624.164z"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 565.9331 614.8853)",
                fill: "#FFFFFF",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("代码编写")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("path", {
            attrs: {
              fill: "#3BAF7E",
              d:
                "M694.664,1253.126c0,2.887-3.002,5.227-6.698,5.227H526.37c-3.699,0-6.697-2.34-6.697-5.227v-30.986\n          c0-2.89,2.999-5.229,6.697-5.229h161.595c3.696,0,6.698,2.339,6.698,5.229V1253.126z"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 586.2583 1243.8491)",
                fill: "#FFFFFF",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("转测")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "604.969",
              y1: "101.479",
              x2: "604.969",
              y2: "181.869"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "604.969",
                y1: "101.479",
                x2: "604.969",
                y2: "174.693"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "600.011,173.234 604.997,181.869 609.983,173.234 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "604.969",
              y1: "223.313",
              x2: "604.969",
              y2: "303.703"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "604.969",
                y1: "223.313",
                x2: "604.969",
                y2: "296.527"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "600.011,295.068 604.997,303.703 609.983,295.068 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "604.967",
              y1: "303.703",
              x2: "604.967",
              y2: "384.094"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "604.967",
                y1: "303.703",
                x2: "604.967",
                y2: "376.917"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "600.009,375.458 604.995,384.094 609.981,375.458 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "601.069",
              y1: "507.559",
              x2: "601.069",
              y2: "587.948"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "601.069",
                y1: "507.559",
                x2: "601.069",
                y2: "580.772"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "596.111,579.313 601.096,587.948 606.083,579.313 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "601.069",
              y1: "629.392",
              x2: "601.069",
              y2: "709.784"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "601.069",
                y1: "629.392",
                x2: "601.069",
                y2: "702.608"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "596.111,701.149 601.096,709.784 606.083,701.149 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "601.069",
              y1: "818.591",
              x2: "601.069",
              y2: "898.984"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "601.069",
                y1: "818.591",
                x2: "601.069",
                y2: "891.808"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "596.111,890.349 601.096,898.984 606.083,890.349 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "601.069",
              y1: "946.474",
              x2: "601.069",
              y2: "1026.864"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "601.069",
                y1: "946.474",
                x2: "601.069",
                y2: "1019.687"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "596.111,1018.228 601.096,1026.864 606.083,1018.228 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "601.069",
              y1: "1136.64",
              x2: "601.069",
              y2: "1217.03"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "601.069",
                y1: "1136.64",
                x2: "601.069",
                y2: "1209.853"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "596.111,1208.394 601.096,1217.03 606.083,1208.394 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("line", {
            attrs: {
              fill: "#FFFFFF",
              x1: "601.069",
              y1: "1259.367",
              x2: "601.069",
              y2: "1339.756"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("line", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                x1: "601.069",
                y1: "1259.367",
                x2: "601.069",
                y2: "1332.58"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "596.111,1331.121 601.096,1339.756 606.083,1331.121 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c("polygon", {
            attrs: {
              fill: "#F3B13C",
              points:
                "510.29,764.187 601.676,709.784 698.816,764.187 601.038,818.59 \t"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            { attrs: { transform: "matrix(1 0 0 1 557.8755 757.855)" } },
            [
              _c(
                "tspan",
                {
                  attrs: {
                    x: "0",
                    y: "0",
                    fill: "#FFFFFF",
                    "font-family": "'MicrosoftYaHeiLight'",
                    "font-size": "20.9115"
                  }
                },
                [_vm._v("api是否")]
              ),
              _c(
                "tspan",
                {
                  attrs: {
                    x: "0",
                    y: "25.094",
                    fill: "#FFFFFF",
                    "font-family": "'MicrosoftYaHeiLight'",
                    "font-size": "20.9115"
                  }
                },
                [_vm._v("符合要求?")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("polygon", {
            attrs: {
              fill: "#F3B13C",
              points:
                "510.29,1082.235 601.676,1027.832 698.816,1082.235 601.038,1136.638 \t"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 557.8755 1088.4507)",
                fill: "#FFFFFF",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("验证通过?")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("path", {
            attrs: {
              fill: "#3BAF7E",
              d:
                "M688.563,939.06c0,2.887-3.002,5.229-6.698,5.229H520.27c-3.699,0-6.697-2.342-6.697-5.229v-30.986\n          c0-2.889,2.999-5.229,6.697-5.229h161.595c3.696,0,6.698,2.34,6.698,5.229V939.06z"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 514.9888 929.7847)",
                fill: "#FFFFFF",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("完成项目/组内自验")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("polyline", {
            attrs: {
              fill: "#FFFFFF",
              points:
                "698.816,1082.235 886.616,1082.235 886.616,608.67 688.562,608.67 \t"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("polyline", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                "stroke-dasharray": "3,3",
                points:
                  "\n            698.816,1082.235 886.616,1082.235 886.616,608.67 695.738,608.67 \t\t"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "697.197,603.712 688.562,608.697 697.197,613.684 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("g", [
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 428.0073 754.2886)",
                fill: "#8496A0",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("否")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 712.1265 1063.8823)",
                fill: "#8496A0",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("否")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 620.9897 852.8003)",
                fill: "#8496A0",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("是")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 620.9897 1176.8335)",
                fill: "#8496A0",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("是")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("circle", {
            attrs: {
              fill: "#3BAF7E",
              cx: "601.068",
              cy: "1399.877",
              r: "60.12"
            }
          }),
          _vm._v(" "),
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 559.2446 1406.0952)",
                fill: "#FFFFFF",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("版本发布")]
          )
        ]),
        _vm._v(" "),
        _c("g", [
          _c("polyline", {
            attrs: {
              fill: "#FFFFFF",
              points:
                "341.292,384.094 341.292,303.703 868.645,303.703 868.645,384.094 \t"
            }
          }),
          _vm._v(" "),
          _c("g", [
            _c("polyline", {
              attrs: {
                fill: "none",
                stroke: "#8496A0",
                "stroke-width": "2",
                "stroke-miterlimit": "10",
                points:
                  "341.292,376.917 341.292,303.703 \n            868.645,303.703 868.645,376.917 \t\t"
              }
            }),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "346.25,375.458 341.265,384.094 336.279,375.458 \t\t\t"
                }
              })
            ]),
            _vm._v(" "),
            _c("g", [
              _c("polygon", {
                attrs: {
                  fill: "#8496A0",
                  points:
                    "863.687,375.458 868.672,384.094 873.659,375.458 \t\t\t"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("polyline", {
          attrs: {
            fill: "#FFFFFF",
            stroke: "#8496A0",
            "stroke-width": "2",
            "stroke-miterlimit": "10",
            points:
              "341.292,426.769 341.292,507.159 \n        868.645,507.159 868.645,426.769 "
          }
        }),
        _vm._v(" "),
        _c("g", [
          _c(
            "text",
            {
              attrs: {
                transform: "matrix(1 0 0 1 149.9927 593.9702)",
                fill: "#8496A0",
                "font-family": "'MicrosoftYaHeiLight'",
                "font-size": "20.9115"
              }
            },
            [_vm._v("前后端协商更改")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-8b9a5dcc", esExports)
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_doc_doc__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_project_project_new__ = __webpack_require__(44);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [{
    path: '/',
    redirect: '/doc'
  }, {
    path: '/doc/:type/:name',
    name: 'doc',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_doc_doc__["a" /* default */]
  }, {
    path: '/doc/summary',
    redirect: '/doc/summary/teewon'
  }, {
    path: '/doc/guid',
    redirect: '/doc/guid/design'
  }, {
    path: '/doc/component',
    redirect: '/doc/component/scss'
  }, {
    path: '/project-new',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_project_project_new__["a" /* default */]
  }]
}));

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_doc_vue__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_218e1ae6_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_doc_vue__ = __webpack_require__(43);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_doc_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_218e1ae6_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_doc_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\doc\\doc.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-218e1ae6", Component.options)
  } else {
    hotAPI.reload("data-v-218e1ae6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_markdown_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_61812808_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_markdown_vue__ = __webpack_require__(42);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_markdown_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_61812808_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_markdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\markdown\\markdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61812808", Component.options)
  } else {
    hotAPI.reload("data-v-61812808", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tw-markdown" })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-61812808", esExports)
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tw-multicol" }, [
    _c(
      "div",
      { staticClass: "tw-multicol-left" },
      [
        _vm.$route.params.type === "guid"
          ? _c("tw-collapse-group", { staticClass: "tw-sidebar" }, [
              _c("ul", { staticClass: "tw-nav xsidebar" }, [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "jst-close",
                        attrs: { to: "/doc/guid/design" }
                      },
                      [
                        _c("i", { staticClass: "tw-font xico" }),
                        _vm._v("设计规范")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "jst-close",
                        attrs: { to: "/doc/guid/version" }
                      },
                      [
                        _c("i", { staticClass: "tw-font xico" }),
                        _vm._v("版本管理")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "jst-close",
                        attrs: { to: "/doc/guid/dev-flow" }
                      },
                      [
                        _c("i", { staticClass: "tw-font xico" }),
                        _vm._v("开发流程")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "jst-close",
                        attrs: { to: "/doc/guid/dir" }
                      },
                      [
                        _c("i", { staticClass: "tw-font xico" }),
                        _vm._v("目录及文件")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "jst-close",
                        attrs: { to: "/doc/guid/js" }
                      },
                      [
                        _c("i", { staticClass: "tw-font xico" }),
                        _vm._v("JS规范")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "jst-close",
                        attrs: { to: "/doc/guid/css" }
                      },
                      [
                        _c("i", { staticClass: "tw-font xico" }),
                        _vm._v("CSS规范")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "jst-close",
                        attrs: { to: "/doc/guid/html" }
                      },
                      [
                        _c("i", { staticClass: "tw-font xico" }),
                        _vm._v("HTML规范")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "jst-close",
                        attrs: { to: "/doc/guid/shortcut" }
                      },
                      [
                        _c("i", { staticClass: "tw-font xico" }),
                        _vm._v("快捷输入")
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.$route.params.type === "component"
          ? _c("tw-collapse-group", { staticClass: "tw-sidebar" }, [
              _c("ul", { staticClass: "tw-nav xsidebar" }, [
                _c("li", [
                  _c("a", { staticClass: "jst-close" }, [
                    _c("i", { staticClass: "tw-font xico" }),
                    _vm._v("SCSS相关")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("a", { staticClass: "js-layout" }, [
                      _c("i", { staticClass: "tw-font xico" }),
                      _vm._v("布局"),
                      _c("i", { staticClass: "tw-arrow xright" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "tw-collapse",
                      {
                        staticClass: "xsidebar",
                        attrs: { switch: ".js-layout" }
                      },
                      [
                        _c("ul", { staticClass: "tw-nav xsidebar" }, [
                          _c("li", [_c("a", [_vm._v("整体布局")])]),
                          _vm._v(" "),
                          _c("li", [_c("a", [_vm._v("栅格系统")])])
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("a", { staticClass: "js-nav" }, [
                      _c("i", { staticClass: "tw-font xico" }),
                      _vm._v("导航"),
                      _c("i", { staticClass: "tw-arrow xright" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "tw-collapse",
                      { staticClass: "xsidebar", attrs: { switch: ".js-nav" } },
                      [
                        _c("ul", { staticClass: "tw-nav xsidebar" }, [
                          _c("li", [_c("a", [_vm._v("头部导航")])]),
                          _vm._v(" "),
                          _c("li", [_c("a", [_vm._v("侧边栏导航")])]),
                          _vm._v(" "),
                          _c("li", [_c("a", [_vm._v("面包屑")])])
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("a", { staticClass: "js-unit" }, [
                      _c("i", { staticClass: "tw-font xico" }),
                      _vm._v("元件"),
                      _c("i", { staticClass: "tw-arrow xright" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "tw-collapse",
                      {
                        staticClass: "xsidebar",
                        attrs: { switch: ".js-unit" }
                      },
                      [
                        _c("ul", { staticClass: "tw-nav xsidebar" }, [
                          _c("li", [_c("a", [_vm._v("图标")])]),
                          _vm._v(" "),
                          _c("li", [_c("a", [_vm._v("按钮")])])
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("a", { staticClass: "js-function" }, [
                      _c("i", { staticClass: "tw-font xico" }),
                      _vm._v("功能"),
                      _c("i", { staticClass: "tw-arrow xright" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "tw-collapse",
                      {
                        staticClass: "xsidebar",
                        attrs: { switch: ".js-function" }
                      },
                      [
                        _c("ul", { staticClass: "tw-nav xsidebar" }, [
                          _c("li", [_c("a", [_vm._v("下拉列表")])]),
                          _vm._v(" "),
                          _c("li", [_c("a", [_vm._v("折叠面板")])])
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("a", { staticClass: "js-form" }, [
                      _c("i", { staticClass: "tw-font xico" }),
                      _vm._v("表单"),
                      _c("i", { staticClass: "tw-arrow xright" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "tw-collapse",
                      {
                        staticClass: "xsidebar",
                        attrs: { switch: ".js-form" }
                      },
                      [
                        _c("ul", { staticClass: "tw-nav xsidebar" }, [
                          _c("li", [_c("a", [_vm._v("单选/复选")])]),
                          _vm._v(" "),
                          _c("li", [_c("a", [_vm._v("选择列表")])])
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", [
                  _c("a", { staticClass: "jst-close" }, [
                    _c("i", { staticClass: "tw-font xico" }),
                    _vm._v("侧边导航项")
                  ])
                ])
              ])
            ])
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "tw-multicol-cell" }, [
      _c("div", { staticClass: "tw-multicol-cell-table" }, [
        _c(
          "div",
          { staticClass: "tw-multicol-cell-cell" },
          [_c("tw-markdown", { attrs: { content: _vm.markdownText } })],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-218e1ae6", esExports)
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_project_new_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_753bd17b_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_project_new_vue__ = __webpack_require__(59);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_project_new_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_753bd17b_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_project_new_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\project\\project-new.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-753bd17b", Component.options)
  } else {
    hotAPI.reload("data-v-753bd17b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.scssVars, function(scssModule, index) {
        return scssModule.name !== "组件变量"
          ? _c(
              "table",
              { key: index, staticClass: "tw-form xtable" },
              [
                _c("tr", [
                  _c("td", { attrs: { colspan: "4" } }, [
                    _c("div", { staticClass: "tw-title" }, [
                      _vm._v(_vm._s(scssModule.name))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._l(scssModule.children, function(scssGroup, index) {
                  return scssGroup.type
                    ? _c("tr", { key: index }, [
                        _c("td", { attrs: { colspan: "4" } }, [
                          _c("div", { staticClass: "tw-title xsub" }, [
                            _vm._v(_vm._s(scssGroup.name))
                          ]),
                          _vm._v(" "),
                          scssGroup.type !== "Color"
                            ? _c(
                                "div",
                                [
                                  _vm._l(scssGroup.children, function(
                                    scssVar,
                                    index
                                  ) {
                                    return !/tw-/.test(scssGroup.type) &&
                                      scssGroup.type !== "Spacing"
                                      ? _c(
                                          "div",
                                          {
                                            key: index,
                                            staticClass: "tw-scssvar",
                                            attrs: { title: scssVar.varName }
                                          },
                                          [
                                            !scssVar.values
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tw-scssvar-body"
                                                  },
                                                  [
                                                    scssGroup.type === "String"
                                                      ? _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                scssVar.value,
                                                              expression:
                                                                "scssVar.value"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "tw-scssvar-value",
                                                          attrs: {
                                                            type: "text"
                                                          },
                                                          domProps: {
                                                            value: scssVar.value
                                                          },
                                                          on: {
                                                            change:
                                                              _vm.changeScssVars,
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                scssVar,
                                                                "value",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        })
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    scssGroup.type ===
                                                    "FontSize"
                                                      ? _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                scssVar.value,
                                                              expression:
                                                                "scssVar.value"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "tw-scssvar-value",
                                                          style: {
                                                            fontSize:
                                                              parseInt(
                                                                scssVar.value
                                                              ) < 10
                                                                ? "10px"
                                                                : scssVar.value
                                                          },
                                                          attrs: {
                                                            type: "text"
                                                          },
                                                          domProps: {
                                                            value: scssVar.value
                                                          },
                                                          on: {
                                                            change:
                                                              _vm.changeScssVars,
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                scssVar,
                                                                "value",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        })
                                                      : _vm._e()
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            !scssVar.values
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tw-scssvar-title"
                                                  },
                                                  [_vm._v(_vm._s(scssVar.name))]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            scssVar.values
                                              ? _c(
                                                  "div",
                                                  _vm._l(
                                                    scssVar.values,
                                                    function(item, index) {
                                                      return _c(
                                                        "label",
                                                        {
                                                          key: index,
                                                          staticClass:
                                                            "tw-optbox xradio"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  scssVar.value,
                                                                expression:
                                                                  "scssVar.value"
                                                              }
                                                            ],
                                                            attrs: {
                                                              type: "radio"
                                                            },
                                                            domProps: {
                                                              value: item.replace(
                                                                /.*:/,
                                                                ""
                                                              ),
                                                              checked: _vm._q(
                                                                scssVar.value,
                                                                item.replace(
                                                                  /.*:/,
                                                                  ""
                                                                )
                                                              )
                                                            },
                                                            on: {
                                                              change: [
                                                                function(
                                                                  $event
                                                                ) {
                                                                  _vm.$set(
                                                                    scssVar,
                                                                    "value",
                                                                    item.replace(
                                                                      /.*:/,
                                                                      ""
                                                                    )
                                                                  )
                                                                },
                                                                _vm.changeScssVars
                                                              ]
                                                            }
                                                          }),
                                                          _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                item.replace(
                                                                  /:.*/,
                                                                  ""
                                                                )
                                                              )
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    }
                                                  )
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      : _vm._e()
                                  }),
                                  _vm._v(" "),
                                  scssGroup.addable &&
                                  scssGroup.type === "FontSize"
                                    ? _c("a", {
                                        staticClass: "tw-addbtn xscssvar"
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  scssGroup.type === "Spacing"
                                    ? _c(
                                        "div",
                                        [
                                          _vm._l(scssGroup.children, function(
                                            scssVar,
                                            index
                                          ) {
                                            return _c(
                                              "div",
                                              {
                                                key: index,
                                                staticClass: "tw-scssvar",
                                                style: {
                                                  marginLeft:
                                                    index === 0
                                                      ? 0
                                                      : scssVar.value
                                                },
                                                attrs: {
                                                  title: scssVar.varName
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tw-scssvar-body"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: scssVar.value,
                                                          expression:
                                                            "scssVar.value"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "tw-scssvar-value",
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value: scssVar.value
                                                      },
                                                      on: {
                                                        change:
                                                          _vm.changeScssVars,
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            scssVar,
                                                            "value",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tw-scssvar-title"
                                                  },
                                                  [_vm._v(_vm._s(scssVar.name))]
                                                )
                                              ]
                                            )
                                          }),
                                          _vm._v(" "),
                                          scssGroup.addable
                                            ? _c("a", {
                                                staticClass:
                                                  "tw-addbtn xscssvar"
                                              })
                                            : _vm._e()
                                        ],
                                        2
                                      )
                                    : _vm._e()
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          scssGroup.type === "Color"
                            ? _c(
                                "div",
                                { staticClass: "tw-palette" },
                                [
                                  _vm._l(scssGroup.children, function(
                                    scssVar,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      {
                                        key: index,
                                        staticClass: "tw-scssvar",
                                        attrs: {
                                          title:
                                            scssVar.varName +
                                            ":" +
                                            scssVar.value
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "tw-scssvar-body" },
                                          [
                                            _c("el-color-picker", {
                                              staticClass: "tw-colorcell",
                                              on: {
                                                change: _vm.changeScssVars
                                              },
                                              model: {
                                                value: scssVar.value,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    scssVar,
                                                    "value",
                                                    $$v
                                                  )
                                                },
                                                expression: "scssVar.value"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "tw-scssvar-title" },
                                          [_vm._v(_vm._s(scssVar.name))]
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  scssGroup.addable
                                    ? _c("a", {
                                        staticClass: "tw-addbtn xscssvar"
                                      })
                                    : _vm._e()
                                ],
                                2
                              )
                            : _vm._e()
                        ])
                      ])
                    : _vm._e()
                })
              ],
              2
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tw-title", staticStyle: { "margin-bottom": "0" } },
        [_vm._v("组件")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tw-multicol" }, [
        _c(
          "div",
          { staticClass: "tw-multicol-left" },
          [
            _vm.compGroup
              ? _c(
                  "tw-collapse-group",
                  {
                    staticClass: "tw-sidebar",
                    staticStyle: { position: "relative" }
                  },
                  [
                    _c(
                      "ul",
                      {
                        staticClass: "tw-nav xsidebar tw-stickybox",
                        staticStyle: { "min-height": "600px" }
                      },
                      _vm._l(_vm.compGroup, function(
                        group,
                        groupKey,
                        groupIndex
                      ) {
                        return _c(
                          "li",
                          { key: groupIndex },
                          [
                            _c("a", { class: ["js-group-" + groupIndex] }, [
                              _c("i", { staticClass: "tw-font xico" }),
                              _vm._v(_vm._s(groupKey)),
                              _c("i", { staticClass: "tw-arrow xright" })
                            ]),
                            _vm._v(" "),
                            _c(
                              "tw-collapse",
                              {
                                staticClass: "xsidebar",
                                attrs: { switch: ".js-group-" + groupIndex }
                              },
                              [
                                _c(
                                  "ul",
                                  { staticClass: "tw-nav xsidebar" },
                                  _vm._l(group, function(type, typeKey, index) {
                                    return _c(
                                      "li",
                                      {
                                        key: index,
                                        on: {
                                          click: function($event) {
                                            _vm.clickCompType(type)
                                          }
                                        }
                                      },
                                      [_c("a", [_vm._v(_vm._s(typeKey))])]
                                    )
                                  })
                                )
                              ]
                            )
                          ],
                          1
                        )
                      })
                    )
                  ]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "tw-multicol-cell" }, [
          _c("div", { staticClass: "tw-multicol-cell-table" }, [
            _c("div", { staticClass: "tw-multicol-cell-cell tw-stickybox" }, [
              _c("div", { staticClass: "tw-compscssdemo" }, [
                _c("div", { attrs: { id: "demos" } }),
                _vm._v(" "),
                _c("div", { staticClass: "tw-compscssdemo-setbar" }, [
                  _c("div", { staticClass: "tw-title xsub" }, [
                    _vm._v(_vm._s(_vm.currentCompScssVar.name) + "样式设置")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tw-form xtable xsmall" },
                    _vm._l(_vm.currentCompScssVar.children, function(
                      scssVar,
                      index
                    ) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "tw-form-row",
                          attrs: { title: scssVar.varName }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "tw-form-col",
                              staticStyle: { width: "10em" }
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "tw-inputlabel xsmall" },
                                [_vm._v(_vm._s(scssVar.name) + ":")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "tw-form-col" },
                            [
                              typeof _vm.compOptions[index] === "undefined"
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: scssVar.value,
                                        expression: "scssVar.value"
                                      }
                                    ],
                                    staticClass: "tw-input xsmall",
                                    attrs: { type: "text" },
                                    domProps: { value: scssVar.value },
                                    on: {
                                      change: _vm.changeScssVars,
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          scssVar,
                                          "value",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                : _c("tw-select-group", {
                                    attrs: {
                                      group: {
                                        nameKey: "name",
                                        itemsKey: "children"
                                      },
                                      items: _vm.compOptions[index],
                                      valueKey: "varName",
                                      textKey: "name",
                                      inputClass: "xsmall"
                                    },
                                    on: { change: _vm.changeScssVars },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function(item) {
                                          return _c("span", {}, [
                                            _vm._v(_vm._s(item.name)),
                                            _c("i", {
                                              staticClass: "tw-colorcell xdemo",
                                              style: {
                                                backgroundColor: item.value
                                              }
                                            })
                                          ])
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: scssVar.value,
                                      callback: function($$v) {
                                        _vm.$set(scssVar, "value", $$v)
                                      },
                                      expression: "scssVar.value"
                                    }
                                  })
                            ],
                            1
                          )
                        ]
                      )
                    })
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "tw-sticky",
              rawName: "v-tw-sticky:bottom",
              value: 80,
              expression: "80",
              arg: "bottom"
            }
          ],
          staticClass: "tw-stickybox-footer"
        },
        [
          _c("a", { staticClass: "tw-btn xauxiliary xlarge" }, [
            _vm._v("选择模板")
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "tw-btn xmain xlarge" }, [_vm._v("生成项目")]),
          _vm._v(" "),
          _c("a", { staticClass: "tw-btn xauxiliary xlarge" }, [
            _vm._v("保存为模板")
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "tw-btn xweaking xlarge" }, [_vm._v("取消")])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "tw-form xtable" }, [
      _c("colgroup", [
        _c("col", { staticStyle: { width: "6em" } }),
        _vm._v(" "),
        _c("col"),
        _vm._v(" "),
        _c("col", { staticStyle: { width: "8em" } }),
        _vm._v(" "),
        _c("col")
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { colspan: "4" } }, [
          _c("div", { staticClass: "tw-title" }, [_vm._v("项目属性")])
        ])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "tw-form-row" }, [
        _c("td", { staticClass: "tw-form-col" }, [
          _c("label", { staticClass: "tw-inputlabel" }, [_vm._v("项目名称:")])
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col" }, [
          _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col" }, [
          _c("label", { staticClass: "tw-inputlabel" }, [_vm._v("版本号:")])
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col" }, [
          _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "tw-form-row" }, [
        _c("td", { staticClass: "tw-form-col" }, [
          _c("label", { staticClass: "tw-inputlabel" }, [_vm._v("项目组成员:")])
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
          _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { colspan: "4" } }, [
          _c("div", { staticClass: "tw-title" }, [_vm._v("svn地址")])
        ])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "tw-form-row" }, [
        _c("td", { staticClass: "tw-form-col" }, [
          _c("label", { staticClass: "tw-inputlabel" }, [_vm._v("高保真:")])
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
          _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "tw-form-row" }, [
        _c("td", { staticClass: "tw-form-col" }, [
          _c("label", { staticClass: "tw-inputlabel" }, [_vm._v("源文件:")])
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
          _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "tw-form-row" }, [
        _c("td", { staticClass: "tw-form-col" }, [
          _c("label", { staticClass: "tw-inputlabel" }, [_vm._v("前端Html:")])
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
          _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "tw-form-row" }, [
        _c("td", { staticClass: "tw-form-col" }, [
          _c("label", { staticClass: "tw-inputlabel" }, [_vm._v("交付Html:")])
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
          _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { colspan: "4" } }, [
          _c("div", { staticClass: "tw-title" }, [_vm._v("底层JS框架")])
        ])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "tw-form-row" }, [
        _c("td", { staticClass: "tw-form-col" }, [
          _c("label", { staticClass: "tw-inputlabel" }, [_vm._v("底层JS框架:")])
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
          _c("label", { staticClass: "tw-optbox xradio" }, [
            _c("input", { attrs: { type: "radio", name: "app-framework" } }),
            _c("span", [_vm._v("Vue(前后端分离)")])
          ]),
          _vm._v(" "),
          _c("label", { staticClass: "tw-optbox xradio xdisabled" }, [
            _c("input", {
              attrs: { type: "radio", name: "app-framework", disabled: "" }
            }),
            _c("span", [_vm._v("jQuery(经典)")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-753bd17b", esExports)
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tw_vue_footer_footer__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tw_vue_poppane_poppane__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tw_vue_collapse_collapse__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tw_vue_collapse_collapse_group__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tw_vue_list_list__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tw_vue_select_select__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tw_vue_select_select_group__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tw_vue_draggrid_draggrid__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tw_vue_draggrid_draggrid_col__ = __webpack_require__(79);
// 注册通用的全局组件











var components = [__WEBPACK_IMPORTED_MODULE_1__tw_vue_footer_footer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__tw_vue_poppane_poppane__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__tw_vue_collapse_collapse__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__tw_vue_collapse_collapse_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__tw_vue_list_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__tw_vue_select_select__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__tw_vue_select_select_group__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__tw_vue_draggrid_draggrid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__tw_vue_draggrid_draggrid_col__["a" /* default */]];

components.forEach(function (component) {
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component(component.name, component);
});

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_b62c9488_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__(62);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_b62c9488_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\footer\\footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b62c9488", Component.options)
  } else {
    hotAPI.reload("data-v-b62c9488", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tw-footer" }, [
    _vm._v(
      "Copyright © 2008-" +
        _vm._s(new Date().getFullYear()) +
        "天闻数媒科技（湖南）有限公司, All Rights Reserved"
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b62c9488", esExports)
  }
}

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_poppane_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_a3000d54_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_poppane_vue__ = __webpack_require__(65);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_poppane_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_a3000d54_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_poppane_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\poppane\\poppane.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3000d54", Component.options)
  } else {
    hotAPI.reload("data-v-a3000d54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return placement; });
/**
 * 返回两个元素间位置相关的信息
 * @param {Element,String} el
 * 目标元素
 * @param {Element} relatedElement
 * 参照元素， 当需要在相同的节点中返回位置信息时， relatedElement应为element的祖先元素
 */
var placement = function placement(el, relatedElement, relatedWidth) {
  if (typeof relatedElement === 'string') {
    relatedElement = document.querySelector(relatedElement);
  }

  if (relatedElement.nodeType !== 1) throw new TypeError('位置参照元素为空，请检查指定的元素或选择器是否正确。');

  var isdescendant = relatedElement.contains(el);
  var elWidth = el.offsetWidth;
  var elHeight = el.offsetHeight;
  var relatedRect = relatedElement.getBoundingClientRect();
  var minWidth = relatedWidth ? relatedRect.width * parseFloat(relatedWidth) / 100 : 0;

  if (elWidth < minWidth) elWidth = minWidth;
  var overallWidth = relatedRect.left + relatedRect.width + elWidth;
  var overallHeight = relatedRect.top + relatedRect.height + elHeight;

  /* eslint-disable */
  var placements = ['topleft', 'topcenter', 'topright', 'righttop', 'rightcenter', 'rightbottom', 'bottomleft', 'bottomcenter', 'bottomright', 'lefttop', 'leftcenter', 'leftbottom'];

  var matrix = {};

  if (isdescendant) {
    // 生成父子关系时的位置信息
    placements.forEach(function (item) {
      matrix[item] = {};

      if (minWidth) {
        matrix[item].minWidth = minWidth + 'px';
      }

      if (/^top/.test(item)) {
        matrix[item].bottom = relatedRect.height + 'px';
      }

      if (/^right/.test(item)) {
        matrix[item].left = '100%';
      }

      if (/^bottom/.test(item)) {
        matrix[item].top = relatedRect.height + 'px';
      }

      if (/^left/.test(item)) {
        matrix[item].left = -elWidth + 'px';
      }

      if (/top$/.test(item)) {
        matrix[item].top = 0;
      }

      if (/right$/.test(item)) {
        matrix[item].right = 0;
      }

      if (/bottom$/.test(item)) {
        matrix[item].bottom = 0;
      }

      if (/left$/.test(item)) {
        matrix[item].left = 0;
      }

      if (/center$/.test(item)) {
        if (/^(top|bottom)/.test(item)) {
          matrix[item].left = (relatedRect.width - elWidth) / 2 + 'px';
        } else {
          matrix[item].top = (relatedRect.height - elHeight) / 2 + 'px';
        }
      }
    });

    matrix.auto = {};

    if (overallHeight > window.innerHeight && relatedRect.top > elHeight) {
      matrix.auto.bottom = relatedRect.height + 'px';
    }

    if (overallWidth > window.innerWidth && relatedRect.left + relatedRect.width > elWidth) {
      matrix.auto.right = 0;
    }
  } else {
    // 生成非父子关系时的位置信息(即element将直接放置在body中)
    var relatedTop = window.pageYOffset + relatedRect.top;
    var relatedLeft = window.pageXOffset + relatedRect.left;

    placements.forEach(function (item) {
      matrix[item] = {};

      if (minWidth) {
        matrix[item].minWidth = minWidth + 'px';
      }

      if (/^top/.test(item)) {
        matrix[item].top = relatedTop - elHeight + 'px';
      }

      if (/^right/.test(item)) {
        matrix[item].left = relatedLeft + relatedRect.width + 'px';
      }

      if (/^bottom/.test(item)) {
        matrix[item].top = relatedTop + relatedRect.height + 'px';
      }

      if (/^left/.test(item)) {
        matrix[item].left = relatedLeft - elWidth + 'px';
      }

      if (/top$/.test(item)) {
        matrix[item].top = relatedTop + 'px';
      }

      if (/right$/.test(item)) {
        matrix[item].left = relatedLeft + relatedRect.width - elWidth + 'px';
      }

      if (/bottom$/.test(item)) {
        matrix[item].top = relatedTop + relatedRect.height - elHeight + 'px';
      }

      if (/left$/.test(item)) {
        matrix[item].left = relatedLeft + 'px';
      }

      if (/center$/.test(item)) {
        if (/^(top|bottom)/.test(item)) {
          matrix[item].left = relatedLeft + relatedRect.width / 2 - elWidth / 2 + 'px';
        } else {
          matrix[item].top = relatedTop + relatedRect.height / 2 - elHeight / 2 + 'px';
        }
      }
    });

    matrix.auto = {
      top: relatedTop + relatedRect.height + 'px',
      left: relatedLeft + 'px',
      bottom: ''
    };

    if (overallHeight > window.innerHeight && relatedRect.top > elHeight) {
      matrix.auto.top = relatedTop - elHeight + 'px';
      matrix.auto.bottom = 'auto';
    }

    if (overallWidth > window.innerWidth && relatedRect.left + relatedRect.width > elWidth) {
      matrix.auto.left = relatedLeft + relatedRect.width - elWidth + 'px';
    }
  }

  if (minWidth) {
    matrix.auto.minWidth = minWidth + 'px';
  }

  return matrix;
};



/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "poppane", staticClass: "tw-poppane", class: ["x" + _vm.placement] },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a3000d54", esExports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_collapse_vue__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_2e1b41bc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_collapse_vue__ = __webpack_require__(67);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_collapse_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_2e1b41bc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_collapse_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\collapse\\collapse.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e1b41bc", Component.options)
  } else {
    hotAPI.reload("data-v-2e1b41bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tw-collapse" },
    [_vm._t("default", [_vm._v("collapse self.")])],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-2e1b41bc", esExports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_collapse_group_vue__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_3ef0d82e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_collapse_group_vue__ = __webpack_require__(69);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_collapse_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_3ef0d82e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_collapse_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\collapse\\collapse-group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ef0d82e", Component.options)
  } else {
    hotAPI.reload("data-v-3ef0d82e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._t("default", [_vm._v("collapse group.")])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-3ef0d82e", esExports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delegateOff; });
/**
 *  触发一个事件
 * @param {Node} el
 * @param {String} name
 * @param {Array} opts
 */
var trigger = function trigger(el, name) {
  var eventName = void 0;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }

  var evt = document.createEvent(eventName);

  // 兼容IE9

  for (var _len = arguments.length, opts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    opts[_key - 2] = arguments[_key];
  }

  if (typeof opts[0] === 'undefined') opts[0] = true;
  if (typeof opts[1] === 'undefined') opts[1] = true;

  evt.initEvent.apply(evt, [name].concat(opts));

  el.dispatchEvent ? el.dispatchEvent(evt) : el.fireEvent('on' + name, evt);

  return el;
};

/**
 * 委托一个事件
 * @param {Node} target
 * @param {String} eventName
 * @param {String, Node} source
 * @param {Boolean} useCapture
 * @param {Function} callback
 * 回调函数的第一个参数为委托元素本身,第二个参数为事件触发的event对象
 */
var delegate = function delegate(target, eventName, source) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var callback = arguments[4];

  if (typeof useCapture === 'function') {
    callback = useCapture;
    useCapture = false;
  }

  if (!target.twEvents) {
    Object.defineProperty(target, 'twEvents', {
      value: {},
      enumerable: false
    });
  }

  if (!target.twEvents[eventName]) target.twEvents[eventName] = [];

  var delegateFunction = function delegateFunction(event) {
    var elemets = [];

    if (typeof source === 'string') {
      elemets = document.querySelectorAll(source);
    } else if (source.nodeType === 1) {
      elemets.push(source);
    }

    for (var i = 0; i < elemets.length; i++) {
      if (elemets[i].contains(event.target)) {
        callback(elemets[i], event);
        break;
      }
    }
  };

  target.addEventListener(/^[a-z]*/.exec(eventName)[0], delegateFunction, useCapture);
  target.twEvents[eventName].push(delegateFunction);

  return target;
};

/**
 * 注销一个委托事件
 * @param {Node} el
 * @param {String} eventName
 */
var delegateOff = function delegateOff(el, eventName) {
  var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!el.twEvents) return;
  if (!el.twEvents[eventName]) return;

  el.twEvents[eventName].forEach(function (element) {
    el.removeEventListener(/^[a-z]*/.exec(eventName)[0], element, useCapture);
  });

  delete el.twEvents[eventName];
};



/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_bc617048_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__(71);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_bc617048_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\list\\list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bc617048", Component.options)
  } else {
    hotAPI.reload("data-v-bc617048", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "tw-list" },
    [
      _vm._l(_vm.items, function(item, index) {
        return _vm.filterText === "" ||
          item[_vm.textKey].indexOf(_vm.filterText) !== -1
          ? _c(
              "li",
              {
                key: index,
                staticClass: "tw-list-item",
                class: {
                  xdisabled: item[_vm.disabledKey],
                  xselected: _vm.multiple
                    ? _vm.value.indexOf(item[_vm.valueKey]) !== -1
                    : _vm.value === item[_vm.valueKey]
                },
                on: {
                  click: function($event) {
                    _vm.selectItem(item)
                  }
                }
              },
              [
                _vm._t(
                  "default",
                  [
                    _vm._v(_vm._s(item.name)),
                    _vm.multiple
                      ? _c("i", { staticClass: "tw-font xselect" })
                      : _vm._e()
                  ],
                  null,
                  item
                )
              ],
              2
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm.link && _vm.labelVisible
        ? _c(
            "span",
            { ref: "listLabel", staticClass: "tw-list-label" },
            [
              _vm._t(
                "listLabel",
                [_vm._v(_vm._s(_vm.labelText))],
                null,
                _vm.selectedItem
              )
            ],
            2
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-bc617048", esExports)
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_1f43669c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(73);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_select_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_1f43669c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\select\\select.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f43669c", Component.options)
  } else {
    hotAPI.reload("data-v-1f43669c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tw-select" },
    [
      _c("div", { staticClass: "tw-popswitch", class: [_vm.switchSelector] }, [
        _c("input", {
          ref: "filter",
          staticClass: "tw-input tw-select-input",
          class: [_vm.inputClass],
          attrs: { type: "text", placeholder: _vm.placeholder },
          on: {
            focus: _vm.focusInput,
            input: function($event) {
              _vm.filterText = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "tw-poppane",
        {
          attrs: { switch: "." + _vm.switchSelector },
          on: { hide: _vm.hidePane }
        },
        [
          _c(
            "ul",
            {
              staticClass: "tw-select-pane",
              class: [_vm.multiple ? "xmultiple" : "xsingle"]
            },
            _vm._l(_vm.items, function(item, index) {
              return _vm.filterText === "" ||
                item[_vm.textKey].indexOf(_vm.filterText) !== -1
                ? _c(
                    "li",
                    {
                      key: index,
                      staticClass: "tw-select-item",
                      class: {
                        xdisabled: item[_vm.disabledKey],
                        xselected: _vm.multiple
                          ? _vm.value.indexOf(item[_vm.valueKey]) !== -1
                          : _vm.value === item[_vm.valueKey]
                      },
                      on: {
                        click: function($event) {
                          _vm.selectItem(item)
                        }
                      }
                    },
                    [
                      _vm._t(
                        "default",
                        [
                          _vm._v(_vm._s(item.name)),
                          _vm.multiple
                            ? _c("i", { staticClass: "tw-font xselect" })
                            : _vm._e()
                        ],
                        null,
                        item
                      )
                    ],
                    2
                  )
                : _vm._e()
            })
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1f43669c", esExports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_select_group_vue__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_5be1d50e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_select_group_vue__ = __webpack_require__(76);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_select_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_5be1d50e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_select_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\select\\select-group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5be1d50e", Component.options)
  } else {
    hotAPI.reload("data-v-5be1d50e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    inputClass: {
      type: String
    }
  },
  data: function data() {
    return {
      filterText: '',
      switchSelector: ''
    };
  },

  methods: {
    focusInput: function focusInput() {
      this.$refs.filter.select();
    },
    hidePane: function hidePane() {
      this.$refs.filter.blur();
    }
  },
  created: function created() {
    this.switchSelector = 'js-tw-poppane-switch-select-' + this._uid;
  },
  mounted: function mounted() {
    this.$refs.filter.value = this.labelText;
  },

  watch: {
    value: function value() {
      this.$refs.filter.value = this.labelText;
      this.filterText = '';
    }
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tw-select" },
    [
      _c("div", { staticClass: "tw-popswitch", class: [_vm.switchSelector] }, [
        _c("input", {
          ref: "filter",
          staticClass: "tw-input tw-select-input",
          class: [_vm.inputClass],
          attrs: { type: "text", placeholder: _vm.placeholder },
          on: {
            focus: _vm.focusInput,
            input: function($event) {
              _vm.filterText = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "tw-poppane",
        {
          attrs: { switch: "." + _vm.switchSelector },
          on: { hide: _vm.hidePane }
        },
        [
          _c(
            "ul",
            {
              staticClass: "tw-select-pane",
              class: [_vm.multiple ? "xmultiple" : "xsingle"]
            },
            [
              _vm._l(_vm.resultItems, function(item, index) {
                return [
                  typeof item === "string"
                    ? _c(
                        "li",
                        { key: index, staticClass: "tw-select-groupname" },
                        [
                          _vm._t(
                            "groupName",
                            [_vm._v(_vm._s(item))],
                            null,
                            item
                          )
                        ],
                        2
                      )
                    : _vm.filterText === "" ||
                      item[_vm.textKey].indexOf(_vm.filterText) !== -1
                      ? _c(
                          "li",
                          {
                            key: index,
                            staticClass: "tw-select-item",
                            class: {
                              xdisabled: item[_vm.disabledKey],
                              xselected: _vm.multiple
                                ? _vm.value.indexOf(item[_vm.valueKey]) !== -1
                                : _vm.value === item[_vm.valueKey]
                            },
                            on: {
                              click: function($event) {
                                _vm.selectItem(item)
                              }
                            }
                          },
                          [
                            _vm._t(
                              "default",
                              [
                                _vm._v(_vm._s(item.name)),
                                _vm.multiple
                                  ? _c("i", { staticClass: "tw-font xselect" })
                                  : _vm._e()
                              ],
                              null,
                              item
                            )
                          ],
                          2
                        )
                      : _vm._e()
                ]
              })
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5be1d50e", esExports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_draggrid_vue__ = __webpack_require__(29);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_9e186f48_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_draggrid_vue__ = __webpack_require__(78);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_draggrid_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_9e186f48_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_draggrid_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\draggrid\\draggrid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e186f48", Component.options)
  } else {
    hotAPI.reload("data-v-9e186f48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tw-draggrid",
      class: { xdrag: _vm.enableDrag && !_vm.lockDrag },
      style: { height: _vm.gridHeight }
    },
    [
      _c(
        "transition-group",
        { attrs: { tag: "div" } },
        _vm._l(_vm.resultColsData, function(col, index) {
          return _c(
            "div",
            {
              key: col[_vm.idKey],
              ref: "col" + index,
              refInFor: true,
              staticClass: "tw-draggrid-col",
              style: _vm.resultStyles[index] || ""
            },
            [
              _c(
                "div",
                {
                  staticClass: "tw-draggrid-col-inner",
                  class:
                    _vm.resultStyles[index] &&
                    _vm.resultStyles[index].statusClass,
                  attrs: { draggable: _vm.enableDrag && !_vm.lockDrag },
                  on: {
                    dragstart: function($event) {
                      _vm.handleDragStart(index, $event)
                    },
                    dragend: function($event) {
                      _vm.handleDragend(index, $event)
                    },
                    dragenter: function($event) {
                      _vm.handleDragenter(index, $event)
                    },
                    dragleave: function($event) {
                      _vm.handleDragleave(index, $event)
                    },
                    dragover: function($event) {
                      _vm.handleDragover(index, $event)
                    },
                    drop: function($event) {
                      _vm.handleDrop(index)
                    }
                  }
                },
                [
                  _vm._t(
                    "default",
                    [_vm._v("默认内容" + _vm._s(index))],
                    null,
                    col
                  ),
                  _vm._v(" "),
                  _vm.enableDrag
                    ? _c("a", {
                        staticClass: "tw-draggrid-col-resize",
                        on: {
                          mousedown: function($event) {
                            _vm.handleResize(index, $event)
                          }
                        }
                      })
                    : _vm._e()
                ],
                2
              )
            ]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-9e186f48", esExports)
  }
}

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_draggrid_col_vue__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_afb629e2_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_draggrid_col_vue__ = __webpack_require__(80);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_draggrid_col_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_afb629e2_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_draggrid_col_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\draggrid\\draggrid-col.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-afb629e2", Component.options)
  } else {
    hotAPI.reload("data-v-afb629e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    items: {
      type: Array
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Array, Object],
    valueKey: {
      type: String,
      default: 'value'
    },
    textKey: {
      type: String,
      default: 'text'
    },
    disabledKey: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      displayElement: null,
      selectedItem: [],
      labelVisible: true
    };
  },

  computed: {
    labelText: function labelText() {
      if (this.multiple) {
        if (this.selectedItem.length === 0) {
          return this.placeholder;
        } else if (this.selectedItem.length === 1) {
          return this.selectedItem[0][this.textKey];
        } else {
          return '\u5DF2\u9009\u62E9' + this.selectedItem.length + '\u9879';
        }
      } else {
        return this.selectedItem[this.textKey];
      }
    }
  },
  methods: {
    getselectedItem: function getselectedItem(val) {
      var _this = this;

      if (this.multiple) {
        this.selectedItem = this.items.filter(function (element) {
          return val.indexOf(element[_this.valueKey]) !== -1;
        });
      } else {
        for (var i = 0; i < this.items.length; i++) {
          if (val === this.items[i][this.valueKey]) {
            this.selectedItem = this.items[i];
            break;
          }
        }
      }
    },
    selectItem: function selectItem(item) {
      var result = this.value;
      var itemVal = item[this.valueKey];

      if (this.multiple) {
        var itemIndexInResult = result.indexOf(itemVal);
        result = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(result));

        if (itemIndexInResult === -1) {
          result.push(itemVal);
        } else {
          result.splice(itemIndexInResult, 1);
        }

        this.getselectedItem(result);
      } else {
        if (result === itemVal) return;
        result = itemVal;
        this.selectedItem = item;
      }

      this.$emit('input', result);
      this.$emit('change', result, this.selectedItem);
    }
  },
  created: function created() {
    this.getselectedItem(this.value);
  }
});

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tw-draggrid-col",
      style: { width: _vm.width },
      attrs: { draggable: "" }
    },
    [
      _c(
        "div",
        { staticClass: "tw-draggrid-col-inner" },
        [_vm._t("default", [_vm._v("默认内容")])],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-afb629e2", esExports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      membersGroup: [{
        name: '组1',
        children: [{
          value: '001',
          name: '陈今斌',
          className: 'abc'
        }, {
          value: '002',
          name: '荣珍'
        }, {
          value: '003',
          name: '陈知然'
        }]
      }, {
        name: '组2',
        children: [{
          value: '004',
          name: '陈今东',
          className: 'abc'
        }, {
          value: '005',
          name: '欧阳花梅'
        }, {
          value: '006',
          name: '陈宇欣'
        }]
      }],
      members: [{
        value: '001',
        name: '陈今斌',
        className: 'abc'
      }, {
        value: '002',
        name: '荣珍'
      }, {
        value: '003',
        name: '陈知然'
      }],
      currentMember: '003',
      filterMember: '',
      classDemo: '',
      aa: null,
      colsData: [{
        colspan: 1,
        name: '模块1'
      }, {
        colspan: 1,
        name: '模块2'
      }, {
        colspan: 1,
        name: '模块3'
      }, {
        colspan: 1,
        name: '模块4'
      }, {
        colspan: 1,
        name: '模块5'
      }, {
        colspan: 1,
        name: '模块6'
      }, {
        colspan: 1,
        name: '模块7'
      }, {
        colspan: 1,
        name: '模块8'
      }, {
        colspan: 1,
        name: '模块9'
      }, {
        colspan: 1,
        name: '模块10'
      }]
    };
  },

  methods: {
    handleOk: function handleOk() {
      console.log('ok');
    },
    changeMember: function changeMember(value, resultItems) {
      console.log(this.currentMember);
    },
    changeHandler: function changeHandler(value) {
      console.log(value);
    },
    demoMethod: function demoMethod() {
      console.log('The method is called.');
    },
    testmethod: function testmethod() {
      window.test = this.$refs.test;
      window.test.classList.add('xstart');
    },
    handleDragChange: function handleDragChange(col, originalSpan, currentSpan) {
      debugger;
    }
  },
  created: function created() {
    window.app = this;
    window.members = this.members;
  }
});

/***/ })

},[115]);
//# sourceMappingURL=main.8f8f3536.js.map