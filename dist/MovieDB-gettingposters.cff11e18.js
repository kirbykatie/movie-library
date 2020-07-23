// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/tempData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tempData = tempData;
exports.dataForDB = dataForDB;

/*
let testMovie = {
			id: 0,
			title: "The Movie",
			year: 2000,
			genre: ["genre1", "genre2"],
			runtime: 120, 
			poster: "/img/poster.jpg", 
			//Attributes below are user-added, not by API. All but "rating" are strictly for moi
			rating: 5,
			quality: "high", //low/medium/high
			subtitles: false,
			franchise: null //null if not part of franchise. obj if part of franchise with franchise name and # in franchise as attributes
		}

*/
//use this to quickly organize video data: http://www.convertcsv.com/csv-to-json.htm
function tempData() {
  return [{
    id: 0,
    title: "Avengers: Endgame",
    year: 2019,
    genre: ["action"],
    runtime: 182,
    poster: "./img/avengers-endgame.jpg",
    rating: 5,
    quality: "low",
    subtitles: false,
    franchise: {
      name: "Marvel Cinematic Universe",
      number: "22"
    },
    tags: ["chris evans", "katie fave"]
  }, {
    id: 1,
    title: "Pride & Prejudice",
    year: 2005,
    genre: ["romance", "drama", "period"],
    runtime: 135,
    poster: "./img/pride-and-prejudice.jpg",
    rating: 5,
    quality: "high",
    subtitles: true,
    franchise: null,
    tags: ["katie fave"]
  }, {
    id: 2,
    title: "Children of Men",
    year: 2006,
    genre: ["sci-fi", "drama"],
    runtime: 114,
    poster: "./img/children-of-men.jpg",
    rating: 5,
    quality: "high",
    subtitles: true,
    franchise: null,
    tags: ["katie fave"]
  }, {
    id: 3,
    title: "Avengers: Infinity War",
    year: 2018,
    genre: ["action"],
    runtime: 160,
    poster: "./img/avengers-infinity-war.jpg",
    rating: 5,
    quality: "high",
    subtitles: false,
    franchise: {
      name: "Marvel Cinematic Universe",
      number: "19"
    },
    tags: ["chris evans", "katie fave"]
  }, {
    id: 4,
    title: "Interstellar",
    year: 2014,
    genre: ["sci-fi", "drama"],
    runtime: 169,
    poster: "./img/interstellar.jpg",
    //update
    rating: 5,
    quality: "high",
    subtitles: false,
    franchise: null,
    tags: ["katie fave"]
  }, {
    id: 5,
    title: "The Royal Tenenbaums",
    year: 2001,
    genre: ["drama", "comedy"],
    runtime: 110,
    //update
    poster: "./img/the-royal-tenenbaums.jpg",
    //update
    rating: 2,
    quality: "medium",
    subtitles: false,
    franchise: null,
    tags: []
  }, {
    id: 6,
    title: "Blade Runner 2049",
    year: 2017,
    genre: ["drama", "sci-fi", "action"],
    runtime: 164,
    poster: "./img/blade-runner-2049.jpg",
    //update
    rating: 4,
    quality: "high",
    subtitles: false,
    franchise: {
      name: "Blade Runner",
      number: 2
    },
    tags: ["cinematography"]
  }, {
    id: 7,
    title: "Belle",
    year: 2013,
    genre: ["drama", "romance", "period"],
    runtime: 105,
    poster: "./img/belle.jpg",
    //update
    rating: 4,
    quality: "high",
    subtitles: false,
    franchise: null,
    tags: []
  }, {
    id: 8,
    title: "O Brother, Where Art Thou?",
    year: 2000,
    genre: ["period", "adventure"],
    runtime: 108,
    poster: "./img/o-brother-where-art-thou.jpg",
    //update
    rating: 4,
    quality: "high",
    subtitles: true,
    franchise: null,
    tags: []
  }, {
    id: 9,
    title: "The Fall",
    year: 2006,
    genre: ["period", "fantasy"],
    runtime: 117,
    poster: "./img/the-fall.jpg",
    //update
    rating: 3,
    quality: "high",
    subtitles: false,
    franchise: null,
    tags: ["lee pace", "weird"]
  }];
}

function dataForDB() {
  return [{
    "title": "Avengers: Endgame",
    "year": 2019
  }, {
    "title": "Pride & Prejudice",
    "year": 2005
  }, {
    "title": "Avengers: Infinity War",
    "year": 2018
  }, {
    "title": "The Royal Tenenbaums",
    "year": 2001
  }, {
    "title": "Blade Runner 2049",
    "year": 2017
  }];
}
},{}],"js/MovieDB-gettingposters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tempData = require("./tempData");

//API key: 8e2d6127cc40be5fb97e783dbecb0985
//example request: https://api.themoviedb.org/3/movie/550?api_key=8e2d6127cc40be5fb97e783dbecb0985
function startSearch() {
  /* Ok so basically- (aw fuck, i cant believe youve done this)
  	-startSearch is parent function that holds everything, basically one step below global scope
  	-startSearch will get all the movie SEARCH data that I will throw in
  	-A setInterval is set for whatever amount of time to avoid hitting the server too much. The interval will run thru the next movie to be searched json
  	-that will go into the createRequest function that will pull apart the movie to be searched obj and build the full request URL, returns it to parent func
  	-(still within Interval), fetch call is made to search that movie, get returned data. 
  	-callback function (createData) will then take the returned data and append it to an array that will hold ALL returned movie data objs
  	-setInterval ends and starts the next
  	-at the end, data is console logged and stored in local storage so I only have to call once!
  	*/
  var apiKey = "8e2d6127cc40be5fb97e783dbecb0985"; //move to an env file 

  function createRequest(movie) {
    var query = encodeURIComponent(movie.title);
    var year = null;

    if (movie.year) {
      year = "&year=".concat(movie.year);
    }

    return "https://api.themoviedb.org/3/search/movie?api_key=".concat(apiKey, "&language=en-US&query=").concat(query, "&page=1").concat(year ? year : "");
  }

  function fetchData(requestURL, callback) {
    fetch(requestURL, callback).then(function (response) {
      return response.json();
    }).then(function (data) {
      //console.log(data);
      callback(data);
    }).catch(function (error) {
      return console.error('Error:', error);
    });
  }

  function createData(rawData) {
    console.log(rawData);
    var rawMovie = rawData.results[0];
    var movie = {
      id: rawMovie.id,
      title: rawMovie.title,
      year: rawMovie.release_date.slice(0, 4),
      genre: rawMovie.genre_ids,
      poster: "http://image.tmdb.org/t/p/w500".concat(rawMovie.poster_path)
    };
    allMovieData.push(movie);
    console.log(allMovieData);
  }

  var movieSearchData = (0, _tempData.dataForDB)();
  console.log(movieSearchData);
  var counter = 0;
  var searchInterval = window.setInterval(function () {
    var requestURL = createRequest(movieSearchData[counter]); //console.log(requestURL);

    fetchData(requestURL, createData);
    counter += 1;

    if (counter === movieSearchData.length) {
      clearInterval(searchInterval);
      document.querySelector("#root").innerHTML = "\n\t\t\t<pre>\n\t\t\t  <code>".concat(JSON.stringify(allMovieData), "</code>\n\t\t\t</pre>\n\t\t\t");
    }
  }, 500);
  var allMovieData = [];
}

var _default = startSearch; //FOR NOW, using the base path http://image.tmdb.org/t/p/w500/
//for poster images, eventually need to use the config API to create the URL: https://developers.themoviedb.org/3/configuration/get-api-configuration

exports.default = _default;
},{"./tempData":"js/tempData.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49812" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/MovieDB-gettingposters.js"], null)
//# sourceMappingURL=/MovieDB-gettingposters.cff11e18.js.map