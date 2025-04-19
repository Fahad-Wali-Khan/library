"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const ReactDOM = require("react-dom");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production;
function requireReactJsxRuntime_production() {
  if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
  hasRequiredReactJsxRuntime_production = 1;
  var REACT_ELEMENT_TYPE2 = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
  function jsxProd(type, config2, maybeKey) {
    var key = null;
    void 0 !== maybeKey && (key = "" + maybeKey);
    void 0 !== config2.key && (key = "" + config2.key);
    if ("key" in config2) {
      maybeKey = {};
      for (var propName in config2)
        "key" !== propName && (maybeKey[propName] = config2[propName]);
    } else maybeKey = config2;
    config2 = maybeKey.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE2,
      type,
      key,
      ref: void 0 !== config2 ? config2 : null,
      props: maybeKey
    };
  }
  reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_production.jsx = jsxProd;
  reactJsxRuntime_production.jsxs = jsxProd;
  return reactJsxRuntime_production;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  "production" !== process.env.NODE_ENV && function() {
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch ("number" === typeof type.tag && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE) return "<>";
      if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config2) {
      if (hasOwnProperty2.call(config2, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
        if (getter && getter.isReactWarning) return false;
      }
      return void 0 !== config2.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          displayName
        ));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self2, source, owner, props, debugStack, debugTask) {
      self2 = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE2,
        type,
        key,
        props,
        _owner: owner
      };
      null !== (void 0 !== self2 ? self2 : null) ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config2, maybeKey, isStaticChildren, source, self2, debugStack, debugTask) {
      var children = config2.children;
      if (void 0 !== children)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else validateChildKeys(children);
      if (hasOwnProperty2.call(config2, "key")) {
        children = getComponentNameFromType(type);
        var keys2 = Object.keys(config2).filter(function(k) {
          return "key" !== k;
        });
        isStaticChildren = 0 < keys2.length ? "{key: someKey, " + keys2.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys2 = 0 < keys2.length ? "{" + keys2.join(": ..., ") + ": ...}" : "{}", console.error(
          'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
          isStaticChildren,
          children,
          keys2,
          children
        ), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config2) && (checkKeyStringCoercion(config2.key), children = "" + config2.key);
      if ("key" in config2) {
        maybeKey = {};
        for (var propName in config2)
          "key" !== propName && (maybeKey[propName] = config2[propName]);
      } else maybeKey = config2;
      children && defineKeyPropWarningGetter(
        maybeKey,
        "function" === typeof type ? type.displayName || type.name || "Unknown" : type
      );
      return ReactElement(
        type,
        children,
        self2,
        source,
        getOwner(),
        maybeKey,
        debugStack,
        debugTask
      );
    }
    function validateChildKeys(node) {
      "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE2 && node._store && (node._store.validated = 1);
    }
    var React$1 = React, REACT_ELEMENT_TYPE2 = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React$1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty2 = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React$1 = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React$1["react-stack-bottom-frame"].bind(
      React$1,
      UnknownOwner
    )();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_development.jsx = function(type, config2, maybeKey, source, self2) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(
        type,
        config2,
        maybeKey,
        false,
        source,
        self2,
        trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
    reactJsxRuntime_development.jsxs = function(type, config2, maybeKey, source, self2) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(
        type,
        config2,
        maybeKey,
        true,
        source,
        self2,
        trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
  }();
  return reactJsxRuntime_development;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  if (process.env.NODE_ENV === "production") {
    jsxRuntime.exports = requireReactJsxRuntime_production();
  } else {
    jsxRuntime.exports = requireReactJsxRuntime_development();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
function _arrayWithHoles$a(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$a(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$2$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$2$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2$1(r, a) : void 0;
  }
}
function _nonIterableRest$a() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$a(r, e) {
  return _arrayWithHoles$a(r) || _iterableToArrayLimit$a(r, e) || _unsupportedIterableToArray$2$1(r, e) || _nonIterableRest$a();
}
function _typeof$d(o) {
  "@babel/helpers - typeof";
  return _typeof$d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$d(o);
}
function classNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (args) {
    var classes2 = [];
    for (var i = 0; i < args.length; i++) {
      var className = args[i];
      if (!className) {
        continue;
      }
      var type = _typeof$d(className);
      if (type === "string" || type === "number") {
        classes2.push(className);
      } else if (type === "object") {
        var _classes = Array.isArray(className) ? className : Object.entries(className).map(function(_ref) {
          var _ref2 = _slicedToArray$a(_ref, 2), key = _ref2[0], value = _ref2[1];
          return value ? key : null;
        });
        classes2 = _classes.length ? classes2.concat(_classes.filter(function(c) {
          return !!c;
        })) : classes2;
      }
    }
    return classes2.join(" ").trim();
  }
  return void 0;
}
function _arrayWithoutHoles$7(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$2$1(r);
}
function _iterableToArray$7(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread$7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$7(r) {
  return _arrayWithoutHoles$7(r) || _iterableToArray$7(r) || _unsupportedIterableToArray$2$1(r) || _nonIterableSpread$7();
}
function _classCallCheck$1(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function toPrimitive$d(t, r) {
  if ("object" != _typeof$d(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$d(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function toPropertyKey$d(t) {
  var i = toPrimitive$d(t, "string");
  return "symbol" == _typeof$d(i) ? i : i + "";
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey$d(o.key), o);
  }
}
function _createClass$1(e, r, t) {
  return t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty$d(e, r, t) {
  return (r = toPropertyKey$d(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _createForOfIteratorHelper$1$1(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1$3(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$1$3(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1$3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1$3(r, a) : void 0;
  }
}
function _arrayLikeToArray$1$3(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var DomHandler = /* @__PURE__ */ function() {
  function DomHandler2() {
    _classCallCheck$1(this, DomHandler2);
  }
  return _createClass$1(DomHandler2, null, [{
    key: "innerWidth",
    value: function innerWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width = width + (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight));
        return width;
      }
      return 0;
    }
  }, {
    key: "width",
    value: function width(el) {
      if (el) {
        var _width = el.offsetWidth;
        var style = getComputedStyle(el);
        _width = _width - (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight));
        return _width;
      }
      return 0;
    }
  }, {
    key: "getBrowserLanguage",
    value: function getBrowserLanguage() {
      return navigator.userLanguage || navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.language || navigator.browserLanguage || navigator.systemLanguage || "en";
    }
  }, {
    key: "getWindowScrollTop",
    value: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
  }, {
    key: "getOuterWidth",
    value: function getOuterWidth(el, margin) {
      if (el) {
        var width = el.getBoundingClientRect().width || el.offsetWidth;
        if (margin) {
          var style = getComputedStyle(el);
          width = width + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
        }
        return width;
      }
      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function getOuterHeight(el, margin) {
      if (el) {
        var height = el.getBoundingClientRect().height || el.offsetHeight;
        if (margin) {
          var style = getComputedStyle(el);
          height = height + (parseFloat(style.marginTop) + parseFloat(style.marginBottom));
        }
        return height;
      }
      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight(el, margin) {
      if (el) {
        var height = el.clientHeight;
        if (margin) {
          var style = getComputedStyle(el);
          height = height + (parseFloat(style.marginTop) + parseFloat(style.marginBottom));
        }
        return height;
      }
      return 0;
    }
  }, {
    key: "getClientWidth",
    value: function getClientWidth(el, margin) {
      if (el) {
        var width = el.clientWidth;
        if (margin) {
          var style = getComputedStyle(el);
          width = width + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
        }
        return width;
      }
      return 0;
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      var win = window;
      var d = document;
      var e = d.documentElement;
      var g = d.getElementsByTagName("body")[0];
      var w = win.innerWidth || e.clientWidth || g.clientWidth;
      var h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      if (el) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "index",
    value: function index(element) {
      if (element) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
          if (children[i] === element) {
            return num;
          }
          if (children[i].nodeType === 1) {
            num++;
          }
        }
      }
      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function addMultipleClasses(element, className) {
      if (element && className) {
        if (element.classList) {
          var styles2 = className.split(" ");
          for (var i = 0; i < styles2.length; i++) {
            element.classList.add(styles2[i]);
          }
        } else {
          var _styles = className.split(" ");
          for (var _i = 0; _i < _styles.length; _i++) {
            element.className = element.className + (" " + _styles[_i]);
          }
        }
      }
    }
  }, {
    key: "removeMultipleClasses",
    value: function removeMultipleClasses(element, className) {
      if (element && className) {
        if (element.classList) {
          var styles2 = className.split(" ");
          for (var i = 0; i < styles2.length; i++) {
            element.classList.remove(styles2[i]);
          }
        } else {
          var _styles2 = className.split(" ");
          for (var _i2 = 0; _i2 < _styles2.length; _i2++) {
            element.className = element.className.replace(new RegExp("(^|\\b)" + _styles2[_i2].split(" ").join("|") + "(\\b|$)", "gi"), " ");
          }
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass2(element, className) {
      if (element && className) {
        if (element.classList) {
          element.classList.add(className);
        } else {
          element.className = element.className + (" " + className);
        }
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass3(element, className) {
      if (element && className) {
        if (element.classList) {
          element.classList.remove(className);
        } else {
          element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
      }
    }
  }, {
    key: "hasClass",
    value: function hasClass2(element, className) {
      if (element) {
        if (element.classList) {
          return element.classList.contains(className);
        }
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
      }
      return false;
    }
  }, {
    key: "addStyles",
    value: function addStyles(element) {
      var styles2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (element) {
        Object.entries(styles2).forEach(function(_ref) {
          var _ref2 = _slicedToArray$a(_ref, 2), key = _ref2[0], value = _ref2[1];
          return element.style[key] = value;
        });
      }
    }
  }, {
    key: "find",
    value: function find(element, selector) {
      return element ? Array.from(element.querySelectorAll(selector)) : [];
    }
  }, {
    key: "findSingle",
    value: function findSingle(element, selector) {
      if (element) {
        return element.querySelector(selector);
      }
      return null;
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(element) {
      var _this = this;
      var attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (element) {
        var _computedStyles = function computedStyles(rule, value) {
          var _element$$attrs, _element$$attrs2;
          var styles2 = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : [];
          return [value].flat().reduce(function(cv, v) {
            if (v !== null && v !== void 0) {
              var type = _typeof$d(v);
              if (type === "string" || type === "number") {
                cv.push(v);
              } else if (type === "object") {
                var _cv = Array.isArray(v) ? _computedStyles(rule, v) : Object.entries(v).map(function(_ref3) {
                  var _ref4 = _slicedToArray$a(_ref3, 2), _k = _ref4[0], _v = _ref4[1];
                  return rule === "style" && (!!_v || _v === 0) ? "".concat(_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(_v) : _v ? _k : void 0;
                });
                cv = _cv.length ? cv.concat(_cv.filter(function(c) {
                  return !!c;
                })) : cv;
              }
            }
            return cv;
          }, styles2);
        };
        Object.entries(attributes).forEach(function(_ref5) {
          var _ref6 = _slicedToArray$a(_ref5, 2), key = _ref6[0], value = _ref6[1];
          if (value !== void 0 && value !== null) {
            var matchedEvent = key.match(/^on(.+)/);
            if (matchedEvent) {
              element.addEventListener(matchedEvent[1].toLowerCase(), value);
            } else if (key === "p-bind") {
              _this.setAttributes(element, value);
            } else {
              value = key === "class" ? _toConsumableArray$7(new Set(_computedStyles("class", value))).join(" ").trim() : key === "style" ? _computedStyles("style", value).join(";").trim() : value;
              (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
              element.setAttribute(key, value);
            }
          }
        });
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(element, name) {
      if (element) {
        var value = element.getAttribute(name);
        if (!isNaN(value)) {
          return +value;
        }
        if (value === "true" || value === "false") {
          return value === "true";
        }
        return value;
      }
      return void 0;
    }
  }, {
    key: "isAttributeEquals",
    value: function isAttributeEquals(element, name, value) {
      return element ? this.getAttribute(element, name) === value : false;
    }
  }, {
    key: "isAttributeNotEquals",
    value: function isAttributeNotEquals(element, name, value) {
      return !this.isAttributeEquals(element, name, value);
    }
  }, {
    key: "getHeight",
    value: function getHeight(el) {
      if (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height = height - (parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth));
        return height;
      }
      return 0;
    }
  }, {
    key: "getWidth",
    value: function getWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width = width - (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth));
        return width;
      }
      return 0;
    }
  }, {
    key: "alignOverlay",
    value: function alignOverlay(overlay, target, appendTo) {
      var calculateMinWidth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      if (overlay && target) {
        if (appendTo === "self") {
          this.relativePosition(overlay, target);
        } else {
          calculateMinWidth && (overlay.style.minWidth = DomHandler2.getOuterWidth(target) + "px");
          this.absolutePosition(overlay, target);
        }
      }
    }
  }, {
    key: "absolutePosition",
    value: function absolutePosition(element, target) {
      var align = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left";
      if (element && target) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top;
        var left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
          top = targetOffset.top + windowScrollTop - elementOuterHeight;
          if (top < 0) {
            top = windowScrollTop;
          }
          element.style.transformOrigin = "bottom";
        } else {
          top = targetOuterHeight + targetOffset.top + windowScrollTop;
          element.style.transformOrigin = "top";
        }
        var targetOffsetPx = targetOffset.left;
        var alignOffset = align === "left" ? 0 : elementOuterWidth - targetOuterWidth;
        if (targetOffsetPx + targetOuterWidth + elementOuterWidth > viewport.width) {
          left = Math.max(0, targetOffsetPx + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        } else {
          left = targetOffsetPx - alignOffset + windowScrollLeft;
        }
        element.style.top = top + "px";
        element.style.left = left + "px";
      }
    }
  }, {
    key: "relativePosition",
    value: function relativePosition(element, target) {
      if (element && target) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var top;
        var left;
        if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
          top = -1 * elementDimensions.height;
          if (targetOffset.top + top < 0) {
            top = -1 * targetOffset.top;
          }
          element.style.transformOrigin = "bottom";
        } else {
          top = targetHeight;
          element.style.transformOrigin = "top";
        }
        if (elementDimensions.width > viewport.width) {
          left = targetOffset.left * -1;
        } else if (targetOffset.left + elementDimensions.width > viewport.width) {
          left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        } else {
          left = 0;
        }
        element.style.top = top + "px";
        element.style.left = left + "px";
      }
    }
  }, {
    key: "flipfitCollision",
    value: function flipfitCollision(element, target) {
      var _this2 = this;
      var my = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left top";
      var at = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "left bottom";
      var callback = arguments.length > 4 ? arguments[4] : void 0;
      if (element && target) {
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var myArr = my.split(" ");
        var atArr = at.split(" ");
        var getPositionValue = function getPositionValue2(arr, isOffset) {
          return isOffset ? +arr.substring(arr.search(/(\+|-)/g)) || 0 : arr.substring(0, arr.search(/(\+|-)/g)) || arr;
        };
        var position = {
          my: {
            x: getPositionValue(myArr[0]),
            y: getPositionValue(myArr[1] || myArr[0]),
            offsetX: getPositionValue(myArr[0], true),
            offsetY: getPositionValue(myArr[1] || myArr[0], true)
          },
          at: {
            x: getPositionValue(atArr[0]),
            y: getPositionValue(atArr[1] || atArr[0]),
            offsetX: getPositionValue(atArr[0], true),
            offsetY: getPositionValue(atArr[1] || atArr[0], true)
          }
        };
        var myOffset = {
          left: function left() {
            var totalOffset = position.my.offsetX + position.at.offsetX;
            return totalOffset + targetOffset.left + (position.my.x === "left" ? 0 : -1 * (position.my.x === "center" ? _this2.getOuterWidth(element) / 2 : _this2.getOuterWidth(element)));
          },
          top: function top() {
            var totalOffset = position.my.offsetY + position.at.offsetY;
            return totalOffset + targetOffset.top + (position.my.y === "top" ? 0 : -1 * (position.my.y === "center" ? _this2.getOuterHeight(element) / 2 : _this2.getOuterHeight(element)));
          }
        };
        var alignWithAt = {
          count: {
            x: 0,
            y: 0
          },
          left: function left() {
            var left2 = myOffset.left();
            var scrollLeft = DomHandler2.getWindowScrollLeft();
            element.style.left = left2 + scrollLeft + "px";
            if (this.count.x === 2) {
              element.style.left = scrollLeft + "px";
              this.count.x = 0;
            } else if (left2 < 0) {
              this.count.x++;
              position.my.x = "left";
              position.at.x = "right";
              position.my.offsetX *= -1;
              position.at.offsetX *= -1;
              this.right();
            }
          },
          right: function right() {
            var left = myOffset.left() + DomHandler2.getOuterWidth(target);
            var scrollLeft = DomHandler2.getWindowScrollLeft();
            element.style.left = left + scrollLeft + "px";
            if (this.count.x === 2) {
              element.style.left = viewport.width - DomHandler2.getOuterWidth(element) + scrollLeft + "px";
              this.count.x = 0;
            } else if (left + DomHandler2.getOuterWidth(element) > viewport.width) {
              this.count.x++;
              position.my.x = "right";
              position.at.x = "left";
              position.my.offsetX *= -1;
              position.at.offsetX *= -1;
              this.left();
            }
          },
          top: function top() {
            var top2 = myOffset.top();
            var scrollTop = DomHandler2.getWindowScrollTop();
            element.style.top = top2 + scrollTop + "px";
            if (this.count.y === 2) {
              element.style.left = scrollTop + "px";
              this.count.y = 0;
            } else if (top2 < 0) {
              this.count.y++;
              position.my.y = "top";
              position.at.y = "bottom";
              position.my.offsetY *= -1;
              position.at.offsetY *= -1;
              this.bottom();
            }
          },
          bottom: function bottom() {
            var top = myOffset.top() + DomHandler2.getOuterHeight(target);
            var scrollTop = DomHandler2.getWindowScrollTop();
            element.style.top = top + scrollTop + "px";
            if (this.count.y === 2) {
              element.style.left = viewport.height - DomHandler2.getOuterHeight(element) + scrollTop + "px";
              this.count.y = 0;
            } else if (top + DomHandler2.getOuterHeight(target) > viewport.height) {
              this.count.y++;
              position.my.y = "bottom";
              position.at.y = "top";
              position.my.offsetY *= -1;
              position.at.offsetY *= -1;
              this.top();
            }
          },
          center: function center(axis) {
            if (axis === "y") {
              var top = myOffset.top() + DomHandler2.getOuterHeight(target) / 2;
              element.style.top = top + DomHandler2.getWindowScrollTop() + "px";
              if (top < 0) {
                this.bottom();
              } else if (top + DomHandler2.getOuterHeight(target) > viewport.height) {
                this.top();
              }
            } else {
              var left = myOffset.left() + DomHandler2.getOuterWidth(target) / 2;
              element.style.left = left + DomHandler2.getWindowScrollLeft() + "px";
              if (left < 0) {
                this.left();
              } else if (left + DomHandler2.getOuterWidth(element) > viewport.width) {
                this.right();
              }
            }
          }
        };
        alignWithAt[position.at.x]("x");
        alignWithAt[position.at.y]("y");
        if (this.isFunction(callback)) {
          callback(position);
        }
      }
    }
  }, {
    key: "findCollisionPosition",
    value: function findCollisionPosition(position) {
      if (position) {
        var isAxisY = position === "top" || position === "bottom";
        var myXPosition = position === "left" ? "right" : "left";
        var myYPosition = position === "top" ? "bottom" : "top";
        if (isAxisY) {
          return {
            axis: "y",
            my: "center ".concat(myYPosition),
            at: "center ".concat(position)
          };
        }
        return {
          axis: "x",
          my: "".concat(myXPosition, " center"),
          at: "".concat(position, " center")
        };
      }
    }
  }, {
    key: "getParents",
    value: function getParents(element) {
      var parents = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return element.parentNode === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    }
    /**
     * Gets all scrollable parent elements of a given element
     * @param {HTMLElement} element - The element to find scrollable parents for
     * @param {boolean} hideOverlaysOnDocumentScrolling - Whether to include window/document level scrolling
     * @returns {Array} Array of scrollable parent elements
     */
  }, {
    key: "getScrollableParents",
    value: function getScrollableParents(element) {
      var hideOverlaysOnDocumentScrolling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var scrollableParents = [];
      if (element) {
        var parents = this.getParents(element);
        var overflowRegex = /(auto|scroll)/;
        var overflowCheck = function overflowCheck2(node) {
          var styleDeclaration = node ? getComputedStyle(node) : null;
          return styleDeclaration && (overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflow-x")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflow-y")));
        };
        var addScrollableParent = function addScrollableParent2(node) {
          if (hideOverlaysOnDocumentScrolling) {
            scrollableParents.push(node.nodeName === "BODY" || node.nodeName === "HTML" || node.nodeType === 9 ? window : node);
          }
        };
        var _iterator = _createForOfIteratorHelper$1$1(parents), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _parent$dataset;
            var parent = _step.value;
            var scrollSelectors = parent.nodeType === 1 && ((_parent$dataset = parent.dataset) === null || _parent$dataset === void 0 ? void 0 : _parent$dataset.scrollselectors);
            if (scrollSelectors) {
              var selectors = scrollSelectors.split(",");
              var _iterator2 = _createForOfIteratorHelper$1$1(selectors), _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var selector = _step2.value;
                  var el = this.findSingle(parent, selector);
                  if (el && overflowCheck(el)) {
                    addScrollableParent(el);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            if (parent.nodeType === 1 && overflowCheck(parent)) {
              addScrollableParent(parent);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (!scrollableParents.some(function(node) {
        return node === document.body || node === window;
      })) {
        scrollableParents.push(hideOverlaysOnDocumentScrolling ? window : document.body);
      }
      return scrollableParents;
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function getHiddenElementOuterHeight(element) {
      if (element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        var elementHeight = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementHeight;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function getHiddenElementOuterWidth(element) {
      if (element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        var elementWidth = element.offsetWidth;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementWidth;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function getHiddenElementDimensions(element) {
      var dimensions = {};
      if (element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
      }
      return dimensions;
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(element, duration) {
      if (element) {
        element.style.opacity = 0;
        var last = +/* @__PURE__ */ new Date();
        var opacity = 0;
        var _tick = function tick() {
          opacity = +element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
          element.style.opacity = opacity;
          last = +/* @__PURE__ */ new Date();
          if (+opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(_tick) || setTimeout(_tick, 16);
          }
        };
        _tick();
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(element, duration) {
      if (element) {
        var opacity = 1;
        var interval = 50;
        var gap = interval / duration;
        var fading = setInterval(function() {
          opacity = opacity - gap;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
          }
          element.style.opacity = opacity;
        }, interval);
      }
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "isChrome",
    value: function isChrome() {
      return /(chrome)/i.test(navigator.userAgent);
    }
  }, {
    key: "isClient",
    value: function isClient() {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    }
  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
  }, {
    key: "isFunction",
    value: function isFunction3(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "appendChild",
    value: function appendChild(element, target) {
      if (this.isElement(target)) {
        target.appendChild(element);
      } else if (target.el && target.el.nativeElement) {
        target.el.nativeElement.appendChild(element);
      } else {
        throw new Error("Cannot append " + target + " to " + element);
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(element, target) {
      if (this.isElement(target)) {
        target.removeChild(element);
      } else if (target.el && target.el.nativeElement) {
        target.el.nativeElement.removeChild(element);
      } else {
        throw new Error("Cannot remove " + element + " from " + target);
      }
    }
  }, {
    key: "isElement",
    value: function isElement(obj) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof$d(HTMLElement)) === "object" ? obj instanceof HTMLElement : obj && _typeof$d(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(container, item2) {
      var borderTopValue = getComputedStyle(container).getPropertyValue("border-top-width");
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container).getPropertyValue("padding-top");
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container.getBoundingClientRect();
      var itemRect = item2.getBoundingClientRect();
      var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container.scrollTop;
      var elementHeight = container.clientHeight;
      var itemHeight = this.getOuterHeight(item2);
      if (offset < 0) {
        container.scrollTop = scroll + offset;
      } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
      }
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document.selection && document.selection.empty) {
        try {
          document.selection.empty();
        } catch (error) {
        }
      }
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function calculateScrollbarWidth(el) {
      if (el) {
        var style = getComputedStyle(el);
        return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
      }
      if (this.calculatedScrollbarWidth != null) {
        return this.calculatedScrollbarWidth;
      }
      var scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }, {
    key: "calculateBodyScrollbarWidth",
    value: function calculateBodyScrollbarWidth() {
      return window.innerWidth - document.documentElement.offsetWidth;
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};
        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser.version = matched.version;
        }
        if (this.browser.chrome) {
          this.browser.webkit = true;
        } else if (this.browser.webkit) {
          this.browser.safari = true;
        }
      }
      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    }
  }, {
    key: "blockBodyScroll",
    value: function blockBodyScroll() {
      var className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
      var hasScrollbarWidth = !!document.body.style.getPropertyValue("--scrollbar-width");
      !hasScrollbarWidth && document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
      this.addClass(document.body, className);
    }
  }, {
    key: "unblockBodyScroll",
    value: function unblockBodyScroll() {
      var className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
      document.body.style.removeProperty("--scrollbar-width");
      this.removeClass(document.body, className);
    }
  }, {
    key: "isVisible",
    value: function isVisible(element) {
      return element && (element.clientHeight !== 0 || element.getClientRects().length !== 0 || getComputedStyle(element).display !== "none");
    }
  }, {
    key: "isExist",
    value: function isExist(element) {
      return !!(element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode);
    }
  }, {
    key: "getFocusableElements",
    value: function getFocusableElements(element) {
      var selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var focusableElements = DomHandler2.find(element, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector));
      var visibleFocusableElements = [];
      var _iterator3 = _createForOfIteratorHelper$1$1(focusableElements), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var focusableElement = _step3.value;
          if (getComputedStyle(focusableElement).display !== "none" && getComputedStyle(focusableElement).visibility !== "hidden") {
            visibleFocusableElements.push(focusableElement);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return visibleFocusableElements;
    }
  }, {
    key: "getFirstFocusableElement",
    value: function getFirstFocusableElement(element, selector) {
      var focusableElements = DomHandler2.getFocusableElements(element, selector);
      return focusableElements.length > 0 ? focusableElements[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function getLastFocusableElement(element, selector) {
      var focusableElements = DomHandler2.getFocusableElements(element, selector);
      return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
    }
    /**
     * Focus an input element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     */
  }, {
    key: "focus",
    value: function focus(el, scrollTo) {
      var preventScroll = scrollTo === void 0 ? true : !scrollTo;
      el && document.activeElement !== el && el.focus({
        preventScroll
      });
    }
    /**
     * Focus the first focusable element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     * @return {HTMLElement | undefined} the first focusable HTML element found
     */
  }, {
    key: "focusFirstElement",
    value: function focusFirstElement(el, scrollTo) {
      if (!el) {
        return;
      }
      var firstFocusableElement = DomHandler2.getFirstFocusableElement(el);
      firstFocusableElement && DomHandler2.focus(firstFocusableElement, scrollTo);
      return firstFocusableElement;
    }
  }, {
    key: "getCursorOffset",
    value: function getCursorOffset(el, prevText, nextText, currentText) {
      if (el) {
        var style = getComputedStyle(el);
        var ghostDiv = document.createElement("div");
        ghostDiv.style.position = "absolute";
        ghostDiv.style.top = "0px";
        ghostDiv.style.left = "0px";
        ghostDiv.style.visibility = "hidden";
        ghostDiv.style.pointerEvents = "none";
        ghostDiv.style.overflow = style.overflow;
        ghostDiv.style.width = style.width;
        ghostDiv.style.height = style.height;
        ghostDiv.style.padding = style.padding;
        ghostDiv.style.border = style.border;
        ghostDiv.style.overflowWrap = style.overflowWrap;
        ghostDiv.style.whiteSpace = style.whiteSpace;
        ghostDiv.style.lineHeight = style.lineHeight;
        ghostDiv.innerHTML = prevText.replace(/\r\n|\r|\n/g, "<br />");
        var ghostSpan = document.createElement("span");
        ghostSpan.textContent = currentText;
        ghostDiv.appendChild(ghostSpan);
        var text = document.createTextNode(nextText);
        ghostDiv.appendChild(text);
        document.body.appendChild(ghostDiv);
        var offsetLeft = ghostSpan.offsetLeft, offsetTop = ghostSpan.offsetTop, clientHeight = ghostSpan.clientHeight;
        document.body.removeChild(ghostDiv);
        return {
          left: Math.abs(offsetLeft - el.scrollLeft),
          top: Math.abs(offsetTop - el.scrollTop) + clientHeight
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "invokeElementMethod",
    value: function invokeElementMethod(element, methodName, args) {
      element[methodName].apply(element, args);
    }
  }, {
    key: "isClickable",
    value: function isClickable(element) {
      var targetNode = element.nodeName;
      var parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === "INPUT" || targetNode === "TEXTAREA" || targetNode === "BUTTON" || targetNode === "A" || parentNode === "INPUT" || parentNode === "TEXTAREA" || parentNode === "BUTTON" || parentNode === "A" || this.hasClass(element, "p-button") || this.hasClass(element.parentElement, "p-button") || this.hasClass(element.parentElement, "p-checkbox") || this.hasClass(element.parentElement, "p-radiobutton");
    }
  }, {
    key: "applyStyle",
    value: function applyStyle(element, style) {
      if (typeof style === "string") {
        element.style.cssText = style;
      } else {
        for (var prop in style) {
          element.style[prop] = style[prop];
        }
      }
    }
  }, {
    key: "exportCSV",
    value: function exportCSV(csv, filename) {
      var blob = new Blob([csv], {
        type: "application/csv;charset=utf-8;"
      });
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename + ".csv");
      } else {
        var isDownloaded = DomHandler2.saveAs({
          name: filename + ".csv",
          src: URL.createObjectURL(blob)
        });
        if (!isDownloaded) {
          csv = "data:text/csv;charset=utf-8," + csv;
          window.open(encodeURI(csv));
        }
      }
    }
  }, {
    key: "saveAs",
    value: function saveAs(file) {
      if (file) {
        var link = document.createElement("a");
        if (link.download !== void 0) {
          var name = file.name, src = file.src;
          link.setAttribute("href", src);
          link.setAttribute("download", name);
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return true;
        }
      }
      return false;
    }
  }, {
    key: "createInlineStyle",
    value: function createInlineStyle(nonce, styleContainer) {
      var styleElement = document.createElement("style");
      DomHandler2.addNonce(styleElement, nonce);
      if (!styleContainer) {
        styleContainer = document.head;
      }
      styleContainer.appendChild(styleElement);
      return styleElement;
    }
  }, {
    key: "removeInlineStyle",
    value: function removeInlineStyle(styleElement) {
      if (this.isExist(styleElement)) {
        try {
          styleElement.parentNode.removeChild(styleElement);
        } catch (error) {
        }
        styleElement = null;
      }
      return styleElement;
    }
  }, {
    key: "addNonce",
    value: function addNonce(styleElement, nonce) {
      try {
        if (!nonce) {
          nonce = process.env.REACT_APP_CSS_NONCE;
        }
      } catch (error) {
      }
      nonce && styleElement.setAttribute("nonce", nonce);
    }
  }, {
    key: "getTargetElement",
    value: function getTargetElement(target) {
      if (!target) {
        return null;
      }
      if (target === "document") {
        return document;
      } else if (target === "window") {
        return window;
      } else if (_typeof$d(target) === "object" && target.hasOwnProperty("current")) {
        return this.isExist(target.current) ? target.current : null;
      }
      var isFunction3 = function isFunction4(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
      };
      var element = isFunction3(target) ? target() : target;
      return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
    /**
     * Get the attribute names for an element and sorts them alpha for comparison
     */
  }, {
    key: "getAttributeNames",
    value: function getAttributeNames(node) {
      var index;
      var rv;
      var attrs;
      rv = [];
      attrs = node.attributes;
      for (index = 0; index < attrs.length; ++index) {
        rv.push(attrs[index].nodeName);
      }
      rv.sort();
      return rv;
    }
    /**
     * Compare two elements for equality.  Even will compare if the style element
     * is out of order for example:
     *
     * elem1 = style="color: red; font-size: 28px"
     * elem2 = style="font-size: 28px; color: red"
     */
  }, {
    key: "isEqualElement",
    value: function isEqualElement(elm1, elm2) {
      var attrs1;
      var attrs2;
      var name;
      var node1;
      var node2;
      attrs1 = DomHandler2.getAttributeNames(elm1);
      attrs2 = DomHandler2.getAttributeNames(elm2);
      if (attrs1.join(",") !== attrs2.join(",")) {
        return false;
      }
      for (var index = 0; index < attrs1.length; ++index) {
        name = attrs1[index];
        if (name === "style") {
          var astyle = elm1.style;
          var bstyle = elm2.style;
          var rexDigitsOnly = /^\d+$/;
          for (var _i3 = 0, _Object$keys = Object.keys(astyle); _i3 < _Object$keys.length; _i3++) {
            var key = _Object$keys[_i3];
            if (!rexDigitsOnly.test(key) && astyle[key] !== bstyle[key]) {
              return false;
            }
          }
        } else if (elm1.getAttribute(name) !== elm2.getAttribute(name)) {
          return false;
        }
      }
      for (node1 = elm1.firstChild, node2 = elm2.firstChild; node1 && node2; node1 = node1.nextSibling, node2 = node2.nextSibling) {
        if (node1.nodeType !== node2.nodeType) {
          return false;
        }
        if (node1.nodeType === 1) {
          if (!DomHandler2.isEqualElement(node1, node2)) {
            return false;
          }
        } else if (node1.nodeValue !== node2.nodeValue) {
          return false;
        }
      }
      if (node1 || node2) {
        return false;
      }
      return true;
    }
  }, {
    key: "hasCSSAnimation",
    value: function hasCSSAnimation(element) {
      if (element) {
        var style = getComputedStyle(element);
        var animationDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
        return animationDuration > 0;
      }
      return false;
    }
  }, {
    key: "hasCSSTransition",
    value: function hasCSSTransition(element) {
      if (element) {
        var style = getComputedStyle(element);
        var transitionDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
        return transitionDuration > 0;
      }
      return false;
    }
  }]);
}();
_defineProperty$d(DomHandler, "DATA_PROPS", ["data-"]);
_defineProperty$d(DomHandler, "ARIA_PROPS", ["aria", "focus-target"]);
function EventBus() {
  var allHandlers = /* @__PURE__ */ new Map();
  return {
    on: function on(type, handler2) {
      var handlers = allHandlers.get(type);
      if (!handlers) {
        handlers = [handler2];
      } else {
        handlers.push(handler2);
      }
      allHandlers.set(type, handlers);
    },
    off: function off(type, handler2) {
      var handlers = allHandlers.get(type);
      handlers && handlers.splice(handlers.indexOf(handler2) >>> 0, 1);
    },
    emit: function emit(type, evt) {
      var handlers = allHandlers.get(type);
      handlers && handlers.slice().forEach(function(handler2) {
        return handler2(evt);
      });
    }
  };
}
function _extends$p() {
  return _extends$p = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$p.apply(null, arguments);
}
function _createForOfIteratorHelper$2(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$c(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$c(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$c(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$c(r, a) : void 0;
  }
}
function _arrayLikeToArray$c(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var ObjectUtils = /* @__PURE__ */ function() {
  function ObjectUtils2() {
    _classCallCheck$1(this, ObjectUtils2);
  }
  return _createClass$1(ObjectUtils2, null, [{
    key: "equals",
    value: function equals2(obj1, obj2, field) {
      if (field && obj1 && _typeof$d(obj1) === "object" && obj2 && _typeof$d(obj2) === "object") {
        return this.deepEquals(this.resolveFieldData(obj1, field), this.resolveFieldData(obj2, field));
      }
      return this.deepEquals(obj1, obj2);
    }
    /**
     * Compares two JSON objects for deep equality recursively comparing both objects.
     * @param {*} a the first JSON object
     * @param {*} b the second JSON object
     * @returns true if equals, false it not
     */
  }, {
    key: "deepEquals",
    value: function deepEquals(a, b) {
      if (a === b) {
        return true;
      }
      if (a && b && _typeof$d(a) === "object" && _typeof$d(b) === "object") {
        var arrA = Array.isArray(a);
        var arrB = Array.isArray(b);
        var i;
        var length;
        var key;
        if (arrA && arrB) {
          length = a.length;
          if (length !== b.length) {
            return false;
          }
          for (i = length; i-- !== 0; ) {
            if (!this.deepEquals(a[i], b[i])) {
              return false;
            }
          }
          return true;
        }
        if (arrA !== arrB) {
          return false;
        }
        var dateA = a instanceof Date;
        var dateB = b instanceof Date;
        if (dateA !== dateB) {
          return false;
        }
        if (dateA && dateB) {
          return a.getTime() === b.getTime();
        }
        var regexpA = a instanceof RegExp;
        var regexpB = b instanceof RegExp;
        if (regexpA !== regexpB) {
          return false;
        }
        if (regexpA && regexpB) {
          return a.toString() === b.toString();
        }
        var keys2 = Object.keys(a);
        length = keys2.length;
        if (length !== Object.keys(b).length) {
          return false;
        }
        for (i = length; i-- !== 0; ) {
          if (!Object.prototype.hasOwnProperty.call(b, keys2[i])) {
            return false;
          }
        }
        for (i = length; i-- !== 0; ) {
          key = keys2[i];
          if (!this.deepEquals(a[key], b[key])) {
            return false;
          }
        }
        return true;
      }
      return a !== a && b !== b;
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data, field) {
      if (!data || !field) {
        return null;
      }
      try {
        var value = data[field];
        if (this.isNotEmpty(value)) {
          return value;
        }
      } catch (_unused) {
      }
      if (Object.keys(data).length) {
        if (this.isFunction(field)) {
          return field(data);
        } else if (this.isNotEmpty(data[field])) {
          return data[field];
        } else if (field.indexOf(".") === -1) {
          return data[field];
        }
        var fields = field.split(".");
        var _value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (_value == null) {
            return null;
          }
          _value = _value[fields[i]];
        }
        return _value;
      }
      return null;
    }
  }, {
    key: "findDiffKeys",
    value: function findDiffKeys(obj1, obj2) {
      if (!obj1 || !obj2) {
        return {};
      }
      return Object.keys(obj1).filter(function(key) {
        return !obj2.hasOwnProperty(key);
      }).reduce(function(result, current) {
        result[current] = obj1[current];
        return result;
      }, {});
    }
    /**
     * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
     *
     * @param {any} obj the JSON object to reduce
     * @param {string[]} startsWiths the string(s) to check if the property starts with this key
     * @returns the JSON object containing only the key/values that match the startsWith string
     */
  }, {
    key: "reduceKeys",
    value: function reduceKeys(obj, startsWiths) {
      var result = {};
      if (!obj || !startsWiths || startsWiths.length === 0) {
        return result;
      }
      Object.keys(obj).filter(function(key) {
        return startsWiths.some(function(value) {
          return key.startsWith(value);
        });
      }).forEach(function(key) {
        result[key] = obj[key];
        delete obj[key];
      });
      return result;
    }
  }, {
    key: "reorderArray",
    value: function reorderArray(value, from, to) {
      if (value && from !== to) {
        if (to >= value.length) {
          to = to % value.length;
          from = from % value.length;
        }
        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    }
  }, {
    key: "findIndexInList",
    value: function findIndexInList(value, list2, dataKey) {
      var _this = this;
      if (list2) {
        return dataKey ? list2.findIndex(function(item2) {
          return _this.equals(item2, value, dataKey);
        }) : list2.findIndex(function(item2) {
          return item2 === value;
        });
      }
      return -1;
    }
  }, {
    key: "getJSXElement",
    value: function getJSXElement(obj) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    }
  }, {
    key: "getItemValue",
    value: function getItemValue(obj) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    }
  }, {
    key: "getProp",
    value: function getProp2(props) {
      var prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var defaultProps2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var value = props ? props[prop] : void 0;
      return value === void 0 ? defaultProps2[prop] : value;
    }
  }, {
    key: "getPropCaseInsensitive",
    value: function getPropCaseInsensitive(props, prop) {
      var defaultProps2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var fkey = this.toFlatCase(prop);
      for (var key in props) {
        if (props.hasOwnProperty(key) && this.toFlatCase(key) === fkey) {
          return props[key];
        }
      }
      for (var _key3 in defaultProps2) {
        if (defaultProps2.hasOwnProperty(_key3) && this.toFlatCase(_key3) === fkey) {
          return defaultProps2[_key3];
        }
      }
      return void 0;
    }
  }, {
    key: "getMergedProps",
    value: function getMergedProps(props, defaultProps2) {
      return Object.assign({}, defaultProps2, props);
    }
  }, {
    key: "getDiffProps",
    value: function getDiffProps(props, defaultProps2) {
      return this.findDiffKeys(props, defaultProps2);
    }
    /**
     * Gets the value of a property which can be a function or a direct value.
     * If the property is a function, it will be invoked with the provided parameters.
     * @param {*} obj - The object to get the value from
     * @param {...*} params - Parameters to pass to the function if obj is a function
     * @returns {*} The resolved value
     */
  }, {
    key: "getPropValue",
    value: function getPropValue(obj) {
      if (!this.isFunction(obj)) {
        return obj;
      }
      for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
        params[_key4 - 1] = arguments[_key4];
      }
      if (params.length === 1) {
        var param = params[0];
        return obj(Array.isArray(param) ? param[0] : param);
      }
      return obj.apply(void 0, params);
    }
  }, {
    key: "getComponentProp",
    value: function getComponentProp(component) {
      var prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var defaultProps2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.isNotEmpty(component) ? this.getProp(component.props, prop, defaultProps2) : void 0;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(component, defaultProps2) {
      return this.isNotEmpty(component) ? this.getMergedProps(component.props, defaultProps2) : void 0;
    }
  }, {
    key: "getComponentDiffProps",
    value: function getComponentDiffProps(component, defaultProps2) {
      return this.isNotEmpty(component) ? this.getDiffProps(component.props, defaultProps2) : void 0;
    }
  }, {
    key: "isValidChild",
    value: function isValidChild(child, type, validTypes) {
      if (child) {
        var _child$type;
        var childType = this.getComponentProp(child, "__TYPE") || (child.type ? child.type.displayName : void 0);
        if (!childType && child !== null && child !== void 0 && (_child$type = child.type) !== null && _child$type !== void 0 && (_child$type = _child$type._payload) !== null && _child$type !== void 0 && _child$type.value) {
          childType = child.type._payload.value.find(function(v) {
            return v === type;
          });
        }
        var isValid = childType === type;
        try {
          var messageTypes;
          if (false) ;
        } catch (error) {
        }
        return isValid;
      }
      return false;
    }
  }, {
    key: "getRefElement",
    value: function getRefElement(ref) {
      if (ref) {
        return _typeof$d(ref) === "object" && ref.hasOwnProperty("current") ? ref.current : ref;
      }
      return null;
    }
  }, {
    key: "combinedRefs",
    value: function combinedRefs(innerRef, forwardRef) {
      if (innerRef && forwardRef) {
        if (typeof forwardRef === "function") {
          forwardRef(innerRef.current);
        } else {
          forwardRef.current = innerRef.current;
        }
      }
    }
  }, {
    key: "removeAccents",
    value: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
      }
      return str;
    }
  }, {
    key: "toFlatCase",
    value: function toFlatCase(str) {
      return this.isNotEmpty(str) && this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
    }
  }, {
    key: "toCapitalCase",
    value: function toCapitalCase(str) {
      return this.isNotEmpty(str) && this.isString(str) ? str[0].toUpperCase() + str.slice(1) : str;
    }
  }, {
    key: "trim",
    value: function trim(value) {
      return this.isNotEmpty(value) && this.isString(value) ? value.trim() : value;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$d(value) === "object" && Object.keys(value).length === 0;
    }
  }, {
    key: "isNotEmpty",
    value: function isNotEmpty(value) {
      return !this.isEmpty(value);
    }
  }, {
    key: "isFunction",
    value: function isFunction3(value) {
      return !!(value && value.constructor && value.call && value.apply);
    }
  }, {
    key: "isObject",
    value: function isObject3(value) {
      return value !== null && value instanceof Object && value.constructor === Object;
    }
  }, {
    key: "isDate",
    value: function isDate2(value) {
      return value !== null && value instanceof Date && value.constructor === Date;
    }
  }, {
    key: "isArray",
    value: function isArray2(value) {
      return value !== null && Array.isArray(value);
    }
  }, {
    key: "isString",
    value: function isString3(value) {
      return value !== null && typeof value === "string";
    }
  }, {
    key: "isPrintableCharacter",
    value: function isPrintableCharacter() {
      var _char = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
    }
  }, {
    key: "isLetter",
    value: function isLetter(_char2) {
      return /^[a-zA-Z\u00C0-\u017F]$/.test(_char2);
    }
  }, {
    key: "isScalar",
    value: function isScalar(value) {
      return value != null && (typeof value === "string" || typeof value === "number" || typeof value === "bigint" || typeof value === "boolean");
    }
    /**
     * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlast
     */
  }, {
    key: "findLast",
    value: function findLast(arr, callback) {
      var item2;
      if (this.isNotEmpty(arr)) {
        try {
          item2 = arr.findLast(callback);
        } catch (_unused2) {
          item2 = _toConsumableArray$7(arr).reverse().find(callback);
        }
      }
      return item2;
    }
    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
  }, {
    key: "findLastIndex",
    value: function findLastIndex(arr, callback) {
      var index = -1;
      if (this.isNotEmpty(arr)) {
        try {
          index = arr.findLastIndex(callback);
        } catch (_unused3) {
          index = arr.lastIndexOf(_toConsumableArray$7(arr).reverse().find(callback));
        }
      }
      return index;
    }
  }, {
    key: "sort",
    value: function sort(value1, value2) {
      var order = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var comparator = arguments.length > 3 ? arguments[3] : void 0;
      var nullSortOrder = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1;
      var result = this.compare(value1, value2, comparator, order);
      var finalSortOrder = order;
      if (this.isEmpty(value1) || this.isEmpty(value2)) {
        finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
      }
      return finalSortOrder * result;
    }
  }, {
    key: "compare",
    value: function compare(value1, value2, comparator) {
      var order = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      var result = -1;
      var emptyValue1 = this.isEmpty(value1);
      var emptyValue2 = this.isEmpty(value2);
      if (emptyValue1 && emptyValue2) {
        result = 0;
      } else if (emptyValue1) {
        result = order;
      } else if (emptyValue2) {
        result = -order;
      } else if (typeof value1 === "string" && typeof value2 === "string") {
        result = comparator(value1, value2);
      } else {
        result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      }
      return result;
    }
  }, {
    key: "localeComparator",
    value: function localeComparator(locale) {
      return new Intl.Collator(locale, {
        numeric: true
      }).compare;
    }
  }, {
    key: "findChildrenByKey",
    value: function findChildrenByKey(data, key) {
      var _iterator = _createForOfIteratorHelper$2(data), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item2 = _step.value;
          if (item2.key === key) {
            return item2.children || [];
          } else if (item2.children) {
            var result = this.findChildrenByKey(item2.children, key);
            if (result.length > 0) {
              return result;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return [];
    }
    /**
     * This function takes mutates and object with a new value given
     * a specific field. This will handle deeply nested fields that
     * need to be modified or created.
     *
     * e.g:
     * data = {
     *  nested: {
     *      foo: "bar"
     *  }
     * }
     *
     * field = "nested.foo"
     * value = "baz"
     *
     * The function will mutate data to be
     * e.g:
     * data = {
     *  nested: {
     *      foo: "baz"
     *  }
     * }
     *
     * @param {object} data the object to be modified
     * @param {string} field the field in the object to replace
     * @param {any} value the value to have replaced in the field
     */
  }, {
    key: "mutateFieldData",
    value: function mutateFieldData(data, field, value) {
      if (_typeof$d(data) !== "object" || typeof field !== "string") {
        return;
      }
      var fields = field.split(".");
      var obj = data;
      for (var i = 0, len = fields.length; i < len; ++i) {
        if (i + 1 - len === 0) {
          obj[fields[i]] = value;
          break;
        }
        if (!obj[fields[i]]) {
          obj[fields[i]] = {};
        }
        obj = obj[fields[i]];
      }
    }
  }]);
}();
var lastId = 0;
function UniqueComponentId() {
  var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pr_id_";
  lastId++;
  return "".concat(prefix).concat(lastId);
}
function ownKeys$2$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2$3(Object(t), true).forEach(function(r2) {
      _defineProperty$d(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var IconUtils = /* @__PURE__ */ function() {
  function IconUtils2() {
    _classCallCheck$1(this, IconUtils2);
  }
  return _createClass$1(IconUtils2, null, [{
    key: "getJSXIcon",
    value: function getJSXIcon(icon2) {
      var iconProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var content2 = null;
      if (icon2 !== null) {
        var iconType = _typeof$d(icon2);
        var className = classNames(iconProps.className, iconType === "string" && icon2);
        content2 = /* @__PURE__ */ React__namespace.createElement("span", _extends$p({}, iconProps, {
          className,
          key: UniqueComponentId("icon")
        }));
        if (iconType !== "string") {
          var defaultContentOptions = _objectSpread$2$3({
            iconProps,
            element: content2
          }, options);
          return ObjectUtils.getJSXElement(icon2, defaultContentOptions);
        }
      }
      return content2;
    }
  }]);
}();
function ownKeys$d(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$d(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$d(Object(t), true).forEach(function(r2) {
      _defineProperty$d(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function mergeProps(props) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!props) {
    return void 0;
  }
  var isFunction3 = function isFunction4(obj) {
    return typeof obj === "function";
  };
  var classNameMergeFunction = options.classNameMergeFunction;
  var hasMergeFunction = isFunction3(classNameMergeFunction);
  return props.reduce(function(merged, ps) {
    if (!ps) {
      return merged;
    }
    var _loop = function _loop2() {
      var value = ps[key];
      if (key === "style") {
        merged.style = _objectSpread$d(_objectSpread$d({}, merged.style), ps.style);
      } else if (key === "className") {
        var newClassName = "";
        if (hasMergeFunction) {
          newClassName = classNameMergeFunction(merged.className, ps.className);
        } else {
          newClassName = [merged.className, ps.className].join(" ").trim();
        }
        merged.className = newClassName || void 0;
      } else if (isFunction3(value)) {
        var existingFn = merged[key];
        merged[key] = existingFn ? function() {
          existingFn.apply(void 0, arguments);
          value.apply(void 0, arguments);
        } : value;
      } else {
        merged[key] = value;
      }
    };
    for (var key in ps) {
      _loop();
    }
    return merged;
  }, {});
}
function handler() {
  var zIndexes = [];
  var generateZIndex = function generateZIndex2(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999;
    var lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    var newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  var revertZIndex = function revertZIndex2(zIndex) {
    zIndexes = zIndexes.filter(function(obj) {
      return obj.value !== zIndex;
    });
  };
  var getCurrentZIndex = function getCurrentZIndex2(key, autoZIndex) {
    return getLastZIndex(key, autoZIndex).value;
  };
  var getLastZIndex = function getLastZIndex2(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return _toConsumableArray$7(zIndexes).reverse().find(function(obj) {
      return autoZIndex ? true : obj.key === key;
    }) || {
      key,
      value: baseZIndex
    };
  };
  var getZIndex = function getZIndex2(el) {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: function set(key, el, autoZIndex, baseZIndex) {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, autoZIndex, baseZIndex));
      }
    },
    clear: function clear(el) {
      if (el) {
        revertZIndex(ZIndexUtils.get(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: function getCurrent(key, autoZIndex) {
      return getCurrentZIndex(key, autoZIndex);
    }
  };
}
var ZIndexUtils = handler();
var FilterMatchMode = Object.freeze({
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter",
  CUSTOM: "custom"
});
function _createForOfIteratorHelper$1(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1$2(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$1$2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1$2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1$2(r, a) : void 0;
  }
}
function _arrayLikeToArray$1$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var FilterService = {
  filter: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    var filteredItems = [];
    if (!value) {
      return filteredItems;
    }
    var _iterator = _createForOfIteratorHelper$1(value), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item2 = _step.value;
        if (typeof item2 === "string") {
          if (this.filters[filterMatchMode](item2, filterValue, filterLocale)) {
            filteredItems.push(item2);
            continue;
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper$1(fields), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var field = _step2.value;
              var fieldValue = ObjectUtils.resolveFieldData(item2, field);
              if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                filteredItems.push(item2);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return filteredItems;
  },
  filters: {
    startsWith: function startsWith(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = ObjectUtils.removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: function contains(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || typeof filter2 === "string" && filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = ObjectUtils.removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: function notContains(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || typeof filter2 === "string" && filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = ObjectUtils.removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: function endsWith(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = ObjectUtils.removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: function equals(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || typeof filter2 === "string" && filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) {
        return value.getTime() === filter2.getTime();
      }
      return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) === ObjectUtils.removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: function notEquals(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || typeof filter2 === "string" && filter2.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter2.getTime) {
        return value.getTime() !== filter2.getTime();
      }
      return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) !== ObjectUtils.removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    "in": function _in(value, filter2) {
      if (filter2 === void 0 || filter2 === null || filter2.length === 0) {
        return true;
      }
      for (var i = 0; i < filter2.length; i++) {
        if (ObjectUtils.equals(value, filter2[i])) {
          return true;
        }
      }
      return false;
    },
    notIn: function notIn(value, filter2) {
      if (filter2 === void 0 || filter2 === null || filter2.length === 0) {
        return true;
      }
      for (var i = 0; i < filter2.length; i++) {
        if (ObjectUtils.equals(value, filter2[i])) {
          return false;
        }
      }
      return true;
    },
    between: function between(value, filter2) {
      if (filter2 == null || filter2[0] == null || filter2[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) {
        return filter2[0].getTime() <= value.getTime() && value.getTime() <= filter2[1].getTime();
      }
      return filter2[0] <= value && value <= filter2[1];
    },
    lt: function lt(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) {
        return value.getTime() < filter2.getTime();
      }
      return value < filter2;
    },
    lte: function lte(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) {
        return value.getTime() <= filter2.getTime();
      }
      return value <= filter2;
    },
    gt: function gt(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) {
        return value.getTime() > filter2.getTime();
      }
      return value > filter2;
    },
    gte: function gte(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) {
        return value.getTime() >= filter2.getTime();
      }
      return value >= filter2;
    },
    dateIs: function dateIs(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter2.toDateString();
    },
    dateIsNot: function dateIsNot(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter2.toDateString();
    },
    dateBefore: function dateBefore(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter2.getTime();
    },
    dateAfter: function dateAfter(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter2.getTime();
    }
  },
  register: function register(rule, fn) {
    this.filters[rule] = fn;
  }
};
function _typeof$c(o) {
  "@babel/helpers - typeof";
  return _typeof$c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$c(o);
}
function toPrimitive$c(t, r) {
  if ("object" != _typeof$c(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$c(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$c(t) {
  var i = toPrimitive$c(t, "string");
  return "symbol" == _typeof$c(i) ? i : i + "";
}
function _defineProperty$c(e, r, t) {
  return (r = toPropertyKey$c(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _createClass(e, r, t) {
  return Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
var PrimeReact$1 = /* @__PURE__ */ _createClass(function PrimeReact() {
  _classCallCheck(this, PrimeReact);
});
_defineProperty$c(PrimeReact$1, "ripple", false);
_defineProperty$c(PrimeReact$1, "inputStyle", "outlined");
_defineProperty$c(PrimeReact$1, "locale", "en");
_defineProperty$c(PrimeReact$1, "appendTo", null);
_defineProperty$c(PrimeReact$1, "cssTransition", true);
_defineProperty$c(PrimeReact$1, "autoZIndex", true);
_defineProperty$c(PrimeReact$1, "hideOverlaysOnDocumentScrolling", false);
_defineProperty$c(PrimeReact$1, "nonce", null);
_defineProperty$c(PrimeReact$1, "nullSortOrder", 1);
_defineProperty$c(PrimeReact$1, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
_defineProperty$c(PrimeReact$1, "pt", void 0);
_defineProperty$c(PrimeReact$1, "filterMatchModeOptions", {
  text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
  numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
  date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
});
_defineProperty$c(PrimeReact$1, "changeTheme", function(currentTheme, newTheme, linkElementId, callback) {
  var _linkElement$parentNo;
  var linkElement = document.getElementById(linkElementId);
  if (!linkElement) {
    throw Error("Element with id ".concat(linkElementId, " not found."));
  }
  var newThemeUrl = linkElement.getAttribute("href").replace(currentTheme, newTheme);
  var newLinkElement = document.createElement("link");
  newLinkElement.setAttribute("rel", "stylesheet");
  newLinkElement.setAttribute("id", linkElementId);
  newLinkElement.setAttribute("href", newThemeUrl);
  newLinkElement.addEventListener("load", function() {
    if (callback) {
      callback();
    }
  });
  (_linkElement$parentNo = linkElement.parentNode) === null || _linkElement$parentNo === void 0 || _linkElement$parentNo.replaceChild(newLinkElement, linkElement);
});
var locales = {
  en: {
    accept: "Yes",
    addRule: "Add Rule",
    am: "AM",
    apply: "Apply",
    cancel: "Cancel",
    choose: "Choose",
    chooseDate: "Choose Date",
    chooseMonth: "Choose Month",
    chooseYear: "Choose Year",
    clear: "Clear",
    completed: "Completed",
    contains: "Contains",
    custom: "Custom",
    dateAfter: "Date is after",
    dateBefore: "Date is before",
    dateFormat: "mm/dd/yy",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    emptyFilterMessage: "No results found",
    emptyMessage: "No available options",
    emptySearchMessage: "No results found",
    emptySelectionMessage: "No selected item",
    endsWith: "Ends with",
    equals: "Equals",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filter",
    firstDayOfWeek: 0,
    gt: "Greater than",
    gte: "Greater than or equal to",
    lt: "Less than",
    lte: "Less than or equal to",
    matchAll: "Match All",
    matchAny: "Match Any",
    medium: "Medium",
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    nextDecade: "Next Decade",
    nextHour: "Next Hour",
    nextMinute: "Next Minute",
    nextMonth: "Next Month",
    nextSecond: "Next Second",
    nextYear: "Next Year",
    noFilter: "No Filter",
    notContains: "Not contains",
    notEquals: "Not equals",
    now: "Now",
    passwordPrompt: "Enter a password",
    pending: "Pending",
    pm: "PM",
    prevDecade: "Previous Decade",
    prevHour: "Previous Hour",
    prevMinute: "Previous Minute",
    prevMonth: "Previous Month",
    prevSecond: "Previous Second",
    prevYear: "Previous Year",
    reject: "No",
    removeRule: "Remove Rule",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    showMonthAfterYear: false,
    startsWith: "Starts with",
    strong: "Strong",
    today: "Today",
    upload: "Upload",
    weak: "Weak",
    weekHeader: "Wk",
    aria: {
      cancelEdit: "Cancel Edit",
      close: "Close",
      collapseRow: "Row Collapsed",
      editRow: "Edit Row",
      expandRow: "Row Expanded",
      falseLabel: "False",
      filterConstraint: "Filter Constraint",
      filterOperator: "Filter Operator",
      firstPageLabel: "First Page",
      gridView: "Grid View",
      hideFilterMenu: "Hide Filter Menu",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      lastPageLabel: "Last Page",
      listLabel: "Option List",
      listView: "List View",
      moveAllToSource: "Move All to Source",
      moveAllToTarget: "Move All to Target",
      moveBottom: "Move Bottom",
      moveDown: "Move Down",
      moveToSource: "Move to Source",
      moveToTarget: "Move to Target",
      moveTop: "Move Top",
      moveUp: "Move Up",
      navigation: "Navigation",
      next: "Next",
      nextPageLabel: "Next Page",
      nullLabel: "Not Selected",
      pageLabel: "Page {page}",
      otpLabel: "Please enter one time password character {0}",
      passwordHide: "Hide Password",
      passwordShow: "Show Password",
      previous: "Previous",
      prevPageLabel: "Previous Page",
      rotateLeft: "Rotate Left",
      rotateRight: "Rotate Right",
      rowsPerPageLabel: "Rows per page",
      saveEdit: "Save Edit",
      scrollTop: "Scroll Top",
      selectAll: "All items selected",
      selectRow: "Row Selected",
      showFilterMenu: "Show Filter Menu",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      star: "1 star",
      stars: "{star} stars",
      trueLabel: "True",
      unselectAll: "All items unselected",
      unselectRow: "Row Unselected",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out"
    }
  }
};
function localeOption(key, locale) {
  if (key.includes("__proto__") || key.includes("prototype")) {
    throw new Error("Unsafe key detected");
  }
  var _locale = PrimeReact$1.locale;
  try {
    return localeOptions(_locale)[key];
  } catch (error) {
    throw new Error("The ".concat(key, " option is not found in the current locale('").concat(_locale, "')."));
  }
}
function ariaLabel(ariaKey, options) {
  if (ariaKey.includes("__proto__") || ariaKey.includes("prototype")) {
    throw new Error("Unsafe ariaKey detected");
  }
  var _locale = PrimeReact$1.locale;
  try {
    var _ariaLabel = localeOptions(_locale).aria[ariaKey];
    if (_ariaLabel) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          _ariaLabel = _ariaLabel.replace("{".concat(key, "}"), options[key]);
        }
      }
    }
    return _ariaLabel;
  } catch (error) {
    throw new Error("The ".concat(ariaKey, " option is not found in the current locale('").concat(_locale, "')."));
  }
}
function localeOptions(locale) {
  var _locale = locale || PrimeReact$1.locale;
  if (_locale.includes("__proto__") || _locale.includes("prototype")) {
    throw new Error("Unsafe locale detected");
  }
  return locales[_locale];
}
var PrimeReactContext = /* @__PURE__ */ React.createContext();
var PrimeReact2 = PrimeReact$1;
function _arrayWithHoles$9(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$9(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$b(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$b(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$b(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$b(r, a) : void 0;
  }
}
function _nonIterableRest$9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$9(r, e) {
  return _arrayWithHoles$9(r) || _iterableToArrayLimit$9(r, e) || _unsupportedIterableToArray$b(r, e) || _nonIterableRest$9();
}
var usePrevious = function usePrevious2(newValue) {
  var ref = React__namespace.useRef(null);
  React__namespace.useEffect(function() {
    ref.current = newValue;
    return function() {
      ref.current = null;
    };
  }, [newValue]);
  return ref.current;
};
var useUnmountEffect = function useUnmountEffect2(fn) {
  return React__namespace.useEffect(function() {
    return fn;
  }, []);
};
var useEventListener = function useEventListener2(_ref) {
  var _ref$target = _ref.target, target = _ref$target === void 0 ? "document" : _ref$target, type = _ref.type, listener = _ref.listener, options = _ref.options, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  var targetRef = React__namespace.useRef(null);
  var listenerRef = React__namespace.useRef(null);
  var prevListener = usePrevious(listener);
  var prevOptions = usePrevious(options);
  var bind = function bind2() {
    var bindOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var bindTarget = bindOptions.target;
    if (ObjectUtils.isNotEmpty(bindTarget)) {
      unbind();
      (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindTarget));
    }
    if (!listenerRef.current && targetRef.current) {
      listenerRef.current = function(event) {
        return listener && listener(event);
      };
      targetRef.current.addEventListener(type, listenerRef.current, options);
    }
  };
  var unbind = function unbind2() {
    if (listenerRef.current) {
      targetRef.current.removeEventListener(type, listenerRef.current, options);
      listenerRef.current = null;
    }
  };
  var dispose = function dispose2() {
    unbind();
    prevListener = null;
    prevOptions = null;
  };
  var updateTarget = React__namespace.useCallback(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
    } else {
      unbind();
      targetRef.current = null;
    }
  }, [target, when]);
  React__namespace.useEffect(function() {
    updateTarget();
  }, [updateTarget]);
  React__namespace.useEffect(function() {
    var listenerChanged = "".concat(prevListener) !== "".concat(listener);
    var optionsChanged = prevOptions !== options;
    var listenerExists = listenerRef.current;
    if (listenerExists && (listenerChanged || optionsChanged)) {
      unbind();
      when && bind();
    } else if (!listenerExists) {
      dispose();
    }
  }, [listener, options, when]);
  useUnmountEffect(function() {
    dispose();
  });
  return [bind, unbind];
};
var useDebounce = function useDebounce2(initialValue, delay) {
  var _React$useState = React__namespace.useState(initialValue), _React$useState2 = _slicedToArray$9(_React$useState, 2), inputValue = _React$useState2[0], setInputValue = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(initialValue), _React$useState4 = _slicedToArray$9(_React$useState3, 2), debouncedValue = _React$useState4[0], setDebouncedValue = _React$useState4[1];
  var mountedRef = React__namespace.useRef(false);
  var timeoutRef = React__namespace.useRef(null);
  var cancelTimer = function cancelTimer2() {
    return window.clearTimeout(timeoutRef.current);
  };
  useMountEffect(function() {
    mountedRef.current = true;
  });
  useUnmountEffect(function() {
    cancelTimer();
  });
  React__namespace.useEffect(function() {
    if (!mountedRef.current) {
      return;
    }
    cancelTimer();
    timeoutRef.current = window.setTimeout(function() {
      setDebouncedValue(inputValue);
    }, delay);
  }, [inputValue, delay]);
  return [inputValue, debouncedValue, setInputValue];
};
var groupToDisplayedElements = {};
var useDisplayOrder = function useDisplayOrder2(group) {
  var isVisible = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var _React$useState = React__namespace.useState(function() {
    return UniqueComponentId();
  }), _React$useState2 = _slicedToArray$9(_React$useState, 1), uid = _React$useState2[0];
  var _React$useState3 = React__namespace.useState(0), _React$useState4 = _slicedToArray$9(_React$useState3, 2), displayOrder = _React$useState4[0], setDisplayOrder = _React$useState4[1];
  React__namespace.useEffect(function() {
    if (isVisible) {
      if (!groupToDisplayedElements[group]) {
        groupToDisplayedElements[group] = [];
      }
      var newDisplayOrder = groupToDisplayedElements[group].push(uid);
      setDisplayOrder(newDisplayOrder);
      return function() {
        delete groupToDisplayedElements[group][newDisplayOrder - 1];
        var lastIndex = groupToDisplayedElements[group].length - 1;
        var lastOrder = ObjectUtils.findLastIndex(groupToDisplayedElements[group], function(el) {
          return el !== void 0;
        });
        if (lastOrder !== lastIndex) {
          groupToDisplayedElements[group].splice(lastOrder + 1);
        }
        setDisplayOrder(void 0);
      };
    }
  }, [group, uid, isVisible]);
  return displayOrder;
};
function _arrayWithoutHoles$6(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$b(r);
}
function _iterableToArray$6(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread$6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$6(r) {
  return _arrayWithoutHoles$6(r) || _iterableToArray$6(r) || _unsupportedIterableToArray$b(r) || _nonIterableSpread$6();
}
var ESC_KEY_HANDLING_PRIORITIES = {
  DIALOG: 300,
  PASSWORD: 700,
  TOOLTIP: 1200
};
var globalEscKeyHandlingLogic = {
  /**
   * Mapping from ESC_KEY_HANDLING_PRIORITY to array of related listeners, grouped by priority
   * @example
   * Map<{
   *     [ESC_KEY_HANDLING_PRIORITIES.SIDEBAR]: Map<{
   *         1: () => {...},
   *         2: () => {...}
   *     }>,
   *     [ESC_KEY_HANDLING_PRIORITIES.DIALOG]: Map<{
   *         1: () => {...},
   *         2: () => {...}
   *     }>
   * }>;
   */
  escKeyListeners: /* @__PURE__ */ new Map(),
  /**
   * Keydown handler (attached to any keydown)
   */
  onGlobalKeyDown: function onGlobalKeyDown(event) {
    if (event.code !== "Escape") {
      return;
    }
    var escKeyListeners = globalEscKeyHandlingLogic.escKeyListeners;
    var maxPrimaryPriority = Math.max.apply(Math, _toConsumableArray$6(escKeyListeners.keys()));
    var theMostImportantEscHandlersSet = escKeyListeners.get(maxPrimaryPriority);
    var maxSecondaryPriority = Math.max.apply(Math, _toConsumableArray$6(theMostImportantEscHandlersSet.keys()));
    var theMostImportantEscHandler = theMostImportantEscHandlersSet.get(maxSecondaryPriority);
    theMostImportantEscHandler(event);
  },
  /**
   * Attach global keydown listener if there are any "esc" key handlers assigned,
   * otherwise detach.
   */
  refreshGlobalKeyDownListener: function refreshGlobalKeyDownListener() {
    var document2 = DomHandler.getTargetElement("document");
    if (this.escKeyListeners.size > 0) {
      document2.addEventListener("keydown", this.onGlobalKeyDown);
    } else {
      document2.removeEventListener("keydown", this.onGlobalKeyDown);
    }
  },
  /**
   * Add "Esc" key handler
   */
  addListener: function addListener(callback, _ref) {
    var _this = this;
    var _ref2 = _slicedToArray$9(_ref, 2), primaryPriority = _ref2[0], secondaryPriority = _ref2[1];
    var escKeyListeners = this.escKeyListeners;
    if (!escKeyListeners.has(primaryPriority)) {
      escKeyListeners.set(primaryPriority, /* @__PURE__ */ new Map());
    }
    var primaryPriorityListeners = escKeyListeners.get(primaryPriority);
    if (primaryPriorityListeners.has(secondaryPriority)) {
      throw new Error("Unexpected: global esc key listener with priority [".concat(primaryPriority, ", ").concat(secondaryPriority, "] already exists."));
    }
    primaryPriorityListeners.set(secondaryPriority, callback);
    this.refreshGlobalKeyDownListener();
    return function() {
      primaryPriorityListeners["delete"](secondaryPriority);
      if (primaryPriorityListeners.size === 0) {
        escKeyListeners["delete"](primaryPriority);
      }
      _this.refreshGlobalKeyDownListener();
    };
  }
};
var useGlobalOnEscapeKey = function useGlobalOnEscapeKey2(_ref3) {
  var callback = _ref3.callback, when = _ref3.when, priority = _ref3.priority;
  React.useEffect(function() {
    if (!when) {
      return;
    }
    return globalEscKeyHandlingLogic.addListener(callback, priority);
  }, [callback, when, priority]);
};
var useMergeProps = function useMergeProps2() {
  var context = React.useContext(PrimeReactContext);
  return function() {
    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }
    return mergeProps(props, context === null || context === void 0 ? void 0 : context.ptOptions);
  };
};
var useMountEffect = function useMountEffect2(fn) {
  var mounted = React__namespace.useRef(false);
  return React__namespace.useEffect(function() {
    if (!mounted.current) {
      mounted.current = true;
      return fn && fn();
    }
  }, []);
};
var useOverlayScrollListener = function useOverlayScrollListener2(_ref) {
  var target = _ref.target, listener = _ref.listener, options = _ref.options, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  var context = React__namespace.useContext(PrimeReactContext);
  var targetRef = React__namespace.useRef(null);
  var listenerRef = React__namespace.useRef(null);
  var scrollableParentsRef = React__namespace.useRef([]);
  var prevListener = usePrevious(listener);
  var prevOptions = usePrevious(options);
  var bind = function bind2() {
    var bindOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ObjectUtils.isNotEmpty(bindOptions.target)) {
      unbind();
      (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindOptions.target));
    }
    if (!listenerRef.current && targetRef.current) {
      var hideOnScroll = context ? context.hideOverlaysOnDocumentScrolling : PrimeReact2.hideOverlaysOnDocumentScrolling;
      var nodes = scrollableParentsRef.current = DomHandler.getScrollableParents(targetRef.current, hideOnScroll);
      listenerRef.current = function(event) {
        return listener && listener(event);
      };
      nodes.forEach(function(node) {
        return node.addEventListener("scroll", listenerRef.current, options);
      });
    }
  };
  var unbind = function unbind2() {
    if (listenerRef.current) {
      var nodes = scrollableParentsRef.current;
      nodes.forEach(function(node) {
        return node.removeEventListener("scroll", listenerRef.current, options);
      });
      listenerRef.current = null;
    }
  };
  var dispose = function dispose2() {
    unbind();
    scrollableParentsRef.current = null;
    prevListener = null;
    prevOptions = null;
  };
  var updateTarget = React__namespace.useCallback(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
    } else {
      unbind();
      targetRef.current = null;
    }
  }, [target, when]);
  React__namespace.useEffect(function() {
    updateTarget();
  }, [updateTarget]);
  React__namespace.useEffect(function() {
    var listenerChanged = "".concat(prevListener) !== "".concat(listener);
    var optionsChanged = prevOptions !== options;
    var listenerExists = listenerRef.current;
    if (listenerExists && (listenerChanged || optionsChanged)) {
      unbind();
      when && bind();
    } else if (!listenerExists) {
      dispose();
    }
  }, [listener, options, when]);
  useUnmountEffect(function() {
    dispose();
  });
  return [bind, unbind];
};
var useResizeListener = function useResizeListener2(_ref) {
  var listener = _ref.listener, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  return useEventListener({
    target: "window",
    type: "resize",
    listener,
    when
  });
};
var useOverlayListener = function useOverlayListener2(_ref) {
  var target = _ref.target, overlay = _ref.overlay, _listener = _ref.listener, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when, _ref$type = _ref.type, type = _ref$type === void 0 ? "click" : _ref$type;
  var targetRef = React__namespace.useRef(null);
  var overlayRef = React__namespace.useRef(null);
  var _useEventListener = useEventListener({
    target: "window",
    type,
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "outside",
        valid: event.which !== 3 && isOutsideClicked(event)
      });
    }
  }), _useEventListener2 = _slicedToArray$9(_useEventListener, 2), bindDocumentClickListener = _useEventListener2[0], unbindDocumentClickListener = _useEventListener2[1];
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "resize",
        valid: !DomHandler.isTouchDevice()
      });
    }
  }), _useResizeListener2 = _slicedToArray$9(_useResizeListener, 2), bindWindowResizeListener = _useResizeListener2[0], unbindWindowResizeListener = _useResizeListener2[1];
  var _useEventListener3 = useEventListener({
    target: "window",
    type: "orientationchange",
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "orientationchange",
        valid: true
      });
    }
  }), _useEventListener4 = _slicedToArray$9(_useEventListener3, 2), bindWindowOrientationChangeListener = _useEventListener4[0], unbindWindowOrientationChangeListener = _useEventListener4[1];
  var _useOverlayScrollList = useOverlayScrollListener({
    target,
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "scroll",
        valid: true
      });
    }
  }), _useOverlayScrollList2 = _slicedToArray$9(_useOverlayScrollList, 2), bindOverlayScrollListener = _useOverlayScrollList2[0], unbindOverlayScrollListener = _useOverlayScrollList2[1];
  var isOutsideClicked = function isOutsideClicked2(event) {
    return targetRef.current && !(targetRef.current.isSameNode(event.target) || targetRef.current.contains(event.target) || overlayRef.current && overlayRef.current.contains(event.target));
  };
  var bind = function bind2() {
    bindDocumentClickListener();
    bindWindowResizeListener();
    bindWindowOrientationChangeListener();
    bindOverlayScrollListener();
  };
  var unbind = function unbind2() {
    unbindDocumentClickListener();
    unbindWindowResizeListener();
    unbindWindowOrientationChangeListener();
    unbindOverlayScrollListener();
  };
  React__namespace.useEffect(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
      overlayRef.current = DomHandler.getTargetElement(overlay);
    } else {
      unbind();
      targetRef.current = overlayRef.current = null;
    }
  }, [target, overlay, when]);
  useUnmountEffect(function() {
    unbind();
  });
  return [bind, unbind];
};
var _id = 0;
var useStyle = function useStyle2(css) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _useState = React.useState(false), _useState2 = _slicedToArray$9(_useState, 2), isLoaded = _useState2[0], setIsLoaded = _useState2[1];
  var styleRef = React.useRef(null);
  var context = React.useContext(PrimeReactContext);
  var defaultDocument = DomHandler.isClient() ? window.document : void 0;
  var _options$document = options.document, document2 = _options$document === void 0 ? defaultDocument : _options$document, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media;
  var getCurrentStyleRef = function getCurrentStyleRef2(styleContainer) {
    var existingStyle = styleContainer.querySelector('style[data-primereact-style-id="'.concat(name, '"]'));
    if (existingStyle) {
      return existingStyle;
    }
    if (id !== void 0) {
      var existingElement = document2.getElementById(id);
      if (existingElement) {
        return existingElement;
      }
    }
    return document2.createElement("style");
  };
  var update = function update2(newCSS) {
    isLoaded && css !== newCSS && (styleRef.current.textContent = newCSS);
  };
  var load = function load2() {
    if (!document2 || isLoaded) {
      return;
    }
    var styleContainer = (context === null || context === void 0 ? void 0 : context.styleContainer) || document2.head;
    styleRef.current = getCurrentStyleRef(styleContainer);
    if (!styleRef.current.isConnected) {
      styleRef.current.type = "text/css";
      if (id) {
        styleRef.current.id = id;
      }
      if (media) {
        styleRef.current.media = media;
      }
      DomHandler.addNonce(styleRef.current, context && context.nonce || PrimeReact2.nonce);
      styleContainer.appendChild(styleRef.current);
      if (name) {
        styleRef.current.setAttribute("data-primereact-style-id", name);
      }
    }
    styleRef.current.textContent = css;
    setIsLoaded(true);
  };
  var unload = function unload2() {
    if (!document2 || !styleRef.current) {
      return;
    }
    DomHandler.removeInlineStyle(styleRef.current);
    setIsLoaded(false);
  };
  React.useEffect(function() {
    if (!manual) {
      load();
    }
  }, [manual]);
  return {
    id,
    name,
    update,
    unload,
    load,
    isLoaded
  };
};
var useTimeout = function useTimeout2(fn) {
  var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var when = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var timeout2 = React__namespace.useRef(null);
  var savedCallback = React__namespace.useRef(null);
  var clear = React__namespace.useCallback(function() {
    return clearTimeout(timeout2.current);
  }, [timeout2.current]);
  React__namespace.useEffect(function() {
    savedCallback.current = fn;
  });
  React__namespace.useEffect(function() {
    function callback() {
      savedCallback.current();
    }
    if (when) {
      timeout2.current = setTimeout(callback, delay);
      return clear;
    } else {
      clear();
    }
  }, [delay, when]);
  useUnmountEffect(function() {
    clear();
  });
  return [clear];
};
var useUpdateEffect = function useUpdateEffect2(fn, deps) {
  var mounted = React__namespace.useRef(false);
  return React__namespace.useEffect(function() {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    return fn && fn();
  }, deps);
};
function _arrayLikeToArray$a(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$5(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$a(r);
}
function _iterableToArray$5(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$a(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$a(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$a(r, a) : void 0;
  }
}
function _nonIterableSpread$5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$5(r) {
  return _arrayWithoutHoles$5(r) || _iterableToArray$5(r) || _unsupportedIterableToArray$a(r) || _nonIterableSpread$5();
}
function _typeof$b(o) {
  "@babel/helpers - typeof";
  return _typeof$b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$b(o);
}
function toPrimitive$b(t, r) {
  if ("object" != _typeof$b(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$b(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$b(t) {
  var i = toPrimitive$b(t, "string");
  return "symbol" == _typeof$b(i) ? i : i + "";
}
function _defineProperty$b(e, r, t) {
  return (r = toPropertyKey$b(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys$c(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$c(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$c(Object(t), true).forEach(function(r2) {
      _defineProperty$b(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var baseStyle = "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n";
var buttonStyles = "\n.p-button {\n    margin: 0;\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    vertical-align: bottom;\n    text-align: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-button-label {\n    flex: 1 1 auto;\n}\n\n.p-button-icon-right {\n    order: 1;\n}\n\n.p-button:disabled {\n    cursor: default;\n}\n\n.p-button-icon-only {\n    justify-content: center;\n}\n\n.p-button-icon-only .p-button-label {\n    visibility: hidden;\n    width: 0;\n    flex: 0 0 auto;\n}\n\n.p-button-vertical {\n    flex-direction: column;\n}\n\n.p-button-icon-bottom {\n    order: 2;\n}\n\n.p-button-group .p-button {\n    margin: 0;\n}\n\n.p-button-group .p-button:not(:last-child) {\n    border-right: 0 none;\n}\n\n.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-button-group .p-button:first-of-type {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-button-group .p-button:last-of-type {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-button-group .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n\n.p-button-group-single .p-button:first-of-type {\n    border-top-right-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n}\n\n.p-button-group-single .p-button:last-of-type {\n    border-top-left-radius: var(--border-radius) !important;\n    border-bottom-left-radius: var(--border-radius) !important;\n}\n";
var inputTextStyles = "\n.p-inputtext {\n    margin: 0;\n}\n\n.p-fluid .p-inputtext {\n    width: 100%;\n}\n\n/* InputGroup */\n.p-inputgroup {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup-addon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-inputgroup .p-float-label {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-fluid .p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper,\n.p-fluid .p-inputgroup .p-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n/* Floating Label */\n.p-float-label {\n    display: block;\n    position: relative;\n}\n\n.p-float-label label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    margin-top: -0.5rem;\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n}\n\n.p-float-label textarea ~ label,\n.p-float-label .p-mention ~ label {\n    top: 1rem;\n}\n\n.p-float-label input:focus ~ label,\n.p-float-label input:-webkit-autofill ~ label,\n.p-float-label input.p-filled ~ label,\n.p-float-label textarea:focus ~ label,\n.p-float-label textarea.p-filled ~ label,\n.p-float-label .p-inputwrapper-focus ~ label,\n.p-float-label .p-inputwrapper-filled ~ label,\n.p-float-label .p-tooltip-target-wrapper ~ label {\n    top: -0.75rem;\n    font-size: 12px;\n}\n\n.p-float-label .p-placeholder,\n.p-float-label input::placeholder,\n.p-float-label .p-inputtext::placeholder {\n    opacity: 0;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-float-label .p-focus .p-placeholder,\n.p-float-label input:focus::placeholder,\n.p-float-label .p-inputtext:focus::placeholder {\n    opacity: 1;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-input-icon-left,\n.p-input-icon-right {\n    position: relative;\n    display: inline-block;\n}\n\n.p-input-icon-left > i,\n.p-input-icon-right > i,\n.p-input-icon-left > svg,\n.p-input-icon-right > svg,\n.p-input-icon-left > .p-input-prefix,\n.p-input-icon-right > .p-input-suffix {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-fluid .p-input-icon-left,\n.p-fluid .p-input-icon-right {\n    display: block;\n    width: 100%;\n}\n";
var iconStyles = "\n.p-icon {\n    display: inline-block;\n}\n\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n\nsvg.p-icon {\n    pointer-events: auto;\n}\n\nsvg.p-icon g,\n.p-disabled svg.p-icon {\n    pointer-events: none;\n}\n\n@-webkit-keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n";
var commonStyle = "\n@layer primereact {\n    .p-component, .p-component * {\n        box-sizing: border-box;\n    }\n\n    .p-hidden {\n        display: none;\n    }\n\n    .p-hidden-space {\n        visibility: hidden;\n    }\n\n    .p-reset {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        text-decoration: none;\n        font-size: 100%;\n        list-style: none;\n    }\n\n    .p-disabled, .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-component-overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-unselectable-text {\n        user-select: none;\n    }\n\n    .p-scrollbar-measure {\n        width: 100px;\n        height: 100px;\n        overflow: scroll;\n        position: absolute;\n        top: -9999px;\n    }\n\n    @-webkit-keyframes p-fadein {\n      0%   { opacity: 0; }\n      100% { opacity: 1; }\n    }\n    @keyframes p-fadein {\n      0%   { opacity: 0; }\n      100% { opacity: 1; }\n    }\n\n    .p-link {\n        text-align: left;\n        background-color: transparent;\n        margin: 0;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-link:disabled {\n        cursor: default;\n    }\n\n    /* Non react overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity .1s linear;\n    }\n\n    /* React based overlay animations */\n    .p-connected-overlay-enter {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-enter-active {\n        opacity: 1;\n        transform: scaleY(1);\n        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-enter-done {\n        transform: none;\n    }\n\n    .p-connected-overlay-exit {\n        opacity: 1;\n    }\n\n    .p-connected-overlay-exit-active {\n        opacity: 0;\n        transition: opacity .1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        max-height: 1000px;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-toggleable-content-enter-done {\n        transform: none;\n    }\n\n    .p-toggleable-content-exit {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-exit-active {\n        overflow: hidden;\n        max-height: 0;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    /* @todo Refactor */\n    .p-menu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    ".concat(buttonStyles, "\n    ").concat(inputTextStyles, "\n    ").concat(iconStyles, "\n}\n");
var ComponentBase = {
  cProps: void 0,
  cParams: void 0,
  cName: void 0,
  defaultProps: {
    pt: void 0,
    ptOptions: void 0,
    unstyled: false
  },
  context: {},
  globalCSS: void 0,
  classes: {},
  styles: "",
  extend: function extend() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var css = props.css;
    var defaultProps2 = _objectSpread$c(_objectSpread$c({}, props.defaultProps), ComponentBase.defaultProps);
    var inlineStyles2 = {};
    var getProps6 = function getProps7(props2) {
      var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      ComponentBase.context = context;
      ComponentBase.cProps = props2;
      return ObjectUtils.getMergedProps(props2, defaultProps2);
    };
    var getOtherProps6 = function getOtherProps7(props2) {
      return ObjectUtils.getDiffProps(props2, defaultProps2);
    };
    var getPTValue = function getPTValue2() {
      var _ComponentBase$contex;
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      if (obj.hasOwnProperty("pt") && obj.pt !== void 0) {
        obj = obj.pt;
      }
      var originalkey = key;
      var isNestedParam = /./g.test(originalkey) && !!params[originalkey.split(".")[0]];
      var fkey = isNestedParam ? ObjectUtils.toFlatCase(originalkey.split(".")[1]) : ObjectUtils.toFlatCase(originalkey);
      var hostName = params.hostName && ObjectUtils.toFlatCase(params.hostName);
      var componentName = hostName || params.props && params.props.__TYPE && ObjectUtils.toFlatCase(params.props.__TYPE) || "";
      var isTransition = fkey === "transition";
      var datasetPrefix = "data-pc-";
      var _getHostInstance = function getHostInstance(params2) {
        return params2 !== null && params2 !== void 0 && params2.props ? params2.hostName ? params2.props.__TYPE === params2.hostName ? params2.props : _getHostInstance(params2.parent) : params2.parent : void 0;
      };
      var getPropValue = function getPropValue2(name) {
        var _params$props, _getHostInstance2;
        return ((_params$props = params.props) === null || _params$props === void 0 ? void 0 : _params$props[name]) || ((_getHostInstance2 = _getHostInstance(params)) === null || _getHostInstance2 === void 0 ? void 0 : _getHostInstance2[name]);
      };
      ComponentBase.cParams = params;
      ComponentBase.cName = componentName;
      var _ref = getPropValue("ptOptions") || ComponentBase.context.ptOptions || {}, _ref$mergeSections = _ref.mergeSections, mergeSections = _ref$mergeSections === void 0 ? true : _ref$mergeSections, _ref$mergeProps = _ref.mergeProps, useMergeProps3 = _ref$mergeProps === void 0 ? false : _ref$mergeProps;
      var getPTClassValue = function getPTClassValue2() {
        var value = _getOptionValue.apply(void 0, arguments);
        if (Array.isArray(value)) {
          return {
            className: classNames.apply(void 0, _toConsumableArray$5(value))
          };
        }
        if (ObjectUtils.isString(value)) {
          return {
            className: value
          };
        }
        if (value !== null && value !== void 0 && value.hasOwnProperty("className") && Array.isArray(value.className)) {
          return {
            className: classNames.apply(void 0, _toConsumableArray$5(value.className))
          };
        }
        return value;
      };
      var globalPT = searchInDefaultPT ? isNestedParam ? _useGlobalPT(getPTClassValue, originalkey, params) : _useDefaultPT(getPTClassValue, originalkey, params) : void 0;
      var self2 = isNestedParam ? void 0 : _usePT(_getPT(obj, componentName), getPTClassValue, originalkey, params);
      var datasetProps = !isTransition && _objectSpread$c(_objectSpread$c({}, fkey === "root" && _defineProperty$b({}, "".concat(datasetPrefix, "name"), params.props && params.props.__parentMetadata ? ObjectUtils.toFlatCase(params.props.__TYPE) : componentName)), {}, _defineProperty$b({}, "".concat(datasetPrefix, "section"), fkey));
      return mergeSections || !mergeSections && self2 ? useMergeProps3 ? mergeProps([globalPT, self2, Object.keys(datasetProps).length ? datasetProps : {}], {
        classNameMergeFunction: (_ComponentBase$contex = ComponentBase.context.ptOptions) === null || _ComponentBase$contex === void 0 ? void 0 : _ComponentBase$contex.classNameMergeFunction
      }) : _objectSpread$c(_objectSpread$c(_objectSpread$c({}, globalPT), self2), Object.keys(datasetProps).length ? datasetProps : {}) : _objectSpread$c(_objectSpread$c({}, self2), Object.keys(datasetProps).length ? datasetProps : {});
    };
    var setMetaData = function setMetaData2() {
      var metadata = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var props2 = metadata.props, state2 = metadata.state;
      var ptm = function ptm2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return getPTValue((props2 || {}).pt, key, _objectSpread$c(_objectSpread$c({}, metadata), params));
      };
      var ptmo = function ptmo2() {
        var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return getPTValue(obj, key, params, false);
      };
      var isUnstyled = function isUnstyled2() {
        return ComponentBase.context.unstyled || PrimeReact2.unstyled || props2.unstyled;
      };
      var cx = function cx2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return !isUnstyled() ? _getOptionValue(css && css.classes, key, _objectSpread$c({
          props: props2,
          state: state2
        }, params)) : void 0;
      };
      var sx = function sx2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var when = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (when) {
          var _ComponentBase$contex2;
          var self2 = _getOptionValue(css && css.inlineStyles, key, _objectSpread$c({
            props: props2,
            state: state2
          }, params));
          var base = _getOptionValue(inlineStyles2, key, _objectSpread$c({
            props: props2,
            state: state2
          }, params));
          return mergeProps([base, self2], {
            classNameMergeFunction: (_ComponentBase$contex2 = ComponentBase.context.ptOptions) === null || _ComponentBase$contex2 === void 0 ? void 0 : _ComponentBase$contex2.classNameMergeFunction
          });
        }
        return void 0;
      };
      return {
        ptm,
        ptmo,
        sx,
        cx,
        isUnstyled
      };
    };
    return _objectSpread$c(_objectSpread$c({
      getProps: getProps6,
      getOtherProps: getOtherProps6,
      setMetaData
    }, props), {}, {
      defaultProps: defaultProps2
    });
  }
};
var _getOptionValue = function getOptionValue(obj) {
  var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var fKeys = String(ObjectUtils.toFlatCase(key)).split(".");
  var fKey = fKeys.shift();
  var matchedPTOption = ObjectUtils.isNotEmpty(obj) ? Object.keys(obj).find(function(k) {
    return ObjectUtils.toFlatCase(k) === fKey;
  }) : "";
  return fKey ? ObjectUtils.isObject(obj) ? _getOptionValue(ObjectUtils.getItemValue(obj[matchedPTOption], params), fKeys.join("."), params) : void 0 : ObjectUtils.getItemValue(obj, params);
};
var _getPT = function _getPT2(pt) {
  var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var callback = arguments.length > 2 ? arguments[2] : void 0;
  var _usept = pt === null || pt === void 0 ? void 0 : pt._usept;
  var getValue2 = function getValue3(value) {
    var _ref3;
    var checkSameKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var _value = callback ? callback(value) : value;
    var _key = ObjectUtils.toFlatCase(key);
    return (_ref3 = checkSameKey ? _key !== ComponentBase.cName ? _value === null || _value === void 0 ? void 0 : _value[_key] : void 0 : _value === null || _value === void 0 ? void 0 : _value[_key]) !== null && _ref3 !== void 0 ? _ref3 : _value;
  };
  return ObjectUtils.isNotEmpty(_usept) ? {
    _usept,
    originalValue: getValue2(pt.originalValue),
    value: getValue2(pt.value)
  } : getValue2(pt, true);
};
var _usePT = function _usePT2(pt, callback, key, params) {
  var fn = function fn2(value2) {
    return callback(value2, key, params);
  };
  if (pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept")) {
    var _ref4 = pt._usept || ComponentBase.context.ptOptions || {}, _ref4$mergeSections = _ref4.mergeSections, mergeSections = _ref4$mergeSections === void 0 ? true : _ref4$mergeSections, _ref4$mergeProps = _ref4.mergeProps, useMergeProps3 = _ref4$mergeProps === void 0 ? false : _ref4$mergeProps, classNameMergeFunction = _ref4.classNameMergeFunction;
    var originalValue = fn(pt.originalValue);
    var value = fn(pt.value);
    if (originalValue === void 0 && value === void 0) {
      return void 0;
    } else if (ObjectUtils.isString(value)) {
      return value;
    } else if (ObjectUtils.isString(originalValue)) {
      return originalValue;
    }
    return mergeSections || !mergeSections && value ? useMergeProps3 ? mergeProps([originalValue, value], {
      classNameMergeFunction
    }) : _objectSpread$c(_objectSpread$c({}, originalValue), value) : value;
  }
  return fn(pt);
};
var getGlobalPT = function getGlobalPT2() {
  return _getPT(ComponentBase.context.pt || PrimeReact2.pt, void 0, function(value) {
    return ObjectUtils.getItemValue(value, ComponentBase.cParams);
  });
};
var getDefaultPT = function getDefaultPT2() {
  return _getPT(ComponentBase.context.pt || PrimeReact2.pt, void 0, function(value) {
    return _getOptionValue(value, ComponentBase.cName, ComponentBase.cParams) || ObjectUtils.getItemValue(value, ComponentBase.cParams);
  });
};
var _useGlobalPT = function _useGlobalPT2(callback, key, params) {
  return _usePT(getGlobalPT(), callback, key, params);
};
var _useDefaultPT = function _useDefaultPT2(callback, key, params) {
  return _usePT(getDefaultPT(), callback, key, params);
};
var useHandleStyle = function useHandleStyle2(styles2) {
  var _isUnstyled = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  };
  var config2 = arguments.length > 2 ? arguments[2] : void 0;
  var name = config2.name, _config$styled = config2.styled, styled = _config$styled === void 0 ? false : _config$styled, _config$hostName = config2.hostName, hostName = _config$hostName === void 0 ? "" : _config$hostName;
  var globalCSS = _useGlobalPT(_getOptionValue, "global.css", ComponentBase.cParams);
  var componentName = ObjectUtils.toFlatCase(name);
  var _useStyle = useStyle(baseStyle, {
    name: "base",
    manual: true
  }), loadBaseStyle = _useStyle.load;
  var _useStyle2 = useStyle(commonStyle, {
    name: "common",
    manual: true
  }), loadCommonStyle = _useStyle2.load;
  var _useStyle3 = useStyle(globalCSS, {
    name: "global",
    manual: true
  }), loadGlobalStyle = _useStyle3.load;
  var _useStyle4 = useStyle(styles2, {
    name,
    manual: true
  }), loadComponentStyle = _useStyle4.load;
  var hook = function hook2(hookName) {
    if (!hostName) {
      var selfHook = _usePT(_getPT((ComponentBase.cProps || {}).pt, componentName), _getOptionValue, "hooks.".concat(hookName));
      var defaultHook = _useDefaultPT(_getOptionValue, "hooks.".concat(hookName));
      selfHook === null || selfHook === void 0 || selfHook();
      defaultHook === null || defaultHook === void 0 || defaultHook();
    }
  };
  hook("useMountEffect");
  useMountEffect(function() {
    loadBaseStyle();
    loadGlobalStyle();
    if (!_isUnstyled()) {
      loadCommonStyle();
      if (!styled) {
        loadComponentStyle();
      }
    }
  });
  useUpdateEffect(function() {
    hook("useUpdateEffect");
  });
  useUnmountEffect(function() {
    hook("useUnmountEffect");
  });
};
var classes$9 = {
  root: "p-card p-component",
  header: "p-card-header",
  title: "p-card-title",
  subTitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer",
  body: "p-card-body"
};
var styles$9 = "\n@layer primereact {\n    .p-card-header img {\n        width: 100%;\n    }\n}\n";
var CardBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Card",
    id: null,
    header: null,
    footer: null,
    title: null,
    subTitle: null,
    style: null,
    className: null,
    children: void 0
  },
  css: {
    classes: classes$9,
    styles: styles$9
  }
});
var Card = /* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = CardBase.getProps(inProps, context);
  var elementRef = React__namespace.useRef(ref);
  var _CardBase$setMetaData = CardBase.setMetaData({
    props
  }), ptm = _CardBase$setMetaData.ptm, cx = _CardBase$setMetaData.cx, isUnstyled = _CardBase$setMetaData.isUnstyled;
  useHandleStyle(CardBase.css.styles, isUnstyled, {
    name: "card"
  });
  var createHeader = function createHeader2() {
    var headerProps = mergeProps2({
      className: cx("header")
    }, ptm("header"));
    if (props.header) {
      return /* @__PURE__ */ React__namespace.createElement("div", headerProps, ObjectUtils.getJSXElement(props.header, props));
    }
    return null;
  };
  var createBody = function createBody2() {
    var titleProps = mergeProps2({
      className: cx("title")
    }, ptm("title"));
    var title = props.title && /* @__PURE__ */ React__namespace.createElement("div", titleProps, ObjectUtils.getJSXElement(props.title, props));
    var subTitleProps = mergeProps2({
      className: cx("subTitle")
    }, ptm("subTitle"));
    var subTitle = props.subTitle && /* @__PURE__ */ React__namespace.createElement("div", subTitleProps, ObjectUtils.getJSXElement(props.subTitle, props));
    var contentProps = mergeProps2({
      className: cx("content")
    }, ptm("content"));
    var children = props.children && /* @__PURE__ */ React__namespace.createElement("div", contentProps, props.children);
    var footerProps = mergeProps2({
      className: cx("footer")
    }, ptm("footer"));
    var footer2 = props.footer && /* @__PURE__ */ React__namespace.createElement("div", footerProps, ObjectUtils.getJSXElement(props.footer, props));
    var bodyProps = mergeProps2({
      className: cx("body")
    }, ptm("body"));
    return /* @__PURE__ */ React__namespace.createElement("div", bodyProps, title, subTitle, children, footer2);
  };
  React__namespace.useEffect(function() {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  var rootProps = mergeProps2({
    id: props.id,
    ref: elementRef,
    style: props.style,
    className: classNames(props.className, cx("root"))
  }, CardBase.getOtherProps(props), ptm("root"));
  var header2 = createHeader();
  var body = createBody();
  return /* @__PURE__ */ React__namespace.createElement("div", rootProps, header2, body);
});
Card.displayName = "Card";
function _arrayLikeToArray$9(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$4(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$9(r);
}
function _iterableToArray$4(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$9(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$9(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$9(r, a) : void 0;
  }
}
function _nonIterableSpread$4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$4(r) {
  return _arrayWithoutHoles$4(r) || _iterableToArray$4(r) || _unsupportedIterableToArray$9(r) || _nonIterableSpread$4();
}
var KeyFilter = {
  /* eslint-disable */
  DEFAULT_MASKS: {
    pint: /[\d]/,
    "int": /[\d\-]/,
    pnum: /[\d\.]/,
    money: /[\d\.\s,]/,
    num: /[\d\-\.]/,
    hex: /[0-9a-f]/i,
    email: /[a-z0-9_\.\-@]/i,
    alpha: /[a-z_]/i,
    alphanum: /[a-z0-9_]/i
  },
  /* eslint-enable */
  getRegex: function getRegex(keyfilter) {
    return KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;
  },
  onBeforeInput: function onBeforeInput(e, keyfilter, validateOnly) {
    if (validateOnly || !DomHandler.isAndroid()) {
      return;
    }
    this.validateKey(e, e.data, keyfilter);
  },
  onKeyPress: function onKeyPress(e, keyfilter, validateOnly) {
    if (validateOnly || DomHandler.isAndroid()) {
      return;
    }
    if (e.ctrlKey || e.altKey || e.metaKey) {
      return;
    }
    this.validateKey(e, e.key, keyfilter);
  },
  onPaste: function onPaste(e, keyfilter, validateOnly) {
    if (validateOnly) {
      return;
    }
    var regex = this.getRegex(keyfilter);
    var clipboard = e.clipboardData.getData("text");
    _toConsumableArray$4(clipboard).forEach(function(c) {
      if (!regex.test(c)) {
        e.preventDefault();
        return false;
      }
    });
  },
  validateKey: function validateKey(e, key, keyfilter) {
    if (key === null || key === void 0) {
      return;
    }
    var isPrintableKey = key.length <= 2;
    if (!isPrintableKey) {
      return;
    }
    var regex = this.getRegex(keyfilter);
    if (!regex.test(key)) {
      e.preventDefault();
    }
  },
  validate: function validate(e, keyfilter) {
    var value = e.target.value;
    var validatePattern = true;
    var regex = this.getRegex(keyfilter);
    if (value && !regex.test(value)) {
      validatePattern = false;
    }
    return validatePattern;
  }
};
function _arrayWithHoles$8(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$8(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$8(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$8(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$8(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$8(r, a) : void 0;
  }
}
function _nonIterableRest$8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$8(r, e) {
  return _arrayWithHoles$8(r) || _iterableToArrayLimit$8(r, e) || _unsupportedIterableToArray$8(r, e) || _nonIterableRest$8();
}
var PortalBase = {
  defaultProps: {
    __TYPE: "Portal",
    element: null,
    appendTo: null,
    visible: false,
    onMounted: null,
    onUnmounted: null,
    children: void 0
  },
  getProps: function getProps(props) {
    return ObjectUtils.getMergedProps(props, PortalBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return ObjectUtils.getDiffProps(props, PortalBase.defaultProps);
  }
};
var Portal = /* @__PURE__ */ React__namespace.memo(function(inProps) {
  var props = PortalBase.getProps(inProps);
  var context = React__namespace.useContext(PrimeReactContext);
  var _React$useState = React__namespace.useState(props.visible && DomHandler.isClient()), _React$useState2 = _slicedToArray$8(_React$useState, 2), mountedState = _React$useState2[0], setMountedState = _React$useState2[1];
  useMountEffect(function() {
    if (DomHandler.isClient() && !mountedState) {
      setMountedState(true);
      props.onMounted && props.onMounted();
    }
  });
  useUpdateEffect(function() {
    props.onMounted && props.onMounted();
  }, [mountedState]);
  useUnmountEffect(function() {
    props.onUnmounted && props.onUnmounted();
  });
  var element = props.element || props.children;
  if (element && mountedState) {
    var appendTo = props.appendTo || context && context.appendTo || PrimeReact2.appendTo;
    if (ObjectUtils.isFunction(appendTo)) {
      appendTo = appendTo();
    }
    if (!appendTo) {
      appendTo = document.body;
    }
    return appendTo === "self" ? element : /* @__PURE__ */ ReactDOM.createPortal(element, appendTo);
  }
  return null;
});
Portal.displayName = "Portal";
function _extends$o() {
  return _extends$o = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$o.apply(null, arguments);
}
function _typeof$a(o) {
  "@babel/helpers - typeof";
  return _typeof$a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$a(o);
}
function toPrimitive$a(t, r) {
  if ("object" != _typeof$a(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$a(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$a(t) {
  var i = toPrimitive$a(t, "string");
  return "symbol" == _typeof$a(i) ? i : i + "";
}
function _defineProperty$a(e, r, t) {
  return (r = toPropertyKey$a(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayLikeToArray$7(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$3(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$7(r);
}
function _iterableToArray$3(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$7(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$7(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$7(r, a) : void 0;
  }
}
function _nonIterableSpread$3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$3(r) {
  return _arrayWithoutHoles$3(r) || _iterableToArray$3(r) || _unsupportedIterableToArray$7(r) || _nonIterableSpread$3();
}
function _arrayWithHoles$7(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$7(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest$7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$7(r, e) {
  return _arrayWithHoles$7(r) || _iterableToArrayLimit$7(r, e) || _unsupportedIterableToArray$7(r, e) || _nonIterableRest$7();
}
var classes$8 = {
  root: function root(_ref) {
    var positionState = _ref.positionState, classNameState = _ref.classNameState;
    return classNames("p-tooltip p-component", _defineProperty$a({}, "p-tooltip-".concat(positionState), true), classNameState);
  },
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
var inlineStyles$3 = {
  arrow: function arrow(_ref2) {
    var context = _ref2.context;
    return {
      top: context.bottom ? "0" : context.right || context.left || !context.right && !context.left && !context.top && !context.bottom ? "50%" : null,
      bottom: context.top ? "0" : null,
      left: context.right || !context.right && !context.left && !context.top && !context.bottom ? "0" : context.top || context.bottom ? "50%" : null,
      right: context.left ? "0" : null
    };
  }
};
var styles$8 = "\n@layer primereact {\n    .p-tooltip {\n        position: absolute;\n        padding: .25em .5rem;\n        /* #3687: Tooltip prevent scrollbar flickering */\n        top: -9999px;\n        left: -9999px;\n    }\n    \n    .p-tooltip.p-tooltip-right,\n    .p-tooltip.p-tooltip-left {\n        padding: 0 .25rem;\n    }\n    \n    .p-tooltip.p-tooltip-top,\n    .p-tooltip.p-tooltip-bottom {\n        padding:.25em 0;\n    }\n    \n    .p-tooltip .p-tooltip-text {\n       white-space: pre-line;\n       word-break: break-word;\n    }\n    \n    .p-tooltip-arrow {\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-color: transparent;\n        border-style: solid;\n    }\n    \n    .p-tooltip-right .p-tooltip-arrow {\n        top: 50%;\n        left: 0;\n        margin-top: -.25rem;\n        border-width: .25em .25em .25em 0;\n    }\n    \n    .p-tooltip-left .p-tooltip-arrow {\n        top: 50%;\n        right: 0;\n        margin-top: -.25rem;\n        border-width: .25em 0 .25em .25rem;\n    }\n    \n    .p-tooltip.p-tooltip-top {\n        padding: .25em 0;\n    }\n    \n    .p-tooltip-top .p-tooltip-arrow {\n        bottom: 0;\n        left: 50%;\n        margin-left: -.25rem;\n        border-width: .25em .25em 0;\n    }\n    \n    .p-tooltip-bottom .p-tooltip-arrow {\n        top: 0;\n        left: 50%;\n        margin-left: -.25rem;\n        border-width: 0 .25em .25rem;\n    }\n\n    .p-tooltip-target-wrapper {\n        display: inline-flex;\n    }\n}\n";
var TooltipBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Tooltip",
    appendTo: null,
    at: null,
    autoHide: true,
    autoZIndex: true,
    baseZIndex: 0,
    className: null,
    closeOnEscape: false,
    content: null,
    disabled: false,
    event: null,
    hideDelay: 0,
    hideEvent: "mouseleave",
    id: null,
    mouseTrack: false,
    mouseTrackLeft: 5,
    mouseTrackTop: 5,
    my: null,
    onBeforeHide: null,
    onBeforeShow: null,
    onHide: null,
    onShow: null,
    position: "right",
    showDelay: 0,
    showEvent: "mouseenter",
    showOnDisabled: false,
    style: null,
    target: null,
    updateDelay: 0,
    children: void 0
  },
  css: {
    classes: classes$8,
    styles: styles$8,
    inlineStyles: inlineStyles$3
  }
});
function ownKeys$b(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$b(Object(t), true).forEach(function(r2) {
      _defineProperty$a(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Tooltip = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = TooltipBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray$7(_React$useState, 2), visibleState = _React$useState2[0], setVisibleState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(props.position || "right"), _React$useState4 = _slicedToArray$7(_React$useState3, 2), positionState = _React$useState4[0], setPositionState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(""), _React$useState6 = _slicedToArray$7(_React$useState5, 2), classNameState = _React$useState6[0], setClassNameState = _React$useState6[1];
  var _React$useState7 = React__namespace.useState(false), _React$useState8 = _slicedToArray$7(_React$useState7, 2), multipleFocusEvents = _React$useState8[0], setMultipleFocusEvents = _React$useState8[1];
  var isCloseOnEscape = visibleState && props.closeOnEscape;
  var overlayDisplayOrder = useDisplayOrder("tooltip", isCloseOnEscape);
  var metaData = {
    props,
    state: {
      visible: visibleState,
      position: positionState,
      className: classNameState
    },
    context: {
      right: positionState === "right",
      left: positionState === "left",
      top: positionState === "top",
      bottom: positionState === "bottom"
    }
  };
  var _TooltipBase$setMetaD = TooltipBase.setMetaData(metaData), ptm = _TooltipBase$setMetaD.ptm, cx = _TooltipBase$setMetaD.cx, sx = _TooltipBase$setMetaD.sx, isUnstyled = _TooltipBase$setMetaD.isUnstyled;
  useHandleStyle(TooltipBase.css.styles, isUnstyled, {
    name: "tooltip"
  });
  useGlobalOnEscapeKey({
    callback: function callback() {
      hide();
    },
    when: isCloseOnEscape,
    priority: [ESC_KEY_HANDLING_PRIORITIES.TOOLTIP, overlayDisplayOrder]
  });
  var elementRef = React__namespace.useRef(null);
  var textRef = React__namespace.useRef(null);
  var currentTargetRef = React__namespace.useRef(null);
  var containerSize = React__namespace.useRef(null);
  var allowHide = React__namespace.useRef(true);
  var timeouts = React__namespace.useRef({});
  var currentMouseEvent = React__namespace.useRef(null);
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      !DomHandler.isTouchDevice() && hide(event);
    }
  }), _useResizeListener2 = _slicedToArray$7(_useResizeListener, 2), bindWindowResizeListener = _useResizeListener2[0], unbindWindowResizeListener = _useResizeListener2[1];
  var _useOverlayScrollList = useOverlayScrollListener({
    target: currentTargetRef.current,
    listener: function listener(event) {
      hide(event);
    },
    when: visibleState
  }), _useOverlayScrollList2 = _slicedToArray$7(_useOverlayScrollList, 2), bindOverlayScrollListener = _useOverlayScrollList2[0], unbindOverlayScrollListener = _useOverlayScrollList2[1];
  var isTargetContentEmpty = function isTargetContentEmpty2(target) {
    return !(props.content || getTargetOption(target, "tooltip"));
  };
  var isContentEmpty = function isContentEmpty2(target) {
    return !(props.content || getTargetOption(target, "tooltip") || props.children);
  };
  var isMouseTrack = function isMouseTrack2(target) {
    return getTargetOption(target, "mousetrack") || props.mouseTrack;
  };
  var isDisabled = function isDisabled2(target) {
    return getTargetOption(target, "disabled") === "true" || hasTargetOption(target, "disabled") || props.disabled;
  };
  var isShowOnDisabled = function isShowOnDisabled2(target) {
    return getTargetOption(target, "showondisabled") || props.showOnDisabled;
  };
  var isAutoHide = function isAutoHide2() {
    return getTargetOption(currentTargetRef.current, "autohide") || props.autoHide;
  };
  var getTargetOption = function getTargetOption2(target, option) {
    return hasTargetOption(target, "data-pr-".concat(option)) ? target.getAttribute("data-pr-".concat(option)) : null;
  };
  var hasTargetOption = function hasTargetOption2(target, option) {
    return target && target.hasAttribute(option);
  };
  var getEvents = function getEvents2(target) {
    var showEvents = [getTargetOption(target, "showevent") || props.showEvent];
    var hideEvents = [getTargetOption(target, "hideevent") || props.hideEvent];
    if (isMouseTrack(target)) {
      showEvents = ["mousemove"];
      hideEvents = ["mouseleave"];
    } else {
      var event = getTargetOption(target, "event") || props.event;
      if (event === "focus") {
        showEvents = ["focus"];
        hideEvents = ["blur"];
      }
      if (event === "both") {
        showEvents = ["focus", "mouseenter"];
        hideEvents = multipleFocusEvents ? ["blur"] : ["mouseleave", "blur"];
      }
    }
    return {
      showEvents,
      hideEvents
    };
  };
  var getPosition = function getPosition2(target) {
    return getTargetOption(target, "position") || positionState;
  };
  var getMouseTrackPosition = function getMouseTrackPosition2(target) {
    var top = getTargetOption(target, "mousetracktop") || props.mouseTrackTop;
    var left = getTargetOption(target, "mousetrackleft") || props.mouseTrackLeft;
    return {
      top,
      left
    };
  };
  var updateText = function updateText2(target, callback) {
    if (textRef.current) {
      var content2 = getTargetOption(target, "tooltip") || props.content;
      if (content2) {
        textRef.current.innerHTML = "";
        textRef.current.appendChild(document.createTextNode(content2));
        callback();
      } else if (props.children) {
        callback();
      }
    }
  };
  var updateTooltipState = function updateTooltipState2(position) {
    updateText(currentTargetRef.current, function() {
      var _currentMouseEvent$cu = currentMouseEvent.current, x = _currentMouseEvent$cu.pageX, y = _currentMouseEvent$cu.pageY;
      if (props.autoZIndex && !ZIndexUtils.get(elementRef.current)) {
        ZIndexUtils.set("tooltip", elementRef.current, context && context.autoZIndex || PrimeReact2.autoZIndex, props.baseZIndex || context && context.zIndex.tooltip || PrimeReact2.zIndex.tooltip);
      }
      elementRef.current.style.left = "";
      elementRef.current.style.top = "";
      if (isAutoHide()) {
        elementRef.current.style.pointerEvents = "none";
      }
      var mouseTrackCheck = isMouseTrack(currentTargetRef.current) || position === "mouse";
      if (mouseTrackCheck && !containerSize.current || mouseTrackCheck) {
        containerSize.current = {
          width: DomHandler.getOuterWidth(elementRef.current),
          height: DomHandler.getOuterHeight(elementRef.current)
        };
      }
      align(currentTargetRef.current, {
        x,
        y
      }, position);
    });
  };
  var show = function show2(e) {
    if (e.type && e.type === "focus") setMultipleFocusEvents(true);
    currentTargetRef.current = e.currentTarget;
    var disabled = isDisabled(currentTargetRef.current);
    var empty = isContentEmpty(isShowOnDisabled(currentTargetRef.current) && disabled ? currentTargetRef.current.firstChild : currentTargetRef.current);
    if (empty || disabled) {
      return;
    }
    currentMouseEvent.current = e;
    if (visibleState) {
      applyDelay("updateDelay", updateTooltipState);
    } else {
      var success = sendCallback(props.onBeforeShow, {
        originalEvent: e,
        target: currentTargetRef.current
      });
      if (success) {
        applyDelay("showDelay", function() {
          setVisibleState(true);
          sendCallback(props.onShow, {
            originalEvent: e,
            target: currentTargetRef.current
          });
        });
      }
    }
  };
  var hide = function hide2(e) {
    if (e && e.type === "blur") setMultipleFocusEvents(false);
    clearTimeouts();
    if (visibleState) {
      var success = sendCallback(props.onBeforeHide, {
        originalEvent: e,
        target: currentTargetRef.current
      });
      if (success) {
        applyDelay("hideDelay", function() {
          if (!isAutoHide() && allowHide.current === false) {
            return;
          }
          ZIndexUtils.clear(elementRef.current);
          DomHandler.removeClass(elementRef.current, "p-tooltip-active");
          setVisibleState(false);
          sendCallback(props.onHide, {
            originalEvent: e,
            target: currentTargetRef.current
          });
        });
      }
    } else if (!props.onBeforeHide && !getDelay("hideDelay")) {
      setVisibleState(false);
    }
  };
  var align = function align2(target, coordinate, position) {
    var left = 0;
    var top = 0;
    var currentPosition = position || positionState;
    if ((isMouseTrack(target) || currentPosition == "mouse") && coordinate) {
      var _containerSize = {
        width: DomHandler.getOuterWidth(elementRef.current),
        height: DomHandler.getOuterHeight(elementRef.current)
      };
      left = coordinate.x;
      top = coordinate.y;
      var _getMouseTrackPositio = getMouseTrackPosition(target), mouseTrackTop = _getMouseTrackPositio.top, mouseTrackLeft = _getMouseTrackPositio.left;
      switch (currentPosition) {
        case "left":
          left = left - (_containerSize.width + mouseTrackLeft);
          top = top - (_containerSize.height / 2 - mouseTrackTop);
          break;
        case "right":
        case "mouse":
          left = left + mouseTrackLeft;
          top = top - (_containerSize.height / 2 - mouseTrackTop);
          break;
        case "top":
          left = left - (_containerSize.width / 2 - mouseTrackLeft);
          top = top - (_containerSize.height + mouseTrackTop);
          break;
        case "bottom":
          left = left - (_containerSize.width / 2 - mouseTrackLeft);
          top = top + mouseTrackTop;
          break;
      }
      if (left <= 0 || containerSize.current.width > _containerSize.width) {
        elementRef.current.style.left = "0px";
        elementRef.current.style.right = window.innerWidth - _containerSize.width - left + "px";
      } else {
        elementRef.current.style.right = "";
        elementRef.current.style.left = left + "px";
      }
      elementRef.current.style.top = top + "px";
      DomHandler.addClass(elementRef.current, "p-tooltip-active");
    } else {
      var pos = DomHandler.findCollisionPosition(currentPosition);
      var my = getTargetOption(target, "my") || props.my || pos.my;
      var at = getTargetOption(target, "at") || props.at || pos.at;
      elementRef.current.style.padding = "0px";
      DomHandler.flipfitCollision(elementRef.current, target, my, at, function(calculatedPosition) {
        var _calculatedPosition$a = calculatedPosition.at, atX = _calculatedPosition$a.x, atY = _calculatedPosition$a.y;
        var myX = calculatedPosition.my.x;
        var newPosition = props.at ? atX !== "center" && atX !== myX ? atX : atY : calculatedPosition.at["".concat(pos.axis)];
        elementRef.current.style.padding = "";
        setPositionState(newPosition);
        updateContainerPosition(newPosition);
        DomHandler.addClass(elementRef.current, "p-tooltip-active");
      });
    }
  };
  var updateContainerPosition = function updateContainerPosition2(position) {
    if (elementRef.current) {
      var style = getComputedStyle(elementRef.current);
      if (position === "left") {
        elementRef.current.style.left = parseFloat(style.left) - parseFloat(style.paddingLeft) * 2 + "px";
      } else if (position === "top") {
        elementRef.current.style.top = parseFloat(style.top) - parseFloat(style.paddingTop) * 2 + "px";
      }
    }
  };
  var _onMouseEnter = function onMouseEnter() {
    if (!isAutoHide()) {
      allowHide.current = false;
    }
  };
  var _onMouseLeave = function onMouseLeave(e) {
    if (!isAutoHide()) {
      allowHide.current = true;
      hide(e);
    }
  };
  var bindTargetEvent = function bindTargetEvent2(target) {
    if (target) {
      var _getEvents = getEvents(target), showEvents = _getEvents.showEvents, hideEvents = _getEvents.hideEvents;
      var currentTarget = getTarget(target);
      showEvents.forEach(function(event) {
        return currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.addEventListener(event, show);
      });
      hideEvents.forEach(function(event) {
        return currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.addEventListener(event, hide);
      });
    }
  };
  var unbindTargetEvent = function unbindTargetEvent2(target) {
    if (target) {
      var _getEvents2 = getEvents(target), showEvents = _getEvents2.showEvents, hideEvents = _getEvents2.hideEvents;
      var currentTarget = getTarget(target);
      showEvents.forEach(function(event) {
        return currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.removeEventListener(event, show);
      });
      hideEvents.forEach(function(event) {
        return currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.removeEventListener(event, hide);
      });
    }
  };
  var getDelay = function getDelay2(delayProp) {
    return getTargetOption(currentTargetRef.current, delayProp.toLowerCase()) || props[delayProp];
  };
  var applyDelay = function applyDelay2(delayProp, callback) {
    clearTimeouts();
    var delay = getDelay(delayProp);
    delay ? timeouts.current["".concat(delayProp)] = setTimeout(function() {
      return callback();
    }, delay) : callback();
  };
  var sendCallback = function sendCallback2(callback) {
    if (callback) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      var result = callback.apply(void 0, params);
      if (result === void 0) {
        result = true;
      }
      return result;
    }
    return true;
  };
  var clearTimeouts = function clearTimeouts2() {
    Object.values(timeouts.current).forEach(function(t) {
      return clearTimeout(t);
    });
  };
  var getTarget = function getTarget2(target) {
    if (target) {
      if (isShowOnDisabled(target)) {
        if (!target.hasWrapper) {
          var wrapper2 = document.createElement("div");
          var isInputElement = target.nodeName === "INPUT";
          if (isInputElement) {
            DomHandler.addMultipleClasses(wrapper2, "p-tooltip-target-wrapper p-inputwrapper");
          } else {
            DomHandler.addClass(wrapper2, "p-tooltip-target-wrapper");
          }
          target.parentNode.insertBefore(wrapper2, target);
          wrapper2.appendChild(target);
          target.hasWrapper = true;
          return wrapper2;
        }
        return target.parentElement;
      } else if (target.hasWrapper) {
        var _target$parentElement;
        (_target$parentElement = target.parentElement).replaceWith.apply(_target$parentElement, _toConsumableArray$3(target.parentElement.childNodes));
        delete target.hasWrapper;
      }
      return target;
    }
    return null;
  };
  var updateTargetEvents = function updateTargetEvents2(target) {
    unloadTargetEvents(target);
    loadTargetEvents(target);
  };
  var loadTargetEvents = function loadTargetEvents2(target) {
    setTargetEventOperations(target || props.target, bindTargetEvent);
  };
  var unloadTargetEvents = function unloadTargetEvents2(target) {
    setTargetEventOperations(target || props.target, unbindTargetEvent);
  };
  var setTargetEventOperations = function setTargetEventOperations2(target, operation) {
    target = ObjectUtils.getRefElement(target);
    if (target) {
      if (DomHandler.isElement(target)) {
        operation(target);
      } else {
        var setEvent = function setEvent2(target2) {
          var element2 = DomHandler.find(document, target2);
          element2.forEach(function(el) {
            operation(el);
          });
        };
        if (target instanceof Array) {
          target.forEach(function(t) {
            setEvent(t);
          });
        } else {
          setEvent(target);
        }
      }
    }
  };
  useMountEffect(function() {
    if (visibleState && currentTargetRef.current && isDisabled(currentTargetRef.current)) {
      hide();
    }
  });
  useUpdateEffect(function() {
    loadTargetEvents();
    return function() {
      unloadTargetEvents();
    };
  }, [show, hide, props.target]);
  useUpdateEffect(function() {
    if (visibleState) {
      var position = getPosition(currentTargetRef.current);
      var classname = getTargetOption(currentTargetRef.current, "classname");
      setPositionState(position);
      setClassNameState(classname);
      updateTooltipState(position);
      bindWindowResizeListener();
      bindOverlayScrollListener();
    } else {
      setPositionState(props.position || "right");
      setClassNameState("");
      currentTargetRef.current = null;
      containerSize.current = null;
      allowHide.current = true;
    }
    return function() {
      unbindWindowResizeListener();
      unbindOverlayScrollListener();
    };
  }, [visibleState]);
  useUpdateEffect(function() {
    var position = getPosition(currentTargetRef.current);
    if (visibleState && position !== "mouse") {
      applyDelay("updateDelay", function() {
        updateText(currentTargetRef.current, function() {
          align(currentTargetRef.current);
        });
      });
    }
  }, [props.content]);
  useUnmountEffect(function() {
    hide();
    ZIndexUtils.clear(elementRef.current);
  });
  React__namespace.useImperativeHandle(ref, function() {
    return {
      props,
      updateTargetEvents,
      loadTargetEvents,
      unloadTargetEvents,
      show,
      hide,
      getElement: function getElement() {
        return elementRef.current;
      },
      getTarget: function getTarget2() {
        return currentTargetRef.current;
      }
    };
  });
  var createElement = function createElement2() {
    var empty = isTargetContentEmpty(currentTargetRef.current);
    var rootProps = mergeProps2({
      id: props.id,
      className: classNames(props.className, cx("root", {
        positionState,
        classNameState
      })),
      style: props.style,
      role: "tooltip",
      "aria-hidden": visibleState,
      onMouseEnter: function onMouseEnter(e) {
        return _onMouseEnter();
      },
      onMouseLeave: function onMouseLeave(e) {
        return _onMouseLeave(e);
      }
    }, TooltipBase.getOtherProps(props), ptm("root"));
    var arrowProps = mergeProps2({
      className: cx("arrow"),
      style: sx("arrow", _objectSpread$b({}, metaData))
    }, ptm("arrow"));
    var textProps = mergeProps2({
      className: cx("text")
    }, ptm("text"));
    return /* @__PURE__ */ React__namespace.createElement("div", _extends$o({
      ref: elementRef
    }, rootProps), /* @__PURE__ */ React__namespace.createElement("div", arrowProps), /* @__PURE__ */ React__namespace.createElement("div", _extends$o({
      ref: textRef
    }, textProps), empty && props.children));
  };
  if (visibleState) {
    var element = createElement();
    return /* @__PURE__ */ React__namespace.createElement(Portal, {
      element,
      appendTo: props.appendTo,
      visible: true
    });
  }
  return null;
}));
Tooltip.displayName = "Tooltip";
function _extends$n() {
  return _extends$n = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$n.apply(null, arguments);
}
function _typeof$9(o) {
  "@babel/helpers - typeof";
  return _typeof$9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$9(o);
}
function toPrimitive$9(t, r) {
  if ("object" != _typeof$9(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$9(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$9(t) {
  var i = toPrimitive$9(t, "string");
  return "symbol" == _typeof$9(i) ? i : i + "";
}
function _defineProperty$9(e, r, t) {
  return (r = toPropertyKey$9(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var classes$7 = {
  root: function root2(_ref) {
    var props = _ref.props, isFilled = _ref.isFilled, context = _ref.context;
    return classNames("p-inputtext p-component", {
      "p-disabled": props.disabled,
      "p-filled": isFilled,
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  }
};
var InputTextBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "InputText",
    __parentMetadata: null,
    children: void 0,
    className: null,
    invalid: false,
    variant: null,
    keyfilter: null,
    onBeforeInput: null,
    onInput: null,
    onKeyDown: null,
    onPaste: null,
    tooltip: null,
    tooltipOptions: null,
    validateOnly: false,
    iconPosition: null
  },
  css: {
    classes: classes$7
  }
});
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), true).forEach(function(r2) {
      _defineProperty$9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var InputText = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = InputTextBase.getProps(inProps, context);
  var _InputTextBase$setMet = InputTextBase.setMetaData(_objectSpread$a(_objectSpread$a({
    props
  }, props.__parentMetadata), {}, {
    context: {
      disabled: props.disabled,
      iconPosition: props.iconPosition
    }
  })), ptm = _InputTextBase$setMet.ptm, cx = _InputTextBase$setMet.cx, isUnstyled = _InputTextBase$setMet.isUnstyled;
  useHandleStyle(InputTextBase.css.styles, isUnstyled, {
    name: "inputtext",
    styled: true
  });
  var elementRef = React__namespace.useRef(ref);
  var onKeyDown = function onKeyDown2(event) {
    props.onKeyDown && props.onKeyDown(event);
    if (props.keyfilter) {
      KeyFilter.onKeyPress(event, props.keyfilter, props.validateOnly);
    }
  };
  var onBeforeInput2 = function onBeforeInput3(event) {
    props.onBeforeInput && props.onBeforeInput(event);
    if (props.keyfilter) {
      KeyFilter.onBeforeInput(event, props.keyfilter, props.validateOnly);
    }
  };
  var onInput = function onInput2(event) {
    var target = event.target;
    var validatePattern = true;
    if (props.keyfilter && props.validateOnly) {
      validatePattern = KeyFilter.validate(event, props.keyfilter);
    }
    props.onInput && props.onInput(event, validatePattern);
    ObjectUtils.isNotEmpty(target.value) ? DomHandler.addClass(target, "p-filled") : DomHandler.removeClass(target, "p-filled");
  };
  var onPaste2 = function onPaste3(event) {
    props.onPaste && props.onPaste(event);
    if (props.keyfilter) {
      KeyFilter.onPaste(event, props.keyfilter, props.validateOnly);
    }
  };
  React__namespace.useEffect(function() {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  var isFilled = React__namespace.useMemo(function() {
    return ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue);
  }, [props.value, props.defaultValue]);
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  React__namespace.useEffect(function() {
    var _elementRef$current;
    if (isFilled || (_elementRef$current = elementRef.current) !== null && _elementRef$current !== void 0 && _elementRef$current.value) {
      DomHandler.addClass(elementRef.current, "p-filled");
    } else {
      DomHandler.removeClass(elementRef.current, "p-filled");
    }
  }, [props.disabled, isFilled]);
  var rootProps = mergeProps2({
    className: classNames(props.className, cx("root", {
      context,
      isFilled
    })),
    onBeforeInput: onBeforeInput2,
    onInput,
    onKeyDown,
    onPaste: onPaste2
  }, InputTextBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("input", _extends$n({
    ref: elementRef
  }, rootProps)), hasTooltip && /* @__PURE__ */ React__namespace.createElement(Tooltip, _extends$n({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
InputText.displayName = "InputText";
function _extends$m() {
  return _extends$m = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$m.apply(null, arguments);
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
var propTypes = { exports: {} };
var reactIs = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function(a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function(a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function(a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function(a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function(a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function(a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function(a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE2 = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object2) {
        if (typeof object2 === "object" && object2 !== null) {
          var $$typeof = object2.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE2:
              var type = object2.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element2 = REACT_ELEMENT_TYPE2;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal2 = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object2) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object2) {
        return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object2) {
        return typeOf(object2) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object2) {
        return typeOf(object2) === REACT_PROVIDER_TYPE;
      }
      function isElement(object2) {
        return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE2;
      }
      function isForwardRef(object2) {
        return typeOf(object2) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object2) {
        return typeOf(object2) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object2) {
        return typeOf(object2) === REACT_LAZY_TYPE;
      }
      function isMemo(object2) {
        return typeOf(object2) === REACT_MEMO_TYPE;
      }
      function isPortal(object2) {
        return typeOf(object2) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object2) {
        return typeOf(object2) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object2) {
        return typeOf(object2) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object2) {
        return typeOf(object2) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element2;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal2;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  if (process.env.NODE_ENV === "production") {
    reactIs.exports = requireReactIs_production_min();
  } else {
    reactIs.exports = requireReactIs_development();
  }
  return reactIs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty2 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty2.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}
var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has2 = /* @__PURE__ */ requireHas();
    printWarning = function(text) {
      var message2 = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message2);
      }
      try {
        throw new Error(message2);
      } catch (x) {
      }
    };
  }
  function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
    if (process.env.NODE_ENV !== "production") {
      for (var typeSpecName in typeSpecs) {
        if (has2(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning(
              "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
            );
          }
        }
      }
    }
  }
  checkPropTypes.resetWarningCache = function() {
    if (process.env.NODE_ENV !== "production") {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}
var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();
  var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
  var has2 = /* @__PURE__ */ requireHas();
  var checkPropTypes = /* @__PURE__ */ requireCheckPropTypes();
  var printWarning = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    printWarning = function(text) {
      var message2 = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message2);
      }
      try {
        throw new Error(message2);
      } catch (x) {
      }
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    var ANONYMOUS = "<<anonymous>>";
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    function is(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function PropTypeError(message2, data) {
      this.message = message2;
      this.data = data && typeof data === "object" ? data : {};
      this.stack = "";
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate2) {
      if (process.env.NODE_ENV !== "production") {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
            var cacheKey = componentName + ":" + propName;
            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning(
                "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
            }
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
          }
          return null;
        } else {
          return validate2(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate2(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          var preciseType = getPreciseType(propValue);
          return new PropTypeError(
            "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
            { expectedType }
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate2(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function createElementTypeChecker() {
      function validate2(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function createElementTypeTypeChecker() {
      function validate2(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate2(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== "production") {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
            );
          } else {
            printWarning("Invalid argument supplied to oneOf, expected an array.");
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate2(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === "symbol") {
            return String(value);
          }
          return value;
        });
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
      }
      return createChainableTypeChecker(validate2);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate2(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
        }
        for (var key in propValue) {
          if (has2(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
          );
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate2(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker2 = arrayOfTypeCheckers[i2];
          var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
      }
      return createChainableTypeChecker(validate2);
    }
    function createNodeChecker() {
      function validate2(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError(
        (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
      );
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate2(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate2(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has2(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate2);
    }
    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol2(propType, propValue) {
      if (propType === "symbol") {
        return true;
      }
      if (!propValue) {
        return false;
      }
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        return "object";
      }
      if (isSymbol2(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  if (process.env.NODE_ENV !== "production") {
    var ReactIs = requireReactIs();
    var throwOnDirectAccess = true;
    propTypes.exports = /* @__PURE__ */ requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  } else {
    propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}
var propTypesExports = /* @__PURE__ */ requirePropTypes();
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
const config = {
  disabled: false
};
var timeoutsShape = process.env.NODE_ENV !== "production" ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== "production" ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;
const TransitionGroupContext = React.createContext(null);
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler2) {
    this.setNextCallback(handler2);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === "undefined" ? PropTypes.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var _addClass = function addClass$1(node, classes2) {
  return node && classes2 && classes2.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass = function removeClass2(node, classes2) {
  return node && classes2 && classes2.split(" ").forEach(function(c) {
    return removeClass$1(node, c);
  });
};
var CSSTransition$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass2(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node) forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass(node, baseClassName);
    }
    if (activeClassName) {
      removeClass(node, activeClassName);
    }
    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props;
    _this$props.classNames;
    var props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);
    return /* @__PURE__ */ React.createElement(Transition, _extends$m({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(React.Component);
CSSTransition$1.defaultProps = {
  classNames: ""
};
CSSTransition$1.propTypes = process.env.NODE_ENV !== "production" ? _extends$m({}, Transition.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && React.isValidElement(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children) React.Children.map(children, function(c) {
    return c;
  }).forEach(function(child) {
    result[child.key] = mapper(child);
  });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return React.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!React.isValidElement(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = React.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
      children[key] = React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state2) {
        var children = _extends$m({}, state2.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(React.Component);
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;
function _typeof$8(o) {
  "@babel/helpers - typeof";
  return _typeof$8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$8(o);
}
function toPrimitive$8(t, r) {
  if ("object" != _typeof$8(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$8(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$8(t) {
  var i = toPrimitive$8(t, "string");
  return "symbol" == _typeof$8(i) ? i : i + "";
}
function _defineProperty$8(e, r, t) {
  return (r = toPropertyKey$8(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var CSSTransitionBase = {
  defaultProps: {
    __TYPE: "CSSTransition",
    children: void 0
  },
  getProps: function getProps2(props) {
    return ObjectUtils.getMergedProps(props, CSSTransitionBase.defaultProps);
  },
  getOtherProps: function getOtherProps2(props) {
    return ObjectUtils.getDiffProps(props, CSSTransitionBase.defaultProps);
  }
};
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), true).forEach(function(r2) {
      _defineProperty$8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var CSSTransition = /* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var props = CSSTransitionBase.getProps(inProps);
  var context = React__namespace.useContext(PrimeReactContext);
  var disabled = props.disabled || props.options && props.options.disabled || context && !context.cssTransition || !PrimeReact2.cssTransition;
  var onEnter = function onEnter2(node, isAppearing) {
    props.onEnter && props.onEnter(node, isAppearing);
    props.options && props.options.onEnter && props.options.onEnter(node, isAppearing);
  };
  var onEntering = function onEntering2(node, isAppearing) {
    props.onEntering && props.onEntering(node, isAppearing);
    props.options && props.options.onEntering && props.options.onEntering(node, isAppearing);
  };
  var onEntered = function onEntered2(node, isAppearing) {
    props.onEntered && props.onEntered(node, isAppearing);
    props.options && props.options.onEntered && props.options.onEntered(node, isAppearing);
  };
  var onExit = function onExit2(node) {
    props.onExit && props.onExit(node);
    props.options && props.options.onExit && props.options.onExit(node);
  };
  var onExiting = function onExiting2(node) {
    props.onExiting && props.onExiting(node);
    props.options && props.options.onExiting && props.options.onExiting(node);
  };
  var onExited = function onExited2(node) {
    props.onExited && props.onExited(node);
    props.options && props.options.onExited && props.options.onExited(node);
  };
  useUpdateEffect(function() {
    if (disabled) {
      var node = ObjectUtils.getRefElement(props.nodeRef);
      if (props["in"]) {
        onEnter(node, true);
        onEntering(node, true);
        onEntered(node, true);
      } else {
        onExit(node);
        onExiting(node);
        onExited(node);
      }
    }
  }, [props["in"]]);
  if (disabled) {
    return props["in"] ? props.children : null;
  }
  var immutableProps = {
    nodeRef: props.nodeRef,
    "in": props["in"],
    appear: props.appear,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  };
  var mutableProps = {
    classNames: props.classNames,
    timeout: props.timeout,
    unmountOnExit: props.unmountOnExit
  };
  var mergedProps = _objectSpread$9(_objectSpread$9(_objectSpread$9({}, mutableProps), props.options || {}), immutableProps);
  return /* @__PURE__ */ React__namespace.createElement(CSSTransition$1, mergedProps, props.children);
});
CSSTransition.displayName = "CSSTransition";
var IconBase = {
  defaultProps: {
    __TYPE: "IconBase",
    className: null,
    label: null,
    spin: false
  },
  getProps: function getProps3(props) {
    return ObjectUtils.getMergedProps(props, IconBase.defaultProps);
  },
  getOtherProps: function getOtherProps3(props) {
    return ObjectUtils.getDiffProps(props, IconBase.defaultProps);
  },
  getPTI: function getPTI(props) {
    var isLabelEmpty = ObjectUtils.isEmpty(props.label);
    var otherProps = IconBase.getOtherProps(props);
    var ptiProps = {
      className: classNames("p-icon", {
        "p-icon-spin": props.spin
      }, props.className),
      role: !isLabelEmpty ? "img" : void 0,
      "aria-label": !isLabelEmpty ? props.label : void 0,
      "aria-hidden": props.label ? isLabelEmpty : void 0
    };
    return ObjectUtils.getMergedProps(otherProps, ptiProps);
  }
};
function _extends$l() {
  return _extends$l = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$l.apply(null, arguments);
}
var EyeIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$l({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
    fill: "currentColor"
  }));
}));
EyeIcon.displayName = "EyeIcon";
function _extends$k() {
  return _extends$k = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$k.apply(null, arguments);
}
var EyeSlashIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$k({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
    fill: "currentColor"
  }));
}));
EyeSlashIcon.displayName = "EyeSlashIcon";
var OverlayService = EventBus();
function _extends$j() {
  return _extends$j = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$j.apply(null, arguments);
}
function _typeof$7(o) {
  "@babel/helpers - typeof";
  return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$7(o);
}
function toPrimitive$7(t, r) {
  if ("object" != _typeof$7(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$7(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$7(t) {
  var i = toPrimitive$7(t, "string");
  return "symbol" == _typeof$7(i) ? i : i + "";
}
function _defineProperty$7(e, r, t) {
  return (r = toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayWithHoles$6(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$6(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$6(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$6(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$6(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$6(r, a) : void 0;
  }
}
function _nonIterableRest$6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$6(r, e) {
  return _arrayWithHoles$6(r) || _iterableToArrayLimit$6(r, e) || _unsupportedIterableToArray$6(r, e) || _nonIterableRest$6();
}
var classes$2$1 = {
  root: function root3(_ref) {
    var props = _ref.props;
    return classNames("p-icon-field", {
      "p-icon-field-right": props.iconPosition === "right",
      "p-icon-field-left": props.iconPosition === "left"
    });
  }
};
var IconFieldBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "IconField",
    __parentMetadata: null,
    children: void 0,
    className: null,
    iconPosition: "right"
  },
  css: {
    classes: classes$2$1
  }
});
function ownKeys$2$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2$2(Object(t), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var IconField = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var elementRef = React.useRef(ref);
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = IconFieldBase.getProps(inProps, context);
  var _IconFieldBase$setMet = IconFieldBase.setMetaData(_objectSpread$2$2(_objectSpread$2$2({
    props
  }, props.__parentMetadata), {}, {
    context: {
      iconPosition: props.iconPosition
    }
  })), ptm = _IconFieldBase$setMet.ptm, cx = _IconFieldBase$setMet.cx;
  var rootProps = mergeProps2({
    className: classNames(props.className, cx("root", {
      iconPosition: props.iconPosition
    }))
  }, IconFieldBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement("div", _extends$j({}, rootProps, {
    ref: elementRef
  }), React.Children.map(props.children, function(child, index) {
    return /* @__PURE__ */ React.cloneElement(child, {
      iconPosition: props.iconPosition
    });
  }));
}));
IconField.displayName = "IconField";
var classes$1$2 = {
  root: "p-input-icon"
};
var InputIconBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "InputIcon",
    __parentMetadata: null,
    className: null,
    iconPosition: null
  },
  css: {
    classes: classes$1$2
  }
});
function ownKeys$1$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1$4(Object(t), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var InputIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var elementRef = React.useRef(ref);
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = InputIconBase.getProps(inProps, context);
  var _InputIconBase$setMet = InputIconBase.setMetaData(_objectSpread$1$4(_objectSpread$1$4({
    props
  }, props.__parentMetadata), {}, {
    context: {
      iconPosition: props.iconPosition
    }
  })), ptm = _InputIconBase$setMet.ptm, cx = _InputIconBase$setMet.cx;
  var rootProps = mergeProps2({
    className: classNames(props.className, cx("root"))
  }, InputIconBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", _extends$j({}, rootProps, {
    ref: elementRef
  }), props.children));
}));
InputIcon.displayName = "InputIcon";
var classes$6 = {
  root: function root4(_ref) {
    var props = _ref.props, isFilled = _ref.isFilled, focusedState = _ref.focusedState;
    return classNames("p-password p-component p-inputwrapper", {
      "p-inputwrapper-filled": isFilled,
      "p-inputwrapper-focus": focusedState,
      "p-input-icon-right": props.toggleMask
    });
  },
  input: function input(_ref2) {
    var props = _ref2.props;
    return classNames("p-password-input", props.inputClassName);
  },
  panel: function panel(_ref3) {
    var props = _ref3.props, context = _ref3.context;
    return classNames("p-password-panel p-component", props.panelClassName, {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact2.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact2.ripple === false
    });
  },
  meter: "p-password-meter",
  meterLabel: function meterLabel(_ref4) {
    var strength = _ref4.strength;
    return classNames("p-password-strength", strength);
  },
  info: function info(_ref5) {
    var strength = _ref5.strength;
    return classNames("p-password-info", strength);
  },
  showIcon: "p-password-show-icon",
  hideIcon: "p-password-hide-icon",
  transition: "p-connected-overlay"
};
var styles$7 = "\n@layer primereact {\n    .p-password {\n        position: relative;\n        display: inline-flex;\n    }\n    \n    .p-password-panel {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    \n    .p-password .p-password-panel {\n        min-width: 100%;\n    }\n    \n    .p-password-meter {\n        height: 10px;\n    }\n    \n    .p-password-strength {\n        height: 100%;\n        width: 0%;\n        transition: width 1s ease-in-out;\n    }\n    \n    .p-fluid .p-password {\n        display: flex;\n    }\n    \n    .p-password-input::-ms-reveal,\n    .p-password-input::-ms-clear {\n        display: none;\n    }\n\n    .p-password .p-password-show-icon,\n    .p-password .p-password-hide-icon {\n        line-height: 1.5;\n        cursor: pointer;\n    }\n}\n";
var PasswordBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Password",
    id: null,
    inputId: null,
    inputRef: null,
    promptLabel: null,
    weakLabel: null,
    mediumLabel: null,
    strongLabel: null,
    mediumRegex: "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
    strongRegex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
    feedback: true,
    toggleMask: false,
    appendTo: null,
    header: null,
    content: null,
    footer: null,
    showIcon: null,
    hideIcon: null,
    icon: null,
    tooltip: null,
    tooltipOptions: null,
    style: null,
    className: null,
    inputStyle: null,
    inputClassName: null,
    invalid: false,
    variant: null,
    panelStyle: null,
    panelClassName: null,
    transitionOptions: null,
    tabIndex: null,
    value: void 0,
    onInput: null,
    onShow: null,
    onHide: null,
    children: void 0
  },
  css: {
    classes: classes$6,
    styles: styles$7
  }
});
function ownKeys$8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$8(Object(t), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Password = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = PasswordBase.getProps(inProps, context);
  var promptLabel = props.promptLabel || localeOption("passwordPrompt");
  var weakLabel = props.weakLabel || localeOption("weak");
  var mediumLabel = props.mediumLabel || localeOption("medium");
  var strongLabel = props.strongLabel || localeOption("strong");
  var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray$6(_React$useState, 2), overlayVisibleState = _React$useState2[0], setOverlayVisibleState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(null), _React$useState4 = _slicedToArray$6(_React$useState3, 2), meterState = _React$useState4[0], setMeterState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(promptLabel), _React$useState6 = _slicedToArray$6(_React$useState5, 2), infoTextState = _React$useState6[0], setInfoTextState = _React$useState6[1];
  var _React$useState7 = React__namespace.useState(false), _React$useState8 = _slicedToArray$6(_React$useState7, 2), focusedState = _React$useState8[0], setFocusedState = _React$useState8[1];
  var _React$useState9 = React__namespace.useState(false), _React$useState10 = _slicedToArray$6(_React$useState9, 2), unmaskedState = _React$useState10[0], setUnmaskedState = _React$useState10[1];
  var elementRef = React__namespace.useRef(null);
  var overlayRef = React__namespace.useRef(null);
  var inputRef = React__namespace.useRef(props.inputRef);
  var mediumCheckRegExp = React__namespace.useRef(new RegExp(props.mediumRegex));
  var strongCheckRegExp = React__namespace.useRef(new RegExp(props.strongRegex));
  var type = unmaskedState ? "text" : "password";
  var metaData = {
    props,
    state: {
      overlayVisible: overlayVisibleState,
      meter: meterState,
      infoText: infoTextState,
      focused: focusedState,
      unmasked: unmaskedState
    }
  };
  var _PasswordBase$setMeta = PasswordBase.setMetaData(metaData), ptm = _PasswordBase$setMeta.ptm, cx = _PasswordBase$setMeta.cx, isUnstyled = _PasswordBase$setMeta.isUnstyled;
  useHandleStyle(PasswordBase.css.styles, isUnstyled, {
    name: "password"
  });
  var passwordDisplayOrder = useDisplayOrder("password", overlayVisibleState);
  useGlobalOnEscapeKey({
    callback: function callback() {
      hide();
    },
    when: overlayVisibleState && props.feedback && passwordDisplayOrder,
    priority: [ESC_KEY_HANDLING_PRIORITIES.PASSWORD, passwordDisplayOrder]
  });
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var valid = _ref.valid;
      valid && hide();
    },
    when: overlayVisibleState
  }), _useOverlayListener2 = _slicedToArray$6(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var currentValue = inputRef.current && inputRef.current.value;
  var isFilled = React__namespace.useMemo(function() {
    return ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue) || ObjectUtils.isNotEmpty(currentValue);
  }, [props.value, props.defaultValue, currentValue]);
  var updateLabels = function updateLabels2() {
    if (meterState) {
      var label = null;
      switch (meterState.strength) {
        case "weak":
          label = weakLabel;
          break;
        case "medium":
          label = mediumLabel;
          break;
        case "strong":
          label = strongLabel;
          break;
      }
      if (label && infoTextState !== label) {
        setInfoTextState(label);
      }
    } else if (infoTextState !== promptLabel) {
      setInfoTextState(promptLabel);
    }
  };
  var updateFeedback = function updateFeedback2(value) {
    if (!props.feedback) {
      return false;
    }
    var label = null;
    var meter = null;
    switch (testStrength(value)) {
      case 1:
        label = weakLabel;
        meter = {
          strength: "weak",
          width: "33.33%"
        };
        break;
      case 2:
        label = mediumLabel;
        meter = {
          strength: "medium",
          width: "66.66%"
        };
        break;
      case 3:
        label = strongLabel;
        meter = {
          strength: "strong",
          width: "100%"
        };
        break;
      default:
        label = promptLabel;
        meter = null;
        break;
    }
    setMeterState(meter);
    setInfoTextState(label);
    return true;
  };
  var onPanelClick = function onPanelClick2(event) {
    if (props.feedback) {
      OverlayService.emit("overlay-click", {
        originalEvent: event,
        target: elementRef.current
      });
    }
  };
  var toggleMask = function toggleMask2() {
    setUnmaskedState(function(prevUnmasked) {
      return !prevUnmasked;
    });
  };
  var show = function show2() {
    updateLabels();
    setOverlayVisibleState(true);
  };
  var hide = function hide2() {
    setOverlayVisibleState(false);
  };
  var alignOverlay = function alignOverlay2() {
    if (inputRef.current) {
      DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || context && context.appendTo || PrimeReact2.appendTo);
    }
  };
  var onOverlayEnter = function onOverlayEnter2() {
    ZIndexUtils.set("overlay", overlayRef.current, context && context.autoZIndex || PrimeReact2.autoZIndex, context && context.zIndex.overlay || PrimeReact2.zIndex.overlay);
    DomHandler.addStyles(overlayRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    alignOverlay();
  };
  var onOverlayEntered = function onOverlayEntered2() {
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var onFocus = function onFocus2(event) {
    setFocusedState(true);
    if (props.feedback) {
      show();
    }
    props.onFocus && props.onFocus(event);
  };
  var onBlur = function onBlur2(event) {
    setFocusedState(false);
    if (props.feedback) {
      hide();
    }
    props.onBlur && props.onBlur(event);
  };
  var onKeyup = function onKeyup2(e) {
    var keyCode = e.code;
    if (props.feedback) {
      if (!!keyCode && keyCode !== "Escape" && !overlayVisibleState) {
        show();
      }
    }
    props.onKeyUp && props.onKeyUp(e);
  };
  var onInput = function onInput2(event, validatePattern) {
    if (props.onInput) {
      props.onInput(event, validatePattern);
    }
    if (!props.onChange) {
      ObjectUtils.isNotEmpty(event.target.value) ? DomHandler.addClass(elementRef.current, "p-inputwrapper-filled") : DomHandler.removeClass(elementRef.current, "p-inputwrapper-filled");
    }
  };
  var testStrength = function testStrength2(str) {
    if (!str || str.length === 0) {
      return 0;
    }
    if (strongCheckRegExp.current.test(str)) {
      return 3;
    } else if (mediumCheckRegExp.current.test(str)) {
      return 2;
    } else if (str.length > 0) {
      return 1;
    }
    return 0;
  };
  React__namespace.useImperativeHandle(ref, function() {
    return {
      props,
      toggleMask,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  React__namespace.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  React__namespace.useEffect(function() {
    mediumCheckRegExp.current = new RegExp(props.mediumRegex);
  }, [props.mediumRegex]);
  React__namespace.useEffect(function() {
    strongCheckRegExp.current = new RegExp(props.strongRegex);
  }, [props.strongRegex]);
  React__namespace.useEffect(function() {
    if (!isFilled && DomHandler.hasClass(elementRef.current, "p-inputwrapper-filled")) {
      DomHandler.removeClass(elementRef.current, "p-inputwrapper-filled");
    }
  }, [isFilled]);
  useUpdateEffect(function() {
    updateFeedback(props.value);
  }, [props.value]);
  useMountEffect(function() {
    alignOverlay();
  });
  useUnmountEffect(function() {
    ZIndexUtils.clear(overlayRef.current);
  });
  var onToggleMaskKeyDown = function onToggleMaskKeyDown2(event) {
    if (event.key === "Enter" || event.code === "Space") {
      toggleMask();
      event.preventDefault();
    }
  };
  var createIcon = function createIcon2() {
    if (!props.toggleMask) {
      return null;
    }
    var icon3;
    var hideIconProps = mergeProps2({
      role: "switch",
      tabIndex: props.tabIndex || "0",
      className: cx("hideIcon"),
      onClick: toggleMask,
      onKeyDown: onToggleMaskKeyDown,
      "aria-label": ariaLabel("passwordHide") || "Hide Password",
      "aria-checked": "false"
    }, ptm("hideIcon"));
    var showIconProps = mergeProps2({
      role: "switch",
      tabIndex: props.tabIndex || "0",
      className: cx("showIcon"),
      onClick: toggleMask,
      onKeyDown: onToggleMaskKeyDown,
      "aria-label": ariaLabel("passwordShow") || "Show Password",
      "aria-checked": "true"
    }, ptm("showIcon"));
    if (unmaskedState) {
      icon3 = props.hideIcon || /* @__PURE__ */ React__namespace.createElement(EyeSlashIcon, hideIconProps);
    } else {
      icon3 = props.showIcon || /* @__PURE__ */ React__namespace.createElement(EyeIcon, showIconProps);
    }
    var eyeIcon = IconUtils.getJSXIcon(icon3, unmaskedState ? _objectSpread$8({}, hideIconProps) : _objectSpread$8({}, showIconProps), {
      props
    });
    var content2 = eyeIcon;
    if (props.icon) {
      var defaultIconOptions = {
        onClick: toggleMask,
        className,
        element: content2,
        props
      };
      content2 = ObjectUtils.getJSXElement(props.icon, defaultIconOptions);
    }
    return content2;
  };
  var createPanel = function createPanel2() {
    var _ref2 = meterState || {
      strength: "",
      width: "0%"
    }, strength = _ref2.strength, width = _ref2.width;
    var header2 = ObjectUtils.getJSXElement(props.header, props);
    var footer2 = ObjectUtils.getJSXElement(props.footer, props);
    var panelProps = mergeProps2({
      className: cx("panel", {
        context
      }),
      style: props.panelStyle,
      onClick: onPanelClick
    }, ptm("panel"));
    var meterProps = mergeProps2({
      className: cx("meter")
    }, ptm("meter"));
    var meterLabelProps = mergeProps2({
      className: cx("meterLabel", {
        strength
      }),
      style: {
        width
      }
    }, ptm("meterLabel"));
    var infoProps = mergeProps2({
      className: cx("info", {
        strength
      })
    }, ptm("info"));
    var content2 = props.content ? ObjectUtils.getJSXElement(props.content, props) : /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("div", meterProps, /* @__PURE__ */ React__namespace.createElement("div", meterLabelProps)), /* @__PURE__ */ React__namespace.createElement("div", infoProps, infoTextState));
    var transitionProps = mergeProps2({
      classNames: cx("transition"),
      "in": overlayVisibleState,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: onOverlayEnter,
      onEntered: onOverlayEntered,
      onExit: onOverlayExit,
      onExited: onOverlayExited
    }, ptm("transition"));
    var panel5 = /* @__PURE__ */ React__namespace.createElement(CSSTransition, _extends$j({
      nodeRef: overlayRef
    }, transitionProps), /* @__PURE__ */ React__namespace.createElement("div", _extends$j({
      ref: overlayRef
    }, panelProps), header2, content2, footer2));
    return /* @__PURE__ */ React__namespace.createElement(Portal, {
      element: panel5,
      appendTo: props.appendTo
    });
  };
  var className = classNames("p-password p-component p-inputwrapper", {
    "p-inputwrapper-filled": isFilled,
    "p-inputwrapper-focus": focusedState,
    "p-input-icon-right": props.toggleMask
  }, props.className);
  var inputProps = PasswordBase.getOtherProps(props);
  var icon2 = createIcon();
  var panel4 = createPanel();
  var rootProps = mergeProps2({
    ref: elementRef,
    id: props.id,
    className: classNames(props.className, cx("root", {
      isFilled,
      focusedState
    })),
    style: props.style
  }, ptm("root"));
  var inputTextProps = mergeProps2(_objectSpread$8(_objectSpread$8({
    ref: inputRef,
    id: props.inputId
  }, inputProps), {}, {
    className: classNames(props.inputClassName, cx("input")),
    onBlur,
    onFocus,
    onInput,
    onKeyUp: onKeyup,
    invalid: props.invalid,
    variant: props.variant,
    style: props.inputStyle,
    unstyled: props.unstyled,
    tabIndex: props.tabIndex || "0",
    tooltip: props.tooltip,
    tooltipOptions: props.tooltipOptions,
    type,
    value: props.value,
    __parentMetadata: {
      parent: metaData
    }
  }), ptm("input"));
  var input3 = /* @__PURE__ */ React__namespace.createElement(InputText, inputTextProps);
  if (icon2) {
    input3 = /* @__PURE__ */ React__namespace.createElement(IconField, {
      className: cx("iconField"),
      pt: ptm("iconField"),
      __parentMetadata: {
        parent: metaData
      }
    }, input3, /* @__PURE__ */ React__namespace.createElement(InputIcon, {
      className: cx("inputIcon"),
      pt: ptm("inputIcon"),
      __parentMetadata: {
        parent: metaData
      }
    }, icon2));
  }
  return /* @__PURE__ */ React__namespace.createElement("div", rootProps, input3, panel4);
}));
Password.displayName = "Password";
function _extends$i() {
  return _extends$i = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$i.apply(null, arguments);
}
var SpinnerIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$i({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }));
}));
SpinnerIcon.displayName = "SpinnerIcon";
function _extends$h() {
  return _extends$h = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$h.apply(null, arguments);
}
function _typeof$6(o) {
  "@babel/helpers - typeof";
  return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$6(o);
}
function toPrimitive$6(t, r) {
  if ("object" != _typeof$6(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$6(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$6(t) {
  var i = toPrimitive$6(t, "string");
  return "symbol" == _typeof$6(i) ? i : i + "";
}
function _defineProperty$6(e, r, t) {
  return (r = toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayWithHoles$5(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$5(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$5(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$5(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$5(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$5(r, a) : void 0;
  }
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$5(r, e) {
  return _arrayWithHoles$5(r) || _iterableToArrayLimit$5(r, e) || _unsupportedIterableToArray$5(r, e) || _nonIterableRest$5();
}
var styles$6 = "\n@layer primereact {\n    .p-ripple {\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-ink {\n        display: block;\n        position: absolute;\n        background: rgba(255, 255, 255, 0.5);\n        border-radius: 100%;\n        transform: scale(0);\n    }\n    \n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n    \n    .p-ripple-disabled .p-ink {\n        display: none;\n    }\n}\n\n@keyframes ripple {\n    100% {\n        opacity: 0;\n        transform: scale(2.5);\n    }\n}\n\n";
var classes$5 = {
  root: "p-ink"
};
var RippleBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles: styles$6,
    classes: classes$5
  },
  getProps: function getProps4(props) {
    return ObjectUtils.getMergedProps(props, RippleBase.defaultProps);
  },
  getOtherProps: function getOtherProps4(props) {
    return ObjectUtils.getDiffProps(props, RippleBase.defaultProps);
  }
});
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), true).forEach(function(r2) {
      _defineProperty$6(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Ripple = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray$5(_React$useState, 2), isMounted = _React$useState2[0], setMounted = _React$useState2[1];
  var inkRef = React__namespace.useRef(null);
  var targetRef = React__namespace.useRef(null);
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = RippleBase.getProps(inProps, context);
  var isRippleActive = context && context.ripple || PrimeReact2.ripple;
  var metaData = {
    props
  };
  useStyle(RippleBase.css.styles, {
    name: "ripple",
    manual: !isRippleActive
  });
  var _RippleBase$setMetaDa = RippleBase.setMetaData(_objectSpread$7({}, metaData)), ptm = _RippleBase$setMetaDa.ptm, cx = _RippleBase$setMetaDa.cx;
  var getTarget = function getTarget2() {
    return inkRef.current && inkRef.current.parentElement;
  };
  var bindEvents = function bindEvents2() {
    if (targetRef.current) {
      targetRef.current.addEventListener("pointerdown", onPointerDown);
    }
  };
  var unbindEvents = function unbindEvents2() {
    if (targetRef.current) {
      targetRef.current.removeEventListener("pointerdown", onPointerDown);
    }
  };
  var onPointerDown = function onPointerDown2(event) {
    var offset = DomHandler.getOffset(targetRef.current);
    var offsetX = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(inkRef.current) / 2;
    var offsetY = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(inkRef.current) / 2;
    activateRipple(offsetX, offsetY);
  };
  var activateRipple = function activateRipple2(offsetX, offsetY) {
    if (!inkRef.current || getComputedStyle(inkRef.current, null).display === "none") {
      return;
    }
    DomHandler.removeClass(inkRef.current, "p-ink-active");
    setDimensions();
    inkRef.current.style.top = offsetY + "px";
    inkRef.current.style.left = offsetX + "px";
    DomHandler.addClass(inkRef.current, "p-ink-active");
  };
  var onAnimationEnd = function onAnimationEnd2(event) {
    DomHandler.removeClass(event.currentTarget, "p-ink-active");
  };
  var setDimensions = function setDimensions2() {
    if (inkRef.current && !DomHandler.getHeight(inkRef.current) && !DomHandler.getWidth(inkRef.current)) {
      var d = Math.max(DomHandler.getOuterWidth(targetRef.current), DomHandler.getOuterHeight(targetRef.current));
      inkRef.current.style.height = d + "px";
      inkRef.current.style.width = d + "px";
    }
  };
  React__namespace.useImperativeHandle(ref, function() {
    return {
      props,
      getInk: function getInk() {
        return inkRef.current;
      },
      getTarget: function getTarget2() {
        return targetRef.current;
      }
    };
  });
  useMountEffect(function() {
    setMounted(true);
  });
  useUpdateEffect(function() {
    if (isMounted && inkRef.current) {
      targetRef.current = getTarget();
      setDimensions();
      bindEvents();
    }
  }, [isMounted]);
  useUpdateEffect(function() {
    if (inkRef.current && !targetRef.current) {
      targetRef.current = getTarget();
      setDimensions();
      bindEvents();
    }
  });
  useUnmountEffect(function() {
    if (inkRef.current) {
      targetRef.current = null;
      unbindEvents();
    }
  });
  if (!isRippleActive) {
    return null;
  }
  var rootProps = mergeProps2({
    "aria-hidden": true,
    className: classNames(cx("root"))
  }, RippleBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React__namespace.createElement("span", _extends$h({
    role: "presentation",
    ref: inkRef
  }, rootProps, {
    onAnimationEnd
  }));
}));
Ripple.displayName = "Ripple";
function _extends$g() {
  return _extends$g = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$g.apply(null, arguments);
}
function _typeof$5(o) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$5(o);
}
function toPrimitive$5(t, r) {
  if ("object" != _typeof$5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$5(t) {
  var i = toPrimitive$5(t, "string");
  return "symbol" == _typeof$5(i) ? i : i + "";
}
function _defineProperty$5(e, r, t) {
  return (r = toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var classes$1$1 = {
  root: function root5(_ref) {
    var props = _ref.props;
    return classNames("p-badge p-component", _defineProperty$5({
      "p-badge-no-gutter": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
      "p-badge-dot": ObjectUtils.isEmpty(props.value),
      "p-badge-lg": props.size === "large",
      "p-badge-xl": props.size === "xlarge"
    }, "p-badge-".concat(props.severity), props.severity !== null));
  }
};
var styles$5 = "\n@layer primereact {\n    .p-badge {\n        display: inline-block;\n        border-radius: 10px;\n        text-align: center;\n        padding: 0 .5rem;\n    }\n    \n    .p-overlay-badge {\n        position: relative;\n    }\n    \n    .p-overlay-badge .p-badge {\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(50%,-50%);\n        transform-origin: 100% 0;\n        margin: 0;\n    }\n    \n    .p-badge-dot {\n        width: .5rem;\n        min-width: .5rem;\n        height: .5rem;\n        border-radius: 50%;\n        padding: 0;\n    }\n    \n    .p-badge-no-gutter {\n        padding: 0;\n        border-radius: 50%;\n    }\n}\n";
var BadgeBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Badge",
    __parentMetadata: null,
    value: null,
    severity: null,
    size: null,
    style: null,
    className: null,
    children: void 0
  },
  css: {
    classes: classes$1$1,
    styles: styles$5
  }
});
function ownKeys$1$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1$3(Object(t), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Badge = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = BadgeBase.getProps(inProps, context);
  var _BadgeBase$setMetaDat = BadgeBase.setMetaData(_objectSpread$1$3({
    props
  }, props.__parentMetadata)), ptm = _BadgeBase$setMetaDat.ptm, cx = _BadgeBase$setMetaDat.cx, isUnstyled = _BadgeBase$setMetaDat.isUnstyled;
  useHandleStyle(BadgeBase.css.styles, isUnstyled, {
    name: "badge"
  });
  var elementRef = React__namespace.useRef(null);
  React__namespace.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = mergeProps2({
    ref: elementRef,
    style: props.style,
    className: classNames(props.className, cx("root"))
  }, BadgeBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React__namespace.createElement("span", rootProps, props.value);
}));
Badge.displayName = "Badge";
var classes$4 = {
  icon: function icon(_ref) {
    var props = _ref.props;
    return classNames("p-button-icon p-c", _defineProperty$5({}, "p-button-icon-".concat(props.iconPos), props.label));
  },
  loadingIcon: function loadingIcon(_ref2) {
    var props = _ref2.props, className = _ref2.className;
    return classNames(className, {
      "p-button-loading-icon": props.loading
    });
  },
  label: "p-button-label p-c",
  root: function root6(_ref3) {
    var props = _ref3.props, size = _ref3.size, disabled = _ref3.disabled;
    return classNames("p-button p-component", _defineProperty$5(_defineProperty$5(_defineProperty$5(_defineProperty$5({
      "p-button-icon-only": (props.icon || props.loading) && !props.label && !props.children,
      "p-button-vertical": (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
      "p-disabled": disabled,
      "p-button-loading": props.loading,
      "p-button-outlined": props.outlined,
      "p-button-raised": props.raised,
      "p-button-link": props.link,
      "p-button-text": props.text,
      "p-button-rounded": props.rounded,
      "p-button-loading-label-only": props.loading && !props.icon && props.label
    }, "p-button-loading-".concat(props.iconPos), props.loading && props.label), "p-button-".concat(size), size), "p-button-".concat(props.severity), props.severity), "p-button-plain", props.plain));
  }
};
var ButtonBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Button",
    __parentMetadata: null,
    badge: null,
    badgeClassName: null,
    className: null,
    children: void 0,
    disabled: false,
    icon: null,
    iconPos: "left",
    label: null,
    link: false,
    loading: false,
    loadingIcon: null,
    outlined: false,
    plain: false,
    raised: false,
    rounded: false,
    severity: null,
    size: null,
    text: false,
    tooltip: null,
    tooltipOptions: null,
    visible: true
  },
  css: {
    classes: classes$4
  }
});
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Button = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = ButtonBase.getProps(inProps, context);
  var disabled = props.disabled || props.loading;
  var metaData = _objectSpread$6(_objectSpread$6({
    props
  }, props.__parentMetadata), {}, {
    context: {
      disabled
    }
  });
  var _ButtonBase$setMetaDa = ButtonBase.setMetaData(metaData), ptm = _ButtonBase$setMetaDa.ptm, cx = _ButtonBase$setMetaDa.cx, isUnstyled = _ButtonBase$setMetaDa.isUnstyled;
  useHandleStyle(ButtonBase.css.styles, isUnstyled, {
    name: "button",
    styled: true
  });
  var elementRef = React__namespace.useRef(ref);
  React__namespace.useEffect(function() {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  if (props.visible === false) {
    return null;
  }
  var createIcon = function createIcon2() {
    var className = classNames("p-button-icon p-c", _defineProperty$5({}, "p-button-icon-".concat(props.iconPos), props.label));
    var iconsProps = mergeProps2({
      className: cx("icon")
    }, ptm("icon"));
    className = classNames(className, {
      "p-button-loading-icon": props.loading
    });
    var loadingIconProps = mergeProps2({
      className: cx("loadingIcon", {
        className
      })
    }, ptm("loadingIcon"));
    var icon3 = props.loading ? props.loadingIcon || /* @__PURE__ */ React__namespace.createElement(SpinnerIcon, _extends$g({}, loadingIconProps, {
      spin: true
    })) : props.icon;
    return IconUtils.getJSXIcon(icon3, _objectSpread$6({}, iconsProps), {
      props
    });
  };
  var createLabel = function createLabel2() {
    var labelProps = mergeProps2({
      className: cx("label")
    }, ptm("label"));
    if (props.label) {
      return /* @__PURE__ */ React__namespace.createElement("span", labelProps, props.label);
    }
    return !props.children && !props.label && /* @__PURE__ */ React__namespace.createElement("span", _extends$g({}, labelProps, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  };
  var createBadge = function createBadge2() {
    if (props.badge) {
      var badgeProps = mergeProps2({
        className: classNames(props.badgeClassName),
        value: props.badge,
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: metaData
        }
      }, ptm("badge"));
      return /* @__PURE__ */ React__namespace.createElement(Badge, badgeProps, props.badge);
    }
    return null;
  };
  var showTooltip = !disabled || props.tooltipOptions && props.tooltipOptions.showOnDisabled;
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip) && showTooltip;
  var sizeMapping = {
    large: "lg",
    small: "sm"
  };
  var size = sizeMapping[props.size];
  var icon2 = createIcon();
  var label = createLabel();
  var badge = createBadge();
  var defaultAriaLabel = props.label ? props.label + (props.badge ? " " + props.badge : "") : props["aria-label"];
  var rootProps = mergeProps2({
    ref: elementRef,
    "aria-label": defaultAriaLabel,
    "data-pc-autofocus": props.autoFocus,
    className: classNames(props.className, cx("root", {
      size,
      disabled
    })),
    disabled
  }, ButtonBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("button", rootProps, icon2, label, props.children, badge, /* @__PURE__ */ React__namespace.createElement(Ripple, null)), hasTooltip && /* @__PURE__ */ React__namespace.createElement(Tooltip, _extends$g({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
Button.displayName = "Button";
function _extends$f() {
  return _extends$f = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$f.apply(null, arguments);
}
var ChevronDownIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$f({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }));
}));
ChevronDownIcon.displayName = "ChevronDownIcon";
function _extends$e() {
  return _extends$e = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$e.apply(null, arguments);
}
var ChevronUpIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$e({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
    fill: "currentColor"
  }));
}));
ChevronUpIcon.displayName = "ChevronUpIcon";
function _extends$d() {
  return _extends$d = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$d.apply(null, arguments);
}
var TimesIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$d({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }));
}));
TimesIcon.displayName = "TimesIcon";
function _extends$c() {
  return _extends$c = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$c.apply(null, arguments);
}
var SearchIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$c({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
    fill: "currentColor"
  }));
}));
SearchIcon.displayName = "SearchIcon";
function _extends$b() {
  return _extends$b = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$b.apply(null, arguments);
}
function _typeof$4(o) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$4(o);
}
function toPrimitive$4(t, r) {
  if ("object" != _typeof$4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$4(t) {
  var i = toPrimitive$4(t, "string");
  return "symbol" == _typeof$4(i) ? i : i + "";
}
function _defineProperty$4(e, r, t) {
  return (r = toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayWithHoles$4(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$4(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$4(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$4(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$4(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$4(r, a) : void 0;
  }
}
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$4(r, e) {
  return _arrayWithHoles$4(r) || _iterableToArrayLimit$4(r, e) || _unsupportedIterableToArray$4(r, e) || _nonIterableRest$4();
}
var styles$4 = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /*contain: content;*/\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
var VirtualScrollerBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "VirtualScroller",
    __parentMetadata: null,
    id: null,
    style: null,
    className: null,
    tabIndex: 0,
    items: null,
    itemSize: 0,
    scrollHeight: null,
    scrollWidth: null,
    orientation: "vertical",
    step: 0,
    numToleratedItems: null,
    delay: 0,
    resizeDelay: 10,
    appendOnly: false,
    inline: false,
    lazy: false,
    disabled: false,
    loaderDisabled: false,
    loadingIcon: null,
    columns: null,
    loading: void 0,
    autoSize: false,
    showSpacer: true,
    showLoader: false,
    loadingTemplate: null,
    loaderIconTemplate: null,
    itemTemplate: null,
    contentTemplate: null,
    onScroll: null,
    onScrollIndexChange: null,
    onLazyLoad: null,
    children: void 0
  },
  css: {
    styles: styles$4
  }
});
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var VirtualScroller = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = VirtualScrollerBase.getProps(inProps, context);
  var prevProps = usePrevious(inProps) || {};
  var vertical = props.orientation === "vertical";
  var horizontal = props.orientation === "horizontal";
  var both = props.orientation === "both";
  var _React$useState = React__namespace.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState2 = _slicedToArray$4(_React$useState, 2), firstState = _React$useState2[0], setFirstState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState4 = _slicedToArray$4(_React$useState3, 2), lastState = _React$useState4[0], setLastState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(0), _React$useState6 = _slicedToArray$4(_React$useState5, 2), pageState = _React$useState6[0], setPageState = _React$useState6[1];
  var _React$useState7 = React__namespace.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState8 = _slicedToArray$4(_React$useState7, 2), numItemsInViewportState = _React$useState8[0], setNumItemsInViewportState = _React$useState8[1];
  var _React$useState9 = React__namespace.useState(props.numToleratedItems), _React$useState10 = _slicedToArray$4(_React$useState9, 2), numToleratedItemsState = _React$useState10[0], setNumToleratedItemsState = _React$useState10[1];
  var _React$useState11 = React__namespace.useState(props.loading || false), _React$useState12 = _slicedToArray$4(_React$useState11, 2), loadingState = _React$useState12[0], setLoadingState = _React$useState12[1];
  var _React$useState13 = React__namespace.useState([]), _React$useState14 = _slicedToArray$4(_React$useState13, 2), loaderArrState = _React$useState14[0], setLoaderArrState = _React$useState14[1];
  var _VirtualScrollerBase$ = VirtualScrollerBase.setMetaData({
    props,
    state: {
      first: firstState,
      last: lastState,
      page: pageState,
      numItemsInViewport: numItemsInViewportState,
      numToleratedItems: numToleratedItemsState,
      loading: loadingState,
      loaderArr: loaderArrState
    }
  }), ptm = _VirtualScrollerBase$.ptm;
  useStyle(VirtualScrollerBase.css.styles, {
    name: "virtualscroller"
  });
  var elementRef = React__namespace.useRef(null);
  var _contentRef = React__namespace.useRef(null);
  var _spacerRef = React__namespace.useRef(null);
  var _stickyRef = React__namespace.useRef(null);
  var lastScrollPos = React__namespace.useRef(both ? {
    top: 0,
    left: 0
  } : 0);
  var scrollTimeout = React__namespace.useRef(null);
  var resizeTimeout = React__namespace.useRef(null);
  var contentStyle = React__namespace.useRef({});
  var spacerStyle = React__namespace.useRef({});
  var defaultWidth = React__namespace.useRef(null);
  var defaultHeight = React__namespace.useRef(null);
  var defaultContentWidth = React__namespace.useRef(null);
  var defaultContentHeight = React__namespace.useRef(null);
  var isItemRangeChanged = React__namespace.useRef(false);
  var lazyLoadState = React__namespace.useRef(null);
  var viewInitialized = React__namespace.useRef(false);
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useResizeListener2 = _slicedToArray$4(_useResizeListener, 1), bindWindowResizeListener = _useResizeListener2[0];
  var _useEventListener = useEventListener({
    target: "window",
    type: "orientationchange",
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useEventListener2 = _slicedToArray$4(_useEventListener, 1), bindOrientationChangeListener = _useEventListener2[0];
  var getElementRef = function getElementRef2() {
    return elementRef;
  };
  var getPageByFirst = function getPageByFirst2(first) {
    return Math.floor((first + numToleratedItemsState * 4) / (props.step || 1));
  };
  var setContentElement = function setContentElement2(element) {
    _contentRef.current = element || _contentRef.current || DomHandler.findSingle(elementRef.current, ".p-virtualscroller-content");
  };
  var isPageChanged = function isPageChanged2(first) {
    return props.step ? pageState !== getPageByFirst(first) : true;
  };
  var scrollTo = function scrollTo2(options) {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
    elementRef.current && elementRef.current.scrollTo(options);
  };
  var scrollToIndex = function scrollToIndex2(index) {
    var behavior = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
    var _calculateNumItems = calculateNumItems(), numToleratedItems = _calculateNumItems.numToleratedItems;
    var contentPos = getContentPosition();
    var calculateFirst = function calculateFirst2() {
      var _index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var _numT = arguments.length > 1 ? arguments[1] : void 0;
      return _index <= _numT ? 0 : _index;
    };
    var calculateCoord = function calculateCoord2(_first, _size, _cpos) {
      return _first * _size + _cpos;
    };
    var scrollToItem = function scrollToItem2() {
      var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return scrollTo({
        left,
        top,
        behavior
      });
    };
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var isRangeChanged = false;
    if (both) {
      newFirst = {
        rows: calculateFirst(index[0], numToleratedItems[0]),
        cols: calculateFirst(index[1], numToleratedItems[1])
      };
      scrollToItem(calculateCoord(newFirst.cols, props.itemSize[1], contentPos.left), calculateCoord(newFirst.rows, props.itemSize[0], contentPos.top));
      isRangeChanged = firstState.rows !== newFirst.rows || firstState.cols !== newFirst.cols;
    } else {
      newFirst = calculateFirst(index, numToleratedItems);
      horizontal ? scrollToItem(calculateCoord(newFirst, props.itemSize, contentPos.left), 0) : scrollToItem(0, calculateCoord(newFirst, props.itemSize, contentPos.top));
      isRangeChanged = firstState !== newFirst;
    }
    isItemRangeChanged.current = isRangeChanged;
    setFirstState(newFirst);
  };
  var scrollInView = function scrollInView2(index, to) {
    var behavior = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    if (to) {
      var _getRenderedRange = getRenderedRange(), first = _getRenderedRange.first, viewport = _getRenderedRange.viewport;
      var scrollToItem = function scrollToItem2() {
        var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return scrollTo({
          left,
          top,
          behavior
        });
      };
      var isToStart = to === "to-start";
      var isToEnd = to === "to-end";
      if (isToStart) {
        if (both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows - 1) * props.itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollToItem((viewport.first.cols - 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else if (viewport.first - first > index) {
          var pos = (viewport.first - 1) * props.itemSize;
          horizontal ? scrollToItem(pos, 0) : scrollToItem(0, pos);
        }
      } else if (isToEnd) {
        if (both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows + 1) * props.itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollToItem((viewport.first.cols + 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else if (viewport.last - first <= index + 1) {
          var _pos2 = (viewport.first + 1) * props.itemSize;
          horizontal ? scrollToItem(_pos2, 0) : scrollToItem(0, _pos2);
        }
      }
    } else {
      scrollToIndex(index, behavior);
    }
  };
  var getRows = function getRows2() {
    return loadingState ? props.loaderDisabled ? loaderArrState : [] : loadedItems();
  };
  var getColumns = function getColumns2() {
    if (props.columns && both || horizontal) {
      return loadingState && props.loaderDisabled ? both ? loaderArrState[0] : loaderArrState : props.columns.slice(both ? firstState.cols : firstState, both ? lastState.cols : lastState);
    }
    return props.columns;
  };
  var getRenderedRange = function getRenderedRange2() {
    var calculateFirstInViewport = function calculateFirstInViewport2(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var firstInViewport = firstState;
    var lastInViewport = 0;
    if (elementRef.current) {
      var _elementRef$current = elementRef.current, scrollTop = _elementRef$current.scrollTop, scrollLeft = _elementRef$current.scrollLeft;
      if (both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, props.itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, props.itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + numItemsInViewportState.rows,
          cols: firstInViewport.cols + numItemsInViewportState.cols
        };
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, props.itemSize);
        lastInViewport = firstInViewport + numItemsInViewportState;
      }
    }
    return {
      first: firstState,
      last: lastState,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  };
  var calculateNumItems = function calculateNumItems2() {
    var contentPos = getContentPosition();
    var contentWidth = elementRef.current ? elementRef.current.offsetWidth - contentPos.left : 0;
    var contentHeight = elementRef.current ? elementRef.current.offsetHeight - contentPos.top : 0;
    var calculateNumItemsInViewport = function calculateNumItemsInViewport2(_contentSize, _itemSize) {
      return Math.ceil(_contentSize / (_itemSize || _contentSize));
    };
    var calculateNumToleratedItems = function calculateNumToleratedItems2(_numItems) {
      return Math.ceil(_numItems / 2);
    };
    var numItemsInViewport = both ? {
      rows: calculateNumItemsInViewport(contentHeight, props.itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, props.itemSize[1])
    } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, props.itemSize);
    var numToleratedItems = numToleratedItemsState || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  };
  var calculateOptions = function calculateOptions2() {
    var _calculateNumItems2 = calculateNumItems(), numItemsInViewport = _calculateNumItems2.numItemsInViewport, numToleratedItems = _calculateNumItems2.numToleratedItems;
    var calculateLast = function calculateLast2(_first, _num, _numT) {
      var _isCols = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      return getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    };
    var last = both ? {
      rows: calculateLast(firstState.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(firstState.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(firstState, numItemsInViewport, numToleratedItems);
    setNumItemsInViewportState(numItemsInViewport);
    setNumToleratedItemsState(numToleratedItems);
    setLastState(last);
    if (props.showLoader) {
      setLoaderArrState(both ? Array.from({
        length: numItemsInViewport.rows
      }).map(function() {
        return Array.from({
          length: numItemsInViewport.cols
        });
      }) : Array.from({
        length: numItemsInViewport
      }));
    }
    if (props.lazy) {
      Promise.resolve().then(function() {
        lazyLoadState.current = {
          first: props.step ? both ? {
            rows: 0,
            cols: firstState.cols
          } : 0 : firstState,
          last: Math.min(props.step ? props.step : last, (props.items || []).length)
        };
        props.onLazyLoad && props.onLazyLoad(lazyLoadState.current);
      });
    }
  };
  var calculateAutoSize = function calculateAutoSize2(loading) {
    if (props.autoSize && !loading) {
      Promise.resolve().then(function() {
        if (_contentRef.current) {
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = "auto";
          _contentRef.current.style.position = "relative";
          elementRef.current.style.contain = "none";
          var _ref = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)], width = _ref[0], height = _ref[1];
          (both || horizontal) && (elementRef.current.style.width = (width < defaultWidth.current ? width : props.scrollWidth || defaultWidth.current) + "px");
          (both || vertical) && (elementRef.current.style.height = (height < defaultHeight.current ? height : props.scrollHeight || defaultHeight.current) + "px");
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = "";
          _contentRef.current.style.position = "";
          elementRef.current.style.contain = "";
        }
      });
    }
  };
  var getLast = function getLast2() {
    var _ref2;
    var last = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var isCols = arguments.length > 1 ? arguments[1] : void 0;
    return props.items ? Math.min(isCols ? ((_ref2 = props.columns || props.items[0]) === null || _ref2 === void 0 ? void 0 : _ref2.length) || 0 : (props.items || []).length, last) : 0;
  };
  var getContentPosition = function getContentPosition2() {
    if (_contentRef.current) {
      var style = getComputedStyle(_contentRef.current);
      var left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
      var right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
      var top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
      var bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  };
  var setSize = function setSize2() {
    if (elementRef.current) {
      var parentElement = elementRef.current.parentElement;
      var width = props.scrollWidth || "".concat(elementRef.current.offsetWidth || parentElement.offsetWidth, "px");
      var height = props.scrollHeight || "".concat(elementRef.current.offsetHeight || parentElement.offsetHeight, "px");
      var setProp = function setProp2(_name, _value) {
        return elementRef.current.style[_name] = _value;
      };
      if (both || horizontal) {
        setProp("height", height);
        setProp("width", width);
      } else {
        setProp("height", height);
      }
    }
  };
  var setSpacerSize = function setSpacerSize2() {
    var items = props.items;
    if (items) {
      var contentPos = getContentPosition();
      var setProp = function setProp2(_name, _value, _size) {
        var _cpos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return spacerStyle.current = _objectSpread$5(_objectSpread$5({}, spacerStyle.current), _defineProperty$4({}, "".concat(_name), (_value || []).length * _size + _cpos + "px"));
      };
      if (both) {
        setProp("height", items, props.itemSize[0], contentPos.y);
        setProp("width", props.columns || items[1], props.itemSize[1], contentPos.x);
      } else {
        horizontal ? setProp("width", props.columns || items, props.itemSize, contentPos.x) : setProp("height", items, props.itemSize, contentPos.y);
      }
    }
  };
  var setContentPosition = function setContentPosition2(pos) {
    if (_contentRef.current && !props.appendOnly) {
      var first = pos ? pos.first : firstState;
      var calculateTranslateVal = function calculateTranslateVal2(_first, _size) {
        return _first * _size;
      };
      var setTransform = function setTransform2() {
        var _x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var _y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        _stickyRef.current && (_stickyRef.current.style.top = "-".concat(_y, "px"));
        contentStyle.current = _objectSpread$5(_objectSpread$5({}, contentStyle.current), {
          transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
        });
      };
      if (both) {
        setTransform(calculateTranslateVal(first.cols, props.itemSize[1]), calculateTranslateVal(first.rows, props.itemSize[0]));
      } else {
        var translateVal = calculateTranslateVal(first, props.itemSize);
        horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  };
  var onScrollPositionChange = function onScrollPositionChange2(event) {
    var target = event.target;
    var contentPos = getContentPosition();
    var calculateScrollPos = function calculateScrollPos2(_pos, _cpos) {
      return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    };
    var calculateCurrentIndex = function calculateCurrentIndex2(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var calculateTriggerIndex = function calculateTriggerIndex2(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    var calculateFirst = function calculateFirst2(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      if (_currentIndex <= _numT) {
        return 0;
      }
      return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    var calculateLast = function calculateLast2(_currentIndex, _first, _last, _num, _numT, _isCols) {
      var lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue = lastValue + (_numT + 1);
      }
      return getLast(lastValue, _isCols);
    };
    var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var newLast = lastState;
    var isRangeChanged = false;
    var newScrollPos = lastScrollPos.current;
    if (both) {
      var isScrollDown = lastScrollPos.current.top <= scrollTop;
      var isScrollRight = lastScrollPos.current.left <= scrollLeft;
      if (!props.appendOnly || props.appendOnly && (isScrollDown || isScrollRight)) {
        var currentIndex = {
          rows: calculateCurrentIndex(scrollTop, props.itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, props.itemSize[1])
        };
        var triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], true)
        };
        isRangeChanged = newFirst.rows !== firstState.rows || newLast.rows !== lastState.rows || newFirst.cols !== firstState.cols || newLast.cols !== lastState.cols || isItemRangeChanged.current;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      var scrollPos = horizontal ? scrollLeft : scrollTop;
      var isScrollDownOrRight = lastScrollPos.current <= scrollPos;
      if (!props.appendOnly || props.appendOnly && isScrollDownOrRight) {
        var _currentIndex2 = calculateCurrentIndex(scrollPos, props.itemSize);
        var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newFirst = calculateFirst(_currentIndex2, _triggerIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newLast = calculateLast(_currentIndex2, newFirst, lastState, numItemsInViewportState, numToleratedItemsState);
        isRangeChanged = newFirst !== firstState || newLast !== lastState || isItemRangeChanged.current;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  };
  var onScrollChange = function onScrollChange2(event) {
    var _onScrollPositionChan = onScrollPositionChange(event), first = _onScrollPositionChan.first, last = _onScrollPositionChan.last, isRangeChanged = _onScrollPositionChan.isRangeChanged, scrollPos = _onScrollPositionChan.scrollPos;
    if (isRangeChanged) {
      var newState = {
        first,
        last
      };
      setContentPosition(newState);
      setFirstState(first);
      setLastState(last);
      lastScrollPos.current = scrollPos;
      props.onScrollIndexChange && props.onScrollIndexChange(newState);
      if (props.lazy && isPageChanged(first)) {
        var newLazyLoadState = {
          first: props.step ? Math.min(getPageByFirst(first) * props.step, (props.items || []).length - props.step) : first,
          last: Math.min(props.step ? (getPageByFirst(first) + 1) * props.step : last, (props.items || []).length)
        };
        var isLazyStateChanged = !lazyLoadState.current || lazyLoadState.current.first !== newLazyLoadState.first || lazyLoadState.current.last !== newLazyLoadState.last;
        isLazyStateChanged && props.onLazyLoad && props.onLazyLoad(newLazyLoadState);
        lazyLoadState.current = newLazyLoadState;
      }
    }
  };
  var _onScroll = function onScroll(event) {
    props.onScroll && props.onScroll(event);
    if (props.delay) {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (isPageChanged(firstState)) {
        if (!loadingState && props.showLoader) {
          var _onScrollPositionChan2 = onScrollPositionChange(event), isRangeChanged = _onScrollPositionChan2.isRangeChanged;
          var changed = isRangeChanged || (props.step ? isPageChanged(firstState) : false);
          changed && setLoadingState(true);
        }
        scrollTimeout.current = setTimeout(function() {
          onScrollChange(event);
          if (loadingState && props.showLoader && (!props.lazy || props.loading === void 0)) {
            setLoadingState(false);
            setPageState(getPageByFirst(firstState));
          }
        }, props.delay);
      }
    } else {
      onScrollChange(event);
    }
  };
  var onResize = function onResize2() {
    if (resizeTimeout.current) {
      clearTimeout(resizeTimeout.current);
    }
    resizeTimeout.current = setTimeout(function() {
      if (elementRef.current) {
        var _ref3 = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)], width = _ref3[0], height = _ref3[1];
        var isDiffWidth = width !== defaultWidth.current, isDiffHeight = height !== defaultHeight.current;
        var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
        if (reinit) {
          setNumToleratedItemsState(props.numToleratedItems);
          defaultWidth.current = width;
          defaultHeight.current = height;
          defaultContentWidth.current = DomHandler.getWidth(_contentRef.current);
          defaultContentHeight.current = DomHandler.getHeight(_contentRef.current);
        }
      }
    }, props.resizeDelay);
  };
  var getOptions = function getOptions2(renderedIndex) {
    var count = (props.items || []).length;
    var index = both ? firstState.rows + renderedIndex : firstState + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props
    };
  };
  var loaderOptions = function loaderOptions2(index, extOptions) {
    var count = loaderArrState.length || 0;
    return _objectSpread$5({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props
    }, extOptions);
  };
  var loadedItems = function loadedItems2() {
    var items = props.items;
    if (items && !loadingState) {
      if (both) {
        return items.slice(props.appendOnly ? 0 : firstState.rows, lastState.rows).map(function(item2) {
          return props.columns ? item2 : item2.slice(props.appendOnly ? 0 : firstState.cols, lastState.cols);
        });
      } else if (horizontal && props.columns) {
        return items;
      }
      return items.slice(props.appendOnly ? 0 : firstState, lastState);
    }
    return [];
  };
  var viewInit = function viewInit2() {
    if (elementRef.current && isVisible()) {
      setContentElement(_contentRef.current);
      init();
      bindWindowResizeListener();
      bindOrientationChangeListener();
      defaultWidth.current = DomHandler.getWidth(elementRef.current);
      defaultHeight.current = DomHandler.getHeight(elementRef.current);
      defaultContentWidth.current = DomHandler.getWidth(_contentRef.current);
      defaultContentHeight.current = DomHandler.getHeight(_contentRef.current);
    }
  };
  var init = function init2() {
    if (!props.disabled && isVisible()) {
      setSize();
      calculateOptions();
      setSpacerSize();
    }
  };
  var isVisible = function isVisible2() {
    if (DomHandler.isVisible(elementRef.current)) {
      var rect = elementRef.current.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }
    return false;
  };
  React__namespace.useEffect(function() {
    if (!viewInitialized.current && isVisible()) {
      viewInit();
      viewInitialized.current = true;
    }
  });
  useUpdateEffect(function() {
    init();
  }, [props.itemSize, props.scrollHeight, props.scrollWidth]);
  useUpdateEffect(function() {
    if (props.numToleratedItems !== numToleratedItemsState) {
      setNumToleratedItemsState(props.numToleratedItems);
    }
  }, [props.numToleratedItems]);
  useUpdateEffect(function() {
    if (props.numToleratedItems === numToleratedItemsState) {
      init();
    }
  }, [numToleratedItemsState]);
  useUpdateEffect(function() {
    var prevRowsExist = prevProps.items !== void 0 && prevProps.items !== null;
    var currentRowsExist = props.items !== void 0 && props.items !== null;
    var prevRowsLength = prevRowsExist ? prevProps.items.length : 0;
    var currentRowsLength = currentRowsExist ? props.items.length : 0;
    var valuesChanged = prevRowsLength !== currentRowsLength;
    if (both && !valuesChanged) {
      var prevColumnsLength = prevRowsExist && prevProps.items.length > 0 ? prevProps.items[0].length : 0;
      var currentColumnsLength = currentRowsExist && props.items.length > 0 ? props.items[0].length : 0;
      valuesChanged = prevColumnsLength !== currentColumnsLength;
    }
    if (!prevRowsExist || valuesChanged) {
      init();
    }
    var loading = loadingState;
    if (props.lazy && prevProps.loading !== props.loading && props.loading !== loadingState) {
      setLoadingState(props.loading);
      loading = props.loading;
    }
    calculateAutoSize(loading);
  });
  useUpdateEffect(function() {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
  }, [props.orientation]);
  React__namespace.useImperativeHandle(ref, function() {
    return {
      props,
      getElementRef,
      scrollTo,
      scrollToIndex,
      scrollInView,
      getRenderedRange
    };
  });
  var createLoaderItem = function createLoaderItem2(index) {
    var extOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var options = loaderOptions(index, extOptions);
    var content3 = ObjectUtils.getJSXElement(props.loadingTemplate, options);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, {
      key: index
    }, content3);
  };
  var createLoader = function createLoader2() {
    var iconClassName = "p-virtualscroller-loading-icon";
    var loadingIconProps = mergeProps2({
      className: iconClassName
    }, ptm("loadingIcon"));
    var icon2 = props.loadingIcon || /* @__PURE__ */ React__namespace.createElement(SpinnerIcon, _extends$b({}, loadingIconProps, {
      spin: true
    }));
    var loadingIcon2 = IconUtils.getJSXIcon(icon2, _objectSpread$5({}, loadingIconProps), {
      props
    });
    if (!props.loaderDisabled && props.showLoader && loadingState) {
      var _className = classNames("p-virtualscroller-loader", {
        "p-component-overlay": !props.loadingTemplate
      });
      var _content = loadingIcon2;
      if (props.loadingTemplate) {
        _content = loaderArrState.map(function(_, index) {
          return createLoaderItem(index, both && {
            numCols: numItemsInViewportState.cols
          });
        });
      } else if (props.loaderIconTemplate) {
        var defaultContentOptions = {
          iconClassName,
          element: _content,
          props
        };
        _content = ObjectUtils.getJSXElement(props.loaderIconTemplate, defaultContentOptions);
      }
      var loaderProps = mergeProps2({
        className: _className
      }, ptm("loader"));
      return /* @__PURE__ */ React__namespace.createElement("div", loaderProps, _content);
    }
    return null;
  };
  var createSpacer = function createSpacer2() {
    if (props.showSpacer) {
      var spacerProps = mergeProps2({
        ref: _spacerRef,
        style: spacerStyle.current,
        className: "p-virtualscroller-spacer"
      }, ptm("spacer"));
      return /* @__PURE__ */ React__namespace.createElement("div", spacerProps);
    }
    return null;
  };
  var createItem = function createItem2(item2, index) {
    var options = getOptions(index);
    var content3 = ObjectUtils.getJSXElement(props.itemTemplate, item2, options);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, {
      key: options.index
    }, content3);
  };
  var createItems = function createItems2() {
    var items = loadedItems();
    return items.map(createItem);
  };
  var createContent = function createContent2() {
    var items = createItems();
    var className2 = classNames("p-virtualscroller-content", {
      "p-virtualscroller-loading": loadingState
    });
    var contentProps = mergeProps2({
      ref: _contentRef,
      style: contentStyle.current,
      className: className2
    }, ptm("content"));
    var content3 = /* @__PURE__ */ React__namespace.createElement("div", contentProps, items);
    if (props.contentTemplate) {
      var defaultOptions = {
        style: contentStyle.current,
        className: className2,
        spacerStyle: spacerStyle.current,
        contentRef: function contentRef(el) {
          return _contentRef.current = ObjectUtils.getRefElement(el);
        },
        spacerRef: function spacerRef(el) {
          return _spacerRef.current = ObjectUtils.getRefElement(el);
        },
        stickyRef: function stickyRef(el) {
          return _stickyRef.current = ObjectUtils.getRefElement(el);
        },
        items: loadedItems(),
        getItemOptions: function getItemOptions(index) {
          return getOptions(index);
        },
        children: items,
        element: content3,
        props,
        loading: loadingState,
        getLoaderOptions: function getLoaderOptions(index, ext) {
          return loaderOptions(index, ext);
        },
        loadingTemplate: props.loadingTemplate,
        itemSize: props.itemSize,
        rows: getRows(),
        columns: getColumns(),
        vertical,
        horizontal,
        both
      };
      return ObjectUtils.getJSXElement(props.contentTemplate, defaultOptions);
    }
    return content3;
  };
  if (props.disabled) {
    var _content2 = ObjectUtils.getJSXElement(props.contentTemplate, {
      items: props.items,
      rows: props.items,
      columns: props.columns
    });
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, props.children, _content2);
  }
  var className = classNames("p-virtualscroller", {
    "p-virtualscroller-inline": props.inline,
    "p-virtualscroller-both p-both-scroll": both,
    "p-virtualscroller-horizontal p-horizontal-scroll": horizontal
  }, props.className);
  var loader = createLoader();
  var content2 = createContent();
  var spacer = createSpacer();
  var rootProps = mergeProps2({
    ref: elementRef,
    className,
    tabIndex: props.tabIndex,
    style: props.style,
    onScroll: function onScroll(e) {
      return _onScroll(e);
    }
  }, VirtualScrollerBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React__namespace.createElement("div", rootProps, content2, spacer, loader);
}));
VirtualScroller.displayName = "VirtualScroller";
function _extends$a() {
  return _extends$a = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$a.apply(null, arguments);
}
var CheckIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$a({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }));
}));
CheckIcon.displayName = "CheckIcon";
function _extends$9() {
  return _extends$9 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$9.apply(null, arguments);
}
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
function toPrimitive$3(t, r) {
  if ("object" != _typeof$3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$3(t) {
  var i = toPrimitive$3(t, "string");
  return "symbol" == _typeof$3(i) ? i : i + "";
}
function _defineProperty$3(e, r, t) {
  return (r = toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayWithHoles$3(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$3(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$1$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$1$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1$1(r, a) : void 0;
  }
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$3(r, e) {
  return _arrayWithHoles$3(r) || _iterableToArrayLimit$3(r, e) || _unsupportedIterableToArray$1$1(r, e) || _nonIterableRest$3();
}
function ownKeys$2$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2$1(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var classes$3 = {
  root: function root7(_ref) {
    var props = _ref.props, focusedState = _ref.focusedState, overlayVisibleState = _ref.overlayVisibleState, context = _ref.context;
    return classNames("p-dropdown p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-focus": focusedState,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled",
      "p-dropdown-clearable": props.showClear && !props.disabled,
      "p-inputwrapper-filled": ObjectUtils.isNotEmpty(props.value),
      "p-inputwrapper-focus": focusedState || overlayVisibleState
    });
  },
  input: function input2(_ref2) {
    var props = _ref2.props, label = _ref2.label;
    return props.editable ? "p-dropdown-label p-inputtext" : classNames("p-dropdown-label p-inputtext", {
      "p-placeholder": label === null && props.placeholder,
      "p-dropdown-label-empty": label === null && !props.placeholder
    });
  },
  trigger: "p-dropdown-trigger",
  emptyMessage: "p-dropdown-empty-message",
  itemGroup: function itemGroup(_ref3) {
    var optionGroupLabel = _ref3.optionGroupLabel;
    return classNames("p-dropdown-item-group", {
      "p-dropdown-item-empty": !optionGroupLabel || optionGroupLabel.length === 0
    });
  },
  itemGroupLabel: "p-dropdown-item-group-label",
  dropdownIcon: "p-dropdown-trigger-icon p-clickable",
  loadingIcon: "p-dropdown-trigger-icon p-clickable",
  clearIcon: "p-dropdown-clear-icon p-clickable",
  filterIcon: "p-dropdown-filter-icon",
  filterClearIcon: "p-dropdown-filter-clear-icon",
  filterContainer: function filterContainer(_ref4) {
    var clearIcon = _ref4.clearIcon;
    return classNames("p-dropdown-filter-container", {
      "p-dropdown-clearable-filter": !!clearIcon
    });
  },
  filterInput: function filterInput(_ref5) {
    var props = _ref5.props, context = _ref5.context;
    return classNames("p-dropdown-filter p-inputtext p-component", {
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  },
  list: function list(_ref6) {
    var virtualScrollerOptions = _ref6.virtualScrollerOptions;
    return virtualScrollerOptions ? "p-dropdown-items" : "p-dropdown-items";
  },
  panel: function panel2(_ref7) {
    var context = _ref7.context;
    return classNames("p-dropdown-panel p-component", {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact2.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact2.ripple === false
    });
  },
  item: function item(_ref8) {
    var selected = _ref8.selected, disabled = _ref8.disabled, label = _ref8.label, index = _ref8.index, focusedOptionIndex = _ref8.focusedOptionIndex, highlightOnSelect = _ref8.highlightOnSelect;
    return classNames("p-dropdown-item", {
      "p-highlight": selected && highlightOnSelect,
      "p-disabled": disabled,
      "p-focus": index === focusedOptionIndex,
      "p-dropdown-item-empty": !label || label.length === 0
    });
  },
  itemLabel: "p-dropdown-item-label",
  checkIcon: "p-dropdown-check-icon",
  blankIcon: "p-dropdown-blank-icon",
  wrapper: "p-dropdown-items-wrapper",
  header: "p-dropdown-header",
  footer: "p-dropdown-footer",
  transition: "p-connected-overlay"
};
var styles$3 = "\n@layer primereact {\n    .p-dropdown {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n    }\n    \n    .p-dropdown-trigger {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n    }\n    \n    .p-dropdown-label {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        flex: 1 1 auto;\n        width: 1%;\n        text-overflow: ellipsis;\n        cursor: pointer;\n    }\n    \n    .p-dropdown-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n    \n    input.p-dropdown-label  {\n        cursor: default;\n    }\n    \n    .p-dropdown .p-dropdown-panel {\n        min-width: 100%;\n    }\n    \n    .p-dropdown-panel {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    \n    .p-dropdown-items-wrapper {\n        overflow: auto;\n    }\n    \n    .p-dropdown-item {\n        cursor: pointer;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-dropdown-items {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    \n    .p-dropdown-filter {\n        width: 100%;\n    }\n    \n    .p-dropdown-filter-container {\n        position: relative;\n    }\n    \n    .p-dropdown-clear-icon,\n    .p-dropdown-filter-icon,\n    .p-dropdown-filter-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n        right: 2rem;\n    }\n    \n    .p-fluid .p-dropdown {\n        display: flex;\n    }\n    \n    .p-fluid .p-dropdown .p-dropdown-label {\n        width: 1%;\n    }\n}\n";
var inlineStyles$2 = {
  wrapper: function wrapper(_ref9) {
    var props = _ref9.props;
    return {
      maxHeight: props.scrollHeight || "auto"
    };
  },
  panel: function panel3(_ref10) {
    var props = _ref10.props;
    return _objectSpread$2$1({}, props.panelStyle);
  }
};
var DropdownBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Dropdown",
    __parentMetadata: null,
    appendTo: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    autoFocus: false,
    autoOptionFocus: false,
    checkmark: false,
    children: void 0,
    className: null,
    clearIcon: null,
    collapseIcon: null,
    dataKey: null,
    disabled: false,
    dropdownIcon: null,
    editable: false,
    emptyFilterMessage: null,
    emptyMessage: null,
    filter: false,
    filterBy: null,
    filterClearIcon: null,
    filterDelay: 300,
    filterIcon: null,
    filterInputAutoFocus: false,
    filterLocale: void 0,
    filterMatchMode: "contains",
    filterPlaceholder: null,
    filterTemplate: null,
    focusInputRef: null,
    focusOnHover: true,
    highlightOnSelect: true,
    id: null,
    inputId: null,
    inputRef: null,
    invalid: false,
    itemTemplate: null,
    loading: false,
    loadingIcon: null,
    maxLength: null,
    name: null,
    onBlur: null,
    onChange: null,
    onContextMenu: null,
    onFilter: null,
    onFocus: null,
    onHide: null,
    onMouseDown: null,
    onShow: null,
    optionDisabled: null,
    optionGroupChildren: "items",
    optionGroupLabel: null,
    optionGroupTemplate: null,
    optionLabel: null,
    options: null,
    optionValue: null,
    panelClassName: null,
    panelFooterTemplate: null,
    panelStyle: null,
    placeholder: null,
    required: false,
    resetFilterOnHide: false,
    scrollHeight: "200px",
    selectOnFocus: false,
    showClear: false,
    showFilterClear: false,
    showOnFocus: false,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    transitionOptions: null,
    useOptionAsValue: false,
    value: null,
    valueTemplate: null,
    variant: null,
    virtualScrollerOptions: null
  },
  css: {
    classes: classes$3,
    styles: styles$3,
    inlineStyles: inlineStyles$2
  }
});
var BlankIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$9({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    fillOpacity: "0"
  }));
}));
BlankIcon.displayName = "BlankIcon";
var DropdownItem = /* @__PURE__ */ React__namespace.memo(function(props) {
  var mergeProps2 = useMergeProps();
  var ptm = props.ptm, cx = props.cx, selected = props.selected, disabled = props.disabled, option = props.option, label = props.label, index = props.index, focusedOptionIndex = props.focusedOptionIndex, ariaSetSize = props.ariaSetSize, checkmark = props.checkmark, highlightOnSelect = props.highlightOnSelect, onInputKeyDown = props.onInputKeyDown;
  var getPTOptions = function getPTOptions2(key) {
    return ptm(key, {
      context: {
        selected,
        disabled,
        focused: index === focusedOptionIndex
      }
    });
  };
  var _onClick = function onClick(event, i) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        option
      });
    }
  };
  var content2 = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
  var itemProps = mergeProps2({
    id: "dropdownItem_".concat(index),
    role: "option",
    className: classNames(option.className, cx("item", {
      selected,
      disabled,
      label,
      index,
      focusedOptionIndex,
      highlightOnSelect
    })),
    style: props.style,
    tabIndex: 0,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      return onInputKeyDown(e);
    },
    onMouseMove: function onMouseMove(e) {
      return props === null || props === void 0 ? void 0 : props.onMouseMove(e, index);
    },
    "aria-setsize": ariaSetSize,
    "aria-posinset": index + 1,
    "aria-label": label,
    "aria-selected": selected,
    "data-p-highlight": selected,
    "data-p-focused": focusedOptionIndex === index,
    "data-p-disabled": disabled
  }, getPTOptions("item"));
  var itemGroupLabelProps = mergeProps2({
    className: cx("itemLabel")
  }, getPTOptions("itemLabel"));
  var iconRenderer = function iconRenderer2() {
    if (selected) {
      var checkIconProps = mergeProps2({
        className: cx("checkIcon")
      }, getPTOptions("checkIcon"));
      return /* @__PURE__ */ React__namespace.createElement(CheckIcon, checkIconProps);
    }
    var blankIconProps = mergeProps2({
      className: cx("blankIcon")
    }, getPTOptions("blankIcon"));
    return /* @__PURE__ */ React__namespace.createElement(BlankIcon, blankIconProps);
  };
  return /* @__PURE__ */ React__namespace.createElement("li", _extends$9({
    key: props.label
  }, itemProps), checkmark && iconRenderer(), /* @__PURE__ */ React__namespace.createElement("span", itemGroupLabelProps, content2), /* @__PURE__ */ React__namespace.createElement(Ripple, null));
});
DropdownItem.displayName = "DropdownItem";
function ownKeys$1$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1$2(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var DropdownPanel = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
  var mergeProps2 = useMergeProps();
  var ptm = props.ptm, cx = props.cx, sx = props.sx;
  var context = React__namespace.useContext(PrimeReactContext);
  var filterInputRef = React__namespace.useRef(null);
  var isEmptyFilter = !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
  var ariaSetSize = props.visibleOptions ? props.visibleOptions.length : 0;
  var filterOptions = {
    filter: function filter2(e) {
      return onFilterInputChange(e);
    },
    reset: function reset() {
      return props.resetFilter();
    }
  };
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread$1$2({
      hostName: props.hostName
    }, options));
  };
  var onEnter = function onEnter2() {
    props.onEnter(function() {
      if (props.virtualScrollerRef.current) {
        var selectedIndex = props.getSelectedOptionIndex();
        if (selectedIndex !== -1) {
          setTimeout(function() {
            return props.virtualScrollerRef.current.scrollToIndex(selectedIndex);
          }, 0);
        }
      }
    });
  };
  var onEntered = function onEntered2() {
    props.onEntered(function() {
      if (props.filter && props.filterInputAutoFocus) {
        DomHandler.focus(filterInputRef.current, false);
      }
    });
  };
  var onFilterInputChange = function onFilterInputChange2(event) {
    props.onFilterInputChange && props.onFilterInputChange(event);
  };
  var createFooter = function createFooter2() {
    if (props.panelFooterTemplate) {
      var content2 = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
      var footerProps = mergeProps2({
        className: cx("footer")
      }, getPTOptions("footer"));
      return /* @__PURE__ */ React__namespace.createElement("div", footerProps, content2);
    }
    return null;
  };
  var changeFocusedItemOnHover = function changeFocusedItemOnHover2(event, index) {
    if (props.focusOnHover) {
      var _props$changeFocusedO;
      props === null || props === void 0 || (_props$changeFocusedO = props.changeFocusedOptionIndex) === null || _props$changeFocusedO === void 0 || _props$changeFocusedO.call(props, event, index);
    }
  };
  var createEmptyMessage = function createEmptyMessage2(emptyMessage, isFilter) {
    var message2 = ObjectUtils.getJSXElement(emptyMessage, props) || localeOption(isFilter ? "emptyFilterMessage" : "emptyMessage");
    var emptyMessageProps = mergeProps2({
      className: cx("emptyMessage")
    }, getPTOptions("emptyMessage"));
    return /* @__PURE__ */ React__namespace.createElement("li", emptyMessageProps, message2);
  };
  var createItem = function createItem2(option, index) {
    var scrollerOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var style = {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : void 0
    };
    style = _objectSpread$1$2(_objectSpread$1$2({}, style), option.style);
    if (option.group && props.optionGroupLabel) {
      var optionGroupLabel = props.optionGroupLabel;
      var groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
      var key = index + "_" + props.getOptionGroupRenderKey(option);
      var itemGroupProps = mergeProps2({
        className: cx("itemGroup", {
          optionGroupLabel
        }),
        style,
        "data-p-highlight": props.selected
      }, getPTOptions("itemGroup"));
      var itemGroupLabelProps = mergeProps2({
        className: cx("itemGroupLabel")
      }, getPTOptions("itemGroupLabel"));
      return /* @__PURE__ */ React__namespace.createElement("li", _extends$9({
        key
      }, itemGroupProps), /* @__PURE__ */ React__namespace.createElement("span", itemGroupLabelProps, groupContent));
    }
    var optionKey = props.getOptionRenderKey(option) + "_" + index;
    var optionLabel = props.getOptionLabel(option);
    var disabled = props.isOptionDisabled(option);
    return /* @__PURE__ */ React__namespace.createElement(DropdownItem, {
      key: optionKey,
      label: optionLabel,
      index,
      focusedOptionIndex: props.focusedOptionIndex,
      option,
      ariaSetSize,
      onInputKeyDown: props.onInputKeyDown,
      style,
      template: props.itemTemplate,
      selected: props.isSelected(option),
      highlightOnSelect: props.highlightOnSelect,
      disabled,
      onClick: props.onOptionClick,
      onMouseMove: changeFocusedItemOnHover,
      ptm,
      cx,
      checkmark: props.checkmark
    });
  };
  var createItems = function createItems2() {
    if (ObjectUtils.isNotEmpty(props.visibleOptions)) {
      return props.visibleOptions.map(createItem);
    } else if (props.hasFilter) {
      return createEmptyMessage(props.emptyFilterMessage, true);
    }
    return createEmptyMessage(props.emptyMessage);
  };
  var createFilterClearIcon = function createFilterClearIcon2() {
    if (props.showFilterClear && props.filterValue) {
      var ariaLabelFilterClear = localeOption("clear");
      var clearIconProps = mergeProps2({
        className: cx("filterClearIcon"),
        "aria-label": ariaLabelFilterClear,
        onClick: function onClick() {
          return props.onFilterClearIconClick(function() {
            return DomHandler.focus(filterInputRef.current);
          });
        }
      }, getPTOptions("filterClearIcon"));
      var icon2 = props.filterClearIcon || /* @__PURE__ */ React__namespace.createElement(TimesIcon, clearIconProps);
      var filterClearIcon = IconUtils.getJSXIcon(icon2, _objectSpread$1$2({}, clearIconProps), {
        props
      });
      return filterClearIcon;
    }
    return null;
  };
  var createFilter = function createFilter2() {
    if (props.filter) {
      var clearIcon = createFilterClearIcon();
      var filterIconProps = mergeProps2({
        className: cx("filterIcon")
      }, getPTOptions("filterIcon"));
      var icon2 = props.filterIcon || /* @__PURE__ */ React__namespace.createElement(SearchIcon, filterIconProps);
      var filterIcon = IconUtils.getJSXIcon(icon2, _objectSpread$1$2({}, filterIconProps), {
        props
      });
      var filterContainerProps = mergeProps2({
        className: cx("filterContainer", {
          clearIcon
        })
      }, getPTOptions("filterContainer"));
      var filterInputProps = mergeProps2({
        ref: filterInputRef,
        type: "text",
        autoComplete: "off",
        className: cx("filterInput", {
          context
        }),
        placeholder: props.filterPlaceholder,
        onKeyDown: props.onFilterInputKeyDown,
        onChange: function onChange(e) {
          return onFilterInputChange(e);
        },
        value: props.filterValue
      }, getPTOptions("filterInput"));
      var content2 = /* @__PURE__ */ React__namespace.createElement("div", filterContainerProps, /* @__PURE__ */ React__namespace.createElement("input", filterInputProps), clearIcon, filterIcon);
      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: classNames("p-dropdown-filter-container", {
            "p-dropdown-clearable-filter": !!clearIcon
          }),
          element: content2,
          filterOptions,
          filterInputKeyDown: props.onFilterInputKeyDown,
          filterInputChange: onFilterInputChange,
          filterIconClassName: "p-dropdown-filter-icon",
          clearIcon,
          props
        };
        content2 = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }
      var headerProps = mergeProps2({
        className: cx("header")
      }, getPTOptions("header"));
      return /* @__PURE__ */ React__namespace.createElement("div", headerProps, content2);
    }
    return null;
  };
  var createContent = function createContent2() {
    if (props.virtualScrollerOptions) {
      var virtualScrollerProps = _objectSpread$1$2(_objectSpread$1$2({}, props.virtualScrollerOptions), {
        style: _objectSpread$1$2(_objectSpread$1$2({}, props.virtualScrollerOptions.style), {
          height: props.scrollHeight
        }),
        className: classNames("p-dropdown-items-wrapper", props.virtualScrollerOptions.className),
        items: props.visibleOptions,
        autoSize: true,
        onLazyLoad: function onLazyLoad(event) {
          return props.virtualScrollerOptions.onLazyLoad(_objectSpread$1$2(_objectSpread$1$2({}, event), {
            filter: props.filterValue
          }));
        },
        itemTemplate: function itemTemplate(item2, options) {
          return item2 && createItem(item2, options.index, options);
        },
        contentTemplate: function contentTemplate(options) {
          var emptyMessage = props.hasFilter ? props.emptyFilterMessage : props.emptyMessage;
          var content2 = isEmptyFilter ? createEmptyMessage(emptyMessage) : options.children;
          var listProps2 = mergeProps2({
            ref: options.contentRef,
            style: options.style,
            className: classNames(options.className, cx("list", {
              virtualScrollerProps: props.virtualScrollerOptions
            })),
            role: "listbox",
            "aria-label": ariaLabel("listLabel")
          }, getPTOptions("list"));
          return /* @__PURE__ */ React__namespace.createElement("ul", listProps2, content2);
        }
      });
      return /* @__PURE__ */ React__namespace.createElement(VirtualScroller, _extends$9({
        ref: props.virtualScrollerRef
      }, virtualScrollerProps, {
        pt: ptm("virtualScroller")
      }));
    }
    var items = createItems();
    var wrapperProps = mergeProps2({
      className: cx("wrapper"),
      style: sx("wrapper")
    }, getPTOptions("wrapper"));
    var listProps = mergeProps2({
      className: cx("list"),
      role: "listbox",
      "aria-label": ariaLabel("listLabel")
    }, getPTOptions("list"));
    return /* @__PURE__ */ React__namespace.createElement("div", wrapperProps, /* @__PURE__ */ React__namespace.createElement("ul", listProps, items));
  };
  var createElement = function createElement2() {
    var filter2 = createFilter();
    var content2 = createContent();
    var footer2 = createFooter();
    var panelProps = mergeProps2({
      className: classNames(props.panelClassName, cx("panel", {
        context
      })),
      style: sx("panel"),
      onClick: props.onClick
    }, getPTOptions("panel"));
    var transitionProps = mergeProps2({
      classNames: cx("transition"),
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter,
      onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, getPTOptions("transition"));
    return /* @__PURE__ */ React__namespace.createElement(CSSTransition, _extends$9({
      nodeRef: ref
    }, transitionProps), /* @__PURE__ */ React__namespace.createElement("div", _extends$9({
      ref
    }, panelProps), props.firstFocusableElement, filter2, content2, footer2, props.lastFocusableElement));
  };
  var element = createElement();
  return /* @__PURE__ */ React__namespace.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
}));
DropdownPanel.displayName = "DropdownPanel";
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$3(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$3(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$3(r, a) : void 0;
  }
}
function _arrayLikeToArray$3(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Dropdown = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = DropdownBase.getProps(inProps, context);
  var _useDebounce = useDebounce("", props.filterDelay || 0), _useDebounce2 = _slicedToArray$3(_useDebounce, 3), filterValue = _useDebounce2[0], filterState = _useDebounce2[1], setFilterState = _useDebounce2[2];
  var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray$3(_React$useState, 2), focusedState = _React$useState2[0], setFocusedState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(-1), _React$useState4 = _slicedToArray$3(_React$useState3, 2), focusedOptionIndex = _React$useState4[0], setFocusedOptionIndex = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(false), _React$useState6 = _slicedToArray$3(_React$useState5, 2), overlayVisibleState = _React$useState6[0], setOverlayVisibleState = _React$useState6[1];
  var clickedRef = React__namespace.useRef(false);
  var elementRef = React__namespace.useRef(null);
  var overlayRef = React__namespace.useRef(null);
  var firstHiddenFocusableElementOnOverlay = React__namespace.useRef(null);
  var lastHiddenFocusableElementOnOverlay = React__namespace.useRef(null);
  var inputRef = React__namespace.useRef(props.inputRef);
  var focusInputRef = React__namespace.useRef(props.focusInputRef);
  var virtualScrollerRef = React__namespace.useRef(null);
  var searchTimeout = React__namespace.useRef(null);
  var searchValue = React__namespace.useRef(null);
  var isLazy = props.virtualScrollerOptions && props.virtualScrollerOptions.lazy;
  var hasFilter = ObjectUtils.isNotEmpty(filterState);
  var appendTo = props.appendTo || context && context.appendTo || PrimeReact2.appendTo;
  var _DropdownBase$setMeta = DropdownBase.setMetaData(_objectSpread$4(_objectSpread$4({
    props
  }, props.__parentMetadata), {}, {
    state: {
      filter: filterState,
      focused: focusedState,
      overlayVisible: overlayVisibleState
    }
  })), ptm = _DropdownBase$setMeta.ptm, cx = _DropdownBase$setMeta.cx, sx = _DropdownBase$setMeta.sx, isUnstyled = _DropdownBase$setMeta.isUnstyled;
  useHandleStyle(DropdownBase.css.styles, isUnstyled, {
    name: "dropdown"
  });
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type, valid = _ref.valid;
      if (valid) {
        type === "outside" ? !isClearClicked(event) && hide() : hide();
      }
    },
    when: overlayVisibleState
  }), _useOverlayListener2 = _slicedToArray$3(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var flatOptions = function flatOptions2(options) {
    return (options || []).reduce(function(result, option, index) {
      result.push(_objectSpread$4(_objectSpread$4({}, option), {}, {
        group: true,
        index
      }));
      var optionGroupChildren = getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach(function(o) {
        return result.push(o);
      });
      return result;
    }, []);
  };
  var getVisibleOptions = function getVisibleOptions2() {
    var options = props.optionGroupLabel ? flatOptions(props.options) : props.options;
    if (hasFilter && !isLazy) {
      var _filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
      var searchFields = props.filterBy ? props.filterBy.split(",") : [props.optionLabel || "label"];
      if (props.optionGroupLabel) {
        var filteredGroups = [];
        var _iterator = _createForOfIteratorHelper(props.options), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var optgroup = _step.value;
            var filteredSubOptions = FilterService.filter(getOptionGroupChildren(optgroup), searchFields, _filterValue, props.filterMatchMode, props.filterLocale);
            if (filteredSubOptions && filteredSubOptions.length) {
              filteredGroups.push(_objectSpread$4(_objectSpread$4({}, optgroup), _defineProperty$3({}, "".concat(props.optionGroupChildren), filteredSubOptions)));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return flatOptions(filteredGroups);
      }
      return FilterService.filter(options, searchFields, _filterValue, props.filterMatchMode, props.filterLocale);
    }
    return options;
  };
  var onFirstHiddenFocus = function onFirstHiddenFocus2(event) {
    var focusableEl = event.relatedTarget === focusInputRef.current ? DomHandler.getFirstFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : focusInputRef.current;
    DomHandler.focus(focusableEl);
  };
  var onLastHiddenFocus = function onLastHiddenFocus2(event) {
    var focusableEl = event.relatedTarget === focusInputRef.current ? DomHandler.getLastFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : focusInputRef.current;
    DomHandler.focus(focusableEl);
  };
  var isClearClicked = function isClearClicked2(event) {
    return DomHandler.isAttributeEquals(event.target, "data-pc-section", "clearicon") || DomHandler.isAttributeEquals(event.target.parentElement || event.target, "data-pc-section", "filterclearicon");
  };
  var _onClick = function onClick(event) {
    if (props.disabled || props.loading) {
      return;
    }
    props.onClick && props.onClick(event);
    if (event.defaultPrevented) {
      return;
    }
    if (isClearClicked(event) || event.target.tagName === "INPUT") {
      return;
    } else if (!overlayRef.current || !(overlayRef.current && overlayRef.current.contains(event.target))) {
      DomHandler.focus(focusInputRef.current);
      overlayVisibleState ? hide() : show();
    }
    event.preventDefault();
    clickedRef.current = true;
  };
  var onInputFocus = function onInputFocus2(event) {
    if (props.showOnFocus && !overlayVisibleState) {
      show();
    }
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };
  var onInputBlur = function onInputBlur2(event) {
    setFocusedState(false);
    if (props.onBlur) {
      setTimeout(function() {
        var currentValue = inputRef.current ? inputRef.current.value : void 0;
        props.onBlur({
          originalEvent: event.originalEvent,
          value: currentValue,
          stopPropagation: function stopPropagation() {
            event.originalEvent.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.originalEvent.preventDefault();
          },
          target: {
            name: props.name,
            id: props.id,
            value: currentValue
          }
        });
      }, 200);
    }
  };
  var onOptionSelect = function onOptionSelect2(event, option) {
    var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    selectItem({
      originalEvent: event,
      option
    });
    if (isHide) {
      hide();
      DomHandler.focus(focusInputRef.current);
    }
  };
  var onPanelClick = function onPanelClick2(event) {
    OverlayService.emit("overlay-click", {
      originalEvent: event,
      target: elementRef.current
    });
  };
  var onInputKeyDown = function onInputKeyDown2(event) {
    if (props.disabled) {
      event.preventDefault();
      return;
    }
    var code = DomHandler.isAndroid() ? event.key : event.code;
    switch (code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        onArrowLeftKey(event, props.editable);
        break;
      case "Home":
        onHomeKey(event);
        break;
      case "End":
        onEndKey(event);
        break;
      case "PageDown":
        onPageDownKey(event);
        break;
      case "PageUp":
        onPageUpKey(event);
        break;
      case "Space":
        onSpaceKey(event, props.editable);
        break;
      case "NumpadEnter":
      case "Enter":
        onEnterKey(event);
        break;
      case "Escape":
        onEscapeKey(event);
        break;
      case "Tab":
        onTabKey(event);
        break;
      case "Backspace":
        onBackspaceKey(event, props.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        var metaKey = event.metaKey || event.ctrlKey || event.altKey;
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          !overlayVisibleState && !props.editable && show();
          !props.editable && searchOptions(event, event.key);
        }
        break;
    }
    clickedRef.current = false;
  };
  var onFilterInputKeyDown = function onFilterInputKeyDown2(event) {
    switch (event.code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        onArrowLeftKey(event, true);
        break;
      case "Escape":
      case "Enter":
      case "NumpadEnter":
        onEnterKey(event);
        event.preventDefault();
        break;
    }
  };
  var hasFocusableElements = function hasFocusableElements2() {
    return DomHandler.getFocusableElements(overlayRef.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  };
  var isOptionMatched = function isOptionMatched2(option) {
    var _getOptionLabel;
    return isValidOption(option) && ((_getOptionLabel = getOptionLabel(option)) === null || _getOptionLabel === void 0 ? void 0 : _getOptionLabel.toLocaleLowerCase(props.filterLocale).startsWith(searchValue.current.toLocaleLowerCase(props.filterLocale)));
  };
  var isValidOption = function isValidOption2(option) {
    return ObjectUtils.isNotEmpty(option) && !(isOptionDisabled(option) || isOptionGroup(option));
  };
  var hasSelectedOption = function hasSelectedOption2() {
    return ObjectUtils.isNotEmpty(props.value);
  };
  var isValidSelectedOption = function isValidSelectedOption2(option) {
    return isValidOption(option) && isSelected(option);
  };
  var findSelectedOptionIndex = function findSelectedOptionIndex2() {
    return hasSelectedOption ? visibleOptions.findIndex(function(option) {
      return isValidSelectedOption(option);
    }) : -1;
  };
  var findFirstFocusedOptionIndex = function findFirstFocusedOptionIndex2() {
    var selectedIndex = findSelectedOptionIndex();
    return selectedIndex < 0 ? findFirstOptionIndex() : selectedIndex;
  };
  var searchOptions = function searchOptions2(event, _char) {
    searchValue.current = (searchValue.current || "") + _char;
    var optionIndex = -1;
    var matched = false;
    if (ObjectUtils.isNotEmpty(searchValue.current)) {
      if (focusedOptionIndex !== -1) {
        optionIndex = visibleOptions.slice(focusedOptionIndex).findIndex(function(option) {
          return isOptionMatched(option);
        });
        optionIndex = optionIndex === -1 ? visibleOptions.slice(0, focusedOptionIndex).findIndex(function(option) {
          return isOptionMatched(option);
        }) : optionIndex + focusedOptionIndex;
      } else {
        optionIndex = visibleOptions.findIndex(function(option) {
          return isOptionMatched(option);
        });
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && focusedOptionIndex === -1) {
        optionIndex = findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        changeFocusedOptionIndex(event, optionIndex);
      }
    }
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(function() {
      searchValue.current = "";
      searchTimeout.current = null;
    }, 500);
    return matched;
  };
  var findLastFocusedOptionIndex = function findLastFocusedOptionIndex2() {
    var selectedIndex = findSelectedOptionIndex();
    return selectedIndex < 0 ? findLastOptionIndex() : selectedIndex;
  };
  var findFirstOptionIndex = function findFirstOptionIndex2() {
    return visibleOptions.findIndex(function(option) {
      return isValidOption(option);
    });
  };
  var findLastOptionIndex = function findLastOptionIndex2() {
    return ObjectUtils.findLastIndex(visibleOptions, function(option) {
      return isValidOption(option);
    });
  };
  var findNextOptionIndex = function findNextOptionIndex2(index) {
    var matchedOptionIndex = index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex(function(option) {
      return isValidOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  };
  var findPrevOptionIndex = function findPrevOptionIndex2(index) {
    var matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), function(option) {
      return isValidOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  };
  var changeFocusedOptionIndex = function changeFocusedOptionIndex2(event, index) {
    if (focusedOptionIndex !== index) {
      setFocusedOptionIndex(index);
      focusOnItem(index);
      if (props.selectOnFocus) {
        onOptionSelect(event, visibleOptions[index], false);
      }
    }
  };
  var focusOnItem = function focusOnItem2(index) {
    var focusedItem = DomHandler.findSingle(overlayRef.current, 'li[id="dropdownItem_'.concat(index, '"]'));
    focusedItem && focusedItem.focus();
  };
  var onArrowDownKey = function onArrowDownKey2(event) {
    if (!overlayVisibleState) {
      show();
      props.editable && changeFocusedOptionIndex(event, findSelectedOptionIndex());
    } else {
      var optionIndex = focusedOptionIndex !== -1 ? findNextOptionIndex(focusedOptionIndex) : clickedRef.current ? findFirstOptionIndex() : findFirstFocusedOptionIndex();
      changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  };
  var onArrowUpKey = function onArrowUpKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (event.altKey && !pressedInInputText) {
      if (focusedOptionIndex !== -1) {
        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
      }
      state.overlayVisible && hide();
      event.preventDefault();
    } else {
      var optionIndex = focusedOptionIndex !== -1 ? findPrevOptionIndex(focusedOptionIndex) : clickedRef.current ? findLastOptionIndex() : findLastFocusedOptionIndex();
      changeFocusedOptionIndex(event, optionIndex);
      !overlayVisibleState && show();
      event.preventDefault();
    }
  };
  var onArrowLeftKey = function onArrowLeftKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    pressedInInputText && setFocusedOptionIndex(-1);
  };
  var onHomeKey = function onHomeKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (pressedInInputText) {
      event.currentTarget.setSelectionRange(0, 0);
      setFocusedOptionIndex(-1);
    } else {
      changeFocusedOptionIndex(event, findFirstOptionIndex());
      !overlayVisibleState && show();
    }
    event.preventDefault();
  };
  var onEndKey = function onEndKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (pressedInInputText) {
      var target = event.currentTarget;
      var len = target.value.length;
      target.setSelectionRange(len, len);
      setFocusedOptionIndex(-1);
    } else {
      changeFocusedOptionIndex(event, findLastOptionIndex());
      !overlayVisibleState && show();
    }
    event.preventDefault();
  };
  var onPageUpKey = function onPageUpKey2(event) {
    event.preventDefault();
  };
  var onPageDownKey = function onPageDownKey2(event) {
    event.preventDefault();
  };
  var onSpaceKey = function onSpaceKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    !pressedInInputText && onEnterKey(event);
  };
  var onEnterKey = function onEnterKey2(event) {
    if (!overlayVisibleState) {
      setFocusedOptionIndex(-1);
      onArrowDownKey(event);
    } else {
      if (focusedOptionIndex !== -1) {
        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
      }
    }
    event.preventDefault();
  };
  var onEscapeKey = function onEscapeKey2(event) {
    overlayVisibleState && hide();
    event.preventDefault();
  };
  var onTabKey = function onTabKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!pressedInInputText) {
      if (overlayVisibleState && !hasFocusableElements()) {
        DomHandler.focus(firstHiddenFocusableElementOnOverlay.current);
        event.preventDefault();
      } else {
        if (focusedOptionIndex !== -1) {
          onOptionSelect(event, visibleOptions[focusedOptionIndex]);
        }
        overlayVisibleState && hide();
      }
    }
  };
  var onBackspaceKey = function onBackspaceKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (event && pressedInInputText) {
      !overlayVisibleState && show();
    }
  };
  var findInArray = function findInArray2(visibleOptions2, searchText) {
    if (!searchText || !(visibleOptions2 !== null && visibleOptions2 !== void 0 && visibleOptions2.length)) return -1;
    var normalizedSearch = searchText.toLocaleLowerCase();
    var exactMatch = visibleOptions2.findIndex(function(item2) {
      return getOptionLabel(item2).toLocaleLowerCase() === normalizedSearch;
    });
    if (exactMatch !== -1) return exactMatch;
    return visibleOptions2.findIndex(function(item2) {
      return getOptionLabel(item2).toLocaleLowerCase().startsWith(normalizedSearch);
    });
  };
  var onEditableInputChange = function onEditableInputChange2(event) {
    !overlayVisibleState && show();
    var searchIndex = null;
    if (event.target.value && visibleOptions) {
      searchIndex = findInArray(visibleOptions, event.target.value);
    }
    setFocusedOptionIndex(searchIndex);
    if (props.onChange) {
      props.onChange({
        originalEvent: event.originalEvent,
        value: event.target.value,
        stopPropagation: function stopPropagation() {
          event.originalEvent.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event.originalEvent.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: event.target.value
        }
      });
    }
  };
  var onEditableInputFocus = function onEditableInputFocus2(event) {
    setFocusedState(true);
    hide();
    props.onFocus && props.onFocus(event);
  };
  var onOptionClick = function onOptionClick2(event) {
    var option = event.option;
    if (!option.disabled) {
      selectItem(event);
      DomHandler.focus(focusInputRef.current);
    }
    hide();
  };
  var onFilterInputChange = function onFilterInputChange2(event) {
    var filter2 = event.target.value;
    setFilterState(filter2);
    if (props.onFilter) {
      props.onFilter({
        originalEvent: event,
        filter: filter2
      });
    }
  };
  var onFilterClearIconClick = function onFilterClearIconClick2(callback) {
    resetFilter(callback);
  };
  var resetFilter = function resetFilter2(callback) {
    setFilterState("");
    props.onFilter && props.onFilter({
      filter: ""
    });
    callback && callback();
  };
  var clear = function clear2(event) {
    if (props.onChange) {
      props.onChange({
        originalEvent: event,
        value: void 0,
        stopPropagation: function stopPropagation() {
          event === null || event === void 0 || event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event === null || event === void 0 || event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: void 0
        }
      });
    }
    if (props.filter) {
      resetFilter();
    }
    updateEditableLabel();
    setFocusedOptionIndex(-1);
  };
  var selectItem = function selectItem2(event) {
    if (selectedOption !== event.option) {
      updateEditableLabel(event.option);
      setFocusedOptionIndex(-1);
      var optionValue = getOptionValue2(event.option);
      var selectedOptionIndex = findOptionIndexInList(event.option, visibleOptions);
      if (props.onChange) {
        props.onChange({
          originalEvent: event.originalEvent,
          value: optionValue,
          stopPropagation: function stopPropagation() {
            event.originalEvent.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.originalEvent.preventDefault();
          },
          target: {
            name: props.name,
            id: props.id,
            value: optionValue
          }
        });
      }
      changeFocusedOptionIndex(event.originalEvent, selectedOptionIndex);
    }
  };
  var getSelectedOptionIndex = function getSelectedOptionIndex2(options) {
    options = options || visibleOptions;
    if (options) {
      if (props.optionGroupLabel) {
        for (var i = 0; i < options.length; i++) {
          var selectedOptionIndex = findOptionIndexInList(props.value, getOptionGroupChildren(options[i]));
          if (selectedOptionIndex !== -1) {
            return {
              group: i,
              option: selectedOptionIndex
            };
          }
        }
      } else {
        return findOptionIndexInList(props.value, options);
      }
    }
    return -1;
  };
  var equalityKey = function equalityKey2() {
    return props.optionValue ? null : props.dataKey;
  };
  var findOptionIndexInList = function findOptionIndexInList2(value, list2) {
    var key = equalityKey();
    return list2.findIndex(function(item2) {
      return ObjectUtils.equals(value, getOptionValue2(item2), key);
    });
  };
  var isSelected = function isSelected2(option) {
    return ObjectUtils.equals(props.value, getOptionValue2(option), equalityKey());
  };
  var show = function show2() {
    setFocusedOptionIndex(focusedOptionIndex !== -1 ? focusedOptionIndex : props.autoOptionFocus ? findFirstFocusedOptionIndex() : props.editable ? -1 : findSelectedOptionIndex());
    setOverlayVisibleState(true);
  };
  var hide = function hide2() {
    setOverlayVisibleState(false);
    clickedRef.current = false;
  };
  var onFocus = function onFocus2() {
    if (props.editable && !overlayVisibleState && clickedRef.current === false) {
      DomHandler.focus(inputRef.current);
    }
  };
  var onOverlayEnter = function onOverlayEnter2(callback) {
    ZIndexUtils.set("overlay", overlayRef.current, context && context.autoZIndex || PrimeReact2.autoZIndex, context && context.zIndex.overlay || PrimeReact2.zIndex.overlay);
    DomHandler.addStyles(overlayRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    alignOverlay();
    callback && callback();
  };
  var onOverlayEntered = function onOverlayEntered2(callback) {
    callback && callback();
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    if (props.filter && props.resetFilterOnHide) {
      resetFilter();
    }
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var alignOverlay = function alignOverlay2() {
    DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || context && context.appendTo || PrimeReact2.appendTo);
  };
  var scrollInView = function scrollInView2() {
    var focusedItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-focused="true"]');
    if (focusedItem && focusedItem.scrollIntoView) {
      focusedItem.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    } else {
      var highlightItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-highlight="true"]');
      if (highlightItem && highlightItem.scrollIntoView) {
        highlightItem.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      }
    }
  };
  var updateEditableLabel = function updateEditableLabel2(option) {
    if (inputRef.current) {
      inputRef.current.value = option ? getOptionLabel(option) : props.value || "";
      if (focusInputRef.current) {
        focusInputRef.current.value = inputRef.current.value;
      }
    }
  };
  var getOptionLabel = function getOptionLabel2(option) {
    if (ObjectUtils.isScalar(option)) {
      return "".concat(option);
    }
    var optionLabel = props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option["label"];
    return "".concat(optionLabel);
  };
  var getOptionValue2 = function getOptionValue3(option) {
    if (props.useOptionAsValue) {
      return option;
    }
    var optionValue = props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option ? option["value"] : ObjectUtils.resolveFieldData(option, "value");
    return props.optionValue || ObjectUtils.isNotEmpty(optionValue) ? optionValue : option;
  };
  var getOptionRenderKey = function getOptionRenderKey2(option) {
    return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
  };
  var isOptionGroup = function isOptionGroup2(option) {
    return props.optionGroupLabel && option.group;
  };
  var isOptionDisabled = function isOptionDisabled2(option) {
    if (props.optionDisabled) {
      return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
    }
    return option && option.disabled !== void 0 ? option.disabled : false;
  };
  var getOptionGroupRenderKey = function getOptionGroupRenderKey2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupLabel = function getOptionGroupLabel2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupChildren = function getOptionGroupChildren2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
  };
  var updateInputField = function updateInputField2() {
    if (props.editable && inputRef.current) {
      var label = selectedOption ? getOptionLabel(selectedOption) : null;
      var value = label || props.value || "";
      inputRef.current.value = value;
      if (focusInputRef.current) {
        focusInputRef.current.value = value;
      }
    }
  };
  var getSelectedOption = function getSelectedOption2() {
    var index = getSelectedOptionIndex(props.options);
    return index !== -1 ? props.optionGroupLabel ? getOptionGroupChildren(props.options[index.group])[index.option] : props.options[index] : null;
  };
  React__namespace.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      hide,
      clear,
      focus: function focus() {
        return DomHandler.focus(focusInputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      },
      getFocusInput: function getFocusInput() {
        return focusInputRef.current;
      },
      getVirtualScroller: function getVirtualScroller() {
        return virtualScrollerRef.current;
      }
    };
  });
  React__namespace.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
    ObjectUtils.combinedRefs(focusInputRef, props.focusInputRef);
  }, [inputRef, props.inputRef, focusInputRef, props.focusInputRef]);
  useMountEffect(function() {
    if (props.autoFocus) {
      DomHandler.focus(focusInputRef.current, props.autoFocus);
    }
    alignOverlay();
  });
  useUpdateEffect(function() {
    if (overlayVisibleState && (props.value || focusedOptionIndex >= 0)) {
      scrollInView();
    }
  }, [overlayVisibleState, props.value, focusedOptionIndex]);
  useUpdateEffect(function() {
    if (overlayVisibleState && filterState && props.filter) {
      alignOverlay();
    }
  }, [overlayVisibleState, filterState, props.filter]);
  useUpdateEffect(function() {
    virtualScrollerRef.current && virtualScrollerRef.current.scrollInView(0);
  }, [filterState]);
  useUpdateEffect(function() {
    updateInputField();
    if (inputRef.current) {
      inputRef.current.selectedIndex = 1;
    }
  });
  useUnmountEffect(function() {
    ZIndexUtils.clear(overlayRef.current);
  });
  var createHiddenSelect = function createHiddenSelect2() {
    var option = {
      value: "",
      label: props.placeholder
    };
    if (selectedOption) {
      var optionValue = getOptionValue2(selectedOption);
      option = {
        value: _typeof$3(optionValue) === "object" ? props.options.findIndex(function(o) {
          return o === optionValue;
        }) : optionValue,
        label: getOptionLabel(selectedOption)
      };
    }
    var hiddenSelectedMessageProps = mergeProps2({
      className: "p-hidden-accessible p-dropdown-hidden-select"
    }, ptm("hiddenSelectedMessage"));
    var selectProps = mergeProps2({
      ref: inputRef,
      required: props.required,
      defaultValue: option.value,
      name: props.name,
      tabIndex: -1
    }, ptm("select"));
    var optionProps = mergeProps2({
      value: option.value
    }, ptm("option"));
    return /* @__PURE__ */ React__namespace.createElement("div", hiddenSelectedMessageProps, /* @__PURE__ */ React__namespace.createElement("select", selectProps, /* @__PURE__ */ React__namespace.createElement("option", optionProps, option.label)));
  };
  var createKeyboardHelper = function createKeyboardHelper2() {
    var value = ObjectUtils.isNotEmpty(selectedOption) ? getOptionLabel(selectedOption) : null;
    if (props.editable) {
      value = value || props.value || "";
    }
    var hiddenSelectedMessageProps = mergeProps2({
      className: "p-hidden-accessible"
    }, ptm("hiddenSelectedMessage"));
    var inputProps = mergeProps2(_objectSpread$4({
      ref: focusInputRef,
      id: props.inputId,
      defaultValue: value,
      type: "text",
      readOnly: true,
      "aria-haspopup": "listbox",
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      onKeyDown: onInputKeyDown,
      disabled: props.disabled,
      tabIndex: !props.disabled ? props.tabIndex || 0 : -1
    }, ariaProps), ptm("input"));
    return /* @__PURE__ */ React__namespace.createElement("div", hiddenSelectedMessageProps, /* @__PURE__ */ React__namespace.createElement("input", inputProps));
  };
  var createLabel = function createLabel2() {
    var label = ObjectUtils.isNotEmpty(selectedOption) ? getOptionLabel(selectedOption) : null;
    if (props.editable) {
      var value = label || props.value || "";
      var _inputProps = mergeProps2(_objectSpread$4({
        ref: inputRef,
        type: "text",
        defaultValue: value,
        className: cx("input", {
          label
        }),
        disabled: props.disabled,
        placeholder: props.placeholder,
        maxLength: props.maxLength,
        onInput: onEditableInputChange,
        onFocus: onEditableInputFocus,
        onKeyDown: onInputKeyDown,
        onBlur: onInputBlur,
        tabIndex: !props.disabled ? props.tabIndex || 0 : -1,
        "aria-haspopup": "listbox"
      }, ariaProps), ptm("input"));
      return /* @__PURE__ */ React__namespace.createElement("input", _inputProps);
    }
    var content2 = props.valueTemplate ? ObjectUtils.getJSXElement(props.valueTemplate, selectedOption, props) : label || props.placeholder || props.emptyMessage || /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, " ");
    var inputProps = mergeProps2({
      ref: inputRef,
      className: cx("input", {
        label
      }),
      tabIndex: "-1"
    }, ptm("input"));
    return /* @__PURE__ */ React__namespace.createElement("span", inputProps, content2);
  };
  var onClearIconKeyDown = function onClearIconKeyDown2(event) {
    if (event.key === "Enter" || event.code === "Space") {
      clear(event);
      event.preventDefault();
    }
  };
  var createClearIcon = function createClearIcon2() {
    if (props.value != null && props.showClear && !props.disabled && !ObjectUtils.isEmpty(props.options)) {
      var clearIconProps = mergeProps2({
        className: cx("clearIcon"),
        onPointerUp: clear,
        tabIndex: props.editable ? -1 : props.tabIndex || "0",
        onKeyDown: onClearIconKeyDown,
        "aria-label": localeOption("clear")
      }, ptm("clearIcon"));
      var icon2 = props.clearIcon || /* @__PURE__ */ React__namespace.createElement(TimesIcon, clearIconProps);
      return IconUtils.getJSXIcon(icon2, _objectSpread$4({}, clearIconProps), {
        props
      });
    }
    return null;
  };
  var createLoadingIcon = function createLoadingIcon2() {
    var loadingIconProps = mergeProps2({
      className: cx("loadingIcon"),
      "data-pr-overlay-visible": overlayVisibleState
    }, ptm("loadingIcon"));
    var icon2 = props.loadingIcon || /* @__PURE__ */ React__namespace.createElement(SpinnerIcon, {
      spin: true
    });
    var loadingIcon2 = IconUtils.getJSXIcon(icon2, _objectSpread$4({}, loadingIconProps), {
      props
    });
    var ariaLabel2 = props.placeholder || props.ariaLabel;
    var loadingButtonProps = mergeProps2({
      className: cx("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      "aria-label": ariaLabel2
    }, ptm("trigger"));
    return /* @__PURE__ */ React__namespace.createElement("div", loadingButtonProps, loadingIcon2);
  };
  var createDropdownIcon = function createDropdownIcon2() {
    var dropdownIconProps = mergeProps2({
      className: cx("dropdownIcon"),
      "data-pr-overlay-visible": overlayVisibleState
    }, ptm("dropdownIcon"));
    var icon2 = !overlayVisibleState ? props.dropdownIcon || /* @__PURE__ */ React__namespace.createElement(ChevronDownIcon, dropdownIconProps) : props.collapseIcon || /* @__PURE__ */ React__namespace.createElement(ChevronUpIcon, dropdownIconProps);
    var dropdownIcon2 = IconUtils.getJSXIcon(icon2, _objectSpread$4({}, dropdownIconProps), {
      props
    });
    var ariaLabel2 = props.placeholder || props.ariaLabel;
    var triggerProps = mergeProps2({
      className: cx("trigger"),
      role: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      "aria-label": ariaLabel2
    }, ptm("trigger"));
    return /* @__PURE__ */ React__namespace.createElement("div", triggerProps, dropdownIcon2);
  };
  var visibleOptions = getVisibleOptions();
  var selectedOption = getSelectedOption();
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = DropdownBase.getOtherProps(props);
  var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
  var hiddenSelect = createHiddenSelect();
  var keyboardHelper = createKeyboardHelper();
  var labelElement = createLabel();
  var dropdownIcon = props.loading ? createLoadingIcon() : createDropdownIcon();
  var clearIcon = createClearIcon();
  var rootProps = mergeProps2({
    id: props.id,
    ref: elementRef,
    className: classNames(props.className, cx("root", {
      context,
      focusedState,
      overlayVisibleState
    })),
    style: props.style,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onMouseDown: props.onMouseDown,
    onContextMenu: props.onContextMenu,
    onFocus,
    "data-p-disabled": props.disabled,
    "data-p-focus": focusedState,
    "aria-activedescendant": focusedState ? "dropdownItem_".concat(focusedOptionIndex) : void 0
  }, otherProps, ptm("root"));
  var firstHiddenFocusableElementProps = mergeProps2({
    ref: firstHiddenFocusableElementOnOverlay,
    role: "presentation",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: onFirstHiddenFocus,
    "data-p-hidden-accessible": true,
    "data-p-hidden-focusable": true
  }, ptm("hiddenFirstFocusableEl"));
  var lastHiddenFocusableElementProps = mergeProps2({
    ref: lastHiddenFocusableElementOnOverlay,
    role: "presentation",
    className: "p-hidden-accessible p-hidden-focusable",
    tabIndex: "0",
    onFocus: onLastHiddenFocus,
    "data-p-hidden-accessible": true,
    "data-p-hidden-focusable": true
  }, ptm("hiddenLastFocusableEl"));
  return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("div", rootProps, keyboardHelper, hiddenSelect, labelElement, clearIcon, dropdownIcon, /* @__PURE__ */ React__namespace.createElement(DropdownPanel, _extends$9({
    hostName: "Dropdown",
    ref: overlayRef,
    visibleOptions,
    virtualScrollerRef
  }, props, {
    appendTo,
    cx,
    filterValue,
    focusedOptionIndex,
    getOptionGroupChildren,
    getOptionGroupLabel,
    getOptionGroupRenderKey,
    getOptionLabel,
    getOptionRenderKey,
    getSelectedOptionIndex,
    hasFilter,
    "in": overlayVisibleState,
    isOptionDisabled,
    isSelected,
    onClick: onPanelClick,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    onFilterClearIconClick,
    onFilterInputChange,
    onFilterInputKeyDown,
    onOptionClick,
    onInputKeyDown,
    ptm,
    resetFilter,
    changeFocusedOptionIndex,
    firstFocusableElement: /* @__PURE__ */ React__namespace.createElement("span", firstHiddenFocusableElementProps),
    lastFocusableElement: /* @__PURE__ */ React__namespace.createElement("span", lastHiddenFocusableElementProps),
    sx
  }))), hasTooltip && /* @__PURE__ */ React__namespace.createElement(Tooltip, _extends$9({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
Dropdown.displayName = "Dropdown";
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    Object.keys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  Object.keys(source).forEach(function(key) {
    if (!options.isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    } else {
      destination[key] = deepmerge(target[key], source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array2, options) {
  if (!Array.isArray(array2)) {
    throw new Error("first argument should be an array");
  }
  return array2.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root8 = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root8.Symbol;
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
var nativeObjectToString$1 = objectProto$d.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$c = Object.prototype;
var nativeObjectToString = objectProto$c.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var objectTag$3 = "[object Object]";
var funcProto$2 = Function.prototype, objectProto$b = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var objectCtorString = funcToString$2.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$9.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root8["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$a = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
function getNative(object2, key) {
  var value = getValue(object2, key);
  return baseIsNative(value) ? value : void 0;
}
var Map$1 = getNative(root8, "Map");
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayEach(array2, iteratee) {
  var index = -1, length = array2 == null ? 0 : array2.length;
  while (++index < length) {
    if (iteratee(array2[index], index, array2) === false) {
      break;
    }
  }
  return array2;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
function baseAssignValue(object2, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function assignValue(object2, key, value) {
  var objValue = object2[key];
  if (!(hasOwnProperty$5.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
    baseAssignValue(object2, key, value);
  }
}
function copyObject(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object2, key, newValue);
    } else {
      assignValue(object2, key, newValue);
    }
  }
  return object2;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArray = Array.isArray;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root8.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$5 = Object.prototype;
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object2) {
  if (!isPrototype(object2)) {
    return nativeKeys(object2);
  }
  var result = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$2.call(object2, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
function keys(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
}
function baseAssign(object2, source) {
  return object2 && copyObject(source, keys(source), object2);
}
function nativeKeysIn(object2) {
  var result = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function baseKeysIn(object2) {
  if (!isObject$2(object2)) {
    return nativeKeysIn(object2);
  }
  var isProto = isPrototype(object2), result = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object2, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
}
function baseAssignIn(object2, source) {
  return object2 && copyObject(source, keysIn(source), object2);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root8.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function copyArray(source, array2) {
  var index = -1, length = source.length;
  array2 || (array2 = Array(length));
  while (++index < length) {
    array2[index] = source[index];
  }
  return array2;
}
function arrayFilter(array2, predicate) {
  var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array2[index];
    if (predicate(value, index, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter(nativeGetSymbols$1(object2), function(symbol) {
    return propertyIsEnumerable.call(object2, symbol);
  });
};
function copySymbols(source, object2) {
  return copyObject(source, getSymbols(source), object2);
}
function arrayPush(array2, values2) {
  var index = -1, length = values2.length, offset = array2.length;
  while (++index < length) {
    array2[offset + index] = values2[index];
  }
  return array2;
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object2) {
  var result = [];
  while (object2) {
    arrayPush(result, getSymbols(object2));
    object2 = getPrototype(object2);
  }
  return result;
};
function copySymbolsIn(source, object2) {
  return copyObject(source, getSymbolsIn(source), object2);
}
function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
  var result = keysFunc(object2);
  return isArray(object2) ? result : arrayPush(result, symbolsFunc(object2));
}
function getAllKeys(object2) {
  return baseGetAllKeys(object2, keys, getSymbols);
}
function getAllKeysIn(object2) {
  return baseGetAllKeys(object2, keysIn, getSymbolsIn);
}
var DataView = getNative(root8, "DataView");
var Promise$1 = getNative(root8, "Promise");
var Set$1 = getNative(root8, "Set");
var WeakMap$1 = getNative(root8, "WeakMap");
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag(new Map$1()) != mapTag$3 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$3 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array2) {
  var length = array2.length, result = new array2.constructor(length);
  if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
    result.index = array2.index;
    result.input = array2.input;
  }
  return result;
}
var Uint8Array = root8.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object2, tag, isDeep) {
  var Ctor = object2.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object2);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object2);
    case dataViewTag$1:
      return cloneDataView(object2, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object2, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object2);
    case regexpTag$1:
      return cloneRegExp(object2);
    case setTag$2:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object2);
  }
}
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object2() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object2.prototype = proto;
    var result = new object2();
    object2.prototype = void 0;
    return result;
  };
}();
function initCloneObject(object2) {
  return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$1;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$1;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$2 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object2, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
  if (result !== void 0) {
    return result;
  }
  if (!isObject$2(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object2) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object2 ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG$1 = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG$1);
}
var reactFastCompare;
var hasRequiredReactFastCompare;
function requireReactFastCompare() {
  if (hasRequiredReactFastCompare) return reactFastCompare;
  hasRequiredReactFastCompare = 1;
  var isArray2 = Array.isArray;
  var keyList = Object.keys;
  var hasProp = Object.prototype.hasOwnProperty;
  var hasElementType = typeof Element !== "undefined";
  function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = isArray2(a), arrB = isArray2(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0; )
          if (!equal(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a.toString() == b.toString();
      var keys2 = keyList(a);
      length = keys2.length;
      if (length !== keyList(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!hasProp.call(b, keys2[i])) return false;
      if (hasElementType && a instanceof Element && b instanceof Element)
        return a === b;
      for (i = length; i-- !== 0; ) {
        key = keys2[i];
        if (key === "_owner" && a.$$typeof) {
          continue;
        } else {
          if (!equal(a[key], b[key])) return false;
        }
      }
      return true;
    }
    return a !== a && b !== b;
  }
  reactFastCompare = function exportedEqual(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
        console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
        return false;
      }
      throw error;
    }
  };
  return reactFastCompare;
}
var reactFastCompareExports = requireReactFastCompare();
const isEqual = /* @__PURE__ */ getDefaultExportFromCjs(reactFastCompareExports);
var isProduction = process.env.NODE_ENV === "production";
function warning(condition, message2) {
  if (!isProduction) {
    var text = "Warning: " + message2;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var CLONE_SYMBOLS_FLAG = 4;
function clone$1(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}
function arrayMap(array2, iteratee) {
  var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array2[index], index, array2);
  }
  return result;
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString$1 = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString$1(value)));
}
var hoistNonReactStatics_cjs;
var hasRequiredHoistNonReactStatics_cjs;
function requireHoistNonReactStatics_cjs() {
  if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
  hasRequiredHoistNonReactStatics_cjs = 1;
  var reactIs2 = requireReactIs();
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    "$$typeof": true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    "$$typeof": true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs2.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs2.Memo] = MEMO_STATICS;
  function getStatics(component) {
    if (reactIs2.isMemo(component)) {
      return MEMO_STATICS;
    }
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
  }
  var defineProperty2 = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== "string") {
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);
        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }
      var keys2 = getOwnPropertyNames(sourceComponent);
      if (getOwnPropertySymbols) {
        keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent));
      }
      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);
      for (var i = 0; i < keys2.length; ++i) {
        var key = keys2[i];
        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
          try {
            defineProperty2(targetComponent, key, descriptor);
          } catch (e) {
          }
        }
      }
    }
    return targetComponent;
  }
  hoistNonReactStatics_cjs = hoistNonReactStatics;
  return hoistNonReactStatics_cjs;
}
requireHoistNonReactStatics_cjs();
function _extends$8() {
  _extends$8 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var FormikContext = /* @__PURE__ */ React.createContext(void 0);
FormikContext.displayName = "FormikContext";
var FormikProvider = FormikContext.Provider;
FormikContext.Consumer;
function useFormikContext() {
  var formik = React.useContext(FormikContext);
  !!!formik ? process.env.NODE_ENV !== "production" ? warning(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : warning() : void 0;
  return formik;
}
var isFunction = function isFunction2(obj) {
  return typeof obj === "function";
};
var isObject$1 = function isObject(obj) {
  return obj !== null && typeof obj === "object";
};
var isInteger = function isInteger2(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
var isString = function isString2(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
};
var isEmptyChildren = function isEmptyChildren2(children) {
  return React.Children.count(children) === 0;
};
var isPromise = function isPromise2(value) {
  return isObject$1(value) && isFunction(value.then);
};
function getActiveElement(doc) {
  doc = doc || (typeof document !== "undefined" ? document : void 0);
  if (typeof doc === "undefined") {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
function getIn$1(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }
  var path = toPath(key);
  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }
  if (p !== path.length && !obj) {
    return def;
  }
  return obj === void 0 ? def : obj;
}
function setIn(obj, path, value) {
  var res = clone$1(obj);
  var resVal = res;
  var i = 0;
  var pathArray = toPath(path);
  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn$1(obj, pathArray.slice(0, i + 1));
    if (currentObj && (isObject$1(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone$1(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  }
  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }
  if (value === void 0) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  }
  if (i === 0 && value === void 0) {
    delete res[pathArray[i]];
  }
  return res;
}
function setNestedObjectValues(object2, value, visited, response) {
  if (visited === void 0) {
    visited = /* @__PURE__ */ new WeakMap();
  }
  if (response === void 0) {
    response = {};
  }
  for (var _i = 0, _Object$keys = Object.keys(object2); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object2[k];
    if (isObject$1(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }
  return response;
}
function formikReducer(state2, msg) {
  switch (msg.type) {
    case "SET_VALUES":
      return _extends$8({}, state2, {
        values: msg.payload
      });
    case "SET_TOUCHED":
      return _extends$8({}, state2, {
        touched: msg.payload
      });
    case "SET_ERRORS":
      if (isEqual(state2.errors, msg.payload)) {
        return state2;
      }
      return _extends$8({}, state2, {
        errors: msg.payload
      });
    case "SET_STATUS":
      return _extends$8({}, state2, {
        status: msg.payload
      });
    case "SET_ISSUBMITTING":
      return _extends$8({}, state2, {
        isSubmitting: msg.payload
      });
    case "SET_ISVALIDATING":
      return _extends$8({}, state2, {
        isValidating: msg.payload
      });
    case "SET_FIELD_VALUE":
      return _extends$8({}, state2, {
        values: setIn(state2.values, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return _extends$8({}, state2, {
        touched: setIn(state2.touched, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_ERROR":
      return _extends$8({}, state2, {
        errors: setIn(state2.errors, msg.payload.field, msg.payload.value)
      });
    case "RESET_FORM":
      return _extends$8({}, state2, msg.payload);
    case "SET_FORMIK_STATE":
      return msg.payload(state2);
    case "SUBMIT_ATTEMPT":
      return _extends$8({}, state2, {
        touched: setNestedObjectValues(state2.values, true),
        isSubmitting: true,
        submitCount: state2.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return _extends$8({}, state2, {
        isSubmitting: false
      });
    case "SUBMIT_SUCCESS":
      return _extends$8({}, state2, {
        isSubmitting: false
      });
    default:
      return state2;
  }
}
var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange, validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange, _ref$validateOnBlur = _ref.validateOnBlur, validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur, _ref$validateOnMount = _ref.validateOnMount, validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount, isInitialValid = _ref.isInitialValid, _ref$enableReinitiali = _ref.enableReinitialize, enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali, onSubmit = _ref.onSubmit, rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);
  var props = _extends$8({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    onSubmit
  }, rest);
  var initialValues = React.useRef(props.initialValues);
  var initialErrors = React.useRef(props.initialErrors || emptyErrors);
  var initialTouched = React.useRef(props.initialTouched || emptyTouched);
  var initialStatus = React.useRef(props.initialStatus);
  var isMounted = React.useRef(false);
  var fieldRegistry = React.useRef({});
  if (process.env.NODE_ENV !== "production") {
    React.useEffect(function() {
      !(typeof isInitialValid === "undefined") ? process.env.NODE_ENV !== "production" ? warning(false, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : warning() : void 0;
    }, []);
  }
  React.useEffect(function() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  var _React$useState = React.useState(0), setIteration = _React$useState[1];
  var stateRef = React.useRef({
    values: cloneDeep(props.initialValues),
    errors: cloneDeep(props.initialErrors) || emptyErrors,
    touched: cloneDeep(props.initialTouched) || emptyTouched,
    status: cloneDeep(props.initialStatus),
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  });
  var state2 = stateRef.current;
  var dispatch = React.useCallback(function(action) {
    var prev = stateRef.current;
    stateRef.current = formikReducer(prev, action);
    if (prev !== stateRef.current) setIteration(function(x) {
      return x + 1;
    });
  }, []);
  var runValidateHandler = React.useCallback(function(values2, field) {
    return new Promise(function(resolve, reject) {
      var maybePromisedErrors = props.validate(values2, field);
      if (maybePromisedErrors == null) {
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function(errors) {
          resolve(errors || emptyErrors);
        }, function(actualException) {
          if (process.env.NODE_ENV !== "production") {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }
          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  var runValidationSchema = React.useCallback(function(values2, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values2) : validateYupSchema(values2, schema);
    return new Promise(function(resolve, reject) {
      promise.then(function() {
        resolve(emptyErrors);
      }, function(err) {
        if (err.name === "ValidationError") {
          resolve(yupToFormErrors(err));
        } else {
          if (process.env.NODE_ENV !== "production") {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }
          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = React.useCallback(function(field, value) {
    return new Promise(function(resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = React.useCallback(function(values2) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function(f) {
      return isFunction(fieldRegistry.current[f].validate);
    });
    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function(f) {
      return runSingleFieldLevelValidation(f, getIn$1(values2, f));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(fieldValidations).then(function(fieldErrorsList) {
      return fieldErrorsList.reduce(function(prev, curr, index) {
        if (curr === "DO_NOT_DELETE_YOU_WILL_BE_FIRED") {
          return prev;
        }
        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }
        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]);
  var runAllValidations = React.useCallback(function(values2) {
    return Promise.all([runFieldLevelValidations(values2), props.validationSchema ? runValidationSchema(values2) : {}, props.validate ? runValidateHandler(values2) : {}]).then(function(_ref2) {
      var fieldErrors = _ref2[0], schemaErrors = _ref2[1], validateErrors = _ref2[2];
      var combinedErrors = deepmerge_1.all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]);
  var validateFormWithHighPriority = useEventCallback(function(values2) {
    if (values2 === void 0) {
      values2 = state2.values;
    }
    dispatch({
      type: "SET_ISVALIDATING",
      payload: true
    });
    return runAllValidations(values2).then(function(combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: "SET_ISVALIDATING",
          payload: false
        });
        dispatch({
          type: "SET_ERRORS",
          payload: combinedErrors
        });
      }
      return combinedErrors;
    });
  });
  React.useEffect(function() {
    if (validateOnMount && isMounted.current === true && isEqual(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = React.useCallback(function(nextState) {
    var values2 = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values2;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;
    var dispatchFn = function dispatchFn2() {
      dispatch({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors,
          touched,
          status,
          values: values2,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === "number" ? nextState.submitCount : 0
        }
      });
    };
    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state2.values, imperativeMethods);
      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched, props.onReset]);
  React.useEffect(function() {
    if (isMounted.current === true && !isEqual(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
        if (validateOnMount) {
          validateFormWithHighPriority(initialValues.current);
        }
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  React.useEffect(function() {
    if (enableReinitialize && isMounted.current === true && !isEqual(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: "SET_ERRORS",
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  React.useEffect(function() {
    if (enableReinitialize && isMounted.current === true && !isEqual(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: "SET_TOUCHED",
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  React.useEffect(function() {
    if (enableReinitialize && isMounted.current === true && !isEqual(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: "SET_STATUS",
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function(name) {
    if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
      var value = getIn$1(state2.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);
      if (isPromise(maybePromise)) {
        dispatch({
          type: "SET_ISVALIDATING",
          payload: true
        });
        return maybePromise.then(function(x) {
          return x;
        }).then(function(error) {
          dispatch({
            type: "SET_FIELD_ERROR",
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: "SET_ISVALIDATING",
            payload: false
          });
        });
      } else {
        dispatch({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: "SET_ISVALIDATING",
        payload: true
      });
      return runValidationSchema(state2.values, name).then(function(x) {
        return x;
      }).then(function(error) {
        dispatch({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name,
            value: getIn$1(error, name)
          }
        });
        dispatch({
          type: "SET_ISVALIDATING",
          payload: false
        });
      });
    }
    return Promise.resolve();
  });
  var registerField = React.useCallback(function(name, _ref3) {
    var validate2 = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate2
    };
  }, []);
  var unregisterField = React.useCallback(function(name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function(touched, shouldValidate) {
    dispatch({
      type: "SET_TOUCHED",
      payload: touched
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state2.values) : Promise.resolve();
  });
  var setErrors = React.useCallback(function(errors) {
    dispatch({
      type: "SET_ERRORS",
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function(values2, shouldValidate) {
    var resolvedValues = isFunction(values2) ? values2(state2.values) : values2;
    dispatch({
      type: "SET_VALUES",
      payload: resolvedValues
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = React.useCallback(function(field, value) {
    dispatch({
      type: "SET_FIELD_ERROR",
      payload: {
        field,
        value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function(field, value, shouldValidate) {
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: {
        field,
        value
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state2.values, field, value)) : Promise.resolve();
  });
  var executeChange = React.useCallback(function(eventOrTextValue, maybePath) {
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed;
    if (!isString(eventOrTextValue)) {
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }
      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type, name = target.name, id = target.id, value = target.value, checked = target.checked, outerHTML = target.outerHTML, options = target.options, multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;
      if (!field && process.env.NODE_ENV !== "production") {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
          handlerName: "handleChange"
        });
      }
      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? "" : parsed) : /checkbox/.test(type) ? getValueForCheckbox(getIn$1(state2.values, field), checked, value) : options && multiple ? getSelectedValues(options) : value;
    }
    if (field) {
      setFieldValue(field, val);
    }
  }, [setFieldValue, state2.values]);
  var handleChange = useEventCallback(function(eventOrPath) {
    if (isString(eventOrPath)) {
      return function(event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function(field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }
    dispatch({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field,
        value: touched
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state2.values) : Promise.resolve();
  });
  var executeBlur = React.useCallback(function(e, path) {
    if (e.persist) {
      e.persist();
    }
    var _e$target = e.target, name = _e$target.name, id = _e$target.id, outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;
    if (!field && process.env.NODE_ENV !== "production") {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: "handleblur-e-any--void",
        handlerName: "handleBlur"
      });
    }
    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function(eventOrString) {
    if (isString(eventOrString)) {
      return function(event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = React.useCallback(function(stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch({
        type: "SET_FORMIK_STATE",
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: "SET_FORMIK_STATE",
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = React.useCallback(function(status) {
    dispatch({
      type: "SET_STATUS",
      payload: status
    });
  }, []);
  var setSubmitting = React.useCallback(function(isSubmitting) {
    dispatch({
      type: "SET_ISSUBMITTING",
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function() {
    dispatch({
      type: "SUBMIT_ATTEMPT"
    });
    return validateFormWithHighPriority().then(function(combinedErrors) {
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;
      if (isActuallyValid) {
        var promiseOrUndefined;
        try {
          promiseOrUndefined = executeSubmit();
          if (promiseOrUndefined === void 0) {
            return;
          }
        } catch (error) {
          throw error;
        }
        return Promise.resolve(promiseOrUndefined).then(function(result) {
          if (!!isMounted.current) {
            dispatch({
              type: "SUBMIT_SUCCESS"
            });
          }
          return result;
        })["catch"](function(_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: "SUBMIT_FAILURE"
            });
            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        dispatch({
          type: "SUBMIT_FAILURE"
        });
        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }
      return;
    });
  });
  var handleSubmit = useEventCallback(function(e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }
    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }
    if (process.env.NODE_ENV !== "production" && typeof document !== "undefined") {
      var activeElement = getActiveElement();
      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem("type")) ? process.env.NODE_ENV !== "production" ? warning(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : warning() : void 0;
      }
    }
    submitForm()["catch"](function(reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    setFormikState,
    submitForm
  };
  var executeSubmit = useEventCallback(function() {
    return onSubmit(state2.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function(e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }
    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }
    resetForm();
  });
  var getFieldMeta = React.useCallback(function(name) {
    return {
      value: getIn$1(state2.values, name),
      error: getIn$1(state2.errors, name),
      touched: !!getIn$1(state2.touched, name),
      initialValue: getIn$1(initialValues.current, name),
      initialTouched: !!getIn$1(initialTouched.current, name),
      initialError: getIn$1(initialErrors.current, name)
    };
  }, [state2.errors, state2.touched, state2.values]);
  var getFieldHelpers = React.useCallback(function(name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched2(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = React.useCallback(function(nameOrOptions) {
    var isAnObject = isObject$1(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn$1(state2.values, name);
    var field = {
      name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };
    if (isAnObject) {
      var type = nameOrOptions.type, valueProp = nameOrOptions.value, is = nameOrOptions.as, multiple = nameOrOptions.multiple;
      if (type === "checkbox") {
        if (valueProp === void 0) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === "radio") {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === "select" && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }
    return field;
  }, [handleBlur, handleChange, state2.values]);
  var dirty = React.useMemo(function() {
    return !isEqual(initialValues.current, state2.values);
  }, [initialValues.current, state2.values]);
  var isValid = React.useMemo(function() {
    return typeof isInitialValid !== "undefined" ? dirty ? state2.errors && Object.keys(state2.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state2.errors && Object.keys(state2.errors).length === 0;
  }, [isInitialValid, dirty, state2.errors, props]);
  var ctx = _extends$8({}, state2, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    resetForm,
    setErrors,
    setFormikState,
    setFieldTouched,
    setFieldValue,
    setFieldError,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    submitForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    isValid,
    dirty,
    unregisterField,
    registerField,
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    validateOnBlur,
    validateOnChange,
    validateOnMount
  });
  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component, children = props.children, render = props.render, innerRef = props.innerRef;
  React.useImperativeHandle(innerRef, function() {
    return formikbag;
  });
  if (process.env.NODE_ENV !== "production") {
    React.useEffect(function() {
      !!props.render ? process.env.NODE_ENV !== "production" ? warning(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : warning() : void 0;
    }, []);
  }
  return React.createElement(FormikProvider, {
    value: formikbag
  }, component ? React.createElement(component, formikbag) : render ? render(formikbag) : children ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? React.Children.only(children) : null : null);
}
function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent, documentationAnchorLink = _ref4.documentationAnchorLink, handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
  var errors = {};
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }
    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
      var _ref5;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }
      var err = _ref5;
      if (!getIn$1(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }
  return errors;
}
function validateYupSchema(values2, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }
  var normalizedValues = prepareDataForValidation(values2);
  return schema[sync ? "validateSync" : "validate"](normalizedValues, {
    abortEarly: false,
    context: normalizedValues
  });
}
function prepareDataForValidation(values2) {
  var data = Array.isArray(values2) ? [] : {};
  for (var k in values2) {
    if (Object.prototype.hasOwnProperty.call(values2, k)) {
      var key = String(k);
      if (Array.isArray(values2[key]) === true) {
        data[key] = values2[key].map(function(value) {
          if (Array.isArray(value) === true || isPlainObject(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== "" ? value : void 0;
          }
        });
      } else if (isPlainObject(values2[key])) {
        data[key] = prepareDataForValidation(values2[key]);
      } else {
        data[key] = values2[key] !== "" ? values2[key] : void 0;
      }
    }
  }
  return data;
}
function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === "undefined") {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? deepmerge_1(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = deepmerge_1(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
function getSelectedValues(options) {
  return Array.from(options).filter(function(el) {
    return el.selected;
  }).map(function(el) {
    return el.value;
  });
}
function getValueForCheckbox(currentValue, checked, valueProp) {
  if (typeof currentValue === "boolean") {
    return Boolean(checked);
  }
  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;
  if (!Array.isArray(currentValue)) {
    if (!valueProp || valueProp == "true" || valueProp == "false") {
      return Boolean(checked);
    }
  } else {
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  }
  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  }
  if (!isValueInArray) {
    return currentArrayOfValues;
  }
  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useEventCallback(fn) {
  var ref = React.useRef(fn);
  useIsomorphicLayoutEffect(function() {
    ref.current = fn;
  });
  return React.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current.apply(void 0, args);
  }, []);
}
var Form = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var action = props.action, rest = _objectWithoutPropertiesLoose(props, ["action"]);
  var _action = action != null ? action : "#";
  var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
  return React.createElement("form", _extends$8({
    onSubmit: handleSubmit,
    ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = "Form";
var propertyExpr;
var hasRequiredPropertyExpr;
function requirePropertyExpr() {
  if (hasRequiredPropertyExpr) return propertyExpr;
  hasRequiredPropertyExpr = 1;
  function Cache(maxSize) {
    this._maxSize = maxSize;
    this.clear();
  }
  Cache.prototype.clear = function() {
    this._size = 0;
    this._values = /* @__PURE__ */ Object.create(null);
  };
  Cache.prototype.get = function(key) {
    return this._values[key];
  };
  Cache.prototype.set = function(key, value) {
    this._size >= this._maxSize && this.clear();
    if (!(key in this._values)) this._size++;
    return this._values[key] = value;
  };
  var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
  var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
  propertyExpr = {
    Cache,
    split,
    normalizePath,
    setter: function(path) {
      var parts = normalizePath(path);
      return setCache.get(path) || setCache.set(path, function setter(obj, value) {
        var index = 0;
        var len = parts.length;
        var data = obj;
        while (index < len - 1) {
          var part = parts[index];
          if (part === "__proto__" || part === "constructor" || part === "prototype") {
            return obj;
          }
          data = data[parts[index++]];
        }
        data[parts[index]] = value;
      });
    },
    getter: function(path, safe) {
      var parts = normalizePath(path);
      return getCache.get(path) || getCache.set(path, function getter(data) {
        var index = 0, len = parts.length;
        while (index < len) {
          if (data != null || !safe) data = data[parts[index++]];
          else return;
        }
        return data;
      });
    },
    join: function(segments) {
      return segments.reduce(function(path, part) {
        return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
      }, "");
    },
    forEach: function(path, cb, thisArg) {
      forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
    }
  };
  function normalizePath(path) {
    return pathCache.get(path) || pathCache.set(
      path,
      split(path).map(function(part) {
        return part.replace(CLEAN_QUOTES_REGEX, "$2");
      })
    );
  }
  function split(path) {
    return path.match(SPLIT_REGEX) || [""];
  }
  function forEach(parts, iter, thisArg) {
    var len = parts.length, part, idx, isArray2, isBracket;
    for (idx = 0; idx < len; idx++) {
      part = parts[idx];
      if (part) {
        if (shouldBeQuoted(part)) {
          part = '"' + part + '"';
        }
        isBracket = isQuoted(part);
        isArray2 = !isBracket && /^\d+$/.test(part);
        iter.call(thisArg, part, isBracket, isArray2, idx, parts);
      }
    }
  }
  function isQuoted(str) {
    return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
  }
  function hasLeadingNumber(part) {
    return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
  }
  function hasSpecialChars(part) {
    return SPEC_CHAR_REGEX.test(part);
  }
  function shouldBeQuoted(part) {
    return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
  }
  return propertyExpr;
}
var propertyExprExports = requirePropertyExpr();
var tinyCase;
var hasRequiredTinyCase;
function requireTinyCase() {
  if (hasRequiredTinyCase) return tinyCase;
  hasRequiredTinyCase = 1;
  const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
  const words = (str) => str.match(reWords) || [];
  const upperFirst = (str) => str[0].toUpperCase() + str.slice(1);
  const join = (str, d) => words(str).join(d).toLowerCase();
  const camelCase = (str) => words(str).reduce(
    (acc, next) => `${acc}${!acc ? next.toLowerCase() : next[0].toUpperCase() + next.slice(1).toLowerCase()}`,
    ""
  );
  const pascalCase = (str) => upperFirst(camelCase(str));
  const snakeCase = (str) => join(str, "_");
  const kebabCase = (str) => join(str, "-");
  const sentenceCase = (str) => upperFirst(join(str, " "));
  const titleCase = (str) => words(str).map(upperFirst).join(" ");
  tinyCase = {
    words,
    upperFirst,
    camelCase,
    pascalCase,
    snakeCase,
    kebabCase,
    sentenceCase,
    titleCase
  };
  return tinyCase;
}
var tinyCaseExports = requireTinyCase();
var toposort$1 = { exports: {} };
var hasRequiredToposort;
function requireToposort() {
  if (hasRequiredToposort) return toposort$1.exports;
  hasRequiredToposort = 1;
  toposort$1.exports = function(edges) {
    return toposort2(uniqueNodes(edges), edges);
  };
  toposort$1.exports.array = toposort2;
  function toposort2(nodes, edges) {
    var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
    edges.forEach(function(edge) {
      if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
      }
    });
    while (i--) {
      if (!visited[i]) visit(nodes[i], i, /* @__PURE__ */ new Set());
    }
    return sorted;
    function visit(node, i2, predecessors) {
      if (predecessors.has(node)) {
        var nodeRep;
        try {
          nodeRep = ", node was:" + JSON.stringify(node);
        } catch (e) {
          nodeRep = "";
        }
        throw new Error("Cyclic dependency" + nodeRep);
      }
      if (!nodesHash.has(node)) {
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
      }
      if (visited[i2]) return;
      visited[i2] = true;
      var outgoing = outgoingEdges.get(node) || /* @__PURE__ */ new Set();
      outgoing = Array.from(outgoing);
      if (i2 = outgoing.length) {
        predecessors.add(node);
        do {
          var child = outgoing[--i2];
          visit(child, nodesHash.get(child), predecessors);
        } while (i2);
        predecessors.delete(node);
      }
      sorted[--cursor] = node;
    }
  }
  function uniqueNodes(arr) {
    var res = /* @__PURE__ */ new Set();
    for (var i = 0, len = arr.length; i < len; i++) {
      var edge = arr[i];
      res.add(edge[0]);
      res.add(edge[1]);
    }
    return Array.from(res);
  }
  function makeOutgoingEdges(arr) {
    var edges = /* @__PURE__ */ new Map();
    for (var i = 0, len = arr.length; i < len; i++) {
      var edge = arr[i];
      if (!edges.has(edge[0])) edges.set(edge[0], /* @__PURE__ */ new Set());
      if (!edges.has(edge[1])) edges.set(edge[1], /* @__PURE__ */ new Set());
      edges.get(edge[0]).add(edge[1]);
    }
    return edges;
  }
  function makeNodesHash(arr) {
    var res = /* @__PURE__ */ new Map();
    for (var i = 0, len = arr.length; i < len; i++) {
      res.set(arr[i], i);
    }
    return res;
  }
  return toposort$1.exports;
}
var toposortExports = requireToposort();
const toposort = /* @__PURE__ */ getDefaultExportFromCjs(toposortExports);
const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val) return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false) return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number") return printNumber(val);
  if (typeOf === "string") return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function") return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol") return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString.call(val).slice(8, -1);
  if (tag === "Date") return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error) return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp") return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null) return result;
  return JSON.stringify(value, function(key, value2) {
    let result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null) return result2;
    return value2;
  }, 2);
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
let _Symbol$toStringTag, _Symbol$hasInstance, _Symbol$toStringTag2;
let strReg = /\$\{\s*(\w+)\s*\}/g;
_Symbol$toStringTag = Symbol.toStringTag;
class ValidationErrorNoStack {
  constructor(errorOrErrors, value, field, type) {
    this.name = void 0;
    this.message = void 0;
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.params = void 0;
    this.errors = void 0;
    this.inner = void 0;
    this[_Symbol$toStringTag] = "Error";
    this.name = "ValidationError";
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach((err) => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        const innerErrors = err.inner.length ? err.inner : [err];
        this.inner.push(...innerErrors);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
_Symbol$hasInstance = Symbol.hasInstance;
_Symbol$toStringTag2 = Symbol.toStringTag;
class ValidationError extends Error {
  static formatError(message2, params) {
    const path = params.label || params.path || "this";
    params = Object.assign({}, params, {
      path,
      originalPath: params.path
    });
    if (typeof message2 === "string") return message2.replace(strReg, (_, key) => printValue(params[key]));
    if (typeof message2 === "function") return message2(params);
    return message2;
  }
  static isError(err) {
    return err && err.name === "ValidationError";
  }
  constructor(errorOrErrors, value, field, type, disableStack) {
    const errorNoStack = new ValidationErrorNoStack(errorOrErrors, value, field, type);
    if (disableStack) {
      return errorNoStack;
    }
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.params = void 0;
    this.errors = [];
    this.inner = [];
    this[_Symbol$toStringTag2] = "Error";
    this.name = errorNoStack.name;
    this.message = errorNoStack.message;
    this.type = errorNoStack.type;
    this.value = errorNoStack.value;
    this.path = errorNoStack.path;
    this.errors = errorNoStack.errors;
    this.inner = errorNoStack.inner;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
  }
  static [_Symbol$hasInstance](inst) {
    return ValidationErrorNoStack[Symbol.hasInstance](inst) || super[Symbol.hasInstance](inst);
  }
}
let mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    const castMsg = originalValue != null && originalValue !== value ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".";
    return type !== "mixed" ? `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + castMsg : `${path} must match the configured type. The validated value was: \`${printValue(value, true)}\`` + castMsg;
  }
};
let string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
let number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
let date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
let boolean = {
  isValue: "${path} field must be ${value}"
};
let object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
};
let array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
let tuple = {
  notType: (params) => {
    const {
      path,
      value,
      spec
    } = params;
    const typeLen = spec.types.length;
    if (Array.isArray(value)) {
      if (value.length < typeLen) return `${path} tuple value has too few items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
      if (value.length > typeLen) return `${path} tuple value has too many items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
    }
    return ValidationError.formatError(mixed.notType, params);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
  tuple
});
const isSchema = (obj) => obj && obj.__isYupSchema__;
class Condition {
  static fromOptions(refs, config2) {
    if (!config2.then && !config2.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is,
      then,
      otherwise
    } = config2;
    let check = typeof is === "function" ? is : (...values2) => values2.every((value) => value === is);
    return new Condition(refs, (values2, schema) => {
      var _branch;
      let branch = check(...values2) ? then : otherwise;
      return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
    });
  }
  constructor(refs, builder) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;
    this.fn = builder;
  }
  resolve(base, options) {
    let values2 = this.refs.map((ref) => (
      // TODO: ? operator here?
      ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context)
    ));
    let schema = this.fn(values2, base, options);
    if (schema === void 0 || // @ts-ignore this can be base
    schema === base) {
      return base;
    }
    if (!isSchema(schema)) throw new TypeError("conditions must return a schema object");
    return schema.resolve(options);
  }
}
const prefixes = {
  context: "$",
  value: "."
};
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== "string") throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && propertyExprExports.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter) result = this.getter(result || {});
    if (this.map) result = this.map(result);
    return result;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}
Reference.prototype.__isYupRef = true;
const isAbsent = (value) => value == null;
function createValidation(config2) {
  function validate2({
    value,
    path = "",
    options,
    originalValue,
    schema
  }, panic, next) {
    const {
      name,
      test,
      params,
      message: message2,
      skipAbsent
    } = config2;
    let {
      parent,
      context,
      abortEarly = schema.spec.abortEarly,
      disableStackTrace = schema.spec.disableStackTrace
    } = options;
    function resolve(item2) {
      return Reference.isRef(item2) ? item2.getValue(value, parent, context) : item2;
    }
    function createError(overrides = {}) {
      const nextParams = Object.assign({
        value,
        originalValue,
        label: schema.spec.label,
        path: overrides.path || path,
        spec: schema.spec,
        disableStackTrace: overrides.disableStackTrace || disableStackTrace
      }, params, overrides.params);
      for (const key of Object.keys(nextParams)) nextParams[key] = resolve(nextParams[key]);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message2, nextParams), value, nextParams.path, overrides.type || name, nextParams.disableStackTrace);
      error.params = nextParams;
      return error;
    }
    const invalid = abortEarly ? panic : next;
    let ctx = {
      path,
      parent,
      type: name,
      from: options.from,
      createError,
      resolve,
      options,
      originalValue,
      schema
    };
    const handleResult = (validOrError) => {
      if (ValidationError.isError(validOrError)) invalid(validOrError);
      else if (!validOrError) invalid(createError());
      else next(null);
    };
    const handleError = (err) => {
      if (ValidationError.isError(err)) invalid(err);
      else panic(err);
    };
    const shouldSkip = skipAbsent && isAbsent(value);
    if (shouldSkip) {
      return handleResult(true);
    }
    let result;
    try {
      var _result;
      result = test.call(ctx, value, ctx);
      if (typeof ((_result = result) == null ? void 0 : _result.then) === "function") {
        if (options.sync) {
          throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        }
        return Promise.resolve(result).then(handleResult, handleError);
      }
    } catch (err) {
      handleError(err);
      return;
    }
    handleResult(result);
  }
  validate2.OPTIONS = config2;
  return validate2;
}
function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path) return {
    parent,
    parentPath: path,
    schema
  };
  propertyExprExports.forEach(path, (_part, isBracket, isArray2) => {
    let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    let isTuple = schema.type === "tuple";
    let idx = isArray2 ? parseInt(part, 10) : 0;
    if (schema.innerType || isTuple) {
      if (isTuple && !isArray2) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${lastPartDebug}" must contain an index to the tuple element, e.g. "${lastPartDebug}[0]"`);
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = isTuple ? schema.spec.types[idx] : schema.innerType;
    }
    if (!isArray2) {
      if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema.type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
class ReferenceSet extends Set {
  describe() {
    const description = [];
    for (const item2 of this.values()) {
      description.push(Reference.isRef(item2) ? item2.describe() : item2);
    }
    return description;
  }
  resolveAll(resolve) {
    let result = [];
    for (const item2 of this.values()) {
      result.push(resolve(item2));
    }
    return result;
  }
  clone() {
    return new ReferenceSet(this.values());
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.forEach((value) => next.add(value));
    removeItems.forEach((value) => next.delete(value));
    return next;
  }
}
function clone(src, seen = /* @__PURE__ */ new Map()) {
  if (isSchema(src) || !src || typeof src !== "object") return src;
  if (seen.has(src)) return seen.get(src);
  let copy;
  if (src instanceof Date) {
    copy = new Date(src.getTime());
    seen.set(src, copy);
  } else if (src instanceof RegExp) {
    copy = new RegExp(src);
    seen.set(src, copy);
  } else if (Array.isArray(src)) {
    copy = new Array(src.length);
    seen.set(src, copy);
    for (let i = 0; i < src.length; i++) copy[i] = clone(src[i], seen);
  } else if (src instanceof Map) {
    copy = /* @__PURE__ */ new Map();
    seen.set(src, copy);
    for (const [k, v] of src.entries()) copy.set(k, clone(v, seen));
  } else if (src instanceof Set) {
    copy = /* @__PURE__ */ new Set();
    seen.set(src, copy);
    for (const v of src) copy.add(clone(v, seen));
  } else if (src instanceof Object) {
    copy = {};
    seen.set(src, copy);
    for (const [k, v] of Object.entries(src)) copy[k] = clone(v, seen);
  } else {
    throw Error(`Unable to clone ${src}`);
  }
  return copy;
}
class Schema {
  constructor(options) {
    this.type = void 0;
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this.internalTests = {};
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = /* @__PURE__ */ Object.create(null);
    this._typeCheck = void 0;
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = options.type;
    this._typeCheck = options.check;
    this.spec = Object.assign({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      disableStackTrace: false,
      nullable: false,
      optional: true,
      coerce: true
    }, options == null ? void 0 : options.spec);
    this.withMutation((s) => {
      s.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec) Object.assign(this.spec, spec);
      return this;
    }
    const next = Object.create(Object.getPrototypeOf(this));
    next.type = this.type;
    next._typeCheck = this._typeCheck;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.internalTests = Object.assign({}, this.internalTests);
    next.exclusiveTests = Object.assign({}, this.exclusiveTests);
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(Object.assign({}, this.spec, spec));
    return next;
  }
  label(label) {
    let next = this.clone();
    next.spec.label = label;
    return next;
  }
  meta(...args) {
    if (args.length === 0) return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this) return this;
    if (schema.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = Object.assign({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;
    combined.withMutation((next) => {
      schema.tests.forEach((fn) => {
        next.test(fn.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }
  isType(v) {
    if (v == null) {
      if (this.spec.nullable && v === null) return true;
      if (this.spec.optional && v === void 0) return true;
      return false;
    }
    return this._typeCheck(v);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  resolveOptions(options) {
    var _options$strict, _options$abortEarly, _options$recursive, _options$disableStack;
    return Object.assign({}, options, {
      from: options.from || [],
      strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
      abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
      recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive,
      disableStackTrace: (_options$disableStack = options.disableStackTrace) != null ? _options$disableStack : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(value, options = {}) {
    let resolvedSchema = this.resolve(Object.assign({
      value
    }, options));
    let allowOptionality = options.assert === "ignore-optionality";
    let result = resolvedSchema._cast(value, options);
    if (options.assert !== false && !resolvedSchema.isType(result)) {
      if (allowOptionality && isAbsent(result)) {
        return result;
      }
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema.type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
    }
    return result;
  }
  _cast(rawValue, options) {
    let value = rawValue === void 0 ? rawValue : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
    if (value === void 0) {
      value = this.getDefault(options);
    }
    return value;
  }
  _validate(_value, options = {}, panic, next) {
    let {
      path,
      originalValue = _value,
      strict = this.spec.strict
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, Object.assign({
        assert: false
      }, options));
    }
    let initialTests = [];
    for (let test of Object.values(this.internalTests)) {
      if (test) initialTests.push(test);
    }
    this.runTests({
      path,
      value,
      originalValue,
      options,
      tests: initialTests
    }, panic, (initialErrors) => {
      if (initialErrors.length) {
        return next(initialErrors, value);
      }
      this.runTests({
        path,
        value,
        originalValue,
        options,
        tests: this.tests
      }, panic, next);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(runOptions, panic, next) {
    let fired = false;
    let {
      tests,
      value,
      originalValue,
      path,
      options
    } = runOptions;
    let panicOnce = (arg) => {
      if (fired) return;
      fired = true;
      panic(arg, value);
    };
    let nextOnce = (arg) => {
      if (fired) return;
      fired = true;
      next(arg, value);
    };
    let count = tests.length;
    let nestedErrors = [];
    if (!count) return nextOnce([]);
    let args = {
      value,
      originalValue,
      path,
      options,
      schema: this
    };
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      test(args, panicOnce, function finishTestRun(err) {
        if (err) {
          Array.isArray(err) ? nestedErrors.push(...err) : nestedErrors.push(err);
        }
        if (--count <= 0) {
          nextOnce(nestedErrors);
        }
      });
    }
  }
  asNestedTest({
    key,
    index,
    parent,
    parentPath,
    originalParent,
    options
  }) {
    const k = key != null ? key : index;
    if (k == null) {
      throw TypeError("Must include `key` or `index` for nested validations");
    }
    const isIndex2 = typeof k === "number";
    let value = parent[k];
    const testOptions = Object.assign({}, options, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: true,
      parent,
      value,
      originalValue: originalParent[k],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [isIndex2 ? "index" : "key"]: k,
      path: isIndex2 || k.includes(".") ? `${parentPath || ""}[${isIndex2 ? k : `"${k}"`}]` : (parentPath ? `${parentPath}.` : "") + key
    });
    return (_, panic, next) => this.resolve(testOptions)._validate(value, testOptions, panic, next);
  }
  validate(value, options) {
    var _options$disableStack2;
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    let disableStackTrace = (_options$disableStack2 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack2 : schema.spec.disableStackTrace;
    return new Promise((resolve, reject) => schema._validate(value, options, (error, parsed) => {
      if (ValidationError.isError(error)) error.value = parsed;
      reject(error);
    }, (errors, validated) => {
      if (errors.length) reject(new ValidationError(errors, validated, void 0, void 0, disableStackTrace));
      else resolve(validated);
    }));
  }
  validateSync(value, options) {
    var _options$disableStack3;
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    let result;
    let disableStackTrace = (_options$disableStack3 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack3 : schema.spec.disableStackTrace;
    schema._validate(value, Object.assign({}, options, {
      sync: true
    }), (error, parsed) => {
      if (ValidationError.isError(error)) error.value = parsed;
      throw error;
    }, (errors, validated) => {
      if (errors.length) throw new ValidationError(errors, value, void 0, void 0, disableStackTrace);
      result = validated;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, (err) => {
      if (ValidationError.isError(err)) return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err)) return false;
      throw err;
    }
  }
  _getDefault(options) {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === "function" ? defaultValue.call(this, options) : clone(defaultValue);
  }
  getDefault(options) {
    let schema = this.resolve(options || {});
    return schema._getDefault(options);
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    return this.clone({
      strict: isStrict
    });
  }
  nullability(nullable, message2) {
    const next = this.clone({
      nullable
    });
    next.internalTests.nullable = createValidation({
      message: message2,
      name: "nullable",
      test(value) {
        return value === null ? this.schema.spec.nullable : true;
      }
    });
    return next;
  }
  optionality(optional, message2) {
    const next = this.clone({
      optional
    });
    next.internalTests.optionality = createValidation({
      message: message2,
      name: "optionality",
      test(value) {
        return value === void 0 ? this.schema.spec.optional : true;
      }
    });
    return next;
  }
  optional() {
    return this.optionality(true);
  }
  defined(message2 = mixed.defined) {
    return this.optionality(false, message2);
  }
  nullable() {
    return this.nullability(true);
  }
  nonNullable(message2 = mixed.notNull) {
    return this.nullability(false, message2);
  }
  required(message2 = mixed.required) {
    return this.clone().withMutation((next) => next.nonNullable(message2).defined(message2));
  }
  notRequired() {
    return this.clone().withMutation((next) => next.nullable().optional());
  }
  transform(fn) {
    let next = this.clone();
    next.transforms.push(fn);
    return next;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === "function") {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === void 0) opts.message = mixed.default;
    if (typeof opts.test !== "function") throw new TypeError("`test` is a required parameters");
    let next = this.clone();
    let validate2 = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter((fn) => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive) return false;
        if (fn.OPTIONS.test === validate2.OPTIONS.test) return false;
      }
      return true;
    });
    next.tests.push(validate2);
    return next;
  }
  when(keys2, options) {
    if (!Array.isArray(keys2) && typeof keys2 !== "string") {
      options = keys2;
      keys2 = ".";
    }
    let next = this.clone();
    let deps = toArray(keys2).map((key) => new Reference(key));
    deps.forEach((dep) => {
      if (dep.isSibling) next.deps.push(dep.key);
    });
    next.conditions.push(typeof options === "function" ? new Condition(deps, options) : Condition.fromOptions(deps, options));
    return next;
  }
  typeError(message2) {
    let next = this.clone();
    next.internalTests.typeError = createValidation({
      message: message2,
      name: "typeError",
      skipAbsent: true,
      test(value) {
        if (!this.schema._typeCheck(value)) return this.createError({
          params: {
            type: this.schema.type
          }
        });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message2 = mixed.oneOf) {
    let next = this.clone();
    enums.forEach((val) => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next.internalTests.whiteList = createValidation({
      message: message2,
      name: "oneOf",
      skipAbsent: true,
      test(value) {
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: Array.from(valids).join(", "),
            resolved
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message2 = mixed.notOneOf) {
    let next = this.clone();
    enums.forEach((val) => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next.internalTests.blacklist = createValidation({
      message: message2,
      name: "notOneOf",
      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value)) return this.createError({
          params: {
            values: Array.from(invalids).join(", "),
            resolved
          }
        });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(options) {
    const next = (options ? this.resolve(options) : this).clone();
    const {
      label,
      meta,
      optional,
      nullable
    } = next.spec;
    const description = {
      meta,
      label,
      optional,
      nullable,
      default: next.getDefault(options),
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map((fn) => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list2) => list2.findIndex((c) => c.name === n.name) === idx)
    };
    return description;
  }
}
Schema.prototype.__isYupSchema__ = true;
for (const method of ["validate", "validateSync"]) Schema.prototype[`${method}At`] = function(path, value, options = {}) {
  const {
    parent,
    parentPath,
    schema
  } = getIn(this, path, value, options.context);
  return schema[method](parent && parent[parentPath], Object.assign({}, options, {
    parent,
    path
  }));
};
for (const alias of ["equals", "is"]) Schema.prototype[alias] = Schema.prototype.oneOf;
for (const alias of ["not", "nope"]) Schema.prototype[alias] = Schema.prototype.notOneOf;
const isoReg = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date2) {
  const struct = parseDateStruct(date2);
  if (!struct) return Date.parse ? Date.parse(date2) : Number.NaN;
  if (struct.z === void 0 && struct.plusMinus === void 0) {
    return new Date(struct.year, struct.month, struct.day, struct.hour, struct.minute, struct.second, struct.millisecond).valueOf();
  }
  let totalMinutesOffset = 0;
  if (struct.z !== "Z" && struct.plusMinus !== void 0) {
    totalMinutesOffset = struct.hourOffset * 60 + struct.minuteOffset;
    if (struct.plusMinus === "+") totalMinutesOffset = 0 - totalMinutesOffset;
  }
  return Date.UTC(struct.year, struct.month, struct.day, struct.hour, struct.minute + totalMinutesOffset, struct.second, struct.millisecond);
}
function parseDateStruct(date2) {
  var _regexResult$7$length, _regexResult$;
  const regexResult = isoReg.exec(date2);
  if (!regexResult) return null;
  return {
    year: toNumber(regexResult[1]),
    month: toNumber(regexResult[2], 1) - 1,
    day: toNumber(regexResult[3], 1),
    hour: toNumber(regexResult[4]),
    minute: toNumber(regexResult[5]),
    second: toNumber(regexResult[6]),
    millisecond: regexResult[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      toNumber(regexResult[7].substring(0, 3))
    ) : 0,
    precision: (_regexResult$7$length = (_regexResult$ = regexResult[7]) == null ? void 0 : _regexResult$.length) != null ? _regexResult$7$length : void 0,
    z: regexResult[8] || void 0,
    plusMinus: regexResult[9] || void 0,
    hourOffset: toNumber(regexResult[10]),
    minuteOffset: toNumber(regexResult[11])
  };
}
function toNumber(str, defaultValue = 0) {
  return Number(str) || defaultValue;
}
let rEmail = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);
let rUrl = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
);
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let yearMonthDay = "^\\d{4}-\\d{2}-\\d{2}";
let hourMinuteSecond = "\\d{2}:\\d{2}:\\d{2}";
let zOrOffset = "(([+-]\\d{2}(:?\\d{2})?)|Z)";
let rIsoDateTime = new RegExp(`${yearMonthDay}T${hourMinuteSecond}(\\.\\d+)?${zOrOffset}$`);
let isTrimmed = (value) => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$6() {
  return new StringSchema();
}
class StringSchema extends Schema {
  constructor() {
    super({
      type: "string",
      check(value) {
        if (value instanceof String) value = value.valueOf();
        return typeof value === "string";
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value)) return value;
        if (Array.isArray(value)) return value;
        const strValue = value != null && value.toString ? value.toString() : value;
        if (strValue === objStringTag) return value;
        return strValue;
      });
    });
  }
  required(message2) {
    return super.required(message2).withMutation((schema) => schema.test({
      message: message2 || mixed.required,
      name: "required",
      skipAbsent: true,
      test: (value) => !!value.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((schema) => {
      schema.tests = schema.tests.filter((t) => t.OPTIONS.name !== "required");
      return schema;
    });
  }
  length(length, message2 = string.length) {
    return this.test({
      message: message2,
      name: "length",
      exclusive: true,
      params: {
        length
      },
      skipAbsent: true,
      test(value) {
        return value.length === this.resolve(length);
      }
    });
  }
  min(min, message2 = string.min) {
    return this.test({
      message: message2,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value.length >= this.resolve(min);
      }
    });
  }
  max(max, message2 = string.max) {
    return this.test({
      name: "max",
      exclusive: true,
      message: message2,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message2;
    let name;
    if (options) {
      if (typeof options === "object") {
        ({
          excludeEmptyString = false,
          message: message2,
          name
        } = options);
      } else {
        message2 = options;
      }
    }
    return this.test({
      name: name || "matches",
      message: message2 || string.matches,
      params: {
        regex
      },
      skipAbsent: true,
      test: (value) => value === "" && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message2 = string.email) {
    return this.matches(rEmail, {
      name: "email",
      message: message2,
      excludeEmptyString: true
    });
  }
  url(message2 = string.url) {
    return this.matches(rUrl, {
      name: "url",
      message: message2,
      excludeEmptyString: true
    });
  }
  uuid(message2 = string.uuid) {
    return this.matches(rUUID, {
      name: "uuid",
      message: message2,
      excludeEmptyString: false
    });
  }
  datetime(options) {
    let message2 = "";
    let allowOffset;
    let precision;
    if (options) {
      if (typeof options === "object") {
        ({
          message: message2 = "",
          allowOffset = false,
          precision = void 0
        } = options);
      } else {
        message2 = options;
      }
    }
    return this.matches(rIsoDateTime, {
      name: "datetime",
      message: message2 || string.datetime,
      excludeEmptyString: true
    }).test({
      name: "datetime_offset",
      message: message2 || string.datetime_offset,
      params: {
        allowOffset
      },
      skipAbsent: true,
      test: (value) => {
        if (!value || allowOffset) return true;
        const struct = parseDateStruct(value);
        if (!struct) return false;
        return !!struct.z;
      }
    }).test({
      name: "datetime_precision",
      message: message2 || string.datetime_precision,
      params: {
        precision
      },
      skipAbsent: true,
      test: (value) => {
        if (!value || precision == void 0) return true;
        const struct = parseDateStruct(value);
        if (!struct) return false;
        return struct.precision === precision;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((val) => val === null ? "" : val);
  }
  trim(message2 = string.trim) {
    return this.transform((val) => val != null ? val.trim() : val).test({
      message: message2,
      name: "trim",
      test: isTrimmed
    });
  }
  lowercase(message2 = string.lowercase) {
    return this.transform((value) => !isAbsent(value) ? value.toLowerCase() : value).test({
      message: message2,
      name: "string_case",
      exclusive: true,
      skipAbsent: true,
      test: (value) => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message2 = string.uppercase) {
    return this.transform((value) => !isAbsent(value) ? value.toUpperCase() : value).test({
      message: message2,
      name: "string_case",
      exclusive: true,
      skipAbsent: true,
      test: (value) => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$6.prototype = StringSchema.prototype;
let invalidDate = /* @__PURE__ */ new Date("");
let isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
class DateSchema extends Schema {
  constructor() {
    super({
      type: "date",
      check(v) {
        return isDate(v) && !isNaN(v.getTime());
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value) || value === null) return value;
        value = parseIsoDate(value);
        return !isNaN(value) ? new Date(value) : DateSchema.INVALID_DATE;
      });
    });
  }
  prepareParam(ref, name) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message2 = date.min) {
    let limit = this.prepareParam(min, "min");
    return this.test({
      message: message2,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value >= this.resolve(limit);
      }
    });
  }
  max(max, message2 = date.max) {
    let limit = this.prepareParam(max, "max");
    return this.test({
      message: message2,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = /* @__PURE__ */ new Set();
  let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
  function addNode(depPath, key) {
    let node = propertyExprExports.split(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`)) edges.push([key, node]);
  }
  for (const key of Object.keys(fields)) {
    let value = fields[key];
    nodes.add(key);
    if (Reference.isRef(value) && value.isSibling) addNode(value.path, key);
    else if (isSchema(value) && "deps" in value) value.deps.forEach((path) => addNode(path, key));
  }
  return toposort.array(Array.from(nodes), edges).reverse();
}
function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;
    if ((_err$path = err.path) != null && _err$path.includes(key)) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys2) {
  return (a, b) => {
    return findIndex(keys2, a) - findIndex(keys2, b);
  };
}
const parseJson = (value, _, ctx) => {
  if (typeof value !== "string") {
    return value;
  }
  let parsed = value;
  try {
    parsed = JSON.parse(value);
  } catch (err) {
  }
  return ctx.isType(parsed) ? parsed : value;
};
function deepPartial(schema) {
  if ("fields" in schema) {
    const partial = {};
    for (const [key, fieldSchema] of Object.entries(schema.fields)) {
      partial[key] = deepPartial(fieldSchema);
    }
    return schema.setFields(partial);
  }
  if (schema.type === "array") {
    const nextArray = schema.optional();
    if (nextArray.innerType) nextArray.innerType = deepPartial(nextArray.innerType);
    return nextArray;
  }
  if (schema.type === "tuple") {
    return schema.optional().clone({
      types: schema.spec.types.map(deepPartial)
    });
  }
  if ("optional" in schema) {
    return schema.optional();
  }
  return schema;
}
const deepHas = (obj, p) => {
  const path = [...propertyExprExports.normalizePath(p)];
  if (path.length === 1) return path[0] in obj;
  let last = path.pop();
  let parent = propertyExprExports.getter(propertyExprExports.join(path), true)(obj);
  return !!(parent && last in parent);
};
let isObject2 = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter((key) => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
function create$3(spec) {
  return new ObjectSchema(spec);
}
class ObjectSchema extends Schema {
  constructor(spec) {
    super({
      type: "object",
      check(value) {
        return isObject2(value) || typeof value === "function";
      }
    });
    this.fields = /* @__PURE__ */ Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);
    if (value === void 0) return this.getDefault(options);
    if (!this._typeCheck(value)) return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = [].concat(this._nodes, Object.keys(value).filter((v) => !this._nodes.includes(v)));
    let intermediateValue = {};
    let innerOptions = Object.assign({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field = fields[prop];
      let exists = prop in value;
      if (field) {
        let fieldValue;
        let inputValue = value[prop];
        innerOptions.path = (options.path ? `${options.path}.` : "") + prop;
        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = field instanceof Schema ? field.spec : void 0;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec != null && fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ? (
          // TODO: use _cast, this is double resolving
          field.cast(value[prop], innerOptions)
        ) : value[prop];
        if (fieldValue !== void 0) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (exists !== prop in intermediateValue || intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, options = {}, panic, next) {
    let {
      from = [],
      originalValue = _value,
      recursive = this.spec.recursive
    } = options;
    options.from = [{
      schema: this,
      value: originalValue
    }, ...from];
    options.__validating = true;
    options.originalValue = originalValue;
    super._validate(_value, options, panic, (objectErrors, value) => {
      if (!recursive || !isObject2(value)) {
        next(objectErrors, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = [];
      for (let key of this._nodes) {
        let field = this.fields[key];
        if (!field || Reference.isRef(field)) {
          continue;
        }
        tests.push(field.asNestedTest({
          options,
          key,
          parent: value,
          parentPath: options.path,
          originalParent: originalValue
        }));
      }
      this.runTests({
        tests,
        value,
        originalValue,
        options
      }, panic, (fieldErrors) => {
        next(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
      });
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    next.fields = Object.assign({}, this.fields);
    next._nodes = this._nodes;
    next._excludedEdges = this._excludedEdges;
    next._sortErrors = this._sortErrors;
    return next;
  }
  concat(schema) {
    let next = super.concat(schema);
    let nextFields = next.fields;
    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];
      nextFields[field] = target === void 0 ? schemaOrRef : target;
    }
    return next.withMutation((s) => (
      // XXX: excludes here is wrong
      s.setFields(nextFields, [...this._excludedEdges, ...schema._excludedEdges])
    ));
  }
  _getDefault(options) {
    if ("default" in this.spec) {
      return super._getDefault(options);
    }
    if (!this._nodes.length) {
      return void 0;
    }
    let dft = {};
    this._nodes.forEach((key) => {
      var _innerOptions;
      const field = this.fields[key];
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      dft[key] = field && "getDefault" in field ? field.getDefault(innerOptions) : void 0;
    });
    return dft;
  }
  setFields(shape, excludedEdges) {
    let next = this.clone();
    next.fields = shape;
    next._nodes = sortFields(shape, excludedEdges);
    next._sortErrors = sortByKeyOrder(Object.keys(shape));
    if (excludedEdges) next._excludedEdges = excludedEdges;
    return next;
  }
  shape(additions, excludes = []) {
    return this.clone().withMutation((next) => {
      let edges = next._excludedEdges;
      if (excludes.length) {
        if (!Array.isArray(excludes[0])) excludes = [excludes];
        edges = [...next._excludedEdges, ...excludes];
      }
      return next.setFields(Object.assign(next.fields, additions), edges);
    });
  }
  partial() {
    const partial = {};
    for (const [key, schema] of Object.entries(this.fields)) {
      partial[key] = "optional" in schema && schema.optional instanceof Function ? schema.optional() : schema;
    }
    return this.setFields(partial);
  }
  deepPartial() {
    const next = deepPartial(this);
    return next;
  }
  pick(keys2) {
    const picked = {};
    for (const key of keys2) {
      if (this.fields[key]) picked[key] = this.fields[key];
    }
    return this.setFields(picked, this._excludedEdges.filter(([a, b]) => keys2.includes(a) && keys2.includes(b)));
  }
  omit(keys2) {
    const remaining = [];
    for (const key of Object.keys(this.fields)) {
      if (keys2.includes(key)) continue;
      remaining.push(key);
    }
    return this.pick(remaining);
  }
  from(from, to, alias) {
    let fromGetter = propertyExprExports.getter(from, true);
    return this.transform((obj) => {
      if (!obj) return obj;
      let newObj = obj;
      if (deepHas(obj, from)) {
        newObj = Object.assign({}, obj);
        if (!alias) delete newObj[from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(parseJson);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(message2) {
    return this.test({
      name: "exact",
      exclusive: true,
      message: message2 || object.exact,
      test(value) {
        if (value == null) return true;
        const unknownKeys = unknown(this.schema, value);
        return unknownKeys.length === 0 || this.createError({
          params: {
            properties: unknownKeys.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: true
    });
  }
  noUnknown(noAllow = true, message2 = object.noUnknown) {
    if (typeof noAllow !== "boolean") {
      message2 = noAllow;
      noAllow = true;
    }
    let next = this.test({
      name: "noUnknown",
      exclusive: true,
      message: message2,
      test(value) {
        if (value == null) return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(", ")
          }
        });
      }
    });
    next.spec.noUnknown = noAllow;
    return next;
  }
  unknown(allow = true, message2 = object.noUnknown) {
    return this.noUnknown(!allow, message2);
  }
  transformKeys(fn) {
    return this.transform((obj) => {
      if (!obj) return obj;
      const result = {};
      for (const key of Object.keys(obj)) result[fn(key)] = obj[key];
      return result;
    });
  }
  camelCase() {
    return this.transformKeys(tinyCaseExports.camelCase);
  }
  snakeCase() {
    return this.transformKeys(tinyCaseExports.snakeCase);
  }
  constantCase() {
    return this.transformKeys((key) => tinyCaseExports.snakeCase(key).toUpperCase());
  }
  describe(options) {
    const next = (options ? this.resolve(options) : this).clone();
    const base = super.describe(options);
    base.fields = {};
    for (const [key, value] of Object.entries(next.fields)) {
      var _innerOptions2;
      let innerOptions = options;
      if ((_innerOptions2 = innerOptions) != null && _innerOptions2.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      base.fields[key] = value.describe(innerOptions);
    }
    return base;
  }
}
create$3.prototype = ObjectSchema.prototype;
function _extends$7() {
  return _extends$7 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$7.apply(null, arguments);
}
var WindowMaximizeIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$7({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  }));
}));
WindowMaximizeIcon.displayName = "WindowMaximizeIcon";
function _extends$6() {
  return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$6.apply(null, arguments);
}
var WindowMinimizeIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$6({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  }));
}));
WindowMinimizeIcon.displayName = "WindowMinimizeIcon";
function _extends$5() {
  return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$5.apply(null, arguments);
}
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function _arrayLikeToArray$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$2(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$2(r);
}
function _iterableToArray$2(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
  }
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$2(r) {
  return _arrayWithoutHoles$2(r) || _iterableToArray$2(r) || _unsupportedIterableToArray$2(r) || _nonIterableSpread$2();
}
function toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$2(t) {
  var i = toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _defineProperty$2(e, r, t) {
  return (r = toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayWithHoles$2(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$2(r, e) {
  return _arrayWithHoles$2(r) || _iterableToArrayLimit$2(r, e) || _unsupportedIterableToArray$2(r, e) || _nonIterableRest$2();
}
var styles$1 = "";
var FocusTrapBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "FocusTrap",
    children: void 0
  },
  css: {
    styles: styles$1
  },
  getProps: function getProps5(props) {
    return ObjectUtils.getMergedProps(props, FocusTrapBase.defaultProps);
  },
  getOtherProps: function getOtherProps5(props) {
    return ObjectUtils.getDiffProps(props, FocusTrapBase.defaultProps);
  }
});
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var FocusTrap = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var targetRef = React.useRef(null);
  var firstFocusableElementRef = React.useRef(null);
  var lastFocusableElementRef = React.useRef(null);
  var context = React.useContext(PrimeReactContext);
  var props = FocusTrapBase.getProps(inProps, context);
  var metaData = {
    props
  };
  useStyle(FocusTrapBase.css.styles, {
    name: "focustrap"
  });
  var _FocusTrapBase$setMet = FocusTrapBase.setMetaData(_objectSpread$2({}, metaData));
  _FocusTrapBase$setMet.ptm;
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getInk: function getInk() {
        return firstFocusableElementRef.current;
      },
      getTarget: function getTarget2() {
        return targetRef.current;
      }
    };
  });
  useMountEffect(function() {
    if (!props.disabled) {
      targetRef.current = getTarget();
      setAutoFocus(targetRef.current);
    }
  });
  var getTarget = function getTarget2() {
    return firstFocusableElementRef.current && firstFocusableElementRef.current.parentElement;
  };
  var setAutoFocus = function setAutoFocus2(target) {
    var _ref = props || {}, _ref$autoFocusSelecto = _ref.autoFocusSelector, autoFocusSelector = _ref$autoFocusSelecto === void 0 ? "" : _ref$autoFocusSelecto, _ref$firstFocusableSe = _ref.firstFocusableSelector, firstFocusableSelector = _ref$firstFocusableSe === void 0 ? "" : _ref$firstFocusableSe, _ref$autoFocus = _ref.autoFocus, autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus;
    var defaultAutoFocusSelector = "".concat(getComputedSelector(autoFocusSelector));
    var computedAutoFocusSelector = "[autofocus]".concat(defaultAutoFocusSelector, ", [data-pc-autofocus='true']").concat(defaultAutoFocusSelector);
    var focusableElement = DomHandler.getFirstFocusableElement(target, computedAutoFocusSelector);
    autoFocus && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(target, getComputedSelector(firstFocusableSelector)));
    DomHandler.focus(focusableElement);
  };
  var getComputedSelector = function getComputedSelector2(selector) {
    return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(selector !== null && selector !== void 0 ? selector : "");
  };
  var onFirstHiddenElementFocus = function onFirstHiddenElementFocus2(event) {
    var _targetRef$current;
    var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
    var focusableElement = relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement || !((_targetRef$current = targetRef.current) !== null && _targetRef$current !== void 0 && _targetRef$current.contains(relatedTarget)) ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_lasthiddenfocusableelement;
    DomHandler.focus(focusableElement);
  };
  var onLastHiddenElementFocus = function onLastHiddenElementFocus2(event) {
    var _targetRef$current2;
    var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
    var focusableElement = relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement || !((_targetRef$current2 = targetRef.current) !== null && _targetRef$current2 !== void 0 && _targetRef$current2.contains(relatedTarget)) ? DomHandler.getLastFocusableElement(currentTarget.parentElement, getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_firsthiddenfocusableelement;
    DomHandler.focus(focusableElement);
  };
  var createHiddenFocusableElements = function createHiddenFocusableElements2() {
    var _ref2 = props || {}, _ref2$tabIndex = _ref2.tabIndex, tabIndex = _ref2$tabIndex === void 0 ? 0 : _ref2$tabIndex;
    var createFocusableElement = function createFocusableElement2(inRef, onFocus, section) {
      return /* @__PURE__ */ React.createElement("span", {
        ref: inRef,
        className: "p-hidden-accessible p-hidden-focusable",
        tabIndex,
        role: "presentation",
        "aria-hidden": true,
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus,
        "data-pc-section": section
      });
    };
    var firstFocusableElement = createFocusableElement(firstFocusableElementRef, onFirstHiddenElementFocus, "firstfocusableelement");
    var lastFocusableElement = createFocusableElement(lastFocusableElementRef, onLastHiddenElementFocus, "lastfocusableelement");
    if (firstFocusableElementRef.current && lastFocusableElementRef.current) {
      firstFocusableElementRef.current.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElementRef.current;
      lastFocusableElementRef.current.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElementRef.current;
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, firstFocusableElement, props.children, lastFocusableElement);
  };
  return createHiddenFocusableElements();
}));
var FocusTrap$1 = FocusTrap;
function ownKeys$1$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1$1(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var classes$2 = {
  closeButtonIcon: "p-dialog-header-close-icon",
  closeButton: "p-dialog-header-icon p-dialog-header-close p-link",
  maximizableIcon: "p-dialog-header-maximize-icon",
  maximizableButton: "p-dialog-header-icon p-dialog-header-maximize p-link",
  header: function header(_ref) {
    var props = _ref.props;
    return classNames("p-dialog-header", props.headerClassName);
  },
  headerTitle: "p-dialog-title",
  headerIcons: "p-dialog-header-icons",
  content: function content(_ref2) {
    var props = _ref2.props;
    return classNames("p-dialog-content", props.contentClassName);
  },
  footer: function footer(_ref3) {
    var props = _ref3.props;
    return classNames("p-dialog-footer", props.footerClassName);
  },
  mask: function mask(_ref4) {
    var props = _ref4.props, maskVisibleState = _ref4.maskVisibleState;
    var positions = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"];
    var pos = positions.find(function(item2) {
      return item2 === props.position || item2.replace("-", "") === props.position;
    });
    return classNames("p-dialog-mask", pos ? "p-dialog-".concat(pos) : "", {
      "p-component-overlay p-component-overlay-enter": props.modal,
      "p-dialog-visible": maskVisibleState,
      "p-dialog-draggable": props.draggable,
      "p-dialog-resizable": props.resizable
    }, props.maskClassName);
  },
  root: function root9(_ref5) {
    var props = _ref5.props, maximized = _ref5.maximized, context = _ref5.context;
    return classNames("p-dialog p-component", {
      "p-dialog-rtl": props.rtl,
      "p-dialog-maximized": maximized,
      "p-dialog-default": !maximized,
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact2.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact2.ripple === false
    });
  },
  transition: "p-dialog"
};
var styles$2 = "\n@layer primereact {\n    .p-dialog-mask {\n        background-color: transparent;\n        transition-property: background-color;\n    }\n\n    .p-dialog-visible {\n        display: flex;\n    }\n\n    .p-dialog-mask.p-component-overlay {\n        pointer-events: auto;\n    }\n\n    .p-dialog {\n        display: flex;\n        flex-direction: column;\n        pointer-events: auto;\n        max-height: 90%;\n        transform: scale(1);\n        position: relative;\n    }\n\n    .p-dialog-content {\n        overflow-y: auto;\n        flex-grow: 1;\n    }\n\n    .p-dialog-header {\n        display: flex;\n        align-items: center;\n        flex-shrink: 0;\n    }\n\n    .p-dialog-footer {\n        flex-shrink: 0;\n    }\n\n    .p-dialog .p-dialog-header-icons {\n        display: flex;\n        align-items: center;\n        align-self: flex-start;\n        flex-shrink: 0;\n    }\n\n    .p-dialog .p-dialog-header-icon {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n    }\n\n    .p-dialog .p-dialog-title {\n        flex-grow: 1;\n    }\n\n    /* Fluid */\n    .p-fluid .p-dialog-footer .p-button {\n        width: auto;\n    }\n\n    /* Animation */\n    /* Center */\n    .p-dialog-enter {\n        opacity: 0;\n        transform: scale(0.7);\n    }\n\n    .p-dialog-enter-active {\n        opacity: 1;\n        transform: scale(1);\n        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-dialog-enter-done {\n        transform: none;\n    }\n\n    .p-dialog-exit-active {\n        opacity: 0;\n        transform: scale(0.7);\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    /* Top, Bottom, Left, Right, Top* and Bottom* */\n    .p-dialog-top .p-dialog,\n    .p-dialog-bottom .p-dialog,\n    .p-dialog-left .p-dialog,\n    .p-dialog-right .p-dialog,\n    .p-dialog-top-left .p-dialog,\n    .p-dialog-top-right .p-dialog,\n    .p-dialog-bottom-left .p-dialog,\n    .p-dialog-bottom-right .p-dialog {\n        margin: 0.75em;\n    }\n\n    .p-dialog-top .p-dialog-enter,\n    .p-dialog-top .p-dialog-exit-active {\n        transform: translate3d(0px, -100%, 0px);\n    }\n\n    .p-dialog-bottom .p-dialog-enter,\n    .p-dialog-bottom .p-dialog-exit-active {\n        transform: translate3d(0px, 100%, 0px);\n    }\n\n    .p-dialog-left .p-dialog-enter,\n    .p-dialog-left .p-dialog-exit-active,\n    .p-dialog-top-left .p-dialog-enter,\n    .p-dialog-top-left .p-dialog-exit-active,\n    .p-dialog-bottom-left .p-dialog-enter,\n    .p-dialog-bottom-left .p-dialog-exit-active {\n        transform: translate3d(-100%, 0px, 0px);\n    }\n\n    .p-dialog-right .p-dialog-enter,\n    .p-dialog-right .p-dialog-exit-active,\n    .p-dialog-top-right .p-dialog-enter,\n    .p-dialog-top-right .p-dialog-exit-active,\n    .p-dialog-bottom-right .p-dialog-enter,\n    .p-dialog-bottom-right .p-dialog-exit-active {\n        transform: translate3d(100%, 0px, 0px);\n    }\n\n    .p-dialog-top .p-dialog-enter-active,\n    .p-dialog-bottom .p-dialog-enter-active,\n    .p-dialog-left .p-dialog-enter-active,\n    .p-dialog-top-left .p-dialog-enter-active,\n    .p-dialog-bottom-left .p-dialog-enter-active,\n    .p-dialog-right .p-dialog-enter-active,\n    .p-dialog-top-right .p-dialog-enter-active,\n    .p-dialog-bottom-right .p-dialog-enter-active {\n        transform: translate3d(0px, 0px, 0px);\n        transition: all 0.3s ease-out;\n    }\n\n    .p-dialog-top .p-dialog-exit-active,\n    .p-dialog-bottom .p-dialog-exit-active,\n    .p-dialog-left .p-dialog-exit-active,\n    .p-dialog-top-left .p-dialog-exit-active,\n    .p-dialog-bottom-left .p-dialog-exit-active,\n    .p-dialog-right .p-dialog-exit-active,\n    .p-dialog-top-right .p-dialog-exit-active,\n    .p-dialog-bottom-right .p-dialog-exit-active {\n        transition: all 0.3s ease-out;\n    }\n\n    /* Maximize */\n    .p-dialog-maximized {\n        transition: none;\n        transform: none;\n        margin: 0;\n        width: 100vw !important;\n        height: 100vh !important;\n        max-height: 100%;\n        top: 0px !important;\n        left: 0px !important;\n    }\n\n    .p-dialog-maximized .p-dialog-content {\n        flex-grow: 1;\n    }\n\n    .p-confirm-dialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n    }\n\n    /* Resizable */\n    .p-dialog .p-resizable-handle {\n        position: absolute;\n        font-size: 0.1px;\n        display: block;\n        cursor: se-resize;\n        width: 12px;\n        height: 12px;\n        right: 1px;\n        bottom: 1px;\n    }\n\n    .p-dialog-draggable .p-dialog-header {\n        cursor: move;\n    }\n}\n";
var inlineStyles$1 = {
  mask: function mask2(_ref6) {
    var props = _ref6.props;
    return _objectSpread$1$1({
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: props.position === "left" || props.position === "top-left" || props.position === "bottom-left" ? "flex-start" : props.position === "right" || props.position === "top-right" || props.position === "bottom-right" ? "flex-end" : "center",
      alignItems: props.position === "top" || props.position === "top-left" || props.position === "top-right" ? "flex-start" : props.position === "bottom" || props.position === "bottom-left" || props.position === "bottom-right" ? "flex-end" : "center",
      pointerEvents: !props.modal && "none"
    }, props.maskStyle);
  }
};
var DialogBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Dialog",
    __parentMetadata: null,
    appendTo: null,
    ariaCloseIconLabel: null,
    baseZIndex: 0,
    blockScroll: false,
    breakpoints: null,
    className: null,
    closable: true,
    closeIcon: null,
    closeOnEscape: true,
    content: null,
    contentClassName: null,
    contentStyle: null,
    dismissableMask: false,
    draggable: true,
    focusOnShow: true,
    footer: null,
    footerClassName: null,
    header: null,
    headerClassName: null,
    headerStyle: null,
    icons: null,
    id: null,
    keepInViewport: true,
    maskClassName: null,
    maskStyle: null,
    maximizable: false,
    maximizeIcon: null,
    maximized: false,
    minX: 0,
    minY: 0,
    minimizeIcon: null,
    modal: true,
    onClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragStart: null,
    onHide: null,
    onMaskClick: null,
    onMaximize: null,
    onResize: null,
    onResizeEnd: null,
    onResizeStart: null,
    onShow: null,
    position: "center",
    resizable: true,
    rtl: false,
    showHeader: true,
    style: null,
    transitionOptions: null,
    visible: false,
    children: void 0
  },
  css: {
    classes: classes$2,
    styles: styles$2,
    inlineStyles: inlineStyles$1
  }
});
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Dialog = /* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = DialogBase.getProps(inProps, context);
  var uniqueId = props.id ? props.id : UniqueComponentId();
  var _React$useState = React__namespace.useState(uniqueId), _React$useState2 = _slicedToArray$2(_React$useState, 2), idState = _React$useState2[0];
  _React$useState2[1];
  var _React$useState3 = React__namespace.useState(false), _React$useState4 = _slicedToArray$2(_React$useState3, 2), maskVisibleState = _React$useState4[0], setMaskVisibleState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(false), _React$useState6 = _slicedToArray$2(_React$useState5, 2), visibleState = _React$useState6[0], setVisibleState = _React$useState6[1];
  var _React$useState7 = React__namespace.useState(props.maximized), _React$useState8 = _slicedToArray$2(_React$useState7, 2), maximizedState = _React$useState8[0], setMaximizedState = _React$useState8[1];
  var dialogRef = React__namespace.useRef(null);
  var maskRef = React__namespace.useRef(null);
  var pointerRef = React__namespace.useRef(null);
  var contentRef = React__namespace.useRef(null);
  var headerRef = React__namespace.useRef(null);
  var footerRef = React__namespace.useRef(null);
  var closeRef = React__namespace.useRef(null);
  var dragging = React__namespace.useRef(false);
  var resizing = React__namespace.useRef(false);
  var lastPageX = React__namespace.useRef(null);
  var lastPageY = React__namespace.useRef(null);
  var styleElement = React__namespace.useRef(null);
  var attributeSelector = React__namespace.useRef(uniqueId);
  var focusElementOnHide = React__namespace.useRef(null);
  var maximized = props.onMaximize ? props.maximized : maximizedState;
  var shouldBlockScroll = visibleState && (props.blockScroll || props.maximizable && maximized);
  var isCloseOnEscape = props.closable && props.closeOnEscape && visibleState;
  var displayOrder = useDisplayOrder("dialog", isCloseOnEscape);
  var _DialogBase$setMetaDa = DialogBase.setMetaData(_objectSpread$3(_objectSpread$3({
    props
  }, props.__parentMetadata), {}, {
    state: {
      id: idState,
      maximized,
      containerVisible: maskVisibleState
    }
  })), ptm = _DialogBase$setMetaDa.ptm, cx = _DialogBase$setMetaDa.cx, sx = _DialogBase$setMetaDa.sx, isUnstyled = _DialogBase$setMetaDa.isUnstyled;
  useHandleStyle(DialogBase.css.styles, isUnstyled, {
    name: "dialog"
  });
  useGlobalOnEscapeKey({
    callback: function callback(event) {
      onClose(event);
    },
    when: isCloseOnEscape && displayOrder,
    priority: [ESC_KEY_HANDLING_PRIORITIES.DIALOG, displayOrder]
  });
  var _useEventListener = useEventListener({
    type: "mousemove",
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onResize(event);
    }
  }), _useEventListener2 = _slicedToArray$2(_useEventListener, 2), bindDocumentResizeListener = _useEventListener2[0], unbindDocumentResizeListener = _useEventListener2[1];
  var _useEventListener3 = useEventListener({
    type: "mouseup",
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onResizeEnd(event);
    }
  }), _useEventListener4 = _slicedToArray$2(_useEventListener3, 2), bindDocumentResizeEndListener = _useEventListener4[0], unbindDocumentResizEndListener = _useEventListener4[1];
  var _useEventListener5 = useEventListener({
    type: "mousemove",
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onDrag(event);
    }
  }), _useEventListener6 = _slicedToArray$2(_useEventListener5, 2), bindDocumentDragListener = _useEventListener6[0], unbindDocumentDragListener = _useEventListener6[1];
  var _useEventListener7 = useEventListener({
    type: "mouseup",
    target: function target() {
      return window.document;
    },
    listener: function listener(event) {
      return onDragEnd(event);
    }
  }), _useEventListener8 = _slicedToArray$2(_useEventListener7, 2), bindDocumentDragEndListener = _useEventListener8[0], unbindDocumentDragEndListener = _useEventListener8[1];
  var onClose = function onClose2(event) {
    props.onHide(event);
    event.preventDefault();
  };
  var focus = function focus2() {
    var activeElement = document.activeElement;
    var isActiveElementInDialog = activeElement && dialogRef.current && dialogRef.current.contains(activeElement);
    if (!isActiveElementInDialog && props.closable && props.showHeader && closeRef.current) {
      closeRef.current.focus();
    }
  };
  var onDialogPointerDown = function onDialogPointerDown2(event) {
    pointerRef.current = event.target;
    props.onPointerDown && props.onPointerDown(event);
  };
  var onMaskPointerUp = function onMaskPointerUp2(event) {
    if (props.dismissableMask && props.modal && maskRef.current === event.target && !pointerRef.current) {
      onClose(event);
    }
    props.onMaskClick && props.onMaskClick(event);
    pointerRef.current = null;
  };
  var toggleMaximize = function toggleMaximize2(event) {
    if (props.onMaximize) {
      props.onMaximize({
        originalEvent: event,
        maximized: !maximized
      });
    } else {
      setMaximizedState(function(prevMaximized) {
        return !prevMaximized;
      });
    }
    event.preventDefault();
  };
  var onDragStart = function onDragStart2(event) {
    if (DomHandler.hasClass(event.target, "p-dialog-header-icon") || DomHandler.hasClass(event.target.parentElement, "p-dialog-header-icon")) {
      return;
    }
    if (props.draggable) {
      dragging.current = true;
      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      DomHandler.addClass(document.body, "p-unselectable-text");
      props.onDragStart && props.onDragStart(event);
    }
  };
  var onDrag = function onDrag2(event) {
    if (dragging.current) {
      var width = DomHandler.getOuterWidth(dialogRef.current);
      var height = DomHandler.getOuterHeight(dialogRef.current);
      var deltaX = event.pageX - lastPageX.current;
      var deltaY = event.pageY - lastPageY.current;
      var offset = dialogRef.current.getBoundingClientRect();
      var leftPos = offset.left + deltaX;
      var topPos = offset.top + deltaY;
      var viewport = DomHandler.getViewport();
      var computedStyle = getComputedStyle(dialogRef.current);
      var leftMargin = parseFloat(computedStyle.marginLeft);
      var topMargin = parseFloat(computedStyle.marginTop);
      dialogRef.current.style.position = "fixed";
      if (props.keepInViewport) {
        if (leftPos >= props.minX && leftPos + width < viewport.width) {
          lastPageX.current = event.pageX;
          dialogRef.current.style.left = leftPos - leftMargin + "px";
        }
        if (topPos >= props.minY && topPos + height < viewport.height) {
          lastPageY.current = event.pageY;
          dialogRef.current.style.top = topPos - topMargin + "px";
        }
      } else {
        lastPageX.current = event.pageX;
        dialogRef.current.style.left = leftPos - leftMargin + "px";
        lastPageY.current = event.pageY;
        dialogRef.current.style.top = topPos - topMargin + "px";
      }
      props.onDrag && props.onDrag(event);
    }
  };
  var onDragEnd = function onDragEnd2(event) {
    if (dragging.current) {
      dragging.current = false;
      DomHandler.removeClass(document.body, "p-unselectable-text");
      props.onDragEnd && props.onDragEnd(event);
    }
  };
  var onResizeStart = function onResizeStart2(event) {
    if (props.resizable) {
      resizing.current = true;
      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      DomHandler.addClass(document.body, "p-unselectable-text");
      props.onResizeStart && props.onResizeStart(event);
    }
  };
  var convertToPx = function convertToPx2(value, property, viewport) {
    !viewport && (viewport = DomHandler.getViewport());
    var val = parseInt(value);
    if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(value)) {
      return val * (viewport[property] / 100);
    }
    return val;
  };
  var onResize = function onResize2(event) {
    if (resizing.current) {
      var deltaX = event.pageX - lastPageX.current;
      var deltaY = event.pageY - lastPageY.current;
      var width = DomHandler.getOuterWidth(dialogRef.current);
      var height = DomHandler.getOuterHeight(dialogRef.current);
      var offset = dialogRef.current.getBoundingClientRect();
      var viewport = DomHandler.getViewport();
      var hasBeenDragged = !parseInt(dialogRef.current.style.top) || !parseInt(dialogRef.current.style.left);
      var minWidth = convertToPx(dialogRef.current.style.minWidth, "width", viewport);
      var minHeight = convertToPx(dialogRef.current.style.minHeight, "height", viewport);
      var newWidth = width + deltaX;
      var newHeight = height + deltaY;
      if (hasBeenDragged) {
        newWidth = newWidth + deltaX;
        newHeight = newHeight + deltaY;
      }
      if ((!minWidth || newWidth > minWidth) && offset.left + newWidth < viewport.width) {
        dialogRef.current.style.width = newWidth + "px";
      }
      if ((!minHeight || newHeight > minHeight) && offset.top + newHeight < viewport.height) {
        dialogRef.current.style.height = newHeight + "px";
      }
      lastPageX.current = event.pageX;
      lastPageY.current = event.pageY;
      props.onResize && props.onResize(event);
    }
  };
  var onResizeEnd = function onResizeEnd2(event) {
    if (resizing.current) {
      resizing.current = false;
      DomHandler.removeClass(document.body, "p-unselectable-text");
      props.onResizeEnd && props.onResizeEnd(event);
    }
  };
  var resetPosition = function resetPosition2() {
    dialogRef.current.style.position = "";
    dialogRef.current.style.left = "";
    dialogRef.current.style.top = "";
    dialogRef.current.style.margin = "";
  };
  var onEnter = function onEnter2() {
    dialogRef.current.setAttribute(attributeSelector.current, "");
  };
  var onEntered = function onEntered2() {
    props.onShow && props.onShow();
    if (props.focusOnShow) {
      focus();
    }
    enableDocumentSettings();
  };
  var onExiting = function onExiting2() {
    if (props.modal) {
      !isUnstyled() && DomHandler.addClass(maskRef.current, "p-component-overlay-leave");
    }
  };
  var onExited = function onExited2() {
    dragging.current = false;
    ZIndexUtils.clear(maskRef.current);
    setMaskVisibleState(false);
    disableDocumentSettings();
    DomHandler.focus(focusElementOnHide.current);
    focusElementOnHide.current = null;
  };
  var enableDocumentSettings = function enableDocumentSettings2() {
    bindGlobalListeners();
  };
  var disableDocumentSettings = function disableDocumentSettings2() {
    unbindGlobalListeners();
  };
  var updateScrollBlocker = function updateScrollBlocker2() {
    var isThereAnyDialogThatBlocksScrolling = document.primeDialogParams && document.primeDialogParams.some(function(i) {
      return i.hasBlockScroll;
    });
    if (isThereAnyDialogThatBlocksScrolling) {
      DomHandler.blockBodyScroll();
    } else {
      DomHandler.unblockBodyScroll();
    }
  };
  var updateGlobalDialogsRegistry = function updateGlobalDialogsRegistry2(isMounted) {
    if (isMounted && visibleState) {
      var newParam = {
        id: idState,
        hasBlockScroll: shouldBlockScroll
      };
      if (!document.primeDialogParams) {
        document.primeDialogParams = [];
      }
      var currentDialogIndexInRegistry = document.primeDialogParams.findIndex(function(dialogInRegistry) {
        return dialogInRegistry.id === idState;
      });
      if (currentDialogIndexInRegistry === -1) {
        document.primeDialogParams = [].concat(_toConsumableArray$2(document.primeDialogParams), [newParam]);
      } else {
        document.primeDialogParams = document.primeDialogParams.toSpliced(currentDialogIndexInRegistry, 1, newParam);
      }
    } else {
      document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(param) {
        return param.id !== idState;
      });
    }
    updateScrollBlocker();
  };
  var bindGlobalListeners = function bindGlobalListeners2() {
    if (props.draggable) {
      bindDocumentDragListener();
      bindDocumentDragEndListener();
    }
    if (props.resizable) {
      bindDocumentResizeListener();
      bindDocumentResizeEndListener();
    }
  };
  var unbindGlobalListeners = function unbindGlobalListeners2() {
    unbindDocumentDragListener();
    unbindDocumentDragEndListener();
    unbindDocumentResizeListener();
    unbindDocumentResizEndListener();
  };
  var createStyle = function createStyle2() {
    styleElement.current = DomHandler.createInlineStyle(context && context.nonce || PrimeReact2.nonce, context && context.styleContainer);
    var innerHTML = "";
    for (var breakpoint in props.breakpoints) {
      innerHTML = innerHTML + "\n                @media screen and (max-width: ".concat(breakpoint, ') {\n                     [data-pc-name="dialog"][').concat(attributeSelector.current, "] {\n                        width: ").concat(props.breakpoints[breakpoint], " !important;\n                    }\n                }\n            ");
    }
    styleElement.current.innerHTML = innerHTML;
  };
  var destroyStyle = function destroyStyle2() {
    styleElement.current = DomHandler.removeInlineStyle(styleElement.current);
  };
  useMountEffect(function() {
    updateGlobalDialogsRegistry(true);
    if (props.visible) {
      setMaskVisibleState(true);
    }
  });
  React__namespace.useEffect(function() {
    if (props.breakpoints) {
      createStyle();
    }
    return function() {
      destroyStyle();
    };
  }, [props.breakpoints]);
  useUpdateEffect(function() {
    if (props.visible && !maskVisibleState) {
      setMaskVisibleState(true);
    }
    if (props.visible !== visibleState && maskVisibleState) {
      setVisibleState(props.visible);
    }
    if (props.visible) {
      focusElementOnHide.current = document.activeElement;
    }
  }, [props.visible, maskVisibleState]);
  useUpdateEffect(function() {
    if (maskVisibleState) {
      ZIndexUtils.set("modal", maskRef.current, context && context.autoZIndex || PrimeReact2.autoZIndex, props.baseZIndex || context && context.zIndex.modal || PrimeReact2.zIndex.modal);
      setVisibleState(true);
    }
  }, [maskVisibleState]);
  useUpdateEffect(function() {
    updateGlobalDialogsRegistry(true);
  }, [shouldBlockScroll, visibleState]);
  useUnmountEffect(function() {
    disableDocumentSettings();
    updateGlobalDialogsRegistry(false);
    DomHandler.removeInlineStyle(styleElement.current);
    ZIndexUtils.clear(maskRef.current);
  });
  React__namespace.useImperativeHandle(ref, function() {
    return {
      props,
      resetPosition,
      getElement: function getElement() {
        return dialogRef.current;
      },
      getMask: function getMask() {
        return maskRef.current;
      },
      getContent: function getContent() {
        return contentRef.current;
      },
      getHeader: function getHeader() {
        return headerRef.current;
      },
      getFooter: function getFooter() {
        return footerRef.current;
      },
      getCloseButton: function getCloseButton() {
        return closeRef.current;
      }
    };
  });
  var createCloseIcon = function createCloseIcon2() {
    if (props.closable) {
      var labelAria = props.ariaCloseIconLabel || ariaLabel("close");
      var closeButtonIconProps = mergeProps2({
        className: cx("closeButtonIcon"),
        "aria-hidden": true
      }, ptm("closeButtonIcon"));
      var icon2 = props.closeIcon || /* @__PURE__ */ React__namespace.createElement(TimesIcon, closeButtonIconProps);
      var headerCloseIcon = IconUtils.getJSXIcon(icon2, _objectSpread$3({}, closeButtonIconProps), {
        props
      });
      var closeButtonProps = mergeProps2({
        ref: closeRef,
        type: "button",
        className: cx("closeButton"),
        "aria-label": labelAria,
        onClick: onClose,
        onKeyDown: function onKeyDown(ev) {
          if (ev.key !== "Escape") {
            ev.stopPropagation();
          }
        }
      }, ptm("closeButton"));
      return /* @__PURE__ */ React__namespace.createElement("button", closeButtonProps, headerCloseIcon, /* @__PURE__ */ React__namespace.createElement(Ripple, null));
    }
    return null;
  };
  var createMaximizeIcon = function createMaximizeIcon2() {
    var icon2;
    var maximizableIconProps = mergeProps2({
      className: cx("maximizableIcon")
    }, ptm("maximizableIcon"));
    if (!maximized) {
      icon2 = props.maximizeIcon || /* @__PURE__ */ React__namespace.createElement(WindowMaximizeIcon, maximizableIconProps);
    } else {
      icon2 = props.minimizeIcon || /* @__PURE__ */ React__namespace.createElement(WindowMinimizeIcon, maximizableIconProps);
    }
    var toggleIcon = IconUtils.getJSXIcon(icon2, maximizableIconProps, {
      props
    });
    if (props.maximizable) {
      var maximizableButtonProps = mergeProps2({
        type: "button",
        className: cx("maximizableButton"),
        onClick: toggleMaximize
      }, ptm("maximizableButton"));
      return /* @__PURE__ */ React__namespace.createElement("button", maximizableButtonProps, toggleIcon, /* @__PURE__ */ React__namespace.createElement(Ripple, null));
    }
    return null;
  };
  var createHeader = function createHeader2() {
    if (props.showHeader) {
      var closeIcon = createCloseIcon();
      var maximizeIcon = createMaximizeIcon();
      var icons = ObjectUtils.getJSXElement(props.icons, props);
      var header2 = ObjectUtils.getJSXElement(props.header, props);
      var headerId = idState + "_header";
      var headerProps = mergeProps2({
        ref: headerRef,
        style: props.headerStyle,
        className: cx("header"),
        onMouseDown: onDragStart
      }, ptm("header"));
      var headerTitleProps = mergeProps2({
        id: headerId,
        className: cx("headerTitle")
      }, ptm("headerTitle"));
      var headerIconsProps = mergeProps2({
        className: cx("headerIcons")
      }, ptm("headerIcons"));
      return /* @__PURE__ */ React__namespace.createElement("div", headerProps, /* @__PURE__ */ React__namespace.createElement("div", headerTitleProps, header2), /* @__PURE__ */ React__namespace.createElement("div", headerIconsProps, icons, maximizeIcon, closeIcon));
    }
    return null;
  };
  var createContent = function createContent2() {
    var contentId = idState + "_content";
    var contentProps = mergeProps2({
      id: contentId,
      ref: contentRef,
      style: props.contentStyle,
      className: cx("content")
    }, ptm("content"));
    return /* @__PURE__ */ React__namespace.createElement("div", contentProps, props.children);
  };
  var createFooter = function createFooter2() {
    var footer2 = ObjectUtils.getJSXElement(props.footer, props);
    var footerProps = mergeProps2({
      ref: footerRef,
      className: cx("footer")
    }, ptm("footer"));
    return footer2 && /* @__PURE__ */ React__namespace.createElement("div", footerProps, footer2);
  };
  var createResizer = function createResizer2() {
    if (props.resizable) {
      return /* @__PURE__ */ React__namespace.createElement("span", {
        className: "p-resizable-handle",
        style: {
          zIndex: 90
        },
        onMouseDown: onResizeStart
      });
    }
    return null;
  };
  var createTemplateElement = function createTemplateElement2() {
    var _props$children;
    var messageProps = {
      header: props.header,
      content: props.message,
      message: props === null || props === void 0 || (_props$children = props.children) === null || _props$children === void 0 || (_props$children = _props$children[1]) === null || _props$children === void 0 || (_props$children = _props$children.props) === null || _props$children === void 0 ? void 0 : _props$children.children
    };
    var templateElementProps = {
      headerRef,
      contentRef,
      footerRef,
      closeRef,
      hide: onClose,
      message: messageProps
    };
    return ObjectUtils.getJSXElement(inProps.content, templateElementProps);
  };
  var createElement = function createElement2() {
    var header2 = createHeader();
    var content2 = createContent();
    var footer2 = createFooter();
    var resizer = createResizer();
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, header2, content2, footer2, resizer);
  };
  var createDialog = function createDialog2() {
    var headerId = idState + "_header";
    var contentId = idState + "_content";
    var transitionTimeout = {
      enter: props.position === "center" ? 150 : 300,
      exit: props.position === "center" ? 150 : 300
    };
    var maskProps = mergeProps2({
      ref: maskRef,
      style: sx("mask"),
      className: cx("mask"),
      onPointerUp: onMaskPointerUp
    }, ptm("mask"));
    var rootProps = mergeProps2({
      ref: dialogRef,
      id: idState,
      className: classNames(props.className, cx("root", {
        props,
        maximized,
        context
      })),
      style: props.style,
      onClick: props.onClick,
      role: "dialog",
      "aria-labelledby": headerId,
      "aria-describedby": contentId,
      "aria-modal": props.modal,
      onPointerDown: onDialogPointerDown
    }, DialogBase.getOtherProps(props), ptm("root"));
    var transitionProps = mergeProps2({
      classNames: cx("transition"),
      timeout: transitionTimeout,
      "in": visibleState,
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter,
      onEntered,
      onExiting,
      onExited
    }, ptm("transition"));
    var contentElement = null;
    if (inProps !== null && inProps !== void 0 && inProps.content) {
      contentElement = createTemplateElement();
    } else {
      contentElement = createElement();
    }
    var rootElement = /* @__PURE__ */ React__namespace.createElement("div", maskProps, /* @__PURE__ */ React__namespace.createElement(CSSTransition, _extends$5({
      nodeRef: dialogRef
    }, transitionProps), /* @__PURE__ */ React__namespace.createElement("div", rootProps, /* @__PURE__ */ React__namespace.createElement(FocusTrap$1, {
      autoFocus: props.focusOnShow
    }, contentElement))));
    return /* @__PURE__ */ React__namespace.createElement(Portal, {
      element: rootElement,
      appendTo: props.appendTo,
      visible: true
    });
  };
  return maskVisibleState && createDialog();
});
Dialog.displayName = "Dialog";
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$4.apply(null, arguments);
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _arrayWithHoles$1(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$1(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$1(r, e) {
  return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest$1();
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _defineProperty$1(e, r, t) {
  return (r = toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var classes$1 = {
  root: "p-inputotp p-component",
  input: "p-inputotp-input"
};
var InputOtpBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "InputOtp",
    __parentMetadata: null,
    className: null,
    modelValue: false,
    invalid: false,
    disabled: false,
    readOnly: false,
    variant: null,
    tabIndex: null,
    length: 4,
    mask: false,
    integerOnly: false
  },
  css: {
    classes: classes$1
  }
});
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var InputOtp = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var _props$value, _props$value$split;
  var elementRef = React.useRef(ref);
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = InputOtpBase.getProps(inProps, context);
  var _InputOtpBase$setMeta = InputOtpBase.setMetaData(_objectSpread$1(_objectSpread$1({
    props
  }, props.__parentMetadata), {}, {
    context: {
      disabled: props.disabled
    }
  })), ptm = _InputOtpBase$setMeta.ptm, cx = _InputOtpBase$setMeta.cx, isUnstyled = _InputOtpBase$setMeta.isUnstyled;
  useHandleStyle(InputOtpBase.css.styles, isUnstyled, {
    name: "inputotp"
  });
  var defaultValue = props.value ? (_props$value = props.value) === null || _props$value === void 0 || (_props$value = _props$value.toString()) === null || _props$value === void 0 || (_props$value$split = _props$value.split) === null || _props$value$split === void 0 ? void 0 : _props$value$split.call(_props$value, "") : new Array(props.length);
  var _useState = React.useState(defaultValue), _useState2 = _slicedToArray$1(_useState, 2), tokens = _useState2[0], setTokens = _useState2[1];
  var _findNextInput = function findNextInput(element) {
    var nextInput = element.nextElementSibling;
    if (!nextInput) return;
    return nextInput.nodeName === "INPUT" ? nextInput : _findNextInput(nextInput);
  };
  var _findPrevInput = function findPrevInput(element) {
    var prevInput = element.previousElementSibling;
    if (!prevInput) return;
    return prevInput.nodeName === "INPUT" ? prevInput : _findPrevInput(prevInput);
  };
  var moveToNextInput = function moveToNextInput2(event) {
    var nextInput = _findNextInput(event.target);
    if (nextInput) {
      nextInput.focus();
      nextInput.select();
    }
  };
  var moveToPrevInput = function moveToPrevInput2(event) {
    var prevInput = _findPrevInput(event.target);
    if (prevInput) {
      prevInput.focus();
      prevInput.select();
    }
  };
  var onChange = function onChange2(event, value) {
    var _props$onChange;
    props === null || props === void 0 || (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, {
      originalEvent: event,
      value: value.join("")
    });
  };
  var updateTokens = function updateTokens2(event, index) {
    var inputValue = event.target.value;
    var newTokens = _toConsumableArray$1(tokens);
    newTokens[index] = inputValue;
    newTokens = newTokens.join("");
    newTokens = newTokens ? newTokens.split("") : new Array(props.length);
    setTokens(newTokens);
    onChange(event, newTokens);
  };
  var _onInput = function onInput(event, index) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (event.nativeEvent.inputType === "insertFromPaste") {
      return;
    }
    updateTokens(event, index);
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      moveToPrevInput(event);
    } else if (event.nativeEvent.inputType === "insertText") {
      moveToNextInput(event);
    }
  };
  var onPaste2 = function onPaste3(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    var paste = event.clipboardData.getData("text");
    if (paste.length) {
      var pastedCode = paste.substring(0, props.length + 1);
      if (!props.integerOnly || !isNaN(pastedCode)) {
        var newTokens = pastedCode.split("");
        setTokens(newTokens);
        onChange(event, newTokens);
      }
    }
  };
  var onFocus = function onFocus2(event) {
    var _props$focus;
    event.target.select();
    props === null || props === void 0 || (_props$focus = props.focus) === null || _props$focus === void 0 || _props$focus.call(props, event);
  };
  var onBlur = function onBlur2(event) {
    var _props$blur;
    props === null || props === void 0 || (_props$blur = props.blur) === null || _props$blur === void 0 || _props$blur.call(props, event);
  };
  var onKeydown = function onKeydown2(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    switch (event.code) {
      case "ArrowLeft": {
        moveToPrevInput(event);
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        moveToNextInput(event);
        event.preventDefault();
        break;
      }
      case "Delete": {
        event.preventDefault();
        var idx = Number(event.target.id);
        if (!Number.isNaN(idx) && !isAllEmpty(tokens, props.length)) {
          updateTokens(_objectSpread$1(_objectSpread$1({}, event), {}, {
            target: _objectSpread$1(_objectSpread$1({}, event.target), {}, {
              value: ""
            })
          }), idx);
          moveToNextInput(event);
        }
        break;
      }
      case "Backspace": {
        var _event$target;
        if (((_event$target = event.target) === null || _event$target === void 0 || (_event$target = _event$target.value) === null || _event$target === void 0 ? void 0 : _event$target.length) === 0) {
          moveToPrevInput(event);
          event.preventDefault();
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown": {
        event.preventDefault();
        break;
      }
      case "Tab":
      case "NumpadEnter":
      case "Enter": {
        break;
      }
      default: {
        if (props !== null && props !== void 0 && props.integerOnly && !(event.code !== "Space" && Number(event.key) >= 0 && Number(event.key) <= 9) || tokens.join("").length >= props.length && event.code !== "Delete") {
          event.preventDefault();
        }
        break;
      }
    }
  };
  var isAllEmpty = function isAllEmpty2(arr, n) {
    return arr.length === n && arr.every(function(item2) {
      return item2 === "" || item2 == null;
    });
  };
  useUpdateEffect(function() {
    var _props$value2, _props$value2$split;
    var value = props.value ? (_props$value2 = props.value) === null || _props$value2 === void 0 || (_props$value2 = _props$value2.toString()) === null || _props$value2 === void 0 || (_props$value2$split = _props$value2.split) === null || _props$value2$split === void 0 ? void 0 : _props$value2$split.call(_props$value2, "") : new Array(props.length);
    setTokens(value);
  }, [props.value]);
  var _createInputElements = function createInputElements(remainingInputs) {
    if (remainingInputs <= 0) {
      return [];
    }
    var inputElementIndex = props.length - remainingInputs;
    var inputElementEvents = {
      onInput: function onInput(event) {
        return _onInput(event, inputElementIndex);
      },
      onKeyDown: onKeydown,
      onFocus,
      onBlur,
      onPaste: onPaste2
    };
    var inputElementProps = {
      id: inputElementIndex,
      value: tokens[inputElementIndex] || "",
      inputMode: props !== null && props !== void 0 && props.integerOnly ? "numeric" : "text",
      type: props !== null && props !== void 0 && props.mask ? "password" : "text",
      variant: props === null || props === void 0 ? void 0 : props.variant,
      readOnly: props === null || props === void 0 ? void 0 : props.readOnly,
      disabled: props === null || props === void 0 ? void 0 : props.disabled,
      invalid: props === null || props === void 0 ? void 0 : props.invalid,
      tabIndex: props === null || props === void 0 ? void 0 : props.tabIndex,
      unstyled: props === null || props === void 0 ? void 0 : props.unstyled,
      "aria-label": ariaLabel("otpLabel", {
        0: inputElementIndex + 1
      }),
      className: cx("input"),
      pt: ptm("input")
    };
    var inputElement = props !== null && props !== void 0 && props.inputTemplate ? ObjectUtils.getJSXElement(props === null || props === void 0 ? void 0 : props.inputTemplate, {
      events: inputElementEvents,
      props: inputElementProps
    }) : /* @__PURE__ */ React.createElement(InputText, _extends$4({}, inputElementProps, inputElementEvents, {
      key: inputElementIndex
    }));
    var inputElements = [inputElement].concat(_toConsumableArray$1(_createInputElements(remainingInputs - 1)));
    return inputElements;
  };
  var rootElementProps = mergeProps2({
    className: cx("root"),
    ref: elementRef,
    style: props === null || props === void 0 ? void 0 : props.style
  }, ptm("root"));
  return /* @__PURE__ */ React.createElement("div", rootElementProps, _createInputElements(props.length));
}));
InputOtp.displayName = "InputOtp";
const ForgotPasswordDialog = ({ visible, onClose, onOtpValidated }) => {
  const [loading, setLoading] = React.useState(false);
  const [otpSent, setOtpSent] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
  const initialValues = { email: "" };
  const validationSchema = create$3({
    email: create$6().email("Invalid email").required("Email is required")
  });
  const handleGetOtp = (values2) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setEmail(values2.email);
    }, 1e3);
  };
  const handleValidateOtp = () => {
    if (otp === "1234") {
      setOtpError("");
      onOtpValidated();
    } else {
      setOtpError("Invalid OTP. Please contact admin");
    }
  };
  const handleClose = () => {
    onClose();
  };
  React.useEffect(() => {
    if (!visible) {
      setOtpSent(false);
      setOtp("");
      setEmail("");
      setOtpError("");
    }
  }, [visible]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dialog,
    {
      header: "Reset password using your email",
      visible,
      className: "w-md",
      onHide: handleClose,
      pt: { mask: { className: "!bg-black/70" } },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Formik,
        {
          initialValues,
          validationSchema,
          onSubmit: handleGetOtp,
          children: ({ values: values2, errors, touched, handleChange, handleBlur, handleSubmit }) => /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InputText,
                {
                  name: "email",
                  value: values2.email,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  placeholder: "Enter your email",
                  disabled: otpSent,
                  className: "w-full"
                }
              ),
              touched.email && errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "p-error pl-2", children: errors.email })
            ] }),
            !otpSent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                label: "Get OTP",
                loading,
                className: "w-full"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-green-600", children: [
                "OTP sent to ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                InputOtp,
                {
                  type: "tel",
                  length: 4,
                  value: otp,
                  onChange: (e) => setOtp(e.value),
                  className: "w-full"
                }
              ),
              otpError && /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "p-error pl-2", children: otpError }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  label: "Validate",
                  onClick: handleValidateOtp,
                  className: "w-full",
                  type: "button"
                }
              )
            ] })
          ] }) })
        }
      ) })
    }
  );
};
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
var ExclamationTriangleIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$3({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    d: "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React__namespace.createElement("path", {
    d: "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React__namespace.createElement("path", {
    d: "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
    fill: "currentColor"
  }));
}));
ExclamationTriangleIcon.displayName = "ExclamationTriangleIcon";
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
var InfoCircleIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
    fill: "currentColor"
  }));
}));
InfoCircleIcon.displayName = "InfoCircleIcon";
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}
var TimesCircleIcon = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React__namespace.createElement("svg", _extends$1({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }));
}));
TimesCircleIcon.displayName = "TimesCircleIcon";
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var styles = "\n@layer primereact {\n    .p-toast {\n        width: calc(100% - var(--toast-indent, 0px));\n        max-width: 25rem;\n    }\n    \n    .p-toast-message-icon {\n        flex-shrink: 0;\n    }\n    \n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n    }\n    \n    .p-toast-message-text {\n        flex: 1 1 auto;\n    }\n    \n    .p-toast-summary {\n        overflow-wrap: anywhere;\n    }\n    \n    .p-toast-detail {\n        overflow-wrap: anywhere;\n    }\n    \n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n    \n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n    \n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n    \n    .p-toast-icon-close {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-toast-icon-close.p-link {\n        cursor: pointer;\n    }\n    \n    /* Animations */\n    .p-toast-message-enter {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n    \n    .p-toast-message-enter-active {\n        opacity: 1;\n        transform: translateY(0);\n        transition: transform 0.3s, opacity 0.3s;\n    }\n    \n    .p-toast-message-enter-done {\n        transform: none;\n    }\n    \n    .p-toast-message-exit {\n        opacity: 1;\n        max-height: 1000px;\n    }\n    \n    .p-toast .p-toast-message.p-toast-message-exit-active {\n        opacity: 0;\n        max-height: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;\n    }\n}\n";
var classes = {
  root: function root10(_ref) {
    var props = _ref.props, context = _ref.context;
    return classNames("p-toast p-component p-toast-" + props.position, props.className, {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact2.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact2.ripple === false
    });
  },
  message: {
    message: function message(_ref2) {
      var severity = _ref2.severity;
      return classNames("p-toast-message", _defineProperty({}, "p-toast-message-".concat(severity), severity));
    },
    content: "p-toast-message-content",
    buttonicon: "p-toast-icon-close-icon",
    closeButton: "p-toast-icon-close p-link",
    icon: "p-toast-message-icon",
    text: "p-toast-message-text",
    summary: "p-toast-summary",
    detail: "p-toast-detail"
  },
  transition: "p-toast-message"
};
var inlineStyles = {
  root: function root11(_ref3) {
    var props = _ref3.props;
    return {
      position: "fixed",
      top: props.position === "top-right" || props.position === "top-left" || props.position === "top-center" ? "20px" : props.position === "center" ? "50%" : null,
      right: (props.position === "top-right" || props.position === "bottom-right") && "20px",
      bottom: (props.position === "bottom-left" || props.position === "bottom-right" || props.position === "bottom-center") && "20px",
      left: props.position === "top-left" || props.position === "bottom-left" ? "20px" : props.position === "center" || props.position === "top-center" || props.position === "bottom-center" ? "50%" : null
    };
  }
};
var ToastBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Toast",
    id: null,
    className: null,
    content: null,
    style: null,
    baseZIndex: 0,
    position: "top-right",
    transitionOptions: null,
    appendTo: "self",
    onClick: null,
    onRemove: null,
    onShow: null,
    onHide: null,
    onMouseEnter: null,
    onMouseLeave: null,
    children: void 0
  },
  css: {
    classes,
    styles,
    inlineStyles
  }
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ToastMessage = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
  var mergeProps2 = useMergeProps();
  var messageInfo = props.messageInfo, parentMetaData = props.metaData, _props$ptCallbacks = props.ptCallbacks, ptm = _props$ptCallbacks.ptm, ptmo = _props$ptCallbacks.ptmo, cx = _props$ptCallbacks.cx, index = props.index;
  var _messageInfo$message = messageInfo.message, severity = _messageInfo$message.severity, content2 = _messageInfo$message.content, summary = _messageInfo$message.summary, detail = _messageInfo$message.detail, closable = _messageInfo$message.closable, life = _messageInfo$message.life, sticky = _messageInfo$message.sticky, _className = _messageInfo$message.className, style = _messageInfo$message.style, _contentClassName = _messageInfo$message.contentClassName, contentStyle = _messageInfo$message.contentStyle, _icon = _messageInfo$message.icon, _closeIcon = _messageInfo$message.closeIcon, pt = _messageInfo$message.pt;
  var params = {
    index
  };
  var parentParams = _objectSpread(_objectSpread({}, parentMetaData), params);
  var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focused = _React$useState2[0], setFocused = _React$useState2[1];
  var _useTimeout = useTimeout(function() {
    onClose();
  }, life || 3e3, !sticky && !focused), _useTimeout2 = _slicedToArray(_useTimeout, 1), clearTimer = _useTimeout2[0];
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread({
      hostName: props.hostName
    }, options));
  };
  var onClose = function onClose2() {
    clearTimer();
    props.onClose && props.onClose(messageInfo);
  };
  var onClick = function onClick2(event) {
    if (props.onClick && !(DomHandler.hasClass(event.target, "p-toast-icon-close") || DomHandler.hasClass(event.target, "p-toast-icon-close-icon"))) {
      props.onClick(messageInfo.message);
    }
  };
  var onMouseEnter = function onMouseEnter2(event) {
    props.onMouseEnter && props.onMouseEnter(event);
    if (event.defaultPrevented) {
      return;
    }
    if (!sticky) {
      clearTimer();
      setFocused(true);
    }
  };
  var onMouseLeave = function onMouseLeave2(event) {
    props.onMouseLeave && props.onMouseLeave(event);
    if (event.defaultPrevented) {
      return;
    }
    if (!sticky) {
      setFocused(false);
    }
  };
  var createCloseIcon = function createCloseIcon2() {
    var buttonIconProps = mergeProps2({
      className: cx("message.buttonicon")
    }, getPTOptions("buttonicon", parentParams), ptmo(pt, "buttonicon", _objectSpread(_objectSpread({}, params), {}, {
      hostName: props.hostName
    })));
    var icon2 = _closeIcon || /* @__PURE__ */ React__namespace.createElement(TimesIcon, buttonIconProps);
    var closeIcon2 = IconUtils.getJSXIcon(icon2, _objectSpread({}, buttonIconProps), {
      props
    });
    var closeButtonProps = mergeProps2({
      type: "button",
      className: cx("message.closeButton"),
      onClick: onClose,
      "aria-label": props.ariaCloseLabel || ariaLabel("close")
    }, getPTOptions("closeButton", parentParams), ptmo(pt, "closeButton", _objectSpread(_objectSpread({}, params), {}, {
      hostName: props.hostName
    })));
    if (closable !== false) {
      return /* @__PURE__ */ React__namespace.createElement("div", null, /* @__PURE__ */ React__namespace.createElement("button", closeButtonProps, closeIcon2, /* @__PURE__ */ React__namespace.createElement(Ripple, null)));
    }
    return null;
  };
  var createMessage = function createMessage2() {
    if (messageInfo) {
      var contentEl = ObjectUtils.getJSXElement(content2, {
        message: messageInfo.message,
        onClick,
        onClose
      });
      var iconProps = mergeProps2({
        className: cx("message.icon")
      }, getPTOptions("icon", parentParams), ptmo(pt, "icon", _objectSpread(_objectSpread({}, params), {}, {
        hostName: props.hostName
      })));
      var icon2 = _icon;
      if (!_icon) {
        switch (severity) {
          case "info":
            icon2 = /* @__PURE__ */ React__namespace.createElement(InfoCircleIcon, iconProps);
            break;
          case "warn":
            icon2 = /* @__PURE__ */ React__namespace.createElement(ExclamationTriangleIcon, iconProps);
            break;
          case "error":
            icon2 = /* @__PURE__ */ React__namespace.createElement(TimesCircleIcon, iconProps);
            break;
          case "success":
            icon2 = /* @__PURE__ */ React__namespace.createElement(CheckIcon, iconProps);
            break;
        }
      }
      var messageIcon = IconUtils.getJSXIcon(icon2, _objectSpread({}, iconProps), {
        props
      });
      var textProps = mergeProps2({
        className: cx("message.text")
      }, getPTOptions("text", parentParams), ptmo(pt, "text", _objectSpread(_objectSpread({}, params), {}, {
        hostName: props.hostName
      })));
      var summaryProps = mergeProps2({
        className: cx("message.summary")
      }, getPTOptions("summary", parentParams), ptmo(pt, "summary", _objectSpread(_objectSpread({}, params), {}, {
        hostName: props.hostName
      })));
      var detailProps = mergeProps2({
        className: cx("message.detail")
      }, getPTOptions("detail", parentParams), ptmo(pt, "detail", _objectSpread(_objectSpread({}, params), {}, {
        hostName: props.hostName
      })));
      return contentEl || /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, messageIcon, /* @__PURE__ */ React__namespace.createElement("div", textProps, /* @__PURE__ */ React__namespace.createElement("span", summaryProps, summary), detail && /* @__PURE__ */ React__namespace.createElement("div", detailProps, detail)));
    }
    return null;
  };
  var message2 = createMessage();
  var closeIcon = createCloseIcon();
  var messageProps = mergeProps2({
    ref,
    className: classNames(_className, cx("message.message", {
      severity
    })),
    style,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    onClick,
    onMouseEnter,
    onMouseLeave
  }, getPTOptions("message", parentParams), ptmo(pt, "root", _objectSpread(_objectSpread({}, params), {}, {
    hostName: props.hostName
  })));
  var contentProps = mergeProps2({
    className: classNames(_contentClassName, cx("message.content")),
    style: contentStyle
  }, getPTOptions("content", parentParams), ptmo(pt, "content", _objectSpread(_objectSpread({}, params), {}, {
    hostName: props.hostName
  })));
  return /* @__PURE__ */ React__namespace.createElement("div", messageProps, /* @__PURE__ */ React__namespace.createElement("div", contentProps, message2, closeIcon));
}));
ToastMessage.displayName = "ToastMessage";
var messageIdx = 0;
var Toast = /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React__namespace.useContext(PrimeReactContext);
  var props = ToastBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState([]), _React$useState2 = _slicedToArray(_React$useState, 2), messagesState = _React$useState2[0], setMessagesState = _React$useState2[1];
  var containerRef = React__namespace.useRef(null);
  var metaData = {
    props,
    state: {
      messages: messagesState
    }
  };
  var ptCallbacks = ToastBase.setMetaData(metaData);
  useHandleStyle(ToastBase.css.styles, ptCallbacks.isUnstyled, {
    name: "toast"
  });
  var show = function show2(messageInfo) {
    if (messageInfo) {
      setMessagesState(function(prev) {
        return assignIdentifiers(prev, messageInfo, true);
      });
    }
  };
  var assignIdentifiers = function assignIdentifiers2(currentState, messageInfo, copy) {
    var messages;
    if (Array.isArray(messageInfo)) {
      var multipleMessages = messageInfo.reduce(function(acc, message3) {
        acc.push({
          _pId: messageIdx++,
          message: message3
        });
        return acc;
      }, []);
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray(currentState), _toConsumableArray(multipleMessages)) : multipleMessages;
      } else {
        messages = multipleMessages;
      }
    } else {
      var message2 = {
        _pId: messageIdx++,
        message: messageInfo
      };
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray(currentState), [message2]) : [message2];
      } else {
        messages = [message2];
      }
    }
    return messages;
  };
  var clear = function clear2() {
    ZIndexUtils.clear(containerRef.current);
    setMessagesState([]);
  };
  var replace = function replace2(messageInfo) {
    setMessagesState(function(previousMessagesState) {
      return assignIdentifiers(previousMessagesState, messageInfo, false);
    });
  };
  var remove = function remove2(messageInfo) {
    var removeMessage = ObjectUtils.isNotEmpty(messageInfo._pId) ? messageInfo._pId : messageInfo.message || messageInfo;
    setMessagesState(function(prev) {
      return prev.filter(function(msg) {
        return msg._pId !== messageInfo._pId && !ObjectUtils.deepEquals(msg.message, removeMessage);
      });
    });
    props.onRemove && props.onRemove(messageInfo.message || removeMessage);
  };
  var onClose = function onClose2(messageInfo) {
    remove(messageInfo);
  };
  var onEntered = function onEntered2() {
    props.onShow && props.onShow();
  };
  var onExited = function onExited2() {
    messagesState.length === 1 && ZIndexUtils.clear(containerRef.current);
    props.onHide && props.onHide();
  };
  useUpdateEffect(function() {
    ZIndexUtils.set("toast", containerRef.current, context && context.autoZIndex || PrimeReact2.autoZIndex, props.baseZIndex || context && context.zIndex.toast || PrimeReact2.zIndex.toast);
  }, [messagesState, props.baseZIndex]);
  useUnmountEffect(function() {
    ZIndexUtils.clear(containerRef.current);
  });
  React__namespace.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      replace,
      remove,
      clear,
      getElement: function getElement() {
        return containerRef.current;
      }
    };
  });
  var createElement = function createElement2() {
    var rootProps = mergeProps2({
      ref: containerRef,
      id: props.id,
      className: ptCallbacks.cx("root", {
        context
      }),
      style: ptCallbacks.sx("root")
    }, ToastBase.getOtherProps(props), ptCallbacks.ptm("root"));
    var transitionProps = mergeProps2({
      classNames: ptCallbacks.cx("transition"),
      timeout: {
        enter: 300,
        exit: 300
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEntered,
      onExited
    }, ptCallbacks.ptm("transition"));
    return /* @__PURE__ */ React__namespace.createElement("div", rootProps, /* @__PURE__ */ React__namespace.createElement(TransitionGroup, null, messagesState && messagesState.map(function(messageInfo, index) {
      var messageRef = /* @__PURE__ */ React__namespace.createRef();
      return /* @__PURE__ */ React__namespace.createElement(CSSTransition, _extends({
        nodeRef: messageRef,
        key: messageInfo._pId
      }, transitionProps), inProps.content ? ObjectUtils.getJSXElement(inProps.content, {
        message: messageInfo.message
      }) : /* @__PURE__ */ React__namespace.createElement(ToastMessage, {
        hostName: "Toast",
        ref: messageRef,
        messageInfo,
        index,
        onClick: props.onClick,
        onClose,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        closeIcon: props.closeIcon,
        ptCallbacks,
        metaData
      }));
    })));
  };
  var element = createElement();
  return /* @__PURE__ */ React__namespace.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
}));
Toast.displayName = "Toast";
const ResetPasswordDialog = ({ visible, onClose }) => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const toast = React.useRef(null);
  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords did not match, Try again");
    } else {
      setError("");
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Password reset successful, please login with new password",
        life: 3e3
      });
      setTimeout(() => {
        onClose();
      }, 1e3);
    }
  };
  React.useEffect(() => {
    if (!visible) {
      setNewPassword("");
      setConfirmPassword("");
      setError("");
    }
  }, [visible]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { ref: toast }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        header: "Reset your password",
        visible,
        className: "w-md",
        onHide: onClose,
        pt: { mask: { className: "!bg-black/70" } },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Password,
            {
              value: newPassword,
              onChange: (e) => setNewPassword(e.target.value),
              placeholder: "New Password",
              className: "w-full",
              inputClassName: "w-full"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Password,
            {
              value: confirmPassword,
              onChange: (e) => setConfirmPassword(e.target.value),
              placeholder: "Confirm Password",
              className: "w-full",
              inputClassName: "w-full",
              feedback: false
            }
          ),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "p-error pl-2", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { label: "Reset Password", onClick: handleSubmit })
        ] })
      }
    )
  ] });
};
const SelectProjectDialog = ({ visible, projects, selectedProject, onProjectChange, onProceed, onClose }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dialog,
    {
      header: "Select a Project",
      visible,
      style: { width: "400px" },
      onHide: onClose,
      pt: { mask: { className: "!bg-black/70" } },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-fluid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-field my-2 flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "projectDropdown", className: "font-semibold", children: "Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Dropdown,
            {
              id: "projectDropdown",
              value: selectedProject,
              options: projects,
              onChange: (e) => onProjectChange(e.value),
              placeholder: "Select a project",
              optionLabel: "name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-field mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            label: "Proceed",
            icon: "pi pi-check",
            onClick: onProceed,
            className: "p-button-primary max-w-40 min-w-40"
          }
        ) })
      ] })
    }
  );
};
const LoginPage = ({
  showCustomerTextBox = true,
  showUsernameTextBox = true,
  showPasswordTextBox = true,
  showProjectDialogBox = true,
  showForgotPasswordButton = true
}) => {
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showResetPasswordDialog, setShowResetPasswordDialog] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const [showProjectDialog, setShowProjectDialog] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const initialValues = {};
  const validationShape = {};
  if (showCustomerTextBox) {
    initialValues.customer = "";
    validationShape.customer = create$6().required("Customer is required");
  }
  if (showUsernameTextBox) {
    initialValues.username = "";
    validationShape.username = create$6().required("Username is required");
  }
  if (showPasswordTextBox) {
    initialValues.password = "";
    validationShape.password = create$6().required("Password is required");
  }
  const validationSchema = create$3().shape(validationShape);
  const handleSubmit = (values2) => {
    console.log("Submitting form:", values2);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (values2.username === "deepak" && values2.password === "1234") {
        setSubmitError("");
        if (showProjectDialogBox) {
          setShowProjectDialog(true);
        }
      } else {
        setSubmitError("Invalid credentials, please try again");
      }
    }, 1e3);
  };
  const projects = [
    { name: "Webscraping", code: "NY" },
    { name: "WebEDI", code: "RM" },
    { name: "OTM", code: "LDN" },
    { name: "OTM fusion", code: "IST" }
  ];
  const showForgotPasswordDialog = () => {
    setShowForgotPassword(true);
  };
  const handleOtpValidated = () => {
    setShowForgotPassword(false);
    setTimeout(() => {
      setShowResetPasswordDialog(true);
    }, 300);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-auto max-w-2/9 min-w-96 min-h-screen flex flex-col -border -border-amber-500 justify-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-border -border-red-600 min-h-16 flex justify-center select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Image", width: "250" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-border -border-blue-600 min-h-72 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          pt: {
            root: {
              className: "border border-gray-100 !rounded-xl !shadow-md !bg-gray-100 max-w-87 min-w-95.5"
            }
          },
          title: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xl font-bold", children: "Login to your Account" }),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Formik,
            {
              initialValues,
              validationSchema,
              onSubmit: handleSubmit,
              children: ({ values: values2, errors, touched, handleChange, handleSubmit: handleSubmit2 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit2, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
                  showCustomerTextBox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "customer", className: "font-semibold", children: "CustomerId" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      InputText,
                      {
                        id: "customer",
                        name: "customer",
                        value: values2.customer,
                        onChange: handleChange,
                        placeholder: "Enter CustomerId",
                        className: "min-w-87 max-w-87",
                        variant: "outlined",
                        autoComplete: "off",
                        pt: {
                          root: { className: "bg-white" },
                          input: { className: "bg-white focus:bg-white" }
                        }
                      }
                    ),
                    touched.customer && errors.customer && /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "p-error pl-2", children: errors.customer })
                  ] }),
                  showUsernameTextBox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "username", className: "font-semibold", children: "Username" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      InputText,
                      {
                        id: "username",
                        name: "username",
                        value: values2.username,
                        onChange: handleChange,
                        placeholder: "Enter Username",
                        className: "min-w-87 max-w-87",
                        variant: "outlined",
                        autoComplete: "off",
                        pt: {
                          root: { className: "bg-white" },
                          input: { className: "bg-white focus:bg-white" }
                        }
                      }
                    ),
                    touched.username && errors.username && /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "p-error pl-2", children: errors.username })
                  ] }),
                  showPasswordTextBox && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "font-semibold", children: "Password" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Password,
                      {
                        inputId: "password",
                        name: "password",
                        value: values2.password,
                        onChange: handleChange,
                        feedback: false,
                        toggleMask: true,
                        placeholder: "Enter Password",
                        pt: {
                          root: { className: "w-full" },
                          input: { className: "min-w-87 max-w-87" }
                        }
                      }
                    ),
                    touched.password && errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "p-error pl-2", children: errors.password })
                  ] }),
                  showForgotPasswordButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      label: "Forgot Password?",
                      text: true,
                      type: "button",
                      className: "w-fit !pl-1 h-5 !font-normal !text-xs hover:!bg-transparent active:!bg-transparent active:!border-none focus:!outline-none focus:!ring-0 active:!outline-none active:!ring-0 focus:!border-none",
                      onClick: showForgotPasswordDialog
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 w-full flex justify-center flex-col gap-4 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { label: "Submit", type: "submit", loading, className: "max-w-44 min-w-44" }),
                  submitError != "" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-error mx-auto", children: submitError })
                ] })
              ] })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ForgotPasswordDialog,
        {
          visible: showForgotPassword,
          onClose: () => setShowForgotPassword(false),
          onOtpValidated: handleOtpValidated
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResetPasswordDialog,
        {
          visible: showResetPasswordDialog,
          onClose: () => setShowResetPasswordDialog(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectProjectDialog,
        {
          visible: showProjectDialog,
          onClose: () => setShowProjectDialog(false),
          projects,
          selectedProject,
          onProjectChange: (e) => setSelectedProject(e)
        }
      )
    ] })
  ] }) });
};
exports.LoginPage = LoginPage;
