webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Estadocuenta.js":
/*!************************************!*\
  !*** ./components/Estadocuenta.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/spm/Desktop/UcomNextJsTest/components/Estadocuenta.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Estadocuenta = function Estadocuenta(_ref) {\n  var props = _ref.props;\n  console.log(props);\n\n  if ((props === null || props === void 0 ? void 0 : props.status) == 1) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 14\n      }\n    }, \"No existe\");\n  }\n\n  if ((props === null || props === void 0 ? void 0 : props.status) == 0) {\n    var facturas = [];\n    props.data.estado_cuenta.facturas.map(function (fact) {\n      var items = [];\n\n      for (var _i = 0, _Object$entries = Object.entries(fact); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries[_i], 2),\n            key = _Object$entries$_i[0],\n            val = _Object$entries$_i[1];\n\n        items.push(__jsx(\"p\", {\n          key: key,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 21\n          }\n        }, key, \" : \", val));\n      }\n\n      facturas.push(__jsx(\"div\", {\n        className: \"border-b p-2 my-1 rounded text-left text-xs\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }\n      }, items));\n    });\n    return __jsx(\"div\", {\n      className: \"container flex flex-col flex-wrap my-10 px-6 justify-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }\n    }, props.data.estado_cuenta.datosCliente.cl_nombres, \" \", props.data.estado_cuenta.datosCliente.cl_apellidos), facturas);\n  }\n};\n\n_c = Estadocuenta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Estadocuenta);\n\nvar _c;\n\n$RefreshReg$(_c, \"Estadocuenta\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0VzdGFkb2N1ZW50YS5qcz85NzRjIl0sIm5hbWVzIjpbIkVzdGFkb2N1ZW50YSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImZhY3R1cmFzIiwiZGF0YSIsImVzdGFkb19jdWVudGEiLCJtYXAiLCJmYWN0IiwiaXRlbXMiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsIiwicHVzaCIsImRhdG9zQ2xpZW50ZSIsImNsX25vbWJyZXMiLCJjbF9hcGVsbGlkb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWE7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFFOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaOztBQUVBLE1BQUcsQ0FBQUEsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVHLE1BQVAsS0FBaUIsQ0FBcEIsRUFDQTtBQUNFLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNEOztBQUVELE1BQUcsQ0FBQUgsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVHLE1BQVAsS0FBaUIsQ0FBcEIsRUFDQTtBQUNJLFFBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0FKLFNBQUssQ0FBQ0ssSUFBTixDQUFXQyxhQUFYLENBQXlCRixRQUF6QixDQUFrQ0csR0FBbEMsQ0FBc0MsVUFBQ0MsSUFBRCxFQUFTO0FBRTNDLFVBQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLHlDQUFzQkMsTUFBTSxDQUFDQyxPQUFQLENBQWVILElBQWYsQ0FBdEIscUNBQTRDO0FBQUE7QUFBQSxZQUFuQ0ksR0FBbUM7QUFBQSxZQUE5QkMsR0FBOEI7O0FBQ3hDSixhQUFLLENBQUNLLElBQU4sQ0FDSTtBQUFHLGFBQUcsRUFBRUYsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWNBLEdBQWQsU0FBc0JDLEdBQXRCLENBREo7QUFHRDs7QUFFSFQsY0FBUSxDQUFDVSxJQUFULENBQ0k7QUFBSyxpQkFBUyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0wsS0FETCxDQURKO0FBS0gsS0FkRDtBQWlCRSxXQUNFO0FBQUssZUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtULEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxhQUFYLENBQXlCUyxZQUF6QixDQUFzQ0MsVUFBM0MsT0FBd0RoQixLQUFLLENBQUNLLElBQU4sQ0FBV0MsYUFBWCxDQUF5QlMsWUFBekIsQ0FBc0NFLFlBQTlGLENBREosRUFFS2IsUUFGTCxDQURGO0FBTUw7QUFHSixDQXRDRDs7S0FBTUwsWTtBQXdDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0VzdGFkb2N1ZW50YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgRXN0YWRvY3VlbnRhID0gKHtwcm9wc30pID0+IHtcblxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICBcbiAgICBpZihwcm9wcz8uc3RhdHVzID09IDEpXG4gICAge1xuICAgICAgcmV0dXJuKDxkaXY+Tm8gZXhpc3RlPC9kaXY+KTtcbiAgICB9XG5cbiAgICBpZihwcm9wcz8uc3RhdHVzID09IDApXG4gICAge1xuICAgICAgICBsZXQgZmFjdHVyYXMgPSBbXVxuICAgICAgICBwcm9wcy5kYXRhLmVzdGFkb19jdWVudGEuZmFjdHVyYXMubWFwKChmYWN0KSA9PntcblxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gW11cbiAgICAgICAgICAgIGZvcihsZXQgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhmYWN0KSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2ggKFxuICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2tleX0+e2tleX0gOiB7dmFsfTwvcD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmFjdHVyYXMucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIHAtMiBteS0xIHJvdW5kZWQgdGV4dC1sZWZ0IHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICAgICAgXG5cbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBteS0xMCBweC02IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPntwcm9wcy5kYXRhLmVzdGFkb19jdWVudGEuZGF0b3NDbGllbnRlLmNsX25vbWJyZXN9IHtwcm9wcy5kYXRhLmVzdGFkb19jdWVudGEuZGF0b3NDbGllbnRlLmNsX2FwZWxsaWRvc308L2gzPlxuICAgICAgICAgICAgICAgIHtmYWN0dXJhc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVzdGFkb2N1ZW50YTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Estadocuenta.js\n");

/***/ })

})