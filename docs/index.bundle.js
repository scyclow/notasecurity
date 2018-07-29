/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??postcss!./index.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/postcss-loader/lib??postcss!./index.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Dosis);", ""]);

// module
exports.push([module.i, "* { padding: 0; margin: 0; }\n\nbody {\n  background-color: #99bb99;\n  -webkit-animation: fadecolor 4s;\n          animation: fadecolor 4s;\n  font-family: 'Dosis', sans-serif;\n}\n\nh1 {\n  font-size: 90px;\n}\n\nh2 {\n  font-size: 60px;\n}\n\n.text {\n  font-size: 45px;\n}\n\n.label {\n  text-align: center;\n  font-size: 25px;\n}\n\n@media(max-width: 638px) {\n  h1 {font-size: 60px;}\n\n  h2 {font-size: 40px;}\n\n  .text {font-size: 30px;}\n  .label {font-size: 17;}\n\n\n}\n\n@media(max-width: 405px) {\n  h1 {font-size: 47px;}\n\n  h2 {font-size: 30px;}\n\n  .text {font-size: 22px;}\n  .label {font-size: 12px;}\n\n}\n\nul {\n  list-style-image: url(" + escape(__webpack_require__(/*! ./bullet.svg */ "./bullet.svg")) + ")\n}\n\nli {\n  margin-left: 30px;\n  padding-left: 0.3em;\n  padding-bottom: 0.5em;\n}\n\n\n.hero {\n  padding: 30px 20px;\n  padding-bottom: 0;\n}\n\n.hero h1 {\n  /*text-decoration: underline;*/\n  text-transform: uppercase;\n  line-height: 1.4;\n  /*display: inline-block;*/\n  text-align: center;\n  -webkit-animation: fadein1 2500ms;\n          animation: fadein1 2500ms;\n}\n\n.hero .logo {\n  margin: auto;\n  margin-top: 34px;\n  width: 380px;\n  -webkit-animation: fadein2 2875ms;\n          animation: fadein2 2875ms;\n  cursor: pointer;\n}\n\n@media(min-width: 638px) {\n  .header-container {\n    width: 610px;\n    margin: auto;\n  }\n}\n\n@media(max-width: 638px) {\n  .hero {\n    padding: 10px;\n  }\n\n  .hero h1 {\n    text-align: center;\n  }\n\n  .hero .logo {\n    width: 275px;\n    margin-top: 35px;\n  }\n}\n\n@-webkit-keyframes fadein1 {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n@keyframes fadein1 {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n@-webkit-keyframes fadein2 {\n  0% {\n    opacity: 0;\n  }\n\n  15% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadein2 {\n  0% {\n    opacity: 0;\n  }\n\n  15% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadecolor {\n  from { background-color: #fff; }\n  to   { opacity: #99bb99; }\n}\n\n@keyframes fadecolor {\n  from { background-color: #fff; }\n  to   { opacity: #99bb99; }\n}\n\n.definition {\n  font-style: italic;\n  text-align: center;\n  font-size: 45px;\n  margin-top: 50px;\n  padding: 1em;\n  border: 5px solid;\n  border-radius: 10px;\n  background-color: #a2b7af;\n}\n\n@media(max-width: 740px) {\n  .definition {\n    font-size: 30px;\n    border: 4px solid;\n  }\n}\n\n@media(max-width: 464px) {\n  .definition {\n    font-size: 20px;\n    border: 0;\n    padding: 0;\n    background-color: #99bb99;\n  }\n}\n\ninput {\n  font-size: 28px;\n  padding: 10px;\n  border: 2px solid black;\n  border-radius: 5px;\n  font-weight: 300;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  background-color: #d5dfd5;\n  max-width: 70%;\n}\n\ninput:active,\ninput:focus {\n  background-color: #fff;\n}\n\n.easy-buy {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 25px;\n}\n\n\n.contract-address {\n  text-align: center;\n  display: block;\n  word-wrap: break-word;\n  margin-bottom: 40px;\n  text-decoration: none;\n  color: #000;\n}\n\n.contract-address:hover {\n  text-decoration: underline;\n}\n\n@media(max-width: 1100px) {\n  .contract-address {\n    font-size: 32px;\n  }\n}\n\n@media(max-width: 770px) {\n  .contract-address {\n    font-size: 22px;\n  }\n}\n\n.content {\n  padding: 0 10%;\n  -webkit-animation: fadein2 3s;\n          animation: fadein2 3s;\n}\n\nfooter {\n  margin-top: 20px;\n  padding: 10px 10%;\n}\n\nfooter, footer * {\n  color: #300513;\n}\n\n.faqs {\n  margin-top: 50px;\n}\n\n.faqs li {\n  margin-left: 40px;\n}\n\n.faqs p {\n  margin-bottom: 30px;\n}\n\n.faq-q {\n  color: #300513;\n}\n\n\n.divider {\n  background-image: url(" + escape(__webpack_require__(/*! ./border.svg */ "./border.svg")) + ");\n  background-repeat: repeat-x;\n  height: 15px;\n  margin: 60px 0;\n}\n\nh2 {\n  padding-bottom: 0.3em;\n  text-align: center;\n}\n\n.description li {\n  color: #300513;\n}\n\n.cta {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.cta-button {\n  border: 4px solid;\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: underline;\n  padding: 0.8em 1em;\n  font-size: 40px;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  color: black;\n  display: inline-block;\n  background-color: #dad6bb;\n}\n\n.cta-button:hover {\n  background-color: #300513;\n  border-color: #300513;\n  color: #99bb99;\n}\n\n@media(max-width: 740px) {\n  .cta-button {\n    font-size: 35px;\n  }\n}\n\n@media(max-width: 600px) {\n  .cta {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .cta-button:first-child {\n    margin-bottom: 40px;\n  }\n}\n/*\n@media(max-width: 464px) {\n  .cta-button {\n    font-size: 25px;\n  }\n}*/\n*::-moz-selection {\n  background-color: #000000;\n  color: #99bb99;\n}\n*::selection {\n  background-color: #000000;\n  color: #99bb99;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../node_modules/css-loader/lib/url/escape.js":
/*!****************************************************!*\
  !*** ../node_modules/css-loader/lib/url/escape.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./border.svg":
/*!********************!*\
  !*** ./border.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7d5e5ee1a2ed278a84bd859b11a7d27f.svg";

/***/ }),

/***/ "./bullet.svg":
/*!********************!*\
  !*** ./bullet.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c3331b98a0c63710dfa25ce8642aac29.svg";

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/lib??postcss!./index.css */ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??postcss!./index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! index.css */ "./index.css");
/* harmony import */ var index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_$__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/$ */ "./utils/$.js");
/* harmony import */ var _utils_$__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_$__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ "./logo.js");



// import { buyOnMEW, CONTRACT_ADDRESS } from './web3Setup'


_utils_$__WEBPACK_IMPORTED_MODULE_1___default.a.sub('logo', Object(_logo__WEBPACK_IMPORTED_MODULE_2__["default"])());

let blinking = false;
_utils_$__WEBPACK_IMPORTED_MODULE_1___default.a.onClick(_utils_$__WEBPACK_IMPORTED_MODULE_1___default.a.cls('logo'))(() => {
  blinking = !blinking;
  if (blinking) {
    _utils_$__WEBPACK_IMPORTED_MODULE_1___default.a.sub('logo', Object(_logo__WEBPACK_IMPORTED_MODULE_2__["blink"])());
  } else {
    _utils_$__WEBPACK_IMPORTED_MODULE_1___default.a.sub('logo', Object(_logo__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }
});

// $.onClick(buyNowButton)(() => {
//   // const amount = Number($.id('buy-now-amount').value);

//   // if (amount && !!window.web3) {
//   //   simpleBuy(amount)
//   // }
//   if (!!window.web3) {
//     buyOnMEW()
//   }
// })


function timedBlink(wait) {
  setTimeout(() => {
    _utils_$__WEBPACK_IMPORTED_MODULE_1___default.a.sub('logo', Object(_logo__WEBPACK_IMPORTED_MODULE_2__["blink"])());
    setTimeout(() => {
      _utils_$__WEBPACK_IMPORTED_MODULE_1___default.a.sub('logo', Object(_logo__WEBPACK_IMPORTED_MODULE_2__["default"])());
      timedBlink(random(4000, 12000, true));
    }, random(150, 250, true));
  }, wait);
}

timedBlink(3000);

function isNumber(num) {
  return typeof num === 'number' && num !== NaN;
}

function isBoolean(bool) {
  return typeof bool === 'boolean';
}

function random(i, j, k) {
  if (isBoolean(k) && k) return Math.floor(random(i, j));else if (isNumber(j)) return i + random(j - i);else if (isBoolean(j)) return Math.floor(random(i));else return Math.random() * i;
}

/***/ }),

/***/ "./logo.js":
/*!*****************!*\
  !*** ./logo.js ***!
  \*****************/
/*! exports provided: default, blink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blink", function() { return blink; });
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const size = '100%';
  const color = 'black';
  return `
    <svg stroke="${color}" width="${size}" viewBox="0 0 402 353" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52.8276 267L13.8564 334.5C7.698 345.167 15.396 358.5 27.7128 358.5H386.247C398.564 358.5 406.262 345.167 400.104 334.5L355.936 258M113.449 162L123.842 144C123.842 144 123.842 144 123.842 144L193.124 24C199.282 13.3333 214.678 13.3333 220.836 24L303.975 168" transform="translate(-5.9801 -11)" stroke-width="10"/>
      <path d="M0 87.6049C133.761 -28.85 208.179 -29.5528 340 87.6049" transform="translate(28 139.072)" stroke-width="8"/>
      <path d="M0 85.4976C128.242 -28.3438 202.824 -28.6545 340 85.4976" transform="translate(368 307.413) rotate(180)" stroke-width="8"/>
      <path d="M2.808 66.008C2.808 65.432 3.024 64.856 3.456 64.28C3.936 63.656 4.44 63.344 4.968 63.344C5.304 63.344 5.76 63.632 6.336 64.208L8.352 66.224C9.072 66.944 10.224 67.616 11.808 68.24C13.392 68.864 15.192 69.2 17.208 69.248V48.296L15.264 47.576L13.464 46.928C12.504 46.544 11.856 46.256 11.52 46.064L9.936 45.2C9.12 44.816 8.544 44.456 8.208 44.12C7.92 43.784 7.488 43.352 6.912 42.824C6.336 42.296 5.928 41.768 5.688 41.24L4.896 39.44C4.608 38.768 4.392 38.048 4.248 37.28C4.152 36.464 4.104 35.6 4.104 34.688C4.104 30.56 5.352 27.536 7.848 25.616C10.392 23.648 13.512 22.544 17.208 22.304V20.072C17.208 19.688 17.352 19.376 17.64 19.136C17.976 18.848 18.384 18.704 18.864 18.704C19.248 18.704 19.608 18.848 19.944 19.136C20.328 19.424 20.52 19.736 20.52 20.072V22.16C23.304 22.256 25.824 22.736 28.08 23.6C30.336 24.416 31.464 25.4 31.464 26.552C31.464 27.128 31.248 27.728 30.816 28.352C30.432 28.928 29.952 29.216 29.376 29.216C29.232 29.216 28.248 28.808 26.424 27.992C24.6 27.128 22.632 26.648 20.52 26.552V44.408C22.344 45.08 23.856 45.728 25.056 46.352C26.256 46.976 27.504 47.864 28.8 49.016C30.096 50.12 31.08 51.56 31.752 53.336C32.424 55.064 32.76 57.104 32.76 59.456C32.76 63.632 31.656 66.92 29.448 69.32C27.288 71.672 24.312 73.088 20.52 73.568V76.376C20.52 76.712 20.328 77.024 19.944 77.312C19.608 77.6 19.248 77.744 18.864 77.744C18.384 77.744 17.976 77.6 17.64 77.312C17.352 77.072 17.208 76.76 17.208 76.376V73.784C13.08 73.736 9.648 72.824 6.912 71.048C4.176 69.272 2.808 67.592 2.808 66.008ZM8.64 34.256C8.64 36.8 9.36 38.696 10.8 39.944C12.288 41.192 14.472 42.32 17.352 43.328V26.624C11.544 27.104 8.64 29.648 8.64 34.256ZM20.304 69.104C25.536 68.288 28.152 65.216 28.152 59.888C28.152 57.008 27.48 54.824 26.136 53.336C24.792 51.8 22.848 50.504 20.304 49.448V69.104Z" transform="translate(183 174)" fill="${color}"/>
      <path d="M0 105.023C145.563 -34.5862 226.547 -35.4288 370 105.023" transform="translate(13 122.484)" stroke-width="10"/>
      <path d="M0 102.497C139.557 -33.9794 220.72 -34.3519 370 102.497" transform="translate(383 324.297) rotate(180)" stroke-width="10"/>
      <path d="M89.5632 46.9792C89.5632 70.7318 70.3934 89.9583 46.7816 89.9583C23.1699 89.9583 4 70.7318 4 46.9792C4 23.2265 23.1699 4 46.7816 4C70.3934 4 89.5632 23.2265 89.5632 46.9792Z" transform="translate(154.762 174.097)" stroke-width="8"/>
    </svg>
  `;
});

const blink = () => {
  const size = '100%';
  const color = 'black';
  return `
    <svg stroke="${color}" width="${size}" viewBox="0 0 402 353" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52.8276 267L13.8564 334.5C7.698 345.167 15.396 358.5 27.7128 358.5H386.247C398.564 358.5 406.262 345.167 400.104 334.5L355.936 258M113.449 162L123.842 144C123.842 144 123.842 144 123.842 144L193.124 24C199.282 13.3333 214.678 13.3333 220.836 24L303.975 168" transform="translate(-5.9801 -11)" stroke-width="10"/>
      <path d="M0 11C133.523 -3.64667 211.176 -3.68665 354 11" transform="translate(376 235) rotate(180)" stroke-width="8"/>
      <path d="M0 104.511C145.563 -34.4175 226.547 -35.256 370 104.511" transform="translate(13 123.472)" stroke-width="10"/>
      <path d="M0 101.997C139.557 -33.8136 220.72 -34.1844 370 101.997" transform="translate(383 324.3) rotate(180)" stroke-width="10"/>
    </svg>

  `;
};

/***/ }),

/***/ "./utils/$.js":
/*!********************!*\
  !*** ./utils/$.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// @flow weak


const floor = Math.floor.bind(Math);
const round = Math.round.bind(Math);
const abs = Math.abs.bind(Math);
const max = Math.max.bind(Math);
const min = Math.min.bind(Math);
const runFn = fn => fn();
const noop = () => {};
function isFunction(fn) {
  return typeof fn === 'function';
}

function distance(a, b) {
  const xDiff = abs(a.x - b.x);
  const yDiff = abs(a.y - b.y);
  return (xDiff ** 2 + yDiff ** 2) ** 0.5;
}

const keyDict = {
  enter: 13,
  space: 32,
  P: 80,
  p: 112
};

const $ = (elem, prop, value) => elem.style[prop] = value;

$.qsa = document.querySelectorAll.bind(document);
$.id = document.getElementById.bind(document);
$.class = $.cls = className => [].slice.call(document.getElementsByClassName(className));

$.eventDimensions = event => ({
  x: event.clientX + window.pageXOffset,
  y: event.clientY + window.pageYOffset
});

const eventListener = (eventType, hasCoords) => (element = document) => fn => {
  const one = elem => {
    const listener = hasCoords ? $.coordsEvent(fn) : fn;
    elem.addEventListener(eventType, listener);
    const clear = () => elem.removeEventListener(eventType, listener);
    return clear;
  };

  const multiple = elems => {
    const clears = elems.map(one);
    return () => clears.map(runFn);
  };

  return element.length && element.map ? multiple(element) : one(element);
};

$.onMouseMove = eventListener('mousemove', true);
$.onHover = eventListener('mouseover');
$.onOrient = fn => eventListener('deviceorientation')(window)($.orientEvent(fn));
$.onResize = eventListener('resize', true);

const keypress = key => (fn, element) => eventListener('keypress')(element)(event => {
  if (event.keyCode === keyDict[key]) return fn(event);
});

// key: string | Array<string>
// => clearing function
$.onKeyPress = key => {
  if (Array.isArray(key)) {
    // set all keypress events
    const presses = key.map(keypress);
    // return an eventListener function
    return (fn, element) => {
      // register all press events
      const clears = presses.map(press => press(fn, element));
      // return a clearing fn
      return () => clears.forEach(runFn);
    };
  } else {
    return keypress(key);
  }
};

$.center = $.getCenterOfElement = elem => {
  const { top, bottom, left, right } = elem.getBoundingClientRect();
  return {
    x: left + (right - left) / 2,
    y: top + (bottom - top) / 2
  };
};

$.coordsEvent = fn => event => {
  const coords = $.eventDimensions(event);
  const { x, y } = coords;
  return fn({ coords, event, x, y });
};

$.orientEvent = fn => event => {
  const { beta, gamma, absolute, alpha } = event;
  fn({ beta, gamma, absolute, alpha, event });
};

$.distanceFromCenter = (elem, event) => distance($.center(elem), event.coords || $.eventDimensions(event));

$.onHover = element => (fnEnter, fnLeave) => {
  if (!isFunction(fnLeave) && !element) {
    element = fnLeave;
    fnLeave = null;
  }

  const clears = [eventListener('mouseenter')(element)(fnEnter), fnLeave ? eventListener('mouseleave')(element)(fnLeave) : noop];

  return () => clears.forEach(runFn);
};

$.onClick = eventListener('click', true);

$.window = {
  // $FlowFixMe
  get width() {
    return window.innerWidth;
  },
  // $FlowFixMe
  get height() {
    return window.innerHeight;
  }
};

const parser = new DOMParser();
$.fromString = str => {
  return parser.parseFromString(str, 'text/xml').children[0];
};

$.appendString = (el, str) => el.appendChild($.fromString(str));

function each(arr, fn = noop) {
  for (let i = 0; i < arr.length; i++) {
    let output = fn(arr[i], i);
    if (output === false) return false;
  }
  return arr;
}

$.sub = (cls, thing) => {
  each($.cls(cls), c => c.innerHTML = thing);
};

window.$ = $;
module.exports = $;

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map