module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(198);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module) {

module.exports = require("tls");

/***/ }),

/***/ 58:
/***/ (function(module) {

module.exports = require("readline");

/***/ }),

/***/ 82:
/***/ (function(__unusedmodule, exports) {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 102:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(747));
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 141:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


var net = __webpack_require__(631);
var tls = __webpack_require__(16);
var http = __webpack_require__(605);
var https = __webpack_require__(211);
var events = __webpack_require__(614);
var assert = __webpack_require__(357);
var util = __webpack_require__(669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 198:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(__webpack_require__(470));
const update_onyxia_web = __importStar(__webpack_require__(835));
const inputHelper_1 = __webpack_require__(649);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const action_name = inputHelper_1.getActionName();
        switch (action_name) {
            case "update_educational_resources":
                yield update_onyxia_web.action(action_name, update_onyxia_web.getActionParams(), core);
                return null;
        }
        throw new Error(`${action_name} Not supported by this toolkit`);
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield run();
    }
    catch (error) {
        core.setFailed(error.message);
    }
}))();


/***/ }),

/***/ 211:
/***/ (function(module) {

module.exports = require("https");

/***/ }),

/***/ 226:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        options.headers['Authorization'] =
            'Basic ' +
                Buffer.from(this.username + ':' + this.password).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        options.headers['Authorization'] = 'Bearer ' + this.token;
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        options.headers['Authorization'] =
            'Basic ' + Buffer.from('PAT:' + this.token).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;


/***/ }),

/***/ 303:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Let's say we have this function declared somewhere.
 *
 * function get__filename(){
 *      return get_caller_file_path();
 * }
 *
 * Then we can assert that:
 *
 * get__filename() === __filename
 *
 *
 */
function get_caller_file_path() {
    //NOTE: Cannot be move to the index file.
    //The function can't be declared and used
    //in the same file.
    var prepareStackTraceBackup = Error.prepareStackTrace;
    var callerFile = "";
    try {
        var error = new Error();
        Error.prepareStackTrace = function (_, stack) { return stack; };
        error.stack.shift().getFileName();
        var fileImportedFrom = error.stack.shift().getFileName();
        while (error.stack.length) {
            var fileName = error.stack.shift().getFileName();
            if (fileName === callerFile) {
                break;
            }
            callerFile = fileName;
            if (fileImportedFrom !== callerFile) {
                break;
            }
        }
    }
    catch (_a) { }
    Error.prepareStackTrace = prepareStackTraceBackup;
    return callerFile;
}
exports.get_caller_file_path = get_caller_file_path;


/***/ }),

/***/ 357:
/***/ (function(module) {

module.exports = require("assert");

/***/ }),

/***/ 413:
/***/ (function(module, __unusedexports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 417:
/***/ (function(module) {

module.exports = require("crypto");

/***/ }),

/***/ 425:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = __webpack_require__(129);
var readline = __webpack_require__(58);
var fs = __webpack_require__(747);
var path = __webpack_require__(622);
var https = __webpack_require__(211);
var http = __webpack_require__(605);
var util = __webpack_require__(669);
var os = __webpack_require__(87);
var crypto = __webpack_require__(417);
/**
 * After this function is called every call to execSync
 * or exec will print the unix commands being executed.
 * */
function enableCmdTrace() {
    traceCmdIfEnabled.enabled = true;
}
exports.enableCmdTrace = enableCmdTrace;
function traceCmdIfEnabled(cmd, options) {
    if (!traceCmdIfEnabled.enabled) {
        return;
    }
    console.log(colorize("$ " + cmd + " ", "YELLOW") + (!!options ? JSON.stringify(options) + "\n" : ""));
}
(function (traceCmdIfEnabled) {
    traceCmdIfEnabled.enabled = false;
})(traceCmdIfEnabled || (traceCmdIfEnabled = {}));
function get_uid(unix_user) {
    return parseInt(sh_eval("id -u " + unix_user));
}
exports.get_uid = get_uid;
function get_gid(unix_user) {
    return parseInt(sh_eval("id -g " + unix_user));
}
exports.get_gid = get_gid;
function colorize(str, color) {
    var color_code = (function () {
        switch (color) {
            case "GREEN": return "\x1b[32m";
            case "RED": return "\x1b[31m";
            case "YELLOW": return "\x1b[33m";
        }
    })();
    return "" + color_code + str + "\u001B[0m";
}
exports.colorize = colorize;
/**
 *
 * The stderr is forwarded to the console realtime.
 *
 * The returned value is the concatenated data received on stdout.
 *
 * If the return code of the cmd is not 0 an exception is thrown
 * and the message cmd + the concatenated data received on stderr.
 *
 * If enableTrace() have been called the command called will be printed.
 *
 */
function execSync(cmd, options) {
    traceCmdIfEnabled(cmd, options);
    return child_process.execSync(cmd, __assign({}, (options || {}), { "encoding": "utf8" }));
}
exports.execSync = execSync;
/**
 *
 * The cmd is printed before execution
 * stdout and stderr are forwarded to the console realtime.
 * Return nothing.
 *
 * stdio is set to "inherit" and thus should not be redefined.
 *
 */
function execSyncTrace(cmd, options) {
    traceCmdIfEnabled(cmd, options);
    child_process.execSync(cmd, __assign({}, (options || {}), { "stdio": "inherit" }));
}
exports.execSyncTrace = execSyncTrace;
/** Same as execSync except that it dose not print cmd even if cmdTrace have been enabled */
var execSyncNoCmdTrace = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enabled_back = traceCmdIfEnabled.enabled;
    traceCmdIfEnabled.enabled = false;
    try {
        var out = execSync.apply(null, args);
        traceCmdIfEnabled.enabled = enabled_back;
        return out;
    }
    catch (error) {
        traceCmdIfEnabled.enabled = enabled_back;
        throw error;
    }
};
/**
 *
 * Like execSync but stderr is not forwarded.
 * WARNING: If mean that when the cmd return 0
 * all data that may have been wrote on stderr
 * are lost into oblivion.
 *
 * stdio is set to "pipe" and thus should not be redefined.
 *
 */
function execSyncQuiet(cmd, options) {
    return execSync(cmd, __assign({}, (options || {}), { "stdio": "pipe" }));
}
exports.execSyncQuiet = execSyncQuiet;
/** Same as execSync but async */
function exec(cmd, options) {
    var _this = this;
    traceCmdIfEnabled(cmd, options);
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            child_process.exec(cmd, __assign({}, (options || {}), { "encoding": "utf8" }), function (error, stdout, stderr) {
                if (!!error) {
                    error["stderr"] = stderr;
                    reject(error);
                }
                else {
                    resolve(stdout);
                }
            });
            return [2 /*return*/];
        });
    }); });
}
exports.exec = exec;
/**
 * Spawn a process that continue running after current process exit.
 * This process will be ignored by stopSubProcessesAsapSync.
 * If a logfile_path if provided stdout and stderr will be redirected to this file.
 *
 * detached, and stdio options should not be set as they are set internally.
 * */
function spawnAndDetach(command, args, options, logfile_path) {
    var out = !!logfile_path ? fs.openSync(logfile_path, "a") : "ignore";
    var subprocess = child_process.spawn(command, args, __assign({}, (options || {}), { "detached": true, "stdio": ["ignore", out, out] }));
    stopProcessSync.stopSubProcessesAsapSync.ignorePids.add(subprocess.pid);
    subprocess.unref();
    return subprocess;
}
exports.spawnAndDetach = spawnAndDetach;
/**
 *
 * Print a message and enable a moving loading bar.
 * WARNING: Nothing should be printed to stdout until we stop showing the moving loading.
 *
 * returns:
 * -exec: A proxy to the exec fnc that will call onError before it throw the error.
 * -onSuccess: Stop showing the moving loading and pretty print a success message ("ok" by default)
 * -onError: Stop showing the moving loading and pretty print error message.
 *
 */
function start_long_running_process(message) {
    process.stdout.write(message + "... ");
    var moveBack = (function () {
        var cp = message.length + 3;
        return function () { return readline.cursorTo(process.stdout, cp); };
    })();
    var p = ["\\", "|", "/", "-"].map(function (i) { return colorize(i, "GREEN"); });
    var x = 0;
    var timer = setInterval(function () {
        moveBack();
        process.stdout.write(p[x++]);
        x = x % p.length;
    }, 250);
    var onComplete = function (message) {
        clearInterval(timer);
        moveBack();
        process.stdout.write(message + "\n");
    };
    var onError = function (errorMessage) { return onComplete(colorize(errorMessage, "RED")); };
    var onSuccess = function (message) { return onComplete(colorize(message || "ok", "GREEN")); };
    if (traceCmdIfEnabled.enabled) {
        onComplete("");
        onComplete = function (message) { return console.log(message); };
    }
    return {
        onError: onError,
        onSuccess: onSuccess,
        "exec": function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, exec.apply(null, args)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            error_1 = _a.sent();
                            onError(error_1.message);
                            throw error_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    };
}
exports.start_long_running_process = start_long_running_process;
;
/**
 * Apt package if not already installed,
 * if prog is provided and prog is in the PATH the package will not be installed
 * */
function apt_get_install_if_missing(package_name, prog) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    process.stdout.write("Looking for " + package_name + " ... ");
                    if (!!prog && apt_get_install_if_missing.doesHaveProg(prog)) {
                        console.log(prog + " executable found. " + colorize("OK", "GREEN"));
                        return [2 /*return*/];
                    }
                    if (apt_get_install_if_missing.isPkgInstalled(package_name)) {
                        console.log(package_name + " is installed. " + colorize("OK", "GREEN"));
                        return [2 /*return*/];
                    }
                    readline.clearLine(process.stdout, 0);
                    process.stdout.write("\r");
                    return [4 /*yield*/, apt_get_install(package_name)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.apt_get_install_if_missing = apt_get_install_if_missing;
(function (apt_get_install_if_missing) {
    function isPkgInstalled(package_name) {
        try {
            console.assert(!!execSyncNoCmdTrace("dpkg-query -W -f='${Status}' " + package_name, { "stdio": "pipe" })
                .match(/^install ok installed$/));
        }
        catch (_a) {
            return false;
        }
        return true;
    }
    apt_get_install_if_missing.isPkgInstalled = isPkgInstalled;
    function doesHaveProg(prog) {
        try {
            execSyncNoCmdTrace("which " + prog);
        }
        catch (_a) {
            return false;
        }
        return true;
    }
    apt_get_install_if_missing.doesHaveProg = doesHaveProg;
})(apt_get_install_if_missing = exports.apt_get_install_if_missing || (exports.apt_get_install_if_missing = {}));
/** Install or upgrade package via APT */
function apt_get_install(package_name) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, onSuccess, exec, was_installed_before, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = start_long_running_process("Installing or upgrading " + package_name + " package"), onSuccess = _a.onSuccess, exec = _a.exec;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    if (!apt_get_install.isFirst) return [3 /*break*/, 3];
                    return [4 /*yield*/, exec("apt-get update || true")];
                case 2:
                    _b.sent();
                    apt_get_install.isFirst = false;
                    _b.label = 3;
                case 3:
                    was_installed_before = apt_get_install_if_missing.isPkgInstalled(package_name);
                    return [4 /*yield*/, exec("apt-get -y install " + package_name)];
                case 4:
                    _b.sent();
                    if (!was_installed_before) {
                        apt_get_install.onInstallSuccess(package_name);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _b.sent();
                    apt_get_install.onError(error_2);
                    return [3 /*break*/, 6];
                case 6:
                    onSuccess("DONE");
                    return [2 /*return*/];
            }
        });
    });
}
exports.apt_get_install = apt_get_install;
(function (apt_get_install) {
    apt_get_install.isFirst = true;
    function record_installed_package(file_json_path, package_name) {
        execSyncNoCmdTrace("touch " + file_json_path);
        var raw = fs.readFileSync(file_json_path).toString("utf8");
        var list = raw === "" ? [] : JSON.parse(raw);
        if (!list.find(function (p) { return p === package_name; })) {
            list.push(package_name);
            fs.writeFileSync(file_json_path, Buffer.from(JSON.stringify(list, null, 2), "utf8"));
        }
    }
    apt_get_install.record_installed_package = record_installed_package;
    apt_get_install.onError = function (error) { throw error; };
    apt_get_install.onInstallSuccess = function (package_name) { };
})(apt_get_install = exports.apt_get_install || (exports.apt_get_install = {}));
function exit_if_not_root() {
    if (process.getuid() !== 0) {
        console.log(colorize("Error: root privilege required ", "RED"));
        process.exit(1);
    }
}
exports.exit_if_not_root = exit_if_not_root;
/**
 *
 * Locate a given module in a node_modules directory.
 * If the module is required in different version and thus
 * present multiple times will be returned the shorter path.
 * This ensure that if a given module is in package.json 's dependencies
 * section the returned path will be the one we looking for.
 *
 * @param module_name The name of the module.
 * @param module_dir_path Path to the root of the module ( will search in ./node_modules ).
 *
 * Throw if the module is not found.
 *
 */
function find_module_path(module_name, module_dir_path) {
    if (path.basename(module_dir_path) === module_name) {
        return module_dir_path;
    }
    var node_module_path = path.join(module_dir_path, "node_modules");
    if (!fs.existsSync(node_module_path)) {
        throw new Error("No node_modules in " + module_dir_path);
    }
    var _a = __read(fs.readdirSync(node_module_path)
        .map(function (file_name) { return path.join(node_module_path, file_name); })
        .filter(function (file_or_dir_path) { return fs.existsSync(path.join(file_or_dir_path, "package.json")); })
        .map(function (module_dir_path) {
        try {
            return find_module_path(module_name, module_dir_path);
        }
        catch (_a) {
            return "";
        }
    })
        .filter(function (module_dir_path) { return !!module_dir_path; })
        .sort(function (a, b) { return a.length - b.length; }), 1), out = _a[0];
    if (out === undefined) {
        throw new Error("module " + module_name + " not installed in " + module_dir_path);
    }
    return out;
}
exports.find_module_path = find_module_path;
/**
 *
 * Test if two file of folder are same.
 * Does not consider stat ( ownership and permission ).
 * transparent handling of symlinks.
 *
 * Example
 *
 * /foo1/bar/file.txt
 * /foo2/bar/file.txt
 *
 * to compare the two version of file.txt
 * call with "/foo1", "/foo2", "./bar/file.txt";
 * or with "/foo1/bar/file.txt", "/foo2/bar/file.txt"
 *
 * @param relative_from_path1 absolute path ex: '/foo1'
 * @param relative_from_path2 absolute path ex: '/foo2'
 * @param relative_to_path relative path ex: './bar/file.txt" or 'bar/file.txt'
 * for convenience relative_to_path can be absolute as long as it has relative_from_path1
 * or relative_from_path2 as parent.
 *
 */
function fs_areSame(relative_from_path1, relative_from_path2, relative_to_path) {
    if (relative_to_path === void 0) { relative_to_path = "."; }
    relative_to_path = fs_areSame.get_relative_to_path(relative_from_path1, relative_from_path2, relative_to_path);
    try {
        execSyncNoCmdTrace([
            "diff -r",
            path.join(relative_from_path1, relative_to_path),
            path.join(relative_from_path2, relative_to_path)
        ].join(" "), { "stdio": "pipe" });
    }
    catch (_a) {
        return false;
    }
    return true;
}
exports.fs_areSame = fs_areSame;
(function (fs_areSame) {
    function get_relative_to_path(dir_path1, dir_path2, to_path) {
        if (path.isAbsolute(to_path)) {
            var dir_path = [dir_path1, dir_path2]
                .filter(function (v) { return to_path.startsWith(v); })
                .sort(function (a, b) { return b.length - a.length; })[0];
            if (!dir_path) {
                throw new Error("Not relative!");
            }
            return path.relative(dir_path, to_path);
        }
        else {
            return to_path;
        }
    }
    fs_areSame.get_relative_to_path = get_relative_to_path;
})(fs_areSame = exports.fs_areSame || (exports.fs_areSame = {}));
/**
 *
 * Move or copy file of folder.
 * -If dest is identical to source nothing is copied nor moved.
 * -If dest exist and is different of source it will be deleted prior to proceeding with action.
 * -In move mode if dest identical to source source will be removed.
 * -When copy is effectively performed the stat are conserved.
 * -If dirname of dest does not exist in fs, it will be created.
 * -Unlike cp or mv "/src/file.txt" "/dest" will NOT place file.txt in dest but dest will become file.txt
 *
 * calling [action] "/src/foo" "/dst/foo" is equivalent
 * to calling [action] "/src" "/dst" "./foo" ( or "foo" )
 * or [action] "/src" "/dst" "src/foo"
 * or [action] "/src" "/dst" "dst/foo"
 *
 */
function fs_move(action, relative_from_path_src, relative_from_path_dest, relative_to_path) {
    if (relative_to_path === void 0) { relative_to_path = "."; }
    relative_to_path = fs_areSame.get_relative_to_path(relative_from_path_src, relative_from_path_dest, relative_to_path);
    var src_path = path.join(relative_from_path_src, relative_to_path);
    var dst_path = path.join(relative_from_path_dest, relative_to_path);
    if (!fs_areSame(src_path, dst_path)) {
        if (!fs.existsSync(dst_path)) {
            execSyncNoCmdTrace("mkdir -p " + dst_path);
        }
        execSyncNoCmdTrace("rm -rf " + dst_path);
        execSyncNoCmdTrace([
            action === "COPY" ? "cp -rp" : "mv",
            src_path,
            dst_path
        ].join(" "));
    }
    else {
        if (action === "MOVE") {
            execSyncNoCmdTrace("rm -r " + src_path);
        }
    }
}
exports.fs_move = fs_move;
/**
 * Download and extract a tarball. throws web_get.DownloadError and Error
 *
 * Example
 *
 * website.com/rel.tar.gz
 * ./file1.txt
 * ./dir/file2.txt
 *
 * /foo/
 * ./file3.txt
 * ./dir/file4.txt
 *
 * calling with "website.com/rel.tar.gz", "MERGE" will result in:
 *
 * /foo/
 * ./file1.txt
 * ./file3.txt
 * ./dir/file4.txt
 *
 * calling with "website.com/rel.tar.gz", "OVERWRITE IF EXIST" will result in:
 *
 * /foo/
 * ./file1.txt
 * ./dir/file2.txt
 *
 */
function download_and_extract_tarball(url, dest_dir_path, mode) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, exec, onSuccess, onError, tarball_dir_path, tarball_path, error_3, _b, _c, name;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = start_long_running_process("Downloading " + url + " and extracting to " + dest_dir_path), exec = _a.exec, onSuccess = _a.onSuccess, onError = _a.onError;
                    tarball_dir_path = (function () {
                        var hash = crypto.createHash("sha1");
                        hash.write(url);
                        hash.end();
                        return "/tmp/_" + hash.read().toString("hex");
                    })();
                    tarball_path = tarball_dir_path + ".tar.gz";
                    if (!(fs.existsSync(tarball_dir_path) || fs.existsSync(tarball_path))) return [3 /*break*/, 2];
                    return [4 /*yield*/, exec("rm -rf " + tarball_dir_path + " " + tarball_path)];
                case 1:
                    _e.sent();
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, web_get(url, tarball_path)];
                case 3:
                    _e.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _e.sent();
                    onError(error_3.message);
                    throw error_3;
                case 5: return [4 /*yield*/, exec("mkdir " + tarball_dir_path)];
                case 6:
                    _e.sent();
                    return [4 /*yield*/, exec("tar -xzf " + tarball_path + " -C " + tarball_dir_path)];
                case 7:
                    _e.sent();
                    return [4 /*yield*/, exec("rm " + tarball_path)];
                case 8:
                    _e.sent();
                    if (!(mode === "MERGE")) return [3 /*break*/, 10];
                    try {
                        for (_b = __values(fs_ls(tarball_dir_path)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            name = _c.value;
                            fs_move("MOVE", tarball_dir_path, dest_dir_path, name);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [4 /*yield*/, exec("rm -r " + tarball_dir_path)];
                case 9:
                    _e.sent();
                    return [3 /*break*/, 11];
                case 10:
                    fs_move("MOVE", tarball_dir_path, dest_dir_path);
                    _e.label = 11;
                case 11:
                    onSuccess();
                    return [2 /*return*/];
            }
        });
    });
}
exports.download_and_extract_tarball = download_and_extract_tarball;
function web_get(url, file_path) {
    if (!url.startsWith("http")) {
        url = "http://" + url;
    }
    return new Promise(function (resolve, reject) {
        var get = url.startsWith("https") ?
            https.get.bind(https) : http.get.bind(http);
        var timer = setTimeout(function () {
            clientRequest.abort();
            reject(new web_get.DownloadError(url, "CONNECTION ERROR", "web_get connection error:  timeout"));
        }, 20000);
        var clientRequest = get(url, function (res) {
            clearTimeout(timer);
            if (("" + res.statusCode).startsWith("30")) {
                var url_redirect = res.headers.location;
                if (!!url_redirect) {
                    web_get(url_redirect, file_path)
                        .then(function (out) { return resolve(out); })
                        .catch(function (error) { return reject(error); });
                    return;
                }
            }
            if (!("" + res.statusCode).startsWith("2")) {
                reject(new web_get.DownloadErrorHttpErrorCode(url, res.statusCode));
                return;
            }
            var contentLength = undefined;
            var receivedBytes = 0;
            if (res.headers["content-length"] !== undefined) {
                contentLength = parseInt(res.headers["content-length"]);
                res.on("data", function (chunk) { return receivedBytes += chunk.length; });
                (function () {
                    var resolve_src = resolve;
                    resolve = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (receivedBytes !== contentLength) {
                            reject(new web_get.DownloadErrorIncomplete(url, contentLength, receivedBytes));
                            return;
                        }
                        resolve_src.apply(null, args);
                    };
                })();
            }
            res.socket.setTimeout(60000, function () { return res.socket.destroy(new web_get.DownloadErrorIncomplete(url, contentLength, receivedBytes, "socket timeout")); });
            if (!!file_path) {
                (function () {
                    var reject_src = reject;
                    reject = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return fs.unlink(file_path, function () { return reject_src.apply(null, args); });
                    };
                })();
                fs.writeFileSync(file_path, new Buffer(0));
                var fsWriteStream = fs.createWriteStream(file_path);
                res.pipe(fsWriteStream);
                fsWriteStream.once("finish", function () { return resolve(); });
                res.once("error", function (error) { return reject(new web_get.DownloadErrorIncomplete(url, contentLength, receivedBytes, error.message)); });
                fsWriteStream.once("error", function (error) { return reject(new web_get.DownloadErrorIncomplete(url, contentLength, receivedBytes, error.message)); });
            }
            else {
                var data_1 = new Buffer(0);
                res.on("data", function (chunk) { return data_1 = Buffer.concat([data_1, chunk]); });
                res.once("end", function () { return resolve(data_1.toString("utf8")); });
            }
        });
        clientRequest.once("error", function (error) {
            clearTimeout(timer);
            reject(new web_get.DownloadError(url, "CONNECTION ERROR", error.message));
        });
    });
}
exports.web_get = web_get;
(function (web_get) {
    var DownloadError = /** @class */ (function (_super) {
        __extends(DownloadError, _super);
        function DownloadError(url, cause, message) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, message) || this;
            _this.url = url;
            _this.cause = cause;
            Object.setPrototypeOf(_this, _newTarget.prototype);
            return _this;
        }
        return DownloadError;
    }(Error));
    web_get.DownloadError = DownloadError;
    var DownloadErrorIncomplete = /** @class */ (function (_super) {
        __extends(DownloadErrorIncomplete, _super);
        function DownloadErrorIncomplete(url, contentLength, receivedBytes, info) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, url, "INCOMPLETE", "web_get failed, download incomplete " + receivedBytes + "/" + contentLength + ", " + (!!info ? info : "")) || this;
            _this.contentLength = contentLength;
            _this.receivedBytes = receivedBytes;
            Object.setPrototypeOf(_this, _newTarget.prototype);
            return _this;
        }
        return DownloadErrorIncomplete;
    }(DownloadError));
    web_get.DownloadErrorIncomplete = DownloadErrorIncomplete;
    var DownloadErrorHttpErrorCode = /** @class */ (function (_super) {
        __extends(DownloadErrorHttpErrorCode, _super);
        function DownloadErrorHttpErrorCode(url, code) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, url, "HTTP ERROR CODE", "web_get failed, HTTP error code: " + code) || this;
            _this.code = code;
            Object.setPrototypeOf(_this, _newTarget.prototype);
            return _this;
        }
        return DownloadErrorHttpErrorCode;
    }(DownloadError));
    web_get.DownloadErrorHttpErrorCode = DownloadErrorHttpErrorCode;
})(web_get = exports.web_get || (exports.web_get = {}));
function fs_ls(dir_path, mode, showHidden) {
    if (mode === void 0) { mode = "FILENAME"; }
    if (showHidden === void 0) { showHidden = false; }
    return execSyncNoCmdTrace("ls" + (showHidden ? " -a" : ""), { "cwd": dir_path })
        .slice(0, -1)
        .split("\n")
        .map(function (name) { return mode === "ABSOLUTE PATH" ? path.join(dir_path, name) : name; });
}
exports.fs_ls = fs_ls;
/**
 *
 * Create a symbolic link.
 * If dst exist it is removed.
 * directories leading to dest are created if necessary.
 *
 */
function createSymlink(src_path, dst_path) {
    if (!fs.existsSync(dst_path)) {
        execSyncNoCmdTrace("mkdir -p " + dst_path);
    }
    execSyncNoCmdTrace("rm -rf " + dst_path);
    execSync("ln -s " + src_path + " " + dst_path);
}
exports.createSymlink = createSymlink;
/** Create a executable file */
function createScript(file_path, content) {
    if (traceCmdIfEnabled.enabled) {
        console.log("Creating script " + file_path);
    }
    fs.writeFileSync(file_path, Buffer.from(content, "utf8"));
    execSyncNoCmdTrace("chmod +x " + file_path);
}
exports.createScript = createScript;
var unixUser;
(function (unixUser) {
    function create(unix_user, home_dir_path) {
        if (home_dir_path === void 0) { home_dir_path = "/tmp"; }
        execSyncNoCmdTrace("useradd -M " + unix_user + " -s /bin/false -d " + home_dir_path);
    }
    unixUser.create = create;
    function remove(unix_user) {
        execSyncNoCmdTrace("userdel " + unix_user, { "stdio": "pipe" });
    }
    unixUser.remove = remove;
})(unixUser = exports.unixUser || (exports.unixUser = {}));
var get_caller_file_path_1 = __webpack_require__(303);
exports.get_caller_file_path = get_caller_file_path_1.get_caller_file_path;
var get_caller_file_path_2 = __webpack_require__(303);
/**
 *
 * DO NOT USE TEST PURPOSE ONLY
 *
 * return __filename
 *
 */
function get__filename() {
    return get_caller_file_path_2.get_caller_file_path();
}
exports.get__filename = get__filename;
/**
 *
 * Equivalent to the pattern $() in bash.
 * Strip final LF if present.
 * If cmd fail no error is thrown, an empty string is returned.
 * Does not print to stdout.
 *
 * Typical usage: uname -r or which pkill
 *
 */
function sh_eval(cmd) {
    var res;
    try {
        res = execSyncNoCmdTrace(cmd, { "stdio": "pipe" });
    }
    catch (_a) {
        return "";
    }
    return res.replace(/\n$/, "");
}
exports.sh_eval = sh_eval;
/**
 * Run a command and return true if the return code was 0.
 * Does not print to stdout.
 */
function sh_if(cmd) {
    try {
        execSyncNoCmdTrace(cmd, { "stdio": "pipe" });
    }
    catch (_a) {
        return false;
    }
    return true;
}
exports.sh_if = sh_if;
/**
 * Return a promise that resolve as the source promise when fulfilled
 * or resolve with the error when reject.
 * If a timeout is specified the returned promise resolve with an error after [timeout]ms
 * if the source promise did not completed before.
 * The message of the timeout error is safePr.timeoutErrorMessage
 */
function safePr(pr, timeout) {
    var prSafe = pr.then(function (val) { return val; }, function (error) { return error; });
    if (timeout !== undefined) {
        var timer_1;
        return Promise.race([
            new Promise(function (resolve) { return timer_1 = setTimeout(function () { return resolve(new Error(safePr.timeoutErrorMessage)); }, timeout); }),
            prSafe.then(function (val) {
                clearTimeout(timer_1);
                return val;
            })
        ]);
    }
    else {
        return prSafe;
    }
}
exports.safePr = safePr;
;
(function (safePr) {
    safePr.timeoutErrorMessage = "safePr timeout";
})(safePr = exports.safePr || (exports.safePr = {}));
/**
 *
 * Allow to schedule action function to perform before exiting.
 *
 * The task function will always be called before the process stop
 * unless process.exit is explicitly called somewhere or
 * if the process receive any signal other than the ones specified
 * in the ExitCause.Signal["signal"] type.
 *
 * The process may stop for tree reasons:
 * 1) If there is no more work scheduled ( natural termination ).
 * 2) If an uncaught exception it thrown ( or a unhandled promise rejection )
 * 3) If a signal ( one of the handled ) is sent to the process.
 *
 * To manually exit the process there is two option:
 * - Call process.exit(X) but the task function will not be called.
 * - Emit "beforeExit" on process object ( process.emit("beforeExit, process.exitCode= X) );
 *  Doing so you simulate 1st stop condition ( natural termination ).
 *
 * To define the return code set process.exitCode. The exit code can be set
 * before emitting "beforeExit" or in the task function.
 * If exitCode has not be defined the process will exit with 0 if
 * there was nothing else to do and 1 otherwise.
 *
 * The task function can be synchronous or asynchronous.
 * The task function has [timeout] ms to complete.
 * If it has not completed within this delay the process will
 * be terminated anyway. (Default 4000 ms )
 * Setting [timeout] to a negative value will disable the timer.
 * WARNING: It is important not to perform sync operation that can
 * hang for a long time in the task function ( e.g. execSync("sleep 1000"); )
 * because while the sync operation are performed the timeout can't be triggered.
 *
 * As soon as the task function is called all the other exitCause that
 * may auccur will be ignored so that the task function have time to complete.
 * Anyway the task function is called only once.
 *
 * Whether the task function complete by successfully or throw
 * an exception the process will terminate with exit code set
 * in process.exitCode at the time of the completion.
 *
 * Provide shouldExitIf function to filter what should be
 * considered a case to terminate the process.
 * Only exception and supported signals can be bypassed,
 * Nothing else to do will always terminate the process.
 * By default exiting on any signal or uncaught errors.
 *
 * Before exiting all subprocess will be killed.
 *
 *
 */
function setProcessExitHandler(task, timeout, shouldExitIf) {
    var e_2, _a, e_3, _b;
    var _this = this;
    if (timeout === void 0) { timeout = 4000; }
    if (shouldExitIf === void 0) { shouldExitIf = function () { return true; }; }
    var log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return setProcessExitHandler.log("[ exit handler ] " + util.format.apply(util, args));
    };
    var handler = function (exitCause) { return __awaiter(_this, void 0, void 0, function () {
        var process_exit, actionOut, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (exitCause.type !== "NOTHING ELSE TO DO" && !shouldExitIf(exitCause)) {
                        log("Choosing ( c.f shouldExitIf ) not to terminate the process despite: ", exitCause);
                        return [2 /*return*/];
                    }
                    handler = function (exitCause) { return log("Ignored extra exit cause", exitCause); };
                    process_exit = function () {
                        if (typeof process.exitCode !== "number" || isNaN(process.exitCode)) {
                            if (exitCause.type === "NOTHING ELSE TO DO") {
                                process.exitCode = 0;
                            }
                            else {
                                log("Exit cause " + exitCause.type + " and not exitCode have been set, using exit code 1");
                                process.exitCode = 1;
                            }
                        }
                        else {
                            log("Exit code have been set to " + process.exitCode);
                        }
                        log("Stopping subprocess asap if any...");
                        stopProcessSync.stopSubProcessesAsapSync();
                        log("exiting now with code " + process.exitCode);
                        process.exit();
                    };
                    log("Cause of process termination: ", exitCause);
                    if (timeout >= 0) {
                        setTimeout(function () {
                            log("Exit task timeout");
                            process.exitCode = 1;
                            process_exit();
                        }, timeout);
                    }
                    try {
                        actionOut = task(exitCause);
                    }
                    catch (error) {
                        log("Exit task thrown error", error);
                        process_exit();
                        return [2 /*return*/];
                    }
                    if (!(actionOut instanceof Promise)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, actionOut];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    log("Exit task returned a promise that rejected", error_4);
                    process_exit();
                    return [2 /*return*/];
                case 4:
                    log("Exit task complete successfully.");
                    process_exit();
                    return [2 /*return*/];
            }
        });
    }); };
    var _loop_1 = function (signal) {
        process.on(signal, function () { return handler({ "type": "SIGNAL", signal: signal }); });
    };
    try {
        for (var _c = __values(setProcessExitHandler.ExitCause.Signal.list), _d = _c.next(); !_d.done; _d = _c.next()) {
            var signal = _d.value;
            _loop_1(signal);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var _e = __values(["uncaughtException", "unhandledRejection"]), _f = _e.next(); !_f.done; _f = _e.next()) {
            var eventName = _f.value;
            process.on(eventName, function (error) { return handler({ "type": "EXCEPTION", error: error }); });
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_3) throw e_3.error; }
    }
    process.on("beforeExit", function () { return handler({ "type": "NOTHING ELSE TO DO" }); });
}
exports.setProcessExitHandler = setProcessExitHandler;
(function (setProcessExitHandler) {
    var ExitCause;
    (function (ExitCause) {
        var Signal;
        (function (Signal) {
            Signal._obj = { "SIGINT": null, "SIGUSR2": null, "SIGHUP": null };
            Signal.list = Object.keys(Signal._obj);
        })(Signal = ExitCause.Signal || (ExitCause.Signal = {}));
    })(ExitCause = setProcessExitHandler.ExitCause || (setProcessExitHandler.ExitCause = {}));
    setProcessExitHandler.log = function () { };
})(setProcessExitHandler = exports.setProcessExitHandler || (exports.setProcessExitHandler = {}));
/**
 *
 * Stop a process by sending a specific signal to a target process.
 * When the function return the main process and all it's descendent processes are terminated.
 *
 * The default signal is SIGUSR2 which is the signal used to gracefully terminate
 * Process created by the createService function.
 *
 * Optionally runfiles_path can be provided to define a set of files
 * that should be suppressed before returning.
 *
 * If pid is provided under the form of a pidfile path it will
 * be added to the runfiles set.
 *
 * If all the processes does not terminate within [delay_before_sigkill]ms
 * (default 50000) then KILL signal will be sent to all processes still alive.
 *
 * If the PID provided is the same that the PID of the process running the function
 * PidMatchCurrentProcessError will be thrown.
 *
 */
function stopProcessSync(pidfile_path_or_pid, signal, delay_before_sigkill, runfiles_path) {
    if (signal === void 0) { signal = "SIGUSR2"; }
    if (delay_before_sigkill === void 0) { delay_before_sigkill = 5000; }
    if (runfiles_path === void 0) { runfiles_path = []; }
    var log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return stopProcessSync.log("[ stop process sync ] " + util.format.apply(util, args));
    };
    var cleanupRunfiles = function () {
        var e_4, _a;
        try {
            for (var runfiles_path_1 = __values(runfiles_path), runfiles_path_1_1 = runfiles_path_1.next(); !runfiles_path_1_1.done; runfiles_path_1_1 = runfiles_path_1.next()) {
                var runfile_path = runfiles_path_1_1.value;
                if (fs.existsSync(runfile_path)) {
                    try {
                        fs.unlinkSync(runfile_path);
                        log(path.basename(runfile_path) + " runfile manually cleaned up.");
                    }
                    catch (_b) {
                        log(colorize("Could not remove runfile " + runfile_path, "RED"));
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (runfiles_path_1_1 && !runfiles_path_1_1.done && (_a = runfiles_path_1.return)) _a.call(runfiles_path_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    var pid;
    if (typeof pidfile_path_or_pid === "number") {
        pid = pidfile_path_or_pid;
    }
    else {
        var pidfile_path = pidfile_path_or_pid;
        runfiles_path = __spread([pidfile_path], runfiles_path);
        if (!fs.existsSync(pidfile_path)) {
            log("Pidfile does not exist, assuming process not running");
            cleanupRunfiles();
            return;
        }
        try {
            pid = parseInt(fs.readFileSync(pidfile_path).toString("utf8").replace(/\n$/, ""));
            if (isNaN(pid)) {
                throw new Error("pid is NaN");
            }
        }
        catch (_a) {
            log("Pidfile does does not contain pid");
            cleanupRunfiles();
            return;
        }
    }
    if (pid === process.pid) {
        throw new stopProcessSync.PidMatchCurrentProcessError(cleanupRunfiles);
    }
    var pids = __spread(stopProcessSync.getSubProcesses(pid, "FULL PROCESS TREE"), [
        pid
    ]);
    var startTime = Date.now();
    if (stopProcessSync.isProcessRunning(pid)) {
        log("Sending " + signal + " to target process (" + pid + ")");
        stopProcessSync.kill(pid, signal);
    }
    else {
        log("Target process (" + pid + ") is not running");
    }
    var _loop_2 = function () {
        var e_5, _a;
        var runningPids = pids.filter(function (pid) { return stopProcessSync.isProcessRunning(pid); });
        if (runningPids.length === 0) {
            log("Target process (" + pid + ") and all it's sub processes are now terminated");
            return "break";
        }
        else if (Date.now() >= startTime + delay_before_sigkill) {
            log((function () {
                if (delay_before_sigkill === 0) {
                    return "Immediately sending SIGKILL to " + runningPids.length + " remaining sub processes of target process (" + pid + ")";
                }
                else {
                    return [
                        !!runningPids.find(function (_pid) { return _pid === pid; }) ?
                            "Target process (" + pid + ") and " + (runningPids.length - 1) + " of it's sub processes" :
                            runningPids.length + " sub processes of the target process (" + pid + ")",
                        "did not terminate in time, sending KILL signals."
                    ].join(" ");
                }
            })());
            try {
                for (var runningPids_1 = (e_5 = void 0, __values(runningPids)), runningPids_1_1 = runningPids_1.next(); !runningPids_1_1.done; runningPids_1_1 = runningPids_1.next()) {
                    var pid_1 = runningPids_1_1.value;
                    stopProcessSync.kill(pid_1, "SIGKILL");
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (runningPids_1_1 && !runningPids_1_1.done && (_a = runningPids_1.return)) _a.call(runningPids_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return "continue";
        }
        execSyncNoCmdTrace("sleep 0.1");
    };
    while (true) {
        var state_1 = _loop_2();
        if (state_1 === "break")
            break;
    }
    cleanupRunfiles();
}
exports.stopProcessSync = stopProcessSync;
(function (stopProcessSync) {
    var PidMatchCurrentProcessError = /** @class */ (function (_super) {
        __extends(PidMatchCurrentProcessError, _super);
        function PidMatchCurrentProcessError(cleanupRunfiles) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, "StopProcessSync error, provided PID is the PID of the current process") || this;
            _this.cleanupRunfiles = cleanupRunfiles;
            Object.setPrototypeOf(_this, _newTarget.prototype);
            return _this;
        }
        return PidMatchCurrentProcessError;
    }(Error));
    stopProcessSync.PidMatchCurrentProcessError = PidMatchCurrentProcessError;
    /**
     * Stopping process As Soon As Possible,
     * stopProcessSync with signal SIGKILL and timeout 0
     * */
    function stopProcessAsapSync(pidfile_path_or_pid, runfiles_path) {
        if (runfiles_path === void 0) { runfiles_path = []; }
        stopProcessSync(pidfile_path_or_pid, "SIGKILL", 0, runfiles_path);
    }
    stopProcessSync.stopProcessAsapSync = stopProcessAsapSync;
    /**
     * Terminate all child process of current process ASAP.
     *
     * NOTE: Directly after this function ( in the current tick )
     * direct parents process that had sub processes will be Zombies.
     * However they will be reaped by the current process on next tick.
     *
     */
    function stopSubProcessesAsapSync() {
        var e_6, _a;
        try {
            for (var _b = __values(getSubProcesses(process.pid, "DIRECT SUB PROCESSES ONLY")), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pid = _c.value;
                if (stopSubProcessesAsapSync.ignorePids.has(pid)) {
                    continue;
                }
                stopProcessSync(pid, "SIGKILL", 0);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    }
    stopProcessSync.stopSubProcessesAsapSync = stopSubProcessesAsapSync;
    (function (stopSubProcessesAsapSync) {
        stopSubProcessesAsapSync.ignorePids = new Set();
    })(stopSubProcessesAsapSync = stopProcessSync.stopSubProcessesAsapSync || (stopProcessSync.stopSubProcessesAsapSync = {}));
    /** Invoke kill, can't throw */
    function kill(pid, signal) {
        try {
            execSyncNoCmdTrace("kill -" + signal + " " + pid, { "stdio": "pipe", "shell": "/bin/bash" });
        }
        catch (_a) {
        }
    }
    stopProcessSync.kill = kill;
    /**
     * Get the list of subprocess of a process ( return a list of pid )
     */
    function getSubProcesses(pid, depth) {
        var _a = child_process.spawnSync("/bin/ps", ["--ppid", "" + pid, "-o", "pid,state"], { "shell": false }), stdout = _a.stdout, ps_pid = _a.pid, ps_exitCode = _a.status;
        if (ps_exitCode !== 0) {
            return [];
        }
        var pids = stdout
            .toString("utf8")
            .split("\n")
            .filter(function (v) { return !v.match(/Z/); })
            .map(function (v) { return v.replace(/[^0-9]/g, ""); })
            .filter(function (v) { return !!v; })
            .map(function (v) { return parseInt(v); })
            .filter(function (pid) { return pid !== ps_pid; });
        switch (depth) {
            case "DIRECT SUB PROCESSES ONLY": return pids;
            case "FULL PROCESS TREE": return (function () {
                var e_7, _a;
                var out = [];
                try {
                    for (var pids_1 = __values(pids), pids_1_1 = pids_1.next(); !pids_1_1.done; pids_1_1 = pids_1.next()) {
                        var pid_2 = pids_1_1.value;
                        out = __spread(out, getSubProcesses(pid_2, "FULL PROCESS TREE"), [pid_2]);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (pids_1_1 && !pids_1_1.done && (_a = pids_1.return)) _a.call(pids_1);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                return out;
            })();
        }
    }
    stopProcessSync.getSubProcesses = getSubProcesses;
    /** Return true only if exist and is not a daemon */
    function isProcessRunning(pid) {
        var psCmdOut;
        try {
            psCmdOut = execSyncNoCmdTrace("ps --pid " + pid + " -o state");
        }
        catch (_a) {
            return false;
        }
        return !psCmdOut.match(/Z/);
    }
    stopProcessSync.isProcessRunning = isProcessRunning;
    /** Debug function to print the process tree of the current process. */
    function _printProcessTree(log) {
        if (log === void 0) { log = console.log.bind(console); }
        var rec = function (node) {
            var e_8, _a;
            var pids = getSubProcesses(node.pid, "DIRECT SUB PROCESSES ONLY");
            if (pids.length === 0) {
                return;
            }
            node.sub = [];
            try {
                for (var pids_2 = __values(pids), pids_2_1 = pids_2.next(); !pids_2_1.done; pids_2_1 = pids_2.next()) {
                    var pid = pids_2_1.value;
                    var sub_node = { pid: pid };
                    node.sub.push(sub_node);
                    rec(sub_node);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (pids_2_1 && !pids_2_1.done && (_a = pids_2.return)) _a.call(pids_2);
                }
                finally { if (e_8) throw e_8.error; }
            }
        };
        var tree = { "pid": process.pid };
        rec(tree);
        log(JSON.stringify(tree, null, 3));
    }
    stopProcessSync._printProcessTree = _printProcessTree;
    stopProcessSync.log = function () { };
})(stopProcessSync = exports.stopProcessSync || (exports.stopProcessSync = {}));
/**
 *
 * Function to create the entry point (main.js) of a node service that can:
 * -Restart on crash (without relying on systemd to do so).
 * -Execute as specific unix user but can perform tasks as root before start.
 * -Be stopped gracefully by sending USR2 signal on the root process ( identified by pidfile ).
 * -Be started via a shell and gracefully stopped with CTRL-C (INT signal).
 * -Ensure only one instance of the service run at the same time.
 *      ( if at the time the main is called there is an other instance of the service
 *      running it is gracefully terminated )
 * -Ensure that the process will terminate in at most [ stop_timeout ] ms after
 *      receiving INT or USR2 signal. (default 5second)
 * -Forward daemon processes stdout to root process stdout.
 * -Can fork multiple daemon process.
 *
 * The root process forward command line arguments and environnement variable to
 * the daemon processes.
 *
 * => rootProcess function should return ( when not default ):
 * -pidfile_path: where to store the pid of the root process.
 *      take to terminate after requested to exit gracefully.
 * -srv_name: Name of the service to overwrite the process names. (Default: not overwriting)
 * -stop_timeout: The maximum amount of time ( in ms ) the
 *      that beforeExitTask can take to complete before being killed by force by root process.
 *      After receiving USR2 signal or CTRL, the root process will be closed within [trop_timeout]+1000ms
 * -assert_unix_user: enforce that the main be called by a specific user.
 * -isQuiet?: set to true to disable process debug info logging on stdout. Prefixed by [ service ]. ( default false )
 * -doForwardDaemonStdout?: set to true to forward everything the daemon
 *      process write to stdout to the root process stdout. ( default true )
 * -daemon_unix_user?: User who should own the daemon process.
 * -daemon_node_path?: Node.js executable that should be used to by the daemon process.
 * -daemon_cwd?: working directory of the daemon process.
 * -daemon_restart_after_crash_delay?: ( Default to 500ms. )Delay in ms before restarting the daemon
 *      after it terminate without being requested to. If set to a negative number the daemons
 *      will not be restarted after it terminate for the first time and :
 *      If all daemons process exited with 0 and there is no other daemon process the root process
 *      will end with a clean exit code.
 *      If any of the daemon exit with an unclean code the root process will be terminated with an error code
 *      even if there is some other daemon running.
 * -daemon_count: Number of instance of daemon process that should be forked, default 1.
 * -max_consecutive_restart: Number of time a daemon should be restarted after crashing right after start.
 *      (Default ~Infinity).
 * -preForkTask: Task to perform before forking a daemon process.
 *      It is called just before forking the daemon process. ( called again on every restart. )
 *      If the function is async the daemon will not be forked until the returned promise resolve.
 *      If the function throw exception root process will exit with code 1.
 *      (pidfile will be deleted)
 *      If the function is async and if it need to spawn child processes then
 *      an implementation for terminateSubProcess ( passed as reference ) should be provided so that
 *      if when called it kill all the child processes then resolve once they are terminated.
 *      The to which the promise resolve will be used as exit code for the root process.
 *      Note that terminateSubProcess should never be called, it is a OUT parameter.
 *      However if the implementation provided is just to send a SIGKILL to the forked processes
 *      then there is no need to provide an implementation as all the root process's sub processes tree
 *      will be killed before exiting anyway.
 *
 * => daemonProcess
 * It should return:
 * -launch: the function that the daemon process need to call to start the actual job that the service is meant to perform.
 * -beforeExitTask: function that should be called before the daemon process exit. ( e.g. creating crash report ).
 *      If the daemon process is terminating due to an error the error will be passed as argument.
 *      There is two scenario that will led to this function NOT being called:
 *      1)The daemon process receive KILL or other deadly signal that can't be overridden.
 *      2)The root process terminate.
 * daemon_number represent the instance index of the daemon among the total of [damon_count] process forked.
 * It can be user to use a different logfile for each daemon process instance.
 *
 * NOTE: If the root process receive a deadly signal other than INT, USR2 or HUP
 * ( e.g. KILL or STOP ) the root and daemon processes will immediately terminate without
 * executing beforeExit tasks or removing pidfile.
 *
 * NOTE: because setting listener on "message" and "disconnect" process event prevent the
 * thread from terminating naturally where is nothing more to do if you wish to manually
 * terminate the daemon process without termination being requested from the parent you can:
 *        1) emit "beforeExit" on process setting the desired exit code ( process.emit("beforeExit", process.exitCode= X);
 *        2) throw an exception.
 *
 */
function createService(params) {
    var _this = this;
    var log = (function () { });
    var getLog = function (prefix) {
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return process.stdout.write(Buffer.from("[service] ( " + prefix + " ) " + util.format.apply(util, args) + "\n", "utf8"));
        });
    };
    var rootProcess = params.rootProcess, daemonProcess = params.daemonProcess;
    var main_root = function (main_js_path) { return __awaiter(_this, void 0, void 0, function () {
        var _a, pidfile_path, srv_name, _stop_timeout, assert_unix_user, isQuiet, _doForwardDaemonStdout, daemon_unix_user, daemon_node_path, daemon_cwd, _daemon_restart_after_crash_delay, max_consecutive_restart, preForkTask, _daemon_count, stop_timeout, doForwardDaemonStdout, daemon_restart_after_crash_delay, daemon_count, daemonContexts, isTerminating, args, _b, daemon_uid, daemon_gid, makeForkOptions, forkDaemon, daemon_number;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, rootProcess()];
                case 1:
                    _a = _c.sent(), pidfile_path = _a.pidfile_path, srv_name = _a.srv_name, _stop_timeout = _a.stop_timeout, assert_unix_user = _a.assert_unix_user, isQuiet = _a.isQuiet, _doForwardDaemonStdout = _a.doForwardDaemonStdout, daemon_unix_user = _a.daemon_unix_user, daemon_node_path = _a.daemon_node_path, daemon_cwd = _a.daemon_cwd, _daemon_restart_after_crash_delay = _a.daemon_restart_after_crash_delay, max_consecutive_restart = _a.max_consecutive_restart, preForkTask = _a.preForkTask, _daemon_count = _a.daemon_count;
                    if (srv_name !== undefined) {
                        process.title = srv_name + " root process";
                    }
                    stop_timeout = _stop_timeout !== undefined ?
                        _stop_timeout : 5000;
                    doForwardDaemonStdout = _doForwardDaemonStdout !== undefined ?
                        _doForwardDaemonStdout : true;
                    daemon_restart_after_crash_delay = _daemon_restart_after_crash_delay !== undefined ?
                        _daemon_restart_after_crash_delay : 500;
                    daemon_count = _daemon_count !== undefined ?
                        _daemon_count : 1;
                    if (assert_unix_user !== undefined && os.userInfo().username !== assert_unix_user) {
                        console.log(colorize("Must be run as " + assert_unix_user, "RED"));
                        process.exit(1);
                        return [2 /*return*/];
                    }
                    if (!isQuiet) {
                        log = getLog("root process");
                    }
                    stopProcessSync.log = log;
                    try {
                        stopProcessSync(pidfile_path);
                    }
                    catch (error) {
                        if (!(error instanceof stopProcessSync.PidMatchCurrentProcessError)) {
                            throw error;
                        }
                        error.cleanupRunfiles();
                    }
                    if (fs.existsSync(pidfile_path)) {
                        throw Error("Other instance launched simultaneously");
                    }
                    (function createPidfile() {
                        var pidfile_dir_path = path.dirname(pidfile_path);
                        if (!fs.existsSync(pidfile_dir_path)) {
                            execSyncNoCmdTrace("mkdir -p " + pidfile_dir_path);
                        }
                        fs.writeFileSync(pidfile_path, process.pid.toString());
                    })();
                    log("PID: " + process.pid);
                    daemonContexts = new Map((new Array(daemon_count))
                        .fill(null)
                        .map(function (_, index) {
                        var context = [
                            index + 1,
                            {
                                "daemonProcess": undefined,
                                "terminatePreForkChildProcesses": { "impl": function () { return Promise.resolve(); } },
                                "restart_attempt_remaining": max_consecutive_restart || NaN,
                                "reset_restart_attempt_timer": setTimeout(function () { }, 0)
                            }
                        ];
                        return context;
                    }));
                    isTerminating = false;
                    setProcessExitHandler(function (exitCause) { return __awaiter(_this, void 0, void 0, function () {
                        var childProcessExitCode;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    isTerminating = true;
                                    return [4 /*yield*/, (function terminateAllChildProcesses() {
                                            return __awaiter(this, void 0, void 0, function () {
                                                var terminateDaemonProcess, terminatePreForkChildProcessesSafeCall, tasks, _loop_3, _a, _b, _c, daemonProcess_1, terminatePreForkChildProcesses;
                                                var e_9, _d;
                                                var _this = this;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            terminateDaemonProcess = function (daemonProcess) { return __awaiter(_this, void 0, void 0, function () {
                                                                return __generator(this, function (_a) {
                                                                    return [2 /*return*/, new Promise(function (resolve) {
                                                                            log("Attempt to gracefully terminate daemon process PID: " + daemonProcess.pid + "...");
                                                                            daemonProcess.send(null);
                                                                            var timer = setTimeout(function () { return doStopAsap(); }, stop_timeout + 500);
                                                                            daemonProcess.once("error", function () { return doStopAsap(); });
                                                                            daemonProcess.once("close", function (childProcessExitCode) {
                                                                                clearTimeout(timer);
                                                                                log("Daemon process PID: " + daemonProcess.pid + " exited with code " + childProcessExitCode);
                                                                                if (typeof childProcessExitCode !== "number" || isNaN(childProcessExitCode)) {
                                                                                    childProcessExitCode = 1;
                                                                                }
                                                                                resolve(childProcessExitCode);
                                                                            });
                                                                            var doStopAsap = function () {
                                                                                log("Daemon process PID:" + daemonProcess.pid + " not responding, force kill...");
                                                                                clearTimeout(timer);
                                                                                daemonProcess.removeAllListeners("error");
                                                                                daemonProcess.removeAllListeners("close");
                                                                                stopProcessSync.stopProcessAsapSync(daemonProcess.pid);
                                                                                resolve(1);
                                                                            };
                                                                        })];
                                                                });
                                                            }); };
                                                            terminatePreForkChildProcessesSafeCall = function (impl) {
                                                                var timer;
                                                                return Promise.race([
                                                                    new Promise(function (resolve) { return timer = setTimeout(function () { return resolve("TIMEOUT"); }, stop_timeout + 500); }),
                                                                    (function () { return __awaiter(_this, void 0, void 0, function () {
                                                                        var result, _a;
                                                                        return __generator(this, function (_b) {
                                                                            switch (_b.label) {
                                                                                case 0:
                                                                                    _b.trys.push([0, 2, , 3]);
                                                                                    return [4 /*yield*/, impl()];
                                                                                case 1:
                                                                                    _b.sent();
                                                                                    result = "SUCCESS";
                                                                                    return [3 /*break*/, 3];
                                                                                case 2:
                                                                                    _a = _b.sent();
                                                                                    result = "ERROR";
                                                                                    return [3 /*break*/, 3];
                                                                                case 3:
                                                                                    clearTimeout(timer);
                                                                                    return [2 /*return*/, result];
                                                                            }
                                                                        });
                                                                    }); })()
                                                                ]);
                                                            };
                                                            tasks = [];
                                                            _loop_3 = function (daemonProcess_1, terminatePreForkChildProcesses) {
                                                                tasks[tasks.length] = !daemonProcess_1 ? (new Promise(function (resolve) { return terminatePreForkChildProcessesSafeCall(terminatePreForkChildProcesses.impl)
                                                                    .then(function (result) { return result === "SUCCESS" ? resolve(0) : resolve(1); }); })) : terminateDaemonProcess(daemonProcess_1);
                                                            };
                                                            try {
                                                                for (_a = __values(daemonContexts.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                                    _c = _b.value, daemonProcess_1 = _c.daemonProcess, terminatePreForkChildProcesses = _c.terminatePreForkChildProcesses;
                                                                    _loop_3(daemonProcess_1, terminatePreForkChildProcesses);
                                                                }
                                                            }
                                                            catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                                            finally {
                                                                try {
                                                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                                                }
                                                                finally { if (e_9) throw e_9.error; }
                                                            }
                                                            return [4 /*yield*/, Promise.all(tasks)];
                                                        case 1: return [2 /*return*/, (_e.sent()).reduce(function (accumulator, currentValue) { return accumulator === 0 ? currentValue : accumulator; }, 0)];
                                                    }
                                                });
                                            });
                                        })()];
                                case 1:
                                    childProcessExitCode = _a.sent();
                                    if (exitCause.type === "EXCEPTION") {
                                        /*
                                         preForkTask throw or daemonProcess emit error or
                                         one of the daemon exited with a non 0 code and
                                         restart_delay was set <0
                                        */
                                        log("Root process exception message: " + exitCause.error.message);
                                        process.exitCode = 1;
                                    }
                                    else {
                                        process.exitCode = childProcessExitCode;
                                    }
                                    fs.unlinkSync(pidfile_path);
                                    log("pidfile deleted");
                                    return [2 /*return*/];
                            }
                        });
                    }); }, stop_timeout + 1000);
                    setProcessExitHandler.log = log;
                    args = (function () {
                        var out = __spread(process.argv);
                        out.shift();
                        out.shift();
                        return out;
                    })();
                    _b = __read((function () {
                        if (!!daemon_unix_user) {
                            return [get_uid(daemon_unix_user), get_gid(daemon_unix_user)];
                        }
                        else {
                            return [undefined, undefined];
                        }
                    })(), 2), daemon_uid = _b[0], daemon_gid = _b[1];
                    makeForkOptions = function (daemon_number) { return ({
                        "uid": daemon_uid,
                        "gid": daemon_gid,
                        "silent": true,
                        "cwd": daemon_cwd,
                        "execPath": daemon_node_path,
                        "env": __assign({}, process.env, { daemon_number: daemon_number,
                            daemon_count: daemon_count,
                            srv_name: srv_name,
                            stop_timeout: stop_timeout, "isQuiet": isQuiet ? "1" : "0" })
                    }); };
                    forkDaemon = function (daemon_number) { return __awaiter(_this, void 0, void 0, function () {
                        var context, error_5, daemonProcess;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    context = daemonContexts.get(daemon_number);
                                    clearTimeout(context.reset_restart_attempt_timer);
                                    if (!!!preForkTask) return [3 /*break*/, 5];
                                    log("performing pre fork tasks for daemon number " + daemon_number + "...");
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, preForkTask(context.terminatePreForkChildProcesses, daemon_number)];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_5 = _a.sent();
                                    log("PreFork tasks for daemon number " + daemon_number + " raised an exception");
                                    throw error_5;
                                case 4:
                                    context.terminatePreForkChildProcesses.impl = function () { return Promise.resolve(); };
                                    _a.label = 5;
                                case 5:
                                    if (isTerminating) {
                                        log("Not forking daemon because root process is terminating");
                                        return [2 /*return*/];
                                    }
                                    if (max_consecutive_restart !== undefined) {
                                        context.reset_restart_attempt_timer = setTimeout(function () { return context.restart_attempt_remaining = max_consecutive_restart; }, 10000);
                                    }
                                    log("Forking daemon process number " + daemon_number + " now.");
                                    daemonProcess = child_process.fork(main_js_path, args, makeForkOptions(daemon_number));
                                    context.daemonProcess = daemonProcess;
                                    if (doForwardDaemonStdout) {
                                        daemonProcess.stdout.on("data", function (data) {
                                            return process.stdout.write(data);
                                        });
                                    }
                                    daemonProcess.once("error", function (error) {
                                        if (isTerminating) {
                                            return;
                                        }
                                        context.daemonProcess = undefined;
                                        log([
                                            "Error evt emitted by daemon process number " + daemon_number,
                                            "Meaning that: ",
                                            "The process could not be spawned, or",
                                            "The process could not be killed, or",
                                            "Sending a message to the child process failed."
                                        ].join("\n"));
                                        throw error;
                                    });
                                    daemonProcess.once("close", function (childProcessExitCode) {
                                        if (isTerminating) {
                                            return;
                                        }
                                        context.daemonProcess = undefined;
                                        log("Daemon process " + daemon_number + " exited without being requested to.");
                                        if (daemon_restart_after_crash_delay < 0) {
                                            if (childProcessExitCode === null) {
                                                childProcessExitCode = 1;
                                            }
                                            log("Daemon number " + daemon_number + " will not be restarted.");
                                            clearTimeout(context.reset_restart_attempt_timer);
                                            if (childProcessExitCode !== 0) {
                                                throw new Error("Daemon number " + daemon_number + ", crashed");
                                            }
                                            else if (!Array.from(daemonContexts.values()).find(function (_a) {
                                                var daemonProcess = _a.daemonProcess;
                                                return !!daemonProcess;
                                            })) {
                                                log("As last remaining daemon process terminated cleanly we stop end root process");
                                                process.emit("beforeExit", NaN);
                                            }
                                            return;
                                        }
                                        if (max_consecutive_restart !== undefined) {
                                            if (context.restart_attempt_remaining-- === 0) {
                                                throw new Error("Daemon process " + daemon_number + " is crashing over and over");
                                            }
                                            else {
                                                log("Restart remaining: " + context.restart_attempt_remaining);
                                            }
                                        }
                                        log("Daemon process " + daemon_number + " will be restarted");
                                        setTimeout(function () { return forkDaemon(daemon_number); }, daemon_restart_after_crash_delay);
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    for (daemon_number = 1; daemon_number <= daemon_count; daemon_number++) {
                        forkDaemon(daemon_number);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var main_daemon = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, daemon_number, daemon_count, stop_timeout, isQuiet, srv_name, _b, launch, beforeExitTask;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = __read(["daemon_number", "daemon_count", "stop_timeout", "isQuiet"].map(function (key) {
                        var value = parseInt(process.env[key]);
                        delete process.env[key];
                        return value;
                    }), 4), daemon_number = _a[0], daemon_count = _a[1], stop_timeout = _a[2], isQuiet = _a[3];
                    srv_name = (function () {
                        var key = "srv_name";
                        var value = process.env[key];
                        delete process.env[key];
                        if (value === "" + undefined) {
                            return undefined;
                        }
                        else {
                            return value;
                        }
                    })();
                    if (!isQuiet) {
                        log = getLog("daemon process " + daemon_number + "/" + daemon_count + ", PID: " + process.pid);
                    }
                    if (srv_name !== undefined) {
                        process.title = srv_name + " daemon " + (daemon_count === 1 ? "" : daemon_number);
                    }
                    return [4 /*yield*/, daemonProcess(daemon_number, daemon_count)];
                case 1:
                    _b = _c.sent(), launch = _b.launch, beforeExitTask = _b.beforeExitTask;
                    process.once("message", function () { return process.emit("beforeExit", process.exitCode = 0); });
                    process.once("disconnect", function () { return process.exit(1); });
                    setProcessExitHandler(function (exitCause) { return __awaiter(_this, void 0, void 0, function () {
                        var error, prBeforeExitTask;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    error = exitCause.type === "EXCEPTION" ? exitCause.error : undefined;
                                    if (!!!beforeExitTask) return [3 /*break*/, 2];
                                    prBeforeExitTask = beforeExitTask(error);
                                    if (!(prBeforeExitTask instanceof Promise)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, safePr(prBeforeExitTask, stop_timeout + 2000).then(function (error) {
                                            if (error instanceof Error) {
                                                //NOTE: Throwing does not overwrite the exit code.
                                                if (error.message === safePr.timeoutErrorMessage) {
                                                    //NOTE: Throwing string to not have the log of setProcessExitHandler
                                                    //display the stack trace.
                                                    throw "beforeExitTask took too much time to complete.";
                                                }
                                                else {
                                                    throw error;
                                                }
                                            }
                                        })];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); }, -1, function (exitCause) { return exitCause.type !== "SIGNAL"; });
                    setProcessExitHandler.log = log;
                    launch();
                    return [2 /*return*/];
            }
        });
    }); };
    if (!process.send) {
        main_root(get_caller_file_path_2.get_caller_file_path());
    }
    else {
        main_daemon();
    }
}
exports.createService = createService;
var systemd;
(function (systemd) {
    var mkPath = function (srv_name) { return "/etc/systemd/system/" + srv_name + ".service"; };
    /**
     * Generate a systemd config file for a service created via "createService" function
     * enable by default, start by default.
     */
    function createConfigFile(srv_name, main_js_path, node_path, enable, start) {
        if (node_path === void 0) { node_path = process.argv[0]; }
        if (enable === void 0) { enable = "ENABLE"; }
        if (start === void 0) { start = "START"; }
        fs.writeFileSync(mkPath(srv_name), Buffer.from([
            "[Unit]",
            "After=network.target",
            "",
            "[Service]",
            "ExecStart=" + node_path + " " + main_js_path,
            "StandardOutput=inherit",
            "KillMode=process",
            "KillSignal=SIGUSR2",
            "SendSIGKILL=no",
            "Environment=NODE_ENV=production",
            "",
            "[Install]",
            "WantedBy=multi-user.target",
            ""
        ].join("\n"), "utf8"));
        execSyncNoCmdTrace("systemctl daemon-reload");
        if (!!enable) {
            execSyncNoCmdTrace("systemctl enable " + srv_name, { "stdio": "pipe" });
        }
        if (!!start) {
            execSyncNoCmdTrace("systemctl start " + srv_name);
        }
    }
    systemd.createConfigFile = createConfigFile;
    /** Remove config file disable and reload daemon, never throw, stop is false by default */
    function deleteConfigFile(srv_name, stop) {
        if (stop === void 0) { stop = false; }
        if (!!stop) {
            execSyncNoCmdTrace("systemctl stop " + srv_name + " || true", { "stdio": "pipe" });
        }
        execSyncNoCmdTrace("systemctl disable " + srv_name + " || true", { "stdio": "pipe" });
        try {
            fs.unlinkSync(mkPath(srv_name));
        }
        catch (_a) { }
        execSyncNoCmdTrace("systemctl daemon-reload || true", { "stdio": "pipe" });
    }
    systemd.deleteConfigFile = deleteConfigFile;
})(systemd = exports.systemd || (exports.systemd = {}));


/***/ }),

/***/ 431:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 470:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __webpack_require__(431);
const file_command_1 = __webpack_require__(102);
const utils_1 = __webpack_require__(82);
const os = __importStar(__webpack_require__(87));
const path = __importStar(__webpack_require__(622));
const oidc_utils_1 = __webpack_require__(742);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 503:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitCommit = void 0;
const st = __importStar(__webpack_require__(425));
function gitCommit(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { owner, repo, commitAuthorEmail, performChanges, github_token } = params;
        yield st.exec(`git clone https://${github_token}@github.com/${owner}/${repo}`);
        const cwd = process.cwd();
        process.chdir(repo);
        const changesResult = yield (() => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield performChanges();
            }
            catch (error) {
                return error;
            }
        }))();
        if (!(changesResult instanceof Error) && changesResult.commit) {
            yield st.exec(`git config --local user.email "${commitAuthorEmail}"`);
            yield st.exec(`git config --local user.name "${commitAuthorEmail.split("@")[0]}"`);
            if (changesResult.addAll) {
                yield st.exec(`git add -A`);
            }
            yield st.exec(`git commit -am "${changesResult.message}"`);
            yield st.exec(`git push "https://${owner}:${github_token}@github.com/${owner}/${repo}.git"`);
        }
        process.chdir(cwd);
        yield st.exec(`rm -r ${repo}`);
        if (changesResult instanceof Error) {
            throw changesResult;
        }
    });
}
exports.gitCommit = gitCommit;


/***/ }),

/***/ 539:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const http = __webpack_require__(605);
const https = __webpack_require__(211);
const pm = __webpack_require__(950);
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    let proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk]);
            });
            this.message.on('end', () => {
                resolve(output.toString());
            });
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error('Client has already been disposed.');
        }
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1;
        let numTries = 0;
        let response;
        while (numTries < maxTries) {
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response &&
                response.message &&
                response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for (let i = 0; i < this.handlers.length; i++) {
                    if (this.handlers[i].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                }
                else {
                    // We have received an unauthorized response but have no handlers to handle it.
                    // Let the response return to the caller.
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                this._allowRedirects &&
                redirectsRemaining > 0) {
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) {
                    // if there's no location to redirect to, we won't
                    break;
                }
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' &&
                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
                    !this._allowRedirectDowngrade) {
                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                }
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for (let header in headers) {
                        // header names are case insensitive
                        if (header.toLowerCase() === 'authorization') {
                            delete headers[header];
                        }
                    }
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                // If not a retry code, return immediately instead of retrying
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach(handler => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __webpack_require__(413);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...((proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    }),
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) {
                return a;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
                resolve(response);
            }
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    }
                    else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                    msg = obj.message;
                }
                else if (contents && contents.length > 0) {
                    // it may be the case that the exception is in the body message as string
                    msg = contents;
                }
                else {
                    msg = 'Failed request: (' + statusCode + ')';
                }
                let err = new HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 605:
/***/ (function(module) {

module.exports = require("http");

/***/ }),

/***/ 614:
/***/ (function(module) {

module.exports = require("events");

/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 631:
/***/ (function(module) {

module.exports = require("net");

/***/ }),

/***/ 649:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActionName = exports.getActionParamsFactory = exports.getInputDefault = exports.getInputDescription = exports.availableActions = exports.inputNames = void 0;
const core = __importStar(__webpack_require__(470));
exports.inputNames = [
    "action_name",
    "github_token",
    "educational_resource"
];
exports.availableActions = [
    "update_educational_resources"
];
function getInputDescription(inputName) {
    switch (inputName) {
        case "action_name": return [
            `Action to run, one of: `,
            exports.availableActions.map(s => `"${s}"`).join(", ")
        ].join("");
        case "github_token": return "GitHub Personal access token";
        case "educational_resource": return "A JSON formatted educational resource (EducationalResource | EducationalResourceDirectory)";
    }
}
exports.getInputDescription = getInputDescription;
function getInputDefault(inputName) {
    switch (inputName) {
        case "github_token": return "${{ github.token }}";
    }
}
exports.getInputDefault = getInputDefault;
const getInput = (inputName) => {
    if (exports.inputNames.indexOf(inputName) < 0) {
        throw new Error(`${inputName} expected`);
    }
    return core.getInput(inputName);
};
function getActionParamsFactory(params) {
    const { inputNameSubset } = params;
    function getActionParams() {
        const params = {};
        inputNameSubset.forEach(inputName => params[inputName] = getInput(inputName));
        return params;
    }
    ;
    return { getActionParams };
}
exports.getActionParamsFactory = getActionParamsFactory;
function getActionName() {
    return getInput("action_name");
}
exports.getActionName = getActionName;


/***/ }),

/***/ 669:
/***/ (function(module) {

module.exports = require("util");

/***/ }),

/***/ 742:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OidcClient = void 0;
const http_client_1 = __webpack_require__(539);
const auth_1 = __webpack_require__(226);
const core_1 = __webpack_require__(470);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 835:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = exports.getActionParams = void 0;
const inputHelper_1 = __webpack_require__(649);
const gitCommit_1 = __webpack_require__(503);
const child_process_1 = __webpack_require__(129);
const fs = __importStar(__webpack_require__(747));
exports.getActionParams = inputHelper_1.getActionParamsFactory({
    "inputNameSubset": [
        "github_token",
        "educational_resource",
    ]
}).getActionParams;
function action(_actionName, params, core) {
    return __awaiter(this, void 0, void 0, function* () {
        const { github_token, educational_resource } = params;
        core.debug(`params: ${JSON.stringify(params)}`);
        yield gitCommit_1.gitCommit({
            "owner": "InseeFrLab",
            "repo": "www.sspcloud.fr",
            github_token,
            "commitAuthorEmail": "actions@github.com",
            "performChanges": () => __awaiter(this, void 0, void 0, function* () {
                console.log(`About to install dependencies`);
                child_process_1.execSync("yarn install");
                console.log(`About to update educational resources`);
                const educationalResourceJsonFilePath = "./educational_resource.json";
                fs.writeFileSync(educationalResourceJsonFilePath, Buffer.from(educational_resource, "utf8"));
                child_process_1.execSync(`npx ts-node --skip-project src/bin/update_educational_resources.ts ${educationalResourceJsonFilePath}`);
                console.log(`About to build (to make sure everything is ok)`);
                child_process_1.execSync("yarn build");
                console.log(`About to format (for a minimal diff)`);
                child_process_1.execSync("yarn format");
                console.log(`About to commit`);
                return {
                    "commit": true,
                    "addAll": false,
                    "message": "Update educational resources"
                };
            })
        });
    });
}
exports.action = action;


/***/ }),

/***/ 950:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    }
    else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
    if (proxyVar) {
        proxyUrl = new URL(proxyVar);
    }
    return proxyUrl;
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;


/***/ })

/******/ });