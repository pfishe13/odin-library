/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100vh;\\n  font-family: 'Gantari', sans-serif;\\n  background-color: #0d0d0d;\\n  background-image: linear-gradient(\\n    to left bottom,\\n    #6530d3,\\n    #7238cf,\\n    #7d41cb,\\n    #8649c7,\\n    #8e52c3,\\n    #ab52b9,\\n    #c254af,\\n    #d45aa5,\\n    #f0618c,\\n    #fd7472,\\n    #fe8d5c,\\n    #f3a950\\n  );\\n  padding: 0 40px;\\n}\\n\\n* {\\n  color: white;\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n}\\n\\nh1 {\\n  font-size: 5em;\\n  font-weight: 700;\\n}\\n\\nh2 {\\n  font-size: 2em;\\n  font-weight: 300;\\n}\\n\\nh3 {\\n  font-size: 1.3em;\\n  font-weight: 100;\\n}\\n\\n.material-symbols-outlined {\\n  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;\\n}\\n\\n.header {\\n  height: 20vh;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\nbutton {\\n  background-color: transparent;\\n}\\n\\n.open-button {\\n  height: 5em;\\n  width: 5em;\\n  border: 6px solid white;\\n  border-radius: 50%;\\n  padding: 0;\\n}\\n\\n#book-container {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-rows: repeat(3, 1fr);\\n  height: 80vh;\\n  gap: 20px;\\n  overflow: scroll;\\n}\\n\\n.book-card {\\n  padding: 20px;\\n  border-radius: 20px;\\n  border: 6px solid white;\\n  /* background-color: #056cf2; */\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\\n.book-buttons {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.book-buttons > .switch-container {\\n  display: flex;\\n  gap: 10px;\\n  align-items: center;\\n}\\n\\n/* Form */\\n.form-popup {\\n  padding: 20px;\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  transform: translate(calc(50vw - 50%), calc(50vh - 50%));\\n  background-color: transparent;\\n  border: 6px solid white;\\n  border-radius: 20px;\\n  z-index: 5;\\n}\\n\\nlabel {\\n  font-size: 1.5em;\\n}\\n\\n.form-popup > form > h2 {\\n  margin-bottom: 20px;\\n}\\n\\n.form-container {\\n  max-width: 300px;\\n  padding: 10px;\\n}\\n\\n.form-container input[type='text'],\\ninput[type='number'] {\\n  width: 90%;\\n  padding: 10px;\\n  margin: 5px 0 22px 0;\\n  border: 2px solid white;\\n  border-radius: 3px;\\n  background: transparent;\\n  font-size: 1.3em;\\n}\\n\\n.form-container input[type='text']:focus-visible {\\n  outline: white auto 1px;\\n}\\n\\n.form-buttons {\\n  margin-top: 15px;\\n  display: flex;\\n  justify-content: center;\\n  gap: 20px;\\n}\\n\\nbutton {\\n  height: 40px;\\n  padding: 10px 20px;\\n  border-radius: 3px;\\n  font-size: 1.2em;\\n}\\n\\n/* For Custom Switch, from W3 schools */\\n/* The switch - the box around the slider */\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px;\\n}\\n\\n/* Hide default HTML checkbox */\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n/* The slider */\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  border: 2px solid white;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n}\\n\\n.slider:before {\\n  position: absolute;\\n  content: '';\\n  height: 24px;\\n  width: 24px;\\n  left: 3px;\\n  bottom: 3px;\\n  background-color: white;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n}\\n\\ninput:checked + .slider {\\n  background-color: transparent;\\n}\\n\\ninput:focus + .slider {\\n  box-shadow: 0 0 1px transparent;\\n}\\n\\ninput:checked + .slider:before {\\n  -webkit-transform: translateX(26px);\\n  -ms-transform: translateX(26px);\\n  transform: translateX(26px);\\n}\\n\\n.slider.round {\\n  border-radius: 34px;\\n}\\n\\n.slider.round:before {\\n  border-radius: 50%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-library/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-library/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-library/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-library/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-library/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-library/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-library/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-library/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-library/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-library/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nclass Book {\n  constructor(title, author, numPages, genre, haveRead) {\n    this.title = title;\n    this.author = author;\n    this.numPages = numPages;\n    this.genre = genre;\n    this.haveRead = Boolean(haveRead);\n    this.id = _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"].totalBooks;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);\n\n\n//# sourceURL=webpack://odin-library/./src/book.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ \"./src/library.js\");\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable comma-dangle */\n\n\n\n\n\nconst Library = new _library__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst startingBookCount = 0;\n\n// Get Books from local storage\nlet defaultBookList = [\n  {\n    title: 'Harry Potter',\n    author: 'J.K. Rowling',\n    genre: 'Fantasy',\n    numPages: '200',\n    haveRead: 'true',\n    IDBVersionChangeEvent: `${toString(startingBookCount)}`,\n  },\n];\nlet storedBooks = localStorage.getItem('storedBookList');\nstoredBooks = JSON.parse(storedBooks || JSON.stringify(defaultBookList));\nfor (const storedBook of storedBooks) {\n  const newBook = new _book__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n    storedBook.title,\n    storedBook.author,\n    storedBook.numPages,\n    storedBook.genre,\n    storedBook.haveRead,\n    storedBook.id\n  );\n  Library.addBookToLibrary(newBook);\n}\n\nconst openFormButton = document.querySelector('.open-button');\nopenFormButton.addEventListener('click', openForm);\n\nconst closeFormButton = document.querySelector('.cancel');\ncloseFormButton.addEventListener('click', closeForm);\n\n// Form\n// eslint-disable-next-line no-unused-vars\nfunction openForm() {\n  document.getElementById('myForm').style.display = 'block';\n  document.getElementById('book-container').style.display = 'none';\n  document.querySelector('.header').style.display = 'none';\n\n  const titleInput = document.getElementById('title');\n  titleInput.addEventListener('input', () => {\n    titleInput.setCustomValidity('');\n    titleInput.checkValidity();\n  });\n  titleInput.addEventListener('invalid', () => {\n    if (titleInput.value === '') {\n      titleInput.setCustomValidity('Enter a valid title!');\n    }\n  });\n\n  const authorInput = document.getElementById('author');\n  authorInput.addEventListener('input', () => {\n    authorInput.setCustomValidity('');\n    authorInput.checkValidity();\n  });\n  authorInput.addEventListener('invalid', () => {\n    if (authorInput.value === '') {\n      authorInput.setCustomValidity('Enter a valid author!');\n    }\n  });\n\n  const pagesInput = document.getElementById('pages');\n  pagesInput.addEventListener('input', () => {\n    pagesInput.setCustomValidity('');\n    pagesInput.checkValidity();\n  });\n  pagesInput.addEventListener('invalid', () => {\n    if (pagesInput.value === '') {\n      pagesInput.setCustomValidity('Enter a valid number!');\n    } else {\n      pagesInput.setCustomValidity(\n        'Number needs to be greater than 10. Try again!'\n      );\n    }\n  });\n}\n\nfunction closeForm() {\n  document.getElementById('myForm').style.display = 'none';\n  document.getElementById('book-container').style.display = 'grid';\n  document.querySelector('.header').style.display = 'flex';\n}\n\nfunction processForm(e) {\n  e.preventDefault();\n\n  const title = document.getElementById('title').value;\n  const author = document.getElementById('author').value;\n  const pages = document.getElementById('pages').value;\n  const genre = document.getElementById('genre').value;\n  const hasRead = document.getElementById('hasRead').checked;\n  const newBook = new _book__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n    title,\n    author,\n    pages,\n    genre,\n    hasRead,\n    Library.bookCount\n  );\n\n  Library.addBookToLibrary(newBook);\n\n  closeForm();\n  document.getElementById('newBook').reset();\n}\n\nconst form = document.getElementById('newBook');\nform.addEventListener('submit', processForm);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);\n\n\n//# sourceURL=webpack://odin-library/./src/index.js?");

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* eslint-disable indent */\n/* eslint-disable no-param-reassign */\n\n// eslint-disable-next-line import/no-cycle\n\n\nclass LibraryClass {\n  totalBooks = 0;\n\n  myLibrary = [];\n\n  constructor() {\n    this.myLibrary = [];\n    this.totalBooks = 0;\n  }\n\n  get bookCount() {\n    return this.totalBooks;\n  }\n\n  incrementBookCount = () => {\n    this.totalBooks += 1;\n  };\n\n  addBookToLibrary = (newBook) => {\n    newBook.id = this.bookCount;\n    this.incrementBookCount();\n    this.myLibrary.push(newBook);\n    this.loadBooks();\n    this.addBookToStorage();\n  };\n\n  addBookToStorage = () => {\n    let storedArray = [];\n    for (const thisBook of this.myLibrary) {\n      let book = {\n        title: thisBook.title,\n        author: thisBook.author,\n        numPages: thisBook.numPages,\n        genre: thisBook.genre,\n        haveRead: Boolean(thisBook.haveRead),\n        id: thisBook.id,\n      };\n      storedArray.push(book);\n    }\n    window.localStorage.setItem('storedBookList', JSON.stringify(storedArray));\n  };\n\n  loadBooks = () => {\n    const books = document.getElementById('book-container');\n    // Remove all child elements\n    let firstChild = books.firstElementChild;\n    while (firstChild) {\n      firstChild.remove();\n      firstChild = books.firstElementChild;\n    }\n\n    this.myLibrary.forEach((Book) => {\n      const newBookCard = document.createElement('div');\n      newBookCard.classList.add('book-card');\n\n      newBookCard.innerHTML = `<h2>${Book.title}</h2>\n                <div class=\"book-info\">\n                    <h3>Author: ${Book.author}</h3>\n                    <h3>Pages: ${Book.numPages}</h3>\n                    <h3>Genre: ${Book.genre}</h3>\n                </div>\n                <div class=\"book-buttons\">\n                    <div class=\"switch-container\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" id=\"switch\">\n                        <span class=\"slider round\"></span>\n                    </label>\n                    <h3 class=\"switch-label\">${\n                      Book.haveRead ? 'Completed' : 'Incomplete'\n                    }</h3>\n                    </div>\n                    <button class=\"delete-button\" id=${\n                      Book.id\n                    }><span class=\"material-symbols-outlined\">\n                    delete\n                    </span></button>\n                </div>`;\n\n      // Add event listener to delete button\n      const buttonElement = newBookCard.querySelector('button');\n      buttonElement.addEventListener('click', (e) => {\n        let bookID = e.path[1].id;\n        bookID = parseInt(bookID);\n        const book = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myLibrary.find((book_) => book_.id === bookID);\n        const bookIndex = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myLibrary.indexOf(book);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].myLibrary.splice(bookIndex, 1);\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addBookToStorage();\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadBooks();\n      });\n\n      const checkbox = newBookCard.querySelector('#switch');\n      if (Book.haveRead) {\n        checkbox.checked = true;\n      }\n\n      const switchLabel = newBookCard.querySelector('.switch-label');\n      // Add event listener to read sitch\n      checkbox.addEventListener('change', (e) => {\n        if (e.target.checked) {\n          Book.haveRead = true;\n          switchLabel.textContent = 'Completed';\n        } else {\n          Book.haveRead = false;\n          switchLabel.textContent = 'Incomplete';\n        }\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addBookToStorage();\n      });\n\n      books.appendChild(newBookCard);\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LibraryClass);\n\n\n//# sourceURL=webpack://odin-library/./src/library.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;