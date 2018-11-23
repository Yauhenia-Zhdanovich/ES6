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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const apiKey = '104b255245ef41b2a0311bc877694c67';
/* harmony export (immutable) */ __webpack_exports__["a"] = apiKey;


const newsChannels1 = {
    'CNN': 'cnn',
    'Bloomberg': 'bloomberg',
    "BBC News": 'bbc-news',
    'Google News': 'google-news',
    'TechCrunch': 'techcrunch',
    'Time': 'time',
    'New Scientist': 'new-scientist',
    'NFL News': 'nfl-news',
    'National Gographic': 'national-geographic',
    'USA Today': 'usa-today'
};
/* harmony export (immutable) */ __webpack_exports__["b"] = newsChannels1;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_channel_item__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_articles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loader__ = __webpack_require__(11);






let currentChannel = 'cnn';
let loader;

const setCssClass = (currentValue, className) => {
  let previousItem = document.querySelector(`.${className}`);
  previousItem.classList.remove(`${className}`);
  let currentItem = document.querySelector(`#${currentValue}`);
  currentItem.classList.add(`${className}`);
};

const getArticles = (newsChannel, articlesContainer, newsContainer) => {
  return Object(__WEBPACK_IMPORTED_MODULE_3__create_articles__["a" /* createArtciles */])(newsChannel)
    .then(data => {
    return Promise.all(data.arrayOfPromises)
      .then(() => {
        data.arrayOfArticles.forEach(element => {
          articlesContainer.appendChild(element);
        });
        loader.hideLoader();
      })
      .catch(err => {
        console.log(err);
        newsContainer.addEventListener('click', onContainerClick);
      });
  })
};

const onContainerClick  = (event) => {
  if (event.target === event.currentTarget) {
    return;
  }
  const newsChannelId = event.target.id;
  setCssClass(newsChannelId, 'active-channel');

  if (currentChannel !== newsChannelId) {
    const newsContainer = document.querySelector('#newsChannels');
    const news = document.querySelector('#news');
    const currentArticles = document.querySelector('.news-articles');

    const newArticlesContainer = document.createElement('div');

    newsContainer.removeEventListener('click', onContainerClick);
    news.removeChild(currentArticles);
    currentChannel = newsChannelId;

    newArticlesContainer.classList.add('news-articles');
    news.appendChild(newArticlesContainer);
    loader.showLoader();
    getArticles(currentChannel, newArticlesContainer, newsContainer)
      .then(() => newsContainer.addEventListener('click', onContainerClick));
  }
};

const main = () => {
  const newsContainer = document.querySelector('#newsChannels');
  const news = document.querySelector('#news');
  const newsArticlesContainer = document.createElement('div');
  loader = new __WEBPACK_IMPORTED_MODULE_4__components_loader__["a" /* Loader */](news);
  loader.createLoader();
  newsArticlesContainer.classList.add('news-articles');
  news.appendChild(newsArticlesContainer);
  getArticles(currentChannel, newsArticlesContainer, newsContainer)
    .then(() => {
      newsContainer.addEventListener('click', onContainerClick);
    });
  loader.showLoader();
  Object.entries(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* newsChannels1 */]).forEach((channel) => {
    newsContainer.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__news_channel_item__["a" /* createNewsChannelItem */])(channel[0], channel[1], currentChannel));
  });
};

document.addEventListener('load', main());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "html, body {\r\n  font-size: 10px;\r\n}\r\n\r\n.news {\r\n  display: grid;\r\n  grid-template-columns: 2fr 7fr;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.news__header {\r\n  text-align: center;\r\n  font-size: 4.5rem;\r\n}\r\n\r\n.news__channel-list {\r\n  margin-top: 2px;\r\n}\r\n\r\n.news__channels-header, .news__artclies-header {\r\n  font-size: 1.5rem;\r\n  height: 2rem;\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.news__artclies-header {\r\n  text-align: center;\r\n}\r\n\r\n img {\r\n   width: 100% !important;\r\n   height: auto !important;\r\n }\r\n\r\n section {\r\n   margin: 2px;\r\n }\r\n\r\n.news-articles {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.news-channel {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  margin-bottom: 1rem;\r\n  vertical-align: middle;\r\n  padding: 1rem 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.loader {\r\n  position: relative;\r\n  height: 5rem;\r\n}\r\n\r\n.circle-loader {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 45%;\r\n  border: 6px solid transparent;\r\n  border-top-color: #b8b9ca;\r\n  width: 90px;\r\n  height: 90px;\r\n  box-sizing: border-box;\r\n  border-radius: 50%;\r\n  animation: loader-animation 1s linear infinite;\r\n}\r\n\r\n.active-channel {\r\n  background: #d8d9da;\r\n}\r\n\r\n.loader-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  font-size: 18px;\r\n  color: #d8d9da;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n@keyframes loader-animation {\r\n  0% {\r\n      transform: rotate(0deg);\r\n  }\r\n  100% {\r\n      transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@media (min-width:650px) {\r\n  html, body {\r\n    font-size: 13px;\r\n  }\r\n\r\n  .news {\r\n    width: 96%;\r\n  }\r\n}\r\n\r\n@media (min-width:1025px) {\r\n  html, body {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .news {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media (min-width:1281px) {\r\n  html, body {\r\n    font-size: 17px;\r\n  }\r\n\r\n  .news {\r\n    width: 65%;\r\n  }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 4 */
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
/* 5 */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
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

var	fixUrls = __webpack_require__(6);

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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
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

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createNewsChannelItem = (channelName,channelId, currentChannel) => {
  let newsItem = document.createElement('div');
  newsItem.innerHTML = channelName;
  newsItem.classList.add('card');
  newsItem.classList.add('news-channel');
  newsItem.setAttribute('id', channelId);
  if (channelId === currentChannel) {
    newsItem.classList.add('active-channel')
  }
  return newsItem;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewsChannelItem;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_article__ = __webpack_require__(10);




const fetchService = new __WEBPACK_IMPORTED_MODULE_0__fetch_service__["a" /* FetchService */];

const createArtciles = (newsChannelId) => {
  return fetchService.fetchDataFromServer(newsChannelId, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* apiKey */]).then(data => {
    let arrayOfPromises = [];
    let arrayOfArticles = [];
    data.forEach(element => {
      let articles = new __WEBPACK_IMPORTED_MODULE_2__components_article__["a" /* Article */](element);
      arrayOfPromises = [...arrayOfPromises, articles.createArticleComponent()];
      arrayOfArticles.push(articles.component);
    });
    return {
      arrayOfPromises: arrayOfPromises,
      arrayOfArticles: arrayOfArticles
    }
  })
};
/* harmony export (immutable) */ __webpack_exports__["a"] = createArtciles;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FetchService {
  constructor() {}

  fetchDataFromServer(newsChannelId, key) {
    return fetch(`https://newsapi.org/v1/articles?source=${newsChannelId}&apiKey=${key}`)
      .then(resp => resp.json())
      .catch(err => {
        console.log(err);
        return [];
      })
      .then(data => {
        return data.articles || [];
      });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FetchService;

// {
//   "presets" : ["es2015", "react"],
// "plugins": [
//       "transform-object-rest-spread",
//       "@babel/plugin-proposal-object-rest-spread",
//       "transform-runtime"
//   ]
// }

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Article {
  constructor({description, publishedAt, title, url, urlToImage}) {
    this.description = description || 'follow the link to find out more';
    this.publishedAt = publishedAt || '';
    this.title = title || '';
    this.url = url || '';
    this.urlToImage = urlToImage;
    this.component = null;
  }

  createArticleComponent() {
    const articleComponent = document.createElement('section');
    const image = document.createElement('img');
    const content = document.createElement('div');
    articleComponent.classList.add('card');
    image.setAttribute('src', this.urlToImage);
    content.innerHTML = `
      <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <time>${this.publishedAt}</time>
        <p class="card-text">${this.description}</p>
        <a href="${this.url}" class="btn btn-primary" target="_blank">read more...</a>
      </div>
    `;
    articleComponent.appendChild(image);
    articleComponent.appendChild(content);
    this.component = articleComponent;
    if (this.urlToImage) {
      return new Promise((resolve) => {
        image.addEventListener('load', () => {
          resolve();
        });
      });
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Article;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Loader {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.loader = null;
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
      <div class="circle-loader"></div>`;
      this.loader = loader;
  }

  showLoader() {
    this.parentElement.appendChild(this.loader);
  }

  hideLoader() {
    let loader = document.querySelector('.loader');
    this.parentElement.removeChild(loader);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Loader;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map