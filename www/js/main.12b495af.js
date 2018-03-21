webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'project',
  data: function data() {
    return {
      scssVars: [{
        name: '颜色体系'
      }, {
        name: '字体体系'
      }, {
        name: '间距体系'
      }, {
        name: '响应式体系'
      }],
      color: {
        'main': null,
        'main-hover': null,
        'main-active': null,
        'auxiliary': null,
        'auxiliary-hover': null,
        'auxiliary-active': null,
        'weaking': null,
        'success': null,
        'warning': null,
        'error': null,
        'bg-body': null,
        'bg-footer': null,
        'bg-disabled': null,
        'text-main': null,
        'text-auxiliary': null,
        'text-weaking': null,
        'text-link': null,
        'text-link-hover': null,
        'text-disabled': null,
        'text-highlight': null,
        'text-error': null,
        'text-inverse': null,
        'text-placeholder': null,
        'border-main': null,
        'border-auxiliary': null,
        'border-weaking': null,
        'border-link': null,
        'border-disabled': null
      },
      members: [{
        value: '001',
        text: '陈今斌',
        className: 'abc'
      }, {
        value: '002',
        text: '荣珍'
      }, {
        value: '003',
        text: '陈知然'
      }],
      classDemo: ''
    };
  },

  methods: {
    changeHandler: function changeHandler(value) {
      console.log(value);
    },
    demoMethod: function demoMethod() {
      console.log('The method is called.');
    },
    testmethod: function testmethod() {
      window.test = this.$refs.test;
      window.test.classList.add('xstart');
    }
  },
  created: function created() {
    window.members = this.members;
  },
  mounted: function mounted() {
    window.vm = this;
    var vm = this;
    var div = document.createElement('div');

    div.setAttribute('class', 'u-styledone');
    document.body.appendChild(div);

    function rgb2Hex(color) {
      var rgb = color.split(',');
      var r = parseInt(rgb[0].split('(')[1]);
      var g = parseInt(rgb[1]);
      var b = parseInt(rgb[2].split(')')[0]);

      var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      return hex;
    }

    var initThemeColor = function initThemeColor() {
      for (var color in vm.color) {
        div.setAttribute('class', 'tw-colorcell x' + color);
        vm.color[color] = rgb2Hex(window.getComputedStyle(div).backgroundColor);
      }
    };

    var timer = setInterval(function () {
      if (window.getComputedStyle(div).width === '3px') {
        clearInterval(timer);
        initThemeColor();
        document.body.removeChild(div);
      }
    }, 17);
  }
});

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_item__ = __webpack_require__(29);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twMenu',
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  components: {
    'twMenuItem': __WEBPACK_IMPORTED_MODULE_0__menu_item__["a" /* default */]
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'twMenuItem',
  props: {
    value: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    clickHandler: function clickHandler() {
      this.$emit('click', this.value);
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tw_utils_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tw_utils_placement__ = __webpack_require__(40);

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
      Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["d" /* toggleSpecialTransitionClass */])(this.$el, 'xopen', { type: 'add' });
      Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["a" /* addClass */])(this.switchEl, 'xopen');
      this.open = true;
      this.setParent(true);
    },
    closePoppane: function closePoppane(event) {
      if (event) {
        this.eventTarget = event.target;
        if (this.hasOpenChildPoppane) return;
        if (this.switchEl.contains(event.target)) return;
        if (this.$el.contains(event.target) && this.isSwitchElement(event.target)) return;
      }

      Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["d" /* toggleSpecialTransitionClass */])(this.$el, 'xopen', { type: 'remove' });
      Object(__WEBPACK_IMPORTED_MODULE_2__tw_utils_dom__["b" /* removeClass */])(this.switchEl, 'xopen');
      this.open = false;
      this.setParent(false);
      document.removeEventListener('click', this.closePoppane, true);
    },
    togglePoppane: function togglePoppane(switchEl, event) {
      var _this = this;

      this.switchEl = switchEl;
      this.eventTarget = event.target;

      this.created || document.body.appendChild(this.popLayer);

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
/* 9 */,
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tw_utils_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tw_utils_dom__ = __webpack_require__(10);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tw_utils_event__ = __webpack_require__(3);
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_project__ = __webpack_require__(23);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/project',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_project__["a" /* default */]
  }]
}));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_project_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_87f7ca2a_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_project_vue__ = __webpack_require__(24);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_project_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_87f7ca2a_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_project_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\project.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87f7ca2a", Component.options)
  } else {
    hotAPI.reload("data-v-87f7ca2a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", [
    _c("table", { staticClass: "tw-form xtable" }, [
      _vm._m(0),
      _vm._v(" "),
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
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _vm._m(9),
      _vm._v(" "),
      _vm._m(10),
      _vm._v(" "),
      _vm._m(11),
      _vm._v(" "),
      _vm._m(12),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { colspan: "4" } }, [
          _vm._m(13),
          _vm._v(" "),
          _c("div", { staticClass: "tw-palette" }, [
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["main"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "main", $$v)
                      },
                      expression: "color['main']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("主色")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["main-hover"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "main-hover", $$v)
                      },
                      expression: "color['main-hover']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [
                _vm._v("主色-滑过")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["main-active"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "main-active", $$v)
                      },
                      expression: "color['main-active']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [
                _vm._v("主色-激活")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block xlml" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["auxiliary"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "auxiliary", $$v)
                      },
                      expression: "color['auxiliary']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("辅色")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["auxiliary-hover"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "auxiliary-hover", $$v)
                      },
                      expression: "color['auxiliary-hover']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [
                _vm._v("辅色-滑过")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["auxiliary-active"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "auxiliary-active", $$v)
                      },
                      expression: "color['auxiliary-active']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [
                _vm._v("辅色-激活")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block xlml" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["weaking"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "weaking", $$v)
                      },
                      expression: "color['weaking']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("弱化色")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(14),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { colspan: "4" } }, [
          _c("div", { staticClass: "tw-palette" }, [
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                {
                  staticClass: "tw-block-body",
                  attrs: { title: "$colorTextMain" }
                },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-main"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-main", $$v)
                      },
                      expression: "color['text-main']"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.color["text-main"]))])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("主文本")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-auxiliary"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-auxiliary", $$v)
                      },
                      expression: "color['text-auxiliary']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("铺文本")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-weaking"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-weaking", $$v)
                      },
                      expression: "color['text-weaking']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("弱化文本")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-link"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-link", $$v)
                      },
                      expression: "color['text-link']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("链接色")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-link-hover"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-link-hover", $$v)
                      },
                      expression: "color['text-link-hover']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("链接滑过")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-disabled"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-disabled", $$v)
                      },
                      expression: "color['text-disabled']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("禁用文本")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-highlight"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-highlight", $$v)
                      },
                      expression: "color['text-highlight']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("高亮文本")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-error"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-error", $$v)
                      },
                      expression: "color['text-error']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("错误文本")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-inverse"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-inverse", $$v)
                      },
                      expression: "color['text-inverse']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("反色文本")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["text-placeholder"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "text-placeholder", $$v)
                      },
                      expression: "color['text-placeholder']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("占位文本")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(15),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { colspan: "4" } }, [
          _c("div", { staticClass: "tw-palette" }, [
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["success"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "success", $$v)
                      },
                      expression: "color['success']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("成功")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["warning"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "warning", $$v)
                      },
                      expression: "color['warning']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("警告")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["error"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "error", $$v)
                      },
                      expression: "color['error']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("错误")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(16),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { colspan: "4" } }, [
          _c("div", { staticClass: "tw-palette" }, [
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["bg-body"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "bg-body", $$v)
                      },
                      expression: "color['bg-body']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("页面背景")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["bg-footer"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "bg-footer", $$v)
                      },
                      expression: "color['bg-footer']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("页脚背景")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["bg-disabled"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "bg-disabled", $$v)
                      },
                      expression: "color['bg-disabled']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("禁用背景")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(17),
      _vm._v(" "),
      _c("tr", [
        _c("td", { attrs: { colspan: "4" } }, [
          _c("div", { staticClass: "tw-palette" }, [
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["border-main"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "border-main", $$v)
                      },
                      expression: "color['border-main']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("主边框")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["border-auxiliary"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "border-auxiliary", $$v)
                      },
                      expression: "color['border-auxiliary']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("铺边框")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["border-weaking"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "border-weaking", $$v)
                      },
                      expression: "color['border-weaking']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("弱化边框")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "tw-block" }, [
              _c(
                "div",
                { staticClass: "tw-block-body" },
                [
                  _c("el-color-picker", {
                    staticClass: "tw-colorcell",
                    model: {
                      value: _vm.color["border-disabled"],
                      callback: function($$v) {
                        _vm.$set(_vm.color, "border-disabled", $$v)
                      },
                      expression: "color['border-disabled']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tw-block-title" }, [_vm._v("禁用边框")])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [
      _c("col", { staticStyle: { width: "6em" } }),
      _vm._v(" "),
      _c("col"),
      _vm._v(" "),
      _c("col", { staticStyle: { width: "8em" } }),
      _vm._v(" "),
      _c("col")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title" }, [_vm._v("项目属性")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tw-form-row" }, [
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("项目名称:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col" }, [
        _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("版本号:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col" }, [
        _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tw-form-row" }, [
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("项目组成员:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
        _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title" }, [_vm._v("svn地址")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tw-form-row" }, [
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("高保真:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
        _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tw-form-row" }, [
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("源文件:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
        _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tw-form-row" }, [
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("前端Html:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
        _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tw-form-row" }, [
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("交付Html:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col", attrs: { colspan: "3" } }, [
        _c("input", { staticClass: "tw-input", attrs: { type: "text" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title" }, [_vm._v("全局配置")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "tw-form-row" }, [
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("应用类型:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-optbox xradio" }, [
          _c("input", { attrs: { type: "radio", name: "app-type" } }),
          _c("span", [_vm._v("web端应用")])
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "tw-optbox xradio" }, [
          _c("input", { attrs: { type: "radio", name: "app-type" } }),
          _c("span", [_vm._v("移动端应用")])
        ])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col" }, [
        _c("label", { staticClass: "tw-ctrlabel" }, [_vm._v("底层JS框架:")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "tw-form-col" }, [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title" }, [_vm._v("颜色体系")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title xsub" }, [_vm._v("主题色")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("label", { staticClass: "tw-optbox xcheckbox" }, [
        _c("input", { attrs: { type: "checkbox" } }),
        _c("span", [_vm._v("更改滑过颜色")])
      ]),
      _vm._v(" "),
      _c("label", { staticClass: "tw-optbox xcheckbox" }, [
        _c("input", { attrs: { type: "checkbox" } }),
        _c("span", [_vm._v("更改激活颜色")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title xsub" }, [_vm._v("文本色")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title xsub" }, [_vm._v("标识色")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title xsub" }, [_vm._v("背景色")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4" } }, [
        _c("div", { staticClass: "tw-title xsub" }, [_vm._v("边框色")])
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-87f7ca2a", esExports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tw_vue_footer_footer__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tw_vue_menu_menu__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tw_vue_poppane_poppane__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tw_vue_collapse_collapse__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tw_vue_collapse_collapse_group__ = __webpack_require__(44);
// 注册通用的全局组件







var components = [__WEBPACK_IMPORTED_MODULE_1__tw_vue_footer_footer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__tw_vue_menu_menu__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__tw_vue_poppane_poppane__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__tw_vue_collapse_collapse__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__tw_vue_collapse_collapse_group__["a" /* default */]];

components.forEach(function (component) {
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component(component.name, component);
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_b62c9488_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__(27);
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
/* 27 */
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_092bc87c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__(31);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_menu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_092bc87c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\menu\\menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-092bc87c", Component.options)
  } else {
    hotAPI.reload("data-v-092bc87c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_menu_item_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_0d06e7f4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_menu_item_vue__ = __webpack_require__(30);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_menu_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_0d06e7f4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_menu_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\teewon\\vue\\menu\\menu-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d06e7f4", Component.options)
  } else {
    hotAPI.reload("data-v-0d06e7f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { on: { click: _vm.clickHandler } }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0d06e7f4", esExports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "tw-menu" },
    _vm._l(_vm.items, function(item) {
      return _c(
        "tw-menu-item",
        {
          key: item.key,
          staticClass: "tw-menu-item",
          attrs: { value: item.value, text: item.text }
        },
        [_vm._t("default", [_vm._v(_vm._s(item.text))], null, item)],
        2
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-092bc87c", esExports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_poppane_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_a3000d54_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_poppane_vue__ = __webpack_require__(41);
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
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
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
      left: relatedLeft + 'px'
    };

    if (overallHeight > window.innerHeight && relatedRect.top > elHeight) {
      matrix.auto.top = relatedTop - elHeight + 'px';
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_collapse_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_2e1b41bc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_collapse_vue__ = __webpack_require__(43);
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
/* 43 */
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_collapse_group_vue__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_3ef0d82e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_collapse_group_vue__ = __webpack_require__(45);
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
/* 45 */
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
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
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
      members: [{
        value: '001',
        text: '陈今斌',
        className: 'abc'
      }, {
        value: '002',
        text: '荣珍'
      }, {
        value: '003',
        text: '陈知然'
      }],
      classDemo: ''
    };
  },

  methods: {
    changeHandler: function changeHandler(value) {
      console.log(value);
    },
    demoMethod: function demoMethod() {
      console.log('The method is called.');
    },
    testmethod: function testmethod() {
      window.test = this.$refs.test;
      window.test.classList.add('xstart');
    }
  },
  created: function created() {
    window.members = this.members;
  }
});

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_color_picker_css__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_color_picker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_color_picker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_theme_chalk_base_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_theme_chalk_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib_theme_chalk_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_color_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_button_css__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_chalk_button_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_components__ = __webpack_require__(25);






// 引入样式


// 引入库及应用配置





__WEBPACK_IMPORTED_MODULE_6_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button___default.a);
__WEBPACK_IMPORTED_MODULE_6_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_color_picker___default.a);

// 解决ios click bug
var attachFastClick = __webpack_require__(66);
attachFastClick.attach(document.body);

// 创建Vue应用根实例
new __WEBPACK_IMPORTED_MODULE_6_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_8__config_router__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_7__app__["a" /* default */]);
  }
});

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_0_vue_loader_lib_template_compiler_index_id_data_v_bced26ea_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_0_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(89);
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
/* 89 */
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
                  _c(
                    "router-link",
                    { staticClass: "xactive", attrs: { to: "/intro" } },
                    [_c("span", [_vm._v("概要")])]
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
                    { staticClass: "js-delegate", attrs: { to: "/guid" } },
                    [_c("span", [_vm._v("规范")])]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/component" } }, [
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
                    "router-link",
                    {
                      staticClass: "tw-popswitch xheader js-menu1",
                      attrs: { to: "/project" }
                    },
                    [_c("span", [_vm._v("项目")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "tw-poppane",
                    {
                      staticClass: "js-position",
                      attrs: { switch: ".js-menu1" }
                    },
                    [
                      _c("ul", { staticClass: "tw-header-menu" }, [
                        _c("li", [_c("a", [_vm._v("新项目")])]),
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
      _c("div", { staticClass: "tw-body" }, [_c("router-view")], 1),
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

/***/ })
],[68]);
//# sourceMappingURL=main.12b495af.js.map