(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver(a => {
    for (const n of a)
      if (n.type === "childList")
        for (const d of n.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && i(d)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function r(a) {
    const n = {};
    return a.integrity && (n.integrity = a.integrity), a.referrerPolicy && (n.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? n.credentials = "include" : a.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
  }

  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const n = r(a);
    fetch(a.href, n)
  }
})();
try {} catch (t) {
  console.error("[wxt] Failed to initialize plugins", t)
}
var a3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Z(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function _l(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
    };
    r.prototype = e.prototype
  } else r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.keys(t).forEach(function (i) {
    var a = Object.getOwnPropertyDescriptor(t, i);
    Object.defineProperty(r, i, a.get ? a : {
      enumerable: !0,
      get: function () {
        return t[i]
      }
    })
  }), r
}
var hr = {},
  vr = {},
  it = {},
  _t = {},
  We = {},
  Ra, ru;

function Zi() {
  if (ru) return Ra;
  ru = 1;

  function t($, y) {
    return function () {
      return $.apply(y, arguments)
    }
  }
  const {
    toString: e
  } = Object.prototype, {
    getPrototypeOf: r
  } = Object, i = ($ => y => {
    const T = e.call(y);
    return $[T] || ($[T] = T.slice(8, -1).toLowerCase())
  })(Object.create(null)), a = $ => ($ = $.toLowerCase(), y => i(y) === $), n = $ => y => typeof y === $, {
    isArray: d
  } = Array, s = n("undefined");

  function u($) {
    return $ !== null && !s($) && $.constructor !== null && !s($.constructor) && c($.constructor.isBuffer) && $.constructor.isBuffer($)
  }
  const l = a("ArrayBuffer");

  function f($) {
    let y;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? y = ArrayBuffer.isView($) : y = $ && $.buffer && l($.buffer), y
  }
  const o = n("string"),
    c = n("function"),
    _ = n("number"),
    h = $ => $ !== null && typeof $ == "object",
    v = $ => $ === !0 || $ === !1,
    p = $ => {
      if (i($) !== "object") return !1;
      const y = r($);
      return (y === null || y === Object.prototype || Object.getPrototypeOf(y) === null) && !(Symbol.toStringTag in $) && !(Symbol.iterator in $)
    },
    E = a("Date"),
    g = a("File"),
    S = a("Blob"),
    m = a("FileList"),
    I = $ => h($) && c($.pipe),
    O = $ => {
      let y;
      return $ && (typeof FormData == "function" && $ instanceof FormData || c($.append) && ((y = i($)) === "formdata" || y === "object" && c($.toString) && $.toString() === "[object FormData]"))
    },
    N = a("URLSearchParams"),
    P = $ => $.trim ? $.trim() : $.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

  function q($, y, {
    allOwnKeys: T = !1
  } = {}) {
    if ($ === null || typeof $ > "u") return;
    let A, C;
    if (typeof $ != "object" && ($ = [$]), d($))
      for (A = 0, C = $.length; A < C; A++) y.call(null, $[A], A, $);
    else {
      const L = T ? Object.getOwnPropertyNames($) : Object.keys($),
        M = L.length;
      let G;
      for (A = 0; A < M; A++) G = L[A], y.call(null, $[G], G, $)
    }
  }

  function V($, y) {
    y = y.toLowerCase();
    const T = Object.keys($);
    let A = T.length,
      C;
    for (; A-- > 0;)
      if (C = T[A], y === C.toLowerCase()) return C;
    return null
  }
  const K = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : a3,
    ie = $ => !s($) && $ !== K;

  function oe() {
    const {
      caseless: $
    } = ie(this) && this || {}, y = {}, T = (A, C) => {
      const L = $ && V(y, C) || C;
      p(y[L]) && p(A) ? y[L] = oe(y[L], A) : p(A) ? y[L] = oe({}, A) : d(A) ? y[L] = A.slice() : y[L] = A
    };
    for (let A = 0, C = arguments.length; A < C; A++) arguments[A] && q(arguments[A], T);
    return y
  }
  const Te = ($, y, T, {
      allOwnKeys: A
    } = {}) => (q(y, (C, L) => {
      T && c(C) ? $[L] = t(C, T) : $[L] = C
    }, {
      allOwnKeys: A
    }), $),
    _e = $ => ($.charCodeAt(0) === 65279 && ($ = $.slice(1)), $),
    me = ($, y, T, A) => {
      $.prototype = Object.create(y.prototype, A), $.prototype.constructor = $, Object.defineProperty($, "super", {
        value: y.prototype
      }), T && Object.assign($.prototype, T)
    },
    Qt = ($, y, T, A) => {
      let C, L, M;
      const G = {};
      if (y = y || {}, $ == null) return y;
      do {
        for (C = Object.getOwnPropertyNames($), L = C.length; L-- > 0;) M = C[L], (!A || A(M, $, y)) && !G[M] && (y[M] = $[M], G[M] = !0);
        $ = T !== !1 && r($)
      } while ($ && (!T || T($, y)) && $ !== Object.prototype);
      return y
    },
    er = ($, y, T) => {
      $ = String($), (T === void 0 || T > $.length) && (T = $.length), T -= y.length;
      const A = $.indexOf(y, T);
      return A !== -1 && A === T
    },
    tr = $ => {
      if (!$) return null;
      if (d($)) return $;
      let y = $.length;
      if (!_(y)) return null;
      const T = new Array(y);
      for (; y-- > 0;) T[y] = $[y];
      return T
    },
    St = ($ => y => $ && y instanceof $)(typeof Uint8Array < "u" && r(Uint8Array)),
    Rt = ($, y) => {
      const A = ($ && $[Symbol.iterator]).call($);
      let C;
      for (;
        (C = A.next()) && !C.done;) {
        const L = C.value;
        y.call($, L[0], L[1])
      }
    },
    rr = ($, y) => {
      let T;
      const A = [];
      for (;
        (T = $.exec(y)) !== null;) A.push(T);
      return A
    },
    nr = a("HTMLFormElement"),
    ir = $ => $.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (T, A, C) {
      return A.toUpperCase() + C
    }),
    bt = (({
      hasOwnProperty: $
    }) => (y, T) => $.call(y, T))(Object.prototype),
    ar = a("RegExp"),
    At = ($, y) => {
      const T = Object.getOwnPropertyDescriptors($),
        A = {};
      q(T, (C, L) => {
        let M;
        (M = y(C, L, $)) !== !1 && (A[L] = M || C)
      }), Object.defineProperties($, A)
    },
    dr = $ => {
      At($, (y, T) => {
        if (c($) && ["arguments", "caller", "callee"].indexOf(T) !== -1) return !1;
        const A = $[T];
        if (c(A)) {
          if (y.enumerable = !1, "writable" in y) {
            y.writable = !1;
            return
          }
          y.set || (y.set = () => {
            throw Error("Can not rewrite read-only method '" + T + "'")
          })
        }
      })
    },
    ur = ($, y) => {
      const T = {},
        A = C => {
          C.forEach(L => {
            T[L] = !0
          })
        };
      return d($) ? A($) : A(String($).split(y)), T
    },
    wt = () => {},
    sr = ($, y) => ($ = +$, Number.isFinite($) ? $ : y),
    ot = "abcdefghijklmnopqrstuvwxyz",
    pe = "0123456789",
    he = {
      DIGIT: pe,
      ALPHA: ot,
      ALPHA_DIGIT: ot + ot.toUpperCase() + pe
    },
    Ot = ($ = 16, y = he.ALPHA_DIGIT) => {
      let T = "";
      const {
        length: A
      } = y;
      for (; $--;) T += y[Math.random() * A | 0];
      return T
    };

  function Je($) {
    return !!($ && c($.append) && $[Symbol.toStringTag] === "FormData" && $[Symbol.iterator])
  }
  const or = $ => {
      const y = new Array(10),
        T = (A, C) => {
          if (h(A)) {
            if (y.indexOf(A) >= 0) return;
            if (!("toJSON" in A)) {
              y[C] = A;
              const L = d(A) ? [] : {};
              return q(A, (M, G) => {
                const Q = T(M, C + 1);
                !s(Q) && (L[G] = Q)
              }), y[C] = void 0, L
            }
          }
          return A
        };
      return T($, 0)
    },
    b = a("AsyncFunction");
  var R = {
    isArray: d,
    isArrayBuffer: l,
    isBuffer: u,
    isFormData: O,
    isArrayBufferView: f,
    isString: o,
    isNumber: _,
    isBoolean: v,
    isObject: h,
    isPlainObject: p,
    isUndefined: s,
    isDate: E,
    isFile: g,
    isBlob: S,
    isRegExp: ar,
    isFunction: c,
    isStream: I,
    isURLSearchParams: N,
    isTypedArray: St,
    isFileList: m,
    forEach: q,
    merge: oe,
    extend: Te,
    trim: P,
    stripBOM: _e,
    inherits: me,
    toFlatObject: Qt,
    kindOf: i,
    kindOfTest: a,
    endsWith: er,
    toArray: tr,
    forEachEntry: Rt,
    matchAll: rr,
    isHTMLForm: nr,
    hasOwnProperty: bt,
    hasOwnProp: bt,
    reduceDescriptors: At,
    freezeMethods: dr,
    toObjectSet: ur,
    toCamelCase: ir,
    noop: wt,
    toFiniteNumber: sr,
    findKey: V,
    global: K,
    isContextDefined: ie,
    ALPHABET: he,
    generateString: Ot,
    isSpecCompliantForm: Je,
    toJSONObject: or,
    isAsyncFn: b,
    isThenable: $ => $ && (h($) || c($)) && c($.then) && c($.catch)
  };

  function D($, y, T, A, C) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = $, this.name = "AxiosError", y && (this.code = y), T && (this.config = T), A && (this.request = A), C && (this.response = C)
  }
  R.inherits(D, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: R.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      }
    }
  });
  const F = D.prototype,
    W = {};
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach($ => {
    W[$] = {
      value: $
    }
  }), Object.defineProperties(D, W), Object.defineProperty(F, "isAxiosError", {
    value: !0
  }), D.from = ($, y, T, A, C, L) => {
    const M = Object.create(F);
    return R.toFlatObject($, M, function (Q) {
      return Q !== Error.prototype
    }, G => G !== "isAxiosError"), D.call(M, $.message, y, T, A, C), M.cause = $, M.name = $.name, L && Object.assign(M, L), M
  };
  var j = null;

  function X($) {
    return R.isPlainObject($) || R.isArray($)
  }

  function re($) {
    return R.endsWith($, "[]") ? $.slice(0, -2) : $
  }

  function ae($, y, T) {
    return $ ? $.concat(y).map(function (C, L) {
      return C = re(C), !T && L ? "[" + C + "]" : C
    }).join(T ? "." : "") : y
  }

  function Fe($) {
    return R.isArray($) && !$.some(X)
  }
  const Ne = R.toFlatObject(R, {}, null, function (y) {
    return /^is[A-Z]/.test(y)
  });

  function ve($, y, T) {
    if (!R.isObject($)) throw new TypeError("target must be an object");
    y = y || new FormData, T = R.toFlatObject(T, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function (J, fe) {
      return !R.isUndefined(fe[J])
    });
    const A = T.metaTokens,
      C = T.visitor || Y,
      L = T.dots,
      M = T.indexes,
      Q = (T.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(y);
    if (!R.isFunction(C)) throw new TypeError("visitor must be a function");

    function ee(z) {
      if (z === null) return "";
      if (R.isDate(z)) return z.toISOString();
      if (!Q && R.isBlob(z)) throw new D("Blob is not supported. Use a Buffer instead.");
      return R.isArrayBuffer(z) || R.isTypedArray(z) ? Q && typeof Blob == "function" ? new Blob([z]) : Buffer.from(z) : z
    }

    function Y(z, J, fe) {
      let $e = z;
      if (z && !fe && typeof z == "object") {
        if (R.endsWith(J, "{}")) J = A ? J : J.slice(0, -2), z = JSON.stringify(z);
        else if (R.isArray(z) && Fe(z) || (R.isFileList(z) || R.endsWith(J, "[]")) && ($e = R.toArray(z))) return J = re(J), $e.forEach(function (nt, i3) {
          !(R.isUndefined(nt) || nt === null) && y.append(M === !0 ? ae([J], i3, L) : M === null ? J : J + "[]", ee(nt))
        }), !1
      }
      return X(z) ? !0 : (y.append(ae(fe, J, L), ee(z)), !1)
    }
    const H = [],
      ce = Object.assign(Ne, {
        defaultVisitor: Y,
        convertValue: ee,
        isVisitable: X
      });

    function Ae(z, J) {
      if (!R.isUndefined(z)) {
        if (H.indexOf(z) !== -1) throw Error("Circular reference detected in " + J.join("."));
        H.push(z), R.forEach(z, function ($e, rt) {
          (!(R.isUndefined($e) || $e === null) && C.call(y, $e, R.isString(rt) ? rt.trim() : rt, J, ce)) === !0 && Ae($e, J ? J.concat(rt) : [rt])
        }), H.pop()
      }
    }
    if (!R.isObject($)) throw new TypeError("data must be an object");
    return Ae($), y
  }

  function Xe($) {
    const y = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent($).replace(/[!'()~]|%20|%00/g, function (A) {
      return y[A]
    })
  }

  function Be($, y) {
    this._pairs = [], $ && ve($, this, y)
  }
  const Me = Be.prototype;
  Me.append = function (y, T) {
    this._pairs.push([y, T])
  }, Me.toString = function (y) {
    const T = y ? function (A) {
      return y.call(this, A, Xe)
    } : Xe;
    return this._pairs.map(function (C) {
      return T(C[0]) + "=" + T(C[1])
    }, "").join("&")
  };

  function Qe($) {
    return encodeURIComponent($).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }

  function lt($, y, T) {
    if (!y) return $;
    const A = T && T.encode || Qe,
      C = T && T.serialize;
    let L;
    if (C ? L = C(y, T) : L = R.isURLSearchParams(y) ? y.toString() : new Be(y, T).toString(A), L) {
      const M = $.indexOf("#");
      M !== -1 && ($ = $.slice(0, M)), $ += ($.indexOf("?") === -1 ? "?" : "&") + L
    }
    return $
  }
  class Kr {
    constructor() {
      this.handlers = []
    }
    use(y, T, A) {
      return this.handlers.push({
        fulfilled: y,
        rejected: T,
        synchronous: A ? A.synchronous : !1,
        runWhen: A ? A.runWhen : null
      }), this.handlers.length - 1
    }
    eject(y) {
      this.handlers[y] && (this.handlers[y] = null)
    }
    clear() {
      this.handlers && (this.handlers = [])
    }
    forEach(y) {
      R.forEach(this.handlers, function (A) {
        A !== null && y(A)
      })
    }
  }
  var jr = Kr,
    Yr = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1
    },
    ta = typeof URLSearchParams < "u" ? URLSearchParams : Be,
    ra = typeof FormData < "u" ? FormData : null,
    na = typeof Blob < "u" ? Blob : null,
    ia = {
      isBrowser: !0,
      classes: {
        URLSearchParams: ta,
        FormData: ra,
        Blob: na
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
    };
  const zr = typeof window < "u" && typeof document < "u",
    aa = ($ => zr && ["ReactNative", "NativeScript", "NS"].indexOf($) < 0)(typeof navigator < "u" && navigator.product),
    da = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
  var ua = Object.freeze({
      __proto__: null,
      hasBrowserEnv: zr,
      hasStandardBrowserWebWorkerEnv: da,
      hasStandardBrowserEnv: aa
    }),
    Se = {
      ...ua,
      ...ia
    };

  function sa($, y) {
    return ve($, new Se.classes.URLSearchParams, Object.assign({
      visitor: function (T, A, C, L) {
        return Se.isNode && R.isBuffer(T) ? (this.append(A, T.toString("base64")), !1) : L.defaultVisitor.apply(this, arguments)
      }
    }, y))
  }

  function oa($) {
    return R.matchAll(/\w+|\[(\w*)]/g, $).map(y => y[0] === "[]" ? "" : y[1] || y[0])
  }

  function la($) {
    const y = {},
      T = Object.keys($);
    let A;
    const C = T.length;
    let L;
    for (A = 0; A < C; A++) L = T[A], y[L] = $[L];
    return y
  }

  function lr($) {
    function y(T, A, C, L) {
      let M = T[L++];
      const G = Number.isFinite(+M),
        Q = L >= T.length;
      return M = !M && R.isArray(C) ? C.length : M, Q ? (R.hasOwnProp(C, M) ? C[M] = [C[M], A] : C[M] = A, !G) : ((!C[M] || !R.isObject(C[M])) && (C[M] = []), y(T, A, C[M], L) && R.isArray(C[M]) && (C[M] = la(C[M])), !G)
    }
    if (R.isFormData($) && R.isFunction($.entries)) {
      const T = {};
      return R.forEachEntry($, (A, C) => {
        y(oa(A), C, T, 0)
      }), T
    }
    return null
  }

  function ca($, y, T) {
    if (R.isString($)) try {
      return (y || JSON.parse)($), R.trim($)
    } catch (A) {
      if (A.name !== "SyntaxError") throw A
    }
    return (0, JSON.stringify)($)
  }
  const cr = {
    transitional: Yr,
    adapter: ["xhr", "http"],
    transformRequest: [function (y, T) {
      const A = T.getContentType() || "",
        C = A.indexOf("application/json") > -1,
        L = R.isObject(y);
      if (L && R.isHTMLForm(y) && (y = new FormData(y)), R.isFormData(y)) return C && C ? JSON.stringify(lr(y)) : y;
      if (R.isArrayBuffer(y) || R.isBuffer(y) || R.isStream(y) || R.isFile(y) || R.isBlob(y)) return y;
      if (R.isArrayBufferView(y)) return y.buffer;
      if (R.isURLSearchParams(y)) return T.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), y.toString();
      let G;
      if (L) {
        if (A.indexOf("application/x-www-form-urlencoded") > -1) return sa(y, this.formSerializer).toString();
        if ((G = R.isFileList(y)) || A.indexOf("multipart/form-data") > -1) {
          const Q = this.env && this.env.FormData;
          return ve(G ? {
            "files[]": y
          } : y, Q && new Q, this.formSerializer)
        }
      }
      return L || C ? (T.setContentType("application/json", !1), ca(y)) : y
    }],
    transformResponse: [function (y) {
      const T = this.transitional || cr.transitional,
        A = T && T.forcedJSONParsing,
        C = this.responseType === "json";
      if (y && R.isString(y) && (A && !this.responseType || C)) {
        const M = !(T && T.silentJSONParsing) && C;
        try {
          return JSON.parse(y)
        } catch (G) {
          if (M) throw G.name === "SyntaxError" ? D.from(G, D.ERR_BAD_RESPONSE, this, null, this.response) : G
        }
      }
      return y
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: Se.classes.FormData,
      Blob: Se.classes.Blob
    },
    validateStatus: function (y) {
      return y >= 200 && y < 300
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  R.forEach(["delete", "get", "head", "post", "put", "patch"], $ => {
    cr.headers[$] = {}
  });
  var fr = cr;
  const fa = R.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
  var _a = $ => {
    const y = {};
    let T, A, C;
    return $ && $.split(`
`).forEach(function (M) {
      C = M.indexOf(":"), T = M.substring(0, C).trim().toLowerCase(), A = M.substring(C + 1).trim(), !(!T || y[T] && fa[T]) && (T === "set-cookie" ? y[T] ? y[T].push(A) : y[T] = [A] : y[T] = y[T] ? y[T] + ", " + A : A)
    }), y
  };
  const Jr = Symbol("internals");

  function ct($) {
    return $ && String($).trim().toLowerCase()
  }

  function Nt($) {
    return $ === !1 || $ == null ? $ : R.isArray($) ? $.map(Nt) : String($)
  }

  function pa($) {
    const y = Object.create(null),
      T = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let A;
    for (; A = T.exec($);) y[A[1]] = A[2];
    return y
  }
  const ha = $ => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test($.trim());

  function _r($, y, T, A, C) {
    if (R.isFunction(A)) return A.call(this, y, T);
    if (C && (y = T), !!R.isString(y)) {
      if (R.isString(A)) return y.indexOf(A) !== -1;
      if (R.isRegExp(A)) return A.test(y)
    }
  }

  function va($) {
    return $.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (y, T, A) => T.toUpperCase() + A)
  }

  function $a($, y) {
    const T = R.toCamelCase(" " + y);
    ["get", "set", "has"].forEach(A => {
      Object.defineProperty($, A + T, {
        value: function (C, L, M) {
          return this[A].call(this, y, C, L, M)
        },
        configurable: !0
      })
    })
  }
  class Ct {
    constructor(y) {
      y && this.set(y)
    }
    set(y, T, A) {
      const C = this;

      function L(G, Q, ee) {
        const Y = ct(Q);
        if (!Y) throw new Error("header name must be a non-empty string");
        const H = R.findKey(C, Y);
        (!H || C[H] === void 0 || ee === !0 || ee === void 0 && C[H] !== !1) && (C[H || Q] = Nt(G))
      }
      const M = (G, Q) => R.forEach(G, (ee, Y) => L(ee, Y, Q));
      return R.isPlainObject(y) || y instanceof this.constructor ? M(y, T) : R.isString(y) && (y = y.trim()) && !ha(y) ? M(_a(y), T) : y != null && L(T, y, A), this
    }
    get(y, T) {
      if (y = ct(y), y) {
        const A = R.findKey(this, y);
        if (A) {
          const C = this[A];
          if (!T) return C;
          if (T === !0) return pa(C);
          if (R.isFunction(T)) return T.call(this, C, A);
          if (R.isRegExp(T)) return T.exec(C);
          throw new TypeError("parser must be boolean|regexp|function")
        }
      }
    }
    has(y, T) {
      if (y = ct(y), y) {
        const A = R.findKey(this, y);
        return !!(A && this[A] !== void 0 && (!T || _r(this, this[A], A, T)))
      }
      return !1
    }
    delete(y, T) {
      const A = this;
      let C = !1;

      function L(M) {
        if (M = ct(M), M) {
          const G = R.findKey(A, M);
          G && (!T || _r(A, A[G], G, T)) && (delete A[G], C = !0)
        }
      }
      return R.isArray(y) ? y.forEach(L) : L(y), C
    }
    clear(y) {
      const T = Object.keys(this);
      let A = T.length,
        C = !1;
      for (; A--;) {
        const L = T[A];
        (!y || _r(this, this[L], L, y, !0)) && (delete this[L], C = !0)
      }
      return C
    }
    normalize(y) {
      const T = this,
        A = {};
      return R.forEach(this, (C, L) => {
        const M = R.findKey(A, L);
        if (M) {
          T[M] = Nt(C), delete T[L];
          return
        }
        const G = y ? va(L) : String(L).trim();
        G !== L && delete T[L], T[G] = Nt(C), A[G] = !0
      }), this
    }
    concat(...y) {
      return this.constructor.concat(this, ...y)
    }
    toJSON(y) {
      const T = Object.create(null);
      return R.forEach(this, (A, C) => {
        A != null && A !== !1 && (T[C] = y && R.isArray(A) ? A.join(", ") : A)
      }), T
    } [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
      return Object.entries(this.toJSON()).map(([y, T]) => y + ": " + T).join(`
`)
    }
    get[Symbol.toStringTag]() {
      return "AxiosHeaders"
    }
    static from(y) {
      return y instanceof this ? y : new this(y)
    }
    static concat(y, ...T) {
      const A = new this(y);
      return T.forEach(C => A.set(C)), A
    }
    static accessor(y) {
      const A = (this[Jr] = this[Jr] = {
          accessors: {}
        }).accessors,
        C = this.prototype;

      function L(M) {
        const G = ct(M);
        A[G] || ($a(C, M), A[G] = !0)
      }
      return R.isArray(y) ? y.forEach(L) : L(y), this
    }
  }
  Ct.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), R.reduceDescriptors(Ct.prototype, ({
    value: $
  }, y) => {
    let T = y[0].toUpperCase() + y.slice(1);
    return {
      get: () => $,
      set(A) {
        this[T] = A
      }
    }
  }), R.freezeMethods(Ct);
  var Re = Ct;

  function De($, y) {
    const T = this || fr,
      A = y || T,
      C = Re.from(A.headers);
    let L = A.data;
    return R.forEach($, function (G) {
      L = G.call(T, L, C.normalize(), y ? y.status : void 0)
    }), C.normalize(), L
  }

  function B($) {
    return !!($ && $.__CANCEL__)
  }

  function ft($, y, T) {
    D.call(this, $ ? ? "canceled", D.ERR_CANCELED, y, T), this.name = "CanceledError"
  }
  R.inherits(ft, D, {
    __CANCEL__: !0
  });

  function Ea($, y, T) {
    const A = T.config.validateStatus;
    !T.status || !A || A(T.status) ? $(T) : y(new D("Request failed with status code " + T.status, [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(T.status / 100) - 4], T.config, T.request, T))
  }
  var de = Se.hasStandardBrowserEnv ? {
    write($, y, T, A, C, L) {
      const M = [$ + "=" + encodeURIComponent(y)];
      R.isNumber(T) && M.push("expires=" + new Date(T).toGMTString()), R.isString(A) && M.push("path=" + A), R.isString(C) && M.push("domain=" + C), L === !0 && M.push("secure"), document.cookie = M.join("; ")
    },
    read($) {
      const y = document.cookie.match(new RegExp("(^|;\\s*)(" + $ + ")=([^;]*)"));
      return y ? decodeURIComponent(y[3]) : null
    },
    remove($) {
      this.write($, "", Date.now() - 864e5)
    }
  } : {
    write() {},
    read() {
      return null
    },
    remove() {}
  };

  function be($) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test($)
  }

  function qe($, y) {
    return y ? $.replace(/\/?\/$/, "") + "/" + y.replace(/^\/+/, "") : $
  }

  function ke($, y) {
    return $ && !be(y) ? qe($, y) : y
  }
  var pr = Se.hasStandardBrowserEnv ? function () {
    const y = /(msie|trident)/i.test(navigator.userAgent),
      T = document.createElement("a");
    let A;

    function C(L) {
      let M = L;
      return y && (T.setAttribute("href", M), M = T.href), T.setAttribute("href", M), {
        href: T.href,
        protocol: T.protocol ? T.protocol.replace(/:$/, "") : "",
        host: T.host,
        search: T.search ? T.search.replace(/^\?/, "") : "",
        hash: T.hash ? T.hash.replace(/^#/, "") : "",
        hostname: T.hostname,
        port: T.port,
        pathname: T.pathname.charAt(0) === "/" ? T.pathname : "/" + T.pathname
      }
    }
    return A = C(window.location.href),
      function (M) {
        const G = R.isString(M) ? C(M) : M;
        return G.protocol === A.protocol && G.host === A.host
      }
  }() : function () {
    return function () {
      return !0
    }
  }();

  function et($) {
    const y = /^([-+\w]{1,25})(:?\/\/|:)/.exec($);
    return y && y[1] || ""
  }

  function Lt($, y) {
    $ = $ || 10;
    const T = new Array($),
      A = new Array($);
    let C = 0,
      L = 0,
      M;
    return y = y !== void 0 ? y : 1e3,
      function (Q) {
        const ee = Date.now(),
          Y = A[L];
        M || (M = ee), T[C] = Q, A[C] = ee;
        let H = L,
          ce = 0;
        for (; H !== C;) ce += T[H++], H = H % $;
        if (C = (C + 1) % $, C === L && (L = (L + 1) % $), ee - M < y) return;
        const Ae = Y && ee - Y;
        return Ae ? Math.round(ce * 1e3 / Ae) : void 0
      }
  }

  function jd($, y) {
    let T = 0;
    const A = Lt(50, 250);
    return C => {
      const L = C.loaded,
        M = C.lengthComputable ? C.total : void 0,
        G = L - T,
        Q = A(G),
        ee = L <= M;
      T = L;
      const Y = {
        loaded: L,
        total: M,
        progress: M ? L / M : void 0,
        bytes: G,
        rate: Q || void 0,
        estimated: Q && M && ee ? (M - L) / Q : void 0,
        event: C
      };
      Y[y ? "download" : "upload"] = !0, $(Y)
    }
  }
  var J9 = typeof XMLHttpRequest < "u" && function ($) {
    return new Promise(function (T, A) {
      let C = $.data;
      const L = Re.from($.headers).normalize();
      let {
        responseType: M,
        withXSRFToken: G
      } = $, Q;

      function ee() {
        $.cancelToken && $.cancelToken.unsubscribe(Q), $.signal && $.signal.removeEventListener("abort", Q)
      }
      let Y;
      if (R.isFormData(C)) {
        if (Se.hasStandardBrowserEnv || Se.hasStandardBrowserWebWorkerEnv) L.setContentType(!1);
        else if ((Y = L.getContentType()) !== !1) {
          const [J, ...fe] = Y ? Y.split(";").map($e => $e.trim()).filter(Boolean) : [];
          L.setContentType([J || "multipart/form-data", ...fe].join("; "))
        }
      }
      let H = new XMLHttpRequest;
      if ($.auth) {
        const J = $.auth.username || "",
          fe = $.auth.password ? unescape(encodeURIComponent($.auth.password)) : "";
        L.set("Authorization", "Basic " + btoa(J + ":" + fe))
      }
      const ce = ke($.baseURL, $.url);
      H.open($.method.toUpperCase(), lt(ce, $.params, $.paramsSerializer), !0), H.timeout = $.timeout;

      function Ae() {
        if (!H) return;
        const J = Re.from("getAllResponseHeaders" in H && H.getAllResponseHeaders()),
          $e = {
            data: !M || M === "text" || M === "json" ? H.responseText : H.response,
            status: H.status,
            statusText: H.statusText,
            headers: J,
            config: $,
            request: H
          };
        Ea(function (nt) {
          T(nt), ee()
        }, function (nt) {
          A(nt), ee()
        }, $e), H = null
      }
      if ("onloadend" in H ? H.onloadend = Ae : H.onreadystatechange = function () {
          !H || H.readyState !== 4 || H.status === 0 && !(H.responseURL && H.responseURL.indexOf("file:") === 0) || setTimeout(Ae)
        }, H.onabort = function () {
          H && (A(new D("Request aborted", D.ECONNABORTED, $, H)), H = null)
        }, H.onerror = function () {
          A(new D("Network Error", D.ERR_NETWORK, $, H)), H = null
        }, H.ontimeout = function () {
          let fe = $.timeout ? "timeout of " + $.timeout + "ms exceeded" : "timeout exceeded";
          const $e = $.transitional || Yr;
          $.timeoutErrorMessage && (fe = $.timeoutErrorMessage), A(new D(fe, $e.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED, $, H)), H = null
        }, Se.hasStandardBrowserEnv && (G && R.isFunction(G) && (G = G($)), G || G !== !1 && pr(ce))) {
        const J = $.xsrfHeaderName && $.xsrfCookieName && de.read($.xsrfCookieName);
        J && L.set($.xsrfHeaderName, J)
      }
      C === void 0 && L.setContentType(null), "setRequestHeader" in H && R.forEach(L.toJSON(), function (fe, $e) {
        H.setRequestHeader($e, fe)
      }), R.isUndefined($.withCredentials) || (H.withCredentials = !!$.withCredentials), M && M !== "json" && (H.responseType = $.responseType), typeof $.onDownloadProgress == "function" && H.addEventListener("progress", jd($.onDownloadProgress, !0)), typeof $.onUploadProgress == "function" && H.upload && H.upload.addEventListener("progress", jd($.onUploadProgress)), ($.cancelToken || $.signal) && (Q = J => {
        H && (A(!J || J.type ? new ft(null, $, H) : J), H.abort(), H = null)
      }, $.cancelToken && $.cancelToken.subscribe(Q), $.signal && ($.signal.aborted ? Q() : $.signal.addEventListener("abort", Q)));
      const z = et(ce);
      if (z && Se.protocols.indexOf(z) === -1) {
        A(new D("Unsupported protocol " + z + ":", D.ERR_BAD_REQUEST, $));
        return
      }
      H.send(C || null)
    })
  };
  const ya = {
    http: j,
    xhr: J9
  };
  R.forEach(ya, ($, y) => {
    if ($) {
      try {
        Object.defineProperty($, "name", {
          value: y
        })
      } catch {}
      Object.defineProperty($, "adapterName", {
        value: y
      })
    }
  });
  const Yd = $ => `- ${$}`,
    X9 = $ => R.isFunction($) || $ === null || $ === !1;
  var zd = {
    getAdapter: $ => {
      $ = R.isArray($) ? $ : [$];
      const {
        length: y
      } = $;
      let T, A;
      const C = {};
      for (let L = 0; L < y; L++) {
        T = $[L];
        let M;
        if (A = T, !X9(T) && (A = ya[(M = String(T)).toLowerCase()], A === void 0)) throw new D(`Unknown adapter '${M}'`);
        if (A) break;
        C[M || "#" + L] = A
      }
      if (!A) {
        const L = Object.entries(C).map(([G, Q]) => `adapter ${G} ` + (Q === !1 ? "is not supported by the environment" : "is not available in the build"));
        let M = y ? L.length > 1 ? `since :
` + L.map(Yd).join(`
`) : " " + Yd(L[0]) : "as no adapter specified";
        throw new D("There is no suitable adapter to dispatch the request " + M, "ERR_NOT_SUPPORT")
      }
      return A
    },
    adapters: ya
  };

  function ga($) {
    if ($.cancelToken && $.cancelToken.throwIfRequested(), $.signal && $.signal.aborted) throw new ft(null, $)
  }

  function Jd($) {
    return ga($), $.headers = Re.from($.headers), $.data = De.call($, $.transformRequest), ["post", "put", "patch"].indexOf($.method) !== -1 && $.headers.setContentType("application/x-www-form-urlencoded", !1), zd.getAdapter($.adapter || fr.adapter)($).then(function (A) {
      return ga($), A.data = De.call($, $.transformResponse, A), A.headers = Re.from(A.headers), A
    }, function (A) {
      return B(A) || (ga($), A && A.response && (A.response.data = De.call($, $.transformResponse, A.response), A.response.headers = Re.from(A.response.headers))), Promise.reject(A)
    })
  }
  const Xd = $ => $ instanceof Re ? $.toJSON() : $;

  function Mt($, y) {
    y = y || {};
    const T = {};

    function A(ee, Y, H) {
      return R.isPlainObject(ee) && R.isPlainObject(Y) ? R.merge.call({
        caseless: H
      }, ee, Y) : R.isPlainObject(Y) ? R.merge({}, Y) : R.isArray(Y) ? Y.slice() : Y
    }

    function C(ee, Y, H) {
      if (R.isUndefined(Y)) {
        if (!R.isUndefined(ee)) return A(void 0, ee, H)
      } else return A(ee, Y, H)
    }

    function L(ee, Y) {
      if (!R.isUndefined(Y)) return A(void 0, Y)
    }

    function M(ee, Y) {
      if (R.isUndefined(Y)) {
        if (!R.isUndefined(ee)) return A(void 0, ee)
      } else return A(void 0, Y)
    }

    function G(ee, Y, H) {
      if (H in y) return A(ee, Y);
      if (H in $) return A(void 0, ee)
    }
    const Q = {
      url: L,
      method: L,
      data: L,
      baseURL: M,
      transformRequest: M,
      transformResponse: M,
      paramsSerializer: M,
      timeout: M,
      timeoutMessage: M,
      withCredentials: M,
      withXSRFToken: M,
      adapter: M,
      responseType: M,
      xsrfCookieName: M,
      xsrfHeaderName: M,
      onUploadProgress: M,
      onDownloadProgress: M,
      decompress: M,
      maxContentLength: M,
      maxBodyLength: M,
      beforeRedirect: M,
      transport: M,
      httpAgent: M,
      httpsAgent: M,
      cancelToken: M,
      socketPath: M,
      responseEncoding: M,
      validateStatus: G,
      headers: (ee, Y) => C(Xd(ee), Xd(Y), !0)
    };
    return R.forEach(Object.keys(Object.assign({}, $, y)), function (Y) {
      const H = Q[Y] || C,
        ce = H($[Y], y[Y], Y);
      R.isUndefined(ce) && H !== G || (T[Y] = ce)
    }), T
  }
  const Qd = "1.6.3",
    ma = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(($, y) => {
    ma[$] = function (A) {
      return typeof A === $ || "a" + (y < 1 ? "n " : " ") + $
    }
  });
  const eu = {};
  ma.transitional = function (y, T, A) {
    function C(L, M) {
      return "[Axios v" + Qd + "] Transitional option '" + L + "'" + M + (A ? ". " + A : "")
    }
    return (L, M, G) => {
      if (y === !1) throw new D(C(M, " has been removed" + (T ? " in " + T : "")), D.ERR_DEPRECATED);
      return T && !eu[M] && (eu[M] = !0, console.warn(C(M, " has been deprecated since v" + T + " and will be removed in the near future"))), y ? y(L, M, G) : !0
    }
  };

  function Q9($, y, T) {
    if (typeof $ != "object") throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
    const A = Object.keys($);
    let C = A.length;
    for (; C-- > 0;) {
      const L = A[C],
        M = y[L];
      if (M) {
        const G = $[L],
          Q = G === void 0 || M(G, L, $);
        if (Q !== !0) throw new D("option " + L + " must be " + Q, D.ERR_BAD_OPTION_VALUE);
        continue
      }
      if (T !== !0) throw new D("Unknown option " + L, D.ERR_BAD_OPTION)
    }
  }
  var Ia = {
    assertOptions: Q9,
    validators: ma
  };
  const tt = Ia.validators;
  class Xr {
    constructor(y) {
      this.defaults = y, this.interceptors = {
        request: new jr,
        response: new jr
      }
    }
    request(y, T) {
      typeof y == "string" ? (T = T || {}, T.url = y) : T = y || {}, T = Mt(this.defaults, T);
      const {
        transitional: A,
        paramsSerializer: C,
        headers: L
      } = T;
      A !== void 0 && Ia.assertOptions(A, {
        silentJSONParsing: tt.transitional(tt.boolean),
        forcedJSONParsing: tt.transitional(tt.boolean),
        clarifyTimeoutError: tt.transitional(tt.boolean)
      }, !1), C != null && (R.isFunction(C) ? T.paramsSerializer = {
        serialize: C
      } : Ia.assertOptions(C, {
        encode: tt.function,
        serialize: tt.function
      }, !0)), T.method = (T.method || this.defaults.method || "get").toLowerCase();
      let M = L && R.merge(L.common, L[T.method]);
      L && R.forEach(["delete", "get", "head", "post", "put", "patch", "common"], z => {
        delete L[z]
      }), T.headers = Re.concat(M, L);
      const G = [];
      let Q = !0;
      this.interceptors.request.forEach(function (J) {
        typeof J.runWhen == "function" && J.runWhen(T) === !1 || (Q = Q && J.synchronous, G.unshift(J.fulfilled, J.rejected))
      });
      const ee = [];
      this.interceptors.response.forEach(function (J) {
        ee.push(J.fulfilled, J.rejected)
      });
      let Y, H = 0,
        ce;
      if (!Q) {
        const z = [Jd.bind(this), void 0];
        for (z.unshift.apply(z, G), z.push.apply(z, ee), ce = z.length, Y = Promise.resolve(T); H < ce;) Y = Y.then(z[H++], z[H++]);
        return Y
      }
      ce = G.length;
      let Ae = T;
      for (H = 0; H < ce;) {
        const z = G[H++],
          J = G[H++];
        try {
          Ae = z(Ae)
        } catch (fe) {
          J.call(this, fe);
          break
        }
      }
      try {
        Y = Jd.call(this, Ae)
      } catch (z) {
        return Promise.reject(z)
      }
      for (H = 0, ce = ee.length; H < ce;) Y = Y.then(ee[H++], ee[H++]);
      return Y
    }
    getUri(y) {
      y = Mt(this.defaults, y);
      const T = ke(y.baseURL, y.url);
      return lt(T, y.params, y.paramsSerializer)
    }
  }
  R.forEach(["delete", "get", "head", "options"], function (y) {
    Xr.prototype[y] = function (T, A) {
      return this.request(Mt(A || {}, {
        method: y,
        url: T,
        data: (A || {}).data
      }))
    }
  }), R.forEach(["post", "put", "patch"], function (y) {
    function T(A) {
      return function (L, M, G) {
        return this.request(Mt(G || {}, {
          method: y,
          headers: A ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: L,
          data: M
        }))
      }
    }
    Xr.prototype[y] = T(), Xr.prototype[y + "Form"] = T(!0)
  });
  var Qr = Xr;
  class Ta {
    constructor(y) {
      if (typeof y != "function") throw new TypeError("executor must be a function.");
      let T;
      this.promise = new Promise(function (L) {
        T = L
      });
      const A = this;
      this.promise.then(C => {
        if (!A._listeners) return;
        let L = A._listeners.length;
        for (; L-- > 0;) A._listeners[L](C);
        A._listeners = null
      }), this.promise.then = C => {
        let L;
        const M = new Promise(G => {
          A.subscribe(G), L = G
        }).then(C);
        return M.cancel = function () {
          A.unsubscribe(L)
        }, M
      }, y(function (L, M, G) {
        A.reason || (A.reason = new ft(L, M, G), T(A.reason))
      })
    }
    throwIfRequested() {
      if (this.reason) throw this.reason
    }
    subscribe(y) {
      if (this.reason) {
        y(this.reason);
        return
      }
      this._listeners ? this._listeners.push(y) : this._listeners = [y]
    }
    unsubscribe(y) {
      if (!this._listeners) return;
      const T = this._listeners.indexOf(y);
      T !== -1 && this._listeners.splice(T, 1)
    }
    static source() {
      let y;
      return {
        token: new Ta(function (C) {
          y = C
        }),
        cancel: y
      }
    }
  }
  var e3 = Ta;

  function t3($) {
    return function (T) {
      return $.apply(null, T)
    }
  }

  function r3($) {
    return R.isObject($) && $.isAxiosError === !0
  }
  const Sa = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(Sa).forEach(([$, y]) => {
    Sa[y] = $
  });
  var n3 = Sa;

  function tu($) {
    const y = new Qr($),
      T = t(Qr.prototype.request, y);
    return R.extend(T, Qr.prototype, y, {
      allOwnKeys: !0
    }), R.extend(T, y, null, {
      allOwnKeys: !0
    }), T.create = function (C) {
      return tu(Mt($, C))
    }, T
  }
  const le = tu(fr);
  return le.Axios = Qr, le.CanceledError = ft, le.CancelToken = e3, le.isCancel = B, le.VERSION = Qd, le.toFormData = ve, le.AxiosError = D, le.Cancel = le.CanceledError, le.all = function (y) {
    return Promise.all(y)
  }, le.spread = t3, le.isAxiosError = r3, le.mergeConfig = Mt, le.AxiosHeaders = Re, le.formToJSON = $ => lr(R.isHTMLForm($) ? new FormData($) : $), le.getAdapter = zd.getAdapter, le.HttpStatusCode = n3, le.default = le, Ra = le, Ra
}
const d3 = {},
  u3 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: d3
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Ie = _l(u3);
var Ge = {},
  en = {
    exports: {}
  },
  ba, nu;

function s3() {
  if (nu) return ba;
  nu = 1;
  var t = 1e3,
    e = t * 60,
    r = e * 60,
    i = r * 24,
    a = i * 7,
    n = i * 365.25;
  ba = function (f, o) {
    o = o || {};
    var c = typeof f;
    if (c === "string" && f.length > 0) return d(f);
    if (c === "number" && isFinite(f)) return o.long ? u(f) : s(f);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(f))
  };

  function d(f) {
    if (f = String(f), !(f.length > 100)) {
      var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(f);
      if (o) {
        var c = parseFloat(o[1]),
          _ = (o[2] || "ms").toLowerCase();
        switch (_) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return c * n;
          case "weeks":
          case "week":
          case "w":
            return c * a;
          case "days":
          case "day":
          case "d":
            return c * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return c * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return c * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return c * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return c;
          default:
            return
        }
      }
    }
  }

  function s(f) {
    var o = Math.abs(f);
    return o >= i ? Math.round(f / i) + "d" : o >= r ? Math.round(f / r) + "h" : o >= e ? Math.round(f / e) + "m" : o >= t ? Math.round(f / t) + "s" : f + "ms"
  }

  function u(f) {
    var o = Math.abs(f);
    return o >= i ? l(f, o, i, "day") : o >= r ? l(f, o, r, "hour") : o >= e ? l(f, o, e, "minute") : o >= t ? l(f, o, t, "second") : f + " ms"
  }

  function l(f, o, c, _) {
    var h = o >= c * 1.5;
    return Math.round(f / c) + " " + _ + (h ? "s" : "")
  }
  return ba
}
var Aa, iu;

function o3() {
  if (iu) return Aa;
  iu = 1;

  function t(e) {
    i.debug = i, i.default = i, i.coerce = l, i.disable = s, i.enable = n, i.enabled = u, i.humanize = s3(), i.destroy = f, Object.keys(e).forEach(o => {
      i[o] = e[o]
    }), i.names = [], i.skips = [], i.formatters = {};

    function r(o) {
      let c = 0;
      for (let _ = 0; _ < o.length; _++) c = (c << 5) - c + o.charCodeAt(_), c |= 0;
      return i.colors[Math.abs(c) % i.colors.length]
    }
    i.selectColor = r;

    function i(o) {
      let c, _ = null,
        h, v;

      function p(...E) {
        if (!p.enabled) return;
        const g = p,
          S = Number(new Date),
          m = S - (c || S);
        g.diff = m, g.prev = c, g.curr = S, c = S, E[0] = i.coerce(E[0]), typeof E[0] != "string" && E.unshift("%O");
        let I = 0;
        E[0] = E[0].replace(/%([a-zA-Z%])/g, (N, P) => {
          if (N === "%%") return "%";
          I++;
          const q = i.formatters[P];
          if (typeof q == "function") {
            const V = E[I];
            N = q.call(g, V), E.splice(I, 1), I--
          }
          return N
        }), i.formatArgs.call(g, E), (g.log || i.log).apply(g, E)
      }
      return p.namespace = o, p.useColors = i.useColors(), p.color = i.selectColor(o), p.extend = a, p.destroy = i.destroy, Object.defineProperty(p, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => _ !== null ? _ : (h !== i.namespaces && (h = i.namespaces, v = i.enabled(o)), v),
        set: E => {
          _ = E
        }
      }), typeof i.init == "function" && i.init(p), p
    }

    function a(o, c) {
      const _ = i(this.namespace + (typeof c > "u" ? ":" : c) + o);
      return _.log = this.log, _
    }

    function n(o) {
      i.save(o), i.namespaces = o, i.names = [], i.skips = [];
      const c = (typeof o == "string" ? o : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const _ of c) _[0] === "-" ? i.skips.push(_.slice(1)) : i.names.push(_)
    }

    function d(o, c) {
      let _ = 0,
        h = 0,
        v = -1,
        p = 0;
      for (; _ < o.length;)
        if (h < c.length && (c[h] === o[_] || c[h] === "*")) c[h] === "*" ? (v = h, p = _, h++) : (_++, h++);
        else if (v !== -1) h = v + 1, p++, _ = p;
      else return !1;
      for (; h < c.length && c[h] === "*";) h++;
      return h === c.length
    }

    function s() {
      const o = [...i.names, ...i.skips.map(c => "-" + c)].join(",");
      return i.enable(""), o
    }

    function u(o) {
      for (const c of i.skips)
        if (d(o, c)) return !1;
      for (const c of i.names)
        if (d(o, c)) return !0;
      return !1
    }

    function l(o) {
      return o instanceof Error ? o.stack || o.message : o
    }

    function f() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }
    return i.enable(i.load()), i
  }
  return Aa = t, Aa
}
var au;

function pl() {
  return au || (au = 1, function (t, e) {
    var r = {};
    e.formatArgs = a, e.save = n, e.load = d, e.useColors = i, e.storage = s(), e.destroy = (() => {
      let l = !1;
      return () => {
        l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
      }
    })(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function i() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (l = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }

    function a(l) {
      if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
      const f = "color: " + this.color;
      l.splice(1, 0, f, "color: inherit");
      let o = 0,
        c = 0;
      l[0].replace(/%[a-zA-Z%]/g, _ => {
        _ !== "%%" && (o++, _ === "%c" && (c = o))
      }), l.splice(c, 0, f)
    }
    e.log = console.debug || console.log || (() => {});

    function n(l) {
      try {
        l ? e.storage.setItem("debug", l) : e.storage.removeItem("debug")
      } catch {}
    }

    function d() {
      let l;
      try {
        l = e.storage.getItem("debug")
      } catch {}
      return !l && typeof process < "u" && "env" in process && (l = r.DEBUG), l
    }

    function s() {
      try {
        return localStorage
      } catch {}
    }
    t.exports = o3()(e);
    const {
      formatters: u
    } = t.exports;
    u.j = function (l) {
      try {
        return JSON.stringify(l)
      } catch (f) {
        return "[UnexpectedJSONParseError]: " + f.message
      }
    }
  }(en, en.exports)), en.exports
}
var pt = {},
  we = {},
  du;

function l3() {
  if (du) return we;
  du = 1;
  var t = we.__createBinding || (Object.create ? function (u, l, f, o) {
      o === void 0 && (o = f);
      var c = Object.getOwnPropertyDescriptor(l, f);
      (!c || ("get" in c ? !l.__esModule : c.writable || c.configurable)) && (c = {
        enumerable: !0,
        get: function () {
          return l[f]
        }
      }), Object.defineProperty(u, o, c)
    } : function (u, l, f, o) {
      o === void 0 && (o = f), u[o] = l[f]
    }),
    e = we.__setModuleDefault || (Object.create ? function (u, l) {
      Object.defineProperty(u, "default", {
        enumerable: !0,
        value: l
      })
    } : function (u, l) {
      u.default = l
    }),
    r = we.__importStar || function (u) {
      if (u && u.__esModule) return u;
      var l = {};
      if (u != null)
        for (var f in u) f !== "default" && Object.prototype.hasOwnProperty.call(u, f) && t(l, u, f);
      return e(l, u), l
    };
  Object.defineProperty(we, "__esModule", {
    value: !0
  }), we.req = we.json = we.toBuffer = void 0;
  const i = r(Ie),
    a = r(Ie);
  async function n(u) {
    let l = 0;
    const f = [];
    for await (const o of u) l += o.length, f.push(o);
    return Buffer.concat(f, l)
  }
  we.toBuffer = n;
  async function d(u) {
    const f = (await n(u)).toString("utf8");
    try {
      return JSON.parse(f)
    } catch (o) {
      const c = o;
      throw c.message += ` (input: ${f})`, c
    }
  }
  we.json = d;

  function s(u, l = {}) {
    const o = ((typeof u == "string" ? u : u.href).startsWith("https:") ? a : i).request(u, l),
      c = new Promise((_, h) => {
        o.once("response", _).once("error", h).end()
      });
    return o.then = c.then.bind(c), o
  }
  return we.req = s, we
}
var uu;

function c3() {
  return uu || (uu = 1, function (t) {
    var e = pt.__createBinding || (Object.create ? function (f, o, c, _) {
        _ === void 0 && (_ = c);
        var h = Object.getOwnPropertyDescriptor(o, c);
        (!h || ("get" in h ? !o.__esModule : h.writable || h.configurable)) && (h = {
          enumerable: !0,
          get: function () {
            return o[c]
          }
        }), Object.defineProperty(f, _, h)
      } : function (f, o, c, _) {
        _ === void 0 && (_ = c), f[_] = o[c]
      }),
      r = pt.__setModuleDefault || (Object.create ? function (f, o) {
        Object.defineProperty(f, "default", {
          enumerable: !0,
          value: o
        })
      } : function (f, o) {
        f.default = o
      }),
      i = pt.__importStar || function (f) {
        if (f && f.__esModule) return f;
        var o = {};
        if (f != null)
          for (var c in f) c !== "default" && Object.prototype.hasOwnProperty.call(f, c) && e(o, f, c);
        return r(o, f), o
      },
      a = pt.__exportStar || function (f, o) {
        for (var c in f) c !== "default" && !Object.prototype.hasOwnProperty.call(o, c) && e(o, f, c)
      };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Agent = void 0;
    const n = i(Ie),
      d = i(Ie),
      s = Ie;
    a(l3(), t);
    const u = Symbol("AgentBaseInternalState");
    class l extends d.Agent {
      constructor(o) {
        super(o), this[u] = {}
      }
      isSecureEndpoint(o) {
        if (o) {
          if (typeof o.secureEndpoint == "boolean") return o.secureEndpoint;
          if (typeof o.protocol == "string") return o.protocol === "https:"
        }
        const {
          stack: c
        } = new Error;
        return typeof c != "string" ? !1 : c.split(`
`).some(_ => _.indexOf("(https.js:") !== -1 || _.indexOf("node:https:") !== -1)
      }
      incrementSockets(o) {
        if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
        this.sockets[o] || (this.sockets[o] = []);
        const c = new n.Socket({
          writable: !1
        });
        return this.sockets[o].push(c), this.totalSocketCount++, c
      }
      decrementSockets(o, c) {
        if (!this.sockets[o] || c === null) return;
        const _ = this.sockets[o],
          h = _.indexOf(c);
        h !== -1 && (_.splice(h, 1), this.totalSocketCount--, _.length === 0 && delete this.sockets[o])
      }
      getName(o) {
        return (typeof o.secureEndpoint == "boolean" ? o.secureEndpoint : this.isSecureEndpoint(o)) ? s.Agent.prototype.getName.call(this, o) : super.getName(o)
      }
      createSocket(o, c, _) {
        const h = {
            ...c,
            secureEndpoint: this.isSecureEndpoint(c)
          },
          v = this.getName(h),
          p = this.incrementSockets(v);
        Promise.resolve().then(() => this.connect(o, h)).then(E => {
          if (this.decrementSockets(v, p), E instanceof d.Agent) try {
            return E.addRequest(o, h)
          } catch (g) {
            return _(g)
          }
          this[u].currentSocket = E, super.createSocket(o, c, _)
        }, E => {
          this.decrementSockets(v, p), _(E)
        })
      }
      createConnection() {
        const o = this[u].currentSocket;
        if (this[u].currentSocket = void 0, !o) throw new Error("No socket was returned in the `connect()` function");
        return o
      }
      get defaultPort() {
        return this[u].defaultPort ? ? (this.protocol === "https:" ? 443 : 80)
      }
      set defaultPort(o) {
        this[u] && (this[u].defaultPort = o)
      }
      get protocol() {
        return this[u].protocol ? ? (this.isSecureEndpoint() ? "https:" : "http:")
      }
      set protocol(o) {
        this[u] && (this[u].protocol = o)
      }
    }
    t.Agent = l
  }(pt)), pt
}
var Dt = {},
  su;

function f3() {
  if (su) return Dt;
  su = 1;
  var t = Dt.__importDefault || function (a) {
    return a && a.__esModule ? a : {
      default: a
    }
  };
  Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.parseProxyResponse = void 0;
  const r = (0, t(pl()).default)("https-proxy-agent:parse-proxy-response");

  function i(a) {
    return new Promise((n, d) => {
      let s = 0;
      const u = [];

      function l() {
        const h = a.read();
        h ? _(h) : a.once("readable", l)
      }

      function f() {
        a.removeListener("end", o), a.removeListener("error", c), a.removeListener("readable", l)
      }

      function o() {
        f(), r("onend"), d(new Error("Proxy connection ended before receiving CONNECT response"))
      }

      function c(h) {
        f(), r("onerror %o", h), d(h)
      }

      function _(h) {
        u.push(h), s += h.length;
        const v = Buffer.concat(u, s),
          p = v.indexOf(`\r
\r
`);
        if (p === -1) {
          r("have not received end of HTTP headers yet..."), l();
          return
        }
        const E = v.slice(0, p).toString("ascii").split(`\r
`),
          g = E.shift();
        if (!g) return a.destroy(), d(new Error("No header received from proxy CONNECT response"));
        const S = g.split(" "),
          m = +S[1],
          I = S.slice(2).join(" "),
          O = {};
        for (const N of E) {
          if (!N) continue;
          const P = N.indexOf(":");
          if (P === -1) return a.destroy(), d(new Error(`Invalid header from proxy CONNECT response: "${N}"`));
          const q = N.slice(0, P).toLowerCase(),
            V = N.slice(P + 1).trimStart(),
            K = O[q];
          typeof K == "string" ? O[q] = [K, V] : Array.isArray(K) ? K.push(V) : O[q] = V
        }
        r("got proxy server response: %o %o", g, O), f(), n({
          connect: {
            statusCode: m,
            statusText: I,
            headers: O
          },
          buffered: v
        })
      }
      a.on("error", c), a.on("end", o), l()
    })
  }
  return Dt.parseProxyResponse = i, Dt
}
var ou;

function hl() {
  if (ou) return Ge;
  ou = 1;
  var t = Ge.__createBinding || (Object.create ? function (h, v, p, E) {
      E === void 0 && (E = p);
      var g = Object.getOwnPropertyDescriptor(v, p);
      (!g || ("get" in g ? !v.__esModule : g.writable || g.configurable)) && (g = {
        enumerable: !0,
        get: function () {
          return v[p]
        }
      }), Object.defineProperty(h, E, g)
    } : function (h, v, p, E) {
      E === void 0 && (E = p), h[E] = v[p]
    }),
    e = Ge.__setModuleDefault || (Object.create ? function (h, v) {
      Object.defineProperty(h, "default", {
        enumerable: !0,
        value: v
      })
    } : function (h, v) {
      h.default = v
    }),
    r = Ge.__importStar || function (h) {
      if (h && h.__esModule) return h;
      var v = {};
      if (h != null)
        for (var p in h) p !== "default" && Object.prototype.hasOwnProperty.call(h, p) && t(v, h, p);
      return e(v, h), v
    },
    i = Ge.__importDefault || function (h) {
      return h && h.__esModule ? h : {
        default: h
      }
    };
  Object.defineProperty(Ge, "__esModule", {
    value: !0
  }), Ge.HttpsProxyAgent = void 0;
  const a = r(Ie),
    n = r(Ie),
    d = i(Ie),
    s = i(pl()),
    u = c3(),
    l = f3(),
    f = (0, s.default)("https-proxy-agent");
  class o extends u.Agent {
    constructor(v, p) {
      super(p), this.options = {
        path: void 0
      }, this.proxy = typeof v == "string" ? new URL(v) : v, this.proxyHeaders = (p == null ? void 0 : p.headers) ? ? {}, f("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
      const E = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        g = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ALPNProtocols: ["http/1.1"],
        ...p ? _(p, "headers") : null,
        host: E,
        port: g
      }
    }
    async connect(v, p) {
      const {
        proxy: E
      } = this;
      if (!p.host) throw new TypeError('No "host" provided');
      let g;
      if (E.protocol === "https:") {
        f("Creating `tls.Socket`: %o", this.connectOpts);
        const V = this.connectOpts.servername || this.connectOpts.host;
        g = n.connect({
          ...this.connectOpts,
          servername: V && a.isIP(V) ? void 0 : V
        })
      } else f("Creating `net.Socket`: %o", this.connectOpts), g = a.connect(this.connectOpts);
      const S = typeof this.proxyHeaders == "function" ? this.proxyHeaders() : {
          ...this.proxyHeaders
        },
        m = a.isIPv6(p.host) ? `[${p.host}]` : p.host;
      let I = `CONNECT ${m}:${p.port} HTTP/1.1\r
`;
      if (E.username || E.password) {
        const V = `${decodeURIComponent(E.username)}:${decodeURIComponent(E.password)}`;
        S["Proxy-Authorization"] = `Basic ${Buffer.from(V).toString("base64")}`
      }
      S.Host = `${m}:${p.port}`, S["Proxy-Connection"] || (S["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close");
      for (const V of Object.keys(S)) I += `${V}: ${S[V]}\r
`;
      const O = (0, l.parseProxyResponse)(g);
      g.write(`${I}\r
`);
      const {
        connect: N,
        buffered: P
      } = await O;
      if (v.emit("proxyConnect", N), this.emit("proxyConnect", N, v), N.statusCode === 200) {
        if (v.once("socket", c), p.secureEndpoint) {
          f("Upgrading socket connection to TLS");
          const V = p.servername || p.host;
          return n.connect({
            ..._(p, "host", "path", "port"),
            socket: g,
            servername: a.isIP(V) ? void 0 : V
          })
        }
        return g
      }
      g.destroy();
      const q = new a.Socket({
        writable: !1
      });
      return q.readable = !0, v.once("socket", V => {
        f("Replaying proxy buffer for failed request"), (0, d.default)(V.listenerCount("data") > 0), V.push(P), V.push(null)
      }), q
    }
  }
  o.protocols = ["http", "https"], Ge.HttpsProxyAgent = o;

  function c(h) {
    h.resume()
  }

  function _(h, ...v) {
    const p = {};
    let E;
    for (E in h) v.includes(E) || (p[E] = h[E]);
    return p
  }
  return Ge
}
var wa = {},
  lu;

function Td() {
  return lu || (lu = 1, function (t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ELoginSubtasks = t.ELoginUrls = void 0,
      function (e) {
        e.GUEST_TOKEN = "https://api.twitter.com/1.1/guest/activate.json", e.INITIATE_LOGIN = "https://api.twitter.com/1.1/onboarding/task.json?flow_name=login", e.LOGIN_SUBTASK = "https://api.twitter.com/1.1/onboarding/task.json"
      }(t.ELoginUrls || (t.ELoginUrls = {})),
      function (e) {
        e.JS_INSTRUMENTATION = "LoginJsInstrumentationSubtask", e.ENTER_USER_IDENTIFIER = "LoginEnterUserIdentifierSSO", e.ENTER_ALTERNATE_USER_IDENTIFIER = "LoginEnterAlternateIdentifierSubtask", e.ENTER_PASSWORD = "LoginEnterPassword", e.ACCOUNT_DUPLICATION_CHECK = "AccountDuplicationCheck"
      }(t.ELoginSubtasks || (t.ELoginSubtasks = {}))
  }(wa)), wa
}
var $r = {},
  Oa = {},
  cu;

function Sd() {
  return cu || (cu = 1, function (t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EAuthenticationErrors = t.EAuthenticationType = void 0,
      function (e) {
        e.GUEST = "GUEST", e.USER = "USER", e.LOGIN = "LOGIN"
      }(t.EAuthenticationType || (t.EAuthenticationType = {})),
      function (e) {
        e.NOT_AUTHENTICATED = "Cannot fetch this data without authentication", e.INVALID_EMAIL = "No Twitter account found for the given email address", e.INVALID_USERNAME = "Incorrect username given for the given Twitter account", e.INVALID_PASSWORD = "Incorrect password given for the given Twitter account", e.AUTHENTICATION_FAILED = "Failed to authenticate using the given account Credentials"
      }(t.EAuthenticationErrors || (t.EAuthenticationErrors = {}))
  }(Oa)), Oa
}
var Er = {},
  yr = {},
  fu;

function _3() {
  return fu || (fu = 1, function () {
    function t(a, n, d, s) {
      return this instanceof t ? (this.domain = a || void 0, this.path = n || "/", this.secure = !!d, this.script = !!s, this) : new t(a, n, d, s)
    }
    t.All = Object.freeze(Object.create(null)), yr.CookieAccessInfo = t;

    function e(a, n, d) {
      return a instanceof e ? a : this instanceof e ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(d || "/"), this.explicit_path = !1, this.domain = n || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, a && this.parse(a, n, d), this) : new e(a, n, d)
    }
    yr.Cookie = e, e.prototype.toString = function () {
      var n = [this.name + "=" + this.value];
      return this.expiration_date !== 1 / 0 && n.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && n.push("domain=" + this.domain), this.path && n.push("path=" + this.path), this.secure && n.push("secure"), this.noscript && n.push("httponly"), n.join("; ")
    }, e.prototype.toValueString = function () {
      return this.name + "=" + this.value
    };
    var r = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
    e.prototype.parse = function (n, d, s) {
      if (this instanceof e) {
        if (n.length > 32768) {
          console.warn("Cookie too long for parsing (>32768 characters)");
          return
        }
        var u = n.split(";").filter(function (_) {
            return !!_
          }),
          l, f = u[0].match(/([^=]+)=([\s\S]*)/);
        if (!f) {
          console.warn("Invalid cookie header encountered. Header: '" + n + "'");
          return
        }
        var o = f[1],
          c = f[2];
        if (typeof o != "string" || o.length === 0 || typeof c != "string") {
          console.warn("Unable to extract values from cookie header. Cookie: '" + n + "'");
          return
        }
        for (this.name = o, this.value = c, l = 1; l < u.length; l += 1) switch (f = u[l].match(/([^=]+)(?:=([\s\S]*))?/), o = f[1].trim().toLowerCase(), c = f[2], o) {
          case "httponly":
            this.noscript = !0;
            break;
          case "expires":
            this.expiration_date = c ? Number(Date.parse(c)) : 1 / 0;
            break;
          case "path":
            this.path = c ? c.trim() : "", this.explicit_path = !0;
            break;
          case "domain":
            this.domain = c ? c.trim() : "", this.explicit_domain = !!this.domain;
            break;
          case "secure":
            this.secure = !0;
            break
        }
        return this.explicit_path || (this.path = s || "/"), this.explicit_domain || (this.domain = d), this
      }
      return new e().parse(n, d, s)
    }, e.prototype.matches = function (n) {
      return n === t.All ? !0 : !(this.noscript && n.script || this.secure && !n.secure || !this.collidesWith(n))
    }, e.prototype.collidesWith = function (n) {
      if (this.path && !n.path || this.domain && !n.domain || this.path && n.path.indexOf(this.path) !== 0 || this.explicit_path && n.path.indexOf(this.path) !== 0) return !1;
      var d = n.domain && n.domain.replace(/^[\.]/, ""),
        s = this.domain && this.domain.replace(/^[\.]/, "");
      if (s === d) return !0;
      if (s) {
        if (!this.explicit_domain) return !1;
        var u = d.indexOf(s);
        return !(u === -1 || u !== d.length - s.length)
      }
      return !0
    };

    function i() {
      var a, n, d;
      return this instanceof i ? (a = Object.create(null), this.setCookie = function (u, l, f) {
        var o, c;
        if (u = new e(u, l, f), o = u.expiration_date <= Date.now(), a[u.name] !== void 0) {
          for (n = a[u.name], c = 0; c < n.length; c += 1)
            if (d = n[c], d.collidesWith(u)) return o ? (n.splice(c, 1), n.length === 0 && delete a[u.name], !1) : (n[c] = u, u);
          return o ? !1 : (n.push(u), u)
        }
        return o ? !1 : (a[u.name] = [u], a[u.name])
      }, this.getCookie = function (u, l) {
        var f, o;
        if (n = a[u], !!n)
          for (o = 0; o < n.length; o += 1) {
            if (f = n[o], f.expiration_date <= Date.now()) {
              n.length === 0 && delete a[f.name];
              continue
            }
            if (f.matches(l)) return f
          }
      }, this.getCookies = function (u) {
        var l = [],
          f, o;
        for (f in a) o = this.getCookie(f, u), o && l.push(o);
        return l.toString = function () {
          return l.join(":")
        }, l.toValueString = function () {
          return l.map(function (_) {
            return _.toValueString()
          }).join("; ")
        }, l
      }, this) : new i
    }
    yr.CookieJar = i, i.prototype.setCookies = function (n, d, s) {
      n = Array.isArray(n) ? n : n.split(r);
      var u = [],
        l, f;
      for (n = n.map(function (o) {
          return new e(o, d, s)
        }), l = 0; l < n.length; l += 1) f = n[l], this.setCookie(f, d, s) && u.push(f);
      return u
    }
  }()), yr
}
var _u;

function vl() {
  if (_u) return Er;
  _u = 1, Object.defineProperty(Er, "__esModule", {
    value: !0
  }), Er.AuthCookie = void 0;
  var t = _3(),
    e = function () {
      function r(i) {
        this.kdt = "", this.twid = "", this.ct0 = "", this.auth_token = "";
        for (var a = new t.CookieJar().setCookies(i), n = 0, d = a; n < d.length; n++) {
          var s = d[n];
          s.name == "kdt" ? this.kdt = s.value : s.name == "twid" ? this.twid = s.value : s.name == "ct0" ? this.ct0 = s.value : s.name == "auth_token" && (this.auth_token = s.value)
        }
      }
      return r.prototype.toString = function () {
        for (var i = "", a = 0, n = Object.entries(this); a < n.length; a++) {
          var d = n[a],
            s = d[0],
            u = d[1];
          i += "".concat(s, "=").concat(u, ";")
        }
        return i
      }, r
    }();
  return Er.AuthCookie = e, Er
}
var pu;

function $l() {
  if (pu) return $r;
  pu = 1, Object.defineProperty($r, "__esModule", {
    value: !0
  }), $r.AuthCredential = void 0;
  var t = Zi(),
    e = Sd(),
    r = vl(),
    i = function () {
      function a(n, d) {
        if (this.authToken = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA", !n && d) this.guestToken = d, this.authenticationType = e.EAuthenticationType.GUEST;
        else if (n && d) {
          var s = new r.AuthCookie(n);
          this.cookies = s.toString(), this.guestToken = d, this.authenticationType = e.EAuthenticationType.LOGIN
        } else if (n && !d) {
          var s = new r.AuthCookie(n);
          this.cookies = s.toString(), this.csrfToken = s.ct0, this.authenticationType = e.EAuthenticationType.USER
        }
      }
      return a.prototype.toHeader = function () {
        var n = new t.AxiosHeaders;
        return this.authToken && n.set("authorization", "Bearer ".concat(this.authToken)), this.guestToken && n.set("x-guest-token", this.guestToken), this.csrfToken && n.set("x-csrf-token", this.csrfToken), this.cookies && n.set("cookie", this.cookies), n
      }, a
    }();
  return $r.AuthCredential = i, $r
}
var gr = {},
  mr = {},
  hu;

function El() {
  if (hu) return mr;
  hu = 1, Object.defineProperty(mr, "__esModule", {
    value: !0
  }), mr.JsInstrumentationInput = void 0;
  var t = function () {
    function e() {
      this.response = '{"rf":{"a09453c7341fb1cbb7d51561f92d478fa0752bc77e7ca6b5703258680b2c51d7":-4,"bd26c6694e256b10766447d992deaf92bb220bc05e3b8205ba5c9a4f83302230":0,"abfa440376b8dc33ca518e1e2a998b3ac4200a8122ef09781eea2c1408717111":-1,"a4e87b66027f638a4634561275fab00f9f7446b81a180b5f03eda69fa32eb8f4":-224},"s":"yET9nlXrlGRAylCyyBKEsxOpUweMpjRz5RfKzTzQyVADnKE64gmpyILfKBK0-HIHWY8FbJPHGWr6QrCb5A-Z3q2SLRm4DReprZGXykJ111_ynet8kSjFkRjODKKDN2FzT1V6rx9FILnUuRCaMu9ewfPgPBi4wO1g7EUeEsSSHIiCwNc9URJr4c2xVTA3ibIfTbu8p2WhX7RZAk8LWRPpPPB21st8Z1j0LcLlR0bkZoF6LsN-7w75lGB0s4z1JKqus2MVuRcPMay0wWZbn8Qx9In_-tSTvEBLcxjUpDgwu29G0g0iCWoISFzLY4-LLvV7UBGklkByIcPtwYbDbREqRQAAAYYmXAsG"}', this.link = "next_link"
    }
    return e
  }();
  return mr.JsInstrumentationInput = t, mr
}
var Ir = {},
  vu;

function yl() {
  if (vu) return Ir;
  vu = 1, Object.defineProperty(Ir, "__esModule", {
    value: !0
  }), Ir.UserIdentifierInput = void 0;
  var t = function () {
    function a(n) {
      this.link = "next_link", this.setting_responses = [new e(n)]
    }
    return a
  }();
  Ir.UserIdentifierInput = t;
  var e = function () {
      function a(n) {
        this.key = "user_identifier", this.response_data = new r(n)
      }
      return a
    }(),
    r = function () {
      function a(n) {
        this.text_data = new i(n)
      }
      return a
    }(),
    i = function () {
      function a(n) {
        this.result = n
      }
      return a
    }();
  return Ir
}
var Tr = {},
  $u;

function gl() {
  if ($u) return Tr;
  $u = 1, Object.defineProperty(Tr, "__esModule", {
    value: !0
  }), Tr.AlternateUserIdentifierInput = void 0;
  var t = function () {
    function e(r) {
      this.link = "next_link", this.text = r
    }
    return e
  }();
  return Tr.AlternateUserIdentifierInput = t, Tr
}
var Sr = {},
  Eu;

function ml() {
  if (Eu) return Sr;
  Eu = 1, Object.defineProperty(Sr, "__esModule", {
    value: !0
  }), Sr.PasswordInput = void 0;
  var t = function () {
    function e(r) {
      this.link = "next_link", this.password = r
    }
    return e
  }();
  return Sr.PasswordInput = t, Sr
}
var Rr = {},
  yu;

function Il() {
  if (yu) return Rr;
  yu = 1, Object.defineProperty(Rr, "__esModule", {
    value: !0
  }), Rr.AccountDuplicationCheckInput = void 0;
  var t = function () {
    function e() {
      this.link = "AccountDuplicationCheck_false"
    }
    return e
  }();
  return Rr.AccountDuplicationCheckInput = t, Rr
}
var gu;

function Tl() {
  if (gu) return gr;
  gu = 1, Object.defineProperty(gr, "__esModule", {
    value: !0
  }), gr.LoginSubtaskPayload = void 0;
  var t = Td(),
    e = El(),
    r = yl(),
    i = gl(),
    a = ml(),
    n = Il(),
    d = function () {
      function u(l, f, o) {
        this.flow_token = f, this.subtask_inputs = [new s(l, o)]
      }
      return u
    }();
  gr.LoginSubtaskPayload = d;
  var s = function () {
    function u(l, f) {
      this.subtask_id = l, l == t.ELoginSubtasks.JS_INSTRUMENTATION ? this.js_instrumentation = new e.JsInstrumentationInput : l == t.ELoginSubtasks.ENTER_USER_IDENTIFIER && f ? this.settings_list = new r.UserIdentifierInput(f) : l == t.ELoginSubtasks.ENTER_ALTERNATE_USER_IDENTIFIER && f ? this.enter_text = new i.AlternateUserIdentifierInput(f) : l == t.ELoginSubtasks.ENTER_PASSWORD && f ? this.enter_password = new a.PasswordInput(f) : l == t.ELoginSubtasks.ACCOUNT_DUPLICATION_CHECK && (this.check_logged_in_account = new n.AccountDuplicationCheckInput)
    }
    return u
  }();
  return gr
}
var mu;

function p3() {
  if (mu) return We;
  mu = 1;
  var t = We.__assign || function () {
      return t = Object.assign || function (c) {
        for (var _, h = 1, v = arguments.length; h < v; h++) {
          _ = arguments[h];
          for (var p in _) Object.prototype.hasOwnProperty.call(_, p) && (c[p] = _[p])
        }
        return c
      }, t.apply(this, arguments)
    },
    e = We.__awaiter || function (c, _, h, v) {
      function p(E) {
        return E instanceof h ? E : new h(function (g) {
          g(E)
        })
      }
      return new(h || (h = Promise))(function (E, g) {
        function S(O) {
          try {
            I(v.next(O))
          } catch (N) {
            g(N)
          }
        }

        function m(O) {
          try {
            I(v.throw(O))
          } catch (N) {
            g(N)
          }
        }

        function I(O) {
          O.done ? E(O.value) : p(O.value).then(S, m)
        }
        I((v = v.apply(c, _ || [])).next())
      })
    },
    r = We.__generator || function (c, _) {
      var h = {
          label: 0,
          sent: function () {
            if (E[0] & 1) throw E[1];
            return E[1]
          },
          trys: [],
          ops: []
        },
        v, p, E, g;
      return g = {
        next: S(0),
        throw: S(1),
        return: S(2)
      }, typeof Symbol == "function" && (g[Symbol.iterator] = function () {
        return this
      }), g;

      function S(I) {
        return function (O) {
          return m([I, O])
        }
      }

      function m(I) {
        if (v) throw new TypeError("Generator is already executing.");
        for (; g && (g = 0, I[0] && (h = 0)), h;) try {
          if (v = 1, p && (E = I[0] & 2 ? p.return : I[0] ? p.throw || ((E = p.return) && E.call(p), 0) : p.next) && !(E = E.call(p, I[1])).done) return E;
          switch (p = 0, E && (I = [I[0] & 2, E.value]), I[0]) {
            case 0:
            case 1:
              E = I;
              break;
            case 4:
              return h.label++, {
                value: I[1],
                done: !1
              };
            case 5:
              h.label++, p = I[1], I = [0];
              continue;
            case 7:
              I = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (E = h.trys, !(E = E.length > 0 && E[E.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                h = 0;
                continue
              }
              if (I[0] === 3 && (!E || I[1] > E[0] && I[1] < E[3])) {
                h.label = I[1];
                break
              }
              if (I[0] === 6 && h.label < E[1]) {
                h.label = E[1], E = I;
                break
              }
              if (E && h.label < E[2]) {
                h.label = E[2], h.ops.push(I);
                break
              }
              E[2] && h.ops.pop(), h.trys.pop();
              continue
          }
          I = _.call(c, h)
        } catch (O) {
          I = [6, O], p = 0
        } finally {
          v = E = 0
        }
        if (I[0] & 5) throw I[1];
        return {
          value: I[0] ? I[1] : void 0,
          done: !0
        }
      }
    },
    i = We.__importDefault || function (c) {
      return c && c.__esModule ? c : {
        default: c
      }
    };
  Object.defineProperty(We, "__esModule", {
    value: !0
  }), We.Auth = void 0;
  var a = i(Zi()),
    n = i(Ie),
    d = hl(),
    s = Td(),
    u = $l(),
    l = Tl(),
    f = Sd(),
    o = function () {
      function c(_) {
        this.httpsAgent = _ != null && _.proxyUrl ? new d.HttpsProxyAgent(_.proxyUrl) : new n.default.Agent, this.subtasks = [s.ELoginSubtasks.JS_INSTRUMENTATION, s.ELoginSubtasks.ENTER_USER_IDENTIFIER, s.ELoginSubtasks.ENTER_ALTERNATE_USER_IDENTIFIER, s.ELoginSubtasks.ENTER_PASSWORD, s.ELoginSubtasks.ACCOUNT_DUPLICATION_CHECK]
      }
      return c.prototype.getSubtaskPayload = function (_, h, v) {
        return _ == s.ELoginSubtasks.ENTER_USER_IDENTIFIER ? new l.LoginSubtaskPayload(_, h, v.email) : _ == s.ELoginSubtasks.ENTER_ALTERNATE_USER_IDENTIFIER ? new l.LoginSubtaskPayload(_, h, v.userName) : _ == s.ELoginSubtasks.ENTER_PASSWORD ? new l.LoginSubtaskPayload(_, h, v.password) : new l.LoginSubtaskPayload(_, h)
      }, c.prototype.executeSubtask = function (_, h, v) {
        return e(this, void 0, void 0, function () {
          return r(this, function (p) {
            switch (p.label) {
              case 0:
                return [4, a.default.post(_, v, {
                  headers: t({}, h.toHeader()),
                  httpsAgent: this.httpsAgent
                })];
              case 1:
                return [2, p.sent()]
            }
          })
        })
      }, c.prototype.parseAuthError = function (_, h) {
        var v, p = f.EAuthenticationErrors.AUTHENTICATION_FAILED;
        return ((v = _.response) === null || v === void 0 ? void 0 : v.data.errors[0].code) == 399 && (h == s.ELoginSubtasks.ENTER_USER_IDENTIFIER ? p = f.EAuthenticationErrors.INVALID_EMAIL : h == s.ELoginSubtasks.ENTER_ALTERNATE_USER_IDENTIFIER ? p = f.EAuthenticationErrors.INVALID_USERNAME : h == s.ELoginSubtasks.ENTER_PASSWORD && (p = f.EAuthenticationErrors.INVALID_PASSWORD)), p
      }, c.prototype.getGuestCredential = function () {
        return e(this, void 0, void 0, function () {
          var _;
          return r(this, function (h) {
            switch (h.label) {
              case 0:
                return _ = new u.AuthCredential, [4, this.executeSubtask(s.ELoginUrls.GUEST_TOKEN, _, void 0).then(function (v) {
                  _.guestToken = v.data.guest_token
                })];
              case 1:
                return h.sent(), [2, _]
            }
          })
        })
      }, c.prototype.getUserCredential = function (_) {
        return e(this, void 0, void 0, function () {
          var h, v, p, E, g, S, m = this;
          return r(this, function (I) {
            switch (I.label) {
              case 0:
                return [4, this.getGuestCredential()];
              case 1:
                return h = I.sent(), v = "", [4, this.executeSubtask(s.ELoginUrls.INITIATE_LOGIN, h, void 0).then(function (O) {
                  v = O.data.flow_token, h.cookies = O.headers["set-cookie"].join(";")
                })];
              case 2:
                I.sent(), p = function (O) {
                  var N;
                  return r(this, function (P) {
                    switch (P.label) {
                      case 0:
                        return N = E.getSubtaskPayload(E.subtasks[O], v, _), [4, E.executeSubtask(s.ELoginUrls.LOGIN_SUBTASK, h, N).then(function (q) {
                          m.subtasks[O] == s.ELoginSubtasks.ENTER_USER_IDENTIFIER && q.data.subtasks.map(function (V) {
                            return V.subtask_id
                          }).includes(s.ELoginSubtasks.ENTER_PASSWORD) && O++, v = q.data.flow_token, m.subtasks[O] == s.ELoginSubtasks.ACCOUNT_DUPLICATION_CHECK && (h = new u.AuthCredential(q.headers["set-cookie"]))
                        }).catch(function (q) {
                          throw new Error(m.parseAuthError(q, m.subtasks[O]))
                        })];
                      case 1:
                        return P.sent(), g = O, [2]
                    }
                  })
                }, E = this, S = 0, I.label = 3;
              case 3:
                return S < this.subtasks.length ? [5, p(S)] : [3, 6];
              case 4:
                I.sent(), S = g, I.label = 5;
              case 5:
                return S++, [3, 3];
              case 6:
                return [2, h]
            }
          })
        })
      }, c
    }();
  return We.Auth = o, We
}
var Na = {},
  Iu;

function h3() {
  return Iu || (Iu = 1, function (t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EHttpStatus = void 0,
      function (e) {
        e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE"
      }(t.EHttpStatus || (t.EHttpStatus = {}))
  }(Na)), Na
}
var br = {},
  Tu;

function v3() {
  if (Tu) return br;
  Tu = 1, Object.defineProperty(br, "__esModule", {
    value: !0
  }), br.AccountCredential = void 0;
  var t = function () {
    function e(r) {
      this.email = r.email, this.userName = r.userName, this.password = r.password
    }
    return e
  }();
  return br.AccountCredential = t, br
}
var Ca = {},
  Su;

function $3() {
  return Su || (Su = 1, Object.defineProperty(Ca, "__esModule", {
    value: !0
  })), Ca
}
var La = {},
  Ru;

function E3() {
  return Ru || (Ru = 1, Object.defineProperty(La, "__esModule", {
    value: !0
  })), La
}
var Ma = {},
  bu;

function y3() {
  return bu || (bu = 1, Object.defineProperty(Ma, "__esModule", {
    value: !0
  })), Ma
}
var Au;

function Sl() {
  return Au || (Au = 1, function (t) {
    var e = _t.__createBinding || (Object.create ? function (d, s, u, l) {
        l === void 0 && (l = u);
        var f = Object.getOwnPropertyDescriptor(s, u);
        (!f || ("get" in f ? !s.__esModule : f.writable || f.configurable)) && (f = {
          enumerable: !0,
          get: function () {
            return s[u]
          }
        }), Object.defineProperty(d, l, f)
      } : function (d, s, u, l) {
        l === void 0 && (l = u), d[l] = s[u]
      }),
      r = _t.__setModuleDefault || (Object.create ? function (d, s) {
        Object.defineProperty(d, "default", {
          enumerable: !0,
          value: s
        })
      } : function (d, s) {
        d.default = s
      }),
      i = _t.__exportStar || function (d, s) {
        for (var u in d) u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && e(s, d, u)
      },
      a = _t.__importStar || function (d) {
        if (d && d.__esModule) return d;
        var s = {};
        if (d != null)
          for (var u in d) u !== "default" && Object.prototype.hasOwnProperty.call(d, u) && e(s, d, u);
        return r(s, d), s
      };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ILoginSubtaskResponse = t.IGuestTokenResponse = t.Auth = void 0;
    var n = p3();
    Object.defineProperty(t, "Auth", {
      enumerable: !0,
      get: function () {
        return n.Auth
      }
    }), i(Sd(), t), i(h3(), t), i(Td(), t), i(v3(), t), i(vl(), t), i($l(), t), i(Tl(), t), i(Il(), t), i(gl(), t), i(El(), t), i(ml(), t), i(yl(), t), i($3(), t), t.IGuestTokenResponse = a(E3()), t.ILoginSubtaskResponse = a(y3())
  }(_t)), _t
}
var ht = {},
  wu;

function Ki() {
  if (wu) return ht;
  wu = 1, Object.defineProperty(ht, "__esModule", {
    value: !0
  }), ht.EErrorCodes = ht.EApiErrors = void 0;
  var t;
  (function (r) {
    r.COULD_NOT_AUTHENTICATE = "Failed to authenticate", r.RESOURCE_NOT_FOUND = "Requested resource not found", r.MISSING_PARAMETER = "Missing named parameter", r.USER_NOT_FOUND = "Requested user not found", r.USER_SUSPENDED = "Requested user has been suspended", r.ACCOUNT_SUSPENDED = "Account has been suspended", r.RATE_LIMIT_EXCEEDED = "Rate limit exceeded", r.INTERNAL_ERROR = "Internal server error", r.TIME_ERROR = "Mismatched data/time with server", r.ALREADY_FAVORITED = "Tweet already favorited", r.STATUS_NOT_FOUND = "Requested tweeet not found", r.NOT_AUTHORIZED = "Not authorized to view tweet", r.DAILY_STATUS_LIMIT_EXCEEDED = "Exceeded daily tweet update limit", r.TWEET_LENGTH_EXCEEDED = "Exceeded tweet text maximum length", r.DUPLICATE_STATUS = "Tweet already posted", r.BAD_AUTHENTICATION = "Invalid authentication data", r.RESOURCE_NOT_ALLOWED = "Not authorized to access requested resource", r.AUTOMATED_REQUEST_ERROR = "Automated request detected", r.ACCOUNT_LOCKED = "Account has been locked", r.ALREADY_RETWEETED = "Tweet already retweeted", r.TWEET_NOT_FOUND = "Requested tweet not found", r.TWEET_VIOLATED_RULES = "Requestd tweet has been removed for rules violation", r.DISABLED_TWEET_ACTIONS = "Reqeusted action disabled on the tweet"
  })(t || (ht.EApiErrors = t = {}));
  var e;
  return function (r) {
    r[r.COULD_NOT_AUTHENTICATE = 32] = "COULD_NOT_AUTHENTICATE", r[r.RESOURCE_NOT_FOUND = 34] = "RESOURCE_NOT_FOUND", r[r.MISSING_PARAMETER = 38] = "MISSING_PARAMETER", r[r.USER_NOT_FOUND = 50] = "USER_NOT_FOUND", r[r.USER_SUSPENDED = 63] = "USER_SUSPENDED", r[r.ACCOUNT_SUSPENDED = 64] = "ACCOUNT_SUSPENDED", r[r.RATE_LIMIT_EXCEEDED = 88] = "RATE_LIMIT_EXCEEDED", r[r.INTERNAL_ERROR = 131] = "INTERNAL_ERROR", r[r.TIME_ERROR = 135] = "TIME_ERROR", r[r.ALREADY_FAVORITED = 139] = "ALREADY_FAVORITED", r[r.STATUS_NOT_FOUND = 144] = "STATUS_NOT_FOUND", r[r.NOT_AUTHORIZED = 179] = "NOT_AUTHORIZED", r[r.DAILY_STATUS_LIMIT_EXCEEDED = 185] = "DAILY_STATUS_LIMIT_EXCEEDED", r[r.TWEET_LENGTH_EXCEEDED = 186] = "TWEET_LENGTH_EXCEEDED", r[r.DUPLICATE_STATUS = 187] = "DUPLICATE_STATUS", r[r.BAD_AUTHENTICATION = 215] = "BAD_AUTHENTICATION", r[r.RESOURCE_NOT_ALLOWED = 220] = "RESOURCE_NOT_ALLOWED", r[r.AUTOMATED_REQUEST_ERROR = 226] = "AUTOMATED_REQUEST_ERROR", r[r.ACCOUNT_LOCKED = 326] = "ACCOUNT_LOCKED", r[r.ALREADY_RETWEETED = 327] = "ALREADY_RETWEETED", r[r.TWEET_NOT_FOUND = 421] = "TWEET_NOT_FOUND", r[r.TWEET_VIOLATED_RULES = 422] = "TWEET_VIOLATED_RULES", r[r.DISABLED_TWEET_ACTIONS = 425] = "DISABLED_TWEET_ACTIONS"
  }(e || (ht.EErrorCodes = e = {})), ht
}
var He = {},
  Ve = {},
  Ar = {},
  Ou;

function Tt() {
  if (Ou) return Ar;
  Ou = 1, Object.defineProperty(Ar, "__esModule", {
    value: !0
  }), Ar.EResourceType = void 0;
  var t;
  return function (e) {
    e.LIST_MEMBERS = "LIST_MEMBERS", e.LIST_TWEETS = "LIST_TWEETS", e.MEDIA_UPLOAD_APPEND = "MEDIA_UPLOAD_APPEND", e.MEDIA_UPLOAD_FINALIZE = "MEDIA_UPLOAD_FINALIZE", e.MEDIA_UPLOAD_INITIALIZE = "MEDIA_UPLOAD_INITIALIZE", e.TWEET_DETAILS = "TWEET_DETAILS", e.TWEET_DETAILS_ALT = "TWEET_DETAILS_ALT", e.TWEET_LIKE = "TWEET_LIKE", e.TWEET_POST = "TWEET_POST", e.TWEET_RETWEET = "TWEET_RETWEET", e.TWEET_RETWEETERS = "TWEET_RETWEETERS", e.TWEET_SCHEDULE = "TWEET_SCHEDULE", e.TWEET_SEARCH = "TWEET_SEARCH", e.TWEET_UNLIKE = "TWEET_UNLIKE", e.TWEET_UNPOST = "TWEET_UNPOST", e.TWEET_UNRETWEET = "TWEET_UNRETWEET", e.TWEET_UNSCHEDULE = "TWEET_UNSCHEDULE", e.USER_BOOKMARKS = "USER_BOOKMARKS", e.USER_DETAILS_BY_USERNAME = "USER_DETAILS_BY_USERNAME", e.USER_DETAILS_BY_ID = "USER_DETAILS_BY_ID", e.USER_FEED_FOLLOWED = "USER_FEED_FOLLOWED", e.USER_FEED_RECOMMENDED = "USER_FEED_RECOMMENDED", e.USER_FOLLOW = "USER_FOLLOW", e.USER_FOLLOWING = "USER_FOLLOWING", e.USER_FOLLOWERS = "USER_FOLLOWERS", e.USER_HIGHLIGHTS = "USER_HIGHLIGHTS", e.USER_LIKES = "USER_LIKES", e.USER_MEDIA = "USER_MEDIA", e.USER_NOTIFICATIONS = "USER_NOTIFICATIONS", e.USER_SUBSCRIPTIONS = "USER_SUBSCRIPTIONS", e.USER_TIMELINE = "USER_TIMELINE", e.USER_TIMELINE_AND_REPLIES = "USER_TIMELINE_AND_REPLIES", e.USER_UNFOLLOW = "USER_UNFOLLOW"
  }(t || (Ar.EResourceType = t = {})), Ar
}
var Nu;

function g3() {
  if (Nu) return Ve;
  Nu = 1, Object.defineProperty(Ve, "__esModule", {
    value: !0
  }), Ve.postResources = Ve.fetchResources = Ve.allowGuestAuthentication = void 0;
  var t = Tt();
  return Ve.allowGuestAuthentication = [t.EResourceType.TWEET_DETAILS, t.EResourceType.USER_DETAILS_BY_USERNAME, t.EResourceType.USER_TIMELINE], Ve.fetchResources = [t.EResourceType.LIST_MEMBERS, t.EResourceType.LIST_TWEETS, t.EResourceType.TWEET_DETAILS, t.EResourceType.TWEET_DETAILS_ALT, t.EResourceType.TWEET_RETWEETERS, t.EResourceType.TWEET_SEARCH, t.EResourceType.USER_BOOKMARKS, t.EResourceType.USER_DETAILS_BY_USERNAME, t.EResourceType.USER_DETAILS_BY_ID, t.EResourceType.USER_FEED_FOLLOWED, t.EResourceType.USER_FEED_RECOMMENDED, t.EResourceType.USER_FOLLOWING, t.EResourceType.USER_FOLLOWERS, t.EResourceType.USER_HIGHLIGHTS, t.EResourceType.USER_LIKES, t.EResourceType.USER_MEDIA, t.EResourceType.USER_NOTIFICATIONS, t.EResourceType.USER_SUBSCRIPTIONS, t.EResourceType.USER_TIMELINE, t.EResourceType.USER_TIMELINE_AND_REPLIES], Ve.postResources = [t.EResourceType.MEDIA_UPLOAD_APPEND, t.EResourceType.MEDIA_UPLOAD_FINALIZE, t.EResourceType.MEDIA_UPLOAD_INITIALIZE, t.EResourceType.TWEET_LIKE, t.EResourceType.TWEET_POST, t.EResourceType.TWEET_RETWEET, t.EResourceType.TWEET_SCHEDULE, t.EResourceType.TWEET_UNLIKE, t.EResourceType.TWEET_UNPOST, t.EResourceType.TWEET_UNRETWEET, t.EResourceType.TWEET_UNSCHEDULE, t.EResourceType.USER_FOLLOW, t.EResourceType.USER_UNFOLLOW], Ve
}
var wr = {},
  Or = {},
  at = {},
  Ze = {},
  Cu;

function m3() {
  if (Cu) return Ze;
  Cu = 1, Object.defineProperty(Ze, "__esModule", {
    value: !0
  }), Ze.tweets = Ze.members = Ze.details = void 0;

  function t(i) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/gO1_eYPohKYHwCG2m-1ZnQ/ListByRestId",
      params: {
        variables: JSON.stringify({
          listId: i
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          responsive_web_graphql_timeline_navigation_enabled: !0
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  Ze.details = t;

  function e(i, a, n) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/dsJhIe3M0vCopjSfU6SlQw/ListMembers",
      params: {
        variables: JSON.stringify({
          listId: i,
          count: a,
          cursor: n
        }),
        features: JSON.stringify({
          rweb_tipjar_consumption_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          communities_web_enable_tweet_community_results_fetch: !0,
          c9s_tweet_anatomy_moderator_badge_enabled: !0,
          articles_preview_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !0,
          tweet_awards_web_tipping_enabled: !1,
          creator_subscriptions_quote_tweet_preview_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          rweb_video_timestamps_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_enhance_cards_enabled: !1
        })
      }
    }
  }
  Ze.members = e;

  function r(i, a, n) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/naCjgapXCSCsbZ7qnnItQA/ListLatestTweetsTimeline",
      params: {
        variables: JSON.stringify({
          listId: i,
          count: a,
          cursor: n
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  return Ze.tweets = r, Ze
}
var Pe = {},
  Da, Lu;

function I3() {
  return Lu || (Lu = 1, Da = typeof self == "object" ? self.FormData : window.FormData), Da
}
var Mu;

function T3() {
  if (Mu) return Pe;
  Mu = 1;
  var t = Pe.__importDefault || function (d) {
    return d && d.__esModule ? d : {
      default: d
    }
  };
  Object.defineProperty(Pe, "__esModule", {
    value: !0
  }), Pe.initializeUpload = Pe.finalizeUpload = Pe.appendUpload = void 0;
  var e = t(Ie),
    r = t(I3());

  function i(d, s) {
    var u = new r.default;
    return u.append("media", typeof s == "string" ? e.default.createReadStream(s) : Buffer.from(s)), {
      method: "post",
      headers: {
        referer: "https://x.com"
      },
      url: "https://upload.x.com/i/media/upload.json",
      params: {
        command: "APPEND",
        media_id: d,
        segment_index: 0
      },
      data: u
    }
  }
  Pe.appendUpload = i;

  function a(d) {
    return {
      method: "post",
      headers: {
        referer: "https://x.com"
      },
      url: "https://upload.x.com/i/media/upload.json",
      params: {
        command: "FINALIZE",
        media_id: d
      }
    }
  }
  Pe.finalizeUpload = a;

  function n(d) {
    return {
      method: "post",
      headers: {
        referer: "https://x.com"
      },
      url: "https://upload.x.com/i/media/upload.json",
      params: {
        command: "INIT",
        total_bytes: d
      }
    }
  }
  return Pe.initializeUpload = n, Pe
}
var ne = {},
  Pa = {},
  Du;

function Rl() {
  return Du || (Du = 1, function (t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ESearchResultType = void 0,
      function (e) {
        e.LATEST = "Latest", e.TOP = "Top"
      }(t.ESearchResultType || (t.ESearchResultType = {}))
  }(Pa)), Pa
}
var Nr = {},
  Pu;

function bl() {
  if (Pu) return Nr;
  Pu = 1, Object.defineProperty(Nr, "__esModule", {
    value: !0
  }), Nr.TweetFilter = void 0;
  var t = function () {
    function e(r) {
      this.links = !0, this.replies = !0, this.top = !1, this.endDate = r.endDate, this.excludeWords = r.excludeWords, this.fromUsers = r.fromUsers, this.hashtags = r.hashtags, this.includePhrase = r.includePhrase, this.language = r.language, this.links = r.links, this.list = r.list, this.replies = r.replies, this.mentions = r.mentions, this.quoted = r.quoted, this.sinceId = r.sinceId, this.maxId = r.maxId, this.minLikes = r.minLikes, this.minReplies = r.minReplies, this.minRetweets = r.minRetweets, this.optionalWords = r.optionalWords, this.startDate = r.startDate, this.toUsers = r.toUsers, this.top = r.top, this.includeWords = r.includeWords
    }
    return e.dateToTwitterString = function (r) {
      var i = new Date(Date.UTC(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate(), r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds()));
      return i.toISOString().replace(/T/, "_").replace(/\..+/, "") + "_UTC"
    }, e.prototype.toString = function () {
      return [this.includeWords ? this.includeWords.join(" ") : "", this.includePhrase ? '"'.concat(this.includePhrase, '"') : "", this.optionalWords ? "(".concat(this.optionalWords.join(" OR "), ")") : "", this.excludeWords ? "".concat(this.excludeWords.map(function (r) {
        return "-" + r
      }).join(" ")) : "", this.hashtags ? "(".concat(this.hashtags.map(function (r) {
        return "#" + r
      }).join(" OR "), ")") : "", this.fromUsers ? "(".concat(this.fromUsers.map(function (r) {
        return "from:".concat(r)
      }).join(" OR "), ")") : "", this.toUsers ? "(".concat(this.toUsers.map(function (r) {
        return "to:".concat(r)
      }).join(" OR "), ")") : "", this.list ? "list:".concat(this.list) : "", this.mentions ? "(".concat(this.mentions.map(function (r) {
        return "@" + r
      }).join(" OR "), ")") : "", this.minReplies ? "min_replies:".concat(this.minReplies) : "", this.minLikes ? "min_faves:".concat(this.minLikes) : "", this.minRetweets ? "min_retweets:".concat(this.minRetweets) : "", this.language ? "lang:".concat(this.language) : "", this.startDate ? "since:".concat(e.dateToTwitterString(this.startDate)) : "", this.endDate ? "until:".concat(e.dateToTwitterString(this.endDate)) : "", this.sinceId ? "since_id:".concat(this.sinceId) : "", this.maxId ? "max_id:".concat(this.maxId) : "", this.quoted ? "quoted_tweet_id:".concat(this.quoted) : ""].filter(function (r) {
        return r !== "()" && r !== ""
      }).join(" ") + (this.links == !1 ? " -filter:links" : "") + (this.replies == !1 ? " -filter:replies" : "")
    }, e
  }();
  return Nr.TweetFilter = t, Nr
}
var Ke = {},
  Uu;

function Al() {
  if (Uu) return Ke;
  Uu = 1, Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.ReplyVariable = Ke.MediaEntityVariable = Ke.MediaVariable = void 0;
  var t = function () {
    function i(a) {
      this.media_entities = a.map(function (n) {
        return new e(n)
      }), this.possibly_sensitive = !1
    }
    return i
  }();
  Ke.MediaVariable = t;
  var e = function () {
    function i(a) {
      var n;
      this.media_id = a.id, this.tagged_users = (n = a.tags) !== null && n !== void 0 ? n : []
    }
    return i
  }();
  Ke.MediaEntityVariable = e;
  var r = function () {
    function i(a) {
      this.in_reply_to_tweet_id = a, this.exclude_reply_user_ids = []
    }
    return i
  }();
  return Ke.ReplyVariable = r, Ke
}
var xu;

function S3() {
  if (xu) return ne;
  xu = 1, Object.defineProperty(ne, "__esModule", {
    value: !0
  }), ne.unschedule = ne.unretweet = ne.unpost = ne.unlike = ne.search = ne.schedule = ne.retweeters = ne.retweet = ne.replies = ne.post = ne.likers = ne.like = ne.details = void 0;
  var t = Rl(),
    e = bl(),
    r = Al();

  function i(p) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/0hWvDhmW8YQ-S_ib3azIrw/TweetResultByRestId",
      params: {
        variables: JSON.stringify({
          tweetId: p,
          referrer: "home",
          with_rux_injections: !1,
          includePromotedContent: !1,
          withCommunity: !1,
          withQuickPromoteEligibilityTweetFields: !1,
          withBirdwatchNotes: !1,
          withVoice: !1,
          withV2Timeline: !1
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  ne.details = i;

  function a(p) {
    return {
      method: "post",
      url: "https://x.com/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet",
      data: {
        variables: {
          tweet_id: p
        }
      }
    }
  }
  ne.like = a;

  function n(p, E, g) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/9XKD3EWWC2BKpIFyDj4KKQ/Favoriters",
      params: {
        variables: JSON.stringify({
          tweetId: p,
          count: E,
          cursor: g,
          includePromotedContent: !1
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  ne.likers = n;

  function d(p) {
    return {
      method: "post",
      url: "https://x.com/i/api/graphql/bDE2rBtZb3uyrczSZ_pI9g/CreateTweet",
      data: {
        variables: {
          tweet_text: p.text,
          dark_request: !1,
          attachment_url: p.quote ? "https://x.com/i/status/".concat(p.quote) : void 0,
          media: p.media ? new r.MediaVariable(p.media) : void 0,
          reply: p.replyTo ? new r.ReplyVariable(p.replyTo) : void 0,
          semantic_annotation_ids: []
        },
        features: {
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_enhance_cards_enabled: !1,
          rweb_video_timestamps_enabled: !0,
          c9s_tweet_anatomy_moderator_badge_enabled: !0
        }
      }
    }
  }
  ne.post = d;

  function s(p, E, g) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/B9_KmbkLhXt6jRwGjJrweg/TweetDetail",
      params: {
        variables: JSON.stringify({
          focalTweetId: p,
          cursor: E,
          referrer: "tweet",
          controller_data: g,
          with_rux_injections: !1,
          includePromotedContent: !1,
          withCommunity: !0,
          withQuickPromoteEligibilityTweetFields: !0,
          withBirdwatchNotes: !0,
          withVoice: !0,
          withV2Timeline: !0
        }),
        features: JSON.stringify({
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          c9s_tweet_anatomy_moderator_badge_enabled: !0,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !0,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          rweb_video_timestamps_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  ne.replies = s;

  function u(p) {
    return {
      method: "post",
      url: "https://x.com/i/api/graphql/ojPdsZsimiJrUGLR1sjUtA/CreateRetweet",
      data: {
        variables: {
          tweet_id: p,
          dark_request: !1
        }
      }
    }
  }
  ne.retweet = u;

  function l(p, E, g) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/v5h-KLmyl-wqZ8i-a_q73w/Retweeters",
      params: {
        variables: JSON.stringify({
          tweetId: p,
          count: E,
          cursor: g,
          includePromotedContent: !1
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  ne.retweeters = l;

  function f(p, E) {
    var g, S;
    return {
      method: "post",
      maxBodyLength: 1 / 0,
      url: "https://x.com/i/api/graphql/LCVzRQGxOaGnOnYH01NQXg/CreateScheduledTweet",
      data: {
        variables: {
          post_tweet_request: {
            auto_populate_reply_metadata: !1,
            status: p.text,
            exclude_reply_user_ids: [],
            media_ids: (S = (g = p.media) === null || g === void 0 ? void 0 : g.map(function (m) {
              return m.id
            })) !== null && S !== void 0 ? S : []
          },
          execute_at: Math.floor(E.getTime() / 1e3)
        }
      }
    }
  }
  ne.schedule = f;

  function o(p, E, g) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/nK1dw4oV3k4w5TdtcAdSww/SearchTimeline",
      params: {
        variables: JSON.stringify({
          rawQuery: new e.TweetFilter(p).toString(),
          count: E,
          cursor: g,
          querySource: "typed_query",
          product: p.top ? t.ESearchResultType.TOP : t.ESearchResultType.LATEST
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  ne.search = o;

  function c(p) {
    return {
      method: "post",
      url: "https://x.com/i/api/graphql/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet",
      data: {
        variables: {
          tweet_id: p
        }
      }
    }
  }
  ne.unlike = c;

  function _(p) {
    return {
      method: "post",
      url: "https://x.com/i/api/graphql/VaenaVgh5q5ih7kvyVjgtg/DeleteTweet",
      data: {
        variables: {
          tweet_id: p
        }
      }
    }
  }
  ne.unpost = _;

  function h(p) {
    return {
      method: "post",
      url: "https://x.com/i/api/graphql/iQtK4dl5hBmXewYZuEOKVw/DeleteRetweet",
      data: {
        variables: {
          source_tweet_id: p
        }
      }
    }
  }
  ne.unretweet = h;

  function v(p) {
    return {
      method: "post",
      url: "https://x.com/i/api/graphql/CTOVqej0JBXAZSwkp1US0g/DeleteScheduledTweet",
      data: {
        variables: {
          scheduled_tweet_id: p
        },
        queryId: "CTOVqej0JBXAZSwkp1US0g"
      }
    }
  }
  return ne.unschedule = v, ne
}
var te = {},
  Fu;

function R3() {
  if (Fu) return te;
  Fu = 1;
  var t = te.__importDefault || function (m) {
    return m && m.__esModule ? m : {
      default: m
    }
  };
  Object.defineProperty(te, "__esModule", {
    value: !0
  }), te.unfollow = te.tweetsAndReplies = te.tweets = te.subscriptions = te.scheduled = te.recommended = te.notifications = te.media = te.likes = te.highlights = te.following = te.followers = te.followed = te.follow = te.detailsByUsername = te.detailsById = te.bookmarks = te.analytics = void 0;
  var e = t(Ie);

  function r(m, I, O, N) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/NlJ6RM-hgHxt-iu9cPQz7A/overviewDataUserQuery",
      params: {
        from_time: m,
        to_time: I,
        granularity: O,
        requested_metrics: N
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.analytics = r;

  function i(m, I) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/qToeLeMs43Q8cr7tRYXmaQ/Bookmarks",
      params: {
        variables: JSON.stringify({
          count: m,
          cursor: I,
          includePromotedContent: !1
        }),
        features: JSON.stringify({
          graphql_timeline_v2_bookmark_timeline: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          c9s_tweet_anatomy_moderator_badge_enabled: !0,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !0,
          tweet_awards_web_tipping_enabled: !1,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          rweb_video_timestamps_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.bookmarks = i;

  function a(m) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/i_0UQ54YrCyqLUvgGzXygA/UserByRestId",
      params: {
        variables: JSON.stringify({
          userId: m,
          withSafetyModeUserFields: !0
        }),
        features: JSON.stringify({
          hidden_profile_likes_enabled: !1,
          hidden_profile_subscriptions_enabled: !1,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          subscriptions_verification_info_verified_since_enabled: !0,
          highlights_tweets_tab_ui_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          responsive_web_graphql_timeline_navigation_enabled: !0
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.detailsById = a;

  function n(m) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/oUZZZ8Oddwxs8Cd3iW3UEA/UserByScreenName",
      params: {
        variables: JSON.stringify({
          screen_name: m,
          withSafetyModeUserFields: !0
        }),
        features: JSON.stringify({
          hidden_profile_likes_enabled: !1,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          subscriptions_verification_info_verified_since_enabled: !0,
          highlights_tweets_tab_ui_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          responsive_web_graphql_timeline_navigation_enabled: !0
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.detailsByUsername = n;

  function d(m) {
    return {
      method: "post",
      url: "https://x.com/i/api/1.1/friendships/create.json",
      data: e.default.stringify({
        user_id: m
      })
    }
  }
  te.follow = d;

  function s(m, I) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/9EwYy8pLBOSFlEoSP2STiQ/HomeLatestTimeline",
      params: {
        variables: JSON.stringify({
          count: m,
          cursor: I,
          includePromotedContent: !1,
          latestControlAvailable: !0,
          withCommunity: !1
        }),
        features: JSON.stringify({
          rweb_tipjar_consumption_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          communities_web_enable_tweet_community_results_fetch: !0,
          c9s_tweet_anatomy_moderator_badge_enabled: !0,
          articles_preview_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !0,
          tweet_awards_web_tipping_enabled: !1,
          creator_subscriptions_quote_tweet_preview_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          tweet_with_visibility_results_prefer_gql_media_interstitial_enabled: !1,
          rweb_video_timestamps_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.followed = s;

  function u(m, I, O) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/6y5TB_HrwQM0FBGDiNfoEA/Followers",
      params: {
        variables: JSON.stringify({
          userId: m,
          count: I,
          cursor: O,
          includePromotedContent: !1
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.followers = u;

  function l(m, I, O) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/V8zHw0SZijWORSsb-FNrng/Following",
      params: {
        variables: JSON.stringify({
          userId: m,
          count: I,
          cursor: O,
          includePromotedContent: !1
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.following = l;

  function f(m, I, O) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/Tqc024xHjye_svtpHJ236Q/UserHighlightsTweets",
      params: {
        variables: JSON.stringify({
          userId: m,
          count: I,
          cursor: O,
          includePromotedContent: !1,
          withVoice: !1
        }),
        features: JSON.stringify({
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          c9s_tweet_anatomy_moderator_badge_enabled: !0,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !0,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          rweb_video_timestamps_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.highlights = f;

  function o(m, I, O) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/kgZtsNyE46T3JaEf2nF9vw/Likes",
      params: {
        variables: JSON.stringify({
          userId: m,
          count: I,
          cursor: O,
          includePromotedContent: !1,
          withClientEventToken: !1,
          withBirdwatchNotes: !1,
          withVoice: !1,
          withV2Timeline: !1
        }),
        features: JSON.stringify({
          rweb_lists_timeline_redesign_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.likes = o;

  function c(m, I, O) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/EnIWTNQ8Tum-7t1NnZHOEQ/UserMedia",
      params: {
        variables: JSON.stringify({
          userId: m,
          count: I,
          cursor: O,
          includePromotedContent: !1,
          withClientEventToken: !1,
          withBirdwatchNotes: !1,
          withVoice: !1,
          withV2Timeline: !1
        }),
        features: JSON.stringify({
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          c9s_tweet_anatomy_moderator_badge_enabled: !0,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !0,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          rweb_video_timestamps_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.media = c;

  function _(m, I) {
    return {
      method: "get",
      url: "https://x.com/i/api/2/notifications/all.json",
      params: {
        include_profile_interstitial_type: 1,
        include_blocking: 1,
        include_blocked_by: 1,
        include_followed_by: 1,
        include_want_retweets: 1,
        include_mute_edge: 1,
        include_can_dm: 1,
        include_can_media_tag: 1,
        include_ext_is_blue_verified: 1,
        include_ext_verified_type: 1,
        include_ext_profile_image_shape: 1,
        skip_status: 1,
        cards_platform: "Web-12",
        include_cards: 1,
        include_ext_alt_text: !0,
        include_ext_limited_action_results: !0,
        include_quote_count: !0,
        include_reply_count: 1,
        tweet_mode: "extended",
        include_ext_views: !0,
        include_entities: !0,
        include_user_entities: !0,
        include_ext_media_color: !0,
        include_ext_media_availability: !0,
        include_ext_sensitive_media_warning: !0,
        include_ext_trusted_friends_metadata: !0,
        send_error_codes: !0,
        simple_quoted_tweet: !0,
        count: m,
        cursor: I,
        ext: "mediaStats%2ChighlightedLabel%2CvoiceInfo%2CbirdwatchPivot%2CsuperFollowMetadata%2CunmentionInfo%2CeditControl%2Carticle"
      }
    }
  }
  te.notifications = _;

  function h(m, I) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/q1x0puFIVMzsbx2Yoh-usA/HomeTimeline",
      params: {
        variables: JSON.stringify({
          count: m,
          cursor: I,
          includePromotedContent: !1,
          latestControlAvailable: !0,
          withCommunity: !1,
          seenTweetIds: []
        }),
        features: JSON.stringify({
          rweb_tipjar_consumption_enabled: !0,
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          communities_web_enable_tweet_community_results_fetch: !0,
          c9s_tweet_anatomy_moderator_badge_enabled: !0,
          articles_preview_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !0,
          tweet_awards_web_tipping_enabled: !1,
          creator_subscriptions_quote_tweet_preview_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          tweet_with_visibility_results_prefer_gql_media_interstitial_enabled: !1,
          rweb_video_timestamps_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.recommended = h;

  function v() {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/ITtjAzvlZni2wWXwf295Qg/FetchScheduledTweets?variables=%7B%22ascending%22%3Atrue%7D",
      params: {
        variables: JSON.stringify({
          ascending: !0
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.scheduled = v;

  function p(m, I, O) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/UWlxAhUnBNK0BYmeqNPqAw/UserCreatorSubscriptions",
      params: {
        variables: JSON.stringify({
          userId: m,
          count: I,
          cursor: O,
          includePromotedContent: !1
        }),
        features: JSON.stringify({
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          c9s_tweet_anatomy_moderator_badge_enabled: !0,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !0,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          rweb_video_timestamps_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.subscriptions = p;

  function E(m, I, O) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/9bXBrlmUXOHFZEq0DuvYWA/UserTweets",
      params: {
        variables: JSON.stringify({
          userId: m,
          count: I,
          cursor: O,
          includePromotedContent: !1,
          withQuickPromoteEligibilityTweetFields: !1,
          withVoice: !1,
          withV2Timeline: !1
        }),
        features: JSON.stringify({
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          responsive_web_home_pinned_timelines_enabled: !1,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.tweets = E;

  function g(m, I, O) {
    return {
      method: "get",
      url: "https://x.com/i/api/graphql/JFsmXeZ0h-hs934UFSfayw/UserTweetsAndReplies",
      params: {
        variables: JSON.stringify({
          userId: m,
          count: I,
          cursor: O,
          includePromotedContent: !1,
          withCommunity: !1,
          withVoice: !1,
          withV2Timeline: !1
        }),
        features: JSON.stringify({
          responsive_web_graphql_exclude_directive_enabled: !0,
          verified_phone_label_enabled: !0,
          responsive_web_home_pinned_timelines_enabled: !0,
          creator_subscriptions_tweet_preview_api_enabled: !0,
          responsive_web_graphql_timeline_navigation_enabled: !0,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: !1,
          tweetypie_unmention_optimization_enabled: !0,
          responsive_web_edit_tweet_api_enabled: !0,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: !0,
          view_counts_everywhere_api_enabled: !0,
          longform_notetweets_consumption_enabled: !0,
          responsive_web_twitter_article_tweet_consumption_enabled: !1,
          tweet_awards_web_tipping_enabled: !1,
          freedom_of_speech_not_reach_fetch_enabled: !0,
          standardized_nudges_misinfo: !0,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: !0,
          longform_notetweets_rich_text_read_enabled: !0,
          longform_notetweets_inline_media_enabled: !0,
          responsive_web_media_download_video_enabled: !1,
          responsive_web_enhance_cards_enabled: !1
        })
      },
      paramsSerializer: {
        encode: encodeURIComponent
      }
    }
  }
  te.tweetsAndReplies = g;

  function S(m) {
    return {
      method: "post",
      url: "https://x.com/i/api/1.1/friendships/destroy.json",
      data: e.default.stringify({
        user_id: m
      })
    }
  }
  return te.unfollow = S, te
}
var Bu;

function b3() {
  if (Bu) return at;
  Bu = 1;
  var t = at.__createBinding || (Object.create ? function (u, l, f, o) {
      o === void 0 && (o = f);
      var c = Object.getOwnPropertyDescriptor(l, f);
      (!c || ("get" in c ? !l.__esModule : c.writable || c.configurable)) && (c = {
        enumerable: !0,
        get: function () {
          return l[f]
        }
      }), Object.defineProperty(u, o, c)
    } : function (u, l, f, o) {
      o === void 0 && (o = f), u[o] = l[f]
    }),
    e = at.__setModuleDefault || (Object.create ? function (u, l) {
      Object.defineProperty(u, "default", {
        enumerable: !0,
        value: l
      })
    } : function (u, l) {
      u.default = l
    }),
    r = at.__importStar || function (u) {
      if (u && u.__esModule) return u;
      var l = {};
      if (u != null)
        for (var f in u) f !== "default" && Object.prototype.hasOwnProperty.call(u, f) && t(l, u, f);
      return e(l, u), l
    };
  Object.defineProperty(at, "__esModule", {
    value: !0
  }), at.Request = void 0;
  var i = r(m3()),
    a = r(T3()),
    n = r(S3()),
    d = r(R3()),
    s = function () {
      function u() {
        this.list = i, this.media = a, this.tweet = n, this.user = d
      }
      return u
    }();
  return at.Request = s, at
}
var Ua = {},
  qu;

function A3() {
  return qu || (qu = 1, function (t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EMetric = t.EGranularity = void 0,
      function (e) {
        e.DAILY = "Daily", e.WEEKLY = "Weekly", e.MONTHLY = "Monthly"
      }(t.EGranularity || (t.EGranularity = {})),
      function (e) {
        e.ENGAGEMENTS = "Engagements", e.IMPRESSIONS = "Impressions", e.PROFILE_VISITS = "ProfileVisits", e.FOLLOWS = "Follows", e.VIDEO_VIEWS = "VideoViews", e.REPLIES = "Replies", e.LIKES = "Likes", e.RETWEETS = "Retweets", e.MEDIA_VIEWS = "MediaViews", e.BOOKMARK = "Bookmark", e.SHARE = "Share"
      }(t.EMetric || (t.EMetric = {}))
  }(Ua)), Ua
}
var xa = {},
  ku;

function w3() {
  return ku || (ku = 1, function (t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EMediaType = void 0,
      function (e) {
        e.PHOTO = "photo", e.VIDEO = "video", e.GIF = "animated_gif"
      }(t.EMediaType || (t.EMediaType = {}))
  }(xa)), xa
}
var Fa = {},
  Wu;

function O3() {
  return Wu || (Wu = 1, function (t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ENotificationType = void 0,
      function (e) {
        e.RECOMMENDATION = "recommendation_icon", e.INFORMATION = "bird_icon", e.LIVE = "live_icon", e.ALERT = "bell_icon"
      }(t.ENotificationType || (t.ENotificationType = {}))
  }(Fa)), Fa
}
var vt = {},
  Gu;

function N3() {
  if (Gu) return vt;
  Gu = 1, Object.defineProperty(vt, "__esModule", {
    value: !0
  }), vt.NewTweetMedia = vt.NewTweet = void 0;
  var t = function () {
    function r() {
      this.text = ""
    }
    return r
  }();
  vt.NewTweet = t;
  var e = function () {
    function r() {
      this.id = ""
    }
    return r
  }();
  return vt.NewTweetMedia = e, vt
}
var Ba = {},
  Hu;

function C3() {
  return Hu || (Hu = 1, Object.defineProperty(Ba, "__esModule", {
    value: !0
  })), Ba
}
var qa = {},
  Vu;

function L3() {
  return Vu || (Vu = 1, Object.defineProperty(qa, "__esModule", {
    value: !0
  })), qa
}
var ka = {},
  Zu;

function M3() {
  return Zu || (Zu = 1, Object.defineProperty(ka, "__esModule", {
    value: !0
  })), ka
}
var Wa = {},
  Ku;

function D3() {
  return Ku || (Ku = 1, Object.defineProperty(Wa, "__esModule", {
    value: !0
  })), Wa
}
var Ga = {},
  ju;

function P3() {
  return ju || (ju = 1, Object.defineProperty(Ga, "__esModule", {
    value: !0
  })), Ga
}
var Ha = {},
  Yu;

function U3() {
  return Yu || (Yu = 1, Object.defineProperty(Ha, "__esModule", {
    value: !0
  })), Ha
}
var Va = {},
  zu;

function x3() {
  return zu || (zu = 1, Object.defineProperty(Va, "__esModule", {
    value: !0
  })), Va
}
var Za = {},
  Ju;

function F3() {
  return Ju || (Ju = 1, Object.defineProperty(Za, "__esModule", {
    value: !0
  })), Za
}
var Ka = {},
  Xu;

function B3() {
  return Xu || (Xu = 1, Object.defineProperty(Ka, "__esModule", {
    value: !0
  })), Ka
}
var ja = {},
  Qu;

function q3() {
  return Qu || (Qu = 1, Object.defineProperty(ja, "__esModule", {
    value: !0
  })), ja
}
var Ya = {},
  es;

function k3() {
  return es || (es = 1, Object.defineProperty(Ya, "__esModule", {
    value: !0
  })), Ya
}
var za = {},
  ts;

function W3() {
  return ts || (ts = 1, Object.defineProperty(za, "__esModule", {
    value: !0
  })), za
}
var Ja = {},
  rs;

function G3() {
  return rs || (rs = 1, Object.defineProperty(Ja, "__esModule", {
    value: !0
  })), Ja
}
var Xa = {},
  ns;

function H3() {
  return ns || (ns = 1, Object.defineProperty(Xa, "__esModule", {
    value: !0
  })), Xa
}
var is;

function Wr() {
  return is || (is = 1, function (t) {
    var e = Or.__createBinding || (Object.create ? function (i, a, n, d) {
        d === void 0 && (d = n);
        var s = Object.getOwnPropertyDescriptor(a, n);
        (!s || ("get" in s ? !a.__esModule : s.writable || s.configurable)) && (s = {
          enumerable: !0,
          get: function () {
            return a[n]
          }
        }), Object.defineProperty(i, d, s)
      } : function (i, a, n, d) {
        d === void 0 && (d = n), i[d] = a[n]
      }),
      r = Or.__exportStar || function (i, a) {
        for (var n in i) n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && e(a, i, n)
      };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r(b3(), t), r(A3(), t), r(w3(), t), r(O3(), t), r(Rl(), t), r(N3(), t), r(bl(), t), r(Al(), t), r(C3(), t), r(L3(), t), r(M3(), t), r(D3(), t), r(P3(), t), r(U3(), t), r(x3(), t), r(F3(), t), r(B3(), t), r(q3(), t), r(k3(), t), r(W3(), t), r(G3(), t), r(H3(), t)
  }(Or)), Or
}
var as;

function V3() {
  if (as) return wr;
  as = 1, Object.defineProperty(wr, "__esModule", {
    value: !0
  }), wr.requests = void 0;
  var t = Wr(),
    e = new t.Request;
  return wr.requests = {
    LIST_MEMBERS: function (r) {
      return e.list.members(r.id, r.count, r.cursor)
    },
    LIST_TWEETS: function (r) {
      return e.list.tweets(r.id, r.count, r.cursor)
    },
    MEDIA_UPLOAD_APPEND: function (r) {
      return e.media.appendUpload(r.upload.id, r.upload.media)
    },
    MEDIA_UPLOAD_FINALIZE: function (r) {
      return e.media.finalizeUpload(r.upload.id)
    },
    MEDIA_UPLOAD_INITIALIZE: function (r) {
      return e.media.initializeUpload(r.upload.size)
    },
    TWEET_DETAILS: function (r) {
      return e.tweet.details(r.id)
    },
    TWEET_DETAILS_ALT: function (r) {
      return e.tweet.replies(r.id)
    },
    TWEET_LIKE: function (r) {
      return e.tweet.like(r.id)
    },
    TWEET_POST: function (r) {
      return e.tweet.post(r.tweet)
    },
    TWEET_RETWEET: function (r) {
      return e.tweet.retweet(r.id)
    },
    TWEET_RETWEETERS: function (r) {
      return e.tweet.retweeters(r.id, r.count, r.cursor)
    },
    TWEET_SCHEDULE: function (r) {
      return e.tweet.schedule(r.tweet, r.tweet.scheduleFor)
    },
    TWEET_SEARCH: function (r) {
      return e.tweet.search(r.filter, r.count, r.cursor)
    },
    TWEET_UNLIKE: function (r) {
      return e.tweet.unlike(r.id)
    },
    TWEET_UNPOST: function (r) {
      return e.tweet.unpost(r.id)
    },
    TWEET_UNRETWEET: function (r) {
      return e.tweet.unretweet(r.id)
    },
    TWEET_UNSCHEDULE: function (r) {
      return e.tweet.unschedule(r.id)
    },
    USER_BOOKMARKS: function (r) {
      return e.user.bookmarks(r.count, r.cursor)
    },
    USER_DETAILS_BY_USERNAME: function (r) {
      return e.user.detailsByUsername(r.id)
    },
    USER_DETAILS_BY_ID: function (r) {
      return e.user.detailsById(r.id)
    },
    USER_FEED_FOLLOWED: function (r) {
      return e.user.followed(r.count, r.cursor)
    },
    USER_FEED_RECOMMENDED: function (r) {
      return e.user.recommended(r.count, r.cursor)
    },
    USER_FOLLOW: function (r) {
      return e.user.follow(r.id)
    },
    USER_FOLLOWING: function (r) {
      return e.user.following(r.id, r.count, r.cursor)
    },
    USER_FOLLOWERS: function (r) {
      return e.user.followers(r.id, r.count, r.cursor)
    },
    USER_HIGHLIGHTS: function (r) {
      return e.user.highlights(r.id, r.count, r.cursor)
    },
    USER_LIKES: function (r) {
      return e.user.likes(r.id, r.count, r.cursor)
    },
    USER_MEDIA: function (r) {
      return e.user.media(r.id, r.count, r.cursor)
    },
    USER_NOTIFICATIONS: function (r) {
      return e.user.notifications(r.count, r.cursor)
    },
    USER_SUBSCRIPTIONS: function (r) {
      return e.user.subscriptions(r.id, r.count, r.cursor)
    },
    USER_TIMELINE: function (r) {
      return e.user.tweets(r.id, r.count, r.cursor)
    },
    USER_TIMELINE_AND_REPLIES: function (r) {
      return e.user.tweetsAndReplies(r.id, r.count, r.cursor)
    },
    USER_UNFOLLOW: function (r) {
      return e.user.unfollow(r.id)
    }
  }, wr
}
var Cr = {},
  ds;

function ji() {
  if (ds) return Cr;
  ds = 1, Object.defineProperty(Cr, "__esModule", {
    value: !0
  }), Cr.ELogActions = void 0;
  var t;
  return function (e) {
    e.AUTHORIZATION = "AUTHORIZATION", e.DESERIALIZE = "DESERIALIZE", e.EXTRACT = "EXTRACT", e.GET = "GET", e.REQUEST = "REQUEST", e.VALIDATE = "VALIDATE", e.WARNING = "WARNING"
  }(t || (Cr.ELogActions = t = {})), Cr
}
var Ue = {},
  st = function () {
    function t(e) {
      this.groups = [], this.each = !1, this.context = void 0, this.type = e.type, this.name = e.name, this.target = e.target, this.propertyName = e.propertyName, this.constraints = e == null ? void 0 : e.constraints, this.constraintCls = e.constraintCls, this.validationTypeOptions = e.validationTypeOptions, e.validationOptions && (this.message = e.validationOptions.message, this.groups = e.validationOptions.groups, this.always = e.validationOptions.always, this.each = e.validationOptions.each, this.context = e.validationOptions.context)
    }
    return t
  }(),
  Z3 = function () {
    function t() {}
    return t.prototype.transform = function (e) {
      var r = [];
      return Object.keys(e.properties).forEach(function (i) {
        e.properties[i].forEach(function (a) {
          var n = {
              message: a.message,
              groups: a.groups,
              always: a.always,
              each: a.each
            },
            d = {
              type: a.type,
              name: a.name,
              target: e.name,
              propertyName: i,
              constraints: a.constraints,
              validationTypeOptions: a.options,
              validationOptions: n
            };
          r.push(new st(d))
        })
      }), r
    }, t
  }();

function K3(t) {
  return t instanceof Map ? Array.from(t.values()) : Array.isArray(t) ? t : Array.from(t)
}

function j3() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof global < "u") return global;
  if (typeof window < "u") return window;
  if (typeof self < "u") return self
}

function Qa(t) {
  return t !== null && typeof t == "object" && typeof t.then == "function"
}
var Y3 = function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator,
      r = e && t[e],
      i = 0;
    if (r) return r.call(t);
    if (t && typeof t.length == "number") return {
      next: function () {
        return t && i >= t.length && (t = void 0), {
          value: t && t[i++],
          done: !t
        }
      }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  },
  us = function (t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) return t;
    var i = r.call(t),
      a, n = [],
      d;
    try {
      for (;
        (e === void 0 || e-- > 0) && !(a = i.next()).done;) n.push(a.value)
    } catch (s) {
      d = {
        error: s
      }
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i)
      } finally {
        if (d) throw d.error
      }
    }
    return n
  },
  z3 = function (t, e, r) {
    if (r || arguments.length === 2)
      for (var i = 0, a = e.length, n; i < a; i++)(n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
    return t.concat(n || Array.prototype.slice.call(e))
  },
  Rd = function () {
    function t() {
      this.validationMetadatas = new Map, this.constraintMetadatas = new Map
    }
    return Object.defineProperty(t.prototype, "hasValidationMetaData", {
      get: function () {
        return !!this.validationMetadatas.size
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.addValidationSchema = function (e) {
      var r = this,
        i = new Z3().transform(e);
      i.forEach(function (a) {
        return r.addValidationMetadata(a)
      })
    }, t.prototype.addValidationMetadata = function (e) {
      var r = this.validationMetadatas.get(e.target);
      r ? r.push(e) : this.validationMetadatas.set(e.target, [e])
    }, t.prototype.addConstraintMetadata = function (e) {
      var r = this.constraintMetadatas.get(e.target);
      r ? r.push(e) : this.constraintMetadatas.set(e.target, [e])
    }, t.prototype.groupByPropertyName = function (e) {
      var r = {};
      return e.forEach(function (i) {
        r[i.propertyName] || (r[i.propertyName] = []), r[i.propertyName].push(i)
      }), r
    }, t.prototype.getTargetValidationMetadatas = function (e, r, i, a, n) {
      var d, s, u = function (m) {
          return typeof m.always < "u" ? m.always : m.groups && m.groups.length ? !1 : i
        },
        l = function (m) {
          return !!(a && (!n || !n.length) && m.groups && m.groups.length)
        },
        f = this.validationMetadatas.get(e) || [],
        o = f.filter(function (m) {
          return m.target !== e && m.target !== r ? !1 : u(m) ? !0 : l(m) ? !1 : n && n.length > 0 ? m.groups && !!m.groups.find(function (I) {
            return n.indexOf(I) !== -1
          }) : !0
        }),
        c = [];
      try {
        for (var _ = Y3(this.validationMetadatas.entries()), h = _.next(); !h.done; h = _.next()) {
          var v = us(h.value, 2),
            p = v[0],
            E = v[1];
          e.prototype instanceof p && c.push.apply(c, z3([], us(E), !1))
        }
      } catch (m) {
        d = {
          error: m
        }
      } finally {
        try {
          h && !h.done && (s = _.return) && s.call(_)
        } finally {
          if (d) throw d.error
        }
      }
      var g = c.filter(function (m) {
          return typeof m.target == "string" || m.target === e || m.target instanceof Function && !(e.prototype instanceof m.target) ? !1 : u(m) ? !0 : l(m) ? !1 : n && n.length > 0 ? m.groups && !!m.groups.find(function (I) {
            return n.indexOf(I) !== -1
          }) : !0
        }),
        S = g.filter(function (m) {
          return !o.find(function (I) {
            return I.propertyName === m.propertyName && I.type === m.type
          })
        });
      return o.concat(S)
    }, t.prototype.getTargetValidatorConstraints = function (e) {
      return this.constraintMetadatas.get(e) || []
    }, t
  }();

function Oe() {
  var t = j3();
  return t.classValidatorMetadataStorage || (t.classValidatorMetadataStorage = new Rd), t.classValidatorMetadataStorage
}
var fd = function () {
    function t() {}
    return t.prototype.toString = function (e, r, i, a) {
      var n = this;
      e === void 0 && (e = !1), r === void 0 && (r = !1), i === void 0 && (i = ""), a === void 0 && (a = !1);
      var d = e ? "\x1B[1m" : "",
        s = e ? "\x1B[22m" : "",
        u = function () {
          var o;
          return (a ? Object.values : Object.keys)((o = n.constraints) !== null && o !== void 0 ? o : {}).join(", ")
        },
        l = function (o) {
          return " - property ".concat(d).concat(i).concat(o).concat(s, " has failed the following constraints: ").concat(d).concat(u()).concat(s, ` 
`)
        };
      if (r) {
        var f = Number.isInteger(+this.property) ? "[".concat(this.property, "]") : "".concat(i ? "." : "").concat(this.property);
        return this.constraints ? l(f) : this.children ? this.children.map(function (o) {
          return o.toString(e, !0, "".concat(i).concat(f), a)
        }).join("") : ""
      } else return "An instance of ".concat(d).concat(this.target ? this.target.constructor.name : "an object").concat(s, ` has failed the validation:
`) + (this.constraints ? l(this.property) : "") + (this.children ? this.children.map(function (o) {
        return o.toString(e, !0, n.property, a)
      }).join("") : "")
    }, t
  }(),
  se = function () {
    function t() {}
    return t.isValid = function (e) {
      var r = this;
      return e !== "isValid" && e !== "getMessage" && Object.keys(this).map(function (i) {
        return r[i]
      }).indexOf(e) !== -1
    }, t.CUSTOM_VALIDATION = "customValidation", t.NESTED_VALIDATION = "nestedValidation", t.PROMISE_VALIDATION = "promiseValidation", t.CONDITIONAL_VALIDATION = "conditionalValidation", t.WHITELIST = "whitelistValidation", t.IS_DEFINED = "isDefined", t
  }();

function J3(t) {
  return Array.isArray(t) ? t.join(", ") : (typeof t == "symbol" && (t = t.description), "".concat(t))
}
var X3 = function () {
    function t() {}
    return t.replaceMessageSpecialTokens = function (e, r) {
      var i;
      return e instanceof Function ? i = e(r) : typeof e == "string" && (i = e), i && Array.isArray(r.constraints) && r.constraints.forEach(function (a, n) {
        i = i.replace(new RegExp("\\$constraint".concat(n + 1), "g"), J3(a))
      }), i && r.value !== void 0 && r.value !== null && ["string", "boolean", "number"].includes(typeof r.value) && (i = i.replace(/\$value/g, r.value)), i && (i = i.replace(/\$property/g, r.property)), i && (i = i.replace(/\$target/g, r.targetName)), i
    }, t
  }(),
  Lr = function (t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) return t;
    var i = r.call(t),
      a, n = [],
      d;
    try {
      for (;
        (e === void 0 || e-- > 0) && !(a = i.next()).done;) n.push(a.value)
    } catch (s) {
      d = {
        error: s
      }
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i)
      } finally {
        if (d) throw d.error
      }
    }
    return n
  },
  ss = function () {
    function t(e, r) {
      this.validator = e, this.validatorOptions = r, this.awaitingPromises = [], this.ignoreAsyncValidations = !1, this.metadataStorage = Oe()
    }
    return t.prototype.execute = function (e, r, i) {
      var a = this,
        n, d;
      !this.metadataStorage.hasValidationMetaData && ((n = this.validatorOptions) === null || n === void 0 ? void 0 : n.enableDebugMessages) === !0 && console.warn(`No validation metadata found. No validation will be  performed. There are multiple possible reasons:
  - There may be multiple class-validator versions installed. You will need to flatten your dependencies to fix the issue.
  - This validation runs before any file with validation decorator was parsed by NodeJS.`);
      var s = this.validatorOptions ? this.validatorOptions.groups : void 0,
        u = this.validatorOptions && this.validatorOptions.strictGroups || !1,
        l = this.validatorOptions && this.validatorOptions.always || !1,
        f = ((d = this.validatorOptions) === null || d === void 0 ? void 0 : d.forbidUnknownValues) === void 0 || this.validatorOptions.forbidUnknownValues !== !1,
        o = this.metadataStorage.getTargetValidationMetadatas(e.constructor, r, l, u, s),
        c = this.metadataStorage.groupByPropertyName(o);
      if (this.validatorOptions && f && !o.length) {
        var _ = new fd;
        (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.target === void 0 || this.validatorOptions.validationError.target === !0) && (_.target = e), _.value = void 0, _.property = void 0, _.children = [], _.constraints = {
          unknownValue: "an unknown value was passed to the validate function"
        }, i.push(_);
        return
      }
      this.validatorOptions && this.validatorOptions.whitelist && this.whitelist(e, c, i), Object.keys(c).forEach(function (h) {
        var v = e[h],
          p = c[h].filter(function (g) {
            return g.type === se.IS_DEFINED
          }),
          E = c[h].filter(function (g) {
            return g.type !== se.IS_DEFINED && g.type !== se.WHITELIST
          });
        v instanceof Promise && E.find(function (g) {
          return g.type === se.PROMISE_VALIDATION
        }) ? a.awaitingPromises.push(v.then(function (g) {
          a.performValidations(e, g, h, p, E, i)
        })) : a.performValidations(e, v, h, p, E, i)
      })
    }, t.prototype.whitelist = function (e, r, i) {
      var a = this,
        n = [];
      Object.keys(e).forEach(function (d) {
        (!r[d] || r[d].length === 0) && n.push(d)
      }), n.length > 0 && (this.validatorOptions && this.validatorOptions.forbidNonWhitelisted ? n.forEach(function (d) {
        var s, u = a.generateValidationError(e, e[d], d);
        u.constraints = (s = {}, s[se.WHITELIST] = "property ".concat(d, " should not exist"), s), u.children = void 0, i.push(u)
      }) : n.forEach(function (d) {
        return delete e[d]
      }))
    }, t.prototype.stripEmptyErrors = function (e) {
      var r = this;
      return e.filter(function (i) {
        if (i.children && (i.children = r.stripEmptyErrors(i.children)), Object.keys(i.constraints).length === 0) {
          if (i.children.length === 0) return !1;
          delete i.constraints
        }
        return !0
      })
    }, t.prototype.performValidations = function (e, r, i, a, n, d) {
      var s = n.filter(function (c) {
          return c.type === se.CUSTOM_VALIDATION
        }),
        u = n.filter(function (c) {
          return c.type === se.NESTED_VALIDATION
        }),
        l = n.filter(function (c) {
          return c.type === se.CONDITIONAL_VALIDATION
        }),
        f = this.generateValidationError(e, r, i);
      d.push(f);
      var o = this.conditionalValidations(e, r, l);
      o && (this.customValidations(e, r, a, f), this.mapContexts(e, r, a, f), !(r === void 0 && this.validatorOptions && this.validatorOptions.skipUndefinedProperties === !0) && (r === null && this.validatorOptions && this.validatorOptions.skipNullProperties === !0 || r == null && this.validatorOptions && this.validatorOptions.skipMissingProperties === !0 || (this.customValidations(e, r, s, f), this.nestedValidations(r, u, f), this.mapContexts(e, r, n, f), this.mapContexts(e, r, s, f))))
    }, t.prototype.generateValidationError = function (e, r, i) {
      var a = new fd;
      return (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.target === void 0 || this.validatorOptions.validationError.target === !0) && (a.target = e), (!this.validatorOptions || !this.validatorOptions.validationError || this.validatorOptions.validationError.value === void 0 || this.validatorOptions.validationError.value === !0) && (a.value = r), a.property = i, a.children = [], a.constraints = {}, a
    }, t.prototype.conditionalValidations = function (e, r, i) {
      return i.map(function (a) {
        return a.constraints[0](e, r)
      }).reduce(function (a, n) {
        return a && n
      }, !0)
    }, t.prototype.customValidations = function (e, r, i, a) {
      var n = this;
      i.forEach(function (d) {
        n.metadataStorage.getTargetValidatorConstraints(d.constraintCls).forEach(function (s) {
          if (!(s.async && n.ignoreAsyncValidations) && !(n.validatorOptions && n.validatorOptions.stopAtFirstError && Object.keys(a.constraints || {}).length > 0)) {
            var u = {
              targetName: e.constructor ? e.constructor.name : void 0,
              property: d.propertyName,
              object: e,
              value: r,
              constraints: d.constraints
            };
            if (!d.each || !(Array.isArray(r) || r instanceof Set || r instanceof Map)) {
              var l = s.instance.validate(r, u);
              if (Qa(l)) {
                var f = l.then(function (I) {
                  if (!I) {
                    var O = Lr(n.createValidationError(e, r, d, s), 2),
                      N = O[0],
                      P = O[1];
                    a.constraints[N] = P, d.context && (a.contexts || (a.contexts = {}), a.contexts[N] = Object.assign(a.contexts[N] || {}, d.context))
                  }
                });
                n.awaitingPromises.push(f)
              } else if (!l) {
                var o = Lr(n.createValidationError(e, r, d, s), 2),
                  c = o[0],
                  _ = o[1];
                a.constraints[c] = _
              }
              return
            }
            var h = K3(r),
              v = h.map(function (I) {
                return s.instance.validate(I, u)
              }),
              p = v.some(function (I) {
                return Qa(I)
              });
            if (p) {
              var E = v.map(function (I) {
                  return Qa(I) ? I : Promise.resolve(I)
                }),
                g = Promise.all(E).then(function (I) {
                  var O = I.every(function (V) {
                    return V
                  });
                  if (!O) {
                    var N = Lr(n.createValidationError(e, r, d, s), 2),
                      P = N[0],
                      q = N[1];
                    a.constraints[P] = q, d.context && (a.contexts || (a.contexts = {}), a.contexts[P] = Object.assign(a.contexts[P] || {}, d.context))
                  }
                });
              n.awaitingPromises.push(g);
              return
            }
            var S = v.every(function (I) {
              return I
            });
            if (!S) {
              var m = Lr(n.createValidationError(e, r, d, s), 2),
                c = m[0],
                _ = m[1];
              a.constraints[c] = _
            }
          }
        })
      })
    }, t.prototype.nestedValidations = function (e, r, i) {
      var a = this;
      e !== void 0 && r.forEach(function (n) {
        if (!(n.type !== se.NESTED_VALIDATION && n.type !== se.PROMISE_VALIDATION) && !(a.validatorOptions && a.validatorOptions.stopAtFirstError && Object.keys(i.constraints || {}).length > 0))
          if (Array.isArray(e) || e instanceof Set || e instanceof Map) {
            var d = e instanceof Set ? Array.from(e) : e;
            d.forEach(function (o, c) {
              a.performValidations(e, o, c.toString(), [], r, i.children)
            })
          } else if (e instanceof Object) {
          var s = typeof n.target == "string" ? n.target : n.target.name;
          a.execute(e, s, i.children)
        } else {
          var u = Lr(a.createValidationError(n.target, e, n), 2),
            l = u[0],
            f = u[1];
          i.constraints[l] = f
        }
      })
    }, t.prototype.mapContexts = function (e, r, i, a) {
      var n = this;
      return i.forEach(function (d) {
        if (d.context) {
          var s = void 0;
          if (d.type === se.CUSTOM_VALIDATION) {
            var u = n.metadataStorage.getTargetValidatorConstraints(d.constraintCls);
            s = u[0]
          }
          var l = n.getConstraintType(d, s);
          a.constraints[l] && (a.contexts || (a.contexts = {}), a.contexts[l] = Object.assign(a.contexts[l] || {}, d.context))
        }
      })
    }, t.prototype.createValidationError = function (e, r, i, a) {
      var n = e.constructor ? e.constructor.name : void 0,
        d = this.getConstraintType(i, a),
        s = {
          targetName: n,
          property: i.propertyName,
          object: e,
          value: r,
          constraints: i.constraints
        },
        u = i.message || "";
      !i.message && (!this.validatorOptions || this.validatorOptions && !this.validatorOptions.dismissDefaultMessages) && a && a.instance.defaultMessage instanceof Function && (u = a.instance.defaultMessage(s));
      var l = X3.replaceMessageSpecialTokens(u, s);
      return [d, l]
    }, t.prototype.getConstraintType = function (e, r) {
      var i = r && r.name ? r.name : e.type;
      return i
    }, t
  }(),
  Q3 = function (t, e, r, i) {
    function a(n) {
      return n instanceof r ? n : new r(function (d) {
        d(n)
      })
    }
    return new(r || (r = Promise))(function (n, d) {
      function s(f) {
        try {
          l(i.next(f))
        } catch (o) {
          d(o)
        }
      }

      function u(f) {
        try {
          l(i.throw(f))
        } catch (o) {
          d(o)
        }
      }

      function l(f) {
        f.done ? n(f.value) : a(f.value).then(s, u)
      }
      l((i = i.apply(t, e || [])).next())
    })
  },
  e4 = function (t, e) {
    var r = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1]
        },
        trys: [],
        ops: []
      },
      i, a, n, d;
    return d = {
      next: s(0),
      throw: s(1),
      return: s(2)
    }, typeof Symbol == "function" && (d[Symbol.iterator] = function () {
      return this
    }), d;

    function s(l) {
      return function (f) {
        return u([l, f])
      }
    }

    function u(l) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; d && (d = 0, l[0] && (r = 0)), r;) try {
        if (i = 1, a && (n = l[0] & 2 ? a.return : l[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, l[1])).done) return n;
        switch (a = 0, n && (l = [l[0] & 2, n.value]), l[0]) {
          case 0:
          case 1:
            n = l;
            break;
          case 4:
            return r.label++, {
              value: l[1],
              done: !1
            };
          case 5:
            r.label++, a = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (n = r.trys, !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue
            }
            if (l[0] === 3 && (!n || l[1] > n[0] && l[1] < n[3])) {
              r.label = l[1];
              break
            }
            if (l[0] === 6 && r.label < n[1]) {
              r.label = n[1], n = l;
              break
            }
            if (n && r.label < n[2]) {
              r.label = n[2], r.ops.push(l);
              break
            }
            n[2] && r.ops.pop(), r.trys.pop();
            continue
        }
        l = e.call(t, r)
      } catch (f) {
        l = [6, f], a = 0
      } finally {
        i = n = 0
      }
      if (l[0] & 5) throw l[1];
      return {
        value: l[0] ? l[1] : void 0,
        done: !0
      }
    }
  },
  It = function () {
    function t() {}
    return t.prototype.validate = function (e, r, i) {
      return this.coreValidate(e, r, i)
    }, t.prototype.validateOrReject = function (e, r, i) {
      return Q3(this, void 0, void 0, function () {
        var a;
        return e4(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, this.coreValidate(e, r, i)];
            case 1:
              return a = n.sent(), a.length ? [2, Promise.reject(a)] : [2]
          }
        })
      })
    }, t.prototype.validateSync = function (e, r, i) {
      var a = typeof e == "string" ? r : e,
        n = typeof e == "string" ? i : r,
        d = typeof e == "string" ? e : void 0,
        s = new ss(this, n);
      s.ignoreAsyncValidations = !0;
      var u = [];
      return s.execute(a, d, u), s.stripEmptyErrors(u)
    }, t.prototype.coreValidate = function (e, r, i) {
      var a = typeof e == "string" ? r : e,
        n = typeof e == "string" ? i : r,
        d = typeof e == "string" ? e : void 0,
        s = new ss(this, n),
        u = [];
      return s.execute(a, d, u), Promise.all(s.awaitingPromises).then(function () {
        return s.stripEmptyErrors(u)
      })
    }, t
  }(),
  t4 = new(function () {
    function t() {
      this.instances = []
    }
    return t.prototype.get = function (e) {
      var r = this.instances.find(function (i) {
        return i.type === e
      });
      return r || (r = {
        type: e,
        object: new e
      }, this.instances.push(r)), r.object
    }, t
  }()),
  _d, Br;

function r4(t, e) {
  _d = t, Br = e
}

function Ye(t) {
  if (_d) try {
    var e = _d.get(t);
    if (e || !Br || !Br.fallback) return e
  } catch (r) {
    if (!Br || !Br.fallbackOnErrors) throw r
  }
  return t4.get(t)
}

function n4(t) {
  return function (e, r) {
    var i = {
      type: se.WHITELIST,
      target: e.constructor,
      propertyName: r,
      validationOptions: t
    };
    Oe().addValidationMetadata(new st(i))
  }
}
var wl = function () {
  function t(e, r, i) {
    i === void 0 && (i = !1), this.target = e, this.name = r, this.async = i
  }
  return Object.defineProperty(t.prototype, "instance", {
    get: function () {
      return Ye(this.target)
    },
    enumerable: !1,
    configurable: !0
  }), t
}();

function Ol(t) {
  var e;
  if (t.validator instanceof Function) {
    e = t.validator;
    var r = Ye(Rd).getTargetValidatorConstraints(t.validator);
    if (r.length > 1) throw "More than one implementation of ValidatorConstraintInterface found for validator on: ".concat(t.target.name, ":").concat(t.propertyName)
  } else {
    var i = t.validator;
    e = function () {
      function n() {}
      return n.prototype.validate = function (d, s) {
        return i.validate(d, s)
      }, n.prototype.defaultMessage = function (d) {
        return i.defaultMessage ? i.defaultMessage(d) : ""
      }, n
    }(), Oe().addConstraintMetadata(new wl(e, t.name, t.async))
  }
  var a = {
    type: t.name && se.isValid(t.name) ? t.name : se.CUSTOM_VALIDATION,
    name: t.name,
    target: t.target,
    propertyName: t.propertyName,
    validationOptions: t.options,
    constraintCls: e,
    constraints: t.constraints
  };
  Oe().addValidationMetadata(new st(a))
}

function U(t, e) {
  return function (r) {
    var i = e && e.each ? "each value in " : "";
    return t(i, r)
  }
}

function x(t, e) {
  return function (r, i) {
    Ol({
      name: t.name,
      target: r.constructor,
      propertyName: i,
      options: e,
      constraints: t.constraints,
      validator: t.validator
    })
  }
}
var Nl = se.IS_DEFINED;

function Cl(t) {
  return t != null
}

function i4(t) {
  return x({
    name: Nl,
    validator: {
      validate: function (e) {
        return Cl(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property should not be null or undefined"
      }, t)
    }
  }, t)
}

function a4(t) {
  return function (e, r) {
    var i = {
      type: se.CONDITIONAL_VALIDATION,
      target: e.constructor,
      propertyName: r,
      constraints: [function (a, n) {
        return a[r] !== null && a[r] !== void 0
      }],
      validationOptions: t
    };
    Oe().addValidationMetadata(new st(i))
  }
}

function d4(t) {
  return function (e) {
    var r = t && t.async,
      i = t && t.name ? t.name : "";
    i || (i = e.name, i || (i = i.replace(/\.?([A-Z]+)/g, function (n, d) {
      return "_" + d.toLowerCase()
    }).replace(/^_/, "")));
    var a = new wl(e, i, r);
    Oe().addConstraintMetadata(a)
  }
}

function u4(t, e, r) {
  return function (i, a) {
    var n = {
      type: se.CUSTOM_VALIDATION,
      target: i.constructor,
      propertyName: a,
      constraintCls: t,
      constraints: Array.isArray(e) ? e : void 0,
      validationOptions: Array.isArray(e) ? r : e
    };
    Oe().addValidationMetadata(new st(n))
  }
}

function s4(t, e) {
  return function (r, i) {
    var a = {
      type: se.CONDITIONAL_VALIDATION,
      target: r.constructor,
      propertyName: i,
      constraints: [t],
      validationOptions: e
    };
    Oe().addValidationMetadata(new st(a))
  }
}
var pd = function () {
  return pd = Object.assign || function (t) {
    for (var e, r = 1, i = arguments.length; r < i; r++) {
      e = arguments[r];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
    }
    return t
  }, pd.apply(this, arguments)
};

function o4(t) {
  var e = pd({}, t),
    r = e.each ? "each value in " : "";
  return e.message = e.message || r + "nested property $property must be either object or array",
    function (i, a) {
      var n = {
        type: se.NESTED_VALIDATION,
        target: i.constructor,
        propertyName: a,
        validationOptions: e
      };
      Oe().addValidationMetadata(new st(n))
    }
}

function l4(t) {
  return function (e, r) {
    var i = {
      type: se.PROMISE_VALIDATION,
      target: e.constructor,
      propertyName: r,
      validationOptions: t
    };
    Oe().addValidationMetadata(new st(i))
  }
}
var tn = {
    exports: {}
  },
  rn = {
    exports: {}
  },
  os;

function k() {
  return os || (os = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = i;

    function r(a) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (n) {
        return typeof n
      } : function (n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
      }, r(a)
    }

    function i(a) {
      var n = typeof a == "string" || a instanceof String;
      if (!n) {
        var d = r(a);
        throw a === null ? d = "null" : d === "object" && (d = a.constructor.name), new TypeError("Expected a string but received a ".concat(d))
      }
    }
    t.exports = e.default, t.exports.default = e.default
  }(rn, rn.exports)), rn.exports
}
var nn = {
    exports: {}
  },
  ls;

function Ee() {
  return ls || (ls = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = r;

    function r() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        a = arguments.length > 1 ? arguments[1] : void 0;
      for (var n in a) typeof i[n] > "u" && (i[n] = a[n]);
      return i
    }
    t.exports = e.default, t.exports.default = e.default
  }(nn, nn.exports)), nn.exports
}
var cs;

function Ll() {
  return cs || (cs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = f;
    var r = a(k()),
      i = a(Ee());

    function a(o) {
      return o && o.__esModule ? o : {
        default: o
      }
    }
    var n = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
      d = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
      s = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i,
      u = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i,
      l = {
        checkDMS: !1
      };

    function f(o, c) {
      if ((0, r.default)(o), c = (0, i.default)(c, l), !o.includes(",")) return !1;
      var _ = o.split(",");
      return _[0].startsWith("(") && !_[1].endsWith(")") || _[1].endsWith(")") && !_[0].startsWith("(") ? !1 : c.checkDMS ? s.test(_[0]) && u.test(_[1]) : n.test(_[0]) && d.test(_[1])
    }
    t.exports = e.default, t.exports.default = e.default
  }(tn, tn.exports)), tn.exports
}
var c4 = Ll();
const f4 = Z(c4);
var Ml = "isLatLong";

function Yi(t) {
  return typeof t == "string" && f4(t)
}

function _4(t) {
  return x({
    name: Ml,
    validator: {
      validate: function (e, r) {
        return Yi(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a latitude,longitude string"
      }, t)
    }
  }, t)
}
var Dl = "isLatitude";

function Pl(t) {
  return (typeof t == "number" || typeof t == "string") && Yi("".concat(t, ",0"))
}

function p4(t) {
  return x({
    name: Dl,
    validator: {
      validate: function (e, r) {
        return Pl(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a latitude string or number"
      }, t)
    }
  }, t)
}
var Ul = "isLongitude";

function xl(t) {
  return (typeof t == "number" || typeof t == "string") && Yi("0,".concat(t))
}

function h4(t) {
  return x({
    name: Ul,
    validator: {
      validate: function (e, r) {
        return xl(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a longitude string or number"
      }, t)
    }
  }, t)
}
var Fl = "equals";

function Bl(t, e) {
  return t === e
}

function v4(t, e) {
  return x({
    name: Fl,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Bl(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be equal to $constraint1"
      }, e)
    }
  }, e)
}
var ql = "notEquals";

function kl(t, e) {
  return t !== e
}

function $4(t, e) {
  return x({
    name: ql,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return kl(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property should not be equal to $constraint1"
      }, e)
    }
  }, e)
}
var Wl = "isEmpty";

function Gl(t) {
  return t === "" || t === null || t === void 0
}

function E4(t) {
  return x({
    name: Wl,
    validator: {
      validate: function (e, r) {
        return Gl(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be empty"
      }, t)
    }
  }, t)
}
var Hl = "isNotEmpty";

function Vl(t) {
  return t !== "" && t !== null && t !== void 0
}

function y4(t) {
  return x({
    name: Hl,
    validator: {
      validate: function (e, r) {
        return Vl(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property should not be empty"
      }, t)
    }
  }, t)
}
var Zl = "isIn";

function Kl(t, e) {
  return Array.isArray(e) && e.some(function (r) {
    return r === t
  })
}

function g4(t, e) {
  return x({
    name: Zl,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Kl(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be one of the following values: $constraint1"
      }, e)
    }
  }, e)
}
var jl = "isNotIn";

function Yl(t, e) {
  return !Array.isArray(e) || !e.some(function (r) {
    return r === t
  })
}

function m4(t, e) {
  return x({
    name: jl,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Yl(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property should not be one of the following values: $constraint1"
      }, e)
    }
  }, e)
}
var an = {
    exports: {}
  },
  dn = {
    exports: {}
  },
  Pt = {},
  ue = {},
  fs;

function Gr() {
  if (fs) return ue;
  fs = 1, Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.farsiLocales = ue.englishLocales = ue.dotDecimal = ue.decimal = ue.commaDecimal = ue.bengaliLocales = ue.arabicLocales = ue.alphanumeric = ue.alpha = void 0;
  for (var t = ue.alpha = {
      "en-US": /^[A-Z]+$/i,
      "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
      "bg-BG": /^[А-Я]+$/i,
      "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      "da-DK": /^[A-ZÆØÅ]+$/i,
      "de-DE": /^[A-ZÄÖÜß]+$/i,
      "el-GR": /^[Α-ώ]+$/i,
      "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
      "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
      "fi-FI": /^[A-ZÅÄÖ]+$/i,
      "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
      "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
      "nb-NO": /^[A-ZÆØÅ]+$/i,
      "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
      "nn-NO": /^[A-ZÆØÅ]+$/i,
      "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      "ru-RU": /^[А-ЯЁ]+$/i,
      "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
      "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
      "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
      "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
      "sv-SE": /^[A-ZÅÄÖ]+$/i,
      "th-TH": /^[ก-๐\s]+$/i,
      "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
      "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
      "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
      "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[א-ת]+$/,
      fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
      bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
      eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
      "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
      "si-LK": /^[\u0D80-\u0DFF]+$/
    }, e = ue.alphanumeric = {
      "en-US": /^[0-9A-Z]+$/i,
      "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
      "bg-BG": /^[0-9А-Я]+$/i,
      "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      "da-DK": /^[0-9A-ZÆØÅ]+$/i,
      "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
      "el-GR": /^[0-9Α-ω]+$/i,
      "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
      "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
      "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
      "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
      "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
      "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
      "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
      "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      "ru-RU": /^[0-9А-ЯЁ]+$/i,
      "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
      "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
      "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
      "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
      "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
      "th-TH": /^[ก-๙\s]+$/i,
      "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
      "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
      "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
      "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[0-9א-ת]+$/,
      fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
      bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
      eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
      "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
      "si-LK": /^[0-9\u0D80-\u0DFF]+$/
    }, r = ue.decimal = {
      "en-US": ".",
      ar: "٫"
    }, i = ue.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"], a, n = 0; n < i.length; n++) a = "en-".concat(i[n]), t[a] = t["en-US"], e[a] = e["en-US"], r[a] = r["en-US"];
  for (var d = ue.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"], s, u = 0; u < d.length; u++) s = "ar-".concat(d[u]), t[s] = t.ar, e[s] = e.ar, r[s] = r.ar;
  for (var l = ue.farsiLocales = ["IR", "AF"], f, o = 0; o < l.length; o++) f = "fa-".concat(l[o]), e[f] = e.fa, r[f] = r.ar;
  for (var c = ue.bengaliLocales = ["BD", "IN"], _, h = 0; h < c.length; h++) _ = "bn-".concat(c[h]), t[_] = t.bn, e[_] = e.bn, r[_] = r["en-US"];
  for (var v = ue.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"], p = ue.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"], E = 0; E < v.length; E++) r[v[E]] = r["en-US"];
  for (var g = 0; g < p.length; g++) r[p[g]] = ",";
  return t["fr-CA"] = t["fr-FR"], e["fr-CA"] = e["fr-FR"], t["pt-BR"] = t["pt-PT"], e["pt-BR"] = e["pt-PT"], r["pt-BR"] = r["pt-PT"], t["pl-Pl"] = t["pl-PL"], e["pl-Pl"] = e["pl-PL"], r["pl-Pl"] = r["pl-PL"], t["fa-AF"] = t.fa, ue
}
var _s;

function zl() {
  if (_s) return Pt;
  _s = 1, Object.defineProperty(Pt, "__esModule", {
    value: !0
  }), Pt.default = i, Pt.locales = void 0;
  var t = r(k()),
    e = Gr();

  function r(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }

  function i(a, n) {
    (0, t.default)(a), n = n || {};
    var d = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(n.locale ? e.decimal[n.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
    if (a === "" || a === "." || a === "," || a === "-" || a === "+") return !1;
    var s = parseFloat(a.replace(",", "."));
    return d.test(a) && (!n.hasOwnProperty("min") || s >= n.min) && (!n.hasOwnProperty("max") || s <= n.max) && (!n.hasOwnProperty("lt") || s < n.lt) && (!n.hasOwnProperty("gt") || s > n.gt)
  }
  return Pt.locales = Object.keys(e.decimal), Pt
}
var ps;

function Jl() {
  return ps || (ps = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(zl());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n) {
      return (0, r.default)(n) ? parseFloat(n) : NaN
    }
    t.exports = e.default, t.exports.default = e.default
  }(dn, dn.exports)), dn.exports
}
var hs;

function Xl() {
  return hs || (hs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = a(k()),
      i = a(Jl());

    function a(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }

    function n(d, s) {
      return (0, r.default)(d), (0, i.default)(d) % parseInt(s, 10) === 0
    }
    t.exports = e.default, t.exports.default = e.default
  }(an, an.exports)), an.exports
}
var I4 = Xl();
const T4 = Z(I4);
var Ql = "isDivisibleBy";

function e1(t, e) {
  return typeof t == "number" && typeof e == "number" && T4(String(t), e)
}

function S4(t, e) {
  return x({
    name: Ql,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return e1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be divisible by $constraint1"
      }, e)
    }
  }, e)
}
var t1 = "isPositive";

function r1(t) {
  return typeof t == "number" && t > 0
}

function R4(t) {
  return x({
    name: t1,
    validator: {
      validate: function (e, r) {
        return r1(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a positive number"
      }, t)
    }
  }, t)
}
var n1 = "isNegative";

function i1(t) {
  return typeof t == "number" && t < 0
}

function b4(t) {
  return x({
    name: n1,
    validator: {
      validate: function (e, r) {
        return i1(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a negative number"
      }, t)
    }
  }, t)
}
var a1 = "max";

function d1(t, e) {
  return typeof t == "number" && typeof e == "number" && t <= e
}

function A4(t, e) {
  return x({
    name: a1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return d1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must not be greater than $constraint1"
      }, e)
    }
  }, e)
}
var u1 = "min";

function s1(t, e) {
  return typeof t == "number" && typeof e == "number" && t >= e
}

function w4(t, e) {
  return x({
    name: u1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return s1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must not be less than $constraint1"
      }, e)
    }
  }, e)
}
var o1 = "minDate";

function l1(t, e) {
  return t instanceof Date && t.getTime() >= (e instanceof Date ? e : e()).getTime()
}

function O4(t, e) {
  return x({
    name: o1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return l1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return "minimal allowed date for " + r + "$property is $constraint1"
      }, e)
    }
  }, e)
}
var c1 = "maxDate";

function f1(t, e) {
  return t instanceof Date && t.getTime() <= (e instanceof Date ? e : e()).getTime()
}

function N4(t, e) {
  return x({
    name: c1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return f1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return "maximal allowed date for " + r + "$property is $constraint1"
      }, e)
    }
  }, e)
}
var un = {
    exports: {}
  },
  sn = {
    exports: {}
  },
  vs;

function _1() {
  return vs || (vs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = i;

    function r(a) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (n) {
        return typeof n
      } : function (n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
      }, r(a)
    }

    function i(a) {
      return r(a) === "object" && a !== null ? typeof a.toString == "function" ? a = a.toString() : a = "[object Object]" : (a === null || typeof a > "u" || isNaN(a) && !a.length) && (a = ""), String(a)
    }
    t.exports = e.default, t.exports.default = e.default
  }(sn, sn.exports)), sn.exports
}
var $s;

function p1() {
  return $s || ($s = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = n(k()),
      i = n(_1()),
      a = n(Ee());

    function n(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }
    var d = {
      ignoreCase: !1,
      minOccurrences: 1
    };

    function s(u, l, f) {
      return (0, r.default)(u), f = (0, a.default)(f, d), f.ignoreCase ? u.toLowerCase().split((0, i.default)(l).toLowerCase()).length > f.minOccurrences : u.split((0, i.default)(l)).length > f.minOccurrences
    }
    t.exports = e.default, t.exports.default = e.default
  }(un, un.exports)), un.exports
}
var C4 = p1();
const h1 = Z(C4);
var v1 = "contains";

function $1(t, e) {
  return typeof t == "string" && h1(t, e)
}

function L4(t, e) {
  return x({
    name: v1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return $1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must contain a $constraint1 string"
      }, e)
    }
  }, e)
}
var E1 = "notContains";

function y1(t, e) {
  return typeof t == "string" && !h1(t, e)
}

function M4(t, e) {
  return x({
    name: E1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return y1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property should not contain a $constraint1 string"
      }, e)
    }
  }, e)
}
var Ut = {},
  Es;

function g1() {
  if (Es) return Ut;
  Es = 1, Object.defineProperty(Ut, "__esModule", {
    value: !0
  }), Ut.default = i, Ut.locales = void 0;
  var t = r(k()),
    e = Gr();

  function r(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }

  function i(a) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US",
      d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (0, t.default)(a);
    var s = a,
      u = d.ignore;
    if (u)
      if (u instanceof RegExp) s = s.replace(u, "");
      else if (typeof u == "string") s = s.replace(new RegExp("[".concat(u.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else throw new Error("ignore should be instance of a String or RegExp");
    if (n in e.alpha) return e.alpha[n].test(s);
    throw new Error("Invalid locale '".concat(n, "'"))
  }
  return Ut.locales = Object.keys(e.alpha), Ut
}
var D4 = g1();
const P4 = Z(D4);
var m1 = "isAlpha";

function I1(t, e) {
  return typeof t == "string" && P4(t, e)
}

function U4(t, e) {
  return x({
    name: m1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return I1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must contain only letters (a-zA-Z)"
      }, e)
    }
  }, e)
}
var xt = {},
  ys;

function T1() {
  if (ys) return xt;
  ys = 1, Object.defineProperty(xt, "__esModule", {
    value: !0
  }), xt.default = i, xt.locales = void 0;
  var t = r(k()),
    e = Gr();

  function r(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }

  function i(a) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US",
      d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (0, t.default)(a);
    var s = a,
      u = d.ignore;
    if (u)
      if (u instanceof RegExp) s = s.replace(u, "");
      else if (typeof u == "string") s = s.replace(new RegExp("[".concat(u.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else throw new Error("ignore should be instance of a String or RegExp");
    if (n in e.alphanumeric) return e.alphanumeric[n].test(s);
    throw new Error("Invalid locale '".concat(n, "'"))
  }
  return xt.locales = Object.keys(e.alphanumeric), xt
}
var x4 = T1();
const F4 = Z(x4);
var S1 = "isAlphanumeric";

function R1(t, e) {
  return typeof t == "string" && F4(t, e)
}

function B4(t, e) {
  return x({
    name: S1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return R1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must contain only letters and numbers"
      }, e)
    }
  }, e)
}
var on = {
    exports: {}
  },
  ln = {
    exports: {}
  },
  gs;

function q4() {
  return gs || (gs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = function (a, n) {
      return a.some(function (d) {
        return n === d
      })
    };
    e.default = r, t.exports = e.default, t.exports.default = e.default
  }(ln, ln.exports)), ln.exports
}
var ms;

function b1() {
  return ms || (ms = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = f;
    var r = d(Ee()),
      i = d(k()),
      a = d(q4()),
      n = Gr();

    function d(o) {
      return o && o.__esModule ? o : {
        default: o
      }
    }

    function s(o) {
      var c = new RegExp("^[-+]?([0-9]+)?(\\".concat(n.decimal[o.locale], "[0-9]{").concat(o.decimal_digits, "})").concat(o.force_decimal ? "" : "?", "$"));
      return c
    }
    var u = {
        force_decimal: !1,
        decimal_digits: "1,",
        locale: "en-US"
      },
      l = ["", "-", "+"];

    function f(o, c) {
      if ((0, i.default)(o), c = (0, r.default)(c, u), c.locale in n.decimal) return !(0, a.default)(l, o.replace(/ /g, "")) && s(c).test(o);
      throw new Error("Invalid locale '".concat(c.locale, "'"))
    }
    t.exports = e.default, t.exports.default = e.default
  }(on, on.exports)), on.exports
}
var k4 = b1();
const W4 = Z(k4);
var A1 = "isDecimal";

function w1(t, e) {
  return typeof t == "string" && W4(t, e)
}

function G4(t, e) {
  return x({
    name: A1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return w1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property is not a valid decimal number."
      }, e)
    }
  }, e)
}
var cn = {
    exports: {}
  },
  Is;

function O1() {
  return Is || (Is = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^[\x00-\x7F]+$/;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(cn, cn.exports)), cn.exports
}
var H4 = O1();
const V4 = Z(H4);
var N1 = "isAscii";

function C1(t) {
  return typeof t == "string" && V4(t)
}

function Z4(t) {
  return x({
    name: N1,
    validator: {
      validate: function (e, r) {
        return C1(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must contain only ASCII characters"
      }, t)
    }
  }, t)
}
var fn = {
    exports: {}
  },
  Ts;

function bd() {
  return Ts || (Ts = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = u;
    var r = a(k()),
      i = a(Ee());

    function a(l) {
      return l && l.__esModule ? l : {
        default: l
      }
    }
    var n = /[^A-Z0-9+\/=]/i,
      d = /^[A-Z0-9_\-]*$/i,
      s = {
        urlSafe: !1
      };

    function u(l, f) {
      (0, r.default)(l), f = (0, i.default)(f, s);
      var o = l.length;
      if (f.urlSafe) return d.test(l);
      if (o % 4 !== 0 || n.test(l)) return !1;
      var c = l.indexOf("=");
      return c === -1 || c === o - 1 || c === o - 2 && l[o - 1] === "="
    }
    t.exports = e.default, t.exports.default = e.default
  }(fn, fn.exports)), fn.exports
}
var K4 = bd();
const j4 = Z(K4);
var L1 = "isBase64";

function M1(t, e) {
  return typeof t == "string" && j4(t, e)
}

function Y4(t, e) {
  return x({
    name: L1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return M1(r)
      },
      defaultMessage: U(function (r) {
        return r + "$property must be base64 encoded"
      }, e)
    }
  }, e)
}
var _n = {
    exports: {}
  },
  Ss;

function Ad() {
  return Ss || (Ss = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }

    function a(d) {
      "@babel/helpers - typeof";
      return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (s) {
        return typeof s
      } : function (s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
      }, a(d)
    }

    function n(d, s) {
      (0, r.default)(d);
      var u, l;
      a(s) === "object" ? (u = s.min || 0, l = s.max) : (u = arguments[1], l = arguments[2]);
      var f = encodeURI(d).split(/%..|./).length - 1;
      return f >= u && (typeof l > "u" || f <= l)
    }
    t.exports = e.default, t.exports.default = e.default
  }(_n, _n.exports)), _n.exports
}
var z4 = Ad();
const J4 = Z(z4);
var D1 = "isByteLength";

function P1(t, e, r) {
  return typeof t == "string" && J4(t, {
    min: e,
    max: r
  })
}

function X4(t, e, r) {
  return x({
    name: D1,
    constraints: [t, e],
    validator: {
      validate: function (i, a) {
        return P1(i, a == null ? void 0 : a.constraints[0], a == null ? void 0 : a.constraints[1])
      },
      defaultMessage: U(function (i) {
        return i + "$property's byte length must fall into ($constraint1, $constraint2) range"
      }, r)
    }
  }, r)
}
var pn = {
    exports: {}
  },
  hn = {
    exports: {}
  },
  Rs;

function U1() {
  return Rs || (Rs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n) {
      (0, r.default)(n);
      for (var d = n.replace(/[- ]+/g, ""), s = 0, u, l, f, o = d.length - 1; o >= 0; o--) u = d.substring(o, o + 1), l = parseInt(u, 10), f ? (l *= 2, l >= 10 ? s += l % 10 + 1 : s += l) : s += l, f = !f;
      return !!(s % 10 === 0 && d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(hn, hn.exports)), hn.exports
}
var bs;

function x1() {
  return bs || (bs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = a(k()),
      i = a(U1());

    function a(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }
    var n = {
        amex: /^3[47][0-9]{13}$/,
        dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
        unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
        visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
      },
      d = function () {
        var u = [];
        for (var l in n) n.hasOwnProperty(l) && u.push(n[l]);
        return u
      }();

    function s(u) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, r.default)(u);
      var f = l.provider,
        o = u.replace(/[- ]+/g, "");
      if (f && f.toLowerCase() in n) {
        if (!n[f.toLowerCase()].test(o)) return !1
      } else {
        if (f && !(f.toLowerCase() in n)) throw new Error("".concat(f, " is not a valid credit card provider."));
        if (!d.some(function (c) {
            return c.test(o)
          })) return !1
      }
      return (0, i.default)(u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(pn, pn.exports)), pn.exports
}
var Q4 = x1();
const e_ = Z(Q4);
var F1 = "isCreditCard";

function B1(t) {
  return typeof t == "string" && e_(t)
}

function t_(t) {
  return x({
    name: F1,
    validator: {
      validate: function (e, r) {
        return B1(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a credit card"
      }, t)
    }
  }, t)
}
var vn = {
    exports: {}
  },
  As;

function q1() {
  return As || (As = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = a(Ee()),
      i = a(k());

    function a(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }

    function n(u) {
      var l = "\\d{".concat(u.digits_after_decimal[0], "}");
      u.digits_after_decimal.forEach(function (g, S) {
        S !== 0 && (l = "".concat(l, "|\\d{").concat(g, "}"))
      });
      var f = "(".concat(u.symbol.replace(/\W/, function (g) {
          return "\\".concat(g)
        }), ")").concat(u.require_symbol ? "" : "?"),
        o = "-?",
        c = "[1-9]\\d*",
        _ = "[1-9]\\d{0,2}(\\".concat(u.thousands_separator, "\\d{3})*"),
        h = ["0", c, _],
        v = "(".concat(h.join("|"), ")?"),
        p = "(\\".concat(u.decimal_separator, "(").concat(l, "))").concat(u.require_decimal ? "" : "?"),
        E = v + (u.allow_decimal || u.require_decimal ? p : "");
      return u.allow_negatives && !u.parens_for_negatives && (u.negative_sign_after_digits ? E += o : u.negative_sign_before_digits && (E = o + E)), u.allow_negative_sign_placeholder ? E = "( (?!\\-))?".concat(E) : u.allow_space_after_symbol ? E = " ?".concat(E) : u.allow_space_after_digits && (E += "( (?!$))?"), u.symbol_after_digits ? E += f : E = f + E, u.allow_negatives && (u.parens_for_negatives ? E = "(\\(".concat(E, "\\)|").concat(E, ")") : u.negative_sign_before_digits || u.negative_sign_after_digits || (E = o + E)), new RegExp("^(?!-? )(?=.*\\d)".concat(E, "$"))
    }
    var d = {
      symbol: "$",
      require_symbol: !1,
      allow_space_after_symbol: !1,
      symbol_after_digits: !1,
      allow_negatives: !0,
      parens_for_negatives: !1,
      negative_sign_before_digits: !1,
      negative_sign_after_digits: !1,
      allow_negative_sign_placeholder: !1,
      thousands_separator: ",",
      decimal_separator: ".",
      allow_decimal: !0,
      require_decimal: !1,
      digits_after_decimal: [2],
      allow_space_after_digits: !1
    };

    function s(u, l) {
      return (0, i.default)(u), l = (0, r.default)(l, d), n(l).test(u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(vn, vn.exports)), vn.exports
}
var r_ = q1();
const n_ = Z(r_);
var k1 = "isCurrency";

function W1(t, e) {
  return typeof t == "string" && n_(t, e)
}

function i_(t, e) {
  return x({
    name: k1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return W1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a currency"
      }, e)
    }
  }, e)
}
var $n = {
    exports: {}
  },
  En = {
    exports: {}
  },
  ws;

function zi() {
  return ws || (ws = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = a(k()),
      i = a(Ee());

    function a(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var n = {
      require_tld: !0,
      allow_underscores: !1,
      allow_trailing_dot: !1,
      allow_numeric_tld: !1,
      allow_wildcard: !1,
      ignore_max_length: !1
    };

    function d(s, u) {
      (0, r.default)(s), u = (0, i.default)(u, n), u.allow_trailing_dot && s[s.length - 1] === "." && (s = s.substring(0, s.length - 1)), u.allow_wildcard === !0 && s.indexOf("*.") === 0 && (s = s.substring(2));
      var l = s.split("."),
        f = l[l.length - 1];
      return u.require_tld && (l.length < 2 || !u.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f) || /\s/.test(f)) || !u.allow_numeric_tld && /^\d+$/.test(f) ? !1 : l.every(function (o) {
        return !(o.length > 63 && !u.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(o) || /[\uff01-\uff5e]/.test(o) || /^-|-$/.test(o) || !u.allow_underscores && /_/.test(o))
      })
    }
    t.exports = e.default, t.exports.default = e.default
  }(En, En.exports)), En.exports
}
var yn = {
    exports: {}
  },
  Os;

function Hr() {
  return Os || (Os = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = l;
    var r = i(k());

    function i(f) {
      return f && f.__esModule ? f : {
        default: f
      }
    }
    var a = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
      n = "(".concat(a, "[.]){3}").concat(a),
      d = new RegExp("^".concat(n, "$")),
      s = "(?:[0-9a-fA-F]{1,4})",
      u = new RegExp("^(" + "(?:".concat(s, ":){7}(?:").concat(s, "|:)|") + "(?:".concat(s, ":){6}(?:").concat(n, "|:").concat(s, "|:)|") + "(?:".concat(s, ":){5}(?::").concat(n, "|(:").concat(s, "){1,2}|:)|") + "(?:".concat(s, ":){4}(?:(:").concat(s, "){0,1}:").concat(n, "|(:").concat(s, "){1,3}|:)|") + "(?:".concat(s, ":){3}(?:(:").concat(s, "){0,2}:").concat(n, "|(:").concat(s, "){1,4}|:)|") + "(?:".concat(s, ":){2}(?:(:").concat(s, "){0,3}:").concat(n, "|(:").concat(s, "){1,5}|:)|") + "(?:".concat(s, ":){1}(?:(:").concat(s, "){0,4}:").concat(n, "|(:").concat(s, "){1,6}|:)|") + "(?::((?::".concat(s, "){0,5}:").concat(n, "|(?::").concat(s, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");

    function l(f) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return (0, r.default)(f), o = String(o), o ? o === "4" ? d.test(f) : o === "6" ? u.test(f) : !1 : l(f, 4) || l(f, 6)
    }
    t.exports = e.default, t.exports.default = e.default
  }(yn, yn.exports)), yn.exports
}
var Ns;

function wd() {
  return Ns || (Ns = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = E;
    var r = s(k()),
      i = s(Ad()),
      a = s(zi()),
      n = s(Hr()),
      d = s(Ee());

    function s(g) {
      return g && g.__esModule ? g : {
        default: g
      }
    }
    var u = {
        allow_display_name: !1,
        allow_underscores: !1,
        require_display_name: !1,
        allow_utf8_local_part: !0,
        require_tld: !0,
        blacklisted_chars: "",
        ignore_max_length: !1,
        host_blacklist: [],
        host_whitelist: []
      },
      l = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i,
      f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
      o = /^[a-z\d]+$/,
      c = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
      _ = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
      h = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
      v = 254;

    function p(g) {
      var S = g.replace(/^"(.+)"$/, "$1");
      if (!S.trim()) return !1;
      var m = /[\.";<>]/.test(S);
      if (m) {
        if (S === g) return !1;
        var I = S.split('"').length === S.split('\\"').length;
        if (!I) return !1
      }
      return !0
    }

    function E(g, S) {
      if ((0, r.default)(g), S = (0, d.default)(S, u), S.require_display_name || S.allow_display_name) {
        var m = g.match(l);
        if (m) {
          var I = m[1];
          if (g = g.replace(I, "").replace(/(^<|>$)/g, ""), I.endsWith(" ") && (I = I.slice(0, -1)), !p(I)) return !1
        } else if (S.require_display_name) return !1
      }
      if (!S.ignore_max_length && g.length > v) return !1;
      var O = g.split("@"),
        N = O.pop(),
        P = N.toLowerCase();
      if (S.host_blacklist.includes(P) || S.host_whitelist.length > 0 && !S.host_whitelist.includes(P)) return !1;
      var q = O.join("@");
      if (S.domain_specific_validation && (P === "gmail.com" || P === "googlemail.com")) {
        q = q.toLowerCase();
        var V = q.split("+")[0];
        if (!(0, i.default)(V.replace(/\./g, ""), {
            min: 6,
            max: 30
          })) return !1;
        for (var K = V.split("."), ie = 0; ie < K.length; ie++)
          if (!o.test(K[ie])) return !1
      }
      if (S.ignore_max_length === !1 && (!(0, i.default)(q, {
          max: 64
        }) || !(0, i.default)(N, {
          max: 254
        }))) return !1;
      if (!(0, a.default)(N, {
          require_tld: S.require_tld,
          ignore_max_length: S.ignore_max_length,
          allow_underscores: S.allow_underscores
        })) {
        if (!S.allow_ip_domain) return !1;
        if (!(0, n.default)(N)) {
          if (!N.startsWith("[") || !N.endsWith("]")) return !1;
          var oe = N.slice(1, -1);
          if (oe.length === 0 || !(0, n.default)(oe)) return !1
        }
      }
      if (q[0] === '"') return q = q.slice(1, q.length - 1), S.allow_utf8_local_part ? h.test(q) : c.test(q);
      for (var Te = S.allow_utf8_local_part ? _ : f, _e = q.split("."), me = 0; me < _e.length; me++)
        if (!Te.test(_e[me])) return !1;
      return !(S.blacklisted_chars && q.search(new RegExp("[".concat(S.blacklisted_chars, "]+"), "g")) !== -1)
    }
    t.exports = e.default, t.exports.default = e.default
  }($n, $n.exports)), $n.exports
}
var a_ = wd();
const d_ = Z(a_);
var G1 = "isEmail";

function H1(t, e) {
  return typeof t == "string" && d_(t, e)
}

function u_(t, e) {
  return x({
    name: G1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return H1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be an email"
      }, e)
    }
  }, e)
}
var s_ = zi();
const o_ = Z(s_);
var V1 = "isFqdn";

function Z1(t, e) {
  return typeof t == "string" && o_(t, e)
}

function l_(t, e) {
  return x({
    name: V1,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Z1(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a valid domain name"
      }, e)
    }
  }, e)
}
var Ft = {},
  Cs;

function Od() {
  if (Cs) return Ft;
  Cs = 1, Object.defineProperty(Ft, "__esModule", {
    value: !0
  }), Ft.default = i, Ft.fullWidth = void 0;
  var t = e(k());

  function e(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }
  var r = Ft.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

  function i(a) {
    return (0, t.default)(a), r.test(a)
  }
  return Ft
}
var c_ = Od();
const f_ = Z(c_);
var K1 = "isFullWidth";

function j1(t) {
  return typeof t == "string" && f_(t)
}

function __(t) {
  return x({
    name: K1,
    validator: {
      validate: function (e, r) {
        return j1(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must contain a full-width characters"
      }, t)
    }
  }, t)
}
var Bt = {},
  Ls;

function Nd() {
  if (Ls) return Bt;
  Ls = 1, Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.default = i, Bt.halfWidth = void 0;
  var t = e(k());

  function e(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }
  var r = Bt.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

  function i(a) {
    return (0, t.default)(a), r.test(a)
  }
  return Bt
}
var p_ = Nd();
const h_ = Z(p_);
var Y1 = "isHalfWidth";

function z1(t) {
  return typeof t == "string" && h_(t)
}

function v_(t) {
  return x({
    name: Y1,
    validator: {
      validate: function (e, r) {
        return z1(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must contain a half-width characters"
      }, t)
    }
  }, t)
}
var gn = {
    exports: {}
  },
  Ms;

function J1() {
  return Ms || (Ms = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = n(k()),
      i = Od(),
      a = Nd();

    function n(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }

    function d(s) {
      return (0, r.default)(s), i.fullWidth.test(s) && a.halfWidth.test(s)
    }
    t.exports = e.default, t.exports.default = e.default
  }(gn, gn.exports)), gn.exports
}
var $_ = J1();
const E_ = Z($_);
var X1 = "isVariableWidth";

function Q1(t) {
  return typeof t == "string" && E_(t)
}

function y_(t) {
  return x({
    name: X1,
    validator: {
      validate: function (e, r) {
        return Q1(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must contain a full-width and half-width characters"
      }, t)
    }
  }, t)
}
var mn = {
    exports: {}
  },
  Ds;

function ec() {
  return Ds || (Ds = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(mn, mn.exports)), mn.exports
}
var g_ = ec();
const m_ = Z(g_);
var tc = "isHexColor";

function rc(t) {
  return typeof t == "string" && m_(t)
}

function I_(t) {
  return x({
    name: tc,
    validator: {
      validate: function (e, r) {
        return rc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a hexadecimal color"
      }, t)
    }
  }, t)
}
var In = {
    exports: {}
  },
  Ps;

function Cd() {
  return Ps || (Ps = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^(0x|0h)?[0-9A-F]+$/i;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(In, In.exports)), In.exports
}
var T_ = Cd();
const S_ = Z(T_);
var nc = "isHexadecimal";

function ic(t) {
  return typeof t == "string" && S_(t)
}

function R_(t) {
  return x({
    name: nc,
    validator: {
      validate: function (e, r) {
        return ic(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a hexadecimal number"
      }, t)
    }
  }, t)
}

function hd(t) {
  return t ? "each" in t || "message" in t || "groups" in t || "always" in t || "context" in t : !1
}
var Tn = {
    exports: {}
  },
  Us;

function ac() {
  return Us || (Us = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = f;
    var r = i(k());

    function i(o) {
      return o && o.__esModule ? o : {
        default: o
      }
    }
    var a = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/,
      n = /^([0-9a-fA-F]){12}$/,
      d = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/,
      s = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/,
      u = /^([0-9a-fA-F]){16}$/,
      l = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;

    function f(o, c) {
      return (0, r.default)(o), c != null && c.eui && (c.eui = String(c.eui)), c != null && c.no_colons || c != null && c.no_separators ? c.eui === "48" ? n.test(o) : c.eui === "64" ? u.test(o) : n.test(o) || u.test(o) : (c == null ? void 0 : c.eui) === "48" ? a.test(o) || d.test(o) : (c == null ? void 0 : c.eui) === "64" ? s.test(o) || l.test(o) : f(o, {
        eui: "48"
      }) || f(o, {
        eui: "64"
      })
    }
    t.exports = e.default, t.exports.default = e.default
  }(Tn, Tn.exports)), Tn.exports
}
var b_ = ac();
const A_ = Z(b_);
var dc = "isMacAddress";

function uc(t, e) {
  return typeof t == "string" && A_(t, e)
}

function w_(t, e) {
  var r = hd(t) ? void 0 : t,
    i = hd(t) ? t : e;
  return x({
    name: dc,
    constraints: [r],
    validator: {
      validate: function (a, n) {
        return uc(a, r)
      },
      defaultMessage: U(function (a) {
        return a + "$property must be a MAC Address"
      }, i)
    }
  }, i)
}
var O_ = Hr();
const N_ = Z(O_);
var sc = "isIp";

function oc(t, e) {
  var r = e ? "".concat(e) : void 0;
  return typeof t == "string" && N_(t, r)
}

function C_(t, e) {
  return x({
    name: sc,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return oc(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be an ip address"
      }, e)
    }
  }, e)
}
var Sn = {
    exports: {}
  },
  Rn = {
    exports: {}
  },
  xs;

function Ld() {
  return xs || (xs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = i(k());

    function i(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var a = /^(?:[-+]?(?:0|[1-9][0-9]*))$/,
      n = /^[-+]?[0-9]+$/;

    function d(s, u) {
      (0, r.default)(s), u = u || {};
      var l = u.allow_leading_zeroes === !1 ? a : n,
        f = !u.hasOwnProperty("min") || s >= u.min,
        o = !u.hasOwnProperty("max") || s <= u.max,
        c = !u.hasOwnProperty("lt") || s < u.lt,
        _ = !u.hasOwnProperty("gt") || s > u.gt;
      return l.test(s) && f && o && c && _
    }
    t.exports = e.default, t.exports.default = e.default
  }(Rn, Rn.exports)), Rn.exports
}
var Fs;

function lc() {
  return Fs || (Fs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(Ld());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n) {
      return (0, r.default)(n, {
        allow_leading_zeroes: !1,
        min: 0,
        max: 65535
      })
    }
    t.exports = e.default, t.exports.default = e.default
  }(Sn, Sn.exports)), Sn.exports
}
var L_ = lc();
const M_ = Z(L_);
var cc = "isPort";

function fc(t) {
  return typeof t == "string" && M_(t)
}

function D_(t) {
  return x({
    name: cc,
    validator: {
      validate: function (e, r) {
        return fc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a port"
      }, t)
    }
  }, t)
}
var bn = {
    exports: {}
  },
  Bs;

function _c() {
  return Bs || (Bs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = i(k());

    function i(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }
    var a = /^(?:[0-9]{9}X|[0-9]{10})$/,
      n = /^(?:[0-9]{13})$/,
      d = [1, 3];

    function s(u, l) {
      (0, r.default)(u);
      var f = String((l == null ? void 0 : l.version) || l);
      if (!(l != null && l.version || l)) return s(u, {
        version: 10
      }) || s(u, {
        version: 13
      });
      var o = u.replace(/[\s-]+/g, ""),
        c = 0;
      if (f === "10") {
        if (!a.test(o)) return !1;
        for (var _ = 0; _ < f - 1; _++) c += (_ + 1) * o.charAt(_);
        if (o.charAt(9) === "X" ? c += 10 * 10 : c += 10 * o.charAt(9), c % 11 === 0) return !0
      } else if (f === "13") {
        if (!n.test(o)) return !1;
        for (var h = 0; h < 12; h++) c += d[h % 2] * o.charAt(h);
        if (o.charAt(12) - (10 - c % 10) % 10 === 0) return !0
      }
      return !1
    }
    t.exports = e.default, t.exports.default = e.default
  }(bn, bn.exports)), bn.exports
}
var P_ = _c();
const U_ = Z(P_);
var pc = "isIsbn";

function hc(t, e) {
  var r = e ? "".concat(e) : void 0;
  return typeof t == "string" && U_(t, r)
}

function x_(t, e) {
  return x({
    name: pc,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return hc(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be an ISBN"
      }, e)
    }
  }, e)
}
var An = {
    exports: {}
  },
  qs;

function vc() {
  return qs || (qs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

    function n(d) {
      if ((0, r.default)(d), !a.test(d)) return !1;
      for (var s = !0, u = 0, l = d.length - 2; l >= 0; l--)
        if (d[l] >= "A" && d[l] <= "Z")
          for (var f = d[l].charCodeAt(0) - 55, o = f % 10, c = Math.trunc(f / 10), _ = 0, h = [o, c]; _ < h.length; _++) {
            var v = h[_];
            s ? v >= 5 ? u += 1 + (v - 5) * 2 : u += v * 2 : u += v, s = !s
          } else {
            var p = d[l].charCodeAt(0) - 48;
            s ? p >= 5 ? u += 1 + (p - 5) * 2 : u += p * 2 : u += p, s = !s
          }
      var E = Math.trunc((u + 9) / 10) * 10 - u;
      return +d[d.length - 1] === E
    }
    t.exports = e.default, t.exports.default = e.default
  }(An, An.exports)), An.exports
}
var F_ = vc();
const B_ = Z(F_);
var $c = "isIsin";

function Ec(t) {
  return typeof t == "string" && B_(t)
}

function q_(t) {
  return x({
    name: $c,
    validator: {
      validate: function (e, r) {
        return Ec(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be an ISIN (stock/security identifier)"
      }, t)
    }
  }, t)
}
var wn = {
    exports: {}
  },
  ks;

function yc() {
  return ks || (ks = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = i(k());

    function i(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }
    var a = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
      n = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
      d = function (l) {
        var f = l.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
        if (f) {
          var o = Number(f[1]),
            c = Number(f[2]);
          return o % 4 === 0 && o % 100 !== 0 || o % 400 === 0 ? c <= 366 : c <= 365
        }
        var _ = l.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),
          h = _[1],
          v = _[2],
          p = _[3],
          E = v && "0".concat(v).slice(-2),
          g = p && "0".concat(p).slice(-2),
          S = new Date("".concat(h, "-").concat(E || "01", "-").concat(g || "01"));
        return v && p ? S.getUTCFullYear() === h && S.getUTCMonth() + 1 === v && S.getUTCDate() === p : !0
      };

    function s(u) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, r.default)(u);
      var f = l.strictSeparator ? n.test(u) : a.test(u);
      return f && l.strict ? d(u) : f
    }
    t.exports = e.default, t.exports.default = e.default
  }(wn, wn.exports)), wn.exports
}
var k_ = yc();
const W_ = Z(k_);
var gc = "isIso8601";

function Md(t, e) {
  return typeof t == "string" && W_(t, e)
}

function G_(t, e) {
  return x({
    name: gc,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Md(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a valid ISO 8601 date string"
      }, e)
    }
  }, e)
}
var On = {
    exports: {}
  },
  Ws;

function mc() {
  return Ws || (Ws = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = a(k()),
      i = a(Ee());

    function a(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }

    function n(u) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (l) {
        return typeof l
      } : function (l) {
        return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
      }, n(u)
    }
    var d = {
      allow_primitives: !1
    };

    function s(u, l) {
      (0, r.default)(u);
      try {
        l = (0, i.default)(l, d);
        var f = [];
        l.allow_primitives && (f = [null, !1, !0]);
        var o = JSON.parse(u);
        return f.includes(o) || !!o && n(o) === "object"
      } catch {}
      return !1
    }
    t.exports = e.default, t.exports.default = e.default
  }(On, On.exports)), On.exports
}
var H_ = mc();
const V_ = Z(H_);
var Ic = "isJson";

function Tc(t) {
  return typeof t == "string" && V_(t)
}

function Z_(t) {
  return x({
    name: Ic,
    validator: {
      validate: function (e, r) {
        return Tc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a json string"
      }, t)
    }
  }, t)
}
var Nn = {
    exports: {}
  },
  Gs;

function Sc() {
  return Gs || (Gs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = a(k()),
      i = a(bd());

    function a(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }

    function n(d) {
      (0, r.default)(d);
      var s = d.split("."),
        u = s.length;
      return u !== 3 ? !1 : s.reduce(function (l, f) {
        return l && (0, i.default)(f, {
          urlSafe: !0
        })
      }, !0)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Nn, Nn.exports)), Nn.exports
}
var K_ = Sc();
const j_ = Z(K_);
var Rc = "isJwt";

function bc(t) {
  return typeof t == "string" && j_(t)
}

function Y_(t) {
  return x({
    name: Rc,
    validator: {
      validate: function (e, r) {
        return bc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a jwt string"
      }, t)
    }
  }, t)
}
var Cn = {
    exports: {}
  },
  Hs;

function Ac() {
  return Hs || (Hs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n) {
      return (0, r.default)(n), n === n.toLowerCase()
    }
    t.exports = e.default, t.exports.default = e.default
  }(Cn, Cn.exports)), Cn.exports
}
var z_ = Ac();
const J_ = Z(z_);
var wc = "isLowercase";

function Oc(t) {
  return typeof t == "string" && J_(t)
}

function X_(t) {
  return x({
    name: wc,
    validator: {
      validate: function (e, r) {
        return Oc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a lowercase string"
      }, t)
    }
  }, t)
}
var qt = {},
  Vs;

function Nc() {
  if (Vs) return qt;
  Vs = 1, Object.defineProperty(qt, "__esModule", {
    value: !0
  }), qt.default = i, qt.locales = void 0;
  var t = e(k());

  function e(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }
  var r = {
    "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
    "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
    "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
    "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
    "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
    "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
    "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
    "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
    "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
    "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
    "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
    "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
    "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
    "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
    "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
    "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
    "ar-TN": /^(\+?216)?[2459]\d{7}$/,
    "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
    "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
    "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
    "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
    "ca-AD": /^(\+376)?[346]\d{5}$/,
    "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
    "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
    "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
    "de-LU": /^(\+352)?((6\d1)\d{6})$/,
    "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
    "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
    "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
    "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
    "en-AU": /^(\+?61|0)4\d{8}$/,
    "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
    "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
    "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
    "en-GB": /^(\+?44|0)7\d{9}$/,
    "en-GG": /^(\+?44|0)1481\d{6}$/,
    "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
    "en-GY": /^(\+592|0)6\d{6}$/,
    "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
    "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
    "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
    "en-JM": /^(\+?876)?\d{7}$/,
    "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
    "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
    "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
    "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
    "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
    "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
    "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
    "en-MU": /^(\+?230|0)?\d{8}$/,
    "en-MW": /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
    "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
    "en-NG": /^(\+?234|0)?[789]\d{9}$/,
    "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
    "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
    "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
    "en-PH": /^(09|\+639)\d{9}$/,
    "en-RW": /^(\+?250|0)?[7]\d{8}$/,
    "en-SG": /^(\+65)?[3689]\d{7}$/,
    "en-SL": /^(\+?232|0)\d{8}$/,
    "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
    "en-UG": /^(\+?256|0)?[7]\d{8}$/,
    "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    "en-ZA": /^(\+?27|0)\d{9}$/,
    "en-ZM": /^(\+?26)?09[567]\d{7}$/,
    "en-ZW": /^(\+263)[0-9]{9}$/,
    "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
    "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
    "es-BO": /^(\+?591)?(6|7)\d{7}$/,
    "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
    "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
    "es-CR": /^(\+506)?[2-8]\d{7}$/,
    "es-CU": /^(\+53|0053)?5\d{7}$/,
    "es-DO": /^(\+?1)?8[024]9\d{7}$/,
    "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
    "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
    "es-ES": /^(\+?34)?[6|7]\d{8}$/,
    "es-PE": /^(\+?51)?9\d{8}$/,
    "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
    "es-NI": /^(\+?505)\d{7,8}$/,
    "es-PA": /^(\+?507)\d{7,8}$/,
    "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
    "es-SV": /^(\+?503)?[67]\d{7}$/,
    "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
    "es-VE": /^(\+?58)?(2|4)\d{9}$/,
    "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
    "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
    "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "fr-BF": /^(\+226|0)[67]\d{7}$/,
    "fr-BJ": /^(\+229)\d{8}$/,
    "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
    "fr-CM": /^(\+?237)6[0-9]{8}$/,
    "fr-FR": /^(\+?33|0)[67]\d{8}$/,
    "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
    "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
    "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
    "fr-PF": /^(\+?689)?8[789]\d{6}$/,
    "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
    "fr-WF": /^(\+681)?\d{6}$/,
    "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
    "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    "ir-IR": /^(\+98|0)?9\d{9}$/,
    "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
    "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
    "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
    "kk-KZ": /^(\+?7|8)?7\d{9}$/,
    "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
    "lt-LT": /^(\+370|8)\d{8}$/,
    "lv-LV": /^(\+?371)2\d{7}$/,
    "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
    "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
    "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
    "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
    "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
    "nb-NO": /^(\+?47)?[49]\d{7}$/,
    "ne-NP": /^(\+?977)?9[78]\d{8}$/,
    "nl-BE": /^(\+?32|0)4\d{8}$/,
    "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
    "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
    "nn-NO": /^(\+?47)?[49]\d{7}$/,
    "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
    "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
    "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
    "pt-AO": /^(\+244)\d{9}$/,
    "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
    "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
    "ru-RU": /^(\+?7|8)?9\d{9}$/,
    "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
    "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
    "sq-AL": /^(\+355|0)6[789]\d{6}$/,
    "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
    "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
    "th-TH": /^(\+66|66|0)\d{9}$/,
    "tr-TR": /^(\+?90|0)?5\d{9}$/,
    "tk-TM": /^(\+993|993|8)\d{8}$/,
    "uk-UA": /^(\+?38|8)?0\d{9}$/,
    "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
    "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
    "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
    "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
    "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
    "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
    "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
    "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
  };
  r["en-CA"] = r["en-US"], r["fr-CA"] = r["en-CA"], r["fr-BE"] = r["nl-BE"], r["zh-HK"] = r["en-HK"], r["zh-MO"] = r["en-MO"], r["ga-IE"] = r["en-IE"], r["fr-CH"] = r["de-CH"], r["it-CH"] = r["fr-CH"];

  function i(a, n, d) {
    if ((0, t.default)(a), d && d.strictMode && !a.startsWith("+")) return !1;
    if (Array.isArray(n)) return n.some(function (l) {
      if (r.hasOwnProperty(l)) {
        var f = r[l];
        if (f.test(a)) return !0
      }
      return !1
    });
    if (n in r) return r[n].test(a);
    if (!n || n === "any") {
      for (var s in r)
        if (r.hasOwnProperty(s)) {
          var u = r[s];
          if (u.test(a)) return !0
        } return !1
    }
    throw new Error("Invalid locale '".concat(n, "'"))
  }
  return qt.locales = Object.keys(r), qt
}
var Q_ = Nc();
const e5 = Z(Q_);
var Cc = "isMobilePhone";

function Lc(t, e, r) {
  return typeof t == "string" && e5(t, e, r)
}

function t5(t, e, r) {
  return x({
    name: Cc,
    constraints: [t, e],
    validator: {
      validate: function (i, a) {
        return Lc(i, a == null ? void 0 : a.constraints[0], a == null ? void 0 : a.constraints[1])
      },
      defaultMessage: U(function (i) {
        return i + "$property must be a phone number"
      }, r)
    }
  }, r)
}
var kt = {},
  Zs;

function Dd() {
  if (Zs) return kt;
  Zs = 1, Object.defineProperty(kt, "__esModule", {
    value: !0
  }), kt.CountryCodes = void 0, kt.default = i;
  var t = e(k());

  function e(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }
  var r = new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);

  function i(a) {
    return (0, t.default)(a), r.has(a.toUpperCase())
  }
  return kt.CountryCodes = r, kt
}
var r5 = Dd();
const n5 = Z(r5);
var Mc = "isISO31661Alpha2";

function Dc(t) {
  return typeof t == "string" && n5(t)
}

function i5(t) {
  return x({
    name: Mc,
    validator: {
      validate: function (e, r) {
        return Dc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a valid ISO31661 Alpha2 code"
      }, t)
    }
  }, t)
}
var Ln = {
    exports: {}
  },
  Ks;

function Pc() {
  return Ks || (Ks = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);

    function n(d) {
      return (0, r.default)(d), a.has(d.toUpperCase())
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ln, Ln.exports)), Ln.exports
}
var a5 = Pc();
const d5 = Z(a5);
var Uc = "isISO31661Alpha3";

function xc(t) {
  return typeof t == "string" && d5(t)
}

function u5(t) {
  return x({
    name: Uc,
    validator: {
      validate: function (e, r) {
        return xc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a valid ISO31661 Alpha3 code"
      }, t)
    }
  }, t)
}
var Mn = {
    exports: {}
  },
  js;

function Fc() {
  return js || (js = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = a(k()),
      i = a(Cd());

    function a(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }

    function n(d) {
      return (0, r.default)(d), (0, i.default)(d) && d.length === 24
    }
    t.exports = e.default, t.exports.default = e.default
  }(Mn, Mn.exports)), Mn.exports
}
var s5 = Fc();
const o5 = Z(s5);
var Bc = "isMongoId";

function qc(t) {
  return typeof t == "string" && o5(t)
}

function l5(t) {
  return x({
    name: Bc,
    validator: {
      validate: function (e, r) {
        return qc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a mongodb id"
      }, t)
    }
  }, t)
}
var Dn = {
    exports: {}
  },
  Ys;

function kc() {
  return Ys || (Ys = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /[^\x00-\x7F]/;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Dn, Dn.exports)), Dn.exports
}
var c5 = kc();
const f5 = Z(c5);
var Wc = "isMultibyte";

function Gc(t) {
  return typeof t == "string" && f5(t)
}

function _5(t) {
  return x({
    name: Wc,
    validator: {
      validate: function (e, r) {
        return Gc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must contain one or more multibyte chars"
      }, t)
    }
  }, t)
}
var Pn = {
    exports: {}
  },
  zs;

function Hc() {
  return zs || (zs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Pn, Pn.exports)), Pn.exports
}
var p5 = Hc();
const h5 = Z(p5);
var Vc = "isSurrogatePair";

function Zc(t) {
  return typeof t == "string" && h5(t)
}

function v5(t) {
  return x({
    name: Vc,
    validator: {
      validate: function (e, r) {
        return Zc(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must contain any surrogate pairs chars"
      }, t)
    }
  }, t)
}
var Un = {
    exports: {}
  },
  Js;

function Kc() {
  return Js || (Js = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = E;
    var r = d(k()),
      i = d(zi()),
      a = d(Hr()),
      n = d(Ee());

    function d(g) {
      return g && g.__esModule ? g : {
        default: g
      }
    }

    function s(g, S) {
      return c(g) || o(g, S) || l(g, S) || u()
    }

    function u() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function l(g, S) {
      if (g) {
        if (typeof g == "string") return f(g, S);
        var m = Object.prototype.toString.call(g).slice(8, -1);
        if (m === "Object" && g.constructor && (m = g.constructor.name), m === "Map" || m === "Set") return Array.from(g);
        if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) return f(g, S)
      }
    }

    function f(g, S) {
      (S == null || S > g.length) && (S = g.length);
      for (var m = 0, I = new Array(S); m < S; m++) I[m] = g[m];
      return I
    }

    function o(g, S) {
      var m = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
      if (m != null) {
        var I, O, N, P, q = [],
          V = !0,
          K = !1;
        try {
          if (N = (m = m.call(g)).next, S !== 0)
            for (; !(V = (I = N.call(m)).done) && (q.push(I.value), q.length !== S); V = !0);
        } catch (ie) {
          K = !0, O = ie
        } finally {
          try {
            if (!V && m.return != null && (P = m.return(), Object(P) !== P)) return
          } finally {
            if (K) throw O
          }
        }
        return q
      }
    }

    function c(g) {
      if (Array.isArray(g)) return g
    }
    var _ = {
        protocols: ["http", "https", "ftp"],
        require_tld: !0,
        require_protocol: !1,
        require_host: !0,
        require_port: !1,
        require_valid_protocol: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1,
        allow_protocol_relative_urls: !1,
        allow_fragments: !0,
        allow_query_components: !0,
        validate_length: !0
      },
      h = /^\[([^\]]+)\](?::([0-9]+))?$/;

    function v(g) {
      return Object.prototype.toString.call(g) === "[object RegExp]"
    }

    function p(g, S) {
      for (var m = 0; m < S.length; m++) {
        var I = S[m];
        if (g === I || v(I) && I.test(g)) return !0
      }
      return !1
    }

    function E(g, S) {
      if ((0, r.default)(g), !g || /[\s<>]/.test(g) || g.indexOf("mailto:") === 0 || (S = (0, n.default)(S, _), S.validate_length && g.length >= 2083) || !S.allow_fragments && g.includes("#") || !S.allow_query_components && (g.includes("?") || g.includes("&"))) return !1;
      var m, I, O, N, P, q, V, K;
      if (V = g.split("#"), g = V.shift(), V = g.split("?"), g = V.shift(), V = g.split("://"), V.length > 1) {
        if (m = V.shift().toLowerCase(), S.require_valid_protocol && S.protocols.indexOf(m) === -1) return !1
      } else {
        if (S.require_protocol) return !1;
        if (g.slice(0, 2) === "//") {
          if (!S.allow_protocol_relative_urls) return !1;
          V[0] = g.slice(2)
        }
      }
      if (g = V.join("://"), g === "") return !1;
      if (V = g.split("/"), g = V.shift(), g === "" && !S.require_host) return !0;
      if (V = g.split("@"), V.length > 1) {
        if (S.disallow_auth || V[0] === "" || (I = V.shift(), I.indexOf(":") >= 0 && I.split(":").length > 2)) return !1;
        var ie = I.split(":"),
          oe = s(ie, 2),
          Te = oe[0],
          _e = oe[1];
        if (Te === "" && _e === "") return !1
      }
      N = V.join("@"), q = null, K = null;
      var me = N.match(h);
      if (me ? (O = "", K = me[1], q = me[2] || null) : (V = N.split(":"), O = V.shift(), V.length && (q = V.join(":"))), q !== null && q.length > 0) {
        if (P = parseInt(q, 10), !/^[0-9]+$/.test(q) || P <= 0 || P > 65535) return !1
      } else if (S.require_port) return !1;
      return S.host_whitelist ? p(O, S.host_whitelist) : O === "" && !S.require_host ? !0 : !(!(0, a.default)(O) && !(0, i.default)(O, S) && (!K || !(0, a.default)(K, 6)) || (O = O || K, S.host_blacklist && p(O, S.host_blacklist)))
    }
    t.exports = e.default, t.exports.default = e.default
  }(Un, Un.exports)), Un.exports
}
var $5 = Kc();
const E5 = Z($5);
var jc = "isUrl";

function Yc(t, e) {
  return typeof t == "string" && E5(t, e)
}

function y5(t, e) {
  return x({
    name: jc,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Yc(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a URL address"
      }, e)
    }
  }, e)
}
var xn = {
    exports: {}
  },
  Xs;

function zc() {
  return Xs || (Xs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = {
      1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };

    function n(d, s) {
      (0, r.default)(d);
      var u = a[[void 0, null].includes(s) ? "all" : s];
      return !!u && u.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(xn, xn.exports)), xn.exports
}
var g5 = zc();
const m5 = Z(g5);
var Jc = "isUuid";

function Xc(t, e) {
  return typeof t == "string" && m5(t, e)
}

function I5(t, e) {
  return x({
    name: Jc,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Xc(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a UUID"
      }, e)
    }
  }, e)
}
var Qc = "IsFirebasePushId";

function ef(t) {
  var e = /^[a-zA-Z0-9_-]*$/;
  return typeof t == "string" && t.length === 20 && e.test(t)
}

function T5(t) {
  return x({
    name: Qc,
    validator: {
      validate: function (e, r) {
        return ef(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a Firebase Push Id"
      }, t)
    }
  }, t)
}
var Fn = {
    exports: {}
  },
  Qs;

function tf() {
  return Qs || (Qs = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n) {
      return (0, r.default)(n), n === n.toUpperCase()
    }
    t.exports = e.default, t.exports.default = e.default
  }(Fn, Fn.exports)), Fn.exports
}
var S5 = tf();
const R5 = Z(S5);
var rf = "isUppercase";

function nf(t) {
  return typeof t == "string" && R5(t)
}

function b5(t) {
  return x({
    name: rf,
    validator: {
      validate: function (e, r) {
        return nf(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be uppercase"
      }, t)
    }
  }, t)
}
var Bn = {
    exports: {}
  },
  eo;

function af() {
  return eo || (eo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }

    function a(d) {
      "@babel/helpers - typeof";
      return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (s) {
        return typeof s
      } : function (s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
      }, a(d)
    }

    function n(d, s) {
      (0, r.default)(d);
      var u, l;
      a(s) === "object" ? (u = s.min || 0, l = s.max) : (u = arguments[1] || 0, l = arguments[2]);
      var f = d.match(/(\uFE0F|\uFE0E)/g) || [],
        o = d.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [],
        c = d.length - f.length - o.length;
      return c >= u && (typeof l > "u" || c <= l)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Bn, Bn.exports)), Bn.exports
}
var A5 = af();
const Pd = Z(A5);
var df = "isLength";

function uf(t, e, r) {
  return typeof t == "string" && Pd(t, {
    min: e,
    max: r
  })
}

function w5(t, e, r) {
  return x({
    name: df,
    constraints: [t, e],
    validator: {
      validate: function (i, a) {
        return uf(i, a == null ? void 0 : a.constraints[0], a == null ? void 0 : a.constraints[1])
      },
      defaultMessage: U(function (i, a) {
        var n = (a == null ? void 0 : a.constraints[0]) !== null && (a == null ? void 0 : a.constraints[0]) !== void 0,
          d = (a == null ? void 0 : a.constraints[1]) !== null && (a == null ? void 0 : a.constraints[1]) !== void 0;
        return n && (!a.value || a.value.length < (a == null ? void 0 : a.constraints[0])) ? i + "$property must be longer than or equal to $constraint1 characters" : d && a.value.length > (a == null ? void 0 : a.constraints[1]) ? i + "$property must be shorter than or equal to $constraint2 characters" : i + "$property must be longer than or equal to $constraint1 and shorter than or equal to $constraint2 characters"
      }, r)
    }
  }, r)
}
var sf = "maxLength";

function of (t, e) {
  return typeof t == "string" && Pd(t, {
    min: 0,
    max: e
  })
}

function O5(t, e) {
  return x({
    name: sf,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return of(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be shorter than or equal to $constraint1 characters"
      }, e)
    }
  }, e)
}
var lf = "minLength";

function cf(t, e) {
  return typeof t == "string" && Pd(t, {
    min: e
  })
}

function N5(t, e) {
  return x({
    name: lf,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return cf(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be longer than or equal to $constraint1 characters"
      }, e)
    }
  }, e)
}
var qn = {
    exports: {}
  },
  to;

function ff() {
  return to || (to = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d, s) {
      return (0, r.default)(n), Object.prototype.toString.call(d) !== "[object RegExp]" && (d = new RegExp(d, s)), !!n.match(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(qn, qn.exports)), qn.exports
}
var C5 = ff();
const _f = Z(C5);
var pf = "matches";

function hf(t, e, r) {
  return typeof t == "string" && _f(t, e, r)
}

function L5(t, e, r) {
  var i;
  return e && e instanceof Object && !r ? r = e : i = e, x({
    name: pf,
    constraints: [t, i],
    validator: {
      validate: function (a, n) {
        return hf(a, n == null ? void 0 : n.constraints[0], n == null ? void 0 : n.constraints[1])
      },
      defaultMessage: U(function (a, n) {
        return a + "$property must match $constraint1 regular expression"
      }, r)
    }
  }, r)
}
const M5 = {
  version: 4,
  country_calling_codes: {
    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
    7: ["RU", "KZ"],
    20: ["EG"],
    27: ["ZA"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT", "VA"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB", "GG", "IM", "JE"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO", "SJ"],
    48: ["PL"],
    49: ["DE"],
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    60: ["MY"],
    61: ["AU", "CC", "CX"],
    62: ["ID"],
    63: ["PH"],
    64: ["NZ"],
    65: ["SG"],
    66: ["TH"],
    81: ["JP"],
    82: ["KR"],
    84: ["VN"],
    86: ["CN"],
    90: ["TR"],
    91: ["IN"],
    92: ["PK"],
    93: ["AF"],
    94: ["LK"],
    95: ["MM"],
    98: ["IR"],
    211: ["SS"],
    212: ["MA", "EH"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    220: ["GM"],
    221: ["SN"],
    222: ["MR"],
    223: ["ML"],
    224: ["GN"],
    225: ["CI"],
    226: ["BF"],
    227: ["NE"],
    228: ["TG"],
    229: ["BJ"],
    230: ["MU"],
    231: ["LR"],
    232: ["SL"],
    233: ["GH"],
    234: ["NG"],
    235: ["TD"],
    236: ["CF"],
    237: ["CM"],
    238: ["CV"],
    239: ["ST"],
    240: ["GQ"],
    241: ["GA"],
    242: ["CG"],
    243: ["CD"],
    244: ["AO"],
    245: ["GW"],
    246: ["IO"],
    247: ["AC"],
    248: ["SC"],
    249: ["SD"],
    250: ["RW"],
    251: ["ET"],
    252: ["SO"],
    253: ["DJ"],
    254: ["KE"],
    255: ["TZ"],
    256: ["UG"],
    257: ["BI"],
    258: ["MZ"],
    260: ["ZM"],
    261: ["MG"],
    262: ["RE", "YT"],
    263: ["ZW"],
    264: ["NA"],
    265: ["MW"],
    266: ["LS"],
    267: ["BW"],
    268: ["SZ"],
    269: ["KM"],
    290: ["SH", "TA"],
    291: ["ER"],
    297: ["AW"],
    298: ["FO"],
    299: ["GL"],
    350: ["GI"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    354: ["IS"],
    355: ["AL"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI", "AX"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    373: ["MD"],
    374: ["AM"],
    375: ["BY"],
    376: ["AD"],
    377: ["MC"],
    378: ["SM"],
    380: ["UA"],
    381: ["RS"],
    382: ["ME"],
    383: ["XK"],
    385: ["HR"],
    386: ["SI"],
    387: ["BA"],
    389: ["MK"],
    420: ["CZ"],
    421: ["SK"],
    423: ["LI"],
    500: ["FK"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    508: ["PM"],
    509: ["HT"],
    590: ["GP", "BL", "MF"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    596: ["MQ"],
    597: ["SR"],
    598: ["UY"],
    599: ["CW", "BQ"],
    670: ["TL"],
    672: ["NF"],
    673: ["BN"],
    674: ["NR"],
    675: ["PG"],
    676: ["TO"],
    677: ["SB"],
    678: ["VU"],
    679: ["FJ"],
    680: ["PW"],
    681: ["WF"],
    682: ["CK"],
    683: ["NU"],
    685: ["WS"],
    686: ["KI"],
    687: ["NC"],
    688: ["TV"],
    689: ["PF"],
    690: ["TK"],
    691: ["FM"],
    692: ["MH"],
    850: ["KP"],
    852: ["HK"],
    853: ["MO"],
    855: ["KH"],
    856: ["LA"],
    880: ["BD"],
    886: ["TW"],
    960: ["MV"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"],
    975: ["BT"],
    976: ["MN"],
    977: ["NP"],
    992: ["TJ"],
    993: ["TM"],
    994: ["AZ"],
    995: ["GE"],
    996: ["KG"],
    998: ["UZ"]
  },
  countries: {
    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6], 0, 0, 0, 0, 0, 0, 0, [
      ["6[2-467]\\d{3}", [5]],
      ["4\\d{4}", [5]], 0, 0, 0, 0, ["(?:0[1-9]|[1589]\\d)\\d{4}", [6]]
    ]],
    AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
      [
        ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["[78]\\d{5}", [6]],
        ["690\\d{6}|[356]\\d{5}", [6, 9]],
        ["180[02]\\d{4}", [8]],
        ["[19]\\d{5}", [6]]
      ]
    ],
    AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
        ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["[2-4679][2-8]\\d{6}", [8]],
        ["5[024-68]\\d{7}", [9]],
        ["400\\d{6}|800\\d{2,9}"],
        ["900[02]\\d{5}", [9]], 0, 0, ["600[25]\\d{5}", [9]], 0, 0, ["700[05]\\d{5}", [9]]
      ]
    ],
    AF: ["93", "00", "[2-7]\\d{8}", [9],
      [
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}"],
        ["7\\d{8}"]
      ]
    ],
    AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268", [
      ["268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}"],
      ["268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["26840[69]\\d{4}"],
      ["26848[01]\\d{4}"]
    ]],
    AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264", [
      ["264(?:292|4(?:6[12]|9[78]))\\d{4}"],
      ["264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["264724\\d{4}"]
    ]],
    AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
      [
        ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
        ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["4505[0-2]\\d{3}|(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}", [8]],
        ["6(?:[78][2-9]|9\\d)\\d{6}", [9]],
        ["800\\d{4}", [7]],
        ["900[1-9]\\d\\d", [6]],
        ["700[2-9]\\d{4}", [8]], 0, 0, 0, 0, ["808[1-9]\\d\\d", [6]]
      ]
    ],
    AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
      [
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
        ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
        ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
        ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}"],
        ["(?:33|4[1349]|55|77|88|9[13-9])\\d{6}"],
        ["800\\d{5}"],
        ["90[016]\\d{5}"], 0, 0, 0, 0, ["60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|9[0-2])\\d{4}"],
        ["80[1-4]\\d{5}"]
      ]
    ],
    AO: ["244", "00", "[29]\\d{8}", [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}"],
        ["9[1-79]\\d{7}"]
      ]
    ],
    AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
      [
        ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
        ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
        ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
        ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
        ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
      ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", 0, 0, [
        ["3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:21[2-6]|(?:3[06]|49)4|6(?:04|1[2-8])|9[17][4-6])|3(?:(?:36|64)4|4(?:1[2-8]|[25][4-6]|84)|5(?:1[2-9]|[38][4-6])|8(?:[17][2-6]|3[4-6]|8[3-68])))\\d{6}|(?:2(?:23|64|99)|3(?:43|85))[3-6]\\d{6}|(?:2(?:657|9(?:54|66))|3(?:487|7(?:55|77)|865))[2-8]\\d{5}|(?:2(?:[28]0|37|6[36]|9[48])|3(?:62|7[069]|80))[45]\\d{6}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|47[35]|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:2(?:62|81)|320|622|9(?:42|83))|3(?:329|4(?:62|76|89)|564))[2-6]\\d{5}|(?:2(?:284|3(?:02|23)|477|920)|3(?:4(?:46|[89]2)|541|878))[2-7]\\d{5}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:257|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|35|5[17])))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[14]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", [10]],
        ["93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:21[2-6]|(?:3[06]|49)4|6(?:04|1[2-8])|9[17][4-6])|3(?:(?:36|64)4|4(?:1[2-8]|[25][4-6]|84)|5(?:1[2-9]|[38][4-6])|8(?:[17][2-6]|3[4-6]|8[3-68]))))\\d{6}|9(?:2(?:23|64|99)|3(?:43|85))[3-6]\\d{6}|9(?:2(?:657|9(?:54|66))|3(?:487|7(?:55|77)|865))[2-8]\\d{5}|9(?:2(?:[28]0|37|6[36]|9[48])|3(?:62|7[069]|80))[45]\\d{6}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|47[35]|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:2(?:62|81)|320|622|9(?:42|83))|3(?:329|4(?:62|76|89)|564))[2-6]\\d{5}|9(?:2(?:284|3(?:02|23)|477|920)|3(?:4(?:46|[89]2)|541|878))[2-7]\\d{5}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:257|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|35|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[14]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}"],
        ["800\\d{7,8}"],
        ["60[04579]\\d{7}", [10]], 0, 0, ["810\\d{7}", [10]]
      ]
    ],
    AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684", [
      ["6846(?:22|33|44|55|77|88|9[19])\\d{4}"],
      ["684(?:2(?:48|5[2468]|7[26])|7(?:3[13]|70|82))\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      [
        ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
        ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
        ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
        ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
        ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}"],
        ["6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", [7, 8, 9, 10, 11, 12, 13]],
        ["800\\d{6,10}", [9, 10, 11, 12, 13]],
        ["(?:8[69][2-68]|9(?:0[01]|3[019]))\\d{6,10}", [9, 10, 11, 12, 13]], 0, 0, 0, 0, ["5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", [5, 6, 7, 8, 9, 10, 11, 12, 13]],
        ["8(?:10|2[018])\\d{6,10}|828\\d{5}", [8, 9, 10, 11, 12, 13]]
      ]
    ],
    AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
      [
        ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
      ], "0", 0, "(183[12])|0", 0, 0, 0, [
        ["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
        ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
        ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
        ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
      ], "0011"
    ],
    AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["5(?:2\\d|8[1-9])\\d{4}"],
        ["(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}"],
        ["800\\d{4}"],
        ["900\\d{4}"], 0, 0, 0, 0, ["(?:28\\d|501)\\d{4}"]
      ]
    ],
    AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", [
      ["18[1-8]\\d{3,6}", [6, 7, 8, 9]],
      ["4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]],
      ["800\\d{4,6}", [7, 8, 9]],
      ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}"]
    ], "00"],
    AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2[12]428|3655[02])\\d{4}|(?:2(?:22[0-79]|63[0-28])|3654)\\d{5}|(?:(?:1[28]|46)\\d|2(?:[014-6]2|[23]3))\\d{6}"],
        ["36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}"],
        ["88\\d{7}"],
        ["900200\\d{3}"]
      ]
    ],
    BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", [8]],
        ["6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}"],
        ["8[08]\\d{6}", [8]],
        ["9[0246]\\d{6}", [8]], 0, 0, ["703[235]0\\d{3}|70(?:2[0-5]|3[0146]|[56]0)\\d{4}", [8]], 0, 0, ["8[12]\\d{6}", [8]]
      ]
    ],
    BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246", [
      ["246521[0369]\\d{3}|246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}"],
      ["246(?:(?:2(?:[3568]\\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\\d)|69[5-7]|8(?:[2-5]\\d|83))\\d|52(?:1[147]|20))\\d{3}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["(?:246976|900[2-9]\\d\\d)\\d{4}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["246(?:292|367|4(?:1[7-9]|3[01]|4[47-9]|67)|7(?:1[2-9]|2\\d|3[016]|53))\\d{4}"], 0, ["24631\\d{5}"]
    ]],
    BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
        ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
        ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"],
        ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2(?:[23]\\d|[45])\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}"],
        ["(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", [10]],
        ["80[03]\\d{7}", [10]], 0, 0, 0, 0, 0, ["96(?:0[469]|1[0-47]|3[389]|43|6[69]|7[78])\\d{6}", [10]]
      ]
    ],
    BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
      [
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}", [8]],
        ["4[5-9]\\d{7}", [9]],
        ["800[1-9]\\d{4}", [8]],
        ["(?:70(?:2[0-57]|3[04-7]|44|6[4-69]|7[0579])|90\\d\\d)\\d{4}", [8]], 0, 0, ["78(?:0[57]|1[014-8]|2[25]|3[15-8]|48|[56]0|7[06-8]|9\\d)\\d{4}", [8]], 0, 0, ["7879\\d{4}", [8]]
      ]
    ],
    BF: ["226", "00", "[025-7]\\d{7}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:0(?:49|5[23]|6[5-7]|9[016-9])|4(?:4[569]|5[4-6]|6[5-7]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}"],
        ["(?:0[1-7]|5[0-8]|[67]\\d)\\d{6}"]
      ]
    ],
    BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12],
      [
        ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
        ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}", [6, 7, 8]],
        ["(?:43[07-9]|99[69]\\d)\\d{5}|(?:8[7-9]|98)\\d{7}", [8, 9]],
        ["(?:00800\\d\\d|800)\\d{5}", [8, 12]],
        ["90\\d{6}", [8]], 0, 0, 0, 0, 0, ["700\\d{5}", [8]]
      ]
    ],
    BH: ["973", "00", "[136-9]\\d{7}", [8],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|55|7[7-9]|88)|9[69][69])|7(?:[07]\\d\\d|1(?:11|78)))\\d{4}"],
        ["(?:3(?:[0-79]\\d|8[0-57-9])\\d|6(?:3(?:00|33|6[16])|441|6(?:3[03-9]|[69]\\d|7[0-689])))\\d{4}"],
        ["8[02369]\\d{6}"],
        ["(?:87|9[0-8])\\d{6}"], 0, 0, 0, 0, 0, ["84\\d{6}"]
      ]
    ],
    BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:22|31)\\d{6}"],
        ["(?:29|[67][125-9])\\d{6}"]
      ]
    ],
    BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2090\\d{4}|(?:012\\d\\d|2(?:02|1[037]|2[45]|3[68]|4\\d))\\d{5}"],
        ["(?:01(?:2[5-9]|[4-69]\\d)|4[0-8]|[56]\\d|9[013-9])\\d{6}"], 0, 0, 0, 0, ["81\\d{6}", [8]], 0, ["857[58]\\d{4}", [8]]
      ]
    ],
    BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
      ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
      ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
      ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]
    ]],
    BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441", [
      ["441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}"],
      ["441(?:[2378]\\d|5[0-39]|9[02])\\d{5}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    BN: ["673", "00", "[2-578]\\d{6}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}"],
        ["(?:22[89]|[78]\\d\\d)\\d{4}"], 0, 0, 0, 0, 0, 0, ["5[34]\\d{5}"]
      ]
    ],
    BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9],
      [
        ["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]],
        ["(\\d{8})", "$1", ["[67]"]],
        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
      ], "0", 0, "0(1\\d)?", 0, 0, 0, [
        ["(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", [8]],
        ["[67]\\d{7}", [8]],
        ["8001[07]\\d{4}", [9]], 0, 0, 0, 0, 0, ["50\\d{6}", [8]]
      ]
    ],
    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]", [
      ["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}"],
      ["(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]
    ]],
    BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
      [
        ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
        ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
        ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
      ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", 0, 0, [
        ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", [10]],
        ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}", [10, 11]],
        ["800\\d{6,7}", [9, 10]],
        ["300\\d{6}|[59]00\\d{6,7}", [9, 10]], 0, 0, 0, 0, 0, ["(?:30[03]\\d{3}|4(?:0(?:0\\d|20)|370))\\d{4}|300\\d{5}", [8, 10]]
      ]
    ],
    BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242", [
      ["242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-5]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}"],
      ["242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|3[0-4]|[89]9))\\d{4}"],
      ["242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["242225\\d{4}"]
    ]],
    BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", [7]],
        ["(?:1[67]|77)\\d{6}", [8]]
      ]
    ],
    BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
      [
        ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
        ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
        ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013]|81)|4(?:6[03]|7[1267]|9[0-5])|5(?:3[03489]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[013467]))\\d{4}", [7]],
        ["(?:321|7[1-8]\\d)\\d{5}", [8]],
        ["(?:0800|800\\d)\\d{6}", [10]],
        ["90\\d{5}", [7]], 0, 0, 0, 0, ["79(?:1(?:[0-2]\\d|3[0-3])|2[0-7]\\d)\\d{3}", [8]]
      ]
    ],
    BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
      [
        ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
        ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
        ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
        ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
      ], "8", 0, "0|80?", 0, 0, 0, [
        ["(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", [9]],
        ["(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", [9]],
        ["800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}"],
        ["(?:810|902)\\d{7}", [10]], 0, 0, 0, 0, ["249\\d{6}", [9]]
      ], "8~10"
    ],
    BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
        ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2(?:[02]\\d|36|[68]0)|[3-58](?:[02]\\d|[68]0)|7(?:[02]\\d|32|[68]0))\\d{4}", [7]],
        ["6[0-35-7]\\d{5}", [7]],
        ["0800\\d{7}", [11]]
      ]
    ],
    CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [
      ["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]],
      ["", [10]],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
      ["900[2-9]\\d{6}", [10]],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]
    ]],
    CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
      ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
      ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
      ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
      ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
      ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
    ], "0011"],
    CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
        ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:12|573)\\d\\d|276)\\d{5}|[1-6]\\d{6}"],
        ["88\\d{5}|(?:8[0-69]|9[017-9])\\d{7}", [7, 9]]
      ]
    ],
    CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2[12]\\d{6}"],
        ["7[024-7]\\d{6}"], 0, ["8776\\d{4}"]
      ]
    ],
    CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
      [
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["222[1-589]\\d{5}"],
        ["026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}"], 0, ["80[0-2]\\d{6}"]
      ]
    ],
    CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", [9]],
        ["(?:6[89]|7[235-9])\\d{7}", [9]],
        ["800\\d{6}", [9]],
        ["90[016]\\d{6}", [9]],
        ["878\\d{6}", [9]],
        ["860\\d{9}", [12]],
        ["5[18]\\d{7}", [9]],
        ["74[0248]\\d{6}", [9]], 0, ["84[0248]\\d{6}", [9]]
      ]
    ],
    CI: ["225", "00", "[02]\\d{9}", [10],
      [
        ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:[15]\\d{3}|7(?:2(?:0[23]|1[2357]|2[245]|3[45]|4[3-5])|3(?:06|1[69]|[2-6]7)))\\d{5}"],
        ["0[157]\\d{8}"]
      ]
    ],
    CK: ["682", "00", "[2-578]\\d{4}", [5],
      [
        ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2\\d|3[13-7]|4[1-5])\\d{3}"],
        ["[578]\\d{4}"]
      ]
    ],
    CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
      [
        ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
        ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[03467]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}", [9]],
        ["", [9]],
        ["(?:123|8)00\\d{6}", [9, 11]], 0, 0, 0, 0, 0, ["44\\d{7}", [9]],
        ["600\\d{7,8}", [10, 11]]
      ]
    ],
    CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:22|33)\\d{6}", [9]],
        ["(?:24[23]|6(?:[25-9]\\d|40))\\d{6}", [9]],
        ["88\\d{6,7}"]
      ]
    ],
    CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12],
      [
        ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"],
        ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
        ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
        ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
      ], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, [
        ["(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|2(?:[02-57-9]\\d{3}|1(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))|(?:41[03]|8078|9(?:78|94))\\d\\d)\\d{5}|(?:10|2[0-57-9])(?:1(?:00|23)\\d\\d|95\\d{3,4})|(?:41[03]|9(?:78|94))(?:100\\d\\d|95\\d{3,4})|8078123|(?:43[35]|754|851)\\d{7,8}|(?:43[35]|754|851)(?:1(?:00\\d|23)\\d|95\\d{3,4})|(?:3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[13-9]\\d{6}|2(?:[0-24-9]\\d{5}|3\\d(?:\\d{4})?))|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[24-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[13-9]\\d{5}|2(?:[0-24-9]\\d{4}|3\\d(?:\\d{3})?))|9(?:[0-46-9]\\d{5}|5\\d{3,5}))", [7, 8, 9, 10, 11]],
        ["1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|[59][0-35-9]|6[25-7]|7[0-35-8])\\d{8}", [11]],
        ["(?:(?:10|21)8|8)00\\d{7}", [10, 12]],
        ["16[08]\\d{5}", [8]], 0, 0, 0, 0, 0, ["10(?:10\\d{4}|96\\d{3,4})|400\\d{7}|950\\d{7,8}|(?:2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", [7, 8, 9, 10, 11]]
      ], "00"
    ],
    CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["46"]],
        ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"],
        ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
        ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
      ], "0", 0, "0([3579]|4(?:[14]4|56))?", 0, 0, 0, [
        ["601055(?:[0-4]\\d|50)\\d\\d|6010(?:[0-4]\\d|5[0-4])\\d{4}|(?:46|60(?:[124-7][2-9]|8[1-9]))\\d{6}", [8, 10]],
        ["333301[0-5]\\d{3}|3333(?:00|2[5-9]|[3-9]\\d)\\d{4}|(?:3(?:24[1-9]|3(?:00|3[0-24-9]))|9101)\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}", [10]],
        ["1800\\d{7}", [11]],
        ["(?:19(?:0[01]|4[78])|901)\\d{7}", [10, 11]]
      ]
    ],
    CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
      ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))", 0, 0, 0, [
        ["210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}", [8]],
        ["(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}", [8]],
        ["800\\d{7}", [10]],
        ["90[059]\\d{7}", [10]], 0, 0, 0, 0, ["(?:210[0-6]|4\\d{3}|5100)\\d{4}", [8]]
      ]
    ],
    CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10],
      [
        ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
        ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
        ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
        ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:3[23]|4[89])\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}"],
        ["(?:5\\d|6[2-4])\\d{6}", [8]],
        ["800\\d{7}", [10]], 0, 0, 0, 0, 0, 0, ["807\\d{7}", [10]]
      ]
    ],
    CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
      [
        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}"],
        ["(?:36|5[1-389]|9\\d)\\d{5}"],
        ["800\\d{4}"], 0, 0, 0, 0, 0, ["(?:3[3-5]|4[356])\\d{5}"]
      ]
    ],
    CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
      ], 0, 0, 0, 0, 0, "[69]", [
        ["9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}"],
        ["953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}"], 0, 0, 0, 0, 0, ["955\\d{5}", [8]], 0, ["60[0-2]\\d{4}", [7]]
      ]
    ],
    CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
      ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
      ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
      ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
      ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
      ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
    ], "0011"],
    CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
      [
        ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2[2-6]\\d{6}"],
        ["9(?:10|[4-79]\\d)\\d{5}"],
        ["800\\d{5}"],
        ["90[09]\\d{5}"],
        ["700\\d{5}"], 0, ["(?:50|77)\\d{6}"], 0, 0, ["80[1-9]\\d{5}"]
      ]
    ],
    CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
        ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
        ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}", [9]],
        ["(?:60[1-8]\\d|7(?:0(?:[2-5]\\d|60)|19[01]|[2379]\\d\\d))\\d{5}", [9]],
        ["800\\d{6}", [9]],
        ["9(?:0[05689]|76)\\d{6}", [9]],
        ["70[01]\\d{6}", [9]],
        ["9(?:3\\d{9}|6\\d{7,10})"],
        ["9(?:5\\d|7[2-4])\\d{6}", [9]], 0, ["9[17]0\\d{6}", [9]],
        ["8[134]\\d{7}", [9]]
      ]
    ],
    DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      [
        ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
        ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
        ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
        ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
        ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
        ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
        ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
        ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
        ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
        ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
        ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
        ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
        ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"],
        ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
        ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["32\\d{9,11}|49[1-6]\\d{10}|322\\d{6}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}", [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
        ["1(?:(?:5(?:[0-25-9]\\d\\d|310)|76\\d\\d)\\d{6}|6[023]\\d{7,8})|17\\d{8}", [10, 11]],
        ["800\\d{7,12}", [10, 11, 12, 13, 14, 15]],
        ["(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", [10, 11]],
        ["700\\d{8}", [11]],
        ["1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}", [12, 13]],
        ["18(?:1\\d{5,11}|[2-9]\\d{8})", [8, 9, 10, 11, 12, 13, 14]],
        ["16(?:4\\d{1,10}|[89]\\d{1,11})", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], 0, ["180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}", [7, 8, 9, 10, 11, 12, 13, 14]]
      ]
    ],
    DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:1[2-5]|7[45])\\d{5}"],
        ["77\\d{6}"]
      ]
    ],
    DK: ["45", "00", "[2-9]\\d{7}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2(?:[0-59][1-9]|[6-8]\\d)|3(?:[0-3][1-9]|4[13]|5[1-58]|6[1347-9]|7\\d|8[1-8]|9[1-79])|4(?:[0-25][1-9]|[34][2-9]|6[13-579]|7[13579]|8[1-47]|9[127])|5(?:[0-36][1-9]|4[146-9]|5[3-57-9]|7[568]|8[1-358]|9[1-69])|6(?:[0135][1-9]|2[1-68]|4[2-8]|6[1689]|[78]\\d|9[15689])|7(?:[0-69][1-9]|7[3-9]|8[147])|8(?:[16-9][1-9]|2[1-58])|9(?:[1-47-9][1-9]|6\\d))\\d{5}"],
        ["(?:2[6-8]|37|6[78]|96)\\d{6}|(?:2[0-59]|3[0-689]|[457]\\d|6[0-69]|8[126-9]|9[1-47-9])[1-9]\\d{5}"],
        ["80\\d{6}"],
        ["90\\d{6}"]
      ]
    ],
    DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767", [
      ["767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}"],
      ["767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9", [
      ["8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}"],
      ["8[024]9[2-9]\\d{6}"],
      ["8(?:00(?:14|[2-9]\\d)|(?:33|44|55|66|77|88)[2-9]\\d)\\d{5}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[013-689])\\d{6}"],
        ["(?:5(?:4[0-29]|5\\d|6[0-3])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}", [9]],
        ["800\\d{6}", [9]],
        ["80[3-689]1\\d{5}", [9]], 0, 0, 0, 0, ["98[23]\\d{6}", [9]],
        ["80[12]1\\d{5}", [9]]
      ]
    ],
    EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["[2-7][2-7]\\d{6}", [8]],
        ["964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}", [9]],
        ["1800\\d{7}|1[78]00\\d{6}", [10, 11]], 0, 0, 0, 0, 0, ["[2-7]890\\d{4}", [8]]
      ]
    ],
    EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
        ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", [7]],
        ["(?:5\\d{5}|8(?:1(?:0(?:0(?:00|[178]\\d)|[3-9]\\d\\d)|(?:1(?:0[2-6]|1\\d)|(?:2[0-59]|[3-79]\\d)\\d)\\d)|2(?:0(?:0(?:00|4\\d)|(?:19|[2-7]\\d)\\d)|(?:(?:[124-69]\\d|3[5-9])\\d|7(?:[0-79]\\d|8[13-9])|8(?:[2-6]\\d|7[01]))\\d)|[349]\\d{4}))\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", [7, 8]],
        ["800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}"],
        ["(?:40\\d\\d|900)\\d{4}", [7, 8]],
        ["70[0-2]\\d{5}", [8]]
      ]
    ],
    EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
      [
        ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
        ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2\\d|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}", [8, 9]],
        ["1[0-25]\\d{8}", [10]],
        ["800\\d{7}", [10]],
        ["900\\d{7}", [10]]
      ]
    ],
    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]", [
      ["528[89]\\d{5}"],
      ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-467]|5[0-3]|8[0-5]))\\d{6}"],
      ["80[0-7]\\d{6}"],
      ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]
    ]],
    ER: ["291", "00", "[178]\\d{6}", [7],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}"],
        ["(?:17[1-3]|7\\d\\d)\\d{4}"]
      ]
    ],
    ES: ["34", "00", "[5-9]\\d{8}", [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}"],
        ["(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}"],
        ["[89]00\\d{6}"],
        ["80[367]\\d{6}"],
        ["70\\d{7}"], 0, ["51\\d{7}"], 0, 0, ["90[12]\\d{6}"]
      ]
    ],
    ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9],
      [
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["11667[01]\\d{3}|(?:11(?:1(?:1[124]|2[2-7]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8]|7\\d)|5(?:1[578]|44|5[0-4])|6(?:1[578]|2[69]|39|4[5-7]|5[0-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}"],
        ["700[1-9]\\d{5}|(?:7(?:0[1-9]|1[0-8]|22|77|86|99)|9\\d\\d)\\d{6}"]
      ]
    ],
    FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
      [
        ["(\\d{5})", "$1", ["20[2-59]"], "0$1"],
        ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"],
        ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
        ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
        ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]
      ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", [
        ["1[3-7][1-8]\\d{3,6}|(?:19[1-8]|[23568][1-8]\\d|9(?:00|[1-8]\\d))\\d{2,6}", [5, 6, 7, 8, 9]],
        ["4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]],
        ["800\\d{4,6}", [7, 8, 9]],
        ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}"]
      ], "00"
    ],
    FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}", [7]],
        ["(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", [7]],
        ["0800\\d{7}", [11]]
      ], "00"
    ],
    FK: ["500", "00", "[2-7]\\d{4}", [5], 0, 0, 0, 0, 0, 0, 0, [
      ["[2-47]\\d{4}"],
      ["[56]\\d{4}"]
    ]],
    FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}"],
        ["31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}"]
      ]
    ],
    FO: ["298", "00", "[2-9]\\d{5}", [6],
      [
        ["(\\d{6})", "$1", ["[2-9]"]]
      ], 0, 0, "(10(?:01|[12]0|88))", 0, 0, 0, [
        ["(?:20|[34]\\d|8[19])\\d{4}"],
        ["(?:[27][1-9]|5\\d|9[16])\\d{4}"],
        ["80[257-9]\\d{3}"],
        ["90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d"], 0, 0, 0, 0, ["(?:6[0-36]|88)\\d{4}"]
      ]
    ],
    FR: ["33", "00", "[1-9]\\d{8}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:26[013-9]|59[1-35-9])\\d{6}|(?:[13]\\d|2[0-57-9]|4[1-9]|5[0-8])\\d{7}"],
        ["(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7[3-9]\\d)\\d{6}"],
        ["80[0-5]\\d{6}"],
        ["836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}"], 0, 0, ["80[6-9]\\d{6}"], 0, ["9\\d{8}"],
        ["8(?:1[01]|2[0156]|4[024]|84)\\d{6}"]
      ]
    ],
    GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
      [
        ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
      ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1", 0, 0, [
        ["[01]1\\d{6}", [8]],
        ["(?:(?:0[2-7]|7[467])\\d|6(?:0[0-4]|10|[256]\\d))\\d{5}|[2-7]\\d{6}"]
      ]
    ],
    GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
        ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
        ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
        ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
        ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
        ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
        ["80[08]\\d{7}|800\\d{6}|8001111"],
        ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
        ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
        ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
        ["56\\d{8}", [10]]
      ], 0, " x"
    ],
    GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473", [
      ["473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-4]|5[579]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}"],
      ["473(?:4(?:0[2-79]|1[04-9]|2[0-5]|49|5[68])|5(?:2[01]|3[3-8])|901)\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}"],
        ["5(?:(?:(?:0555|1(?:[17]77|555))[5-9]|757(?:7[7-9]|8[01]))\\d|22252[0-4])\\d\\d|5(?:0(?:0[17]0|505)|1(?:0[01]0|1(?:07|33|51))|2(?:0[02]0|2[25]2)|3(?:0[03]0|3[35]3)|(?:40[04]|900)0|5222)[0-4]\\d{3}|(?:5(?:0(?:0(?:0\\d|11|22|3[0-6]|44|5[05]|77|88|9[09])|(?:[14]\\d|77)\\d|22[02])|1(?:1(?:[03][01]|[124]\\d|5[2-6]|7[0-4])|4\\d\\d)|[23]555|4(?:4\\d\\d|555)|5(?:[0157-9]\\d\\d|200|333|444)|6[89]\\d\\d|7(?:[0147-9]\\d\\d|5(?:00|[57]5))|8(?:0(?:[018]\\d|2[0-4])|5(?:55|8[89])|8(?:55|88))|9(?:090|[1-35-9]\\d\\d))|790\\d\\d)\\d{4}"],
        ["800\\d{6}"], 0, 0, 0, 0, 0, ["70[67]\\d{6}"]
      ]
    ],
    GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["594(?:[02-49]\\d|1[0-5]|5[6-9]|6[0-3]|80)\\d{4}"],
        ["(?:694(?:[0-249]\\d|3[0-8])|7093[0-3])\\d{4}"],
        ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:396|76\\d)\\d|476[0-5])\\d{4}"]
      ]
    ],
    GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [
      ["1481[25-9]\\d{5}", [10]],
      ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
      ["80[08]\\d{7}|800\\d{6}|8001111"],
      ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
      ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
      ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
      ["56\\d{8}", [10]]
    ]],
    GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["3082[0-5]\\d{4}|3(?:0(?:[237]\\d|8[01])|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", [9]],
        ["(?:2(?:[0346-9]\\d|5[67])|5(?:[03-7]\\d|9[1-9]))\\d{6}", [9]],
        ["800\\d{5}", [8]]
      ]
    ],
    GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2190[0-2]\\d{3}|2(?:0(?:[02]\\d|3[01])|16[24-9]|2[2-5]\\d)\\d{4}"],
        ["5251[0-4]\\d{3}|(?:5(?:[146-8]\\d\\d|250)|60(?:1[01]|6\\d))\\d{4}"]
      ]
    ],
    GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:19|3[1-7]|[68][1-9]|70|9\\d)\\d{4}"],
        ["[245]\\d{5}"],
        ["80\\d{4}"], 0, 0, 0, 0, 0, ["3[89]\\d{4}"]
      ]
    ],
    GM: ["220", "00", "[2-9]\\d{6}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}"],
        ["(?:[23679]\\d|4[015]|5[0-489])\\d{5}"]
      ]
    ],
    GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}", [8]],
        ["6[0-356]\\d{7}", [9]], 0, 0, 0, 0, 0, 0, ["722\\d{6}", [9]]
      ]
    ],
    GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],
        ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
        ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]
      ]
    ],
    GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
        ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}"],
        ["(?:222|55\\d)\\d{6}"],
        ["80\\d[1-9]\\d{5}"],
        ["90\\d[1-9]\\d{5}"]
      ]
    ],
    GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
      [
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
        ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
        ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", [10]],
        ["68[57-9]\\d{7}|(?:69|94)\\d{8}", [10]],
        ["800\\d{7,9}"],
        ["90[19]\\d{7}", [10]],
        ["70\\d{8}", [10]], 0, ["5005000\\d{3}", [10]], 0, 0, ["8(?:0[16]|12|[27]5|50)\\d{7}", [10]]
      ]
    ],
    GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["[267][2-9]\\d{6}", [8]],
        ["(?:[3-5]\\d\\d|80[0-4])\\d{5}", [8]],
        ["18[01]\\d{8}", [11]],
        ["19\\d{9}", [11]]
      ]
    ],
    GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671", [
      ["671(?:2\\d\\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[478])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}"],
      [""],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["443\\d{6}", [9]],
        ["9(?:5\\d|6[569]|77)\\d{6}", [9]], 0, 0, 0, 0, 0, 0, ["40\\d{5}", [7]]
      ]
    ],
    GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|50[0-6]|77[1-57])\\d{4}"],
        ["510\\d{4}|(?:6\\d|7[0-5])\\d{5}"],
        ["(?:289|8(?:00|6[28]|88|99))\\d{4}"],
        ["9008\\d{3}"], 0, 0, 0, 0, ["515\\d{4}"]
      ]
    ],
    HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
      [
        ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
        ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2(?:[13-9]\\d|2[013-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[0-8]|[579]\\d|6[0-2]))|58(?:0[1-9]|1[2-9]))\\d{4}", [8]],
        ["(?:4(?:44[0-25-9]|6(?:1[0-7]|4[0-57-9]|6[0-4])|7(?:4[0-2]|6[0-5]))|5(?:73[0-6]|95[0-8])|6(?:26[013-8]|66[0-3])|70(?:7[1-8]|8[0-4])|84(?:4[0-2]|8[0-35-9])|9(?:29[013-9]|39[014-9]|59[0-4]|899))\\d{4}|(?:4(?:4[0-35-9]|6[02357-9]|7[05])|5(?:[1-59][0-46-9]|6[0-4689]|7[0-246-9])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|70[1-49]|84[0-39]|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", [8]],
        ["800\\d{6}", [9]],
        ["900(?:[0-24-9]\\d{7}|3\\d{1,4})", [5, 6, 7, 8, 11]],
        ["8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", [8]], 0, ["30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", [8]],
        ["7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", [8]]
      ], "00"
    ],
    HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
      [
        ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:2(?:0[0-59]|1[1-9]|[23]\\d|4[02-7]|5[57]|6[245]|7[0135689]|8[01346-9]|9[0-2])|4(?:0[578]|2[3-59]|3[13-9]|4[0-68]|5[1-3589])|5(?:0[2357-9]|1[1-356]|4[03-5]|5\\d|6[014-69]|7[04]|80)|6(?:[056]\\d|17|2[067]|3[047]|4[0-378]|[78][0-8]|9[01])|7(?:0[5-79]|6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}", [8]],
        ["[37-9]\\d{7}", [8]],
        ["8002\\d{7}", [11]]
      ]
    ],
    HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
        ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", [8, 9]],
        ["9(?:(?:0[1-9]|[12589]\\d)\\d\\d|7(?:[0679]\\d\\d|5(?:[01]\\d|44|55|77|9[5-79])))\\d{4}|98\\d{6}", [8, 9]],
        ["80\\d{5,7}", [7, 8, 9]],
        ["6[01459]\\d{6}|6[01]\\d{4,5}", [6, 7, 8]],
        ["7[45]\\d{6}", [8]], 0, ["62\\d{6,7}|72\\d{6}", [8, 9]]
      ]
    ],
    HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:2\\d|5[1-5]|81|9[149])\\d{5}"],
        ["(?:[34]\\d|55)\\d{6}"],
        ["8\\d{7}"], 0, 0, 0, 0, 0, ["9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}"]
      ]
    ],
    HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
      ], "06", 0, 0, 0, 0, 0, [
        ["(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", [8]],
        ["(?:[257]0|3[01])\\d{7}", [9]],
        ["(?:[48]0\\d|680[29])\\d{5}"],
        ["9[01]\\d{6}", [8]], 0, 0, ["38\\d{7}", [9]], 0, ["21\\d{7}", [9]]
      ]
    ],
    ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
        ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
        ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
        ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
        ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
        ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
        ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", [7, 8, 9, 10, 11]],
        ["8[1-35-9]\\d{7,10}", [9, 10, 11, 12]],
        ["00(?:1803\\d{5,11}|7803\\d{7})|(?:177\\d|800)\\d{5,7}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]],
        ["809\\d{7}", [10]], 0, 0, ["(?:1500|8071\\d{3})\\d{3}", [7, 10]], 0, 0, ["804\\d{7}", [10]]
      ]
    ],
    IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
        ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
        ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
        ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}"],
        ["8(?:22|[35-9]\\d)\\d{6}", [9]],
        ["1800\\d{6}", [10]],
        ["15(?:1[2-8]|[2-8]0|9[089])\\d{6}", [10]],
        ["700\\d{6}", [9]],
        ["88210[1-9]\\d{4}|8(?:[35-79]5\\d\\d|8(?:[013-9]\\d\\d|2(?:[01][1-9]|[2-9]\\d)))\\d{5}", [10]],
        ["818\\d{6}", [9]], 0, ["76\\d{7}", [9]],
        ["18[59]0\\d{6}", [10]]
      ]
    ],
    IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
      [
        ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
        ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
        ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
        ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
        ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
        ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}", [8, 11, 12]],
        ["55(?:4(?:[01]0|5[0-2])|57[0-289])\\d{4}|5(?:(?:[0-2][02-9]|[36]\\d|[49][2-9]|8[3-7])\\d|5(?:01|2\\d|3[0-3]|4[34]|5[0-25689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", [9]],
        ["1(?:255|80[019]\\d{3})\\d{3}", [7, 10]],
        ["1212\\d{4}|1(?:200|9(?:0[0-2]|19))\\d{6}", [8, 10]], 0, ["151\\d{8,9}", [11, 12]],
        ["1599\\d{6}", [10]], 0, ["7(?:38(?:0\\d|5[0-3569]|88)|8(?:33|55|77|81)\\d)\\d{4}|7(?:18|2[23]|3[237]|47|6[258]|7\\d|82|9[2-9])\\d{6}", [9]],
        ["1700\\d{6}", [10]]
      ]
    ],
    IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24", [
      ["1624(?:230|[5-8]\\d\\d)\\d{3}"],
      ["76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}"],
      ["808162\\d{4}"],
      ["8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}"],
      ["70\\d{8}"], 0, ["3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}"], 0, ["56\\d{8}"]
    ]],
    IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
      [
        ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
        ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
        ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
        ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
        ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
      ], "0", 0, 0, 0, 0, 0, [
        ["2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}", [10]],
        ["(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}", [10]],
        ["000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))"],
        ["186[12]\\d{9}", [13]], 0, 0, ["140\\d{7}", [10]], 0, 0, ["1860\\d{7}", [11]]
      ]
    ],
    IO: ["246", "00", "3\\d{6}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["37\\d{5}"],
        ["38\\d{5}"]
      ]
    ],
    IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", [8, 9]],
        ["7[3-9]\\d{8}", [10]]
      ]
    ],
    IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
      [
        ["(\\d{4,5})", "$1", ["96"], "0$1"],
        ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|(?:12\\d|30[0-2])\\d|2(?:121|[2689]0\\d)|4(?:111|40\\d))\\d{4}", [6, 7, 10]],
        ["9(?:(?:0(?:[0-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d)\\d|9(?:[0-46]\\d\\d|5[15]0|8(?:[12]\\d|88)|9(?:0[0-3]|[19]\\d|21|69|77|8[7-9])))\\d{5}", [10]], 0, 0, 0, 0, ["96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", [4, 5]]
      ]
    ],
    IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-24589]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}", [7]],
        ["(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[238]))\\d{4}"],
        ["80[0-8]\\d{4}", [7]],
        ["90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}", [7]], 0, ["(?:689|8(?:7[18]|80)|95[48])\\d{4}", [7]],
        ["809\\d{4}", [7]], 0, ["49[0-24-79]\\d{4}", [7]]
      ], "00"
    ],
    IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12],
      [
        ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
        ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
        ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]],
        ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
        ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", [6, 7, 8, 9, 10, 11]],
        ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
        ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
        ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
        ["1(?:78\\d|99)\\d{6}", [9, 10]],
        ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]],
        ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
      ]
    ],
    JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [
      ["1534[0-24-8]\\d{5}"],
      ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],
      ["80(?:07(?:35|81)|8901)\\d{4}"],
      ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
      ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
      ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
      ["56\\d{8}"]
    ]],
    JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876", [
      ["8766060\\d{3}|(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:52[35]|6(?:0[1-3579]|1[0235-9]|[23]\\d|40|5[06]|6[2-589]|7[0-25-9]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}"],
      ["(?:658295|876(?:2(?:0[1-9]|[13-9]\\d|2[013-9])|[348]\\d\\d|5(?:0[1-9]|[1-9]\\d)|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}", [8]],
        ["7(?:[78][0-25-9]|9\\d)\\d{6}", [9]],
        ["80\\d{6}", [8]],
        ["9\\d{7}", [8]],
        ["70\\d{7}", [9]], 0, ["8(?:10|8\\d)\\d{5}", [8]],
        ["74(?:66|77)\\d{5}", [9]], 0, ["85\\d{6}", [8]]
      ]
    ],
    JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
        ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
        ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]
      ], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1", 0, 0, [
        ["(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", [9]],
        ["(?:60\\d|[7-9]0[1-9])\\d{7}", [10]],
        ["00777(?:[01]|5\\d)\\d\\d|(?:00(?:7778|882[1245])|(?:120|800\\d)\\d\\d)\\d{4}|00(?:37|66|78)\\d{6,13}"],
        ["990\\d{6}", [9]],
        ["60\\d{7}", [9]], 0, ["570\\d{6}", [9]],
        ["20\\d{8}", [10]],
        ["50[1-9]\\d{7}", [10]]
      ]
    ],
    KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
        ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}", [7, 8, 9]],
        ["(?:1(?:0[0-8]|1[0-7]|2[014]|30)|7\\d\\d)\\d{6}", [9]],
        ["800[02-8]\\d{5,6}", [9, 10]],
        ["900[02-9]\\d{5}", [9]]
      ]
    ],
    KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10],
      [
        ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", [9]],
        ["312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|600|7(?:[07]\\d|55)|88[08]|9(?:12|9[05-9]))\\d{6}", [9]],
        ["800\\d{6,7}"]
      ]
    ],
    KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
      [
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})", [8, 9]],
        ["(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", [8, 9]],
        ["1800(?:1\\d|2[019])\\d{4}", [10]],
        ["1900(?:1\\d|2[09])\\d{4}", [10]]
      ]
    ],
    KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0", 0, 0, 0, 0, 0, [
      ["(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}"],
      ["(?:6200[01]|7(?:310[1-9]|5(?:02[03-9]|12[0-47-9]|22[0-7]|[34](?:0[1-9]|8[02-9])|50[1-9])))\\d{3}|(?:63\\d\\d|7(?:(?:[0146-9]\\d|2[0-689])\\d|3(?:[02-9]\\d|1[1-9])|5(?:[0-2][013-9]|[34][1-79]|5[1-9]|[6-9]\\d)))\\d{4}", [8]], 0, 0, 0, 0, 0, 0, ["30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", [8]]
    ]],
    KM: ["269", "00", "[3478]\\d{6}", [7],
      [
        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["7[4-7]\\d{5}"],
        ["[34]\\d{6}"], 0, ["8\\d{6}"]
      ]
    ],
    KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869", [
      ["869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\\d{4}"],
      ["869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}"],
        ["19[1-3]\\d{7}", [10]]
      ]
    ],
    KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
      [
        ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
        ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
        ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"],
        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
        ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
      ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?", 0, 0, 0, [
        ["(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}", [5, 6, 8, 9, 10]],
        ["1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[0-46-9]|[16-9]\\d|2[013-9])\\d{6,7}", [9, 10]],
        ["00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|[38]0)\\d{7}", [9, 11, 12, 13, 14]],
        ["60[2-9]\\d{6}", [9]],
        ["50\\d{8,9}", [10, 11]], 0, ["1(?:5(?:22|33|44|66|77|88|99)|6(?:[07]0|44|6[0168]|88)|8(?:00|33|55|77|99))\\d{4}", [8]],
        ["15\\d{7,8}", [9, 10]],
        ["70\\d{8}", [10]]
      ]
    ],
    KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
      [
        ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
        ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", [8]],
        ["(?:41\\d\\d|5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|1(?:00|11|6[16])|2[26]2|3[36]3|4[46]4|7(?:0[013-9]|[67]\\d)|8[68]8|9(?:[069]\\d|3[039]))|9(?:(?:[04679]\\d|8[057-9])\\d|1(?:1[01]|99)|2(?:00|2\\d)|3(?:00|3[03])|5(?:00|5\\d)))\\d{4}", [8]],
        ["18\\d{5}", [7]]
      ]
    ],
    KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345", [
      ["345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|4[89]|88)|9(?:14|4[035-9]))\\d{4}"],
      ["345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["(?:345976|900[2-9]\\d\\d)\\d{4}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", [
      ["(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9]|97)|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]|59))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}", [10]],
      ["7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}", [10]],
      ["8(?:00|108\\d{3})\\d{7}"],
      ["809\\d{7}", [10]],
      ["808\\d{7}", [10]], 0, 0, 0, ["751\\d{7}", [10]]
    ], "8~10"],
    LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[0135-9]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", [8]],
        ["208[78]\\d{6}|(?:20[23579]|30[24])\\d{7}", [10]], 0, 0, 0, 0, ["30[0135-9]\\d{6}", [9]]
      ]
    ],
    LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["7(?:62|8[0-7]|9[04-9])\\d{4}|(?:[14-69]\\d|2(?:[14-69]\\d|[78][1-9])|7[2-57]|8[02-9])\\d{5}"],
        ["793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}"], 0, ["9[01]\\d{6}", [8]], 0, 0, 0, 0, 0, ["80\\d{6}", [8]]
      ]
    ],
    LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758", [
      ["758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}"],
      ["758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
      ], "0", 0, "(1001)|0", 0, 0, 0, [
        ["(?:2(?:01|1[27]|2[02]|3\\d|6[02-578]|96)|3(?:[24]0|33|7[0135-7]|8[048]|9[0269]))\\d{4}", [7]],
        ["(?:6(?:(?:4[5-9]|5[0-469])\\d|6(?:[024-6]\\d|[17]0|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}"],
        ["8002[28]\\d\\d|80(?:05\\d|9)\\d{4}"],
        ["90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", [7]], 0, ["697(?:42|56|[78]\\d)\\d{4}", [9]],
        ["870(?:28|87)\\d\\d", [7]]
      ]
    ],
    LK: ["94", "00", "[1-9]\\d{8}", [9],
      [
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}"],
        ["7(?:[0-25-8]\\d|4[0-4])\\d{6}"], 0, 0, 0, 0, ["1973\\d{5}"]
      ]
    ],
    LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["2\\d{7}", [8]],
        ["(?:(?:(?:22|33)0|555|(?:77|88)\\d)\\d|4(?:240|[67]))\\d{5}|[56]\\d{6}", [7, 9]], 0, ["332(?:02|[34]\\d)\\d{4}", [9]]
      ]
    ],
    LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2\\d{7}"],
        ["[56]\\d{7}"],
        ["800[1256]\\d{4}"]
      ]
    ],
    LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1],
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1],
        ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1],
        ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]
      ], "0", 0, "[08]", 0, 0, 0, [
        ["(?:3[1478]|4[124-6]|52)\\d{6}"],
        ["6\\d{7}"],
        ["80[02]\\d{5}"],
        ["9(?:0[0239]|10)\\d{5}"],
        ["70[05]\\d{5}"], 0, ["70[67]\\d{5}"], 0, ["[89]01\\d{5}"],
        ["808\\d{5}"]
      ]
    ],
    LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
      [
        ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
      ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", 0, 0, 0, [
        ["(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}"],
        ["6(?:[269][18]|5[1568]|7[189]|81)\\d{6}", [9]],
        ["800\\d{5}", [8]],
        ["90[015]\\d{5}", [8]], 0, 0, 0, 0, ["20(?:1\\d{5}|[2-689]\\d{1,7})", [4, 5, 6, 7, 8, 9, 10]],
        ["801\\d{5}", [8]]
      ]
    ],
    LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["6\\d{7}"],
        ["2333[0-8]\\d{3}|2(?:[0-24-9]\\d\\d|3(?:0[07]|[14-9]\\d|2[02-9]|3[0-24-9]))\\d{4}"],
        ["80\\d{6}"],
        ["90\\d{6}"], 0, 0, 0, 0, 0, ["81\\d{6}"]
      ]
    ],
    LY: ["218", "00", "[2-9]\\d{8}", [9],
      [
        ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}"],
        ["9[1-6]\\d{7}"]
      ]
    ],
    MA: ["212", "00", "[5-8]\\d{8}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
        ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
        ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
        ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-467]|5[0-3]|8[0-5]))\\d{6}"],
        ["80[0-7]\\d{6}"],
        ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]
      ]
    ],
    MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:870|9[2-47-9]\\d)\\d{5}", [8]],
        ["4(?:[469]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}"],
        ["(?:800|90\\d)\\d{5}", [8]]
      ]
    ],
    MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}"],
        ["562\\d{5}|(?:6\\d|7[16-9])\\d{6}"],
        ["800\\d{5}"],
        ["90[056]\\d{5}"], 0, 0, ["803\\d{5}"], 0, ["3[08]\\d{6}"],
        ["808\\d{5}"]
      ]
    ],
    ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}", [8]],
        ["6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}", [8]],
        ["80(?:[0-2578]|9\\d)\\d{5}"],
        ["9(?:4[1568]|5[178])\\d{5}", [8]], 0, 0, ["77[1-9]\\d{5}", [8]], 0, ["78[1-49]\\d{5}", [8]]
      ]
    ],
    MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
      ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
      ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"],
      ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]
    ]],
    MG: ["261", "00", "[23]\\d{8}", [9],
      [
        ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
      ], "0", 0, "([24-9]\\d{6})$|0", "20$1", 0, 0, [
        ["2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[356]|8[268]|9[2457])\\d{5}"],
        ["3[2-47-9]\\d{7}"], 0, 0, 0, 0, 0, 0, ["22\\d{7}"]
      ]
    ],
    MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
      ], "1", 0, 0, 0, 0, 0, [
        ["(?:247|528|625)\\d{4}"],
        ["(?:(?:23|54)5|329|45[35-8])\\d{4}"], 0, 0, 0, 0, 0, 0, ["635\\d{4}"]
      ]
    ],
    MK: ["389", "00", "[2-578]\\d{7}", [8],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:2(?:62|77)0|3444)\\d|4[56]440)\\d{3}|(?:34|4[357])700\\d{3}|(?:2(?:[0-3]\\d|5[0-578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}"],
        ["7(?:3555|(?:474|9[019]7)7)\\d{3}|7(?:[0-25-8]\\d\\d|3(?:[1-478]\\d|6[01])|4(?:2\\d|60|7[01578])|9(?:[2-4]\\d|5[01]|7[015]))\\d{4}"],
        ["800\\d{5}"],
        ["5\\d{7}"], 0, 0, 0, 0, 0, ["8(?:0[1-9]|[1-9]\\d)\\d{5}"]
      ]
    ],
    ML: ["223", "00", "[24-9]\\d{7}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}"],
        ["2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[2-49])\\d{6}"],
        ["80\\d{6}"]
      ]
    ],
    MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
      [
        ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"],
        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
        ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
        ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
        ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1(?:(?:12|[28]\\d|3[56]|7[3-6]|9[0-6])\\d|4(?:2[29]|62|7[0-2]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|[26]2|7[0-2]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[013])|3(?:20\\d|4(?:70|83)|56)|420\\d|5(?:2\\d|470))|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|2472|3(?:20\\d|470)|4(?:2[04]\\d|472)|7(?:3\\d\\d|4[67]0|8(?:[01459]\\d|8))))\\d{4}|5(?:2(?:2\\d{5,6}|47[02]\\d{4})|(?:3472|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[01])|8(?:20\\d|47[02])|9(?:20\\d|470))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:(?:2\\d|51)\\d|4(?:[1-35-9]\\d|4[0-57-9]))|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|(?:[35]2|64)\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}", [6, 7, 8, 9]],
        ["(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}", [7, 8, 9, 10]],
        ["80080(?:0[1-9]|2\\d)\\d{3}", [10]], 0, 0, 0, 0, 0, ["1333\\d{4}", [8]]
      ]
    ],
    MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10],
      [
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
        ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
        ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["[12]2[1-3]\\d{5,6}|(?:(?:[12](?:1|27)|5[368])\\d\\d|7(?:0(?:[0-5]\\d|7[078]|80)|128))\\d{4}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}"],
        ["(?:83[01]|92[039])\\d{5}|(?:5[05]|6[069]|72|8[015689]|9[013-9])\\d{6}", [8]], 0, 0, 0, 0, 0, 0, ["712[0-79]\\d{4}|7(?:1[013-9]|[5-9]\\d)\\d{5}", [8]]
      ]
    ],
    MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
      [
        ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}", [8]],
        ["6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}", [8]],
        ["0800\\d{3}", [7]]
      ]
    ],
    MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670", [
      ["670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}"],
      [""],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:596(?:[03-7]\\d|1[05]|2[7-9]|8[0-39]|9[04-9])|80[6-9]\\d\\d|9(?:477[6-9]|767[4589]))\\d{4}"],
        ["(?:69[67]\\d\\d|7091[0-3])\\d{4}"],
        ["80[0-5]\\d{6}"],
        ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:397[0-3]|477[0-5]|76(?:6\\d|7[0-367]))\\d{4}"]
      ]
    ],
    MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:25[08]|35\\d|45[1-7])\\d{5}"],
        ["[2-4][0-46-9]\\d{6}"],
        ["800\\d{5}"]
      ]
    ],
    MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664", [
      ["6644(?:1[0-3]|91)\\d{4}"],
      ["664(?:3(?:49|9[1-6])|49[2-6])\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["20(?:3[1-4]|6[059])\\d{4}|2(?:0[19]|[1-357]\\d|60)\\d{5}"],
        ["(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}"],
        ["800(?:02|[3467]\\d)\\d{3}"],
        ["5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}"], 0, 0, ["501\\d{5}"],
        ["7117\\d{4}"],
        ["3550\\d{4}"]
      ]
    ],
    MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
        ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2(?:[0346-8]\\d|1[0-7])|4(?:[013568]\\d|2[4-8]|71|90)|54(?:[3-5]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", [7, 8]],
        ["5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|(?:5(?:2[5-9]|4[3-689]|[57]\\d|8[0-689]|9[0-8])|7(?:0[0-4]|3[013]))\\d{5}", [8]],
        ["802\\d{7}|80[0-2]\\d{4}", [7, 10]],
        ["30\\d{5}", [7]], 0, 0, 0, 0, ["3(?:20|9\\d)\\d{4}", [7]]
      ], "020"
    ],
    MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:3(?:0[0-4]|3[0-59])|6(?:[58][024689]|6[024-68]|7[02468]))\\d{4}", [7]],
        ["(?:46[46]|[79]\\d\\d)\\d{4}", [7]],
        ["800\\d{7}", [10]],
        ["900\\d{7}", [10]], 0, 0, ["4(?:0[01]|50)\\d{4}", [7]]
      ], "00"
    ],
    MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1[2-9]|2[12]\\d\\d)\\d{5}"],
        ["111\\d{6}|(?:31|77|[89][89])\\d{7}", [9]]
      ]
    ],
    MX: ["52", "0[09]", "[2-9]\\d{9}", [10],
      [
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["657[12]\\d{6}|(?:2(?:0[01]|2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[267][1-9]|3[1-8]|[45]\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[0-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1346][1-9]|[27]\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69]\\d|7[12]|8[1-8]))\\d{7}"],
        ["657[12]\\d{6}|(?:2(?:2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[267][1-9]|3[1-8]|[45]\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[0-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1346][1-9]|[27]\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69]\\d|7[12]|8[1-8]))\\d{7}"],
        ["8(?:00|88)\\d{7}"],
        ["900\\d{7}"],
        ["500\\d{7}"], 0, 0, 0, 0, ["300\\d{7}"]
      ], "00"
    ],
    MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
        ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
        ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["4270\\d{4}|(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", [8, 9]],
        ["1(?:1888[689]|4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0-4]\\d|5[0-7]))|(?:[269]\\d|[37][1-9]|4[235-9])\\d|5(?:31|9\\d\\d)|8(?:1[23]|[236]\\d|4[06]|5(?:46|[7-9])|7[016-9]|8[01]|9[0-8]))\\d{5}", [9, 10]],
        ["1[378]00\\d{6}", [10]],
        ["1600\\d{6}", [10]], 0, 0, 0, 0, ["15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}", [10]]
      ]
    ],
    MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", [8]],
        ["8[2-79]\\d{7}", [9]],
        ["800\\d{6}", [9]]
      ]
    ],
    NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["64426\\d{3}|6(?:1(?:2[2-7]|3[01378]|4[0-4])|254|32[0237]|4(?:27|41|5[25])|52[236-8]|626|7(?:2[2-4]|30))\\d{4,5}|6(?:1(?:(?:0\\d|2[0189]|3[24-69]|4[5-9])\\d|17|69|7[014])|2(?:17|5[0-36-8]|69|70)|3(?:17|2[14-689]|34|6[289]|7[01]|81)|4(?:17|2[0-2]|4[06]|5[0137]|69|7[01])|5(?:17|2[0459]|69|7[01])|6(?:17|25|38|42|69|7[01])|7(?:17|2[569]|3[13]|6[89]|7[01]))\\d{4}"],
        ["(?:60|8[1245])\\d{7}", [9]],
        ["80\\d{7}", [9]],
        ["8701\\d{5}", [9]], 0, 0, 0, 0, ["8(?:3\\d\\d|86)\\d{5}"]
      ]
    ],
    NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}"],
        ["(?:5[0-4]|[79]\\d|8[0-79])\\d{4}"],
        ["050\\d{3}"],
        ["36\\d{4}"]
      ]
    ],
    NE: ["227", "00", "[027-9]\\d{7}", [8],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}"],
        ["(?:23|7[0467]|[89]\\d)\\d{6}"],
        ["08\\d{6}"],
        ["09\\d{6}"]
      ]
    ],
    NF: ["672", "00", "[13]\\d{5}", [6],
      [
        ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
        ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
      ], 0, 0, "([0-258]\\d{4})$", "3$1", 0, 0, [
        ["(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}"],
        ["(?:14|3[58])\\d{4}"]
      ]
    ],
    NG: ["234", "009", "38\\d{6}|[78]\\d{9,13}|(?:20|9\\d)\\d{8}", [8, 10, 11, 12, 13, 14],
      [
        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["3"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"],
        ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
        ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:20(?:[1259]\\d|3[013-9]|4[1-8]|6[024-689]|7[1-79]|8[2-9])|38)\\d{6}", [8, 10]],
        ["(?:702[0-24-9]|819[01])\\d{6}|(?:7(?:0[13-9]|[12]\\d)|8(?:0[1-9]|1[0-8])|9(?:0[1-9]|1[1-6]))\\d{7}", [10]],
        ["800\\d{7,11}", [10, 11, 12, 13, 14]], 0, 0, 0, ["700\\d{7,11}", [10, 11, 12, 13, 14]]
      ]
    ],
    NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2\\d{7}"],
        ["(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}"],
        ["1800\\d{4}"]
      ]
    ],
    NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
      [
        ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
        ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", [9]],
        ["(?:6[1-58]|970\\d)\\d{7}", [9, 11]],
        ["800\\d{4,7}", [7, 8, 9, 10]],
        ["90[069]\\d{4,7}", [7, 8, 9, 10]], 0, 0, ["140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d", [5, 6, 9]],
        ["66\\d{7}", [9]],
        ["(?:85|91)\\d{7}", [9]]
      ]
    ],
    NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
      [
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]
      ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]", [
        ["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", [8]],
        ["(?:4[015-8]|9\\d)\\d{6}", [8]],
        ["80[01]\\d{5}", [8]],
        ["82[09]\\d{5}", [8]],
        ["880\\d{5}", [8]],
        ["81[23]\\d{5}", [8]],
        ["(?:0[235-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}"], 0, ["85[0-5]\\d{5}", [8]],
        ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]
      ]
    ],
    NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
      [
        ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
        ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"],
        ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}", [8]],
        ["9(?:00|6[0-3]|7[024-6]|8[0-24-68])\\d{7}", [10]],
        ["1(?:66001|800\\d\\d)\\d{5}", [11]]
      ]
    ],
    NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["444\\d{4}"],
        ["(?:55[3-9]|666|8\\d\\d)\\d{4}"]
      ]
    ],
    NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["[47]\\d{3}", [4]],
        ["(?:[56]|888[1-9])\\d{3}"]
      ]
    ],
    NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"],
        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["240\\d{5}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}", [8]],
        ["2(?:[0-27-9]\\d|6)\\d{6,7}|2(?:1\\d|75)\\d{5}", [8, 9, 10]],
        ["508\\d{6,7}|80\\d{6,8}", [8, 9, 10]],
        ["(?:1[13-57-9]\\d{5}|50(?:0[08]|30|66|77|88))\\d{3}|90\\d{6,8}", [7, 8, 9, 10]],
        ["70\\d{7}", [9]], 0, ["8(?:1[16-9]|22|3\\d|4[045]|5[459]|6[235-9]|7[0-3579]|90)\\d{2,7}"]
      ], "00"
    ],
    OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
      [
        ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
        ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2[1-6]\\d{6}", [8]],
        ["(?:1505|90[1-9]\\d)\\d{4}|(?:7[126-9]|9[1-9])\\d{6}", [8]],
        ["8007\\d{4,5}|(?:500|800[05])\\d{4}"],
        ["900\\d{5}", [8]]
      ]
    ],
    PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
        ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[058]|7[0167]|8[2358]|9[1389])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[02-9])|3(?:[07-9]\\d|1[0-7]|2[0-5]|33|4[0-79]|5[0-35]|6[068])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[0156]|7[0-24-9]|8[5-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", [7]],
        ["(?:1[16]1|21[89]|6\\d{3}|8(?:1[01]|7[23]))\\d{4}", [7, 8]],
        ["800\\d{4,5}|(?:00800|800\\d)\\d{6}"],
        ["(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", [7]]
      ]
    ],
    PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
        ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
        ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:(?:4[34]|5[14])[0-8]|687)\\d|7(?:173|(?:3[0-8]|55)\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[0569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}", [8]],
        ["9\\d{8}", [9]],
        ["800\\d{5}", [8]],
        ["805\\d{5}", [8]],
        ["80[24]\\d{5}", [8]], 0, 0, 0, 0, ["801\\d{5}", [8]]
      ], "00", " Anexo "
    ],
    PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["4(?:0[4-689]|9[4-68])\\d{5}", [8]],
        ["8[7-9]\\d{6}", [8]],
        ["80[0-5]\\d{6}", [9]], 0, 0, 0, ["44\\d{4}", [6]], 0, ["499\\d{5}", [8]]
      ]
    ],
    PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|85[02-46-9])\\d{4}", [7]],
        ["(?:7\\d|8[1-38])\\d{6}", [8]],
        ["180\\d{4}", [7]], 0, 0, 0, 0, ["27[01]\\d{4}", [7]],
        ["2(?:0[0-57]|7[568])\\d{4}", [7]]
      ], "00"
    ],
    PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
      [
        ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
        ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
        ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
        ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|(?:2|8[2-8]\\d\\d)\\d{5}", [6, 8, 9, 10]],
        ["(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\\d|4[2-9]|8[135-9]|9[1-9]))\\d{7}", [10]],
        ["1800\\d{7,9}", [11, 12, 13]]
      ]
    ],
    PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
        ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
        ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
        ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
        ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
        ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}", [9, 10]],
        ["3(?:[0-247]\\d|3[0-79]|55|64)\\d{7}", [10]],
        ["800\\d{5}(?:\\d{3})?", [8, 11]],
        ["900\\d{5}", [8]],
        ["122\\d{6}", [9]], 0, ["(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", [11, 12]]
      ]
    ],
    PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10],
      [
        ["(\\d{5})", "$1", ["19"]],
        ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["47\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))", [7, 9]],
        ["21(?:1[013-5]|2\\d|3[4-9])\\d{5}|(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", [9]],
        ["800\\d{6,7}", [9, 10]],
        ["70[01346-8]\\d{6}", [9]], 0, 0, ["804\\d{6}", [9]],
        ["64\\d{4,7}", [6, 7, 8, 9]],
        ["39\\d{7}", [9]],
        ["801\\d{6}", [9]]
      ]
    ],
    PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:4[1-35-9]|5[0-47-9]|80[6-9]\\d\\d)\\d{4}"],
        ["(?:4[02-489]|5[02-9]|708(?:4[0-5]|5[0-6]))\\d{4}"],
        ["80[0-5]\\d{6}", [9]],
        ["8[129]\\d{7}", [9]]
      ]
    ],
    PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939", [
      ["(?:787|939)[2-9]\\d{6}"],
      [""],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}", [8]],
        ["5[69]\\d{7}", [9]],
        ["1800\\d{6}", [10]], 0, 0, 0, 0, 0, 0, ["1700\\d{6}", [10]]
      ]
    ],
    PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
      [
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:[12]\\d|3[1-689]|4[1-59]|[57][1-9]|6[1-35689]|8[1-69]|9[1256])\\d{6}"],
        ["6(?:[06]92(?:30|9\\d)|[35]92(?:[049]\\d|3[034]))\\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\\d\\d|480))\\d{5}"],
        ["80[02]\\d{6}"],
        ["(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}"],
        ["884[0-4689]\\d{5}"],
        ["600\\d{6}|6[06]92(?:0\\d|3[349]|49)\\d{3}"],
        ["70(?:38[01]|596|(?:7\\d|8[17])\\d)\\d{4}"],
        ["6(?:222\\d|8988)\\d{4}"],
        ["30\\d{7}"],
        ["80(?:8\\d|9[1579])\\d{5}"]
      ]
    ],
    PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}"],
        ["(?:(?:46|83)[0-5]|(?:6[2-4689]|78)0)\\d{4}|(?:45|77|88)\\d{5}"]
      ]
    ],
    PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
      [
        ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
        ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
        ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
        ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}", [7, 8, 9]],
        ["9(?:51|6[129]|7[1-6]|8[1-7]|9[1-5])\\d{6}", [9]],
        ["9800\\d{5,7}", [9, 10, 11]], 0, 0, 0, ["[2-9]0\\d{4,7}", [6, 7, 8, 9]], 0, ["8700[0-4]\\d{4}", [9]]
      ]
    ],
    QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["4(?:1111|2022)\\d{3}|4(?:[04]\\d\\d|14[0-6]|999)\\d{4}", [8]],
        ["[35-7]\\d{7}", [8]],
        ["800\\d{4}|(?:0080[01]|800)\\d{6}", [7, 9, 11]], 0, 0, 0, 0, ["2[16]\\d{5}", [7]]
      ]
    ],
    RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
        ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],
        ["80\\d{7}"],
        ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[278]|3[0-37]))\\d{4}"],
        ["8(?:1[019]|2[0156]|84|90)\\d{6}"]
      ]
    ],
    RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
      [
        ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
        ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d"],
        ["(?:630|702)0\\d{5}|(?:6(?:00|2\\d)|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[0-39]))\\d{6}", [9]],
        ["800\\d{6}", [9]],
        ["90[0136]\\d{6}", [9]], 0, 0, ["(?:37\\d|80[578])\\d{6}", [9]], 0, 0, ["801\\d{6}", [9]]
      ], 0, " int "
    ],
    RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
        ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}", [7, 8, 9, 10, 11, 12]],
        ["6(?:[0-689]|7\\d)\\d{6,7}", [8, 9, 10]],
        ["800\\d{3,9}"],
        ["(?:78\\d|90[0169])\\d{3,7}", [6, 7, 8, 9, 10]], 0, 0, ["7[06]\\d{4,10}"]
      ]
    ],
    RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
      [
        ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
        ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
        ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
      ], "8", 0, 0, 0, 0, "3[04-689]|[489]", [
        ["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", [10]],
        ["9\\d{9}", [10]],
        ["8(?:0[04]|108\\d{3})\\d{7}"],
        ["80[39]\\d{7}", [10]],
        ["808\\d{7}", [10]]
      ], "8~10"
    ],
    RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:06|2[23568]\\d)\\d{6}"],
        ["7[237-9]\\d{7}", [9]],
        ["800\\d{6}", [9]],
        ["900\\d{6}", [9]]
      ]
    ],
    SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
      [
        ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", [9]],
        ["579[01]\\d{5}|5(?:[013-689]\\d|7[0-8])\\d{6}", [9]],
        ["800\\d{7}", [10]],
        ["925\\d{6}", [9]], 0, 0, ["811\\d{7}", [10]], 0, 0, ["920\\d{6}", [9]]
      ]
    ],
    SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7],
      [
        ["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", [5]],
        ["48\\d{3}|(?:(?:6[89]|7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}"],
        ["1[38]\\d{3}", [5]], 0, 0, 0, 0, 0, ["5[12]\\d{3}", [5]]
      ]
    ],
    SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["4[2-46]\\d{5}"],
        ["2[125-8]\\d{5}"],
        ["800[08]\\d{3}"],
        ["85\\d{5}"], 0, 0, 0, 0, ["971\\d{4}|(?:64|95)\\d{5}"]
      ], "00"
    ],
    SD: ["249", "00", "[19]\\d{8}", [9],
      [
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["1(?:5\\d|8[35-7])\\d{6}"],
        ["(?:1[0-2]|9[0-3569])\\d{7}"]
      ]
    ],
    SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12],
      [
        ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
        ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
        ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
        ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
        ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
        ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
        ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
        ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
        ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}", [7, 8, 9]],
        ["7[02369]\\d{7}", [9]],
        ["20\\d{4,7}", [6, 7, 8, 9]],
        ["649\\d{6}|99[1-59]\\d{4}(?:\\d{3})?|9(?:00|39|44)[1-8]\\d{3,6}", [7, 8, 9, 10]],
        ["75[1-8]\\d{6}", [9]],
        ["(?:25[245]|67[3-68])\\d{9}", [12]],
        ["10[1-8]\\d{6}", [9]],
        ["74[02-9]\\d{6}", [9]], 0, ["77[0-7]\\d{6}", [9]]
      ]
    ],
    SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
        ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["662[0-24-9]\\d{4}|6(?:[0-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}", [8]],
        ["896[0-4]\\d{4}|(?:8(?:0[1-9]|[1-8]\\d|9[0-5])|9[0-8]\\d)\\d{5}", [8]],
        ["(?:18|8)00\\d{7}", [10, 11]],
        ["1900\\d{7}", [11]], 0, 0, ["7000\\d{7}", [11]], 0, ["(?:3[12]\\d|666)\\d{5}", [8]]
      ]
    ],
    SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]", [
      ["2(?:[0-57-9]\\d|6[4-9])\\d\\d"],
      ["[56]\\d{4}", [5]], 0, 0, 0, 0, 0, 0, ["262\\d\\d", [5]]
    ]],
    SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
      [
        ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
        ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:[1-357][2-8]|4[24-8])\\d{6}", [8]],
        ["65(?:[178]\\d|5[56]|6[01])\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}", [8]],
        ["80\\d{4,6}", [6, 7, 8]],
        ["89[1-3]\\d{2,5}|90\\d{4,6}"], 0, 0, 0, 0, ["(?:59\\d\\d|8(?:1(?:[67]\\d|8[0-589])|2(?:0\\d|2[0-37-9]|8[0-2489])|3[389]\\d))\\d{4}", [8]]
      ], "00"
    ],
    SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79", [
      ["79\\d{6}", [8]],
      ["(?:4[015-8]|9\\d)\\d{6}", [8]],
      ["80[01]\\d{5}", [8]],
      ["82[09]\\d{5}", [8]],
      ["880\\d{5}", [8]],
      ["81[23]\\d{5}", [8]],
      ["(?:0[235-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}"], 0, ["85[0-5]\\d{5}", [8]],
      ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]
    ]],
    SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
      [
        ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
        ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d"],
        ["909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}", [9]],
        ["800\\d{6}", [9]],
        ["9(?:00|[78]\\d)\\d{6}", [9]], 0, 0, ["96\\d{7}", [9]],
        ["9090\\d{3}", [7]],
        ["6(?:02|5[0-4]|9[0-6])\\d{6}", [9]],
        ["8[5-9]\\d{7}", [9]]
      ]
    ],
    SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
      [
        ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
      ], "0", 0, 0, 0, 0, 0, [
        ["22[2-4][2-9]\\d{4}"],
        ["(?:25|3[0-5]|66|7[2-9]|8[08]|9[09])\\d{6}"]
      ]
    ],
    SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
        ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
      ], 0, 0, "([89]\\d{5})$", "0549$1", 0, 0, [
        ["0549(?:8[0157-9]|9\\d)\\d{4}", [10]],
        ["6[16]\\d{6}", [8]], 0, ["7[178]\\d{6}", [8]], 0, 0, 0, 0, ["5[158]\\d{6}", [8]]
      ]
    ],
    SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}"],
        ["7(?:(?:[06-8]\\d|[19]0|21)\\d|5(?:0[01]|[19]0|2[25]|3[36]|[4-7]\\d|8[35]))\\d{5}"],
        ["800\\d{6}"],
        ["88[4689]\\d{6}"], 0, 0, 0, 0, ["(?:3(?:392|9[01]\\d)\\d|93(?:3[13]0|929))\\d{4}"],
        ["81[02468]\\d{6}"]
      ]
    ],
    SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
      [
        ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
        ["(\\d{6})", "$1", ["[134]"]],
        ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
        ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
        ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}", [6, 7]],
        ["(?:(?:15|(?:3[59]|4[89]|6\\d|7[679]|8[08])\\d|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:[67]\\d\\d|904)\\d{5}", [7, 8, 9]]
      ]
    ],
    SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
        ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
        ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}"],
        ["(?:7[124-7]|8[124-9])\\d{5}", [7]], 0, 0, 0, 0, 0, 0, ["56\\d{4}", [6]]
      ]
    ],
    SS: ["211", "00", "[19]\\d{8}", [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["1[89]\\d{7}"],
        ["(?:12|9[1257-9])\\d{7}"]
      ]
    ],
    ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["22\\d{5}"],
        ["900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}"]
      ]
    ],
    SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:79(?:0[0347-9]|[1-9]\\d)|89(?:0[024589]|[1-9]\\d))\\d{3}|2(?:[1-69]\\d|[78][0-8])\\d{5}", [8]],
        ["[67]\\d{7}", [8]],
        ["800\\d{8}|80[01]\\d{4}", [7, 11]],
        ["900\\d{4}(?:\\d{4})?", [7, 11]]
      ]
    ],
    SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721", [
      ["7215(?:4[2-8]|8[239]|9[056])\\d{4}"],
      ["7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]
      ], "0", 0, 0, 0, 0, 0, [
        ["21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}"],
        ["(?:50|9[1-689])\\d{7}", [9]]
      ]
    ],
    SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
        ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["[23][2-5]\\d{6}", [8]],
        ["7[6-9]\\d{6}", [8]],
        ["0800\\d{4}", [8]],
        ["900\\d{6}", [9]], 0, 0, 0, 0, ["70\\d{6}", [8]]
      ]
    ],
    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8", [
      ["8\\d{3}"]
    ]],
    TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649", [
      ["649(?:266|712|9(?:4\\d|50))\\d{4}"],
      ["649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["649(?:71[01]|966)\\d{4}"]
    ]],
    TD: ["235", "00|16", "(?:22|[689]\\d|77)\\d{6}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["22(?:[37-9]0|5[0-5]|6[89])\\d{4}"],
        ["(?:[69]\\d|77|8[56])\\d{6}"]
      ], "00"
    ],
    TG: ["228", "00", "[279]\\d{7}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}"],
        ["(?:7[0-29]|9[0-36-9])\\d{6}"]
      ]
    ],
    TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1[0689]|2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", [8]],
        ["67(?:1[0-8]|2[4-7])\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}", [9]],
        ["(?:001800\\d|1800)\\d{6}", [10, 13]],
        ["1900\\d{6}", [10]], 0, 0, 0, 0, ["6[08]\\d{7}", [9]]
      ]
    ],
    TJ: ["992", "810", "[0-57-9]\\d{8}", [9],
      [
        ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]],
        ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}"],
        ["(?:33[03-9]|4(?:1[18]|4[02-479])|81[1-9])\\d{6}|(?:[09]\\d|1[0178]|2[02]|[34]0|5[05]|7[01578]|8[078])\\d{7}"]
      ], "8~10"
    ],
    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7], 0, 0, 0, 0, 0, 0, 0, [
      ["(?:2[2-4]|[34]\\d)\\d{2,5}"],
      ["7[2-4]\\d{2,5}"]
    ]],
    TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", [7]],
        ["7[2-8]\\d{6}", [8]],
        ["80\\d{5}", [7]],
        ["90\\d{5}", [7]],
        ["70\\d{5}", [7]]
      ]
    ],
    TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
        ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]
      ], "8", 0, 0, 0, 0, 0, [
        ["(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}"],
        ["(?:6\\d|71)\\d{6}"]
      ], "8~10"
    ],
    TN: ["216", "00", "[2-57-9]\\d{7}", [8],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}"],
        ["3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-8])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}"],
        ["8010\\d{4}"],
        ["88\\d{6}"], 0, 0, 0, 0, 0, ["8[12]10\\d{4}"]
      ]
    ],
    TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
      [
        ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
        ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
        ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}", [5]],
        ["(?:5(?:4[0-5]|5[4-6])|6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}", [7]],
        ["0800\\d{3}", [7]], 0, 0, 0, 0, 0, ["55[0-37-9]\\d{4}", [7]]
      ]
    ],
    TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
      [
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
        ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", [10]],
        ["561(?:011|61\\d)\\d{4}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", [10]],
        ["8(?:00\\d{7}(?:\\d{2,3})?|11\\d{7})", [10, 12, 13]],
        ["(?:8[89]8|900)\\d{7}", [10]],
        ["592(?:21[12]|461)\\d{4}", [10]], 0, ["444\\d{4}", [7]],
        ["512\\d{7}", [10]],
        ["850\\d{7}", [10]]
      ]
    ],
    TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868", [
      ["868(?:2(?:01|1[5-9]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}"],
      ["868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"],
      ["868619\\d{4}"]
    ]],
    TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
      [
        ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
        ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
        ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["2[02-9]\\d{3}", [5]],
        ["(?:7[01]\\d|90)\\d{4}", [6, 7]]
      ]
    ],
    TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
      [
        ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
        ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}", [8, 9]],
        ["(?:40001[0-2]|9[0-8]\\d{4})\\d{3}", [9]],
        ["80[0-79]\\d{6}|800\\d{5}", [8, 9]],
        ["20(?:[013-9]\\d\\d|2)\\d{4}", [7, 9]],
        ["99\\d{7}", [9]], 0, ["50[0-46-9]\\d{6}", [9]], 0, ["7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}", [10, 11]]
      ], 0, "#"
    ],
    TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["2[2-8]\\d{7}"],
        ["(?:6[125-9]|7[13-9])\\d{7}"],
        ["80[08]\\d{6}"],
        ["90\\d{7}"], 0, 0, 0, 0, ["41\\d{7}"],
        ["8(?:40|6[01])\\d{6}"]
      ]
    ],
    UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
        ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", [9]],
        ["790\\d{6}|(?:39|50|6[36-8]|7[1-357]|9[1-9])\\d{7}", [9]],
        ["800[1-8]\\d{5,6}"],
        ["900[239]\\d{5,6}"], 0, 0, 0, 0, ["89[1-579]\\d{6}", [9]]
      ], "0~0"
    ],
    UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
      [
        ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
        ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["20(?:(?:240|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[017]\\d|2[5-9]|3[1-4]|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}"],
        ["72[48]0\\d{5}|7(?:[015-8]\\d|2[067]|36|4[0-7]|9[89])\\d{6}"],
        ["800[1-3]\\d{5}"],
        ["90[1-3]\\d{6}"]
      ]
    ],
    US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
      ], "1", 0, 0, 0, 0, 0, [
        ["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468]))\\d{4}|(?:305[3-9]|472[24]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
        [""],
        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
        ["900[2-9]\\d{6}"],
        ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]
      ]
    ],
    UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13],
      [
        ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
        ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
        ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
        ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1(?:770|9(?:20|[89]7))|(?:2\\d|4[2-7])\\d\\d)\\d{4}", [8]],
        ["9[1-9]\\d{6}", [8]],
        ["0004\\d{2,9}|(?:405|80[05])\\d{4}"],
        ["90[0-8]\\d{4}", [7]]
      ], "00", " int. "
    ],
    UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9],
      [
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:55\\d\\d|6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|[69]\\d\\d|7(?:[23]\\d|7[69]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|(?:1[12]|[68]\\d)\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|9(?:22|5[1-9])))\\d{5}"],
        ["(?:(?:[25]0|33|8[78]|9[0-57-9])\\d{3}|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079])))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}"]
      ]
    ],
    VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698", [
      ["06698\\d{1,6}", [6, 7, 8, 9, 10, 11]],
      ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
      ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
      ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
      ["1(?:78\\d|99)\\d{6}", [9, 10]],
      ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]],
      ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
    ]],
    VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784", [
      ["784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}"],
      ["784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["78451[0-2]\\d{4}"]
    ]],
    VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
      [
        ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}"],
        ["4(?:1[24-8]|2[46])\\d{7}"],
        ["800\\d{7}"],
        ["90[01]\\d{7}"], 0, 0, ["501\\d{7}"]
      ]
    ],
    VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284", [
      ["284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}"],
      ["284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|9[69])|5(?:4[0-7]|68|9[69]))\\d{4}"],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340", [
      ["340(?:2(?:0\\d|10|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}"],
      [""],
      ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
      ["900[2-9]\\d{6}"],
      ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
    ]],
    VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
        ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
        ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
      ], "0", 0, 0, 0, 0, 0, [
        ["2(?:0[3-9]|1[0-689]|2[0-25-9]|[38][2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|9[0-4679])\\d{7}", [10]],
        ["(?:5(?:2[238]|59)|89[6-9]|99[013-9])\\d{6}|(?:3\\d|5[1689]|7[06-9]|8[1-8]|9[0-8])\\d{7}", [9]],
        ["1800\\d{4,6}|12(?:0[13]|28)\\d{4}", [8, 9, 10]],
        ["1900\\d{4,6}", [8, 9, 10]], 0, 0, ["(?:[17]99|80\\d)\\d{4}|69\\d{5,6}", [7, 8]], 0, ["672\\d{6}", [9]]
      ]
    ],
    VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}", [5]],
        ["(?:[58]\\d|7[013-7])\\d{5}", [7]],
        ["81[18]\\d\\d", [5]], 0, 0, 0, ["(?:3[03]|900\\d)\\d{3}"], 0, ["9(?:0[1-9]|1[01])\\d{4}", [7]]
      ]
    ],
    WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["72\\d{4}", [6]],
        ["(?:72|8[23])\\d{4}", [6]],
        ["80[0-5]\\d{6}", [9]], 0, 0, ["[48]0\\d{4}", [6]], 0, 0, ["9[23]\\d{4}", [6]]
      ]
    ],
    WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
      [
        ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
        ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
        ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
      ], 0, 0, 0, 0, 0, 0, [
        ["6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}", [5, 6]],
        ["(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}", [7, 10]],
        ["800\\d{3}", [6]]
      ]
    ],
    XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"],
        ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["38\\d{6,10}|(?:2[89]|39)(?:0\\d{5,6}|[1-9]\\d{5})"],
        ["4[3-9]\\d{6}", [8]],
        ["800\\d{5}", [8]],
        ["900\\d{5}", [8]]
      ]
    ],
    YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
      [
        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}", [7, 8]],
        ["7[01378]\\d{7}", [9]]
      ]
    ],
    YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
      ["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],
      ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],
      ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]
    ]],
    ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", [9]],
        ["(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d\\d|7(?:[0-46-9]\\d|5[0-4]))\\d\\d|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}", [5, 6, 7, 8, 9]],
        ["80\\d{7}", [9]],
        ["(?:86[2-9]|9[0-2]\\d)\\d{6}", [9]], 0, 0, ["861\\d{6,7}", [9, 10]], 0, ["87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}", [9]],
        ["860\\d{6}", [9]]
      ]
    ],
    ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["21[1-8]\\d{6}"],
        ["(?:7[5-79]|9[5-8])\\d{7}"],
        ["800\\d{6}"], 0, 0, 0, 0, 0, ["63\\d{7}"]
      ]
    ],
    ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
      [
        ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
        ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
        ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
        ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
        ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
        ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
      ], "0", 0, 0, 0, 0, 0, [
        ["(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}"],
        ["7(?:[1278]\\d|3[1-9])\\d{6}", [9]],
        ["80(?:[01]\\d|20|8[0-8])\\d{3}", [7]], 0, 0, 0, 0, 0, ["86(?:1[12]|22|30|44|55|77|8[368])\\d{6}", [10]]
      ]
    ]
  },
  nonGeographic: {
    800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
      ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
    ],
    808: ["808", 0, "[1-9]\\d{7}", [8],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
      ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
    ],
    870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]
      ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]
    ],
    878: ["878", 0, "10\\d{10}", [12],
      [
        ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
      ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
    ],
    881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10],
      [
        ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
        ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]
      ], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]
    ],
    882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12],
      [
        ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
        ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
        ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
        ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]
      ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]
    ],
    883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
        ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]
      ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]
    ],
    888: ["888", 0, "\\d{11}", [11],
      [
        ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
      ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
    ],
    979: ["979", 0, "[1359]\\d{8}", [9],
      [
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
      ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
    ]
  }
};

function D5(t, e) {
  var r = Array.prototype.slice.call(e);
  return r.push(M5), t.apply(this, r)
}

function vd(t) {
  "@babel/helpers - typeof";
  return vd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e
  } : function (e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, vd(t)
}

function P5(t, e, r) {
  return Object.defineProperty(t, "prototype", {
    writable: !1
  }), t
}

function U5(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function x5(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && qr(t, e)
}

function F5(t) {
  var e = $f();
  return function () {
    var i = kr(t),
      a;
    if (e) {
      var n = kr(this).constructor;
      a = Reflect.construct(i, arguments, n)
    } else a = i.apply(this, arguments);
    return B5(this, a)
  }
}

function B5(t, e) {
  if (e && (vd(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vf(t)
}

function vf(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function $d(t) {
  var e = typeof Map == "function" ? new Map : void 0;
  return $d = function (i) {
    if (i === null || !q5(i)) return i;
    if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(i)) return e.get(i);
      e.set(i, a)
    }

    function a() {
      return ki(i, arguments, kr(this).constructor)
    }
    return a.prototype = Object.create(i.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), qr(a, i)
  }, $d(t)
}

function ki(t, e, r) {
  return $f() ? ki = Reflect.construct : ki = function (a, n, d) {
    var s = [null];
    s.push.apply(s, n);
    var u = Function.bind.apply(a, s),
      l = new u;
    return d && qr(l, d.prototype), l
  }, ki.apply(null, arguments)
}

function $f() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
  } catch {
    return !1
  }
}

function q5(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1
}

function qr(t, e) {
  return qr = Object.setPrototypeOf || function (i, a) {
    return i.__proto__ = a, i
  }, qr(t, e)
}

function kr(t) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function (r) {
    return r.__proto__ || Object.getPrototypeOf(r)
  }, kr(t)
}
var ut = function (t) {
    x5(r, t);
    var e = F5(r);

    function r(i) {
      var a;
      return U5(this, r), a = e.call(this, i), Object.setPrototypeOf(vf(a), r.prototype), a.name = a.constructor.name, a
    }
    return P5(r)
  }($d(Error)),
  Ud = 2,
  k5 = 17,
  W5 = 3,
  Le = "0-9０-９٠-٩۰-۹",
  G5 = "-‐-―−ー－",
  H5 = "／/",
  V5 = "．.",
  Z5 = "  ­​⁠　",
  K5 = "()（）［］\\[\\]",
  j5 = "~⁓∼～",
  Hi = "".concat(G5).concat(H5).concat(V5).concat(Z5).concat(K5).concat(j5),
  xd = "+＋";

function ro(t, e) {
  t = t.split("-"), e = e.split("-");
  for (var r = t[0].split("."), i = e[0].split("."), a = 0; a < 3; a++) {
    var n = Number(r[a]),
      d = Number(i[a]);
    if (n > d) return 1;
    if (d > n) return -1;
    if (!isNaN(n) && isNaN(d)) return 1;
    if (isNaN(n) && !isNaN(d)) return -1
  }
  return t[1] && e[1] ? t[1] > e[1] ? 1 : t[1] < e[1] ? -1 : 0 : !t[1] && e[1] ? 1 : t[1] && !e[1] ? -1 : 0
}
var Y5 = {}.constructor;

function Wi(t) {
  return t != null && t.constructor === Y5
}

function Ed(t) {
  "@babel/helpers - typeof";
  return Ed = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e
  } : function (e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, Ed(t)
}

function Ji(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function z5(t, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
  }
}

function Xi(t, e, r) {
  return e && z5(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t
}
var J5 = "1.2.0",
  X5 = "1.7.35",
  no = " ext. ",
  Q5 = /^\d+$/,
  ye = function () {
    function t(e) {
      Ji(this, t), n6(e), this.metadata = e, Ef.call(this, e)
    }
    return Xi(t, [{
      key: "getCountries",
      value: function () {
        return Object.keys(this.metadata.countries).filter(function (r) {
          return r !== "001"
        })
      }
    }, {
      key: "getCountryMetadata",
      value: function (r) {
        return this.metadata.countries[r]
      }
    }, {
      key: "nonGeographic",
      value: function () {
        if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
      }
    }, {
      key: "hasCountry",
      value: function (r) {
        return this.getCountryMetadata(r) !== void 0
      }
    }, {
      key: "hasCallingCode",
      value: function (r) {
        if (this.getCountryCodesForCallingCode(r)) return !0;
        if (this.nonGeographic()) {
          if (this.nonGeographic()[r]) return !0
        } else {
          var i = this.countryCallingCodes()[r];
          if (i && i.length === 1 && i[0] === "001") return !0
        }
      }
    }, {
      key: "isNonGeographicCallingCode",
      value: function (r) {
        return this.nonGeographic() ? !!this.nonGeographic()[r] : !this.getCountryCodesForCallingCode(r)
      }
    }, {
      key: "country",
      value: function (r) {
        return this.selectNumberingPlan(r)
      }
    }, {
      key: "selectNumberingPlan",
      value: function (r, i) {
        if (r && Q5.test(r) && (i = r, r = null), r && r !== "001") {
          if (!this.hasCountry(r)) throw new Error("Unknown country: ".concat(r));
          this.numberingPlan = new io(this.getCountryMetadata(r), this)
        } else if (i) {
          if (!this.hasCallingCode(i)) throw new Error("Unknown calling code: ".concat(i));
          this.numberingPlan = new io(this.getNumberingPlanMetadata(i), this)
        } else this.numberingPlan = void 0;
        return this
      }
    }, {
      key: "getCountryCodesForCallingCode",
      value: function (r) {
        var i = this.countryCallingCodes()[r];
        if (i) return i.length === 1 && i[0].length === 3 ? void 0 : i
      }
    }, {
      key: "getCountryCodeForCallingCode",
      value: function (r) {
        var i = this.getCountryCodesForCallingCode(r);
        if (i) return i[0]
      }
    }, {
      key: "getNumberingPlanMetadata",
      value: function (r) {
        var i = this.getCountryCodeForCallingCode(r);
        if (i) return this.getCountryMetadata(i);
        if (this.nonGeographic()) {
          var a = this.nonGeographic()[r];
          if (a) return a
        } else {
          var n = this.countryCallingCodes()[r];
          if (n && n.length === 1 && n[0] === "001") return this.metadata.countries["001"]
        }
      }
    }, {
      key: "countryCallingCode",
      value: function () {
        return this.numberingPlan.callingCode()
      }
    }, {
      key: "IDDPrefix",
      value: function () {
        return this.numberingPlan.IDDPrefix()
      }
    }, {
      key: "defaultIDDPrefix",
      value: function () {
        return this.numberingPlan.defaultIDDPrefix()
      }
    }, {
      key: "nationalNumberPattern",
      value: function () {
        return this.numberingPlan.nationalNumberPattern()
      }
    }, {
      key: "possibleLengths",
      value: function () {
        return this.numberingPlan.possibleLengths()
      }
    }, {
      key: "formats",
      value: function () {
        return this.numberingPlan.formats()
      }
    }, {
      key: "nationalPrefixForParsing",
      value: function () {
        return this.numberingPlan.nationalPrefixForParsing()
      }
    }, {
      key: "nationalPrefixTransformRule",
      value: function () {
        return this.numberingPlan.nationalPrefixTransformRule()
      }
    }, {
      key: "leadingDigits",
      value: function () {
        return this.numberingPlan.leadingDigits()
      }
    }, {
      key: "hasTypes",
      value: function () {
        return this.numberingPlan.hasTypes()
      }
    }, {
      key: "type",
      value: function (r) {
        return this.numberingPlan.type(r)
      }
    }, {
      key: "ext",
      value: function () {
        return this.numberingPlan.ext()
      }
    }, {
      key: "countryCallingCodes",
      value: function () {
        return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
      }
    }, {
      key: "chooseCountryByCountryCallingCode",
      value: function (r) {
        return this.selectNumberingPlan(r)
      }
    }, {
      key: "hasSelectedNumberingPlan",
      value: function () {
        return this.numberingPlan !== void 0
      }
    }]), t
  }(),
  io = function () {
    function t(e, r) {
      Ji(this, t), this.globalMetadataObject = r, this.metadata = e, Ef.call(this, r.metadata)
    }
    return Xi(t, [{
      key: "callingCode",
      value: function () {
        return this.metadata[0]
      }
    }, {
      key: "getDefaultCountryMetadataForRegion",
      value: function () {
        return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
      }
    }, {
      key: "IDDPrefix",
      value: function () {
        if (!(this.v1 || this.v2)) return this.metadata[1]
      }
    }, {
      key: "defaultIDDPrefix",
      value: function () {
        if (!(this.v1 || this.v2)) return this.metadata[12]
      }
    }, {
      key: "nationalNumberPattern",
      value: function () {
        return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
      }
    }, {
      key: "possibleLengths",
      value: function () {
        if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
      }
    }, {
      key: "_getFormats",
      value: function (r) {
        return r[this.v1 ? 2 : this.v2 ? 3 : 4]
      }
    }, {
      key: "formats",
      value: function () {
        var r = this,
          i = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
        return i.map(function (a) {
          return new e6(a, r)
        })
      }
    }, {
      key: "nationalPrefix",
      value: function () {
        return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
      }
    }, {
      key: "_getNationalPrefixFormattingRule",
      value: function (r) {
        return r[this.v1 ? 4 : this.v2 ? 5 : 6]
      }
    }, {
      key: "nationalPrefixFormattingRule",
      value: function () {
        return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
      }
    }, {
      key: "_nationalPrefixForParsing",
      value: function () {
        return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
      }
    }, {
      key: "nationalPrefixForParsing",
      value: function () {
        return this._nationalPrefixForParsing() || this.nationalPrefix()
      }
    }, {
      key: "nationalPrefixTransformRule",
      value: function () {
        return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
      }
    }, {
      key: "_getNationalPrefixIsOptionalWhenFormatting",
      value: function () {
        return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
      }
    }, {
      key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
      value: function () {
        return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
      }
    }, {
      key: "leadingDigits",
      value: function () {
        return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
      }
    }, {
      key: "types",
      value: function () {
        return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
      }
    }, {
      key: "hasTypes",
      value: function () {
        return this.types() && this.types().length === 0 ? !1 : !!this.types()
      }
    }, {
      key: "type",
      value: function (r) {
        if (this.hasTypes() && ao(this.types(), r)) return new r6(ao(this.types(), r), this)
      }
    }, {
      key: "ext",
      value: function () {
        return this.v1 || this.v2 ? no : this.metadata[13] || no
      }
    }]), t
  }(),
  e6 = function () {
    function t(e, r) {
      Ji(this, t), this._format = e, this.metadata = r
    }
    return Xi(t, [{
      key: "pattern",
      value: function () {
        return this._format[0]
      }
    }, {
      key: "format",
      value: function () {
        return this._format[1]
      }
    }, {
      key: "leadingDigitsPatterns",
      value: function () {
        return this._format[2] || []
      }
    }, {
      key: "nationalPrefixFormattingRule",
      value: function () {
        return this._format[3] || this.metadata.nationalPrefixFormattingRule()
      }
    }, {
      key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
      value: function () {
        return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
      }
    }, {
      key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
      value: function () {
        return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
      }
    }, {
      key: "usesNationalPrefix",
      value: function () {
        return !!(this.nationalPrefixFormattingRule() && !t6.test(this.nationalPrefixFormattingRule()))
      }
    }, {
      key: "internationalFormat",
      value: function () {
        return this._format[5] || this.format()
      }
    }]), t
  }(),
  t6 = /^\(?\$1\)?$/,
  r6 = function () {
    function t(e, r) {
      Ji(this, t), this.type = e, this.metadata = r
    }
    return Xi(t, [{
      key: "pattern",
      value: function () {
        return this.metadata.v1 ? this.type : this.type[0]
      }
    }, {
      key: "possibleLengths",
      value: function () {
        if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
      }
    }]), t
  }();

function ao(t, e) {
  switch (e) {
    case "FIXED_LINE":
      return t[0];
    case "MOBILE":
      return t[1];
    case "TOLL_FREE":
      return t[2];
    case "PREMIUM_RATE":
      return t[3];
    case "PERSONAL_NUMBER":
      return t[4];
    case "VOICEMAIL":
      return t[5];
    case "UAN":
      return t[6];
    case "PAGER":
      return t[7];
    case "VOIP":
      return t[8];
    case "SHARED_COST":
      return t[9]
  }
}

function n6(t) {
  if (!t) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!Wi(t) || !Wi(t.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Wi(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + i6(t) + ": " + t, "."))
}
var i6 = function (e) {
  return Ed(e)
};

function Fd(t, e) {
  if (e = new ye(e), e.hasCountry(t)) return e.country(t).countryCallingCode();
  throw new Error("Unknown country: ".concat(t))
}

function Ef(t) {
  var e = t.version;
  typeof e == "number" ? (this.v1 = e === 1, this.v2 = e === 2, this.v3 = e === 3, this.v4 = e === 4) : e ? ro(e, J5) === -1 ? this.v2 = !0 : ro(e, X5) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
}
var a6 = ";ext=",
  Wt = function (e) {
    return "([".concat(Le, "]{1,").concat(e, "})")
  };

function yf(t) {
  var e = "20",
    r = "15",
    i = "9",
    a = "6",
    n = "[  \\t,]*",
    d = "[:\\.．]?[  \\t,-]*",
    s = "#?",
    u = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",
    l = "(?:[xｘ#＃~～]|int|ｉｎｔ)",
    f = "[- ]+",
    o = "[  \\t]*",
    c = "(?:,{2}|;)",
    _ = a6 + Wt(e),
    h = n + u + d + Wt(e) + s,
    v = n + l + d + Wt(i) + s,
    p = f + Wt(a) + "#",
    E = o + c + d + Wt(r) + s,
    g = o + "(?:,)+" + d + Wt(i) + s;
  return _ + "|" + h + "|" + v + "|" + p + "|" + E + "|" + g
}
var d6 = "[" + Le + "]{" + Ud + "}",
  u6 = "[" + xd + "]{0,1}(?:[" + Hi + "]*[" + Le + "]){3,}[" + Hi + Le + "]*",
  s6 = new RegExp("^[" + xd + "]{0,1}(?:[" + Hi + "]*[" + Le + "]){1,2}$", "i"),
  o6 = u6 + "(?:" + yf() + ")?",
  l6 = new RegExp("^" + d6 + "$|^" + o6 + "$", "i");

function c6(t) {
  return t.length >= Ud && l6.test(t)
}

function f6(t) {
  return s6.test(t)
}
var uo = new RegExp("(?:" + yf() + ")$", "i");

function _6(t) {
  var e = t.search(uo);
  if (e < 0) return {};
  for (var r = t.slice(0, e), i = t.match(uo), a = 1; a < i.length;) {
    if (i[a]) return {
      number: r,
      ext: i[a]
    };
    a++
  }
}
var p6 = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  "１": "1",
  "２": "2",
  "３": "3",
  "４": "4",
  "５": "5",
  "６": "6",
  "７": "7",
  "８": "8",
  "９": "9",
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9"
};

function h6(t) {
  return p6[t]
}

function v6(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r) return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = $6(t)) || e) {
    r && (t = r);
    var i = 0;
    return function () {
      return i >= t.length ? {
        done: !0
      } : {
        done: !1,
        value: t[i++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function $6(t, e) {
  if (t) {
    if (typeof t == "string") return so(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return so(t, e)
  }
}

function so(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
  return i
}

function oo(t) {
  for (var e = "", r = v6(t.split("")), i; !(i = r()).done;) {
    var a = i.value;
    e += E6(a, e) || ""
  }
  return e
}

function E6(t, e, r) {
  return t === "+" ? e ? void 0 : "+" : h6(t)
}

function Bd(t, e) {
  return y6(t, void 0, e)
}

function y6(t, e, r) {
  var i = r.type(e),
    a = i && i.possibleLengths() || r.possibleLengths();
  if (!a) return "IS_POSSIBLE";
  var n = t.length,
    d = a[0];
  return d === n ? "IS_POSSIBLE" : d > n ? "TOO_SHORT" : a[a.length - 1] < n ? "TOO_LONG" : a.indexOf(n, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
}

function g6(t, e, r) {
  if (e === void 0 && (e = {}), r = new ye(r), e.v2) {
    if (!t.countryCallingCode) throw new Error("Invalid phone number object passed");
    r.selectNumberingPlan(t.countryCallingCode)
  } else {
    if (!t.phone) return !1;
    if (t.country) {
      if (!r.hasCountry(t.country)) throw new Error("Unknown country: ".concat(t.country));
      r.country(t.country)
    } else {
      if (!t.countryCallingCode) throw new Error("Invalid phone number object passed");
      r.selectNumberingPlan(t.countryCallingCode)
    }
  }
  if (r.possibleLengths()) return gf(t.phone || t.nationalNumber, r);
  if (t.countryCallingCode && r.isNonGeographicCallingCode(t.countryCallingCode)) return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
}

function gf(t, e) {
  switch (Bd(t, e)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1
  }
}

function ze(t, e) {
  return t = t || "", new RegExp("^(?:" + e + ")$").test(t)
}

function m6(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r) return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = I6(t)) || e) {
    r && (t = r);
    var i = 0;
    return function () {
      return i >= t.length ? {
        done: !0
      } : {
        done: !1,
        value: t[i++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function I6(t, e) {
  if (t) {
    if (typeof t == "string") return lo(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lo(t, e)
  }
}

function lo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
  return i
}
var T6 = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

function qd(t, e, r) {
  if (e = e || {}, !(!t.country && !t.countryCallingCode)) {
    r = new ye(r), r.selectNumberingPlan(t.country, t.countryCallingCode);
    var i = e.v2 ? t.nationalNumber : t.phone;
    if (ze(i, r.nationalNumberPattern())) {
      if (ed(i, "FIXED_LINE", r)) return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || ed(i, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var a = m6(T6), n; !(n = a()).done;) {
        var d = n.value;
        if (ed(i, d, r)) return d
      }
    }
  }
}

function ed(t, e, r) {
  return e = r.type(e), !e || !e.pattern() || e.possibleLengths() && e.possibleLengths().indexOf(t.length) < 0 ? !1 : ze(t, e.pattern())
}

function S6(t, e, r) {
  if (e = e || {}, r = new ye(r), r.selectNumberingPlan(t.country, t.countryCallingCode), r.hasTypes()) return qd(t, e, r.metadata) !== void 0;
  var i = e.v2 ? t.nationalNumber : t.phone;
  return ze(i, r.nationalNumberPattern())
}

function R6(t, e, r) {
  var i = new ye(r),
    a = i.getCountryCodesForCallingCode(t);
  return a ? a.filter(function (n) {
    return b6(e, n, r)
  }) : []
}

function b6(t, e, r) {
  var i = new ye(r);
  return i.selectNumberingPlan(e), i.numberingPlan.possibleLengths().indexOf(t.length) >= 0
}

function A6(t) {
  return t.replace(new RegExp("[".concat(Hi, "]+"), "g"), " ").trim()
}
var w6 = /(\$\d)/;

function O6(t, e, r) {
  var i = r.useInternationalFormat,
    a = r.withNationalPrefix,
    n = t.replace(new RegExp(e.pattern()), i ? e.internationalFormat() : a && e.nationalPrefixFormattingRule() ? e.format().replace(w6, e.nationalPrefixFormattingRule()) : e.format());
  return i ? A6(n) : n
}
var N6 = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

function C6(t, e, r) {
  var i = new ye(r);
  if (i.selectNumberingPlan(t, e), i.defaultIDDPrefix()) return i.defaultIDDPrefix();
  if (N6.test(i.IDDPrefix())) return i.IDDPrefix()
}

function L6(t) {
  var e = t.number,
    r = t.ext;
  if (!e) return "";
  if (e[0] !== "+") throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(e).concat(r ? ";ext=" + r : "")
}

function M6(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r) return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = D6(t)) || e) {
    r && (t = r);
    var i = 0;
    return function () {
      return i >= t.length ? {
        done: !0
      } : {
        done: !1,
        value: t[i++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function D6(t, e) {
  if (t) {
    if (typeof t == "string") return co(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return co(t, e)
  }
}

function co(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
  return i
}

function fo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function (a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable
    })), r.push.apply(r, i)
  }
  return r
}

function _o(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fo(Object(r), !0).forEach(function (i) {
      P6(t, i, r[i])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fo(Object(r)).forEach(function (i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i))
    })
  }
  return t
}

function P6(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t
}
var po = {
  formatExtension: function (e, r, i) {
    return "".concat(e).concat(i.ext()).concat(r)
  }
};

function U6(t, e, r, i) {
  if (r ? r = _o(_o({}, po), r) : r = po, i = new ye(i), t.country && t.country !== "001") {
    if (!i.hasCountry(t.country)) throw new Error("Unknown country: ".concat(t.country));
    i.country(t.country)
  } else if (t.countryCallingCode) i.selectNumberingPlan(t.countryCallingCode);
  else return t.phone || "";
  var a = i.countryCallingCode(),
    n = r.v2 ? t.nationalNumber : t.phone,
    d;
  switch (e) {
    case "NATIONAL":
      return n ? (d = Vi(n, t.carrierCode, "NATIONAL", i, r), td(d, t.ext, i, r.formatExtension)) : "";
    case "INTERNATIONAL":
      return n ? (d = Vi(n, null, "INTERNATIONAL", i, r), d = "+".concat(a, " ").concat(d), td(d, t.ext, i, r.formatExtension)) : "+".concat(a);
    case "E.164":
      return "+".concat(a).concat(n);
    case "RFC3966":
      return L6({
        number: "+".concat(a).concat(n),
        ext: t.ext
      });
    case "IDD":
      if (!r.fromCountry) return;
      var s = F6(n, t.carrierCode, a, r.fromCountry, i);
      return td(s, t.ext, i, r.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"'))
  }
}

function Vi(t, e, r, i, a) {
  var n = x6(i.formats(), t);
  return n ? O6(t, n, {
    useInternationalFormat: r === "INTERNATIONAL",
    withNationalPrefix: !(n.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && a && a.nationalPrefix === !1),
    carrierCode: e,
    metadata: i
  }) : t
}

function x6(t, e) {
  for (var r = M6(t), i; !(i = r()).done;) {
    var a = i.value;
    if (a.leadingDigitsPatterns().length > 0) {
      var n = a.leadingDigitsPatterns()[a.leadingDigitsPatterns().length - 1];
      if (e.search(n) !== 0) continue
    }
    if (ze(e, a.pattern())) return a
  }
}

function td(t, e, r, i) {
  return e ? i(t, e, r) : t
}

function F6(t, e, r, i, a) {
  var n = Fd(i, a.metadata);
  if (n === r) {
    var d = Vi(t, e, "NATIONAL", a);
    return r === "1" ? r + " " + d : d
  }
  var s = C6(i, void 0, a.metadata);
  if (s) return "".concat(s, " ").concat(r, " ").concat(Vi(t, null, "INTERNATIONAL", a))
}

function ho(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function (a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable
    })), r.push.apply(r, i)
  }
  return r
}

function vo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ho(Object(r), !0).forEach(function (i) {
      B6(t, i, r[i])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ho(Object(r)).forEach(function (i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i))
    })
  }
  return t
}

function B6(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t
}

function q6(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function k6(t, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
  }
}

function W6(t, e, r) {
  return k6(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t
}
var G6 = function () {
    function t(e, r, i) {
      if (q6(this, t), !e) throw new TypeError("`country` or `countryCallingCode` not passed");
      if (!r) throw new TypeError("`nationalNumber` not passed");
      if (!i) throw new TypeError("`metadata` not passed");
      var a = V6(e, i),
        n = a.country,
        d = a.countryCallingCode;
      this.country = n, this.countryCallingCode = d, this.nationalNumber = r, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function () {
        return i
      }
    }
    return W6(t, [{
      key: "setExt",
      value: function (r) {
        this.ext = r
      }
    }, {
      key: "getPossibleCountries",
      value: function () {
        return this.country ? [this.country] : R6(this.countryCallingCode, this.nationalNumber, this.getMetadata())
      }
    }, {
      key: "isPossible",
      value: function () {
        return g6(this, {
          v2: !0
        }, this.getMetadata())
      }
    }, {
      key: "isValid",
      value: function () {
        return S6(this, {
          v2: !0
        }, this.getMetadata())
      }
    }, {
      key: "isNonGeographic",
      value: function () {
        var r = new ye(this.getMetadata());
        return r.isNonGeographicCallingCode(this.countryCallingCode)
      }
    }, {
      key: "isEqual",
      value: function (r) {
        return this.number === r.number && this.ext === r.ext
      }
    }, {
      key: "getType",
      value: function () {
        return qd(this, {
          v2: !0
        }, this.getMetadata())
      }
    }, {
      key: "format",
      value: function (r, i) {
        return U6(this, r, i ? vo(vo({}, i), {}, {
          v2: !0
        }) : {
          v2: !0
        }, this.getMetadata())
      }
    }, {
      key: "formatNational",
      value: function (r) {
        return this.format("NATIONAL", r)
      }
    }, {
      key: "formatInternational",
      value: function (r) {
        return this.format("INTERNATIONAL", r)
      }
    }, {
      key: "getURI",
      value: function (r) {
        return this.format("RFC3966", r)
      }
    }]), t
  }(),
  H6 = function (e) {
    return /^[A-Z]{2}$/.test(e)
  };

function V6(t, e) {
  var r, i, a = new ye(e);
  return H6(t) ? (r = t, a.selectNumberingPlan(r), i = a.countryCallingCode()) : i = t, {
    country: r,
    countryCallingCode: i
  }
}
var Z6 = new RegExp("([" + Le + "])");

function K6(t, e, r, i) {
  if (e) {
    var a = new ye(i);
    a.selectNumberingPlan(e, r);
    var n = new RegExp(a.IDDPrefix());
    if (t.search(n) === 0) {
      t = t.slice(t.match(n)[0].length);
      var d = t.match(Z6);
      if (!(d && d[1] != null && d[1].length > 0 && d[1] === "0")) return t
    }
  }
}

function j6(t, e) {
  if (t && e.numberingPlan.nationalPrefixForParsing()) {
    var r = new RegExp("^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"),
      i = r.exec(t);
    if (i) {
      var a, n, d = i.length - 1,
        s = d > 0 && i[d];
      if (e.nationalPrefixTransformRule() && s) a = t.replace(r, e.nationalPrefixTransformRule()), d > 1 && (n = i[1]);
      else {
        var u = i[0];
        a = t.slice(u.length), s && (n = i[1])
      }
      var l;
      if (s) {
        var f = t.indexOf(i[1]),
          o = t.slice(0, f);
        o === e.numberingPlan.nationalPrefix() && (l = e.numberingPlan.nationalPrefix())
      } else l = i[0];
      return {
        nationalNumber: a,
        nationalPrefix: l,
        carrierCode: n
      }
    }
  }
  return {
    nationalNumber: t
  }
}

function yd(t, e) {
  var r = j6(t, e),
    i = r.carrierCode,
    a = r.nationalNumber;
  if (a !== t) {
    if (!Y6(t, a, e)) return {
      nationalNumber: t
    };
    if (e.possibleLengths() && !z6(a, e)) return {
      nationalNumber: t
    }
  }
  return {
    nationalNumber: a,
    carrierCode: i
  }
}

function Y6(t, e, r) {
  return !(ze(t, r.nationalNumberPattern()) && !ze(e, r.nationalNumberPattern()))
}

function z6(t, e) {
  switch (Bd(t, e)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0
  }
}

function J6(t, e, r, i) {
  var a = e ? Fd(e, i) : r;
  if (t.indexOf(a) === 0) {
    i = new ye(i), i.selectNumberingPlan(e, r);
    var n = t.slice(a.length),
      d = yd(n, i),
      s = d.nationalNumber,
      u = yd(t, i),
      l = u.nationalNumber;
    if (!ze(l, i.nationalNumberPattern()) && ze(s, i.nationalNumberPattern()) || Bd(l, i) === "TOO_LONG") return {
      countryCallingCode: a,
      number: n
    }
  }
  return {
    number: t
  }
}

function X6(t, e, r, i) {
  if (!t) return {};
  var a;
  if (t[0] !== "+") {
    var n = K6(t, e, r, i);
    if (n && n !== t) a = !0, t = "+" + n;
    else {
      if (e || r) {
        var d = J6(t, e, r, i),
          s = d.countryCallingCode,
          u = d.number;
        if (s) return {
          countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
          countryCallingCode: s,
          number: u
        }
      }
      return {
        number: t
      }
    }
  }
  if (t[1] === "0") return {};
  i = new ye(i);
  for (var l = 2; l - 1 <= W5 && l <= t.length;) {
    var f = t.slice(1, l);
    if (i.hasCallingCode(f)) return i.selectNumberingPlan(f), {
      countryCallingCodeSource: a ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
      countryCallingCode: f,
      number: t.slice(l)
    };
    l++
  }
  return {}
}

function Q6(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r) return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = e8(t)) || e) {
    r && (t = r);
    var i = 0;
    return function () {
      return i >= t.length ? {
        done: !0
      } : {
        done: !1,
        value: t[i++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function e8(t, e) {
  if (t) {
    if (typeof t == "string") return $o(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $o(t, e)
  }
}

function $o(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
  return i
}

function t8(t, e) {
  var r = e.countries,
    i = e.metadata;
  i = new ye(i);
  for (var a = Q6(r), n; !(n = a()).done;) {
    var d = n.value;
    if (i.country(d), i.leadingDigits()) {
      if (t && t.search(i.leadingDigits()) === 0) return d
    } else if (qd({
        phone: t,
        country: d
      }, void 0, i.metadata)) return d
  }
}

function r8(t, e) {
  var r = e.nationalNumber,
    i = e.defaultCountry,
    a = e.metadata,
    n = a.getCountryCodesForCallingCode(t);
  if (n) return n.length === 1 ? n[0] : t8(r, {
    countries: n,
    defaultCountry: i,
    metadata: a.metadata
  })
}
var mf = "+",
  n8 = "[\\-\\.\\(\\)]?",
  Eo = "([" + Le + "]|" + n8 + ")",
  i8 = "^\\" + mf + Eo + "*[" + Le + "]" + Eo + "*$",
  a8 = new RegExp(i8, "g"),
  gd = Le,
  d8 = "[" + gd + "]+((\\-)*[" + gd + "])*",
  u8 = "a-zA-Z",
  s8 = "[" + u8 + "]+((\\-)*[" + gd + "])*",
  o8 = "^(" + d8 + "\\.)*" + s8 + "\\.?$",
  l8 = new RegExp(o8, "g"),
  yo = "tel:",
  md = ";phone-context=",
  c8 = ";isub=";

function f8(t) {
  var e = t.indexOf(md);
  if (e < 0) return null;
  var r = e + md.length;
  if (r >= t.length) return "";
  var i = t.indexOf(";", r);
  return i >= 0 ? t.substring(r, i) : t.substring(r)
}

function _8(t) {
  return t === null ? !0 : t.length === 0 ? !1 : a8.test(t) || l8.test(t)
}

function p8(t, e) {
  var r = e.extractFormattedPhoneNumber,
    i = f8(t);
  if (!_8(i)) throw new ut("NOT_A_NUMBER");
  var a;
  if (i === null) a = r(t) || "";
  else {
    a = "", i.charAt(0) === mf && (a += i);
    var n = t.indexOf(yo),
      d;
    n >= 0 ? d = n + yo.length : d = 0;
    var s = t.indexOf(md);
    a += t.substring(d, s)
  }
  var u = a.indexOf(c8);
  if (u > 0 && (a = a.substring(0, u)), a !== "") return a
}
var h8 = 250,
  v8 = new RegExp("[" + xd + Le + "]"),
  $8 = new RegExp("[^" + Le + "#]+$");

function E8(t, e, r) {
  if (e = e || {}, r = new ye(r), e.defaultCountry && !r.hasCountry(e.defaultCountry)) throw e.v2 ? new ut("INVALID_COUNTRY") : new Error("Unknown country: ".concat(e.defaultCountry));
  var i = g8(t, e.v2, e.extract),
    a = i.number,
    n = i.ext,
    d = i.error;
  if (!a) {
    if (e.v2) throw d === "TOO_SHORT" ? new ut("TOO_SHORT") : new ut("NOT_A_NUMBER");
    return {}
  }
  var s = I8(a, e.defaultCountry, e.defaultCallingCode, r),
    u = s.country,
    l = s.nationalNumber,
    f = s.countryCallingCode,
    o = s.countryCallingCodeSource,
    c = s.carrierCode;
  if (!r.hasSelectedNumberingPlan()) {
    if (e.v2) throw new ut("INVALID_COUNTRY");
    return {}
  }
  if (!l || l.length < Ud) {
    if (e.v2) throw new ut("TOO_SHORT");
    return {}
  }
  if (l.length > k5) {
    if (e.v2) throw new ut("TOO_LONG");
    return {}
  }
  if (e.v2) {
    var _ = new G6(f, l, r.metadata);
    return u && (_.country = u), c && (_.carrierCode = c), n && (_.ext = n), _.__countryCallingCodeSource = o, _
  }
  var h = (e.extended ? r.hasSelectedNumberingPlan() : u) ? ze(l, r.nationalNumberPattern()) : !1;
  return e.extended ? {
    country: u,
    countryCallingCode: f,
    carrierCode: c,
    valid: h,
    possible: h ? !0 : !!(e.extended === !0 && r.possibleLengths() && gf(l, r)),
    phone: l,
    ext: n
  } : h ? m8(u, l, n) : {}
}

function y8(t, e, r) {
  if (t) {
    if (t.length > h8) {
      if (r) throw new ut("TOO_LONG");
      return
    }
    if (e === !1) return t;
    var i = t.search(v8);
    if (!(i < 0)) return t.slice(i).replace($8, "")
  }
}

function g8(t, e, r) {
  var i = p8(t, {
    extractFormattedPhoneNumber: function (d) {
      return y8(d, r, e)
    }
  });
  if (!i) return {};
  if (!c6(i)) return f6(i) ? {
    error: "TOO_SHORT"
  } : {};
  var a = _6(i);
  return a.ext ? a : {
    number: i
  }
}

function m8(t, e, r) {
  var i = {
    country: t,
    phone: e
  };
  return r && (i.ext = r), i
}

function I8(t, e, r, i) {
  var a = X6(oo(t), e, r, i.metadata),
    n = a.countryCallingCodeSource,
    d = a.countryCallingCode,
    s = a.number,
    u;
  if (d) i.selectNumberingPlan(d);
  else if (s && (e || r)) i.selectNumberingPlan(e, r), e && (u = e), d = r || Fd(e, i.metadata);
  else return {};
  if (!s) return {
    countryCallingCodeSource: n,
    countryCallingCode: d
  };
  var l = yd(oo(s), i),
    f = l.nationalNumber,
    o = l.carrierCode,
    c = r8(d, {
      nationalNumber: f,
      defaultCountry: e,
      metadata: i
    });
  return c && (u = c, c === "001" || i.country(u)), {
    country: u,
    countryCallingCode: d,
    countryCallingCodeSource: n,
    nationalNumber: f,
    carrierCode: o
  }
}

function go(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function (a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable
    })), r.push.apply(r, i)
  }
  return r
}

function mo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? go(Object(r), !0).forEach(function (i) {
      T8(t, i, r[i])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : go(Object(r)).forEach(function (i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i))
    })
  }
  return t
}

function T8(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t
}

function S8(t, e, r) {
  return E8(t, mo(mo({}, e), {}, {
    v2: !0
  }), r)
}

function Io(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function (a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable
    })), r.push.apply(r, i)
  }
  return r
}

function R8(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Io(Object(r), !0).forEach(function (i) {
      b8(t, i, r[i])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Io(Object(r)).forEach(function (i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i))
    })
  }
  return t
}

function b8(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t
}

function A8(t, e) {
  return C8(t) || N8(t, e) || O8(t, e) || w8()
}

function w8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function O8(t, e) {
  if (t) {
    if (typeof t == "string") return To(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return To(t, e)
  }
}

function To(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
  return i
}

function N8(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var i = [],
      a = !0,
      n = !1,
      d, s;
    try {
      for (r = r.call(t); !(a = (d = r.next()).done) && (i.push(d.value), !(e && i.length === e)); a = !0);
    } catch (u) {
      n = !0, s = u
    } finally {
      try {
        !a && r.return != null && r.return()
      } finally {
        if (n) throw s
      }
    }
    return i
  }
}

function C8(t) {
  if (Array.isArray(t)) return t
}

function L8(t) {
  var e = Array.prototype.slice.call(t),
    r = A8(e, 4),
    i = r[0],
    a = r[1],
    n = r[2],
    d = r[3],
    s, u, l;
  if (typeof i == "string") s = i;
  else throw new TypeError("A text for parsing must be a string.");
  if (!a || typeof a == "string") d ? (u = n, l = d) : (u = void 0, l = n), a && (u = R8({
    defaultCountry: a
  }, u));
  else if (Wi(a)) n ? (u = a, l = n) : l = a;
  else throw new Error("Invalid second argument: ".concat(a));
  return {
    text: s,
    options: u,
    metadata: l
  }
}

function M8() {
  var t = L8(arguments),
    e = t.text,
    r = t.options,
    i = t.metadata;
  return S8(e, r, i)
}

function D8() {
  return D5(M8, arguments)
}
var If = "isPhoneNumber";

function Tf(t, e) {
  if (typeof t != "string" || t.trim() !== t) return !1;
  try {
    var r = D8(t, e);
    return e && r.country !== e ? !1 : r.isValid()
  } catch {
    return !1
  }
}

function P8(t, e) {
  return x({
    name: If,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Tf(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a valid phone number"
      }, e)
    }
  }, e)
}
var Sf = "isMilitaryTime";

function Rf(t) {
  var e = /^([01]\d|2[0-3]):?([0-5]\d)$/;
  return typeof t == "string" && _f(t, e)
}

function U8(t) {
  return x({
    name: Sf,
    validator: {
      validate: function (e, r) {
        return Rf(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a valid representation of military time in the format HH:MM"
      }, t)
    }
  }, t)
}
var kn = {
    exports: {}
  },
  So;

function bf() {
  return So || (So = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = {
      md5: 32,
      md4: 32,
      sha1: 40,
      sha256: 64,
      sha384: 96,
      sha512: 128,
      ripemd128: 32,
      ripemd160: 40,
      tiger128: 32,
      tiger160: 40,
      tiger192: 48,
      crc32: 8,
      crc32b: 8
    };

    function n(d, s) {
      (0, r.default)(d);
      var u = new RegExp("^[a-fA-F0-9]{".concat(a[s], "}$"));
      return u.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(kn, kn.exports)), kn.exports
}
var x8 = bf();
const F8 = Z(x8);
var Af = "isHash";

function wf(t, e) {
  return typeof t == "string" && F8(t, e)
}

function B8(t, e) {
  return x({
    name: Af,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return wf(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a hash of type $constraint1"
      }, e)
    }
  }, e)
}
var Wn = {
    exports: {}
  },
  Ro;

function Of() {
  return Ro || (Ro = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = "^\\d{4}-?\\d{3}[\\dX]$";

    function n(d) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, r.default)(d);
      var u = a;
      if (u = s.require_hyphen ? u.replace("?", "") : u, u = s.case_sensitive ? new RegExp(u) : new RegExp(u, "i"), !u.test(d)) return !1;
      for (var l = d.replace("-", "").toUpperCase(), f = 0, o = 0; o < l.length; o++) {
        var c = l[o];
        f += (c === "X" ? 10 : +c) * (8 - o)
      }
      return f % 11 === 0
    }
    t.exports = e.default, t.exports.default = e.default
  }(Wn, Wn.exports)), Wn.exports
}
var q8 = Of();
const k8 = Z(q8);
var Nf = "isISSN";

function Cf(t, e) {
  return typeof t == "string" && k8(t, e)
}

function W8(t, e) {
  return x({
    name: Nf,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Cf(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a ISSN"
      }, e)
    }
  }, e)
}
var Lf = "isDateString";

function Mf(t, e) {
  return Md(t, e)
}

function G8(t, e) {
  return x({
    name: Lf,
    constraints: [t],
    validator: {
      validate: function (r) {
        return Mf(r, t)
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a valid ISO 8601 date string"
      }, e)
    }
  }, e)
}
var Gn = {
    exports: {}
  },
  bo;

function Df() {
  return bo || (bo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = i(k());

    function i(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }
    var a = {
        loose: !1
      },
      n = ["true", "false", "1", "0"],
      d = [].concat(n, ["yes", "no"]);

    function s(u) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a;
      return (0, r.default)(u), l.loose ? d.includes(u.toLowerCase()) : n.includes(u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Gn, Gn.exports)), Gn.exports
}
var H8 = Df();
const V8 = Z(H8);
var Pf = "isBooleanString";

function Uf(t) {
  return typeof t == "string" && V8(t)
}

function Z8(t) {
  return x({
    name: Pf,
    validator: {
      validate: function (e, r) {
        return Uf(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a boolean string"
      }, t)
    }
  }, t)
}
var Hn = {
    exports: {}
  },
  Ao;

function xf() {
  return Ao || (Ao = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = a(k()),
      i = Gr();

    function a(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var n = /^[0-9]+$/;

    function d(s, u) {
      return (0, r.default)(s), u && u.no_symbols ? n.test(s) : new RegExp("^[+-]?([0-9]*[".concat((u || {}).locale ? i.decimal[u.locale] : ".", "])?[0-9]+$")).test(s)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Hn, Hn.exports)), Hn.exports
}
var K8 = xf();
const j8 = Z(K8);
var Ff = "isNumberString";

function Bf(t, e) {
  return typeof t == "string" && j8(t, e)
}

function Y8(t, e) {
  return x({
    name: Ff,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Bf(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a number string"
      }, e)
    }
  }, e)
}
var Vn = {
    exports: {}
  },
  wo;

function qf() {
  return wo || (wo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = u;
    var r = a(k()),
      i = a(Ee());

    function a(l) {
      return l && l.__esModule ? l : {
        default: l
      }
    }
    var n = /^[A-Z2-7]+=*$/,
      d = /^[A-HJKMNP-TV-Z0-9]+$/,
      s = {
        crockford: !1
      };

    function u(l, f) {
      if ((0, r.default)(l), f = (0, i.default)(f, s), f.crockford) return d.test(l);
      var o = l.length;
      return !!(o % 8 === 0 && n.test(l))
    }
    t.exports = e.default, t.exports.default = e.default
  }(Vn, Vn.exports)), Vn.exports
}
var z8 = qf();
const J8 = Z(z8);
var kf = "isBase32";

function Wf(t) {
  return typeof t == "string" && J8(t)
}

function X8(t) {
  return x({
    name: kf,
    validator: {
      validate: function (e, r) {
        return Wf(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be base32 encoded"
      }, t)
    }
  }, t)
}
var Zn = {
    exports: {}
  },
  Oo;

function Gf() {
  return Oo || (Oo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = a(k()),
      i = Dd();

    function a(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var n = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;

    function d(s) {
      (0, r.default)(s);
      var u = s.slice(4, 6).toUpperCase();
      return !i.CountryCodes.has(u) && u !== "XK" ? !1 : n.test(s)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Zn, Zn.exports)), Zn.exports
}
var Q8 = Gf();
const ep = Z(Q8);
var Hf = "isBIC";

function Vf(t) {
  return typeof t == "string" && ep(t)
}

function tp(t) {
  return x({
    name: Hf,
    validator: {
      validate: function (e, r) {
        return Vf(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a BIC or SWIFT code"
      }, t)
    }
  }, t)
}
var Kn = {
    exports: {}
  },
  No;

function Zf() {
  return No || (No = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = i(k());

    function i(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var a = /^(bc1)[a-z0-9]{25,39}$/,
      n = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;

    function d(s) {
      return (0, r.default)(s), a.test(s) || n.test(s)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Kn, Kn.exports)), Kn.exports
}
var rp = Zf();
const np = Z(rp);
var Kf = "isBtcAddress";

function jf(t) {
  return typeof t == "string" && np(t)
}

function ip(t) {
  return x({
    name: Kf,
    validator: {
      validate: function (e, r) {
        return jf(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a BTC address"
      }, t)
    }
  }, t)
}
var jn = {
    exports: {}
  },
  Co;

function Yf() {
  return Co || (Co = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = i(k());

    function i(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }
    var a = /^[a-z]+\/[a-z0-9\-\+\._]+$/i,
      n = /^[a-z\-]+=[a-z0-9\-]+$/i,
      d = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

    function s(u) {
      (0, r.default)(u);
      var l = u.split(",");
      if (l.length < 2) return !1;
      var f = l.shift().trim().split(";"),
        o = f.shift();
      if (o.slice(0, 5) !== "data:") return !1;
      var c = o.slice(5);
      if (c !== "" && !a.test(c)) return !1;
      for (var _ = 0; _ < f.length; _++)
        if (!(_ === f.length - 1 && f[_].toLowerCase() === "base64") && !n.test(f[_])) return !1;
      for (var h = 0; h < l.length; h++)
        if (!d.test(l[h])) return !1;
      return !0
    }
    t.exports = e.default, t.exports.default = e.default
  }(jn, jn.exports)), jn.exports
}
var ap = Yf();
const dp = Z(ap);
var zf = "isDataURI";

function Jf(t) {
  return typeof t == "string" && dp(t)
}

function up(t) {
  return x({
    name: zf,
    validator: {
      validate: function (e, r) {
        return Jf(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a data uri format"
      }, t)
    }
  }, t)
}
var Yn = {
    exports: {}
  },
  Lo;

function Xf() {
  return Lo || (Lo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = l;
    var r = i(k());

    function i(f) {
      return f && f.__esModule ? f : {
        default: f
      }
    }
    var a = 8,
      n = 14,
      d = /^(\d{8}|\d{13}|\d{14})$/;

    function s(f, o) {
      return f === a || f === n ? o % 2 === 0 ? 3 : 1 : o % 2 === 0 ? 1 : 3
    }

    function u(f) {
      var o = f.slice(0, -1).split("").map(function (_, h) {
          return Number(_) * s(f.length, h)
        }).reduce(function (_, h) {
          return _ + h
        }, 0),
        c = 10 - o % 10;
      return c < 10 ? c : 0
    }

    function l(f) {
      (0, r.default)(f);
      var o = Number(f.slice(-1));
      return d.test(f) && o === u(f)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Yn, Yn.exports)), Yn.exports
}
var sp = Xf();
const op = Z(sp);
var Qf = "isEAN";

function e2(t) {
  return typeof t == "string" && op(t)
}

function lp(t) {
  return x({
    name: Qf,
    validator: {
      validate: function (e, r) {
        return e2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be an EAN (European Article Number)"
      }, t)
    }
  }, t)
}
var zn = {
    exports: {}
  },
  Mo;

function t2() {
  return Mo || (Mo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^(0x)[0-9a-f]{40}$/i;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(zn, zn.exports)), zn.exports
}
var cp = t2();
const fp = Z(cp);
var r2 = "isEthereumAddress";

function n2(t) {
  return typeof t == "string" && fp(t)
}

function _p(t) {
  return x({
    name: r2,
    validator: {
      validate: function (e, r) {
        return n2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be an Ethereum address"
      }, t)
    }
  }, t)
}
var Jn = {
    exports: {}
  },
  Do;

function i2() {
  return Do || (Do = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = i(k());

    function i(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var a = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i,
      n = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;

    function d(s) {
      (0, r.default)(s);
      var u = s.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
      return u.indexOf(",") !== -1 ? a.test(u) : n.test(u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Jn, Jn.exports)), Jn.exports
}
var pp = i2();
const hp = Z(pp);
var a2 = "isHSL";

function d2(t) {
  return typeof t == "string" && hp(t)
}

function vp(t) {
  return x({
    name: a2,
    validator: {
      validate: function (e, r) {
        return d2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a HSL color"
      }, t)
    }
  }, t)
}
var Gt = {},
  Po;

function u2() {
  if (Po) return Gt;
  Po = 1, Object.defineProperty(Gt, "__esModule", {
    value: !0
  }), Gt.default = d, Gt.locales = void 0;
  var t = e(k());

  function e(s) {
    return s && s.__esModule ? s : {
      default: s
    }
  }
  var r = {
    AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
    AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
    AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    AT: /^(AT[0-9]{2})\d{16}$/,
    AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    BA: /^(BA[0-9]{2})\d{16}$/,
    BE: /^(BE[0-9]{2})\d{12}$/,
    BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
    BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
    BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
    BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    CR: /^(CR[0-9]{2})\d{18}$/,
    CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    CZ: /^(CZ[0-9]{2})\d{20}$/,
    DE: /^(DE[0-9]{2})\d{18}$/,
    DK: /^(DK[0-9]{2})\d{14}$/,
    DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
    DZ: /^(DZ\d{24})$/,
    EE: /^(EE[0-9]{2})\d{16}$/,
    EG: /^(EG[0-9]{2})\d{25}$/,
    ES: /^(ES[0-9]{2})\d{20}$/,
    FI: /^(FI[0-9]{2})\d{14}$/,
    FO: /^(FO[0-9]{2})\d{14}$/,
    FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
    GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
    GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
    GL: /^(GL[0-9]{2})\d{14}$/,
    GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
    GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
    HR: /^(HR[0-9]{2})\d{17}$/,
    HU: /^(HU[0-9]{2})\d{24}$/,
    IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
    IL: /^(IL[0-9]{2})\d{19}$/,
    IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
    IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
    IS: /^(IS[0-9]{2})\d{22}$/,
    IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
    KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
    KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
    LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
    LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    LT: /^(LT[0-9]{2})\d{16}$/,
    LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
    MA: /^(MA[0-9]{26})$/,
    MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
    ME: /^(ME[0-9]{2})\d{18}$/,
    MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
    MR: /^(MR[0-9]{2})\d{23}$/,
    MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
    MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
    MZ: /^(MZ[0-9]{2})\d{21}$/,
    NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
    NO: /^(NO[0-9]{2})\d{11}$/,
    PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    PL: /^(PL[0-9]{2})\d{24}$/,
    PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
    PT: /^(PT[0-9]{2})\d{21}$/,
    QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
    RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
    RS: /^(RS[0-9]{2})\d{18}$/,
    SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
    SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
    SE: /^(SE[0-9]{2})\d{20}$/,
    SI: /^(SI[0-9]{2})\d{15}$/,
    SK: /^(SK[0-9]{2})\d{20}$/,
    SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    TL: /^(TL[0-9]{2})\d{19}$/,
    TN: /^(TN[0-9]{2})\d{20}$/,
    TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
    UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
    VA: /^(VA[0-9]{2})\d{18}$/,
    VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    XK: /^(XK[0-9]{2})\d{16}$/
  };

  function i(s) {
    var u = s.filter(function (l) {
      return !(l in r)
    });
    return !(u.length > 0)
  }

  function a(s, u) {
    var l = s.replace(/[\s\-]+/gi, "").toUpperCase(),
      f = l.slice(0, 2).toUpperCase(),
      o = f in r;
    if (u.whitelist) {
      if (!i(u.whitelist)) return !1;
      var c = u.whitelist.includes(f);
      if (!c) return !1
    }
    if (u.blacklist) {
      var _ = u.blacklist.includes(f);
      if (_) return !1
    }
    return o && r[f].test(l)
  }

  function n(s) {
    var u = s.replace(/[^A-Z0-9]+/gi, "").toUpperCase(),
      l = u.slice(4) + u.slice(0, 4),
      f = l.replace(/[A-Z]/g, function (c) {
        return c.charCodeAt(0) - 55
      }),
      o = f.match(/\d{1,7}/g).reduce(function (c, _) {
        return Number(c + _) % 97
      }, "");
    return o === 1
  }

  function d(s) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, t.default)(s), a(s, u) && n(s)
  }
  return Gt.locales = Object.keys(r), Gt
}
var $p = u2();
const Ep = Z($p);
var s2 = "isIBAN";

function o2(t) {
  return typeof t == "string" && Ep(t)
}

function yp(t) {
  return x({
    name: s2,
    validator: {
      validate: function (e, r) {
        return o2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be an IBAN"
      }, t)
    }
  }, t)
}
var Xn = {
    exports: {}
  },
  Uo;

function l2() {
  return Uo || (Uo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = a(k()),
      i = a(Ld());

    function a(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var n = {
      PL: function (u) {
        (0, r.default)(u);
        var l = {
          1: 1,
          2: 3,
          3: 7,
          4: 9,
          5: 1,
          6: 3,
          7: 7,
          8: 9,
          9: 1,
          10: 3,
          11: 0
        };
        if (u != null && u.length === 11 && (0, i.default)(u, {
            allow_leading_zeroes: !0
          })) {
          var f = u.split("").slice(0, -1),
            o = f.reduce(function (h, v, p) {
              return h + Number(v) * l[p + 1]
            }, 0),
            c = o % 10,
            _ = Number(u.charAt(u.length - 1));
          if (c === 0 && _ === 0 || _ === 10 - c) return !0
        }
        return !1
      },
      ES: function (u) {
        (0, r.default)(u);
        var l = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/,
          f = {
            X: 0,
            Y: 1,
            Z: 2
          },
          o = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"],
          c = u.trim().toUpperCase();
        if (!l.test(c)) return !1;
        var _ = c.slice(0, -1).replace(/[X,Y,Z]/g, function (h) {
          return f[h]
        });
        return c.endsWith(o[_ % 23])
      },
      FI: function (u) {
        if ((0, r.default)(u), u.length !== 11 || !u.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) return !1;
        var l = "0123456789ABCDEFHJKLMNPRSTUVWXY",
          f = parseInt(u.slice(0, 6), 10) * 1e3 + parseInt(u.slice(7, 10), 10),
          o = f % 31,
          c = l[o];
        return c === u.slice(10, 11)
      },
      IN: function (u) {
        var l = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/,
          f = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
            [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
            [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
            [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
            [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
            [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
            [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
            [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
            [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
          ],
          o = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
            [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
            [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
            [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
            [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
            [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
            [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
          ],
          c = u.trim();
        if (!l.test(c)) return !1;
        var _ = 0,
          h = c.replace(/\s/g, "").split("").map(Number).reverse();
        return h.forEach(function (v, p) {
          _ = f[_][o[p % 8][v]]
        }), _ === 0
      },
      IR: function (u) {
        if (!u.match(/^\d{10}$/) || (u = "0000".concat(u).slice(u.length - 6), parseInt(u.slice(3, 9), 10) === 0)) return !1;
        for (var l = parseInt(u.slice(9, 10), 10), f = 0, o = 0; o < 9; o++) f += parseInt(u.slice(o, o + 1), 10) * (10 - o);
        return f %= 11, f < 2 && l === f || f >= 2 && l === 11 - f
      },
      IT: function (u) {
        return u.length !== 9 || u === "CA00000AA" ? !1 : u.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1
      },
      NO: function (u) {
        var l = u.trim();
        if (isNaN(Number(l)) || l.length !== 11 || l === "00000000000") return !1;
        var f = l.split("").map(Number),
          o = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11,
          c = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * o) % 11) % 11;
        return !(o !== f[9] || c !== f[10])
      },
      TH: function (u) {
        if (!u.match(/^[1-8]\d{12}$/)) return !1;
        for (var l = 0, f = 0; f < 12; f++) l += parseInt(u[f], 10) * (13 - f);
        return u[12] === ((11 - l % 11) % 10).toString()
      },
      LK: function (u) {
        var l = /^[1-9]\d{8}[vx]$/i,
          f = /^[1-9]\d{11}$/i;
        return u.length === 10 && l.test(u) ? !0 : !!(u.length === 12 && f.test(u))
      },
      "he-IL": function (u) {
        var l = /^\d{9}$/,
          f = u.trim();
        if (!l.test(f)) return !1;
        for (var o = f, c = 0, _, h = 0; h < o.length; h++) _ = Number(o[h]) * (h % 2 + 1), c += _ > 9 ? _ - 9 : _;
        return c % 10 === 0
      },
      "ar-LY": function (u) {
        var l = /^(1|2)\d{11}$/,
          f = u.trim();
        return !!l.test(f)
      },
      "ar-TN": function (u) {
        var l = /^\d{8}$/,
          f = u.trim();
        return !!l.test(f)
      },
      "zh-CN": function (u) {
        var l = ["11", "12", "13", "14", "15", "21", "22", "23", "31", "32", "33", "34", "35", "36", "37", "41", "42", "43", "44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63", "64", "65", "71", "81", "82", "91"],
          f = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],
          o = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"],
          c = function (m) {
            return l.includes(m)
          },
          _ = function (m) {
            var I = parseInt(m.substring(0, 4), 10),
              O = parseInt(m.substring(4, 6), 10),
              N = parseInt(m.substring(6), 10),
              P = new Date(I, O - 1, N);
            return P > new Date ? !1 : P.getFullYear() === I && P.getMonth() === O - 1 && P.getDate() === N
          },
          h = function (m) {
            for (var I = m.substring(0, 17), O = 0, N = 0; N < 17; N++) O += parseInt(I.charAt(N), 10) * parseInt(f[N], 10);
            var P = O % 11;
            return o[P]
          },
          v = function (m) {
            return h(m) === m.charAt(17).toUpperCase()
          },
          p = function (m) {
            var I = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(m);
            if (!I) return !1;
            var O = m.substring(0, 2);
            if (I = c(O), !I) return !1;
            var N = "19".concat(m.substring(6, 12));
            return I = _(N), !!I
          },
          E = function (m) {
            var I = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(m);
            if (!I) return !1;
            var O = m.substring(0, 2);
            if (I = c(O), !I) return !1;
            var N = m.substring(6, 14);
            return I = _(N), I ? v(m) : !1
          },
          g = function (m) {
            var I = /^\d{15}|(\d{17}(\d|x|X))$/.test(m);
            return I ? m.length === 15 ? p(m) : E(m) : !1
          };
        return g(u)
      },
      "zh-HK": function (u) {
        u = u.trim();
        var l = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/,
          f = /^[0-9]$/;
        if (u = u.toUpperCase(), !l.test(u)) return !1;
        u = u.replace(/\[|\]|\(|\)/g, ""), u.length === 8 && (u = "3".concat(u));
        for (var o = 0, c = 0; c <= 7; c++) {
          var _ = void 0;
          f.test(u[c]) ? _ = u[c] : _ = (u[c].charCodeAt(0) - 55) % 11, o += _ * (9 - c)
        }
        o %= 11;
        var h;
        return o === 0 ? h = "0" : o === 1 ? h = "A" : h = String(11 - o), h === u[u.length - 1]
      },
      "zh-TW": function (u) {
        var l = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 34,
            J: 18,
            K: 19,
            L: 20,
            M: 21,
            N: 22,
            O: 35,
            P: 23,
            Q: 24,
            R: 25,
            S: 26,
            T: 27,
            U: 28,
            V: 29,
            W: 32,
            X: 30,
            Y: 31,
            Z: 33
          },
          f = u.trim().toUpperCase();
        return /^[A-Z][0-9]{9}$/.test(f) ? Array.from(f).reduce(function (o, c, _) {
          if (_ === 0) {
            var h = l[c];
            return h % 10 * 9 + Math.floor(h / 10)
          }
          return _ === 9 ? (10 - o % 10 - Number(c)) % 10 === 0 : o + Number(c) * (9 - _)
        }, 0) : !1
      }
    };

    function d(s, u) {
      if ((0, r.default)(s), u in n) return n[u](s);
      if (u === "any") {
        for (var l in n)
          if (n.hasOwnProperty(l)) {
            var f = n[l];
            if (f(s)) return !0
          } return !1
      }
      throw new Error("Invalid locale '".concat(u, "'"))
    }
    t.exports = e.default, t.exports.default = e.default
  }(Xn, Xn.exports)), Xn.exports
}
var gp = l2();
const mp = Z(gp);
var c2 = "isIdentityCard";

function f2(t, e) {
  return typeof t == "string" && mp(t, e)
}

function Ip(t, e) {
  return x({
    name: c2,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return f2(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a identity card number"
      }, e)
    }
  }, e)
}
var Qn = {
    exports: {}
  },
  xo;

function _2() {
  return xo || (xo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Qn, Qn.exports)), Qn.exports
}
var Tp = _2();
const Sp = Z(Tp);
var p2 = "isISRC";

function h2(t) {
  return typeof t == "string" && Sp(t)
}

function Rp(t) {
  return x({
    name: p2,
    validator: {
      validate: function (e, r) {
        return h2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be an ISRC"
      }, t)
    }
  }, t)
}
var ei = {
    exports: {}
  },
  Fo;

function v2() {
  return Fo || (Fo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = g;
    var r = i(k());

    function i(S) {
      return S && S.__esModule ? S : {
        default: S
      }
    }
    var a = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})",
      n = "(([a-zA-Z]{2,3}(-".concat(a, ")?)|([a-zA-Z]{5,8}))"),
      d = "([A-Za-z]{4})",
      s = "([A-Za-z]{2}|\\d{3})",
      u = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))",
      l = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])",
      f = "(".concat(l, "(-[A-Za-z0-9]{2,8})+)"),
      o = "(x(-[A-Za-z0-9]{1,8})+)",
      c = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))",
      _ = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))",
      h = "(".concat(c, "|").concat(_, ")"),
      v = "(-|_)",
      p = "".concat(n, "(").concat(v).concat(d, ")?(").concat(v).concat(s, ")?(").concat(v).concat(u, ")*(").concat(v).concat(f, ")*(").concat(v).concat(o, ")?"),
      E = new RegExp("(^".concat(o, "$)|(^").concat(h, "$)|(^").concat(p, "$)"));

    function g(S) {
      return (0, r.default)(S), E.test(S)
    }
    t.exports = e.default, t.exports.default = e.default
  }(ei, ei.exports)), ei.exports
}
var bp = v2();
const Ap = Z(bp);
var $2 = "isLocale";

function E2(t) {
  return typeof t == "string" && Ap(t)
}

function wp(t) {
  return x({
    name: $2,
    validator: {
      validate: function (e, r) {
        return E2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be locale"
      }, t)
    }
  }, t)
}
var ti = {
    exports: {}
  },
  Bo;

function y2() {
  return Bo || (Bo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;

    function n(d) {
      return (0, r.default)(d), d.indexOf("magnet:?") !== 0 ? !1 : a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(ti, ti.exports)), ti.exports
}
var Op = y2();
const Np = Z(Op);
var g2 = "isMagnetURI";

function m2(t) {
  return typeof t == "string" && Np(t)
}

function Cp(t) {
  return x({
    name: g2,
    validator: {
      validate: function (e, r) {
        return m2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be magnet uri format"
      }, t)
    }
  }, t)
}
var ri = {
    exports: {}
  },
  qo;

function I2() {
  return qo || (qo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = s;
    var r = i(k());

    function i(u) {
      return u && u.__esModule ? u : {
        default: u
      }
    }
    var a = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i,
      n = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i,
      d = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;

    function s(u) {
      return (0, r.default)(u), a.test(u) || n.test(u) || d.test(u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(ri, ri.exports)), ri.exports
}
var Lp = I2();
const Mp = Z(Lp);
var T2 = "isMimeType";

function S2(t) {
  return typeof t == "string" && Mp(t)
}

function Dp(t) {
  return x({
    name: T2,
    validator: {
      validate: function (e, r) {
        return S2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be MIME type format"
      }, t)
    }
  }, t)
}
var ni = {
    exports: {}
  },
  ko;

function R2() {
  return ko || (ko = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^(0o)?[0-7]+$/i;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(ni, ni.exports)), ni.exports
}
var Pp = R2();
const Up = Z(Pp);
var b2 = "isOctal";

function A2(t) {
  return typeof t == "string" && Up(t)
}

function xp(t) {
  return x({
    name: b2,
    validator: {
      validate: function (e, r) {
        return A2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be valid octal number"
      }, t)
    }
  }, t)
}
var ii = {
    exports: {}
  },
  Wo;

function w2() {
  return Wo || (Wo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = {
      AM: /^[A-Z]{2}\d{7}$/,
      AR: /^[A-Z]{3}\d{6}$/,
      AT: /^[A-Z]\d{7}$/,
      AU: /^[A-Z]\d{7}$/,
      AZ: /^[A-Z]{1}\d{8}$/,
      BE: /^[A-Z]{2}\d{6}$/,
      BG: /^\d{9}$/,
      BR: /^[A-Z]{2}\d{6}$/,
      BY: /^[A-Z]{2}\d{7}$/,
      CA: /^[A-Z]{2}\d{6}$/,
      CH: /^[A-Z]\d{7}$/,
      CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
      CY: /^[A-Z](\d{6}|\d{8})$/,
      CZ: /^\d{8}$/,
      DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
      DK: /^\d{9}$/,
      DZ: /^\d{9}$/,
      EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
      ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
      FI: /^[A-Z]{2}\d{7}$/,
      FR: /^\d{2}[A-Z]{2}\d{5}$/,
      GB: /^\d{9}$/,
      GR: /^[A-Z]{2}\d{7}$/,
      HR: /^\d{9}$/,
      HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
      IE: /^[A-Z0-9]{2}\d{7}$/,
      IN: /^[A-Z]{1}-?\d{7}$/,
      ID: /^[A-C]\d{7}$/,
      IR: /^[A-Z]\d{8}$/,
      IS: /^(A)\d{7}$/,
      IT: /^[A-Z0-9]{2}\d{7}$/,
      JM: /^[Aa]\d{7}$/,
      JP: /^[A-Z]{2}\d{7}$/,
      KR: /^[MS]\d{8}$/,
      KZ: /^[a-zA-Z]\d{7}$/,
      LI: /^[a-zA-Z]\d{5}$/,
      LT: /^[A-Z0-9]{8}$/,
      LU: /^[A-Z0-9]{8}$/,
      LV: /^[A-Z0-9]{2}\d{7}$/,
      LY: /^[A-Z0-9]{8}$/,
      MT: /^\d{7}$/,
      MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
      MY: /^[AHK]\d{8}$/,
      MX: /^\d{10,11}$/,
      NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
      NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
      PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
      PK: /^[A-Z]{2}\d{7}$/,
      PL: /^[A-Z]{2}\d{7}$/,
      PT: /^[A-Z]\d{6}$/,
      RO: /^\d{8,9}$/,
      RU: /^\d{9}$/,
      SE: /^\d{8}$/,
      SL: /^(P)[A-Z]\d{7}$/,
      SK: /^[0-9A-Z]\d{7}$/,
      TH: /^[A-Z]{1,2}\d{6,7}$/,
      TR: /^[A-Z]\d{8}$/,
      UA: /^[A-Z]{2}\d{6}$/,
      US: /^\d{9}$/,
      ZA: /^[TAMD]\d{8}$/
    };

    function n(d, s) {
      (0, r.default)(d);
      var u = d.replace(/\s/g, "").toUpperCase();
      return s.toUpperCase() in a && a[s].test(u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(ii, ii.exports)), ii.exports
}
var Fp = w2();
const Bp = Z(Fp);
var O2 = "isPassportNumber";

function N2(t, e) {
  return typeof t == "string" && Bp(t, e)
}

function qp(t, e) {
  return x({
    name: O2,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return N2(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be valid passport number"
      }, e)
    }
  }, e)
}
var Ht = {},
  Go;

function C2() {
  if (Go) return Ht;
  Go = 1, Object.defineProperty(Ht, "__esModule", {
    value: !0
  }), Ht.default = s, Ht.locales = void 0;
  var t = e(k());

  function e(u) {
    return u && u.__esModule ? u : {
      default: u
    }
  }
  var r = /^\d{3}$/,
    i = /^\d{4}$/,
    a = /^\d{5}$/,
    n = /^\d{6}$/,
    d = {
      AD: /^AD\d{3}$/,
      AT: i,
      AU: i,
      AZ: /^AZ\d{4}$/,
      BA: /^([7-8]\d{4}$)/,
      BE: i,
      BG: i,
      BR: /^\d{5}-\d{3}$/,
      BY: /^2[1-4]\d{4}$/,
      CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
      CH: i,
      CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
      CZ: /^\d{3}\s?\d{2}$/,
      DE: a,
      DK: i,
      DO: a,
      DZ: a,
      EE: a,
      ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
      FI: a,
      FR: /^\d{2}\s?\d{3}$/,
      GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
      GR: /^\d{3}\s?\d{2}$/,
      HR: /^([1-5]\d{4}$)/,
      HT: /^HT\d{4}$/,
      HU: i,
      ID: a,
      IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
      IL: /^(\d{5}|\d{7})$/,
      IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
      IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
      IS: r,
      IT: a,
      JP: /^\d{3}\-\d{4}$/,
      KE: a,
      KR: /^(\d{5}|\d{6})$/,
      LI: /^(948[5-9]|949[0-7])$/,
      LT: /^LT\-\d{5}$/,
      LU: i,
      LV: /^LV\-\d{4}$/,
      LK: a,
      MG: r,
      MX: a,
      MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
      MY: a,
      NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
      NO: i,
      NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
      NZ: i,
      PL: /^\d{2}\-\d{3}$/,
      PR: /^00[679]\d{2}([ -]\d{4})?$/,
      PT: /^\d{4}\-\d{3}?$/,
      RO: n,
      RU: n,
      SA: a,
      SE: /^[1-9]\d{2}\s?\d{2}$/,
      SG: n,
      SI: i,
      SK: /^\d{3}\s?\d{2}$/,
      TH: a,
      TN: i,
      TW: /^\d{3}(\d{2})?$/,
      UA: a,
      US: /^\d{5}(-\d{4})?$/,
      ZA: i,
      ZM: a
    };
  Ht.locales = Object.keys(d);

  function s(u, l) {
    if ((0, t.default)(u), l in d) return d[l].test(u);
    if (l === "any") {
      for (var f in d)
        if (d.hasOwnProperty(f)) {
          var o = d[f];
          if (o.test(u)) return !0
        } return !1
    }
    throw new Error("Invalid locale '".concat(l, "'"))
  }
  return Ht
}
var kp = C2();
const Wp = Z(kp);
var L2 = "isPostalCode";

function M2(t, e) {
  return typeof t == "string" && Wp(t, e)
}

function Gp(t, e) {
  return x({
    name: L2,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return M2(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a postal code"
      }, e)
    }
  }, e)
}
var ai = {
    exports: {}
  },
  Ho;

function D2() {
  return Ho || (Ho = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = E;
    var r = i(k());

    function i(g) {
      return g && g.__esModule ? g : {
        default: g
      }
    }
    var a = /[0-9]{4}/,
      n = /(0[1-9]|1[0-2])/,
      d = /([12]\d|0[1-9]|3[01])/,
      s = /([01][0-9]|2[0-3])/,
      u = /[0-5][0-9]/,
      l = /([0-5][0-9]|60)/,
      f = /(\.[0-9]+)?/,
      o = new RegExp("[-+]".concat(s.source, ":").concat(u.source)),
      c = new RegExp("([zZ]|".concat(o.source, ")")),
      _ = new RegExp("".concat(s.source, ":").concat(u.source, ":").concat(l.source).concat(f.source)),
      h = new RegExp("".concat(a.source, "-").concat(n.source, "-").concat(d.source)),
      v = new RegExp("".concat(_.source).concat(c.source)),
      p = new RegExp("^".concat(h.source, "[ tT]").concat(v.source, "$"));

    function E(g) {
      return (0, r.default)(g), p.test(g)
    }
    t.exports = e.default, t.exports.default = e.default
  }(ai, ai.exports)), ai.exports
}
var Hp = D2();
const Vp = Z(Hp);
var P2 = "isRFC3339";

function U2(t) {
  return typeof t == "string" && Vp(t)
}

function Zp(t) {
  return x({
    name: P2,
    validator: {
      validate: function (e, r) {
        return U2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be RFC 3339 date"
      }, t)
    }
  }, t)
}
var di = {
    exports: {}
  },
  Vo;

function x2() {
  return Vo || (Vo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = u;
    var r = i(k());

    function i(l) {
      return l && l.__esModule ? l : {
        default: l
      }
    }
    var a = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/,
      n = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/,
      d = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/,
      s = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;

    function u(l) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (0, r.default)(l), f ? a.test(l) || n.test(l) || d.test(l) || s.test(l) : a.test(l) || n.test(l)
    }
    t.exports = e.default, t.exports.default = e.default
  }(di, di.exports)), di.exports
}
var Kp = x2();
const jp = Z(Kp);
var F2 = "isRgbColor";

function B2(t, e) {
  return typeof t == "string" && jp(t, e)
}

function Yp(t, e) {
  return x({
    name: F2,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return B2(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be RGB color"
      }, e)
    }
  }, e)
}
var ui = {
    exports: {}
  },
  si = {
    exports: {}
  },
  Zo;

function zp() {
  return Zo || (Zo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = r;

    function r(i, a) {
      var n = i.join("");
      return new RegExp(n, a)
    }
    t.exports = e.default, t.exports.default = e.default
  }(si, si.exports)), si.exports
}
var Ko;

function q2() {
  return Ko || (Ko = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = a(k()),
      i = a(zp());

    function a(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var n = (0, i.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");

    function d(s) {
      return (0, r.default)(s), n.test(s)
    }
    t.exports = e.default, t.exports.default = e.default
  }(ui, ui.exports)), ui.exports
}
var Jp = q2();
const Xp = Z(Jp);
var k2 = "isSemVer";

function W2(t) {
  return typeof t == "string" && Xp(t)
}

function Qp(t) {
  return x({
    name: k2,
    validator: {
      validate: function (e, r) {
        return W2(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a Semantic Versioning Specification"
      }, t)
    }
  }, t)
}
var oi = {
    exports: {}
  },
  li = {
    exports: {}
  },
  jo;

function kd() {
  return jo || (jo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n) {
      return (0, r.default)(n), n = Date.parse(n), isNaN(n) ? null : new Date(n)
    }
    t.exports = e.default, t.exports.default = e.default
  }(li, li.exports)), li.exports
}
var ci = {
    exports: {}
  },
  Yo;

function e7() {
  return Yo || (Yo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      return (0, r.default)(n), parseInt(n, d || 10)
    }
    t.exports = e.default, t.exports.default = e.default
  }(ci, ci.exports)), ci.exports
}
var fi = {
    exports: {}
  },
  zo;

function t7() {
  return zo || (zo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      return (0, r.default)(n), d ? n === "1" || /^true$/i.test(n) : n !== "0" && !/^false$/i.test(n) && n !== ""
    }
    t.exports = e.default, t.exports.default = e.default
  }(fi, fi.exports)), fi.exports
}
var _i = {
    exports: {}
  },
  Jo;

function r7() {
  return Jo || (Jo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      return (0, r.default)(n), n === d
    }
    t.exports = e.default, t.exports.default = e.default
  }(_i, _i.exports)), _i.exports
}
var pi = {
    exports: {}
  },
  Xo;

function n7() {
  return Xo || (Xo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = u;
    var r = a(k()),
      i = a(Hr());

    function a(l) {
      return l && l.__esModule ? l : {
        default: l
      }
    }
    var n = /^\d{1,3}$/,
      d = 32,
      s = 128;

    function u(l) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, r.default)(l);
      var o = l.split("/");
      if (o.length !== 2 || !n.test(o[1]) || o[1].length > 1 && o[1].startsWith("0")) return !1;
      var c = (0, i.default)(o[0], f);
      if (!c) return !1;
      var _ = null;
      switch (String(f)) {
        case "4":
          _ = d;
          break;
        case "6":
          _ = s;
          break;
        default:
          _ = (0, i.default)(o[0], "6") ? s : d
      }
      return o[1] <= _ && o[1] >= 0
    }
    t.exports = e.default, t.exports.default = e.default
  }(pi, pi.exports)), pi.exports
}
var hi = {
    exports: {}
  },
  Qo;

function G2() {
  return Qo || (Qo = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = h;
    var r = i(Ee());

    function i(v) {
      return v && v.__esModule ? v : {
        default: v
      }
    }

    function a(v, p) {
      return s(v) || d(v, p) || l(v, p) || n()
    }

    function n() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function d(v, p) {
      var E = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
      if (E != null) {
        var g, S, m, I, O = [],
          N = !0,
          P = !1;
        try {
          if (m = (E = E.call(v)).next, p !== 0)
            for (; !(N = (g = m.call(E)).done) && (O.push(g.value), O.length !== p); N = !0);
        } catch (q) {
          P = !0, S = q
        } finally {
          try {
            if (!N && E.return != null && (I = E.return(), Object(I) !== I)) return
          } finally {
            if (P) throw S
          }
        }
        return O
      }
    }

    function s(v) {
      if (Array.isArray(v)) return v
    }

    function u(v, p) {
      var E = typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
      if (!E) {
        if (Array.isArray(v) || (E = l(v)) || p) {
          E && (v = E);
          var g = 0,
            S = function () {};
          return {
            s: S,
            n: function () {
              return g >= v.length ? {
                done: !0
              } : {
                done: !1,
                value: v[g++]
              }
            },
            e: function (P) {
              throw P
            },
            f: S
          }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      var m = !0,
        I = !1,
        O;
      return {
        s: function () {
          E = E.call(v)
        },
        n: function () {
          var P = E.next();
          return m = P.done, P
        },
        e: function (P) {
          I = !0, O = P
        },
        f: function () {
          try {
            !m && E.return != null && E.return()
          } finally {
            if (I) throw O
          }
        }
      }
    }

    function l(v, p) {
      if (v) {
        if (typeof v == "string") return f(v, p);
        var E = Object.prototype.toString.call(v).slice(8, -1);
        if (E === "Object" && v.constructor && (E = v.constructor.name), E === "Map" || E === "Set") return Array.from(v);
        if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return f(v, p)
      }
    }

    function f(v, p) {
      (p == null || p > v.length) && (p = v.length);
      for (var E = 0, g = new Array(p); E < p; E++) g[E] = v[E];
      return g
    }
    var o = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1
    };

    function c(v) {
      return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(v)
    }

    function _(v, p) {
      for (var E = [], g = Math.min(v.length, p.length), S = 0; S < g; S++) E.push([v[S], p[S]]);
      return E
    }

    function h(v, p) {
      if (typeof p == "string" ? p = (0, r.default)({
          format: p
        }, o) : p = (0, r.default)(p, o), typeof v == "string" && c(p.format)) {
        var E = p.delimiters.find(function (_e) {
            return p.format.indexOf(_e) !== -1
          }),
          g = p.strictMode ? E : p.delimiters.find(function (_e) {
            return v.indexOf(_e) !== -1
          }),
          S = _(v.split(g), p.format.toLowerCase().split(E)),
          m = {},
          I = u(S),
          O;
        try {
          for (I.s(); !(O = I.n()).done;) {
            var N = a(O.value, 2),
              P = N[0],
              q = N[1];
            if (P.length !== q.length) return !1;
            m[q.charAt(0)] = P
          }
        } catch (_e) {
          I.e(_e)
        } finally {
          I.f()
        }
        var V = m.y;
        if (V.startsWith("-")) return !1;
        if (m.y.length === 2) {
          var K = parseInt(m.y, 10);
          if (isNaN(K)) return !1;
          var ie = new Date().getFullYear() % 100;
          K < ie ? V = "20".concat(m.y) : V = "19".concat(m.y)
        }
        var oe = m.m;
        m.m.length === 1 && (oe = "0".concat(m.m));
        var Te = m.d;
        return m.d.length === 1 && (Te = "0".concat(m.d)), new Date("".concat(V, "-").concat(oe, "-").concat(Te, "T00:00:00.000Z")).getUTCDate() === +m.d
      }
      return p.strictMode ? !1 : Object.prototype.toString.call(v) === "[object Date]" && isFinite(v)
    }
    t.exports = e.default, t.exports.default = e.default
  }(hi, hi.exports)), hi.exports
}
var vi = {
    exports: {}
  },
  e0;

function i7() {
  return e0 || (e0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = i(Ee());

    function i(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var a = {
        hourFormat: "hour24",
        mode: "default"
      },
      n = {
        hour24: {
          default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
          withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
        },
        hour12: {
          default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
          withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
        }
      };

    function d(s, u) {
      return u = (0, r.default)(u, a), typeof s != "string" ? !1 : n[u.hourFormat][u.mode].test(s)
    }
    t.exports = e.default, t.exports.default = e.default
  }(vi, vi.exports)), vi.exports
}
var $i = {
    exports: {}
  },
  t0;

function a7() {
  return t0 || (t0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;

    function n(d) {
      if ((0, r.default)(d), !a.test(d)) return !1;
      for (var s = 0, u = 0; u < d.length; u++) u % 3 === 0 ? s += d[u] * 3 : u % 3 === 1 ? s += d[u] * 7 : s += d[u] * 1;
      return s % 10 === 0
    }
    t.exports = e.default, t.exports.default = e.default
  }($i, $i.exports)), $i.exports
}
var Ei = {
    exports: {}
  },
  r0;

function d7() {
  return r0 || (r0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = i(k());

    function i(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var a = /^[0-9]{15}$/,
      n = /^\d{2}-\d{6}-\d{6}-\d{1}$/;

    function d(s, u) {
      (0, r.default)(s), u = u || {};
      var l = a;
      if (u.allow_hyphens && (l = n), !l.test(s)) return !1;
      s = s.replace(/-/g, "");
      for (var f = 0, o = 2, c = 14, _ = 0; _ < c; _++) {
        var h = s.substring(c - _ - 1, c - _),
          v = parseInt(h, 10) * o;
        v >= 10 ? f += v % 10 + 1 : f += v, o === 1 ? o += 1 : o -= 1
      }
      var p = (10 - f % 10) % 10;
      return p === parseInt(s.substring(14, 15), 10)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ei, Ei.exports)), Ei.exports
}
var yi = {
    exports: {}
  },
  n0;

function u7() {
  return n0 || (n0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^[a-f0-9]{32}$/;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(yi, yi.exports)), yi.exports
}
var gi = {
    exports: {}
  },
  i0;

function s7() {
  return i0 || (i0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = a(k()),
      i = a(Ee());

    function a(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }
    var n = {
      ignore_whitespace: !1
    };

    function d(s, u) {
      return (0, r.default)(s), u = (0, i.default)(u, n), (u.ignore_whitespace ? s.trim().length : s.length) === 0
    }
    t.exports = e.default, t.exports.default = e.default
  }(gi, gi.exports)), gi.exports
}
var mi = {
    exports: {}
  },
  a0;

function o7() {
  return a0 || (a0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(kd());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      var s = (d == null ? void 0 : d.comparisonDate) || d || Date().toString(),
        u = (0, r.default)(s),
        l = (0, r.default)(n);
      return !!(l && u && l > u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(mi, mi.exports)), mi.exports
}
var Ii = {
    exports: {}
  },
  d0;

function l7() {
  return d0 || (d0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = a(k()),
      i = a(kd());

    function a(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }

    function n(d) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(new Date);
      (0, r.default)(d);
      var u = (0, i.default)(s),
        l = (0, i.default)(d);
      return !!(l && u && l < u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ii, Ii.exports)), Ii.exports
}
var Ti = {
    exports: {}
  },
  u0;

function c7() {
  return u0 || (u0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = d;
    var r = a(k()),
      i = a(_1());

    function a(s) {
      return s && s.__esModule ? s : {
        default: s
      }
    }

    function n(s) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (u) {
        return typeof u
      } : function (u) {
        return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
      }, n(s)
    }

    function d(s, u) {
      (0, r.default)(s);
      var l;
      if (Object.prototype.toString.call(u) === "[object Array]") {
        var f = [];
        for (l in u)({}).hasOwnProperty.call(u, l) && (f[l] = (0, i.default)(u[l]));
        return f.indexOf(s) >= 0
      } else {
        if (n(u) === "object") return u.hasOwnProperty(s);
        if (u && typeof u.indexOf == "function") return u.indexOf(s) >= 0
      }
      return !1
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ti, Ti.exports)), Ti.exports
}
var Si = {
    exports: {}
  },
  $t = {},
  s0;

function H2() {
  if (s0) return $t;
  s0 = 1, Object.defineProperty($t, "__esModule", {
    value: !0
  }), $t.iso7064Check = t, $t.luhnCheck = e, $t.reverseMultiplyAndSum = r, $t.verhoeffCheck = i;

  function t(a) {
    for (var n = 10, d = 0; d < a.length - 1; d++) n = (parseInt(a[d], 10) + n) % 10 === 0 ? 10 * 2 % 11 : (parseInt(a[d], 10) + n) % 10 * 2 % 11;
    return n = n === 1 ? 0 : 11 - n, n === parseInt(a[10], 10)
  }

  function e(a) {
    for (var n = 0, d = !1, s = a.length - 1; s >= 0; s--) {
      if (d) {
        var u = parseInt(a[s], 10) * 2;
        u > 9 ? n += u.toString().split("").map(function (l) {
          return parseInt(l, 10)
        }).reduce(function (l, f) {
          return l + f
        }, 0) : n += u
      } else n += parseInt(a[s], 10);
      d = !d
    }
    return n % 10 === 0
  }

  function r(a, n) {
    for (var d = 0, s = 0; s < a.length; s++) d += a[s] * (n - s);
    return d
  }

  function i(a) {
    for (var n = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
        [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
        [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
        [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
        [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
        [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
        [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
        [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      ], d = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
        [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
        [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
        [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
        [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
      ], s = a.split("").reverse().join(""), u = 0, l = 0; l < s.length; l++) u = n[u][d[l % 8][parseInt(s[l], 10)]];
    return u === 0
  }
  return $t
}
var o0;

function V2() {
  return o0 || (o0 = 1, function (t, e) {
    function r(b) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (w) {
        return typeof w
      } : function (w) {
        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
      }, r(b)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = or;
    var i = u(k()),
      a = s(H2()),
      n = u(G2());

    function d(b) {
      if (typeof WeakMap != "function") return null;
      var w = new WeakMap,
        R = new WeakMap;
      return (d = function (F) {
        return F ? R : w
      })(b)
    }

    function s(b, w) {
      if (b && b.__esModule) return b;
      if (b === null || r(b) != "object" && typeof b != "function") return {
        default: b
      };
      var R = d(w);
      if (R && R.has(b)) return R.get(b);
      var D = {
          __proto__: null
        },
        F = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var W in b)
        if (W !== "default" && {}.hasOwnProperty.call(b, W)) {
          var j = F ? Object.getOwnPropertyDescriptor(b, W) : null;
          j && (j.get || j.set) ? Object.defineProperty(D, W, j) : D[W] = b[W]
        } return D.default = b, R && R.set(b, D), D
    }

    function u(b) {
      return b && b.__esModule ? b : {
        default: b
      }
    }

    function l(b) {
      return _(b) || c(b) || o(b) || f()
    }

    function f() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function o(b, w) {
      if (b) {
        if (typeof b == "string") return h(b, w);
        var R = Object.prototype.toString.call(b).slice(8, -1);
        if (R === "Object" && b.constructor && (R = b.constructor.name), R === "Map" || R === "Set") return Array.from(b);
        if (R === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)) return h(b, w)
      }
    }

    function c(b) {
      if (typeof Symbol < "u" && b[Symbol.iterator] != null || b["@@iterator"] != null) return Array.from(b)
    }

    function _(b) {
      if (Array.isArray(b)) return h(b)
    }

    function h(b, w) {
      (w == null || w > b.length) && (w = b.length);
      for (var R = 0, D = new Array(w); R < w; R++) D[R] = b[R];
      return D
    }

    function v(b) {
      var w = b.slice(0, 2),
        R = parseInt(b.slice(2, 4), 10);
      R > 40 ? (R -= 40, w = "20".concat(w)) : R > 20 ? (R -= 20, w = "18".concat(w)) : w = "19".concat(w), R < 10 && (R = "0".concat(R));
      var D = "".concat(w, "/").concat(R, "/").concat(b.slice(4, 6));
      if (!(0, n.default)(D, "YYYY/MM/DD")) return !1;
      for (var F = b.split("").map(function (re) {
          return parseInt(re, 10)
        }), W = [2, 4, 8, 5, 10, 9, 7, 3, 6], j = 0, X = 0; X < W.length; X++) j += F[X] * W[X];
      return j = j % 11 === 10 ? 0 : j % 11, j === F[9]
    }

    function p(b) {
      var w = b.split(""),
        R = w.filter(function (F, W) {
          return W % 2
        }).map(function (F) {
          return Number(F) * 2
        }).join("").split(""),
        D = w.filter(function (F, W) {
          return !(W % 2)
        }).concat(R).map(function (F) {
          return Number(F)
        }).reduce(function (F, W) {
          return F + W
        });
      return D % 10 === 0
    }

    function E(b) {
      b = b.replace(/\W/, "");
      var w = parseInt(b.slice(0, 2), 10);
      if (b.length === 10) w < 54 ? w = "20".concat(w) : w = "19".concat(w);
      else {
        if (b.slice(6) === "000") return !1;
        if (w < 54) w = "19".concat(w);
        else return !1
      }
      w.length === 3 && (w = [w.slice(0, 2), "0", w.slice(2)].join(""));
      var R = parseInt(b.slice(2, 4), 10);
      if (R > 50 && (R -= 50), R > 20) {
        if (parseInt(w, 10) < 2004) return !1;
        R -= 20
      }
      R < 10 && (R = "0".concat(R));
      var D = "".concat(w, "/").concat(R, "/").concat(b.slice(4, 6));
      if (!(0, n.default)(D, "YYYY/MM/DD")) return !1;
      if (b.length === 10 && parseInt(b, 10) % 11 !== 0) {
        var F = parseInt(b.slice(0, 9), 10) % 11;
        if (parseInt(w, 10) < 1986 && F === 10) {
          if (parseInt(b.slice(9), 10) !== 0) return !1
        } else return !1
      }
      return !0
    }

    function g(b) {
      return a.luhnCheck(b)
    }

    function S(b) {
      for (var w = b.split("").map(function (re) {
          return parseInt(re, 10)
        }), R = [], D = 0; D < w.length - 1; D++) {
        R.push("");
        for (var F = 0; F < w.length - 1; F++) w[D] === w[F] && (R[D] += F)
      }
      if (R = R.filter(function (re) {
          return re.length > 1
        }), R.length !== 2 && R.length !== 3) return !1;
      if (R[0].length === 3) {
        for (var W = R[0].split("").map(function (re) {
            return parseInt(re, 10)
          }), j = 0, X = 0; X < W.length - 1; X++) W[X] + 1 === W[X + 1] && (j += 1);
        if (j === 2) return !1
      }
      return a.iso7064Check(b)
    }

    function m(b) {
      b = b.replace(/\W/, "");
      var w = parseInt(b.slice(4, 6), 10),
        R = b.slice(6, 7);
      switch (R) {
        case "0":
        case "1":
        case "2":
        case "3":
          w = "19".concat(w);
          break;
        case "4":
        case "9":
          w < 37 ? w = "20".concat(w) : w = "19".concat(w);
          break;
        default:
          if (w < 37) w = "20".concat(w);
          else if (w > 58) w = "18".concat(w);
          else return !1;
          break
      }
      w.length === 3 && (w = [w.slice(0, 2), "0", w.slice(2)].join(""));
      var D = "".concat(w, "/").concat(b.slice(2, 4), "/").concat(b.slice(0, 2));
      if (!(0, n.default)(D, "YYYY/MM/DD")) return !1;
      for (var F = b.split("").map(function (re) {
          return parseInt(re, 10)
        }), W = 0, j = 4, X = 0; X < 9; X++) W += F[X] * j, j -= 1, j === 1 && (j = 7);
      return W %= 11, W === 1 ? !1 : W === 0 ? F[9] === 0 : F[9] === 11 - W
    }

    function I(b) {
      for (var w = b.slice(0, 8).split("").map(function (W) {
          return parseInt(W, 10)
        }), R = 0, D = 1; D < w.length; D += 2) R += w[D];
      for (var F = 0; F < w.length; F += 2) w[F] < 2 ? R += 1 - w[F] : (R += 2 * (w[F] - 2) + 5, w[F] > 4 && (R += 2));
      return String.fromCharCode(R % 26 + 65) === b.charAt(8)
    }

    function O(b) {
      for (var w = b.split("").map(function (F) {
          return parseInt(F, 10)
        }), R = 0, D = 0; D < 8; D++) R += w[D] * Math.pow(2, 8 - D);
      return R % 11 % 10 === w[8]
    }

    function N(b) {
      var w = a.reverseMultiplyAndSum(b.split("").slice(0, 7).map(function (R) {
        return parseInt(R, 10)
      }), 8);
      return b.length === 9 && b[8] !== "W" && (w += (b[8].charCodeAt(0) - 64) * 9), w %= 23, w === 0 ? b[7].toUpperCase() === "W" : b[7].toUpperCase() === String.fromCharCode(64 + w)
    }
    var P = {
      andover: ["10", "12"],
      atlanta: ["60", "67"],
      austin: ["50", "53"],
      brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
      cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
      fresno: ["15", "24"],
      internet: ["20", "26", "27", "45", "46", "47"],
      kansas: ["40", "44"],
      memphis: ["94", "95"],
      ogden: ["80", "90"],
      philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
      sba: ["31"]
    };

    function q() {
      var b = [];
      for (var w in P) P.hasOwnProperty(w) && b.push.apply(b, l(P[w]));
      return b
    }

    function V(b) {
      return q().indexOf(b.slice(0, 2)) !== -1
    }

    function K(b) {
      for (var w = 0, R = b.split(""), D = parseInt(R.pop(), 10), F = 0; F < R.length; F++) w += R[9 - F] * (2 + F % 6);
      var W = 11 - w % 11;
      return W === 11 ? W = 0 : W === 10 && (W = 9), D === W
    }

    function ie(b) {
      var w = b.toUpperCase().split("");
      if (isNaN(parseInt(w[0], 10)) && w.length > 1) {
        var R = 0;
        switch (w[0]) {
          case "Y":
            R = 1;
            break;
          case "Z":
            R = 2;
            break
        }
        w.splice(0, 1, R)
      } else
        for (; w.length < 9;) w.unshift(0);
      var D = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
      w = w.join("");
      var F = parseInt(w.slice(0, 8), 10) % 23;
      return w[8] === D[F]
    }

    function oe(b) {
      var w = b.slice(1, 3),
        R = b.slice(0, 1);
      switch (R) {
        case "1":
        case "2":
          w = "18".concat(w);
          break;
        case "3":
        case "4":
          w = "19".concat(w);
          break;
        default:
          w = "20".concat(w);
          break
      }
      var D = "".concat(w, "/").concat(b.slice(3, 5), "/").concat(b.slice(5, 7));
      if (!(0, n.default)(D, "YYYY/MM/DD")) return !1;
      for (var F = b.split("").map(function (ae) {
          return parseInt(ae, 10)
        }), W = 0, j = 1, X = 0; X < 10; X++) W += F[X] * j, j += 1, j === 10 && (j = 1);
      if (W % 11 === 10) {
        W = 0, j = 3;
        for (var re = 0; re < 10; re++) W += F[re] * j, j += 1, j === 10 && (j = 1);
        if (W % 11 === 10) return F[10] === 0
      }
      return W % 11 === F[10]
    }

    function Te(b) {
      var w = b.slice(4, 6),
        R = b.slice(6, 7);
      switch (R) {
        case "+":
          w = "18".concat(w);
          break;
        case "-":
          w = "19".concat(w);
          break;
        default:
          w = "20".concat(w);
          break
      }
      var D = "".concat(w, "/").concat(b.slice(2, 4), "/").concat(b.slice(0, 2));
      if (!(0, n.default)(D, "YYYY/MM/DD")) return !1;
      var F = parseInt(b.slice(0, 6) + b.slice(7, 10), 10) % 31;
      if (F < 10) return F === parseInt(b.slice(10), 10);
      F -= 10;
      var W = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
      return W[F] === b.slice(10)
    }

    function _e(b) {
      if (b.slice(2, 4) !== "00" || b.slice(4, 6) !== "00") {
        var w = "".concat(b.slice(0, 2), "/").concat(b.slice(2, 4), "/").concat(b.slice(4, 6));
        if (!(0, n.default)(w, "YY/MM/DD")) return !1
      }
      var R = 97 - parseInt(b.slice(0, 9), 10) % 97,
        D = parseInt(b.slice(9, 11), 10);
      return !(R !== D && (R = 97 - parseInt("2".concat(b.slice(0, 9)), 10) % 97, R !== D))
    }

    function me(b) {
      b = b.replace(/\s/g, "");
      var w = parseInt(b.slice(0, 10), 10) % 511,
        R = parseInt(b.slice(10, 13), 10);
      return w === R
    }

    function Qt(b) {
      var w = "".concat(b.slice(0, 4), "/").concat(b.slice(4, 6), "/").concat(b.slice(6, 8));
      return !(0, n.default)(w, "YYYY/MM/DD") || !a.luhnCheck(b.slice(0, 12)) ? !1 : a.verhoeffCheck("".concat(b.slice(0, 11)).concat(b[12]))
    }

    function er(b) {
      return a.iso7064Check(b)
    }

    function tr(b) {
      for (var w = b.split("").map(function (F) {
          return parseInt(F, 10)
        }), R = 8, D = 1; D < 9; D++) R += w[D] * (D + 1);
      return R % 11 === w[9]
    }

    function St(b) {
      for (var w = !1, R = !1, D = 0; D < 3; D++)
        if (!w && /[AEIOU]/.test(b[D])) w = !0;
        else if (!R && w && b[D] === "X") R = !0;
      else if (D > 0 && (w && !R && !/[AEIOU]/.test(b[D]) || R && !/X/.test(b[D]))) return !1;
      return !0
    }

    function Rt(b) {
      var w = b.toUpperCase().split("");
      if (!St(w.slice(0, 3)) || !St(w.slice(3, 6))) return !1;
      for (var R = [6, 7, 9, 10, 12, 13, 14], D = {
          L: "0",
          M: "1",
          N: "2",
          P: "3",
          Q: "4",
          R: "5",
          S: "6",
          T: "7",
          U: "8",
          V: "9"
        }, F = 0, W = R; F < W.length; F++) {
        var j = W[F];
        w[j] in D && w.splice(j, 1, D[w[j]])
      }
      var X = {
          A: "01",
          B: "02",
          C: "03",
          D: "04",
          E: "05",
          H: "06",
          L: "07",
          M: "08",
          P: "09",
          R: "10",
          S: "11",
          T: "12"
        },
        re = X[w[8]],
        ae = parseInt(w[9] + w[10], 10);
      ae > 40 && (ae -= 40), ae < 10 && (ae = "0".concat(ae));
      var Fe = "".concat(w[6]).concat(w[7], "/").concat(re, "/").concat(ae);
      if (!(0, n.default)(Fe, "YY/MM/DD")) return !1;
      for (var Ne = 0, ve = 1; ve < w.length - 1; ve += 2) {
        var Xe = parseInt(w[ve], 10);
        isNaN(Xe) && (Xe = w[ve].charCodeAt(0) - 65), Ne += Xe
      }
      for (var Be = {
          A: 1,
          B: 0,
          C: 5,
          D: 7,
          E: 9,
          F: 13,
          G: 15,
          H: 17,
          I: 19,
          J: 21,
          K: 2,
          L: 4,
          M: 18,
          N: 20,
          O: 11,
          P: 3,
          Q: 6,
          R: 8,
          S: 12,
          T: 14,
          U: 16,
          V: 10,
          W: 22,
          X: 25,
          Y: 24,
          Z: 23,
          0: 1,
          1: 0
        }, Me = 0; Me < w.length - 1; Me += 2) {
        var Qe = 0;
        if (w[Me] in Be) Qe = Be[w[Me]];
        else {
          var lt = parseInt(w[Me], 10);
          Qe = 2 * lt + 1, lt > 4 && (Qe += 2)
        }
        Ne += Qe
      }
      return String.fromCharCode(65 + Ne % 26) === w[15]
    }

    function rr(b) {
      b = b.replace(/\W/, "");
      var w = b.slice(0, 2);
      if (w !== "32") {
        var R = b.slice(2, 4);
        if (R !== "00") {
          var D = b.slice(4, 6);
          switch (b[6]) {
            case "0":
              D = "18".concat(D);
              break;
            case "1":
              D = "19".concat(D);
              break;
            default:
              D = "20".concat(D);
              break
          }
          var F = "".concat(D, "/").concat(b.slice(2, 4), "/").concat(w);
          if (!(0, n.default)(F, "YYYY/MM/DD")) return !1
        }
        for (var W = 1101, j = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2], X = 0; X < b.length - 1; X++) W -= parseInt(b[X], 10) * j[X];
        return parseInt(b[10], 10) === W % 11
      }
      return !0
    }

    function nr(b) {
      if (b.length !== 9) {
        for (var w = b.toUpperCase().split(""); w.length < 8;) w.unshift(0);
        switch (b[7]) {
          case "A":
          case "P":
            if (parseInt(w[6], 10) === 0) return !1;
            break;
          default: {
            var R = parseInt(w.join("").slice(0, 5), 10);
            if (R > 32e3) return !1;
            var D = parseInt(w.join("").slice(5, 7), 10);
            if (R === D) return !1
          }
        }
      }
      return !0
    }

    function ir(b) {
      return a.reverseMultiplyAndSum(b.split("").slice(0, 8).map(function (w) {
        return parseInt(w, 10)
      }), 9) % 11 === parseInt(b[8], 10)
    }

    function bt(b) {
      if (b.length === 10) {
        for (var w = [6, 5, 7, 2, 3, 4, 5, 6, 7], R = 0, D = 0; D < w.length; D++) R += parseInt(b[D], 10) * w[D];
        return R %= 11, R === 10 ? !1 : R === parseInt(b[9], 10)
      }
      var F = b.slice(0, 2),
        W = parseInt(b.slice(2, 4), 10);
      W > 80 ? (F = "18".concat(F), W -= 80) : W > 60 ? (F = "22".concat(F), W -= 60) : W > 40 ? (F = "21".concat(F), W -= 40) : W > 20 ? (F = "20".concat(F), W -= 20) : F = "19".concat(F), W < 10 && (W = "0".concat(W));
      var j = "".concat(F, "/").concat(W, "/").concat(b.slice(4, 6));
      if (!(0, n.default)(j, "YYYY/MM/DD")) return !1;
      for (var X = 0, re = 1, ae = 0; ae < b.length - 1; ae++) X += parseInt(b[ae], 10) * re % 10, re += 2, re > 10 ? re = 1 : re === 5 && (re += 2);
      return X = 10 - X % 10, X === parseInt(b[10], 10)
    }

    function ar(b) {
      if (b.length === 11) {
        var w, R;
        if (w = 0, b === "11111111111" || b === "22222222222" || b === "33333333333" || b === "44444444444" || b === "55555555555" || b === "66666666666" || b === "77777777777" || b === "88888888888" || b === "99999999999" || b === "00000000000") return !1;
        for (var D = 1; D <= 9; D++) w += parseInt(b.substring(D - 1, D), 10) * (11 - D);
        if (R = w * 10 % 11, R === 10 && (R = 0), R !== parseInt(b.substring(9, 10), 10)) return !1;
        w = 0;
        for (var F = 1; F <= 10; F++) w += parseInt(b.substring(F - 1, F), 10) * (12 - F);
        return R = w * 10 % 11, R === 10 && (R = 0), R === parseInt(b.substring(10, 11), 10)
      }
      if (b === "00000000000000" || b === "11111111111111" || b === "22222222222222" || b === "33333333333333" || b === "44444444444444" || b === "55555555555555" || b === "66666666666666" || b === "77777777777777" || b === "88888888888888" || b === "99999999999999") return !1;
      for (var W = b.length - 2, j = b.substring(0, W), X = b.substring(W), re = 0, ae = W - 7, Fe = W; Fe >= 1; Fe--) re += j.charAt(W - Fe) * ae, ae -= 1, ae < 2 && (ae = 9);
      var Ne = re % 11 < 2 ? 0 : 11 - re % 11;
      if (Ne !== parseInt(X.charAt(0), 10)) return !1;
      W += 1, j = b.substring(0, W), re = 0, ae = W - 7;
      for (var ve = W; ve >= 1; ve--) re += j.charAt(W - ve) * ae, ae -= 1, ae < 2 && (ae = 9);
      return Ne = re % 11 < 2 ? 0 : 11 - re % 11, Ne === parseInt(X.charAt(1), 10)
    }

    function At(b) {
      var w = 11 - a.reverseMultiplyAndSum(b.split("").slice(0, 8).map(function (R) {
        return parseInt(R, 10)
      }), 9) % 11;
      return w > 9 ? parseInt(b[8], 10) === 0 : w === parseInt(b[8], 10)
    }

    function dr(b) {
      if (b.slice(0, 4) !== "9000") {
        var w = b.slice(1, 3);
        switch (b[0]) {
          case "1":
          case "2":
            w = "19".concat(w);
            break;
          case "3":
          case "4":
            w = "18".concat(w);
            break;
          case "5":
          case "6":
            w = "20".concat(w);
            break
        }
        var R = "".concat(w, "/").concat(b.slice(3, 5), "/").concat(b.slice(5, 7));
        if (R.length === 8) {
          if (!(0, n.default)(R, "YY/MM/DD")) return !1
        } else if (!(0, n.default)(R, "YYYY/MM/DD")) return !1;
        for (var D = b.split("").map(function (X) {
            return parseInt(X, 10)
          }), F = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], W = 0, j = 0; j < F.length; j++) W += D[j] * F[j];
        return W % 11 === 10 ? D[12] === 1 : D[12] === W % 11
      }
      return !0
    }

    function ur(b) {
      if (b.length === 9) {
        if (b = b.replace(/\W/, ""), b.slice(6) === "000") return !1;
        var w = parseInt(b.slice(0, 2), 10);
        if (w > 53) return !1;
        w < 10 ? w = "190".concat(w) : w = "19".concat(w);
        var R = parseInt(b.slice(2, 4), 10);
        R > 50 && (R -= 50), R < 10 && (R = "0".concat(R));
        var D = "".concat(w, "/").concat(R, "/").concat(b.slice(4, 6));
        if (!(0, n.default)(D, "YYYY/MM/DD")) return !1
      }
      return !0
    }

    function wt(b) {
      var w = 11 - a.reverseMultiplyAndSum(b.split("").slice(0, 7).map(function (R) {
        return parseInt(R, 10)
      }), 8) % 11;
      return w === 10 ? parseInt(b[7], 10) === 0 : w === parseInt(b[7], 10)
    }

    function sr(b) {
      var w = b.slice(0);
      b.length > 11 && (w = w.slice(2));
      var R = "",
        D = w.slice(2, 4),
        F = parseInt(w.slice(4, 6), 10);
      if (b.length > 11) R = b.slice(0, 4);
      else if (R = b.slice(0, 2), b.length === 11 && F < 60) {
        var W = new Date().getFullYear().toString(),
          j = parseInt(W.slice(0, 2), 10);
        if (W = parseInt(W, 10), b[6] === "-") parseInt("".concat(j).concat(R), 10) > W ? R = "".concat(j - 1).concat(R) : R = "".concat(j).concat(R);
        else if (R = "".concat(j - 1).concat(R), W - parseInt(R, 10) < 100) return !1
      }
      F > 60 && (F -= 60), F < 10 && (F = "0".concat(F));
      var X = "".concat(R, "/").concat(D, "/").concat(F);
      if (X.length === 8) {
        if (!(0, n.default)(X, "YY/MM/DD")) return !1
      } else if (!(0, n.default)(X, "YYYY/MM/DD")) return !1;
      return a.luhnCheck(b.replace(/\W/, ""))
    }

    function ot(b) {
      for (var w = b.split("").map(function (W) {
          return parseInt(W, 10)
        }), R = [-1, 5, 7, 9, 4, 6, 10, 5, 7], D = 0, F = 0; F < R.length; F++) D += w[F] * R[F];
      return D % 11 === 10 ? w[9] === 0 : w[9] === D % 11
    }
    var pe = {
      "bg-BG": /^\d{10}$/,
      "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
      "de-AT": /^\d{9}$/,
      "de-DE": /^[1-9]\d{10}$/,
      "dk-DK": /^\d{6}-{0,1}\d{4}$/,
      "el-CY": /^[09]\d{7}[A-Z]$/,
      "el-GR": /^([0-4]|[7-9])\d{8}$/,
      "en-CA": /^\d{9}$/,
      "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
      "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
      "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
      "es-AR": /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
      "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
      "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
      "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
      "fr-BE": /^\d{11}$/,
      "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
      "fr-LU": /^\d{13}$/,
      "hr-HR": /^\d{11}$/,
      "hu-HU": /^8\d{9}$/,
      "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
      "lv-LV": /^\d{6}-{0,1}\d{5}$/,
      "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
      "nl-NL": /^\d{9}$/,
      "pl-PL": /^\d{10,11}$/,
      "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
      "pt-PT": /^\d{9}$/,
      "ro-RO": /^\d{13}$/,
      "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
      "sl-SI": /^[1-9]\d{7}$/,
      "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
      "uk-UA": /^\d{10}$/
    };
    pe["lb-LU"] = pe["fr-LU"], pe["lt-LT"] = pe["et-EE"], pe["nl-BE"] = pe["fr-BE"], pe["fr-CA"] = pe["en-CA"];
    var he = {
      "bg-BG": v,
      "cs-CZ": E,
      "de-AT": g,
      "de-DE": S,
      "dk-DK": m,
      "el-CY": I,
      "el-GR": O,
      "en-CA": p,
      "en-IE": N,
      "en-US": V,
      "es-AR": K,
      "es-ES": ie,
      "et-EE": oe,
      "fi-FI": Te,
      "fr-BE": _e,
      "fr-FR": me,
      "fr-LU": Qt,
      "hr-HR": er,
      "hu-HU": tr,
      "it-IT": Rt,
      "lv-LV": rr,
      "mt-MT": nr,
      "nl-NL": ir,
      "pl-PL": bt,
      "pt-BR": ar,
      "pt-PT": At,
      "ro-RO": dr,
      "sk-SK": ur,
      "sl-SI": wt,
      "sv-SE": sr,
      "uk-UA": ot
    };
    he["lb-LU"] = he["fr-LU"], he["lt-LT"] = he["et-EE"], he["nl-BE"] = he["fr-BE"], he["fr-CA"] = he["en-CA"];
    var Ot = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g,
      Je = {
        "de-AT": Ot,
        "de-DE": /[\/\\]/g,
        "fr-BE": Ot
      };
    Je["nl-BE"] = Je["fr-BE"];

    function or(b) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      (0, i.default)(b);
      var R = b.slice(0);
      if (w in pe) return w in Je && (R = R.replace(Je[w], "")), pe[w].test(R) ? w in he ? he[w](R) : !0 : !1;
      throw new Error("Invalid locale '".concat(w, "'"))
    }
    t.exports = e.default, t.exports.default = e.default
  }(Si, Si.exports)), Si.exports
}
var Vt = {},
  l0;

function f7() {
  if (l0) return Vt;
  l0 = 1, Object.defineProperty(Vt, "__esModule", {
    value: !0
  }), Vt.isFreightContainerID = void 0, Vt.isISO6346 = a;
  var t = e(k());

  function e(n) {
    return n && n.__esModule ? n : {
      default: n
    }
  }
  var r = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/,
    i = /^[0-9]$/;

  function a(n) {
    if ((0, t.default)(n), n = n.toUpperCase(), !r.test(n)) return !1;
    if (n.length === 11) {
      for (var d = 0, s = 0; s < n.length - 1; s++)
        if (i.test(n[s])) d += n[s] * Math.pow(2, s);
        else {
          var u = void 0,
            l = n.charCodeAt(s) - 55;
          l < 11 ? u = l : l >= 11 && l <= 20 ? u = 12 + l % 11 : l >= 21 && l <= 30 ? u = 23 + l % 21 : u = 34 + l % 31, d += u * Math.pow(2, s)
        } var f = d % 11;
      return Number(n[n.length - 1]) === f
    }
    return !0
  }
  return Vt.isFreightContainerID = a, Vt
}
var Ri = {
    exports: {}
  },
  c0;

function _7() {
  return c0 || (c0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);

    function n(d) {
      return (0, r.default)(d), a.has(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ri, Ri.exports)), Ri.exports
}
var Zt = {},
  f0;

function Z2() {
  if (f0) return Zt;
  f0 = 1, Object.defineProperty(Zt, "__esModule", {
    value: !0
  }), Zt.CurrencyCodes = void 0, Zt.default = i;
  var t = e(k());

  function e(a) {
    return a && a.__esModule ? a : {
      default: a
    }
  }
  var r = new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);

  function i(a) {
    return (0, t.default)(a), r.has(a.toUpperCase())
  }
  return Zt.CurrencyCodes = r, Zt
}
var bi = {
    exports: {}
  },
  _0;

function K2() {
  return _0 || (_0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^[A-HJ-NP-Za-km-z1-9]*$/;

    function n(d) {
      return (0, r.default)(d), !!a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(bi, bi.exports)), bi.exports
}
var Ai = {
    exports: {}
  },
  wi = {
    exports: {}
  },
  Oi = {
    exports: {}
  },
  p0;

function j2() {
  return p0 || (p0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      if ((0, r.default)(n), d) {
        var s = new RegExp("[".concat(d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
        return n.replace(s, "")
      }
      for (var u = n.length - 1;
        /\s/.test(n.charAt(u));) u -= 1;
      return n.slice(0, u + 1)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Oi, Oi.exports)), Oi.exports
}
var Ni = {
    exports: {}
  },
  h0;

function Y2() {
  return h0 || (h0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      (0, r.default)(n);
      var s = d ? new RegExp("^[".concat(d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
      return n.replace(s, "")
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ni, Ni.exports)), Ni.exports
}
var v0;

function z2() {
  return v0 || (v0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = a(j2()),
      i = a(Y2());

    function a(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }

    function n(d, s) {
      return (0, r.default)((0, i.default)(d, s), s)
    }
    t.exports = e.default, t.exports.default = e.default
  }(wi, wi.exports)), wi.exports
}
var $0;

function p7() {
  return $0 || ($0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = h;
    var r = n(z2()),
      i = n(wd()),
      a = n(k());

    function n(v) {
      return v && v.__esModule ? v : {
        default: v
      }
    }

    function d(v, p) {
      return l(v) || u(v, p) || o(v, p) || s()
    }

    function s() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function u(v, p) {
      var E = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
      if (E != null) {
        var g, S, m, I, O = [],
          N = !0,
          P = !1;
        try {
          if (m = (E = E.call(v)).next, p !== 0)
            for (; !(N = (g = m.call(E)).done) && (O.push(g.value), O.length !== p); N = !0);
        } catch (q) {
          P = !0, S = q
        } finally {
          try {
            if (!N && E.return != null && (I = E.return(), Object(I) !== I)) return
          } finally {
            if (P) throw S
          }
        }
        return O
      }
    }

    function l(v) {
      if (Array.isArray(v)) return v
    }

    function f(v, p) {
      var E = typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
      if (!E) {
        if (Array.isArray(v) || (E = o(v)) || p) {
          E && (v = E);
          var g = 0,
            S = function () {};
          return {
            s: S,
            n: function () {
              return g >= v.length ? {
                done: !0
              } : {
                done: !1,
                value: v[g++]
              }
            },
            e: function (P) {
              throw P
            },
            f: S
          }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      var m = !0,
        I = !1,
        O;
      return {
        s: function () {
          E = E.call(v)
        },
        n: function () {
          var P = E.next();
          return m = P.done, P
        },
        e: function (P) {
          I = !0, O = P
        },
        f: function () {
          try {
            !m && E.return != null && E.return()
          } finally {
            if (I) throw O
          }
        }
      }
    }

    function o(v, p) {
      if (v) {
        if (typeof v == "string") return c(v, p);
        var E = Object.prototype.toString.call(v).slice(8, -1);
        if (E === "Object" && v.constructor && (E = v.constructor.name), E === "Map" || E === "Set") return Array.from(v);
        if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return c(v, p)
      }
    }

    function c(v, p) {
      (p == null || p > v.length) && (p = v.length);
      for (var E = 0, g = new Array(p); E < p; E++) g[E] = v[E];
      return g
    }

    function _(v) {
      var p = new Set(["subject", "body", "cc", "bcc"]),
        E = {
          cc: "",
          bcc: ""
        },
        g = !1,
        S = v.split("&");
      if (S.length > 4) return !1;
      var m = f(S),
        I;
      try {
        for (m.s(); !(I = m.n()).done;) {
          var O = I.value,
            N = O.split("="),
            P = d(N, 2),
            q = P[0],
            V = P[1];
          if (q && !p.has(q)) {
            g = !0;
            break
          }
          V && (q === "cc" || q === "bcc") && (E[q] = V), q && p.delete(q)
        }
      } catch (K) {
        m.e(K)
      } finally {
        m.f()
      }
      return g ? !1 : E
    }

    function h(v, p) {
      if ((0, a.default)(v), v.indexOf("mailto:") !== 0) return !1;
      var E = v.replace("mailto:", "").split("?"),
        g = d(E, 2),
        S = g[0],
        m = g[1],
        I = m === void 0 ? "" : m;
      if (!S && !I) return !0;
      var O = _(I);
      return O ? "".concat(S, ",").concat(O.cc, ",").concat(O.bcc).split(",").every(function (N) {
        return N = (0, r.default)(N, " "), N ? (0, i.default)(N, p) : !0
      }) : !1
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ai, Ai.exports)), Ai.exports
}
var Ci = {
    exports: {}
  },
  E0;

function h7() {
  return E0 || (E0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n) {
      return (0, r.default)(n), n.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;")
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ci, Ci.exports)), Ci.exports
}
var Li = {
    exports: {}
  },
  y0;

function v7() {
  return y0 || (y0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n) {
      return (0, r.default)(n), n.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&")
    }
    t.exports = e.default, t.exports.default = e.default
  }(Li, Li.exports)), Li.exports
}
var Mi = {
    exports: {}
  },
  Di = {
    exports: {}
  },
  g0;

function J2() {
  return g0 || (g0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      return (0, r.default)(n), n.replace(new RegExp("[".concat(d, "]+"), "g"), "")
    }
    t.exports = e.default, t.exports.default = e.default
  }(Di, Di.exports)), Di.exports
}
var m0;

function $7() {
  return m0 || (m0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = a(k()),
      i = a(J2());

    function a(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }

    function n(d, s) {
      (0, r.default)(d);
      var u = s ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
      return (0, i.default)(d, u)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Mi, Mi.exports)), Mi.exports
}
var Pi = {
    exports: {}
  },
  I0;

function E7() {
  return I0 || (I0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      return (0, r.default)(n), n.replace(new RegExp("[^".concat(d, "]+"), "g"), "")
    }
    t.exports = e.default, t.exports.default = e.default
  }(Pi, Pi.exports)), Pi.exports
}
var Ui = {
    exports: {}
  },
  T0;

function y7() {
  return T0 || (T0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = a;
    var r = i(k());

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      }
    }

    function a(n, d) {
      (0, r.default)(n);
      for (var s = n.length - 1; s >= 0; s--)
        if (d.indexOf(n[s]) === -1) return !1;
      return !0
    }
    t.exports = e.default, t.exports.default = e.default
  }(Ui, Ui.exports)), Ui.exports
}
var xi = {
    exports: {}
  },
  S0;

function g7() {
  return S0 || (S0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = f;
    var r = i(Ee());

    function i(o) {
      return o && o.__esModule ? o : {
        default: o
      }
    }
    var a = {
        all_lowercase: !0,
        gmail_lowercase: !0,
        gmail_remove_dots: !0,
        gmail_remove_subaddress: !0,
        gmail_convert_googlemaildotcom: !0,
        outlookdotcom_lowercase: !0,
        outlookdotcom_remove_subaddress: !0,
        yahoo_lowercase: !0,
        yahoo_remove_subaddress: !0,
        yandex_lowercase: !0,
        icloud_lowercase: !0,
        icloud_remove_subaddress: !0
      },
      n = ["icloud.com", "me.com"],
      d = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"],
      s = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"],
      u = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];

    function l(o) {
      return o.length > 1 ? o : ""
    }

    function f(o, c) {
      c = (0, r.default)(c, a);
      var _ = o.split("@"),
        h = _.pop(),
        v = _.join("@"),
        p = [v, h];
      if (p[1] = p[1].toLowerCase(), p[1] === "gmail.com" || p[1] === "googlemail.com") {
        if (c.gmail_remove_subaddress && (p[0] = p[0].split("+")[0]), c.gmail_remove_dots && (p[0] = p[0].replace(/\.+/g, l)), !p[0].length) return !1;
        (c.all_lowercase || c.gmail_lowercase) && (p[0] = p[0].toLowerCase()), p[1] = c.gmail_convert_googlemaildotcom ? "gmail.com" : p[1]
      } else if (n.indexOf(p[1]) >= 0) {
        if (c.icloud_remove_subaddress && (p[0] = p[0].split("+")[0]), !p[0].length) return !1;
        (c.all_lowercase || c.icloud_lowercase) && (p[0] = p[0].toLowerCase())
      } else if (d.indexOf(p[1]) >= 0) {
        if (c.outlookdotcom_remove_subaddress && (p[0] = p[0].split("+")[0]), !p[0].length) return !1;
        (c.all_lowercase || c.outlookdotcom_lowercase) && (p[0] = p[0].toLowerCase())
      } else if (s.indexOf(p[1]) >= 0) {
        if (c.yahoo_remove_subaddress) {
          var E = p[0].split("-");
          p[0] = E.length > 1 ? E.slice(0, -1).join("-") : E[0]
        }
        if (!p[0].length) return !1;
        (c.all_lowercase || c.yahoo_lowercase) && (p[0] = p[0].toLowerCase())
      } else u.indexOf(p[1]) >= 0 ? ((c.all_lowercase || c.yandex_lowercase) && (p[0] = p[0].toLowerCase()), p[1] = "yandex.ru") : c.all_lowercase && (p[0] = p[0].toLowerCase());
      return p.join("@")
    }
    t.exports = e.default, t.exports.default = e.default
  }(xi, xi.exports)), xi.exports
}
var Fi = {
    exports: {}
  },
  R0;

function m7() {
  return R0 || (R0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;

    function n(d) {
      return (0, r.default)(d), a.test(d)
    }
    t.exports = e.default, t.exports.default = e.default
  }(Fi, Fi.exports)), Fi.exports
}
var Bi = {
    exports: {}
  },
  b0;

function I7() {
  return b0 || (b0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = n;
    var r = i(k());

    function i(d) {
      return d && d.__esModule ? d : {
        default: d
      }
    }
    var a = {
      "cs-CZ": function (s) {
        return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(s)
      },
      "de-DE": function (s) {
        return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(s)
      },
      "de-LI": function (s) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(s)
      },
      "en-IN": function (s) {
        return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(s)
      },
      "es-AR": function (s) {
        return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(s)
      },
      "fi-FI": function (s) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(s)
      },
      "hu-HU": function (s) {
        return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(s)
      },
      "pt-BR": function (s) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(s)
      },
      "pt-PT": function (s) {
        return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(s)
      },
      "sq-AL": function (s) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(s)
      },
      "sv-SE": function (s) {
        return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(s.trim())
      },
      "en-PK": function (s) {
        return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(s.trim())
      }
    };

    function n(d, s) {
      if ((0, r.default)(d), s in a) return a[s](d);
      if (s === "any") {
        for (var u in a) {
          var l = a[u];
          if (l(d)) return !0
        }
        return !1
      }
      throw new Error("Invalid locale '".concat(s, "'"))
    }
    t.exports = e.default, t.exports.default = e.default
  }(Bi, Bi.exports)), Bi.exports
}
var qi = {
    exports: {}
  },
  A0;

function T7() {
  return A0 || (A0 = 1, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = _;
    var r = a(Ee()),
      i = a(k());

    function a(h) {
      return h && h.__esModule ? h : {
        default: h
      }
    }
    var n = /^[A-Z]$/,
      d = /^[a-z]$/,
      s = /^[0-9]$/,
      u = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/,
      l = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: !1,
        pointsPerUnique: 1,
        pointsPerRepeat: .5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10
      };

    function f(h) {
      var v = {};
      return Array.from(h).forEach(function (p) {
        var E = v[p];
        E ? v[p] += 1 : v[p] = 1
      }), v
    }

    function o(h) {
      var v = f(h),
        p = {
          length: h.length,
          uniqueChars: Object.keys(v).length,
          uppercaseCount: 0,
          lowercaseCount: 0,
          numberCount: 0,
          symbolCount: 0
        };
      return Object.keys(v).forEach(function (E) {
        n.test(E) ? p.uppercaseCount += v[E] : d.test(E) ? p.lowercaseCount += v[E] : s.test(E) ? p.numberCount += v[E] : u.test(E) && (p.symbolCount += v[E])
      }), p
    }

    function c(h, v) {
      var p = 0;
      return p += h.uniqueChars * v.pointsPerUnique, p += (h.length - h.uniqueChars) * v.pointsPerRepeat, h.lowercaseCount > 0 && (p += v.pointsForContainingLower), h.uppercaseCount > 0 && (p += v.pointsForContainingUpper), h.numberCount > 0 && (p += v.pointsForContainingNumber), h.symbolCount > 0 && (p += v.pointsForContainingSymbol), p
    }

    function _(h) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      (0, i.default)(h);
      var p = o(h);
      return v = (0, r.default)(v || {}, l), v.returnScore ? c(p, v) : p.length >= v.minLength && p.lowercaseCount >= v.minLowercase && p.uppercaseCount >= v.minUppercase && p.numberCount >= v.minNumbers && p.symbolCount >= v.minSymbols
    }
    t.exports = e.default, t.exports.default = e.default
  }(qi, qi.exports)), qi.exports
}
var Kt = {},
  w0;

function S7() {
  if (w0) return Kt;
  w0 = 1;

  function t(o) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (c) {
      return typeof c
    } : function (c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
    }, t(o)
  }
  Object.defineProperty(Kt, "__esModule", {
    value: !0
  }), Kt.default = f, Kt.vatMatchers = void 0;
  var e = n(k()),
    r = a(H2());

  function i(o) {
    if (typeof WeakMap != "function") return null;
    var c = new WeakMap,
      _ = new WeakMap;
    return (i = function (v) {
      return v ? _ : c
    })(o)
  }

  function a(o, c) {
    if (o && o.__esModule) return o;
    if (o === null || t(o) != "object" && typeof o != "function") return {
      default: o
    };
    var _ = i(c);
    if (_ && _.has(o)) return _.get(o);
    var h = {
        __proto__: null
      },
      v = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in o)
      if (p !== "default" && {}.hasOwnProperty.call(o, p)) {
        var E = v ? Object.getOwnPropertyDescriptor(o, p) : null;
        E && (E.get || E.set) ? Object.defineProperty(h, p, E) : h[p] = o[p]
      } return h.default = o, _ && _.set(o, h), h
  }

  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    }
  }
  var d = function (c) {
      var _ = c.match(/^(AU)?(\d{11})$/);
      if (!_) return !1;
      var h = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      c = c.replace(/^AU/, "");
      for (var v = (parseInt(c.slice(0, 1), 10) - 1).toString() + c.slice(1), p = 0, E = 0; E < 11; E++) p += h[E] * v.charAt(E);
      return p !== 0 && p % 89 === 0
    },
    s = function (c) {
      var _ = function (v) {
        var p = v.pop(),
          E = [5, 4, 3, 2, 7, 6, 5, 4],
          g = (11 - v.reduce(function (S, m, I) {
            return S + m * E[I]
          }, 0) % 11) % 11;
        return p === g
      };
      return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(c) && _(c.match(/\d/g).map(function (h) {
        return +h
      }))
    },
    u = function (c) {
      var _ = c.match(/^(PT)?(\d{9})$/);
      if (!_) return !1;
      var h = _[2],
        v = 11 - r.reverseMultiplyAndSum(h.split("").slice(0, 8).map(function (p) {
          return parseInt(p, 10)
        }), 9) % 11;
      return v > 9 ? parseInt(h[8], 10) === 0 : v === parseInt(h[8], 10)
    },
    l = Kt.vatMatchers = {
      AT: function (c) {
        return /^(AT)?U\d{8}$/.test(c)
      },
      BE: function (c) {
        return /^(BE)?\d{10}$/.test(c)
      },
      BG: function (c) {
        return /^(BG)?\d{9,10}$/.test(c)
      },
      HR: function (c) {
        return /^(HR)?\d{11}$/.test(c)
      },
      CY: function (c) {
        return /^(CY)?\w{9}$/.test(c)
      },
      CZ: function (c) {
        return /^(CZ)?\d{8,10}$/.test(c)
      },
      DK: function (c) {
        return /^(DK)?\d{8}$/.test(c)
      },
      EE: function (c) {
        return /^(EE)?\d{9}$/.test(c)
      },
      FI: function (c) {
        return /^(FI)?\d{8}$/.test(c)
      },
      FR: function (c) {
        return /^(FR)?\w{2}\d{9}$/.test(c)
      },
      DE: function (c) {
        return /^(DE)?\d{9}$/.test(c)
      },
      EL: function (c) {
        return /^(EL)?\d{9}$/.test(c)
      },
      HU: function (c) {
        return /^(HU)?\d{8}$/.test(c)
      },
      IE: function (c) {
        return /^(IE)?\d{7}\w{1}(W)?$/.test(c)
      },
      IT: function (c) {
        return /^(IT)?\d{11}$/.test(c)
      },
      LV: function (c) {
        return /^(LV)?\d{11}$/.test(c)
      },
      LT: function (c) {
        return /^(LT)?\d{9,12}$/.test(c)
      },
      LU: function (c) {
        return /^(LU)?\d{8}$/.test(c)
      },
      MT: function (c) {
        return /^(MT)?\d{8}$/.test(c)
      },
      NL: function (c) {
        return /^(NL)?\d{9}B\d{2}$/.test(c)
      },
      PL: function (c) {
        return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(c)
      },
      PT: u,
      RO: function (c) {
        return /^(RO)?\d{2,10}$/.test(c)
      },
      SK: function (c) {
        return /^(SK)?\d{10}$/.test(c)
      },
      SI: function (c) {
        return /^(SI)?\d{8}$/.test(c)
      },
      ES: function (c) {
        return /^(ES)?\w\d{7}[A-Z]$/.test(c)
      },
      SE: function (c) {
        return /^(SE)?\d{12}$/.test(c)
      },
      AL: function (c) {
        return /^(AL)?\w{9}[A-Z]$/.test(c)
      },
      MK: function (c) {
        return /^(MK)?\d{13}$/.test(c)
      },
      AU: d,
      BY: function (c) {
        return /^(УНП )?\d{9}$/.test(c)
      },
      CA: function (c) {
        return /^(CA)?\d{9}$/.test(c)
      },
      IS: function (c) {
        return /^(IS)?\d{5,6}$/.test(c)
      },
      IN: function (c) {
        return /^(IN)?\d{15}$/.test(c)
      },
      ID: function (c) {
        return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(c)
      },
      IL: function (c) {
        return /^(IL)?\d{9}$/.test(c)
      },
      KZ: function (c) {
        return /^(KZ)?\d{12}$/.test(c)
      },
      NZ: function (c) {
        return /^(NZ)?\d{9}$/.test(c)
      },
      NG: function (c) {
        return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(c)
      },
      NO: function (c) {
        return /^(NO)?\d{9}MVA$/.test(c)
      },
      PH: function (c) {
        return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(c)
      },
      RU: function (c) {
        return /^(RU)?(\d{10}|\d{12})$/.test(c)
      },
      SM: function (c) {
        return /^(SM)?\d{5}$/.test(c)
      },
      SA: function (c) {
        return /^(SA)?\d{15}$/.test(c)
      },
      RS: function (c) {
        return /^(RS)?\d{9}$/.test(c)
      },
      CH: s,
      TR: function (c) {
        return /^(TR)?\d{10}$/.test(c)
      },
      UA: function (c) {
        return /^(UA)?\d{12}$/.test(c)
      },
      GB: function (c) {
        return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(c)
      },
      UZ: function (c) {
        return /^(UZ)?\d{9}$/.test(c)
      },
      AR: function (c) {
        return /^(AR)?\d{11}$/.test(c)
      },
      BO: function (c) {
        return /^(BO)?\d{7}$/.test(c)
      },
      BR: function (c) {
        return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(c)
      },
      CL: function (c) {
        return /^(CL)?\d{8}-\d{1}$/.test(c)
      },
      CO: function (c) {
        return /^(CO)?\d{10}$/.test(c)
      },
      CR: function (c) {
        return /^(CR)?\d{9,12}$/.test(c)
      },
      EC: function (c) {
        return /^(EC)?\d{13}$/.test(c)
      },
      SV: function (c) {
        return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(c)
      },
      GT: function (c) {
        return /^(GT)?\d{7}-\d{1}$/.test(c)
      },
      HN: function (c) {
        return /^(HN)?$/.test(c)
      },
      MX: function (c) {
        return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(c)
      },
      NI: function (c) {
        return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(c)
      },
      PA: function (c) {
        return /^(PA)?$/.test(c)
      },
      PY: function (c) {
        return /^(PY)?\d{6,8}-\d{1}$/.test(c)
      },
      PE: function (c) {
        return /^(PE)?\d{11}$/.test(c)
      },
      DO: function (c) {
        return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(c)
      },
      UY: function (c) {
        return /^(UY)?\d{12}$/.test(c)
      },
      VE: function (c) {
        return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(c)
      }
    };

  function f(o, c) {
    if ((0, e.default)(o), (0, e.default)(c), c in l) return l[c](o);
    throw new Error("Invalid country code: '".concat(c, "'"))
  }
  return Kt
}
var O0;

function R7() {
  return O0 || (O0 = 1, function (t, e) {
    function r(de) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (be) {
        return typeof be
      } : function (be) {
        return be && typeof Symbol == "function" && be.constructor === Symbol && be !== Symbol.prototype ? "symbol" : typeof be
      }, r(de)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var i = B(kd()),
      a = B(Jl()),
      n = B(e7()),
      d = B(t7()),
      s = B(r7()),
      u = B(p1()),
      l = B(ff()),
      f = B(wd()),
      o = B(Kc()),
      c = B(ac()),
      _ = B(Hr()),
      h = B(n7()),
      v = B(zi()),
      p = B(G2()),
      E = B(i7()),
      g = B(Df()),
      S = B(v2()),
      m = B(a7()),
      I = De(g1()),
      O = De(T1()),
      N = B(xf()),
      P = B(w2()),
      q = B(lc()),
      V = B(Ac()),
      K = B(tf()),
      ie = B(d7()),
      oe = B(O1()),
      Te = B(Od()),
      _e = B(Nd()),
      me = B(J1()),
      Qt = B(kc()),
      er = B(q2()),
      tr = B(Hc()),
      St = B(Ld()),
      Rt = De(zl()),
      rr = B(b1()),
      nr = B(Cd()),
      ir = B(R2()),
      bt = B(Xl()),
      ar = B(ec()),
      At = B(x2()),
      dr = B(i2()),
      ur = B(_2()),
      wt = De(u2()),
      sr = B(Gf()),
      ot = B(u7()),
      pe = B(bf()),
      he = B(Sc()),
      Ot = B(mc()),
      Je = B(s7()),
      or = B(af()),
      b = B(Ad()),
      w = B(zc()),
      R = B(Fc()),
      D = B(o7()),
      F = B(l7()),
      W = B(c7()),
      j = B(U1()),
      X = B(x1()),
      re = B(l2()),
      ae = B(Xf()),
      Fe = B(vc()),
      Ne = B(_c()),
      ve = B(Of()),
      Xe = B(V2()),
      Be = De(Nc()),
      Me = B(t2()),
      Qe = B(q1()),
      lt = B(Zf()),
      Kr = f7(),
      jr = B(_7()),
      Yr = B(yc()),
      ta = B(D2()),
      ra = B(Dd()),
      na = B(Pc()),
      ia = B(Z2()),
      zr = B(qf()),
      aa = B(K2()),
      da = B(bd()),
      ua = B(Yf()),
      Se = B(y2()),
      sa = B(p7()),
      oa = B(I2()),
      la = B(Ll()),
      lr = De(C2()),
      ca = B(Y2()),
      cr = B(j2()),
      fr = B(z2()),
      fa = B(h7()),
      _a = B(v7()),
      Jr = B($7()),
      ct = B(E7()),
      Nt = B(J2()),
      pa = B(y7()),
      ha = B(g7()),
      _r = B(m7()),
      va = B(I7()),
      $a = B(T7()),
      Ct = B(S7());

    function Re(de) {
      if (typeof WeakMap != "function") return null;
      var be = new WeakMap,
        qe = new WeakMap;
      return (Re = function (pr) {
        return pr ? qe : be
      })(de)
    }

    function De(de, be) {
      if (de && de.__esModule) return de;
      if (de === null || r(de) != "object" && typeof de != "function") return {
        default: de
      };
      var qe = Re(be);
      if (qe && qe.has(de)) return qe.get(de);
      var ke = {
          __proto__: null
        },
        pr = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var et in de)
        if (et !== "default" && {}.hasOwnProperty.call(de, et)) {
          var Lt = pr ? Object.getOwnPropertyDescriptor(de, et) : null;
          Lt && (Lt.get || Lt.set) ? Object.defineProperty(ke, et, Lt) : ke[et] = de[et]
        } return ke.default = de, qe && qe.set(de, ke), ke
    }

    function B(de) {
      return de && de.__esModule ? de : {
        default: de
      }
    }
    var ft = "13.12.0",
      Ea = {
        version: ft,
        toDate: i.default,
        toFloat: a.default,
        toInt: n.default,
        toBoolean: d.default,
        equals: s.default,
        contains: u.default,
        matches: l.default,
        isEmail: f.default,
        isURL: o.default,
        isMACAddress: c.default,
        isIP: _.default,
        isIPRange: h.default,
        isFQDN: v.default,
        isBoolean: g.default,
        isIBAN: wt.default,
        isBIC: sr.default,
        isAbaRouting: m.default,
        isAlpha: I.default,
        isAlphaLocales: I.locales,
        isAlphanumeric: O.default,
        isAlphanumericLocales: O.locales,
        isNumeric: N.default,
        isPassportNumber: P.default,
        isPort: q.default,
        isLowercase: V.default,
        isUppercase: K.default,
        isAscii: oe.default,
        isFullWidth: Te.default,
        isHalfWidth: _e.default,
        isVariableWidth: me.default,
        isMultibyte: Qt.default,
        isSemVer: er.default,
        isSurrogatePair: tr.default,
        isInt: St.default,
        isIMEI: ie.default,
        isFloat: Rt.default,
        isFloatLocales: Rt.locales,
        isDecimal: rr.default,
        isHexadecimal: nr.default,
        isOctal: ir.default,
        isDivisibleBy: bt.default,
        isHexColor: ar.default,
        isRgbColor: At.default,
        isHSL: dr.default,
        isISRC: ur.default,
        isMD5: ot.default,
        isHash: pe.default,
        isJWT: he.default,
        isJSON: Ot.default,
        isEmpty: Je.default,
        isLength: or.default,
        isLocale: S.default,
        isByteLength: b.default,
        isUUID: w.default,
        isMongoId: R.default,
        isAfter: D.default,
        isBefore: F.default,
        isIn: W.default,
        isLuhnNumber: j.default,
        isCreditCard: X.default,
        isIdentityCard: re.default,
        isEAN: ae.default,
        isISIN: Fe.default,
        isISBN: Ne.default,
        isISSN: ve.default,
        isMobilePhone: Be.default,
        isMobilePhoneLocales: Be.locales,
        isPostalCode: lr.default,
        isPostalCodeLocales: lr.locales,
        isEthereumAddress: Me.default,
        isCurrency: Qe.default,
        isBtcAddress: lt.default,
        isISO6346: Kr.isISO6346,
        isFreightContainerID: Kr.isFreightContainerID,
        isISO6391: jr.default,
        isISO8601: Yr.default,
        isRFC3339: ta.default,
        isISO31661Alpha2: ra.default,
        isISO31661Alpha3: na.default,
        isISO4217: ia.default,
        isBase32: zr.default,
        isBase58: aa.default,
        isBase64: da.default,
        isDataURI: ua.default,
        isMagnetURI: Se.default,
        isMailtoURI: sa.default,
        isMimeType: oa.default,
        isLatLong: la.default,
        ltrim: ca.default,
        rtrim: cr.default,
        trim: fr.default,
        escape: fa.default,
        unescape: _a.default,
        stripLow: Jr.default,
        whitelist: ct.default,
        blacklist: Nt.default,
        isWhitelisted: pa.default,
        normalizeEmail: ha.default,
        toString,
        isSlug: _r.default,
        isStrongPassword: $a.default,
        isTaxID: Xe.default,
        isDate: p.default,
        isTime: E.default,
        isLicensePlate: va.default,
        isVAT: Ct.default,
        ibanLocales: wt.locales
      };
    e.default = Ea, t.exports = e.default, t.exports.default = e.default
  }(oi, oi.exports)), oi.exports
}
var b7 = R7(),
  X2 = "isStrongPassword";

function Q2(t, e) {
  return typeof t == "string" && b7.isStrongPassword(t, e)
}

function A7(t, e) {
  return x({
    name: X2,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return Q2(r, i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property is not strong enough"
      }, e)
    }
  }, e)
}
var e9 = "isTimeZone";

function t9(t) {
  try {
    return typeof t != "string" ? !1 : (Intl.DateTimeFormat(void 0, {
      timeZone: t
    }), !0)
  } catch {
    return !1
  }
}

function w7(t) {
  return x({
    name: e9,
    validator: {
      validate: function (e, r) {
        return t9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a valid IANA time-zone"
      }, t)
    }
  }, t)
}
var O7 = K2();
const N7 = Z(O7);
var r9 = "isBase58";

function n9(t) {
  return typeof t == "string" && N7(t)
}

function C7(t) {
  return x({
    name: r9,
    validator: {
      validate: function (e, r) {
        return n9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be base58 encoded"
      }, t)
    }
  }, t)
}
var L7 = V2();
const M7 = Z(L7);
var i9 = "isTaxId";

function a9(t, e) {
  return typeof t == "string" && M7(t, e || "en-US")
}

function D7(t, e) {
  return x({
    name: i9,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return a9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a Tax Identification Number"
      }, e)
    }
  }, e)
}
var P7 = Z2();
const U7 = Z(P7);
var d9 = "isISO4217CurrencyCode";

function u9(t) {
  return typeof t == "string" && U7(t)
}

function x7(t) {
  return x({
    name: d9,
    validator: {
      validate: function (e, r) {
        return u9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a valid ISO4217 currency code"
      }, t)
    }
  }, t)
}
var s9 = "isBoolean";

function o9(t) {
  return t instanceof Boolean || typeof t == "boolean"
}

function F7(t) {
  return x({
    name: s9,
    validator: {
      validate: function (e, r) {
        return o9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a boolean value"
      }, t)
    }
  }, t)
}
var l9 = "isDate";

function c9(t) {
  return t instanceof Date && !isNaN(t.getTime())
}

function B7(t) {
  return x({
    name: l9,
    validator: {
      validate: function (e, r) {
        return c9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a Date instance"
      }, t)
    }
  }, t)
}
var f9 = "isNumber";

function _9(t, e) {
  if (e === void 0 && (e = {}), typeof t != "number") return !1;
  if (t === 1 / 0 || t === -1 / 0) return !!e.allowInfinity;
  if (Number.isNaN(t)) return !!e.allowNaN;
  if (e.maxDecimalPlaces !== void 0) {
    var r = 0;
    if (t % 1 !== 0 && (r = t.toString().split(".")[1].length), r > e.maxDecimalPlaces) return !1
  }
  return Number.isFinite(t)
}

function q7(t, e) {
  return t === void 0 && (t = {}), x({
    name: f9,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return _9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a number conforming to the specified constraints"
      }, e)
    }
  }, e)
}
var N0 = function (t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) return t;
    var i = r.call(t),
      a, n = [],
      d;
    try {
      for (;
        (e === void 0 || e-- > 0) && !(a = i.next()).done;) n.push(a.value)
    } catch (s) {
      d = {
        error: s
      }
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i)
      } finally {
        if (d) throw d.error
      }
    }
    return n
  },
  p9 = "isEnum";

function h9(t, e) {
  var r = Object.keys(e).map(function (i) {
    return e[i]
  });
  return r.includes(t)
}

function k7(t) {
  return Object.entries(t).filter(function (e) {
    var r = N0(e, 2),
      i = r[0];
    return r[1], isNaN(parseInt(i))
  }).map(function (e) {
    var r = N0(e, 2);
    r[0];
    var i = r[1];
    return i
  })
}

function W7(t, e) {
  return x({
    name: p9,
    constraints: [t, k7(t)],
    validator: {
      validate: function (r, i) {
        return h9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be one of the following values: $constraint2"
      }, e)
    }
  }, e)
}
var v9 = "isInt";

function $9(t) {
  return typeof t == "number" && Number.isInteger(t)
}

function G7(t) {
  return x({
    name: v9,
    validator: {
      validate: function (e, r) {
        return $9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be an integer number"
      }, t)
    }
  }, t)
}
var E9 = "isString";

function y9(t) {
  return t instanceof String || typeof t == "string"
}

function H7(t) {
  return x({
    name: E9,
    validator: {
      validate: function (e, r) {
        return y9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be a string"
      }, t)
    }
  }, t)
}
var g9 = "isArray";

function m9(t) {
  return Array.isArray(t)
}

function V7(t) {
  return x({
    name: g9,
    validator: {
      validate: function (e, r) {
        return m9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be an array"
      }, t)
    }
  }, t)
}
var I9 = "isObject";

function Wd(t) {
  return t != null && (typeof t == "object" || typeof t == "function") && !Array.isArray(t)
}

function Z7(t) {
  return x({
    name: I9,
    validator: {
      validate: function (e, r) {
        return Wd(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property must be an object"
      }, t)
    }
  }, t)
}
var T9 = "arrayContains";

function S9(t, e) {
  return Array.isArray(t) ? e.every(function (r) {
    return t.indexOf(r) !== -1
  }) : !1
}

function K7(t, e) {
  return x({
    name: T9,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return S9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must contain $constraint1 values"
      }, e)
    }
  }, e)
}
var R9 = "arrayNotContains";

function b9(t, e) {
  return Array.isArray(t) ? e.every(function (r) {
    return t.indexOf(r) === -1
  }) : !1
}

function j7(t, e) {
  return x({
    name: R9,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return b9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property should not contain $constraint1 values"
      }, e)
    }
  }, e)
}
var A9 = "arrayNotEmpty";

function w9(t) {
  return Array.isArray(t) && t.length > 0
}

function Y7(t) {
  return x({
    name: A9,
    validator: {
      validate: function (e, r) {
        return w9(e)
      },
      defaultMessage: U(function (e) {
        return e + "$property should not be empty"
      }, t)
    }
  }, t)
}
var O9 = "arrayMinSize";

function N9(t, e) {
  return Array.isArray(t) && t.length >= e
}

function z7(t, e) {
  return x({
    name: O9,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return N9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must contain at least $constraint1 elements"
      }, e)
    }
  }, e)
}
var C9 = "arrayMaxSize";

function L9(t, e) {
  return Array.isArray(t) && t.length <= e
}

function J7(t, e) {
  return x({
    name: C9,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return L9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must contain no more than $constraint1 elements"
      }, e)
    }
  }, e)
}
var M9 = "arrayUnique";

function D9(t, e) {
  if (!Array.isArray(t)) return !1;
  e && (t = t.map(function (i) {
    return i != null ? e(i) : i
  }));
  var r = t.filter(function (i, a, n) {
    return n.indexOf(i) === a
  });
  return t.length === r.length
}

function X7(t, e) {
  var r = typeof t == "function" ? t : void 0,
    i = typeof t != "function" ? t : e;
  return x({
    name: M9,
    validator: {
      validate: function (a, n) {
        return D9(a, r)
      },
      defaultMessage: U(function (a) {
        return a + "All $property's elements must be unique"
      }, i)
    }
  }, i)
}
var P9 = "isNotEmptyObject";

function U9(t, e) {
  if (!Wd(t)) return !1;
  if ((e == null ? void 0 : e.nullable) === !1) return !Object.values(t).every(function (i) {
    return i == null
  });
  for (var r in t)
    if (t.hasOwnProperty(r)) return !0;
  return !1
}

function Q7(t, e) {
  return x({
    name: P9,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return U9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r) {
        return r + "$property must be a non-empty object"
      }, e)
    }
  }, e)
}
var Id = "isInstance";

function x9(t, e) {
  return e && typeof e == "function" && t instanceof e
}

function eh(t, e) {
  return x({
    name: Id,
    constraints: [t],
    validator: {
      validate: function (r, i) {
        return x9(r, i == null ? void 0 : i.constraints[0])
      },
      defaultMessage: U(function (r, i) {
        return i != null && i.constraints[0] ? r + "$property must be an instance of ".concat(i == null ? void 0 : i.constraints[0].name) : r + "".concat(Id, " decorator expects and object as value, but got falsy value.")
      }, e)
    }
  }, e)
}

function th(t, e, r) {
  return typeof t == "string" ? Ye(It).validate(t, e, r) : Ye(It).validate(t, e)
}

function rh(t, e, r) {
  return typeof t == "string" ? Ye(It).validateOrReject(t, e, r) : Ye(It).validateOrReject(t, e)
}

function nh(t, e, r) {
  return typeof t == "string" ? Ye(It).validateSync(t, e, r) : Ye(It).validateSync(t, e)
}

function ih(t) {
  Oe().addValidationSchema(t)
}
const ah = Object.freeze(Object.defineProperty({
    __proto__: null,
    ARRAY_CONTAINS: T9,
    ARRAY_MAX_SIZE: C9,
    ARRAY_MIN_SIZE: O9,
    ARRAY_NOT_CONTAINS: R9,
    ARRAY_NOT_EMPTY: A9,
    ARRAY_UNIQUE: M9,
    Allow: n4,
    ArrayContains: K7,
    ArrayMaxSize: J7,
    ArrayMinSize: z7,
    ArrayNotContains: j7,
    ArrayNotEmpty: Y7,
    ArrayUnique: X7,
    CONTAINS: v1,
    Contains: L4,
    EQUALS: Fl,
    Equals: v4,
    IS_ALPHA: m1,
    IS_ALPHANUMERIC: S1,
    IS_ARRAY: g9,
    IS_ASCII: N1,
    IS_BASE32: kf,
    IS_BASE58: r9,
    IS_BASE64: L1,
    IS_BIC: Hf,
    IS_BOOLEAN: s9,
    IS_BOOLEAN_STRING: Pf,
    IS_BTC_ADDRESS: Kf,
    IS_BYTE_LENGTH: D1,
    IS_CREDIT_CARD: F1,
    IS_CURRENCY: k1,
    IS_DATA_URI: zf,
    IS_DATE: l9,
    IS_DATE_STRING: Lf,
    IS_DECIMAL: A1,
    IS_DEFINED: Nl,
    IS_DIVISIBLE_BY: Ql,
    IS_EAN: Qf,
    IS_EMAIL: G1,
    IS_EMPTY: Wl,
    IS_ENUM: p9,
    IS_ETHEREUM_ADDRESS: r2,
    IS_FIREBASE_PUSH_ID: Qc,
    IS_FQDN: V1,
    IS_FULL_WIDTH: K1,
    IS_HALF_WIDTH: Y1,
    IS_HASH: Af,
    IS_HEXADECIMAL: nc,
    IS_HEX_COLOR: tc,
    IS_HSL: a2,
    IS_IBAN: s2,
    IS_IDENTITY_CARD: c2,
    IS_IN: Zl,
    IS_INSTANCE: Id,
    IS_INT: v9,
    IS_IP: sc,
    IS_ISBN: pc,
    IS_ISIN: $c,
    IS_ISO31661_ALPHA_2: Mc,
    IS_ISO31661_ALPHA_3: Uc,
    IS_ISO4217_CURRENCY_CODE: d9,
    IS_ISO8601: gc,
    IS_ISRC: p2,
    IS_ISSN: Nf,
    IS_JSON: Ic,
    IS_JWT: Rc,
    IS_LATITUDE: Dl,
    IS_LATLONG: Ml,
    IS_LENGTH: df,
    IS_LOCALE: $2,
    IS_LONGITUDE: Ul,
    IS_LOWERCASE: wc,
    IS_MAC_ADDRESS: dc,
    IS_MAGNET_URI: g2,
    IS_MILITARY_TIME: Sf,
    IS_MIME_TYPE: T2,
    IS_MOBILE_PHONE: Cc,
    IS_MONGO_ID: Bc,
    IS_MULTIBYTE: Wc,
    IS_NEGATIVE: n1,
    IS_NOT_EMPTY: Hl,
    IS_NOT_EMPTY_OBJECT: P9,
    IS_NOT_IN: jl,
    IS_NUMBER: f9,
    IS_NUMBER_STRING: Ff,
    IS_OBJECT: I9,
    IS_OCTAL: b2,
    IS_PASSPORT_NUMBER: O2,
    IS_PHONE_NUMBER: If,
    IS_PORT: cc,
    IS_POSITIVE: t1,
    IS_POSTAL_CODE: L2,
    IS_RFC_3339: P2,
    IS_RGB_COLOR: F2,
    IS_SEM_VER: k2,
    IS_STRING: E9,
    IS_STRONG_PASSWORD: X2,
    IS_SURROGATE_PAIR: Vc,
    IS_TAX_ID: i9,
    IS_TIMEZONE: e9,
    IS_UPPERCASE: rf,
    IS_URL: jc,
    IS_UUID: Jc,
    IS_VARIABLE_WIDTH: X1,
    IsAlpha: U4,
    IsAlphanumeric: B4,
    IsArray: V7,
    IsAscii: Z4,
    IsBIC: tp,
    IsBase32: X8,
    IsBase58: C7,
    IsBase64: Y4,
    IsBoolean: F7,
    IsBooleanString: Z8,
    IsBtcAddress: ip,
    IsByteLength: X4,
    IsCreditCard: t_,
    IsCurrency: i_,
    IsDataURI: up,
    IsDate: B7,
    IsDateString: G8,
    IsDecimal: G4,
    IsDefined: i4,
    IsDivisibleBy: S4,
    IsEAN: lp,
    IsEmail: u_,
    IsEmpty: E4,
    IsEnum: W7,
    IsEthereumAddress: _p,
    IsFQDN: l_,
    IsFirebasePushId: T5,
    IsFullWidth: __,
    IsHSL: vp,
    IsHalfWidth: v_,
    IsHash: B8,
    IsHexColor: I_,
    IsHexadecimal: R_,
    IsIBAN: yp,
    IsIP: C_,
    IsISBN: x_,
    IsISIN: q_,
    IsISO31661Alpha2: i5,
    IsISO31661Alpha3: u5,
    IsISO4217CurrencyCode: x7,
    IsISO8601: G_,
    IsISRC: Rp,
    IsISSN: W8,
    IsIdentityCard: Ip,
    IsIn: g4,
    IsInstance: eh,
    IsInt: G7,
    IsJSON: Z_,
    IsJWT: Y_,
    IsLatLong: _4,
    IsLatitude: p4,
    IsLocale: wp,
    IsLongitude: h4,
    IsLowercase: X_,
    IsMACAddress: w_,
    IsMagnetURI: Cp,
    IsMilitaryTime: U8,
    IsMimeType: Dp,
    IsMobilePhone: t5,
    IsMongoId: l5,
    IsMultibyte: _5,
    IsNegative: b4,
    IsNotEmpty: y4,
    IsNotEmptyObject: Q7,
    IsNotIn: m4,
    IsNumber: q7,
    IsNumberString: Y8,
    IsObject: Z7,
    IsOctal: xp,
    IsOptional: a4,
    IsPassportNumber: qp,
    IsPhoneNumber: P8,
    IsPort: D_,
    IsPositive: R4,
    IsPostalCode: Gp,
    IsRFC3339: Zp,
    IsRgbColor: Yp,
    IsSemVer: Qp,
    IsString: H7,
    IsStrongPassword: A7,
    IsSurrogatePair: v5,
    IsTaxId: D7,
    IsTimeZone: w7,
    IsUUID: I5,
    IsUppercase: b5,
    IsUrl: y5,
    IsVariableWidth: y_,
    Length: w5,
    MATCHES: pf,
    MAX: a1,
    MAX_DATE: c1,
    MAX_LENGTH: sf,
    MIN: u1,
    MIN_DATE: o1,
    MIN_LENGTH: lf,
    Matches: L5,
    Max: A4,
    MaxDate: N4,
    MaxLength: O5,
    MetadataStorage: Rd,
    Min: w4,
    MinDate: O4,
    MinLength: N5,
    NOT_CONTAINS: E1,
    NOT_EQUALS: ql,
    NotContains: M4,
    NotEquals: $4,
    Validate: u4,
    ValidateBy: x,
    ValidateIf: s4,
    ValidateNested: o4,
    ValidatePromise: l4,
    ValidationError: fd,
    ValidationTypes: se,
    Validator: It,
    ValidatorConstraint: d4,
    arrayContains: S9,
    arrayMaxSize: L9,
    arrayMinSize: N9,
    arrayNotContains: b9,
    arrayNotEmpty: w9,
    arrayUnique: D9,
    buildMessage: U,
    contains: $1,
    equals: Bl,
    getFromContainer: Ye,
    getMetadataStorage: Oe,
    isAlpha: I1,
    isAlphanumeric: R1,
    isArray: m9,
    isAscii: C1,
    isBIC: Vf,
    isBase32: Wf,
    isBase58: n9,
    isBase64: M1,
    isBoolean: o9,
    isBooleanString: Uf,
    isBtcAddress: jf,
    isByteLength: P1,
    isCreditCard: B1,
    isCurrency: W1,
    isDataURI: Jf,
    isDate: c9,
    isDateString: Mf,
    isDecimal: w1,
    isDefined: Cl,
    isDivisibleBy: e1,
    isEAN: e2,
    isEmail: H1,
    isEmpty: Gl,
    isEnum: h9,
    isEthereumAddress: n2,
    isFQDN: Z1,
    isFirebasePushId: ef,
    isFullWidth: j1,
    isHSL: d2,
    isHalfWidth: z1,
    isHash: wf,
    isHexColor: rc,
    isHexadecimal: ic,
    isIBAN: o2,
    isIP: oc,
    isISBN: hc,
    isISIN: Ec,
    isISO31661Alpha2: Dc,
    isISO31661Alpha3: xc,
    isISO4217CurrencyCode: u9,
    isISO8601: Md,
    isISRC: h2,
    isISSN: Cf,
    isIdentityCard: f2,
    isIn: Kl,
    isInstance: x9,
    isInt: $9,
    isJSON: Tc,
    isJWT: bc,
    isLatLong: Yi,
    isLatitude: Pl,
    isLocale: E2,
    isLongitude: xl,
    isLowercase: Oc,
    isMACAddress: uc,
    isMagnetURI: m2,
    isMilitaryTime: Rf,
    isMimeType: S2,
    isMobilePhone: Lc,
    isMongoId: qc,
    isMultibyte: Gc,
    isNegative: i1,
    isNotEmpty: Vl,
    isNotEmptyObject: U9,
    isNotIn: Yl,
    isNumber: _9,
    isNumberString: Bf,
    isObject: Wd,
    isOctal: A2,
    isPassportNumber: N2,
    isPhoneNumber: Tf,
    isPort: fc,
    isPositive: r1,
    isPostalCode: M2,
    isRFC3339: U2,
    isRgbColor: B2,
    isSemVer: W2,
    isString: y9,
    isStrongPassword: Q2,
    isSurrogatePair: Zc,
    isTaxId: a9,
    isTimeZone: t9,
    isURL: Yc,
    isUUID: Xc,
    isUppercase: nf,
    isValidationOptions: hd,
    isVariableWidth: Q1,
    length: uf,
    matches: hf,
    max: d1,
    maxDate: f1,
    maxLength: of ,
    min: s1,
    minDate: l1,
    minLength: cf,
    notContains: y1,
    notEquals: kl,
    registerDecorator: Ol,
    registerSchema: ih,
    useContainer: r4,
    validate: th,
    validateOrReject: rh,
    validateSync: nh
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  F9 = _l(ah);
var Et = {},
  C0;

function Gd() {
  if (C0) return Et;
  C0 = 1, Object.defineProperty(Et, "__esModule", {
    value: !0
  }), Et.ValidationErrorDetails = Et.DataValidationError = void 0;
  var t = function () {
    function r(i) {
      this.name = "VALIDATION_ERROR", this.message = "One or more validation error(s) occured, check details field.", this.details = i.map(function (a) {
        return new e(a)
      })
    }
    return r
  }();
  Et.DataValidationError = t;
  var e = function () {
    function r(i) {
      this.field = i.property, this.constraints = Object.values(i.constraints)
    }
    return r
  }();
  return Et.ValidationErrorDetails = e, Et
}
var L0;

function B9() {
  if (L0) return Ue;
  L0 = 1;
  var t = Ue.__extends || function () {
      var u = function (l, f) {
        return u = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (o, c) {
          o.__proto__ = c
        } || function (o, c) {
          for (var _ in c) Object.prototype.hasOwnProperty.call(c, _) && (o[_] = c[_])
        }, u(l, f)
      };
      return function (l, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
        u(l, f);

        function o() {
          this.constructor = l
        }
        l.prototype = f === null ? Object.create(f) : (o.prototype = f.prototype, new o)
      }
    }(),
    e = Ue.__decorate || function (u, l, f, o) {
      var c = arguments.length,
        _ = c < 3 ? l : o === null ? o = Object.getOwnPropertyDescriptor(l, f) : o,
        h;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") _ = Reflect.decorate(u, l, f, o);
      else
        for (var v = u.length - 1; v >= 0; v--)(h = u[v]) && (_ = (c < 3 ? h(_) : c > 3 ? h(l, f, _) : h(l, f)) || _);
      return c > 3 && _ && Object.defineProperty(l, f, _), _
    },
    r = Ue.__metadata || function (u, l) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(u, l)
    };
  Object.defineProperty(Ue, "__esModule", {
    value: !0
  }), Ue.TweetFilter = Ue.FetchArgs = void 0;
  var i = F9,
    a = Wr(),
    n = Tt(),
    d = Gd();
  Ue.FetchArgs = function () {
    function u(l, f) {
      this.id = f.id, this.count = f.count, this.cursor = f.cursor, this.filter = f.filter ? new s(f.filter) : void 0, this.results = f.results;
      var o = (0, i.validateSync)(this, {
        groups: [l]
      });
      if (o.length) throw new d.DataValidationError(o)
    }
    return e([(0, i.IsEmpty)({
      groups: [n.EResourceType.TWEET_DETAILS, n.EResourceType.TWEET_DETAILS_ALT, n.EResourceType.USER_DETAILS_BY_ID, n.EResourceType.USER_DETAILS_BY_USERNAME, n.EResourceType.USER_FEED_FOLLOWED, n.EResourceType.USER_FEED_RECOMMENDED]
    }), (0, i.IsOptional)({
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.TWEET_SEARCH, n.EResourceType.USER_BOOKMARKS, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_NOTIFICATIONS, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), (0, i.Min)(1, {
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.TWEET_SEARCH, n.EResourceType.USER_BOOKMARKS, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_NOTIFICATIONS, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), (0, i.Max)(100, {
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.USER_BOOKMARKS, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_SUBSCRIPTIONS]
    }), (0, i.Max)(40, {
      groups: [n.EResourceType.USER_NOTIFICATIONS]
    }), (0, i.Max)(20, {
      groups: [n.EResourceType.TWEET_SEARCH, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), r("design:type", Number)], u.prototype, "count", void 0), e([(0, i.IsEmpty)({
      groups: [n.EResourceType.TWEET_DETAILS, n.EResourceType.TWEET_DETAILS_ALT, n.EResourceType.USER_DETAILS_BY_ID, n.EResourceType.USER_DETAILS_BY_USERNAME]
    }), (0, i.IsOptional)({
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.TWEET_SEARCH, n.EResourceType.USER_BOOKMARKS, n.EResourceType.USER_FEED_FOLLOWED, n.EResourceType.USER_FEED_RECOMMENDED, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_NOTIFICATIONS, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), (0, i.IsString)({
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.TWEET_SEARCH, n.EResourceType.USER_BOOKMARKS, n.EResourceType.USER_FEED_FOLLOWED, n.EResourceType.USER_FEED_RECOMMENDED, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_NOTIFICATIONS, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), r("design:type", String)], u.prototype, "cursor", void 0), e([(0, i.IsEmpty)({
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_DETAILS, n.EResourceType.TWEET_DETAILS_ALT, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.USER_BOOKMARKS, n.EResourceType.USER_DETAILS_BY_USERNAME, n.EResourceType.USER_DETAILS_BY_ID, n.EResourceType.USER_FEED_FOLLOWED, n.EResourceType.USER_FEED_RECOMMENDED, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_NOTIFICATIONS, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), (0, i.IsNotEmpty)({
      groups: [n.EResourceType.TWEET_SEARCH]
    }), (0, i.IsObject)({
      groups: [n.EResourceType.TWEET_SEARCH]
    }), r("design:type", s)], u.prototype, "filter", void 0), e([(0, i.IsEmpty)({
      groups: [n.EResourceType.USER_BOOKMARKS, n.EResourceType.USER_FEED_FOLLOWED, n.EResourceType.USER_FEED_RECOMMENDED, n.EResourceType.USER_NOTIFICATIONS]
    }), (0, i.IsNotEmpty)({
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_DETAILS, n.EResourceType.TWEET_DETAILS_ALT, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.USER_DETAILS_BY_USERNAME, n.EResourceType.USER_DETAILS_BY_ID, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), (0, i.IsString)({
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_DETAILS, n.EResourceType.TWEET_DETAILS_ALT, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.USER_DETAILS_BY_USERNAME, n.EResourceType.USER_DETAILS_BY_ID, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), (0, i.IsNumberString)(void 0, {
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_DETAILS, n.EResourceType.TWEET_DETAILS_ALT, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.USER_DETAILS_BY_ID, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), r("design:type", String)], u.prototype, "id", void 0), e([(0, i.IsEmpty)({
      groups: [n.EResourceType.LIST_MEMBERS, n.EResourceType.LIST_TWEETS, n.EResourceType.TWEET_DETAILS, n.EResourceType.TWEET_DETAILS_ALT, n.EResourceType.TWEET_RETWEETERS, n.EResourceType.USER_BOOKMARKS, n.EResourceType.USER_DETAILS_BY_USERNAME, n.EResourceType.USER_DETAILS_BY_ID, n.EResourceType.USER_FEED_FOLLOWED, n.EResourceType.USER_FEED_RECOMMENDED, n.EResourceType.USER_FOLLOWING, n.EResourceType.USER_FOLLOWERS, n.EResourceType.USER_HIGHLIGHTS, n.EResourceType.USER_LIKES, n.EResourceType.USER_MEDIA, n.EResourceType.USER_NOTIFICATIONS, n.EResourceType.USER_SUBSCRIPTIONS, n.EResourceType.USER_TIMELINE, n.EResourceType.USER_TIMELINE_AND_REPLIES]
    }), (0, i.IsOptional)({
      groups: [n.EResourceType.TWEET_SEARCH]
    }), r("design:type", String)], u.prototype, "results", void 0), u
  }();
  var s = Ue.TweetFilter = function (u) {
    t(l, u);

    function l(f) {
      var o = u.call(this, f) || this,
        c = (0, i.validateSync)(o);
      if (c.length) throw new d.DataValidationError(c);
      return o
    }
    return e([(0, i.IsOptional)(), (0, i.IsDate)(), r("design:type", Date)], l.prototype, "endDate", void 0), e([(0, i.IsOptional)(), (0, i.IsArray)(), (0, i.IsString)({
      each: !0
    }), r("design:type", Array)], l.prototype, "excludeWords", void 0), e([(0, i.IsOptional)(), (0, i.IsArray)(), (0, i.IsString)({
      each: !0
    }), r("design:type", Array)], l.prototype, "fromUsers", void 0), e([(0, i.IsOptional)(), (0, i.IsArray)(), (0, i.IsString)({
      each: !0
    }), r("design:type", Array)], l.prototype, "hashtags", void 0), e([(0, i.IsOptional)(), (0, i.IsString)(), r("design:type", String)], l.prototype, "includePhrase", void 0), e([(0, i.IsOptional)(), (0, i.IsArray)(), (0, i.IsString)({
      each: !0
    }), r("design:type", Array)], l.prototype, "includeWords", void 0), e([(0, i.IsOptional)(), (0, i.IsString)(), r("design:type", String)], l.prototype, "language", void 0), e([(0, i.IsOptional)(), (0, i.IsBoolean)(), r("design:type", Boolean)], l.prototype, "links", void 0), e([(0, i.IsOptional)(), (0, i.IsNumberString)(), r("design:type", String)], l.prototype, "list", void 0), e([(0, i.IsOptional)(), (0, i.IsNumberString)(), r("design:type", String)], l.prototype, "maxId", void 0), e([(0, i.IsOptional)(), (0, i.IsArray)(), (0, i.IsString)({
      each: !0
    }), r("design:type", Array)], l.prototype, "mentions", void 0), e([(0, i.IsOptional)(), (0, i.IsNumber)(), r("design:type", Number)], l.prototype, "minLikes", void 0), e([(0, i.IsOptional)(), (0, i.IsNumber)(), r("design:type", Number)], l.prototype, "minReplies", void 0), e([(0, i.IsOptional)(), (0, i.IsNumber)(), r("design:type", Number)], l.prototype, "minRetweets", void 0), e([(0, i.IsOptional)(), (0, i.IsArray)(), (0, i.IsString)({
      each: !0
    }), r("design:type", Array)], l.prototype, "optionalWords", void 0), e([(0, i.IsOptional)(), (0, i.IsNumberString)(), r("design:type", String)], l.prototype, "quoted", void 0), e([(0, i.IsOptional)(), (0, i.IsBoolean)(), r("design:type", Boolean)], l.prototype, "replies", void 0), e([(0, i.IsOptional)(), (0, i.IsNumberString)(), r("design:type", String)], l.prototype, "sinceId", void 0), e([(0, i.IsOptional)(), (0, i.IsDate)(), r("design:type", Date)], l.prototype, "startDate", void 0), e([(0, i.IsOptional)(), (0, i.IsArray)(), (0, i.IsString)({
      each: !0
    }), r("design:type", Array)], l.prototype, "toUsers", void 0), e([(0, i.IsOptional)(), (0, i.IsBoolean)(), r("design:type", Boolean)], l.prototype, "top", void 0), l
  }(a.TweetFilter);
  return Ue
}
var ge = {},
  M0;

function q9() {
  if (M0) return ge;
  M0 = 1;
  var t = ge.__extends || function () {
      var f = function (o, c) {
        return f = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (_, h) {
          _.__proto__ = h
        } || function (_, h) {
          for (var v in h) Object.prototype.hasOwnProperty.call(h, v) && (_[v] = h[v])
        }, f(o, c)
      };
      return function (o, c) {
        if (typeof c != "function" && c !== null) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
        f(o, c);

        function _() {
          this.constructor = o
        }
        o.prototype = c === null ? Object.create(c) : (_.prototype = c.prototype, new _)
      }
    }(),
    e = ge.__decorate || function (f, o, c, _) {
      var h = arguments.length,
        v = h < 3 ? o : _ === null ? _ = Object.getOwnPropertyDescriptor(o, c) : _,
        p;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function") v = Reflect.decorate(f, o, c, _);
      else
        for (var E = f.length - 1; E >= 0; E--)(p = f[E]) && (v = (h < 3 ? p(v) : h > 3 ? p(o, c, v) : p(o, c)) || v);
      return h > 3 && v && Object.defineProperty(o, c, v), v
    },
    r = ge.__metadata || function (f, o) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(f, o)
    };
  Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.UploadArgs = ge.TweetMediaArgs = ge.TweetArgs = ge.PostArgs = void 0;
  var i = F9,
    a = Wr(),
    n = Tt(),
    d = Gd();
  ge.PostArgs = function () {
    function f(o, c) {
      this.id = c.id, this.tweet = c.tweet ? new s(o, c.tweet) : void 0, this.upload = c.upload ? new l(o, c.upload) : void 0;
      var _ = (0, i.validateSync)(this, {
        groups: [o]
      });
      if (_.length) throw new d.DataValidationError(_)
    }
    return e([(0, i.IsEmpty)({
      groups: [n.EResourceType.MEDIA_UPLOAD_APPEND, n.EResourceType.MEDIA_UPLOAD_FINALIZE, n.EResourceType.MEDIA_UPLOAD_INITIALIZE, n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
    }), (0, i.IsNotEmpty)({
      groups: [n.EResourceType.TWEET_LIKE, n.EResourceType.TWEET_RETWEET, n.EResourceType.TWEET_UNLIKE, n.EResourceType.TWEET_UNPOST, n.EResourceType.TWEET_UNRETWEET, n.EResourceType.TWEET_UNSCHEDULE, n.EResourceType.USER_FOLLOW, n.EResourceType.USER_UNFOLLOW]
    }), (0, i.IsNumberString)(void 0, {
      groups: [n.EResourceType.TWEET_LIKE, n.EResourceType.TWEET_RETWEET, n.EResourceType.TWEET_UNLIKE, n.EResourceType.TWEET_UNPOST, n.EResourceType.TWEET_UNRETWEET, n.EResourceType.TWEET_UNSCHEDULE, n.EResourceType.USER_FOLLOW, n.EResourceType.USER_UNFOLLOW]
    }), r("design:type", String)], f.prototype, "id", void 0), e([(0, i.IsEmpty)({
      groups: [n.EResourceType.MEDIA_UPLOAD_APPEND, n.EResourceType.MEDIA_UPLOAD_FINALIZE, n.EResourceType.MEDIA_UPLOAD_INITIALIZE, n.EResourceType.TWEET_LIKE, n.EResourceType.TWEET_RETWEET, n.EResourceType.TWEET_UNLIKE, n.EResourceType.TWEET_UNPOST, n.EResourceType.TWEET_UNRETWEET, n.EResourceType.TWEET_UNSCHEDULE, n.EResourceType.USER_FOLLOW, n.EResourceType.USER_UNFOLLOW]
    }), (0, i.IsNotEmpty)({
      groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
    }), (0, i.IsObject)({
      groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
    }), r("design:type", s)], f.prototype, "tweet", void 0), e([(0, i.IsEmpty)({
      groups: [n.EResourceType.TWEET_LIKE, n.EResourceType.TWEET_POST, n.EResourceType.TWEET_RETWEET, n.EResourceType.TWEET_SCHEDULE, n.EResourceType.TWEET_UNLIKE, n.EResourceType.TWEET_UNPOST, n.EResourceType.TWEET_UNRETWEET, n.EResourceType.TWEET_UNSCHEDULE, n.EResourceType.USER_FOLLOW, n.EResourceType.USER_UNFOLLOW]
    }), (0, i.IsNotEmpty)({
      groups: [n.EResourceType.MEDIA_UPLOAD_INITIALIZE, n.EResourceType.MEDIA_UPLOAD_APPEND, n.EResourceType.MEDIA_UPLOAD_FINALIZE]
    }), (0, i.IsObject)({
      groups: [n.EResourceType.MEDIA_UPLOAD_INITIALIZE, n.EResourceType.MEDIA_UPLOAD_APPEND, n.EResourceType.MEDIA_UPLOAD_FINALIZE]
    }), r("design:type", l)], f.prototype, "upload", void 0), f
  }();
  var s = ge.TweetArgs = function (f) {
      t(o, f);

      function o(c, _) {
        var h = f.call(this) || this;
        h.media = _.media ? _.media.map(function (p) {
          return new u(p)
        }) : void 0, h.quote = _.quote, h.replyTo = _.replyTo, h.scheduleFor = _.scheduleFor, h.text = _.text;
        var v = (0, i.validateSync)(h, {
          groups: [c]
        });
        if (v.length) throw new d.DataValidationError(v);
        return h
      }
      return e([(0, i.IsOptional)({
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.IsArray)({
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.ArrayMaxSize)(4, {
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.IsObject)({
        each: !0,
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), r("design:type", Array)], o.prototype, "media", void 0), e([(0, i.IsOptional)({
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.IsNumberString)(void 0, {
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), r("design:type", String)], o.prototype, "quote", void 0), e([(0, i.IsOptional)({
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.IsNumberString)(void 0, {
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), r("design:type", String)], o.prototype, "replyTo", void 0), e([(0, i.IsEmpty)({
        groups: [n.EResourceType.TWEET_POST]
      }), (0, i.IsNotEmpty)({
        groups: [n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.IsDate)({
        groups: [n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.MinDate)(function () {
        return new Date
      }, {
        groups: [n.EResourceType.TWEET_SCHEDULE]
      }), r("design:type", Date)], o.prototype, "scheduleFor", void 0), e([(0, i.IsNotEmpty)({
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.IsString)({
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), (0, i.MaxLength)(280, {
        groups: [n.EResourceType.TWEET_POST, n.EResourceType.TWEET_SCHEDULE]
      }), r("design:type", String)], o.prototype, "text", void 0), o
    }(a.NewTweet),
    u = ge.TweetMediaArgs = function (f) {
      t(o, f);

      function o(c) {
        var _ = this,
          h;
        _ = f.call(this) || this, _.id = c.id, _.tags = (h = c.tags) !== null && h !== void 0 ? h : [];
        var v = (0, i.validateSync)(_);
        if (v.length) throw new d.DataValidationError(v);
        return _
      }
      return e([(0, i.IsNotEmpty)(), (0, i.IsNumberString)(), r("design:type", String)], o.prototype, "id", void 0), e([(0, i.IsOptional)(), (0, i.IsArray)(), (0, i.ArrayMaxSize)(10), (0, i.IsNumberString)(void 0, {
        each: !0
      }), r("design:type", Array)], o.prototype, "tags", void 0), o
    }(a.NewTweetMedia),
    l = ge.UploadArgs = function () {
      function f(o, c) {
        this.size = c.size, this.media = c.media, this.id = c.id;
        var _ = (0, i.validateSync)(this, {
          groups: [o]
        });
        if (_.length) throw new d.DataValidationError(_)
      }
      return e([(0, i.IsEmpty)({
        groups: [n.EResourceType.MEDIA_UPLOAD_INITIALIZE]
      }), (0, i.IsNotEmpty)({
        groups: [n.EResourceType.MEDIA_UPLOAD_APPEND, n.EResourceType.MEDIA_UPLOAD_FINALIZE]
      }), (0, i.IsNumberString)(void 0, {
        groups: [n.EResourceType.MEDIA_UPLOAD_APPEND, n.EResourceType.MEDIA_UPLOAD_FINALIZE]
      }), r("design:type", String)], f.prototype, "id", void 0), e([(0, i.IsEmpty)({
        groups: [n.EResourceType.MEDIA_UPLOAD_FINALIZE, n.EResourceType.MEDIA_UPLOAD_INITIALIZE]
      }), (0, i.IsNotEmpty)({
        groups: [n.EResourceType.MEDIA_UPLOAD_APPEND]
      }), r("design:type", Object)], f.prototype, "media", void 0), e([(0, i.IsEmpty)({
        groups: [n.EResourceType.MEDIA_UPLOAD_APPEND, n.EResourceType.MEDIA_UPLOAD_FINALIZE]
      }), (0, i.IsNotEmpty)({
        groups: [n.EResourceType.MEDIA_UPLOAD_INITIALIZE]
      }), (0, i.Max)(5242880, {
        groups: [n.EResourceType.MEDIA_UPLOAD_INITIALIZE]
      }), r("design:type", Number)], f.prototype, "size", void 0), f
    }();
  return ge
}
var Mr = {},
  Dr = {},
  D0;

function k9() {
  if (D0) return Dr;
  D0 = 1, Object.defineProperty(Dr, "__esModule", {
    value: !0
  }), Dr.EHttpStatus = void 0;
  var t;
  return function (e) {
    e[e.CONTINUE = 100] = "CONTINUE", e[e.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", e[e.PROCESSING = 102] = "PROCESSING", e[e.OK = 200] = "OK", e[e.CREATED = 201] = "CREATED", e[e.ACCEPTED = 202] = "ACCEPTED", e[e.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.RESET_CONTENT = 205] = "RESET_CONTENT", e[e.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", e[e.MULTI_STATUS = 207] = "MULTI_STATUS", e[e.ALREADY_REPORTED = 208] = "ALREADY_REPORTED", e[e.IM_USED = 226] = "IM_USED", e[e.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.FOUND = 302] = "FOUND", e[e.SEE_OTHER = 303] = "SEE_OTHER", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.USE_PROXY = 305] = "USE_PROXY", e[e.SWITCH_PROXY = 306] = "SWITCH_PROXY", e[e.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", e[e.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e[e.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.CONFLICT = 409] = "CONFLICT", e[e.GONE = 410] = "GONE", e[e.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", e[e.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", e[e.PAYLOAD_TOO_LARGE = 413] = "PAYLOAD_TOO_LARGE", e[e.URI_TOO_LONG = 414] = "URI_TOO_LONG", e[e.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", e[e.RANGE_NOT_SATISFIABLE = 416] = "RANGE_NOT_SATISFIABLE", e[e.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", e[e.I_AM_A_TEAPOT = 418] = "I_AM_A_TEAPOT", e[e.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", e[e.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", e[e.LOCKED = 423] = "LOCKED", e[e.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", e[e.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", e[e.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", e[e.VARIANT_ALSO_NEGOTIATES = 506] = "VARIANT_ALSO_NEGOTIATES", e[e.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", e[e.LOOP_DETECTED = 508] = "LOOP_DETECTED", e[e.NOT_EXTENDED = 510] = "NOT_EXTENDED", e[e.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED"
  }(t || (Dr.EHttpStatus = t = {})), Dr
}
var yt = {},
  P0;

function Vr() {
  if (P0) return yt;
  P0 = 1, Object.defineProperty(yt, "__esModule", {
    value: !0
  }), yt.findKeyByValue = yt.findByFilter = void 0;

  function t(r, i, a) {
    var n = [];
    if (Array.isArray(r)) n = n.concat.apply(n, r.map(function (f) {
      return t(f, i, a)
    }));
    else if (r != null && typeof r == "object") {
      Object.keys(r).includes(i) && r[i] == a && n.push(r);
      for (var d = 0, s = Object.entries(r); d < s.length; d++) {
        var u = s[d],
          l = u[1];
        n = n.concat(t(l, i, a))
      }
    }
    return n
  }
  yt.findByFilter = t;

  function e(r, i) {
    var a = Object.entries(r).filter(function (n) {
      var d = n[1];
      return d == i
    })[0];
    if (a) return a[0]
  }
  return yt.findKeyByValue = e, yt
}
var jt = {},
  Yt = {},
  U0;

function Qi() {
  if (U0) return Yt;
  U0 = 1;
  var t = Yt.__extends || function () {
    var r = function (i, a) {
      return r = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (n, d) {
        n.__proto__ = d
      } || function (n, d) {
        for (var s in d) Object.prototype.hasOwnProperty.call(d, s) && (n[s] = d[s])
      }, r(i, a)
    };
    return function (i, a) {
      if (typeof a != "function" && a !== null) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      r(i, a);

      function n() {
        this.constructor = i
      }
      i.prototype = a === null ? Object.create(a) : (n.prototype = a.prototype, new n)
    }
  }();
  Object.defineProperty(Yt, "__esModule", {
    value: !0
  }), Yt.RettiwtError = void 0;
  var e = function (r) {
    t(i, r);

    function i(a) {
      var n = r.call(this, a) || this;
      return Object.setPrototypeOf(n, i.prototype), n
    }
    return i
  }(Error);
  return Yt.RettiwtError = e, Yt
}
var x0;

function W9() {
  if (x0) return jt;
  x0 = 1;
  var t = jt.__extends || function () {
    var i = function (a, n) {
      return i = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (d, s) {
        d.__proto__ = s
      } || function (d, s) {
        for (var u in s) Object.prototype.hasOwnProperty.call(s, u) && (d[u] = s[u])
      }, i(a, n)
    };
    return function (a, n) {
      if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      i(a, n);

      function d() {
        this.constructor = a
      }
      a.prototype = n === null ? Object.create(n) : (d.prototype = n.prototype, new d)
    }
  }();
  Object.defineProperty(jt, "__esModule", {
    value: !0
  }), jt.ApiError = void 0;
  var e = Qi(),
    r = function (i) {
      t(a, i);

      function a(n, d) {
        var s = i.call(this, d) || this;
        return s.code = n, s
      }
      return a
    }(e.RettiwtError);
  return jt.ApiError = r, jt
}
var zt = {},
  F0;

function G9() {
  if (F0) return zt;
  F0 = 1;
  var t = zt.__extends || function () {
    var i = function (a, n) {
      return i = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (d, s) {
        d.__proto__ = s
      } || function (d, s) {
        for (var u in s) Object.prototype.hasOwnProperty.call(s, u) && (d[u] = s[u])
      }, i(a, n)
    };
    return function (a, n) {
      if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      i(a, n);

      function d() {
        this.constructor = a
      }
      a.prototype = n === null ? Object.create(n) : (d.prototype = n.prototype, new d)
    }
  }();
  Object.defineProperty(zt, "__esModule", {
    value: !0
  }), zt.HttpError = void 0;
  var e = Qi(),
    r = function (i) {
      t(a, i);

      function a(n, d) {
        var s = i.call(this, d) || this;
        return s.status = n, s
      }
      return a
    }(e.RettiwtError);
  return zt.HttpError = r, zt
}
var Jt = {},
  B0;

function H9() {
  if (B0) return Jt;
  B0 = 1;
  var t = Jt.__extends || function () {
    var i = function (a, n) {
      return i = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (d, s) {
        d.__proto__ = s
      } || function (d, s) {
        for (var u in s) Object.prototype.hasOwnProperty.call(s, u) && (d[u] = s[u])
      }, i(a, n)
    };
    return function (a, n) {
      if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      i(a, n);

      function d() {
        this.constructor = a
      }
      a.prototype = n === null ? Object.create(n) : (d.prototype = n.prototype, new d)
    }
  }();
  Object.defineProperty(Jt, "__esModule", {
    value: !0
  }), Jt.TimeoutError = void 0;
  var e = Qi(),
    r = function (i) {
      t(a, i);

      function a(n) {
        return i.call(this, n) || this
      }
      return a
    }(e.RettiwtError);
  return Jt.TimeoutError = r, Jt
}
var q0;

function dh() {
  if (q0) return Mr;
  q0 = 1, Object.defineProperty(Mr, "__esModule", {
    value: !0
  }), Mr.ErrorService = void 0;
  var t = Zi(),
    e = Ki(),
    r = k9(),
    i = Vr(),
    a = W9(),
    n = G9(),
    d = H9();
  return Mr.ErrorService = function () {
    function s() {}
    return s.prototype.createApiError = function (u) {
      return new a.ApiError(u, this.getApiErrorMessage(u))
    }, s.prototype.createHttpError = function (u) {
      return new n.HttpError(u, this.getHttpErrorMessage(u))
    }, s.prototype.getApiErrorMessage = function (u) {
      var l = (0, i.findKeyByValue)(e.EErrorCodes, u.toString());
      return l && l in e.EApiErrors ? e.EApiErrors[l] : s.DEFAULT_ERROR_MESSAGE
    }, s.prototype.getAxiosResponse = function (u) {
      if (u.response) return u.response;
      throw u
    }, s.prototype.getErrorCode = function (u) {
      var l = u.data.errors;
      return l && l.length ? l[0].code : void 0
    }, s.prototype.getHttpErrorMessage = function (u) {
      return Object.values(r.EHttpStatus).includes(u) ? r.EHttpStatus[u] : s.DEFAULT_ERROR_MESSAGE
    }, s.prototype.handleApiError = function (u) {
      var l = this.getErrorCode(u);
      if (l !== void 0) throw this.createApiError(l)
    }, s.prototype.handleHttpError = function (u) {
      throw this.createHttpError(u.status)
    }, s.prototype.handleTimeoutError = function (u) {
      if (u.code === "ECONNABORTED") throw new d.TimeoutError(u.message)
    }, s.prototype.handle = function (u) {
      if (!(0, t.isAxiosError)(u)) throw u;
      this.handleTimeoutError(u);
      var l = this.getAxiosResponse(u);
      this.handleApiError(l), this.handleHttpError(l)
    }, s.DEFAULT_ERROR_MESSAGE = "Unknown error", s
  }(), Mr
}
var Xt = {},
  Gi = {
    exports: {}
  },
  rd, k0;

function uh() {
  return k0 || (k0 = 1, rd = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }), rd
}
var nd, W0;

function V9() {
  if (W0) return nd;
  W0 = 1;
  const t = uh(),
    e = {};
  for (const a of Object.keys(t)) e[t[a]] = a;
  const r = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };
  nd = r;
  for (const a of Object.keys(r)) {
    if (!("channels" in r[a])) throw new Error("missing channels property: " + a);
    if (!("labels" in r[a])) throw new Error("missing channel labels property: " + a);
    if (r[a].labels.length !== r[a].channels) throw new Error("channel and label counts mismatch: " + a);
    const {
      channels: n,
      labels: d
    } = r[a];
    delete r[a].channels, delete r[a].labels, Object.defineProperty(r[a], "channels", {
      value: n
    }), Object.defineProperty(r[a], "labels", {
      value: d
    })
  }
  r.rgb.hsl = function (a) {
    const n = a[0] / 255,
      d = a[1] / 255,
      s = a[2] / 255,
      u = Math.min(n, d, s),
      l = Math.max(n, d, s),
      f = l - u;
    let o, c;
    l === u ? o = 0 : n === l ? o = (d - s) / f : d === l ? o = 2 + (s - n) / f : s === l && (o = 4 + (n - d) / f), o = Math.min(o * 60, 360), o < 0 && (o += 360);
    const _ = (u + l) / 2;
    return l === u ? c = 0 : _ <= .5 ? c = f / (l + u) : c = f / (2 - l - u), [o, c * 100, _ * 100]
  }, r.rgb.hsv = function (a) {
    let n, d, s, u, l;
    const f = a[0] / 255,
      o = a[1] / 255,
      c = a[2] / 255,
      _ = Math.max(f, o, c),
      h = _ - Math.min(f, o, c),
      v = function (p) {
        return (_ - p) / 6 / h + 1 / 2
      };
    return h === 0 ? (u = 0, l = 0) : (l = h / _, n = v(f), d = v(o), s = v(c), f === _ ? u = s - d : o === _ ? u = 1 / 3 + n - s : c === _ && (u = 2 / 3 + d - n), u < 0 ? u += 1 : u > 1 && (u -= 1)), [u * 360, l * 100, _ * 100]
  }, r.rgb.hwb = function (a) {
    const n = a[0],
      d = a[1];
    let s = a[2];
    const u = r.rgb.hsl(a)[0],
      l = 1 / 255 * Math.min(n, Math.min(d, s));
    return s = 1 - 1 / 255 * Math.max(n, Math.max(d, s)), [u, l * 100, s * 100]
  }, r.rgb.cmyk = function (a) {
    const n = a[0] / 255,
      d = a[1] / 255,
      s = a[2] / 255,
      u = Math.min(1 - n, 1 - d, 1 - s),
      l = (1 - n - u) / (1 - u) || 0,
      f = (1 - d - u) / (1 - u) || 0,
      o = (1 - s - u) / (1 - u) || 0;
    return [l * 100, f * 100, o * 100, u * 100]
  };

  function i(a, n) {
    return (a[0] - n[0]) ** 2 + (a[1] - n[1]) ** 2 + (a[2] - n[2]) ** 2
  }
  return r.rgb.keyword = function (a) {
    const n = e[a];
    if (n) return n;
    let d = 1 / 0,
      s;
    for (const u of Object.keys(t)) {
      const l = t[u],
        f = i(a, l);
      f < d && (d = f, s = u)
    }
    return s
  }, r.keyword.rgb = function (a) {
    return t[a]
  }, r.rgb.xyz = function (a) {
    let n = a[0] / 255,
      d = a[1] / 255,
      s = a[2] / 255;
    n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92, d = d > .04045 ? ((d + .055) / 1.055) ** 2.4 : d / 12.92, s = s > .04045 ? ((s + .055) / 1.055) ** 2.4 : s / 12.92;
    const u = n * .4124 + d * .3576 + s * .1805,
      l = n * .2126 + d * .7152 + s * .0722,
      f = n * .0193 + d * .1192 + s * .9505;
    return [u * 100, l * 100, f * 100]
  }, r.rgb.lab = function (a) {
    const n = r.rgb.xyz(a);
    let d = n[0],
      s = n[1],
      u = n[2];
    d /= 95.047, s /= 100, u /= 108.883, d = d > .008856 ? d ** (1 / 3) : 7.787 * d + 16 / 116, s = s > .008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116, u = u > .008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116;
    const l = 116 * s - 16,
      f = 500 * (d - s),
      o = 200 * (s - u);
    return [l, f, o]
  }, r.hsl.rgb = function (a) {
    const n = a[0] / 360,
      d = a[1] / 100,
      s = a[2] / 100;
    let u, l, f;
    if (d === 0) return f = s * 255, [f, f, f];
    s < .5 ? u = s * (1 + d) : u = s + d - s * d;
    const o = 2 * s - u,
      c = [0, 0, 0];
    for (let _ = 0; _ < 3; _++) l = n + 1 / 3 * -(_ - 1), l < 0 && l++, l > 1 && l--, 6 * l < 1 ? f = o + (u - o) * 6 * l : 2 * l < 1 ? f = u : 3 * l < 2 ? f = o + (u - o) * (2 / 3 - l) * 6 : f = o, c[_] = f * 255;
    return c
  }, r.hsl.hsv = function (a) {
    const n = a[0];
    let d = a[1] / 100,
      s = a[2] / 100,
      u = d;
    const l = Math.max(s, .01);
    s *= 2, d *= s <= 1 ? s : 2 - s, u *= l <= 1 ? l : 2 - l;
    const f = (s + d) / 2,
      o = s === 0 ? 2 * u / (l + u) : 2 * d / (s + d);
    return [n, o * 100, f * 100]
  }, r.hsv.rgb = function (a) {
    const n = a[0] / 60,
      d = a[1] / 100;
    let s = a[2] / 100;
    const u = Math.floor(n) % 6,
      l = n - Math.floor(n),
      f = 255 * s * (1 - d),
      o = 255 * s * (1 - d * l),
      c = 255 * s * (1 - d * (1 - l));
    switch (s *= 255, u) {
      case 0:
        return [s, c, f];
      case 1:
        return [o, s, f];
      case 2:
        return [f, s, c];
      case 3:
        return [f, o, s];
      case 4:
        return [c, f, s];
      case 5:
        return [s, f, o]
    }
  }, r.hsv.hsl = function (a) {
    const n = a[0],
      d = a[1] / 100,
      s = a[2] / 100,
      u = Math.max(s, .01);
    let l, f;
    f = (2 - d) * s;
    const o = (2 - d) * u;
    return l = d * u, l /= o <= 1 ? o : 2 - o, l = l || 0, f /= 2, [n, l * 100, f * 100]
  }, r.hwb.rgb = function (a) {
    const n = a[0] / 360;
    let d = a[1] / 100,
      s = a[2] / 100;
    const u = d + s;
    let l;
    u > 1 && (d /= u, s /= u);
    const f = Math.floor(6 * n),
      o = 1 - s;
    l = 6 * n - f, f & 1 && (l = 1 - l);
    const c = d + l * (o - d);
    let _, h, v;
    switch (f) {
      default:
      case 6:
      case 0:
        _ = o, h = c, v = d;
        break;
      case 1:
        _ = c, h = o, v = d;
        break;
      case 2:
        _ = d, h = o, v = c;
        break;
      case 3:
        _ = d, h = c, v = o;
        break;
      case 4:
        _ = c, h = d, v = o;
        break;
      case 5:
        _ = o, h = d, v = c;
        break
    }
    return [_ * 255, h * 255, v * 255]
  }, r.cmyk.rgb = function (a) {
    const n = a[0] / 100,
      d = a[1] / 100,
      s = a[2] / 100,
      u = a[3] / 100,
      l = 1 - Math.min(1, n * (1 - u) + u),
      f = 1 - Math.min(1, d * (1 - u) + u),
      o = 1 - Math.min(1, s * (1 - u) + u);
    return [l * 255, f * 255, o * 255]
  }, r.xyz.rgb = function (a) {
    const n = a[0] / 100,
      d = a[1] / 100,
      s = a[2] / 100;
    let u, l, f;
    return u = n * 3.2406 + d * -1.5372 + s * -.4986, l = n * -.9689 + d * 1.8758 + s * .0415, f = n * .0557 + d * -.204 + s * 1.057, u = u > .0031308 ? 1.055 * u ** (1 / 2.4) - .055 : u * 12.92, l = l > .0031308 ? 1.055 * l ** (1 / 2.4) - .055 : l * 12.92, f = f > .0031308 ? 1.055 * f ** (1 / 2.4) - .055 : f * 12.92, u = Math.min(Math.max(0, u), 1), l = Math.min(Math.max(0, l), 1), f = Math.min(Math.max(0, f), 1), [u * 255, l * 255, f * 255]
  }, r.xyz.lab = function (a) {
    let n = a[0],
      d = a[1],
      s = a[2];
    n /= 95.047, d /= 100, s /= 108.883, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, d = d > .008856 ? d ** (1 / 3) : 7.787 * d + 16 / 116, s = s > .008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116;
    const u = 116 * d - 16,
      l = 500 * (n - d),
      f = 200 * (d - s);
    return [u, l, f]
  }, r.lab.xyz = function (a) {
    const n = a[0],
      d = a[1],
      s = a[2];
    let u, l, f;
    l = (n + 16) / 116, u = d / 500 + l, f = l - s / 200;
    const o = l ** 3,
      c = u ** 3,
      _ = f ** 3;
    return l = o > .008856 ? o : (l - 16 / 116) / 7.787, u = c > .008856 ? c : (u - 16 / 116) / 7.787, f = _ > .008856 ? _ : (f - 16 / 116) / 7.787, u *= 95.047, l *= 100, f *= 108.883, [u, l, f]
  }, r.lab.lch = function (a) {
    const n = a[0],
      d = a[1],
      s = a[2];
    let u;
    u = Math.atan2(s, d) * 360 / 2 / Math.PI, u < 0 && (u += 360);
    const f = Math.sqrt(d * d + s * s);
    return [n, f, u]
  }, r.lch.lab = function (a) {
    const n = a[0],
      d = a[1],
      u = a[2] / 360 * 2 * Math.PI,
      l = d * Math.cos(u),
      f = d * Math.sin(u);
    return [n, l, f]
  }, r.rgb.ansi16 = function (a, n = null) {
    const [d, s, u] = a;
    let l = n === null ? r.rgb.hsv(a)[2] : n;
    if (l = Math.round(l / 50), l === 0) return 30;
    let f = 30 + (Math.round(u / 255) << 2 | Math.round(s / 255) << 1 | Math.round(d / 255));
    return l === 2 && (f += 60), f
  }, r.hsv.ansi16 = function (a) {
    return r.rgb.ansi16(r.hsv.rgb(a), a[2])
  }, r.rgb.ansi256 = function (a) {
    const n = a[0],
      d = a[1],
      s = a[2];
    return n === d && d === s ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(d / 255 * 5) + Math.round(s / 255 * 5)
  }, r.ansi16.rgb = function (a) {
    let n = a % 10;
    if (n === 0 || n === 7) return a > 50 && (n += 3.5), n = n / 10.5 * 255, [n, n, n];
    const d = (~~(a > 50) + 1) * .5,
      s = (n & 1) * d * 255,
      u = (n >> 1 & 1) * d * 255,
      l = (n >> 2 & 1) * d * 255;
    return [s, u, l]
  }, r.ansi256.rgb = function (a) {
    if (a >= 232) {
      const l = (a - 232) * 10 + 8;
      return [l, l, l]
    }
    a -= 16;
    let n;
    const d = Math.floor(a / 36) / 5 * 255,
      s = Math.floor((n = a % 36) / 6) / 5 * 255,
      u = n % 6 / 5 * 255;
    return [d, s, u]
  }, r.rgb.hex = function (a) {
    const d = (((Math.round(a[0]) & 255) << 16) + ((Math.round(a[1]) & 255) << 8) + (Math.round(a[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(d.length) + d
  }, r.hex.rgb = function (a) {
    const n = a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!n) return [0, 0, 0];
    let d = n[0];
    n[0].length === 3 && (d = d.split("").map(o => o + o).join(""));
    const s = parseInt(d, 16),
      u = s >> 16 & 255,
      l = s >> 8 & 255,
      f = s & 255;
    return [u, l, f]
  }, r.rgb.hcg = function (a) {
    const n = a[0] / 255,
      d = a[1] / 255,
      s = a[2] / 255,
      u = Math.max(Math.max(n, d), s),
      l = Math.min(Math.min(n, d), s),
      f = u - l;
    let o, c;
    return f < 1 ? o = l / (1 - f) : o = 0, f <= 0 ? c = 0 : u === n ? c = (d - s) / f % 6 : u === d ? c = 2 + (s - n) / f : c = 4 + (n - d) / f, c /= 6, c %= 1, [c * 360, f * 100, o * 100]
  }, r.hsl.hcg = function (a) {
    const n = a[1] / 100,
      d = a[2] / 100,
      s = d < .5 ? 2 * n * d : 2 * n * (1 - d);
    let u = 0;
    return s < 1 && (u = (d - .5 * s) / (1 - s)), [a[0], s * 100, u * 100]
  }, r.hsv.hcg = function (a) {
    const n = a[1] / 100,
      d = a[2] / 100,
      s = n * d;
    let u = 0;
    return s < 1 && (u = (d - s) / (1 - s)), [a[0], s * 100, u * 100]
  }, r.hcg.rgb = function (a) {
    const n = a[0] / 360,
      d = a[1] / 100,
      s = a[2] / 100;
    if (d === 0) return [s * 255, s * 255, s * 255];
    const u = [0, 0, 0],
      l = n % 1 * 6,
      f = l % 1,
      o = 1 - f;
    let c = 0;
    switch (Math.floor(l)) {
      case 0:
        u[0] = 1, u[1] = f, u[2] = 0;
        break;
      case 1:
        u[0] = o, u[1] = 1, u[2] = 0;
        break;
      case 2:
        u[0] = 0, u[1] = 1, u[2] = f;
        break;
      case 3:
        u[0] = 0, u[1] = o, u[2] = 1;
        break;
      case 4:
        u[0] = f, u[1] = 0, u[2] = 1;
        break;
      default:
        u[0] = 1, u[1] = 0, u[2] = o
    }
    return c = (1 - d) * s, [(d * u[0] + c) * 255, (d * u[1] + c) * 255, (d * u[2] + c) * 255]
  }, r.hcg.hsv = function (a) {
    const n = a[1] / 100,
      d = a[2] / 100,
      s = n + d * (1 - n);
    let u = 0;
    return s > 0 && (u = n / s), [a[0], u * 100, s * 100]
  }, r.hcg.hsl = function (a) {
    const n = a[1] / 100,
      s = a[2] / 100 * (1 - n) + .5 * n;
    let u = 0;
    return s > 0 && s < .5 ? u = n / (2 * s) : s >= .5 && s < 1 && (u = n / (2 * (1 - s))), [a[0], u * 100, s * 100]
  }, r.hcg.hwb = function (a) {
    const n = a[1] / 100,
      d = a[2] / 100,
      s = n + d * (1 - n);
    return [a[0], (s - n) * 100, (1 - s) * 100]
  }, r.hwb.hcg = function (a) {
    const n = a[1] / 100,
      s = 1 - a[2] / 100,
      u = s - n;
    let l = 0;
    return u < 1 && (l = (s - u) / (1 - u)), [a[0], u * 100, l * 100]
  }, r.apple.rgb = function (a) {
    return [a[0] / 65535 * 255, a[1] / 65535 * 255, a[2] / 65535 * 255]
  }, r.rgb.apple = function (a) {
    return [a[0] / 255 * 65535, a[1] / 255 * 65535, a[2] / 255 * 65535]
  }, r.gray.rgb = function (a) {
    return [a[0] / 100 * 255, a[0] / 100 * 255, a[0] / 100 * 255]
  }, r.gray.hsl = function (a) {
    return [0, 0, a[0]]
  }, r.gray.hsv = r.gray.hsl, r.gray.hwb = function (a) {
    return [0, 100, a[0]]
  }, r.gray.cmyk = function (a) {
    return [0, 0, 0, a[0]]
  }, r.gray.lab = function (a) {
    return [a[0], 0, 0]
  }, r.gray.hex = function (a) {
    const n = Math.round(a[0] / 100 * 255) & 255,
      s = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
    return "000000".substring(s.length) + s
  }, r.rgb.gray = function (a) {
    return [(a[0] + a[1] + a[2]) / 3 / 255 * 100]
  }, nd
}
var id, G0;

function sh() {
  if (G0) return id;
  G0 = 1;
  const t = V9();

  function e() {
    const n = {},
      d = Object.keys(t);
    for (let s = d.length, u = 0; u < s; u++) n[d[u]] = {
      distance: -1,
      parent: null
    };
    return n
  }

  function r(n) {
    const d = e(),
      s = [n];
    for (d[n].distance = 0; s.length;) {
      const u = s.pop(),
        l = Object.keys(t[u]);
      for (let f = l.length, o = 0; o < f; o++) {
        const c = l[o],
          _ = d[c];
        _.distance === -1 && (_.distance = d[u].distance + 1, _.parent = u, s.unshift(c))
      }
    }
    return d
  }

  function i(n, d) {
    return function (s) {
      return d(n(s))
    }
  }

  function a(n, d) {
    const s = [d[n].parent, n];
    let u = t[d[n].parent][n],
      l = d[n].parent;
    for (; d[l].parent;) s.unshift(d[l].parent), u = i(t[d[l].parent][l], u), l = d[l].parent;
    return u.conversion = s, u
  }
  return id = function (n) {
    const d = r(n),
      s = {},
      u = Object.keys(d);
    for (let l = u.length, f = 0; f < l; f++) {
      const o = u[f];
      d[o].parent !== null && (s[o] = a(o, d))
    }
    return s
  }, id
}
var ad, H0;

function oh() {
  if (H0) return ad;
  H0 = 1;
  const t = V9(),
    e = sh(),
    r = {},
    i = Object.keys(t);

  function a(d) {
    const s = function (...u) {
      const l = u[0];
      return l == null ? l : (l.length > 1 && (u = l), d(u))
    };
    return "conversion" in d && (s.conversion = d.conversion), s
  }

  function n(d) {
    const s = function (...u) {
      const l = u[0];
      if (l == null) return l;
      l.length > 1 && (u = l);
      const f = d(u);
      if (typeof f == "object")
        for (let o = f.length, c = 0; c < o; c++) f[c] = Math.round(f[c]);
      return f
    };
    return "conversion" in d && (s.conversion = d.conversion), s
  }
  return i.forEach(d => {
    r[d] = {}, Object.defineProperty(r[d], "channels", {
      value: t[d].channels
    }), Object.defineProperty(r[d], "labels", {
      value: t[d].labels
    });
    const s = e(d);
    Object.keys(s).forEach(l => {
      const f = s[l];
      r[d][l] = n(f), r[d][l].raw = a(f)
    })
  }), ad = r, ad
}
Gi.exports;
var V0;

function lh() {
  return V0 || (V0 = 1, function (t) {
    const e = (f, o) => (...c) => `\x1B[${f(...c)+o}m`,
      r = (f, o) => (...c) => {
        const _ = f(...c);
        return `\x1B[${38+o};5;${_}m`
      },
      i = (f, o) => (...c) => {
        const _ = f(...c);
        return `\x1B[${38+o};2;${_[0]};${_[1]};${_[2]}m`
      },
      a = f => f,
      n = (f, o, c) => [f, o, c],
      d = (f, o, c) => {
        Object.defineProperty(f, o, {
          get: () => {
            const _ = c();
            return Object.defineProperty(f, o, {
              value: _,
              enumerable: !0,
              configurable: !0
            }), _
          },
          enumerable: !0,
          configurable: !0
        })
      };
    let s;
    const u = (f, o, c, _) => {
      s === void 0 && (s = oh());
      const h = _ ? 10 : 0,
        v = {};
      for (const [p, E] of Object.entries(s)) {
        const g = p === "ansi16" ? "ansi" : p;
        p === o ? v[g] = f(c, h) : typeof E == "object" && (v[g] = f(E[o], h))
      }
      return v
    };

    function l() {
      const f = new Map,
        o = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
      o.color.gray = o.color.blackBright, o.bgColor.bgGray = o.bgColor.bgBlackBright, o.color.grey = o.color.blackBright, o.bgColor.bgGrey = o.bgColor.bgBlackBright;
      for (const [c, _] of Object.entries(o)) {
        for (const [h, v] of Object.entries(_)) o[h] = {
          open: `\x1B[${v[0]}m`,
          close: `\x1B[${v[1]}m`
        }, _[h] = o[h], f.set(v[0], v[1]);
        Object.defineProperty(o, c, {
          value: _,
          enumerable: !1
        })
      }
      return Object.defineProperty(o, "codes", {
        value: f,
        enumerable: !1
      }), o.color.close = "\x1B[39m", o.bgColor.close = "\x1B[49m", d(o.color, "ansi", () => u(e, "ansi16", a, !1)), d(o.color, "ansi256", () => u(r, "ansi256", a, !1)), d(o.color, "ansi16m", () => u(i, "rgb", n, !1)), d(o.bgColor, "ansi", () => u(e, "ansi16", a, !0)), d(o.bgColor, "ansi256", () => u(r, "ansi256", a, !0)), d(o.bgColor, "ansi16m", () => u(i, "rgb", n, !0)), o
    }
    Object.defineProperty(t, "exports", {
      enumerable: !0,
      get: l
    })
  }(Gi)), Gi.exports
}
var dd, Z0;

function ch() {
  return Z0 || (Z0 = 1, dd = {
    stdout: !1,
    stderr: !1
  }), dd
}
var ud, K0;

function fh() {
  return K0 || (K0 = 1, ud = {
    stringReplaceAll: (r, i, a) => {
      let n = r.indexOf(i);
      if (n === -1) return r;
      const d = i.length;
      let s = 0,
        u = "";
      do u += r.substr(s, n - s) + i + a, s = n + d, n = r.indexOf(i, s); while (n !== -1);
      return u += r.substr(s), u
    },
    stringEncaseCRLFWithFirstIndex: (r, i, a, n) => {
      let d = 0,
        s = "";
      do {
        const u = r[n - 1] === "\r";
        s += r.substr(d, (u ? n - 1 : n) - d) + i + (u ? `\r
` : `
`) + a, d = n + 1, n = r.indexOf(`
`, d)
      } while (n !== -1);
      return s += r.substr(d), s
    }
  }), ud
}
var sd, j0;

function _h() {
  if (j0) return sd;
  j0 = 1;
  const t = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    e = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    r = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    i = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    a = new Map([
      ["n", `
`],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);

  function n(l) {
    const f = l[0] === "u",
      o = l[1] === "{";
    return f && !o && l.length === 5 || l[0] === "x" && l.length === 3 ? String.fromCharCode(parseInt(l.slice(1), 16)) : f && o ? String.fromCodePoint(parseInt(l.slice(2, -1), 16)) : a.get(l) || l
  }

  function d(l, f) {
    const o = [],
      c = f.trim().split(/\s*,\s*/g);
    let _;
    for (const h of c) {
      const v = Number(h);
      if (!Number.isNaN(v)) o.push(v);
      else if (_ = h.match(r)) o.push(_[2].replace(i, (p, E, g) => E ? n(E) : g));
      else throw new Error(`Invalid Chalk template style argument: ${h} (in style '${l}')`)
    }
    return o
  }

  function s(l) {
    e.lastIndex = 0;
    const f = [];
    let o;
    for (;
      (o = e.exec(l)) !== null;) {
      const c = o[1];
      if (o[2]) {
        const _ = d(c, o[2]);
        f.push([c].concat(_))
      } else f.push([c])
    }
    return f
  }

  function u(l, f) {
    const o = {};
    for (const _ of f)
      for (const h of _.styles) o[h[0]] = _.inverse ? null : h.slice(1);
    let c = l;
    for (const [_, h] of Object.entries(o))
      if (Array.isArray(h)) {
        if (!(_ in c)) throw new Error(`Unknown Chalk style: ${_}`);
        c = h.length > 0 ? c[_](...h) : c[_]
      } return c
  }
  return sd = (l, f) => {
    const o = [],
      c = [];
    let _ = [];
    if (f.replace(t, (h, v, p, E, g, S) => {
        if (v) _.push(n(v));
        else if (E) {
          const m = _.join("");
          _ = [], c.push(o.length === 0 ? m : u(l, o)(m)), o.push({
            inverse: p,
            styles: s(E)
          })
        } else if (g) {
          if (o.length === 0) throw new Error("Found extraneous } in Chalk template literal");
          c.push(u(l, o)(_.join(""))), _ = [], o.pop()
        } else _.push(S)
      }), c.push(_.join("")), o.length > 0) {
      const h = `Chalk template literal is missing ${o.length} closing bracket${o.length===1?"":"s"} (\`}\`)`;
      throw new Error(h)
    }
    return c.join("")
  }, sd
}
var od, Y0;

function ph() {
  if (Y0) return od;
  Y0 = 1;
  const t = lh(),
    {
      stdout: e,
      stderr: r
    } = ch(),
    {
      stringReplaceAll: i,
      stringEncaseCRLFWithFirstIndex: a
    } = fh(),
    {
      isArray: n
    } = Array,
    d = ["ansi", "ansi", "ansi256", "ansi16m"],
    s = Object.create(null),
    u = (m, I = {}) => {
      if (I.level && !(Number.isInteger(I.level) && I.level >= 0 && I.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
      const O = e ? e.level : 0;
      m.level = I.level === void 0 ? O : I.level
    };
  class l {
    constructor(I) {
      return f(I)
    }
  }
  const f = m => {
    const I = {};
    return u(I, m), I.template = (...O) => g(I.template, ...O), Object.setPrototypeOf(I, o.prototype), Object.setPrototypeOf(I.template, I), I.template.constructor = () => {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")
    }, I.template.Instance = l, I.template
  };

  function o(m) {
    return f(m)
  }
  for (const [m, I] of Object.entries(t)) s[m] = {
    get() {
      const O = v(this, h(I.open, I.close, this._styler), this._isEmpty);
      return Object.defineProperty(this, m, {
        value: O
      }), O
    }
  };
  s.visible = {
    get() {
      const m = v(this, this._styler, !0);
      return Object.defineProperty(this, "visible", {
        value: m
      }), m
    }
  };
  const c = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (const m of c) s[m] = {
    get() {
      const {
        level: I
      } = this;
      return function (...O) {
        const N = h(t.color[d[I]][m](...O), t.color.close, this._styler);
        return v(this, N, this._isEmpty)
      }
    }
  };
  for (const m of c) {
    const I = "bg" + m[0].toUpperCase() + m.slice(1);
    s[I] = {
      get() {
        const {
          level: O
        } = this;
        return function (...N) {
          const P = h(t.bgColor[d[O]][m](...N), t.bgColor.close, this._styler);
          return v(this, P, this._isEmpty)
        }
      }
    }
  }
  const _ = Object.defineProperties(() => {}, {
      ...s,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level
        },
        set(m) {
          this._generator.level = m
        }
      }
    }),
    h = (m, I, O) => {
      let N, P;
      return O === void 0 ? (N = m, P = I) : (N = O.openAll + m, P = I + O.closeAll), {
        open: m,
        close: I,
        openAll: N,
        closeAll: P,
        parent: O
      }
    },
    v = (m, I, O) => {
      const N = (...P) => n(P[0]) && n(P[0].raw) ? p(N, g(N, ...P)) : p(N, P.length === 1 ? "" + P[0] : P.join(" "));
      return Object.setPrototypeOf(N, _), N._generator = m, N._styler = I, N._isEmpty = O, N
    },
    p = (m, I) => {
      if (m.level <= 0 || !I) return m._isEmpty ? "" : I;
      let O = m._styler;
      if (O === void 0) return I;
      const {
        openAll: N,
        closeAll: P
      } = O;
      if (I.indexOf("\x1B") !== -1)
        for (; O !== void 0;) I = i(I, O.close, O.open), O = O.parent;
      const q = I.indexOf(`
`);
      return q !== -1 && (I = a(I, P, N, q)), N + I + P
    };
  let E;
  const g = (m, ...I) => {
    const [O] = I;
    if (!n(O) || !n(O.raw)) return I.join(" ");
    const N = I.slice(1),
      P = [O.raw[0]];
    for (let q = 1; q < O.length; q++) P.push(String(N[q - 1]).replace(/[{}\\]/g, "\\$&"), String(O.raw[q]));
    return E === void 0 && (E = _h()), E(m, P.join(""))
  };
  Object.defineProperties(o.prototype, s);
  const S = o();
  return S.supportsColor = e, S.stderr = o({
    level: r ? r.level : 0
  }), S.stderr.supportsColor = r, od = S, od
}
var z0;

function Hd() {
  if (z0) return Xt;
  z0 = 1;
  var t = Xt.__importDefault || function (i) {
    return i && i.__esModule ? i : {
      default: i
    }
  };
  Object.defineProperty(Xt, "__esModule", {
    value: !0
  }), Xt.LogService = void 0;
  var e = t(ph()),
    r = ji();
  return Xt.LogService = function () {
    function i() {}
    return i.getColoredAction = function (a) {
      return a == r.ELogActions.WARNING ? e.default.yellow(a) : e.default.green(a)
    }, i.log = function (a, n) {
      if (this.enabled) {
        var d = e.default.blue("Rettiwt-API"),
          s = new Date().toISOString(),
          u = i.getColoredAction(a),
          l = JSON.stringify(n),
          f = "[".concat(d, "] [").concat(s, "] [").concat(u, "] ").concat(l);
        console.log(f)
      }
    }, i.enabled = !1, i
  }(), Xt
}
var J0;

function Zr() {
  if (J0) return He;
  J0 = 1;
  var t = He.__assign || function () {
      return t = Object.assign || function (g) {
        for (var S, m = 1, I = arguments.length; m < I; m++) {
          S = arguments[m];
          for (var O in S) Object.prototype.hasOwnProperty.call(S, O) && (g[O] = S[O])
        }
        return g
      }, t.apply(this, arguments)
    },
    e = He.__awaiter || function (g, S, m, I) {
      function O(N) {
        return N instanceof m ? N : new m(function (P) {
          P(N)
        })
      }
      return new(m || (m = Promise))(function (N, P) {
        function q(ie) {
          try {
            K(I.next(ie))
          } catch (oe) {
            P(oe)
          }
        }

        function V(ie) {
          try {
            K(I.throw(ie))
          } catch (oe) {
            P(oe)
          }
        }

        function K(ie) {
          ie.done ? N(ie.value) : O(ie.value).then(q, V)
        }
        K((I = I.apply(g, S || [])).next())
      })
    },
    r = He.__generator || function (g, S) {
      var m = {
          label: 0,
          sent: function () {
            if (N[0] & 1) throw N[1];
            return N[1]
          },
          trys: [],
          ops: []
        },
        I, O, N, P;
      return P = {
        next: q(0),
        throw: q(1),
        return: q(2)
      }, typeof Symbol == "function" && (P[Symbol.iterator] = function () {
        return this
      }), P;

      function q(K) {
        return function (ie) {
          return V([K, ie])
        }
      }

      function V(K) {
        if (I) throw new TypeError("Generator is already executing.");
        for (; P && (P = 0, K[0] && (m = 0)), m;) try {
          if (I = 1, O && (N = K[0] & 2 ? O.return : K[0] ? O.throw || ((N = O.return) && N.call(O), 0) : O.next) && !(N = N.call(O, K[1])).done) return N;
          switch (O = 0, N && (K = [K[0] & 2, N.value]), K[0]) {
            case 0:
            case 1:
              N = K;
              break;
            case 4:
              return m.label++, {
                value: K[1],
                done: !1
              };
            case 5:
              m.label++, O = K[1], K = [0];
              continue;
            case 7:
              K = m.ops.pop(), m.trys.pop();
              continue;
            default:
              if (N = m.trys, !(N = N.length > 0 && N[N.length - 1]) && (K[0] === 6 || K[0] === 2)) {
                m = 0;
                continue
              }
              if (K[0] === 3 && (!N || K[1] > N[0] && K[1] < N[3])) {
                m.label = K[1];
                break
              }
              if (K[0] === 6 && m.label < N[1]) {
                m.label = N[1], N = K;
                break
              }
              if (N && m.label < N[2]) {
                m.label = N[2], m.ops.push(K);
                break
              }
              N[2] && m.ops.pop(), m.trys.pop();
              continue
          }
          K = S.call(g, m)
        } catch (ie) {
          K = [6, ie], O = 0
        } finally {
          I = N = 0
        }
        if (K[0] & 5) throw K[1];
        return {
          value: K[0] ? K[1] : void 0,
          done: !0
        }
      }
    },
    i = He.__importDefault || function (g) {
      return g && g.__esModule ? g : {
        default: g
      }
    };
  Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.FetcherService = void 0;
  var a = i(Ie),
    n = i(Zi()),
    d = hl(),
    s = Sl(),
    u = g3(),
    l = V3(),
    f = Ki(),
    o = ji(),
    c = B9(),
    _ = q9(),
    h = dh(),
    v = Hd(),
    p = Vd(),
    E = function () {
      function g(S) {
        var m, I, O, N;
        v.LogService.enabled = (m = S == null ? void 0 : S.logging) !== null && m !== void 0 ? m : !1, this._apiKey = S == null ? void 0 : S.apiKey, this._guestKey = S == null ? void 0 : S.guestKey, this.userId = S != null && S.apiKey ? p.AuthService.getUserId(S.apiKey) : void 0, this.authProxyUrl = (I = S == null ? void 0 : S.authProxyUrl) !== null && I !== void 0 ? I : S == null ? void 0 : S.proxyUrl, this._proxyUrl = S == null ? void 0 : S.proxyUrl, this._timeout = (O = S == null ? void 0 : S.timeout) !== null && O !== void 0 ? O : 0, this._errorHandler = (N = S == null ? void 0 : S.errorHandler) !== null && N !== void 0 ? N : new h.ErrorService
      }
      return g.prototype.checkAuthorization = function (S) {
        if (v.LogService.log(o.ELogActions.AUTHORIZATION, {
            authenticated: this.userId != null
          }), !u.allowGuestAuthentication.includes(S) && this.userId == null) throw new Error(f.EApiErrors.RESOURCE_NOT_ALLOWED)
      }, g.prototype.getCredential = function () {
        return e(this, void 0, void 0, function () {
          return r(this, function (S) {
            switch (S.label) {
              case 0:
                return this._apiKey ? (v.LogService.log(o.ELogActions.GET, {
                  target: "USER_CREDENTIAL"
                }), [2, new s.AuthCredential(p.AuthService.decodeCookie(this._apiKey).split(";"))]) : [3, 1];
              case 1:
                return this._guestKey ? (v.LogService.log(o.ELogActions.GET, {
                  target: "GUEST_CREDENTIAL"
                }), [2, new s.AuthCredential(void 0, this._guestKey)]) : [3, 2];
              case 2:
                return v.LogService.log(o.ELogActions.GET, {
                  target: "NEW_GUEST_CREDENTIAL"
                }), [4, new s.Auth({
                  proxyUrl: this.authProxyUrl
                }).getGuestCredential()];
              case 3:
                return [2, S.sent()]
            }
          })
        })
      }, g.prototype.getHttpsAgent = function (S) {
        return S ? (v.LogService.log(o.ELogActions.GET, {
          target: "HTTPS_PROXY_AGENT"
        }), new d.HttpsProxyAgent(S)) : (v.LogService.log(o.ELogActions.GET, {
          target: "HTTPS_AGENT"
        }), new a.default.Agent)
      }, g.prototype.validateArgs = function (S, m) {
        if (u.fetchResources.includes(S)) return v.LogService.log(o.ELogActions.VALIDATE, {
          target: "FETCH_ARGS"
        }), new c.FetchArgs(S, m);
        if (u.postResources.includes(S)) return v.LogService.log(o.ELogActions.VALIDATE, {
          target: "POST_ARGS"
        }), new _.PostArgs(S, m)
      }, g.prototype.request = function (S, m) {
        return e(this, void 0, void 0, function () {
          var I, O, N, P;
          return r(this, function (q) {
            switch (q.label) {
              case 0:
                return v.LogService.log(o.ELogActions.REQUEST, {
                  resource: S,
                  args: m
                }), this.checkAuthorization(S), m = this.validateArgs(S, m), I = this.getHttpsAgent(this._proxyUrl), [4, this.getCredential()];
              case 1:
                O = q.sent(), N = l.requests[S](m), N.headers = t(t({}, N.headers), O.toHeader()), N.httpAgent = I, N.httpsAgent = I, N.timeout = this._timeout, q.label = 2;
              case 2:
                return q.trys.push([2, 4, , 5]), [4, (0, n.default)(N)];
              case 3:
                return [2, q.sent().data];
              case 4:
                throw P = q.sent(), this._errorHandler.handle(P), P;
              case 5:
                return [2]
            }
          })
        })
      }, g
    }();
  return He.FetcherService = E, He
}
var X0;

function Vd() {
  if (X0) return it;
  X0 = 1;
  var t = it.__extends || function () {
      var s = function (u, l) {
        return s = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (f, o) {
          f.__proto__ = o
        } || function (f, o) {
          for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (f[c] = o[c])
        }, s(u, l)
      };
      return function (u, l) {
        if (typeof l != "function" && l !== null) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        s(u, l);

        function f() {
          this.constructor = u
        }
        u.prototype = l === null ? Object.create(l) : (f.prototype = l.prototype, new f)
      }
    }(),
    e = it.__awaiter || function (s, u, l, f) {
      function o(c) {
        return c instanceof l ? c : new l(function (_) {
          _(c)
        })
      }
      return new(l || (l = Promise))(function (c, _) {
        function h(E) {
          try {
            p(f.next(E))
          } catch (g) {
            _(g)
          }
        }

        function v(E) {
          try {
            p(f.throw(E))
          } catch (g) {
            _(g)
          }
        }

        function p(E) {
          E.done ? c(E.value) : o(E.value).then(h, v)
        }
        p((f = f.apply(s, u || [])).next())
      })
    },
    r = it.__generator || function (s, u) {
      var l = {
          label: 0,
          sent: function () {
            if (c[0] & 1) throw c[1];
            return c[1]
          },
          trys: [],
          ops: []
        },
        f, o, c, _;
      return _ = {
        next: h(0),
        throw: h(1),
        return: h(2)
      }, typeof Symbol == "function" && (_[Symbol.iterator] = function () {
        return this
      }), _;

      function h(p) {
        return function (E) {
          return v([p, E])
        }
      }

      function v(p) {
        if (f) throw new TypeError("Generator is already executing.");
        for (; _ && (_ = 0, p[0] && (l = 0)), l;) try {
          if (f = 1, o && (c = p[0] & 2 ? o.return : p[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, p[1])).done) return c;
          switch (o = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
            case 0:
            case 1:
              c = p;
              break;
            case 4:
              return l.label++, {
                value: p[1],
                done: !1
              };
            case 5:
              l.label++, o = p[1], p = [0];
              continue;
            case 7:
              p = l.ops.pop(), l.trys.pop();
              continue;
            default:
              if (c = l.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                l = 0;
                continue
              }
              if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
                l.label = p[1];
                break
              }
              if (p[0] === 6 && l.label < c[1]) {
                l.label = c[1], c = p;
                break
              }
              if (c && l.label < c[2]) {
                l.label = c[2], l.ops.push(p);
                break
              }
              c[2] && l.ops.pop(), l.trys.pop();
              continue
          }
          p = u.call(s, l)
        } catch (E) {
          p = [6, E], o = 0
        } finally {
          f = c = 0
        }
        if (p[0] & 5) throw p[1];
        return {
          value: p[0] ? p[1] : void 0,
          done: !0
        }
      }
    };
  Object.defineProperty(it, "__esModule", {
    value: !0
  }), it.AuthService = void 0;
  var i = Sl(),
    a = Ki(),
    n = Zr(),
    d = function (s) {
      t(u, s);

      function u(l) {
        return s.call(this, l) || this
      }
      return u.decodeCookie = function (l) {
        var f = Buffer.from(l, "base64").toString("ascii");
        return f
      }, u.encodeCookie = function (l) {
        var f = Buffer.from(l).toString("base64");
        return f
      }, u.getUserId = function (l) {
        var f = u.decodeCookie(l),
          o = f.match(new RegExp('((?<=twid="u=)(\\d+)(?="))|((?<=twid=u%3D)(\\d+)(?=;))'));
        if (o) return o[0];
        throw new Error(a.EApiErrors.BAD_AUTHENTICATION)
      }, u.prototype.guest = function () {
        var l;
        return e(this, void 0, void 0, function () {
          var f;
          return r(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, new i.Auth().getGuestCredential()];
              case 1:
                return f = (l = o.sent().guestToken) !== null && l !== void 0 ? l : "", [2, f]
            }
          })
        })
      }, u.prototype.login = function (l, f, o) {
        var c;
        return e(this, void 0, void 0, function () {
          var _;
          return r(this, function (h) {
            switch (h.label) {
              case 0:
                return [4, new i.Auth({
                  proxyUrl: this.authProxyUrl
                }).getUserCredential({
                  email: l,
                  userName: f,
                  password: o
                })];
              case 1:
                return _ = (c = h.sent().toHeader().cookie) !== null && c !== void 0 ? c : "", _ = u.encodeCookie(_), [2, _]
            }
          })
        })
      }, u
    }(n.FetcherService);
  return it.AuthService = d, it
}
var dt = {},
  Pr = {},
  Ur = {},
  Q0;

function Z9() {
  if (Q0) return Ur;
  Q0 = 1, Object.defineProperty(Ur, "__esModule", {
    value: !0
  }), Ur.EBaseType = void 0;
  var t;
  return function (e) {
    e.NOTIFICATION = "Notification", e.TWEET = "Tweet", e.USER = "User"
  }(t || (Ur.EBaseType = t = {})), Ur
}
var gt = {},
  mt = {},
  el;

function K9() {
  if (el) return mt;
  el = 1, Object.defineProperty(mt, "__esModule", {
    value: !0
  }), mt.Notification = mt.ENotificationType = void 0;
  var t = Wr(),
    e = Vr(),
    r;
  (function (a) {
    a.RECOMMENDATION = "RECOMMENDATION", a.INFORMATION = "INFORMATION", a.LIVE = "LIVE", a.ALERT = "ALERT", a.UNDEFINED = "UNDEFINED"
  })(r || (mt.ENotificationType = r = {}));
  var i = function () {
    function a(n) {
      var d, s, u, l, f = (0, e.findKeyByValue)(t.ENotificationType, n.icon.id);
      this.from = !((s = (d = n.template) === null || d === void 0 ? void 0 : d.aggregateUserActionsV1) === null || s === void 0) && s.fromUsers ? n.template.aggregateUserActionsV1.fromUsers.map(function (o) {
        return o.user.id
      }) : [], this.id = n.id, this.message = n.message.text, this.receivedAt = new Date(Number(n.timestampMs)), this.target = !((l = (u = n.template) === null || u === void 0 ? void 0 : u.aggregateUserActionsV1) === null || l === void 0) && l.targetObjects ? n.template.aggregateUserActionsV1.targetObjects.map(function (o) {
        return o.tweet.id
      }) : [], this.type = f ? r[f] : r.UNDEFINED
    }
    return a.list = function (n) {
      var d = [];
      if (n.globalObjects.notifications)
        for (var s = 0, u = Object.entries(n.globalObjects.notifications); s < u.length; s++) {
          var l = u[s],
            f = l[1];
          d.push(new a(f))
        }
      return d
    }, a
  }();
  return mt.Notification = i, mt
}
var je = {},
  xr = {},
  tl;

function ea() {
  if (tl) return xr;
  tl = 1, Object.defineProperty(xr, "__esModule", {
    value: !0
  }), xr.User = void 0;
  var t = ji(),
    e = Vr(),
    r = Hd(),
    i = function () {
      function a(n) {
        this.id = n.rest_id, this.userName = n.legacy.screen_name, this.fullName = n.legacy.name, this.createdAt = n.legacy.created_at, this.description = n.legacy.description.length ? n.legacy.description : void 0, this.isVerified = n.is_blue_verified, this.likeCount = n.legacy.favourites_count, this.followersCount = n.legacy.followers_count, this.followingsCount = n.legacy.friends_count, this.statusesCount = n.legacy.statuses_count, this.location = n.legacy.location.length ? n.legacy.location : void 0, this.pinnedTweet = n.legacy.pinned_tweet_ids_str[0], this.profileBanner = n.legacy.profile_banner_url, this.profileImage = n.legacy.profile_image_url_https
      }
      return a.list = function (n) {
        for (var d, s, u = [], l = (0, e.findByFilter)(n, "__typename", "TimelineUser"), f = 0, o = l; f < o.length; f++) {
          var c = o[f];
          !((s = (d = c.user_results) === null || d === void 0 ? void 0 : d.result) === null || s === void 0) && s.legacy ? (r.LogService.log(t.ELogActions.DESERIALIZE, {
            id: c.user_results.result.rest_id
          }), u.push(new a(c.user_results.result))) : r.LogService.log(t.ELogActions.WARNING, {
            action: t.ELogActions.DESERIALIZE,
            message: "User not found, skipping"
          })
        }
        return u
      }, a.single = function (n) {
        for (var d = [], s = (0, e.findByFilter)(n, "__typename", "User"), u = 0, l = s; u < l.length; u++) {
          var f = l[u];
          f.legacy && f.legacy.created_at ? (r.LogService.log(t.ELogActions.DESERIALIZE, {
            id: f.rest_id
          }), d.push(new a(f))) : r.LogService.log(t.ELogActions.WARNING, {
            action: t.ELogActions.DESERIALIZE,
            message: "User not found, skipping"
          })
        }
        return d.length ? d[0] : void 0
      }, a
    }();
  return xr.User = i, xr
}
var rl;

function Zd() {
  if (rl) return je;
  rl = 1, Object.defineProperty(je, "__esModule", {
    value: !0
  }), je.TweetMedia = je.TweetEntities = je.Tweet = void 0;
  var t = Wr(),
    e = ji(),
    r = Vr(),
    i = Hd(),
    a = ea(),
    n = function () {
      function u(l) {
        var f, o;
        this.id = l.rest_id, this.createdAt = l.legacy.created_at, this.tweetBy = new a.User(l.core.user_results.result), this.entities = new d(l.legacy.entities), this.media = (o = (f = l.legacy.extended_entities) === null || f === void 0 ? void 0 : f.media) === null || o === void 0 ? void 0 : o.map(function (c) {
          return new s(c)
        }), this.quoted = this.getQuotedTweet(l), this.fullText = l.note_tweet ? l.note_tweet.note_tweet_results.result.text : l.legacy.full_text, this.replyTo = l.legacy.in_reply_to_status_id_str, this.lang = l.legacy.lang, this.quoteCount = l.legacy.quote_count, this.replyCount = l.legacy.reply_count, this.retweetCount = l.legacy.retweet_count, this.likeCount = l.legacy.favorite_count, this.viewCount = l.views.count ? parseInt(l.views.count) : 0, this.bookmarkCount = l.legacy.bookmark_count, this.retweetedTweet = this.getRetweetedTweet(l)
      }
      return u.prototype.getQuotedTweet = function (l) {
        var f, o, c, _, h, v;
        return l.quoted_status_result && ((o = (f = l.quoted_status_result) === null || f === void 0 ? void 0 : f.result) === null || o === void 0 ? void 0 : o.__typename) == "TweetWithVisibilityResults" && (!((_ = (c = l.quoted_status_result.result) === null || c === void 0 ? void 0 : c.tweet) === null || _ === void 0) && _.legacy) ? new u(l.quoted_status_result.result.tweet) : !((v = (h = l.quoted_status_result) === null || h === void 0 ? void 0 : h.result) === null || v === void 0) && v.rest_id ? new u(l.quoted_status_result.result) : void 0
      }, u.prototype.getRetweetedTweet = function (l) {
        var f, o, c, _, h, v, p, E, g, S, m;
        return !((f = l.legacy) === null || f === void 0) && f.retweeted_status_result && ((_ = (c = (o = l.legacy) === null || o === void 0 ? void 0 : o.retweeted_status_result) === null || c === void 0 ? void 0 : c.result) === null || _ === void 0 ? void 0 : _.__typename) == "TweetWithVisibilityResults" && (!((E = (p = (v = (h = l.legacy) === null || h === void 0 ? void 0 : h.retweeted_status_result) === null || v === void 0 ? void 0 : v.result) === null || p === void 0 ? void 0 : p.tweet) === null || E === void 0) && E.legacy) ? new u(l.legacy.retweeted_status_result.result.tweet) : !((m = (S = (g = l.legacy) === null || g === void 0 ? void 0 : g.retweeted_status_result) === null || S === void 0 ? void 0 : S.result) === null || m === void 0) && m.rest_id ? new u(l.legacy.retweeted_status_result.result) : void 0
      }, u.list = function (l) {
        for (var f, o, c, _, h, v, p, E, g = [], S = (0, r.findByFilter)(l, "__typename", "TimelineTweet"), m = 0, I = S; m < I.length; m++) {
          var O = I[m];
          !((f = O.tweet_results) === null || f === void 0) && f.result && ((c = (o = O.tweet_results) === null || o === void 0 ? void 0 : o.result) === null || c === void 0 ? void 0 : c.__typename) == "TweetWithVisibilityResults" && (!((v = (h = (_ = O.tweet_results) === null || _ === void 0 ? void 0 : _.result) === null || h === void 0 ? void 0 : h.tweet) === null || v === void 0) && v.legacy) ? g.push(new u(O.tweet_results.result.tweet)) : !((E = (p = O.tweet_results) === null || p === void 0 ? void 0 : p.result) === null || E === void 0) && E.legacy ? (i.LogService.log(e.ELogActions.DESERIALIZE, {
            id: O.tweet_results.result.rest_id
          }), g.push(new u(O.tweet_results.result))) : i.LogService.log(e.ELogActions.WARNING, {
            action: e.ELogActions.DESERIALIZE,
            message: "Tweet not found, skipping"
          })
        }
        return g
      }, u.single = function (l, f) {
        for (var o = [], c = (0, r.findByFilter)(l, "rest_id", f), _ = 0, h = c; _ < h.length; _++) {
          var v = h[_];
          v.legacy ? (i.LogService.log(e.ELogActions.DESERIALIZE, {
            id: v.rest_id
          }), o.push(new u(v))) : i.LogService.log(e.ELogActions.WARNING, {
            action: e.ELogActions.DESERIALIZE,
            message: "Tweet not found, skipping"
          })
        }
        return o.length ? o[0] : void 0
      }, u
    }();
  je.Tweet = n;
  var d = function () {
    function u(l) {
      if (this.hashtags = [], this.mentionedUsers = [], this.urls = [], l.user_mentions)
        for (var f = 0, o = l.user_mentions; f < o.length; f++) {
          var c = o[f];
          this.mentionedUsers.push(c.screen_name)
        }
      if (l.urls)
        for (var _ = 0, h = l.urls; _ < h.length; _++) {
          var v = h[_];
          this.urls.push(v.expanded_url)
        }
      if (l.hashtags)
        for (var p = 0, E = l.hashtags; p < E.length; p++) {
          var g = E[p];
          this.hashtags.push(g.text)
        }
    }
    return u
  }();
  je.TweetEntities = d;
  var s = function () {
    function u(l) {
      var f = this,
        o, c;
      if (this.url = "", this.type = l.type, l.type == t.EMediaType.PHOTO) this.url = l.media_url_https;
      else if (l.type == t.EMediaType.GIF) this.url = (o = l.video_info) === null || o === void 0 ? void 0 : o.variants[0].url;
      else {
        this.thumbnailUrl = l.media_url_https;
        var _ = 0;
        (c = l.video_info) === null || c === void 0 || c.variants.forEach(function (h) {
          h.bitrate > _ && (_ = h.bitrate, f.url = h.url)
        })
      }
    }
    return u
  }();
  return je.TweetMedia = s, je
}
var nl;

function j9() {
  if (nl) return gt;
  nl = 1, Object.defineProperty(gt, "__esModule", {
    value: !0
  }), gt.Cursor = gt.CursoredData = void 0;
  var t = Z9(),
    e = Vr(),
    r = K9(),
    i = Zd(),
    a = ea(),
    n = function () {
      function s(u, l) {
        var f, o, c, _, h, v;
        this.list = [], this.next = new d(""), l == t.EBaseType.TWEET ? (this.list = i.Tweet.list(u), this.next = new d((o = (f = (0, e.findByFilter)(u, "cursorType", "Bottom")[0]) === null || f === void 0 ? void 0 : f.value) !== null && o !== void 0 ? o : "")) : l == t.EBaseType.USER ? (this.list = a.User.list(u), this.next = new d((_ = (c = (0, e.findByFilter)(u, "cursorType", "Bottom")[0]) === null || c === void 0 ? void 0 : c.value) !== null && _ !== void 0 ? _ : "")) : l == t.EBaseType.NOTIFICATION && (this.list = r.Notification.list(u), this.next = new d((v = (h = (0, e.findByFilter)(u, "cursorType", "Top")[0]) === null || h === void 0 ? void 0 : h.value) !== null && v !== void 0 ? v : ""))
      }
      return s
    }();
  gt.CursoredData = n;
  var d = function () {
    function s(u) {
      this.value = u
    }
    return s
  }();
  return gt.Cursor = d, gt
}
var il;

function Kd() {
  if (il) return Pr;
  il = 1, Object.defineProperty(Pr, "__esModule", {
    value: !0
  }), Pr.extractors = void 0;
  var t = Z9(),
    e = j9(),
    r = Zd(),
    i = ea();
  return Pr.extractors = {
    LIST_MEMBERS: function (a) {
      return new e.CursoredData(a, t.EBaseType.USER)
    },
    LIST_TWEETS: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    MEDIA_UPLOAD_APPEND: function () {},
    MEDIA_UPLOAD_FINALIZE: function () {},
    MEDIA_UPLOAD_INITIALIZE: function (a) {
      var n;
      return (n = a.media_id_string) !== null && n !== void 0 ? n : void 0
    },
    TWEET_DETAILS: function (a, n) {
      return r.Tweet.single(a, n)
    },
    TWEET_DETAILS_ALT: function (a, n) {
      return r.Tweet.single(a, n)
    },
    TWEET_LIKE: function (a) {
      var n;
      return !!(!((n = a == null ? void 0 : a.data) === null || n === void 0) && n.favorite_tweet)
    },
    TWEET_POST: function (a) {
      var n, d, s, u, l;
      return (l = (u = (s = (d = (n = a == null ? void 0 : a.data) === null || n === void 0 ? void 0 : n.create_tweet) === null || d === void 0 ? void 0 : d.tweet_results) === null || s === void 0 ? void 0 : s.result) === null || u === void 0 ? void 0 : u.rest_id) !== null && l !== void 0 ? l : void 0
    },
    TWEET_RETWEET: function (a) {
      var n;
      return !!(!((n = a == null ? void 0 : a.data) === null || n === void 0) && n.create_retweet)
    },
    TWEET_RETWEETERS: function (a) {
      return new e.CursoredData(a, t.EBaseType.USER)
    },
    TWEET_SCHEDULE: function (a) {
      var n, d, s;
      return (s = (d = (n = a == null ? void 0 : a.data) === null || n === void 0 ? void 0 : n.tweet) === null || d === void 0 ? void 0 : d.rest_id) !== null && s !== void 0 ? s : void 0
    },
    TWEET_SEARCH: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    TWEET_UNLIKE: function (a) {
      var n;
      return !!(!((n = a == null ? void 0 : a.data) === null || n === void 0) && n.unfavorite_tweet)
    },
    TWEET_UNPOST: function (a) {
      var n;
      return !!(!((n = a == null ? void 0 : a.data) === null || n === void 0) && n.delete_tweet)
    },
    TWEET_UNRETWEET: function (a) {
      var n, d, s;
      return !!(!((s = (d = (n = a == null ? void 0 : a.data) === null || n === void 0 ? void 0 : n.unretweet) === null || d === void 0 ? void 0 : d.source_tweet_results) === null || s === void 0) && s.result)
    },
    TWEET_UNSCHEDULE: function (a) {
      var n;
      return ((n = a == null ? void 0 : a.data) === null || n === void 0 ? void 0 : n.scheduledtweet_delete) == "Done"
    },
    USER_BOOKMARKS: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    USER_DETAILS_BY_USERNAME: function (a) {
      return i.User.single(a)
    },
    USER_DETAILS_BY_ID: function (a) {
      return i.User.single(a)
    },
    USER_FEED_FOLLOWED: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    USER_FEED_RECOMMENDED: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    USER_FOLLOW: function (a) {
      return !!(a != null && a.id)
    },
    USER_FOLLOWING: function (a) {
      return new e.CursoredData(a, t.EBaseType.USER)
    },
    USER_FOLLOWERS: function (a) {
      return new e.CursoredData(a, t.EBaseType.USER)
    },
    USER_HIGHLIGHTS: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    USER_LIKES: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    USER_MEDIA: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    USER_NOTIFICATIONS: function (a) {
      return new e.CursoredData(a, t.EBaseType.NOTIFICATION)
    },
    USER_SUBSCRIPTIONS: function (a) {
      return new e.CursoredData(a, t.EBaseType.USER)
    },
    USER_TIMELINE: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    USER_TIMELINE_AND_REPLIES: function (a) {
      return new e.CursoredData(a, t.EBaseType.TWEET)
    },
    USER_UNFOLLOW: function (a) {
      return !!(a != null && a.id)
    }
  }, Pr
}
var al;

function hh() {
  if (al) return dt;
  al = 1;
  var t = dt.__extends || function () {
      var s = function (u, l) {
        return s = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (f, o) {
          f.__proto__ = o
        } || function (f, o) {
          for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (f[c] = o[c])
        }, s(u, l)
      };
      return function (u, l) {
        if (typeof l != "function" && l !== null) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        s(u, l);

        function f() {
          this.constructor = u
        }
        u.prototype = l === null ? Object.create(l) : (f.prototype = l.prototype, new f)
      }
    }(),
    e = dt.__awaiter || function (s, u, l, f) {
      function o(c) {
        return c instanceof l ? c : new l(function (_) {
          _(c)
        })
      }
      return new(l || (l = Promise))(function (c, _) {
        function h(E) {
          try {
            p(f.next(E))
          } catch (g) {
            _(g)
          }
        }

        function v(E) {
          try {
            p(f.throw(E))
          } catch (g) {
            _(g)
          }
        }

        function p(E) {
          E.done ? c(E.value) : o(E.value).then(h, v)
        }
        p((f = f.apply(s, u || [])).next())
      })
    },
    r = dt.__generator || function (s, u) {
      var l = {
          label: 0,
          sent: function () {
            if (c[0] & 1) throw c[1];
            return c[1]
          },
          trys: [],
          ops: []
        },
        f, o, c, _;
      return _ = {
        next: h(0),
        throw: h(1),
        return: h(2)
      }, typeof Symbol == "function" && (_[Symbol.iterator] = function () {
        return this
      }), _;

      function h(p) {
        return function (E) {
          return v([p, E])
        }
      }

      function v(p) {
        if (f) throw new TypeError("Generator is already executing.");
        for (; _ && (_ = 0, p[0] && (l = 0)), l;) try {
          if (f = 1, o && (c = p[0] & 2 ? o.return : p[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, p[1])).done) return c;
          switch (o = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
            case 0:
            case 1:
              c = p;
              break;
            case 4:
              return l.label++, {
                value: p[1],
                done: !1
              };
            case 5:
              l.label++, o = p[1], p = [0];
              continue;
            case 7:
              p = l.ops.pop(), l.trys.pop();
              continue;
            default:
              if (c = l.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                l = 0;
                continue
              }
              if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
                l.label = p[1];
                break
              }
              if (p[0] === 6 && l.label < c[1]) {
                l.label = c[1], c = p;
                break
              }
              if (c && l.label < c[2]) {
                l.label = c[2], l.ops.push(p);
                break
              }
              c[2] && l.ops.pop(), l.trys.pop();
              continue
          }
          p = u.call(s, l)
        } catch (E) {
          p = [6, E], o = 0
        } finally {
          f = c = 0
        }
        if (p[0] & 5) throw p[1];
        return {
          value: p[0] ? p[1] : void 0,
          done: !0
        }
      }
    };
  Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.ListService = void 0;
  var i = Kd(),
    a = Tt(),
    n = Zr(),
    d = function (s) {
      t(u, s);

      function u(l) {
        return s.call(this, l) || this
      }
      return u.prototype.members = function (l, f, o) {
        return e(this, void 0, void 0, function () {
          var c, _, h;
          return r(this, function (v) {
            switch (v.label) {
              case 0:
                return c = a.EResourceType.LIST_MEMBERS, [4, this.request(c, {
                  id: l,
                  count: f,
                  cursor: o
                })];
              case 1:
                return _ = v.sent(), h = i.extractors[c](_), [2, h]
            }
          })
        })
      }, u.prototype.tweets = function (l, f, o) {
        return e(this, void 0, void 0, function () {
          var c, _, h;
          return r(this, function (v) {
            switch (v.label) {
              case 0:
                return c = a.EResourceType.LIST_TWEETS, [4, this.request(c, {
                  id: l,
                  count: f,
                  cursor: o
                })];
              case 1:
                return _ = v.sent(), h = i.extractors[c](_), h.list.sort(function (p, E) {
                  return new Date(E.createdAt).valueOf() - new Date(p.createdAt).valueOf()
                }), [2, h]
            }
          })
        })
      }, u
    }(n.FetcherService);
  return dt.ListService = d, dt
}
var Ce = {},
  dl;

function Y9() {
  if (dl) return Ce;
  dl = 1;
  var t = Ce.__extends || function () {
      var o = function (c, _) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (h, v) {
          h.__proto__ = v
        } || function (h, v) {
          for (var p in v) Object.prototype.hasOwnProperty.call(v, p) && (h[p] = v[p])
        }, o(c, _)
      };
      return function (c, _) {
        if (typeof _ != "function" && _ !== null) throw new TypeError("Class extends value " + String(_) + " is not a constructor or null");
        o(c, _);

        function h() {
          this.constructor = c
        }
        c.prototype = _ === null ? Object.create(_) : (h.prototype = _.prototype, new h)
      }
    }(),
    e = Ce.__assign || function () {
      return e = Object.assign || function (o) {
        for (var c, _ = 1, h = arguments.length; _ < h; _++) {
          c = arguments[_];
          for (var v in c) Object.prototype.hasOwnProperty.call(c, v) && (o[v] = c[v])
        }
        return o
      }, e.apply(this, arguments)
    },
    r = Ce.__awaiter || function (o, c, _, h) {
      function v(p) {
        return p instanceof _ ? p : new _(function (E) {
          E(p)
        })
      }
      return new(_ || (_ = Promise))(function (p, E) {
        function g(I) {
          try {
            m(h.next(I))
          } catch (O) {
            E(O)
          }
        }

        function S(I) {
          try {
            m(h.throw(I))
          } catch (O) {
            E(O)
          }
        }

        function m(I) {
          I.done ? p(I.value) : v(I.value).then(g, S)
        }
        m((h = h.apply(o, c || [])).next())
      })
    },
    i = Ce.__generator || function (o, c) {
      var _ = {
          label: 0,
          sent: function () {
            if (p[0] & 1) throw p[1];
            return p[1]
          },
          trys: [],
          ops: []
        },
        h, v, p, E;
      return E = {
        next: g(0),
        throw: g(1),
        return: g(2)
      }, typeof Symbol == "function" && (E[Symbol.iterator] = function () {
        return this
      }), E;

      function g(m) {
        return function (I) {
          return S([m, I])
        }
      }

      function S(m) {
        if (h) throw new TypeError("Generator is already executing.");
        for (; E && (E = 0, m[0] && (_ = 0)), _;) try {
          if (h = 1, v && (p = m[0] & 2 ? v.return : m[0] ? v.throw || ((p = v.return) && p.call(v), 0) : v.next) && !(p = p.call(v, m[1])).done) return p;
          switch (v = 0, p && (m = [m[0] & 2, p.value]), m[0]) {
            case 0:
            case 1:
              p = m;
              break;
            case 4:
              return _.label++, {
                value: m[1],
                done: !1
              };
            case 5:
              _.label++, v = m[1], m = [0];
              continue;
            case 7:
              m = _.ops.pop(), _.trys.pop();
              continue;
            default:
              if (p = _.trys, !(p = p.length > 0 && p[p.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                _ = 0;
                continue
              }
              if (m[0] === 3 && (!p || m[1] > p[0] && m[1] < p[3])) {
                _.label = m[1];
                break
              }
              if (m[0] === 6 && _.label < p[1]) {
                _.label = p[1], p = m;
                break
              }
              if (p && _.label < p[2]) {
                _.label = p[2], _.ops.push(m);
                break
              }
              p[2] && _.ops.pop(), _.trys.pop();
              continue
          }
          m = c.call(o, _)
        } catch (I) {
          m = [6, I], v = 0
        } finally {
          h = p = 0
        }
        if (m[0] & 5) throw m[1];
        return {
          value: m[0] ? m[1] : void 0,
          done: !0
        }
      }
    },
    a = Ce.__await || function (o) {
      return this instanceof a ? (this.v = o, this) : new a(o)
    },
    n = Ce.__asyncGenerator || function (o, c, _) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var h = _.apply(o, c || []),
        v, p = [];
      return v = {}, E("next"), E("throw"), E("return"), v[Symbol.asyncIterator] = function () {
        return this
      }, v;

      function E(N) {
        h[N] && (v[N] = function (P) {
          return new Promise(function (q, V) {
            p.push([N, P, q, V]) > 1 || g(N, P)
          })
        })
      }

      function g(N, P) {
        try {
          S(h[N](P))
        } catch (q) {
          O(p[0][3], q)
        }
      }

      function S(N) {
        N.value instanceof a ? Promise.resolve(N.value.v).then(m, I) : O(p[0][2], N)
      }

      function m(N) {
        g("next", N)
      }

      function I(N) {
        g("throw", N)
      }

      function O(N, P) {
        N(P), p.shift(), p.length && g(p[0][0], p[0][1])
      }
    };
  Object.defineProperty(Ce, "__esModule", {
    value: !0
  }), Ce.TweetService = void 0;
  var d = Ie,
    s = Kd(),
    u = Tt(),
    l = Zr(),
    f = function (o) {
      t(c, o);

      function c(_) {
        return o.call(this, _) || this
      }
      return c.prototype.details = function (_) {
        return r(this, void 0, void 0, function () {
          var h, v, p, v, p;
          return i(this, function (E) {
            switch (E.label) {
              case 0:
                return this.userId == null ? [3, 2] : (h = u.EResourceType.TWEET_DETAILS_ALT, [4, this.request(h, {
                  id: _
                })]);
              case 1:
                return v = E.sent(), p = s.extractors[h](v, _), [2, p];
              case 2:
                return h = u.EResourceType.TWEET_DETAILS, [4, this.request(h, {
                  id: _
                })];
              case 3:
                return v = E.sent(), p = s.extractors[h](v, _), [2, p]
            }
          })
        })
      }, c.prototype.like = function (_) {
        var h;
        return r(this, void 0, void 0, function () {
          var v, p, E;
          return i(this, function (g) {
            switch (g.label) {
              case 0:
                return v = u.EResourceType.TWEET_LIKE, [4, this.request(v, {
                  id: _
                })];
              case 1:
                return p = g.sent(), E = (h = s.extractors[v](p)) !== null && h !== void 0 ? h : !1, [2, E]
            }
          })
        })
      }, c.prototype.list = function (_, h, v) {
        return r(this, void 0, void 0, function () {
          var p, E, g;
          return i(this, function (S) {
            switch (S.label) {
              case 0:
                return p = u.EResourceType.LIST_TWEETS, [4, this.request(p, {
                  id: _,
                  count: h,
                  cursor: v
                })];
              case 1:
                return E = S.sent(), g = s.extractors[p](E), g.list.sort(function (m, I) {
                  return new Date(I.createdAt).valueOf() - new Date(m.createdAt).valueOf()
                }), [2, g]
            }
          })
        })
      }, c.prototype.post = function (_) {
        return r(this, void 0, void 0, function () {
          var h, v, p;
          return i(this, function (E) {
            switch (E.label) {
              case 0:
                return h = u.EResourceType.TWEET_POST, [4, this.request(h, {
                  tweet: _
                })];
              case 1:
                return v = E.sent(), p = s.extractors[h](v), [2, p]
            }
          })
        })
      }, c.prototype.retweet = function (_) {
        var h;
        return r(this, void 0, void 0, function () {
          var v, p, E;
          return i(this, function (g) {
            switch (g.label) {
              case 0:
                return v = u.EResourceType.TWEET_RETWEET, [4, this.request(v, {
                  id: _
                })];
              case 1:
                return p = g.sent(), E = (h = s.extractors[v](p)) !== null && h !== void 0 ? h : !1, [2, E]
            }
          })
        })
      }, c.prototype.retweeters = function (_, h, v) {
        return r(this, void 0, void 0, function () {
          var p, E, g;
          return i(this, function (S) {
            switch (S.label) {
              case 0:
                return p = u.EResourceType.TWEET_RETWEETERS, [4, this.request(p, {
                  id: _,
                  count: h,
                  cursor: v
                })];
              case 1:
                return E = S.sent(), g = s.extractors[p](E), [2, g]
            }
          })
        })
      }, c.prototype.schedule = function (_) {
        return r(this, void 0, void 0, function () {
          var h, v, p;
          return i(this, function (E) {
            switch (E.label) {
              case 0:
                return h = u.EResourceType.TWEET_SCHEDULE, [4, this.request(h, {
                  tweet: _
                })];
              case 1:
                return v = E.sent(), p = s.extractors[h](v), [2, p]
            }
          })
        })
      }, c.prototype.search = function (_, h, v, p) {
        return r(this, void 0, void 0, function () {
          var E, g, S;
          return i(this, function (m) {
            switch (m.label) {
              case 0:
                return E = u.EResourceType.TWEET_SEARCH, [4, this.request(E, {
                  filter: _,
                  count: h,
                  cursor: v,
                  results: p
                })];
              case 1:
                return g = m.sent(), S = s.extractors[E](g), S.list.sort(function (I, O) {
                  return new Date(O.createdAt).valueOf() - new Date(I.createdAt).valueOf()
                }), [2, S]
            }
          })
        })
      }, c.prototype.stream = function (_, h) {
        return h === void 0 && (h = 6e4), n(this, arguments, function () {
          var p, E, g, S, m, I, O, N;
          return i(this, function (P) {
            switch (P.label) {
              case 0:
                p = new Date, E = void 0, g = void 0, S = void 0, P.label = 1;
              case 1:
                return [4, a(new Promise(function (q) {
                  return setTimeout(q, h)
                }))];
              case 2:
                return P.sent(), [4, a(this.search(e(e({}, _), {
                  startDate: p,
                  sinceId: g
                }), void 0, E))];
              case 3:
                m = P.sent(), I = 0, O = m.list, P.label = 4;
              case 4:
                return I < O.length ? (N = O[I], [4, a(N)]) : [3, 8];
              case 5:
                return [4, P.sent()];
              case 6:
                P.sent(), P.label = 7;
              case 7:
                return I++, [3, 4];
              case 8:
                return m.list.length > 0 && E === void 0 && (S = m.list[0].id), m.list.length > 0 && m.next ? E = m.next.value : (g = S, E = void 0), [3, 1];
              case 9:
                return [2]
            }
          })
        })
      }, c.prototype.unlike = function (_) {
        var h;
        return r(this, void 0, void 0, function () {
          var v, p, E;
          return i(this, function (g) {
            switch (g.label) {
              case 0:
                return v = u.EResourceType.TWEET_UNLIKE, [4, this.request(v, {
                  id: _
                })];
              case 1:
                return p = g.sent(), E = (h = s.extractors[v](p)) !== null && h !== void 0 ? h : !1, [2, E]
            }
          })
        })
      }, c.prototype.unpost = function (_) {
        var h;
        return r(this, void 0, void 0, function () {
          var v, p, E;
          return i(this, function (g) {
            switch (g.label) {
              case 0:
                return v = u.EResourceType.TWEET_UNPOST, [4, this.request(v, {
                  id: _
                })];
              case 1:
                return p = g.sent(), E = (h = s.extractors[v](p)) !== null && h !== void 0 ? h : !1, [2, E]
            }
          })
        })
      }, c.prototype.unretweet = function (_) {
        var h;
        return r(this, void 0, void 0, function () {
          var v, p, E;
          return i(this, function (g) {
            switch (g.label) {
              case 0:
                return v = u.EResourceType.TWEET_UNRETWEET, [4, this.request(v, {
                  id: _
                })];
              case 1:
                return p = g.sent(), E = (h = s.extractors[v](p)) !== null && h !== void 0 ? h : !1, [2, E]
            }
          })
        })
      }, c.prototype.unschedule = function (_) {
        var h;
        return r(this, void 0, void 0, function () {
          var v, p, E;
          return i(this, function (g) {
            switch (g.label) {
              case 0:
                return v = u.EResourceType.TWEET_UNSCHEDULE, [4, this.request(v, {
                  id: _
                })];
              case 1:
                return p = g.sent(), E = (h = s.extractors[v](p)) !== null && h !== void 0 ? h : !1, [2, E]
            }
          })
        })
      }, c.prototype.upload = function (_) {
        return r(this, void 0, void 0, function () {
          var h, v;
          return i(this, function (p) {
            switch (p.label) {
              case 0:
                return h = typeof _ == "string" ? (0, d.statSync)(_).size : _.byteLength, [4, this.request(u.EResourceType.MEDIA_UPLOAD_INITIALIZE, {
                  upload: {
                    size: h
                  }
                })];
              case 1:
                return v = p.sent().media_id_string, [4, this.request(u.EResourceType.MEDIA_UPLOAD_APPEND, {
                  upload: {
                    id: v,
                    media: _
                  }
                })];
              case 2:
                return p.sent(), [4, this.request(u.EResourceType.MEDIA_UPLOAD_FINALIZE, {
                  upload: {
                    id: v
                  }
                })];
              case 3:
                return p.sent(), [2, v]
            }
          })
        })
      }, c
    }(l.FetcherService);
  return Ce.TweetService = f, Ce
}
var xe = {},
  ul;

function z9() {
  if (ul) return xe;
  ul = 1;
  var t = xe.__extends || function () {
      var l = function (f, o) {
        return l = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (c, _) {
          c.__proto__ = _
        } || function (c, _) {
          for (var h in _) Object.prototype.hasOwnProperty.call(_, h) && (c[h] = _[h])
        }, l(f, o)
      };
      return function (f, o) {
        if (typeof o != "function" && o !== null) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        l(f, o);

        function c() {
          this.constructor = f
        }
        f.prototype = o === null ? Object.create(o) : (c.prototype = o.prototype, new c)
      }
    }(),
    e = xe.__awaiter || function (l, f, o, c) {
      function _(h) {
        return h instanceof o ? h : new o(function (v) {
          v(h)
        })
      }
      return new(o || (o = Promise))(function (h, v) {
        function p(S) {
          try {
            g(c.next(S))
          } catch (m) {
            v(m)
          }
        }

        function E(S) {
          try {
            g(c.throw(S))
          } catch (m) {
            v(m)
          }
        }

        function g(S) {
          S.done ? h(S.value) : _(S.value).then(p, E)
        }
        g((c = c.apply(l, f || [])).next())
      })
    },
    r = xe.__generator || function (l, f) {
      var o = {
          label: 0,
          sent: function () {
            if (h[0] & 1) throw h[1];
            return h[1]
          },
          trys: [],
          ops: []
        },
        c, _, h, v;
      return v = {
        next: p(0),
        throw: p(1),
        return: p(2)
      }, typeof Symbol == "function" && (v[Symbol.iterator] = function () {
        return this
      }), v;

      function p(g) {
        return function (S) {
          return E([g, S])
        }
      }

      function E(g) {
        if (c) throw new TypeError("Generator is already executing.");
        for (; v && (v = 0, g[0] && (o = 0)), o;) try {
          if (c = 1, _ && (h = g[0] & 2 ? _.return : g[0] ? _.throw || ((h = _.return) && h.call(_), 0) : _.next) && !(h = h.call(_, g[1])).done) return h;
          switch (_ = 0, h && (g = [g[0] & 2, h.value]), g[0]) {
            case 0:
            case 1:
              h = g;
              break;
            case 4:
              return o.label++, {
                value: g[1],
                done: !1
              };
            case 5:
              o.label++, _ = g[1], g = [0];
              continue;
            case 7:
              g = o.ops.pop(), o.trys.pop();
              continue;
            default:
              if (h = o.trys, !(h = h.length > 0 && h[h.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                o = 0;
                continue
              }
              if (g[0] === 3 && (!h || g[1] > h[0] && g[1] < h[3])) {
                o.label = g[1];
                break
              }
              if (g[0] === 6 && o.label < h[1]) {
                o.label = h[1], h = g;
                break
              }
              if (h && o.label < h[2]) {
                o.label = h[2], o.ops.push(g);
                break
              }
              h[2] && o.ops.pop(), o.trys.pop();
              continue
          }
          g = f.call(l, o)
        } catch (S) {
          g = [6, S], _ = 0
        } finally {
          c = h = 0
        }
        if (g[0] & 5) throw g[1];
        return {
          value: g[0] ? g[1] : void 0,
          done: !0
        }
      }
    },
    i = xe.__await || function (l) {
      return this instanceof i ? (this.v = l, this) : new i(l)
    },
    a = xe.__asyncGenerator || function (l, f, o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var c = o.apply(l, f || []),
        _, h = [];
      return _ = {}, v("next"), v("throw"), v("return"), _[Symbol.asyncIterator] = function () {
        return this
      }, _;

      function v(I) {
        c[I] && (_[I] = function (O) {
          return new Promise(function (N, P) {
            h.push([I, O, N, P]) > 1 || p(I, O)
          })
        })
      }

      function p(I, O) {
        try {
          E(c[I](O))
        } catch (N) {
          m(h[0][3], N)
        }
      }

      function E(I) {
        I.value instanceof i ? Promise.resolve(I.value.v).then(g, S) : m(h[0][2], I)
      }

      function g(I) {
        p("next", I)
      }

      function S(I) {
        p("throw", I)
      }

      function m(I, O) {
        I(O), h.shift(), h.length && p(h[0][0], h[0][1])
      }
    };
  Object.defineProperty(xe, "__esModule", {
    value: !0
  }), xe.UserService = void 0;
  var n = Kd(),
    d = Tt(),
    s = Zr(),
    u = function (l) {
      t(f, l);

      function f(o) {
        return l.call(this, o) || this
      }
      return f.prototype.bookmarks = function (o, c) {
        return e(this, void 0, void 0, function () {
          var _, h, v;
          return r(this, function (p) {
            switch (p.label) {
              case 0:
                return _ = d.EResourceType.USER_BOOKMARKS, [4, this.request(_, {
                  count: o,
                  cursor: c
                })];
              case 1:
                return h = p.sent(), v = n.extractors[_](h), [2, v]
            }
          })
        })
      }, f.prototype.details = function (o) {
        return e(this, void 0, void 0, function () {
          var c, _, h;
          return r(this, function (v) {
            switch (v.label) {
              case 0:
                return isNaN(Number(o)) ? c = d.EResourceType.USER_DETAILS_BY_USERNAME : c = d.EResourceType.USER_DETAILS_BY_ID, [4, this.request(c, {
                  id: o
                })];
              case 1:
                return _ = v.sent(), h = n.extractors[c](_), [2, h]
            }
          })
        })
      }, f.prototype.follow = function (o) {
        var c;
        return e(this, void 0, void 0, function () {
          var _, h, v;
          return r(this, function (p) {
            switch (p.label) {
              case 0:
                return _ = d.EResourceType.USER_FOLLOW, [4, this.request(d.EResourceType.USER_FOLLOW, {
                  id: o
                })];
              case 1:
                return h = p.sent(), v = (c = n.extractors[_](h)) !== null && c !== void 0 ? c : !1, [2, v]
            }
          })
        })
      }, f.prototype.followed = function (o) {
        return e(this, void 0, void 0, function () {
          var c, _, h;
          return r(this, function (v) {
            switch (v.label) {
              case 0:
                return c = d.EResourceType.USER_FEED_FOLLOWED, [4, this.request(c, {
                  cursor: o
                })];
              case 1:
                return _ = v.sent(), h = n.extractors[c](_), [2, h]
            }
          })
        })
      }, f.prototype.followers = function (o, c, _) {
        return e(this, void 0, void 0, function () {
          var h, v, p;
          return r(this, function (E) {
            switch (E.label) {
              case 0:
                return h = d.EResourceType.USER_FOLLOWERS, [4, this.request(h, {
                  id: o,
                  count: c,
                  cursor: _
                })];
              case 1:
                return v = E.sent(), p = n.extractors[h](v), [2, p]
            }
          })
        })
      }, f.prototype.following = function (o, c, _) {
        return e(this, void 0, void 0, function () {
          var h, v, p;
          return r(this, function (E) {
            switch (E.label) {
              case 0:
                return h = d.EResourceType.USER_FOLLOWING, [4, this.request(h, {
                  id: o,
                  count: c,
                  cursor: _
                })];
              case 1:
                return v = E.sent(), p = n.extractors[h](v), [2, p]
            }
          })
        })
      }, f.prototype.highlights = function (o, c, _) {
        return e(this, void 0, void 0, function () {
          var h, v, p;
          return r(this, function (E) {
            switch (E.label) {
              case 0:
                return h = d.EResourceType.USER_HIGHLIGHTS, [4, this.request(h, {
                  id: o,
                  count: c,
                  cursor: _
                })];
              case 1:
                return v = E.sent(), p = n.extractors[h](v), [2, p]
            }
          })
        })
      }, f.prototype.likes = function (o, c) {
        return e(this, void 0, void 0, function () {
          var _, h, v;
          return r(this, function (p) {
            switch (p.label) {
              case 0:
                return _ = d.EResourceType.USER_LIKES, [4, this.request(_, {
                  id: this.userId,
                  count: o,
                  cursor: c
                })];
              case 1:
                return h = p.sent(), v = n.extractors[_](h), [2, v]
            }
          })
        })
      }, f.prototype.media = function (o, c, _) {
        return e(this, void 0, void 0, function () {
          var h, v, p;
          return r(this, function (E) {
            switch (E.label) {
              case 0:
                return h = d.EResourceType.USER_MEDIA, [4, this.request(h, {
                  id: o,
                  count: c,
                  cursor: _
                })];
              case 1:
                return v = E.sent(), p = n.extractors[h](v), [2, p]
            }
          })
        })
      }, f.prototype.notifications = function (o) {
        return o === void 0 && (o = 6e4), a(this, arguments, function () {
          var _, h, v, p, E, g, S, m;
          return r(this, function (I) {
            switch (I.label) {
              case 0:
                _ = d.EResourceType.USER_NOTIFICATIONS, h = !0, v = void 0, I.label = 1;
              case 1:
                return [4, i(new Promise(function (O) {
                  return setTimeout(O, o)
                }))];
              case 2:
                return I.sent(), [4, i(this.request(_, {
                  count: 40,
                  cursor: v
                }))];
              case 3:
                if (p = I.sent(), E = n.extractors[_](p), E.list.sort(function (O, N) {
                    return new Date(O.receivedAt).valueOf() - new Date(N.receivedAt).valueOf()
                  }), h) return [3, 9];
                g = 0, S = E.list, I.label = 4;
              case 4:
                return g < S.length ? (m = S[g], [4, i(m)]) : [3, 8];
              case 5:
                return [4, I.sent()];
              case 6:
                I.sent(), I.label = 7;
              case 7:
                return g++, [3, 4];
              case 8:
                return [3, 10];
              case 9:
                h = !1, I.label = 10;
              case 10:
                return v = E.next.value, [3, 1];
              case 11:
                return [2]
            }
          })
        })
      }, f.prototype.recommended = function (o) {
        return e(this, void 0, void 0, function () {
          var c, _, h;
          return r(this, function (v) {
            switch (v.label) {
              case 0:
                return c = d.EResourceType.USER_FEED_RECOMMENDED, [4, this.request(c, {
                  cursor: o
                })];
              case 1:
                return _ = v.sent(), h = n.extractors[c](_), [2, h]
            }
          })
        })
      }, f.prototype.replies = function (o, c, _) {
        return e(this, void 0, void 0, function () {
          var h, v, p;
          return r(this, function (E) {
            switch (E.label) {
              case 0:
                return h = d.EResourceType.USER_TIMELINE_AND_REPLIES, [4, this.request(h, {
                  id: o,
                  count: c,
                  cursor: _
                })];
              case 1:
                return v = E.sent(), p = n.extractors[h](v), [2, p]
            }
          })
        })
      }, f.prototype.subscriptions = function (o, c, _) {
        return e(this, void 0, void 0, function () {
          var h, v, p;
          return r(this, function (E) {
            switch (E.label) {
              case 0:
                return h = d.EResourceType.USER_SUBSCRIPTIONS, [4, this.request(h, {
                  id: o,
                  count: c,
                  cursor: _
                })];
              case 1:
                return v = E.sent(), p = n.extractors[h](v), [2, p]
            }
          })
        })
      }, f.prototype.timeline = function (o, c, _) {
        return e(this, void 0, void 0, function () {
          var h, v, p;
          return r(this, function (E) {
            switch (E.label) {
              case 0:
                return h = d.EResourceType.USER_TIMELINE, [4, this.request(h, {
                  id: o,
                  count: c,
                  cursor: _
                })];
              case 1:
                return v = E.sent(), p = n.extractors[h](v), [2, p]
            }
          })
        })
      }, f.prototype.unfollow = function (o) {
        var c;
        return e(this, void 0, void 0, function () {
          var _, h, v;
          return r(this, function (p) {
            switch (p.label) {
              case 0:
                return _ = d.EResourceType.USER_UNFOLLOW, [4, this.request(d.EResourceType.USER_UNFOLLOW, {
                  id: o
                })];
              case 1:
                return h = p.sent(), v = (c = n.extractors[_](h)) !== null && c !== void 0 ? c : !1, [2, v]
            }
          })
        })
      }, f
    }(s.FetcherService);
  return xe.UserService = u, xe
}
var sl;

function vh() {
  if (sl) return vr;
  sl = 1, Object.defineProperty(vr, "__esModule", {
    value: !0
  }), vr.Rettiwt = void 0;
  var t = Vd(),
    e = hh(),
    r = Y9(),
    i = z9(),
    a = function () {
      function n(d) {
        this.auth = new t.AuthService(d), this.list = new e.ListService(d), this.tweet = new r.TweetService(d), this.user = new i.UserService(d)
      }
      return n
    }();
  return vr.Rettiwt = a, vr
}
var Fr = {},
  ol;

function $h() {
  if (ol) return Fr;
  ol = 1, Object.defineProperty(Fr, "__esModule", {
    value: !0
  }), Fr.List = void 0;
  var t = function () {
    function e(r) {
      this.id = r.id_str, this.name = r.name, this.createdAt = new Date(r.created_at).toISOString(), this.description = r.description.length ? r.description : void 0, this.memberCount = r.member_count, this.subscriberCount = r.subscriber_count, this.createdBy = r.user_results.result.id
    }
    return e
  }();
  return Fr.List = t, Fr
}
var ld = {},
  ll;

function Eh() {
  return ll || (ll = 1, Object.defineProperty(ld, "__esModule", {
    value: !0
  })), ld
}
var cd = {},
  cl;

function yh() {
  return cl || (cl = 1, Object.defineProperty(cd, "__esModule", {
    value: !0
  })), cd
}
var fl;

function gh() {
  return fl || (fl = 1, function (t) {
    var e = hr.__createBinding || (Object.create ? function (i, a, n, d) {
        d === void 0 && (d = n);
        var s = Object.getOwnPropertyDescriptor(a, n);
        (!s || ("get" in s ? !a.__esModule : s.writable || s.configurable)) && (s = {
          enumerable: !0,
          get: function () {
            return a[n]
          }
        }), Object.defineProperty(i, d, s)
      } : function (i, a, n, d) {
        d === void 0 && (d = n), i[d] = a[n]
      }),
      r = hr.__exportStar || function (i, a) {
        for (var n in i) n !== "default" && !Object.prototype.hasOwnProperty.call(a, n) && e(a, i, n)
      };
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r(vh(), t), r(Ki(), t), r(k9(), t), r(Tt(), t), r(B9(), t), r(q9(), t), r(j9(), t), r($h(), t), r(K9(), t), r(Zd(), t), r(ea(), t), r(W9(), t), r(Gd(), t), r(G9(), t), r(Qi(), t), r(H9(), t), r(Vd(), t), r(Zr(), t), r(Y9(), t), r(z9(), t), r(Eh(), t), r(yh(), t)
  }(hr)), hr
}
var mh = gh();
console.log("1");
const Ih = new mh.Rettiwt;
document.querySelector("#get-key");
Ih.user.details("la_ZorraNegra").then(t => {
  console.log(t)
}).catch(t => {
  console.log("Oops!")
});