(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/article.js":
/*!***********************************!*\
  !*** ./src/components/article.js ***!
  \***********************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Article =
/*#__PURE__*/
function () {
  function Article(_ref) {
    var _ref$description = _ref.description,
        description = _ref$description === void 0 ? 'follow the link to find out more' : _ref$description,
        _ref$publishedAt = _ref.publishedAt,
        publishedAt = _ref$publishedAt === void 0 ? '' : _ref$publishedAt,
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? '' : _ref$title,
        _ref$url = _ref.url,
        url = _ref$url === void 0 ? '' : _ref$url,
        urlToImage = _ref.urlToImage;

    _classCallCheck(this, Article);

    this.description = description || 'follow the link to find out more';
    this.publishedAt = publishedAt || '';
    this.title = title || '';
    this.url = url || '';
    this.urlToImage = urlToImage || '';
    this.component = null;
  }

  _createClass(Article, [{
    key: "createArticleComponent",
    value: function createArticleComponent() {
      var articleComponent = document.createElement('section');
      var image = document.createElement('img');
      var content = document.createElement('div');
      articleComponent.classList.add('card');
      image.setAttribute('src', this.urlToImage);
      content.innerHTML = "\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">".concat(this.title, "</h4>\n        <time>").concat(this.publishedAt, "</time>\n        <p class=\"card-text\">").concat(this.description, "</p>\n        <a href=\"").concat(this.url, "\" class=\"btn btn-primary\" target=\"_blank\">read more...</a>\n      </div>\n    ");
      articleComponent.appendChild(image);
      articleComponent.appendChild(content);
      this.component = articleComponent;

      if (this.urlToImage) {
        return new Promise(function (resolve) {
          image.addEventListener('load', function () {
            resolve();
          });
        });
      }
    }
  }]);

  return Article;
}();

/***/ }),

/***/ "./src/components/loader.js":
/*!**********************************!*\
  !*** ./src/components/loader.js ***!
  \**********************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Loader =
/*#__PURE__*/
function () {
  function Loader(parentElement) {
    _classCallCheck(this, Loader);

    this.parentElement = parentElement;
    this.loader = null;
  }

  _createClass(Loader, [{
    key: "createLoader",
    value: function createLoader() {
      var loader = document.createElement('div');
      loader.classList.add('loader');
      loader.innerHTML = "\n      <div class=\"circle-loader\"></div>";
      this.loader = loader;
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      this.parentElement.appendChild(this.loader);
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      var loader = document.querySelector('.loader');
      this.parentElement.removeChild(loader);
    }
  }]);

  return Loader;
}();

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: apiKey, newsChannels1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiKey", function() { return apiKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsChannels1", function() { return newsChannels1; });
var apiKey = '104b255245ef41b2a0311bc877694c67';
var newsChannels1 = {
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

/***/ }),

/***/ "./src/create-articles.js":
/*!********************************!*\
  !*** ./src/create-articles.js ***!
  \********************************/
/*! exports provided: createArtciles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArtciles", function() { return createArtciles; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/article */ "./src/components/article.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-service */ "./src/fetch-service.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { FetchService } from './fetch-service';



function createArtciles(_x) {
  return _createArtciles.apply(this, arguments);
}

function _createArtciles() {
  _createArtciles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(newsChannelId) {
    var settings;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            settings = {
              newsChannelId: newsChannelId,
              key: _constants__WEBPACK_IMPORTED_MODULE_0__["apiKey"]
            };
            return _context.abrupt("return", Object(_fetch_service__WEBPACK_IMPORTED_MODULE_2__["httpService"])('GET', settings).then(function (data) {
              var arrayOfPromises = [];
              var arrayOfArticles = [];
              data.forEach(function (element) {
                var articles = new _components_article__WEBPACK_IMPORTED_MODULE_1__["Article"](element);
                arrayOfPromises = _toConsumableArray(arrayOfPromises).concat([articles.createArticleComponent()]);
                arrayOfArticles.push(articles.component);
              });
              return {
                arrayOfPromises: arrayOfPromises,
                arrayOfArticles: arrayOfArticles
              };
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _createArtciles.apply(this, arguments);
}

;

/***/ }),

/***/ "./src/fetch-service.js":
/*!******************************!*\
  !*** ./src/fetch-service.js ***!
  \******************************/
/*! exports provided: httpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpService", function() { return httpService; });
var handleErrors = function handleErrors(err) {
  __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./components/error-pop-up */ "./src/components/error-pop-up.js")).then(function (module) {
    var ErrorPopup = module.ErrorPopup;
    var popup = new ErrorPopup();
    popup.showPopup();
    console.log(err);
  });
  return [];
};

function fetchData(method, settings) {
  switch (method) {
    case 'GET':
      return fetch("https://newsapi.org/v1/articles?source=".concat(settings.newsChannelId, "&apiKey=").concat(settings.key)).then(function (resp) {
        return resp.json();
      }).catch(handleErrors).then(function (data) {
        return data.articles || [];
      });

    case 'POST':
      return fetch('https://newsapi.org', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(settings.body)
      }).then(function (response) {
        return response.json();
      }).catch(handleErrors());

    case 'PUT':
      return fetch('https://newsapi.org/v1/articles', {
        method: 'PUT',
        body: settings.body
      }).then(function (response) {
        return response.json();
      }).catch(handleErrors);

    default:
      return false;
  }
}

var httpService = new Proxy(fetchData, {
  apply: function apply(target, thisArg, argumentsList) {
    console.log("sending the ".concat(argumentsList[0], " method with ").concat(JSON.stringify(argumentsList[1]), " params"));
    return target.apply(thisArg, argumentsList);
  }
});

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: setCssClass, contentUploadBootsrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCssClass", function() { return setCssClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentUploadBootsrapper", function() { return contentUploadBootsrapper; });
/* harmony import */ var _create_articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-articles */ "./src/create-articles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var setCssClass = function setCssClass(currentValue, className) {
  var previousItem = document.querySelector(".".concat(className));
  previousItem.classList.remove("".concat(className));
  var currentItem = document.querySelector("#".concat(currentValue));
  currentItem.classList.add("".concat(className));
};
function contentUploadBootsrapper() {
  return _contentUploadBootsrapper.apply(this, arguments);
}

function _contentUploadBootsrapper() {
  _contentUploadBootsrapper = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var updateDom, _updateDom;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _updateDom = function _ref2() {
              _updateDom = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var welcomeContent, body, newsContent;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        welcomeContent = document.querySelector('.news__welcome-block');
                        body = document.querySelector('body');
                        body.removeChild(welcomeContent);
                        newsContent = document.createElement('main');
                        newsContent.classList.add('news');
                        newsContent.innerHTML = "\n      <section>\n        <header class=\"news__channels-header\">News Channels</header>\n        <div id =\"newsChannels\" class=\"news__channel-list\"></div>\n      </section>\n      <section>\n        <header class=\"news__artclies-header\">News</header>\n        <section id=\"news\"></section>\n      </section>";
                        body.appendChild(newsContent);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
              return _updateDom.apply(this, arguments);
            };

            updateDom = function _ref() {
              return _updateDom.apply(this, arguments);
            };

            _context2.next = 4;
            return updateDom();

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _contentUploadBootsrapper.apply(this, arguments);
}

/***/ }),

/***/ "./src/news-channel-item.js":
/*!**********************************!*\
  !*** ./src/news-channel-item.js ***!
  \**********************************/
/*! exports provided: createNewsChannelItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewsChannelItem", function() { return createNewsChannelItem; });
var createNewsChannelItem = function createNewsChannelItem(channelName, channelId, currentChannel) {
  var newsItem = document.createElement('div');
  newsItem.innerHTML = channelName;
  newsItem.classList.add('card');
  newsItem.classList.add('news-channel');
  newsItem.setAttribute('id', channelId);

  if (channelId === currentChannel) {
    newsItem.classList.add('active-channel');
  }

  return newsItem;
};

/***/ }),

/***/ "./src/upload-content.js":
/*!*******************************!*\
  !*** ./src/upload-content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_channel_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-channel-item */ "./src/news-channel-item.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _create_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-articles */ "./src/create-articles.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loader */ "./src/components/loader.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var currentChannel = 'cnn';
  var loader;

  var onContainerClick = function onContainerClick(event) {
    if (event.target === event.currentTarget) {
      return;
    }

    var newsChannelId = event.target.id;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setCssClass"])(newsChannelId, 'active-channel');

    if (currentChannel !== newsChannelId) {
      var newsContainer = document.querySelector('#newsChannels');
      var news = document.querySelector('#news');
      var currentArticles = document.querySelector('.news-articles');
      var newArticlesContainer = document.createElement('div');
      newsContainer.removeEventListener('click', onContainerClick);
      news.removeChild(currentArticles);
      currentChannel = newsChannelId;
      newArticlesContainer.classList.add('news-articles');
      news.appendChild(newArticlesContainer);
      loader.showLoader();
      getArticles(currentChannel, newArticlesContainer, newsContainer).then(function () {
        return newsContainer.addEventListener('click', onContainerClick);
      });
    }
  };

  function getArticles(_x, _x2, _x3) {
    return _getArticles.apply(this, arguments);
  }

  function _getArticles() {
    _getArticles = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(newsChannel, articlesContainer, newsContainer) {
      var articles, attachArticles, _attachArticles;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _attachArticles = function _ref2() {
                _attachArticles = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(data) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", Promise.all(data.arrayOfPromises).then(function () {
                            data.arrayOfArticles.forEach(function (element) {
                              articlesContainer.appendChild(element);
                            });
                            loader.hideLoader();
                          }).catch(function (err) {
                            console.log(err);
                            newsContainer.addEventListener('click', onContainerClick);
                          }));

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
                return _attachArticles.apply(this, arguments);
              };

              attachArticles = function _ref(_x4) {
                return _attachArticles.apply(this, arguments);
              };

              _context2.next = 4;
              return Object(_create_articles__WEBPACK_IMPORTED_MODULE_2__["createArtciles"])(newsChannel);

            case 4:
              articles = _context2.sent;
              _context2.next = 7;
              return attachArticles(articles);

            case 7:
              return _context2.abrupt("return", _context2.sent);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _getArticles.apply(this, arguments);
  }

  ;

  var main = function main() {
    var newsContainer = document.querySelector('#newsChannels');
    var news = document.querySelector('#news');
    var newsArticlesContainer = document.createElement('div');
    loader = new _components_loader__WEBPACK_IMPORTED_MODULE_3__["Loader"](news);
    loader.createLoader();
    newsArticlesContainer.classList.add('news-articles');
    news.appendChild(newsArticlesContainer);
    getArticles(currentChannel, newsArticlesContainer, newsContainer).then(function () {
      newsContainer.addEventListener('click', onContainerClick);
    });
    loader.showLoader();
    Object.entries(_constants__WEBPACK_IMPORTED_MODULE_1__["newsChannels1"]).forEach(function (channel) {
      newsContainer.appendChild(Object(_news_channel_item__WEBPACK_IMPORTED_MODULE_0__["createNewsChannelItem"])(channel[0], channel[1], currentChannel));
    });
  };

  Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["contentUploadBootsrapper"])().then(function () {
    main();
  });
});

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map