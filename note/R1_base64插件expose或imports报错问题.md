## base64插件expose或imports报错问题 ##

github: [https://github.com/dankogai/js-base64](https://github.com/dankogai/js-base64)

其中源码中写道：（貌似没有支持AMD,CMD）

```javascript

(function(global) {
  'use strict';
  var _Base64 = global.Base64;
  var version = "2.1.9";
  var buffer;
  if (typeof module !== 'undefined' && module.exports) {
    try {
      buffer = require('buffer').Buffer;
    } catch (err) {}
  }
  ...省略中间的代码
  if (global['Meteor']) {
    Base64 = global.Base64;
  }
})(this);
```

对比了一下jQuery V2.2.4

```javascript
(function( global, factory ) {
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
...省略中间的代码
if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}
...省略中间的代码
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));
```

再看看angular V1.5.11

```
(function(window) {'use strict';
  ...省略中间的代码
  jqLite(window.document).ready(function() {
    angularInit(window.document, bootstrap);
  });

})(window);
```

## 出错代码案例 ##

- webpack.base.conf.js配置

```javascript
resolve: {
		...
        alias: {
			...
            'Base64': path.resolve(__dirname, '../static/js/lib/base64.js'),
        }
    },
```

- useBase64.vue调用

```javarcript
require('imports?this=>window!base64')
console.log(window.Base64.encode('123'))
```

编译出来会报错

```javarcript
(function(global) {
  'use strict';
  // existing version for noConflict()
  var _Base64 = global.Base64;//报错，Uncaught TypeError: Cannot read property 'Base64' of undefined
```

查看了webpack打包后的代码，this被改为了undefined(也就是this指向的不是window)

webpack编译后

```javascript
function(module, exports, __webpack_require__) {
    eval("/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/\n(function() {\n\n'use strict';\n\nvar _defineProperty = __webpack_require__(84);\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function (global) {\n  var _Base64 = global.Base64;\n  var version = \"2.1.9\";\n\n  var buffer;\n  if (typeof module !== 'undefined' && module.exports) {\n    try {\n      buffer = __webpack_require__(264).Buffer;\n    } catch (err) {}\n  }\n\n  var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\n  var b64tab = function (bin) {\n    var t = {};\n    for (var i = 0, l = bin.length; i < l; i++) {\n      t[bin.charAt(i)] = i;\n    }return t;\n  }(b64chars);\n  var fromCharCode = String.fromCharCode;\n\n  var cb_utob = function cb_utob(c) {\n    if (c.length < 2) {\n      var cc = c.charCodeAt(0);\n      return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);\n    } else {\n      var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);\n      return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);\n    }\n  };\n  var re_utob = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFFF]|[^\\x00-\\x7F]/g;\n  var utob = function utob(u) {\n    return u.replace(re_utob, cb_utob);\n  };\n  var cb_encode = function cb_encode(ccc) {\n    var padlen = [0, 2, 1][ccc.length % 3],\n        ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),\n        chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];\n    return chars.join('');\n  };\n  var btoa = global.btoa ? function (b) {\n    return global.btoa(b);\n  } : function (b) {\n    return b.replace(/[\\s\\S]{1,3}/g, cb_encode);\n  };\n  var _encode = buffer ? function (u) {\n    return (u.constructor === buffer.constructor ? u : new buffer(u)).toString('base64');\n  } : function (u) {\n    return btoa(utob(u));\n  };\n  var encode = function encode(u, urisafe) {\n    return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\\/]/g, function (m0) {\n      return m0 == '+' ? '-' : '_';\n    }).replace(/=/g, '');\n  };\n  var encodeURI = function encodeURI(u) {\n    return encode(u, true);\n  };\n\n  var re_btou = new RegExp(['[\\xC0-\\xDF][\\x80-\\xBF]', '[\\xE0-\\xEF][\\x80-\\xBF]{2}', '[\\xF0-\\xF7][\\x80-\\xBF]{3}'].join('|'), 'g');\n  var cb_btou = function cb_btou(cccc) {\n    switch (cccc.length) {\n      case 4:\n        var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),\n            offset = cp - 0x10000;\n        return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);\n      case 3:\n        return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));\n      default:\n        return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));\n    }\n  };\n  var btou = function btou(b) {\n    return b.replace(re_btou, cb_btou);\n  };\n  var cb_decode = function cb_decode(cccc) {\n    var len = cccc.length,\n        padlen = len % 4,\n        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),\n        chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];\n    chars.length -= [0, 0, 2, 1][padlen];\n    return chars.join('');\n  };\n  var atob = global.atob ? function (a) {\n    return global.atob(a);\n  } : function (a) {\n    return a.replace(/[\\s\\S]{1,4}/g, cb_decode);\n  };\n  var _decode = buffer ? function (a) {\n    return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();\n  } : function (a) {\n    return btou(atob(a));\n  };\n  var decode = function decode(a) {\n    return _decode(String(a).replace(/[-_]/g, function (m0) {\n      return m0 == '-' ? '+' : '/';\n    }).replace(/[^A-Za-z0-9\\+\\/]/g, ''));\n  };\n  var noConflict = function noConflict() {\n    var Base64 = global.Base64;\n    global.Base64 = _Base64;\n    return Base64;\n  };\n\n  global.Base64 = {\n    VERSION: version,\n    atob: atob,\n    btoa: btoa,\n    fromBase64: decode,\n    toBase64: encode,\n    utob: utob,\n    encode: encode,\n    encodeURI: encodeURI,\n    btou: btou,\n    decode: decode,\n    noConflict: noConflict\n  };\n\n  if (typeof _defineProperty2.default === 'function') {\n    var noEnum = function noEnum(v) {\n      return { value: v, enumerable: false, writable: true, configurable: true };\n    };\n    global.Base64.extendString = function () {\n      Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {\n        return decode(this);\n      }));\n      Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {\n        return encode(this, urisafe);\n      }));\n      Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {\n        return encode(this, true);\n      }));\n    };\n  }\n\n  if (global['Meteor']) {\n    Base64 = global.Base64;\n  }\n})(undundefined
efined);\n}.call(global));\n/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))\n/
}
```

## 解决方法 ##

方法一：配置externals，手动插入script资源，.vue调用（不建议，html文件要手动插入script很麻烦）

- webpack.base.conf.js

```javarcript
externals: {
    'base64': 'Base64'
}

```

- useBase64.html加入

```html
<script src="/static/js/lib/base64.js"></script>
```

- useBase64.vue

```javarcript
import b64 from 'base64' //from的base64指的是externals的base64
console.log(b64)
```

方法二：将插件base64.js this改为window(不建议，因为改了别人的源码；另外如果是下载到本地项目还好可以改，但是如果是使用cdn（别人提供的）就改不了了)

- 改源码base64.js

```
(function(global) {
})(window);// this改为window
```
- webpack.base.conf.js配置

```javascript
resolve: {
		...
        alias: {
			...
            'Base64': path.resolve(__dirname, '../static/js/lib/base64.js'),
        }
    },
```

- useBase64.vue

```
require('imports?this=>global!base64')	  //按照webpack文档，base64的源码的this应该不用改才对，但是不改又报错
// require('imports?this=>window!base64') //或者这样
// require('expose?this=>global!base64') //或者这样
// require('expose?this=>window!base64') //或者这样
console.log(window.Base64.encode('123')) //输出：MTIz
```
方法三：目前已经支持es2015，amd and nodejs modlue.exports,自行下载最新

- webpack.base.conf.js配置

```javascript
resolve: {
		...
        alias: {
			...
            'base64': path.resolve(__dirname, '../static/js/lib/base64.js'),
        }
    }

```
- useBase64.vue

```javascript
import b from 'base64'
console.log(b.encode('123'))//输出：MTIz
```

参考资料：https://babeljs.io/faq/#why-is-this-being-remapped-to-undefined-

...期待更好的方法
