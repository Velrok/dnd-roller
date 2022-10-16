var shadow$provide = {};
var CLOSURE_NO_DEPS = true;
var CLOSURE_BASE_PATH = '/js/compiled/cljs-runtime/';
var CLOSURE_DEFINES = {"shadow.cljs.devtools.client.env.repl_pprint":false,"shadow.cljs.devtools.client.env.devtools_url":"","shadow.cljs.devtools.client.env.autoload":true,"shadow.cljs.devtools.client.env.proc_id":"4fde139b-e67a-4215-9826-1276acf08250","goog.ENABLE_DEBUG_LOADER":false,"shadow.cljs.devtools.client.env.server_port":9630,"shadow.cljs.devtools.client.env.use_document_host":true,"shadow.cljs.devtools.client.env.module_format":"goog","goog.LOCALE":"en","shadow.cljs.devtools.client.env.build_id":"app","shadow.cljs.devtools.client.env.ignore_warnings":false,"goog.DEBUG":true,"shadow.cljs.devtools.client.env.ssl":false,"shadow.cljs.devtools.client.env.enabled":true,"shadow.cljs.devtools.client.env.server_host":"localhost","goog.TRANSPILE":"never"};
/** @define {boolean} */ var COMPILED = false;
/** @const */ var goog = goog || {};
/**
 @const
 @suppress {newCheckTypes}
 */
goog.global = this;
/** @type {(Object<string,(string|number|boolean)>|undefined)} */ goog.global.CLOSURE_UNCOMPILED_DEFINES;
/** @type {(Object<string,(string|number|boolean)>|undefined)} */ goog.global.CLOSURE_DEFINES;
/**
 @param {?} val
 @return {boolean}
 */
goog.isDef = function(val) {
  return val !== void 0;
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isString = function(val) {
  return typeof val == "string";
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isBoolean = function(val) {
  return typeof val == "boolean";
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isNumber = function(val) {
  return typeof val == "number";
};
/**
 @private
 @param {string} name
 @param {*=} opt_object
 @param {Object=} opt_objectToExportTo
 */
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split(".");
  var cur = opt_objectToExportTo || goog.global;
  if (!(parts[0] in cur) && typeof cur.execScript != "undefined") {
    cur.execScript("var " + parts[0]);
  }
  for (var part; parts.length && (part = parts.shift());) {
    if (!parts.length && goog.isDef(opt_object)) {
      cur[part] = opt_object;
    } else {
      if (cur[part] && cur[part] !== Object.prototype[part]) {
        cur = cur[part];
      } else {
        cur = cur[part] = {};
      }
    }
  }
};
/**
 @param {string} name
 @param {(string|number|boolean)} defaultValue
 @return {(string|number|boolean)}
 */
goog.define = function(name, defaultValue) {
  var value = defaultValue;
  if (!COMPILED) {
    var uncompiledDefines = goog.global.CLOSURE_UNCOMPILED_DEFINES;
    var defines = goog.global.CLOSURE_DEFINES;
    if (uncompiledDefines && /** @type {?} */ (uncompiledDefines).nodeType === undefined && Object.prototype.hasOwnProperty.call(uncompiledDefines, name)) {
      value = uncompiledDefines[name];
    } else {
      if (defines && /** @type {?} */ (defines).nodeType === undefined && Object.prototype.hasOwnProperty.call(defines, name)) {
        value = defines[name];
      }
    }
  }
  goog.exportPath_(name, value);
  return value;
};
/** @define {boolean} */ goog.define("goog.DEBUG", true);
/** @define {string} */ goog.define("goog.LOCALE", "en");
/** @define {boolean} */ goog.define("goog.TRUSTED_SITE", true);
/** @define {boolean} */ goog.define("goog.STRICT_MODE_COMPATIBLE", false);
/** @define {boolean} */ goog.define("goog.DISALLOW_TEST_ONLY_CODE", COMPILED && !goog.DEBUG);
/** @define {boolean} */ goog.define("goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING", false);
/**
 @param {string} name
 */
goog.provide = function(name) {
  if (goog.isInModuleLoader_()) {
    throw new Error("goog.provide cannot be used within a module.");
  }
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw new Error('Namespace "' + name + '" already declared.');
    }
  }
  goog.constructNamespace_(name);
};
/**
 @private
 @param {string} name
 @param {Object=} opt_obj
 */
goog.constructNamespace_ = function(name, opt_obj) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[name];
    var namespace = name;
    while (namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      if (goog.getObjectByName(namespace)) {
        break;
      }
      goog.implicitNamespaces_[namespace] = true;
    }
  }
  goog.exportPath_(name, opt_obj);
};
/**
 @param {?Window=} opt_window
 @return {string}
 */
goog.getScriptNonce = function(opt_window) {
  if (opt_window && opt_window != goog.global) {
    return goog.getScriptNonce_(opt_window.document);
  }
  if (goog.cspNonce_ === null) {
    goog.cspNonce_ = goog.getScriptNonce_(goog.global.document);
  }
  return goog.cspNonce_;
};
/** @private @const */ goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
/** @private @type {?string} */ goog.cspNonce_ = null;
/**
 @private
 @param {!Document} doc
 @return {string}
 */
goog.getScriptNonce_ = function(doc) {
  var script = doc.querySelector && doc.querySelector("script[nonce]");
  if (script) {
    var nonce = script["nonce"] || script.getAttribute("nonce");
    if (nonce && goog.NONCE_PATTERN_.test(nonce)) {
      return nonce;
    }
  }
  return "";
};
/** @private */ goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
/**
 @param {string} name
 @return {void}
 */
goog.module = function(name) {
  if (!goog.isString(name) || !name || name.search(goog.VALID_MODULE_RE_) == -1) {
    throw new Error("Invalid module identifier");
  }
  if (!goog.isInGoogModuleLoader_()) {
    throw new Error("Module " + name + " has been loaded incorrectly. Note, " + "modules cannot be loaded as normal scripts. They require some kind of " + "pre-processing step. You're likely trying to load a module via a " + "script tag or as a part of a concatenated bundle without rewriting the " + "module. For more info see: " + "https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw new Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = name;
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw new Error('Namespace "' + name + '" already declared.');
    }
    delete goog.implicitNamespaces_[name];
  }
};
/**
 @param {string} name
 @return {?}
 @suppress {missingProvide}
 */
goog.module.get = function(name) {
  return goog.module.getInternal_(name);
};
/**
 @private
 @param {string} name
 @return {?}
 */
goog.module.getInternal_ = function(name) {
  if (!COMPILED) {
    if (name in goog.loadedModules_) {
      return goog.loadedModules_[name].exports;
    } else {
      if (!goog.implicitNamespaces_[name]) {
        var ns = goog.getObjectByName(name);
        return ns != null ? ns : null;
      }
    }
  }
  return null;
};
/** @enum {string} */ goog.ModuleType = {ES6:"es6", GOOG:"goog"};
/** @private @type {?{moduleName:(string|undefined),declareLegacyNamespace:boolean,type:?goog.ModuleType}} */ goog.moduleLoaderState_ = null;
/**
 @private
 @return {boolean}
 */
goog.isInModuleLoader_ = function() {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
/**
 @private
 @return {boolean}
 */
goog.isInGoogModuleLoader_ = function() {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
/**
 @private
 @return {boolean}
 */
goog.isInEs6ModuleLoader_ = function() {
  var inLoader = !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6;
  if (inLoader) {
    return true;
  }
  var jscomp = goog.global["$jscomp"];
  if (jscomp) {
    if (typeof jscomp.getCurrentModulePath != "function") {
      return false;
    }
    return !!jscomp.getCurrentModulePath();
  }
  return false;
};
/**
 @suppress {missingProvide}
 */
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw new Error("goog.module.declareLegacyNamespace must be called from " + "within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw new Error("goog.module must be called prior to " + "goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = true;
};
/**
 @param {string} namespace
 @suppress {missingProvide}
 */
goog.declareModuleId = function(namespace) {
  if (!COMPILED) {
    if (!goog.isInEs6ModuleLoader_()) {
      throw new Error("goog.declareModuleId may only be called from " + "within an ES6 module");
    }
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw new Error("goog.declareModuleId may only be called once per module.");
    }
    if (namespace in goog.loadedModules_) {
      throw new Error('Module with namespace "' + namespace + '" already exists.');
    }
  }
  if (goog.moduleLoaderState_) {
    goog.moduleLoaderState_.moduleName = namespace;
  } else {
    var jscomp = goog.global["$jscomp"];
    if (!jscomp || typeof jscomp.getCurrentModulePath != "function") {
      throw new Error('Module with namespace "' + namespace + '" has been loaded incorrectly.');
    }
    var exports = jscomp.require(jscomp.getCurrentModulePath());
    goog.loadedModules_[namespace] = {exports:exports, type:goog.ModuleType.ES6, moduleId:namespace};
  }
};
/**
 @type {function(string):undefined}
 @suppress {missingProvide}
 */
goog.module.declareNamespace = goog.declareModuleId;
/**
 @param {string=} opt_message
 */
goog.setTestOnly = function(opt_message) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    opt_message = opt_message || "";
    throw new Error("Importing test-only code into non-debug environment" + (opt_message ? ": " + opt_message : "."));
  }
};
/**
 @param {string} name
 */
goog.forwardDeclare = function(name) {
};
goog.forwardDeclare("Document");
goog.forwardDeclare("HTMLScriptElement");
goog.forwardDeclare("XMLHttpRequest");
if (!COMPILED) {
  /**
   @private
   @param {string} name
   @return {boolean}
   */
  goog.isProvided_ = function(name) {
    return name in goog.loadedModules_ || !goog.implicitNamespaces_[name] && goog.isDefAndNotNull(goog.getObjectByName(name));
  };
  /** @private @type {!Object<string,(boolean|undefined)>} */ goog.implicitNamespaces_ = {"goog.module":true};
}
/**
 @param {string} name
 @param {Object=} opt_obj
 @return {?}
 */
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for (var i = 0; i < parts.length; i++) {
    cur = cur[parts[i]];
    if (!goog.isDefAndNotNull(cur)) {
      return null;
    }
  }
  return cur;
};
/**
 @param {!Object} obj
 @param {Object=} opt_global
 @deprecated Properties may be explicitly exported to the global scope, but this should no longer be done in bulk.
 */
goog.globalize = function(obj, opt_global) {
  var global = opt_global || goog.global;
  for (var x in obj) {
    global[x] = obj[x];
  }
};
/**
 @param {string} relPath
 @param {!Array<string>} provides
 @param {!Array<string>} requires
 @param {(boolean|!Object<?,string>)=} opt_loadFlags
 */
goog.addDependency = function(relPath, provides, requires, opt_loadFlags) {
  if (!COMPILED && goog.DEPENDENCIES_ENABLED) {
    goog.debugLoader_.addDependency(relPath, provides, requires, opt_loadFlags);
  }
};
/** @define {boolean} */ goog.define("goog.ENABLE_DEBUG_LOADER", true);
/**
 @private
 @param {string} msg
 */
goog.logToConsole_ = function(msg) {
  if (goog.global.console) {
    goog.global.console["error"](msg);
  }
};
/**
 @param {string} namespace
 @return {?}
 */
goog.require = function(namespace) {
  if (!COMPILED) {
    if (goog.ENABLE_DEBUG_LOADER) {
      goog.debugLoader_.requested(namespace);
    }
    if (goog.isProvided_(namespace)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(namespace);
      }
    } else {
      if (goog.ENABLE_DEBUG_LOADER) {
        var moduleLoaderState = goog.moduleLoaderState_;
        goog.moduleLoaderState_ = null;
        try {
          goog.debugLoader_.load_(namespace);
        } finally {
          goog.moduleLoaderState_ = moduleLoaderState;
        }
      }
    }
    return null;
  }
};
/**
 @param {string} namespace
 @return {?}
 */
goog.requireType = function(namespace) {
  return {};
};
/** @type {string} */ goog.basePath = "";
/** @type {(string|undefined)} */ goog.global.CLOSURE_BASE_PATH;
/** @type {(boolean|undefined)} */ goog.global.CLOSURE_NO_DEPS;
/** @type {(function(string,string=):boolean|undefined)} */ goog.global.CLOSURE_IMPORT_SCRIPT;
/**
 @return {void}
 */
goog.nullFunction = function() {
};
/** @type {!Function} */ goog.abstractMethod = function() {
  throw new Error("unimplemented abstract method");
};
/**
 @param {!Function} ctor
 @suppress {missingProperties}
 */
goog.addSingletonGetter = function(ctor) {
  /**
   @type {(undefined|!Object)}
   @suppress {underscore}
   */
  ctor.instance_ = undefined;
  ctor.getInstance = function() {
    if (ctor.instance_) {
      return ctor.instance_;
    }
    if (goog.DEBUG) {
      goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
    }
    return /** @type {(!Object|undefined)} */ (ctor.instance_) = new ctor;
  };
};
/** @private @type {!Array<!Function>} */ goog.instantiatedSingletons_ = [];
/** @define {boolean} */ goog.define("goog.LOAD_MODULE_USING_EVAL", true);
/** @define {boolean} */ goog.define("goog.SEAL_MODULE_EXPORTS", goog.DEBUG);
/** @private @const @type {!Object<string,{exports:?,type:string,moduleId:string}>} */ goog.loadedModules_ = {};
/** @const @type {boolean} */ goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
/** @define {string} */ goog.define("goog.TRANSPILE", "detect");
/** @define {boolean} */ goog.define("goog.ASSUME_ES_MODULES_TRANSPILED", false);
/** @define {string} */ goog.define("goog.TRANSPILE_TO_LANGUAGE", "");
/** @define {string} */ goog.define("goog.TRANSPILER", "transpile.js");
/** @package @type {?boolean} */ goog.hasBadLetScoping = null;
/**
 @package
 @return {boolean}
 */
goog.useSafari10Workaround = function() {
  if (goog.hasBadLetScoping == null) {
    var hasBadLetScoping;
    try {
      hasBadLetScoping = !eval('"use strict";' + "let x \x3d 1; function f() { return typeof x; };" + 'f() \x3d\x3d "number";');
    } catch (e) {
      hasBadLetScoping = false;
    }
    goog.hasBadLetScoping = hasBadLetScoping;
  }
  return goog.hasBadLetScoping;
};
/**
 @package
 @param {string} moduleDef
 @return {string}
 */
goog.workaroundSafari10EvalBug = function(moduleDef) {
  return "(function(){" + moduleDef + "\n" + ";" + "})();\n";
};
/**
 @param {(function(?):?|string)} moduleDef
 */
goog.loadModule = function(moduleDef) {
  var previousState = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:"", declareLegacyNamespace:false, type:goog.ModuleType.GOOG};
    var exports;
    if (goog.isFunction(moduleDef)) {
      exports = moduleDef.call(undefined, {});
    } else {
      if (goog.isString(moduleDef)) {
        if (goog.useSafari10Workaround()) {
          moduleDef = goog.workaroundSafari10EvalBug(moduleDef);
        }
        exports = goog.loadModuleFromSource_.call(undefined, moduleDef);
      } else {
        throw new Error("Invalid module definition");
      }
    }
    var moduleName = goog.moduleLoaderState_.moduleName;
    if (goog.isString(moduleName) && moduleName) {
      if (goog.moduleLoaderState_.declareLegacyNamespace) {
        goog.constructNamespace_(moduleName, exports);
      } else {
        if (goog.SEAL_MODULE_EXPORTS && Object.seal && typeof exports == "object" && exports != null) {
          Object.seal(exports);
        }
      }
      var data = {exports:exports, type:goog.ModuleType.GOOG, moduleId:goog.moduleLoaderState_.moduleName};
      goog.loadedModules_[moduleName] = data;
    } else {
      throw new Error('Invalid module name "' + moduleName + '"');
    }
  } finally {
    goog.moduleLoaderState_ = previousState;
  }
};
/** @private @const */ goog.loadModuleFromSource_ = /** @type {function(string):?} */ (function() {
  var exports = {};
  eval(arguments[0]);
  return exports;
});
/**
 @private
 @param {string} path
 @return {string}
 */
goog.normalizePath_ = function(path) {
  var components = path.split("/");
  var i = 0;
  while (i < components.length) {
    if (components[i] == ".") {
      components.splice(i, 1);
    } else {
      if (i && components[i] == ".." && components[i - 1] && components[i - 1] != "..") {
        components.splice(--i, 2);
      } else {
        i++;
      }
    }
  }
  return components.join("/");
};
/** @type {(function(string):string|undefined)} */ goog.global.CLOSURE_LOAD_FILE_SYNC;
/**
 @private
 @param {string} src
 @return {?string}
 */
goog.loadFileSync_ = function(src) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(src);
  } else {
    try {
      /** @type {XMLHttpRequest} */ var xhr = new goog.global["XMLHttpRequest"];
      xhr.open("get", src, false);
      xhr.send();
      return xhr.status == 0 || xhr.status == 200 ? xhr.responseText : null;
    } catch (err) {
      return null;
    }
  }
};
/**
 @private
 @param {string} code
 @param {string} path
 @param {string} target
 @return {string}
 */
goog.transpile_ = function(code, path, target) {
  var jscomp = goog.global["$jscomp"];
  if (!jscomp) {
    goog.global["$jscomp"] = jscomp = {};
  }
  var transpile = jscomp.transpile;
  if (!transpile) {
    var transpilerPath = goog.basePath + goog.TRANSPILER;
    var transpilerCode = goog.loadFileSync_(transpilerPath);
    if (transpilerCode) {
      (function() {
        eval(transpilerCode + "\n//# sourceURL\x3d" + transpilerPath);
      }).call(goog.global);
      if (goog.global["$gwtExport"] && goog.global["$gwtExport"]["$jscomp"] && !goog.global["$gwtExport"]["$jscomp"]["transpile"]) {
        throw new Error('The transpiler did not properly export the "transpile" ' + "method. $gwtExport: " + JSON.stringify(goog.global["$gwtExport"]));
      }
      goog.global["$jscomp"].transpile = goog.global["$gwtExport"]["$jscomp"]["transpile"];
      jscomp = goog.global["$jscomp"];
      transpile = jscomp.transpile;
    }
  }
  if (!transpile) {
    var suffix = " requires transpilation but no transpiler was found.";
    transpile = jscomp.transpile = function(code, path) {
      goog.logToConsole_(path + suffix);
      return code;
    };
  }
  return transpile(code, path, target);
};
/**
 @param {?} value
 @return {string}
 */
goog.typeOf = function(value) {
  var s = typeof value;
  if (s == "object") {
    if (value) {
      if (value instanceof Array) {
        return "array";
      } else {
        if (value instanceof Object) {
          return s;
        }
      }
      var className = Object.prototype.toString.call(/** @type {!Object} */ (value));
      if (className == "[object Window]") {
        return "object";
      }
      if (className == "[object Array]" || typeof value.length == "number" && typeof value.splice != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("splice")) {
        return "array";
      }
      if (className == "[object Function]" || typeof value.call != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if (s == "function" && typeof value.call == "undefined") {
      return "object";
    }
  }
  return s;
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isNull = function(val) {
  return val === null;
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isDefAndNotNull = function(val) {
  return val != null;
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isArray = function(val) {
  return goog.typeOf(val) == "array";
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number";
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function";
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isFunction = function(val) {
  return goog.typeOf(val) == "function";
};
/**
 @param {?} val
 @return {boolean}
 */
goog.isObject = function(val) {
  var type = typeof val;
  return type == "object" && val != null || type == "function";
};
/**
 @param {Object} obj
 @return {number}
 */
goog.getUid = function(obj) {
  return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
/**
 @param {!Object} obj
 @return {boolean}
 */
goog.hasUid = function(obj) {
  return !!obj[goog.UID_PROPERTY_];
};
/**
 @param {Object} obj
 */
goog.removeUid = function(obj) {
  if (obj !== null && "removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_);
  }
  try {
    delete obj[goog.UID_PROPERTY_];
  } catch (ex) {
  }
};
/** @private @type {string} */ goog.UID_PROPERTY_ = "closure_uid_" + (Math.random() * 1e9 >>> 0);
/** @private @type {number} */ goog.uidCounter_ = 0;
/**
 @param {Object} obj
 @return {number}
 @deprecated Use goog.getUid instead.
 */
goog.getHashCode = goog.getUid;
/**
 @param {Object} obj
 @deprecated Use goog.removeUid instead.
 */
goog.removeHashCode = goog.removeUid;
/**
 @param {*} obj
 @return {*}
 @deprecated goog.cloneObject is unsafe. Prefer the goog.object methods.
 */
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if (type == "object" || type == "array") {
    if (typeof obj.clone === "function") {
      return obj.clone();
    }
    var clone = type == "array" ? [] : {};
    for (var key in obj) {
      clone[key] = goog.cloneObject(obj[key]);
    }
    return clone;
  }
  return obj;
};
/**
 @private
 @param {?function(this:T,...)} fn
 @param {T} selfObj
 @param {...*} var_args
 @return {!Function}
 @template T
 */
goog.bindNative_ = function(fn, selfObj, var_args) {
  return (/** @type {!Function} */ (fn.call.apply(fn.bind, arguments)));
};
/**
 @private
 @param {?function(this:T,...)} fn
 @param {T} selfObj
 @param {...*} var_args
 @return {!Function}
 @template T
 */
goog.bindJs_ = function(fn, selfObj, var_args) {
  if (!fn) {
    throw new Error;
  }
  if (arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(selfObj, newArgs);
    };
  } else {
    return function() {
      return fn.apply(selfObj, arguments);
    };
  }
};
/**
 @param {?function(this:T,...)} fn
 @param {T} selfObj
 @param {...*} var_args
 @return {!Function}
 @template T
 @suppress {deprecated}
 */
goog.bind = function(fn, selfObj, var_args) {
  if (Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_;
  } else {
    goog.bind = goog.bindJs_;
  }
  return goog.bind.apply(null, arguments);
};
/**
 @param {Function} fn
 @param {...*} var_args
 @return {!Function}
 */
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = args.slice();
    newArgs.push.apply(newArgs, arguments);
    return fn.apply(/** @type {?} */ (this), newArgs);
  };
};
/**
 @param {Object} target
 @param {Object} source
 */
goog.mixin = function(target, source) {
  for (var x in source) {
    target[x] = source[x];
  }
};
/**
 @return {number}
 */
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
/**
 @param {string} script
 */
goog.globalEval = function(script) {
  if (goog.global.execScript) {
    goog.global.execScript(script, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (goog.evalWorksForGlobals_ == null) {
        try {
          goog.global.eval("var _evalTest_ \x3d 1;");
        } catch (ignore) {
        }
        if (typeof goog.global["_evalTest_"] != "undefined") {
          try {
            delete goog.global["_evalTest_"];
          } catch (ignore$0) {
          }
          goog.evalWorksForGlobals_ = true;
        } else {
          goog.evalWorksForGlobals_ = false;
        }
      }
      if (goog.evalWorksForGlobals_) {
        goog.global.eval(script);
      } else {
        /** @type {!Document} */ var doc = goog.global.document;
        var scriptElt = /** @type {!HTMLScriptElement} */ (doc.createElement("SCRIPT"));
        scriptElt.type = "text/javascript";
        scriptElt.defer = false;
        scriptElt.appendChild(doc.createTextNode(script));
        doc.head.appendChild(scriptElt);
        doc.head.removeChild(scriptElt);
      }
    } else {
      throw new Error("goog.globalEval not available");
    }
  }
};
/** @private @type {?boolean} */ goog.evalWorksForGlobals_ = null;
/** @private @type {(!Object<string,string>|undefined)} */ goog.cssNameMapping_;
/** @private @type {(string|undefined)} */ goog.cssNameMappingStyle_;
/** @type {(function(string):string|undefined)} */ goog.global.CLOSURE_CSS_NAME_MAP_FN;
/**
 @param {string} className
 @param {string=} opt_modifier
 @return {string}
 */
goog.getCssName = function(className, opt_modifier) {
  if (String(className).charAt(0) == ".") {
    throw new Error('className passed in goog.getCssName must not start with ".".' + " You passed: " + className);
  }
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName;
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for (var i = 0; i < parts.length; i++) {
      mapped.push(getMapping(parts[i]));
    }
    return mapped.join("-");
  };
  var rename;
  if (goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts;
  } else {
    rename = function(a) {
      return a;
    };
  }
  var result = opt_modifier ? className + "-" + rename(opt_modifier) : rename(className);
  if (goog.global.CLOSURE_CSS_NAME_MAP_FN) {
    return goog.global.CLOSURE_CSS_NAME_MAP_FN(result);
  }
  return result;
};
/**
 @param {!Object} mapping
 @param {string=} opt_style
 */
goog.setCssNameMapping = function(mapping, opt_style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = opt_style;
};
/** @type {(!Object<string,string>|undefined)} */ goog.global.CLOSURE_CSS_NAME_MAPPING;
if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
  goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
}
/**
 @param {string} str
 @param {Object<string,string>=} opt_values
 @return {string}
 */
goog.getMsg = function(str, opt_values) {
  if (opt_values) {
    str = str.replace(/\{\$([^}]+)}/g, function(match, key) {
      return opt_values != null && key in opt_values ? opt_values[key] : match;
    });
  }
  return str;
};
/**
 @param {string} a
 @param {string} b
 @return {string}
 */
goog.getMsgWithFallback = function(a, b) {
  return a;
};
/**
 @param {string} publicPath
 @param {*} object
 @param {Object=} opt_objectToExportTo
 */
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo);
};
/**
 @param {Object} object
 @param {string} publicName
 @param {*} symbol
 */
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol;
};
/**
 @param {!Function} childCtor
 @param {!Function} parentCtor
 @suppress {strictMissingProperties}
 */
goog.inherits = function(childCtor, parentCtor) {
  /** @constructor */ function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor;
  /** @override */ childCtor.prototype.constructor = childCtor;
  /**
   @param {!Object} me
   @param {string} methodName
   @param {...*} var_args
   @return {*}
   */
  childCtor.base = function(me, methodName, var_args) {
    var args = new Array(arguments.length - 2);
    for (var i = 2; i < arguments.length; i++) {
      args[i - 2] = arguments[i];
    }
    return parentCtor.prototype[methodName].apply(me, args);
  };
};
/**
 @param {!Object} me
 @param {*=} opt_methodName
 @param {...*} var_args
 @return {*}
 @suppress {es5Strict}
 @deprecated goog.base is not strict mode compatible.  Prefer the static "base" method added to the constructor by goog.inherits or ES6 classes and the "super" keyword.
 */
goog.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !caller) {
    throw new Error("arguments.caller not defined.  goog.base() cannot be used " + "with strict mode code. See " + "http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (typeof caller.superClass_ !== "undefined") {
    var ctorArgs = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
      ctorArgs[i - 1] = arguments[i];
    }
    return /** @type {!Function} */ (caller.superClass_).constructor.apply(me, ctorArgs);
  }
  if (typeof opt_methodName != "string" && typeof opt_methodName != "symbol") {
    throw new Error("method names provided to goog.base must be a string or a symbol");
  }
  var args = new Array(arguments.length - 2);
  for (var i = 2; i < arguments.length; i++) {
    args[i - 2] = arguments[i];
  }
  var foundCaller = false;
  for (var ctor = me.constructor; ctor; ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if (ctor.prototype[opt_methodName] === caller) {
      foundCaller = true;
    } else {
      if (foundCaller) {
        return ctor.prototype[opt_methodName].apply(me, args);
      }
    }
  }
  if (me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args);
  } else {
    throw new Error("goog.base called from a method of one name " + "to a method of a different name");
  }
};
/**
 @param {function()} fn
 */
goog.scope = function(fn) {
  if (goog.isInModuleLoader_()) {
    throw new Error("goog.scope is not supported within a module.");
  }
  fn.call(goog.global);
};
if (!COMPILED) {
  goog.global["COMPILED"] = COMPILED;
}
/**
 @param {Function} superClass
 @param {goog.defineClass.ClassDescriptor} def
 @return {!Function}
 */
goog.defineClass = function(superClass, def) {
  var constructor = def.constructor;
  var statics = def.statics;
  if (!constructor || constructor == Object.prototype.constructor) {
    constructor = function() {
      throw new Error("cannot instantiate an interface (no constructor defined).");
    };
  }
  var cls = goog.defineClass.createSealingConstructor_(constructor, superClass);
  if (superClass) {
    goog.inherits(cls, superClass);
  }
  delete def.constructor;
  delete def.statics;
  goog.defineClass.applyProperties_(cls.prototype, def);
  if (statics != null) {
    if (statics instanceof Function) {
      statics(cls);
    } else {
      goog.defineClass.applyProperties_(cls, statics);
    }
  }
  return cls;
};
/** @typedef {{constructor:(!Function|undefined),statics:(Object|undefined|function(Function):void)}} */ goog.defineClass.ClassDescriptor;
/** @define {boolean} */ goog.define("goog.defineClass.SEAL_CLASS_INSTANCES", goog.DEBUG);
/**
 @private
 @param {!Function} ctr
 @param {Function} superClass
 @return {!Function}
 */
goog.defineClass.createSealingConstructor_ = function(ctr, superClass) {
  if (!goog.defineClass.SEAL_CLASS_INSTANCES) {
    return ctr;
  }
  var superclassSealable = !goog.defineClass.isUnsealable_(superClass);
  /**
   @this {Object}
   @return {?}
   */
  var wrappedCtr = function() {
    var instance = ctr.apply(this, arguments) || this;
    instance[goog.UID_PROPERTY_] = instance[goog.UID_PROPERTY_];
    if (this.constructor === wrappedCtr && superclassSealable && Object.seal instanceof Function) {
      Object.seal(instance);
    }
    return instance;
  };
  return wrappedCtr;
};
/**
 @private
 @param {Function} ctr
 @return {boolean}
 */
goog.defineClass.isUnsealable_ = function(ctr) {
  return ctr && ctr.prototype && ctr.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
};
/** @private @const @type {!Array<string>} */ goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
/**
 @private
 @param {!Object} target
 @param {!Object} source
 */
goog.defineClass.applyProperties_ = function(target, source) {
  var key;
  for (key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  for (var i = 0; i < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; i++) {
    key = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i];
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
};
/**
 @param {!Function} ctr
 */
goog.tagUnsealableClass = function(ctr) {
  if (!COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES) {
    ctr.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true;
  }
};
/** @private @const @type {string} */ goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
if (!COMPILED && goog.DEPENDENCIES_ENABLED) {
  /**
   @private
   @return {boolean}
   */
  goog.inHtmlDocument_ = function() {
    /** @type {!Document} */ var doc = goog.global.document;
    return doc != null && "write" in doc;
  };
  /**
   @private
   @return {boolean}
   */
  goog.isDocumentLoading_ = function() {
    /** @type {!HTMLDocument} */ var doc = goog.global.document;
    return doc.attachEvent ? doc.readyState != "complete" : doc.readyState == "loading";
  };
  /** @private */ goog.findBasePath_ = function() {
    if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH)) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return;
    } else {
      if (!goog.inHtmlDocument_()) {
        return;
      }
    }
    /** @type {!Document} */ var doc = goog.global.document;
    var currentScript = doc.currentScript;
    if (currentScript) {
      var scripts = [currentScript];
    } else {
      var scripts = doc.getElementsByTagName("SCRIPT");
    }
    for (var i = scripts.length - 1; i >= 0; --i) {
      var script = /** @type {!HTMLScriptElement} */ (scripts[i]);
      var src = script.src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if (src.substr(l - 7, 7) == "base.js") {
        goog.basePath = src.substr(0, l - 7);
        return;
      }
    }
  };
  goog.findBasePath_();
  /** @final @struct @constructor */ goog.Transpiler = function() {
    /** @private @type {?Object<string,boolean>} */ this.requiresTranspilation_ = null;
    /** @private @type {string} */ this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
  };
  /**
   @private
   @return {{target:string,map:!Object<string,boolean>}}
   */
  goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
    var transpilationTarget = "es3";
    var /** !Object<string,boolean> */ requiresTranspilation = {"es3":false};
    var transpilationRequiredForAllLaterModes = false;
    /**
     @param {string} modeName
     @param {function():boolean} isSupported
     */
    function addNewerLanguageTranspilationCheck(modeName, isSupported) {
      if (transpilationRequiredForAllLaterModes) {
        requiresTranspilation[modeName] = true;
      } else {
        if (isSupported()) {
          transpilationTarget = modeName;
          requiresTranspilation[modeName] = false;
        } else {
          requiresTranspilation[modeName] = true;
          transpilationRequiredForAllLaterModes = true;
        }
      }
    }
    function/** boolean */ evalCheck(/** string */ code) {
      try {
        return !!eval(code);
      } catch (ignored) {
        return false;
      }
    }
    var userAgent = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
    addNewerLanguageTranspilationCheck("es5", function() {
      return evalCheck("[1,].length\x3d\x3d1");
    });
    addNewerLanguageTranspilationCheck("es6", function() {
      var re = /Edge\/(\d+)(\.\d)*/i;
      var edgeUserAgent = userAgent.match(re);
      if (edgeUserAgent) {
        return false;
      }
      var es6fullTest = "class X{constructor(){if(new.target!\x3dString)throw 1;this.x\x3d42}}" + "let q\x3dReflect.construct(X,[],String);if(q.x!\x3d42||!(q instanceof " + "String))throw 1;for(const a of[2,3]){if(a\x3d\x3d2)continue;function " + "f(z\x3d{a}){let a\x3d0;return z.a}{function f(){return 0;}}return f()" + "\x3d\x3d3}";
      return evalCheck('(()\x3d\x3e{"use strict";' + es6fullTest + "})()");
    });
    addNewerLanguageTranspilationCheck("es6-impl", function() {
      return true;
    });
    addNewerLanguageTranspilationCheck("es7", function() {
      return evalCheck("2 ** 2 \x3d\x3d 4");
    });
    addNewerLanguageTranspilationCheck("es8", function() {
      return evalCheck("async () \x3d\x3e 1, true");
    });
    addNewerLanguageTranspilationCheck("es9", function() {
      return evalCheck("({...rest} \x3d {}), true");
    });
    addNewerLanguageTranspilationCheck("es_next", function() {
      return false;
    });
    return {target:transpilationTarget, map:requiresTranspilation};
  };
  /**
   @param {string} lang
   @param {(string|undefined)} module
   @return {boolean}
   */
  goog.Transpiler.prototype.needsTranspile = function(lang, module) {
    if (goog.TRANSPILE == "always") {
      return true;
    } else {
      if (goog.TRANSPILE == "never") {
        return false;
      } else {
        if (!this.requiresTranspilation_) {
          var obj = this.createRequiresTranspilation_();
          this.requiresTranspilation_ = obj.map;
          this.transpilationTarget_ = this.transpilationTarget_ || obj.target;
        }
      }
    }
    if (lang in this.requiresTranspilation_) {
      if (this.requiresTranspilation_[lang]) {
        return true;
      } else {
        if (goog.inHtmlDocument_() && module == "es6" && !("noModule" in goog.global.document.createElement("script"))) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      throw new Error("Unknown language mode: " + lang);
    }
  };
  /**
   @param {string} code
   @param {string} path
   @return {string}
   */
  goog.Transpiler.prototype.transpile = function(code, path) {
    return goog.transpile_(code, path, this.transpilationTarget_);
  };
  /** @private @final @type {!goog.Transpiler} */ goog.transpiler_ = new goog.Transpiler;
  /**
   @private
   @param {string} str
   @return {string}
   */
  goog.protectScriptTag_ = function(str) {
    return str.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
  };
  /** @private @final @struct @constructor */ goog.DebugLoader_ = function() {
    /** @private @const @type {!Object<string,!goog.Dependency>} */ this.dependencies_ = {};
    /** @private @const @type {!Object<string,string>} */ this.idToPath_ = {};
    /** @private @const @type {!Object<string,boolean>} */ this.written_ = {};
    /** @private @const @type {!Array<!goog.Dependency>} */ this.loadingDeps_ = [];
    /** @private @type {!Array<!goog.Dependency>} */ this.depsToLoad_ = [];
    /** @private @type {boolean} */ this.paused_ = false;
    /** @private @type {!goog.DependencyFactory} */ this.factory_ = new goog.DependencyFactory(goog.transpiler_);
    /** @private @const @type {!Object<string,!Function>} */ this.deferredCallbacks_ = {};
    /** @private @const @type {!Array<string>} */ this.deferredQueue_ = [];
  };
  /**
   @param {!Array<string>} namespaces
   @param {function():undefined} callback
   */
  goog.DebugLoader_.prototype.bootstrap = function(namespaces, callback) {
    var cb = callback;
    function resolve() {
      if (cb) {
        goog.global.setTimeout(cb, 0);
        cb = null;
      }
    }
    if (!namespaces.length) {
      resolve();
      return;
    }
    var deps = [];
    for (var i = 0; i < namespaces.length; i++) {
      var path = this.getPathFromDeps_(namespaces[i]);
      if (!path) {
        throw new Error("Unregonized namespace: " + namespaces[i]);
      }
      deps.push(this.dependencies_[path]);
    }
    var require = goog.require;
    var loaded = 0;
    for (var i = 0; i < namespaces.length; i++) {
      require(namespaces[i]);
      deps[i].onLoad(function() {
        if (++loaded == namespaces.length) {
          resolve();
        }
      });
    }
  };
  goog.DebugLoader_.prototype.loadClosureDeps = function() {
    var relPath = "deps.js";
    this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + relPath), relPath, [], [], {}, false));
    this.loadDeps_();
  };
  /**
   @param {string} absPathOrId
   @param {boolean=} opt_force
   */
  goog.DebugLoader_.prototype.requested = function(absPathOrId, opt_force) {
    var path = this.getPathFromDeps_(absPathOrId);
    if (path && (opt_force || this.areDepsLoaded_(this.dependencies_[path].requires))) {
      var callback = this.deferredCallbacks_[path];
      if (callback) {
        delete this.deferredCallbacks_[path];
        callback();
      }
    }
  };
  /**
   @param {!goog.DependencyFactory} factory
   */
  goog.DebugLoader_.prototype.setDependencyFactory = function(factory) {
    this.factory_ = factory;
  };
  /**
   @private
   @param {string} namespace
   */
  goog.DebugLoader_.prototype.load_ = function(namespace) {
    if (!this.getPathFromDeps_(namespace)) {
      var errorMessage = "goog.require could not find: " + namespace;
      goog.logToConsole_(errorMessage);
      throw Error(errorMessage);
    } else {
      var loader = this;
      var deps = [];
      /**
       @param {string} namespace
       */
      var visit = function(namespace) {
        var path = loader.getPathFromDeps_(namespace);
        if (!path) {
          throw new Error("Bad dependency path or symbol: " + namespace);
        }
        if (loader.written_[path]) {
          return;
        }
        loader.written_[path] = true;
        var dep = loader.dependencies_[path];
        for (var i = 0; i < dep.requires.length; i++) {
          if (!goog.isProvided_(dep.requires[i])) {
            visit(dep.requires[i]);
          }
        }
        deps.push(dep);
      };
      visit(namespace);
      var wasLoading = !!this.depsToLoad_.length;
      this.depsToLoad_ = this.depsToLoad_.concat(deps);
      if (!this.paused_ && !wasLoading) {
        this.loadDeps_();
      }
    }
  };
  /** @private */ goog.DebugLoader_.prototype.loadDeps_ = function() {
    var loader = this;
    var paused = this.paused_;
    while (this.depsToLoad_.length && !paused) {
      (function() {
        var loadCallDone = false;
        var dep = loader.depsToLoad_.shift();
        var loaded = false;
        loader.loading_(dep);
        var controller = {pause:function() {
          if (loadCallDone) {
            throw new Error("Cannot call pause after the call to load.");
          } else {
            paused = true;
          }
        }, resume:function() {
          if (loadCallDone) {
            loader.resume_();
          } else {
            paused = false;
          }
        }, loaded:function() {
          if (loaded) {
            throw new Error("Double call to loaded.");
          }
          loaded = true;
          loader.loaded_(dep);
        }, pending:function() {
          var pending = [];
          for (var i = 0; i < loader.loadingDeps_.length; i++) {
            pending.push(loader.loadingDeps_[i]);
          }
          return pending;
        }, /**
         @param {goog.ModuleType} type
         */
        setModuleState:function(type) {
          goog.moduleLoaderState_ = {type:type, moduleName:"", declareLegacyNamespace:false};
        }, /** @type {function(string,string,string=)} */ registerEs6ModuleExports:function(path, exports, opt_closureNamespace) {
          if (opt_closureNamespace) {
            goog.loadedModules_[opt_closureNamespace] = {exports:exports, type:goog.ModuleType.ES6, moduleId:opt_closureNamespace || ""};
          }
        }, /** @type {function(string,?)} */ registerGoogModuleExports:function(moduleId, exports) {
          goog.loadedModules_[moduleId] = {exports:exports, type:goog.ModuleType.GOOG, moduleId:moduleId};
        }, clearModuleState:function() {
          goog.moduleLoaderState_ = null;
        }, defer:function(callback) {
          if (loadCallDone) {
            throw new Error("Cannot register with defer after the call to load.");
          }
          loader.defer_(dep, callback);
        }, areDepsLoaded:function() {
          return loader.areDepsLoaded_(dep.requires);
        }};
        try {
          dep.load(controller);
        } finally {
          loadCallDone = true;
        }
      })();
    }
    if (paused) {
      this.pause_();
    }
  };
  /** @private */ goog.DebugLoader_.prototype.pause_ = function() {
    this.paused_ = true;
  };
  /** @private */ goog.DebugLoader_.prototype.resume_ = function() {
    if (this.paused_) {
      this.paused_ = false;
      this.loadDeps_();
    }
  };
  /**
   @private
   @param {!goog.Dependency} dep
   */
  goog.DebugLoader_.prototype.loading_ = function(dep) {
    this.loadingDeps_.push(dep);
  };
  /**
   @private
   @param {!goog.Dependency} dep
   */
  goog.DebugLoader_.prototype.loaded_ = function(dep) {
    for (var i = 0; i < this.loadingDeps_.length; i++) {
      if (this.loadingDeps_[i] == dep) {
        this.loadingDeps_.splice(i, 1);
        break;
      }
    }
    for (var i = 0; i < this.deferredQueue_.length; i++) {
      if (this.deferredQueue_[i] == dep.path) {
        this.deferredQueue_.splice(i, 1);
        break;
      }
    }
    if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) {
      while (this.deferredQueue_.length) {
        this.requested(this.deferredQueue_.shift(), true);
      }
    }
    dep.loaded();
  };
  /**
   @private
   @param {!Array<string>} pathsOrIds
   @return {boolean}
   */
  goog.DebugLoader_.prototype.areDepsLoaded_ = function(pathsOrIds) {
    for (var i = 0; i < pathsOrIds.length; i++) {
      var path = this.getPathFromDeps_(pathsOrIds[i]);
      if (!path || !(path in this.deferredCallbacks_) && !goog.isProvided_(pathsOrIds[i])) {
        return false;
      }
    }
    return true;
  };
  /**
   @private
   @param {string} absPathOrId
   @return {?string}
   */
  goog.DebugLoader_.prototype.getPathFromDeps_ = function(absPathOrId) {
    if (absPathOrId in this.idToPath_) {
      return this.idToPath_[absPathOrId];
    } else {
      if (absPathOrId in this.dependencies_) {
        return absPathOrId;
      } else {
        return null;
      }
    }
  };
  /**
   @private
   @param {!goog.Dependency} dependency
   @param {!Function} callback
   */
  goog.DebugLoader_.prototype.defer_ = function(dependency, callback) {
    this.deferredCallbacks_[dependency.path] = callback;
    this.deferredQueue_.push(dependency.path);
  };
  /** @record */ goog.LoadController = function() {
  };
  goog.LoadController.prototype.pause = function() {
  };
  goog.LoadController.prototype.resume = function() {
  };
  goog.LoadController.prototype.loaded = function() {
  };
  /**
   @return {!Array<!goog.Dependency>}
   */
  goog.LoadController.prototype.pending = function() {
  };
  /**
   @param {string} path
   @param {?} exports
   @param {string=} opt_closureNamespace
   */
  goog.LoadController.prototype.registerEs6ModuleExports = function(path, exports, opt_closureNamespace) {
  };
  /**
   @param {goog.ModuleType} type
   */
  goog.LoadController.prototype.setModuleState = function(type) {
  };
  goog.LoadController.prototype.clearModuleState = function() {
  };
  /**
   @param {!Function} callback
   */
  goog.LoadController.prototype.defer = function(callback) {
  };
  /**
   @return {boolean}
   */
  goog.LoadController.prototype.areDepsLoaded = function() {
  };
  /**
   @struct
   @constructor
   @param {string} path
   @param {string} relativePath
   @param {!Array<string>} provides
   @param {!Array<string>} requires
   @param {!Object<string,string>} loadFlags
   */
  goog.Dependency = function(path, relativePath, provides, requires, loadFlags) {
    /** @const */ this.path = path;
    /** @const */ this.relativePath = relativePath;
    /** @const */ this.provides = provides;
    /** @const */ this.requires = requires;
    /** @const */ this.loadFlags = loadFlags;
    /** @private @type {boolean} */ this.loaded_ = false;
    /** @private @type {!Array<function()>} */ this.loadCallbacks_ = [];
  };
  /**
   @return {string}
   */
  goog.Dependency.prototype.getPathName = function() {
    var pathName = this.path;
    var protocolIndex = pathName.indexOf("://");
    if (protocolIndex >= 0) {
      pathName = pathName.substring(protocolIndex + 3);
      var slashIndex = pathName.indexOf("/");
      if (slashIndex >= 0) {
        pathName = pathName.substring(slashIndex + 1);
      }
    }
    return pathName;
  };
  /**
   @final
   @param {function()} callback
   */
  goog.Dependency.prototype.onLoad = function(callback) {
    if (this.loaded_) {
      callback();
    } else {
      this.loadCallbacks_.push(callback);
    }
  };
  /** @final */ goog.Dependency.prototype.loaded = function() {
    this.loaded_ = true;
    var callbacks = this.loadCallbacks_;
    this.loadCallbacks_ = [];
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i]();
    }
  };
  /** @private @type {boolean} */ goog.Dependency.defer_ = false;
  /** @private @const @type {!Object<string,function(?):undefined>} */ goog.Dependency.callbackMap_ = {};
  /**
   @private
   @param {function(...?):?} callback
   @return {string}
   */
  goog.Dependency.registerCallback_ = function(callback) {
    var key = Math.random().toString(32);
    goog.Dependency.callbackMap_[key] = callback;
    return key;
  };
  /**
   @private
   @param {string} key
   */
  goog.Dependency.unregisterCallback_ = function(key) {
    delete goog.Dependency.callbackMap_[key];
  };
  /**
   @private
   @param {string} key
   @param {...?} var_args
   @suppress {unusedPrivateMembers}
   */
  goog.Dependency.callback_ = function(key, var_args) {
    if (key in goog.Dependency.callbackMap_) {
      var callback = goog.Dependency.callbackMap_[key];
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      callback.apply(undefined, args);
    } else {
      var errorMessage = "Callback key " + key + " does not exist (was base.js loaded more than once?).";
      throw Error(errorMessage);
    }
  };
  /**
   @param {!goog.LoadController} controller
   */
  goog.Dependency.prototype.load = function(controller) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT(this.path)) {
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    if (!goog.inHtmlDocument_()) {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents.");
      if (this.relativePath == "deps.js") {
        goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, " + "or setting CLOSURE_NO_DEPS to true.");
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    /** @type {!HTMLDocument} */ var doc = goog.global.document;
    if (doc.readyState == "complete" && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
      var isDeps = /\bdeps.js$/.test(this.path);
      if (isDeps) {
        controller.loaded();
        return;
      } else {
        throw Error('Cannot write "' + this.path + '" after document load');
      }
    }
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
      var key = goog.Dependency.registerCallback_(function(script) {
        if (!goog.DebugLoader_.IS_OLD_IE_ || script.readyState == "complete") {
          goog.Dependency.unregisterCallback_(key);
          controller.loaded();
        }
      });
      var nonceAttr = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce\x3d"' + goog.getScriptNonce() + '"' : "";
      var event = goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload";
      var defer = goog.Dependency.defer_ ? "defer" : "";
      doc.write('\x3cscript src\x3d"' + this.path + '" ' + event + "\x3d\"goog.Dependency.callback_('" + key + '\', this)" type\x3d"text/javascript" ' + defer + nonceAttr + "\x3e\x3c" + "/script\x3e");
    } else {
      var scriptEl = /** @type {!HTMLScriptElement} */ (doc.createElement("script"));
      scriptEl.defer = goog.Dependency.defer_;
      scriptEl.async = false;
      scriptEl.type = "text/javascript";
      var nonce = goog.getScriptNonce();
      if (nonce) {
        scriptEl.setAttribute("nonce", nonce);
      }
      if (goog.DebugLoader_.IS_OLD_IE_) {
        controller.pause();
        scriptEl.onreadystatechange = function() {
          if (scriptEl.readyState == "loaded" || scriptEl.readyState == "complete") {
            controller.loaded();
            controller.resume();
          }
        };
      } else {
        scriptEl.onload = function() {
          scriptEl.onload = null;
          controller.loaded();
        };
      }
      scriptEl.src = this.path;
      doc.head.appendChild(scriptEl);
    }
  };
  /**
   @struct
   @constructor
   @extends {goog.Dependency}
   @param {string} path
   @param {string} relativePath
   @param {!Array<string>} provides
   @param {!Array<string>} requires
   @param {!Object<string,string>} loadFlags
   */
  goog.Es6ModuleDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.Es6ModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
  };
  goog.inherits(goog.Es6ModuleDependency, goog.Dependency);
  /** @override */ goog.Es6ModuleDependency.prototype.load = function(controller) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT(this.path)) {
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    if (!goog.inHtmlDocument_()) {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents.");
      controller.pause();
      return;
    }
    /** @type {!HTMLDocument} */ var doc = goog.global.document;
    var dep = this;
    function write(src, contents) {
      if (contents) {
        doc.write('\x3cscript type\x3d"module" crossorigin\x3e' + contents + "\x3c/" + "script\x3e");
      } else {
        doc.write('\x3cscript type\x3d"module" crossorigin src\x3d"' + src + '"\x3e\x3c/' + "script\x3e");
      }
    }
    function append(src, contents) {
      var scriptEl = /** @type {!HTMLScriptElement} */ (doc.createElement("script"));
      scriptEl.defer = true;
      scriptEl.async = false;
      scriptEl.type = "module";
      scriptEl.setAttribute("crossorigin", true);
      var nonce = goog.getScriptNonce();
      if (nonce) {
        scriptEl.setAttribute("nonce", nonce);
      }
      if (contents) {
        scriptEl.textContent = contents;
      } else {
        scriptEl.src = src;
      }
      doc.head.appendChild(scriptEl);
    }
    var create;
    if (goog.isDocumentLoading_()) {
      create = write;
      goog.Dependency.defer_ = true;
    } else {
      create = append;
    }
    var beforeKey = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(beforeKey);
      controller.setModuleState(goog.ModuleType.ES6);
    });
    create(undefined, 'goog.Dependency.callback_("' + beforeKey + '")');
    create(this.path, undefined);
    var registerKey = goog.Dependency.registerCallback_(function(exports) {
      goog.Dependency.unregisterCallback_(registerKey);
      controller.registerEs6ModuleExports(dep.path, exports, goog.moduleLoaderState_.moduleName);
    });
    create(undefined, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + registerKey + '", m)');
    var afterKey = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(afterKey);
      controller.clearModuleState();
      controller.loaded();
    });
    create(undefined, 'goog.Dependency.callback_("' + afterKey + '")');
  };
  /**
   @abstract
   @struct
   @constructor
   @extends {goog.Dependency}
   @param {string} path
   @param {string} relativePath
   @param {!Array<string>} provides
   @param {!Array<string>} requires
   @param {!Object<string,string>} loadFlags
   */
  goog.TransformedDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.TransformedDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
    /** @private @type {?string} */ this.contents_ = null;
    /** @private @const @type {boolean} */ this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
  };
  goog.inherits(goog.TransformedDependency, goog.Dependency);
  /** @override */ goog.TransformedDependency.prototype.load = function(controller) {
    var dep = this;
    function fetch() {
      dep.contents_ = goog.loadFileSync_(dep.path);
      if (dep.contents_) {
        dep.contents_ = dep.transform(dep.contents_);
        if (dep.contents_) {
          dep.contents_ += "\n//# sourceURL\x3d" + dep.path;
        }
      }
    }
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      fetch();
      if (this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_)) {
        this.contents_ = null;
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    var isEs6 = this.loadFlags["module"] == goog.ModuleType.ES6;
    if (!this.lazyFetch_) {
      fetch();
    }
    function load() {
      if (dep.lazyFetch_) {
        fetch();
      }
      if (!dep.contents_) {
        return;
      }
      if (isEs6) {
        controller.setModuleState(goog.ModuleType.ES6);
      }
      var namespace;
      try {
        var contents = dep.contents_;
        dep.contents_ = null;
        goog.globalEval(contents);
        if (isEs6) {
          namespace = goog.moduleLoaderState_.moduleName;
        }
      } finally {
        if (isEs6) {
          controller.clearModuleState();
        }
      }
      if (isEs6) {
        goog.global["$jscomp"]["require"]["ensure"]([dep.getPathName()], function() {
          controller.registerEs6ModuleExports(dep.path, goog.global["$jscomp"]["require"](dep.getPathName()), namespace);
        });
      }
      controller.loaded();
    }
    function fetchInOwnScriptThenLoad() {
      /** @type {!HTMLDocument} */ var doc = goog.global.document;
      var key = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(key);
        load();
      });
      doc.write('\x3cscript type\x3d"text/javascript"\x3e' + goog.protectScriptTag_('goog.Dependency.callback_("' + key + '");') + "\x3c/" + "script\x3e");
    }
    var anythingElsePending = controller.pending().length > 1;
    var useOldIeWorkAround = anythingElsePending && goog.DebugLoader_.IS_OLD_IE_;
    var needsAsyncLoading = goog.Dependency.defer_ && (anythingElsePending || goog.isDocumentLoading_());
    if (useOldIeWorkAround || needsAsyncLoading) {
      controller.defer(function() {
        load();
      });
      return;
    }
    /** @type {?} */ var doc = goog.global.document;
    var isInternetExplorer = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
    if (isEs6 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !isInternetExplorer) {
      goog.Dependency.defer_ = true;
      controller.pause();
      var oldCallback = doc.onreadystatechange;
      doc.onreadystatechange = function() {
        if (doc.readyState == "interactive") {
          doc.onreadystatechange = oldCallback;
          load();
          controller.resume();
        }
        if (goog.isFunction(oldCallback)) {
          oldCallback.apply(undefined, arguments);
        }
      };
    } else {
      if (goog.DebugLoader_.IS_OLD_IE_ || !goog.inHtmlDocument_() || !goog.isDocumentLoading_()) {
        load();
      } else {
        fetchInOwnScriptThenLoad();
      }
    }
  };
  /**
   @abstract
   @param {string} contents
   @return {string}
   */
  goog.TransformedDependency.prototype.transform = function(contents) {
  };
  /**
   @struct
   @constructor
   @extends {goog.TransformedDependency}
   @param {string} path
   @param {string} relativePath
   @param {!Array<string>} provides
   @param {!Array<string>} requires
   @param {!Object<string,string>} loadFlags
   @param {!goog.Transpiler} transpiler
   */
  goog.TranspiledDependency = function(path, relativePath, provides, requires, loadFlags, transpiler) {
    goog.TranspiledDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
    /** @protected @const */ this.transpiler = transpiler;
  };
  goog.inherits(goog.TranspiledDependency, goog.TransformedDependency);
  /** @override */ goog.TranspiledDependency.prototype.transform = function(contents) {
    return this.transpiler.transpile(contents, this.getPathName());
  };
  /**
   @struct
   @constructor
   @extends {goog.TransformedDependency}
   @param {string} path
   @param {string} relativePath
   @param {!Array<string>} provides
   @param {!Array<string>} requires
   @param {!Object<string,string>} loadFlags
   */
  goog.PreTranspiledEs6ModuleDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.PreTranspiledEs6ModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
  };
  goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency);
  /** @override */ goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(contents) {
    return contents;
  };
  /**
   @struct
   @constructor
   @extends {goog.TransformedDependency}
   @param {string} path
   @param {string} relativePath
   @param {!Array<string>} provides
   @param {!Array<string>} requires
   @param {!Object<string,string>} loadFlags
   @param {boolean} needsTranspile
   @param {!goog.Transpiler} transpiler
   */
  goog.GoogModuleDependency = function(path, relativePath, provides, requires, loadFlags, needsTranspile, transpiler) {
    goog.GoogModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
    /** @private @const */ this.needsTranspile_ = needsTranspile;
    /** @private @const */ this.transpiler_ = transpiler;
  };
  goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency);
  /** @override */ goog.GoogModuleDependency.prototype.transform = function(contents) {
    if (this.needsTranspile_) {
      contents = this.transpiler_.transpile(contents, this.getPathName());
    }
    if (!goog.LOAD_MODULE_USING_EVAL || !goog.isDef(goog.global.JSON)) {
      return "" + "goog.loadModule(function(exports) {" + '"use strict";' + contents + "\n" + ";return exports" + "});" + "\n//# sourceURL\x3d" + this.path + "\n";
    } else {
      return "" + "goog.loadModule(" + goog.global.JSON.stringify(contents + "\n//# sourceURL\x3d" + this.path + "\n") + ");";
    }
  };
  /** @private @const @type {boolean} */ goog.DebugLoader_.IS_OLD_IE_ = !!(!goog.global.atob && goog.global.document && goog.global.document["all"]);
  /**
   @param {string} relPath
   @param {(!Array<string>|undefined)} provides
   @param {!Array<string>} requires
   @param {(boolean|!Object<?,string>)=} opt_loadFlags
   */
  goog.DebugLoader_.prototype.addDependency = function(relPath, provides, requires, opt_loadFlags) {
    provides = provides || [];
    relPath = relPath.replace(/\\/g, "/");
    var path = goog.normalizePath_(goog.basePath + relPath);
    if (!opt_loadFlags || typeof opt_loadFlags === "boolean") {
      opt_loadFlags = opt_loadFlags ? {"module":goog.ModuleType.GOOG} : {};
    }
    var dep = this.factory_.createDependency(path, relPath, provides, requires, opt_loadFlags, goog.transpiler_.needsTranspile(opt_loadFlags["lang"] || "es3", opt_loadFlags["module"]));
    this.dependencies_[path] = dep;
    for (var i = 0; i < provides.length; i++) {
      this.idToPath_[provides[i]] = path;
    }
    this.idToPath_[relPath] = path;
  };
  /**
   @struct
   @constructor
   @param {!goog.Transpiler} transpiler
   */
  goog.DependencyFactory = function(transpiler) {
    /** @protected @const */ this.transpiler = transpiler;
  };
  /**
   @param {string} path
   @param {string} relativePath
   @param {!Array<string>} provides
   @param {!Array<string>} requires
   @param {!Object<string,string>} loadFlags
   @param {boolean} needsTranspile
   @return {!goog.Dependency}
   */
  goog.DependencyFactory.prototype.createDependency = function(path, relativePath, provides, requires, loadFlags, needsTranspile) {
    if (loadFlags["module"] == goog.ModuleType.GOOG) {
      return new goog.GoogModuleDependency(path, relativePath, provides, requires, loadFlags, needsTranspile, this.transpiler);
    } else {
      if (needsTranspile) {
        return new goog.TranspiledDependency(path, relativePath, provides, requires, loadFlags, this.transpiler);
      } else {
        if (loadFlags["module"] == goog.ModuleType.ES6) {
          if (goog.TRANSPILE == "never" && goog.ASSUME_ES_MODULES_TRANSPILED) {
            return new goog.PreTranspiledEs6ModuleDependency(path, relativePath, provides, requires, loadFlags);
          } else {
            return new goog.Es6ModuleDependency(path, relativePath, provides, requires, loadFlags);
          }
        } else {
          return new goog.Dependency(path, relativePath, provides, requires, loadFlags);
        }
      }
    }
  };
  /** @private @const */ goog.debugLoader_ = new goog.DebugLoader_;
  goog.loadClosureDeps = function() {
    goog.debugLoader_.loadClosureDeps();
  };
  /**
   @param {!goog.DependencyFactory} factory
   */
  goog.setDependencyFactory = function(factory) {
    goog.debugLoader_.setDependencyFactory(factory);
  };
  if (!goog.global.CLOSURE_NO_DEPS) {
    goog.debugLoader_.loadClosureDeps();
  }
  /**
   @param {!Array<string>} namespaces
   @param {function():?} callback
   */
  goog.bootstrap = function(namespaces, callback) {
    goog.debugLoader_.bootstrap(namespaces, callback);
  };
}

var SHADOW_ENV = function() {
  var loadedFiles = {};

  var env = {};

  var doc = goog.global.document;

  if (!doc) {
    throw new Error("browser bootstrap used in incorrect target");
  }

  var wentAsync = false;

  var canDocumentWrite = function() {
    return !wentAsync && doc.readyState == "loading";
  };

  var asyncLoad = (function() {
    var loadOrder = [];
    var loadState = {};

    function loadPending() {
      for (var i = 0, len = loadOrder.length; i < len; i++) {
        var uri = loadOrder[i];
        var state = loadState[uri];

        if (typeof state === "string") {
          loadState[uri] = true;
          if (state != "") {
            var code = state + "\n//# sourceURL=" + uri + "\n";
            goog.globalEval(code);
          }
        } else if (state === true) {
          continue;
        } else {
          break;
        }
      }
    }

    // ie11 doesn't have fetch, use xhr instead
    // FIXME: not sure if fetch provides any benefit over xhr
    if (typeof window.fetch === "undefined") {
      return function asyncXhr(uri) {
        loadOrder.push(uri);
        loadState[uri] = false;
        var req = new XMLHttpRequest();
        req.onload = function(e) {
          loadState[uri] = req.responseText;
          loadPending();
        };
        req.open("GET", uri);
        req.send();
      }
    } else {
      function responseText(response) {
        // FIXME: check status
        return response.text();
      }

      function evalFetch(uri) {
        return function(code) {
          loadState[uri] = code;
          loadPending();
        };
      }

      return function asyncFetch(uri) {
        if (loadState[uri] == undefined) {
          loadState[uri] = false;
          loadOrder.push(uri);
          fetch(uri)
            .then(responseText)
            .then(evalFetch(uri));
        }
      };
    }
  })();

  env.load = function(opts, paths) {
    var docWrite = opts.forceAsync ? false : canDocumentWrite();

    paths.forEach(function(path) {
      if (!loadedFiles[path]) {
        loadedFiles[path] = true;

        var uri = CLOSURE_BASE_PATH + path;

        if (docWrite) {
          document.write(
            "<script src='" + uri + "' type='text/javascript'></script>"
          );
        } else {
          // once async always async
          wentAsync = true;
          asyncLoad(uri);
        }
      }
    });
  };

  env.isLoaded = function(path) {
    return loadedFiles[path] || false; // false is better than undefined
  };

  env.setLoaded = function(path) {
    loadedFiles[path] = true;
  };

  env.evalLoad = function(path, sourceMap, code) {
    loadedFiles[path] = true;
    code += ("\n//# sourceURL=" + CLOSURE_BASE_PATH + path);
    if (sourceMap) {
      code += ("\n//# sourceMappingURL=" + path + ".map");
    }
    try {
      goog.globalEval(code);
    } catch (e) {
      console.warn("failed to load", path, e);
    }
  }

  return env;
}.call(this);


goog.global["$CLJS"] = goog.global;


if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}
SHADOW_ENV.load({}, ["goog.debug.error.js","goog.dom.nodetype.js","goog.asserts.asserts.js","goog.reflect.reflect.js","goog.math.long.js","goog.math.integer.js","goog.string.internal.js","goog.string.string.js","goog.object.object.js","goog.array.array.js","goog.structs.structs.js","goog.functions.functions.js","goog.math.math.js","goog.iter.iter.js","goog.structs.map.js","goog.uri.utils.js","goog.uri.uri.js","goog.string.stringbuffer.js","cljs.core.js","devtools.defaults.js","devtools.prefs.js","devtools.context.js","clojure.string.js","cljs.stacktrace.js","devtools.hints.js","goog.labs.useragent.util.js","goog.labs.useragent.browser.js","goog.labs.useragent.engine.js","goog.labs.useragent.platform.js","goog.useragent.useragent.js","clojure.set.js","clojure.data.js","devtools.version.js","cljs.pprint.js","devtools.util.js","devtools.format.js","devtools.protocols.js","devtools.reporter.js","clojure.walk.js","devtools.munging.js","devtools.formatters.helpers.js","devtools.formatters.state.js","devtools.formatters.templating.js","devtools.formatters.printing.js","devtools.formatters.markup.js","devtools.formatters.budgeting.js","devtools.formatters.core.js","devtools.formatters.js","goog.debug.entrypointregistry.js","goog.dom.htmlelement.js","goog.dom.tagname.js","goog.async.nexttick.js","devtools.async.js","devtools.toolbox.js","devtools.core.js","devtools.preload.js","cljs.spec.gen.alpha.js","cljs.spec.alpha.js","goog.string.stringformat.js","cljs.repl.js","cljs.user.js","cljs.tools.reader.impl.utils.js","cljs.tools.reader.reader_types.js","cljs.tools.reader.impl.inspect.js","cljs.tools.reader.impl.errors.js","cljs.tools.reader.impl.commons.js","cljs.tools.reader.js","cljs.tools.reader.edn.js","cljs.reader.js","goog.dom.browserfeature.js","goog.dom.asserts.js","goog.dom.tags.js","goog.string.typedstring.js","goog.string.const.js","goog.html.safescript.js","goog.fs.url.js","goog.i18n.bidi.js","goog.html.trustedresourceurl.js","goog.html.safeurl.js","goog.html.safestyle.js","goog.html.safestylesheet.js","goog.html.safehtml.js","goog.dom.safe.js","goog.html.uncheckedconversions.js","goog.math.coordinate.js","goog.math.size.js","goog.dom.dom.js","goog.useragent.product.js","goog.promise.thenable.js","goog.async.freelist.js","goog.async.workqueue.js","goog.async.run.js","goog.promise.resolver.js","goog.promise.promise.js","goog.disposable.idisposable.js","goog.disposable.disposable.js","goog.debug.errorcontext.js","goog.debug.debug.js","goog.events.browserfeature.js","goog.events.eventid.js","goog.events.event.js","goog.events.eventtype.js","goog.events.browserevent.js","goog.events.listenable.js","goog.events.listener.js","goog.events.listenermap.js","goog.events.events.js","goog.events.eventtarget.js","goog.timer.timer.js","goog.json.json.js","goog.json.hybrid.js","goog.debug.logrecord.js","goog.debug.logbuffer.js","goog.debug.logger.js","goog.log.log.js","goog.net.errorcode.js","goog.net.eventtype.js","goog.net.httpstatus.js","goog.net.xhrlike.js","goog.net.xmlhttpfactory.js","goog.net.wrapperxmlhttpfactory.js","goog.net.xmlhttp.js","goog.net.xhrio.js","shadow.cljs.devtools.client.env.js","shadow.cljs.devtools.client.console.js","goog.dom.inputtype.js","goog.window.window.js","goog.dom.forms.js","goog.dom.classlist.js","goog.dom.vendor.js","goog.math.box.js","goog.math.irect.js","goog.math.rect.js","goog.style.style.js","goog.style.transition.js","cljs.core.async.impl.protocols.js","cljs.core.async.impl.buffers.js","cljs.core.async.impl.dispatch.js","cljs.core.async.impl.channels.js","cljs.core.async.impl.timers.js","cljs.core.async.impl.ioc_helpers.js","cljs.core.async.js","shadow.dom.js","goog.result.result_interface.js","goog.result.dependentresult.js","goog.result.simpleresult.js","goog.result.resultutil.js","goog.labs.net.xhr.js","shadow.util.js","shadow.object.js","shadow.xhr.js","shadow.animate.js","shadow.cljs.devtools.client.hud.js","shadow.cljs.devtools.client.browser.js","shadow.js.js","module$node_modules$object_assign$index.js","module$node_modules$prop_types$lib$ReactPropTypesSecret.js","module$node_modules$process$browser.js","module$node_modules$prop_types$checkPropTypes.js","module$node_modules$react$cjs$react_development.js","module$node_modules$react$index.js","reagent.debug.js","reagent.impl.util.js","reagent.impl.batching.js","reagent.impl.protocols.js","reagent.ratom.js","reagent.impl.component.js","reagent.impl.input.js","reagent.impl.template.js","reagent.core.js","module$node_modules$scheduler$cjs$scheduler_development.js","module$node_modules$scheduler$index.js","module$node_modules$scheduler$cjs$scheduler_tracing_development.js","module$node_modules$scheduler$tracing.js","module$node_modules$react_dom$cjs$react_dom_development.js","module$node_modules$react_dom$index.js","reagent.dom.js","module$node_modules$core_js$modules$$_global.js","module$node_modules$core_js$modules$$_core.js","module$node_modules$core_js$modules$$.js","module$node_modules$core_js$modules$$_property_desc.js","module$node_modules$core_js$modules$$_fails.js","module$node_modules$core_js$modules$$_descriptors.js","module$node_modules$core_js$modules$$_hide.js","module$node_modules$core_js$modules$$_uid.js","module$node_modules$core_js$modules$$_redefine.js","module$node_modules$core_js$modules$$_a_function.js","module$node_modules$core_js$modules$$_ctx.js","module$node_modules$core_js$modules$$_export.js","module$node_modules$core_js$modules$$_math_log1p.js","module$node_modules$core_js$modules$es6_math_acosh.js","module$node_modules$core_js$modules$es6_math_asinh.js","module$node_modules$core_js$modules$es6_math_atanh.js","module$node_modules$core_js$modules$$_math_sign.js","module$node_modules$core_js$modules$es6_math_cbrt.js","module$node_modules$core_js$modules$es6_math_clz32.js","module$node_modules$core_js$modules$es6_math_cosh.js","module$node_modules$core_js$modules$$_math_expm1.js","module$node_modules$core_js$modules$es6_math_expm1.js","module$node_modules$core_js$modules$es6_math_fround.js","module$node_modules$core_js$modules$es6_math_hypot.js","module$node_modules$core_js$modules$es6_math_imul.js","module$node_modules$core_js$modules$es6_math_log10.js","module$node_modules$core_js$modules$es6_math_log1p.js","module$node_modules$core_js$modules$es6_math_log2.js","module$node_modules$core_js$modules$es6_math_sign.js","module$node_modules$core_js$modules$es6_math_sinh.js","module$node_modules$core_js$modules$es6_math_tanh.js","module$node_modules$core_js$modules$es6_math_trunc.js","module$node_modules$core_js$es6$math.js","module$node_modules$core_js$modules$$_has.js","module$node_modules$core_js$modules$$_cof.js","module$node_modules$core_js$modules$$_is_object.js","module$node_modules$core_js$modules$$_to_primitive.js","module$node_modules$core_js$modules$$_defined.js","module$node_modules$core_js$modules$$_string_trim.js","module$node_modules$core_js$modules$es6_number_constructor.js","module$node_modules$core_js$modules$es6_number_epsilon.js","module$node_modules$core_js$modules$es6_number_is_finite.js","module$node_modules$core_js$modules$$_is_integer.js","module$node_modules$core_js$modules$es6_number_is_integer.js","module$node_modules$core_js$modules$es6_number_is_nan.js","module$node_modules$core_js$modules$es6_number_is_safe_integer.js","module$node_modules$core_js$modules$es6_number_max_safe_integer.js","module$node_modules$core_js$modules$es6_number_min_safe_integer.js","module$node_modules$core_js$modules$es6_number_parse_float.js","module$node_modules$core_js$modules$es6_number_parse_int.js","module$node_modules$core_js$es6$number.js","module$node_modules$recharts$lib$polyfill.js","module$node_modules$react_is$cjs$react_is_development.js","module$node_modules$react_is$index.js","module$node_modules$prop_types$factoryWithTypeCheckers.js","module$node_modules$prop_types$index.js","module$node_modules$classnames$index.js","module$node_modules$lodash$isNil.js","module$node_modules$lodash$_freeGlobal.js","module$node_modules$lodash$_root.js","module$node_modules$lodash$_Symbol.js","module$node_modules$lodash$_getRawTag.js","module$node_modules$lodash$_objectToString.js","module$node_modules$lodash$_baseGetTag.js","module$node_modules$lodash$isArray.js","module$node_modules$lodash$isObjectLike.js","module$node_modules$lodash$isString.js","module$node_modules$lodash$isObject.js","module$node_modules$lodash$isFunction.js","module$node_modules$lodash$isSymbol.js","module$node_modules$lodash$_isKey.js","module$node_modules$lodash$_coreJsData.js","module$node_modules$lodash$_isMasked.js","module$node_modules$lodash$_toSource.js","module$node_modules$lodash$_baseIsNative.js","module$node_modules$lodash$_getValue.js","module$node_modules$lodash$_getNative.js","module$node_modules$lodash$_nativeCreate.js","module$node_modules$lodash$_hashClear.js","module$node_modules$lodash$_hashDelete.js","module$node_modules$lodash$_hashGet.js","module$node_modules$lodash$_hashHas.js","module$node_modules$lodash$_hashSet.js","module$node_modules$lodash$_Hash.js","module$node_modules$lodash$_listCacheClear.js","module$node_modules$lodash$eq.js","module$node_modules$lodash$_assocIndexOf.js","module$node_modules$lodash$_listCacheDelete.js","module$node_modules$lodash$_listCacheGet.js","module$node_modules$lodash$_listCacheHas.js","module$node_modules$lodash$_listCacheSet.js","module$node_modules$lodash$_ListCache.js","module$node_modules$lodash$_Map.js","module$node_modules$lodash$_mapCacheClear.js","module$node_modules$lodash$_isKeyable.js","module$node_modules$lodash$_getMapData.js","module$node_modules$lodash$_mapCacheDelete.js","module$node_modules$lodash$_mapCacheGet.js","module$node_modules$lodash$_mapCacheHas.js","module$node_modules$lodash$_mapCacheSet.js","module$node_modules$lodash$_MapCache.js","module$node_modules$lodash$memoize.js","module$node_modules$lodash$_memoizeCapped.js","module$node_modules$lodash$_stringToPath.js","module$node_modules$lodash$_arrayMap.js","module$node_modules$lodash$_baseToString.js","module$node_modules$lodash$toString.js","module$node_modules$lodash$_castPath.js","module$node_modules$lodash$_toKey.js","module$node_modules$lodash$_baseGet.js","module$node_modules$lodash$get.js","module$node_modules$lodash$isNumber.js","module$node_modules$lodash$isNaN.js","module$node_modules$recharts$lib$util$DataUtils.js","module$node_modules$recharts$lib$util$PureRender.js","module$node_modules$recharts$lib$util$ReactUtils.js","module$node_modules$recharts$lib$container$Surface.js","module$node_modules$recharts$lib$container$Layer.js","module$node_modules$lodash$_stackClear.js","module$node_modules$lodash$_stackDelete.js","module$node_modules$lodash$_stackGet.js","module$node_modules$lodash$_stackHas.js","module$node_modules$lodash$_stackSet.js","module$node_modules$lodash$_Stack.js","module$node_modules$lodash$_setCacheAdd.js","module$node_modules$lodash$_setCacheHas.js","module$node_modules$lodash$_SetCache.js","module$node_modules$lodash$_arraySome.js","module$node_modules$lodash$_cacheHas.js","module$node_modules$lodash$_equalArrays.js","module$node_modules$lodash$_Uint8Array.js","module$node_modules$lodash$_mapToArray.js","module$node_modules$lodash$_setToArray.js","module$node_modules$lodash$_equalByTag.js","module$node_modules$lodash$_arrayPush.js","module$node_modules$lodash$_baseGetAllKeys.js","module$node_modules$lodash$_arrayFilter.js","module$node_modules$lodash$stubArray.js","module$node_modules$lodash$_getSymbols.js","module$node_modules$lodash$_baseTimes.js","module$node_modules$lodash$_baseIsArguments.js","module$node_modules$lodash$isArguments.js","module$node_modules$lodash$stubFalse.js","module$node_modules$lodash$isBuffer.js","module$node_modules$lodash$_isIndex.js","module$node_modules$lodash$isLength.js","module$node_modules$lodash$_baseIsTypedArray.js","module$node_modules$lodash$_baseUnary.js","module$node_modules$lodash$_nodeUtil.js","module$node_modules$lodash$isTypedArray.js","module$node_modules$lodash$_arrayLikeKeys.js","module$node_modules$lodash$_isPrototype.js","module$node_modules$lodash$_overArg.js","module$node_modules$lodash$_nativeKeys.js","module$node_modules$lodash$_baseKeys.js","module$node_modules$lodash$isArrayLike.js","module$node_modules$lodash$keys.js","module$node_modules$lodash$_getAllKeys.js","module$node_modules$lodash$_equalObjects.js","module$node_modules$lodash$_DataView.js","module$node_modules$lodash$_Promise.js","module$node_modules$lodash$_Set.js","module$node_modules$lodash$_WeakMap.js","module$node_modules$lodash$_getTag.js","module$node_modules$lodash$_baseIsEqualDeep.js","module$node_modules$lodash$_baseIsEqual.js","module$node_modules$lodash$_baseIsMatch.js","module$node_modules$lodash$_isStrictComparable.js","module$node_modules$lodash$_getMatchData.js","module$node_modules$lodash$_matchesStrictComparable.js","module$node_modules$lodash$_baseMatches.js","module$node_modules$lodash$_baseHasIn.js","module$node_modules$lodash$_hasPath.js","module$node_modules$lodash$hasIn.js","module$node_modules$lodash$_baseMatchesProperty.js","module$node_modules$lodash$identity.js","module$node_modules$lodash$_baseProperty.js","module$node_modules$lodash$_basePropertyDeep.js","module$node_modules$lodash$property.js","module$node_modules$lodash$_baseIteratee.js","module$node_modules$lodash$_baseFindIndex.js","module$node_modules$lodash$_baseIsNaN.js","module$node_modules$lodash$_strictIndexOf.js","module$node_modules$lodash$_baseIndexOf.js","module$node_modules$lodash$_arrayIncludes.js","module$node_modules$lodash$_arrayIncludesWith.js","module$node_modules$lodash$noop.js","module$node_modules$lodash$_createSet.js","module$node_modules$lodash$_baseUniq.js","module$node_modules$lodash$uniqBy.js","module$node_modules$d3_path$dist$d3_path.js","module$node_modules$d3_shape$dist$d3_shape.js","module$node_modules$recharts$lib$shape$Symbols.js","module$node_modules$recharts$lib$component$DefaultLegendContent.js","module$node_modules$recharts$lib$component$Legend.js","module$node_modules$lodash$isEqual.js","module$node_modules$performance_now$lib$performance_now.js","module$node_modules$raf$index.js","module$node_modules$react_smooth$lib$setRafTimeout.js","module$node_modules$react_smooth$lib$AnimateManager.js","module$node_modules$lodash$_getPrototype.js","module$node_modules$lodash$isPlainObject.js","module$node_modules$react_smooth$lib$PureRender.js","module$node_modules$lodash$_baseIntersection.js","module$node_modules$lodash$_apply.js","module$node_modules$lodash$_overRest.js","module$node_modules$lodash$constant.js","module$node_modules$lodash$_defineProperty.js","module$node_modules$lodash$_baseSetToString.js","module$node_modules$lodash$_shortOut.js","module$node_modules$lodash$_setToString.js","module$node_modules$lodash$_baseRest.js","module$node_modules$lodash$isArrayLikeObject.js","module$node_modules$lodash$_castArrayLikeObject.js","module$node_modules$lodash$intersection.js","module$node_modules$react_smooth$lib$util.js","module$node_modules$react_smooth$lib$easing.js","module$node_modules$lodash$_createBaseFor.js","module$node_modules$lodash$_baseFor.js","module$node_modules$lodash$_baseForOwn.js","module$node_modules$lodash$_createBaseEach.js","module$node_modules$lodash$_baseEach.js","module$node_modules$lodash$_baseFilter.js","module$node_modules$lodash$filter.js","module$node_modules$react_smooth$lib$configUpdate.js","module$node_modules$react_smooth$lib$Animate.js","module$node_modules$$babel$runtime$helpers$interopRequireDefault.js","module$node_modules$dom_helpers$class$hasClass.js","module$node_modules$dom_helpers$class$addClass.js","module$node_modules$dom_helpers$class$removeClass.js","module$node_modules$react_lifecycles_compat$react_lifecycles_compat_cjs.js","module$node_modules$react_transition_group$utils$PropTypes.js","module$node_modules$react_transition_group$Transition.js","module$node_modules$react_transition_group$CSSTransition.js","module$node_modules$react_transition_group$utils$ChildMapping.js","module$node_modules$react_transition_group$TransitionGroup.js","module$node_modules$react_transition_group$ReplaceTransition.js","module$node_modules$react_transition_group$index.js","module$node_modules$react_smooth$lib$AnimateGroupChild.js","module$node_modules$react_smooth$lib$AnimateGroup.js","module$node_modules$react_smooth$lib$index.js","module$node_modules$lodash$_isFlattenable.js","module$node_modules$lodash$_baseFlatten.js","module$node_modules$lodash$_baseMap.js","module$node_modules$lodash$_baseSortBy.js","module$node_modules$lodash$_compareAscending.js","module$node_modules$lodash$_compareMultiple.js","module$node_modules$lodash$_baseOrderBy.js","module$node_modules$lodash$_isIterateeCall.js","module$node_modules$lodash$sortBy.js","module$node_modules$recharts$lib$component$DefaultTooltipContent.js","module$node_modules$recharts$lib$component$Tooltip.js","module$node_modules$lodash$now.js","module$node_modules$lodash$toNumber.js","module$node_modules$lodash$debounce.js","module$node_modules$resize_observer_polyfill$dist$ResizeObserver.js","module$node_modules$lodash_DOT_debounce$index.js","module$node_modules$lodash_DOT_throttle$index.js","module$node_modules$react_resize_detector$lib$components$ResizeDetector.js","module$node_modules$react_resize_detector$lib$index.js","module$node_modules$recharts$lib$util$LogUtils.js","module$node_modules$recharts$lib$component$ResponsiveContainer.js","module$node_modules$recharts$lib$component$Cell.js","module$node_modules$balanced_match$index.js","module$node_modules$reduce_function_call$index.js","module$node_modules$math_expression_evaluator$src$math_function.js","module$node_modules$math_expression_evaluator$src$lexer.js","module$node_modules$math_expression_evaluator$src$postfix.js","module$node_modules$math_expression_evaluator$src$postfix_evaluator.js","module$node_modules$math_expression_evaluator$src$formula_evaluator.js","module$node_modules$reduce_css_calc$index.js","module$node_modules$recharts$lib$util$DOMUtils.js","module$node_modules$recharts$lib$component$Text.js","module$node_modules$lodash$_baseExtremum.js","module$node_modules$lodash$_baseGt.js","module$node_modules$lodash$max.js","module$node_modules$lodash$_baseLt.js","module$node_modules$lodash$min.js","module$node_modules$lodash$map.js","module$node_modules$lodash$flatMap.js","module$node_modules$decimal_DOT_js_light$decimal.js","module$node_modules$recharts_scale$lib$util$utils.js","module$node_modules$recharts_scale$lib$util$arithmetic.js","module$node_modules$recharts_scale$lib$getNiceTickValues.js","module$node_modules$recharts_scale$lib$index.js","module$node_modules$d3_collection$dist$d3_collection.js","module$node_modules$d3_array$dist$d3_array.js","module$node_modules$d3_color$dist$d3_color.js","module$node_modules$d3_interpolate$dist$d3_interpolate.js","module$node_modules$d3_format$dist$d3_format.js","module$node_modules$d3_time$dist$d3_time.js","module$node_modules$d3_time_format$dist$d3_time_format.js","module$node_modules$d3_scale$dist$d3_scale.js","module$node_modules$recharts$lib$shape$Dot.js","module$node_modules$lodash$_arrayEvery.js","module$node_modules$lodash$_baseEvery.js","module$node_modules$lodash$every.js","module$node_modules$lodash$_baseAssignValue.js","module$node_modules$lodash$mapValues.js","module$node_modules$recharts$lib$util$CartesianUtils.js","module$node_modules$recharts$lib$cartesian$ReferenceDot.js","module$node_modules$lodash$_baseSome.js","module$node_modules$lodash$some.js","module$node_modules$recharts$lib$cartesian$ReferenceLine.js","module$node_modules$recharts$lib$shape$Rectangle.js","module$node_modules$recharts$lib$cartesian$ReferenceArea.js","module$node_modules$recharts$lib$cartesian$ErrorBar.js","module$node_modules$recharts$lib$util$ChartUtils.js","module$node_modules$recharts$lib$util$PolarUtils.js","module$node_modules$recharts$lib$component$Label.js","module$node_modules$lodash$last.js","module$node_modules$recharts$lib$component$LabelList.js","module$node_modules$recharts$lib$component$Customized.js","module$node_modules$recharts$lib$shape$Sector.js","module$node_modules$recharts$lib$shape$Curve.js","module$node_modules$recharts$lib$shape$Polygon.js","module$node_modules$recharts$lib$shape$Cross.js","module$node_modules$recharts$lib$polar$PolarGrid.js","module$node_modules$lodash$minBy.js","module$node_modules$lodash$maxBy.js","module$node_modules$recharts$lib$polar$PolarRadiusAxis.js","module$node_modules$recharts$lib$polar$PolarAngleAxis.js","module$node_modules$recharts$lib$polar$Pie.js","module$node_modules$recharts$lib$polar$Radar.js","module$node_modules$recharts$lib$polar$RadialBar.js","module$node_modules$lodash$_baseRange.js","module$node_modules$lodash$toFinite.js","module$node_modules$lodash$_createRange.js","module$node_modules$lodash$range.js","module$node_modules$recharts$lib$util$CssPrefixUtils.js","module$node_modules$recharts$lib$cartesian$Brush.js","module$node_modules$recharts$lib$cartesian$CartesianAxis.js","module$node_modules$recharts$lib$cartesian$CartesianGrid.js","module$node_modules$recharts$lib$cartesian$Line.js","module$node_modules$recharts$lib$cartesian$Area.js","module$node_modules$recharts$lib$cartesian$Bar.js","module$node_modules$recharts$lib$cartesian$ZAxis.js","module$node_modules$recharts$lib$cartesian$Scatter.js","module$node_modules$recharts$lib$cartesian$XAxis.js","module$node_modules$recharts$lib$cartesian$YAxis.js","module$node_modules$lodash$_createFind.js","module$node_modules$lodash$toInteger.js","module$node_modules$lodash$findIndex.js","module$node_modules$lodash$find.js","module$node_modules$lodash$throttle.js","module$node_modules$events$events.js","module$node_modules$recharts$lib$util$Events.js","module$node_modules$recharts$lib$chart$generateCategoricalChart.js","module$node_modules$recharts$lib$chart$LineChart.js","module$node_modules$recharts$lib$chart$BarChart.js","module$node_modules$recharts$lib$chart$PieChart.js","module$node_modules$lodash$_arrayEach.js","module$node_modules$lodash$_assignValue.js","module$node_modules$lodash$_copyObject.js","module$node_modules$lodash$_baseAssign.js","module$node_modules$lodash$_nativeKeysIn.js","module$node_modules$lodash$_baseKeysIn.js","module$node_modules$lodash$keysIn.js","module$node_modules$lodash$_baseAssignIn.js","module$node_modules$lodash$_cloneBuffer.js","module$node_modules$lodash$_copyArray.js","module$node_modules$lodash$_copySymbols.js","module$node_modules$lodash$_getSymbolsIn.js","module$node_modules$lodash$_copySymbolsIn.js","module$node_modules$lodash$_getAllKeysIn.js","module$node_modules$lodash$_initCloneArray.js","module$node_modules$lodash$_cloneArrayBuffer.js","module$node_modules$lodash$_cloneDataView.js","module$node_modules$lodash$_cloneRegExp.js","module$node_modules$lodash$_cloneSymbol.js","module$node_modules$lodash$_cloneTypedArray.js","module$node_modules$lodash$_initCloneByTag.js","module$node_modules$lodash$_baseCreate.js","module$node_modules$lodash$_initCloneObject.js","module$node_modules$lodash$_baseIsMap.js","module$node_modules$lodash$isMap.js","module$node_modules$lodash$_baseIsSet.js","module$node_modules$lodash$isSet.js","module$node_modules$lodash$_baseClone.js","module$node_modules$lodash$_baseSlice.js","module$node_modules$lodash$_parent.js","module$node_modules$lodash$_baseUnset.js","module$node_modules$lodash$_customOmitClone.js","module$node_modules$lodash$flatten.js","module$node_modules$lodash$_flatRest.js","module$node_modules$lodash$omit.js","module$node_modules$recharts$lib$util$Constants.js","module$node_modules$recharts$lib$chart$Treemap.js","module$node_modules$lodash$_baseSum.js","module$node_modules$lodash$sumBy.js","module$node_modules$recharts$lib$chart$Sankey.js","module$node_modules$recharts$lib$chart$RadarChart.js","module$node_modules$recharts$lib$chart$ScatterChart.js","module$node_modules$recharts$lib$chart$AreaChart.js","module$node_modules$recharts$lib$chart$RadialBarChart.js","module$node_modules$recharts$lib$chart$ComposedChart.js","module$node_modules$recharts$lib$shape$Trapezoid.js","module$node_modules$recharts$lib$numberAxis$Funnel.js","module$node_modules$recharts$lib$chart$FunnelChart.js","module$node_modules$recharts$lib$index.js","dnd_roller.core.js","shadow.module.main.append.js"]);
