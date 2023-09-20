;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c)
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === 'childList')
        for (const d of h.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && a(d)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(c) {
    const h = {}
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (h.credentials = 'include')
        : c.crossOrigin === 'anonymous'
        ? (h.credentials = 'omit')
        : (h.credentials = 'same-origin'),
      h
    )
  }
  function a(c) {
    if (c.ep) return
    c.ep = !0
    const h = s(c)
    fetch(c.href, h)
  }
})()
function getDefaultExportFromCjs(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, 'default')
    ? o.default
    : o
}
var jsxRuntime = { exports: {} },
  reactJsxRuntime_production_min = {},
  react = { exports: {} },
  react_production_min = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l$1 = Symbol.for('react.element'),
  n$1 = Symbol.for('react.portal'),
  p$2 = Symbol.for('react.fragment'),
  q$1 = Symbol.for('react.strict_mode'),
  r = Symbol.for('react.profiler'),
  t$1 = Symbol.for('react.provider'),
  u = Symbol.for('react.context'),
  v$1 = Symbol.for('react.forward_ref'),
  w = Symbol.for('react.suspense'),
  x = Symbol.for('react.memo'),
  y = Symbol.for('react.lazy'),
  z$1 = Symbol.iterator
function A$1(o) {
  return o === null || typeof o != 'object'
    ? null
    : ((o = (z$1 && o[z$1]) || o['@@iterator']),
      typeof o == 'function' ? o : null)
}
var B$1 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  C$2 = Object.assign,
  D$1 = {}
function E$1(o, e, s) {
  ;(this.props = o),
    (this.context = e),
    (this.refs = D$1),
    (this.updater = s || B$1)
}
E$1.prototype.isReactComponent = {}
E$1.prototype.setState = function (o, e) {
  if (typeof o != 'object' && typeof o != 'function' && o != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, o, e, 'setState')
}
E$1.prototype.forceUpdate = function (o) {
  this.updater.enqueueForceUpdate(this, o, 'forceUpdate')
}
function F() {}
F.prototype = E$1.prototype
function G$1(o, e, s) {
  ;(this.props = o),
    (this.context = e),
    (this.refs = D$1),
    (this.updater = s || B$1)
}
var H$1 = (G$1.prototype = new F())
H$1.constructor = G$1
C$2(H$1, E$1.prototype)
H$1.isPureReactComponent = !0
var I$1 = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K$1 = { current: null },
  L$1 = { key: !0, ref: !0, __self: !0, __source: !0 }
function M$1(o, e, s) {
  var a,
    c = {},
    h = null,
    d = null
  if (e != null)
    for (a in (e.ref !== void 0 && (d = e.ref),
    e.key !== void 0 && (h = '' + e.key),
    e))
      J.call(e, a) && !L$1.hasOwnProperty(a) && (c[a] = e[a])
  var g = arguments.length - 2
  if (g === 1) c.children = s
  else if (1 < g) {
    for (var b = Array(g), $ = 0; $ < g; $++) b[$] = arguments[$ + 2]
    c.children = b
  }
  if (o && o.defaultProps)
    for (a in ((g = o.defaultProps), g)) c[a] === void 0 && (c[a] = g[a])
  return {
    $$typeof: l$1,
    type: o,
    key: h,
    ref: d,
    props: c,
    _owner: K$1.current
  }
}
function N$1(o, e) {
  return {
    $$typeof: l$1,
    type: o.type,
    key: e,
    ref: o.ref,
    props: o.props,
    _owner: o._owner
  }
}
function O$1(o) {
  return typeof o == 'object' && o !== null && o.$$typeof === l$1
}
function escape(o) {
  var e = { '=': '=0', ':': '=2' }
  return (
    '$' +
    o.replace(/[=:]/g, function (s) {
      return e[s]
    })
  )
}
var P$1 = /\/+/g
function Q$1(o, e) {
  return typeof o == 'object' && o !== null && o.key != null
    ? escape('' + o.key)
    : e.toString(36)
}
function R$1(o, e, s, a, c) {
  var h = typeof o
  ;(h === 'undefined' || h === 'boolean') && (o = null)
  var d = !1
  if (o === null) d = !0
  else
    switch (h) {
      case 'string':
      case 'number':
        d = !0
        break
      case 'object':
        switch (o.$$typeof) {
          case l$1:
          case n$1:
            d = !0
        }
    }
  if (d)
    return (
      (d = o),
      (c = c(d)),
      (o = a === '' ? '.' + Q$1(d, 0) : a),
      I$1(c)
        ? ((s = ''),
          o != null && (s = o.replace(P$1, '$&/') + '/'),
          R$1(c, e, s, '', function ($) {
            return $
          }))
        : c != null &&
          (O$1(c) &&
            (c = N$1(
              c,
              s +
                (!c.key || (d && d.key === c.key)
                  ? ''
                  : ('' + c.key).replace(P$1, '$&/') + '/') +
                o
            )),
          e.push(c)),
      1
    )
  if (((d = 0), (a = a === '' ? '.' : a + ':'), I$1(o)))
    for (var g = 0; g < o.length; g++) {
      h = o[g]
      var b = a + Q$1(h, g)
      d += R$1(h, e, s, b, c)
    }
  else if (((b = A$1(o)), typeof b == 'function'))
    for (o = b.call(o), g = 0; !(h = o.next()).done; )
      (h = h.value), (b = a + Q$1(h, g++)), (d += R$1(h, e, s, b, c))
  else if (h === 'object')
    throw (
      ((e = String(o)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]'
            ? 'object with keys {' + Object.keys(o).join(', ') + '}'
            : e) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return d
}
function S$1(o, e, s) {
  if (o == null) return o
  var a = [],
    c = 0
  return (
    R$1(o, a, '', '', function (h) {
      return e.call(s, h, c++)
    }),
    a
  )
}
function T$1(o) {
  if (o._status === -1) {
    var e = o._result
    ;(e = e()),
      e.then(
        function (s) {
          ;(o._status === 0 || o._status === -1) &&
            ((o._status = 1), (o._result = s))
        },
        function (s) {
          ;(o._status === 0 || o._status === -1) &&
            ((o._status = 2), (o._result = s))
        }
      ),
      o._status === -1 && ((o._status = 0), (o._result = e))
  }
  if (o._status === 1) return o._result.default
  throw o._result
}
var U$1 = { current: null },
  V$1 = { transition: null },
  W$1 = {
    ReactCurrentDispatcher: U$1,
    ReactCurrentBatchConfig: V$1,
    ReactCurrentOwner: K$1
  }
react_production_min.Children = {
  map: S$1,
  forEach: function (o, e, s) {
    S$1(
      o,
      function () {
        e.apply(this, arguments)
      },
      s
    )
  },
  count: function (o) {
    var e = 0
    return (
      S$1(o, function () {
        e++
      }),
      e
    )
  },
  toArray: function (o) {
    return (
      S$1(o, function (e) {
        return e
      }) || []
    )
  },
  only: function (o) {
    if (!O$1(o))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return o
  }
}
react_production_min.Component = E$1
react_production_min.Fragment = p$2
react_production_min.Profiler = r
react_production_min.PureComponent = G$1
react_production_min.StrictMode = q$1
react_production_min.Suspense = w
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1
react_production_min.cloneElement = function (o, e, s) {
  if (o == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        o +
        '.'
    )
  var a = C$2({}, o.props),
    c = o.key,
    h = o.ref,
    d = o._owner
  if (e != null) {
    if (
      (e.ref !== void 0 && ((h = e.ref), (d = K$1.current)),
      e.key !== void 0 && (c = '' + e.key),
      o.type && o.type.defaultProps)
    )
      var g = o.type.defaultProps
    for (b in e)
      J.call(e, b) &&
        !L$1.hasOwnProperty(b) &&
        (a[b] = e[b] === void 0 && g !== void 0 ? g[b] : e[b])
  }
  var b = arguments.length - 2
  if (b === 1) a.children = s
  else if (1 < b) {
    g = Array(b)
    for (var $ = 0; $ < b; $++) g[$] = arguments[$ + 2]
    a.children = g
  }
  return { $$typeof: l$1, type: o.type, key: c, ref: h, props: a, _owner: d }
}
react_production_min.createContext = function (o) {
  return (
    (o = {
      $$typeof: u,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (o.Provider = { $$typeof: t$1, _context: o }),
    (o.Consumer = o)
  )
}
react_production_min.createElement = M$1
react_production_min.createFactory = function (o) {
  var e = M$1.bind(null, o)
  return (e.type = o), e
}
react_production_min.createRef = function () {
  return { current: null }
}
react_production_min.forwardRef = function (o) {
  return { $$typeof: v$1, render: o }
}
react_production_min.isValidElement = O$1
react_production_min.lazy = function (o) {
  return { $$typeof: y, _payload: { _status: -1, _result: o }, _init: T$1 }
}
react_production_min.memo = function (o, e) {
  return { $$typeof: x, type: o, compare: e === void 0 ? null : e }
}
react_production_min.startTransition = function (o) {
  var e = V$1.transition
  V$1.transition = {}
  try {
    o()
  } finally {
    V$1.transition = e
  }
}
react_production_min.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
react_production_min.useCallback = function (o, e) {
  return U$1.current.useCallback(o, e)
}
react_production_min.useContext = function (o) {
  return U$1.current.useContext(o)
}
react_production_min.useDebugValue = function () {}
react_production_min.useDeferredValue = function (o) {
  return U$1.current.useDeferredValue(o)
}
react_production_min.useEffect = function (o, e) {
  return U$1.current.useEffect(o, e)
}
react_production_min.useId = function () {
  return U$1.current.useId()
}
react_production_min.useImperativeHandle = function (o, e, s) {
  return U$1.current.useImperativeHandle(o, e, s)
}
react_production_min.useInsertionEffect = function (o, e) {
  return U$1.current.useInsertionEffect(o, e)
}
react_production_min.useLayoutEffect = function (o, e) {
  return U$1.current.useLayoutEffect(o, e)
}
react_production_min.useMemo = function (o, e) {
  return U$1.current.useMemo(o, e)
}
react_production_min.useReducer = function (o, e, s) {
  return U$1.current.useReducer(o, e, s)
}
react_production_min.useRef = function (o) {
  return U$1.current.useRef(o)
}
react_production_min.useState = function (o) {
  return U$1.current.useState(o)
}
react_production_min.useSyncExternalStore = function (o, e, s) {
  return U$1.current.useSyncExternalStore(o, e, s)
}
react_production_min.useTransition = function () {
  return U$1.current.useTransition()
}
react_production_min.version = '18.2.0'
react.exports = react_production_min
var reactExports = react.exports
const React = getDefaultExportFromCjs(reactExports)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f = reactExports,
  k = Symbol.for('react.element'),
  l = Symbol.for('react.fragment'),
  m$1 = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p$1 = { key: !0, ref: !0, __self: !0, __source: !0 }
function q(o, e, s) {
  var a,
    c = {},
    h = null,
    d = null
  s !== void 0 && (h = '' + s),
    e.key !== void 0 && (h = '' + e.key),
    e.ref !== void 0 && (d = e.ref)
  for (a in e) m$1.call(e, a) && !p$1.hasOwnProperty(a) && (c[a] = e[a])
  if (o && o.defaultProps)
    for (a in ((e = o.defaultProps), e)) c[a] === void 0 && (c[a] = e[a])
  return { $$typeof: k, type: o, key: h, ref: d, props: c, _owner: n.current }
}
reactJsxRuntime_production_min.Fragment = l
reactJsxRuntime_production_min.jsx = q
reactJsxRuntime_production_min.jsxs = q
jsxRuntime.exports = reactJsxRuntime_production_min
var jsxRuntimeExports = jsxRuntime.exports
const index = ''
var client = {},
  reactDom = { exports: {} },
  reactDom_production_min = {},
  scheduler = { exports: {} },
  scheduler_production_min = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (o) {
  function e(ft, gt) {
    var mt = ft.length
    ft.push(gt)
    e: for (; 0 < mt; ) {
      var yt = (mt - 1) >>> 1,
        xt = ft[yt]
      if (0 < c(xt, gt)) (ft[yt] = gt), (ft[mt] = xt), (mt = yt)
      else break e
    }
  }
  function s(ft) {
    return ft.length === 0 ? null : ft[0]
  }
  function a(ft) {
    if (ft.length === 0) return null
    var gt = ft[0],
      mt = ft.pop()
    if (mt !== gt) {
      ft[0] = mt
      e: for (var yt = 0, xt = ft.length, Qt = xt >>> 1; yt < Qt; ) {
        var $t = 2 * (yt + 1) - 1,
          Et = ft[$t],
          Pt = $t + 1,
          Tt = ft[Pt]
        if (0 > c(Et, mt))
          Pt < xt && 0 > c(Tt, Et)
            ? ((ft[yt] = Tt), (ft[Pt] = mt), (yt = Pt))
            : ((ft[yt] = Et), (ft[$t] = mt), (yt = $t))
        else if (Pt < xt && 0 > c(Tt, mt))
          (ft[yt] = Tt), (ft[Pt] = mt), (yt = Pt)
        else break e
      }
    }
    return gt
  }
  function c(ft, gt) {
    var mt = ft.sortIndex - gt.sortIndex
    return mt !== 0 ? mt : ft.id - gt.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var h = performance
    o.unstable_now = function () {
      return h.now()
    }
  } else {
    var d = Date,
      g = d.now()
    o.unstable_now = function () {
      return d.now() - g
    }
  }
  var b = [],
    $ = [],
    _ = 1,
    j = null,
    _e = 3,
    et = !1,
    tt = !1,
    rt = !1,
    st = typeof setTimeout == 'function' ? setTimeout : null,
    nt = typeof clearTimeout == 'function' ? clearTimeout : null,
    it = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function ot(ft) {
    for (var gt = s($); gt !== null; ) {
      if (gt.callback === null) a($)
      else if (gt.startTime <= ft)
        a($), (gt.sortIndex = gt.expirationTime), e(b, gt)
      else break
      gt = s($)
    }
  }
  function lt(ft) {
    if (((rt = !1), ot(ft), !tt))
      if (s(b) !== null) (tt = !0), wt(at)
      else {
        var gt = s($)
        gt !== null && kt(lt, gt.startTime - ft)
      }
  }
  function at(ft, gt) {
    ;(tt = !1), rt && ((rt = !1), nt(ht), (ht = -1)), (et = !0)
    var mt = _e
    try {
      for (
        ot(gt), j = s(b);
        j !== null && (!(j.expirationTime > gt) || (ft && !Ot()));

      ) {
        var yt = j.callback
        if (typeof yt == 'function') {
          ;(j.callback = null), (_e = j.priorityLevel)
          var xt = yt(j.expirationTime <= gt)
          ;(gt = o.unstable_now()),
            typeof xt == 'function' ? (j.callback = xt) : j === s(b) && a(b),
            ot(gt)
        } else a(b)
        j = s(b)
      }
      if (j !== null) var Qt = !0
      else {
        var $t = s($)
        $t !== null && kt(lt, $t.startTime - gt), (Qt = !1)
      }
      return Qt
    } finally {
      ;(j = null), (_e = mt), (et = !1)
    }
  }
  var ct = !1,
    ut = null,
    ht = -1,
    pt = 5,
    dt = -1
  function Ot() {
    return !(o.unstable_now() - dt < pt)
  }
  function St() {
    if (ut !== null) {
      var ft = o.unstable_now()
      dt = ft
      var gt = !0
      try {
        gt = ut(!0, ft)
      } finally {
        gt ? vt() : ((ct = !1), (ut = null))
      }
    } else ct = !1
  }
  var vt
  if (typeof it == 'function')
    vt = function () {
      it(St)
    }
  else if (typeof MessageChannel < 'u') {
    var bt = new MessageChannel(),
      Ct = bt.port2
    ;(bt.port1.onmessage = St),
      (vt = function () {
        Ct.postMessage(null)
      })
  } else
    vt = function () {
      st(St, 0)
    }
  function wt(ft) {
    ;(ut = ft), ct || ((ct = !0), vt())
  }
  function kt(ft, gt) {
    ht = st(function () {
      ft(o.unstable_now())
    }, gt)
  }
  ;(o.unstable_IdlePriority = 5),
    (o.unstable_ImmediatePriority = 1),
    (o.unstable_LowPriority = 4),
    (o.unstable_NormalPriority = 3),
    (o.unstable_Profiling = null),
    (o.unstable_UserBlockingPriority = 2),
    (o.unstable_cancelCallback = function (ft) {
      ft.callback = null
    }),
    (o.unstable_continueExecution = function () {
      tt || et || ((tt = !0), wt(at))
    }),
    (o.unstable_forceFrameRate = function (ft) {
      0 > ft || 125 < ft
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (pt = 0 < ft ? Math.floor(1e3 / ft) : 5)
    }),
    (o.unstable_getCurrentPriorityLevel = function () {
      return _e
    }),
    (o.unstable_getFirstCallbackNode = function () {
      return s(b)
    }),
    (o.unstable_next = function (ft) {
      switch (_e) {
        case 1:
        case 2:
        case 3:
          var gt = 3
          break
        default:
          gt = _e
      }
      var mt = _e
      _e = gt
      try {
        return ft()
      } finally {
        _e = mt
      }
    }),
    (o.unstable_pauseExecution = function () {}),
    (o.unstable_requestPaint = function () {}),
    (o.unstable_runWithPriority = function (ft, gt) {
      switch (ft) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          ft = 3
      }
      var mt = _e
      _e = ft
      try {
        return gt()
      } finally {
        _e = mt
      }
    }),
    (o.unstable_scheduleCallback = function (ft, gt, mt) {
      var yt = o.unstable_now()
      switch (
        (typeof mt == 'object' && mt !== null
          ? ((mt = mt.delay),
            (mt = typeof mt == 'number' && 0 < mt ? yt + mt : yt))
          : (mt = yt),
        ft)
      ) {
        case 1:
          var xt = -1
          break
        case 2:
          xt = 250
          break
        case 5:
          xt = 1073741823
          break
        case 4:
          xt = 1e4
          break
        default:
          xt = 5e3
      }
      return (
        (xt = mt + xt),
        (ft = {
          id: _++,
          callback: gt,
          priorityLevel: ft,
          startTime: mt,
          expirationTime: xt,
          sortIndex: -1
        }),
        mt > yt
          ? ((ft.sortIndex = mt),
            e($, ft),
            s(b) === null &&
              ft === s($) &&
              (rt ? (nt(ht), (ht = -1)) : (rt = !0), kt(lt, mt - yt)))
          : ((ft.sortIndex = xt), e(b, ft), tt || et || ((tt = !0), wt(at))),
        ft
      )
    }),
    (o.unstable_shouldYield = Ot),
    (o.unstable_wrapCallback = function (ft) {
      var gt = _e
      return function () {
        var mt = _e
        _e = gt
        try {
          return ft.apply(this, arguments)
        } finally {
          _e = mt
        }
      }
    })
})(scheduler_production_min)
scheduler.exports = scheduler_production_min
var schedulerExports = scheduler.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = reactExports,
  ca = schedulerExports
function p(o) {
  for (
    var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + o, s = 1;
    s < arguments.length;
    s++
  )
    e += '&args[]=' + encodeURIComponent(arguments[s])
  return (
    'Minified React error #' +
    o +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var da = new Set(),
  ea = {}
function fa(o, e) {
  ha(o, e), ha(o + 'Capture', e)
}
function ha(o, e) {
  for (ea[o] = e, o = 0; o < e.length; o++) da.add(e[o])
}
var ia = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ja = Object.prototype.hasOwnProperty,
  ka =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {}
function oa(o) {
  return ja.call(ma, o)
    ? !0
    : ja.call(la, o)
    ? !1
    : ka.test(o)
    ? (ma[o] = !0)
    : ((la[o] = !0), !1)
}
function pa(o, e, s, a) {
  if (s !== null && s.type === 0) return !1
  switch (typeof e) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return a
        ? !1
        : s !== null
        ? !s.acceptsBooleans
        : ((o = o.toLowerCase().slice(0, 5)), o !== 'data-' && o !== 'aria-')
    default:
      return !1
  }
}
function qa(o, e, s, a) {
  if (e === null || typeof e > 'u' || pa(o, e, s, a)) return !0
  if (a) return !1
  if (s !== null)
    switch (s.type) {
      case 3:
        return !e
      case 4:
        return e === !1
      case 5:
        return isNaN(e)
      case 6:
        return isNaN(e) || 1 > e
    }
  return !1
}
function v(o, e, s, a, c, h, d) {
  ;(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = a),
    (this.attributeNamespace = c),
    (this.mustUseProperty = s),
    (this.propertyName = o),
    (this.type = e),
    (this.sanitizeURL = h),
    (this.removeEmptyString = d)
}
var z = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (o) {
    z[o] = new v(o, 0, !1, o, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (o) {
  var e = o[0]
  z[e] = new v(e, 1, !1, o[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (o) {
  z[o] = new v(o, 2, !1, o.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (o) {
  z[o] = new v(o, 2, !1, o, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (o) {
    z[o] = new v(o, 3, !1, o.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (o) {
  z[o] = new v(o, 3, !0, o, null, !1, !1)
})
;['capture', 'download'].forEach(function (o) {
  z[o] = new v(o, 4, !1, o, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (o) {
  z[o] = new v(o, 6, !1, o, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (o) {
  z[o] = new v(o, 5, !1, o.toLowerCase(), null, !1, !1)
})
var ra = /[\-:]([a-z])/g
function sa(o) {
  return o[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (o) {
    var e = o.replace(ra, sa)
    z[e] = new v(e, 1, !1, o, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (o) {
    var e = o.replace(ra, sa)
    z[e] = new v(e, 1, !1, o, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (o) {
  var e = o.replace(ra, sa)
  z[e] = new v(e, 1, !1, o, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (o) {
  z[o] = new v(o, 1, !1, o.toLowerCase(), null, !1, !1)
})
z.xlinkHref = new v(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (o) {
  z[o] = new v(o, 1, !1, o.toLowerCase(), null, !0, !0)
})
function ta(o, e, s, a) {
  var c = z.hasOwnProperty(e) ? z[e] : null
  ;(c !== null
    ? c.type !== 0
    : a ||
      !(2 < e.length) ||
      (e[0] !== 'o' && e[0] !== 'O') ||
      (e[1] !== 'n' && e[1] !== 'N')) &&
    (qa(e, s, c, a) && (s = null),
    a || c === null
      ? oa(e) && (s === null ? o.removeAttribute(e) : o.setAttribute(e, '' + s))
      : c.mustUseProperty
      ? (o[c.propertyName] = s === null ? (c.type === 3 ? !1 : '') : s)
      : ((e = c.attributeName),
        (a = c.attributeNamespace),
        s === null
          ? o.removeAttribute(e)
          : ((c = c.type),
            (s = c === 3 || (c === 4 && s === !0) ? '' : '' + s),
            a ? o.setAttributeNS(a, e, s) : o.setAttribute(e, s))))
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for('react.element'),
  wa = Symbol.for('react.portal'),
  ya = Symbol.for('react.fragment'),
  za = Symbol.for('react.strict_mode'),
  Aa = Symbol.for('react.profiler'),
  Ba = Symbol.for('react.provider'),
  Ca = Symbol.for('react.context'),
  Da = Symbol.for('react.forward_ref'),
  Ea = Symbol.for('react.suspense'),
  Fa = Symbol.for('react.suspense_list'),
  Ga = Symbol.for('react.memo'),
  Ha = Symbol.for('react.lazy'),
  Ia = Symbol.for('react.offscreen'),
  Ja = Symbol.iterator
function Ka(o) {
  return o === null || typeof o != 'object'
    ? null
    : ((o = (Ja && o[Ja]) || o['@@iterator']),
      typeof o == 'function' ? o : null)
}
var A = Object.assign,
  La
function Ma(o) {
  if (La === void 0)
    try {
      throw Error()
    } catch (s) {
      var e = s.stack.trim().match(/\n( *(at )?)/)
      La = (e && e[1]) || ''
    }
  return (
    `
` +
    La +
    o
  )
}
var Na = !1
function Oa(o, e) {
  if (!o || Na) return ''
  Na = !0
  var s = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (e)
      if (
        ((e = function () {
          throw Error()
        }),
        Object.defineProperty(e.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, [])
        } catch ($) {
          var a = $
        }
        Reflect.construct(o, [], e)
      } else {
        try {
          e.call()
        } catch ($) {
          a = $
        }
        o.call(e.prototype)
      }
    else {
      try {
        throw Error()
      } catch ($) {
        a = $
      }
      o()
    }
  } catch ($) {
    if ($ && a && typeof $.stack == 'string') {
      for (
        var c = $.stack.split(`
`),
          h = a.stack.split(`
`),
          d = c.length - 1,
          g = h.length - 1;
        1 <= d && 0 <= g && c[d] !== h[g];

      )
        g--
      for (; 1 <= d && 0 <= g; d--, g--)
        if (c[d] !== h[g]) {
          if (d !== 1 || g !== 1)
            do
              if ((d--, g--, 0 > g || c[d] !== h[g])) {
                var b =
                  `
` + c[d].replace(' at new ', ' at ')
                return (
                  o.displayName &&
                    b.includes('<anonymous>') &&
                    (b = b.replace('<anonymous>', o.displayName)),
                  b
                )
              }
            while (1 <= d && 0 <= g)
          break
        }
    }
  } finally {
    ;(Na = !1), (Error.prepareStackTrace = s)
  }
  return (o = o ? o.displayName || o.name : '') ? Ma(o) : ''
}
function Pa(o) {
  switch (o.tag) {
    case 5:
      return Ma(o.type)
    case 16:
      return Ma('Lazy')
    case 13:
      return Ma('Suspense')
    case 19:
      return Ma('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (o = Oa(o.type, !1)), o
    case 11:
      return (o = Oa(o.type.render, !1)), o
    case 1:
      return (o = Oa(o.type, !0)), o
    default:
      return ''
  }
}
function Qa(o) {
  if (o == null) return null
  if (typeof o == 'function') return o.displayName || o.name || null
  if (typeof o == 'string') return o
  switch (o) {
    case ya:
      return 'Fragment'
    case wa:
      return 'Portal'
    case Aa:
      return 'Profiler'
    case za:
      return 'StrictMode'
    case Ea:
      return 'Suspense'
    case Fa:
      return 'SuspenseList'
  }
  if (typeof o == 'object')
    switch (o.$$typeof) {
      case Ca:
        return (o.displayName || 'Context') + '.Consumer'
      case Ba:
        return (o._context.displayName || 'Context') + '.Provider'
      case Da:
        var e = o.render
        return (
          (o = o.displayName),
          o ||
            ((o = e.displayName || e.name || ''),
            (o = o !== '' ? 'ForwardRef(' + o + ')' : 'ForwardRef')),
          o
        )
      case Ga:
        return (
          (e = o.displayName || null), e !== null ? e : Qa(o.type) || 'Memo'
        )
      case Ha:
        ;(e = o._payload), (o = o._init)
        try {
          return Qa(o(e))
        } catch {}
    }
  return null
}
function Ra(o) {
  var e = o.type
  switch (o.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (e.displayName || 'Context') + '.Consumer'
    case 10:
      return (e._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (o = e.render),
        (o = o.displayName || o.name || ''),
        e.displayName || (o !== '' ? 'ForwardRef(' + o + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return e
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Qa(e)
    case 8:
      return e === za ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == 'function') return e.displayName || e.name || null
      if (typeof e == 'string') return e
  }
  return null
}
function Sa(o) {
  switch (typeof o) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return o
    case 'object':
      return o
    default:
      return ''
  }
}
function Ta(o) {
  var e = o.type
  return (
    (o = o.nodeName) &&
    o.toLowerCase() === 'input' &&
    (e === 'checkbox' || e === 'radio')
  )
}
function Ua(o) {
  var e = Ta(o) ? 'checked' : 'value',
    s = Object.getOwnPropertyDescriptor(o.constructor.prototype, e),
    a = '' + o[e]
  if (
    !o.hasOwnProperty(e) &&
    typeof s < 'u' &&
    typeof s.get == 'function' &&
    typeof s.set == 'function'
  ) {
    var c = s.get,
      h = s.set
    return (
      Object.defineProperty(o, e, {
        configurable: !0,
        get: function () {
          return c.call(this)
        },
        set: function (d) {
          ;(a = '' + d), h.call(this, d)
        }
      }),
      Object.defineProperty(o, e, { enumerable: s.enumerable }),
      {
        getValue: function () {
          return a
        },
        setValue: function (d) {
          a = '' + d
        },
        stopTracking: function () {
          ;(o._valueTracker = null), delete o[e]
        }
      }
    )
  }
}
function Va(o) {
  o._valueTracker || (o._valueTracker = Ua(o))
}
function Wa(o) {
  if (!o) return !1
  var e = o._valueTracker
  if (!e) return !0
  var s = e.getValue(),
    a = ''
  return (
    o && (a = Ta(o) ? (o.checked ? 'true' : 'false') : o.value),
    (o = a),
    o !== s ? (e.setValue(o), !0) : !1
  )
}
function Xa(o) {
  if (((o = o || (typeof document < 'u' ? document : void 0)), typeof o > 'u'))
    return null
  try {
    return o.activeElement || o.body
  } catch {
    return o.body
  }
}
function Ya(o, e) {
  var s = e.checked
  return A({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: s ?? o._wrapperState.initialChecked
  })
}
function Za(o, e) {
  var s = e.defaultValue == null ? '' : e.defaultValue,
    a = e.checked != null ? e.checked : e.defaultChecked
  ;(s = Sa(e.value != null ? e.value : s)),
    (o._wrapperState = {
      initialChecked: a,
      initialValue: s,
      controlled:
        e.type === 'checkbox' || e.type === 'radio'
          ? e.checked != null
          : e.value != null
    })
}
function ab(o, e) {
  ;(e = e.checked), e != null && ta(o, 'checked', e, !1)
}
function bb(o, e) {
  ab(o, e)
  var s = Sa(e.value),
    a = e.type
  if (s != null)
    a === 'number'
      ? ((s === 0 && o.value === '') || o.value != s) && (o.value = '' + s)
      : o.value !== '' + s && (o.value = '' + s)
  else if (a === 'submit' || a === 'reset') {
    o.removeAttribute('value')
    return
  }
  e.hasOwnProperty('value')
    ? cb(o, e.type, s)
    : e.hasOwnProperty('defaultValue') && cb(o, e.type, Sa(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (o.defaultChecked = !!e.defaultChecked)
}
function db(o, e, s) {
  if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
    var a = e.type
    if (
      !(
        (a !== 'submit' && a !== 'reset') ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return
    ;(e = '' + o._wrapperState.initialValue),
      s || e === o.value || (o.value = e),
      (o.defaultValue = e)
  }
  ;(s = o.name),
    s !== '' && (o.name = ''),
    (o.defaultChecked = !!o._wrapperState.initialChecked),
    s !== '' && (o.name = s)
}
function cb(o, e, s) {
  ;(e !== 'number' || Xa(o.ownerDocument) !== o) &&
    (s == null
      ? (o.defaultValue = '' + o._wrapperState.initialValue)
      : o.defaultValue !== '' + s && (o.defaultValue = '' + s))
}
var eb = Array.isArray
function fb(o, e, s, a) {
  if (((o = o.options), e)) {
    e = {}
    for (var c = 0; c < s.length; c++) e['$' + s[c]] = !0
    for (s = 0; s < o.length; s++)
      (c = e.hasOwnProperty('$' + o[s].value)),
        o[s].selected !== c && (o[s].selected = c),
        c && a && (o[s].defaultSelected = !0)
  } else {
    for (s = '' + Sa(s), e = null, c = 0; c < o.length; c++) {
      if (o[c].value === s) {
        ;(o[c].selected = !0), a && (o[c].defaultSelected = !0)
        return
      }
      e !== null || o[c].disabled || (e = o[c])
    }
    e !== null && (e.selected = !0)
  }
}
function gb(o, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(p(91))
  return A({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + o._wrapperState.initialValue
  })
}
function hb(o, e) {
  var s = e.value
  if (s == null) {
    if (((s = e.children), (e = e.defaultValue), s != null)) {
      if (e != null) throw Error(p(92))
      if (eb(s)) {
        if (1 < s.length) throw Error(p(93))
        s = s[0]
      }
      e = s
    }
    e == null && (e = ''), (s = e)
  }
  o._wrapperState = { initialValue: Sa(s) }
}
function ib(o, e) {
  var s = Sa(e.value),
    a = Sa(e.defaultValue)
  s != null &&
    ((s = '' + s),
    s !== o.value && (o.value = s),
    e.defaultValue == null && o.defaultValue !== s && (o.defaultValue = s)),
    a != null && (o.defaultValue = '' + a)
}
function jb(o) {
  var e = o.textContent
  e === o._wrapperState.initialValue && e !== '' && e !== null && (o.value = e)
}
function kb(o) {
  switch (o) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function lb(o, e) {
  return o == null || o === 'http://www.w3.org/1999/xhtml'
    ? kb(e)
    : o === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : o
}
var mb,
  nb = (function (o) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (e, s, a, c) {
          MSApp.execUnsafeLocalFunction(function () {
            return o(e, s, a, c)
          })
        }
      : o
  })(function (o, e) {
    if (o.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in o)
      o.innerHTML = e
    else {
      for (
        mb = mb || document.createElement('div'),
          mb.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = mb.firstChild;
        o.firstChild;

      )
        o.removeChild(o.firstChild)
      for (; e.firstChild; ) o.appendChild(e.firstChild)
    }
  })
function ob(o, e) {
  if (e) {
    var s = o.firstChild
    if (s && s === o.lastChild && s.nodeType === 3) {
      s.nodeValue = e
      return
    }
  }
  o.textContent = e
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  qb = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(pb).forEach(function (o) {
  qb.forEach(function (e) {
    ;(e = e + o.charAt(0).toUpperCase() + o.substring(1)), (pb[e] = pb[o])
  })
})
function rb(o, e, s) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : s || typeof e != 'number' || e === 0 || (pb.hasOwnProperty(o) && pb[o])
    ? ('' + e).trim()
    : e + 'px'
}
function sb(o, e) {
  o = o.style
  for (var s in e)
    if (e.hasOwnProperty(s)) {
      var a = s.indexOf('--') === 0,
        c = rb(s, e[s], a)
      s === 'float' && (s = 'cssFloat'), a ? o.setProperty(s, c) : (o[s] = c)
    }
}
var tb = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function ub(o, e) {
  if (e) {
    if (tb[o] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(p(137, o))
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(p(60))
      if (
        typeof e.dangerouslySetInnerHTML != 'object' ||
        !('__html' in e.dangerouslySetInnerHTML)
      )
        throw Error(p(61))
    }
    if (e.style != null && typeof e.style != 'object') throw Error(p(62))
  }
}
function vb(o, e) {
  if (o.indexOf('-') === -1) return typeof e.is == 'string'
  switch (o) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var wb = null
function xb(o) {
  return (
    (o = o.target || o.srcElement || window),
    o.correspondingUseElement && (o = o.correspondingUseElement),
    o.nodeType === 3 ? o.parentNode : o
  )
}
var yb = null,
  zb = null,
  Ab = null
function Bb(o) {
  if ((o = Cb(o))) {
    if (typeof yb != 'function') throw Error(p(280))
    var e = o.stateNode
    e && ((e = Db(e)), yb(o.stateNode, o.type, e))
  }
}
function Eb(o) {
  zb ? (Ab ? Ab.push(o) : (Ab = [o])) : (zb = o)
}
function Fb() {
  if (zb) {
    var o = zb,
      e = Ab
    if (((Ab = zb = null), Bb(o), e)) for (o = 0; o < e.length; o++) Bb(e[o])
  }
}
function Gb(o, e) {
  return o(e)
}
function Hb() {}
var Ib = !1
function Jb(o, e, s) {
  if (Ib) return o(e, s)
  Ib = !0
  try {
    return Gb(o, e, s)
  } finally {
    ;(Ib = !1), (zb !== null || Ab !== null) && (Hb(), Fb())
  }
}
function Kb(o, e) {
  var s = o.stateNode
  if (s === null) return null
  var a = Db(s)
  if (a === null) return null
  s = a[e]
  e: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(a = !a.disabled) ||
        ((o = o.type),
        (a = !(
          o === 'button' ||
          o === 'input' ||
          o === 'select' ||
          o === 'textarea'
        ))),
        (o = !a)
      break e
    default:
      o = !1
  }
  if (o) return null
  if (s && typeof s != 'function') throw Error(p(231, e, typeof s))
  return s
}
var Lb = !1
if (ia)
  try {
    var Mb = {}
    Object.defineProperty(Mb, 'passive', {
      get: function () {
        Lb = !0
      }
    }),
      window.addEventListener('test', Mb, Mb),
      window.removeEventListener('test', Mb, Mb)
  } catch {
    Lb = !1
  }
function Nb(o, e, s, a, c, h, d, g, b) {
  var $ = Array.prototype.slice.call(arguments, 3)
  try {
    e.apply(s, $)
  } catch (_) {
    this.onError(_)
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function (o) {
      ;(Ob = !0), (Pb = o)
    }
  }
function Tb(o, e, s, a, c, h, d, g, b) {
  ;(Ob = !1), (Pb = null), Nb.apply(Sb, arguments)
}
function Ub(o, e, s, a, c, h, d, g, b) {
  if ((Tb.apply(this, arguments), Ob)) {
    if (Ob) {
      var $ = Pb
      ;(Ob = !1), (Pb = null)
    } else throw Error(p(198))
    Qb || ((Qb = !0), (Rb = $))
  }
}
function Vb(o) {
  var e = o,
    s = o
  if (o.alternate) for (; e.return; ) e = e.return
  else {
    o = e
    do (e = o), e.flags & 4098 && (s = e.return), (o = e.return)
    while (o)
  }
  return e.tag === 3 ? s : null
}
function Wb(o) {
  if (o.tag === 13) {
    var e = o.memoizedState
    if (
      (e === null && ((o = o.alternate), o !== null && (e = o.memoizedState)),
      e !== null)
    )
      return e.dehydrated
  }
  return null
}
function Xb(o) {
  if (Vb(o) !== o) throw Error(p(188))
}
function Yb(o) {
  var e = o.alternate
  if (!e) {
    if (((e = Vb(o)), e === null)) throw Error(p(188))
    return e !== o ? null : o
  }
  for (var s = o, a = e; ; ) {
    var c = s.return
    if (c === null) break
    var h = c.alternate
    if (h === null) {
      if (((a = c.return), a !== null)) {
        s = a
        continue
      }
      break
    }
    if (c.child === h.child) {
      for (h = c.child; h; ) {
        if (h === s) return Xb(c), o
        if (h === a) return Xb(c), e
        h = h.sibling
      }
      throw Error(p(188))
    }
    if (s.return !== a.return) (s = c), (a = h)
    else {
      for (var d = !1, g = c.child; g; ) {
        if (g === s) {
          ;(d = !0), (s = c), (a = h)
          break
        }
        if (g === a) {
          ;(d = !0), (a = c), (s = h)
          break
        }
        g = g.sibling
      }
      if (!d) {
        for (g = h.child; g; ) {
          if (g === s) {
            ;(d = !0), (s = h), (a = c)
            break
          }
          if (g === a) {
            ;(d = !0), (a = h), (s = c)
            break
          }
          g = g.sibling
        }
        if (!d) throw Error(p(189))
      }
    }
    if (s.alternate !== a) throw Error(p(190))
  }
  if (s.tag !== 3) throw Error(p(188))
  return s.stateNode.current === s ? o : e
}
function Zb(o) {
  return (o = Yb(o)), o !== null ? $b(o) : null
}
function $b(o) {
  if (o.tag === 5 || o.tag === 6) return o
  for (o = o.child; o !== null; ) {
    var e = $b(o)
    if (e !== null) return e
    o = o.sibling
  }
  return null
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null
function mc(o) {
  if (lc && typeof lc.onCommitFiberRoot == 'function')
    try {
      lc.onCommitFiberRoot(kc, o, void 0, (o.current.flags & 128) === 128)
    } catch {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2
function nc(o) {
  return (o >>>= 0), o === 0 ? 32 : (31 - ((pc(o) / qc) | 0)) | 0
}
var rc = 64,
  sc = 4194304
function tc(o) {
  switch (o & -o) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return o & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return o & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return o
  }
}
function uc(o, e) {
  var s = o.pendingLanes
  if (s === 0) return 0
  var a = 0,
    c = o.suspendedLanes,
    h = o.pingedLanes,
    d = s & 268435455
  if (d !== 0) {
    var g = d & ~c
    g !== 0 ? (a = tc(g)) : ((h &= d), h !== 0 && (a = tc(h)))
  } else (d = s & ~c), d !== 0 ? (a = tc(d)) : h !== 0 && (a = tc(h))
  if (a === 0) return 0
  if (
    e !== 0 &&
    e !== a &&
    !(e & c) &&
    ((c = a & -a), (h = e & -e), c >= h || (c === 16 && (h & 4194240) !== 0))
  )
    return e
  if ((a & 4 && (a |= s & 16), (e = o.entangledLanes), e !== 0))
    for (o = o.entanglements, e &= a; 0 < e; )
      (s = 31 - oc(e)), (c = 1 << s), (a |= o[s]), (e &= ~c)
  return a
}
function vc(o, e) {
  switch (o) {
    case 1:
    case 2:
    case 4:
      return e + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function wc(o, e) {
  for (
    var s = o.suspendedLanes,
      a = o.pingedLanes,
      c = o.expirationTimes,
      h = o.pendingLanes;
    0 < h;

  ) {
    var d = 31 - oc(h),
      g = 1 << d,
      b = c[d]
    b === -1
      ? (!(g & s) || g & a) && (c[d] = vc(g, e))
      : b <= e && (o.expiredLanes |= g),
      (h &= ~g)
  }
}
function xc(o) {
  return (
    (o = o.pendingLanes & -1073741825),
    o !== 0 ? o : o & 1073741824 ? 1073741824 : 0
  )
}
function yc() {
  var o = rc
  return (rc <<= 1), !(rc & 4194240) && (rc = 64), o
}
function zc(o) {
  for (var e = [], s = 0; 31 > s; s++) e.push(o)
  return e
}
function Ac(o, e, s) {
  ;(o.pendingLanes |= e),
    e !== 536870912 && ((o.suspendedLanes = 0), (o.pingedLanes = 0)),
    (o = o.eventTimes),
    (e = 31 - oc(e)),
    (o[e] = s)
}
function Bc(o, e) {
  var s = o.pendingLanes & ~e
  ;(o.pendingLanes = e),
    (o.suspendedLanes = 0),
    (o.pingedLanes = 0),
    (o.expiredLanes &= e),
    (o.mutableReadLanes &= e),
    (o.entangledLanes &= e),
    (e = o.entanglements)
  var a = o.eventTimes
  for (o = o.expirationTimes; 0 < s; ) {
    var c = 31 - oc(s),
      h = 1 << c
    ;(e[c] = 0), (a[c] = -1), (o[c] = -1), (s &= ~h)
  }
}
function Cc(o, e) {
  var s = (o.entangledLanes |= e)
  for (o = o.entanglements; s; ) {
    var a = 31 - oc(s),
      c = 1 << a
    ;(c & e) | (o[a] & e) && (o[a] |= e), (s &= ~c)
  }
}
var C$1 = 0
function Dc(o) {
  return (o &= -o), 1 < o ? (4 < o ? (o & 268435455 ? 16 : 536870912) : 4) : 1
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Sc(o, e) {
  switch (o) {
    case 'focusin':
    case 'focusout':
      Lc = null
      break
    case 'dragenter':
    case 'dragleave':
      Mc = null
      break
    case 'mouseover':
    case 'mouseout':
      Nc = null
      break
    case 'pointerover':
    case 'pointerout':
      Oc.delete(e.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Pc.delete(e.pointerId)
  }
}
function Tc(o, e, s, a, c, h) {
  return o === null || o.nativeEvent !== h
    ? ((o = {
        blockedOn: e,
        domEventName: s,
        eventSystemFlags: a,
        nativeEvent: h,
        targetContainers: [c]
      }),
      e !== null && ((e = Cb(e)), e !== null && Fc(e)),
      o)
    : ((o.eventSystemFlags |= a),
      (e = o.targetContainers),
      c !== null && e.indexOf(c) === -1 && e.push(c),
      o)
}
function Uc(o, e, s, a, c) {
  switch (e) {
    case 'focusin':
      return (Lc = Tc(Lc, o, e, s, a, c)), !0
    case 'dragenter':
      return (Mc = Tc(Mc, o, e, s, a, c)), !0
    case 'mouseover':
      return (Nc = Tc(Nc, o, e, s, a, c)), !0
    case 'pointerover':
      var h = c.pointerId
      return Oc.set(h, Tc(Oc.get(h) || null, o, e, s, a, c)), !0
    case 'gotpointercapture':
      return (
        (h = c.pointerId), Pc.set(h, Tc(Pc.get(h) || null, o, e, s, a, c)), !0
      )
  }
  return !1
}
function Vc(o) {
  var e = Wc(o.target)
  if (e !== null) {
    var s = Vb(e)
    if (s !== null) {
      if (((e = s.tag), e === 13)) {
        if (((e = Wb(s)), e !== null)) {
          ;(o.blockedOn = e),
            Ic(o.priority, function () {
              Gc(s)
            })
          return
        }
      } else if (e === 3 && s.stateNode.current.memoizedState.isDehydrated) {
        o.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null
        return
      }
    }
  }
  o.blockedOn = null
}
function Xc(o) {
  if (o.blockedOn !== null) return !1
  for (var e = o.targetContainers; 0 < e.length; ) {
    var s = Yc(o.domEventName, o.eventSystemFlags, e[0], o.nativeEvent)
    if (s === null) {
      s = o.nativeEvent
      var a = new s.constructor(s.type, s)
      ;(wb = a), s.target.dispatchEvent(a), (wb = null)
    } else return (e = Cb(s)), e !== null && Fc(e), (o.blockedOn = s), !1
    e.shift()
  }
  return !0
}
function Zc(o, e, s) {
  Xc(o) && s.delete(e)
}
function $c() {
  ;(Jc = !1),
    Lc !== null && Xc(Lc) && (Lc = null),
    Mc !== null && Xc(Mc) && (Mc = null),
    Nc !== null && Xc(Nc) && (Nc = null),
    Oc.forEach(Zc),
    Pc.forEach(Zc)
}
function ad(o, e) {
  o.blockedOn === e &&
    ((o.blockedOn = null),
    Jc ||
      ((Jc = !0), ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)))
}
function bd(o) {
  function e(c) {
    return ad(c, o)
  }
  if (0 < Kc.length) {
    ad(Kc[0], o)
    for (var s = 1; s < Kc.length; s++) {
      var a = Kc[s]
      a.blockedOn === o && (a.blockedOn = null)
    }
  }
  for (
    Lc !== null && ad(Lc, o),
      Mc !== null && ad(Mc, o),
      Nc !== null && ad(Nc, o),
      Oc.forEach(e),
      Pc.forEach(e),
      s = 0;
    s < Qc.length;
    s++
  )
    (a = Qc[s]), a.blockedOn === o && (a.blockedOn = null)
  for (; 0 < Qc.length && ((s = Qc[0]), s.blockedOn === null); )
    Vc(s), s.blockedOn === null && Qc.shift()
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0
function ed(o, e, s, a) {
  var c = C$1,
    h = cd.transition
  cd.transition = null
  try {
    ;(C$1 = 1), fd(o, e, s, a)
  } finally {
    ;(C$1 = c), (cd.transition = h)
  }
}
function gd(o, e, s, a) {
  var c = C$1,
    h = cd.transition
  cd.transition = null
  try {
    ;(C$1 = 4), fd(o, e, s, a)
  } finally {
    ;(C$1 = c), (cd.transition = h)
  }
}
function fd(o, e, s, a) {
  if (dd) {
    var c = Yc(o, e, s, a)
    if (c === null) hd(o, e, a, id$1, s), Sc(o, a)
    else if (Uc(c, o, e, s, a)) a.stopPropagation()
    else if ((Sc(o, a), e & 4 && -1 < Rc.indexOf(o))) {
      for (; c !== null; ) {
        var h = Cb(c)
        if (
          (h !== null && Ec(h),
          (h = Yc(o, e, s, a)),
          h === null && hd(o, e, a, id$1, s),
          h === c)
        )
          break
        c = h
      }
      c !== null && a.stopPropagation()
    } else hd(o, e, a, null, s)
  }
}
var id$1 = null
function Yc(o, e, s, a) {
  if (((id$1 = null), (o = xb(a)), (o = Wc(o)), o !== null))
    if (((e = Vb(o)), e === null)) o = null
    else if (((s = e.tag), s === 13)) {
      if (((o = Wb(e)), o !== null)) return o
      o = null
    } else if (s === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null
      o = null
    } else e !== o && (o = null)
  return (id$1 = o), null
}
function jd(o) {
  switch (o) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (ec()) {
        case fc:
          return 1
        case gc:
          return 4
        case hc:
        case ic:
          return 16
        case jc:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var kd = null,
  ld = null,
  md = null
function nd() {
  if (md) return md
  var o,
    e = ld,
    s = e.length,
    a,
    c = 'value' in kd ? kd.value : kd.textContent,
    h = c.length
  for (o = 0; o < s && e[o] === c[o]; o++);
  var d = s - o
  for (a = 1; a <= d && e[s - a] === c[h - a]; a++);
  return (md = c.slice(o, 1 < a ? 1 - a : void 0))
}
function od(o) {
  var e = o.keyCode
  return (
    'charCode' in o
      ? ((o = o.charCode), o === 0 && e === 13 && (o = 13))
      : (o = e),
    o === 10 && (o = 13),
    32 <= o || o === 13 ? o : 0
  )
}
function pd() {
  return !0
}
function qd() {
  return !1
}
function rd(o) {
  function e(s, a, c, h, d) {
    ;(this._reactName = s),
      (this._targetInst = c),
      (this.type = a),
      (this.nativeEvent = h),
      (this.target = d),
      (this.currentTarget = null)
    for (var g in o)
      o.hasOwnProperty(g) && ((s = o[g]), (this[g] = s ? s(h) : h[g]))
    return (
      (this.isDefaultPrevented = (
        h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
      )
        ? pd
        : qd),
      (this.isPropagationStopped = qd),
      this
    )
  }
  return (
    A(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var s = this.nativeEvent
        s &&
          (s.preventDefault
            ? s.preventDefault()
            : typeof s.returnValue != 'unknown' && (s.returnValue = !1),
          (this.isDefaultPrevented = pd))
      },
      stopPropagation: function () {
        var s = this.nativeEvent
        s &&
          (s.stopPropagation
            ? s.stopPropagation()
            : typeof s.cancelBubble != 'unknown' && (s.cancelBubble = !0),
          (this.isPropagationStopped = pd))
      },
      persist: function () {},
      isPersistent: pd
    }),
    e
  )
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (o) {
      return o.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  td = rd(sd),
  ud = A({}, sd, { view: 0, detail: 0 }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (o) {
      return o.relatedTarget === void 0
        ? o.fromElement === o.srcElement
          ? o.toElement
          : o.fromElement
        : o.relatedTarget
    },
    movementX: function (o) {
      return 'movementX' in o
        ? o.movementX
        : (o !== yd &&
            (yd && o.type === 'mousemove'
              ? ((wd = o.screenX - yd.screenX), (xd = o.screenY - yd.screenY))
              : (xd = wd = 0),
            (yd = o)),
          wd)
    },
    movementY: function (o) {
      return 'movementY' in o ? o.movementY : xd
    }
  }),
  Bd = rd(Ad),
  Cd = A({}, Ad, { dataTransfer: 0 }),
  Dd = rd(Cd),
  Ed = A({}, ud, { relatedTarget: 0 }),
  Fd = rd(Ed),
  Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = rd(Gd),
  Id = A({}, sd, {
    clipboardData: function (o) {
      return 'clipboardData' in o ? o.clipboardData : window.clipboardData
    }
  }),
  Jd = rd(Id),
  Kd = A({}, sd, { data: 0 }),
  Ld = rd(Kd),
  Md = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  Nd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  Od = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Pd(o) {
  var e = this.nativeEvent
  return e.getModifierState ? e.getModifierState(o) : (o = Od[o]) ? !!e[o] : !1
}
function zd() {
  return Pd
}
var Qd = A({}, ud, {
    key: function (o) {
      if (o.key) {
        var e = Md[o.key] || o.key
        if (e !== 'Unidentified') return e
      }
      return o.type === 'keypress'
        ? ((o = od(o)), o === 13 ? 'Enter' : String.fromCharCode(o))
        : o.type === 'keydown' || o.type === 'keyup'
        ? Nd[o.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (o) {
      return o.type === 'keypress' ? od(o) : 0
    },
    keyCode: function (o) {
      return o.type === 'keydown' || o.type === 'keyup' ? o.keyCode : 0
    },
    which: function (o) {
      return o.type === 'keypress'
        ? od(o)
        : o.type === 'keydown' || o.type === 'keyup'
        ? o.keyCode
        : 0
    }
  }),
  Rd = rd(Qd),
  Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Td = rd(Sd),
  Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
  }),
  Vd = rd(Ud),
  Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = rd(Wd),
  Yd = A({}, Ad, {
    deltaX: function (o) {
      return 'deltaX' in o ? o.deltaX : 'wheelDeltaX' in o ? -o.wheelDeltaX : 0
    },
    deltaY: function (o) {
      return 'deltaY' in o
        ? o.deltaY
        : 'wheelDeltaY' in o
        ? -o.wheelDeltaY
        : 'wheelDelta' in o
        ? -o.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && 'CompositionEvent' in window,
  be = null
ia && 'documentMode' in document && (be = document.documentMode)
var ce = ia && 'TextEvent' in window && !be,
  de = ia && (!ae || (be && 8 < be && 11 >= be)),
  ee = String.fromCharCode(32),
  fe = !1
function ge(o, e) {
  switch (o) {
    case 'keyup':
      return $d.indexOf(e.keyCode) !== -1
    case 'keydown':
      return e.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function he(o) {
  return (o = o.detail), typeof o == 'object' && 'data' in o ? o.data : null
}
var ie$2 = !1
function je(o, e) {
  switch (o) {
    case 'compositionend':
      return he(e)
    case 'keypress':
      return e.which !== 32 ? null : ((fe = !0), ee)
    case 'textInput':
      return (o = e.data), o === ee && fe ? null : o
    default:
      return null
  }
}
function ke(o, e) {
  if (ie$2)
    return o === 'compositionend' || (!ae && ge(o, e))
      ? ((o = nd()), (md = ld = kd = null), (ie$2 = !1), o)
      : null
  switch (o) {
    case 'paste':
      return null
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char
        if (e.which) return String.fromCharCode(e.which)
      }
      return null
    case 'compositionend':
      return de && e.locale !== 'ko' ? null : e.data
    default:
      return null
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function me(o) {
  var e = o && o.nodeName && o.nodeName.toLowerCase()
  return e === 'input' ? !!le[o.type] : e === 'textarea'
}
function ne(o, e, s, a) {
  Eb(a),
    (e = oe(e, 'onChange')),
    0 < e.length &&
      ((s = new td('onChange', 'change', null, s, a)),
      o.push({ event: s, listeners: e }))
}
var pe = null,
  qe = null
function re(o) {
  se(o, 0)
}
function te(o) {
  var e = ue(o)
  if (Wa(e)) return o
}
function ve(o, e) {
  if (o === 'change') return e
}
var we = !1
if (ia) {
  var xe
  if (ia) {
    var ye = 'oninput' in document
    if (!ye) {
      var ze = document.createElement('div')
      ze.setAttribute('oninput', 'return;'),
        (ye = typeof ze.oninput == 'function')
    }
    xe = ye
  } else xe = !1
  we = xe && (!document.documentMode || 9 < document.documentMode)
}
function Ae() {
  pe && (pe.detachEvent('onpropertychange', Be), (qe = pe = null))
}
function Be(o) {
  if (o.propertyName === 'value' && te(qe)) {
    var e = []
    ne(e, qe, o, xb(o)), Jb(re, e)
  }
}
function Ce(o, e, s) {
  o === 'focusin'
    ? (Ae(), (pe = e), (qe = s), pe.attachEvent('onpropertychange', Be))
    : o === 'focusout' && Ae()
}
function De(o) {
  if (o === 'selectionchange' || o === 'keyup' || o === 'keydown') return te(qe)
}
function Ee(o, e) {
  if (o === 'click') return te(e)
}
function Fe(o, e) {
  if (o === 'input' || o === 'change') return te(e)
}
function Ge(o, e) {
  return (o === e && (o !== 0 || 1 / o === 1 / e)) || (o !== o && e !== e)
}
var He = typeof Object.is == 'function' ? Object.is : Ge
function Ie(o, e) {
  if (He(o, e)) return !0
  if (typeof o != 'object' || o === null || typeof e != 'object' || e === null)
    return !1
  var s = Object.keys(o),
    a = Object.keys(e)
  if (s.length !== a.length) return !1
  for (a = 0; a < s.length; a++) {
    var c = s[a]
    if (!ja.call(e, c) || !He(o[c], e[c])) return !1
  }
  return !0
}
function Je(o) {
  for (; o && o.firstChild; ) o = o.firstChild
  return o
}
function Ke(o, e) {
  var s = Je(o)
  o = 0
  for (var a; s; ) {
    if (s.nodeType === 3) {
      if (((a = o + s.textContent.length), o <= e && a >= e))
        return { node: s, offset: e - o }
      o = a
    }
    e: {
      for (; s; ) {
        if (s.nextSibling) {
          s = s.nextSibling
          break e
        }
        s = s.parentNode
      }
      s = void 0
    }
    s = Je(s)
  }
}
function Le(o, e) {
  return o && e
    ? o === e
      ? !0
      : o && o.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Le(o, e.parentNode)
      : 'contains' in o
      ? o.contains(e)
      : o.compareDocumentPosition
      ? !!(o.compareDocumentPosition(e) & 16)
      : !1
    : !1
}
function Me() {
  for (var o = window, e = Xa(); e instanceof o.HTMLIFrameElement; ) {
    try {
      var s = typeof e.contentWindow.location.href == 'string'
    } catch {
      s = !1
    }
    if (s) o = e.contentWindow
    else break
    e = Xa(o.document)
  }
  return e
}
function Ne(o) {
  var e = o && o.nodeName && o.nodeName.toLowerCase()
  return (
    e &&
    ((e === 'input' &&
      (o.type === 'text' ||
        o.type === 'search' ||
        o.type === 'tel' ||
        o.type === 'url' ||
        o.type === 'password')) ||
      e === 'textarea' ||
      o.contentEditable === 'true')
  )
}
function Oe(o) {
  var e = Me(),
    s = o.focusedElem,
    a = o.selectionRange
  if (
    e !== s &&
    s &&
    s.ownerDocument &&
    Le(s.ownerDocument.documentElement, s)
  ) {
    if (a !== null && Ne(s)) {
      if (
        ((e = a.start),
        (o = a.end),
        o === void 0 && (o = e),
        'selectionStart' in s)
      )
        (s.selectionStart = e), (s.selectionEnd = Math.min(o, s.value.length))
      else if (
        ((o = ((e = s.ownerDocument || document) && e.defaultView) || window),
        o.getSelection)
      ) {
        o = o.getSelection()
        var c = s.textContent.length,
          h = Math.min(a.start, c)
        ;(a = a.end === void 0 ? h : Math.min(a.end, c)),
          !o.extend && h > a && ((c = a), (a = h), (h = c)),
          (c = Ke(s, h))
        var d = Ke(s, a)
        c &&
          d &&
          (o.rangeCount !== 1 ||
            o.anchorNode !== c.node ||
            o.anchorOffset !== c.offset ||
            o.focusNode !== d.node ||
            o.focusOffset !== d.offset) &&
          ((e = e.createRange()),
          e.setStart(c.node, c.offset),
          o.removeAllRanges(),
          h > a
            ? (o.addRange(e), o.extend(d.node, d.offset))
            : (e.setEnd(d.node, d.offset), o.addRange(e)))
      }
    }
    for (e = [], o = s; (o = o.parentNode); )
      o.nodeType === 1 &&
        e.push({ element: o, left: o.scrollLeft, top: o.scrollTop })
    for (typeof s.focus == 'function' && s.focus(), s = 0; s < e.length; s++)
      (o = e[s]), (o.element.scrollLeft = o.left), (o.element.scrollTop = o.top)
  }
}
var Pe = ia && 'documentMode' in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1
function Ue(o, e, s) {
  var a = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument
  Te ||
    Qe == null ||
    Qe !== Xa(a) ||
    ((a = Qe),
    'selectionStart' in a && Ne(a)
      ? (a = { start: a.selectionStart, end: a.selectionEnd })
      : ((a = (
          (a.ownerDocument && a.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (a = {
          anchorNode: a.anchorNode,
          anchorOffset: a.anchorOffset,
          focusNode: a.focusNode,
          focusOffset: a.focusOffset
        })),
    (Se && Ie(Se, a)) ||
      ((Se = a),
      (a = oe(Re, 'onSelect')),
      0 < a.length &&
        ((e = new td('onSelect', 'select', null, e, s)),
        o.push({ event: e, listeners: a }),
        (e.target = Qe))))
}
function Ve(o, e) {
  var s = {}
  return (
    (s[o.toLowerCase()] = e.toLowerCase()),
    (s['Webkit' + o] = 'webkit' + e),
    (s['Moz' + o] = 'moz' + e),
    s
  )
}
var We = {
    animationend: Ve('Animation', 'AnimationEnd'),
    animationiteration: Ve('Animation', 'AnimationIteration'),
    animationstart: Ve('Animation', 'AnimationStart'),
    transitionend: Ve('Transition', 'TransitionEnd')
  },
  Xe = {},
  Ye = {}
ia &&
  ((Ye = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete We.animationend.animation,
    delete We.animationiteration.animation,
    delete We.animationstart.animation),
  'TransitionEvent' in window || delete We.transitionend.transition)
function Ze(o) {
  if (Xe[o]) return Xe[o]
  if (!We[o]) return o
  var e = We[o],
    s
  for (s in e) if (e.hasOwnProperty(s) && s in Ye) return (Xe[o] = e[s])
  return o
}
var $e = Ze('animationend'),
  af = Ze('animationiteration'),
  bf = Ze('animationstart'),
  cf = Ze('transitionend'),
  df = new Map(),
  ef =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function ff(o, e) {
  df.set(o, e), fa(e, [o])
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1)
  ff(jf, 'on' + kf)
}
ff($e, 'onAnimationEnd')
ff(af, 'onAnimationIteration')
ff(bf, 'onAnimationStart')
ff('dblclick', 'onDoubleClick')
ff('focusin', 'onFocus')
ff('focusout', 'onBlur')
ff(cf, 'onTransitionEnd')
ha('onMouseEnter', ['mouseout', 'mouseover'])
ha('onMouseLeave', ['mouseout', 'mouseover'])
ha('onPointerEnter', ['pointerout', 'pointerover'])
ha('onPointerLeave', ['pointerout', 'pointerover'])
fa(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
fa(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
fa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
fa(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
fa(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
fa(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var lf =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  mf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(lf))
function nf(o, e, s) {
  var a = o.type || 'unknown-event'
  ;(o.currentTarget = s), Ub(a, e, void 0, o), (o.currentTarget = null)
}
function se(o, e) {
  e = (e & 4) !== 0
  for (var s = 0; s < o.length; s++) {
    var a = o[s],
      c = a.event
    a = a.listeners
    e: {
      var h = void 0
      if (e)
        for (var d = a.length - 1; 0 <= d; d--) {
          var g = a[d],
            b = g.instance,
            $ = g.currentTarget
          if (((g = g.listener), b !== h && c.isPropagationStopped())) break e
          nf(c, g, $), (h = b)
        }
      else
        for (d = 0; d < a.length; d++) {
          if (
            ((g = a[d]),
            (b = g.instance),
            ($ = g.currentTarget),
            (g = g.listener),
            b !== h && c.isPropagationStopped())
          )
            break e
          nf(c, g, $), (h = b)
        }
    }
  }
  if (Qb) throw ((o = Rb), (Qb = !1), (Rb = null), o)
}
function D(o, e) {
  var s = e[of]
  s === void 0 && (s = e[of] = new Set())
  var a = o + '__bubble'
  s.has(a) || (pf(e, o, 2, !1), s.add(a))
}
function qf(o, e, s) {
  var a = 0
  e && (a |= 4), pf(s, o, a, e)
}
var rf = '_reactListening' + Math.random().toString(36).slice(2)
function sf(o) {
  if (!o[rf]) {
    ;(o[rf] = !0),
      da.forEach(function (s) {
        s !== 'selectionchange' && (mf.has(s) || qf(s, !1, o), qf(s, !0, o))
      })
    var e = o.nodeType === 9 ? o : o.ownerDocument
    e === null || e[rf] || ((e[rf] = !0), qf('selectionchange', !1, e))
  }
}
function pf(o, e, s, a) {
  switch (jd(e)) {
    case 1:
      var c = ed
      break
    case 4:
      c = gd
      break
    default:
      c = fd
  }
  ;(s = c.bind(null, e, s, o)),
    (c = void 0),
    !Lb ||
      (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
      (c = !0),
    a
      ? c !== void 0
        ? o.addEventListener(e, s, { capture: !0, passive: c })
        : o.addEventListener(e, s, !0)
      : c !== void 0
      ? o.addEventListener(e, s, { passive: c })
      : o.addEventListener(e, s, !1)
}
function hd(o, e, s, a, c) {
  var h = a
  if (!(e & 1) && !(e & 2) && a !== null)
    e: for (;;) {
      if (a === null) return
      var d = a.tag
      if (d === 3 || d === 4) {
        var g = a.stateNode.containerInfo
        if (g === c || (g.nodeType === 8 && g.parentNode === c)) break
        if (d === 4)
          for (d = a.return; d !== null; ) {
            var b = d.tag
            if (
              (b === 3 || b === 4) &&
              ((b = d.stateNode.containerInfo),
              b === c || (b.nodeType === 8 && b.parentNode === c))
            )
              return
            d = d.return
          }
        for (; g !== null; ) {
          if (((d = Wc(g)), d === null)) return
          if (((b = d.tag), b === 5 || b === 6)) {
            a = h = d
            continue e
          }
          g = g.parentNode
        }
      }
      a = a.return
    }
  Jb(function () {
    var $ = h,
      _ = xb(s),
      j = []
    e: {
      var _e = df.get(o)
      if (_e !== void 0) {
        var et = td,
          tt = o
        switch (o) {
          case 'keypress':
            if (od(s) === 0) break e
          case 'keydown':
          case 'keyup':
            et = Rd
            break
          case 'focusin':
            ;(tt = 'focus'), (et = Fd)
            break
          case 'focusout':
            ;(tt = 'blur'), (et = Fd)
            break
          case 'beforeblur':
          case 'afterblur':
            et = Fd
            break
          case 'click':
            if (s.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            et = Bd
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            et = Dd
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            et = Vd
            break
          case $e:
          case af:
          case bf:
            et = Hd
            break
          case cf:
            et = Xd
            break
          case 'scroll':
            et = vd
            break
          case 'wheel':
            et = Zd
            break
          case 'copy':
          case 'cut':
          case 'paste':
            et = Jd
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            et = Td
        }
        var rt = (e & 4) !== 0,
          st = !rt && o === 'scroll',
          nt = rt ? (_e !== null ? _e + 'Capture' : null) : _e
        rt = []
        for (var it = $, ot; it !== null; ) {
          ot = it
          var lt = ot.stateNode
          if (
            (ot.tag === 5 &&
              lt !== null &&
              ((ot = lt),
              nt !== null &&
                ((lt = Kb(it, nt)), lt != null && rt.push(tf(it, lt, ot)))),
            st)
          )
            break
          it = it.return
        }
        0 < rt.length &&
          ((_e = new et(_e, tt, null, s, _)),
          j.push({ event: _e, listeners: rt }))
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((_e = o === 'mouseover' || o === 'pointerover'),
          (et = o === 'mouseout' || o === 'pointerout'),
          _e &&
            s !== wb &&
            (tt = s.relatedTarget || s.fromElement) &&
            (Wc(tt) || tt[uf]))
        )
          break e
        if (
          (et || _e) &&
          ((_e =
            _.window === _
              ? _
              : (_e = _.ownerDocument)
              ? _e.defaultView || _e.parentWindow
              : window),
          et
            ? ((tt = s.relatedTarget || s.toElement),
              (et = $),
              (tt = tt ? Wc(tt) : null),
              tt !== null &&
                ((st = Vb(tt)), tt !== st || (tt.tag !== 5 && tt.tag !== 6)) &&
                (tt = null))
            : ((et = null), (tt = $)),
          et !== tt)
        ) {
          if (
            ((rt = Bd),
            (lt = 'onMouseLeave'),
            (nt = 'onMouseEnter'),
            (it = 'mouse'),
            (o === 'pointerout' || o === 'pointerover') &&
              ((rt = Td),
              (lt = 'onPointerLeave'),
              (nt = 'onPointerEnter'),
              (it = 'pointer')),
            (st = et == null ? _e : ue(et)),
            (ot = tt == null ? _e : ue(tt)),
            (_e = new rt(lt, it + 'leave', et, s, _)),
            (_e.target = st),
            (_e.relatedTarget = ot),
            (lt = null),
            Wc(_) === $ &&
              ((rt = new rt(nt, it + 'enter', tt, s, _)),
              (rt.target = ot),
              (rt.relatedTarget = st),
              (lt = rt)),
            (st = lt),
            et && tt)
          )
            t: {
              for (rt = et, nt = tt, it = 0, ot = rt; ot; ot = vf(ot)) it++
              for (ot = 0, lt = nt; lt; lt = vf(lt)) ot++
              for (; 0 < it - ot; ) (rt = vf(rt)), it--
              for (; 0 < ot - it; ) (nt = vf(nt)), ot--
              for (; it--; ) {
                if (rt === nt || (nt !== null && rt === nt.alternate)) break t
                ;(rt = vf(rt)), (nt = vf(nt))
              }
              rt = null
            }
          else rt = null
          et !== null && wf(j, _e, et, rt, !1),
            tt !== null && st !== null && wf(j, st, tt, rt, !0)
        }
      }
      e: {
        if (
          ((_e = $ ? ue($) : window),
          (et = _e.nodeName && _e.nodeName.toLowerCase()),
          et === 'select' || (et === 'input' && _e.type === 'file'))
        )
          var at = ve
        else if (me(_e))
          if (we) at = Fe
          else {
            at = De
            var ct = Ce
          }
        else
          (et = _e.nodeName) &&
            et.toLowerCase() === 'input' &&
            (_e.type === 'checkbox' || _e.type === 'radio') &&
            (at = Ee)
        if (at && (at = at(o, $))) {
          ne(j, at, s, _)
          break e
        }
        ct && ct(o, _e, $),
          o === 'focusout' &&
            (ct = _e._wrapperState) &&
            ct.controlled &&
            _e.type === 'number' &&
            cb(_e, 'number', _e.value)
      }
      switch (((ct = $ ? ue($) : window), o)) {
        case 'focusin':
          ;(me(ct) || ct.contentEditable === 'true') &&
            ((Qe = ct), (Re = $), (Se = null))
          break
        case 'focusout':
          Se = Re = Qe = null
          break
        case 'mousedown':
          Te = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Te = !1), Ue(j, s, _)
          break
        case 'selectionchange':
          if (Pe) break
        case 'keydown':
        case 'keyup':
          Ue(j, s, _)
      }
      var ut
      if (ae)
        e: {
          switch (o) {
            case 'compositionstart':
              var ht = 'onCompositionStart'
              break e
            case 'compositionend':
              ht = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              ht = 'onCompositionUpdate'
              break e
          }
          ht = void 0
        }
      else
        ie$2
          ? ge(o, s) && (ht = 'onCompositionEnd')
          : o === 'keydown' && s.keyCode === 229 && (ht = 'onCompositionStart')
      ht &&
        (de &&
          s.locale !== 'ko' &&
          (ie$2 || ht !== 'onCompositionStart'
            ? ht === 'onCompositionEnd' && ie$2 && (ut = nd())
            : ((kd = _),
              (ld = 'value' in kd ? kd.value : kd.textContent),
              (ie$2 = !0))),
        (ct = oe($, ht)),
        0 < ct.length &&
          ((ht = new Ld(ht, o, null, s, _)),
          j.push({ event: ht, listeners: ct }),
          ut ? (ht.data = ut) : ((ut = he(s)), ut !== null && (ht.data = ut)))),
        (ut = ce ? je(o, s) : ke(o, s)) &&
          (($ = oe($, 'onBeforeInput')),
          0 < $.length &&
            ((_ = new Ld('onBeforeInput', 'beforeinput', null, s, _)),
            j.push({ event: _, listeners: $ }),
            (_.data = ut)))
    }
    se(j, e)
  })
}
function tf(o, e, s) {
  return { instance: o, listener: e, currentTarget: s }
}
function oe(o, e) {
  for (var s = e + 'Capture', a = []; o !== null; ) {
    var c = o,
      h = c.stateNode
    c.tag === 5 &&
      h !== null &&
      ((c = h),
      (h = Kb(o, s)),
      h != null && a.unshift(tf(o, h, c)),
      (h = Kb(o, e)),
      h != null && a.push(tf(o, h, c))),
      (o = o.return)
  }
  return a
}
function vf(o) {
  if (o === null) return null
  do o = o.return
  while (o && o.tag !== 5)
  return o || null
}
function wf(o, e, s, a, c) {
  for (var h = e._reactName, d = []; s !== null && s !== a; ) {
    var g = s,
      b = g.alternate,
      $ = g.stateNode
    if (b !== null && b === a) break
    g.tag === 5 &&
      $ !== null &&
      ((g = $),
      c
        ? ((b = Kb(s, h)), b != null && d.unshift(tf(s, b, g)))
        : c || ((b = Kb(s, h)), b != null && d.push(tf(s, b, g)))),
      (s = s.return)
  }
  d.length !== 0 && o.push({ event: e, listeners: d })
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g
function zf(o) {
  return (typeof o == 'string' ? o : '' + o)
    .replace(
      xf,
      `
`
    )
    .replace(yf, '')
}
function Af(o, e, s) {
  if (((e = zf(e)), zf(o) !== e && s)) throw Error(p(425))
}
function Bf() {}
var Cf = null,
  Df = null
function Ef(o, e) {
  return (
    o === 'textarea' ||
    o === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  )
}
var Ff = typeof setTimeout == 'function' ? setTimeout : void 0,
  Gf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Hf = typeof Promise == 'function' ? Promise : void 0,
  Jf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Hf < 'u'
      ? function (o) {
          return Hf.resolve(null).then(o).catch(If)
        }
      : Ff
function If(o) {
  setTimeout(function () {
    throw o
  })
}
function Kf(o, e) {
  var s = e,
    a = 0
  do {
    var c = s.nextSibling
    if ((o.removeChild(s), c && c.nodeType === 8))
      if (((s = c.data), s === '/$')) {
        if (a === 0) {
          o.removeChild(c), bd(e)
          return
        }
        a--
      } else (s !== '$' && s !== '$?' && s !== '$!') || a++
    s = c
  } while (s)
  bd(e)
}
function Lf(o) {
  for (; o != null; o = o.nextSibling) {
    var e = o.nodeType
    if (e === 1 || e === 3) break
    if (e === 8) {
      if (((e = o.data), e === '$' || e === '$!' || e === '$?')) break
      if (e === '/$') return null
    }
  }
  return o
}
function Mf(o) {
  o = o.previousSibling
  for (var e = 0; o; ) {
    if (o.nodeType === 8) {
      var s = o.data
      if (s === '$' || s === '$!' || s === '$?') {
        if (e === 0) return o
        e--
      } else s === '/$' && e++
    }
    o = o.previousSibling
  }
  return null
}
var Nf = Math.random().toString(36).slice(2),
  Of = '__reactFiber$' + Nf,
  Pf = '__reactProps$' + Nf,
  uf = '__reactContainer$' + Nf,
  of = '__reactEvents$' + Nf,
  Qf = '__reactListeners$' + Nf,
  Rf = '__reactHandles$' + Nf
function Wc(o) {
  var e = o[Of]
  if (e) return e
  for (var s = o.parentNode; s; ) {
    if ((e = s[uf] || s[Of])) {
      if (
        ((s = e.alternate),
        e.child !== null || (s !== null && s.child !== null))
      )
        for (o = Mf(o); o !== null; ) {
          if ((s = o[Of])) return s
          o = Mf(o)
        }
      return e
    }
    ;(o = s), (s = o.parentNode)
  }
  return null
}
function Cb(o) {
  return (
    (o = o[Of] || o[uf]),
    !o || (o.tag !== 5 && o.tag !== 6 && o.tag !== 13 && o.tag !== 3) ? null : o
  )
}
function ue(o) {
  if (o.tag === 5 || o.tag === 6) return o.stateNode
  throw Error(p(33))
}
function Db(o) {
  return o[Pf] || null
}
var Sf = [],
  Tf = -1
function Uf(o) {
  return { current: o }
}
function E(o) {
  0 > Tf || ((o.current = Sf[Tf]), (Sf[Tf] = null), Tf--)
}
function G(o, e) {
  Tf++, (Sf[Tf] = o.current), (o.current = e)
}
var Vf = {},
  H = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf
function Yf(o, e) {
  var s = o.type.contextTypes
  if (!s) return Vf
  var a = o.stateNode
  if (a && a.__reactInternalMemoizedUnmaskedChildContext === e)
    return a.__reactInternalMemoizedMaskedChildContext
  var c = {},
    h
  for (h in s) c[h] = e[h]
  return (
    a &&
      ((o = o.stateNode),
      (o.__reactInternalMemoizedUnmaskedChildContext = e),
      (o.__reactInternalMemoizedMaskedChildContext = c)),
    c
  )
}
function Zf(o) {
  return (o = o.childContextTypes), o != null
}
function $f() {
  E(Wf), E(H)
}
function ag(o, e, s) {
  if (H.current !== Vf) throw Error(p(168))
  G(H, e), G(Wf, s)
}
function bg(o, e, s) {
  var a = o.stateNode
  if (((e = e.childContextTypes), typeof a.getChildContext != 'function'))
    return s
  a = a.getChildContext()
  for (var c in a) if (!(c in e)) throw Error(p(108, Ra(o) || 'Unknown', c))
  return A({}, s, a)
}
function cg(o) {
  return (
    (o =
      ((o = o.stateNode) && o.__reactInternalMemoizedMergedChildContext) || Vf),
    (Xf = H.current),
    G(H, o),
    G(Wf, Wf.current),
    !0
  )
}
function dg(o, e, s) {
  var a = o.stateNode
  if (!a) throw Error(p(169))
  s
    ? ((o = bg(o, e, Xf)),
      (a.__reactInternalMemoizedMergedChildContext = o),
      E(Wf),
      E(H),
      G(H, o))
    : E(Wf),
    G(Wf, s)
}
var eg = null,
  fg = !1,
  gg = !1
function hg(o) {
  eg === null ? (eg = [o]) : eg.push(o)
}
function ig(o) {
  ;(fg = !0), hg(o)
}
function jg() {
  if (!gg && eg !== null) {
    gg = !0
    var o = 0,
      e = C$1
    try {
      var s = eg
      for (C$1 = 1; o < s.length; o++) {
        var a = s[o]
        do a = a(!0)
        while (a !== null)
      }
      ;(eg = null), (fg = !1)
    } catch (c) {
      throw (eg !== null && (eg = eg.slice(o + 1)), ac(fc, jg), c)
    } finally {
      ;(C$1 = e), (gg = !1)
    }
  }
  return null
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = ''
function tg(o, e) {
  ;(kg[lg++] = ng), (kg[lg++] = mg), (mg = o), (ng = e)
}
function ug(o, e, s) {
  ;(og[pg++] = rg), (og[pg++] = sg), (og[pg++] = qg), (qg = o)
  var a = rg
  o = sg
  var c = 32 - oc(a) - 1
  ;(a &= ~(1 << c)), (s += 1)
  var h = 32 - oc(e) + c
  if (30 < h) {
    var d = c - (c % 5)
    ;(h = (a & ((1 << d) - 1)).toString(32)),
      (a >>= d),
      (c -= d),
      (rg = (1 << (32 - oc(e) + c)) | (s << c) | a),
      (sg = h + o)
  } else (rg = (1 << h) | (s << c) | a), (sg = o)
}
function vg(o) {
  o.return !== null && (tg(o, 1), ug(o, 1, 0))
}
function wg(o) {
  for (; o === mg; )
    (mg = kg[--lg]), (kg[lg] = null), (ng = kg[--lg]), (kg[lg] = null)
  for (; o === qg; )
    (qg = og[--pg]),
      (og[pg] = null),
      (sg = og[--pg]),
      (og[pg] = null),
      (rg = og[--pg]),
      (og[pg] = null)
}
var xg = null,
  yg = null,
  I = !1,
  zg = null
function Ag(o, e) {
  var s = Bg(5, null, null, 0)
  ;(s.elementType = 'DELETED'),
    (s.stateNode = e),
    (s.return = o),
    (e = o.deletions),
    e === null ? ((o.deletions = [s]), (o.flags |= 16)) : e.push(s)
}
function Cg(o, e) {
  switch (o.tag) {
    case 5:
      var s = o.type
      return (
        (e =
          e.nodeType !== 1 || s.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((o.stateNode = e), (xg = o), (yg = Lf(e.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (e = o.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((o.stateNode = e), (xg = o), (yg = null), !0) : !1
      )
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((s = qg !== null ? { id: rg, overflow: sg } : null),
            (o.memoizedState = {
              dehydrated: e,
              treeContext: s,
              retryLane: 1073741824
            }),
            (s = Bg(18, null, null, 0)),
            (s.stateNode = e),
            (s.return = o),
            (o.child = s),
            (xg = o),
            (yg = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Dg(o) {
  return (o.mode & 1) !== 0 && (o.flags & 128) === 0
}
function Eg(o) {
  if (I) {
    var e = yg
    if (e) {
      var s = e
      if (!Cg(o, e)) {
        if (Dg(o)) throw Error(p(418))
        e = Lf(s.nextSibling)
        var a = xg
        e && Cg(o, e)
          ? Ag(a, s)
          : ((o.flags = (o.flags & -4097) | 2), (I = !1), (xg = o))
      }
    } else {
      if (Dg(o)) throw Error(p(418))
      ;(o.flags = (o.flags & -4097) | 2), (I = !1), (xg = o)
    }
  }
}
function Fg(o) {
  for (o = o.return; o !== null && o.tag !== 5 && o.tag !== 3 && o.tag !== 13; )
    o = o.return
  xg = o
}
function Gg(o) {
  if (o !== xg) return !1
  if (!I) return Fg(o), (I = !0), !1
  var e
  if (
    ((e = o.tag !== 3) &&
      !(e = o.tag !== 5) &&
      ((e = o.type),
      (e = e !== 'head' && e !== 'body' && !Ef(o.type, o.memoizedProps))),
    e && (e = yg))
  ) {
    if (Dg(o)) throw (Hg(), Error(p(418)))
    for (; e; ) Ag(o, e), (e = Lf(e.nextSibling))
  }
  if ((Fg(o), o.tag === 13)) {
    if (((o = o.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
      throw Error(p(317))
    e: {
      for (o = o.nextSibling, e = 0; o; ) {
        if (o.nodeType === 8) {
          var s = o.data
          if (s === '/$') {
            if (e === 0) {
              yg = Lf(o.nextSibling)
              break e
            }
            e--
          } else (s !== '$' && s !== '$!' && s !== '$?') || e++
        }
        o = o.nextSibling
      }
      yg = null
    }
  } else yg = xg ? Lf(o.stateNode.nextSibling) : null
  return !0
}
function Hg() {
  for (var o = yg; o; ) o = Lf(o.nextSibling)
}
function Ig() {
  ;(yg = xg = null), (I = !1)
}
function Jg(o) {
  zg === null ? (zg = [o]) : zg.push(o)
}
var Kg = ua.ReactCurrentBatchConfig
function Lg(o, e) {
  if (o && o.defaultProps) {
    ;(e = A({}, e)), (o = o.defaultProps)
    for (var s in o) e[s] === void 0 && (e[s] = o[s])
    return e
  }
  return e
}
var Mg = Uf(null),
  Ng = null,
  Og = null,
  Pg = null
function Qg() {
  Pg = Og = Ng = null
}
function Rg(o) {
  var e = Mg.current
  E(Mg), (o._currentValue = e)
}
function Sg(o, e, s) {
  for (; o !== null; ) {
    var a = o.alternate
    if (
      ((o.childLanes & e) !== e
        ? ((o.childLanes |= e), a !== null && (a.childLanes |= e))
        : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
      o === s)
    )
      break
    o = o.return
  }
}
function Tg(o, e) {
  ;(Ng = o),
    (Pg = Og = null),
    (o = o.dependencies),
    o !== null &&
      o.firstContext !== null &&
      (o.lanes & e && (Ug = !0), (o.firstContext = null))
}
function Vg(o) {
  var e = o._currentValue
  if (Pg !== o)
    if (((o = { context: o, memoizedValue: e, next: null }), Og === null)) {
      if (Ng === null) throw Error(p(308))
      ;(Og = o), (Ng.dependencies = { lanes: 0, firstContext: o })
    } else Og = Og.next = o
  return e
}
var Wg = null
function Xg(o) {
  Wg === null ? (Wg = [o]) : Wg.push(o)
}
function Yg(o, e, s, a) {
  var c = e.interleaved
  return (
    c === null ? ((s.next = s), Xg(e)) : ((s.next = c.next), (c.next = s)),
    (e.interleaved = s),
    Zg(o, a)
  )
}
function Zg(o, e) {
  o.lanes |= e
  var s = o.alternate
  for (s !== null && (s.lanes |= e), s = o, o = o.return; o !== null; )
    (o.childLanes |= e),
      (s = o.alternate),
      s !== null && (s.childLanes |= e),
      (s = o),
      (o = o.return)
  return s.tag === 3 ? s.stateNode : null
}
var $g = !1
function ah(o) {
  o.updateQueue = {
    baseState: o.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function bh(o, e) {
  ;(o = o.updateQueue),
    e.updateQueue === o &&
      (e.updateQueue = {
        baseState: o.baseState,
        firstBaseUpdate: o.firstBaseUpdate,
        lastBaseUpdate: o.lastBaseUpdate,
        shared: o.shared,
        effects: o.effects
      })
}
function ch(o, e) {
  return {
    eventTime: o,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function dh(o, e, s) {
  var a = o.updateQueue
  if (a === null) return null
  if (((a = a.shared), K & 2)) {
    var c = a.pending
    return (
      c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
      (a.pending = e),
      Zg(o, s)
    )
  }
  return (
    (c = a.interleaved),
    c === null ? ((e.next = e), Xg(a)) : ((e.next = c.next), (c.next = e)),
    (a.interleaved = e),
    Zg(o, s)
  )
}
function eh(o, e, s) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (s & 4194240) !== 0))
  ) {
    var a = e.lanes
    ;(a &= o.pendingLanes), (s |= a), (e.lanes = s), Cc(o, s)
  }
}
function fh(o, e) {
  var s = o.updateQueue,
    a = o.alternate
  if (a !== null && ((a = a.updateQueue), s === a)) {
    var c = null,
      h = null
    if (((s = s.firstBaseUpdate), s !== null)) {
      do {
        var d = {
          eventTime: s.eventTime,
          lane: s.lane,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        }
        h === null ? (c = h = d) : (h = h.next = d), (s = s.next)
      } while (s !== null)
      h === null ? (c = h = e) : (h = h.next = e)
    } else c = h = e
    ;(s = {
      baseState: a.baseState,
      firstBaseUpdate: c,
      lastBaseUpdate: h,
      shared: a.shared,
      effects: a.effects
    }),
      (o.updateQueue = s)
    return
  }
  ;(o = s.lastBaseUpdate),
    o === null ? (s.firstBaseUpdate = e) : (o.next = e),
    (s.lastBaseUpdate = e)
}
function gh(o, e, s, a) {
  var c = o.updateQueue
  $g = !1
  var h = c.firstBaseUpdate,
    d = c.lastBaseUpdate,
    g = c.shared.pending
  if (g !== null) {
    c.shared.pending = null
    var b = g,
      $ = b.next
    ;(b.next = null), d === null ? (h = $) : (d.next = $), (d = b)
    var _ = o.alternate
    _ !== null &&
      ((_ = _.updateQueue),
      (g = _.lastBaseUpdate),
      g !== d &&
        (g === null ? (_.firstBaseUpdate = $) : (g.next = $),
        (_.lastBaseUpdate = b)))
  }
  if (h !== null) {
    var j = c.baseState
    ;(d = 0), (_ = $ = b = null), (g = h)
    do {
      var _e = g.lane,
        et = g.eventTime
      if ((a & _e) === _e) {
        _ !== null &&
          (_ = _.next =
            {
              eventTime: et,
              lane: 0,
              tag: g.tag,
              payload: g.payload,
              callback: g.callback,
              next: null
            })
        e: {
          var tt = o,
            rt = g
          switch (((_e = e), (et = s), rt.tag)) {
            case 1:
              if (((tt = rt.payload), typeof tt == 'function')) {
                j = tt.call(et, j, _e)
                break e
              }
              j = tt
              break e
            case 3:
              tt.flags = (tt.flags & -65537) | 128
            case 0:
              if (
                ((tt = rt.payload),
                (_e = typeof tt == 'function' ? tt.call(et, j, _e) : tt),
                _e == null)
              )
                break e
              j = A({}, j, _e)
              break e
            case 2:
              $g = !0
          }
        }
        g.callback !== null &&
          g.lane !== 0 &&
          ((o.flags |= 64),
          (_e = c.effects),
          _e === null ? (c.effects = [g]) : _e.push(g))
      } else
        (et = {
          eventTime: et,
          lane: _e,
          tag: g.tag,
          payload: g.payload,
          callback: g.callback,
          next: null
        }),
          _ === null ? (($ = _ = et), (b = j)) : (_ = _.next = et),
          (d |= _e)
      if (((g = g.next), g === null)) {
        if (((g = c.shared.pending), g === null)) break
        ;(_e = g),
          (g = _e.next),
          (_e.next = null),
          (c.lastBaseUpdate = _e),
          (c.shared.pending = null)
      }
    } while (1)
    if (
      (_ === null && (b = j),
      (c.baseState = b),
      (c.firstBaseUpdate = $),
      (c.lastBaseUpdate = _),
      (e = c.shared.interleaved),
      e !== null)
    ) {
      c = e
      do (d |= c.lane), (c = c.next)
      while (c !== e)
    } else h === null && (c.shared.lanes = 0)
    ;(hh |= d), (o.lanes = d), (o.memoizedState = j)
  }
}
function ih(o, e, s) {
  if (((o = e.effects), (e.effects = null), o !== null))
    for (e = 0; e < o.length; e++) {
      var a = o[e],
        c = a.callback
      if (c !== null) {
        if (((a.callback = null), (a = s), typeof c != 'function'))
          throw Error(p(191, c))
        c.call(a)
      }
    }
}
var jh = new aa.Component().refs
function kh(o, e, s, a) {
  ;(e = o.memoizedState),
    (s = s(a, e)),
    (s = s == null ? e : A({}, e, s)),
    (o.memoizedState = s),
    o.lanes === 0 && (o.updateQueue.baseState = s)
}
var nh = {
  isMounted: function (o) {
    return (o = o._reactInternals) ? Vb(o) === o : !1
  },
  enqueueSetState: function (o, e, s) {
    o = o._reactInternals
    var a = L(),
      c = lh(o),
      h = ch(a, c)
    ;(h.payload = e),
      s != null && (h.callback = s),
      (e = dh(o, h, c)),
      e !== null && (mh(e, o, c, a), eh(e, o, c))
  },
  enqueueReplaceState: function (o, e, s) {
    o = o._reactInternals
    var a = L(),
      c = lh(o),
      h = ch(a, c)
    ;(h.tag = 1),
      (h.payload = e),
      s != null && (h.callback = s),
      (e = dh(o, h, c)),
      e !== null && (mh(e, o, c, a), eh(e, o, c))
  },
  enqueueForceUpdate: function (o, e) {
    o = o._reactInternals
    var s = L(),
      a = lh(o),
      c = ch(s, a)
    ;(c.tag = 2),
      e != null && (c.callback = e),
      (e = dh(o, c, a)),
      e !== null && (mh(e, o, a, s), eh(e, o, a))
  }
}
function oh(o, e, s, a, c, h, d) {
  return (
    (o = o.stateNode),
    typeof o.shouldComponentUpdate == 'function'
      ? o.shouldComponentUpdate(a, h, d)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Ie(s, a) || !Ie(c, h)
      : !0
  )
}
function ph(o, e, s) {
  var a = !1,
    c = Vf,
    h = e.contextType
  return (
    typeof h == 'object' && h !== null
      ? (h = Vg(h))
      : ((c = Zf(e) ? Xf : H.current),
        (a = e.contextTypes),
        (h = (a = a != null) ? Yf(o, c) : Vf)),
    (e = new e(s, h)),
    (o.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = nh),
    (o.stateNode = e),
    (e._reactInternals = o),
    a &&
      ((o = o.stateNode),
      (o.__reactInternalMemoizedUnmaskedChildContext = c),
      (o.__reactInternalMemoizedMaskedChildContext = h)),
    e
  )
}
function qh(o, e, s, a) {
  ;(o = e.state),
    typeof e.componentWillReceiveProps == 'function' &&
      e.componentWillReceiveProps(s, a),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(s, a),
    e.state !== o && nh.enqueueReplaceState(e, e.state, null)
}
function rh(o, e, s, a) {
  var c = o.stateNode
  ;(c.props = s), (c.state = o.memoizedState), (c.refs = jh), ah(o)
  var h = e.contextType
  typeof h == 'object' && h !== null
    ? (c.context = Vg(h))
    : ((h = Zf(e) ? Xf : H.current), (c.context = Yf(o, h))),
    (c.state = o.memoizedState),
    (h = e.getDerivedStateFromProps),
    typeof h == 'function' && (kh(o, e, h, s), (c.state = o.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof c.getSnapshotBeforeUpdate == 'function' ||
      (typeof c.UNSAFE_componentWillMount != 'function' &&
        typeof c.componentWillMount != 'function') ||
      ((e = c.state),
      typeof c.componentWillMount == 'function' && c.componentWillMount(),
      typeof c.UNSAFE_componentWillMount == 'function' &&
        c.UNSAFE_componentWillMount(),
      e !== c.state && nh.enqueueReplaceState(c, c.state, null),
      gh(o, s, c, a),
      (c.state = o.memoizedState)),
    typeof c.componentDidMount == 'function' && (o.flags |= 4194308)
}
function sh(o, e, s) {
  if (
    ((o = s.ref), o !== null && typeof o != 'function' && typeof o != 'object')
  ) {
    if (s._owner) {
      if (((s = s._owner), s)) {
        if (s.tag !== 1) throw Error(p(309))
        var a = s.stateNode
      }
      if (!a) throw Error(p(147, o))
      var c = a,
        h = '' + o
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == 'function' &&
        e.ref._stringRef === h
        ? e.ref
        : ((e = function (d) {
            var g = c.refs
            g === jh && (g = c.refs = {}), d === null ? delete g[h] : (g[h] = d)
          }),
          (e._stringRef = h),
          e)
    }
    if (typeof o != 'string') throw Error(p(284))
    if (!s._owner) throw Error(p(290, o))
  }
  return o
}
function th(o, e) {
  throw (
    ((o = Object.prototype.toString.call(e)),
    Error(
      p(
        31,
        o === '[object Object]'
          ? 'object with keys {' + Object.keys(e).join(', ') + '}'
          : o
      )
    ))
  )
}
function uh(o) {
  var e = o._init
  return e(o._payload)
}
function vh(o) {
  function e(nt, it) {
    if (o) {
      var ot = nt.deletions
      ot === null ? ((nt.deletions = [it]), (nt.flags |= 16)) : ot.push(it)
    }
  }
  function s(nt, it) {
    if (!o) return null
    for (; it !== null; ) e(nt, it), (it = it.sibling)
    return null
  }
  function a(nt, it) {
    for (nt = new Map(); it !== null; )
      it.key !== null ? nt.set(it.key, it) : nt.set(it.index, it),
        (it = it.sibling)
    return nt
  }
  function c(nt, it) {
    return (nt = wh(nt, it)), (nt.index = 0), (nt.sibling = null), nt
  }
  function h(nt, it, ot) {
    return (
      (nt.index = ot),
      o
        ? ((ot = nt.alternate),
          ot !== null
            ? ((ot = ot.index), ot < it ? ((nt.flags |= 2), it) : ot)
            : ((nt.flags |= 2), it))
        : ((nt.flags |= 1048576), it)
    )
  }
  function d(nt) {
    return o && nt.alternate === null && (nt.flags |= 2), nt
  }
  function g(nt, it, ot, lt) {
    return it === null || it.tag !== 6
      ? ((it = xh(ot, nt.mode, lt)), (it.return = nt), it)
      : ((it = c(it, ot)), (it.return = nt), it)
  }
  function b(nt, it, ot, lt) {
    var at = ot.type
    return at === ya
      ? _(nt, it, ot.props.children, lt, ot.key)
      : it !== null &&
        (it.elementType === at ||
          (typeof at == 'object' &&
            at !== null &&
            at.$$typeof === Ha &&
            uh(at) === it.type))
      ? ((lt = c(it, ot.props)),
        (lt.ref = sh(nt, it, ot)),
        (lt.return = nt),
        lt)
      : ((lt = yh(ot.type, ot.key, ot.props, null, nt.mode, lt)),
        (lt.ref = sh(nt, it, ot)),
        (lt.return = nt),
        lt)
  }
  function $(nt, it, ot, lt) {
    return it === null ||
      it.tag !== 4 ||
      it.stateNode.containerInfo !== ot.containerInfo ||
      it.stateNode.implementation !== ot.implementation
      ? ((it = zh(ot, nt.mode, lt)), (it.return = nt), it)
      : ((it = c(it, ot.children || [])), (it.return = nt), it)
  }
  function _(nt, it, ot, lt, at) {
    return it === null || it.tag !== 7
      ? ((it = Ah(ot, nt.mode, lt, at)), (it.return = nt), it)
      : ((it = c(it, ot)), (it.return = nt), it)
  }
  function j(nt, it, ot) {
    if ((typeof it == 'string' && it !== '') || typeof it == 'number')
      return (it = xh('' + it, nt.mode, ot)), (it.return = nt), it
    if (typeof it == 'object' && it !== null) {
      switch (it.$$typeof) {
        case va:
          return (
            (ot = yh(it.type, it.key, it.props, null, nt.mode, ot)),
            (ot.ref = sh(nt, null, it)),
            (ot.return = nt),
            ot
          )
        case wa:
          return (it = zh(it, nt.mode, ot)), (it.return = nt), it
        case Ha:
          var lt = it._init
          return j(nt, lt(it._payload), ot)
      }
      if (eb(it) || Ka(it))
        return (it = Ah(it, nt.mode, ot, null)), (it.return = nt), it
      th(nt, it)
    }
    return null
  }
  function _e(nt, it, ot, lt) {
    var at = it !== null ? it.key : null
    if ((typeof ot == 'string' && ot !== '') || typeof ot == 'number')
      return at !== null ? null : g(nt, it, '' + ot, lt)
    if (typeof ot == 'object' && ot !== null) {
      switch (ot.$$typeof) {
        case va:
          return ot.key === at ? b(nt, it, ot, lt) : null
        case wa:
          return ot.key === at ? $(nt, it, ot, lt) : null
        case Ha:
          return (at = ot._init), _e(nt, it, at(ot._payload), lt)
      }
      if (eb(ot) || Ka(ot)) return at !== null ? null : _(nt, it, ot, lt, null)
      th(nt, ot)
    }
    return null
  }
  function et(nt, it, ot, lt, at) {
    if ((typeof lt == 'string' && lt !== '') || typeof lt == 'number')
      return (nt = nt.get(ot) || null), g(it, nt, '' + lt, at)
    if (typeof lt == 'object' && lt !== null) {
      switch (lt.$$typeof) {
        case va:
          return (
            (nt = nt.get(lt.key === null ? ot : lt.key) || null),
            b(it, nt, lt, at)
          )
        case wa:
          return (
            (nt = nt.get(lt.key === null ? ot : lt.key) || null),
            $(it, nt, lt, at)
          )
        case Ha:
          var ct = lt._init
          return et(nt, it, ot, ct(lt._payload), at)
      }
      if (eb(lt) || Ka(lt))
        return (nt = nt.get(ot) || null), _(it, nt, lt, at, null)
      th(it, lt)
    }
    return null
  }
  function tt(nt, it, ot, lt) {
    for (
      var at = null, ct = null, ut = it, ht = (it = 0), pt = null;
      ut !== null && ht < ot.length;
      ht++
    ) {
      ut.index > ht ? ((pt = ut), (ut = null)) : (pt = ut.sibling)
      var dt = _e(nt, ut, ot[ht], lt)
      if (dt === null) {
        ut === null && (ut = pt)
        break
      }
      o && ut && dt.alternate === null && e(nt, ut),
        (it = h(dt, it, ht)),
        ct === null ? (at = dt) : (ct.sibling = dt),
        (ct = dt),
        (ut = pt)
    }
    if (ht === ot.length) return s(nt, ut), I && tg(nt, ht), at
    if (ut === null) {
      for (; ht < ot.length; ht++)
        (ut = j(nt, ot[ht], lt)),
          ut !== null &&
            ((it = h(ut, it, ht)),
            ct === null ? (at = ut) : (ct.sibling = ut),
            (ct = ut))
      return I && tg(nt, ht), at
    }
    for (ut = a(nt, ut); ht < ot.length; ht++)
      (pt = et(ut, nt, ht, ot[ht], lt)),
        pt !== null &&
          (o &&
            pt.alternate !== null &&
            ut.delete(pt.key === null ? ht : pt.key),
          (it = h(pt, it, ht)),
          ct === null ? (at = pt) : (ct.sibling = pt),
          (ct = pt))
    return (
      o &&
        ut.forEach(function (Ot) {
          return e(nt, Ot)
        }),
      I && tg(nt, ht),
      at
    )
  }
  function rt(nt, it, ot, lt) {
    var at = Ka(ot)
    if (typeof at != 'function') throw Error(p(150))
    if (((ot = at.call(ot)), ot == null)) throw Error(p(151))
    for (
      var ct = (at = null), ut = it, ht = (it = 0), pt = null, dt = ot.next();
      ut !== null && !dt.done;
      ht++, dt = ot.next()
    ) {
      ut.index > ht ? ((pt = ut), (ut = null)) : (pt = ut.sibling)
      var Ot = _e(nt, ut, dt.value, lt)
      if (Ot === null) {
        ut === null && (ut = pt)
        break
      }
      o && ut && Ot.alternate === null && e(nt, ut),
        (it = h(Ot, it, ht)),
        ct === null ? (at = Ot) : (ct.sibling = Ot),
        (ct = Ot),
        (ut = pt)
    }
    if (dt.done) return s(nt, ut), I && tg(nt, ht), at
    if (ut === null) {
      for (; !dt.done; ht++, dt = ot.next())
        (dt = j(nt, dt.value, lt)),
          dt !== null &&
            ((it = h(dt, it, ht)),
            ct === null ? (at = dt) : (ct.sibling = dt),
            (ct = dt))
      return I && tg(nt, ht), at
    }
    for (ut = a(nt, ut); !dt.done; ht++, dt = ot.next())
      (dt = et(ut, nt, ht, dt.value, lt)),
        dt !== null &&
          (o &&
            dt.alternate !== null &&
            ut.delete(dt.key === null ? ht : dt.key),
          (it = h(dt, it, ht)),
          ct === null ? (at = dt) : (ct.sibling = dt),
          (ct = dt))
    return (
      o &&
        ut.forEach(function (St) {
          return e(nt, St)
        }),
      I && tg(nt, ht),
      at
    )
  }
  function st(nt, it, ot, lt) {
    if (
      (typeof ot == 'object' &&
        ot !== null &&
        ot.type === ya &&
        ot.key === null &&
        (ot = ot.props.children),
      typeof ot == 'object' && ot !== null)
    ) {
      switch (ot.$$typeof) {
        case va:
          e: {
            for (var at = ot.key, ct = it; ct !== null; ) {
              if (ct.key === at) {
                if (((at = ot.type), at === ya)) {
                  if (ct.tag === 7) {
                    s(nt, ct.sibling),
                      (it = c(ct, ot.props.children)),
                      (it.return = nt),
                      (nt = it)
                    break e
                  }
                } else if (
                  ct.elementType === at ||
                  (typeof at == 'object' &&
                    at !== null &&
                    at.$$typeof === Ha &&
                    uh(at) === ct.type)
                ) {
                  s(nt, ct.sibling),
                    (it = c(ct, ot.props)),
                    (it.ref = sh(nt, ct, ot)),
                    (it.return = nt),
                    (nt = it)
                  break e
                }
                s(nt, ct)
                break
              } else e(nt, ct)
              ct = ct.sibling
            }
            ot.type === ya
              ? ((it = Ah(ot.props.children, nt.mode, lt, ot.key)),
                (it.return = nt),
                (nt = it))
              : ((lt = yh(ot.type, ot.key, ot.props, null, nt.mode, lt)),
                (lt.ref = sh(nt, it, ot)),
                (lt.return = nt),
                (nt = lt))
          }
          return d(nt)
        case wa:
          e: {
            for (ct = ot.key; it !== null; ) {
              if (it.key === ct)
                if (
                  it.tag === 4 &&
                  it.stateNode.containerInfo === ot.containerInfo &&
                  it.stateNode.implementation === ot.implementation
                ) {
                  s(nt, it.sibling),
                    (it = c(it, ot.children || [])),
                    (it.return = nt),
                    (nt = it)
                  break e
                } else {
                  s(nt, it)
                  break
                }
              else e(nt, it)
              it = it.sibling
            }
            ;(it = zh(ot, nt.mode, lt)), (it.return = nt), (nt = it)
          }
          return d(nt)
        case Ha:
          return (ct = ot._init), st(nt, it, ct(ot._payload), lt)
      }
      if (eb(ot)) return tt(nt, it, ot, lt)
      if (Ka(ot)) return rt(nt, it, ot, lt)
      th(nt, ot)
    }
    return (typeof ot == 'string' && ot !== '') || typeof ot == 'number'
      ? ((ot = '' + ot),
        it !== null && it.tag === 6
          ? (s(nt, it.sibling), (it = c(it, ot)), (it.return = nt), (nt = it))
          : (s(nt, it),
            (it = xh(ot, nt.mode, lt)),
            (it.return = nt),
            (nt = it)),
        d(nt))
      : s(nt, it)
  }
  return st
}
var Bh = vh(!0),
  Ch = vh(!1),
  Dh = {},
  Eh = Uf(Dh),
  Fh = Uf(Dh),
  Gh = Uf(Dh)
function Hh(o) {
  if (o === Dh) throw Error(p(174))
  return o
}
function Ih(o, e) {
  switch ((G(Gh, e), G(Fh, o), G(Eh, Dh), (o = e.nodeType), o)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : lb(null, '')
      break
    default:
      ;(o = o === 8 ? e.parentNode : e),
        (e = o.namespaceURI || null),
        (o = o.tagName),
        (e = lb(e, o))
  }
  E(Eh), G(Eh, e)
}
function Jh() {
  E(Eh), E(Fh), E(Gh)
}
function Kh(o) {
  Hh(Gh.current)
  var e = Hh(Eh.current),
    s = lb(e, o.type)
  e !== s && (G(Fh, o), G(Eh, s))
}
function Lh(o) {
  Fh.current === o && (E(Eh), E(Fh))
}
var M = Uf(0)
function Mh(o) {
  for (var e = o; e !== null; ) {
    if (e.tag === 13) {
      var s = e.memoizedState
      if (
        s !== null &&
        ((s = s.dehydrated), s === null || s.data === '$?' || s.data === '$!')
      )
        return e
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e
    } else if (e.child !== null) {
      ;(e.child.return = e), (e = e.child)
      continue
    }
    if (e === o) break
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === o) return null
      e = e.return
    }
    ;(e.sibling.return = e.return), (e = e.sibling)
  }
  return null
}
var Nh = []
function Oh() {
  for (var o = 0; o < Nh.length; o++) Nh[o]._workInProgressVersionPrimary = null
  Nh.length = 0
}
var Ph = ua.ReactCurrentDispatcher,
  Qh = ua.ReactCurrentBatchConfig,
  Rh = 0,
  N = null,
  O = null,
  P = null,
  Sh = !1,
  Th = !1,
  Uh = 0,
  Vh = 0
function Q() {
  throw Error(p(321))
}
function Wh(o, e) {
  if (e === null) return !1
  for (var s = 0; s < e.length && s < o.length; s++)
    if (!He(o[s], e[s])) return !1
  return !0
}
function Xh(o, e, s, a, c, h) {
  if (
    ((Rh = h),
    (N = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Ph.current = o === null || o.memoizedState === null ? Yh : Zh),
    (o = s(a, c)),
    Th)
  ) {
    h = 0
    do {
      if (((Th = !1), (Uh = 0), 25 <= h)) throw Error(p(301))
      ;(h += 1),
        (P = O = null),
        (e.updateQueue = null),
        (Ph.current = $h),
        (o = s(a, c))
    } while (Th)
  }
  if (
    ((Ph.current = ai),
    (e = O !== null && O.next !== null),
    (Rh = 0),
    (P = O = N = null),
    (Sh = !1),
    e)
  )
    throw Error(p(300))
  return o
}
function bi() {
  var o = Uh !== 0
  return (Uh = 0), o
}
function ci() {
  var o = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return P === null ? (N.memoizedState = P = o) : (P = P.next = o), P
}
function di() {
  if (O === null) {
    var o = N.alternate
    o = o !== null ? o.memoizedState : null
  } else o = O.next
  var e = P === null ? N.memoizedState : P.next
  if (e !== null) (P = e), (O = o)
  else {
    if (o === null) throw Error(p(310))
    ;(O = o),
      (o = {
        memoizedState: O.memoizedState,
        baseState: O.baseState,
        baseQueue: O.baseQueue,
        queue: O.queue,
        next: null
      }),
      P === null ? (N.memoizedState = P = o) : (P = P.next = o)
  }
  return P
}
function ei(o, e) {
  return typeof e == 'function' ? e(o) : e
}
function fi(o) {
  var e = di(),
    s = e.queue
  if (s === null) throw Error(p(311))
  s.lastRenderedReducer = o
  var a = O,
    c = a.baseQueue,
    h = s.pending
  if (h !== null) {
    if (c !== null) {
      var d = c.next
      ;(c.next = h.next), (h.next = d)
    }
    ;(a.baseQueue = c = h), (s.pending = null)
  }
  if (c !== null) {
    ;(h = c.next), (a = a.baseState)
    var g = (d = null),
      b = null,
      $ = h
    do {
      var _ = $.lane
      if ((Rh & _) === _)
        b !== null &&
          (b = b.next =
            {
              lane: 0,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null
            }),
          (a = $.hasEagerState ? $.eagerState : o(a, $.action))
      else {
        var j = {
          lane: _,
          action: $.action,
          hasEagerState: $.hasEagerState,
          eagerState: $.eagerState,
          next: null
        }
        b === null ? ((g = b = j), (d = a)) : (b = b.next = j),
          (N.lanes |= _),
          (hh |= _)
      }
      $ = $.next
    } while ($ !== null && $ !== h)
    b === null ? (d = a) : (b.next = g),
      He(a, e.memoizedState) || (Ug = !0),
      (e.memoizedState = a),
      (e.baseState = d),
      (e.baseQueue = b),
      (s.lastRenderedState = a)
  }
  if (((o = s.interleaved), o !== null)) {
    c = o
    do (h = c.lane), (N.lanes |= h), (hh |= h), (c = c.next)
    while (c !== o)
  } else c === null && (s.lanes = 0)
  return [e.memoizedState, s.dispatch]
}
function gi(o) {
  var e = di(),
    s = e.queue
  if (s === null) throw Error(p(311))
  s.lastRenderedReducer = o
  var a = s.dispatch,
    c = s.pending,
    h = e.memoizedState
  if (c !== null) {
    s.pending = null
    var d = (c = c.next)
    do (h = o(h, d.action)), (d = d.next)
    while (d !== c)
    He(h, e.memoizedState) || (Ug = !0),
      (e.memoizedState = h),
      e.baseQueue === null && (e.baseState = h),
      (s.lastRenderedState = h)
  }
  return [h, a]
}
function hi() {}
function ii(o, e) {
  var s = N,
    a = di(),
    c = e(),
    h = !He(a.memoizedState, c)
  if (
    (h && ((a.memoizedState = c), (Ug = !0)),
    (a = a.queue),
    ji(ki.bind(null, s, a, o), [o]),
    a.getSnapshot !== e || h || (P !== null && P.memoizedState.tag & 1))
  ) {
    if (
      ((s.flags |= 2048),
      li(9, mi.bind(null, s, a, c, e), void 0, null),
      R === null)
    )
      throw Error(p(349))
    Rh & 30 || ni(s, e, c)
  }
  return c
}
function ni(o, e, s) {
  ;(o.flags |= 16384),
    (o = { getSnapshot: e, value: s }),
    (e = N.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (N.updateQueue = e),
        (e.stores = [o]))
      : ((s = e.stores), s === null ? (e.stores = [o]) : s.push(o))
}
function mi(o, e, s, a) {
  ;(e.value = s), (e.getSnapshot = a), oi(e) && pi(o)
}
function ki(o, e, s) {
  return s(function () {
    oi(e) && pi(o)
  })
}
function oi(o) {
  var e = o.getSnapshot
  o = o.value
  try {
    var s = e()
    return !He(o, s)
  } catch {
    return !0
  }
}
function pi(o) {
  var e = Zg(o, 1)
  e !== null && mh(e, o, 1, -1)
}
function qi(o) {
  var e = ci()
  return (
    typeof o == 'function' && (o = o()),
    (e.memoizedState = e.baseState = o),
    (o = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ei,
      lastRenderedState: o
    }),
    (e.queue = o),
    (o = o.dispatch = ri.bind(null, N, o)),
    [e.memoizedState, o]
  )
}
function li(o, e, s, a) {
  return (
    (o = { tag: o, create: e, destroy: s, deps: a, next: null }),
    (e = N.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (N.updateQueue = e),
        (e.lastEffect = o.next = o))
      : ((s = e.lastEffect),
        s === null
          ? (e.lastEffect = o.next = o)
          : ((a = s.next), (s.next = o), (o.next = a), (e.lastEffect = o))),
    o
  )
}
function si() {
  return di().memoizedState
}
function ti(o, e, s, a) {
  var c = ci()
  ;(N.flags |= o),
    (c.memoizedState = li(1 | e, s, void 0, a === void 0 ? null : a))
}
function ui(o, e, s, a) {
  var c = di()
  a = a === void 0 ? null : a
  var h = void 0
  if (O !== null) {
    var d = O.memoizedState
    if (((h = d.destroy), a !== null && Wh(a, d.deps))) {
      c.memoizedState = li(e, s, h, a)
      return
    }
  }
  ;(N.flags |= o), (c.memoizedState = li(1 | e, s, h, a))
}
function vi(o, e) {
  return ti(8390656, 8, o, e)
}
function ji(o, e) {
  return ui(2048, 8, o, e)
}
function wi(o, e) {
  return ui(4, 2, o, e)
}
function xi(o, e) {
  return ui(4, 4, o, e)
}
function yi(o, e) {
  if (typeof e == 'function')
    return (
      (o = o()),
      e(o),
      function () {
        e(null)
      }
    )
  if (e != null)
    return (
      (o = o()),
      (e.current = o),
      function () {
        e.current = null
      }
    )
}
function zi(o, e, s) {
  return (
    (s = s != null ? s.concat([o]) : null), ui(4, 4, yi.bind(null, e, o), s)
  )
}
function Ai() {}
function Bi(o, e) {
  var s = di()
  e = e === void 0 ? null : e
  var a = s.memoizedState
  return a !== null && e !== null && Wh(e, a[1])
    ? a[0]
    : ((s.memoizedState = [o, e]), o)
}
function Ci(o, e) {
  var s = di()
  e = e === void 0 ? null : e
  var a = s.memoizedState
  return a !== null && e !== null && Wh(e, a[1])
    ? a[0]
    : ((o = o()), (s.memoizedState = [o, e]), o)
}
function Di(o, e, s) {
  return Rh & 21
    ? (He(s, e) || ((s = yc()), (N.lanes |= s), (hh |= s), (o.baseState = !0)),
      e)
    : (o.baseState && ((o.baseState = !1), (Ug = !0)), (o.memoizedState = s))
}
function Ei(o, e) {
  var s = C$1
  ;(C$1 = s !== 0 && 4 > s ? s : 4), o(!0)
  var a = Qh.transition
  Qh.transition = {}
  try {
    o(!1), e()
  } finally {
    ;(C$1 = s), (Qh.transition = a)
  }
}
function Fi() {
  return di().memoizedState
}
function Gi(o, e, s) {
  var a = lh(o)
  if (
    ((s = {
      lane: a,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    Hi(o))
  )
    Ii(e, s)
  else if (((s = Yg(o, e, s, a)), s !== null)) {
    var c = L()
    mh(s, o, a, c), Ji(s, e, a)
  }
}
function ri(o, e, s) {
  var a = lh(o),
    c = { lane: a, action: s, hasEagerState: !1, eagerState: null, next: null }
  if (Hi(o)) Ii(e, c)
  else {
    var h = o.alternate
    if (
      o.lanes === 0 &&
      (h === null || h.lanes === 0) &&
      ((h = e.lastRenderedReducer), h !== null)
    )
      try {
        var d = e.lastRenderedState,
          g = h(d, s)
        if (((c.hasEagerState = !0), (c.eagerState = g), He(g, d))) {
          var b = e.interleaved
          b === null
            ? ((c.next = c), Xg(e))
            : ((c.next = b.next), (b.next = c)),
            (e.interleaved = c)
          return
        }
      } catch {
      } finally {
      }
    ;(s = Yg(o, e, c, a)),
      s !== null && ((c = L()), mh(s, o, a, c), Ji(s, e, a))
  }
}
function Hi(o) {
  var e = o.alternate
  return o === N || (e !== null && e === N)
}
function Ii(o, e) {
  Th = Sh = !0
  var s = o.pending
  s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)), (o.pending = e)
}
function Ji(o, e, s) {
  if (s & 4194240) {
    var a = e.lanes
    ;(a &= o.pendingLanes), (s |= a), (e.lanes = s), Cc(o, s)
  }
}
var ai = {
    readContext: Vg,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useInsertionEffect: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useSyncExternalStore: Q,
    useId: Q,
    unstable_isNewReconciler: !1
  },
  Yh = {
    readContext: Vg,
    useCallback: function (o, e) {
      return (ci().memoizedState = [o, e === void 0 ? null : e]), o
    },
    useContext: Vg,
    useEffect: vi,
    useImperativeHandle: function (o, e, s) {
      return (
        (s = s != null ? s.concat([o]) : null),
        ti(4194308, 4, yi.bind(null, e, o), s)
      )
    },
    useLayoutEffect: function (o, e) {
      return ti(4194308, 4, o, e)
    },
    useInsertionEffect: function (o, e) {
      return ti(4, 2, o, e)
    },
    useMemo: function (o, e) {
      var s = ci()
      return (
        (e = e === void 0 ? null : e), (o = o()), (s.memoizedState = [o, e]), o
      )
    },
    useReducer: function (o, e, s) {
      var a = ci()
      return (
        (e = s !== void 0 ? s(e) : e),
        (a.memoizedState = a.baseState = e),
        (o = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: o,
          lastRenderedState: e
        }),
        (a.queue = o),
        (o = o.dispatch = Gi.bind(null, N, o)),
        [a.memoizedState, o]
      )
    },
    useRef: function (o) {
      var e = ci()
      return (o = { current: o }), (e.memoizedState = o)
    },
    useState: qi,
    useDebugValue: Ai,
    useDeferredValue: function (o) {
      return (ci().memoizedState = o)
    },
    useTransition: function () {
      var o = qi(!1),
        e = o[0]
      return (o = Ei.bind(null, o[1])), (ci().memoizedState = o), [e, o]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (o, e, s) {
      var a = N,
        c = ci()
      if (I) {
        if (s === void 0) throw Error(p(407))
        s = s()
      } else {
        if (((s = e()), R === null)) throw Error(p(349))
        Rh & 30 || ni(a, e, s)
      }
      c.memoizedState = s
      var h = { value: s, getSnapshot: e }
      return (
        (c.queue = h),
        vi(ki.bind(null, a, h, o), [o]),
        (a.flags |= 2048),
        li(9, mi.bind(null, a, h, s, e), void 0, null),
        s
      )
    },
    useId: function () {
      var o = ci(),
        e = R.identifierPrefix
      if (I) {
        var s = sg,
          a = rg
        ;(s = (a & ~(1 << (32 - oc(a) - 1))).toString(32) + s),
          (e = ':' + e + 'R' + s),
          (s = Uh++),
          0 < s && (e += 'H' + s.toString(32)),
          (e += ':')
      } else (s = Vh++), (e = ':' + e + 'r' + s.toString(32) + ':')
      return (o.memoizedState = e)
    },
    unstable_isNewReconciler: !1
  },
  Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function () {
      return fi(ei)
    },
    useDebugValue: Ai,
    useDeferredValue: function (o) {
      var e = di()
      return Di(e, O.memoizedState, o)
    },
    useTransition: function () {
      var o = fi(ei)[0],
        e = di().memoizedState
      return [o, e]
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
  },
  $h = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: gi,
    useRef: si,
    useState: function () {
      return gi(ei)
    },
    useDebugValue: Ai,
    useDeferredValue: function (o) {
      var e = di()
      return O === null ? (e.memoizedState = o) : Di(e, O.memoizedState, o)
    },
    useTransition: function () {
      var o = gi(ei)[0],
        e = di().memoizedState
      return [o, e]
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
  }
function Ki(o, e) {
  try {
    var s = '',
      a = e
    do (s += Pa(a)), (a = a.return)
    while (a)
    var c = s
  } catch (h) {
    c =
      `
Error generating stack: ` +
      h.message +
      `
` +
      h.stack
  }
  return { value: o, source: e, stack: c, digest: null }
}
function Li(o, e, s) {
  return { value: o, source: null, stack: s ?? null, digest: e ?? null }
}
function Mi(o, e) {
  try {
    console.error(e.value)
  } catch (s) {
    setTimeout(function () {
      throw s
    })
  }
}
var Ni = typeof WeakMap == 'function' ? WeakMap : Map
function Oi(o, e, s) {
  ;(s = ch(-1, s)), (s.tag = 3), (s.payload = { element: null })
  var a = e.value
  return (
    (s.callback = function () {
      Pi || ((Pi = !0), (Qi = a)), Mi(o, e)
    }),
    s
  )
}
function Ri(o, e, s) {
  ;(s = ch(-1, s)), (s.tag = 3)
  var a = o.type.getDerivedStateFromError
  if (typeof a == 'function') {
    var c = e.value
    ;(s.payload = function () {
      return a(c)
    }),
      (s.callback = function () {
        Mi(o, e)
      })
  }
  var h = o.stateNode
  return (
    h !== null &&
      typeof h.componentDidCatch == 'function' &&
      (s.callback = function () {
        Mi(o, e),
          typeof a != 'function' &&
            (Si === null ? (Si = new Set([this])) : Si.add(this))
        var d = e.stack
        this.componentDidCatch(e.value, { componentStack: d !== null ? d : '' })
      }),
    s
  )
}
function Ti(o, e, s) {
  var a = o.pingCache
  if (a === null) {
    a = o.pingCache = new Ni()
    var c = new Set()
    a.set(e, c)
  } else (c = a.get(e)), c === void 0 && ((c = new Set()), a.set(e, c))
  c.has(s) || (c.add(s), (o = Ui.bind(null, o, e, s)), e.then(o, o))
}
function Vi(o) {
  do {
    var e
    if (
      ((e = o.tag === 13) &&
        ((e = o.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return o
    o = o.return
  } while (o !== null)
  return null
}
function Wi(o, e, s, a, c) {
  return o.mode & 1
    ? ((o.flags |= 65536), (o.lanes = c), o)
    : (o === e
        ? (o.flags |= 65536)
        : ((o.flags |= 128),
          (s.flags |= 131072),
          (s.flags &= -52805),
          s.tag === 1 &&
            (s.alternate === null
              ? (s.tag = 17)
              : ((e = ch(-1, 1)), (e.tag = 2), dh(s, e, 1))),
          (s.lanes |= 1)),
      o)
}
var Xi = ua.ReactCurrentOwner,
  Ug = !1
function Yi(o, e, s, a) {
  e.child = o === null ? Ch(e, null, s, a) : Bh(e, o.child, s, a)
}
function Zi(o, e, s, a, c) {
  s = s.render
  var h = e.ref
  return (
    Tg(e, c),
    (a = Xh(o, e, s, a, h, c)),
    (s = bi()),
    o !== null && !Ug
      ? ((e.updateQueue = o.updateQueue),
        (e.flags &= -2053),
        (o.lanes &= ~c),
        $i(o, e, c))
      : (I && s && vg(e), (e.flags |= 1), Yi(o, e, a, c), e.child)
  )
}
function aj(o, e, s, a, c) {
  if (o === null) {
    var h = s.type
    return typeof h == 'function' &&
      !bj(h) &&
      h.defaultProps === void 0 &&
      s.compare === null &&
      s.defaultProps === void 0
      ? ((e.tag = 15), (e.type = h), cj(o, e, h, a, c))
      : ((o = yh(s.type, null, a, e, e.mode, c)),
        (o.ref = e.ref),
        (o.return = e),
        (e.child = o))
  }
  if (((h = o.child), !(o.lanes & c))) {
    var d = h.memoizedProps
    if (
      ((s = s.compare), (s = s !== null ? s : Ie), s(d, a) && o.ref === e.ref)
    )
      return $i(o, e, c)
  }
  return (
    (e.flags |= 1),
    (o = wh(h, a)),
    (o.ref = e.ref),
    (o.return = e),
    (e.child = o)
  )
}
function cj(o, e, s, a, c) {
  if (o !== null) {
    var h = o.memoizedProps
    if (Ie(h, a) && o.ref === e.ref)
      if (((Ug = !1), (e.pendingProps = a = h), (o.lanes & c) !== 0))
        o.flags & 131072 && (Ug = !0)
      else return (e.lanes = o.lanes), $i(o, e, c)
  }
  return dj(o, e, s, a, c)
}
function ej(o, e, s) {
  var a = e.pendingProps,
    c = a.children,
    h = o !== null ? o.memoizedState : null
  if (a.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(fj, gj),
        (gj |= s)
    else {
      if (!(s & 1073741824))
        return (
          (o = h !== null ? h.baseLanes | s : s),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: o,
            cachePool: null,
            transitions: null
          }),
          (e.updateQueue = null),
          G(fj, gj),
          (gj |= o),
          null
        )
      ;(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (a = h !== null ? h.baseLanes : s),
        G(fj, gj),
        (gj |= a)
    }
  else
    h !== null ? ((a = h.baseLanes | s), (e.memoizedState = null)) : (a = s),
      G(fj, gj),
      (gj |= a)
  return Yi(o, e, c, s), e.child
}
function hj(o, e) {
  var s = e.ref
  ;((o === null && s !== null) || (o !== null && o.ref !== s)) &&
    ((e.flags |= 512), (e.flags |= 2097152))
}
function dj(o, e, s, a, c) {
  var h = Zf(s) ? Xf : H.current
  return (
    (h = Yf(e, h)),
    Tg(e, c),
    (s = Xh(o, e, s, a, h, c)),
    (a = bi()),
    o !== null && !Ug
      ? ((e.updateQueue = o.updateQueue),
        (e.flags &= -2053),
        (o.lanes &= ~c),
        $i(o, e, c))
      : (I && a && vg(e), (e.flags |= 1), Yi(o, e, s, c), e.child)
  )
}
function ij(o, e, s, a, c) {
  if (Zf(s)) {
    var h = !0
    cg(e)
  } else h = !1
  if ((Tg(e, c), e.stateNode === null))
    jj(o, e), ph(e, s, a), rh(e, s, a, c), (a = !0)
  else if (o === null) {
    var d = e.stateNode,
      g = e.memoizedProps
    d.props = g
    var b = d.context,
      $ = s.contextType
    typeof $ == 'object' && $ !== null
      ? ($ = Vg($))
      : (($ = Zf(s) ? Xf : H.current), ($ = Yf(e, $)))
    var _ = s.getDerivedStateFromProps,
      j =
        typeof _ == 'function' || typeof d.getSnapshotBeforeUpdate == 'function'
    j ||
      (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof d.componentWillReceiveProps != 'function') ||
      ((g !== a || b !== $) && qh(e, d, a, $)),
      ($g = !1)
    var _e = e.memoizedState
    ;(d.state = _e),
      gh(e, a, d, c),
      (b = e.memoizedState),
      g !== a || _e !== b || Wf.current || $g
        ? (typeof _ == 'function' && (kh(e, s, _, a), (b = e.memoizedState)),
          (g = $g || oh(e, s, g, a, _e, b, $))
            ? (j ||
                (typeof d.UNSAFE_componentWillMount != 'function' &&
                  typeof d.componentWillMount != 'function') ||
                (typeof d.componentWillMount == 'function' &&
                  d.componentWillMount(),
                typeof d.UNSAFE_componentWillMount == 'function' &&
                  d.UNSAFE_componentWillMount()),
              typeof d.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof d.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = a),
              (e.memoizedState = b)),
          (d.props = a),
          (d.state = b),
          (d.context = $),
          (a = g))
        : (typeof d.componentDidMount == 'function' && (e.flags |= 4194308),
          (a = !1))
  } else {
    ;(d = e.stateNode),
      bh(o, e),
      (g = e.memoizedProps),
      ($ = e.type === e.elementType ? g : Lg(e.type, g)),
      (d.props = $),
      (j = e.pendingProps),
      (_e = d.context),
      (b = s.contextType),
      typeof b == 'object' && b !== null
        ? (b = Vg(b))
        : ((b = Zf(s) ? Xf : H.current), (b = Yf(e, b)))
    var et = s.getDerivedStateFromProps
    ;(_ =
      typeof et == 'function' ||
      typeof d.getSnapshotBeforeUpdate == 'function') ||
      (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof d.componentWillReceiveProps != 'function') ||
      ((g !== j || _e !== b) && qh(e, d, a, b)),
      ($g = !1),
      (_e = e.memoizedState),
      (d.state = _e),
      gh(e, a, d, c)
    var tt = e.memoizedState
    g !== j || _e !== tt || Wf.current || $g
      ? (typeof et == 'function' && (kh(e, s, et, a), (tt = e.memoizedState)),
        ($ = $g || oh(e, s, $, a, _e, tt, b) || !1)
          ? (_ ||
              (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                typeof d.componentWillUpdate != 'function') ||
              (typeof d.componentWillUpdate == 'function' &&
                d.componentWillUpdate(a, tt, b),
              typeof d.UNSAFE_componentWillUpdate == 'function' &&
                d.UNSAFE_componentWillUpdate(a, tt, b)),
            typeof d.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof d.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof d.componentDidUpdate != 'function' ||
              (g === o.memoizedProps && _e === o.memoizedState) ||
              (e.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != 'function' ||
              (g === o.memoizedProps && _e === o.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = a),
            (e.memoizedState = tt)),
        (d.props = a),
        (d.state = tt),
        (d.context = b),
        (a = $))
      : (typeof d.componentDidUpdate != 'function' ||
          (g === o.memoizedProps && _e === o.memoizedState) ||
          (e.flags |= 4),
        typeof d.getSnapshotBeforeUpdate != 'function' ||
          (g === o.memoizedProps && _e === o.memoizedState) ||
          (e.flags |= 1024),
        (a = !1))
  }
  return kj(o, e, s, a, h, c)
}
function kj(o, e, s, a, c, h) {
  hj(o, e)
  var d = (e.flags & 128) !== 0
  if (!a && !d) return c && dg(e, s, !1), $i(o, e, h)
  ;(a = e.stateNode), (Xi.current = e)
  var g =
    d && typeof s.getDerivedStateFromError != 'function' ? null : a.render()
  return (
    (e.flags |= 1),
    o !== null && d
      ? ((e.child = Bh(e, o.child, null, h)), (e.child = Bh(e, null, g, h)))
      : Yi(o, e, g, h),
    (e.memoizedState = a.state),
    c && dg(e, s, !0),
    e.child
  )
}
function lj(o) {
  var e = o.stateNode
  e.pendingContext
    ? ag(o, e.pendingContext, e.pendingContext !== e.context)
    : e.context && ag(o, e.context, !1),
    Ih(o, e.containerInfo)
}
function mj(o, e, s, a, c) {
  return Ig(), Jg(c), (e.flags |= 256), Yi(o, e, s, a), e.child
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 }
function oj(o) {
  return { baseLanes: o, cachePool: null, transitions: null }
}
function pj(o, e, s) {
  var a = e.pendingProps,
    c = M.current,
    h = !1,
    d = (e.flags & 128) !== 0,
    g
  if (
    ((g = d) ||
      (g = o !== null && o.memoizedState === null ? !1 : (c & 2) !== 0),
    g
      ? ((h = !0), (e.flags &= -129))
      : (o === null || o.memoizedState !== null) && (c |= 1),
    G(M, c & 1),
    o === null)
  )
    return (
      Eg(e),
      (o = e.memoizedState),
      o !== null && ((o = o.dehydrated), o !== null)
        ? (e.mode & 1
            ? o.data === '$!'
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((d = a.children),
          (o = a.fallback),
          h
            ? ((a = e.mode),
              (h = e.child),
              (d = { mode: 'hidden', children: d }),
              !(a & 1) && h !== null
                ? ((h.childLanes = 0), (h.pendingProps = d))
                : (h = qj(d, a, 0, null)),
              (o = Ah(o, a, s, null)),
              (h.return = e),
              (o.return = e),
              (h.sibling = o),
              (e.child = h),
              (e.child.memoizedState = oj(s)),
              (e.memoizedState = nj),
              o)
            : rj(e, d))
    )
  if (((c = o.memoizedState), c !== null && ((g = c.dehydrated), g !== null)))
    return sj(o, e, d, a, g, c, s)
  if (h) {
    ;(h = a.fallback), (d = e.mode), (c = o.child), (g = c.sibling)
    var b = { mode: 'hidden', children: a.children }
    return (
      !(d & 1) && e.child !== c
        ? ((a = e.child),
          (a.childLanes = 0),
          (a.pendingProps = b),
          (e.deletions = null))
        : ((a = wh(c, b)), (a.subtreeFlags = c.subtreeFlags & 14680064)),
      g !== null ? (h = wh(g, h)) : ((h = Ah(h, d, s, null)), (h.flags |= 2)),
      (h.return = e),
      (a.return = e),
      (a.sibling = h),
      (e.child = a),
      (a = h),
      (h = e.child),
      (d = o.child.memoizedState),
      (d =
        d === null
          ? oj(s)
          : {
              baseLanes: d.baseLanes | s,
              cachePool: null,
              transitions: d.transitions
            }),
      (h.memoizedState = d),
      (h.childLanes = o.childLanes & ~s),
      (e.memoizedState = nj),
      a
    )
  }
  return (
    (h = o.child),
    (o = h.sibling),
    (a = wh(h, { mode: 'visible', children: a.children })),
    !(e.mode & 1) && (a.lanes = s),
    (a.return = e),
    (a.sibling = null),
    o !== null &&
      ((s = e.deletions),
      s === null ? ((e.deletions = [o]), (e.flags |= 16)) : s.push(o)),
    (e.child = a),
    (e.memoizedState = null),
    a
  )
}
function rj(o, e) {
  return (
    (e = qj({ mode: 'visible', children: e }, o.mode, 0, null)),
    (e.return = o),
    (o.child = e)
  )
}
function tj(o, e, s, a) {
  return (
    a !== null && Jg(a),
    Bh(e, o.child, null, s),
    (o = rj(e, e.pendingProps.children)),
    (o.flags |= 2),
    (e.memoizedState = null),
    o
  )
}
function sj(o, e, s, a, c, h, d) {
  if (s)
    return e.flags & 256
      ? ((e.flags &= -257), (a = Li(Error(p(422)))), tj(o, e, d, a))
      : e.memoizedState !== null
      ? ((e.child = o.child), (e.flags |= 128), null)
      : ((h = a.fallback),
        (c = e.mode),
        (a = qj({ mode: 'visible', children: a.children }, c, 0, null)),
        (h = Ah(h, c, d, null)),
        (h.flags |= 2),
        (a.return = e),
        (h.return = e),
        (a.sibling = h),
        (e.child = a),
        e.mode & 1 && Bh(e, o.child, null, d),
        (e.child.memoizedState = oj(d)),
        (e.memoizedState = nj),
        h)
  if (!(e.mode & 1)) return tj(o, e, d, null)
  if (c.data === '$!') {
    if (((a = c.nextSibling && c.nextSibling.dataset), a)) var g = a.dgst
    return (a = g), (h = Error(p(419))), (a = Li(h, a, void 0)), tj(o, e, d, a)
  }
  if (((g = (d & o.childLanes) !== 0), Ug || g)) {
    if (((a = R), a !== null)) {
      switch (d & -d) {
        case 4:
          c = 2
          break
        case 16:
          c = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          c = 32
          break
        case 536870912:
          c = 268435456
          break
        default:
          c = 0
      }
      ;(c = c & (a.suspendedLanes | d) ? 0 : c),
        c !== 0 &&
          c !== h.retryLane &&
          ((h.retryLane = c), Zg(o, c), mh(a, o, c, -1))
    }
    return uj(), (a = Li(Error(p(421)))), tj(o, e, d, a)
  }
  return c.data === '$?'
    ? ((e.flags |= 128),
      (e.child = o.child),
      (e = vj.bind(null, o)),
      (c._reactRetry = e),
      null)
    : ((o = h.treeContext),
      (yg = Lf(c.nextSibling)),
      (xg = e),
      (I = !0),
      (zg = null),
      o !== null &&
        ((og[pg++] = rg),
        (og[pg++] = sg),
        (og[pg++] = qg),
        (rg = o.id),
        (sg = o.overflow),
        (qg = e)),
      (e = rj(e, a.children)),
      (e.flags |= 4096),
      e)
}
function wj(o, e, s) {
  o.lanes |= e
  var a = o.alternate
  a !== null && (a.lanes |= e), Sg(o.return, e, s)
}
function xj(o, e, s, a, c) {
  var h = o.memoizedState
  h === null
    ? (o.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: s,
        tailMode: c
      })
    : ((h.isBackwards = e),
      (h.rendering = null),
      (h.renderingStartTime = 0),
      (h.last = a),
      (h.tail = s),
      (h.tailMode = c))
}
function yj(o, e, s) {
  var a = e.pendingProps,
    c = a.revealOrder,
    h = a.tail
  if ((Yi(o, e, a.children, s), (a = M.current), a & 2))
    (a = (a & 1) | 2), (e.flags |= 128)
  else {
    if (o !== null && o.flags & 128)
      e: for (o = e.child; o !== null; ) {
        if (o.tag === 13) o.memoizedState !== null && wj(o, s, e)
        else if (o.tag === 19) wj(o, s, e)
        else if (o.child !== null) {
          ;(o.child.return = o), (o = o.child)
          continue
        }
        if (o === e) break e
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e) break e
          o = o.return
        }
        ;(o.sibling.return = o.return), (o = o.sibling)
      }
    a &= 1
  }
  if ((G(M, a), !(e.mode & 1))) e.memoizedState = null
  else
    switch (c) {
      case 'forwards':
        for (s = e.child, c = null; s !== null; )
          (o = s.alternate),
            o !== null && Mh(o) === null && (c = s),
            (s = s.sibling)
        ;(s = c),
          s === null
            ? ((c = e.child), (e.child = null))
            : ((c = s.sibling), (s.sibling = null)),
          xj(e, !1, c, s, h)
        break
      case 'backwards':
        for (s = null, c = e.child, e.child = null; c !== null; ) {
          if (((o = c.alternate), o !== null && Mh(o) === null)) {
            e.child = c
            break
          }
          ;(o = c.sibling), (c.sibling = s), (s = c), (c = o)
        }
        xj(e, !0, s, null, h)
        break
      case 'together':
        xj(e, !1, null, null, void 0)
        break
      default:
        e.memoizedState = null
    }
  return e.child
}
function jj(o, e) {
  !(e.mode & 1) &&
    o !== null &&
    ((o.alternate = null), (e.alternate = null), (e.flags |= 2))
}
function $i(o, e, s) {
  if (
    (o !== null && (e.dependencies = o.dependencies),
    (hh |= e.lanes),
    !(s & e.childLanes))
  )
    return null
  if (o !== null && e.child !== o.child) throw Error(p(153))
  if (e.child !== null) {
    for (
      o = e.child, s = wh(o, o.pendingProps), e.child = s, s.return = e;
      o.sibling !== null;

    )
      (o = o.sibling), (s = s.sibling = wh(o, o.pendingProps)), (s.return = e)
    s.sibling = null
  }
  return e.child
}
function zj(o, e, s) {
  switch (e.tag) {
    case 3:
      lj(e), Ig()
      break
    case 5:
      Kh(e)
      break
    case 1:
      Zf(e.type) && cg(e)
      break
    case 4:
      Ih(e, e.stateNode.containerInfo)
      break
    case 10:
      var a = e.type._context,
        c = e.memoizedProps.value
      G(Mg, a._currentValue), (a._currentValue = c)
      break
    case 13:
      if (((a = e.memoizedState), a !== null))
        return a.dehydrated !== null
          ? (G(M, M.current & 1), (e.flags |= 128), null)
          : s & e.child.childLanes
          ? pj(o, e, s)
          : (G(M, M.current & 1),
            (o = $i(o, e, s)),
            o !== null ? o.sibling : null)
      G(M, M.current & 1)
      break
    case 19:
      if (((a = (s & e.childLanes) !== 0), o.flags & 128)) {
        if (a) return yj(o, e, s)
        e.flags |= 128
      }
      if (
        ((c = e.memoizedState),
        c !== null &&
          ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
        G(M, M.current),
        a)
      )
        break
      return null
    case 22:
    case 23:
      return (e.lanes = 0), ej(o, e, s)
  }
  return $i(o, e, s)
}
var Aj, Bj, Cj, Dj
Aj = function (o, e) {
  for (var s = e.child; s !== null; ) {
    if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode)
    else if (s.tag !== 4 && s.child !== null) {
      ;(s.child.return = s), (s = s.child)
      continue
    }
    if (s === e) break
    for (; s.sibling === null; ) {
      if (s.return === null || s.return === e) return
      s = s.return
    }
    ;(s.sibling.return = s.return), (s = s.sibling)
  }
}
Bj = function () {}
Cj = function (o, e, s, a) {
  var c = o.memoizedProps
  if (c !== a) {
    ;(o = e.stateNode), Hh(Eh.current)
    var h = null
    switch (s) {
      case 'input':
        ;(c = Ya(o, c)), (a = Ya(o, a)), (h = [])
        break
      case 'select':
        ;(c = A({}, c, { value: void 0 })),
          (a = A({}, a, { value: void 0 })),
          (h = [])
        break
      case 'textarea':
        ;(c = gb(o, c)), (a = gb(o, a)), (h = [])
        break
      default:
        typeof c.onClick != 'function' &&
          typeof a.onClick == 'function' &&
          (o.onclick = Bf)
    }
    ub(s, a)
    var d
    s = null
    for ($ in c)
      if (!a.hasOwnProperty($) && c.hasOwnProperty($) && c[$] != null)
        if ($ === 'style') {
          var g = c[$]
          for (d in g) g.hasOwnProperty(d) && (s || (s = {}), (s[d] = ''))
        } else
          $ !== 'dangerouslySetInnerHTML' &&
            $ !== 'children' &&
            $ !== 'suppressContentEditableWarning' &&
            $ !== 'suppressHydrationWarning' &&
            $ !== 'autoFocus' &&
            (ea.hasOwnProperty($) ? h || (h = []) : (h = h || []).push($, null))
    for ($ in a) {
      var b = a[$]
      if (
        ((g = c != null ? c[$] : void 0),
        a.hasOwnProperty($) && b !== g && (b != null || g != null))
      )
        if ($ === 'style')
          if (g) {
            for (d in g)
              !g.hasOwnProperty(d) ||
                (b && b.hasOwnProperty(d)) ||
                (s || (s = {}), (s[d] = ''))
            for (d in b)
              b.hasOwnProperty(d) &&
                g[d] !== b[d] &&
                (s || (s = {}), (s[d] = b[d]))
          } else s || (h || (h = []), h.push($, s)), (s = b)
        else
          $ === 'dangerouslySetInnerHTML'
            ? ((b = b ? b.__html : void 0),
              (g = g ? g.__html : void 0),
              b != null && g !== b && (h = h || []).push($, b))
            : $ === 'children'
            ? (typeof b != 'string' && typeof b != 'number') ||
              (h = h || []).push($, '' + b)
            : $ !== 'suppressContentEditableWarning' &&
              $ !== 'suppressHydrationWarning' &&
              (ea.hasOwnProperty($)
                ? (b != null && $ === 'onScroll' && D('scroll', o),
                  h || g === b || (h = []))
                : (h = h || []).push($, b))
    }
    s && (h = h || []).push('style', s)
    var $ = h
    ;(e.updateQueue = $) && (e.flags |= 4)
  }
}
Dj = function (o, e, s, a) {
  s !== a && (e.flags |= 4)
}
function Ej(o, e) {
  if (!I)
    switch (o.tailMode) {
      case 'hidden':
        e = o.tail
        for (var s = null; e !== null; )
          e.alternate !== null && (s = e), (e = e.sibling)
        s === null ? (o.tail = null) : (s.sibling = null)
        break
      case 'collapsed':
        s = o.tail
        for (var a = null; s !== null; )
          s.alternate !== null && (a = s), (s = s.sibling)
        a === null
          ? e || o.tail === null
            ? (o.tail = null)
            : (o.tail.sibling = null)
          : (a.sibling = null)
    }
}
function S(o) {
  var e = o.alternate !== null && o.alternate.child === o.child,
    s = 0,
    a = 0
  if (e)
    for (var c = o.child; c !== null; )
      (s |= c.lanes | c.childLanes),
        (a |= c.subtreeFlags & 14680064),
        (a |= c.flags & 14680064),
        (c.return = o),
        (c = c.sibling)
  else
    for (c = o.child; c !== null; )
      (s |= c.lanes | c.childLanes),
        (a |= c.subtreeFlags),
        (a |= c.flags),
        (c.return = o),
        (c = c.sibling)
  return (o.subtreeFlags |= a), (o.childLanes = s), e
}
function Fj(o, e, s) {
  var a = e.pendingProps
  switch ((wg(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(e), null
    case 1:
      return Zf(e.type) && $f(), S(e), null
    case 3:
      return (
        (a = e.stateNode),
        Jh(),
        E(Wf),
        E(H),
        Oh(),
        a.pendingContext &&
          ((a.context = a.pendingContext), (a.pendingContext = null)),
        (o === null || o.child === null) &&
          (Gg(e)
            ? (e.flags |= 4)
            : o === null ||
              (o.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), zg !== null && (Gj(zg), (zg = null)))),
        Bj(o, e),
        S(e),
        null
      )
    case 5:
      Lh(e)
      var c = Hh(Gh.current)
      if (((s = e.type), o !== null && e.stateNode != null))
        Cj(o, e, s, a, c),
          o.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
      else {
        if (!a) {
          if (e.stateNode === null) throw Error(p(166))
          return S(e), null
        }
        if (((o = Hh(Eh.current)), Gg(e))) {
          ;(a = e.stateNode), (s = e.type)
          var h = e.memoizedProps
          switch (((a[Of] = e), (a[Pf] = h), (o = (e.mode & 1) !== 0), s)) {
            case 'dialog':
              D('cancel', a), D('close', a)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', a)
              break
            case 'video':
            case 'audio':
              for (c = 0; c < lf.length; c++) D(lf[c], a)
              break
            case 'source':
              D('error', a)
              break
            case 'img':
            case 'image':
            case 'link':
              D('error', a), D('load', a)
              break
            case 'details':
              D('toggle', a)
              break
            case 'input':
              Za(a, h), D('invalid', a)
              break
            case 'select':
              ;(a._wrapperState = { wasMultiple: !!h.multiple }),
                D('invalid', a)
              break
            case 'textarea':
              hb(a, h), D('invalid', a)
          }
          ub(s, h), (c = null)
          for (var d in h)
            if (h.hasOwnProperty(d)) {
              var g = h[d]
              d === 'children'
                ? typeof g == 'string'
                  ? a.textContent !== g &&
                    (h.suppressHydrationWarning !== !0 &&
                      Af(a.textContent, g, o),
                    (c = ['children', g]))
                  : typeof g == 'number' &&
                    a.textContent !== '' + g &&
                    (h.suppressHydrationWarning !== !0 &&
                      Af(a.textContent, g, o),
                    (c = ['children', '' + g]))
                : ea.hasOwnProperty(d) &&
                  g != null &&
                  d === 'onScroll' &&
                  D('scroll', a)
            }
          switch (s) {
            case 'input':
              Va(a), db(a, h, !0)
              break
            case 'textarea':
              Va(a), jb(a)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof h.onClick == 'function' && (a.onclick = Bf)
          }
          ;(a = c), (e.updateQueue = a), a !== null && (e.flags |= 4)
        } else {
          ;(d = c.nodeType === 9 ? c : c.ownerDocument),
            o === 'http://www.w3.org/1999/xhtml' && (o = kb(s)),
            o === 'http://www.w3.org/1999/xhtml'
              ? s === 'script'
                ? ((o = d.createElement('div')),
                  (o.innerHTML = '<script></script>'),
                  (o = o.removeChild(o.firstChild)))
                : typeof a.is == 'string'
                ? (o = d.createElement(s, { is: a.is }))
                : ((o = d.createElement(s)),
                  s === 'select' &&
                    ((d = o),
                    a.multiple
                      ? (d.multiple = !0)
                      : a.size && (d.size = a.size)))
              : (o = d.createElementNS(o, s)),
            (o[Of] = e),
            (o[Pf] = a),
            Aj(o, e, !1, !1),
            (e.stateNode = o)
          e: {
            switch (((d = vb(s, a)), s)) {
              case 'dialog':
                D('cancel', o), D('close', o), (c = a)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', o), (c = a)
                break
              case 'video':
              case 'audio':
                for (c = 0; c < lf.length; c++) D(lf[c], o)
                c = a
                break
              case 'source':
                D('error', o), (c = a)
                break
              case 'img':
              case 'image':
              case 'link':
                D('error', o), D('load', o), (c = a)
                break
              case 'details':
                D('toggle', o), (c = a)
                break
              case 'input':
                Za(o, a), (c = Ya(o, a)), D('invalid', o)
                break
              case 'option':
                c = a
                break
              case 'select':
                ;(o._wrapperState = { wasMultiple: !!a.multiple }),
                  (c = A({}, a, { value: void 0 })),
                  D('invalid', o)
                break
              case 'textarea':
                hb(o, a), (c = gb(o, a)), D('invalid', o)
                break
              default:
                c = a
            }
            ub(s, c), (g = c)
            for (h in g)
              if (g.hasOwnProperty(h)) {
                var b = g[h]
                h === 'style'
                  ? sb(o, b)
                  : h === 'dangerouslySetInnerHTML'
                  ? ((b = b ? b.__html : void 0), b != null && nb(o, b))
                  : h === 'children'
                  ? typeof b == 'string'
                    ? (s !== 'textarea' || b !== '') && ob(o, b)
                    : typeof b == 'number' && ob(o, '' + b)
                  : h !== 'suppressContentEditableWarning' &&
                    h !== 'suppressHydrationWarning' &&
                    h !== 'autoFocus' &&
                    (ea.hasOwnProperty(h)
                      ? b != null && h === 'onScroll' && D('scroll', o)
                      : b != null && ta(o, h, b, d))
              }
            switch (s) {
              case 'input':
                Va(o), db(o, a, !1)
                break
              case 'textarea':
                Va(o), jb(o)
                break
              case 'option':
                a.value != null && o.setAttribute('value', '' + Sa(a.value))
                break
              case 'select':
                ;(o.multiple = !!a.multiple),
                  (h = a.value),
                  h != null
                    ? fb(o, !!a.multiple, h, !1)
                    : a.defaultValue != null &&
                      fb(o, !!a.multiple, a.defaultValue, !0)
                break
              default:
                typeof c.onClick == 'function' && (o.onclick = Bf)
            }
            switch (s) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a = !!a.autoFocus
                break e
              case 'img':
                a = !0
                break e
              default:
                a = !1
            }
          }
          a && (e.flags |= 4)
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152))
      }
      return S(e), null
    case 6:
      if (o && e.stateNode != null) Dj(o, e, o.memoizedProps, a)
      else {
        if (typeof a != 'string' && e.stateNode === null) throw Error(p(166))
        if (((s = Hh(Gh.current)), Hh(Eh.current), Gg(e))) {
          if (
            ((a = e.stateNode),
            (s = e.memoizedProps),
            (a[Of] = e),
            (h = a.nodeValue !== s) && ((o = xg), o !== null))
          )
            switch (o.tag) {
              case 3:
                Af(a.nodeValue, s, (o.mode & 1) !== 0)
                break
              case 5:
                o.memoizedProps.suppressHydrationWarning !== !0 &&
                  Af(a.nodeValue, s, (o.mode & 1) !== 0)
            }
          h && (e.flags |= 4)
        } else
          (a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a)),
            (a[Of] = e),
            (e.stateNode = a)
      }
      return S(e), null
    case 13:
      if (
        (E(M),
        (a = e.memoizedState),
        o === null ||
          (o.memoizedState !== null && o.memoizedState.dehydrated !== null))
      ) {
        if (I && yg !== null && e.mode & 1 && !(e.flags & 128))
          Hg(), Ig(), (e.flags |= 98560), (h = !1)
        else if (((h = Gg(e)), a !== null && a.dehydrated !== null)) {
          if (o === null) {
            if (!h) throw Error(p(318))
            if (
              ((h = e.memoizedState),
              (h = h !== null ? h.dehydrated : null),
              !h)
            )
              throw Error(p(317))
            h[Of] = e
          } else
            Ig(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4)
          S(e), (h = !1)
        } else zg !== null && (Gj(zg), (zg = null)), (h = !0)
        if (!h) return e.flags & 65536 ? e : null
      }
      return e.flags & 128
        ? ((e.lanes = s), e)
        : ((a = a !== null),
          a !== (o !== null && o.memoizedState !== null) &&
            a &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (o === null || M.current & 1 ? T === 0 && (T = 3) : uj())),
          e.updateQueue !== null && (e.flags |= 4),
          S(e),
          null)
    case 4:
      return (
        Jh(), Bj(o, e), o === null && sf(e.stateNode.containerInfo), S(e), null
      )
    case 10:
      return Rg(e.type._context), S(e), null
    case 17:
      return Zf(e.type) && $f(), S(e), null
    case 19:
      if ((E(M), (h = e.memoizedState), h === null)) return S(e), null
      if (((a = (e.flags & 128) !== 0), (d = h.rendering), d === null))
        if (a) Ej(h, !1)
        else {
          if (T !== 0 || (o !== null && o.flags & 128))
            for (o = e.child; o !== null; ) {
              if (((d = Mh(o)), d !== null)) {
                for (
                  e.flags |= 128,
                    Ej(h, !1),
                    a = d.updateQueue,
                    a !== null && ((e.updateQueue = a), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    a = s,
                    s = e.child;
                  s !== null;

                )
                  (h = s),
                    (o = a),
                    (h.flags &= 14680066),
                    (d = h.alternate),
                    d === null
                      ? ((h.childLanes = 0),
                        (h.lanes = o),
                        (h.child = null),
                        (h.subtreeFlags = 0),
                        (h.memoizedProps = null),
                        (h.memoizedState = null),
                        (h.updateQueue = null),
                        (h.dependencies = null),
                        (h.stateNode = null))
                      : ((h.childLanes = d.childLanes),
                        (h.lanes = d.lanes),
                        (h.child = d.child),
                        (h.subtreeFlags = 0),
                        (h.deletions = null),
                        (h.memoizedProps = d.memoizedProps),
                        (h.memoizedState = d.memoizedState),
                        (h.updateQueue = d.updateQueue),
                        (h.type = d.type),
                        (o = d.dependencies),
                        (h.dependencies =
                          o === null
                            ? null
                            : {
                                lanes: o.lanes,
                                firstContext: o.firstContext
                              })),
                    (s = s.sibling)
                return G(M, (M.current & 1) | 2), e.child
              }
              o = o.sibling
            }
          h.tail !== null &&
            B() > Hj &&
            ((e.flags |= 128), (a = !0), Ej(h, !1), (e.lanes = 4194304))
        }
      else {
        if (!a)
          if (((o = Mh(d)), o !== null)) {
            if (
              ((e.flags |= 128),
              (a = !0),
              (s = o.updateQueue),
              s !== null && ((e.updateQueue = s), (e.flags |= 4)),
              Ej(h, !0),
              h.tail === null && h.tailMode === 'hidden' && !d.alternate && !I)
            )
              return S(e), null
          } else
            2 * B() - h.renderingStartTime > Hj &&
              s !== 1073741824 &&
              ((e.flags |= 128), (a = !0), Ej(h, !1), (e.lanes = 4194304))
        h.isBackwards
          ? ((d.sibling = e.child), (e.child = d))
          : ((s = h.last),
            s !== null ? (s.sibling = d) : (e.child = d),
            (h.last = d))
      }
      return h.tail !== null
        ? ((e = h.tail),
          (h.rendering = e),
          (h.tail = e.sibling),
          (h.renderingStartTime = B()),
          (e.sibling = null),
          (s = M.current),
          G(M, a ? (s & 1) | 2 : s & 1),
          e)
        : (S(e), null)
    case 22:
    case 23:
      return (
        Ij(),
        (a = e.memoizedState !== null),
        o !== null && (o.memoizedState !== null) !== a && (e.flags |= 8192),
        a && e.mode & 1
          ? gj & 1073741824 && (S(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : S(e),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(p(156, e.tag))
}
function Jj(o, e) {
  switch ((wg(e), e.tag)) {
    case 1:
      return (
        Zf(e.type) && $f(),
        (o = e.flags),
        o & 65536 ? ((e.flags = (o & -65537) | 128), e) : null
      )
    case 3:
      return (
        Jh(),
        E(Wf),
        E(H),
        Oh(),
        (o = e.flags),
        o & 65536 && !(o & 128) ? ((e.flags = (o & -65537) | 128), e) : null
      )
    case 5:
      return Lh(e), null
    case 13:
      if ((E(M), (o = e.memoizedState), o !== null && o.dehydrated !== null)) {
        if (e.alternate === null) throw Error(p(340))
        Ig()
      }
      return (
        (o = e.flags), o & 65536 ? ((e.flags = (o & -65537) | 128), e) : null
      )
    case 19:
      return E(M), null
    case 4:
      return Jh(), null
    case 10:
      return Rg(e.type._context), null
    case 22:
    case 23:
      return Ij(), null
    case 24:
      return null
    default:
      return null
  }
}
var Kj = !1,
  U = !1,
  Lj = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null
function Mj(o, e) {
  var s = o.ref
  if (s !== null)
    if (typeof s == 'function')
      try {
        s(null)
      } catch (a) {
        W(o, e, a)
      }
    else s.current = null
}
function Nj(o, e, s) {
  try {
    s()
  } catch (a) {
    W(o, e, a)
  }
}
var Oj = !1
function Pj(o, e) {
  if (((Cf = dd), (o = Me()), Ne(o))) {
    if ('selectionStart' in o)
      var s = { start: o.selectionStart, end: o.selectionEnd }
    else
      e: {
        s = ((s = o.ownerDocument) && s.defaultView) || window
        var a = s.getSelection && s.getSelection()
        if (a && a.rangeCount !== 0) {
          s = a.anchorNode
          var c = a.anchorOffset,
            h = a.focusNode
          a = a.focusOffset
          try {
            s.nodeType, h.nodeType
          } catch {
            s = null
            break e
          }
          var d = 0,
            g = -1,
            b = -1,
            $ = 0,
            _ = 0,
            j = o,
            _e = null
          t: for (;;) {
            for (
              var et;
              j !== s || (c !== 0 && j.nodeType !== 3) || (g = d + c),
                j !== h || (a !== 0 && j.nodeType !== 3) || (b = d + a),
                j.nodeType === 3 && (d += j.nodeValue.length),
                (et = j.firstChild) !== null;

            )
              (_e = j), (j = et)
            for (;;) {
              if (j === o) break t
              if (
                (_e === s && ++$ === c && (g = d),
                _e === h && ++_ === a && (b = d),
                (et = j.nextSibling) !== null)
              )
                break
              ;(j = _e), (_e = j.parentNode)
            }
            j = et
          }
          s = g === -1 || b === -1 ? null : { start: g, end: b }
        } else s = null
      }
    s = s || { start: 0, end: 0 }
  } else s = null
  for (Df = { focusedElem: o, selectionRange: s }, dd = !1, V = e; V !== null; )
    if (((e = V), (o = e.child), (e.subtreeFlags & 1028) !== 0 && o !== null))
      (o.return = e), (V = o)
    else
      for (; V !== null; ) {
        e = V
        try {
          var tt = e.alternate
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (tt !== null) {
                  var rt = tt.memoizedProps,
                    st = tt.memoizedState,
                    nt = e.stateNode,
                    it = nt.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? rt : Lg(e.type, rt),
                      st
                    )
                  nt.__reactInternalSnapshotBeforeUpdate = it
                }
                break
              case 3:
                var ot = e.stateNode.containerInfo
                ot.nodeType === 1
                  ? (ot.textContent = '')
                  : ot.nodeType === 9 &&
                    ot.documentElement &&
                    ot.removeChild(ot.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(p(163))
            }
        } catch (lt) {
          W(e, e.return, lt)
        }
        if (((o = e.sibling), o !== null)) {
          ;(o.return = e.return), (V = o)
          break
        }
        V = e.return
      }
  return (tt = Oj), (Oj = !1), tt
}
function Qj(o, e, s) {
  var a = e.updateQueue
  if (((a = a !== null ? a.lastEffect : null), a !== null)) {
    var c = (a = a.next)
    do {
      if ((c.tag & o) === o) {
        var h = c.destroy
        ;(c.destroy = void 0), h !== void 0 && Nj(e, s, h)
      }
      c = c.next
    } while (c !== a)
  }
}
function Rj(o, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var s = (e = e.next)
    do {
      if ((s.tag & o) === o) {
        var a = s.create
        s.destroy = a()
      }
      s = s.next
    } while (s !== e)
  }
}
function Sj(o) {
  var e = o.ref
  if (e !== null) {
    var s = o.stateNode
    switch (o.tag) {
      case 5:
        o = s
        break
      default:
        o = s
    }
    typeof e == 'function' ? e(o) : (e.current = o)
  }
}
function Tj(o) {
  var e = o.alternate
  e !== null && ((o.alternate = null), Tj(e)),
    (o.child = null),
    (o.deletions = null),
    (o.sibling = null),
    o.tag === 5 &&
      ((e = o.stateNode),
      e !== null &&
        (delete e[Of], delete e[Pf], delete e[of], delete e[Qf], delete e[Rf])),
    (o.stateNode = null),
    (o.return = null),
    (o.dependencies = null),
    (o.memoizedProps = null),
    (o.memoizedState = null),
    (o.pendingProps = null),
    (o.stateNode = null),
    (o.updateQueue = null)
}
function Uj(o) {
  return o.tag === 5 || o.tag === 3 || o.tag === 4
}
function Vj(o) {
  e: for (;;) {
    for (; o.sibling === null; ) {
      if (o.return === null || Uj(o.return)) return null
      o = o.return
    }
    for (
      o.sibling.return = o.return, o = o.sibling;
      o.tag !== 5 && o.tag !== 6 && o.tag !== 18;

    ) {
      if (o.flags & 2 || o.child === null || o.tag === 4) continue e
      ;(o.child.return = o), (o = o.child)
    }
    if (!(o.flags & 2)) return o.stateNode
  }
}
function Wj(o, e, s) {
  var a = o.tag
  if (a === 5 || a === 6)
    (o = o.stateNode),
      e
        ? s.nodeType === 8
          ? s.parentNode.insertBefore(o, e)
          : s.insertBefore(o, e)
        : (s.nodeType === 8
            ? ((e = s.parentNode), e.insertBefore(o, s))
            : ((e = s), e.appendChild(o)),
          (s = s._reactRootContainer),
          s != null || e.onclick !== null || (e.onclick = Bf))
  else if (a !== 4 && ((o = o.child), o !== null))
    for (Wj(o, e, s), o = o.sibling; o !== null; ) Wj(o, e, s), (o = o.sibling)
}
function Xj(o, e, s) {
  var a = o.tag
  if (a === 5 || a === 6)
    (o = o.stateNode), e ? s.insertBefore(o, e) : s.appendChild(o)
  else if (a !== 4 && ((o = o.child), o !== null))
    for (Xj(o, e, s), o = o.sibling; o !== null; ) Xj(o, e, s), (o = o.sibling)
}
var X = null,
  Yj = !1
function Zj(o, e, s) {
  for (s = s.child; s !== null; ) ak(o, e, s), (s = s.sibling)
}
function ak(o, e, s) {
  if (lc && typeof lc.onCommitFiberUnmount == 'function')
    try {
      lc.onCommitFiberUnmount(kc, s)
    } catch {}
  switch (s.tag) {
    case 5:
      U || Mj(s, e)
    case 6:
      var a = X,
        c = Yj
      ;(X = null),
        Zj(o, e, s),
        (X = a),
        (Yj = c),
        X !== null &&
          (Yj
            ? ((o = X),
              (s = s.stateNode),
              o.nodeType === 8 ? o.parentNode.removeChild(s) : o.removeChild(s))
            : X.removeChild(s.stateNode))
      break
    case 18:
      X !== null &&
        (Yj
          ? ((o = X),
            (s = s.stateNode),
            o.nodeType === 8
              ? Kf(o.parentNode, s)
              : o.nodeType === 1 && Kf(o, s),
            bd(o))
          : Kf(X, s.stateNode))
      break
    case 4:
      ;(a = X),
        (c = Yj),
        (X = s.stateNode.containerInfo),
        (Yj = !0),
        Zj(o, e, s),
        (X = a),
        (Yj = c)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !U &&
        ((a = s.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
      ) {
        c = a = a.next
        do {
          var h = c,
            d = h.destroy
          ;(h = h.tag),
            d !== void 0 && (h & 2 || h & 4) && Nj(s, e, d),
            (c = c.next)
        } while (c !== a)
      }
      Zj(o, e, s)
      break
    case 1:
      if (
        !U &&
        (Mj(s, e),
        (a = s.stateNode),
        typeof a.componentWillUnmount == 'function')
      )
        try {
          ;(a.props = s.memoizedProps),
            (a.state = s.memoizedState),
            a.componentWillUnmount()
        } catch (g) {
          W(s, e, g)
        }
      Zj(o, e, s)
      break
    case 21:
      Zj(o, e, s)
      break
    case 22:
      s.mode & 1
        ? ((U = (a = U) || s.memoizedState !== null), Zj(o, e, s), (U = a))
        : Zj(o, e, s)
      break
    default:
      Zj(o, e, s)
  }
}
function bk(o) {
  var e = o.updateQueue
  if (e !== null) {
    o.updateQueue = null
    var s = o.stateNode
    s === null && (s = o.stateNode = new Lj()),
      e.forEach(function (a) {
        var c = ck.bind(null, o, a)
        s.has(a) || (s.add(a), a.then(c, c))
      })
  }
}
function dk(o, e) {
  var s = e.deletions
  if (s !== null)
    for (var a = 0; a < s.length; a++) {
      var c = s[a]
      try {
        var h = o,
          d = e,
          g = d
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              ;(X = g.stateNode), (Yj = !1)
              break e
            case 3:
              ;(X = g.stateNode.containerInfo), (Yj = !0)
              break e
            case 4:
              ;(X = g.stateNode.containerInfo), (Yj = !0)
              break e
          }
          g = g.return
        }
        if (X === null) throw Error(p(160))
        ak(h, d, c), (X = null), (Yj = !1)
        var b = c.alternate
        b !== null && (b.return = null), (c.return = null)
      } catch ($) {
        W(c, e, $)
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) ek(e, o), (e = e.sibling)
}
function ek(o, e) {
  var s = o.alternate,
    a = o.flags
  switch (o.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dk(e, o), fk(o), a & 4)) {
        try {
          Qj(3, o, o.return), Rj(3, o)
        } catch (rt) {
          W(o, o.return, rt)
        }
        try {
          Qj(5, o, o.return)
        } catch (rt) {
          W(o, o.return, rt)
        }
      }
      break
    case 1:
      dk(e, o), fk(o), a & 512 && s !== null && Mj(s, s.return)
      break
    case 5:
      if (
        (dk(e, o),
        fk(o),
        a & 512 && s !== null && Mj(s, s.return),
        o.flags & 32)
      ) {
        var c = o.stateNode
        try {
          ob(c, '')
        } catch (rt) {
          W(o, o.return, rt)
        }
      }
      if (a & 4 && ((c = o.stateNode), c != null)) {
        var h = o.memoizedProps,
          d = s !== null ? s.memoizedProps : h,
          g = o.type,
          b = o.updateQueue
        if (((o.updateQueue = null), b !== null))
          try {
            g === 'input' && h.type === 'radio' && h.name != null && ab(c, h),
              vb(g, d)
            var $ = vb(g, h)
            for (d = 0; d < b.length; d += 2) {
              var _ = b[d],
                j = b[d + 1]
              _ === 'style'
                ? sb(c, j)
                : _ === 'dangerouslySetInnerHTML'
                ? nb(c, j)
                : _ === 'children'
                ? ob(c, j)
                : ta(c, _, j, $)
            }
            switch (g) {
              case 'input':
                bb(c, h)
                break
              case 'textarea':
                ib(c, h)
                break
              case 'select':
                var _e = c._wrapperState.wasMultiple
                c._wrapperState.wasMultiple = !!h.multiple
                var et = h.value
                et != null
                  ? fb(c, !!h.multiple, et, !1)
                  : _e !== !!h.multiple &&
                    (h.defaultValue != null
                      ? fb(c, !!h.multiple, h.defaultValue, !0)
                      : fb(c, !!h.multiple, h.multiple ? [] : '', !1))
            }
            c[Pf] = h
          } catch (rt) {
            W(o, o.return, rt)
          }
      }
      break
    case 6:
      if ((dk(e, o), fk(o), a & 4)) {
        if (o.stateNode === null) throw Error(p(162))
        ;(c = o.stateNode), (h = o.memoizedProps)
        try {
          c.nodeValue = h
        } catch (rt) {
          W(o, o.return, rt)
        }
      }
      break
    case 3:
      if (
        (dk(e, o), fk(o), a & 4 && s !== null && s.memoizedState.isDehydrated)
      )
        try {
          bd(e.containerInfo)
        } catch (rt) {
          W(o, o.return, rt)
        }
      break
    case 4:
      dk(e, o), fk(o)
      break
    case 13:
      dk(e, o),
        fk(o),
        (c = o.child),
        c.flags & 8192 &&
          ((h = c.memoizedState !== null),
          (c.stateNode.isHidden = h),
          !h ||
            (c.alternate !== null && c.alternate.memoizedState !== null) ||
            (gk = B())),
        a & 4 && bk(o)
      break
    case 22:
      if (
        ((_ = s !== null && s.memoizedState !== null),
        o.mode & 1 ? ((U = ($ = U) || _), dk(e, o), (U = $)) : dk(e, o),
        fk(o),
        a & 8192)
      ) {
        if (
          (($ = o.memoizedState !== null),
          (o.stateNode.isHidden = $) && !_ && o.mode & 1)
        )
          for (V = o, _ = o.child; _ !== null; ) {
            for (j = V = _; V !== null; ) {
              switch (((_e = V), (et = _e.child), _e.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, _e, _e.return)
                  break
                case 1:
                  Mj(_e, _e.return)
                  var tt = _e.stateNode
                  if (typeof tt.componentWillUnmount == 'function') {
                    ;(a = _e), (s = _e.return)
                    try {
                      ;(e = a),
                        (tt.props = e.memoizedProps),
                        (tt.state = e.memoizedState),
                        tt.componentWillUnmount()
                    } catch (rt) {
                      W(a, s, rt)
                    }
                  }
                  break
                case 5:
                  Mj(_e, _e.return)
                  break
                case 22:
                  if (_e.memoizedState !== null) {
                    hk(j)
                    continue
                  }
              }
              et !== null ? ((et.return = _e), (V = et)) : hk(j)
            }
            _ = _.sibling
          }
        e: for (_ = null, j = o; ; ) {
          if (j.tag === 5) {
            if (_ === null) {
              _ = j
              try {
                ;(c = j.stateNode),
                  $
                    ? ((h = c.style),
                      typeof h.setProperty == 'function'
                        ? h.setProperty('display', 'none', 'important')
                        : (h.display = 'none'))
                    : ((g = j.stateNode),
                      (b = j.memoizedProps.style),
                      (d =
                        b != null && b.hasOwnProperty('display')
                          ? b.display
                          : null),
                      (g.style.display = rb('display', d)))
              } catch (rt) {
                W(o, o.return, rt)
              }
            }
          } else if (j.tag === 6) {
            if (_ === null)
              try {
                j.stateNode.nodeValue = $ ? '' : j.memoizedProps
              } catch (rt) {
                W(o, o.return, rt)
              }
          } else if (
            ((j.tag !== 22 && j.tag !== 23) ||
              j.memoizedState === null ||
              j === o) &&
            j.child !== null
          ) {
            ;(j.child.return = j), (j = j.child)
            continue
          }
          if (j === o) break e
          for (; j.sibling === null; ) {
            if (j.return === null || j.return === o) break e
            _ === j && (_ = null), (j = j.return)
          }
          _ === j && (_ = null), (j.sibling.return = j.return), (j = j.sibling)
        }
      }
      break
    case 19:
      dk(e, o), fk(o), a & 4 && bk(o)
      break
    case 21:
      break
    default:
      dk(e, o), fk(o)
  }
}
function fk(o) {
  var e = o.flags
  if (e & 2) {
    try {
      e: {
        for (var s = o.return; s !== null; ) {
          if (Uj(s)) {
            var a = s
            break e
          }
          s = s.return
        }
        throw Error(p(160))
      }
      switch (a.tag) {
        case 5:
          var c = a.stateNode
          a.flags & 32 && (ob(c, ''), (a.flags &= -33))
          var h = Vj(o)
          Xj(o, h, c)
          break
        case 3:
        case 4:
          var d = a.stateNode.containerInfo,
            g = Vj(o)
          Wj(o, g, d)
          break
        default:
          throw Error(p(161))
      }
    } catch (b) {
      W(o, o.return, b)
    }
    o.flags &= -3
  }
  e & 4096 && (o.flags &= -4097)
}
function ik(o, e, s) {
  ;(V = o), jk(o)
}
function jk(o, e, s) {
  for (var a = (o.mode & 1) !== 0; V !== null; ) {
    var c = V,
      h = c.child
    if (c.tag === 22 && a) {
      var d = c.memoizedState !== null || Kj
      if (!d) {
        var g = c.alternate,
          b = (g !== null && g.memoizedState !== null) || U
        g = Kj
        var $ = U
        if (((Kj = d), (U = b) && !$))
          for (V = c; V !== null; )
            (d = V),
              (b = d.child),
              d.tag === 22 && d.memoizedState !== null
                ? kk(c)
                : b !== null
                ? ((b.return = d), (V = b))
                : kk(c)
        for (; h !== null; ) (V = h), jk(h), (h = h.sibling)
        ;(V = c), (Kj = g), (U = $)
      }
      lk(o)
    } else
      c.subtreeFlags & 8772 && h !== null ? ((h.return = c), (V = h)) : lk(o)
  }
}
function lk(o) {
  for (; V !== null; ) {
    var e = V
    if (e.flags & 8772) {
      var s = e.alternate
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, e)
              break
            case 1:
              var a = e.stateNode
              if (e.flags & 4 && !U)
                if (s === null) a.componentDidMount()
                else {
                  var c =
                    e.elementType === e.type
                      ? s.memoizedProps
                      : Lg(e.type, s.memoizedProps)
                  a.componentDidUpdate(
                    c,
                    s.memoizedState,
                    a.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var h = e.updateQueue
              h !== null && ih(e, h, a)
              break
            case 3:
              var d = e.updateQueue
              if (d !== null) {
                if (((s = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      s = e.child.stateNode
                      break
                    case 1:
                      s = e.child.stateNode
                  }
                ih(e, d, s)
              }
              break
            case 5:
              var g = e.stateNode
              if (s === null && e.flags & 4) {
                s = g
                var b = e.memoizedProps
                switch (e.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    b.autoFocus && s.focus()
                    break
                  case 'img':
                    b.src && (s.src = b.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (e.memoizedState === null) {
                var $ = e.alternate
                if ($ !== null) {
                  var _ = $.memoizedState
                  if (_ !== null) {
                    var j = _.dehydrated
                    j !== null && bd(j)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(p(163))
          }
        U || (e.flags & 512 && Sj(e))
      } catch (_e) {
        W(e, e.return, _e)
      }
    }
    if (e === o) {
      V = null
      break
    }
    if (((s = e.sibling), s !== null)) {
      ;(s.return = e.return), (V = s)
      break
    }
    V = e.return
  }
}
function hk(o) {
  for (; V !== null; ) {
    var e = V
    if (e === o) {
      V = null
      break
    }
    var s = e.sibling
    if (s !== null) {
      ;(s.return = e.return), (V = s)
      break
    }
    V = e.return
  }
}
function kk(o) {
  for (; V !== null; ) {
    var e = V
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var s = e.return
          try {
            Rj(4, e)
          } catch (b) {
            W(e, s, b)
          }
          break
        case 1:
          var a = e.stateNode
          if (typeof a.componentDidMount == 'function') {
            var c = e.return
            try {
              a.componentDidMount()
            } catch (b) {
              W(e, c, b)
            }
          }
          var h = e.return
          try {
            Sj(e)
          } catch (b) {
            W(e, h, b)
          }
          break
        case 5:
          var d = e.return
          try {
            Sj(e)
          } catch (b) {
            W(e, d, b)
          }
      }
    } catch (b) {
      W(e, e.return, b)
    }
    if (e === o) {
      V = null
      break
    }
    var g = e.sibling
    if (g !== null) {
      ;(g.return = e.return), (V = g)
      break
    }
    V = e.return
  }
}
var mk = Math.ceil,
  nk = ua.ReactCurrentDispatcher,
  ok = ua.ReactCurrentOwner,
  pk = ua.ReactCurrentBatchConfig,
  K = 0,
  R = null,
  Y = null,
  Z = 0,
  gj = 0,
  fj = Uf(0),
  T = 0,
  qk = null,
  hh = 0,
  rk = 0,
  sk = 0,
  tk = null,
  uk = null,
  gk = 0,
  Hj = 1 / 0,
  vk = null,
  Pi = !1,
  Qi = null,
  Si = null,
  wk = !1,
  xk = null,
  yk = 0,
  zk = 0,
  Ak = null,
  Bk = -1,
  Ck = 0
function L() {
  return K & 6 ? B() : Bk !== -1 ? Bk : (Bk = B())
}
function lh(o) {
  return o.mode & 1
    ? K & 2 && Z !== 0
      ? Z & -Z
      : Kg.transition !== null
      ? (Ck === 0 && (Ck = yc()), Ck)
      : ((o = C$1),
        o !== 0 || ((o = window.event), (o = o === void 0 ? 16 : jd(o.type))),
        o)
    : 1
}
function mh(o, e, s, a) {
  if (50 < zk) throw ((zk = 0), (Ak = null), Error(p(185)))
  Ac(o, s, a),
    (!(K & 2) || o !== R) &&
      (o === R && (!(K & 2) && (rk |= s), T === 4 && Dk(o, Z)),
      Ek(o, a),
      s === 1 && K === 0 && !(e.mode & 1) && ((Hj = B() + 500), fg && jg()))
}
function Ek(o, e) {
  var s = o.callbackNode
  wc(o, e)
  var a = uc(o, o === R ? Z : 0)
  if (a === 0)
    s !== null && bc(s), (o.callbackNode = null), (o.callbackPriority = 0)
  else if (((e = a & -a), o.callbackPriority !== e)) {
    if ((s != null && bc(s), e === 1))
      o.tag === 0 ? ig(Fk.bind(null, o)) : hg(Fk.bind(null, o)),
        Jf(function () {
          !(K & 6) && jg()
        }),
        (s = null)
    else {
      switch (Dc(a)) {
        case 1:
          s = fc
          break
        case 4:
          s = gc
          break
        case 16:
          s = hc
          break
        case 536870912:
          s = jc
          break
        default:
          s = hc
      }
      s = Gk(s, Hk.bind(null, o))
    }
    ;(o.callbackPriority = e), (o.callbackNode = s)
  }
}
function Hk(o, e) {
  if (((Bk = -1), (Ck = 0), K & 6)) throw Error(p(327))
  var s = o.callbackNode
  if (Ik() && o.callbackNode !== s) return null
  var a = uc(o, o === R ? Z : 0)
  if (a === 0) return null
  if (a & 30 || a & o.expiredLanes || e) e = Jk(o, a)
  else {
    e = a
    var c = K
    K |= 2
    var h = Kk()
    ;(R !== o || Z !== e) && ((vk = null), (Hj = B() + 500), Lk(o, e))
    do
      try {
        Mk()
        break
      } catch (g) {
        Nk(o, g)
      }
    while (1)
    Qg(),
      (nk.current = h),
      (K = c),
      Y !== null ? (e = 0) : ((R = null), (Z = 0), (e = T))
  }
  if (e !== 0) {
    if (
      (e === 2 && ((c = xc(o)), c !== 0 && ((a = c), (e = Ok(o, c)))), e === 1)
    )
      throw ((s = qk), Lk(o, 0), Dk(o, a), Ek(o, B()), s)
    if (e === 6) Dk(o, a)
    else {
      if (
        ((c = o.current.alternate),
        !(a & 30) &&
          !Pk(c) &&
          ((e = Jk(o, a)),
          e === 2 && ((h = xc(o)), h !== 0 && ((a = h), (e = Ok(o, h)))),
          e === 1))
      )
        throw ((s = qk), Lk(o, 0), Dk(o, a), Ek(o, B()), s)
      switch (((o.finishedWork = c), (o.finishedLanes = a), e)) {
        case 0:
        case 1:
          throw Error(p(345))
        case 2:
          Qk(o, uk, vk)
          break
        case 3:
          if (
            (Dk(o, a), (a & 130023424) === a && ((e = gk + 500 - B()), 10 < e))
          ) {
            if (uc(o, 0) !== 0) break
            if (((c = o.suspendedLanes), (c & a) !== a)) {
              L(), (o.pingedLanes |= o.suspendedLanes & c)
              break
            }
            o.timeoutHandle = Ff(Qk.bind(null, o, uk, vk), e)
            break
          }
          Qk(o, uk, vk)
          break
        case 4:
          if ((Dk(o, a), (a & 4194240) === a)) break
          for (e = o.eventTimes, c = -1; 0 < a; ) {
            var d = 31 - oc(a)
            ;(h = 1 << d), (d = e[d]), d > c && (c = d), (a &= ~h)
          }
          if (
            ((a = c),
            (a = B() - a),
            (a =
              (120 > a
                ? 120
                : 480 > a
                ? 480
                : 1080 > a
                ? 1080
                : 1920 > a
                ? 1920
                : 3e3 > a
                ? 3e3
                : 4320 > a
                ? 4320
                : 1960 * mk(a / 1960)) - a),
            10 < a)
          ) {
            o.timeoutHandle = Ff(Qk.bind(null, o, uk, vk), a)
            break
          }
          Qk(o, uk, vk)
          break
        case 5:
          Qk(o, uk, vk)
          break
        default:
          throw Error(p(329))
      }
    }
  }
  return Ek(o, B()), o.callbackNode === s ? Hk.bind(null, o) : null
}
function Ok(o, e) {
  var s = tk
  return (
    o.current.memoizedState.isDehydrated && (Lk(o, e).flags |= 256),
    (o = Jk(o, e)),
    o !== 2 && ((e = uk), (uk = s), e !== null && Gj(e)),
    o
  )
}
function Gj(o) {
  uk === null ? (uk = o) : uk.push.apply(uk, o)
}
function Pk(o) {
  for (var e = o; ; ) {
    if (e.flags & 16384) {
      var s = e.updateQueue
      if (s !== null && ((s = s.stores), s !== null))
        for (var a = 0; a < s.length; a++) {
          var c = s[a],
            h = c.getSnapshot
          c = c.value
          try {
            if (!He(h(), c)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((s = e.child), e.subtreeFlags & 16384 && s !== null))
      (s.return = e), (e = s)
    else {
      if (e === o) break
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === o) return !0
        e = e.return
      }
      ;(e.sibling.return = e.return), (e = e.sibling)
    }
  }
  return !0
}
function Dk(o, e) {
  for (
    e &= ~sk,
      e &= ~rk,
      o.suspendedLanes |= e,
      o.pingedLanes &= ~e,
      o = o.expirationTimes;
    0 < e;

  ) {
    var s = 31 - oc(e),
      a = 1 << s
    ;(o[s] = -1), (e &= ~a)
  }
}
function Fk(o) {
  if (K & 6) throw Error(p(327))
  Ik()
  var e = uc(o, 0)
  if (!(e & 1)) return Ek(o, B()), null
  var s = Jk(o, e)
  if (o.tag !== 0 && s === 2) {
    var a = xc(o)
    a !== 0 && ((e = a), (s = Ok(o, a)))
  }
  if (s === 1) throw ((s = qk), Lk(o, 0), Dk(o, e), Ek(o, B()), s)
  if (s === 6) throw Error(p(345))
  return (
    (o.finishedWork = o.current.alternate),
    (o.finishedLanes = e),
    Qk(o, uk, vk),
    Ek(o, B()),
    null
  )
}
function Rk(o, e) {
  var s = K
  K |= 1
  try {
    return o(e)
  } finally {
    ;(K = s), K === 0 && ((Hj = B() + 500), fg && jg())
  }
}
function Sk(o) {
  xk !== null && xk.tag === 0 && !(K & 6) && Ik()
  var e = K
  K |= 1
  var s = pk.transition,
    a = C$1
  try {
    if (((pk.transition = null), (C$1 = 1), o)) return o()
  } finally {
    ;(C$1 = a), (pk.transition = s), (K = e), !(K & 6) && jg()
  }
}
function Ij() {
  ;(gj = fj.current), E(fj)
}
function Lk(o, e) {
  ;(o.finishedWork = null), (o.finishedLanes = 0)
  var s = o.timeoutHandle
  if ((s !== -1 && ((o.timeoutHandle = -1), Gf(s)), Y !== null))
    for (s = Y.return; s !== null; ) {
      var a = s
      switch ((wg(a), a.tag)) {
        case 1:
          ;(a = a.type.childContextTypes), a != null && $f()
          break
        case 3:
          Jh(), E(Wf), E(H), Oh()
          break
        case 5:
          Lh(a)
          break
        case 4:
          Jh()
          break
        case 13:
          E(M)
          break
        case 19:
          E(M)
          break
        case 10:
          Rg(a.type._context)
          break
        case 22:
        case 23:
          Ij()
      }
      s = s.return
    }
  if (
    ((R = o),
    (Y = o = wh(o.current, null)),
    (Z = gj = e),
    (T = 0),
    (qk = null),
    (sk = rk = hh = 0),
    (uk = tk = null),
    Wg !== null)
  ) {
    for (e = 0; e < Wg.length; e++)
      if (((s = Wg[e]), (a = s.interleaved), a !== null)) {
        s.interleaved = null
        var c = a.next,
          h = s.pending
        if (h !== null) {
          var d = h.next
          ;(h.next = c), (a.next = d)
        }
        s.pending = a
      }
    Wg = null
  }
  return o
}
function Nk(o, e) {
  do {
    var s = Y
    try {
      if ((Qg(), (Ph.current = ai), Sh)) {
        for (var a = N.memoizedState; a !== null; ) {
          var c = a.queue
          c !== null && (c.pending = null), (a = a.next)
        }
        Sh = !1
      }
      if (
        ((Rh = 0),
        (P = O = N = null),
        (Th = !1),
        (Uh = 0),
        (ok.current = null),
        s === null || s.return === null)
      ) {
        ;(T = 1), (qk = e), (Y = null)
        break
      }
      e: {
        var h = o,
          d = s.return,
          g = s,
          b = e
        if (
          ((e = Z),
          (g.flags |= 32768),
          b !== null && typeof b == 'object' && typeof b.then == 'function')
        ) {
          var $ = b,
            _ = g,
            j = _.tag
          if (!(_.mode & 1) && (j === 0 || j === 11 || j === 15)) {
            var _e = _.alternate
            _e
              ? ((_.updateQueue = _e.updateQueue),
                (_.memoizedState = _e.memoizedState),
                (_.lanes = _e.lanes))
              : ((_.updateQueue = null), (_.memoizedState = null))
          }
          var et = Vi(d)
          if (et !== null) {
            ;(et.flags &= -257),
              Wi(et, d, g, h, e),
              et.mode & 1 && Ti(h, $, e),
              (e = et),
              (b = $)
            var tt = e.updateQueue
            if (tt === null) {
              var rt = new Set()
              rt.add(b), (e.updateQueue = rt)
            } else tt.add(b)
            break e
          } else {
            if (!(e & 1)) {
              Ti(h, $, e), uj()
              break e
            }
            b = Error(p(426))
          }
        } else if (I && g.mode & 1) {
          var st = Vi(d)
          if (st !== null) {
            !(st.flags & 65536) && (st.flags |= 256),
              Wi(st, d, g, h, e),
              Jg(Ki(b, g))
            break e
          }
        }
        ;(h = b = Ki(b, g)),
          T !== 4 && (T = 2),
          tk === null ? (tk = [h]) : tk.push(h),
          (h = d)
        do {
          switch (h.tag) {
            case 3:
              ;(h.flags |= 65536), (e &= -e), (h.lanes |= e)
              var nt = Oi(h, b, e)
              fh(h, nt)
              break e
            case 1:
              g = b
              var it = h.type,
                ot = h.stateNode
              if (
                !(h.flags & 128) &&
                (typeof it.getDerivedStateFromError == 'function' ||
                  (ot !== null &&
                    typeof ot.componentDidCatch == 'function' &&
                    (Si === null || !Si.has(ot))))
              ) {
                ;(h.flags |= 65536), (e &= -e), (h.lanes |= e)
                var lt = Ri(h, g, e)
                fh(h, lt)
                break e
              }
          }
          h = h.return
        } while (h !== null)
      }
      Tk(s)
    } catch (at) {
      ;(e = at), Y === s && s !== null && (Y = s = s.return)
      continue
    }
    break
  } while (1)
}
function Kk() {
  var o = nk.current
  return (nk.current = ai), o === null ? ai : o
}
function uj() {
  ;(T === 0 || T === 3 || T === 2) && (T = 4),
    R === null || (!(hh & 268435455) && !(rk & 268435455)) || Dk(R, Z)
}
function Jk(o, e) {
  var s = K
  K |= 2
  var a = Kk()
  ;(R !== o || Z !== e) && ((vk = null), Lk(o, e))
  do
    try {
      Uk()
      break
    } catch (c) {
      Nk(o, c)
    }
  while (1)
  if ((Qg(), (K = s), (nk.current = a), Y !== null)) throw Error(p(261))
  return (R = null), (Z = 0), T
}
function Uk() {
  for (; Y !== null; ) Vk(Y)
}
function Mk() {
  for (; Y !== null && !cc(); ) Vk(Y)
}
function Vk(o) {
  var e = Wk(o.alternate, o, gj)
  ;(o.memoizedProps = o.pendingProps),
    e === null ? Tk(o) : (Y = e),
    (ok.current = null)
}
function Tk(o) {
  var e = o
  do {
    var s = e.alternate
    if (((o = e.return), e.flags & 32768)) {
      if (((s = Jj(s, e)), s !== null)) {
        ;(s.flags &= 32767), (Y = s)
        return
      }
      if (o !== null)
        (o.flags |= 32768), (o.subtreeFlags = 0), (o.deletions = null)
      else {
        ;(T = 6), (Y = null)
        return
      }
    } else if (((s = Fj(s, e, gj)), s !== null)) {
      Y = s
      return
    }
    if (((e = e.sibling), e !== null)) {
      Y = e
      return
    }
    Y = e = o
  } while (e !== null)
  T === 0 && (T = 5)
}
function Qk(o, e, s) {
  var a = C$1,
    c = pk.transition
  try {
    ;(pk.transition = null), (C$1 = 1), Xk(o, e, s, a)
  } finally {
    ;(pk.transition = c), (C$1 = a)
  }
  return null
}
function Xk(o, e, s, a) {
  do Ik()
  while (xk !== null)
  if (K & 6) throw Error(p(327))
  s = o.finishedWork
  var c = o.finishedLanes
  if (s === null) return null
  if (((o.finishedWork = null), (o.finishedLanes = 0), s === o.current))
    throw Error(p(177))
  ;(o.callbackNode = null), (o.callbackPriority = 0)
  var h = s.lanes | s.childLanes
  if (
    (Bc(o, h),
    o === R && ((Y = R = null), (Z = 0)),
    (!(s.subtreeFlags & 2064) && !(s.flags & 2064)) ||
      wk ||
      ((wk = !0),
      Gk(hc, function () {
        return Ik(), null
      })),
    (h = (s.flags & 15990) !== 0),
    s.subtreeFlags & 15990 || h)
  ) {
    ;(h = pk.transition), (pk.transition = null)
    var d = C$1
    C$1 = 1
    var g = K
    ;(K |= 4),
      (ok.current = null),
      Pj(o, s),
      ek(s, o),
      Oe(Df),
      (dd = !!Cf),
      (Df = Cf = null),
      (o.current = s),
      ik(s),
      dc(),
      (K = g),
      (C$1 = d),
      (pk.transition = h)
  } else o.current = s
  if (
    (wk && ((wk = !1), (xk = o), (yk = c)),
    (h = o.pendingLanes),
    h === 0 && (Si = null),
    mc(s.stateNode),
    Ek(o, B()),
    e !== null)
  )
    for (a = o.onRecoverableError, s = 0; s < e.length; s++)
      (c = e[s]), a(c.value, { componentStack: c.stack, digest: c.digest })
  if (Pi) throw ((Pi = !1), (o = Qi), (Qi = null), o)
  return (
    yk & 1 && o.tag !== 0 && Ik(),
    (h = o.pendingLanes),
    h & 1 ? (o === Ak ? zk++ : ((zk = 0), (Ak = o))) : (zk = 0),
    jg(),
    null
  )
}
function Ik() {
  if (xk !== null) {
    var o = Dc(yk),
      e = pk.transition,
      s = C$1
    try {
      if (((pk.transition = null), (C$1 = 16 > o ? 16 : o), xk === null))
        var a = !1
      else {
        if (((o = xk), (xk = null), (yk = 0), K & 6)) throw Error(p(331))
        var c = K
        for (K |= 4, V = o.current; V !== null; ) {
          var h = V,
            d = h.child
          if (V.flags & 16) {
            var g = h.deletions
            if (g !== null) {
              for (var b = 0; b < g.length; b++) {
                var $ = g[b]
                for (V = $; V !== null; ) {
                  var _ = V
                  switch (_.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, _, h)
                  }
                  var j = _.child
                  if (j !== null) (j.return = _), (V = j)
                  else
                    for (; V !== null; ) {
                      _ = V
                      var _e = _.sibling,
                        et = _.return
                      if ((Tj(_), _ === $)) {
                        V = null
                        break
                      }
                      if (_e !== null) {
                        ;(_e.return = et), (V = _e)
                        break
                      }
                      V = et
                    }
                }
              }
              var tt = h.alternate
              if (tt !== null) {
                var rt = tt.child
                if (rt !== null) {
                  tt.child = null
                  do {
                    var st = rt.sibling
                    ;(rt.sibling = null), (rt = st)
                  } while (rt !== null)
                }
              }
              V = h
            }
          }
          if (h.subtreeFlags & 2064 && d !== null) (d.return = h), (V = d)
          else
            e: for (; V !== null; ) {
              if (((h = V), h.flags & 2048))
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h, h.return)
                }
              var nt = h.sibling
              if (nt !== null) {
                ;(nt.return = h.return), (V = nt)
                break e
              }
              V = h.return
            }
        }
        var it = o.current
        for (V = it; V !== null; ) {
          d = V
          var ot = d.child
          if (d.subtreeFlags & 2064 && ot !== null) (ot.return = d), (V = ot)
          else
            e: for (d = it; V !== null; ) {
              if (((g = V), g.flags & 2048))
                try {
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rj(9, g)
                  }
                } catch (at) {
                  W(g, g.return, at)
                }
              if (g === d) {
                V = null
                break e
              }
              var lt = g.sibling
              if (lt !== null) {
                ;(lt.return = g.return), (V = lt)
                break e
              }
              V = g.return
            }
        }
        if (
          ((K = c), jg(), lc && typeof lc.onPostCommitFiberRoot == 'function')
        )
          try {
            lc.onPostCommitFiberRoot(kc, o)
          } catch {}
        a = !0
      }
      return a
    } finally {
      ;(C$1 = s), (pk.transition = e)
    }
  }
  return !1
}
function Yk(o, e, s) {
  ;(e = Ki(s, e)),
    (e = Oi(o, e, 1)),
    (o = dh(o, e, 1)),
    (e = L()),
    o !== null && (Ac(o, 1, e), Ek(o, e))
}
function W(o, e, s) {
  if (o.tag === 3) Yk(o, o, s)
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Yk(e, o, s)
        break
      } else if (e.tag === 1) {
        var a = e.stateNode
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof a.componentDidCatch == 'function' &&
            (Si === null || !Si.has(a)))
        ) {
          ;(o = Ki(s, o)),
            (o = Ri(e, o, 1)),
            (e = dh(e, o, 1)),
            (o = L()),
            e !== null && (Ac(e, 1, o), Ek(e, o))
          break
        }
      }
      e = e.return
    }
}
function Ui(o, e, s) {
  var a = o.pingCache
  a !== null && a.delete(e),
    (e = L()),
    (o.pingedLanes |= o.suspendedLanes & s),
    R === o &&
      (Z & s) === s &&
      (T === 4 || (T === 3 && (Z & 130023424) === Z && 500 > B() - gk)
        ? Lk(o, 0)
        : (sk |= s)),
    Ek(o, e)
}
function Zk(o, e) {
  e === 0 &&
    (o.mode & 1
      ? ((e = sc), (sc <<= 1), !(sc & 130023424) && (sc = 4194304))
      : (e = 1))
  var s = L()
  ;(o = Zg(o, e)), o !== null && (Ac(o, e, s), Ek(o, s))
}
function vj(o) {
  var e = o.memoizedState,
    s = 0
  e !== null && (s = e.retryLane), Zk(o, s)
}
function ck(o, e) {
  var s = 0
  switch (o.tag) {
    case 13:
      var a = o.stateNode,
        c = o.memoizedState
      c !== null && (s = c.retryLane)
      break
    case 19:
      a = o.stateNode
      break
    default:
      throw Error(p(314))
  }
  a !== null && a.delete(e), Zk(o, s)
}
var Wk
Wk = function (o, e, s) {
  if (o !== null)
    if (o.memoizedProps !== e.pendingProps || Wf.current) Ug = !0
    else {
      if (!(o.lanes & s) && !(e.flags & 128)) return (Ug = !1), zj(o, e, s)
      Ug = !!(o.flags & 131072)
    }
  else (Ug = !1), I && e.flags & 1048576 && ug(e, ng, e.index)
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var a = e.type
      jj(o, e), (o = e.pendingProps)
      var c = Yf(e, H.current)
      Tg(e, s), (c = Xh(null, e, a, o, c, s))
      var h = bi()
      return (
        (e.flags |= 1),
        typeof c == 'object' &&
        c !== null &&
        typeof c.render == 'function' &&
        c.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Zf(a) ? ((h = !0), cg(e)) : (h = !1),
            (e.memoizedState =
              c.state !== null && c.state !== void 0 ? c.state : null),
            ah(e),
            (c.updater = nh),
            (e.stateNode = c),
            (c._reactInternals = e),
            rh(e, a, o, s),
            (e = kj(null, e, a, !0, h, s)))
          : ((e.tag = 0), I && h && vg(e), Yi(null, e, c, s), (e = e.child)),
        e
      )
    case 16:
      a = e.elementType
      e: {
        switch (
          (jj(o, e),
          (o = e.pendingProps),
          (c = a._init),
          (a = c(a._payload)),
          (e.type = a),
          (c = e.tag = $k(a)),
          (o = Lg(a, o)),
          c)
        ) {
          case 0:
            e = dj(null, e, a, o, s)
            break e
          case 1:
            e = ij(null, e, a, o, s)
            break e
          case 11:
            e = Zi(null, e, a, o, s)
            break e
          case 14:
            e = aj(null, e, a, Lg(a.type, o), s)
            break e
        }
        throw Error(p(306, a, ''))
      }
      return e
    case 0:
      return (
        (a = e.type),
        (c = e.pendingProps),
        (c = e.elementType === a ? c : Lg(a, c)),
        dj(o, e, a, c, s)
      )
    case 1:
      return (
        (a = e.type),
        (c = e.pendingProps),
        (c = e.elementType === a ? c : Lg(a, c)),
        ij(o, e, a, c, s)
      )
    case 3:
      e: {
        if ((lj(e), o === null)) throw Error(p(387))
        ;(a = e.pendingProps),
          (h = e.memoizedState),
          (c = h.element),
          bh(o, e),
          gh(e, a, null, s)
        var d = e.memoizedState
        if (((a = d.element), h.isDehydrated))
          if (
            ((h = {
              element: a,
              isDehydrated: !1,
              cache: d.cache,
              pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
              transitions: d.transitions
            }),
            (e.updateQueue.baseState = h),
            (e.memoizedState = h),
            e.flags & 256)
          ) {
            ;(c = Ki(Error(p(423)), e)), (e = mj(o, e, a, s, c))
            break e
          } else if (a !== c) {
            ;(c = Ki(Error(p(424)), e)), (e = mj(o, e, a, s, c))
            break e
          } else
            for (
              yg = Lf(e.stateNode.containerInfo.firstChild),
                xg = e,
                I = !0,
                zg = null,
                s = Ch(e, null, a, s),
                e.child = s;
              s;

            )
              (s.flags = (s.flags & -3) | 4096), (s = s.sibling)
        else {
          if ((Ig(), a === c)) {
            e = $i(o, e, s)
            break e
          }
          Yi(o, e, a, s)
        }
        e = e.child
      }
      return e
    case 5:
      return (
        Kh(e),
        o === null && Eg(e),
        (a = e.type),
        (c = e.pendingProps),
        (h = o !== null ? o.memoizedProps : null),
        (d = c.children),
        Ef(a, c) ? (d = null) : h !== null && Ef(a, h) && (e.flags |= 32),
        hj(o, e),
        Yi(o, e, d, s),
        e.child
      )
    case 6:
      return o === null && Eg(e), null
    case 13:
      return pj(o, e, s)
    case 4:
      return (
        Ih(e, e.stateNode.containerInfo),
        (a = e.pendingProps),
        o === null ? (e.child = Bh(e, null, a, s)) : Yi(o, e, a, s),
        e.child
      )
    case 11:
      return (
        (a = e.type),
        (c = e.pendingProps),
        (c = e.elementType === a ? c : Lg(a, c)),
        Zi(o, e, a, c, s)
      )
    case 7:
      return Yi(o, e, e.pendingProps, s), e.child
    case 8:
      return Yi(o, e, e.pendingProps.children, s), e.child
    case 12:
      return Yi(o, e, e.pendingProps.children, s), e.child
    case 10:
      e: {
        if (
          ((a = e.type._context),
          (c = e.pendingProps),
          (h = e.memoizedProps),
          (d = c.value),
          G(Mg, a._currentValue),
          (a._currentValue = d),
          h !== null)
        )
          if (He(h.value, d)) {
            if (h.children === c.children && !Wf.current) {
              e = $i(o, e, s)
              break e
            }
          } else
            for (h = e.child, h !== null && (h.return = e); h !== null; ) {
              var g = h.dependencies
              if (g !== null) {
                d = h.child
                for (var b = g.firstContext; b !== null; ) {
                  if (b.context === a) {
                    if (h.tag === 1) {
                      ;(b = ch(-1, s & -s)), (b.tag = 2)
                      var $ = h.updateQueue
                      if ($ !== null) {
                        $ = $.shared
                        var _ = $.pending
                        _ === null
                          ? (b.next = b)
                          : ((b.next = _.next), (_.next = b)),
                          ($.pending = b)
                      }
                    }
                    ;(h.lanes |= s),
                      (b = h.alternate),
                      b !== null && (b.lanes |= s),
                      Sg(h.return, s, e),
                      (g.lanes |= s)
                    break
                  }
                  b = b.next
                }
              } else if (h.tag === 10) d = h.type === e.type ? null : h.child
              else if (h.tag === 18) {
                if (((d = h.return), d === null)) throw Error(p(341))
                ;(d.lanes |= s),
                  (g = d.alternate),
                  g !== null && (g.lanes |= s),
                  Sg(d, s, e),
                  (d = h.sibling)
              } else d = h.child
              if (d !== null) d.return = h
              else
                for (d = h; d !== null; ) {
                  if (d === e) {
                    d = null
                    break
                  }
                  if (((h = d.sibling), h !== null)) {
                    ;(h.return = d.return), (d = h)
                    break
                  }
                  d = d.return
                }
              h = d
            }
        Yi(o, e, c.children, s), (e = e.child)
      }
      return e
    case 9:
      return (
        (c = e.type),
        (a = e.pendingProps.children),
        Tg(e, s),
        (c = Vg(c)),
        (a = a(c)),
        (e.flags |= 1),
        Yi(o, e, a, s),
        e.child
      )
    case 14:
      return (
        (a = e.type),
        (c = Lg(a, e.pendingProps)),
        (c = Lg(a.type, c)),
        aj(o, e, a, c, s)
      )
    case 15:
      return cj(o, e, e.type, e.pendingProps, s)
    case 17:
      return (
        (a = e.type),
        (c = e.pendingProps),
        (c = e.elementType === a ? c : Lg(a, c)),
        jj(o, e),
        (e.tag = 1),
        Zf(a) ? ((o = !0), cg(e)) : (o = !1),
        Tg(e, s),
        ph(e, a, c),
        rh(e, a, c, s),
        kj(null, e, a, !0, o, s)
      )
    case 19:
      return yj(o, e, s)
    case 22:
      return ej(o, e, s)
  }
  throw Error(p(156, e.tag))
}
function Gk(o, e) {
  return ac(o, e)
}
function al(o, e, s, a) {
  ;(this.tag = o),
    (this.key = s),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = a),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Bg(o, e, s, a) {
  return new al(o, e, s, a)
}
function bj(o) {
  return (o = o.prototype), !(!o || !o.isReactComponent)
}
function $k(o) {
  if (typeof o == 'function') return bj(o) ? 1 : 0
  if (o != null) {
    if (((o = o.$$typeof), o === Da)) return 11
    if (o === Ga) return 14
  }
  return 2
}
function wh(o, e) {
  var s = o.alternate
  return (
    s === null
      ? ((s = Bg(o.tag, e, o.key, o.mode)),
        (s.elementType = o.elementType),
        (s.type = o.type),
        (s.stateNode = o.stateNode),
        (s.alternate = o),
        (o.alternate = s))
      : ((s.pendingProps = e),
        (s.type = o.type),
        (s.flags = 0),
        (s.subtreeFlags = 0),
        (s.deletions = null)),
    (s.flags = o.flags & 14680064),
    (s.childLanes = o.childLanes),
    (s.lanes = o.lanes),
    (s.child = o.child),
    (s.memoizedProps = o.memoizedProps),
    (s.memoizedState = o.memoizedState),
    (s.updateQueue = o.updateQueue),
    (e = o.dependencies),
    (s.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (s.sibling = o.sibling),
    (s.index = o.index),
    (s.ref = o.ref),
    s
  )
}
function yh(o, e, s, a, c, h) {
  var d = 2
  if (((a = o), typeof o == 'function')) bj(o) && (d = 1)
  else if (typeof o == 'string') d = 5
  else
    e: switch (o) {
      case ya:
        return Ah(s.children, c, h, e)
      case za:
        ;(d = 8), (c |= 8)
        break
      case Aa:
        return (o = Bg(12, s, e, c | 2)), (o.elementType = Aa), (o.lanes = h), o
      case Ea:
        return (o = Bg(13, s, e, c)), (o.elementType = Ea), (o.lanes = h), o
      case Fa:
        return (o = Bg(19, s, e, c)), (o.elementType = Fa), (o.lanes = h), o
      case Ia:
        return qj(s, c, h, e)
      default:
        if (typeof o == 'object' && o !== null)
          switch (o.$$typeof) {
            case Ba:
              d = 10
              break e
            case Ca:
              d = 9
              break e
            case Da:
              d = 11
              break e
            case Ga:
              d = 14
              break e
            case Ha:
              ;(d = 16), (a = null)
              break e
          }
        throw Error(p(130, o == null ? o : typeof o, ''))
    }
  return (
    (e = Bg(d, s, e, c)), (e.elementType = o), (e.type = a), (e.lanes = h), e
  )
}
function Ah(o, e, s, a) {
  return (o = Bg(7, o, a, e)), (o.lanes = s), o
}
function qj(o, e, s, a) {
  return (
    (o = Bg(22, o, a, e)),
    (o.elementType = Ia),
    (o.lanes = s),
    (o.stateNode = { isHidden: !1 }),
    o
  )
}
function xh(o, e, s) {
  return (o = Bg(6, o, null, e)), (o.lanes = s), o
}
function zh(o, e, s) {
  return (
    (e = Bg(4, o.children !== null ? o.children : [], o.key, e)),
    (e.lanes = s),
    (e.stateNode = {
      containerInfo: o.containerInfo,
      pendingChildren: null,
      implementation: o.implementation
    }),
    e
  )
}
function bl(o, e, s, a, c) {
  ;(this.tag = e),
    (this.containerInfo = o),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zc(0)),
    (this.expirationTimes = zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zc(0)),
    (this.identifierPrefix = a),
    (this.onRecoverableError = c),
    (this.mutableSourceEagerHydrationData = null)
}
function cl(o, e, s, a, c, h, d, g, b) {
  return (
    (o = new bl(o, e, s, g, b)),
    e === 1 ? ((e = 1), h === !0 && (e |= 8)) : (e = 0),
    (h = Bg(3, null, null, e)),
    (o.current = h),
    (h.stateNode = o),
    (h.memoizedState = {
      element: a,
      isDehydrated: s,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    ah(h),
    o
  )
}
function dl(o, e, s) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: wa,
    key: a == null ? null : '' + a,
    children: o,
    containerInfo: e,
    implementation: s
  }
}
function el(o) {
  if (!o) return Vf
  o = o._reactInternals
  e: {
    if (Vb(o) !== o || o.tag !== 1) throw Error(p(170))
    var e = o
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context
          break e
        case 1:
          if (Zf(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      e = e.return
    } while (e !== null)
    throw Error(p(171))
  }
  if (o.tag === 1) {
    var s = o.type
    if (Zf(s)) return bg(o, s, e)
  }
  return e
}
function fl(o, e, s, a, c, h, d, g, b) {
  return (
    (o = cl(s, a, !0, o, c, h, d, g, b)),
    (o.context = el(null)),
    (s = o.current),
    (a = L()),
    (c = lh(s)),
    (h = ch(a, c)),
    (h.callback = e ?? null),
    dh(s, h, c),
    (o.current.lanes = c),
    Ac(o, c, a),
    Ek(o, a),
    o
  )
}
function gl(o, e, s, a) {
  var c = e.current,
    h = L(),
    d = lh(c)
  return (
    (s = el(s)),
    e.context === null ? (e.context = s) : (e.pendingContext = s),
    (e = ch(h, d)),
    (e.payload = { element: o }),
    (a = a === void 0 ? null : a),
    a !== null && (e.callback = a),
    (o = dh(c, e, d)),
    o !== null && (mh(o, c, d, h), eh(o, c, d)),
    d
  )
}
function hl(o) {
  if (((o = o.current), !o.child)) return null
  switch (o.child.tag) {
    case 5:
      return o.child.stateNode
    default:
      return o.child.stateNode
  }
}
function il(o, e) {
  if (((o = o.memoizedState), o !== null && o.dehydrated !== null)) {
    var s = o.retryLane
    o.retryLane = s !== 0 && s < e ? s : e
  }
}
function jl(o, e) {
  il(o, e), (o = o.alternate) && il(o, e)
}
function kl() {
  return null
}
var ll =
  typeof reportError == 'function'
    ? reportError
    : function (o) {
        console.error(o)
      }
function ml(o) {
  this._internalRoot = o
}
nl.prototype.render = ml.prototype.render = function (o) {
  var e = this._internalRoot
  if (e === null) throw Error(p(409))
  gl(o, e, null, null)
}
nl.prototype.unmount = ml.prototype.unmount = function () {
  var o = this._internalRoot
  if (o !== null) {
    this._internalRoot = null
    var e = o.containerInfo
    Sk(function () {
      gl(null, o, null, null)
    }),
      (e[uf] = null)
  }
}
function nl(o) {
  this._internalRoot = o
}
nl.prototype.unstable_scheduleHydration = function (o) {
  if (o) {
    var e = Hc()
    o = { blockedOn: null, target: o, priority: e }
    for (var s = 0; s < Qc.length && e !== 0 && e < Qc[s].priority; s++);
    Qc.splice(s, 0, o), s === 0 && Vc(o)
  }
}
function ol(o) {
  return !(!o || (o.nodeType !== 1 && o.nodeType !== 9 && o.nodeType !== 11))
}
function pl(o) {
  return !(
    !o ||
    (o.nodeType !== 1 &&
      o.nodeType !== 9 &&
      o.nodeType !== 11 &&
      (o.nodeType !== 8 || o.nodeValue !== ' react-mount-point-unstable '))
  )
}
function ql() {}
function rl(o, e, s, a, c) {
  if (c) {
    if (typeof a == 'function') {
      var h = a
      a = function () {
        var $ = hl(d)
        h.call($)
      }
    }
    var d = fl(e, a, o, 0, null, !1, !1, '', ql)
    return (
      (o._reactRootContainer = d),
      (o[uf] = d.current),
      sf(o.nodeType === 8 ? o.parentNode : o),
      Sk(),
      d
    )
  }
  for (; (c = o.lastChild); ) o.removeChild(c)
  if (typeof a == 'function') {
    var g = a
    a = function () {
      var $ = hl(b)
      g.call($)
    }
  }
  var b = cl(o, 0, !1, null, null, !1, !1, '', ql)
  return (
    (o._reactRootContainer = b),
    (o[uf] = b.current),
    sf(o.nodeType === 8 ? o.parentNode : o),
    Sk(function () {
      gl(e, b, s, a)
    }),
    b
  )
}
function sl(o, e, s, a, c) {
  var h = s._reactRootContainer
  if (h) {
    var d = h
    if (typeof c == 'function') {
      var g = c
      c = function () {
        var b = hl(d)
        g.call(b)
      }
    }
    gl(e, d, o, c)
  } else d = rl(s, e, o, c, a)
  return hl(d)
}
Ec = function (o) {
  switch (o.tag) {
    case 3:
      var e = o.stateNode
      if (e.current.memoizedState.isDehydrated) {
        var s = tc(e.pendingLanes)
        s !== 0 &&
          (Cc(e, s | 1), Ek(e, B()), !(K & 6) && ((Hj = B() + 500), jg()))
      }
      break
    case 13:
      Sk(function () {
        var a = Zg(o, 1)
        if (a !== null) {
          var c = L()
          mh(a, o, 1, c)
        }
      }),
        jl(o, 1)
  }
}
Fc = function (o) {
  if (o.tag === 13) {
    var e = Zg(o, 134217728)
    if (e !== null) {
      var s = L()
      mh(e, o, 134217728, s)
    }
    jl(o, 134217728)
  }
}
Gc = function (o) {
  if (o.tag === 13) {
    var e = lh(o),
      s = Zg(o, e)
    if (s !== null) {
      var a = L()
      mh(s, o, e, a)
    }
    jl(o, e)
  }
}
Hc = function () {
  return C$1
}
Ic = function (o, e) {
  var s = C$1
  try {
    return (C$1 = o), e()
  } finally {
    C$1 = s
  }
}
yb = function (o, e, s) {
  switch (e) {
    case 'input':
      if ((bb(o, s), (e = s.name), s.type === 'radio' && e != null)) {
        for (s = o; s.parentNode; ) s = s.parentNode
        for (
          s = s.querySelectorAll(
            'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
          ),
            e = 0;
          e < s.length;
          e++
        ) {
          var a = s[e]
          if (a !== o && a.form === o.form) {
            var c = Db(a)
            if (!c) throw Error(p(90))
            Wa(a), bb(a, c)
          }
        }
      }
      break
    case 'textarea':
      ib(o, s)
      break
    case 'select':
      ;(e = s.value), e != null && fb(o, !!s.multiple, e, !1)
  }
}
Gb = Rk
Hb = Sk
var tl = { usingClientEntryPoint: !1, Events: [Cb, ue, Db, Eb, Fb, Rk] },
  ul = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  vl = {
    bundleType: ul.bundleType,
    version: ul.version,
    rendererPackageName: ul.rendererPackageName,
    rendererConfig: ul.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (o) {
      return (o = Zb(o)), o === null ? null : o.stateNode
    },
    findFiberByHostInstance: ul.findFiberByHostInstance || kl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      ;(kc = wl.inject(vl)), (lc = wl)
    } catch {}
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl
reactDom_production_min.createPortal = function (o, e) {
  var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!ol(e)) throw Error(p(200))
  return dl(o, e, null, s)
}
reactDom_production_min.createRoot = function (o, e) {
  if (!ol(o)) throw Error(p(299))
  var s = !1,
    a = '',
    c = ll
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (s = !0),
      e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (c = e.onRecoverableError)),
    (e = cl(o, 1, !1, null, null, s, !1, a, c)),
    (o[uf] = e.current),
    sf(o.nodeType === 8 ? o.parentNode : o),
    new ml(e)
  )
}
reactDom_production_min.findDOMNode = function (o) {
  if (o == null) return null
  if (o.nodeType === 1) return o
  var e = o._reactInternals
  if (e === void 0)
    throw typeof o.render == 'function'
      ? Error(p(188))
      : ((o = Object.keys(o).join(',')), Error(p(268, o)))
  return (o = Zb(e)), (o = o === null ? null : o.stateNode), o
}
reactDom_production_min.flushSync = function (o) {
  return Sk(o)
}
reactDom_production_min.hydrate = function (o, e, s) {
  if (!pl(e)) throw Error(p(200))
  return sl(null, o, e, !0, s)
}
reactDom_production_min.hydrateRoot = function (o, e, s) {
  if (!ol(o)) throw Error(p(405))
  var a = (s != null && s.hydratedSources) || null,
    c = !1,
    h = '',
    d = ll
  if (
    (s != null &&
      (s.unstable_strictMode === !0 && (c = !0),
      s.identifierPrefix !== void 0 && (h = s.identifierPrefix),
      s.onRecoverableError !== void 0 && (d = s.onRecoverableError)),
    (e = fl(e, null, o, 1, s ?? null, c, !1, h, d)),
    (o[uf] = e.current),
    sf(o),
    a)
  )
    for (o = 0; o < a.length; o++)
      (s = a[o]),
        (c = s._getVersion),
        (c = c(s._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [s, c])
          : e.mutableSourceEagerHydrationData.push(s, c)
  return new nl(e)
}
reactDom_production_min.render = function (o, e, s) {
  if (!pl(e)) throw Error(p(200))
  return sl(null, o, e, !1, s)
}
reactDom_production_min.unmountComponentAtNode = function (o) {
  if (!pl(o)) throw Error(p(40))
  return o._reactRootContainer
    ? (Sk(function () {
        sl(null, null, o, !1, function () {
          ;(o._reactRootContainer = null), (o[uf] = null)
        })
      }),
      !0)
    : !1
}
reactDom_production_min.unstable_batchedUpdates = Rk
reactDom_production_min.unstable_renderSubtreeIntoContainer = function (
  o,
  e,
  s,
  a
) {
  if (!pl(s)) throw Error(p(200))
  if (o == null || o._reactInternals === void 0) throw Error(p(38))
  return sl(o, e, s, !1, a)
}
reactDom_production_min.version = '18.2.0-next-9e3b772b8-20220608'
function checkDCE() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)
    } catch (o) {
      console.error(o)
    }
}
checkDCE(), (reactDom.exports = reactDom_production_min)
var reactDomExports = reactDom.exports,
  m = reactDomExports
;(client.createRoot = m.createRoot), (client.hydrateRoot = m.hydrateRoot)
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var e = 1; e < arguments.length; e++) {
            var s = arguments[e]
            for (var a in s)
              Object.prototype.hasOwnProperty.call(s, a) && (o[a] = s[a])
          }
          return o
        }),
    _extends.apply(this, arguments)
  )
}
function _objectWithoutPropertiesLoose(o, e) {
  if (o == null) return {}
  var s = {},
    a = Object.keys(o),
    c,
    h
  for (h = 0; h < a.length; h++)
    (c = a[h]), !(e.indexOf(c) >= 0) && (s[c] = o[c])
  return s
}
class Text {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(
        `Invalid position ${e} in document of length ${this.length}`
      )
    return this.lineInner(e, !1, 1, 0)
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(
        `Invalid line number ${e} in ${this.lines}-line document`
      )
    return this.lineInner(e, !0, 1, 0)
  }
  replace(e, s, a) {
    let c = []
    return (
      this.decompose(0, e, c, 2),
      a.length && a.decompose(0, a.length, c, 3),
      this.decompose(s, this.length, c, 1),
      TextNode.from(c, this.length - (s - e) + a.length)
    )
  }
  append(e) {
    return this.replace(this.length, this.length, e)
  }
  slice(e, s = this.length) {
    let a = []
    return this.decompose(e, s, a, 0), TextNode.from(a, s - e)
  }
  eq(e) {
    if (e == this) return !0
    if (e.length != this.length || e.lines != this.lines) return !1
    let s = this.scanIdentical(e, 1),
      a = this.length - this.scanIdentical(e, -1),
      c = new RawTextCursor(this),
      h = new RawTextCursor(e)
    for (let d = s, g = s; ; ) {
      if (
        (c.next(d),
        h.next(d),
        (d = 0),
        c.lineBreak != h.lineBreak || c.done != h.done || c.value != h.value)
      )
        return !1
      if (((g += c.value.length), c.done || g >= a)) return !0
    }
  }
  iter(e = 1) {
    return new RawTextCursor(this, e)
  }
  iterRange(e, s = this.length) {
    return new PartialTextCursor(this, e, s)
  }
  iterLines(e, s) {
    let a
    if (e == null) a = this.iter()
    else {
      s == null && (s = this.lines + 1)
      let c = this.line(e).from
      a = this.iterRange(
        c,
        Math.max(
          c,
          s == this.lines + 1 ? this.length : s <= 1 ? 0 : this.line(s - 1).to
        )
      )
    }
    return new LineCursor(a)
  }
  toString() {
    return this.sliceString(0)
  }
  toJSON() {
    let e = []
    return this.flatten(e), e
  }
  constructor() {}
  static of(e) {
    if (e.length == 0)
      throw new RangeError('A document must have at least one line')
    return e.length == 1 && !e[0]
      ? Text.empty
      : e.length <= 32
      ? new TextLeaf(e)
      : TextNode.from(TextLeaf.split(e, []))
  }
}
class TextLeaf extends Text {
  constructor(e, s = textLength(e)) {
    super(), (this.text = e), (this.length = s)
  }
  get lines() {
    return this.text.length
  }
  get children() {
    return null
  }
  lineInner(e, s, a, c) {
    for (let h = 0; ; h++) {
      let d = this.text[h],
        g = c + d.length
      if ((s ? a : g) >= e) return new Line(c, g, a, d)
      ;(c = g + 1), a++
    }
  }
  decompose(e, s, a, c) {
    let h =
      e <= 0 && s >= this.length
        ? this
        : new TextLeaf(
            sliceText(this.text, e, s),
            Math.min(s, this.length) - Math.max(0, e)
          )
    if (c & 1) {
      let d = a.pop(),
        g = appendText(h.text, d.text.slice(), 0, h.length)
      if (g.length <= 32) a.push(new TextLeaf(g, d.length + h.length))
      else {
        let b = g.length >> 1
        a.push(new TextLeaf(g.slice(0, b)), new TextLeaf(g.slice(b)))
      }
    } else a.push(h)
  }
  replace(e, s, a) {
    if (!(a instanceof TextLeaf)) return super.replace(e, s, a)
    let c = appendText(
        this.text,
        appendText(a.text, sliceText(this.text, 0, e)),
        s
      ),
      h = this.length + a.length - (s - e)
    return c.length <= 32
      ? new TextLeaf(c, h)
      : TextNode.from(TextLeaf.split(c, []), h)
  }
  sliceString(
    e,
    s = this.length,
    a = `
`
  ) {
    let c = ''
    for (let h = 0, d = 0; h <= s && d < this.text.length; d++) {
      let g = this.text[d],
        b = h + g.length
      h > e && d && (c += a),
        e < b && s > h && (c += g.slice(Math.max(0, e - h), s - h)),
        (h = b + 1)
    }
    return c
  }
  flatten(e) {
    for (let s of this.text) e.push(s)
  }
  scanIdentical() {
    return 0
  }
  static split(e, s) {
    let a = [],
      c = -1
    for (let h of e)
      a.push(h),
        (c += h.length + 1),
        a.length == 32 && (s.push(new TextLeaf(a, c)), (a = []), (c = -1))
    return c > -1 && s.push(new TextLeaf(a, c)), s
  }
}
class TextNode extends Text {
  constructor(e, s) {
    super(), (this.children = e), (this.length = s), (this.lines = 0)
    for (let a of e) this.lines += a.lines
  }
  lineInner(e, s, a, c) {
    for (let h = 0; ; h++) {
      let d = this.children[h],
        g = c + d.length,
        b = a + d.lines - 1
      if ((s ? b : g) >= e) return d.lineInner(e, s, a, c)
      ;(c = g + 1), (a = b + 1)
    }
  }
  decompose(e, s, a, c) {
    for (let h = 0, d = 0; d <= s && h < this.children.length; h++) {
      let g = this.children[h],
        b = d + g.length
      if (e <= b && s >= d) {
        let $ = c & ((d <= e ? 1 : 0) | (b >= s ? 2 : 0))
        d >= e && b <= s && !$ ? a.push(g) : g.decompose(e - d, s - d, a, $)
      }
      d = b + 1
    }
  }
  replace(e, s, a) {
    if (a.lines < this.lines)
      for (let c = 0, h = 0; c < this.children.length; c++) {
        let d = this.children[c],
          g = h + d.length
        if (e >= h && s <= g) {
          let b = d.replace(e - h, s - h, a),
            $ = this.lines - d.lines + b.lines
          if (b.lines < $ >> (5 - 1) && b.lines > $ >> (5 + 1)) {
            let _ = this.children.slice()
            return (_[c] = b), new TextNode(_, this.length - (s - e) + a.length)
          }
          return super.replace(h, g, b)
        }
        h = g + 1
      }
    return super.replace(e, s, a)
  }
  sliceString(
    e,
    s = this.length,
    a = `
`
  ) {
    let c = ''
    for (let h = 0, d = 0; h < this.children.length && d <= s; h++) {
      let g = this.children[h],
        b = d + g.length
      d > e && h && (c += a),
        e < b && s > d && (c += g.sliceString(e - d, s - d, a)),
        (d = b + 1)
    }
    return c
  }
  flatten(e) {
    for (let s of this.children) s.flatten(e)
  }
  scanIdentical(e, s) {
    if (!(e instanceof TextNode)) return 0
    let a = 0,
      [c, h, d, g] =
        s > 0
          ? [0, 0, this.children.length, e.children.length]
          : [this.children.length - 1, e.children.length - 1, -1, -1]
    for (; ; c += s, h += s) {
      if (c == d || h == g) return a
      let b = this.children[c],
        $ = e.children[h]
      if (b != $) return a + b.scanIdentical($, s)
      a += b.length + 1
    }
  }
  static from(e, s = e.reduce((a, c) => a + c.length + 1, -1)) {
    let a = 0
    for (let et of e) a += et.lines
    if (a < 32) {
      let et = []
      for (let tt of e) tt.flatten(et)
      return new TextLeaf(et, s)
    }
    let c = Math.max(32, a >> 5),
      h = c << 1,
      d = c >> 1,
      g = [],
      b = 0,
      $ = -1,
      _ = []
    function j(et) {
      let tt
      if (et.lines > h && et instanceof TextNode)
        for (let rt of et.children) j(rt)
      else
        et.lines > d && (b > d || !b)
          ? (_e(), g.push(et))
          : et instanceof TextLeaf &&
            b &&
            (tt = _[_.length - 1]) instanceof TextLeaf &&
            et.lines + tt.lines <= 32
          ? ((b += et.lines),
            ($ += et.length + 1),
            (_[_.length - 1] = new TextLeaf(
              tt.text.concat(et.text),
              tt.length + 1 + et.length
            )))
          : (b + et.lines > c && _e(),
            (b += et.lines),
            ($ += et.length + 1),
            _.push(et))
    }
    function _e() {
      b != 0 &&
        (g.push(_.length == 1 ? _[0] : TextNode.from(_, $)),
        ($ = -1),
        (b = _.length = 0))
    }
    for (let et of e) j(et)
    return _e(), g.length == 1 ? g[0] : new TextNode(g, s)
  }
}
Text.empty = new TextLeaf([''], 0)
function textLength(o) {
  let e = -1
  for (let s of o) e += s.length + 1
  return e
}
function appendText(o, e, s = 0, a = 1e9) {
  for (let c = 0, h = 0, d = !0; h < o.length && c <= a; h++) {
    let g = o[h],
      b = c + g.length
    b >= s &&
      (b > a && (g = g.slice(0, a - c)),
      c < s && (g = g.slice(s - c)),
      d ? ((e[e.length - 1] += g), (d = !1)) : e.push(g)),
      (c = b + 1)
  }
  return e
}
function sliceText(o, e, s) {
  return appendText(o, [''], e, s)
}
class RawTextCursor {
  constructor(e, s = 1) {
    ;(this.dir = s),
      (this.done = !1),
      (this.lineBreak = !1),
      (this.value = ''),
      (this.nodes = [e]),
      (this.offsets = [
        s > 0
          ? 1
          : (e instanceof TextLeaf ? e.text.length : e.children.length) << 1
      ])
  }
  nextInner(e, s) {
    for (this.done = this.lineBreak = !1; ; ) {
      let a = this.nodes.length - 1,
        c = this.nodes[a],
        h = this.offsets[a],
        d = h >> 1,
        g = c instanceof TextLeaf ? c.text.length : c.children.length
      if (d == (s > 0 ? g : 0)) {
        if (a == 0) return (this.done = !0), (this.value = ''), this
        s > 0 && this.offsets[a - 1]++, this.nodes.pop(), this.offsets.pop()
      } else if ((h & 1) == (s > 0 ? 0 : 1)) {
        if (((this.offsets[a] += s), e == 0))
          return (
            (this.lineBreak = !0),
            (this.value = `
`),
            this
          )
        e--
      } else if (c instanceof TextLeaf) {
        let b = c.text[d + (s < 0 ? -1 : 0)]
        if (((this.offsets[a] += s), b.length > Math.max(0, e)))
          return (
            (this.value =
              e == 0 ? b : s > 0 ? b.slice(e) : b.slice(0, b.length - e)),
            this
          )
        e -= b.length
      } else {
        let b = c.children[d + (s < 0 ? -1 : 0)]
        e > b.length
          ? ((e -= b.length), (this.offsets[a] += s))
          : (s < 0 && this.offsets[a]--,
            this.nodes.push(b),
            this.offsets.push(
              s > 0
                ? 1
                : (b instanceof TextLeaf ? b.text.length : b.children.length) <<
                    1
            ))
      }
    }
  }
  next(e = 0) {
    return (
      e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)),
      this.nextInner(e, this.dir)
    )
  }
}
class PartialTextCursor {
  constructor(e, s, a) {
    ;(this.value = ''),
      (this.done = !1),
      (this.cursor = new RawTextCursor(e, s > a ? -1 : 1)),
      (this.pos = s > a ? e.length : 0),
      (this.from = Math.min(s, a)),
      (this.to = Math.max(s, a))
  }
  nextInner(e, s) {
    if (s < 0 ? this.pos <= this.from : this.pos >= this.to)
      return (this.value = ''), (this.done = !0), this
    e += Math.max(0, s < 0 ? this.pos - this.to : this.from - this.pos)
    let a = s < 0 ? this.pos - this.from : this.to - this.pos
    e > a && (e = a), (a -= e)
    let { value: c } = this.cursor.next(e)
    return (
      (this.pos += (c.length + e) * s),
      (this.value =
        c.length <= a ? c : s < 0 ? c.slice(c.length - a) : c.slice(0, a)),
      (this.done = !this.value),
      this
    )
  }
  next(e = 0) {
    return (
      e < 0
        ? (e = Math.max(e, this.from - this.pos))
        : e > 0 && (e = Math.min(e, this.to - this.pos)),
      this.nextInner(e, this.cursor.dir)
    )
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != ''
  }
}
class LineCursor {
  constructor(e) {
    ;(this.inner = e),
      (this.afterBreak = !0),
      (this.value = ''),
      (this.done = !1)
  }
  next(e = 0) {
    let { done: s, lineBreak: a, value: c } = this.inner.next(e)
    return (
      s
        ? ((this.done = !0), (this.value = ''))
        : a
        ? this.afterBreak
          ? (this.value = '')
          : ((this.afterBreak = !0), this.next())
        : ((this.value = c), (this.afterBreak = !1)),
      this
    )
  }
  get lineBreak() {
    return !1
  }
}
typeof Symbol < 'u' &&
  ((Text.prototype[Symbol.iterator] = function () {
    return this.iter()
  }),
  (RawTextCursor.prototype[Symbol.iterator] =
    PartialTextCursor.prototype[Symbol.iterator] =
    LineCursor.prototype[Symbol.iterator] =
      function () {
        return this
      }))
class Line {
  constructor(e, s, a, c) {
    ;(this.from = e), (this.to = s), (this.number = a), (this.text = c)
  }
  get length() {
    return this.to - this.from
  }
}
let extend =
  'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
    .split(',')
    .map((o) => (o ? parseInt(o, 36) : 1))
for (let o = 1; o < extend.length; o++) extend[o] += extend[o - 1]
function isExtendingChar(o) {
  for (let e = 1; e < extend.length; e += 2)
    if (extend[e] > o) return extend[e - 1] <= o
  return !1
}
function isRegionalIndicator(o) {
  return o >= 127462 && o <= 127487
}
const ZWJ = 8205
function findClusterBreak(o, e, s = !0, a = !0) {
  return (s ? nextClusterBreak : prevClusterBreak)(o, e, a)
}
function nextClusterBreak(o, e, s) {
  if (e == o.length) return e
  e &&
    surrogateLow(o.charCodeAt(e)) &&
    surrogateHigh(o.charCodeAt(e - 1)) &&
    e--
  let a = codePointAt(o, e)
  for (e += codePointSize(a); e < o.length; ) {
    let c = codePointAt(o, e)
    if (a == ZWJ || c == ZWJ || (s && isExtendingChar(c)))
      (e += codePointSize(c)), (a = c)
    else if (isRegionalIndicator(c)) {
      let h = 0,
        d = e - 2
      for (; d >= 0 && isRegionalIndicator(codePointAt(o, d)); ) h++, (d -= 2)
      if (h % 2 == 0) break
      e += 2
    } else break
  }
  return e
}
function prevClusterBreak(o, e, s) {
  for (; e > 0; ) {
    let a = nextClusterBreak(o, e - 2, s)
    if (a < e) return a
    e--
  }
  return 0
}
function surrogateLow(o) {
  return o >= 56320 && o < 57344
}
function surrogateHigh(o) {
  return o >= 55296 && o < 56320
}
function codePointAt(o, e) {
  let s = o.charCodeAt(e)
  if (!surrogateHigh(s) || e + 1 == o.length) return s
  let a = o.charCodeAt(e + 1)
  return surrogateLow(a) ? ((s - 55296) << 10) + (a - 56320) + 65536 : s
}
function fromCodePoint(o) {
  return o <= 65535
    ? String.fromCharCode(o)
    : ((o -= 65536), String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320))
}
function codePointSize(o) {
  return o < 65536 ? 1 : 2
}
const DefaultSplit = /\r\n?|\n/
var MapMode = (function (o) {
  return (
    (o[(o.Simple = 0)] = 'Simple'),
    (o[(o.TrackDel = 1)] = 'TrackDel'),
    (o[(o.TrackBefore = 2)] = 'TrackBefore'),
    (o[(o.TrackAfter = 3)] = 'TrackAfter'),
    o
  )
})(MapMode || (MapMode = {}))
class ChangeDesc {
  constructor(e) {
    this.sections = e
  }
  get length() {
    let e = 0
    for (let s = 0; s < this.sections.length; s += 2) e += this.sections[s]
    return e
  }
  get newLength() {
    let e = 0
    for (let s = 0; s < this.sections.length; s += 2) {
      let a = this.sections[s + 1]
      e += a < 0 ? this.sections[s] : a
    }
    return e
  }
  get empty() {
    return (
      this.sections.length == 0 ||
      (this.sections.length == 2 && this.sections[1] < 0)
    )
  }
  iterGaps(e) {
    for (let s = 0, a = 0, c = 0; s < this.sections.length; ) {
      let h = this.sections[s++],
        d = this.sections[s++]
      d < 0 ? (e(a, c, h), (c += h)) : (c += d), (a += h)
    }
  }
  iterChangedRanges(e, s = !1) {
    iterChanges(this, e, s)
  }
  get invertedDesc() {
    let e = []
    for (let s = 0; s < this.sections.length; ) {
      let a = this.sections[s++],
        c = this.sections[s++]
      c < 0 ? e.push(a, c) : e.push(c, a)
    }
    return new ChangeDesc(e)
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : composeSets(this, e)
  }
  mapDesc(e, s = !1) {
    return e.empty ? this : mapSet(this, e, s)
  }
  mapPos(e, s = -1, a = MapMode.Simple) {
    let c = 0,
      h = 0
    for (let d = 0; d < this.sections.length; ) {
      let g = this.sections[d++],
        b = this.sections[d++],
        $ = c + g
      if (b < 0) {
        if ($ > e) return h + (e - c)
        h += g
      } else {
        if (
          a != MapMode.Simple &&
          $ >= e &&
          ((a == MapMode.TrackDel && c < e && $ > e) ||
            (a == MapMode.TrackBefore && c < e) ||
            (a == MapMode.TrackAfter && $ > e))
        )
          return null
        if ($ > e || ($ == e && s < 0 && !g)) return e == c || s < 0 ? h : h + b
        h += b
      }
      c = $
    }
    if (e > c)
      throw new RangeError(
        `Position ${e} is out of range for changeset of length ${c}`
      )
    return h
  }
  touchesRange(e, s = e) {
    for (let a = 0, c = 0; a < this.sections.length && c <= s; ) {
      let h = this.sections[a++],
        d = this.sections[a++],
        g = c + h
      if (d >= 0 && c <= s && g >= e) return c < e && g > s ? 'cover' : !0
      c = g
    }
    return !1
  }
  toString() {
    let e = ''
    for (let s = 0; s < this.sections.length; ) {
      let a = this.sections[s++],
        c = this.sections[s++]
      e += (e ? ' ' : '') + a + (c >= 0 ? ':' + c : '')
    }
    return e
  }
  toJSON() {
    return this.sections
  }
  static fromJSON(e) {
    if (
      !Array.isArray(e) ||
      e.length % 2 ||
      e.some((s) => typeof s != 'number')
    )
      throw new RangeError('Invalid JSON representation of ChangeDesc')
    return new ChangeDesc(e)
  }
  static create(e) {
    return new ChangeDesc(e)
  }
}
class ChangeSet extends ChangeDesc {
  constructor(e, s) {
    super(e), (this.inserted = s)
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError(
        'Applying change set to a document with the wrong length'
      )
    return (
      iterChanges(
        this,
        (s, a, c, h, d) => (e = e.replace(c, c + (a - s), d)),
        !1
      ),
      e
    )
  }
  mapDesc(e, s = !1) {
    return mapSet(this, e, s, !0)
  }
  invert(e) {
    let s = this.sections.slice(),
      a = []
    for (let c = 0, h = 0; c < s.length; c += 2) {
      let d = s[c],
        g = s[c + 1]
      if (g >= 0) {
        ;(s[c] = g), (s[c + 1] = d)
        let b = c >> 1
        for (; a.length < b; ) a.push(Text.empty)
        a.push(d ? e.slice(h, h + d) : Text.empty)
      }
      h += d
    }
    return new ChangeSet(s, a)
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : composeSets(this, e, !0)
  }
  map(e, s = !1) {
    return e.empty ? this : mapSet(this, e, s, !0)
  }
  iterChanges(e, s = !1) {
    iterChanges(this, e, s)
  }
  get desc() {
    return ChangeDesc.create(this.sections)
  }
  filter(e) {
    let s = [],
      a = [],
      c = [],
      h = new SectionIter(this)
    e: for (let d = 0, g = 0; ; ) {
      let b = d == e.length ? 1e9 : e[d++]
      for (; g < b || (g == b && h.len == 0); ) {
        if (h.done) break e
        let _ = Math.min(h.len, b - g)
        addSection(c, _, -1)
        let j = h.ins == -1 ? -1 : h.off == 0 ? h.ins : 0
        addSection(s, _, j),
          j > 0 && addInsert(a, s, h.text),
          h.forward(_),
          (g += _)
      }
      let $ = e[d++]
      for (; g < $; ) {
        if (h.done) break e
        let _ = Math.min(h.len, $ - g)
        addSection(s, _, -1),
          addSection(c, _, h.ins == -1 ? -1 : h.off == 0 ? h.ins : 0),
          h.forward(_),
          (g += _)
      }
    }
    return { changes: new ChangeSet(s, a), filtered: ChangeDesc.create(c) }
  }
  toJSON() {
    let e = []
    for (let s = 0; s < this.sections.length; s += 2) {
      let a = this.sections[s],
        c = this.sections[s + 1]
      c < 0
        ? e.push(a)
        : c == 0
        ? e.push([a])
        : e.push([a].concat(this.inserted[s >> 1].toJSON()))
    }
    return e
  }
  static of(e, s, a) {
    let c = [],
      h = [],
      d = 0,
      g = null
    function b(_ = !1) {
      if (!_ && !c.length) return
      d < s && addSection(c, s - d, -1)
      let j = new ChangeSet(c, h)
      ;(g = g ? g.compose(j.map(g)) : j), (c = []), (h = []), (d = 0)
    }
    function $(_) {
      if (Array.isArray(_)) for (let j of _) $(j)
      else if (_ instanceof ChangeSet) {
        if (_.length != s)
          throw new RangeError(
            `Mismatched change set length (got ${_.length}, expected ${s})`
          )
        b(), (g = g ? g.compose(_.map(g)) : _)
      } else {
        let { from: j, to: _e = j, insert: et } = _
        if (j > _e || j < 0 || _e > s)
          throw new RangeError(
            `Invalid change range ${j} to ${_e} (in doc of length ${s})`
          )
        let tt = et
            ? typeof et == 'string'
              ? Text.of(et.split(a || DefaultSplit))
              : et
            : Text.empty,
          rt = tt.length
        if (j == _e && rt == 0) return
        j < d && b(),
          j > d && addSection(c, j - d, -1),
          addSection(c, _e - j, rt),
          addInsert(h, c, tt),
          (d = _e)
      }
    }
    return $(e), b(!g), g
  }
  static empty(e) {
    return new ChangeSet(e ? [e, -1] : [], [])
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError('Invalid JSON representation of ChangeSet')
    let s = [],
      a = []
    for (let c = 0; c < e.length; c++) {
      let h = e[c]
      if (typeof h == 'number') s.push(h, -1)
      else {
        if (
          !Array.isArray(h) ||
          typeof h[0] != 'number' ||
          h.some((d, g) => g && typeof d != 'string')
        )
          throw new RangeError('Invalid JSON representation of ChangeSet')
        if (h.length == 1) s.push(h[0], 0)
        else {
          for (; a.length < c; ) a.push(Text.empty)
          ;(a[c] = Text.of(h.slice(1))), s.push(h[0], a[c].length)
        }
      }
    }
    return new ChangeSet(s, a)
  }
  static createSet(e, s) {
    return new ChangeSet(e, s)
  }
}
function addSection(o, e, s, a = !1) {
  if (e == 0 && s <= 0) return
  let c = o.length - 2
  c >= 0 && s <= 0 && s == o[c + 1]
    ? (o[c] += e)
    : e == 0 && o[c] == 0
    ? (o[c + 1] += s)
    : a
    ? ((o[c] += e), (o[c + 1] += s))
    : o.push(e, s)
}
function addInsert(o, e, s) {
  if (s.length == 0) return
  let a = (e.length - 2) >> 1
  if (a < o.length) o[o.length - 1] = o[o.length - 1].append(s)
  else {
    for (; o.length < a; ) o.push(Text.empty)
    o.push(s)
  }
}
function iterChanges(o, e, s) {
  let a = o.inserted
  for (let c = 0, h = 0, d = 0; d < o.sections.length; ) {
    let g = o.sections[d++],
      b = o.sections[d++]
    if (b < 0) (c += g), (h += g)
    else {
      let $ = c,
        _ = h,
        j = Text.empty
      for (
        ;
        ($ += g),
          (_ += b),
          b && a && (j = j.append(a[(d - 2) >> 1])),
          !(s || d == o.sections.length || o.sections[d + 1] < 0);

      )
        (g = o.sections[d++]), (b = o.sections[d++])
      e(c, $, h, _, j), (c = $), (h = _)
    }
  }
}
function mapSet(o, e, s, a = !1) {
  let c = [],
    h = a ? [] : null,
    d = new SectionIter(o),
    g = new SectionIter(e)
  for (let b = -1; ; )
    if (d.ins == -1 && g.ins == -1) {
      let $ = Math.min(d.len, g.len)
      addSection(c, $, -1), d.forward($), g.forward($)
    } else if (
      g.ins >= 0 &&
      (d.ins < 0 ||
        b == d.i ||
        (d.off == 0 && (g.len < d.len || (g.len == d.len && !s))))
    ) {
      let $ = g.len
      for (addSection(c, g.ins, -1); $; ) {
        let _ = Math.min(d.len, $)
        d.ins >= 0 &&
          b < d.i &&
          d.len <= _ &&
          (addSection(c, 0, d.ins), h && addInsert(h, c, d.text), (b = d.i)),
          d.forward(_),
          ($ -= _)
      }
      g.next()
    } else if (d.ins >= 0) {
      let $ = 0,
        _ = d.len
      for (; _; )
        if (g.ins == -1) {
          let j = Math.min(_, g.len)
          ;($ += j), (_ -= j), g.forward(j)
        } else if (g.ins == 0 && g.len < _) (_ -= g.len), g.next()
        else break
      addSection(c, $, b < d.i ? d.ins : 0),
        h && b < d.i && addInsert(h, c, d.text),
        (b = d.i),
        d.forward(d.len - _)
    } else {
      if (d.done && g.done)
        return h ? ChangeSet.createSet(c, h) : ChangeDesc.create(c)
      throw new Error('Mismatched change set lengths')
    }
}
function composeSets(o, e, s = !1) {
  let a = [],
    c = s ? [] : null,
    h = new SectionIter(o),
    d = new SectionIter(e)
  for (let g = !1; ; ) {
    if (h.done && d.done)
      return c ? ChangeSet.createSet(a, c) : ChangeDesc.create(a)
    if (h.ins == 0) addSection(a, h.len, 0, g), h.next()
    else if (d.len == 0 && !d.done)
      addSection(a, 0, d.ins, g), c && addInsert(c, a, d.text), d.next()
    else {
      if (h.done || d.done) throw new Error('Mismatched change set lengths')
      {
        let b = Math.min(h.len2, d.len),
          $ = a.length
        if (h.ins == -1) {
          let _ = d.ins == -1 ? -1 : d.off ? 0 : d.ins
          addSection(a, b, _, g), c && _ && addInsert(c, a, d.text)
        } else
          d.ins == -1
            ? (addSection(a, h.off ? 0 : h.len, b, g),
              c && addInsert(c, a, h.textBit(b)))
            : (addSection(a, h.off ? 0 : h.len, d.off ? 0 : d.ins, g),
              c && !d.off && addInsert(c, a, d.text))
        ;(g = (h.ins > b || (d.ins >= 0 && d.len > b)) && (g || a.length > $)),
          h.forward2(b),
          d.forward(b)
      }
    }
  }
}
class SectionIter {
  constructor(e) {
    ;(this.set = e), (this.i = 0), this.next()
  }
  next() {
    let { sections: e } = this.set
    this.i < e.length
      ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
      : ((this.len = 0), (this.ins = -2)),
      (this.off = 0)
  }
  get done() {
    return this.ins == -2
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins
  }
  get text() {
    let { inserted: e } = this.set,
      s = (this.i - 2) >> 1
    return s >= e.length ? Text.empty : e[s]
  }
  textBit(e) {
    let { inserted: s } = this.set,
      a = (this.i - 2) >> 1
    return a >= s.length && !e
      ? Text.empty
      : s[a].slice(this.off, e == null ? void 0 : this.off + e)
  }
  forward(e) {
    e == this.len ? this.next() : ((this.len -= e), (this.off += e))
  }
  forward2(e) {
    this.ins == -1
      ? this.forward(e)
      : e == this.ins
      ? this.next()
      : ((this.ins -= e), (this.off += e))
  }
}
class SelectionRange {
  constructor(e, s, a) {
    ;(this.from = e), (this.to = s), (this.flags = a)
  }
  get anchor() {
    return this.flags & 16 ? this.to : this.from
  }
  get head() {
    return this.flags & 16 ? this.from : this.to
  }
  get empty() {
    return this.from == this.to
  }
  get assoc() {
    return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0
  }
  get bidiLevel() {
    let e = this.flags & 3
    return e == 3 ? null : e
  }
  get goalColumn() {
    let e = this.flags >> 5
    return e == 33554431 ? void 0 : e
  }
  map(e, s = -1) {
    let a, c
    return (
      this.empty
        ? (a = c = e.mapPos(this.from, s))
        : ((a = e.mapPos(this.from, 1)), (c = e.mapPos(this.to, -1))),
      a == this.from && c == this.to
        ? this
        : new SelectionRange(a, c, this.flags)
    )
  }
  extend(e, s = e) {
    if (e <= this.anchor && s >= this.anchor) return EditorSelection.range(e, s)
    let a = Math.abs(e - this.anchor) > Math.abs(s - this.anchor) ? e : s
    return EditorSelection.range(this.anchor, a)
  }
  eq(e) {
    return this.anchor == e.anchor && this.head == e.head
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head }
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != 'number' || typeof e.head != 'number')
      throw new RangeError('Invalid JSON representation for SelectionRange')
    return EditorSelection.range(e.anchor, e.head)
  }
  static create(e, s, a) {
    return new SelectionRange(e, s, a)
  }
}
class EditorSelection {
  constructor(e, s) {
    ;(this.ranges = e), (this.mainIndex = s)
  }
  map(e, s = -1) {
    return e.empty
      ? this
      : EditorSelection.create(
          this.ranges.map((a) => a.map(e, s)),
          this.mainIndex
        )
  }
  eq(e) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1
    for (let s = 0; s < this.ranges.length; s++)
      if (!this.ranges[s].eq(e.ranges[s])) return !1
    return !0
  }
  get main() {
    return this.ranges[this.mainIndex]
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new EditorSelection([this.main], 0)
  }
  addRange(e, s = !0) {
    return EditorSelection.create(
      [e].concat(this.ranges),
      s ? 0 : this.mainIndex + 1
    )
  }
  replaceRange(e, s = this.mainIndex) {
    let a = this.ranges.slice()
    return (a[s] = e), EditorSelection.create(a, this.mainIndex)
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex }
  }
  static fromJSON(e) {
    if (
      !e ||
      !Array.isArray(e.ranges) ||
      typeof e.main != 'number' ||
      e.main >= e.ranges.length
    )
      throw new RangeError('Invalid JSON representation for EditorSelection')
    return new EditorSelection(
      e.ranges.map((s) => SelectionRange.fromJSON(s)),
      e.main
    )
  }
  static single(e, s = e) {
    return new EditorSelection([EditorSelection.range(e, s)], 0)
  }
  static create(e, s = 0) {
    if (e.length == 0)
      throw new RangeError('A selection needs at least one range')
    for (let a = 0, c = 0; c < e.length; c++) {
      let h = e[c]
      if (h.empty ? h.from <= a : h.from < a)
        return EditorSelection.normalized(e.slice(), s)
      a = h.to
    }
    return new EditorSelection(e, s)
  }
  static cursor(e, s = 0, a, c) {
    return SelectionRange.create(
      e,
      e,
      (s == 0 ? 0 : s < 0 ? 4 : 8) |
        (a == null ? 3 : Math.min(2, a)) |
        ((c ?? 33554431) << 5)
    )
  }
  static range(e, s, a, c) {
    let h = ((a ?? 33554431) << 5) | (c == null ? 3 : Math.min(2, c))
    return s < e
      ? SelectionRange.create(s, e, 24 | h)
      : SelectionRange.create(e, s, (s > e ? 4 : 0) | h)
  }
  static normalized(e, s = 0) {
    let a = e[s]
    e.sort((c, h) => c.from - h.from), (s = e.indexOf(a))
    for (let c = 1; c < e.length; c++) {
      let h = e[c],
        d = e[c - 1]
      if (h.empty ? h.from <= d.to : h.from < d.to) {
        let g = d.from,
          b = Math.max(h.to, d.to)
        c <= s && s--,
          e.splice(
            --c,
            2,
            h.anchor > h.head
              ? EditorSelection.range(b, g)
              : EditorSelection.range(g, b)
          )
      }
    }
    return new EditorSelection(e, s)
  }
}
function checkSelection(o, e) {
  for (let s of o.ranges)
    if (s.to > e) throw new RangeError('Selection points outside of document')
}
let nextID = 0
class Facet {
  constructor(e, s, a, c, h) {
    ;(this.combine = e),
      (this.compareInput = s),
      (this.compare = a),
      (this.isStatic = c),
      (this.id = nextID++),
      (this.default = e([])),
      (this.extensions = typeof h == 'function' ? h(this) : h)
  }
  static define(e = {}) {
    return new Facet(
      e.combine || ((s) => s),
      e.compareInput || ((s, a) => s === a),
      e.compare || (e.combine ? (s, a) => s === a : sameArray$1),
      !!e.static,
      e.enables
    )
  }
  of(e) {
    return new FacetProvider([], this, 0, e)
  }
  compute(e, s) {
    if (this.isStatic) throw new Error("Can't compute a static facet")
    return new FacetProvider(e, this, 1, s)
  }
  computeN(e, s) {
    if (this.isStatic) throw new Error("Can't compute a static facet")
    return new FacetProvider(e, this, 2, s)
  }
  from(e, s) {
    return s || (s = (a) => a), this.compute([e], (a) => s(a.field(e)))
  }
}
function sameArray$1(o, e) {
  return o == e || (o.length == e.length && o.every((s, a) => s === e[a]))
}
class FacetProvider {
  constructor(e, s, a, c) {
    ;(this.dependencies = e),
      (this.facet = s),
      (this.type = a),
      (this.value = c),
      (this.id = nextID++)
  }
  dynamicSlot(e) {
    var s
    let a = this.value,
      c = this.facet.compareInput,
      h = this.id,
      d = e[h] >> 1,
      g = this.type == 2,
      b = !1,
      $ = !1,
      _ = []
    for (let j of this.dependencies)
      j == 'doc'
        ? (b = !0)
        : j == 'selection'
        ? ($ = !0)
        : ((s = e[j.id]) !== null && s !== void 0 ? s : 1) & 1 ||
          _.push(e[j.id])
    return {
      create(j) {
        return (j.values[d] = a(j)), 1
      },
      update(j, _e) {
        if (
          (b && _e.docChanged) ||
          ($ && (_e.docChanged || _e.selection)) ||
          ensureAll(j, _)
        ) {
          let et = a(j)
          if (g ? !compareArray(et, j.values[d], c) : !c(et, j.values[d]))
            return (j.values[d] = et), 1
        }
        return 0
      },
      reconfigure: (j, _e) => {
        let et,
          tt = _e.config.address[h]
        if (tt != null) {
          let rt = getAddr(_e, tt)
          if (
            this.dependencies.every((st) =>
              st instanceof Facet
                ? _e.facet(st) === j.facet(st)
                : st instanceof StateField
                ? _e.field(st, !1) == j.field(st, !1)
                : !0
            ) ||
            (g ? compareArray((et = a(j)), rt, c) : c((et = a(j)), rt))
          )
            return (j.values[d] = rt), 0
        } else et = a(j)
        return (j.values[d] = et), 1
      }
    }
  }
}
function compareArray(o, e, s) {
  if (o.length != e.length) return !1
  for (let a = 0; a < o.length; a++) if (!s(o[a], e[a])) return !1
  return !0
}
function ensureAll(o, e) {
  let s = !1
  for (let a of e) ensureAddr(o, a) & 1 && (s = !0)
  return s
}
function dynamicFacetSlot(o, e, s) {
  let a = s.map((b) => o[b.id]),
    c = s.map((b) => b.type),
    h = a.filter((b) => !(b & 1)),
    d = o[e.id] >> 1
  function g(b) {
    let $ = []
    for (let _ = 0; _ < a.length; _++) {
      let j = getAddr(b, a[_])
      if (c[_] == 2) for (let _e of j) $.push(_e)
      else $.push(j)
    }
    return e.combine($)
  }
  return {
    create(b) {
      for (let $ of a) ensureAddr(b, $)
      return (b.values[d] = g(b)), 1
    },
    update(b, $) {
      if (!ensureAll(b, h)) return 0
      let _ = g(b)
      return e.compare(_, b.values[d]) ? 0 : ((b.values[d] = _), 1)
    },
    reconfigure(b, $) {
      let _ = ensureAll(b, a),
        j = $.config.facets[e.id],
        _e = $.facet(e)
      if (j && !_ && sameArray$1(s, j)) return (b.values[d] = _e), 0
      let et = g(b)
      return e.compare(et, _e)
        ? ((b.values[d] = _e), 0)
        : ((b.values[d] = et), 1)
    }
  }
}
const initField = Facet.define({ static: !0 })
class StateField {
  constructor(e, s, a, c, h) {
    ;(this.id = e),
      (this.createF = s),
      (this.updateF = a),
      (this.compareF = c),
      (this.spec = h),
      (this.provides = void 0)
  }
  static define(e) {
    let s = new StateField(
      nextID++,
      e.create,
      e.update,
      e.compare || ((a, c) => a === c),
      e
    )
    return e.provide && (s.provides = e.provide(s)), s
  }
  create(e) {
    let s = e.facet(initField).find((a) => a.field == this)
    return ((s == null ? void 0 : s.create) || this.createF)(e)
  }
  slot(e) {
    let s = e[this.id] >> 1
    return {
      create: (a) => ((a.values[s] = this.create(a)), 1),
      update: (a, c) => {
        let h = a.values[s],
          d = this.updateF(h, c)
        return this.compareF(h, d) ? 0 : ((a.values[s] = d), 1)
      },
      reconfigure: (a, c) =>
        c.config.address[this.id] != null
          ? ((a.values[s] = c.field(this)), 0)
          : ((a.values[s] = this.create(a)), 1)
    }
  }
  init(e) {
    return [this, initField.of({ field: this, create: e })]
  }
  get extension() {
    return this
  }
}
const Prec_ = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 }
function prec(o) {
  return (e) => new PrecExtension(e, o)
}
const Prec = {
  highest: prec(Prec_.highest),
  high: prec(Prec_.high),
  default: prec(Prec_.default),
  low: prec(Prec_.low),
  lowest: prec(Prec_.lowest)
}
class PrecExtension {
  constructor(e, s) {
    ;(this.inner = e), (this.prec = s)
  }
}
class Compartment {
  of(e) {
    return new CompartmentInstance(this, e)
  }
  reconfigure(e) {
    return Compartment.reconfigure.of({ compartment: this, extension: e })
  }
  get(e) {
    return e.config.compartments.get(this)
  }
}
class CompartmentInstance {
  constructor(e, s) {
    ;(this.compartment = e), (this.inner = s)
  }
}
class Configuration {
  constructor(e, s, a, c, h, d) {
    for (
      this.base = e,
        this.compartments = s,
        this.dynamicSlots = a,
        this.address = c,
        this.staticValues = h,
        this.facets = d,
        this.statusTemplate = [];
      this.statusTemplate.length < a.length;

    )
      this.statusTemplate.push(0)
  }
  staticFacet(e) {
    let s = this.address[e.id]
    return s == null ? e.default : this.staticValues[s >> 1]
  }
  static resolve(e, s, a) {
    let c = [],
      h = Object.create(null),
      d = new Map()
    for (let _e of flatten(e, s, d))
      _e instanceof StateField
        ? c.push(_e)
        : (h[_e.facet.id] || (h[_e.facet.id] = [])).push(_e)
    let g = Object.create(null),
      b = [],
      $ = []
    for (let _e of c) (g[_e.id] = $.length << 1), $.push((et) => _e.slot(et))
    let _ = a == null ? void 0 : a.config.facets
    for (let _e in h) {
      let et = h[_e],
        tt = et[0].facet,
        rt = (_ && _[_e]) || []
      if (et.every((st) => st.type == 0))
        if (((g[tt.id] = (b.length << 1) | 1), sameArray$1(rt, et)))
          b.push(a.facet(tt))
        else {
          let st = tt.combine(et.map((nt) => nt.value))
          b.push(a && tt.compare(st, a.facet(tt)) ? a.facet(tt) : st)
        }
      else {
        for (let st of et)
          st.type == 0
            ? ((g[st.id] = (b.length << 1) | 1), b.push(st.value))
            : ((g[st.id] = $.length << 1), $.push((nt) => st.dynamicSlot(nt)))
        ;(g[tt.id] = $.length << 1),
          $.push((st) => dynamicFacetSlot(st, tt, et))
      }
    }
    let j = $.map((_e) => _e(g))
    return new Configuration(e, d, j, g, b, h)
  }
}
function flatten(o, e, s) {
  let a = [[], [], [], [], []],
    c = new Map()
  function h(d, g) {
    let b = c.get(d)
    if (b != null) {
      if (b <= g) return
      let $ = a[b].indexOf(d)
      $ > -1 && a[b].splice($, 1),
        d instanceof CompartmentInstance && s.delete(d.compartment)
    }
    if ((c.set(d, g), Array.isArray(d))) for (let $ of d) h($, g)
    else if (d instanceof CompartmentInstance) {
      if (s.has(d.compartment))
        throw new RangeError('Duplicate use of compartment in extensions')
      let $ = e.get(d.compartment) || d.inner
      s.set(d.compartment, $), h($, g)
    } else if (d instanceof PrecExtension) h(d.inner, d.prec)
    else if (d instanceof StateField)
      a[g].push(d), d.provides && h(d.provides, g)
    else if (d instanceof FacetProvider)
      a[g].push(d), d.facet.extensions && h(d.facet.extensions, Prec_.default)
    else {
      let $ = d.extension
      if (!$)
        throw new Error(
          `Unrecognized extension value in extension set (${d}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
        )
      h($, g)
    }
  }
  return h(o, Prec_.default), a.reduce((d, g) => d.concat(g))
}
function ensureAddr(o, e) {
  if (e & 1) return 2
  let s = e >> 1,
    a = o.status[s]
  if (a == 4) throw new Error('Cyclic dependency between fields and/or facets')
  if (a & 2) return a
  o.status[s] = 4
  let c = o.computeSlot(o, o.config.dynamicSlots[s])
  return (o.status[s] = 2 | c)
}
function getAddr(o, e) {
  return e & 1 ? o.config.staticValues[e >> 1] : o.values[e >> 1]
}
const languageData = Facet.define(),
  allowMultipleSelections = Facet.define({
    combine: (o) => o.some((e) => e),
    static: !0
  }),
  lineSeparator = Facet.define({
    combine: (o) => (o.length ? o[0] : void 0),
    static: !0
  }),
  changeFilter = Facet.define(),
  transactionFilter = Facet.define(),
  transactionExtender = Facet.define(),
  readOnly = Facet.define({ combine: (o) => (o.length ? o[0] : !1) })
class Annotation {
  constructor(e, s) {
    ;(this.type = e), (this.value = s)
  }
  static define() {
    return new AnnotationType()
  }
}
class AnnotationType {
  of(e) {
    return new Annotation(this, e)
  }
}
class StateEffectType {
  constructor(e) {
    this.map = e
  }
  of(e) {
    return new StateEffect(this, e)
  }
}
class StateEffect {
  constructor(e, s) {
    ;(this.type = e), (this.value = s)
  }
  map(e) {
    let s = this.type.map(this.value, e)
    return s === void 0
      ? void 0
      : s == this.value
      ? this
      : new StateEffect(this.type, s)
  }
  is(e) {
    return this.type == e
  }
  static define(e = {}) {
    return new StateEffectType(e.map || ((s) => s))
  }
  static mapEffects(e, s) {
    if (!e.length) return e
    let a = []
    for (let c of e) {
      let h = c.map(s)
      h && a.push(h)
    }
    return a
  }
}
StateEffect.reconfigure = StateEffect.define()
StateEffect.appendConfig = StateEffect.define()
class Transaction {
  constructor(e, s, a, c, h, d) {
    ;(this.startState = e),
      (this.changes = s),
      (this.selection = a),
      (this.effects = c),
      (this.annotations = h),
      (this.scrollIntoView = d),
      (this._doc = null),
      (this._state = null),
      a && checkSelection(a, s.newLength),
      h.some((g) => g.type == Transaction.time) ||
        (this.annotations = h.concat(Transaction.time.of(Date.now())))
  }
  static create(e, s, a, c, h, d) {
    return new Transaction(e, s, a, c, h, d)
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc))
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes)
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state
  }
  annotation(e) {
    for (let s of this.annotations) if (s.type == e) return s.value
  }
  get docChanged() {
    return !this.changes.empty
  }
  get reconfigured() {
    return this.startState.config != this.state.config
  }
  isUserEvent(e) {
    let s = this.annotation(Transaction.userEvent)
    return !!(
      s &&
      (s == e ||
        (s.length > e.length &&
          s.slice(0, e.length) == e &&
          s[e.length] == '.'))
    )
  }
}
Transaction.time = Annotation.define()
Transaction.userEvent = Annotation.define()
Transaction.addToHistory = Annotation.define()
Transaction.remote = Annotation.define()
function joinRanges(o, e) {
  let s = []
  for (let a = 0, c = 0; ; ) {
    let h, d
    if (a < o.length && (c == e.length || e[c] >= o[a]))
      (h = o[a++]), (d = o[a++])
    else if (c < e.length) (h = e[c++]), (d = e[c++])
    else return s
    !s.length || s[s.length - 1] < h
      ? s.push(h, d)
      : s[s.length - 1] < d && (s[s.length - 1] = d)
  }
}
function mergeTransaction(o, e, s) {
  var a
  let c, h, d
  return (
    s
      ? ((c = e.changes),
        (h = ChangeSet.empty(e.changes.length)),
        (d = o.changes.compose(e.changes)))
      : ((c = e.changes.map(o.changes)),
        (h = o.changes.mapDesc(e.changes, !0)),
        (d = o.changes.compose(c))),
    {
      changes: d,
      selection: e.selection
        ? e.selection.map(h)
        : (a = o.selection) === null || a === void 0
        ? void 0
        : a.map(c),
      effects: StateEffect.mapEffects(o.effects, c).concat(
        StateEffect.mapEffects(e.effects, h)
      ),
      annotations: o.annotations.length
        ? o.annotations.concat(e.annotations)
        : e.annotations,
      scrollIntoView: o.scrollIntoView || e.scrollIntoView
    }
  )
}
function resolveTransactionInner(o, e, s) {
  let a = e.selection,
    c = asArray$1(e.annotations)
  return (
    e.userEvent && (c = c.concat(Transaction.userEvent.of(e.userEvent))),
    {
      changes:
        e.changes instanceof ChangeSet
          ? e.changes
          : ChangeSet.of(e.changes || [], s, o.facet(lineSeparator)),
      selection:
        a &&
        (a instanceof EditorSelection
          ? a
          : EditorSelection.single(a.anchor, a.head)),
      effects: asArray$1(e.effects),
      annotations: c,
      scrollIntoView: !!e.scrollIntoView
    }
  )
}
function resolveTransaction(o, e, s) {
  let a = resolveTransactionInner(o, e.length ? e[0] : {}, o.doc.length)
  e.length && e[0].filter === !1 && (s = !1)
  for (let h = 1; h < e.length; h++) {
    e[h].filter === !1 && (s = !1)
    let d = !!e[h].sequential
    a = mergeTransaction(
      a,
      resolveTransactionInner(o, e[h], d ? a.changes.newLength : o.doc.length),
      d
    )
  }
  let c = Transaction.create(
    o,
    a.changes,
    a.selection,
    a.effects,
    a.annotations,
    a.scrollIntoView
  )
  return extendTransaction(s ? filterTransaction(c) : c)
}
function filterTransaction(o) {
  let e = o.startState,
    s = !0
  for (let c of e.facet(changeFilter)) {
    let h = c(o)
    if (h === !1) {
      s = !1
      break
    }
    Array.isArray(h) && (s = s === !0 ? h : joinRanges(s, h))
  }
  if (s !== !0) {
    let c, h
    if (s === !1)
      (h = o.changes.invertedDesc), (c = ChangeSet.empty(e.doc.length))
    else {
      let d = o.changes.filter(s)
      ;(c = d.changes), (h = d.filtered.mapDesc(d.changes).invertedDesc)
    }
    o = Transaction.create(
      e,
      c,
      o.selection && o.selection.map(h),
      StateEffect.mapEffects(o.effects, h),
      o.annotations,
      o.scrollIntoView
    )
  }
  let a = e.facet(transactionFilter)
  for (let c = a.length - 1; c >= 0; c--) {
    let h = a[c](o)
    h instanceof Transaction
      ? (o = h)
      : Array.isArray(h) && h.length == 1 && h[0] instanceof Transaction
      ? (o = h[0])
      : (o = resolveTransaction(e, asArray$1(h), !1))
  }
  return o
}
function extendTransaction(o) {
  let e = o.startState,
    s = e.facet(transactionExtender),
    a = o
  for (let c = s.length - 1; c >= 0; c--) {
    let h = s[c](o)
    h &&
      Object.keys(h).length &&
      (a = mergeTransaction(
        a,
        resolveTransactionInner(e, h, o.changes.newLength),
        !0
      ))
  }
  return a == o
    ? o
    : Transaction.create(
        e,
        o.changes,
        o.selection,
        a.effects,
        a.annotations,
        a.scrollIntoView
      )
}
const none$2 = []
function asArray$1(o) {
  return o == null ? none$2 : Array.isArray(o) ? o : [o]
}
var CharCategory = (function (o) {
  return (
    (o[(o.Word = 0)] = 'Word'),
    (o[(o.Space = 1)] = 'Space'),
    (o[(o.Other = 2)] = 'Other'),
    o
  )
})(CharCategory || (CharCategory = {}))
const nonASCIISingleCaseWordChar =
  /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
let wordChar
try {
  wordChar = new RegExp('[\\p{Alphabetic}\\p{Number}_]', 'u')
} catch {}
function hasWordChar(o) {
  if (wordChar) return wordChar.test(o)
  for (let e = 0; e < o.length; e++) {
    let s = o[e]
    if (
      /\w/.test(s) ||
      (s > '' &&
        (s.toUpperCase() != s.toLowerCase() ||
          nonASCIISingleCaseWordChar.test(s)))
    )
      return !0
  }
  return !1
}
function makeCategorizer(o) {
  return (e) => {
    if (!/\S/.test(e)) return CharCategory.Space
    if (hasWordChar(e)) return CharCategory.Word
    for (let s = 0; s < o.length; s++)
      if (e.indexOf(o[s]) > -1) return CharCategory.Word
    return CharCategory.Other
  }
}
class EditorState {
  constructor(e, s, a, c, h, d) {
    ;(this.config = e),
      (this.doc = s),
      (this.selection = a),
      (this.values = c),
      (this.status = e.statusTemplate.slice()),
      (this.computeSlot = h),
      d && (d._state = this)
    for (let g = 0; g < this.config.dynamicSlots.length; g++)
      ensureAddr(this, g << 1)
    this.computeSlot = null
  }
  field(e, s = !0) {
    let a = this.config.address[e.id]
    if (a == null) {
      if (s) throw new RangeError('Field is not present in this state')
      return
    }
    return ensureAddr(this, a), getAddr(this, a)
  }
  update(...e) {
    return resolveTransaction(this, e, !0)
  }
  applyTransaction(e) {
    let s = this.config,
      { base: a, compartments: c } = s
    for (let d of e.effects)
      d.is(Compartment.reconfigure)
        ? (s &&
            ((c = new Map()),
            s.compartments.forEach((g, b) => c.set(b, g)),
            (s = null)),
          c.set(d.value.compartment, d.value.extension))
        : d.is(StateEffect.reconfigure)
        ? ((s = null), (a = d.value))
        : d.is(StateEffect.appendConfig) &&
          ((s = null), (a = asArray$1(a).concat(d.value)))
    let h
    s
      ? (h = e.startState.values.slice())
      : ((s = Configuration.resolve(a, c, this)),
        (h = new EditorState(
          s,
          this.doc,
          this.selection,
          s.dynamicSlots.map(() => null),
          (g, b) => b.reconfigure(g, this),
          null
        ).values)),
      new EditorState(
        s,
        e.newDoc,
        e.newSelection,
        h,
        (d, g) => g.update(d, e),
        e
      )
  }
  replaceSelection(e) {
    return (
      typeof e == 'string' && (e = this.toText(e)),
      this.changeByRange((s) => ({
        changes: { from: s.from, to: s.to, insert: e },
        range: EditorSelection.cursor(s.from + e.length)
      }))
    )
  }
  changeByRange(e) {
    let s = this.selection,
      a = e(s.ranges[0]),
      c = this.changes(a.changes),
      h = [a.range],
      d = asArray$1(a.effects)
    for (let g = 1; g < s.ranges.length; g++) {
      let b = e(s.ranges[g]),
        $ = this.changes(b.changes),
        _ = $.map(c)
      for (let _e = 0; _e < g; _e++) h[_e] = h[_e].map(_)
      let j = c.mapDesc($, !0)
      h.push(b.range.map(j)),
        (c = c.compose(_)),
        (d = StateEffect.mapEffects(d, _).concat(
          StateEffect.mapEffects(asArray$1(b.effects), j)
        ))
    }
    return {
      changes: c,
      selection: EditorSelection.create(h, s.mainIndex),
      effects: d
    }
  }
  changes(e = []) {
    return e instanceof ChangeSet
      ? e
      : ChangeSet.of(e, this.doc.length, this.facet(EditorState.lineSeparator))
  }
  toText(e) {
    return Text.of(
      e.split(this.facet(EditorState.lineSeparator) || DefaultSplit)
    )
  }
  sliceDoc(e = 0, s = this.doc.length) {
    return this.doc.sliceString(e, s, this.lineBreak)
  }
  facet(e) {
    let s = this.config.address[e.id]
    return s == null ? e.default : (ensureAddr(this, s), getAddr(this, s))
  }
  toJSON(e) {
    let s = { doc: this.sliceDoc(), selection: this.selection.toJSON() }
    if (e)
      for (let a in e) {
        let c = e[a]
        c instanceof StateField &&
          this.config.address[c.id] != null &&
          (s[a] = c.spec.toJSON(this.field(e[a]), this))
      }
    return s
  }
  static fromJSON(e, s = {}, a) {
    if (!e || typeof e.doc != 'string')
      throw new RangeError('Invalid JSON representation for EditorState')
    let c = []
    if (a) {
      for (let h in a)
        if (Object.prototype.hasOwnProperty.call(e, h)) {
          let d = a[h],
            g = e[h]
          c.push(d.init((b) => d.spec.fromJSON(g, b)))
        }
    }
    return EditorState.create({
      doc: e.doc,
      selection: EditorSelection.fromJSON(e.selection),
      extensions: s.extensions ? c.concat([s.extensions]) : c
    })
  }
  static create(e = {}) {
    let s = Configuration.resolve(e.extensions || [], new Map()),
      a =
        e.doc instanceof Text
          ? e.doc
          : Text.of(
              (e.doc || '').split(
                s.staticFacet(EditorState.lineSeparator) || DefaultSplit
              )
            ),
      c = e.selection
        ? e.selection instanceof EditorSelection
          ? e.selection
          : EditorSelection.single(e.selection.anchor, e.selection.head)
        : EditorSelection.single(0)
    return (
      checkSelection(c, a.length),
      s.staticFacet(allowMultipleSelections) || (c = c.asSingle()),
      new EditorState(
        s,
        a,
        c,
        s.dynamicSlots.map(() => null),
        (h, d) => d.create(h),
        null
      )
    )
  }
  get tabSize() {
    return this.facet(EditorState.tabSize)
  }
  get lineBreak() {
    return (
      this.facet(EditorState.lineSeparator) ||
      `
`
    )
  }
  get readOnly() {
    return this.facet(readOnly)
  }
  phrase(e, ...s) {
    for (let a of this.facet(EditorState.phrases))
      if (Object.prototype.hasOwnProperty.call(a, e)) {
        e = a[e]
        break
      }
    return (
      s.length &&
        (e = e.replace(/\$(\$|\d*)/g, (a, c) => {
          if (c == '$') return '$'
          let h = +(c || 1)
          return !h || h > s.length ? a : s[h - 1]
        })),
      e
    )
  }
  languageDataAt(e, s, a = -1) {
    let c = []
    for (let h of this.facet(languageData))
      for (let d of h(this, s, a))
        Object.prototype.hasOwnProperty.call(d, e) && c.push(d[e])
    return c
  }
  charCategorizer(e) {
    return makeCategorizer(this.languageDataAt('wordChars', e).join(''))
  }
  wordAt(e) {
    let { text: s, from: a, length: c } = this.doc.lineAt(e),
      h = this.charCategorizer(e),
      d = e - a,
      g = e - a
    for (; d > 0; ) {
      let b = findClusterBreak(s, d, !1)
      if (h(s.slice(b, d)) != CharCategory.Word) break
      d = b
    }
    for (; g < c; ) {
      let b = findClusterBreak(s, g)
      if (h(s.slice(g, b)) != CharCategory.Word) break
      g = b
    }
    return d == g ? null : EditorSelection.range(d + a, g + a)
  }
}
EditorState.allowMultipleSelections = allowMultipleSelections
EditorState.tabSize = Facet.define({ combine: (o) => (o.length ? o[0] : 4) })
EditorState.lineSeparator = lineSeparator
EditorState.readOnly = readOnly
EditorState.phrases = Facet.define({
  compare(o, e) {
    let s = Object.keys(o),
      a = Object.keys(e)
    return s.length == a.length && s.every((c) => o[c] == e[c])
  }
})
EditorState.languageData = languageData
EditorState.changeFilter = changeFilter
EditorState.transactionFilter = transactionFilter
EditorState.transactionExtender = transactionExtender
Compartment.reconfigure = StateEffect.define()
function combineConfig(o, e, s = {}) {
  let a = {}
  for (let c of o)
    for (let h of Object.keys(c)) {
      let d = c[h],
        g = a[h]
      if (g === void 0) a[h] = d
      else if (!(g === d || d === void 0))
        if (Object.hasOwnProperty.call(s, h)) a[h] = s[h](g, d)
        else throw new Error('Config merge conflict for field ' + h)
    }
  for (let c in e) a[c] === void 0 && (a[c] = e[c])
  return a
}
class RangeValue {
  eq(e) {
    return this == e
  }
  range(e, s = e) {
    return Range$1.create(e, s, this)
  }
}
RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0
RangeValue.prototype.point = !1
RangeValue.prototype.mapMode = MapMode.TrackDel
let Range$1 = class Zt {
  constructor(e, s, a) {
    ;(this.from = e), (this.to = s), (this.value = a)
  }
  static create(e, s, a) {
    return new Zt(e, s, a)
  }
}
function cmpRange(o, e) {
  return o.from - e.from || o.value.startSide - e.value.startSide
}
class Chunk {
  constructor(e, s, a, c) {
    ;(this.from = e), (this.to = s), (this.value = a), (this.maxPoint = c)
  }
  get length() {
    return this.to[this.to.length - 1]
  }
  findIndex(e, s, a, c = 0) {
    let h = a ? this.to : this.from
    for (let d = c, g = h.length; ; ) {
      if (d == g) return d
      let b = (d + g) >> 1,
        $ =
          h[b] - e || (a ? this.value[b].endSide : this.value[b].startSide) - s
      if (b == d) return $ >= 0 ? d : g
      $ >= 0 ? (g = b) : (d = b + 1)
    }
  }
  between(e, s, a, c) {
    for (
      let h = this.findIndex(s, -1e9, !0), d = this.findIndex(a, 1e9, !1, h);
      h < d;
      h++
    )
      if (c(this.from[h] + e, this.to[h] + e, this.value[h]) === !1) return !1
  }
  map(e, s) {
    let a = [],
      c = [],
      h = [],
      d = -1,
      g = -1
    for (let b = 0; b < this.value.length; b++) {
      let $ = this.value[b],
        _ = this.from[b] + e,
        j = this.to[b] + e,
        _e,
        et
      if (_ == j) {
        let tt = s.mapPos(_, $.startSide, $.mapMode)
        if (
          tt == null ||
          ((_e = et = tt),
          $.startSide != $.endSide && ((et = s.mapPos(_, $.endSide)), et < _e))
        )
          continue
      } else if (
        ((_e = s.mapPos(_, $.startSide)),
        (et = s.mapPos(j, $.endSide)),
        _e > et || (_e == et && $.startSide > 0 && $.endSide <= 0))
      )
        continue
      ;(et - _e || $.endSide - $.startSide) < 0 ||
        (d < 0 && (d = _e),
        $.point && (g = Math.max(g, et - _e)),
        a.push($),
        c.push(_e - d),
        h.push(et - d))
    }
    return { mapped: a.length ? new Chunk(c, h, a, g) : null, pos: d }
  }
}
class RangeSet {
  constructor(e, s, a, c) {
    ;(this.chunkPos = e),
      (this.chunk = s),
      (this.nextLayer = a),
      (this.maxPoint = c)
  }
  static create(e, s, a, c) {
    return new RangeSet(e, s, a, c)
  }
  get length() {
    let e = this.chunk.length - 1
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length)
  }
  get size() {
    if (this.isEmpty) return 0
    let e = this.nextLayer.size
    for (let s of this.chunk) e += s.value.length
    return e
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length
  }
  update(e) {
    let {
        add: s = [],
        sort: a = !1,
        filterFrom: c = 0,
        filterTo: h = this.length
      } = e,
      d = e.filter
    if (s.length == 0 && !d) return this
    if ((a && (s = s.slice().sort(cmpRange)), this.isEmpty))
      return s.length ? RangeSet.of(s) : this
    let g = new LayerCursor(this, null, -1).goto(0),
      b = 0,
      $ = [],
      _ = new RangeSetBuilder()
    for (; g.value || b < s.length; )
      if (
        b < s.length &&
        (g.from - s[b].from || g.startSide - s[b].value.startSide) >= 0
      ) {
        let j = s[b++]
        _.addInner(j.from, j.to, j.value) || $.push(j)
      } else
        g.rangeIndex == 1 &&
        g.chunkIndex < this.chunk.length &&
        (b == s.length || this.chunkEnd(g.chunkIndex) < s[b].from) &&
        (!d ||
          c > this.chunkEnd(g.chunkIndex) ||
          h < this.chunkPos[g.chunkIndex]) &&
        _.addChunk(this.chunkPos[g.chunkIndex], this.chunk[g.chunkIndex])
          ? g.nextChunk()
          : ((!d || c > g.to || h < g.from || d(g.from, g.to, g.value)) &&
              (_.addInner(g.from, g.to, g.value) ||
                $.push(Range$1.create(g.from, g.to, g.value))),
            g.next())
    return _.finishInner(
      this.nextLayer.isEmpty && !$.length
        ? RangeSet.empty
        : this.nextLayer.update({
            add: $,
            filter: d,
            filterFrom: c,
            filterTo: h
          })
    )
  }
  map(e) {
    if (e.empty || this.isEmpty) return this
    let s = [],
      a = [],
      c = -1
    for (let d = 0; d < this.chunk.length; d++) {
      let g = this.chunkPos[d],
        b = this.chunk[d],
        $ = e.touchesRange(g, g + b.length)
      if ($ === !1)
        (c = Math.max(c, b.maxPoint)), s.push(b), a.push(e.mapPos(g))
      else if ($ === !0) {
        let { mapped: _, pos: j } = b.map(g, e)
        _ && ((c = Math.max(c, _.maxPoint)), s.push(_), a.push(j))
      }
    }
    let h = this.nextLayer.map(e)
    return s.length == 0 ? h : new RangeSet(a, s, h || RangeSet.empty, c)
  }
  between(e, s, a) {
    if (!this.isEmpty) {
      for (let c = 0; c < this.chunk.length; c++) {
        let h = this.chunkPos[c],
          d = this.chunk[c]
        if (s >= h && e <= h + d.length && d.between(h, e - h, s - h, a) === !1)
          return
      }
      this.nextLayer.between(e, s, a)
    }
  }
  iter(e = 0) {
    return HeapCursor.from([this]).goto(e)
  }
  get isEmpty() {
    return this.nextLayer == this
  }
  static iter(e, s = 0) {
    return HeapCursor.from(e).goto(s)
  }
  static compare(e, s, a, c, h = -1) {
    let d = e.filter((j) => j.maxPoint > 0 || (!j.isEmpty && j.maxPoint >= h)),
      g = s.filter((j) => j.maxPoint > 0 || (!j.isEmpty && j.maxPoint >= h)),
      b = findSharedChunks(d, g, a),
      $ = new SpanCursor(d, b, h),
      _ = new SpanCursor(g, b, h)
    a.iterGaps((j, _e, et) => compare($, j, _, _e, et, c)),
      a.empty && a.length == 0 && compare($, 0, _, 0, 0, c)
  }
  static eq(e, s, a = 0, c) {
    c == null && (c = 1e9 - 1)
    let h = e.filter((_) => !_.isEmpty && s.indexOf(_) < 0),
      d = s.filter((_) => !_.isEmpty && e.indexOf(_) < 0)
    if (h.length != d.length) return !1
    if (!h.length) return !0
    let g = findSharedChunks(h, d),
      b = new SpanCursor(h, g, 0).goto(a),
      $ = new SpanCursor(d, g, 0).goto(a)
    for (;;) {
      if (
        b.to != $.to ||
        !sameValues(b.active, $.active) ||
        (b.point && (!$.point || !b.point.eq($.point)))
      )
        return !1
      if (b.to > c) return !0
      b.next(), $.next()
    }
  }
  static spans(e, s, a, c, h = -1) {
    let d = new SpanCursor(e, null, h).goto(s),
      g = s,
      b = d.openStart
    for (;;) {
      let $ = Math.min(d.to, a)
      if (d.point) {
        let _ = d.activeForPoint(d.to),
          j = d.pointFrom < s ? _.length + 1 : Math.min(_.length, b)
        c.point(g, $, d.point, _, j, d.pointRank),
          (b = Math.min(d.openEnd($), _.length))
      } else $ > g && (c.span(g, $, d.active, b), (b = d.openEnd($)))
      if (d.to > a) return b + (d.point && d.to > a ? 1 : 0)
      ;(g = d.to), d.next()
    }
  }
  static of(e, s = !1) {
    let a = new RangeSetBuilder()
    for (let c of e instanceof Range$1 ? [e] : s ? lazySort(e) : e)
      a.add(c.from, c.to, c.value)
    return a.finish()
  }
}
RangeSet.empty = new RangeSet([], [], null, -1)
function lazySort(o) {
  if (o.length > 1)
    for (let e = o[0], s = 1; s < o.length; s++) {
      let a = o[s]
      if (cmpRange(e, a) > 0) return o.slice().sort(cmpRange)
      e = a
    }
  return o
}
RangeSet.empty.nextLayer = RangeSet.empty
class RangeSetBuilder {
  finishChunk(e) {
    this.chunks.push(new Chunk(this.from, this.to, this.value, this.maxPoint)),
      this.chunkPos.push(this.chunkStart),
      (this.chunkStart = -1),
      (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
      (this.maxPoint = -1),
      e && ((this.from = []), (this.to = []), (this.value = []))
  }
  constructor() {
    ;(this.chunks = []),
      (this.chunkPos = []),
      (this.chunkStart = -1),
      (this.last = null),
      (this.lastFrom = -1e9),
      (this.lastTo = -1e9),
      (this.from = []),
      (this.to = []),
      (this.value = []),
      (this.maxPoint = -1),
      (this.setMaxPoint = -1),
      (this.nextLayer = null)
  }
  add(e, s, a) {
    this.addInner(e, s, a) ||
      (this.nextLayer || (this.nextLayer = new RangeSetBuilder())).add(e, s, a)
  }
  addInner(e, s, a) {
    let c = e - this.lastTo || a.startSide - this.last.endSide
    if (c <= 0 && (e - this.lastFrom || a.startSide - this.last.startSide) < 0)
      throw new Error(
        'Ranges must be added sorted by `from` position and `startSide`'
      )
    return c < 0
      ? !1
      : (this.from.length == 250 && this.finishChunk(!0),
        this.chunkStart < 0 && (this.chunkStart = e),
        this.from.push(e - this.chunkStart),
        this.to.push(s - this.chunkStart),
        (this.last = a),
        (this.lastFrom = e),
        (this.lastTo = s),
        this.value.push(a),
        a.point && (this.maxPoint = Math.max(this.maxPoint, s - e)),
        !0)
  }
  addChunk(e, s) {
    if ((e - this.lastTo || s.value[0].startSide - this.last.endSide) < 0)
      return !1
    this.from.length && this.finishChunk(!0),
      (this.setMaxPoint = Math.max(this.setMaxPoint, s.maxPoint)),
      this.chunks.push(s),
      this.chunkPos.push(e)
    let a = s.value.length - 1
    return (
      (this.last = s.value[a]),
      (this.lastFrom = s.from[a] + e),
      (this.lastTo = s.to[a] + e),
      !0
    )
  }
  finish() {
    return this.finishInner(RangeSet.empty)
  }
  finishInner(e) {
    if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0))
      return e
    let s = RangeSet.create(
      this.chunkPos,
      this.chunks,
      this.nextLayer ? this.nextLayer.finishInner(e) : e,
      this.setMaxPoint
    )
    return (this.from = null), s
  }
}
function findSharedChunks(o, e, s) {
  let a = new Map()
  for (let h of o)
    for (let d = 0; d < h.chunk.length; d++)
      h.chunk[d].maxPoint <= 0 && a.set(h.chunk[d], h.chunkPos[d])
  let c = new Set()
  for (let h of e)
    for (let d = 0; d < h.chunk.length; d++) {
      let g = a.get(h.chunk[d])
      g != null &&
        (s ? s.mapPos(g) : g) == h.chunkPos[d] &&
        !(s != null && s.touchesRange(g, g + h.chunk[d].length)) &&
        c.add(h.chunk[d])
    }
  return c
}
class LayerCursor {
  constructor(e, s, a, c = 0) {
    ;(this.layer = e), (this.skip = s), (this.minPoint = a), (this.rank = c)
  }
  get startSide() {
    return this.value ? this.value.startSide : 0
  }
  get endSide() {
    return this.value ? this.value.endSide : 0
  }
  goto(e, s = -1e9) {
    return (
      (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, s, !1), this
    )
  }
  gotoInner(e, s, a) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let c = this.layer.chunk[this.chunkIndex]
      if (
        !(
          (this.skip && this.skip.has(c)) ||
          this.layer.chunkEnd(this.chunkIndex) < e ||
          c.maxPoint < this.minPoint
        )
      )
        break
      this.chunkIndex++, (a = !1)
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let c = this.layer.chunk[this.chunkIndex].findIndex(
        e - this.layer.chunkPos[this.chunkIndex],
        s,
        !0
      )
      ;(!a || this.rangeIndex < c) && this.setRangeIndex(c)
    }
    this.next()
  }
  forward(e, s) {
    ;(this.to - e || this.endSide - s) < 0 && this.gotoInner(e, s, !0)
  }
  next() {
    for (;;)
      if (this.chunkIndex == this.layer.chunk.length) {
        ;(this.from = this.to = 1e9), (this.value = null)
        break
      } else {
        let e = this.layer.chunkPos[this.chunkIndex],
          s = this.layer.chunk[this.chunkIndex],
          a = e + s.from[this.rangeIndex]
        if (
          ((this.from = a),
          (this.to = e + s.to[this.rangeIndex]),
          (this.value = s.value[this.rangeIndex]),
          this.setRangeIndex(this.rangeIndex + 1),
          this.minPoint < 0 ||
            (this.value.point && this.to - this.from >= this.minPoint))
        )
          break
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if ((this.chunkIndex++, this.skip))
        for (
          ;
          this.chunkIndex < this.layer.chunk.length &&
          this.skip.has(this.layer.chunk[this.chunkIndex]);

        )
          this.chunkIndex++
      this.rangeIndex = 0
    } else this.rangeIndex = e
  }
  nextChunk() {
    this.chunkIndex++, (this.rangeIndex = 0), this.next()
  }
  compare(e) {
    return (
      this.from - e.from ||
      this.startSide - e.startSide ||
      this.rank - e.rank ||
      this.to - e.to ||
      this.endSide - e.endSide
    )
  }
}
class HeapCursor {
  constructor(e) {
    this.heap = e
  }
  static from(e, s = null, a = -1) {
    let c = []
    for (let h = 0; h < e.length; h++)
      for (let d = e[h]; !d.isEmpty; d = d.nextLayer)
        d.maxPoint >= a && c.push(new LayerCursor(d, s, a, h))
    return c.length == 1 ? c[0] : new HeapCursor(c)
  }
  get startSide() {
    return this.value ? this.value.startSide : 0
  }
  goto(e, s = -1e9) {
    for (let a of this.heap) a.goto(e, s)
    for (let a = this.heap.length >> 1; a >= 0; a--) heapBubble(this.heap, a)
    return this.next(), this
  }
  forward(e, s) {
    for (let a of this.heap) a.forward(e, s)
    for (let a = this.heap.length >> 1; a >= 0; a--) heapBubble(this.heap, a)
    ;(this.to - e || this.value.endSide - s) < 0 && this.next()
  }
  next() {
    if (this.heap.length == 0)
      (this.from = this.to = 1e9), (this.value = null), (this.rank = -1)
    else {
      let e = this.heap[0]
      ;(this.from = e.from),
        (this.to = e.to),
        (this.value = e.value),
        (this.rank = e.rank),
        e.value && e.next(),
        heapBubble(this.heap, 0)
    }
  }
}
function heapBubble(o, e) {
  for (let s = o[e]; ; ) {
    let a = (e << 1) + 1
    if (a >= o.length) break
    let c = o[a]
    if (
      (a + 1 < o.length && c.compare(o[a + 1]) >= 0 && ((c = o[a + 1]), a++),
      s.compare(c) < 0)
    )
      break
    ;(o[a] = s), (o[e] = c), (e = a)
  }
}
class SpanCursor {
  constructor(e, s, a) {
    ;(this.minPoint = a),
      (this.active = []),
      (this.activeTo = []),
      (this.activeRank = []),
      (this.minActive = -1),
      (this.point = null),
      (this.pointFrom = 0),
      (this.pointRank = 0),
      (this.to = -1e9),
      (this.endSide = 0),
      (this.openStart = -1),
      (this.cursor = HeapCursor.from(e, s, a))
  }
  goto(e, s = -1e9) {
    return (
      this.cursor.goto(e, s),
      (this.active.length = this.activeTo.length = this.activeRank.length = 0),
      (this.minActive = -1),
      (this.to = e),
      (this.endSide = s),
      (this.openStart = -1),
      this.next(),
      this
    )
  }
  forward(e, s) {
    for (
      ;
      this.minActive > -1 &&
      (this.activeTo[this.minActive] - e ||
        this.active[this.minActive].endSide - s) < 0;

    )
      this.removeActive(this.minActive)
    this.cursor.forward(e, s)
  }
  removeActive(e) {
    remove(this.active, e),
      remove(this.activeTo, e),
      remove(this.activeRank, e),
      (this.minActive = findMinIndex(this.active, this.activeTo))
  }
  addActive(e) {
    let s = 0,
      { value: a, to: c, rank: h } = this.cursor
    for (; s < this.activeRank.length && this.activeRank[s] <= h; ) s++
    insert(this.active, s, a),
      insert(this.activeTo, s, c),
      insert(this.activeRank, s, h),
      e && insert(e, s, this.cursor.from),
      (this.minActive = findMinIndex(this.active, this.activeTo))
  }
  next() {
    let e = this.to,
      s = this.point
    this.point = null
    let a = this.openStart < 0 ? [] : null
    for (;;) {
      let c = this.minActive
      if (
        c > -1 &&
        (this.activeTo[c] - this.cursor.from ||
          this.active[c].endSide - this.cursor.startSide) < 0
      ) {
        if (this.activeTo[c] > e) {
          ;(this.to = this.activeTo[c]), (this.endSide = this.active[c].endSide)
          break
        }
        this.removeActive(c), a && remove(a, c)
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          ;(this.to = this.cursor.from), (this.endSide = this.cursor.startSide)
          break
        } else {
          let h = this.cursor.value
          if (!h.point) this.addActive(a), this.cursor.next()
          else if (
            s &&
            this.cursor.to == this.to &&
            this.cursor.from < this.cursor.to
          )
            this.cursor.next()
          else {
            ;(this.point = h),
              (this.pointFrom = this.cursor.from),
              (this.pointRank = this.cursor.rank),
              (this.to = this.cursor.to),
              (this.endSide = h.endSide),
              this.cursor.next(),
              this.forward(this.to, this.endSide)
            break
          }
        }
      else {
        this.to = this.endSide = 1e9
        break
      }
    }
    if (a) {
      this.openStart = 0
      for (let c = a.length - 1; c >= 0 && a[c] < e; c--) this.openStart++
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active
    let s = []
    for (
      let a = this.active.length - 1;
      a >= 0 && !(this.activeRank[a] < this.pointRank);
      a--
    )
      (this.activeTo[a] > e ||
        (this.activeTo[a] == e &&
          this.active[a].endSide >= this.point.endSide)) &&
        s.push(this.active[a])
    return s.reverse()
  }
  openEnd(e) {
    let s = 0
    for (let a = this.activeTo.length - 1; a >= 0 && this.activeTo[a] > e; a--)
      s++
    return s
  }
}
function compare(o, e, s, a, c, h) {
  o.goto(e), s.goto(a)
  let d = a + c,
    g = a,
    b = a - e
  for (;;) {
    let $ = o.to + b - s.to || o.endSide - s.endSide,
      _ = $ < 0 ? o.to + b : s.to,
      j = Math.min(_, d)
    if (
      (o.point || s.point
        ? (o.point &&
            s.point &&
            (o.point == s.point || o.point.eq(s.point)) &&
            sameValues(o.activeForPoint(o.to), s.activeForPoint(s.to))) ||
          h.comparePoint(g, j, o.point, s.point)
        : j > g &&
          !sameValues(o.active, s.active) &&
          h.compareRange(g, j, o.active, s.active),
      _ > d)
    )
      break
    ;(g = _), $ <= 0 && o.next(), $ >= 0 && s.next()
  }
}
function sameValues(o, e) {
  if (o.length != e.length) return !1
  for (let s = 0; s < o.length; s++)
    if (o[s] != e[s] && !o[s].eq(e[s])) return !1
  return !0
}
function remove(o, e) {
  for (let s = e, a = o.length - 1; s < a; s++) o[s] = o[s + 1]
  o.pop()
}
function insert(o, e, s) {
  for (let a = o.length - 1; a >= e; a--) o[a + 1] = o[a]
  o[e] = s
}
function findMinIndex(o, e) {
  let s = -1,
    a = 1e9
  for (let c = 0; c < e.length; c++)
    (e[c] - a || o[c].endSide - o[s].endSide) < 0 && ((s = c), (a = e[c]))
  return s
}
function countColumn(o, e, s = o.length) {
  let a = 0
  for (let c = 0; c < s; )
    o.charCodeAt(c) == 9
      ? ((a += e - (a % e)), c++)
      : (a++, (c = findClusterBreak(o, c)))
  return a
}
function findColumn(o, e, s, a) {
  for (let c = 0, h = 0; ; ) {
    if (h >= e) return c
    if (c == o.length) break
    ;(h += o.charCodeAt(c) == 9 ? s - (h % s) : 1), (c = findClusterBreak(o, c))
  }
  return a === !0 ? -1 : o.length
}
const C = 'ͼ',
  COUNT = typeof Symbol > 'u' ? '__' + C : Symbol.for(C),
  SET =
    typeof Symbol > 'u'
      ? '__styleSet' + Math.floor(Math.random() * 1e8)
      : Symbol('styleSet'),
  top = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : {}
class StyleModule {
  constructor(e, s) {
    this.rules = []
    let { finish: a } = s || {}
    function c(d) {
      return /^@/.test(d) ? [d] : d.split(/,\s*/)
    }
    function h(d, g, b, $) {
      let _ = [],
        j = /^@(\w+)\b/.exec(d[0]),
        _e = j && j[1] == 'keyframes'
      if (j && g == null) return b.push(d[0] + ';')
      for (let et in g) {
        let tt = g[et]
        if (/&/.test(et))
          h(
            et
              .split(/,\s*/)
              .map((rt) => d.map((st) => rt.replace(/&/, st)))
              .reduce((rt, st) => rt.concat(st)),
            tt,
            b
          )
        else if (tt && typeof tt == 'object') {
          if (!j)
            throw new RangeError(
              'The value of a property (' +
                et +
                ') should be a primitive value.'
            )
          h(c(et), tt, _, _e)
        } else
          tt != null &&
            _.push(
              et
                .replace(/_.*/, '')
                .replace(/[A-Z]/g, (rt) => '-' + rt.toLowerCase()) +
                ': ' +
                tt +
                ';'
            )
      }
      ;(_.length || _e) &&
        b.push(
          (a && !j && !$ ? d.map(a) : d).join(', ') + ' {' + _.join(' ') + '}'
        )
    }
    for (let d in e) h(c(d), e[d], this.rules)
  }
  getRules() {
    return this.rules.join(`
`)
  }
  static newName() {
    let e = top[COUNT] || 1
    return (top[COUNT] = e + 1), C + e.toString(36)
  }
  static mount(e, s, a) {
    let c = e[SET],
      h = a && a.nonce
    c ? h && c.setNonce(h) : (c = new StyleSet(e, h)),
      c.mount(Array.isArray(s) ? s : [s])
  }
}
let adoptedSet = new Map()
class StyleSet {
  constructor(e, s) {
    let a = e.ownerDocument || e,
      c = a.defaultView
    if (!e.head && e.adoptedStyleSheets && c.CSSStyleSheet) {
      let h = adoptedSet.get(a)
      if (h)
        return (
          (e.adoptedStyleSheets = [h.sheet, ...e.adoptedStyleSheets]),
          (e[SET] = h)
        )
      ;(this.sheet = new c.CSSStyleSheet()),
        (e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets]),
        adoptedSet.set(a, this)
    } else {
      ;(this.styleTag = a.createElement('style')),
        s && this.styleTag.setAttribute('nonce', s)
      let h = e.head || e
      h.insertBefore(this.styleTag, h.firstChild)
    }
    ;(this.modules = []), (e[SET] = this)
  }
  mount(e) {
    let s = this.sheet,
      a = 0,
      c = 0
    for (let h = 0; h < e.length; h++) {
      let d = e[h],
        g = this.modules.indexOf(d)
      if (
        (g < c && g > -1 && (this.modules.splice(g, 1), c--, (g = -1)), g == -1)
      ) {
        if ((this.modules.splice(c++, 0, d), s))
          for (let b = 0; b < d.rules.length; b++) s.insertRule(d.rules[b], a++)
      } else {
        for (; c < g; ) a += this.modules[c++].rules.length
        ;(a += d.rules.length), c++
      }
    }
    if (!s) {
      let h = ''
      for (let d = 0; d < this.modules.length; d++)
        h +=
          this.modules[d].getRules() +
          `
`
      this.styleTag.textContent = h
    }
  }
  setNonce(e) {
    this.styleTag &&
      this.styleTag.getAttribute('nonce') != e &&
      this.styleTag.setAttribute('nonce', e)
  }
}
var base = {
    8: 'Backspace',
    9: 'Tab',
    10: 'Enter',
    12: 'NumLock',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    44: 'PrintScreen',
    45: 'Insert',
    46: 'Delete',
    59: ';',
    61: '=',
    91: 'Meta',
    92: 'Meta',
    106: '*',
    107: '+',
    108: ',',
    109: '-',
    110: '.',
    111: '/',
    144: 'NumLock',
    145: 'ScrollLock',
    160: 'Shift',
    161: 'Shift',
    162: 'Control',
    163: 'Control',
    164: 'Alt',
    165: 'Alt',
    173: '-',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: "'"
  },
  shift = {
    48: ')',
    49: '!',
    50: '@',
    51: '#',
    52: '$',
    53: '%',
    54: '^',
    55: '&',
    56: '*',
    57: '(',
    59: ':',
    61: '+',
    173: '_',
    186: ':',
    187: '+',
    188: '<',
    189: '_',
    190: '>',
    191: '?',
    192: '~',
    219: '{',
    220: '|',
    221: '}',
    222: '"'
  },
  mac = typeof navigator < 'u' && /Mac/.test(navigator.platform),
  ie$1 =
    typeof navigator < 'u' &&
    /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent)
for (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i)
for (var i = 1; i <= 24; i++) base[i + 111] = 'F' + i
for (var i = 65; i <= 90; i++)
  (base[i] = String.fromCharCode(i + 32)), (shift[i] = String.fromCharCode(i))
for (var code in base) shift.hasOwnProperty(code) || (shift[code] = base[code])
function keyName(o) {
  var e =
      (mac && o.metaKey && o.shiftKey && !o.ctrlKey && !o.altKey) ||
      (ie$1 && o.shiftKey && o.key && o.key.length == 1) ||
      o.key == 'Unidentified',
    s =
      (!e && o.key) ||
      (o.shiftKey ? shift : base)[o.keyCode] ||
      o.key ||
      'Unidentified'
  return (
    s == 'Esc' && (s = 'Escape'),
    s == 'Del' && (s = 'Delete'),
    s == 'Left' && (s = 'ArrowLeft'),
    s == 'Up' && (s = 'ArrowUp'),
    s == 'Right' && (s = 'ArrowRight'),
    s == 'Down' && (s = 'ArrowDown'),
    s
  )
}
function getSelection(o) {
  let e
  return (
    o.nodeType == 11 ? (e = o.getSelection ? o : o.ownerDocument) : (e = o),
    e.getSelection()
  )
}
function contains(o, e) {
  return e ? o == e || o.contains(e.nodeType != 1 ? e.parentNode : e) : !1
}
function deepActiveElement(o) {
  let e = o.activeElement
  for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement
  return e
}
function hasSelection(o, e) {
  if (!e.anchorNode) return !1
  try {
    return contains(o, e.anchorNode)
  } catch {
    return !1
  }
}
function clientRectsFor(o) {
  return o.nodeType == 3
    ? textRange(o, 0, o.nodeValue.length).getClientRects()
    : o.nodeType == 1
    ? o.getClientRects()
    : []
}
function isEquivalentPosition(o, e, s, a) {
  return s ? scanFor(o, e, s, a, -1) || scanFor(o, e, s, a, 1) : !1
}
function domIndex(o) {
  for (var e = 0; ; e++) if (((o = o.previousSibling), !o)) return e
}
function scanFor(o, e, s, a, c) {
  for (;;) {
    if (o == s && e == a) return !0
    if (e == (c < 0 ? 0 : maxOffset(o))) {
      if (o.nodeName == 'DIV') return !1
      let h = o.parentNode
      if (!h || h.nodeType != 1) return !1
      ;(e = domIndex(o) + (c < 0 ? 0 : 1)), (o = h)
    } else if (o.nodeType == 1) {
      if (
        ((o = o.childNodes[e + (c < 0 ? -1 : 0)]),
        o.nodeType == 1 && o.contentEditable == 'false')
      )
        return !1
      e = c < 0 ? maxOffset(o) : 0
    } else return !1
  }
}
function maxOffset(o) {
  return o.nodeType == 3 ? o.nodeValue.length : o.childNodes.length
}
function flattenRect(o, e) {
  let s = e ? o.left : o.right
  return { left: s, right: s, top: o.top, bottom: o.bottom }
}
function windowRect(o) {
  return { left: 0, right: o.innerWidth, top: 0, bottom: o.innerHeight }
}
function scrollRectIntoView(o, e, s, a, c, h, d, g) {
  let b = o.ownerDocument,
    $ = b.defaultView || window
  for (let _ = o, j = !1; _ && !j; )
    if (_.nodeType == 1) {
      let _e,
        et = _ == b.body,
        tt = 1,
        rt = 1
      if (et) _e = windowRect($)
      else {
        if (
          (/^(fixed|sticky)$/.test(getComputedStyle(_).position) && (j = !0),
          _.scrollHeight <= _.clientHeight && _.scrollWidth <= _.clientWidth)
        ) {
          _ = _.assignedSlot || _.parentNode
          continue
        }
        let it = _.getBoundingClientRect()
        ;(tt = it.width / _.offsetWidth),
          (rt = it.height / _.offsetHeight),
          (_e = {
            left: it.left,
            right: it.left + _.clientWidth * tt,
            top: it.top,
            bottom: it.top + _.clientHeight * rt
          })
      }
      let st = 0,
        nt = 0
      if (c == 'nearest')
        e.top < _e.top
          ? ((nt = -(_e.top - e.top + d)),
            s > 0 &&
              e.bottom > _e.bottom + nt &&
              (nt = e.bottom - _e.bottom + nt + d))
          : e.bottom > _e.bottom &&
            ((nt = e.bottom - _e.bottom + d),
            s < 0 && e.top - nt < _e.top && (nt = -(_e.top + nt - e.top + d)))
      else {
        let it = e.bottom - e.top,
          ot = _e.bottom - _e.top
        nt =
          (c == 'center' && it <= ot
            ? e.top + it / 2 - ot / 2
            : c == 'start' || (c == 'center' && s < 0)
            ? e.top - d
            : e.bottom - ot + d) - _e.top
      }
      if (
        (a == 'nearest'
          ? e.left < _e.left
            ? ((st = -(_e.left - e.left + h)),
              s > 0 &&
                e.right > _e.right + st &&
                (st = e.right - _e.right + st + h))
            : e.right > _e.right &&
              ((st = e.right - _e.right + h),
              s < 0 &&
                e.left < _e.left + st &&
                (st = -(_e.left + st - e.left + h)))
          : (st =
              (a == 'center'
                ? e.left + (e.right - e.left) / 2 - (_e.right - _e.left) / 2
                : (a == 'start') == g
                ? e.left - h
                : e.right - (_e.right - _e.left) + h) - _e.left),
        st || nt)
      )
        if (et) $.scrollBy(st, nt)
        else {
          let it = 0,
            ot = 0
          if (nt) {
            let lt = _.scrollTop
            ;(_.scrollTop += nt / rt), (ot = (_.scrollTop - lt) * rt)
          }
          if (st) {
            let lt = _.scrollLeft
            ;(_.scrollLeft += st / tt), (it = (_.scrollLeft - lt) * tt)
          }
          ;(e = {
            left: e.left - it,
            top: e.top - ot,
            right: e.right - it,
            bottom: e.bottom - ot
          }),
            it && Math.abs(it - st) < 1 && (a = 'nearest'),
            ot && Math.abs(ot - nt) < 1 && (c = 'nearest')
        }
      if (et) break
      _ = _.assignedSlot || _.parentNode
    } else if (_.nodeType == 11) _ = _.host
    else break
}
function scrollableParent(o) {
  let e = o.ownerDocument
  for (let s = o.parentNode; s && s != e.body; )
    if (s.nodeType == 1) {
      if (s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth)
        return s
      s = s.assignedSlot || s.parentNode
    } else if (s.nodeType == 11) s = s.host
    else break
  return null
}
class DOMSelectionState {
  constructor() {
    ;(this.anchorNode = null),
      (this.anchorOffset = 0),
      (this.focusNode = null),
      (this.focusOffset = 0)
  }
  eq(e) {
    return (
      this.anchorNode == e.anchorNode &&
      this.anchorOffset == e.anchorOffset &&
      this.focusNode == e.focusNode &&
      this.focusOffset == e.focusOffset
    )
  }
  setRange(e) {
    let { anchorNode: s, focusNode: a } = e
    this.set(
      s,
      Math.min(e.anchorOffset, s ? maxOffset(s) : 0),
      a,
      Math.min(e.focusOffset, a ? maxOffset(a) : 0)
    )
  }
  set(e, s, a, c) {
    ;(this.anchorNode = e),
      (this.anchorOffset = s),
      (this.focusNode = a),
      (this.focusOffset = c)
  }
}
let preventScrollSupported = null
function focusPreventScroll(o) {
  if (o.setActive) return o.setActive()
  if (preventScrollSupported) return o.focus(preventScrollSupported)
  let e = []
  for (
    let s = o;
    s && (e.push(s, s.scrollTop, s.scrollLeft), s != s.ownerDocument);
    s = s.parentNode
  );
  if (
    (o.focus(
      preventScrollSupported == null
        ? {
            get preventScroll() {
              return (preventScrollSupported = { preventScroll: !0 }), !0
            }
          }
        : void 0
    ),
    !preventScrollSupported)
  ) {
    preventScrollSupported = !1
    for (let s = 0; s < e.length; ) {
      let a = e[s++],
        c = e[s++],
        h = e[s++]
      a.scrollTop != c && (a.scrollTop = c),
        a.scrollLeft != h && (a.scrollLeft = h)
    }
  }
}
let scratchRange
function textRange(o, e, s = e) {
  let a = scratchRange || (scratchRange = document.createRange())
  return a.setEnd(o, s), a.setStart(o, e), a
}
function dispatchKey(o, e, s) {
  let a = { key: e, code: e, keyCode: s, which: s, cancelable: !0 },
    c = new KeyboardEvent('keydown', a)
  ;(c.synthetic = !0), o.dispatchEvent(c)
  let h = new KeyboardEvent('keyup', a)
  return (
    (h.synthetic = !0),
    o.dispatchEvent(h),
    c.defaultPrevented || h.defaultPrevented
  )
}
function getRoot(o) {
  for (; o; ) {
    if (o && (o.nodeType == 9 || (o.nodeType == 11 && o.host))) return o
    o = o.assignedSlot || o.parentNode
  }
  return null
}
function clearAttributes(o) {
  for (; o.attributes.length; ) o.removeAttributeNode(o.attributes[0])
}
function atElementStart(o, e) {
  let s = e.focusNode,
    a = e.focusOffset
  if (!s || e.anchorNode != s || e.anchorOffset != a) return !1
  for (a = Math.min(a, maxOffset(s)); ; )
    if (a) {
      if (s.nodeType != 1) return !1
      let c = s.childNodes[a - 1]
      c.contentEditable == 'false' ? a-- : ((s = c), (a = maxOffset(s)))
    } else {
      if (s == o) return !0
      ;(a = domIndex(s)), (s = s.parentNode)
    }
}
function isScrolledToBottom(o) {
  return o.scrollTop > Math.max(1, o.scrollHeight - o.clientHeight - 4)
}
class DOMPos {
  constructor(e, s, a = !0) {
    ;(this.node = e), (this.offset = s), (this.precise = a)
  }
  static before(e, s) {
    return new DOMPos(e.parentNode, domIndex(e), s)
  }
  static after(e, s) {
    return new DOMPos(e.parentNode, domIndex(e) + 1, s)
  }
}
const noChildren = []
class ContentView {
  constructor() {
    ;(this.parent = null), (this.dom = null), (this.flags = 2)
  }
  get overrideDOMText() {
    return null
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0
  }
  get posAtEnd() {
    return this.posAtStart + this.length
  }
  posBefore(e) {
    let s = this.posAtStart
    for (let a of this.children) {
      if (a == e) return s
      s += a.length + a.breakAfter
    }
    throw new RangeError('Invalid child in posBefore')
  }
  posAfter(e) {
    return this.posBefore(e) + e.length
  }
  sync(e, s) {
    if (this.flags & 2) {
      let a = this.dom,
        c = null,
        h
      for (let d of this.children) {
        if (d.flags & 7) {
          if (!d.dom && (h = c ? c.nextSibling : a.firstChild)) {
            let g = ContentView.get(h)
            ;(!g || (!g.parent && g.canReuseDOM(d))) && d.reuseDOM(h)
          }
          d.sync(e, s), (d.flags &= -8)
        }
        if (
          ((h = c ? c.nextSibling : a.firstChild),
          s && !s.written && s.node == a && h != d.dom && (s.written = !0),
          d.dom.parentNode == a)
        )
          for (; h && h != d.dom; ) h = rm$1(h)
        else a.insertBefore(d.dom, h)
        c = d.dom
      }
      for (
        h = c ? c.nextSibling : a.firstChild,
          h && s && s.node == a && (s.written = !0);
        h;

      )
        h = rm$1(h)
    } else if (this.flags & 1)
      for (let a of this.children)
        a.flags & 7 && (a.sync(e, s), (a.flags &= -8))
  }
  reuseDOM(e) {}
  localPosFromDOM(e, s) {
    let a
    if (e == this.dom) a = this.dom.childNodes[s]
    else {
      let c = maxOffset(e) == 0 ? 0 : s == 0 ? -1 : 1
      for (;;) {
        let h = e.parentNode
        if (h == this.dom) break
        c == 0 &&
          h.firstChild != h.lastChild &&
          (e == h.firstChild ? (c = -1) : (c = 1)),
          (e = h)
      }
      c < 0 ? (a = e) : (a = e.nextSibling)
    }
    if (a == this.dom.firstChild) return 0
    for (; a && !ContentView.get(a); ) a = a.nextSibling
    if (!a) return this.length
    for (let c = 0, h = 0; ; c++) {
      let d = this.children[c]
      if (d.dom == a) return h
      h += d.length + d.breakAfter
    }
  }
  domBoundsAround(e, s, a = 0) {
    let c = -1,
      h = -1,
      d = -1,
      g = -1
    for (let b = 0, $ = a, _ = a; b < this.children.length; b++) {
      let j = this.children[b],
        _e = $ + j.length
      if ($ < e && _e > s) return j.domBoundsAround(e, s, $)
      if (
        (_e >= e && c == -1 && ((c = b), (h = $)),
        $ > s && j.dom.parentNode == this.dom)
      ) {
        ;(d = b), (g = _)
        break
      }
      ;(_ = _e), ($ = _e + j.breakAfter)
    }
    return {
      from: h,
      to: g < 0 ? a + this.length : g,
      startDOM:
        (c ? this.children[c - 1].dom.nextSibling : null) ||
        this.dom.firstChild,
      endDOM: d < this.children.length && d >= 0 ? this.children[d].dom : null
    }
  }
  markDirty(e = !1) {
    ;(this.flags |= 2), this.markParentsDirty(e)
  }
  markParentsDirty(e) {
    for (let s = this.parent; s; s = s.parent) {
      if ((e && (s.flags |= 2), s.flags & 1)) return
      ;(s.flags |= 1), (e = !1)
    }
  }
  setParent(e) {
    this.parent != e &&
      ((this.parent = e), this.flags & 7 && this.markParentsDirty(!0))
  }
  setDOM(e) {
    this.dom != e &&
      (this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this))
  }
  get rootView() {
    for (let e = this; ; ) {
      let s = e.parent
      if (!s) return e
      e = s
    }
  }
  replaceChildren(e, s, a = noChildren) {
    this.markDirty()
    for (let c = e; c < s; c++) {
      let h = this.children[c]
      h.parent == this && h.destroy()
    }
    this.children.splice(e, s - e, ...a)
    for (let c = 0; c < a.length; c++) a[c].setParent(this)
  }
  ignoreMutation(e) {
    return !1
  }
  ignoreEvent(e) {
    return !1
  }
  childCursor(e = this.length) {
    return new ChildCursor(this.children, e, this.children.length)
  }
  childPos(e, s = 1) {
    return this.childCursor().findPos(e, s)
  }
  toString() {
    let e = this.constructor.name.replace('View', '')
    return (
      e +
      (this.children.length
        ? '(' + this.children.join() + ')'
        : this.length
        ? '[' + (e == 'Text' ? this.text : this.length) + ']'
        : '') +
      (this.breakAfter ? '#' : '')
    )
  }
  static get(e) {
    return e.cmView
  }
  get isEditable() {
    return !0
  }
  get isWidget() {
    return !1
  }
  get isHidden() {
    return !1
  }
  merge(e, s, a, c, h, d) {
    return !1
  }
  become(e) {
    return !1
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8)
  }
  getSide() {
    return 0
  }
  destroy() {
    this.parent = null
  }
}
ContentView.prototype.breakAfter = 0
function rm$1(o) {
  let e = o.nextSibling
  return o.parentNode.removeChild(o), e
}
class ChildCursor {
  constructor(e, s, a) {
    ;(this.children = e), (this.pos = s), (this.i = a), (this.off = 0)
  }
  findPos(e, s = 1) {
    for (;;) {
      if (
        e > this.pos ||
        (e == this.pos &&
          (s > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
      )
        return (this.off = e - this.pos), this
      let a = this.children[--this.i]
      this.pos -= a.length + a.breakAfter
    }
  }
}
function replaceRange(o, e, s, a, c, h, d, g, b) {
  let { children: $ } = o,
    _ = $.length ? $[e] : null,
    j = h.length ? h[h.length - 1] : null,
    _e = j ? j.breakAfter : d
  if (
    !(
      e == a &&
      _ &&
      !d &&
      !_e &&
      h.length < 2 &&
      _.merge(s, c, h.length ? j : null, s == 0, g, b)
    )
  ) {
    if (a < $.length) {
      let et = $[a]
      et && c < et.length
        ? (e == a && ((et = et.split(c)), (c = 0)),
          !_e && j && et.merge(0, c, j, !0, 0, b)
            ? (h[h.length - 1] = et)
            : (c && et.merge(0, c, null, !1, 0, b), h.push(et)))
        : et != null && et.breakAfter && (j ? (j.breakAfter = 1) : (d = 1)),
        a++
    }
    for (
      _ &&
      ((_.breakAfter = d),
      s > 0 &&
        (!d && h.length && _.merge(s, _.length, h[0], !1, g, 0)
          ? (_.breakAfter = h.shift().breakAfter)
          : (s < _.length ||
              (_.children.length &&
                _.children[_.children.length - 1].length == 0)) &&
            _.merge(s, _.length, null, !1, g, 0),
        e++));
      e < a && h.length;

    )
      if ($[a - 1].become(h[h.length - 1])) a--, h.pop(), (b = h.length ? 0 : g)
      else if ($[e].become(h[0])) e++, h.shift(), (g = h.length ? 0 : b)
      else break
    !h.length &&
      e &&
      a < $.length &&
      !$[e - 1].breakAfter &&
      $[a].merge(0, 0, $[e - 1], !1, g, b) &&
      e--,
      (e < a || h.length) && o.replaceChildren(e, a, h)
  }
}
function mergeChildrenInto(o, e, s, a, c, h) {
  let d = o.childCursor(),
    { i: g, off: b } = d.findPos(s, 1),
    { i: $, off: _ } = d.findPos(e, -1),
    j = e - s
  for (let _e of a) j += _e.length
  ;(o.length += j), replaceRange(o, $, _, g, b, a, 0, c, h)
}
let nav =
    typeof navigator < 'u'
      ? navigator
      : { userAgent: '', vendor: '', platform: '' },
  doc = typeof document < 'u' ? document : { documentElement: { style: {} } }
const ie_edge = /Edge\/(\d+)/.exec(nav.userAgent),
  ie_upto10 = /MSIE \d/.test(nav.userAgent),
  ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent),
  ie = !!(ie_upto10 || ie_11up || ie_edge),
  gecko = !ie && /gecko\/(\d+)/i.test(nav.userAgent),
  chrome = !ie && /Chrome\/(\d+)/.exec(nav.userAgent),
  webkit = 'webkitFontSmoothing' in doc.documentElement.style,
  safari = !ie && /Apple Computer/.test(nav.vendor),
  ios = safari && (/Mobile\/\w+/.test(nav.userAgent) || nav.maxTouchPoints > 2)
var browser = {
  mac: ios || /Mac/.test(nav.platform),
  windows: /Win/.test(nav.platform),
  linux: /Linux|X11/.test(nav.platform),
  ie,
  ie_version: ie_upto10
    ? doc.documentMode || 6
    : ie_11up
    ? +ie_11up[1]
    : ie_edge
    ? +ie_edge[1]
    : 0,
  gecko,
  gecko_version: gecko
    ? +(/Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1]
    : 0,
  chrome: !!chrome,
  chrome_version: chrome ? +chrome[1] : 0,
  ios,
  android: /Android\b/.test(nav.userAgent),
  webkit,
  safari,
  webkit_version: webkit
    ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
    : 0,
  tabSize:
    doc.documentElement.style.tabSize != null ? 'tab-size' : '-moz-tab-size'
}
const MaxJoinLen = 256
class TextView extends ContentView {
  constructor(e) {
    super(), (this.text = e)
  }
  get length() {
    return this.text.length
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text))
  }
  sync(e, s) {
    this.dom || this.createDOM(),
      this.dom.nodeValue != this.text &&
        (s && s.node == this.dom && (s.written = !0),
        (this.dom.nodeValue = this.text))
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e)
  }
  merge(e, s, a) {
    return this.flags & 8 ||
      (a &&
        (!(a instanceof TextView) ||
          this.length - (s - e) + a.length > MaxJoinLen ||
          a.flags & 8))
      ? !1
      : ((this.text =
          this.text.slice(0, e) + (a ? a.text : '') + this.text.slice(s)),
        this.markDirty(),
        !0)
  }
  split(e) {
    let s = new TextView(this.text.slice(e))
    return (
      (this.text = this.text.slice(0, e)),
      this.markDirty(),
      (s.flags |= this.flags & 8),
      s
    )
  }
  localPosFromDOM(e, s) {
    return e == this.dom ? s : s ? this.text.length : 0
  }
  domAtPos(e) {
    return new DOMPos(this.dom, e)
  }
  domBoundsAround(e, s, a) {
    return {
      from: a,
      to: a + this.length,
      startDOM: this.dom,
      endDOM: this.dom.nextSibling
    }
  }
  coordsAt(e, s) {
    return textCoords(this.dom, e, s)
  }
}
class MarkView extends ContentView {
  constructor(e, s = [], a = 0) {
    super(), (this.mark = e), (this.children = s), (this.length = a)
    for (let c of s) c.setParent(this)
  }
  setAttrs(e) {
    if (
      (clearAttributes(e),
      this.mark.class && (e.className = this.mark.class),
      this.mark.attrs)
    )
      for (let s in this.mark.attrs) e.setAttribute(s, this.mark.attrs[s])
    return e
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8)
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() &&
      (this.setDOM(e), (this.flags |= 6))
  }
  sync(e, s) {
    this.dom
      ? this.flags & 4 && this.setAttrs(this.dom)
      : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
      super.sync(e, s)
  }
  merge(e, s, a, c, h, d) {
    return a &&
      (!(a instanceof MarkView && a.mark.eq(this.mark)) ||
        (e && h <= 0) ||
        (s < this.length && d <= 0))
      ? !1
      : (mergeChildrenInto(this, e, s, a ? a.children : [], h - 1, d - 1),
        this.markDirty(),
        !0)
  }
  split(e) {
    let s = [],
      a = 0,
      c = -1,
      h = 0
    for (let g of this.children) {
      let b = a + g.length
      b > e && s.push(a < e ? g.split(e - a) : g),
        c < 0 && a >= e && (c = h),
        (a = b),
        h++
    }
    let d = this.length - e
    return (
      (this.length = e),
      c > -1 && ((this.children.length = c), this.markDirty()),
      new MarkView(this.mark, s, d)
    )
  }
  domAtPos(e) {
    return inlineDOMAtPos(this, e)
  }
  coordsAt(e, s) {
    return coordsInChildren(this, e, s)
  }
}
function textCoords(o, e, s) {
  let a = o.nodeValue.length
  e > a && (e = a)
  let c = e,
    h = e,
    d = 0
  ;(e == 0 && s < 0) || (e == a && s >= 0)
    ? browser.chrome ||
      browser.gecko ||
      (e ? (c--, (d = 1)) : h < a && (h++, (d = -1)))
    : s < 0
    ? c--
    : h < a && h++
  let g = textRange(o, c, h).getClientRects()
  if (!g.length) return null
  let b = g[(d ? d < 0 : s >= 0) ? 0 : g.length - 1]
  return (
    browser.safari &&
      !d &&
      b.width == 0 &&
      (b = Array.prototype.find.call(g, ($) => $.width) || b),
    d ? flattenRect(b, d < 0) : b || null
  )
}
class WidgetView extends ContentView {
  static create(e, s, a) {
    return new WidgetView(e, s, a)
  }
  constructor(e, s, a) {
    super(),
      (this.widget = e),
      (this.length = s),
      (this.side = a),
      (this.prevWidget = null)
  }
  split(e) {
    let s = WidgetView.create(this.widget, this.length - e, this.side)
    return (this.length -= e), s
  }
  sync(e) {
    ;(!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      (this.dom.contentEditable = 'false'))
  }
  getSide() {
    return this.side
  }
  merge(e, s, a, c, h, d) {
    return a &&
      (!(a instanceof WidgetView) ||
        !this.widget.compare(a.widget) ||
        (e > 0 && h <= 0) ||
        (s < this.length && d <= 0))
      ? !1
      : ((this.length = e + (a ? a.length : 0) + (this.length - s)), !0)
  }
  become(e) {
    return e instanceof WidgetView &&
      e.side == this.side &&
      this.widget.constructor == e.widget.constructor
      ? (this.widget.compare(e.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        !0)
      : !1
  }
  ignoreMutation() {
    return !0
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e)
  }
  get overrideDOMText() {
    if (this.length == 0) return Text.empty
    let e = this
    for (; e.parent; ) e = e.parent
    let { view: s } = e,
      a = s && s.state.doc,
      c = this.posAtStart
    return a ? a.slice(c, c + this.length) : Text.empty
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0)
      ? DOMPos.before(this.dom)
      : DOMPos.after(this.dom, e == this.length)
  }
  domBoundsAround() {
    return null
  }
  coordsAt(e, s) {
    let a = this.widget.coordsAt(this.dom, e, s)
    if (a) return a
    let c = this.dom.getClientRects(),
      h = null
    if (!c.length) return null
    let d = this.side ? this.side < 0 : e > 0
    for (
      let g = d ? c.length - 1 : 0;
      (h = c[g]), !(e > 0 ? g == 0 : g == c.length - 1 || h.top < h.bottom);
      g += d ? -1 : 1
    );
    return flattenRect(h, !d)
  }
  get isEditable() {
    return !1
  }
  get isWidget() {
    return !0
  }
  get isHidden() {
    return this.widget.isHidden
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom)
  }
}
class WidgetBufferView extends ContentView {
  constructor(e) {
    super(), (this.side = e)
  }
  get length() {
    return 0
  }
  merge() {
    return !1
  }
  become(e) {
    return e instanceof WidgetBufferView && e.side == this.side
  }
  split() {
    return new WidgetBufferView(this.side)
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement('img')
      ;(e.className = 'cm-widgetBuffer'),
        e.setAttribute('aria-hidden', 'true'),
        this.setDOM(e)
    }
  }
  getSide() {
    return this.side
  }
  domAtPos(e) {
    return this.side > 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom)
  }
  localPosFromDOM() {
    return 0
  }
  domBoundsAround() {
    return null
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect()
  }
  get overrideDOMText() {
    return Text.empty
  }
  get isHidden() {
    return !0
  }
}
TextView.prototype.children =
  WidgetView.prototype.children =
  WidgetBufferView.prototype.children =
    noChildren
function inlineDOMAtPos(o, e) {
  let s = o.dom,
    { children: a } = o,
    c = 0
  for (let h = 0; c < a.length; c++) {
    let d = a[c],
      g = h + d.length
    if (!(g == h && d.getSide() <= 0)) {
      if (e > h && e < g && d.dom.parentNode == s) return d.domAtPos(e - h)
      if (e <= h) break
      h = g
    }
  }
  for (let h = c; h > 0; h--) {
    let d = a[h - 1]
    if (d.dom.parentNode == s) return d.domAtPos(d.length)
  }
  for (let h = c; h < a.length; h++) {
    let d = a[h]
    if (d.dom.parentNode == s) return d.domAtPos(0)
  }
  return new DOMPos(s, 0)
}
function joinInlineInto(o, e, s) {
  let a,
    { children: c } = o
  s > 0 &&
  e instanceof MarkView &&
  c.length &&
  (a = c[c.length - 1]) instanceof MarkView &&
  a.mark.eq(e.mark)
    ? joinInlineInto(a, e.children[0], s - 1)
    : (c.push(e), e.setParent(o)),
    (o.length += e.length)
}
function coordsInChildren(o, e, s) {
  let a = null,
    c = -1,
    h = null,
    d = -1
  function g($, _) {
    for (let j = 0, _e = 0; j < $.children.length && _e <= _; j++) {
      let et = $.children[j],
        tt = _e + et.length
      tt >= _ &&
        (et.children.length
          ? g(et, _ - _e)
          : (!h || (h.isHidden && s > 0)) &&
            (tt > _ || (_e == tt && et.getSide() > 0))
          ? ((h = et), (d = _ - _e))
          : (_e < _ || (_e == tt && et.getSide() < 0 && !et.isHidden)) &&
            ((a = et), (c = _ - _e))),
        (_e = tt)
    }
  }
  g(o, e)
  let b = (s < 0 ? a : h) || a || h
  return b ? b.coordsAt(Math.max(0, b == a ? c : d), s) : fallbackRect(o)
}
function fallbackRect(o) {
  let e = o.dom.lastChild
  if (!e) return o.dom.getBoundingClientRect()
  let s = clientRectsFor(e)
  return s[s.length - 1] || null
}
function combineAttrs(o, e) {
  for (let s in o)
    s == 'class' && e.class
      ? (e.class += ' ' + o.class)
      : s == 'style' && e.style
      ? (e.style += ';' + o.style)
      : (e[s] = o[s])
  return e
}
const noAttrs = Object.create(null)
function attrsEq(o, e, s) {
  if (o == e) return !0
  o || (o = noAttrs), e || (e = noAttrs)
  let a = Object.keys(o),
    c = Object.keys(e)
  if (
    a.length - (s && a.indexOf(s) > -1 ? 1 : 0) !=
    c.length - (s && c.indexOf(s) > -1 ? 1 : 0)
  )
    return !1
  for (let h of a)
    if (h != s && (c.indexOf(h) == -1 || o[h] !== e[h])) return !1
  return !0
}
function updateAttrs(o, e, s) {
  let a = !1
  if (e)
    for (let c in e)
      (s && c in s) ||
        ((a = !0), c == 'style' ? (o.style.cssText = '') : o.removeAttribute(c))
  if (s)
    for (let c in s)
      (e && e[c] == s[c]) ||
        ((a = !0),
        c == 'style' ? (o.style.cssText = s[c]) : o.setAttribute(c, s[c]))
  return a
}
function getAttrs(o) {
  let e = Object.create(null)
  for (let s = 0; s < o.attributes.length; s++) {
    let a = o.attributes[s]
    e[a.name] = a.value
  }
  return e
}
class LineView extends ContentView {
  constructor() {
    super(...arguments),
      (this.children = []),
      (this.length = 0),
      (this.prevAttrs = void 0),
      (this.attrs = null),
      (this.breakAfter = 0)
  }
  merge(e, s, a, c, h, d) {
    if (a) {
      if (!(a instanceof LineView)) return !1
      this.dom || a.transferDOM(this)
    }
    return (
      c && this.setDeco(a ? a.attrs : null),
      mergeChildrenInto(this, e, s, a ? a.children : [], h, d),
      !0
    )
  }
  split(e) {
    let s = new LineView()
    if (((s.breakAfter = this.breakAfter), this.length == 0)) return s
    let { i: a, off: c } = this.childPos(e)
    c &&
      (s.append(this.children[a].split(c), 0),
      this.children[a].merge(c, this.children[a].length, null, !1, 0, 0),
      a++)
    for (let h = a; h < this.children.length; h++) s.append(this.children[h], 0)
    for (; a > 0 && this.children[a - 1].length == 0; )
      this.children[--a].destroy()
    return (this.children.length = a), this.markDirty(), (this.length = e), s
  }
  transferDOM(e) {
    this.dom &&
      (this.markDirty(),
      e.setDOM(this.dom),
      (e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
      (this.prevAttrs = void 0),
      (this.dom = null))
  }
  setDeco(e) {
    attrsEq(this.attrs, e) ||
      (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
      (this.attrs = e))
  }
  append(e, s) {
    joinInlineInto(this, e, s)
  }
  addLineDeco(e) {
    let s = e.spec.attributes,
      a = e.spec.class
    s && (this.attrs = combineAttrs(s, this.attrs || {})),
      a && (this.attrs = combineAttrs({ class: a }, this.attrs || {}))
  }
  domAtPos(e) {
    return inlineDOMAtPos(this, e)
  }
  reuseDOM(e) {
    e.nodeName == 'DIV' && (this.setDOM(e), (this.flags |= 6))
  }
  sync(e, s) {
    var a
    this.dom
      ? this.flags & 4 &&
        (clearAttributes(this.dom),
        (this.dom.className = 'cm-line'),
        (this.prevAttrs = this.attrs ? null : void 0))
      : (this.setDOM(document.createElement('div')),
        (this.dom.className = 'cm-line'),
        (this.prevAttrs = this.attrs ? null : void 0)),
      this.prevAttrs !== void 0 &&
        (updateAttrs(this.dom, this.prevAttrs, this.attrs),
        this.dom.classList.add('cm-line'),
        (this.prevAttrs = void 0)),
      super.sync(e, s)
    let c = this.dom.lastChild
    for (; c && ContentView.get(c) instanceof MarkView; ) c = c.lastChild
    if (
      !c ||
      !this.length ||
      (c.nodeName != 'BR' &&
        ((a = ContentView.get(c)) === null || a === void 0
          ? void 0
          : a.isEditable) == !1 &&
        (!browser.ios || !this.children.some((h) => h instanceof TextView)))
    ) {
      let h = document.createElement('BR')
      ;(h.cmIgnore = !0), this.dom.appendChild(h)
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null
    let e = 0,
      s
    for (let a of this.children) {
      if (!(a instanceof TextView) || /[^ -~]/.test(a.text)) return null
      let c = clientRectsFor(a.dom)
      if (c.length != 1) return null
      ;(e += c[0].width), (s = c[0].height)
    }
    return e
      ? {
          lineHeight: this.dom.getBoundingClientRect().height,
          charWidth: e / this.length,
          textHeight: s
        }
      : null
  }
  coordsAt(e, s) {
    let a = coordsInChildren(this, e, s)
    if (!this.children.length && a && this.parent) {
      let { heightOracle: c } = this.parent.view.viewState,
        h = a.bottom - a.top
      if (Math.abs(h - c.lineHeight) < 2 && c.textHeight < h) {
        let d = (h - c.textHeight) / 2
        return {
          top: a.top + d,
          bottom: a.bottom - d,
          left: a.left,
          right: a.left
        }
      }
    }
    return a
  }
  become(e) {
    return !1
  }
  covers() {
    return !0
  }
  static find(e, s) {
    for (let a = 0, c = 0; a < e.children.length; a++) {
      let h = e.children[a],
        d = c + h.length
      if (d >= s) {
        if (h instanceof LineView) return h
        if (d > s) break
      }
      c = d + h.breakAfter
    }
    return null
  }
}
class BlockWidgetView extends ContentView {
  constructor(e, s, a) {
    super(),
      (this.widget = e),
      (this.length = s),
      (this.deco = a),
      (this.breakAfter = 0),
      (this.prevWidget = null)
  }
  merge(e, s, a, c, h, d) {
    return a &&
      (!(a instanceof BlockWidgetView) ||
        !this.widget.compare(a.widget) ||
        (e > 0 && h <= 0) ||
        (s < this.length && d <= 0))
      ? !1
      : ((this.length = e + (a ? a.length : 0) + (this.length - s)), !0)
  }
  domAtPos(e) {
    return e == 0
      ? DOMPos.before(this.dom)
      : DOMPos.after(this.dom, e == this.length)
  }
  split(e) {
    let s = this.length - e
    this.length = e
    let a = new BlockWidgetView(this.widget, s, this.deco)
    return (a.breakAfter = this.breakAfter), a
  }
  get children() {
    return noChildren
  }
  sync(e) {
    ;(!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      (this.dom.contentEditable = 'false'))
  }
  get overrideDOMText() {
    return this.parent
      ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
      : Text.empty
  }
  domBoundsAround() {
    return null
  }
  become(e) {
    return e instanceof BlockWidgetView &&
      e.widget.constructor == this.widget.constructor
      ? (e.widget.compare(this.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        (this.deco = e.deco),
        (this.breakAfter = e.breakAfter),
        !0)
      : !1
  }
  ignoreMutation() {
    return !0
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e)
  }
  get isEditable() {
    return !1
  }
  get isWidget() {
    return !0
  }
  coordsAt(e, s) {
    return this.widget.coordsAt(this.dom, e, s)
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom)
  }
  covers(e) {
    let { startSide: s, endSide: a } = this.deco
    return s == a ? !1 : e < 0 ? s < 0 : a > 0
  }
}
class WidgetType {
  eq(e) {
    return !1
  }
  updateDOM(e, s) {
    return !1
  }
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e))
  }
  get estimatedHeight() {
    return -1
  }
  get lineBreaks() {
    return 0
  }
  ignoreEvent(e) {
    return !0
  }
  coordsAt(e, s, a) {
    return null
  }
  get isHidden() {
    return !1
  }
  destroy(e) {}
}
var BlockType = (function (o) {
  return (
    (o[(o.Text = 0)] = 'Text'),
    (o[(o.WidgetBefore = 1)] = 'WidgetBefore'),
    (o[(o.WidgetAfter = 2)] = 'WidgetAfter'),
    (o[(o.WidgetRange = 3)] = 'WidgetRange'),
    o
  )
})(BlockType || (BlockType = {}))
class Decoration extends RangeValue {
  constructor(e, s, a, c) {
    super(),
      (this.startSide = e),
      (this.endSide = s),
      (this.widget = a),
      (this.spec = c)
  }
  get heightRelevant() {
    return !1
  }
  static mark(e) {
    return new MarkDecoration(e)
  }
  static widget(e) {
    let s = Math.max(-1e4, Math.min(1e4, e.side || 0)),
      a = !!e.block
    return (
      (s += a && !e.inlineOrder ? (s > 0 ? 3e8 : -4e8) : s > 0 ? 1e8 : -1e8),
      new PointDecoration(e, s, s, a, e.widget || null, !1)
    )
  }
  static replace(e) {
    let s = !!e.block,
      a,
      c
    if (e.isBlockGap) (a = -5e8), (c = 4e8)
    else {
      let { start: h, end: d } = getInclusive(e, s)
      ;(a = (h ? (s ? -3e8 : -1) : 5e8) - 1),
        (c = (d ? (s ? 2e8 : 1) : -6e8) + 1)
    }
    return new PointDecoration(e, a, c, s, e.widget || null, !0)
  }
  static line(e) {
    return new LineDecoration(e)
  }
  static set(e, s = !1) {
    return RangeSet.of(e, s)
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1
  }
}
Decoration.none = RangeSet.empty
class MarkDecoration extends Decoration {
  constructor(e) {
    let { start: s, end: a } = getInclusive(e)
    super(s ? -1 : 5e8, a ? 1 : -6e8, null, e),
      (this.tagName = e.tagName || 'span'),
      (this.class = e.class || ''),
      (this.attrs = e.attributes || null)
  }
  eq(e) {
    var s, a
    return (
      this == e ||
      (e instanceof MarkDecoration &&
        this.tagName == e.tagName &&
        (this.class ||
          ((s = this.attrs) === null || s === void 0 ? void 0 : s.class)) ==
          (e.class ||
            ((a = e.attrs) === null || a === void 0 ? void 0 : a.class)) &&
        attrsEq(this.attrs, e.attrs, 'class'))
    )
  }
  range(e, s = e) {
    if (e >= s) throw new RangeError('Mark decorations may not be empty')
    return super.range(e, s)
  }
}
MarkDecoration.prototype.point = !1
class LineDecoration extends Decoration {
  constructor(e) {
    super(-2e8, -2e8, null, e)
  }
  eq(e) {
    return (
      e instanceof LineDecoration &&
      this.spec.class == e.spec.class &&
      attrsEq(this.spec.attributes, e.spec.attributes)
    )
  }
  range(e, s = e) {
    if (s != e)
      throw new RangeError('Line decoration ranges must be zero-length')
    return super.range(e, s)
  }
}
LineDecoration.prototype.mapMode = MapMode.TrackBefore
LineDecoration.prototype.point = !0
class PointDecoration extends Decoration {
  constructor(e, s, a, c, h, d) {
    super(s, a, h, e),
      (this.block = c),
      (this.isReplace = d),
      (this.mapMode = c
        ? s <= 0
          ? MapMode.TrackBefore
          : MapMode.TrackAfter
        : MapMode.TrackDel)
  }
  get type() {
    return this.startSide != this.endSide
      ? BlockType.WidgetRange
      : this.startSide <= 0
      ? BlockType.WidgetBefore
      : BlockType.WidgetAfter
  }
  get heightRelevant() {
    return (
      this.block ||
      (!!this.widget &&
        (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0))
    )
  }
  eq(e) {
    return (
      e instanceof PointDecoration &&
      widgetsEq(this.widget, e.widget) &&
      this.block == e.block &&
      this.startSide == e.startSide &&
      this.endSide == e.endSide
    )
  }
  range(e, s = e) {
    if (
      this.isReplace &&
      (e > s || (e == s && this.startSide > 0 && this.endSide <= 0))
    )
      throw new RangeError('Invalid range for replacement decoration')
    if (!this.isReplace && s != e)
      throw new RangeError(
        'Widget decorations can only have zero-length ranges'
      )
    return super.range(e, s)
  }
}
PointDecoration.prototype.point = !0
function getInclusive(o, e = !1) {
  let { inclusiveStart: s, inclusiveEnd: a } = o
  return (
    s == null && (s = o.inclusive),
    a == null && (a = o.inclusive),
    { start: s ?? e, end: a ?? e }
  )
}
function widgetsEq(o, e) {
  return o == e || !!(o && e && o.compare(e))
}
function addRange(o, e, s, a = 0) {
  let c = s.length - 1
  c >= 0 && s[c] + a >= o ? (s[c] = Math.max(s[c], e)) : s.push(o, e)
}
class ContentBuilder {
  constructor(e, s, a, c) {
    ;(this.doc = e),
      (this.pos = s),
      (this.end = a),
      (this.disallowBlockEffectsFor = c),
      (this.content = []),
      (this.curLine = null),
      (this.breakAtStart = 0),
      (this.pendingBuffer = 0),
      (this.bufferMarks = []),
      (this.atCursorPos = !0),
      (this.openStart = -1),
      (this.openEnd = -1),
      (this.text = ''),
      (this.textOff = 0),
      (this.cursor = e.iter()),
      (this.skip = s)
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos
    let e = this.content[this.content.length - 1]
    return !(
      e.breakAfter ||
      (e instanceof BlockWidgetView && e.deco.endSide < 0)
    )
  }
  getLine() {
    return (
      this.curLine ||
        (this.content.push((this.curLine = new LineView())),
        (this.atCursorPos = !0)),
      this.curLine
    )
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer &&
      (this.curLine.append(wrapMarks(new WidgetBufferView(-1), e), e.length),
      (this.pendingBuffer = 0))
  }
  addBlockWidget(e) {
    this.flushBuffer(), (this.curLine = null), this.content.push(e)
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length
      ? this.flushBuffer()
      : (this.pendingBuffer = 0),
      !e && !this.posCovered() && this.getLine()
  }
  buildText(e, s, a) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: h, lineBreak: d, done: g } = this.cursor.next(this.skip)
        if (((this.skip = 0), g))
          throw new Error('Ran out of text content when drawing inline views')
        if (d) {
          this.posCovered() || this.getLine(),
            this.content.length
              ? (this.content[this.content.length - 1].breakAfter = 1)
              : (this.breakAtStart = 1),
            this.flushBuffer(),
            (this.curLine = null),
            (this.atCursorPos = !0),
            e--
          continue
        } else (this.text = h), (this.textOff = 0)
      }
      let c = Math.min(this.text.length - this.textOff, e, 512)
      this.flushBuffer(s.slice(s.length - a)),
        this.getLine().append(
          wrapMarks(
            new TextView(this.text.slice(this.textOff, this.textOff + c)),
            s
          ),
          a
        ),
        (this.atCursorPos = !0),
        (this.textOff += c),
        (e -= c),
        (a = 0)
    }
  }
  span(e, s, a, c) {
    this.buildText(s - e, a, c),
      (this.pos = s),
      this.openStart < 0 && (this.openStart = c)
  }
  point(e, s, a, c, h, d) {
    if (this.disallowBlockEffectsFor[d] && a instanceof PointDecoration) {
      if (a.block)
        throw new RangeError(
          'Block decorations may not be specified via plugins'
        )
      if (s > this.doc.lineAt(this.pos).to)
        throw new RangeError(
          'Decorations that replace line breaks may not be specified via plugins'
        )
    }
    let g = s - e
    if (a instanceof PointDecoration)
      if (a.block)
        a.startSide > 0 && !this.posCovered() && this.getLine(),
          this.addBlockWidget(
            new BlockWidgetView(a.widget || new NullWidget('div'), g, a)
          )
      else {
        let b = WidgetView.create(
            a.widget || new NullWidget('span'),
            g,
            g ? 0 : a.startSide
          ),
          $ =
            this.atCursorPos &&
            !b.isEditable &&
            h <= c.length &&
            (e < s || a.startSide > 0),
          _ = !b.isEditable && (e < s || h > c.length || a.startSide <= 0),
          j = this.getLine()
        this.pendingBuffer == 2 &&
          !$ &&
          !b.isEditable &&
          (this.pendingBuffer = 0),
          this.flushBuffer(c),
          $ &&
            (j.append(wrapMarks(new WidgetBufferView(1), c), h),
            (h = c.length + Math.max(0, h - c.length))),
          j.append(wrapMarks(b, c), h),
          (this.atCursorPos = _),
          (this.pendingBuffer = _ ? (e < s || h > c.length ? 1 : 2) : 0),
          this.pendingBuffer && (this.bufferMarks = c.slice())
      }
    else
      this.doc.lineAt(this.pos).from == this.pos &&
        this.getLine().addLineDeco(a)
    g &&
      (this.textOff + g <= this.text.length
        ? (this.textOff += g)
        : ((this.skip += g - (this.text.length - this.textOff)),
          (this.text = ''),
          (this.textOff = 0)),
      (this.pos = s)),
      this.openStart < 0 && (this.openStart = h)
  }
  static build(e, s, a, c, h) {
    let d = new ContentBuilder(e, s, a, h)
    return (
      (d.openEnd = RangeSet.spans(c, s, a, d)),
      d.openStart < 0 && (d.openStart = d.openEnd),
      d.finish(d.openEnd),
      d
    )
  }
}
function wrapMarks(o, e) {
  for (let s of e) o = new MarkView(s, [o], o.length)
  return o
}
class NullWidget extends WidgetType {
  constructor(e) {
    super(), (this.tag = e)
  }
  eq(e) {
    return e.tag == this.tag
  }
  toDOM() {
    return document.createElement(this.tag)
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag
  }
  get isHidden() {
    return !0
  }
}
const clickAddsSelectionRange = Facet.define(),
  dragMovesSelection$1 = Facet.define(),
  mouseSelectionStyle = Facet.define(),
  exceptionSink = Facet.define(),
  updateListener = Facet.define(),
  inputHandler$1 = Facet.define(),
  focusChangeEffect = Facet.define(),
  perLineTextDirection = Facet.define({ combine: (o) => o.some((e) => e) }),
  nativeSelectionHidden = Facet.define({ combine: (o) => o.some((e) => e) })
class ScrollTarget {
  constructor(e, s = 'nearest', a = 'nearest', c = 5, h = 5) {
    ;(this.range = e),
      (this.y = s),
      (this.x = a),
      (this.yMargin = c),
      (this.xMargin = h)
  }
  map(e) {
    return e.empty
      ? this
      : new ScrollTarget(
          this.range.map(e),
          this.y,
          this.x,
          this.yMargin,
          this.xMargin
        )
  }
}
const scrollIntoView$1 = StateEffect.define({ map: (o, e) => o.map(e) })
function logException(o, e, s) {
  let a = o.facet(exceptionSink)
  a.length
    ? a[0](e)
    : window.onerror
    ? window.onerror(String(e), s, void 0, void 0, e)
    : s
    ? console.error(s + ':', e)
    : console.error(e)
}
const editable = Facet.define({ combine: (o) => (o.length ? o[0] : !0) })
let nextPluginID = 0
const viewPlugin = Facet.define()
class ViewPlugin {
  constructor(e, s, a, c, h) {
    ;(this.id = e),
      (this.create = s),
      (this.domEventHandlers = a),
      (this.domEventObservers = c),
      (this.extension = h(this))
  }
  static define(e, s) {
    const {
      eventHandlers: a,
      eventObservers: c,
      provide: h,
      decorations: d
    } = s || {}
    return new ViewPlugin(nextPluginID++, e, a, c, (g) => {
      let b = [viewPlugin.of(g)]
      return (
        d &&
          b.push(
            decorations.of(($) => {
              let _ = $.plugin(g)
              return _ ? d(_) : Decoration.none
            })
          ),
        h && b.push(h(g)),
        b
      )
    })
  }
  static fromClass(e, s) {
    return ViewPlugin.define((a) => new e(a), s)
  }
}
class PluginInstance {
  constructor(e) {
    ;(this.spec = e), (this.mustUpdate = null), (this.value = null)
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let s = this.mustUpdate
        if (((this.mustUpdate = null), this.value.update))
          try {
            this.value.update(s)
          } catch (a) {
            if (
              (logException(s.state, a, 'CodeMirror plugin crashed'),
              this.value.destroy)
            )
              try {
                this.value.destroy()
              } catch {}
            this.deactivate()
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e)
      } catch (s) {
        logException(e.state, s, 'CodeMirror plugin crashed'), this.deactivate()
      }
    return this
  }
  destroy(e) {
    var s
    if (!((s = this.value) === null || s === void 0) && s.destroy)
      try {
        this.value.destroy()
      } catch (a) {
        logException(e.state, a, 'CodeMirror plugin crashed')
      }
  }
  deactivate() {
    this.spec = this.value = null
  }
}
const editorAttributes = Facet.define(),
  contentAttributes = Facet.define(),
  decorations = Facet.define(),
  atomicRanges = Facet.define(),
  bidiIsolatedRanges = Facet.define()
function getIsolatedRanges(o, e, s) {
  let a = o.state.facet(bidiIsolatedRanges)
  if (!a.length) return a
  let c = a.map((d) => (d instanceof Function ? d(o) : d)),
    h = []
  return (
    RangeSet.spans(c, e, s, {
      point() {},
      span(d, g, b, $) {
        let _ = h
        for (let j = b.length - 1; j >= 0; j--, $--) {
          let _e = b[j].spec.bidiIsolate,
            et
          if (_e != null)
            if (
              $ > 0 &&
              _.length &&
              (et = _[_.length - 1]).to == d &&
              et.direction == _e
            )
              (et.to = g), (_ = et.inner)
            else {
              let tt = { from: d, to: g, direction: _e, inner: [] }
              _.push(tt), (_ = tt.inner)
            }
        }
      }
    }),
    h
  )
}
const scrollMargins = Facet.define()
function getScrollMargins(o) {
  let e = 0,
    s = 0,
    a = 0,
    c = 0
  for (let h of o.state.facet(scrollMargins)) {
    let d = h(o)
    d &&
      (d.left != null && (e = Math.max(e, d.left)),
      d.right != null && (s = Math.max(s, d.right)),
      d.top != null && (a = Math.max(a, d.top)),
      d.bottom != null && (c = Math.max(c, d.bottom)))
  }
  return { left: e, right: s, top: a, bottom: c }
}
const styleModule = Facet.define()
class ChangedRange {
  constructor(e, s, a, c) {
    ;(this.fromA = e), (this.toA = s), (this.fromB = a), (this.toB = c)
  }
  join(e) {
    return new ChangedRange(
      Math.min(this.fromA, e.fromA),
      Math.max(this.toA, e.toA),
      Math.min(this.fromB, e.fromB),
      Math.max(this.toB, e.toB)
    )
  }
  addToSet(e) {
    let s = e.length,
      a = this
    for (; s > 0; s--) {
      let c = e[s - 1]
      if (!(c.fromA > a.toA)) {
        if (c.toA < a.fromA) break
        ;(a = a.join(c)), e.splice(s - 1, 1)
      }
    }
    return e.splice(s, 0, a), e
  }
  static extendWithRanges(e, s) {
    if (s.length == 0) return e
    let a = []
    for (let c = 0, h = 0, d = 0, g = 0; ; c++) {
      let b = c == e.length ? null : e[c],
        $ = d - g,
        _ = b ? b.fromB : 1e9
      for (; h < s.length && s[h] < _; ) {
        let j = s[h],
          _e = s[h + 1],
          et = Math.max(g, j),
          tt = Math.min(_, _e)
        if (
          (et <= tt && new ChangedRange(et + $, tt + $, et, tt).addToSet(a),
          _e > _)
        )
          break
        h += 2
      }
      if (!b) return a
      new ChangedRange(b.fromA, b.toA, b.fromB, b.toB).addToSet(a),
        (d = b.toA),
        (g = b.toB)
    }
  }
}
class ViewUpdate {
  constructor(e, s, a) {
    ;(this.view = e),
      (this.state = s),
      (this.transactions = a),
      (this.flags = 0),
      (this.startState = e.state),
      (this.changes = ChangeSet.empty(this.startState.doc.length))
    for (let h of a) this.changes = this.changes.compose(h.changes)
    let c = []
    this.changes.iterChangedRanges((h, d, g, b) =>
      c.push(new ChangedRange(h, d, g, b))
    ),
      (this.changedRanges = c)
  }
  static create(e, s, a) {
    return new ViewUpdate(e, s, a)
  }
  get viewportChanged() {
    return (this.flags & 4) > 0
  }
  get heightChanged() {
    return (this.flags & 2) > 0
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0
  }
  get focusChanged() {
    return (this.flags & 1) > 0
  }
  get docChanged() {
    return !this.changes.empty
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection)
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0
  }
}
var Direction = (function (o) {
  return (o[(o.LTR = 0)] = 'LTR'), (o[(o.RTL = 1)] = 'RTL'), o
})(Direction || (Direction = {}))
const LTR = Direction.LTR,
  RTL = Direction.RTL
function dec(o) {
  let e = []
  for (let s = 0; s < o.length; s++) e.push(1 << +o[s])
  return e
}
const LowTypes = dec(
    '88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008'
  ),
  ArabicTypes = dec(
    '4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333'
  ),
  Brackets = Object.create(null),
  BracketStack = []
for (let o of ['()', '[]', '{}']) {
  let e = o.charCodeAt(0),
    s = o.charCodeAt(1)
  ;(Brackets[e] = s), (Brackets[s] = -e)
}
function charType(o) {
  return o <= 247
    ? LowTypes[o]
    : 1424 <= o && o <= 1524
    ? 2
    : 1536 <= o && o <= 1785
    ? ArabicTypes[o - 1536]
    : 1774 <= o && o <= 2220
    ? 4
    : 8192 <= o && o <= 8203
    ? 256
    : 64336 <= o && o <= 65023
    ? 4
    : o == 8204
    ? 256
    : 1
}
const BidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/
class BidiSpan {
  get dir() {
    return this.level % 2 ? RTL : LTR
  }
  constructor(e, s, a) {
    ;(this.from = e), (this.to = s), (this.level = a)
  }
  side(e, s) {
    return (this.dir == s) == e ? this.to : this.from
  }
  static find(e, s, a, c) {
    let h = -1
    for (let d = 0; d < e.length; d++) {
      let g = e[d]
      if (g.from <= s && g.to >= s) {
        if (g.level == a) return d
        ;(h < 0 ||
          (c != 0 ? (c < 0 ? g.from < s : g.to > s) : e[h].level > g.level)) &&
          (h = d)
      }
    }
    if (h < 0) throw new RangeError('Index out of range')
    return h
  }
}
function isolatesEq(o, e) {
  if (o.length != e.length) return !1
  for (let s = 0; s < o.length; s++) {
    let a = o[s],
      c = e[s]
    if (
      a.from != c.from ||
      a.to != c.to ||
      a.direction != c.direction ||
      !isolatesEq(a.inner, c.inner)
    )
      return !1
  }
  return !0
}
const types = []
function computeCharTypes(o, e, s, a, c) {
  for (let h = 0; h <= a.length; h++) {
    let d = h ? a[h - 1].to : e,
      g = h < a.length ? a[h].from : s,
      b = h ? 256 : c
    for (let $ = d, _ = b, j = b; $ < g; $++) {
      let _e = charType(o.charCodeAt($))
      _e == 512 ? (_e = _) : _e == 8 && j == 4 && (_e = 16),
        (types[$] = _e == 4 ? 2 : _e),
        _e & 7 && (j = _e),
        (_ = _e)
    }
    for (let $ = d, _ = b, j = b; $ < g; $++) {
      let _e = types[$]
      if (_e == 128)
        $ < g - 1 && _ == types[$ + 1] && _ & 24
          ? (_e = types[$] = _)
          : (types[$] = 256)
      else if (_e == 64) {
        let et = $ + 1
        for (; et < g && types[et] == 64; ) et++
        let tt =
          ($ && _ == 8) || (et < s && types[et] == 8) ? (j == 1 ? 1 : 8) : 256
        for (let rt = $; rt < et; rt++) types[rt] = tt
        $ = et - 1
      } else _e == 8 && j == 1 && (types[$] = 1)
      ;(_ = _e), _e & 7 && (j = _e)
    }
  }
}
function processBracketPairs(o, e, s, a, c) {
  let h = c == 1 ? 2 : 1
  for (let d = 0, g = 0, b = 0; d <= a.length; d++) {
    let $ = d ? a[d - 1].to : e,
      _ = d < a.length ? a[d].from : s
    for (let j = $, _e, et, tt; j < _; j++)
      if ((et = Brackets[(_e = o.charCodeAt(j))]))
        if (et < 0) {
          for (let rt = g - 3; rt >= 0; rt -= 3)
            if (BracketStack[rt + 1] == -et) {
              let st = BracketStack[rt + 2],
                nt = st & 2 ? c : st & 4 ? (st & 1 ? h : c) : 0
              nt && (types[j] = types[BracketStack[rt]] = nt), (g = rt)
              break
            }
        } else {
          if (BracketStack.length == 189) break
          ;(BracketStack[g++] = j),
            (BracketStack[g++] = _e),
            (BracketStack[g++] = b)
        }
      else if ((tt = types[j]) == 2 || tt == 1) {
        let rt = tt == c
        b = rt ? 0 : 1
        for (let st = g - 3; st >= 0; st -= 3) {
          let nt = BracketStack[st + 2]
          if (nt & 2) break
          if (rt) BracketStack[st + 2] |= 2
          else {
            if (nt & 4) break
            BracketStack[st + 2] |= 4
          }
        }
      }
  }
}
function processNeutrals(o, e, s, a) {
  for (let c = 0, h = a; c <= s.length; c++) {
    let d = c ? s[c - 1].to : o,
      g = c < s.length ? s[c].from : e
    for (let b = d; b < g; ) {
      let $ = types[b]
      if ($ == 256) {
        let _ = b + 1
        for (;;)
          if (_ == g) {
            if (c == s.length) break
            ;(_ = s[c++].to), (g = c < s.length ? s[c].from : e)
          } else if (types[_] == 256) _++
          else break
        let j = h == 1,
          _e = (_ < e ? types[_] : a) == 1,
          et = j == _e ? (j ? 1 : 2) : a
        for (let tt = _, rt = c, st = rt ? s[rt - 1].to : o; tt > b; )
          tt == st && ((tt = s[--rt].from), (st = rt ? s[rt - 1].to : o)),
            (types[--tt] = et)
        b = _
      } else (h = $), b++
    }
  }
}
function emitSpans(o, e, s, a, c, h, d) {
  let g = a % 2 ? 2 : 1
  if (a % 2 == c % 2)
    for (let b = e, $ = 0; b < s; ) {
      let _ = !0,
        j = !1
      if ($ == h.length || b < h[$].from) {
        let rt = types[b]
        rt != g && ((_ = !1), (j = rt == 16))
      }
      let _e = !_ && g == 1 ? [] : null,
        et = _ ? a : a + 1,
        tt = b
      e: for (;;)
        if ($ < h.length && tt == h[$].from) {
          if (j) break e
          let rt = h[$]
          if (!_)
            for (let st = rt.to, nt = $ + 1; ; ) {
              if (st == s) break e
              if (nt < h.length && h[nt].from == st) st = h[nt++].to
              else {
                if (types[st] == g) break e
                break
              }
            }
          if (($++, _e)) _e.push(rt)
          else {
            rt.from > b && d.push(new BidiSpan(b, rt.from, et))
            let st = (rt.direction == LTR) != !(et % 2)
            computeSectionOrder(
              o,
              st ? a + 1 : a,
              c,
              rt.inner,
              rt.from,
              rt.to,
              d
            ),
              (b = rt.to)
          }
          tt = rt.to
        } else {
          if (tt == s || (_ ? types[tt] != g : types[tt] == g)) break
          tt++
        }
      _e
        ? emitSpans(o, b, tt, a + 1, c, _e, d)
        : b < tt && d.push(new BidiSpan(b, tt, et)),
        (b = tt)
    }
  else
    for (let b = s, $ = h.length; b > e; ) {
      let _ = !0,
        j = !1
      if (!$ || b > h[$ - 1].to) {
        let rt = types[b - 1]
        rt != g && ((_ = !1), (j = rt == 16))
      }
      let _e = !_ && g == 1 ? [] : null,
        et = _ ? a : a + 1,
        tt = b
      e: for (;;)
        if ($ && tt == h[$ - 1].to) {
          if (j) break e
          let rt = h[--$]
          if (!_)
            for (let st = rt.from, nt = $; ; ) {
              if (st == e) break e
              if (nt && h[nt - 1].to == st) st = h[--nt].from
              else {
                if (types[st - 1] == g) break e
                break
              }
            }
          if (_e) _e.push(rt)
          else {
            rt.to < b && d.push(new BidiSpan(rt.to, b, et))
            let st = (rt.direction == LTR) != !(et % 2)
            computeSectionOrder(
              o,
              st ? a + 1 : a,
              c,
              rt.inner,
              rt.from,
              rt.to,
              d
            ),
              (b = rt.from)
          }
          tt = rt.from
        } else {
          if (tt == e || (_ ? types[tt - 1] != g : types[tt - 1] == g)) break
          tt--
        }
      _e
        ? emitSpans(o, tt, b, a + 1, c, _e, d)
        : tt < b && d.push(new BidiSpan(tt, b, et)),
        (b = tt)
    }
}
function computeSectionOrder(o, e, s, a, c, h, d) {
  let g = e % 2 ? 2 : 1
  computeCharTypes(o, c, h, a, g),
    processBracketPairs(o, c, h, a, g),
    processNeutrals(c, h, a, g),
    emitSpans(o, c, h, e, s, a, d)
}
function computeOrder(o, e, s) {
  if (!o) return [new BidiSpan(0, 0, e == RTL ? 1 : 0)]
  if (e == LTR && !s.length && !BidiRE.test(o)) return trivialOrder(o.length)
  if (s.length) for (; o.length > types.length; ) types[types.length] = 256
  let a = [],
    c = e == LTR ? 0 : 1
  return computeSectionOrder(o, c, c, s, 0, o.length, a), a
}
function trivialOrder(o) {
  return [new BidiSpan(0, o, 0)]
}
let movedOver = ''
function moveVisually(o, e, s, a, c) {
  var h
  let d = a.head - o.from,
    g = -1
  if (d == 0) {
    if (!c || !o.length) return null
    e[0].level != s && ((d = e[0].side(!1, s)), (g = 0))
  } else if (d == o.length) {
    if (c) return null
    let _e = e[e.length - 1]
    _e.level != s && ((d = _e.side(!0, s)), (g = e.length - 1))
  }
  g < 0 &&
    (g = BidiSpan.find(
      e,
      d,
      (h = a.bidiLevel) !== null && h !== void 0 ? h : -1,
      a.assoc
    ))
  let b = e[g]
  d == b.side(c, s) && ((b = e[(g += c ? 1 : -1)]), (d = b.side(!c, s)))
  let $ = c == (b.dir == s),
    _ = findClusterBreak(o.text, d, $)
  if (
    ((movedOver = o.text.slice(Math.min(d, _), Math.max(d, _))),
    _ != b.side(c, s))
  )
    return EditorSelection.cursor(_ + o.from, $ ? -1 : 1, b.level)
  let j = g == (c ? e.length - 1 : 0) ? null : e[g + (c ? 1 : -1)]
  return !j && b.level != s
    ? EditorSelection.cursor(c ? o.to : o.from, c ? -1 : 1, s)
    : j && j.level < b.level
    ? EditorSelection.cursor(j.side(!c, s) + o.from, c ? 1 : -1, j.level)
    : EditorSelection.cursor(_ + o.from, c ? -1 : 1, b.level)
}
class DocView extends ContentView {
  get length() {
    return this.view.state.doc.length
  }
  constructor(e) {
    super(),
      (this.view = e),
      (this.decorations = []),
      (this.dynamicDecorationMap = []),
      (this.domChanged = null),
      (this.hasComposition = null),
      (this.markedForComposition = new Set()),
      (this.minWidth = 0),
      (this.minWidthFrom = 0),
      (this.minWidthTo = 0),
      (this.impreciseAnchor = null),
      (this.impreciseHead = null),
      (this.forceSelection = !1),
      (this.lastUpdate = Date.now()),
      this.setDOM(e.contentDOM),
      (this.children = [new LineView()]),
      this.children[0].setParent(this),
      this.updateDeco(),
      this.updateInner([new ChangedRange(0, 0, 0, e.state.doc.length)], 0, null)
  }
  update(e) {
    var s
    let a = e.changedRanges
    this.minWidth > 0 &&
      a.length &&
      (a.every(
        ({ fromA: $, toA: _ }) => _ < this.minWidthFrom || $ > this.minWidthTo
      )
        ? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
          (this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
        : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0))
    let c = -1
    this.view.inputState.composing >= 0 &&
      (!((s = this.domChanged) === null || s === void 0) && s.newSel
        ? (c = this.domChanged.newSel.head)
        : !touchesComposition(e.changes, this.hasComposition) &&
          !e.selectionSet &&
          (c = e.state.selection.main.head))
    let h = c > -1 ? findCompositionRange(this.view, e.changes, c) : null
    if (((this.domChanged = null), this.hasComposition)) {
      this.markedForComposition.clear()
      let { from: $, to: _ } = this.hasComposition
      a = new ChangedRange(
        $,
        _,
        e.changes.mapPos($, -1),
        e.changes.mapPos(_, 1)
      ).addToSet(a.slice())
    }
    ;(this.hasComposition = h
      ? { from: h.range.fromB, to: h.range.toB }
      : null),
      (browser.ie || browser.chrome) &&
        !h &&
        e &&
        e.state.doc.lines != e.startState.doc.lines &&
        (this.forceSelection = !0)
    let d = this.decorations,
      g = this.updateDeco(),
      b = findChangedDeco(d, g, e.changes)
    return (
      (a = ChangedRange.extendWithRanges(a, b)),
      !(this.flags & 7) && a.length == 0
        ? !1
        : (this.updateInner(a, e.startState.doc.length, h),
          e.transactions.length && (this.lastUpdate = Date.now()),
          !0)
    )
  }
  updateInner(e, s, a) {
    ;(this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, s, a)
    let { observer: c } = this.view
    c.ignore(() => {
      ;(this.dom.style.height =
        this.view.viewState.contentHeight / this.view.scaleY + 'px'),
        (this.dom.style.flexBasis = this.minWidth ? this.minWidth + 'px' : '')
      let d =
        browser.chrome || browser.ios
          ? { node: c.selectionRange.focusNode, written: !1 }
          : void 0
      this.sync(this.view, d),
        (this.flags &= -8),
        d &&
          (d.written || c.selectionRange.focusNode != d.node) &&
          (this.forceSelection = !0),
        (this.dom.style.height = '')
    }),
      this.markedForComposition.forEach((d) => (d.flags &= -9))
    let h = []
    if (
      this.view.viewport.from ||
      this.view.viewport.to < this.view.state.doc.length
    )
      for (let d of this.children)
        d instanceof BlockWidgetView &&
          d.widget instanceof BlockGapWidget &&
          h.push(d.dom)
    c.updateGaps(h)
  }
  updateChildren(e, s, a) {
    let c = a ? a.range.addToSet(e.slice()) : e,
      h = this.childCursor(s)
    for (let d = c.length - 1; ; d--) {
      let g = d >= 0 ? c[d] : null
      if (!g) break
      let { fromA: b, toA: $, fromB: _, toB: j } = g,
        _e,
        et,
        tt,
        rt
      if (a && a.range.fromB < j && a.range.toB > _) {
        let lt = ContentBuilder.build(
            this.view.state.doc,
            _,
            a.range.fromB,
            this.decorations,
            this.dynamicDecorationMap
          ),
          at = ContentBuilder.build(
            this.view.state.doc,
            a.range.toB,
            j,
            this.decorations,
            this.dynamicDecorationMap
          )
        ;(et = lt.breakAtStart), (tt = lt.openStart), (rt = at.openEnd)
        let ct = this.compositionView(a)
        at.breakAtStart
          ? (ct.breakAfter = 1)
          : at.content.length &&
            ct.merge(
              ct.length,
              ct.length,
              at.content[0],
              !1,
              at.openStart,
              0
            ) &&
            ((ct.breakAfter = at.content[0].breakAfter), at.content.shift()),
          lt.content.length &&
            ct.merge(
              0,
              0,
              lt.content[lt.content.length - 1],
              !0,
              0,
              lt.openEnd
            ) &&
            lt.content.pop(),
          (_e = lt.content.concat(ct).concat(at.content))
      } else
        ({
          content: _e,
          breakAtStart: et,
          openStart: tt,
          openEnd: rt
        } = ContentBuilder.build(
          this.view.state.doc,
          _,
          j,
          this.decorations,
          this.dynamicDecorationMap
        ))
      let { i: st, off: nt } = h.findPos($, 1),
        { i: it, off: ot } = h.findPos(b, -1)
      replaceRange(this, it, ot, st, nt, _e, et, tt, rt)
    }
    a && this.fixCompositionDOM(a)
  }
  compositionView(e) {
    let s = new TextView(e.text.nodeValue)
    s.flags |= 8
    for (let { deco: c } of e.marks) s = new MarkView(c, [s], s.length)
    let a = new LineView()
    return a.append(s, 0), a
  }
  fixCompositionDOM(e) {
    let s = (h, d) => {
        ;(d.flags |= 8 | (d.children.some((b) => b.flags & 7) ? 1 : 0)),
          this.markedForComposition.add(d)
        let g = ContentView.get(h)
        g && g != d && (g.dom = null), d.setDOM(h)
      },
      a = this.childPos(e.range.fromB, 1),
      c = this.children[a.i]
    s(e.line, c)
    for (let h = e.marks.length - 1; h >= -1; h--)
      (a = c.childPos(a.off, 1)),
        (c = c.children[a.i]),
        s(h >= 0 ? e.marks[h].node : e.text, c)
  }
  updateSelection(e = !1, s = !1) {
    ;(e || !this.view.observer.selectionRange.focusNode) &&
      this.view.observer.readSelectionRange()
    let a = this.view.root.activeElement,
      c = a == this.dom,
      h =
        !c &&
        hasSelection(this.dom, this.view.observer.selectionRange) &&
        !(a && this.dom.contains(a))
    if (!(c || s || h)) return
    let d = this.forceSelection
    this.forceSelection = !1
    let g = this.view.state.selection.main,
      b = this.moveToLine(this.domAtPos(g.anchor)),
      $ = g.empty ? b : this.moveToLine(this.domAtPos(g.head))
    if (
      browser.gecko &&
      g.empty &&
      !this.hasComposition &&
      betweenUneditable(b)
    ) {
      let j = document.createTextNode('')
      this.view.observer.ignore(() =>
        b.node.insertBefore(j, b.node.childNodes[b.offset] || null)
      ),
        (b = $ = new DOMPos(j, 0)),
        (d = !0)
    }
    let _ = this.view.observer.selectionRange
    ;(d ||
      !_.focusNode ||
      !isEquivalentPosition(b.node, b.offset, _.anchorNode, _.anchorOffset) ||
      !isEquivalentPosition($.node, $.offset, _.focusNode, _.focusOffset)) &&
      (this.view.observer.ignore(() => {
        browser.android &&
          browser.chrome &&
          this.dom.contains(_.focusNode) &&
          inUneditable(_.focusNode, this.dom) &&
          (this.dom.blur(), this.dom.focus({ preventScroll: !0 }))
        let j = getSelection(this.view.root)
        if (j)
          if (g.empty) {
            if (browser.gecko) {
              let _e = nextToUneditable(b.node, b.offset)
              if (_e && _e != 3) {
                let et = nearbyTextNode(b.node, b.offset, _e == 1 ? 1 : -1)
                et && (b = new DOMPos(et.node, et.offset))
              }
            }
            j.collapse(b.node, b.offset),
              g.bidiLevel != null &&
                j.caretBidiLevel !== void 0 &&
                (j.caretBidiLevel = g.bidiLevel)
          } else if (j.extend) {
            j.collapse(b.node, b.offset)
            try {
              j.extend($.node, $.offset)
            } catch {}
          } else {
            let _e = document.createRange()
            g.anchor > g.head && ([b, $] = [$, b]),
              _e.setEnd($.node, $.offset),
              _e.setStart(b.node, b.offset),
              j.removeAllRanges(),
              j.addRange(_e)
          }
        h &&
          this.view.root.activeElement == this.dom &&
          (this.dom.blur(), a && a.focus())
      }),
      this.view.observer.setSelectionRange(b, $)),
      (this.impreciseAnchor = b.precise
        ? null
        : new DOMPos(_.anchorNode, _.anchorOffset)),
      (this.impreciseHead = $.precise
        ? null
        : new DOMPos(_.focusNode, _.focusOffset))
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return
    let { view: e } = this,
      s = e.state.selection.main,
      a = getSelection(e.root),
      { anchorNode: c, anchorOffset: h } = e.observer.selectionRange
    if (!a || !s.empty || !s.assoc || !a.modify) return
    let d = LineView.find(this, s.head)
    if (!d) return
    let g = d.posAtStart
    if (s.head == g || s.head == g + d.length) return
    let b = this.coordsAt(s.head, -1),
      $ = this.coordsAt(s.head, 1)
    if (!b || !$ || b.bottom > $.top) return
    let _ = this.domAtPos(s.head + s.assoc)
    a.collapse(_.node, _.offset),
      a.modify('move', s.assoc < 0 ? 'forward' : 'backward', 'lineboundary'),
      e.observer.readSelectionRange()
    let j = e.observer.selectionRange
    e.docView.posFromDOM(j.anchorNode, j.anchorOffset) != s.from &&
      a.collapse(c, h)
  }
  moveToLine(e) {
    let s = this.dom,
      a
    if (e.node != s) return e
    for (let c = e.offset; !a && c < s.childNodes.length; c++) {
      let h = ContentView.get(s.childNodes[c])
      h instanceof LineView && (a = h.domAtPos(0))
    }
    for (let c = e.offset - 1; !a && c >= 0; c--) {
      let h = ContentView.get(s.childNodes[c])
      h instanceof LineView && (a = h.domAtPos(h.length))
    }
    return a ? new DOMPos(a.node, a.offset, !0) : e
  }
  nearest(e) {
    for (let s = e; s; ) {
      let a = ContentView.get(s)
      if (a && a.rootView == this) return a
      s = s.parentNode
    }
    return null
  }
  posFromDOM(e, s) {
    let a = this.nearest(e)
    if (!a)
      throw new RangeError(
        'Trying to find position for a DOM position outside of the document'
      )
    return a.localPosFromDOM(e, s) + a.posAtStart
  }
  domAtPos(e) {
    let { i: s, off: a } = this.childCursor().findPos(e, -1)
    for (; s < this.children.length - 1; ) {
      let c = this.children[s]
      if (a < c.length || c instanceof LineView) break
      s++, (a = 0)
    }
    return this.children[s].domAtPos(a)
  }
  coordsAt(e, s) {
    let a = null,
      c = 0
    for (let h = this.length, d = this.children.length - 1; d >= 0; d--) {
      let g = this.children[d],
        b = h - g.breakAfter,
        $ = b - g.length
      if (b < e) break
      $ <= e &&
        ($ < e || g.covers(-1)) &&
        (b > e || g.covers(1)) &&
        (!a || (g instanceof LineView && !(a instanceof LineView && s >= 0))) &&
        ((a = g), (c = $)),
        (h = $)
    }
    return a ? a.coordsAt(e - c, s) : null
  }
  coordsForChar(e) {
    let { i: s, off: a } = this.childPos(e, 1),
      c = this.children[s]
    if (!(c instanceof LineView)) return null
    for (; c.children.length; ) {
      let { i: g, off: b } = c.childPos(a, 1)
      for (; ; g++) {
        if (g == c.children.length) return null
        if ((c = c.children[g]).length) break
      }
      a = b
    }
    if (!(c instanceof TextView)) return null
    let h = findClusterBreak(c.text, a)
    if (h == a) return null
    let d = textRange(c.dom, a, h).getClientRects()
    return !d.length || d[0].top >= d[0].bottom ? null : d[0]
  }
  measureVisibleLineHeights(e) {
    let s = [],
      { from: a, to: c } = e,
      h = this.view.contentDOM.clientWidth,
      d = h > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
      g = -1,
      b = this.view.textDirection == Direction.LTR
    for (let $ = 0, _ = 0; _ < this.children.length; _++) {
      let j = this.children[_],
        _e = $ + j.length
      if (_e > c) break
      if ($ >= a) {
        let et = j.dom.getBoundingClientRect()
        if ((s.push(et.height), d)) {
          let tt = j.dom.lastChild,
            rt = tt ? clientRectsFor(tt) : []
          if (rt.length) {
            let st = rt[rt.length - 1],
              nt = b ? st.right - et.left : et.right - st.left
            nt > g &&
              ((g = nt),
              (this.minWidth = h),
              (this.minWidthFrom = $),
              (this.minWidthTo = _e))
          }
        }
      }
      $ = _e + j.breakAfter
    }
    return s
  }
  textDirectionAt(e) {
    let { i: s } = this.childPos(e, 1)
    return getComputedStyle(this.children[s].dom).direction == 'rtl'
      ? Direction.RTL
      : Direction.LTR
  }
  measureTextSize() {
    for (let h of this.children)
      if (h instanceof LineView) {
        let d = h.measureTextSize()
        if (d) return d
      }
    let e = document.createElement('div'),
      s,
      a,
      c
    return (
      (e.className = 'cm-line'),
      (e.style.width = '99999px'),
      (e.style.position = 'absolute'),
      (e.textContent = 'abc def ghi jkl mno pqr stu'),
      this.view.observer.ignore(() => {
        this.dom.appendChild(e)
        let h = clientRectsFor(e.firstChild)[0]
        ;(s = e.getBoundingClientRect().height),
          (a = h ? h.width / 27 : 7),
          (c = h ? h.height : s),
          e.remove()
      }),
      { lineHeight: s, charWidth: a, textHeight: c }
    )
  }
  childCursor(e = this.length) {
    let s = this.children.length
    return (
      s && (e -= this.children[--s].length),
      new ChildCursor(this.children, e, s)
    )
  }
  computeBlockGapDeco() {
    let e = [],
      s = this.view.viewState
    for (let a = 0, c = 0; ; c++) {
      let h = c == s.viewports.length ? null : s.viewports[c],
        d = h ? h.from - 1 : this.length
      if (d > a) {
        let g =
          (s.lineBlockAt(d).bottom - s.lineBlockAt(a).top) / this.view.scaleY
        e.push(
          Decoration.replace({
            widget: new BlockGapWidget(g),
            block: !0,
            inclusive: !0,
            isBlockGap: !0
          }).range(a, d)
        )
      }
      if (!h) break
      a = h.to + 1
    }
    return Decoration.set(e)
  }
  updateDeco() {
    let e = this.view.state
      .facet(decorations)
      .map((s, a) =>
        (this.dynamicDecorationMap[a] = typeof s == 'function')
          ? s(this.view)
          : s
      )
    for (let s = e.length; s < e.length + 3; s++)
      this.dynamicDecorationMap[s] = !1
    return (this.decorations = [
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ])
  }
  scrollIntoView(e) {
    let { range: s } = e,
      a = this.coordsAt(s.head, s.empty ? s.assoc : s.head > s.anchor ? -1 : 1),
      c
    if (!a) return
    !s.empty &&
      (c = this.coordsAt(s.anchor, s.anchor > s.head ? -1 : 1)) &&
      (a = {
        left: Math.min(a.left, c.left),
        top: Math.min(a.top, c.top),
        right: Math.max(a.right, c.right),
        bottom: Math.max(a.bottom, c.bottom)
      })
    let h = getScrollMargins(this.view),
      d = {
        left: a.left - h.left,
        top: a.top - h.top,
        right: a.right + h.right,
        bottom: a.bottom + h.bottom
      }
    scrollRectIntoView(
      this.view.scrollDOM,
      d,
      s.head < s.anchor ? -1 : 1,
      e.x,
      e.y,
      e.xMargin,
      e.yMargin,
      this.view.textDirection == Direction.LTR
    )
  }
}
function betweenUneditable(o) {
  return (
    o.node.nodeType == 1 &&
    o.node.firstChild &&
    (o.offset == 0 ||
      o.node.childNodes[o.offset - 1].contentEditable == 'false') &&
    (o.offset == o.node.childNodes.length ||
      o.node.childNodes[o.offset].contentEditable == 'false')
  )
}
class BlockGapWidget extends WidgetType {
  constructor(e) {
    super(), (this.height = e)
  }
  toDOM() {
    let e = document.createElement('div')
    return this.updateDOM(e), e
  }
  eq(e) {
    return e.height == this.height
  }
  updateDOM(e) {
    return (e.style.height = this.height + 'px'), !0
  }
  get estimatedHeight() {
    return this.height
  }
}
function findCompositionNode(o, e) {
  let s = o.observer.selectionRange,
    a = s.focusNode && nearbyTextNode(s.focusNode, s.focusOffset, 0)
  if (!a) return null
  let c = e - a.offset
  return { from: c, to: c + a.node.nodeValue.length, node: a.node }
}
function findCompositionRange(o, e, s) {
  let a = findCompositionNode(o, s)
  if (!a) return null
  let { node: c, from: h, to: d } = a,
    g = c.nodeValue
  if (/[\n\r]/.test(g) || o.state.doc.sliceString(a.from, a.to) != g)
    return null
  let b = e.invertedDesc,
    $ = new ChangedRange(b.mapPos(h), b.mapPos(d), h, d),
    _ = []
  for (let j = c.parentNode; ; j = j.parentNode) {
    let _e = ContentView.get(j)
    if (_e instanceof MarkView) _.push({ node: j, deco: _e.mark })
    else {
      if (
        _e instanceof LineView ||
        (j.nodeName == 'DIV' && j.parentNode == o.contentDOM)
      )
        return { range: $, text: c, marks: _, line: j }
      if (j != o.contentDOM)
        _.push({
          node: j,
          deco: new MarkDecoration({
            inclusive: !0,
            attributes: getAttrs(j),
            tagName: j.tagName.toLowerCase()
          })
        })
      else return null
    }
  }
}
function nearbyTextNode(o, e, s) {
  if (s <= 0)
    for (let a = o, c = e; ; ) {
      if (a.nodeType == 3) return { node: a, offset: c }
      if (a.nodeType == 1 && c > 0)
        (a = a.childNodes[c - 1]), (c = maxOffset(a))
      else break
    }
  if (s >= 0)
    for (let a = o, c = e; ; ) {
      if (a.nodeType == 3) return { node: a, offset: c }
      if (a.nodeType == 1 && c < a.childNodes.length && s >= 0)
        (a = a.childNodes[c]), (c = 0)
      else break
    }
  return null
}
function nextToUneditable(o, e) {
  return o.nodeType != 1
    ? 0
    : (e && o.childNodes[e - 1].contentEditable == 'false' ? 1 : 0) |
        (e < o.childNodes.length && o.childNodes[e].contentEditable == 'false'
          ? 2
          : 0)
}
let DecorationComparator$1 = class {
  constructor() {
    this.changes = []
  }
  compareRange(e, s) {
    addRange(e, s, this.changes)
  }
  comparePoint(e, s) {
    addRange(e, s, this.changes)
  }
}
function findChangedDeco(o, e, s) {
  let a = new DecorationComparator$1()
  return RangeSet.compare(o, e, s, a), a.changes
}
function inUneditable(o, e) {
  for (let s = o; s && s != e; s = s.assignedSlot || s.parentNode)
    if (s.nodeType == 1 && s.contentEditable == 'false') return !0
  return !1
}
function touchesComposition(o, e) {
  let s = !1
  return (
    e &&
      o.iterChangedRanges((a, c) => {
        a < e.to && c > e.from && (s = !0)
      }),
    s
  )
}
function groupAt(o, e, s = 1) {
  let a = o.charCategorizer(e),
    c = o.doc.lineAt(e),
    h = e - c.from
  if (c.length == 0) return EditorSelection.cursor(e)
  h == 0 ? (s = 1) : h == c.length && (s = -1)
  let d = h,
    g = h
  s < 0
    ? (d = findClusterBreak(c.text, h, !1))
    : (g = findClusterBreak(c.text, h))
  let b = a(c.text.slice(d, g))
  for (; d > 0; ) {
    let $ = findClusterBreak(c.text, d, !1)
    if (a(c.text.slice($, d)) != b) break
    d = $
  }
  for (; g < c.length; ) {
    let $ = findClusterBreak(c.text, g)
    if (a(c.text.slice(g, $)) != b) break
    g = $
  }
  return EditorSelection.range(d + c.from, g + c.from)
}
function getdx(o, e) {
  return e.left > o ? e.left - o : Math.max(0, o - e.right)
}
function getdy(o, e) {
  return e.top > o ? e.top - o : Math.max(0, o - e.bottom)
}
function yOverlap(o, e) {
  return o.top < e.bottom - 1 && o.bottom > e.top + 1
}
function upTop(o, e) {
  return e < o.top
    ? { top: e, left: o.left, right: o.right, bottom: o.bottom }
    : o
}
function upBot(o, e) {
  return e > o.bottom
    ? { top: o.top, left: o.left, right: o.right, bottom: e }
    : o
}
function domPosAtCoords(o, e, s) {
  let a,
    c,
    h,
    d,
    g = !1,
    b,
    $,
    _,
    j
  for (let tt = o.firstChild; tt; tt = tt.nextSibling) {
    let rt = clientRectsFor(tt)
    for (let st = 0; st < rt.length; st++) {
      let nt = rt[st]
      c && yOverlap(c, nt) && (nt = upTop(upBot(nt, c.bottom), c.top))
      let it = getdx(e, nt),
        ot = getdy(s, nt)
      if (it == 0 && ot == 0)
        return tt.nodeType == 3
          ? domPosInText(tt, e, s)
          : domPosAtCoords(tt, e, s)
      if (!a || d > ot || (d == ot && h > it)) {
        ;(a = tt), (c = nt), (h = it), (d = ot)
        let lt = ot ? (s < nt.top ? -1 : 1) : it ? (e < nt.left ? -1 : 1) : 0
        g = !lt || (lt > 0 ? st < rt.length - 1 : st > 0)
      }
      it == 0
        ? s > nt.bottom && (!_ || _.bottom < nt.bottom)
          ? ((b = tt), (_ = nt))
          : s < nt.top && (!j || j.top > nt.top) && (($ = tt), (j = nt))
        : _ && yOverlap(_, nt)
        ? (_ = upBot(_, nt.bottom))
        : j && yOverlap(j, nt) && (j = upTop(j, nt.top))
    }
  }
  if (
    (_ && _.bottom >= s
      ? ((a = b), (c = _))
      : j && j.top <= s && ((a = $), (c = j)),
    !a)
  )
    return { node: o, offset: 0 }
  let _e = Math.max(c.left, Math.min(c.right, e))
  if (a.nodeType == 3) return domPosInText(a, _e, s)
  if (g && a.contentEditable != 'false') return domPosAtCoords(a, _e, s)
  let et =
    Array.prototype.indexOf.call(o.childNodes, a) +
    (e >= (c.left + c.right) / 2 ? 1 : 0)
  return { node: o, offset: et }
}
function domPosInText(o, e, s) {
  let a = o.nodeValue.length,
    c = -1,
    h = 1e9,
    d = 0
  for (let g = 0; g < a; g++) {
    let b = textRange(o, g, g + 1).getClientRects()
    for (let $ = 0; $ < b.length; $++) {
      let _ = b[$]
      if (_.top == _.bottom) continue
      d || (d = e - _.left)
      let j = (_.top > s ? _.top - s : s - _.bottom) - 1
      if (_.left - 1 <= e && _.right + 1 >= e && j < h) {
        let _e = e >= (_.left + _.right) / 2,
          et = _e
        if (
          ((browser.chrome || browser.gecko) &&
            textRange(o, g).getBoundingClientRect().left == _.right &&
            (et = !_e),
          j <= 0)
        )
          return { node: o, offset: g + (et ? 1 : 0) }
        ;(c = g + (et ? 1 : 0)), (h = j)
      }
    }
  }
  return { node: o, offset: c > -1 ? c : d > 0 ? o.nodeValue.length : 0 }
}
function posAtCoords(o, e, s, a = -1) {
  var c, h
  let d = o.contentDOM.getBoundingClientRect(),
    g = d.top + o.viewState.paddingTop,
    b,
    { docHeight: $ } = o.viewState,
    { x: _, y: j } = e,
    _e = j - g
  if (_e < 0) return 0
  if (_e > $) return o.state.doc.length
  for (
    let lt = o.viewState.heightOracle.textHeight / 2, at = !1;
    (b = o.elementAtHeight(_e)), b.type != BlockType.Text;

  )
    for (; (_e = a > 0 ? b.bottom + lt : b.top - lt), !(_e >= 0 && _e <= $); ) {
      if (at) return s ? null : 0
      ;(at = !0), (a = -a)
    }
  j = g + _e
  let et = b.from
  if (et < o.viewport.from)
    return o.viewport.from == 0
      ? 0
      : s
      ? null
      : posAtCoordsImprecise(o, d, b, _, j)
  if (et > o.viewport.to)
    return o.viewport.to == o.state.doc.length
      ? o.state.doc.length
      : s
      ? null
      : posAtCoordsImprecise(o, d, b, _, j)
  let tt = o.dom.ownerDocument,
    rt = o.root.elementFromPoint ? o.root : tt,
    st = rt.elementFromPoint(_, j)
  st && !o.contentDOM.contains(st) && (st = null),
    st ||
      ((_ = Math.max(d.left + 1, Math.min(d.right - 1, _))),
      (st = rt.elementFromPoint(_, j)),
      st && !o.contentDOM.contains(st) && (st = null))
  let nt,
    it = -1
  if (
    st &&
    ((c = o.docView.nearest(st)) === null || c === void 0
      ? void 0
      : c.isEditable) != !1
  ) {
    if (tt.caretPositionFromPoint) {
      let lt = tt.caretPositionFromPoint(_, j)
      lt && ({ offsetNode: nt, offset: it } = lt)
    } else if (tt.caretRangeFromPoint) {
      let lt = tt.caretRangeFromPoint(_, j)
      lt &&
        (({ startContainer: nt, startOffset: it } = lt),
        (!o.contentDOM.contains(nt) ||
          (browser.safari && isSuspiciousSafariCaretResult(nt, it, _)) ||
          (browser.chrome && isSuspiciousChromeCaretResult(nt, it, _))) &&
          (nt = void 0))
    }
  }
  if (!nt || !o.docView.dom.contains(nt)) {
    let lt = LineView.find(o.docView, et)
    if (!lt) return _e > b.top + b.height / 2 ? b.to : b.from
    ;({ node: nt, offset: it } = domPosAtCoords(lt.dom, _, j))
  }
  let ot = o.docView.nearest(nt)
  if (!ot) return null
  if (
    ot.isWidget &&
    ((h = ot.dom) === null || h === void 0 ? void 0 : h.nodeType) == 1
  ) {
    let lt = ot.dom.getBoundingClientRect()
    return e.y < lt.top || (e.y <= lt.bottom && e.x <= (lt.left + lt.right) / 2)
      ? ot.posAtStart
      : ot.posAtEnd
  } else return ot.localPosFromDOM(nt, it) + ot.posAtStart
}
function posAtCoordsImprecise(o, e, s, a, c) {
  let h = Math.round((a - e.left) * o.defaultCharacterWidth)
  if (o.lineWrapping && s.height > o.defaultLineHeight * 1.5) {
    let g = o.viewState.heightOracle.textHeight,
      b = Math.floor((c - s.top - (o.defaultLineHeight - g) * 0.5) / g)
    h += b * o.viewState.heightOracle.lineLength
  }
  let d = o.state.sliceDoc(s.from, s.to)
  return s.from + findColumn(d, h, o.state.tabSize)
}
function isSuspiciousSafariCaretResult(o, e, s) {
  let a
  if (o.nodeType != 3 || e != (a = o.nodeValue.length)) return !1
  for (let c = o.nextSibling; c; c = c.nextSibling)
    if (c.nodeType != 1 || c.nodeName != 'BR') return !1
  return textRange(o, a - 1, a).getBoundingClientRect().left > s
}
function isSuspiciousChromeCaretResult(o, e, s) {
  if (e != 0) return !1
  for (let c = o; ; ) {
    let h = c.parentNode
    if (!h || h.nodeType != 1 || h.firstChild != c) return !1
    if (h.classList.contains('cm-line')) break
    c = h
  }
  let a =
    o.nodeType == 1
      ? o.getBoundingClientRect()
      : textRange(o, 0, Math.max(o.nodeValue.length, 1)).getBoundingClientRect()
  return s - a.left > 5
}
function blockAt(o, e) {
  let s = o.lineBlockAt(e)
  if (Array.isArray(s.type)) {
    for (let a of s.type)
      if (a.to > e || (a.to == e && (a.to == s.to || a.type == BlockType.Text)))
        return a
  }
  return s
}
function moveToLineBoundary(o, e, s, a) {
  let c = blockAt(o, e.head),
    h =
      !a || c.type != BlockType.Text || !(o.lineWrapping || c.widgetLineBreaks)
        ? null
        : o.coordsAtPos(e.assoc < 0 && e.head > c.from ? e.head - 1 : e.head)
  if (h) {
    let d = o.dom.getBoundingClientRect(),
      g = o.textDirectionAt(c.from),
      b = o.posAtCoords({
        x: s == (g == Direction.LTR) ? d.right - 1 : d.left + 1,
        y: (h.top + h.bottom) / 2
      })
    if (b != null) return EditorSelection.cursor(b, s ? -1 : 1)
  }
  return EditorSelection.cursor(s ? c.to : c.from, s ? -1 : 1)
}
function moveByChar(o, e, s, a) {
  let c = o.state.doc.lineAt(e.head),
    h = o.bidiSpans(c),
    d = o.textDirectionAt(c.from)
  for (let g = e, b = null; ; ) {
    let $ = moveVisually(c, h, d, g, s),
      _ = movedOver
    if (!$) {
      if (c.number == (s ? o.state.doc.lines : 1)) return g
      ;(_ = `
`),
        (c = o.state.doc.line(c.number + (s ? 1 : -1))),
        (h = o.bidiSpans(c)),
        ($ = EditorSelection.cursor(s ? c.from : c.to))
    }
    if (b) {
      if (!b(_)) return g
    } else {
      if (!a) return $
      b = a(_)
    }
    g = $
  }
}
function byGroup(o, e, s) {
  let a = o.state.charCategorizer(e),
    c = a(s)
  return (h) => {
    let d = a(h)
    return c == CharCategory.Space && (c = d), c == d
  }
}
function moveVertically(o, e, s, a) {
  let c = e.head,
    h = s ? 1 : -1
  if (c == (s ? o.state.doc.length : 0))
    return EditorSelection.cursor(c, e.assoc)
  let d = e.goalColumn,
    g,
    b = o.contentDOM.getBoundingClientRect(),
    $ = o.coordsAtPos(c),
    _ = o.documentTop
  if ($) d == null && (d = $.left - b.left), (g = h < 0 ? $.top : $.bottom)
  else {
    let et = o.viewState.lineBlockAt(c)
    d == null &&
      (d = Math.min(b.right - b.left, o.defaultCharacterWidth * (c - et.from))),
      (g = (h < 0 ? et.top : et.bottom) + _)
  }
  let j = b.left + d,
    _e = a ?? o.viewState.heightOracle.textHeight >> 1
  for (let et = 0; ; et += 10) {
    let tt = g + (_e + et) * h,
      rt = posAtCoords(o, { x: j, y: tt }, !1, h)
    if (tt < b.top || tt > b.bottom || (h < 0 ? rt < c : rt > c))
      return EditorSelection.cursor(rt, e.assoc, void 0, d)
  }
}
function skipAtomicRanges(o, e, s) {
  for (;;) {
    let a = 0
    for (let c of o)
      c.between(e - 1, e + 1, (h, d, g) => {
        if (e > h && e < d) {
          let b = a || s || (e - h < d - e ? -1 : 1)
          ;(e = b < 0 ? h : d), (a = b)
        }
      })
    if (!a) return e
  }
}
function skipAtoms(o, e, s) {
  let a = skipAtomicRanges(
    o.state.facet(atomicRanges).map((c) => c(o)),
    s.from,
    e.head > s.from ? -1 : 1
  )
  return a == s.from ? s : EditorSelection.cursor(a, a < s.from ? 1 : -1)
}
class InputState {
  setSelectionOrigin(e) {
    ;(this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now())
  }
  constructor(e) {
    ;(this.view = e),
      (this.lastKeyCode = 0),
      (this.lastKeyTime = 0),
      (this.lastTouchTime = 0),
      (this.lastFocusTime = 0),
      (this.lastScrollTop = 0),
      (this.lastScrollLeft = 0),
      (this.pendingIOSKey = void 0),
      (this.lastSelectionOrigin = null),
      (this.lastSelectionTime = 0),
      (this.lastEscPress = 0),
      (this.lastContextMenu = 0),
      (this.scrollHandlers = []),
      (this.handlers = Object.create(null)),
      (this.composing = -1),
      (this.compositionFirstChange = null),
      (this.compositionEndedAt = 0),
      (this.compositionPendingKey = !1),
      (this.compositionPendingChange = !1),
      (this.mouseSelection = null),
      (this.handleEvent = this.handleEvent.bind(this)),
      e.scrollDOM.addEventListener('mousedown', (s) => {
        if (
          s.target == e.scrollDOM &&
          s.clientY > e.contentDOM.getBoundingClientRect().bottom &&
          (this.handleEvent(s), !s.defaultPrevented && s.button == 2)
        ) {
          let a = e.contentDOM.style.minHeight
          ;(e.contentDOM.style.minHeight = '100%'),
            setTimeout(() => (e.contentDOM.style.minHeight = a), 200)
        }
      }),
      e.scrollDOM.addEventListener('drop', (s) => {
        s.target == e.scrollDOM &&
          s.clientY > e.contentDOM.getBoundingClientRect().bottom &&
          this.handleEvent(s)
      }),
      (this.notifiedFocused = e.hasFocus),
      browser.safari && e.contentDOM.addEventListener('input', () => null),
      browser.gecko && firefoxCopyCutHack(e.contentDOM.ownerDocument)
  }
  handleEvent(e) {
    !eventBelongsToEditor(this.view, e) ||
      this.ignoreDuringComposition(e) ||
      (e.type == 'keydown' && this.keydown(e)) ||
      this.runHandlers(e.type, e)
  }
  runHandlers(e, s) {
    let a = this.handlers[e]
    if (a) {
      for (let c of a.observers) c(this.view, s)
      for (let c of a.handlers) {
        if (s.defaultPrevented) break
        if (c(this.view, s)) {
          s.preventDefault()
          break
        }
      }
    }
  }
  ensureHandlers(e) {
    let s = computeHandlers(e),
      a = this.handlers,
      c = this.view.contentDOM
    for (let h in s)
      if (h != 'scroll') {
        let d = !s[h].handlers.length,
          g = a[h]
        g &&
          d != !g.handlers.length &&
          (c.removeEventListener(h, this.handleEvent), (g = null)),
          g || c.addEventListener(h, this.handleEvent, { passive: d })
      }
    for (let h in a)
      h != 'scroll' && !s[h] && c.removeEventListener(h, this.handleEvent)
    this.handlers = s
  }
  keydown(e) {
    if (
      ((this.lastKeyCode = e.keyCode),
      (this.lastKeyTime = Date.now()),
      e.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
    )
      return !0
    if (
      (e.keyCode != 27 &&
        modifierCodes.indexOf(e.keyCode) < 0 &&
        (this.view.inputState.lastEscPress = 0),
      browser.android &&
        browser.chrome &&
        !e.synthetic &&
        (e.keyCode == 13 || e.keyCode == 8))
    )
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0
    let s
    return browser.ios &&
      !e.synthetic &&
      !e.altKey &&
      !e.metaKey &&
      (((s = PendingKeys.find((a) => a.keyCode == e.keyCode)) && !e.ctrlKey) ||
        (EmacsyPendingKeys.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey))
      ? ((this.pendingIOSKey = s || e),
        setTimeout(() => this.flushIOSKey(), 250),
        !0)
      : (e.keyCode != 229 && this.view.observer.forceFlush(), !1)
  }
  flushIOSKey() {
    let e = this.pendingIOSKey
    return e
      ? ((this.pendingIOSKey = void 0),
        dispatchKey(this.view.contentDOM, e.key, e.keyCode))
      : !1
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type)
      ? this.composing > 0
        ? !0
        : browser.safari &&
          !browser.ios &&
          this.compositionPendingKey &&
          Date.now() - this.compositionEndedAt < 100
        ? ((this.compositionPendingKey = !1), !0)
        : !1
      : !1
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(),
      (this.mouseSelection = e)
  }
  update(e) {
    this.mouseSelection && this.mouseSelection.update(e),
      e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy()
  }
}
function bindHandler(o, e) {
  return (s, a) => {
    try {
      return e.call(o, a, s)
    } catch (c) {
      logException(s.state, c)
    }
  }
}
function computeHandlers(o) {
  let e = Object.create(null)
  function s(a) {
    return e[a] || (e[a] = { observers: [], handlers: [] })
  }
  for (let a of o) {
    let c = a.spec
    if (c && c.domEventHandlers)
      for (let h in c.domEventHandlers) {
        let d = c.domEventHandlers[h]
        d && s(h).handlers.push(bindHandler(a.value, d))
      }
    if (c && c.domEventObservers)
      for (let h in c.domEventObservers) {
        let d = c.domEventObservers[h]
        d && s(h).observers.push(bindHandler(a.value, d))
      }
  }
  for (let a in handlers) s(a).handlers.push(handlers[a])
  for (let a in observers) s(a).observers.push(observers[a])
  return e
}
const PendingKeys = [
    { key: 'Backspace', keyCode: 8, inputType: 'deleteContentBackward' },
    { key: 'Enter', keyCode: 13, inputType: 'insertParagraph' },
    { key: 'Enter', keyCode: 13, inputType: 'insertLineBreak' },
    { key: 'Delete', keyCode: 46, inputType: 'deleteContentForward' }
  ],
  EmacsyPendingKeys = 'dthko',
  modifierCodes = [16, 17, 18, 20, 91, 92, 224, 225],
  dragScrollMargin = 6
function dragScrollSpeed(o) {
  return Math.max(0, o) * 0.7 + 8
}
function dist(o, e) {
  return Math.max(
    Math.abs(o.clientX - e.clientX),
    Math.abs(o.clientY - e.clientY)
  )
}
class MouseSelection {
  constructor(e, s, a, c) {
    ;(this.view = e),
      (this.startEvent = s),
      (this.style = a),
      (this.mustSelect = c),
      (this.scrollSpeed = { x: 0, y: 0 }),
      (this.scrolling = -1),
      (this.lastEvent = s),
      (this.scrollParent = scrollableParent(e.contentDOM)),
      (this.atoms = e.state.facet(atomicRanges).map((d) => d(e)))
    let h = e.contentDOM.ownerDocument
    h.addEventListener('mousemove', (this.move = this.move.bind(this))),
      h.addEventListener('mouseup', (this.up = this.up.bind(this))),
      (this.extend = s.shiftKey),
      (this.multiple =
        e.state.facet(EditorState.allowMultipleSelections) &&
        addsSelectionRange(e, s)),
      (this.dragging =
        isInPrimarySelection(e, s) && getClickType(s) == 1 ? null : !1)
  }
  start(e) {
    this.dragging === !1 && this.select(e)
  }
  move(e) {
    var s
    if (e.buttons == 0) return this.destroy()
    if (
      this.dragging ||
      (this.dragging == null && dist(this.startEvent, e) < 10)
    )
      return
    this.select((this.lastEvent = e))
    let a = 0,
      c = 0,
      h = ((s = this.scrollParent) === null || s === void 0
        ? void 0
        : s.getBoundingClientRect()) || {
        left: 0,
        top: 0,
        right: this.view.win.innerWidth,
        bottom: this.view.win.innerHeight
      },
      d = getScrollMargins(this.view)
    e.clientX - d.left <= h.left + dragScrollMargin
      ? (a = -dragScrollSpeed(h.left - e.clientX))
      : e.clientX + d.right >= h.right - dragScrollMargin &&
        (a = dragScrollSpeed(e.clientX - h.right)),
      e.clientY - d.top <= h.top + dragScrollMargin
        ? (c = -dragScrollSpeed(h.top - e.clientY))
        : e.clientY + d.bottom >= h.bottom - dragScrollMargin &&
          (c = dragScrollSpeed(e.clientY - h.bottom)),
      this.setScrollSpeed(a, c)
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent),
      this.dragging || e.preventDefault(),
      this.destroy()
  }
  destroy() {
    this.setScrollSpeed(0, 0)
    let e = this.view.contentDOM.ownerDocument
    e.removeEventListener('mousemove', this.move),
      e.removeEventListener('mouseup', this.up),
      (this.view.inputState.mouseSelection = null)
  }
  setScrollSpeed(e, s) {
    ;(this.scrollSpeed = { x: e, y: s }),
      e || s
        ? this.scrolling < 0 &&
          (this.scrolling = setInterval(() => this.scroll(), 50))
        : this.scrolling > -1 &&
          (clearInterval(this.scrolling), (this.scrolling = -1))
  }
  scroll() {
    this.scrollParent
      ? ((this.scrollParent.scrollLeft += this.scrollSpeed.x),
        (this.scrollParent.scrollTop += this.scrollSpeed.y))
      : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y),
      this.dragging === !1 && this.select(this.lastEvent)
  }
  skipAtoms(e) {
    let s = null
    for (let a = 0; a < e.ranges.length; a++) {
      let c = e.ranges[a],
        h = null
      if (c.empty) {
        let d = skipAtomicRanges(this.atoms, c.from, 0)
        d != c.from && (h = EditorSelection.cursor(d, -1))
      } else {
        let d = skipAtomicRanges(this.atoms, c.from, -1),
          g = skipAtomicRanges(this.atoms, c.to, 1)
        ;(d != c.from || g != c.to) &&
          (h = EditorSelection.range(
            c.from == c.anchor ? d : g,
            c.from == c.head ? d : g
          ))
      }
      h && (s || (s = e.ranges.slice()), (s[a] = h))
    }
    return s ? EditorSelection.create(s, e.mainIndex) : e
  }
  select(e) {
    let { view: s } = this,
      a = this.skipAtoms(this.style.get(e, this.extend, this.multiple))
    ;(this.mustSelect ||
      !a.eq(s.state.selection) ||
      (a.main.assoc != s.state.selection.main.assoc && this.dragging === !1)) &&
      this.view.dispatch({ selection: a, userEvent: 'select.pointer' }),
      (this.mustSelect = !1)
  }
  update(e) {
    e.docChanged &&
      this.dragging &&
      (this.dragging = this.dragging.map(e.changes)),
      this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20)
  }
}
function addsSelectionRange(o, e) {
  let s = o.state.facet(clickAddsSelectionRange)
  return s.length ? s[0](e) : browser.mac ? e.metaKey : e.ctrlKey
}
function dragMovesSelection(o, e) {
  let s = o.state.facet(dragMovesSelection$1)
  return s.length ? s[0](e) : browser.mac ? !e.altKey : !e.ctrlKey
}
function isInPrimarySelection(o, e) {
  let { main: s } = o.state.selection
  if (s.empty) return !1
  let a = getSelection(o.root)
  if (!a || a.rangeCount == 0) return !0
  let c = a.getRangeAt(0).getClientRects()
  for (let h = 0; h < c.length; h++) {
    let d = c[h]
    if (
      d.left <= e.clientX &&
      d.right >= e.clientX &&
      d.top <= e.clientY &&
      d.bottom >= e.clientY
    )
      return !0
  }
  return !1
}
function eventBelongsToEditor(o, e) {
  if (!e.bubbles) return !0
  if (e.defaultPrevented) return !1
  for (let s = e.target, a; s != o.contentDOM; s = s.parentNode)
    if (
      !s ||
      s.nodeType == 11 ||
      ((a = ContentView.get(s)) && a.ignoreEvent(e))
    )
      return !1
  return !0
}
const handlers = Object.create(null),
  observers = Object.create(null),
  brokenClipboardAPI =
    (browser.ie && browser.ie_version < 15) ||
    (browser.ios && browser.webkit_version < 604)
function capturePaste(o) {
  let e = o.dom.parentNode
  if (!e) return
  let s = e.appendChild(document.createElement('textarea'))
  ;(s.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
    s.focus(),
    setTimeout(() => {
      o.focus(), s.remove(), doPaste(o, s.value)
    }, 50)
}
function doPaste(o, e) {
  let { state: s } = o,
    a,
    c = 1,
    h = s.toText(e),
    d = h.lines == s.selection.ranges.length
  if (
    lastLinewiseCopy != null &&
    s.selection.ranges.every((b) => b.empty) &&
    lastLinewiseCopy == h.toString()
  ) {
    let b = -1
    a = s.changeByRange(($) => {
      let _ = s.doc.lineAt($.from)
      if (_.from == b) return { range: $ }
      b = _.from
      let j = s.toText((d ? h.line(c++).text : e) + s.lineBreak)
      return {
        changes: { from: _.from, insert: j },
        range: EditorSelection.cursor($.from + j.length)
      }
    })
  } else
    d
      ? (a = s.changeByRange((b) => {
          let $ = h.line(c++)
          return {
            changes: { from: b.from, to: b.to, insert: $.text },
            range: EditorSelection.cursor(b.from + $.length)
          }
        }))
      : (a = s.replaceSelection(h))
  o.dispatch(a, { userEvent: 'input.paste', scrollIntoView: !0 })
}
observers.scroll = (o) => {
  ;(o.inputState.lastScrollTop = o.scrollDOM.scrollTop),
    (o.inputState.lastScrollLeft = o.scrollDOM.scrollLeft)
}
handlers.keydown = (o, e) => (
  o.inputState.setSelectionOrigin('select'),
  e.keyCode == 27 && (o.inputState.lastEscPress = Date.now()),
  !1
)
observers.touchstart = (o, e) => {
  ;(o.inputState.lastTouchTime = Date.now()),
    o.inputState.setSelectionOrigin('select.pointer')
}
observers.touchmove = (o) => {
  o.inputState.setSelectionOrigin('select.pointer')
}
handlers.mousedown = (o, e) => {
  if ((o.observer.flush(), o.inputState.lastTouchTime > Date.now() - 2e3))
    return !1
  let s = null
  for (let a of o.state.facet(mouseSelectionStyle))
    if (((s = a(o, e)), s)) break
  if ((!s && e.button == 0 && (s = basicMouseSelection(o, e)), s)) {
    let a = !o.hasFocus
    o.inputState.startMouseSelection(new MouseSelection(o, e, s, a)),
      a && o.observer.ignore(() => focusPreventScroll(o.contentDOM))
    let c = o.inputState.mouseSelection
    if (c) return c.start(e), !c.dragging
  }
  return !1
}
function rangeForClick(o, e, s, a) {
  if (a == 1) return EditorSelection.cursor(e, s)
  if (a == 2) return groupAt(o.state, e, s)
  {
    let c = LineView.find(o.docView, e),
      h = o.state.doc.lineAt(c ? c.posAtEnd : e),
      d = c ? c.posAtStart : h.from,
      g = c ? c.posAtEnd : h.to
    return (
      g < o.state.doc.length && g == h.to && g++, EditorSelection.range(d, g)
    )
  }
}
let insideY = (o, e) => o >= e.top && o <= e.bottom,
  inside = (o, e, s) => insideY(e, s) && o >= s.left && o <= s.right
function findPositionSide(o, e, s, a) {
  let c = LineView.find(o.docView, e)
  if (!c) return 1
  let h = e - c.posAtStart
  if (h == 0) return 1
  if (h == c.length) return -1
  let d = c.coordsAt(h, -1)
  if (d && inside(s, a, d)) return -1
  let g = c.coordsAt(h, 1)
  return g && inside(s, a, g) ? 1 : d && insideY(a, d) ? -1 : 1
}
function queryPos(o, e) {
  let s = o.posAtCoords({ x: e.clientX, y: e.clientY }, !1)
  return { pos: s, bias: findPositionSide(o, s, e.clientX, e.clientY) }
}
const BadMouseDetail = browser.ie && browser.ie_version <= 11
let lastMouseDown = null,
  lastMouseDownCount = 0,
  lastMouseDownTime = 0
function getClickType(o) {
  if (!BadMouseDetail) return o.detail
  let e = lastMouseDown,
    s = lastMouseDownTime
  return (
    (lastMouseDown = o),
    (lastMouseDownTime = Date.now()),
    (lastMouseDownCount =
      !e ||
      (s > Date.now() - 400 &&
        Math.abs(e.clientX - o.clientX) < 2 &&
        Math.abs(e.clientY - o.clientY) < 2)
        ? (lastMouseDownCount + 1) % 3
        : 1)
  )
}
function basicMouseSelection(o, e) {
  let s = queryPos(o, e),
    a = getClickType(e),
    c = o.state.selection
  return {
    update(h) {
      h.docChanged &&
        ((s.pos = h.changes.mapPos(s.pos)), (c = c.map(h.changes)))
    },
    get(h, d, g) {
      let b = queryPos(o, h),
        $,
        _ = rangeForClick(o, b.pos, b.bias, a)
      if (s.pos != b.pos && !d) {
        let j = rangeForClick(o, s.pos, s.bias, a),
          _e = Math.min(j.from, _.from),
          et = Math.max(j.to, _.to)
        _ =
          _e < _.from
            ? EditorSelection.range(_e, et)
            : EditorSelection.range(et, _e)
      }
      return d
        ? c.replaceRange(c.main.extend(_.from, _.to))
        : g &&
          a == 1 &&
          c.ranges.length > 1 &&
          ($ = removeRangeAround(c, b.pos))
        ? $
        : g
        ? c.addRange(_)
        : EditorSelection.create([_])
    }
  }
}
function removeRangeAround(o, e) {
  for (let s = 0; s < o.ranges.length; s++) {
    let { from: a, to: c } = o.ranges[s]
    if (a <= e && c >= e)
      return EditorSelection.create(
        o.ranges.slice(0, s).concat(o.ranges.slice(s + 1)),
        o.mainIndex == s ? 0 : o.mainIndex - (o.mainIndex > s ? 1 : 0)
      )
  }
  return null
}
handlers.dragstart = (o, e) => {
  let {
      selection: { main: s }
    } = o.state,
    { mouseSelection: a } = o.inputState
  return (
    a && (a.dragging = s),
    e.dataTransfer &&
      (e.dataTransfer.setData('Text', o.state.sliceDoc(s.from, s.to)),
      (e.dataTransfer.effectAllowed = 'copyMove')),
    !1
  )
}
function dropText(o, e, s, a) {
  if (!s) return
  let c = o.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    { mouseSelection: h } = o.inputState,
    d =
      a && h && h.dragging && dragMovesSelection(o, e)
        ? { from: h.dragging.from, to: h.dragging.to }
        : null,
    g = { from: c, insert: s },
    b = o.state.changes(d ? [d, g] : g)
  o.focus(),
    o.dispatch({
      changes: b,
      selection: { anchor: b.mapPos(c, -1), head: b.mapPos(c, 1) },
      userEvent: d ? 'move.drop' : 'input.drop'
    })
}
handlers.drop = (o, e) => {
  if (!e.dataTransfer) return !1
  if (o.state.readOnly) return !0
  let s = e.dataTransfer.files
  if (s && s.length) {
    let a = Array(s.length),
      c = 0,
      h = () => {
        ++c == s.length &&
          dropText(o, e, a.filter((d) => d != null).join(o.state.lineBreak), !1)
      }
    for (let d = 0; d < s.length; d++) {
      let g = new FileReader()
      ;(g.onerror = h),
        (g.onload = () => {
          ;/[\x00-\x08\x0e-\x1f]{2}/.test(g.result) || (a[d] = g.result), h()
        }),
        g.readAsText(s[d])
    }
    return !0
  } else {
    let a = e.dataTransfer.getData('Text')
    if (a) return dropText(o, e, a, !0), !0
  }
  return !1
}
handlers.paste = (o, e) => {
  if (o.state.readOnly) return !0
  o.observer.flush()
  let s = brokenClipboardAPI ? null : e.clipboardData
  return s
    ? (doPaste(o, s.getData('text/plain') || s.getData('text/uri-text')), !0)
    : (capturePaste(o), !1)
}
function captureCopy(o, e) {
  let s = o.dom.parentNode
  if (!s) return
  let a = s.appendChild(document.createElement('textarea'))
  ;(a.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
    (a.value = e),
    a.focus(),
    (a.selectionEnd = e.length),
    (a.selectionStart = 0),
    setTimeout(() => {
      a.remove(), o.focus()
    }, 50)
}
function copiedRange(o) {
  let e = [],
    s = [],
    a = !1
  for (let c of o.selection.ranges)
    c.empty || (e.push(o.sliceDoc(c.from, c.to)), s.push(c))
  if (!e.length) {
    let c = -1
    for (let { from: h } of o.selection.ranges) {
      let d = o.doc.lineAt(h)
      d.number > c &&
        (e.push(d.text),
        s.push({ from: d.from, to: Math.min(o.doc.length, d.to + 1) })),
        (c = d.number)
    }
    a = !0
  }
  return { text: e.join(o.lineBreak), ranges: s, linewise: a }
}
let lastLinewiseCopy = null
handlers.copy = handlers.cut = (o, e) => {
  let { text: s, ranges: a, linewise: c } = copiedRange(o.state)
  if (!s && !c) return !1
  ;(lastLinewiseCopy = c ? s : null),
    e.type == 'cut' &&
      !o.state.readOnly &&
      o.dispatch({ changes: a, scrollIntoView: !0, userEvent: 'delete.cut' })
  let h = brokenClipboardAPI ? null : e.clipboardData
  return h
    ? (h.clearData(), h.setData('text/plain', s), !0)
    : (captureCopy(o, s), !1)
}
const isFocusChange = Annotation.define()
function focusChangeTransaction(o, e) {
  let s = []
  for (let a of o.facet(focusChangeEffect)) {
    let c = a(o, e)
    c && s.push(c)
  }
  return s ? o.update({ effects: s, annotations: isFocusChange.of(!0) }) : null
}
function updateForFocusChange(o) {
  setTimeout(() => {
    let e = o.hasFocus
    if (e != o.inputState.notifiedFocused) {
      let s = focusChangeTransaction(o.state, e)
      s ? o.dispatch(s) : o.update([])
    }
  }, 10)
}
observers.focus = (o) => {
  ;(o.inputState.lastFocusTime = Date.now()),
    !o.scrollDOM.scrollTop &&
      (o.inputState.lastScrollTop || o.inputState.lastScrollLeft) &&
      ((o.scrollDOM.scrollTop = o.inputState.lastScrollTop),
      (o.scrollDOM.scrollLeft = o.inputState.lastScrollLeft)),
    updateForFocusChange(o)
}
observers.blur = (o) => {
  o.observer.clearSelectionRange(), updateForFocusChange(o)
}
observers.compositionstart = observers.compositionupdate = (o) => {
  o.inputState.compositionFirstChange == null &&
    (o.inputState.compositionFirstChange = !0),
    o.inputState.composing < 0 && (o.inputState.composing = 0)
}
observers.compositionend = (o) => {
  ;(o.inputState.composing = -1),
    (o.inputState.compositionEndedAt = Date.now()),
    (o.inputState.compositionPendingKey = !0),
    (o.inputState.compositionPendingChange =
      o.observer.pendingRecords().length > 0),
    (o.inputState.compositionFirstChange = null),
    browser.chrome && browser.android
      ? o.observer.flushSoon()
      : o.inputState.compositionPendingChange
      ? Promise.resolve().then(() => o.observer.flush())
      : setTimeout(() => {
          o.inputState.composing < 0 && o.docView.hasComposition && o.update([])
        }, 50)
}
observers.contextmenu = (o) => {
  o.inputState.lastContextMenu = Date.now()
}
handlers.beforeinput = (o, e) => {
  var s
  let a
  if (
    browser.chrome &&
    browser.android &&
    (a = PendingKeys.find((c) => c.inputType == e.inputType)) &&
    (o.observer.delayAndroidKey(a.key, a.keyCode),
    a.key == 'Backspace' || a.key == 'Delete')
  ) {
    let c =
      ((s = window.visualViewport) === null || s === void 0
        ? void 0
        : s.height) || 0
    setTimeout(() => {
      var h
      ;(((h = window.visualViewport) === null || h === void 0
        ? void 0
        : h.height) || 0) >
        c + 10 &&
        o.hasFocus &&
        (o.contentDOM.blur(), o.focus())
    }, 100)
  }
  return !1
}
const appliedFirefoxHack = new Set()
function firefoxCopyCutHack(o) {
  appliedFirefoxHack.has(o) ||
    (appliedFirefoxHack.add(o),
    o.addEventListener('copy', () => {}),
    o.addEventListener('cut', () => {}))
}
const wrappingWhiteSpace = ['pre-wrap', 'normal', 'pre-line', 'break-spaces']
class HeightOracle {
  constructor(e) {
    ;(this.lineWrapping = e),
      (this.doc = Text.empty),
      (this.heightSamples = {}),
      (this.lineHeight = 14),
      (this.charWidth = 7),
      (this.textHeight = 14),
      (this.lineLength = 30),
      (this.heightChanged = !1)
  }
  heightForGap(e, s) {
    let a = this.doc.lineAt(s).number - this.doc.lineAt(e).number + 1
    return (
      this.lineWrapping &&
        (a += Math.max(
          0,
          Math.ceil((s - e - a * this.lineLength * 0.5) / this.lineLength)
        )),
      this.lineHeight * a
    )
  }
  heightForLine(e) {
    return this.lineWrapping
      ? (1 +
          Math.max(
            0,
            Math.ceil((e - this.lineLength) / (this.lineLength - 5))
          )) *
          this.lineHeight
      : this.lineHeight
  }
  setDoc(e) {
    return (this.doc = e), this
  }
  mustRefreshForWrapping(e) {
    return wrappingWhiteSpace.indexOf(e) > -1 != this.lineWrapping
  }
  mustRefreshForHeights(e) {
    let s = !1
    for (let a = 0; a < e.length; a++) {
      let c = e[a]
      c < 0
        ? a++
        : this.heightSamples[Math.floor(c * 10)] ||
          ((s = !0), (this.heightSamples[Math.floor(c * 10)] = !0))
    }
    return s
  }
  refresh(e, s, a, c, h, d) {
    let g = wrappingWhiteSpace.indexOf(e) > -1,
      b = Math.round(s) != Math.round(this.lineHeight) || this.lineWrapping != g
    if (
      ((this.lineWrapping = g),
      (this.lineHeight = s),
      (this.charWidth = a),
      (this.textHeight = c),
      (this.lineLength = h),
      b)
    ) {
      this.heightSamples = {}
      for (let $ = 0; $ < d.length; $++) {
        let _ = d[$]
        _ < 0 ? $++ : (this.heightSamples[Math.floor(_ * 10)] = !0)
      }
    }
    return b
  }
}
class MeasuredHeights {
  constructor(e, s) {
    ;(this.from = e), (this.heights = s), (this.index = 0)
  }
  get more() {
    return this.index < this.heights.length
  }
}
class BlockInfo {
  constructor(e, s, a, c, h) {
    ;(this.from = e),
      (this.length = s),
      (this.top = a),
      (this.height = c),
      (this._content = h)
  }
  get type() {
    return typeof this._content == 'number'
      ? BlockType.Text
      : Array.isArray(this._content)
      ? this._content
      : this._content.type
  }
  get to() {
    return this.from + this.length
  }
  get bottom() {
    return this.top + this.height
  }
  get widget() {
    return this._content instanceof PointDecoration
      ? this._content.widget
      : null
  }
  get widgetLineBreaks() {
    return typeof this._content == 'number' ? this._content : 0
  }
  join(e) {
    let s = (Array.isArray(this._content) ? this._content : [this]).concat(
      Array.isArray(e._content) ? e._content : [e]
    )
    return new BlockInfo(
      this.from,
      this.length + e.length,
      this.top,
      this.height + e.height,
      s
    )
  }
}
var QueryType$1 = (function (o) {
  return (
    (o[(o.ByPos = 0)] = 'ByPos'),
    (o[(o.ByHeight = 1)] = 'ByHeight'),
    (o[(o.ByPosNoHeight = 2)] = 'ByPosNoHeight'),
    o
  )
})(QueryType$1 || (QueryType$1 = {}))
const Epsilon = 0.001
class HeightMap {
  constructor(e, s, a = 2) {
    ;(this.length = e), (this.height = s), (this.flags = a)
  }
  get outdated() {
    return (this.flags & 2) > 0
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | (this.flags & -3)
  }
  setHeight(e, s) {
    this.height != s &&
      (Math.abs(this.height - s) > Epsilon && (e.heightChanged = !0),
      (this.height = s))
  }
  replace(e, s, a) {
    return HeightMap.of(a)
  }
  decomposeLeft(e, s) {
    s.push(this)
  }
  decomposeRight(e, s) {
    s.push(this)
  }
  applyChanges(e, s, a, c) {
    let h = this,
      d = a.doc
    for (let g = c.length - 1; g >= 0; g--) {
      let { fromA: b, toA: $, fromB: _, toB: j } = c[g],
        _e = h.lineAt(b, QueryType$1.ByPosNoHeight, a.setDoc(s), 0, 0),
        et = _e.to >= $ ? _e : h.lineAt($, QueryType$1.ByPosNoHeight, a, 0, 0)
      for (j += et.to - $, $ = et.to; g > 0 && _e.from <= c[g - 1].toA; )
        (b = c[g - 1].fromA),
          (_ = c[g - 1].fromB),
          g--,
          b < _e.from && (_e = h.lineAt(b, QueryType$1.ByPosNoHeight, a, 0, 0))
      ;(_ += _e.from - b), (b = _e.from)
      let tt = NodeBuilder.build(a.setDoc(d), e, _, j)
      h = h.replace(b, $, tt)
    }
    return h.updateHeight(a, 0)
  }
  static empty() {
    return new HeightMapText(0, 0)
  }
  static of(e) {
    if (e.length == 1) return e[0]
    let s = 0,
      a = e.length,
      c = 0,
      h = 0
    for (;;)
      if (s == a)
        if (c > h * 2) {
          let g = e[s - 1]
          g.break
            ? e.splice(--s, 1, g.left, null, g.right)
            : e.splice(--s, 1, g.left, g.right),
            (a += 1 + g.break),
            (c -= g.size)
        } else if (h > c * 2) {
          let g = e[a]
          g.break
            ? e.splice(a, 1, g.left, null, g.right)
            : e.splice(a, 1, g.left, g.right),
            (a += 2 + g.break),
            (h -= g.size)
        } else break
      else if (c < h) {
        let g = e[s++]
        g && (c += g.size)
      } else {
        let g = e[--a]
        g && (h += g.size)
      }
    let d = 0
    return (
      e[s - 1] == null ? ((d = 1), s--) : e[s] == null && ((d = 1), a++),
      new HeightMapBranch(
        HeightMap.of(e.slice(0, s)),
        d,
        HeightMap.of(e.slice(a))
      )
    )
  }
}
HeightMap.prototype.size = 1
class HeightMapBlock extends HeightMap {
  constructor(e, s, a) {
    super(e, s), (this.deco = a)
  }
  blockAt(e, s, a, c) {
    return new BlockInfo(c, this.length, a, this.height, this.deco || 0)
  }
  lineAt(e, s, a, c, h) {
    return this.blockAt(0, a, c, h)
  }
  forEachLine(e, s, a, c, h, d) {
    e <= h + this.length && s >= h && d(this.blockAt(0, a, c, h))
  }
  updateHeight(e, s = 0, a = !1, c) {
    return (
      c && c.from <= s && c.more && this.setHeight(e, c.heights[c.index++]),
      (this.outdated = !1),
      this
    )
  }
  toString() {
    return `block(${this.length})`
  }
}
class HeightMapText extends HeightMapBlock {
  constructor(e, s) {
    super(e, s, null),
      (this.collapsed = 0),
      (this.widgetHeight = 0),
      (this.breaks = 0)
  }
  blockAt(e, s, a, c) {
    return new BlockInfo(c, this.length, a, this.height, this.breaks)
  }
  replace(e, s, a) {
    let c = a[0]
    return a.length == 1 &&
      (c instanceof HeightMapText ||
        (c instanceof HeightMapGap && c.flags & 4)) &&
      Math.abs(this.length - c.length) < 10
      ? (c instanceof HeightMapGap
          ? (c = new HeightMapText(c.length, this.height))
          : (c.height = this.height),
        this.outdated || (c.outdated = !1),
        c)
      : HeightMap.of(a)
  }
  updateHeight(e, s = 0, a = !1, c) {
    return (
      c && c.from <= s && c.more
        ? this.setHeight(e, c.heights[c.index++])
        : (a || this.outdated) &&
          this.setHeight(
            e,
            Math.max(
              this.widgetHeight,
              e.heightForLine(this.length - this.collapsed)
            ) +
              this.breaks * e.lineHeight
          ),
      (this.outdated = !1),
      this
    )
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ''}${
      this.widgetHeight ? ':' + this.widgetHeight : ''
    })`
  }
}
class HeightMapGap extends HeightMap {
  constructor(e) {
    super(e, 0)
  }
  heightMetrics(e, s) {
    let a = e.doc.lineAt(s).number,
      c = e.doc.lineAt(s + this.length).number,
      h = c - a + 1,
      d,
      g = 0
    if (e.lineWrapping) {
      let b = Math.min(this.height, e.lineHeight * h)
      ;(d = b / h),
        this.length > h + 1 && (g = (this.height - b) / (this.length - h - 1))
    } else d = this.height / h
    return { firstLine: a, lastLine: c, perLine: d, perChar: g }
  }
  blockAt(e, s, a, c) {
    let {
      firstLine: h,
      lastLine: d,
      perLine: g,
      perChar: b
    } = this.heightMetrics(s, c)
    if (s.lineWrapping) {
      let $ =
          c +
          Math.round(
            Math.max(0, Math.min(1, (e - a) / this.height)) * this.length
          ),
        _ = s.doc.lineAt($),
        j = g + _.length * b,
        _e = Math.max(a, e - j / 2)
      return new BlockInfo(_.from, _.length, _e, j, 0)
    } else {
      let $ = Math.max(0, Math.min(d - h, Math.floor((e - a) / g))),
        { from: _, length: j } = s.doc.line(h + $)
      return new BlockInfo(_, j, a + g * $, g, 0)
    }
  }
  lineAt(e, s, a, c, h) {
    if (s == QueryType$1.ByHeight) return this.blockAt(e, a, c, h)
    if (s == QueryType$1.ByPosNoHeight) {
      let { from: et, to: tt } = a.doc.lineAt(e)
      return new BlockInfo(et, tt - et, 0, 0, 0)
    }
    let { firstLine: d, perLine: g, perChar: b } = this.heightMetrics(a, h),
      $ = a.doc.lineAt(e),
      _ = g + $.length * b,
      j = $.number - d,
      _e = c + g * j + b * ($.from - h - j)
    return new BlockInfo(
      $.from,
      $.length,
      Math.max(c, Math.min(_e, c + this.height - _)),
      _,
      0
    )
  }
  forEachLine(e, s, a, c, h, d) {
    ;(e = Math.max(e, h)), (s = Math.min(s, h + this.length))
    let { firstLine: g, perLine: b, perChar: $ } = this.heightMetrics(a, h)
    for (let _ = e, j = c; _ <= s; ) {
      let _e = a.doc.lineAt(_)
      if (_ == e) {
        let tt = _e.number - g
        j += b * tt + $ * (e - h - tt)
      }
      let et = b + $ * _e.length
      d(new BlockInfo(_e.from, _e.length, j, et, 0)), (j += et), (_ = _e.to + 1)
    }
  }
  replace(e, s, a) {
    let c = this.length - s
    if (c > 0) {
      let h = a[a.length - 1]
      h instanceof HeightMapGap
        ? (a[a.length - 1] = new HeightMapGap(h.length + c))
        : a.push(null, new HeightMapGap(c - 1))
    }
    if (e > 0) {
      let h = a[0]
      h instanceof HeightMapGap
        ? (a[0] = new HeightMapGap(e + h.length))
        : a.unshift(new HeightMapGap(e - 1), null)
    }
    return HeightMap.of(a)
  }
  decomposeLeft(e, s) {
    s.push(new HeightMapGap(e - 1), null)
  }
  decomposeRight(e, s) {
    s.push(null, new HeightMapGap(this.length - e - 1))
  }
  updateHeight(e, s = 0, a = !1, c) {
    let h = s + this.length
    if (c && c.from <= s + this.length && c.more) {
      let d = [],
        g = Math.max(s, c.from),
        b = -1
      for (
        c.from > s &&
        d.push(new HeightMapGap(c.from - s - 1).updateHeight(e, s));
        g <= h && c.more;

      ) {
        let _ = e.doc.lineAt(g).length
        d.length && d.push(null)
        let j = c.heights[c.index++]
        b == -1 ? (b = j) : Math.abs(j - b) >= Epsilon && (b = -2)
        let _e = new HeightMapText(_, j)
        ;(_e.outdated = !1), d.push(_e), (g += _ + 1)
      }
      g <= h && d.push(null, new HeightMapGap(h - g).updateHeight(e, g))
      let $ = HeightMap.of(d)
      return (
        (b < 0 ||
          Math.abs($.height - this.height) >= Epsilon ||
          Math.abs(b - this.heightMetrics(e, s).perLine) >= Epsilon) &&
          (e.heightChanged = !0),
        $
      )
    } else
      (a || this.outdated) &&
        (this.setHeight(e, e.heightForGap(s, s + this.length)),
        (this.outdated = !1))
    return this
  }
  toString() {
    return `gap(${this.length})`
  }
}
class HeightMapBranch extends HeightMap {
  constructor(e, s, a) {
    super(
      e.length + s + a.length,
      e.height + a.height,
      s | (e.outdated || a.outdated ? 2 : 0)
    ),
      (this.left = e),
      (this.right = a),
      (this.size = e.size + a.size)
  }
  get break() {
    return this.flags & 1
  }
  blockAt(e, s, a, c) {
    let h = a + this.left.height
    return e < h
      ? this.left.blockAt(e, s, a, c)
      : this.right.blockAt(e, s, h, c + this.left.length + this.break)
  }
  lineAt(e, s, a, c, h) {
    let d = c + this.left.height,
      g = h + this.left.length + this.break,
      b = s == QueryType$1.ByHeight ? e < d : e < g,
      $ = b ? this.left.lineAt(e, s, a, c, h) : this.right.lineAt(e, s, a, d, g)
    if (this.break || (b ? $.to < g : $.from > g)) return $
    let _ =
      s == QueryType$1.ByPosNoHeight
        ? QueryType$1.ByPosNoHeight
        : QueryType$1.ByPos
    return b
      ? $.join(this.right.lineAt(g, _, a, d, g))
      : this.left.lineAt(g, _, a, c, h).join($)
  }
  forEachLine(e, s, a, c, h, d) {
    let g = c + this.left.height,
      b = h + this.left.length + this.break
    if (this.break)
      e < b && this.left.forEachLine(e, s, a, c, h, d),
        s >= b && this.right.forEachLine(e, s, a, g, b, d)
    else {
      let $ = this.lineAt(b, QueryType$1.ByPos, a, c, h)
      e < $.from && this.left.forEachLine(e, $.from - 1, a, c, h, d),
        $.to >= e && $.from <= s && d($),
        s > $.to && this.right.forEachLine($.to + 1, s, a, g, b, d)
    }
  }
  replace(e, s, a) {
    let c = this.left.length + this.break
    if (s < c) return this.balanced(this.left.replace(e, s, a), this.right)
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - c, s - c, a))
    let h = []
    e > 0 && this.decomposeLeft(e, h)
    let d = h.length
    for (let g of a) h.push(g)
    if ((e > 0 && mergeGaps(h, d - 1), s < this.length)) {
      let g = h.length
      this.decomposeRight(s, h), mergeGaps(h, g)
    }
    return HeightMap.of(h)
  }
  decomposeLeft(e, s) {
    let a = this.left.length
    if (e <= a) return this.left.decomposeLeft(e, s)
    s.push(this.left),
      this.break && (a++, e >= a && s.push(null)),
      e > a && this.right.decomposeLeft(e - a, s)
  }
  decomposeRight(e, s) {
    let a = this.left.length,
      c = a + this.break
    if (e >= c) return this.right.decomposeRight(e - c, s)
    e < a && this.left.decomposeRight(e, s),
      this.break && e < c && s.push(null),
      s.push(this.right)
  }
  balanced(e, s) {
    return e.size > 2 * s.size || s.size > 2 * e.size
      ? HeightMap.of(this.break ? [e, null, s] : [e, s])
      : ((this.left = e),
        (this.right = s),
        (this.height = e.height + s.height),
        (this.outdated = e.outdated || s.outdated),
        (this.size = e.size + s.size),
        (this.length = e.length + this.break + s.length),
        this)
  }
  updateHeight(e, s = 0, a = !1, c) {
    let { left: h, right: d } = this,
      g = s + h.length + this.break,
      b = null
    return (
      c && c.from <= s + h.length && c.more
        ? (b = h = h.updateHeight(e, s, a, c))
        : h.updateHeight(e, s, a),
      c && c.from <= g + d.length && c.more
        ? (b = d = d.updateHeight(e, g, a, c))
        : d.updateHeight(e, g, a),
      b
        ? this.balanced(h, d)
        : ((this.height = this.left.height + this.right.height),
          (this.outdated = !1),
          this)
    )
  }
  toString() {
    return this.left + (this.break ? ' ' : '-') + this.right
  }
}
function mergeGaps(o, e) {
  let s, a
  o[e] == null &&
    (s = o[e - 1]) instanceof HeightMapGap &&
    (a = o[e + 1]) instanceof HeightMapGap &&
    o.splice(e - 1, 3, new HeightMapGap(s.length + 1 + a.length))
}
const relevantWidgetHeight = 5
class NodeBuilder {
  constructor(e, s) {
    ;(this.pos = e),
      (this.oracle = s),
      (this.nodes = []),
      (this.lineStart = -1),
      (this.lineEnd = -1),
      (this.covering = null),
      (this.writtenTo = e)
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering
  }
  span(e, s) {
    if (this.lineStart > -1) {
      let a = Math.min(s, this.lineEnd),
        c = this.nodes[this.nodes.length - 1]
      c instanceof HeightMapText
        ? (c.length += a - this.pos)
        : (a > this.pos || !this.isCovered) &&
          this.nodes.push(new HeightMapText(a - this.pos, -1)),
        (this.writtenTo = a),
        s > a &&
          (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1))
    }
    this.pos = s
  }
  point(e, s, a) {
    if (e < s || a.heightRelevant) {
      let c = a.widget ? a.widget.estimatedHeight : 0,
        h = a.widget ? a.widget.lineBreaks : 0
      c < 0 && (c = this.oracle.lineHeight)
      let d = s - e
      a.block
        ? this.addBlock(new HeightMapBlock(d, c, a))
        : (d || h || c >= relevantWidgetHeight) && this.addLineDeco(c, h, d)
    } else s > e && this.span(e, s)
    this.lineEnd > -1 &&
      this.lineEnd < this.pos &&
      (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
  }
  enterLine() {
    if (this.lineStart > -1) return
    let { from: e, to: s } = this.oracle.doc.lineAt(this.pos)
    ;(this.lineStart = e),
      (this.lineEnd = s),
      this.writtenTo < e &&
        ((this.writtenTo < e - 1 ||
          this.nodes[this.nodes.length - 1] == null) &&
          this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
        this.nodes.push(null)),
      this.pos > e && this.nodes.push(new HeightMapText(this.pos - e, -1)),
      (this.writtenTo = this.pos)
  }
  blankContent(e, s) {
    let a = new HeightMapGap(s - e)
    return this.oracle.doc.lineAt(e).to == s && (a.flags |= 4), a
  }
  ensureLine() {
    this.enterLine()
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null
    if (e instanceof HeightMapText) return e
    let s = new HeightMapText(0, -1)
    return this.nodes.push(s), s
  }
  addBlock(e) {
    this.enterLine()
    let s = e.deco
    s && s.startSide > 0 && !this.isCovered && this.ensureLine(),
      this.nodes.push(e),
      (this.writtenTo = this.pos = this.pos + e.length),
      s && s.endSide > 0 && (this.covering = e)
  }
  addLineDeco(e, s, a) {
    let c = this.ensureLine()
    ;(c.length += a),
      (c.collapsed += a),
      (c.widgetHeight = Math.max(c.widgetHeight, e)),
      (c.breaks += s),
      (this.writtenTo = this.pos = this.pos + a)
  }
  finish(e) {
    let s = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1]
    this.lineStart > -1 && !(s instanceof HeightMapText) && !this.isCovered
      ? this.nodes.push(new HeightMapText(0, -1))
      : (this.writtenTo < this.pos || s == null) &&
        this.nodes.push(this.blankContent(this.writtenTo, this.pos))
    let a = e
    for (let c of this.nodes)
      c instanceof HeightMapText && c.updateHeight(this.oracle, a),
        (a += c ? c.length : 1)
    return this.nodes
  }
  static build(e, s, a, c) {
    let h = new NodeBuilder(a, e)
    return RangeSet.spans(s, a, c, h, 0), h.finish(a)
  }
}
function heightRelevantDecoChanges(o, e, s) {
  let a = new DecorationComparator()
  return RangeSet.compare(o, e, s, a, 0), a.changes
}
class DecorationComparator {
  constructor() {
    this.changes = []
  }
  compareRange() {}
  comparePoint(e, s, a, c) {
    ;(e < s || (a && a.heightRelevant) || (c && c.heightRelevant)) &&
      addRange(e, s, this.changes, 5)
  }
}
function visiblePixelRange(o, e) {
  let s = o.getBoundingClientRect(),
    a = o.ownerDocument,
    c = a.defaultView || window,
    h = Math.max(0, s.left),
    d = Math.min(c.innerWidth, s.right),
    g = Math.max(0, s.top),
    b = Math.min(c.innerHeight, s.bottom)
  for (let $ = o.parentNode; $ && $ != a.body; )
    if ($.nodeType == 1) {
      let _ = $,
        j = window.getComputedStyle(_)
      if (
        (_.scrollHeight > _.clientHeight || _.scrollWidth > _.clientWidth) &&
        j.overflow != 'visible'
      ) {
        let _e = _.getBoundingClientRect()
        ;(h = Math.max(h, _e.left)),
          (d = Math.min(d, _e.right)),
          (g = Math.max(g, _e.top)),
          (b = $ == o.parentNode ? _e.bottom : Math.min(b, _e.bottom))
      }
      $ =
        j.position == 'absolute' || j.position == 'fixed'
          ? _.offsetParent
          : _.parentNode
    } else if ($.nodeType == 11) $ = $.host
    else break
  return {
    left: h - s.left,
    right: Math.max(h, d) - s.left,
    top: g - (s.top + e),
    bottom: Math.max(g, b) - (s.top + e)
  }
}
function fullPixelRange(o, e) {
  let s = o.getBoundingClientRect()
  return {
    left: 0,
    right: s.right - s.left,
    top: e,
    bottom: s.bottom - (s.top + e)
  }
}
class LineGap {
  constructor(e, s, a) {
    ;(this.from = e), (this.to = s), (this.size = a)
  }
  static same(e, s) {
    if (e.length != s.length) return !1
    for (let a = 0; a < e.length; a++) {
      let c = e[a],
        h = s[a]
      if (c.from != h.from || c.to != h.to || c.size != h.size) return !1
    }
    return !0
  }
  draw(e, s) {
    return Decoration.replace({
      widget: new LineGapWidget(this.size * (s ? e.scaleY : e.scaleX), s)
    }).range(this.from, this.to)
  }
}
class LineGapWidget extends WidgetType {
  constructor(e, s) {
    super(), (this.size = e), (this.vertical = s)
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical
  }
  toDOM() {
    let e = document.createElement('div')
    return (
      this.vertical
        ? (e.style.height = this.size + 'px')
        : ((e.style.width = this.size + 'px'),
          (e.style.height = '2px'),
          (e.style.display = 'inline-block')),
      e
    )
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1
  }
}
class ViewState {
  constructor(e) {
    ;(this.state = e),
      (this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0
      }),
      (this.inView = !0),
      (this.paddingTop = 0),
      (this.paddingBottom = 0),
      (this.contentDOMWidth = 0),
      (this.contentDOMHeight = 0),
      (this.editorHeight = 0),
      (this.editorWidth = 0),
      (this.scrollTop = 0),
      (this.scrolledToBottom = !0),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.scrollAnchorPos = 0),
      (this.scrollAnchorHeight = -1),
      (this.scaler = IdScaler),
      (this.scrollTarget = null),
      (this.printing = !1),
      (this.mustMeasureContent = !0),
      (this.defaultTextDirection = Direction.LTR),
      (this.visibleRanges = []),
      (this.mustEnforceCursorAssoc = !1)
    let s = e
      .facet(contentAttributes)
      .some((a) => typeof a != 'function' && a.class == 'cm-lineWrapping')
    ;(this.heightOracle = new HeightOracle(s)),
      (this.stateDeco = e
        .facet(decorations)
        .filter((a) => typeof a != 'function')),
      (this.heightMap = HeightMap.empty().applyChanges(
        this.stateDeco,
        Text.empty,
        this.heightOracle.setDoc(e.doc),
        [new ChangedRange(0, 0, 0, e.doc.length)]
      )),
      (this.viewport = this.getViewport(0, null)),
      this.updateViewportLines(),
      this.updateForViewport(),
      (this.lineGaps = this.ensureLineGaps([])),
      (this.lineGapDeco = Decoration.set(
        this.lineGaps.map((a) => a.draw(this, !1))
      )),
      this.computeVisibleRanges()
  }
  updateForViewport() {
    let e = [this.viewport],
      { main: s } = this.state.selection
    for (let a = 0; a <= 1; a++) {
      let c = a ? s.head : s.anchor
      if (!e.some(({ from: h, to: d }) => c >= h && c <= d)) {
        let { from: h, to: d } = this.lineBlockAt(c)
        e.push(new Viewport(h, d))
      }
    }
    ;(this.viewports = e.sort((a, c) => a.from - c.from)),
      (this.scaler =
        this.heightMap.height <= 7e6
          ? IdScaler
          : new BigScaler(this.heightOracle, this.heightMap, this.viewports))
  }
  updateViewportLines() {
    ;(this.viewportLines = []),
      this.heightMap.forEachLine(
        this.viewport.from,
        this.viewport.to,
        this.heightOracle.setDoc(this.state.doc),
        0,
        0,
        (e) => {
          this.viewportLines.push(
            this.scaler.scale == 1 ? e : scaleBlock(e, this.scaler)
          )
        }
      )
  }
  update(e, s = null) {
    this.state = e.state
    let a = this.stateDeco
    this.stateDeco = this.state
      .facet(decorations)
      .filter((_) => typeof _ != 'function')
    let c = e.changedRanges,
      h = ChangedRange.extendWithRanges(
        c,
        heightRelevantDecoChanges(
          a,
          this.stateDeco,
          e ? e.changes : ChangeSet.empty(this.state.doc.length)
        )
      ),
      d = this.heightMap.height,
      g = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop)
    ;(this.heightMap = this.heightMap.applyChanges(
      this.stateDeco,
      e.startState.doc,
      this.heightOracle.setDoc(this.state.doc),
      h
    )),
      this.heightMap.height != d && (e.flags |= 2),
      g
        ? ((this.scrollAnchorPos = e.changes.mapPos(g.from, -1)),
          (this.scrollAnchorHeight = g.top))
        : ((this.scrollAnchorPos = -1),
          (this.scrollAnchorHeight = this.heightMap.height))
    let b = h.length
      ? this.mapViewport(this.viewport, e.changes)
      : this.viewport
    ;((s && (s.range.head < b.from || s.range.head > b.to)) ||
      !this.viewportIsAppropriate(b)) &&
      (b = this.getViewport(0, s))
    let $ =
      !e.changes.empty ||
      e.flags & 2 ||
      b.from != this.viewport.from ||
      b.to != this.viewport.to
    ;(this.viewport = b),
      this.updateForViewport(),
      $ && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(
          this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))
        ),
      (e.flags |= this.computeVisibleRanges()),
      s && (this.scrollTarget = s),
      !this.mustEnforceCursorAssoc &&
        e.selectionSet &&
        e.view.lineWrapping &&
        e.state.selection.main.empty &&
        e.state.selection.main.assoc &&
        !e.state.facet(nativeSelectionHidden) &&
        (this.mustEnforceCursorAssoc = !0)
  }
  measure(e) {
    let s = e.contentDOM,
      a = window.getComputedStyle(s),
      c = this.heightOracle,
      h = a.whiteSpace
    this.defaultTextDirection =
      a.direction == 'rtl' ? Direction.RTL : Direction.LTR
    let d = this.heightOracle.mustRefreshForWrapping(h),
      g = s.getBoundingClientRect(),
      b = d || this.mustMeasureContent || this.contentDOMHeight != g.height
    ;(this.contentDOMHeight = g.height), (this.mustMeasureContent = !1)
    let $ = 0,
      _ = 0
    if (g.width && g.height) {
      let lt = g.width / s.offsetWidth,
        at = g.height / s.offsetHeight
      lt > 0.995 && lt < 1.005 && (lt = 1),
        at > 0.995 && at < 1.005 && (at = 1),
        (this.scaleX != lt || this.scaleY != at) &&
          ((this.scaleX = lt), (this.scaleY = at), ($ |= 8), (d = b = !0))
    }
    let j = (parseInt(a.paddingTop) || 0) * this.scaleY,
      _e = (parseInt(a.paddingBottom) || 0) * this.scaleY
    ;(this.paddingTop != j || this.paddingBottom != _e) &&
      ((this.paddingTop = j), (this.paddingBottom = _e), ($ |= 10)),
      this.editorWidth != e.scrollDOM.clientWidth &&
        (c.lineWrapping && (b = !0),
        (this.editorWidth = e.scrollDOM.clientWidth),
        ($ |= 8))
    let et = e.scrollDOM.scrollTop * this.scaleY
    this.scrollTop != et &&
      ((this.scrollAnchorHeight = -1), (this.scrollTop = et)),
      (this.scrolledToBottom = isScrolledToBottom(e.scrollDOM))
    let tt = (this.printing ? fullPixelRange : visiblePixelRange)(
        s,
        this.paddingTop
      ),
      rt = tt.top - this.pixelViewport.top,
      st = tt.bottom - this.pixelViewport.bottom
    this.pixelViewport = tt
    let nt =
      this.pixelViewport.bottom > this.pixelViewport.top &&
      this.pixelViewport.right > this.pixelViewport.left
    if (
      (nt != this.inView && ((this.inView = nt), nt && (b = !0)),
      !this.inView && !this.scrollTarget)
    )
      return 0
    let it = g.width
    if (
      ((this.contentDOMWidth != it ||
        this.editorHeight != e.scrollDOM.clientHeight) &&
        ((this.contentDOMWidth = g.width),
        (this.editorHeight = e.scrollDOM.clientHeight),
        ($ |= 8)),
      b)
    ) {
      let lt = e.docView.measureVisibleLineHeights(this.viewport)
      if (
        (c.mustRefreshForHeights(lt) && (d = !0),
        d ||
          (c.lineWrapping && Math.abs(it - this.contentDOMWidth) > c.charWidth))
      ) {
        let {
          lineHeight: at,
          charWidth: ct,
          textHeight: ut
        } = e.docView.measureTextSize()
        ;(d = at > 0 && c.refresh(h, at, ct, ut, it / ct, lt)),
          d && ((e.docView.minWidth = 0), ($ |= 8))
      }
      rt > 0 && st > 0
        ? (_ = Math.max(rt, st))
        : rt < 0 && st < 0 && (_ = Math.min(rt, st)),
        (c.heightChanged = !1)
      for (let at of this.viewports) {
        let ct =
          at.from == this.viewport.from
            ? lt
            : e.docView.measureVisibleLineHeights(at)
        this.heightMap = (
          d
            ? HeightMap.empty().applyChanges(
                this.stateDeco,
                Text.empty,
                this.heightOracle,
                [new ChangedRange(0, 0, 0, e.state.doc.length)]
              )
            : this.heightMap
        ).updateHeight(c, 0, d, new MeasuredHeights(at.from, ct))
      }
      c.heightChanged && ($ |= 2)
    }
    let ot =
      !this.viewportIsAppropriate(this.viewport, _) ||
      (this.scrollTarget &&
        (this.scrollTarget.range.head < this.viewport.from ||
          this.scrollTarget.range.head > this.viewport.to))
    return (
      ot && (this.viewport = this.getViewport(_, this.scrollTarget)),
      this.updateForViewport(),
      ($ & 2 || ot) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(this.ensureLineGaps(d ? [] : this.lineGaps, e)),
      ($ |= this.computeVisibleRanges()),
      this.mustEnforceCursorAssoc &&
        ((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
      $
    )
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top)
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom)
  }
  getViewport(e, s) {
    let a = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
      c = this.heightMap,
      h = this.heightOracle,
      { visibleTop: d, visibleBottom: g } = this,
      b = new Viewport(
        c.lineAt(d - a * 1e3, QueryType$1.ByHeight, h, 0, 0).from,
        c.lineAt(g + (1 - a) * 1e3, QueryType$1.ByHeight, h, 0, 0).to
      )
    if (s) {
      let { head: $ } = s.range
      if ($ < b.from || $ > b.to) {
        let _ = Math.min(
            this.editorHeight,
            this.pixelViewport.bottom - this.pixelViewport.top
          ),
          j = c.lineAt($, QueryType$1.ByPos, h, 0, 0),
          _e
        s.y == 'center'
          ? (_e = (j.top + j.bottom) / 2 - _ / 2)
          : s.y == 'start' || (s.y == 'nearest' && $ < b.from)
          ? (_e = j.top)
          : (_e = j.bottom - _),
          (b = new Viewport(
            c.lineAt(_e - 1e3 / 2, QueryType$1.ByHeight, h, 0, 0).from,
            c.lineAt(_e + _ + 1e3 / 2, QueryType$1.ByHeight, h, 0, 0).to
          ))
      }
    }
    return b
  }
  mapViewport(e, s) {
    let a = s.mapPos(e.from, -1),
      c = s.mapPos(e.to, 1)
    return new Viewport(
      this.heightMap.lineAt(a, QueryType$1.ByPos, this.heightOracle, 0, 0).from,
      this.heightMap.lineAt(c, QueryType$1.ByPos, this.heightOracle, 0, 0).to
    )
  }
  viewportIsAppropriate({ from: e, to: s }, a = 0) {
    if (!this.inView) return !0
    let { top: c } = this.heightMap.lineAt(
        e,
        QueryType$1.ByPos,
        this.heightOracle,
        0,
        0
      ),
      { bottom: h } = this.heightMap.lineAt(
        s,
        QueryType$1.ByPos,
        this.heightOracle,
        0,
        0
      ),
      { visibleTop: d, visibleBottom: g } = this
    return (
      (e == 0 || c <= d - Math.max(10, Math.min(-a, 250))) &&
      (s == this.state.doc.length || h >= g + Math.max(10, Math.min(a, 250))) &&
      c > d - 2 * 1e3 &&
      h < g + 2 * 1e3
    )
  }
  mapLineGaps(e, s) {
    if (!e.length || s.empty) return e
    let a = []
    for (let c of e)
      s.touchesRange(c.from, c.to) ||
        a.push(new LineGap(s.mapPos(c.from), s.mapPos(c.to), c.size))
    return a
  }
  ensureLineGaps(e, s) {
    let a = this.heightOracle.lineWrapping,
      c = a ? 1e4 : 2e3,
      h = c >> 1,
      d = c << 1
    if (this.defaultTextDirection != Direction.LTR && !a) return []
    let g = [],
      b = ($, _, j, _e) => {
        if (_ - $ < h) return
        let et = this.state.selection.main,
          tt = [et.from]
        et.empty || tt.push(et.to)
        for (let st of tt)
          if (st > $ && st < _) {
            b($, st - 10, j, _e), b(st + 10, _, j, _e)
            return
          }
        let rt = find(
          e,
          (st) =>
            st.from >= j.from &&
            st.to <= j.to &&
            Math.abs(st.from - $) < h &&
            Math.abs(st.to - _) < h &&
            !tt.some((nt) => st.from < nt && st.to > nt)
        )
        if (!rt) {
          if (
            _ < j.to &&
            s &&
            a &&
            s.visibleRanges.some((st) => st.from <= _ && st.to >= _)
          ) {
            let st = s.moveToLineBoundary(
              EditorSelection.cursor(_),
              !1,
              !0
            ).head
            st > $ && (_ = st)
          }
          rt = new LineGap($, _, this.gapSize(j, $, _, _e))
        }
        g.push(rt)
      }
    for (let $ of this.viewportLines) {
      if ($.length < d) continue
      let _ = lineStructure($.from, $.to, this.stateDeco)
      if (_.total < d) continue
      let j = this.scrollTarget ? this.scrollTarget.range.head : null,
        _e,
        et
      if (a) {
        let tt =
            (c / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
          rt,
          st
        if (j != null) {
          let nt = findFraction(_, j),
            it = ((this.visibleBottom - this.visibleTop) / 2 + tt) / $.height
          ;(rt = nt - it), (st = nt + it)
        } else
          (rt = (this.visibleTop - $.top - tt) / $.height),
            (st = (this.visibleBottom - $.top + tt) / $.height)
        ;(_e = findPosition(_, rt)), (et = findPosition(_, st))
      } else {
        let tt = _.total * this.heightOracle.charWidth,
          rt = c * this.heightOracle.charWidth,
          st,
          nt
        if (j != null) {
          let it = findFraction(_, j),
            ot =
              ((this.pixelViewport.right - this.pixelViewport.left) / 2 + rt) /
              tt
          ;(st = it - ot), (nt = it + ot)
        } else
          (st = (this.pixelViewport.left - rt) / tt),
            (nt = (this.pixelViewport.right + rt) / tt)
        ;(_e = findPosition(_, st)), (et = findPosition(_, nt))
      }
      _e > $.from && b($.from, _e, $, _), et < $.to && b(et, $.to, $, _)
    }
    return g
  }
  gapSize(e, s, a, c) {
    let h = findFraction(c, a) - findFraction(c, s)
    return this.heightOracle.lineWrapping
      ? e.height * h
      : c.total * this.heightOracle.charWidth * h
  }
  updateLineGaps(e) {
    LineGap.same(e, this.lineGaps) ||
      ((this.lineGaps = e),
      (this.lineGapDeco = Decoration.set(
        e.map((s) => s.draw(this, this.heightOracle.lineWrapping))
      )))
  }
  computeVisibleRanges() {
    let e = this.stateDeco
    this.lineGaps.length && (e = e.concat(this.lineGapDeco))
    let s = []
    RangeSet.spans(
      e,
      this.viewport.from,
      this.viewport.to,
      {
        span(c, h) {
          s.push({ from: c, to: h })
        },
        point() {}
      },
      20
    )
    let a =
      s.length != this.visibleRanges.length ||
      this.visibleRanges.some((c, h) => c.from != s[h].from || c.to != s[h].to)
    return (this.visibleRanges = s), a ? 4 : 0
  }
  lineBlockAt(e) {
    return (
      (e >= this.viewport.from &&
        e <= this.viewport.to &&
        this.viewportLines.find((s) => s.from <= e && s.to >= e)) ||
      scaleBlock(
        this.heightMap.lineAt(e, QueryType$1.ByPos, this.heightOracle, 0, 0),
        this.scaler
      )
    )
  }
  lineBlockAtHeight(e) {
    return scaleBlock(
      this.heightMap.lineAt(
        this.scaler.fromDOM(e),
        QueryType$1.ByHeight,
        this.heightOracle,
        0,
        0
      ),
      this.scaler
    )
  }
  scrollAnchorAt(e) {
    let s = this.lineBlockAtHeight(e + 8)
    return s.from >= this.viewport.from || this.viewportLines[0].top - e > 200
      ? s
      : this.viewportLines[0]
  }
  elementAtHeight(e) {
    return scaleBlock(
      this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0),
      this.scaler
    )
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height)
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom
  }
}
class Viewport {
  constructor(e, s) {
    ;(this.from = e), (this.to = s)
  }
}
function lineStructure(o, e, s) {
  let a = [],
    c = o,
    h = 0
  return (
    RangeSet.spans(
      s,
      o,
      e,
      {
        span() {},
        point(d, g) {
          d > c && (a.push({ from: c, to: d }), (h += d - c)), (c = g)
        }
      },
      20
    ),
    c < e && (a.push({ from: c, to: e }), (h += e - c)),
    { total: h, ranges: a }
  )
}
function findPosition({ total: o, ranges: e }, s) {
  if (s <= 0) return e[0].from
  if (s >= 1) return e[e.length - 1].to
  let a = Math.floor(o * s)
  for (let c = 0; ; c++) {
    let { from: h, to: d } = e[c],
      g = d - h
    if (a <= g) return h + a
    a -= g
  }
}
function findFraction(o, e) {
  let s = 0
  for (let { from: a, to: c } of o.ranges) {
    if (e <= c) {
      s += e - a
      break
    }
    s += c - a
  }
  return s / o.total
}
function find(o, e) {
  for (let s of o) if (e(s)) return s
}
const IdScaler = {
  toDOM(o) {
    return o
  },
  fromDOM(o) {
    return o
  },
  scale: 1
}
class BigScaler {
  constructor(e, s, a) {
    let c = 0,
      h = 0,
      d = 0
    ;(this.viewports = a.map(({ from: g, to: b }) => {
      let $ = s.lineAt(g, QueryType$1.ByPos, e, 0, 0).top,
        _ = s.lineAt(b, QueryType$1.ByPos, e, 0, 0).bottom
      return (
        (c += _ - $),
        { from: g, to: b, top: $, bottom: _, domTop: 0, domBottom: 0 }
      )
    })),
      (this.scale = (7e6 - c) / (s.height - c))
    for (let g of this.viewports)
      (g.domTop = d + (g.top - h) * this.scale),
        (d = g.domBottom = g.domTop + (g.bottom - g.top)),
        (h = g.bottom)
  }
  toDOM(e) {
    for (let s = 0, a = 0, c = 0; ; s++) {
      let h = s < this.viewports.length ? this.viewports[s] : null
      if (!h || e < h.top) return c + (e - a) * this.scale
      if (e <= h.bottom) return h.domTop + (e - h.top)
      ;(a = h.bottom), (c = h.domBottom)
    }
  }
  fromDOM(e) {
    for (let s = 0, a = 0, c = 0; ; s++) {
      let h = s < this.viewports.length ? this.viewports[s] : null
      if (!h || e < h.domTop) return a + (e - c) / this.scale
      if (e <= h.domBottom) return h.top + (e - h.domTop)
      ;(a = h.bottom), (c = h.domBottom)
    }
  }
}
function scaleBlock(o, e) {
  if (e.scale == 1) return o
  let s = e.toDOM(o.top),
    a = e.toDOM(o.bottom)
  return new BlockInfo(
    o.from,
    o.length,
    s,
    a - s,
    Array.isArray(o._content)
      ? o._content.map((c) => scaleBlock(c, e))
      : o._content
  )
}
const theme = Facet.define({ combine: (o) => o.join(' ') }),
  darkTheme = Facet.define({ combine: (o) => o.indexOf(!0) > -1 }),
  baseThemeID = StyleModule.newName(),
  baseLightID = StyleModule.newName(),
  baseDarkID = StyleModule.newName(),
  lightDarkIDs = { '&light': '.' + baseLightID, '&dark': '.' + baseDarkID }
function buildTheme(o, e, s) {
  return new StyleModule(e, {
    finish(a) {
      return /&/.test(a)
        ? a.replace(/&\w*/, (c) => {
            if (c == '&') return o
            if (!s || !s[c]) throw new RangeError(`Unsupported selector: ${c}`)
            return s[c]
          })
        : o + ' ' + a
    }
  })
}
const baseTheme$1$3 = buildTheme(
    '.' + baseThemeID,
    {
      '&': {
        position: 'relative !important',
        boxSizing: 'border-box',
        '&.cm-focused': { outline: '1px dotted #212121' },
        display: 'flex !important',
        flexDirection: 'column'
      },
      '.cm-scroller': {
        display: 'flex !important',
        alignItems: 'flex-start !important',
        fontFamily: 'monospace',
        lineHeight: 1.4,
        height: '100%',
        overflowX: 'auto',
        position: 'relative',
        zIndex: 0
      },
      '.cm-content': {
        margin: 0,
        flexGrow: 2,
        flexShrink: 0,
        display: 'block',
        whiteSpace: 'pre',
        wordWrap: 'normal',
        boxSizing: 'border-box',
        padding: '4px 0',
        outline: 'none',
        '&[contenteditable=true]': {
          WebkitUserModify: 'read-write-plaintext-only'
        }
      },
      '.cm-lineWrapping': {
        whiteSpace_fallback: 'pre-wrap',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere',
        flexShrink: 1
      },
      '&light .cm-content': { caretColor: 'black' },
      '&dark .cm-content': { caretColor: 'white' },
      '.cm-line': { display: 'block', padding: '0 2px 0 6px' },
      '.cm-layer': {
        position: 'absolute',
        left: 0,
        top: 0,
        contain: 'size style',
        '& > *': { position: 'absolute' }
      },
      '&light .cm-selectionBackground': { background: '#d9d9d9' },
      '&dark .cm-selectionBackground': { background: '#222' },
      '&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground':
        { background: '#d7d4f0' },
      '&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground':
        { background: '#233' },
      '.cm-cursorLayer': { pointerEvents: 'none' },
      '&.cm-focused > .cm-scroller > .cm-cursorLayer': {
        animation: 'steps(1) cm-blink 1.2s infinite'
      },
      '@keyframes cm-blink': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
      '@keyframes cm-blink2': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
      '.cm-cursor, .cm-dropCursor': {
        borderLeft: '1.2px solid black',
        marginLeft: '-0.6px',
        pointerEvents: 'none'
      },
      '.cm-cursor': { display: 'none' },
      '&dark .cm-cursor': { borderLeftColor: '#444' },
      '.cm-dropCursor': { position: 'absolute' },
      '&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor': {
        display: 'block'
      },
      '&light .cm-activeLine': { backgroundColor: '#cceeff44' },
      '&dark .cm-activeLine': { backgroundColor: '#99eeff33' },
      '&light .cm-specialChar': { color: 'red' },
      '&dark .cm-specialChar': { color: '#f78' },
      '.cm-gutters': {
        flexShrink: 0,
        display: 'flex',
        height: '100%',
        boxSizing: 'border-box',
        insetInlineStart: 0,
        zIndex: 200
      },
      '&light .cm-gutters': {
        backgroundColor: '#f5f5f5',
        color: '#6c6c6c',
        borderRight: '1px solid #ddd'
      },
      '&dark .cm-gutters': { backgroundColor: '#333338', color: '#ccc' },
      '.cm-gutter': {
        display: 'flex !important',
        flexDirection: 'column',
        flexShrink: 0,
        boxSizing: 'border-box',
        minHeight: '100%',
        overflow: 'hidden'
      },
      '.cm-gutterElement': { boxSizing: 'border-box' },
      '.cm-lineNumbers .cm-gutterElement': {
        padding: '0 3px 0 5px',
        minWidth: '20px',
        textAlign: 'right',
        whiteSpace: 'nowrap'
      },
      '&light .cm-activeLineGutter': { backgroundColor: '#e2f2ff' },
      '&dark .cm-activeLineGutter': { backgroundColor: '#222227' },
      '.cm-panels': {
        boxSizing: 'border-box',
        position: 'sticky',
        left: 0,
        right: 0
      },
      '&light .cm-panels': { backgroundColor: '#f5f5f5', color: 'black' },
      '&light .cm-panels-top': { borderBottom: '1px solid #ddd' },
      '&light .cm-panels-bottom': { borderTop: '1px solid #ddd' },
      '&dark .cm-panels': { backgroundColor: '#333338', color: 'white' },
      '.cm-tab': {
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'bottom'
      },
      '.cm-widgetBuffer': {
        verticalAlign: 'text-top',
        height: '1em',
        width: 0,
        display: 'inline'
      },
      '.cm-placeholder': {
        color: '#888',
        display: 'inline-block',
        verticalAlign: 'top'
      },
      '.cm-highlightSpace:before': {
        content: 'attr(data-display)',
        position: 'absolute',
        pointerEvents: 'none',
        color: '#888'
      },
      '.cm-highlightTab': {
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'right 90%',
        backgroundRepeat: 'no-repeat'
      },
      '.cm-trailingSpace': { backgroundColor: '#ff332255' },
      '.cm-button': {
        verticalAlign: 'middle',
        color: 'inherit',
        fontSize: '70%',
        padding: '.2em 1em',
        borderRadius: '1px'
      },
      '&light .cm-button': {
        backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
        border: '1px solid #888',
        '&:active': { backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)' }
      },
      '&dark .cm-button': {
        backgroundImage: 'linear-gradient(#393939, #111)',
        border: '1px solid #888',
        '&:active': { backgroundImage: 'linear-gradient(#111, #333)' }
      },
      '.cm-textfield': {
        verticalAlign: 'middle',
        color: 'inherit',
        fontSize: '70%',
        border: '1px solid silver',
        padding: '.2em .5em'
      },
      '&light .cm-textfield': { backgroundColor: 'white' },
      '&dark .cm-textfield': {
        border: '1px solid #555',
        backgroundColor: 'inherit'
      }
    },
    lightDarkIDs
  ),
  LineBreakPlaceholder = '￿'
class DOMReader {
  constructor(e, s) {
    ;(this.points = e),
      (this.text = ''),
      (this.lineSeparator = s.facet(EditorState.lineSeparator))
  }
  append(e) {
    this.text += e
  }
  lineBreak() {
    this.text += LineBreakPlaceholder
  }
  readRange(e, s) {
    if (!e) return this
    let a = e.parentNode
    for (let c = e; ; ) {
      this.findPointBefore(a, c)
      let h = this.text.length
      this.readNode(c)
      let d = c.nextSibling
      if (d == s) break
      let g = ContentView.get(c),
        b = ContentView.get(d)
      ;(g && b
        ? g.breakAfter
        : (g ? g.breakAfter : isBlockElement(c)) ||
          (isBlockElement(d) &&
            (c.nodeName != 'BR' || c.cmIgnore) &&
            this.text.length > h)) && this.lineBreak(),
        (c = d)
    }
    return this.findPointBefore(a, s), this
  }
  readTextNode(e) {
    let s = e.nodeValue
    for (let a of this.points)
      a.node == e && (a.pos = this.text.length + Math.min(a.offset, s.length))
    for (let a = 0, c = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let h = -1,
        d = 1,
        g
      if (
        (this.lineSeparator
          ? ((h = s.indexOf(this.lineSeparator, a)),
            (d = this.lineSeparator.length))
          : (g = c.exec(s)) && ((h = g.index), (d = g[0].length)),
        this.append(s.slice(a, h < 0 ? s.length : h)),
        h < 0)
      )
        break
      if ((this.lineBreak(), d > 1))
        for (let b of this.points)
          b.node == e && b.pos > this.text.length && (b.pos -= d - 1)
      a = h + d
    }
  }
  readNode(e) {
    if (e.cmIgnore) return
    let s = ContentView.get(e),
      a = s && s.overrideDOMText
    if (a != null) {
      this.findPointInside(e, a.length)
      for (let c = a.iter(); !c.next().done; )
        c.lineBreak ? this.lineBreak() : this.append(c.value)
    } else
      e.nodeType == 3
        ? this.readTextNode(e)
        : e.nodeName == 'BR'
        ? e.nextSibling && this.lineBreak()
        : e.nodeType == 1 && this.readRange(e.firstChild, null)
  }
  findPointBefore(e, s) {
    for (let a of this.points)
      a.node == e && e.childNodes[a.offset] == s && (a.pos = this.text.length)
  }
  findPointInside(e, s) {
    for (let a of this.points)
      (e.nodeType == 3 ? a.node == e : e.contains(a.node)) &&
        (a.pos = this.text.length + Math.min(s, a.offset))
  }
}
function isBlockElement(o) {
  return (
    o.nodeType == 1 &&
    /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(o.nodeName)
  )
}
class DOMPoint {
  constructor(e, s) {
    ;(this.node = e), (this.offset = s), (this.pos = -1)
  }
}
class DOMChange {
  constructor(e, s, a, c) {
    ;(this.typeOver = c), (this.bounds = null), (this.text = '')
    let { impreciseHead: h, impreciseAnchor: d } = e.docView
    if (e.state.readOnly && s > -1) this.newSel = null
    else if (s > -1 && (this.bounds = e.docView.domBoundsAround(s, a, 0))) {
      let g = h || d ? [] : selectionPoints(e),
        b = new DOMReader(g, e.state)
      b.readRange(this.bounds.startDOM, this.bounds.endDOM),
        (this.text = b.text),
        (this.newSel = selectionFromPoints(g, this.bounds.from))
    } else {
      let g = e.observer.selectionRange,
        b =
          (h && h.node == g.focusNode && h.offset == g.focusOffset) ||
          !contains(e.contentDOM, g.focusNode)
            ? e.state.selection.main.head
            : e.docView.posFromDOM(g.focusNode, g.focusOffset),
        $ =
          (d && d.node == g.anchorNode && d.offset == g.anchorOffset) ||
          !contains(e.contentDOM, g.anchorNode)
            ? e.state.selection.main.anchor
            : e.docView.posFromDOM(g.anchorNode, g.anchorOffset)
      this.newSel = EditorSelection.single($, b)
    }
  }
}
function applyDOMChange(o, e) {
  let s,
    { newSel: a } = e,
    c = o.state.selection.main,
    h =
      o.inputState.lastKeyTime > Date.now() - 100
        ? o.inputState.lastKeyCode
        : -1
  if (e.bounds) {
    let { from: d, to: g } = e.bounds,
      b = c.from,
      $ = null
    ;(h === 8 || (browser.android && e.text.length < g - d)) &&
      ((b = c.to), ($ = 'end'))
    let _ = findDiff(
      o.state.doc.sliceString(d, g, LineBreakPlaceholder),
      e.text,
      b - d,
      $
    )
    _ &&
      (browser.chrome &&
        h == 13 &&
        _.toB == _.from + 2 &&
        e.text.slice(_.from, _.toB) ==
          LineBreakPlaceholder + LineBreakPlaceholder &&
        _.toB--,
      (s = {
        from: d + _.from,
        to: d + _.toA,
        insert: Text.of(e.text.slice(_.from, _.toB).split(LineBreakPlaceholder))
      }))
  } else
    a &&
      ((!o.hasFocus && o.state.facet(editable)) || a.main.eq(c)) &&
      (a = null)
  if (!s && !a) return !1
  if (
    (!s && e.typeOver && !c.empty && a && a.main.empty
      ? (s = {
          from: c.from,
          to: c.to,
          insert: o.state.doc.slice(c.from, c.to)
        })
      : s &&
        s.from >= c.from &&
        s.to <= c.to &&
        (s.from != c.from || s.to != c.to) &&
        c.to - c.from - (s.to - s.from) <= 4
      ? (s = {
          from: c.from,
          to: c.to,
          insert: o.state.doc
            .slice(c.from, s.from)
            .append(s.insert)
            .append(o.state.doc.slice(s.to, c.to))
        })
      : (browser.mac || browser.android) &&
        s &&
        s.from == s.to &&
        s.from == c.head - 1 &&
        /^\. ?$/.test(s.insert.toString()) &&
        o.contentDOM.getAttribute('autocorrect') == 'off'
      ? (a &&
          s.insert.length == 2 &&
          (a = EditorSelection.single(a.main.anchor - 1, a.main.head - 1)),
        (s = { from: c.from, to: c.to, insert: Text.of([' ']) }))
      : browser.chrome &&
        s &&
        s.from == s.to &&
        s.from == c.head &&
        s.insert.toString() ==
          `
 ` &&
        o.lineWrapping &&
        (a && (a = EditorSelection.single(a.main.anchor - 1, a.main.head - 1)),
        (s = { from: c.from, to: c.to, insert: Text.of([' ']) })),
    s)
  ) {
    if (
      (browser.ios && o.inputState.flushIOSKey()) ||
      (browser.android &&
        ((s.from == c.from &&
          s.to == c.to &&
          s.insert.length == 1 &&
          s.insert.lines == 2 &&
          dispatchKey(o.contentDOM, 'Enter', 13)) ||
          (((s.from == c.from - 1 && s.to == c.to && s.insert.length == 0) ||
            (h == 8 && s.insert.length < s.to - s.from && s.to > c.head)) &&
            dispatchKey(o.contentDOM, 'Backspace', 8)) ||
          (s.from == c.from &&
            s.to == c.to + 1 &&
            s.insert.length == 0 &&
            dispatchKey(o.contentDOM, 'Delete', 46))))
    )
      return !0
    let d = s.insert.toString()
    o.inputState.composing >= 0 && o.inputState.composing++
    let g,
      b = () => g || (g = applyDefaultInsert(o, s, a))
    return (
      o.state.facet(inputHandler$1).some(($) => $(o, s.from, s.to, d, b)) ||
        o.dispatch(b()),
      !0
    )
  } else if (a && !a.main.eq(c)) {
    let d = !1,
      g = 'select'
    return (
      o.inputState.lastSelectionTime > Date.now() - 50 &&
        (o.inputState.lastSelectionOrigin == 'select' && (d = !0),
        (g = o.inputState.lastSelectionOrigin)),
      o.dispatch({ selection: a, scrollIntoView: d, userEvent: g }),
      !0
    )
  } else return !1
}
function applyDefaultInsert(o, e, s) {
  let a,
    c = o.state,
    h = c.selection.main
  if (
    e.from >= h.from &&
    e.to <= h.to &&
    e.to - e.from >= (h.to - h.from) / 3 &&
    (!s || (s.main.empty && s.main.from == e.from + e.insert.length)) &&
    o.inputState.composing < 0
  ) {
    let g = h.from < e.from ? c.sliceDoc(h.from, e.from) : '',
      b = h.to > e.to ? c.sliceDoc(e.to, h.to) : ''
    a = c.replaceSelection(
      o.state.toText(g + e.insert.sliceString(0, void 0, o.state.lineBreak) + b)
    )
  } else {
    let g = c.changes(e),
      b = s && s.main.to <= g.newLength ? s.main : void 0
    if (
      c.selection.ranges.length > 1 &&
      o.inputState.composing >= 0 &&
      e.to <= h.to &&
      e.to >= h.to - 10
    ) {
      let $ = o.state.sliceDoc(e.from, e.to),
        _,
        j = s && findCompositionNode(o, s.main.head)
      if (j) {
        let tt = e.insert.length - (e.to - e.from)
        _ = { from: j.from, to: j.to - tt }
      } else _ = o.state.doc.lineAt(h.head)
      let _e = h.to - e.to,
        et = h.to - h.from
      a = c.changeByRange((tt) => {
        if (tt.from == h.from && tt.to == h.to)
          return { changes: g, range: b || tt.map(g) }
        let rt = tt.to - _e,
          st = rt - $.length
        if (
          tt.to - tt.from != et ||
          o.state.sliceDoc(st, rt) != $ ||
          (tt.to >= _.from && tt.from <= _.to)
        )
          return { range: tt }
        let nt = c.changes({ from: st, to: rt, insert: e.insert }),
          it = tt.to - h.to
        return {
          changes: nt,
          range: b
            ? EditorSelection.range(
                Math.max(0, b.anchor + it),
                Math.max(0, b.head + it)
              )
            : tt.map(nt)
        }
      })
    } else a = { changes: g, selection: b && c.selection.replaceRange(b) }
  }
  let d = 'input.type'
  return (
    (o.composing ||
      (o.inputState.compositionPendingChange &&
        o.inputState.compositionEndedAt > Date.now() - 50)) &&
      ((o.inputState.compositionPendingChange = !1),
      (d += '.compose'),
      o.inputState.compositionFirstChange &&
        ((d += '.start'), (o.inputState.compositionFirstChange = !1))),
    c.update(a, { userEvent: d, scrollIntoView: !0 })
  )
}
function findDiff(o, e, s, a) {
  let c = Math.min(o.length, e.length),
    h = 0
  for (; h < c && o.charCodeAt(h) == e.charCodeAt(h); ) h++
  if (h == c && o.length == e.length) return null
  let d = o.length,
    g = e.length
  for (; d > 0 && g > 0 && o.charCodeAt(d - 1) == e.charCodeAt(g - 1); )
    d--, g--
  if (a == 'end') {
    let b = Math.max(0, h - Math.min(d, g))
    s -= d + b - h
  }
  if (d < h && o.length < e.length) {
    let b = s <= h && s >= d ? h - s : 0
    ;(h -= b), (g = h + (g - d)), (d = h)
  } else if (g < h) {
    let b = s <= h && s >= g ? h - s : 0
    ;(h -= b), (d = h + (d - g)), (g = h)
  }
  return { from: h, toA: d, toB: g }
}
function selectionPoints(o) {
  let e = []
  if (o.root.activeElement != o.contentDOM) return e
  let {
    anchorNode: s,
    anchorOffset: a,
    focusNode: c,
    focusOffset: h
  } = o.observer.selectionRange
  return (
    s &&
      (e.push(new DOMPoint(s, a)),
      (c != s || h != a) && e.push(new DOMPoint(c, h))),
    e
  )
}
function selectionFromPoints(o, e) {
  if (o.length == 0) return null
  let s = o[0].pos,
    a = o.length == 2 ? o[1].pos : s
  return s > -1 && a > -1 ? EditorSelection.single(s + e, a + e) : null
}
const observeOptions = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0
  },
  useCharData = browser.ie && browser.ie_version <= 11
class DOMObserver {
  constructor(e) {
    ;(this.view = e),
      (this.active = !1),
      (this.selectionRange = new DOMSelectionState()),
      (this.selectionChanged = !1),
      (this.delayedFlush = -1),
      (this.resizeTimeout = -1),
      (this.queue = []),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1),
      (this.lastChange = 0),
      (this.scrollTargets = []),
      (this.intersection = null),
      (this.resizeScroll = null),
      (this.resizeContent = null),
      (this.intersecting = !1),
      (this.gapIntersection = null),
      (this.gaps = []),
      (this.parentCheck = -1),
      (this.dom = e.contentDOM),
      (this.observer = new MutationObserver((s) => {
        for (let a of s) this.queue.push(a)
        ;((browser.ie && browser.ie_version <= 11) ||
          (browser.ios && e.composing)) &&
        s.some(
          (a) =>
            (a.type == 'childList' && a.removedNodes.length) ||
            (a.type == 'characterData' &&
              a.oldValue.length > a.target.nodeValue.length)
        )
          ? this.flushSoon()
          : this.flush()
      })),
      useCharData &&
        (this.onCharData = (s) => {
          this.queue.push({
            target: s.target,
            type: 'characterData',
            oldValue: s.prevValue
          }),
            this.flushSoon()
        }),
      (this.onSelectionChange = this.onSelectionChange.bind(this)),
      (this.onResize = this.onResize.bind(this)),
      (this.onPrint = this.onPrint.bind(this)),
      (this.onScroll = this.onScroll.bind(this)),
      typeof ResizeObserver == 'function' &&
        ((this.resizeScroll = new ResizeObserver(() => {
          var s
          ;((s = this.view.docView) === null || s === void 0
            ? void 0
            : s.lastUpdate) <
            Date.now() - 75 && this.onResize()
        })),
        this.resizeScroll.observe(e.scrollDOM),
        (this.resizeContent = new ResizeObserver(() =>
          this.view.requestMeasure()
        )),
        this.resizeContent.observe(e.contentDOM)),
      this.addWindowListeners((this.win = e.win)),
      this.start(),
      typeof IntersectionObserver == 'function' &&
        ((this.intersection = new IntersectionObserver(
          (s) => {
            this.parentCheck < 0 &&
              (this.parentCheck = setTimeout(
                this.listenForScroll.bind(this),
                1e3
              )),
              s.length > 0 &&
                s[s.length - 1].intersectionRatio > 0 != this.intersecting &&
                ((this.intersecting = !this.intersecting),
                this.intersecting != this.view.inView &&
                  this.onScrollChanged(document.createEvent('Event')))
          },
          { threshold: [0, 0.001] }
        )),
        this.intersection.observe(this.dom),
        (this.gapIntersection = new IntersectionObserver((s) => {
          s.length > 0 &&
            s[s.length - 1].intersectionRatio > 0 &&
            this.onScrollChanged(document.createEvent('Event'))
        }, {}))),
      this.listenForScroll(),
      this.readSelectionRange()
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers('scroll', e),
      this.intersecting && this.view.measure()
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.onScrollChanged(e)
  }
  onResize() {
    this.resizeTimeout < 0 &&
      (this.resizeTimeout = setTimeout(() => {
        ;(this.resizeTimeout = -1), this.view.requestMeasure()
      }, 50))
  }
  onPrint() {
    ;(this.view.viewState.printing = !0),
      this.view.measure(),
      setTimeout(() => {
        ;(this.view.viewState.printing = !1), this.view.requestMeasure()
      }, 500)
  }
  updateGaps(e) {
    if (
      this.gapIntersection &&
      (e.length != this.gaps.length || this.gaps.some((s, a) => s != e[a]))
    ) {
      this.gapIntersection.disconnect()
      for (let s of e) this.gapIntersection.observe(s)
      this.gaps = e
    }
  }
  onSelectionChange(e) {
    let s = this.selectionChanged
    if (!this.readSelectionRange() || this.delayedAndroidKey) return
    let { view: a } = this,
      c = this.selectionRange
    if (
      a.state.facet(editable)
        ? a.root.activeElement != this.dom
        : !hasSelection(a.dom, c)
    )
      return
    let h = c.anchorNode && a.docView.nearest(c.anchorNode)
    if (h && h.ignoreEvent(e)) {
      s || (this.selectionChanged = !1)
      return
    }
    ;((browser.ie && browser.ie_version <= 11) ||
      (browser.android && browser.chrome)) &&
    !a.state.selection.main.empty &&
    c.focusNode &&
    isEquivalentPosition(
      c.focusNode,
      c.focusOffset,
      c.anchorNode,
      c.anchorOffset
    )
      ? this.flushSoon()
      : this.flush(!1)
  }
  readSelectionRange() {
    let { view: e } = this,
      s =
        (browser.safari &&
          e.root.nodeType == 11 &&
          deepActiveElement(this.dom.ownerDocument) == this.dom &&
          safariSelectionRangeHack(this.view)) ||
        getSelection(e.root)
    if (!s || this.selectionRange.eq(s)) return !1
    let a = hasSelection(this.dom, s)
    return a &&
      !this.selectionChanged &&
      e.inputState.lastFocusTime > Date.now() - 200 &&
      e.inputState.lastTouchTime < Date.now() - 300 &&
      atElementStart(this.dom, s)
      ? ((this.view.inputState.lastFocusTime = 0),
        e.docView.updateSelection(),
        !1)
      : (this.selectionRange.setRange(s), a && (this.selectionChanged = !0), !0)
  }
  setSelectionRange(e, s) {
    this.selectionRange.set(e.node, e.offset, s.node, s.offset),
      (this.selectionChanged = !1)
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0)
  }
  listenForScroll() {
    this.parentCheck = -1
    let e = 0,
      s = null
    for (let a = this.dom; a; )
      if (a.nodeType == 1)
        !s && e < this.scrollTargets.length && this.scrollTargets[e] == a
          ? e++
          : s || (s = this.scrollTargets.slice(0, e)),
          s && s.push(a),
          (a = a.assignedSlot || a.parentNode)
      else if (a.nodeType == 11) a = a.host
      else break
    if (
      (e < this.scrollTargets.length &&
        !s &&
        (s = this.scrollTargets.slice(0, e)),
      s)
    ) {
      for (let a of this.scrollTargets)
        a.removeEventListener('scroll', this.onScroll)
      for (let a of (this.scrollTargets = s))
        a.addEventListener('scroll', this.onScroll)
    }
  }
  ignore(e) {
    if (!this.active) return e()
    try {
      return this.stop(), e()
    } finally {
      this.start(), this.clear()
    }
  }
  start() {
    this.active ||
      (this.observer.observe(this.dom, observeOptions),
      useCharData &&
        this.dom.addEventListener('DOMCharacterDataModified', this.onCharData),
      (this.active = !0))
  }
  stop() {
    this.active &&
      ((this.active = !1),
      this.observer.disconnect(),
      useCharData &&
        this.dom.removeEventListener(
          'DOMCharacterDataModified',
          this.onCharData
        ))
  }
  clear() {
    this.processRecords(), (this.queue.length = 0), (this.selectionChanged = !1)
  }
  delayAndroidKey(e, s) {
    var a
    if (!this.delayedAndroidKey) {
      let c = () => {
        let h = this.delayedAndroidKey
        h &&
          (this.clearDelayedAndroidKey(),
          (this.view.inputState.lastKeyCode = h.keyCode),
          (this.view.inputState.lastKeyTime = Date.now()),
          !this.flush() && h.force && dispatchKey(this.dom, h.key, h.keyCode))
      }
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(c)
    }
    ;(!this.delayedAndroidKey || e == 'Enter') &&
      (this.delayedAndroidKey = {
        key: e,
        keyCode: s,
        force:
          this.lastChange < Date.now() - 50 ||
          !!(
            !((a = this.delayedAndroidKey) === null || a === void 0) && a.force
          )
      })
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1)
  }
  flushSoon() {
    this.delayedFlush < 0 &&
      (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        ;(this.delayedFlush = -1), this.flush()
      }))
  }
  forceFlush() {
    this.delayedFlush >= 0 &&
      (this.view.win.cancelAnimationFrame(this.delayedFlush),
      (this.delayedFlush = -1)),
      this.flush()
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) this.queue.push(e)
    return this.queue
  }
  processRecords() {
    let e = this.pendingRecords()
    e.length && (this.queue = [])
    let s = -1,
      a = -1,
      c = !1
    for (let h of e) {
      let d = this.readMutation(h)
      d &&
        (d.typeOver && (c = !0),
        s == -1
          ? ({ from: s, to: a } = d)
          : ((s = Math.min(d.from, s)), (a = Math.max(d.to, a))))
    }
    return { from: s, to: a, typeOver: c }
  }
  readChange() {
    let { from: e, to: s, typeOver: a } = this.processRecords(),
      c = this.selectionChanged && hasSelection(this.dom, this.selectionRange)
    if (e < 0 && !c) return null
    e > -1 && (this.lastChange = Date.now()),
      (this.view.inputState.lastFocusTime = 0),
      (this.selectionChanged = !1)
    let h = new DOMChange(this.view, e, s, a)
    return (
      (this.view.docView.domChanged = {
        newSel: h.newSel ? h.newSel.main : null
      }),
      h
    )
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1
    e && this.readSelectionRange()
    let s = this.readChange()
    if (!s) return !1
    let a = this.view.state,
      c = applyDOMChange(this.view, s)
    return this.view.state == a && this.view.update([]), c
  }
  readMutation(e) {
    let s = this.view.docView.nearest(e.target)
    if (!s || s.ignoreMutation(e)) return null
    if (
      (s.markDirty(e.type == 'attributes'),
      e.type == 'attributes' && (s.flags |= 4),
      e.type == 'childList')
    ) {
      let a = findChild(s, e.previousSibling || e.target.previousSibling, -1),
        c = findChild(s, e.nextSibling || e.target.nextSibling, 1)
      return {
        from: a ? s.posAfter(a) : s.posAtStart,
        to: c ? s.posBefore(c) : s.posAtEnd,
        typeOver: !1
      }
    } else
      return e.type == 'characterData'
        ? {
            from: s.posAtStart,
            to: s.posAtEnd,
            typeOver: e.target.nodeValue == e.oldValue
          }
        : null
  }
  setWindow(e) {
    e != this.win &&
      (this.removeWindowListeners(this.win),
      (this.win = e),
      this.addWindowListeners(this.win))
  }
  addWindowListeners(e) {
    e.addEventListener('resize', this.onResize),
      e.addEventListener('beforeprint', this.onPrint),
      e.addEventListener('scroll', this.onScroll),
      e.document.addEventListener('selectionchange', this.onSelectionChange)
  }
  removeWindowListeners(e) {
    e.removeEventListener('scroll', this.onScroll),
      e.removeEventListener('resize', this.onResize),
      e.removeEventListener('beforeprint', this.onPrint),
      e.document.removeEventListener('selectionchange', this.onSelectionChange)
  }
  destroy() {
    var e, s, a, c
    this.stop(),
      (e = this.intersection) === null || e === void 0 || e.disconnect(),
      (s = this.gapIntersection) === null || s === void 0 || s.disconnect(),
      (a = this.resizeScroll) === null || a === void 0 || a.disconnect(),
      (c = this.resizeContent) === null || c === void 0 || c.disconnect()
    for (let h of this.scrollTargets)
      h.removeEventListener('scroll', this.onScroll)
    this.removeWindowListeners(this.win),
      clearTimeout(this.parentCheck),
      clearTimeout(this.resizeTimeout),
      this.win.cancelAnimationFrame(this.delayedFlush),
      this.win.cancelAnimationFrame(this.flushingAndroidKey)
  }
}
function findChild(o, e, s) {
  for (; e; ) {
    let a = ContentView.get(e)
    if (a && a.parent == o) return a
    let c = e.parentNode
    e = c != o.dom ? c : s > 0 ? e.nextSibling : e.previousSibling
  }
  return null
}
function safariSelectionRangeHack(o) {
  let e = null
  function s(b) {
    b.preventDefault(),
      b.stopImmediatePropagation(),
      (e = b.getTargetRanges()[0])
  }
  if (
    (o.contentDOM.addEventListener('beforeinput', s, !0),
    o.dom.ownerDocument.execCommand('indent'),
    o.contentDOM.removeEventListener('beforeinput', s, !0),
    !e)
  )
    return null
  let a = e.startContainer,
    c = e.startOffset,
    h = e.endContainer,
    d = e.endOffset,
    g = o.docView.domAtPos(o.state.selection.main.anchor)
  return (
    isEquivalentPosition(g.node, g.offset, h, d) &&
      ([a, c, h, d] = [h, d, a, c]),
    { anchorNode: a, anchorOffset: c, focusNode: h, focusOffset: d }
  )
}
class EditorView {
  get state() {
    return this.viewState.state
  }
  get viewport() {
    return this.viewState.viewport
  }
  get visibleRanges() {
    return this.viewState.visibleRanges
  }
  get inView() {
    return this.viewState.inView
  }
  get composing() {
    return this.inputState.composing > 0
  }
  get compositionStarted() {
    return this.inputState.composing >= 0
  }
  get root() {
    return this._root
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window
  }
  constructor(e = {}) {
    ;(this.plugins = []),
      (this.pluginMap = new Map()),
      (this.editorAttrs = {}),
      (this.contentAttrs = {}),
      (this.bidiCache = []),
      (this.destroyed = !1),
      (this.updateState = 2),
      (this.measureScheduled = -1),
      (this.measureRequests = []),
      (this.contentDOM = document.createElement('div')),
      (this.scrollDOM = document.createElement('div')),
      (this.scrollDOM.tabIndex = -1),
      (this.scrollDOM.className = 'cm-scroller'),
      this.scrollDOM.appendChild(this.contentDOM),
      (this.announceDOM = document.createElement('div')),
      (this.announceDOM.style.cssText = 'position: fixed; top: -10000px'),
      this.announceDOM.setAttribute('aria-live', 'polite'),
      (this.dom = document.createElement('div')),
      this.dom.appendChild(this.announceDOM),
      this.dom.appendChild(this.scrollDOM)
    let { dispatch: s } = e
    ;(this.dispatchTransactions =
      e.dispatchTransactions ||
      (s && ((a) => a.forEach((c) => s(c, this)))) ||
      ((a) => this.update(a))),
      (this.dispatch = this.dispatch.bind(this)),
      (this._root = e.root || getRoot(e.parent) || document),
      (this.viewState = new ViewState(e.state || EditorState.create(e))),
      (this.plugins = this.state
        .facet(viewPlugin)
        .map((a) => new PluginInstance(a)))
    for (let a of this.plugins) a.update(this)
    ;(this.observer = new DOMObserver(this)),
      (this.inputState = new InputState(this)),
      this.inputState.ensureHandlers(this.plugins),
      (this.docView = new DocView(this)),
      this.mountStyles(),
      this.updateAttrs(),
      (this.updateState = 0),
      this.requestMeasure(),
      e.parent && e.parent.appendChild(this.dom)
  }
  dispatch(...e) {
    let s =
      e.length == 1 && e[0] instanceof Transaction
        ? e
        : e.length == 1 && Array.isArray(e[0])
        ? e[0]
        : [this.state.update(...e)]
    this.dispatchTransactions(s, this)
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error(
        'Calls to EditorView.update are not allowed while an update is in progress'
      )
    let s = !1,
      a = !1,
      c,
      h = this.state
    for (let _e of e) {
      if (_e.startState != h)
        throw new RangeError(
          "Trying to update state with a transaction that doesn't start from the previous state."
        )
      h = _e.state
    }
    if (this.destroyed) {
      this.viewState.state = h
      return
    }
    let d = this.hasFocus,
      g = 0,
      b = null
    e.some((_e) => _e.annotation(isFocusChange))
      ? ((this.inputState.notifiedFocused = d), (g = 1))
      : d != this.inputState.notifiedFocused &&
        ((this.inputState.notifiedFocused = d),
        (b = focusChangeTransaction(h, d)),
        b || (g = 1))
    let $ = this.observer.delayedAndroidKey,
      _ = null
    if (
      ($
        ? (this.observer.clearDelayedAndroidKey(),
          (_ = this.observer.readChange()),
          ((_ && !this.state.doc.eq(h.doc)) ||
            !this.state.selection.eq(h.selection)) &&
            (_ = null))
        : this.observer.clear(),
      h.facet(EditorState.phrases) != this.state.facet(EditorState.phrases))
    )
      return this.setState(h)
    ;(c = ViewUpdate.create(this, h, e)), (c.flags |= g)
    let j = this.viewState.scrollTarget
    try {
      this.updateState = 2
      for (let _e of e) {
        if ((j && (j = j.map(_e.changes)), _e.scrollIntoView)) {
          let { main: et } = _e.state.selection
          j = new ScrollTarget(
            et.empty
              ? et
              : EditorSelection.cursor(et.head, et.head > et.anchor ? -1 : 1)
          )
        }
        for (let et of _e.effects) et.is(scrollIntoView$1) && (j = et.value)
      }
      this.viewState.update(c, j),
        (this.bidiCache = CachedOrder.update(this.bidiCache, c.changes)),
        c.empty || (this.updatePlugins(c), this.inputState.update(c)),
        (s = this.docView.update(c)),
        this.state.facet(styleModule) != this.styleModules &&
          this.mountStyles(),
        (a = this.updateAttrs()),
        this.showAnnouncements(e),
        this.docView.updateSelection(
          s,
          e.some((_e) => _e.isUserEvent('select.pointer'))
        )
    } finally {
      this.updateState = 0
    }
    if (
      (c.startState.facet(theme) != c.state.facet(theme) &&
        (this.viewState.mustMeasureContent = !0),
      (s ||
        a ||
        j ||
        this.viewState.mustEnforceCursorAssoc ||
        this.viewState.mustMeasureContent) &&
        this.requestMeasure(),
      !c.empty)
    )
      for (let _e of this.state.facet(updateListener)) _e(c)
    ;(b || _) &&
      Promise.resolve().then(() => {
        b && this.state == b.startState && this.dispatch(b),
          _ &&
            !applyDOMChange(this, _) &&
            $.force &&
            dispatchKey(this.contentDOM, $.key, $.keyCode)
      })
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error(
        'Calls to EditorView.setState are not allowed while an update is in progress'
      )
    if (this.destroyed) {
      this.viewState.state = e
      return
    }
    this.updateState = 2
    let s = this.hasFocus
    try {
      for (let a of this.plugins) a.destroy(this)
      ;(this.viewState = new ViewState(e)),
        (this.plugins = e.facet(viewPlugin).map((a) => new PluginInstance(a))),
        this.pluginMap.clear()
      for (let a of this.plugins) a.update(this)
      ;(this.docView = new DocView(this)),
        this.inputState.ensureHandlers(this.plugins),
        this.mountStyles(),
        this.updateAttrs(),
        (this.bidiCache = [])
    } finally {
      this.updateState = 0
    }
    s && this.focus(), this.requestMeasure()
  }
  updatePlugins(e) {
    let s = e.startState.facet(viewPlugin),
      a = e.state.facet(viewPlugin)
    if (s != a) {
      let c = []
      for (let h of a) {
        let d = s.indexOf(h)
        if (d < 0) c.push(new PluginInstance(h))
        else {
          let g = this.plugins[d]
          ;(g.mustUpdate = e), c.push(g)
        }
      }
      for (let h of this.plugins) h.mustUpdate != e && h.destroy(this)
      ;(this.plugins = c),
        this.pluginMap.clear(),
        this.inputState.ensureHandlers(this.plugins)
    } else for (let c of this.plugins) c.mustUpdate = e
    for (let c = 0; c < this.plugins.length; c++) this.plugins[c].update(this)
  }
  measure(e = !0) {
    if (this.destroyed) return
    if (
      (this.measureScheduled > -1 &&
        this.win.cancelAnimationFrame(this.measureScheduled),
      this.observer.delayedAndroidKey)
    ) {
      ;(this.measureScheduled = -1), this.requestMeasure()
      return
    }
    ;(this.measureScheduled = 0), e && this.observer.forceFlush()
    let s = null,
      a = this.scrollDOM,
      c = a.scrollTop * this.scaleY,
      { scrollAnchorPos: h, scrollAnchorHeight: d } = this.viewState
    Math.abs(c - this.viewState.scrollTop) > 1 && (d = -1),
      (this.viewState.scrollAnchorHeight = -1)
    try {
      for (let g = 0; ; g++) {
        if (d < 0)
          if (isScrolledToBottom(a))
            (h = -1), (d = this.viewState.heightMap.height)
          else {
            let et = this.viewState.scrollAnchorAt(c)
            ;(h = et.from), (d = et.top)
          }
        this.updateState = 1
        let b = this.viewState.measure(this)
        if (
          !b &&
          !this.measureRequests.length &&
          this.viewState.scrollTarget == null
        )
          break
        if (g > 5) {
          console.warn(
            this.measureRequests.length
              ? 'Measure loop restarted more than 5 times'
              : 'Viewport failed to stabilize'
          )
          break
        }
        let $ = []
        b & 4 || ([this.measureRequests, $] = [$, this.measureRequests])
        let _ = $.map((et) => {
            try {
              return et.read(this)
            } catch (tt) {
              return logException(this.state, tt), BadMeasure
            }
          }),
          j = ViewUpdate.create(this, this.state, []),
          _e = !1
        ;(j.flags |= b),
          s ? (s.flags |= b) : (s = j),
          (this.updateState = 2),
          j.empty ||
            (this.updatePlugins(j),
            this.inputState.update(j),
            this.updateAttrs(),
            (_e = this.docView.update(j)))
        for (let et = 0; et < $.length; et++)
          if (_[et] != BadMeasure)
            try {
              let tt = $[et]
              tt.write && tt.write(_[et], this)
            } catch (tt) {
              logException(this.state, tt)
            }
        if (
          (_e && this.docView.updateSelection(!0),
          !j.viewportChanged && this.measureRequests.length == 0)
        ) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget),
                (this.viewState.scrollTarget = null)
              continue
            } else {
              let tt =
                (h < 0
                  ? this.viewState.heightMap.height
                  : this.viewState.lineBlockAt(h).top) - d
              if (tt > 1 || tt < -1) {
                ;(c = c + tt), (a.scrollTop = c / this.scaleY), (d = -1)
                continue
              }
            }
          break
        }
      }
    } finally {
      ;(this.updateState = 0), (this.measureScheduled = -1)
    }
    if (s && !s.empty) for (let g of this.state.facet(updateListener)) g(s)
  }
  get themeClasses() {
    return (
      baseThemeID +
      ' ' +
      (this.state.facet(darkTheme) ? baseDarkID : baseLightID) +
      ' ' +
      this.state.facet(theme)
    )
  }
  updateAttrs() {
    let e = attrsFromFacet(this, editorAttributes, {
        class:
          'cm-editor' +
          (this.hasFocus ? ' cm-focused ' : ' ') +
          this.themeClasses
      }),
      s = {
        spellcheck: 'false',
        autocorrect: 'off',
        autocapitalize: 'off',
        translate: 'no',
        contenteditable: this.state.facet(editable) ? 'true' : 'false',
        class: 'cm-content',
        style: `${browser.tabSize}: ${this.state.tabSize}`,
        role: 'textbox',
        'aria-multiline': 'true'
      }
    this.state.readOnly && (s['aria-readonly'] = 'true'),
      attrsFromFacet(this, contentAttributes, s)
    let a = this.observer.ignore(() => {
      let c = updateAttrs(this.contentDOM, this.contentAttrs, s),
        h = updateAttrs(this.dom, this.editorAttrs, e)
      return c || h
    })
    return (this.editorAttrs = e), (this.contentAttrs = s), a
  }
  showAnnouncements(e) {
    let s = !0
    for (let a of e)
      for (let c of a.effects)
        if (c.is(EditorView.announce)) {
          s && (this.announceDOM.textContent = ''), (s = !1)
          let h = this.announceDOM.appendChild(document.createElement('div'))
          h.textContent = c.value
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(styleModule)
    let e = this.state.facet(EditorView.cspNonce)
    StyleModule.mount(
      this.root,
      this.styleModules.concat(baseTheme$1$3).reverse(),
      e ? { nonce: e } : void 0
    )
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error(
        "Reading the editor layout isn't allowed during an update"
      )
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1)
  }
  requestMeasure(e) {
    if (
      (this.measureScheduled < 0 &&
        (this.measureScheduled = this.win.requestAnimationFrame(() =>
          this.measure()
        )),
      e)
    ) {
      if (this.measureRequests.indexOf(e) > -1) return
      if (e.key != null) {
        for (let s = 0; s < this.measureRequests.length; s++)
          if (this.measureRequests[s].key === e.key) {
            this.measureRequests[s] = e
            return
          }
      }
      this.measureRequests.push(e)
    }
  }
  plugin(e) {
    let s = this.pluginMap.get(e)
    return (
      (s === void 0 || (s && s.spec != e)) &&
        this.pluginMap.set(
          e,
          (s = this.plugins.find((a) => a.spec == e) || null)
        ),
      s && s.update(this).value
    )
  }
  get documentTop() {
    return (
      this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
    )
  }
  get documentPadding() {
    return {
      top: this.viewState.paddingTop,
      bottom: this.viewState.paddingBottom
    }
  }
  get scaleX() {
    return this.viewState.scaleX
  }
  get scaleY() {
    return this.viewState.scaleY
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e)
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e)
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e)
  }
  get contentHeight() {
    return this.viewState.contentHeight
  }
  moveByChar(e, s, a) {
    return skipAtoms(this, e, moveByChar(this, e, s, a))
  }
  moveByGroup(e, s) {
    return skipAtoms(
      this,
      e,
      moveByChar(this, e, s, (a) => byGroup(this, e.head, a))
    )
  }
  moveToLineBoundary(e, s, a = !0) {
    return moveToLineBoundary(this, e, s, a)
  }
  moveVertically(e, s, a) {
    return skipAtoms(this, e, moveVertically(this, e, s, a))
  }
  domAtPos(e) {
    return this.docView.domAtPos(e)
  }
  posAtDOM(e, s = 0) {
    return this.docView.posFromDOM(e, s)
  }
  posAtCoords(e, s = !0) {
    return this.readMeasured(), posAtCoords(this, e, s)
  }
  coordsAtPos(e, s = 1) {
    this.readMeasured()
    let a = this.docView.coordsAt(e, s)
    if (!a || a.left == a.right) return a
    let c = this.state.doc.lineAt(e),
      h = this.bidiSpans(c),
      d = h[BidiSpan.find(h, e - c.from, -1, s)]
    return flattenRect(a, (d.dir == Direction.LTR) == s > 0)
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e)
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight
  }
  get textDirection() {
    return this.viewState.defaultTextDirection
  }
  textDirectionAt(e) {
    return !this.state.facet(perLineTextDirection) ||
      e < this.viewport.from ||
      e > this.viewport.to
      ? this.textDirection
      : (this.readMeasured(), this.docView.textDirectionAt(e))
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping
  }
  bidiSpans(e) {
    if (e.length > MaxBidiLine) return trivialOrder(e.length)
    let s = this.textDirectionAt(e.from),
      a
    for (let h of this.bidiCache)
      if (
        h.from == e.from &&
        h.dir == s &&
        (h.fresh ||
          isolatesEq(h.isolates, (a = getIsolatedRanges(this, e.from, e.to))))
      )
        return h.order
    a || (a = getIsolatedRanges(this, e.from, e.to))
    let c = computeOrder(e.text, s, a)
    return this.bidiCache.push(new CachedOrder(e.from, e.to, s, a, !0, c)), c
  }
  get hasFocus() {
    var e
    return (
      (this.dom.ownerDocument.hasFocus() ||
        (browser.safari &&
          ((e = this.inputState) === null || e === void 0
            ? void 0
            : e.lastContextMenu) >
            Date.now() - 3e4)) &&
      this.root.activeElement == this.contentDOM
    )
  }
  focus() {
    this.observer.ignore(() => {
      focusPreventScroll(this.contentDOM), this.docView.updateSelection()
    })
  }
  setRoot(e) {
    this._root != e &&
      ((this._root = e),
      this.observer.setWindow(
        (e.nodeType == 9 ? e : e.ownerDocument).defaultView || window
      ),
      this.mountStyles())
  }
  destroy() {
    for (let e of this.plugins) e.destroy(this)
    ;(this.plugins = []),
      this.inputState.destroy(),
      this.dom.remove(),
      this.observer.destroy(),
      this.measureScheduled > -1 &&
        this.win.cancelAnimationFrame(this.measureScheduled),
      (this.destroyed = !0)
  }
  static scrollIntoView(e, s = {}) {
    return scrollIntoView$1.of(
      new ScrollTarget(
        typeof e == 'number' ? EditorSelection.cursor(e) : e,
        s.y,
        s.x,
        s.yMargin,
        s.xMargin
      )
    )
  }
  static domEventHandlers(e) {
    return ViewPlugin.define(() => ({}), { eventHandlers: e })
  }
  static domEventObservers(e) {
    return ViewPlugin.define(() => ({}), { eventObservers: e })
  }
  static theme(e, s) {
    let a = StyleModule.newName(),
      c = [theme.of(a), styleModule.of(buildTheme(`.${a}`, e))]
    return s && s.dark && c.push(darkTheme.of(!0)), c
  }
  static baseTheme(e) {
    return Prec.lowest(
      styleModule.of(buildTheme('.' + baseThemeID, e, lightDarkIDs))
    )
  }
  static findFromDOM(e) {
    var s
    let a = e.querySelector('.cm-content'),
      c = (a && ContentView.get(a)) || ContentView.get(e)
    return (
      ((s = c == null ? void 0 : c.rootView) === null || s === void 0
        ? void 0
        : s.view) || null
    )
  }
}
EditorView.styleModule = styleModule
EditorView.inputHandler = inputHandler$1
EditorView.focusChangeEffect = focusChangeEffect
EditorView.perLineTextDirection = perLineTextDirection
EditorView.exceptionSink = exceptionSink
EditorView.updateListener = updateListener
EditorView.editable = editable
EditorView.mouseSelectionStyle = mouseSelectionStyle
EditorView.dragMovesSelection = dragMovesSelection$1
EditorView.clickAddsSelectionRange = clickAddsSelectionRange
EditorView.decorations = decorations
EditorView.atomicRanges = atomicRanges
EditorView.bidiIsolatedRanges = bidiIsolatedRanges
EditorView.scrollMargins = scrollMargins
EditorView.darkTheme = darkTheme
EditorView.cspNonce = Facet.define({ combine: (o) => (o.length ? o[0] : '') })
EditorView.contentAttributes = contentAttributes
EditorView.editorAttributes = editorAttributes
EditorView.lineWrapping = EditorView.contentAttributes.of({
  class: 'cm-lineWrapping'
})
EditorView.announce = StateEffect.define()
const MaxBidiLine = 4096,
  BadMeasure = {}
class CachedOrder {
  constructor(e, s, a, c, h, d) {
    ;(this.from = e),
      (this.to = s),
      (this.dir = a),
      (this.isolates = c),
      (this.fresh = h),
      (this.order = d)
  }
  static update(e, s) {
    if (s.empty && !e.some((h) => h.fresh)) return e
    let a = [],
      c = e.length ? e[e.length - 1].dir : Direction.LTR
    for (let h = Math.max(0, e.length - 10); h < e.length; h++) {
      let d = e[h]
      d.dir == c &&
        !s.touchesRange(d.from, d.to) &&
        a.push(
          new CachedOrder(
            s.mapPos(d.from, 1),
            s.mapPos(d.to, -1),
            d.dir,
            d.isolates,
            !1,
            d.order
          )
        )
    }
    return a
  }
}
function attrsFromFacet(o, e, s) {
  for (let a = o.state.facet(e), c = a.length - 1; c >= 0; c--) {
    let h = a[c],
      d = typeof h == 'function' ? h(o) : h
    d && combineAttrs(d, s)
  }
  return s
}
const currentPlatform = browser.mac
  ? 'mac'
  : browser.windows
  ? 'win'
  : browser.linux
  ? 'linux'
  : 'key'
function normalizeKeyName(o, e) {
  const s = o.split(/-(?!$)/)
  let a = s[s.length - 1]
  a == 'Space' && (a = ' ')
  let c, h, d, g
  for (let b = 0; b < s.length - 1; ++b) {
    const $ = s[b]
    if (/^(cmd|meta|m)$/i.test($)) g = !0
    else if (/^a(lt)?$/i.test($)) c = !0
    else if (/^(c|ctrl|control)$/i.test($)) h = !0
    else if (/^s(hift)?$/i.test($)) d = !0
    else if (/^mod$/i.test($)) e == 'mac' ? (g = !0) : (h = !0)
    else throw new Error('Unrecognized modifier name: ' + $)
  }
  return (
    c && (a = 'Alt-' + a),
    h && (a = 'Ctrl-' + a),
    g && (a = 'Meta-' + a),
    d && (a = 'Shift-' + a),
    a
  )
}
function modifiers(o, e, s) {
  return (
    e.altKey && (o = 'Alt-' + o),
    e.ctrlKey && (o = 'Ctrl-' + o),
    e.metaKey && (o = 'Meta-' + o),
    s !== !1 && e.shiftKey && (o = 'Shift-' + o),
    o
  )
}
const handleKeyEvents = Prec.default(
    EditorView.domEventHandlers({
      keydown(o, e) {
        return runHandlers(getKeymap(e.state), o, e, 'editor')
      }
    })
  ),
  keymap = Facet.define({ enables: handleKeyEvents }),
  Keymaps = new WeakMap()
function getKeymap(o) {
  let e = o.facet(keymap),
    s = Keymaps.get(e)
  return (
    s || Keymaps.set(e, (s = buildKeymap(e.reduce((a, c) => a.concat(c), [])))),
    s
  )
}
function runScopeHandlers(o, e, s) {
  return runHandlers(getKeymap(o.state), e, o, s)
}
let storedPrefix = null
const PrefixTimeout = 4e3
function buildKeymap(o, e = currentPlatform) {
  let s = Object.create(null),
    a = Object.create(null),
    c = (d, g) => {
      let b = a[d]
      if (b == null) a[d] = g
      else if (b != g)
        throw new Error(
          'Key binding ' +
            d +
            ' is used both as a regular binding and as a multi-stroke prefix'
        )
    },
    h = (d, g, b, $, _) => {
      var j, _e
      let et = s[d] || (s[d] = Object.create(null)),
        tt = g.split(/ (?!$)/).map((nt) => normalizeKeyName(nt, e))
      for (let nt = 1; nt < tt.length; nt++) {
        let it = tt.slice(0, nt).join(' ')
        c(it, !0),
          et[it] ||
            (et[it] = {
              preventDefault: !0,
              stopPropagation: !1,
              run: [
                (ot) => {
                  let lt = (storedPrefix = { view: ot, prefix: it, scope: d })
                  return (
                    setTimeout(() => {
                      storedPrefix == lt && (storedPrefix = null)
                    }, PrefixTimeout),
                    !0
                  )
                }
              ]
            })
      }
      let rt = tt.join(' ')
      c(rt, !1)
      let st =
        et[rt] ||
        (et[rt] = {
          preventDefault: !1,
          stopPropagation: !1,
          run:
            ((_e = (j = et._any) === null || j === void 0 ? void 0 : j.run) ===
              null || _e === void 0
              ? void 0
              : _e.slice()) || []
        })
      b && st.run.push(b),
        $ && (st.preventDefault = !0),
        _ && (st.stopPropagation = !0)
    }
  for (let d of o) {
    let g = d.scope ? d.scope.split(' ') : ['editor']
    if (d.any)
      for (let $ of g) {
        let _ = s[$] || (s[$] = Object.create(null))
        _._any ||
          (_._any = { preventDefault: !1, stopPropagation: !1, run: [] })
        for (let j in _) _[j].run.push(d.any)
      }
    let b = d[e] || d.key
    if (b)
      for (let $ of g)
        h($, b, d.run, d.preventDefault, d.stopPropagation),
          d.shift &&
            h($, 'Shift-' + b, d.shift, d.preventDefault, d.stopPropagation)
  }
  return s
}
function runHandlers(o, e, s, a) {
  let c = keyName(e),
    h = codePointAt(c, 0),
    d = codePointSize(h) == c.length && c != ' ',
    g = '',
    b = !1,
    $ = !1,
    _ = !1
  storedPrefix &&
    storedPrefix.view == s &&
    storedPrefix.scope == a &&
    ((g = storedPrefix.prefix + ' '),
    modifierCodes.indexOf(e.keyCode) < 0 && (($ = !0), (storedPrefix = null)))
  let j = new Set(),
    _e = (st) => {
      if (st) {
        for (let nt of st.run)
          if (!j.has(nt) && (j.add(nt), nt(s, e)))
            return st.stopPropagation && (_ = !0), !0
        st.preventDefault && (st.stopPropagation && (_ = !0), ($ = !0))
      }
      return !1
    },
    et = o[a],
    tt,
    rt
  return (
    et &&
      (_e(et[g + modifiers(c, e, !d)])
        ? (b = !0)
        : d &&
          (e.altKey || e.metaKey || e.ctrlKey) &&
          !(browser.windows && e.ctrlKey && e.altKey) &&
          (tt = base[e.keyCode]) &&
          tt != c
        ? (_e(et[g + modifiers(tt, e, !0)]) ||
            (e.shiftKey &&
              (rt = shift[e.keyCode]) != c &&
              rt != tt &&
              _e(et[g + modifiers(rt, e, !1)]))) &&
          (b = !0)
        : d && e.shiftKey && _e(et[g + modifiers(c, e, !0)]) && (b = !0),
      !b && _e(et._any) && (b = !0)),
    $ && (b = !0),
    b && _ && e.stopPropagation(),
    b
  )
}
class RectangleMarker {
  constructor(e, s, a, c, h) {
    ;(this.className = e),
      (this.left = s),
      (this.top = a),
      (this.width = c),
      (this.height = h)
  }
  draw() {
    let e = document.createElement('div')
    return (e.className = this.className), this.adjust(e), e
  }
  update(e, s) {
    return s.className != this.className ? !1 : (this.adjust(e), !0)
  }
  adjust(e) {
    ;(e.style.left = this.left + 'px'),
      (e.style.top = this.top + 'px'),
      this.width != null && (e.style.width = this.width + 'px'),
      (e.style.height = this.height + 'px')
  }
  eq(e) {
    return (
      this.left == e.left &&
      this.top == e.top &&
      this.width == e.width &&
      this.height == e.height &&
      this.className == e.className
    )
  }
  static forRange(e, s, a) {
    if (a.empty) {
      let c = e.coordsAtPos(a.head, a.assoc || 1)
      if (!c) return []
      let h = getBase(e)
      return [
        new RectangleMarker(
          s,
          c.left - h.left,
          c.top - h.top,
          null,
          c.bottom - c.top
        )
      ]
    } else return rectanglesForRange(e, s, a)
  }
}
function getBase(o) {
  let e = o.scrollDOM.getBoundingClientRect()
  return {
    left:
      (o.textDirection == Direction.LTR
        ? e.left
        : e.right - o.scrollDOM.clientWidth * o.scaleX) -
      o.scrollDOM.scrollLeft * o.scaleX,
    top: e.top - o.scrollDOM.scrollTop * o.scaleY
  }
}
function wrappedLine(o, e, s) {
  let a = EditorSelection.cursor(e)
  return {
    from: Math.max(s.from, o.moveToLineBoundary(a, !1, !0).from),
    to: Math.min(s.to, o.moveToLineBoundary(a, !0, !0).from),
    type: BlockType.Text
  }
}
function rectanglesForRange(o, e, s) {
  if (s.to <= o.viewport.from || s.from >= o.viewport.to) return []
  let a = Math.max(s.from, o.viewport.from),
    c = Math.min(s.to, o.viewport.to),
    h = o.textDirection == Direction.LTR,
    d = o.contentDOM,
    g = d.getBoundingClientRect(),
    b = getBase(o),
    $ = d.querySelector('.cm-line'),
    _ = $ && window.getComputedStyle($),
    j =
      g.left +
      (_ ? parseInt(_.paddingLeft) + Math.min(0, parseInt(_.textIndent)) : 0),
    _e = g.right - (_ ? parseInt(_.paddingRight) : 0),
    et = blockAt(o, a),
    tt = blockAt(o, c),
    rt = et.type == BlockType.Text ? et : null,
    st = tt.type == BlockType.Text ? tt : null
  if (
    (rt &&
      (o.lineWrapping || et.widgetLineBreaks) &&
      (rt = wrappedLine(o, a, rt)),
    st &&
      (o.lineWrapping || tt.widgetLineBreaks) &&
      (st = wrappedLine(o, c, st)),
    rt && st && rt.from == st.from)
  )
    return it(ot(s.from, s.to, rt))
  {
    let at = rt ? ot(s.from, null, rt) : lt(et, !1),
      ct = st ? ot(null, s.to, st) : lt(tt, !0),
      ut = []
    return (
      (rt || et).to < (st || tt).from - (rt && st ? 1 : 0) ||
      (et.widgetLineBreaks > 1 && at.bottom + o.defaultLineHeight / 2 < ct.top)
        ? ut.push(nt(j, at.bottom, _e, ct.top))
        : at.bottom < ct.top &&
          o.elementAtHeight((at.bottom + ct.top) / 2).type == BlockType.Text &&
          (at.bottom = ct.top = (at.bottom + ct.top) / 2),
      it(at).concat(ut).concat(it(ct))
    )
  }
  function nt(at, ct, ut, ht) {
    return new RectangleMarker(
      e,
      at - b.left,
      ct - b.top - 0.01,
      ut - at,
      ht - ct + 0.01
    )
  }
  function it({ top: at, bottom: ct, horizontal: ut }) {
    let ht = []
    for (let pt = 0; pt < ut.length; pt += 2)
      ht.push(nt(ut[pt], at, ut[pt + 1], ct))
    return ht
  }
  function ot(at, ct, ut) {
    let ht = 1e9,
      pt = -1e9,
      dt = []
    function Ot(bt, Ct, wt, kt, ft) {
      let gt = o.coordsAtPos(bt, bt == ut.to ? -2 : 2),
        mt = o.coordsAtPos(wt, wt == ut.from ? 2 : -2)
      !gt ||
        !mt ||
        ((ht = Math.min(gt.top, mt.top, ht)),
        (pt = Math.max(gt.bottom, mt.bottom, pt)),
        ft == Direction.LTR
          ? dt.push(h && Ct ? j : gt.left, h && kt ? _e : mt.right)
          : dt.push(!h && kt ? j : mt.left, !h && Ct ? _e : gt.right))
    }
    let St = at ?? ut.from,
      vt = ct ?? ut.to
    for (let bt of o.visibleRanges)
      if (bt.to > St && bt.from < vt)
        for (let Ct = Math.max(bt.from, St), wt = Math.min(bt.to, vt); ; ) {
          let kt = o.state.doc.lineAt(Ct)
          for (let ft of o.bidiSpans(kt)) {
            let gt = ft.from + kt.from,
              mt = ft.to + kt.from
            if (gt >= wt) break
            mt > Ct &&
              Ot(
                Math.max(gt, Ct),
                at == null && gt <= St,
                Math.min(mt, wt),
                ct == null && mt >= vt,
                ft.dir
              )
          }
          if (((Ct = kt.to + 1), Ct >= wt)) break
        }
    return (
      dt.length == 0 && Ot(St, at == null, vt, ct == null, o.textDirection),
      { top: ht, bottom: pt, horizontal: dt }
    )
  }
  function lt(at, ct) {
    let ut = g.top + (ct ? at.top : at.bottom)
    return { top: ut, bottom: ut, horizontal: [] }
  }
}
function sameMarker(o, e) {
  return o.constructor == e.constructor && o.eq(e)
}
class LayerView {
  constructor(e, s) {
    ;(this.view = e),
      (this.layer = s),
      (this.drawn = []),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.measureReq = {
        read: this.measure.bind(this),
        write: this.draw.bind(this)
      }),
      (this.dom = e.scrollDOM.appendChild(document.createElement('div'))),
      this.dom.classList.add('cm-layer'),
      s.above && this.dom.classList.add('cm-layer-above'),
      s.class && this.dom.classList.add(s.class),
      this.scale(),
      this.dom.setAttribute('aria-hidden', 'true'),
      this.setOrder(e.state),
      e.requestMeasure(this.measureReq),
      s.mount && s.mount(this.dom, e)
  }
  update(e) {
    e.startState.facet(layerOrder) != e.state.facet(layerOrder) &&
      this.setOrder(e.state),
      (this.layer.update(e, this.dom) || e.geometryChanged) &&
        (this.scale(), e.view.requestMeasure(this.measureReq))
  }
  setOrder(e) {
    let s = 0,
      a = e.facet(layerOrder)
    for (; s < a.length && a[s] != this.layer; ) s++
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - s)
  }
  measure() {
    return this.layer.markers(this.view)
  }
  scale() {
    let { scaleX: e, scaleY: s } = this.view
    ;(e != this.scaleX || s != this.scaleY) &&
      ((this.scaleX = e),
      (this.scaleY = s),
      (this.dom.style.transform = `scale(${1 / e}, ${1 / s})`))
  }
  draw(e) {
    if (
      e.length != this.drawn.length ||
      e.some((s, a) => !sameMarker(s, this.drawn[a]))
    ) {
      let s = this.dom.firstChild,
        a = 0
      for (let c of e)
        c.update &&
        s &&
        c.constructor &&
        this.drawn[a].constructor &&
        c.update(s, this.drawn[a])
          ? ((s = s.nextSibling), a++)
          : this.dom.insertBefore(c.draw(), s)
      for (; s; ) {
        let c = s.nextSibling
        s.remove(), (s = c)
      }
      this.drawn = e
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view),
      this.dom.remove()
  }
}
const layerOrder = Facet.define()
function layer(o) {
  return [ViewPlugin.define((e) => new LayerView(e, o)), layerOrder.of(o)]
}
const CanHidePrimary = !browser.ios,
  selectionConfig = Facet.define({
    combine(o) {
      return combineConfig(
        o,
        { cursorBlinkRate: 1200, drawRangeCursor: !0 },
        {
          cursorBlinkRate: (e, s) => Math.min(e, s),
          drawRangeCursor: (e, s) => e || s
        }
      )
    }
  })
function drawSelection(o = {}) {
  return [
    selectionConfig.of(o),
    cursorLayer,
    selectionLayer,
    hideNativeSelection,
    nativeSelectionHidden.of(!0)
  ]
}
function configChanged(o) {
  return o.startState.facet(selectionConfig) != o.state.facet(selectionConfig)
}
const cursorLayer = layer({
  above: !0,
  markers(o) {
    let { state: e } = o,
      s = e.facet(selectionConfig),
      a = []
    for (let c of e.selection.ranges) {
      let h = c == e.selection.main
      if (c.empty ? !h || CanHidePrimary : s.drawRangeCursor) {
        let d = h
            ? 'cm-cursor cm-cursor-primary'
            : 'cm-cursor cm-cursor-secondary',
          g = c.empty
            ? c
            : EditorSelection.cursor(c.head, c.head > c.anchor ? -1 : 1)
        for (let b of RectangleMarker.forRange(o, d, g)) a.push(b)
      }
    }
    return a
  },
  update(o, e) {
    o.transactions.some((a) => a.selection) &&
      (e.style.animationName =
        e.style.animationName == 'cm-blink' ? 'cm-blink2' : 'cm-blink')
    let s = configChanged(o)
    return s && setBlinkRate(o.state, e), o.docChanged || o.selectionSet || s
  },
  mount(o, e) {
    setBlinkRate(e.state, o)
  },
  class: 'cm-cursorLayer'
})
function setBlinkRate(o, e) {
  e.style.animationDuration = o.facet(selectionConfig).cursorBlinkRate + 'ms'
}
const selectionLayer = layer({
    above: !1,
    markers(o) {
      return o.state.selection.ranges
        .map((e) =>
          e.empty
            ? []
            : RectangleMarker.forRange(o, 'cm-selectionBackground', e)
        )
        .reduce((e, s) => e.concat(s))
    },
    update(o, e) {
      return (
        o.docChanged || o.selectionSet || o.viewportChanged || configChanged(o)
      )
    },
    class: 'cm-selectionLayer'
  }),
  themeSpec = {
    '.cm-line': {
      '& ::selection': { backgroundColor: 'transparent !important' },
      '&::selection': { backgroundColor: 'transparent !important' }
    }
  }
CanHidePrimary && (themeSpec['.cm-line'].caretColor = 'transparent !important')
const hideNativeSelection = Prec.highest(EditorView.theme(themeSpec)),
  setDropCursorPos = StateEffect.define({
    map(o, e) {
      return o == null ? null : e.mapPos(o)
    }
  }),
  dropCursorPos = StateField.define({
    create() {
      return null
    },
    update(o, e) {
      return (
        o != null && (o = e.changes.mapPos(o)),
        e.effects.reduce((s, a) => (a.is(setDropCursorPos) ? a.value : s), o)
      )
    }
  }),
  drawDropCursor = ViewPlugin.fromClass(
    class {
      constructor(o) {
        ;(this.view = o),
          (this.cursor = null),
          (this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          })
      }
      update(o) {
        var e
        let s = o.state.field(dropCursorPos)
        s == null
          ? this.cursor != null &&
            ((e = this.cursor) === null || e === void 0 || e.remove(),
            (this.cursor = null))
          : (this.cursor ||
              ((this.cursor = this.view.scrollDOM.appendChild(
                document.createElement('div')
              )),
              (this.cursor.className = 'cm-dropCursor')),
            (o.startState.field(dropCursorPos) != s ||
              o.docChanged ||
              o.geometryChanged) &&
              this.view.requestMeasure(this.measureReq))
      }
      readPos() {
        let { view: o } = this,
          e = o.state.field(dropCursorPos),
          s = e != null && o.coordsAtPos(e)
        if (!s) return null
        let a = o.scrollDOM.getBoundingClientRect()
        return {
          left: s.left - a.left + o.scrollDOM.scrollLeft * o.scaleX,
          top: s.top - a.top + o.scrollDOM.scrollTop * o.scaleY,
          height: s.bottom - s.top
        }
      }
      drawCursor(o) {
        if (this.cursor) {
          let { scaleX: e, scaleY: s } = this.view
          o
            ? ((this.cursor.style.left = o.left / e + 'px'),
              (this.cursor.style.top = o.top / s + 'px'),
              (this.cursor.style.height = o.height / s + 'px'))
            : (this.cursor.style.left = '-100000px')
        }
      }
      destroy() {
        this.cursor && this.cursor.remove()
      }
      setDropPos(o) {
        this.view.state.field(dropCursorPos) != o &&
          this.view.dispatch({ effects: setDropCursorPos.of(o) })
      }
    },
    {
      eventObservers: {
        dragover(o) {
          this.setDropPos(this.view.posAtCoords({ x: o.clientX, y: o.clientY }))
        },
        dragleave(o) {
          ;(o.target == this.view.contentDOM ||
            !this.view.contentDOM.contains(o.relatedTarget)) &&
            this.setDropPos(null)
        },
        dragend() {
          this.setDropPos(null)
        },
        drop() {
          this.setDropPos(null)
        }
      }
    }
  )
function dropCursor() {
  return [dropCursorPos, drawDropCursor]
}
function iterMatches(o, e, s, a, c) {
  e.lastIndex = 0
  for (let h = o.iterRange(s, a), d = s, g; !h.next().done; d += h.value.length)
    if (!h.lineBreak) for (; (g = e.exec(h.value)); ) c(d + g.index, g)
}
function matchRanges(o, e) {
  let s = o.visibleRanges
  if (s.length == 1 && s[0].from == o.viewport.from && s[0].to == o.viewport.to)
    return s
  let a = []
  for (let { from: c, to: h } of s)
    (c = Math.max(o.state.doc.lineAt(c).from, c - e)),
      (h = Math.min(o.state.doc.lineAt(h).to, h + e)),
      a.length && a[a.length - 1].to >= c
        ? (a[a.length - 1].to = h)
        : a.push({ from: c, to: h })
  return a
}
class MatchDecorator {
  constructor(e) {
    const {
      regexp: s,
      decoration: a,
      decorate: c,
      boundary: h,
      maxLength: d = 1e3
    } = e
    if (!s.global)
      throw new RangeError(
        "The regular expression given to MatchDecorator should have its 'g' flag set"
      )
    if (((this.regexp = s), c))
      this.addMatch = (g, b, $, _) => c(_, $, $ + g[0].length, g, b)
    else if (typeof a == 'function')
      this.addMatch = (g, b, $, _) => {
        let j = a(g, b, $)
        j && _($, $ + g[0].length, j)
      }
    else if (a) this.addMatch = (g, b, $, _) => _($, $ + g[0].length, a)
    else
      throw new RangeError(
        "Either 'decorate' or 'decoration' should be provided to MatchDecorator"
      )
    ;(this.boundary = h), (this.maxLength = d)
  }
  createDeco(e) {
    let s = new RangeSetBuilder(),
      a = s.add.bind(s)
    for (let { from: c, to: h } of matchRanges(e, this.maxLength))
      iterMatches(e.state.doc, this.regexp, c, h, (d, g) =>
        this.addMatch(g, e, d, a)
      )
    return s.finish()
  }
  updateDeco(e, s) {
    let a = 1e9,
      c = -1
    return (
      e.docChanged &&
        e.changes.iterChanges((h, d, g, b) => {
          b > e.view.viewport.from &&
            g < e.view.viewport.to &&
            ((a = Math.min(g, a)), (c = Math.max(b, c)))
        }),
      e.viewportChanged || c - a > 1e3
        ? this.createDeco(e.view)
        : c > -1
        ? this.updateRange(e.view, s.map(e.changes), a, c)
        : s
    )
  }
  updateRange(e, s, a, c) {
    for (let h of e.visibleRanges) {
      let d = Math.max(h.from, a),
        g = Math.min(h.to, c)
      if (g > d) {
        let b = e.state.doc.lineAt(d),
          $ = b.to < g ? e.state.doc.lineAt(g) : b,
          _ = Math.max(h.from, b.from),
          j = Math.min(h.to, $.to)
        if (this.boundary) {
          for (; d > b.from; d--)
            if (this.boundary.test(b.text[d - 1 - b.from])) {
              _ = d
              break
            }
          for (; g < $.to; g++)
            if (this.boundary.test($.text[g - $.from])) {
              j = g
              break
            }
        }
        let _e = [],
          et,
          tt = (rt, st, nt) => _e.push(nt.range(rt, st))
        if (b == $)
          for (
            this.regexp.lastIndex = _ - b.from;
            (et = this.regexp.exec(b.text)) && et.index < j - b.from;

          )
            this.addMatch(et, e, et.index + b.from, tt)
        else
          iterMatches(e.state.doc, this.regexp, _, j, (rt, st) =>
            this.addMatch(st, e, rt, tt)
          )
        s = s.update({
          filterFrom: _,
          filterTo: j,
          filter: (rt, st) => rt < _ || st > j,
          add: _e
        })
      }
    }
    return s
  }
}
const UnicodeRegexpSupport = /x/.unicode != null ? 'gu' : 'g',
  Specials = new RegExp(
    `[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`,
    UnicodeRegexpSupport
  ),
  Names = {
    0: 'null',
    7: 'bell',
    8: 'backspace',
    10: 'newline',
    11: 'vertical tab',
    13: 'carriage return',
    27: 'escape',
    8203: 'zero width space',
    8204: 'zero width non-joiner',
    8205: 'zero width joiner',
    8206: 'left-to-right mark',
    8207: 'right-to-left mark',
    8232: 'line separator',
    8237: 'left-to-right override',
    8238: 'right-to-left override',
    8294: 'left-to-right isolate',
    8295: 'right-to-left isolate',
    8297: 'pop directional isolate',
    8233: 'paragraph separator',
    65279: 'zero width no-break space',
    65532: 'object replacement'
  }
let _supportsTabSize = null
function supportsTabSize() {
  var o
  if (_supportsTabSize == null && typeof document < 'u' && document.body) {
    let e = document.body.style
    _supportsTabSize =
      ((o = e.tabSize) !== null && o !== void 0 ? o : e.MozTabSize) != null
  }
  return _supportsTabSize || !1
}
const specialCharConfig = Facet.define({
  combine(o) {
    let e = combineConfig(o, {
      render: null,
      specialChars: Specials,
      addSpecialChars: null
    })
    return (
      (e.replaceTabs = !supportsTabSize()) &&
        (e.specialChars = new RegExp(
          '	|' + e.specialChars.source,
          UnicodeRegexpSupport
        )),
      e.addSpecialChars &&
        (e.specialChars = new RegExp(
          e.specialChars.source + '|' + e.addSpecialChars.source,
          UnicodeRegexpSupport
        )),
      e
    )
  }
})
function highlightSpecialChars(o = {}) {
  return [specialCharConfig.of(o), specialCharPlugin()]
}
let _plugin = null
function specialCharPlugin() {
  return (
    _plugin ||
    (_plugin = ViewPlugin.fromClass(
      class {
        constructor(o) {
          ;(this.view = o),
            (this.decorations = Decoration.none),
            (this.decorationCache = Object.create(null)),
            (this.decorator = this.makeDecorator(
              o.state.facet(specialCharConfig)
            )),
            (this.decorations = this.decorator.createDeco(o))
        }
        makeDecorator(o) {
          return new MatchDecorator({
            regexp: o.specialChars,
            decoration: (e, s, a) => {
              let { doc: c } = s.state,
                h = codePointAt(e[0], 0)
              if (h == 9) {
                let d = c.lineAt(a),
                  g = s.state.tabSize,
                  b = countColumn(d.text, g, a - d.from)
                return Decoration.replace({
                  widget: new TabWidget(
                    ((g - (b % g)) * this.view.defaultCharacterWidth) /
                      this.view.scaleX
                  )
                })
              }
              return (
                this.decorationCache[h] ||
                (this.decorationCache[h] = Decoration.replace({
                  widget: new SpecialCharWidget(o, h)
                }))
              )
            },
            boundary: o.replaceTabs ? void 0 : /[^]/
          })
        }
        update(o) {
          let e = o.state.facet(specialCharConfig)
          o.startState.facet(specialCharConfig) != e
            ? ((this.decorator = this.makeDecorator(e)),
              (this.decorations = this.decorator.createDeco(o.view)))
            : (this.decorations = this.decorator.updateDeco(
                o,
                this.decorations
              ))
        }
      },
      { decorations: (o) => o.decorations }
    ))
  )
}
const DefaultPlaceholder = '•'
function placeholder$1(o) {
  return o >= 32
    ? DefaultPlaceholder
    : o == 10
    ? '␤'
    : String.fromCharCode(9216 + o)
}
class SpecialCharWidget extends WidgetType {
  constructor(e, s) {
    super(), (this.options = e), (this.code = s)
  }
  eq(e) {
    return e.code == this.code
  }
  toDOM(e) {
    let s = placeholder$1(this.code),
      a =
        e.state.phrase('Control character') +
        ' ' +
        (Names[this.code] || '0x' + this.code.toString(16)),
      c = this.options.render && this.options.render(this.code, a, s)
    if (c) return c
    let h = document.createElement('span')
    return (
      (h.textContent = s),
      (h.title = a),
      h.setAttribute('aria-label', a),
      (h.className = 'cm-specialChar'),
      h
    )
  }
  ignoreEvent() {
    return !1
  }
}
class TabWidget extends WidgetType {
  constructor(e) {
    super(), (this.width = e)
  }
  eq(e) {
    return e.width == this.width
  }
  toDOM() {
    let e = document.createElement('span')
    return (
      (e.textContent = '	'),
      (e.className = 'cm-tab'),
      (e.style.width = this.width + 'px'),
      e
    )
  }
  ignoreEvent() {
    return !1
  }
}
function highlightActiveLine() {
  return activeLineHighlighter
}
const lineDeco = Decoration.line({ class: 'cm-activeLine' }),
  activeLineHighlighter = ViewPlugin.fromClass(
    class {
      constructor(o) {
        this.decorations = this.getDeco(o)
      }
      update(o) {
        ;(o.docChanged || o.selectionSet) &&
          (this.decorations = this.getDeco(o.view))
      }
      getDeco(o) {
        let e = -1,
          s = []
        for (let a of o.state.selection.ranges) {
          let c = o.lineBlockAt(a.head)
          c.from > e && (s.push(lineDeco.range(c.from)), (e = c.from))
        }
        return Decoration.set(s)
      }
    },
    { decorations: (o) => o.decorations }
  )
class Placeholder extends WidgetType {
  constructor(e) {
    super(), (this.content = e)
  }
  toDOM() {
    let e = document.createElement('span')
    return (
      (e.className = 'cm-placeholder'),
      (e.style.pointerEvents = 'none'),
      e.appendChild(
        typeof this.content == 'string'
          ? document.createTextNode(this.content)
          : this.content
      ),
      typeof this.content == 'string'
        ? e.setAttribute('aria-label', 'placeholder ' + this.content)
        : e.setAttribute('aria-hidden', 'true'),
      e
    )
  }
  coordsAt(e) {
    let s = e.firstChild ? clientRectsFor(e.firstChild) : []
    if (!s.length) return null
    let a = window.getComputedStyle(e.parentNode),
      c = flattenRect(s[0], a.direction != 'rtl'),
      h = parseInt(a.lineHeight)
    return c.bottom - c.top > h * 1.5
      ? { left: c.left, right: c.right, top: c.top, bottom: c.top + h }
      : c
  }
  ignoreEvent() {
    return !1
  }
}
function placeholder(o) {
  return ViewPlugin.fromClass(
    class {
      constructor(e) {
        ;(this.view = e),
          (this.placeholder = o
            ? Decoration.set([
                Decoration.widget({
                  widget: new Placeholder(o),
                  side: 1
                }).range(0)
              ])
            : Decoration.none)
      }
      get decorations() {
        return this.view.state.doc.length ? Decoration.none : this.placeholder
      }
    },
    { decorations: (e) => e.decorations }
  )
}
const MaxOff = 2e3
function rectangleFor(o, e, s) {
  let a = Math.min(e.line, s.line),
    c = Math.max(e.line, s.line),
    h = []
  if (e.off > MaxOff || s.off > MaxOff || e.col < 0 || s.col < 0) {
    let d = Math.min(e.off, s.off),
      g = Math.max(e.off, s.off)
    for (let b = a; b <= c; b++) {
      let $ = o.doc.line(b)
      $.length <= g && h.push(EditorSelection.range($.from + d, $.to + g))
    }
  } else {
    let d = Math.min(e.col, s.col),
      g = Math.max(e.col, s.col)
    for (let b = a; b <= c; b++) {
      let $ = o.doc.line(b),
        _ = findColumn($.text, d, o.tabSize, !0)
      if (_ < 0) h.push(EditorSelection.cursor($.to))
      else {
        let j = findColumn($.text, g, o.tabSize)
        h.push(EditorSelection.range($.from + _, $.from + j))
      }
    }
  }
  return h
}
function absoluteColumn(o, e) {
  let s = o.coordsAtPos(o.viewport.from)
  return s ? Math.round(Math.abs((s.left - e) / o.defaultCharacterWidth)) : -1
}
function getPos(o, e) {
  let s = o.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    a = o.state.doc.lineAt(s),
    c = s - a.from,
    h =
      c > MaxOff
        ? -1
        : c == a.length
        ? absoluteColumn(o, e.clientX)
        : countColumn(a.text, o.state.tabSize, s - a.from)
  return { line: a.number, col: h, off: c }
}
function rectangleSelectionStyle(o, e) {
  let s = getPos(o, e),
    a = o.state.selection
  return s
    ? {
        update(c) {
          if (c.docChanged) {
            let h = c.changes.mapPos(c.startState.doc.line(s.line).from),
              d = c.state.doc.lineAt(h)
            ;(s = {
              line: d.number,
              col: s.col,
              off: Math.min(s.off, d.length)
            }),
              (a = a.map(c.changes))
          }
        },
        get(c, h, d) {
          let g = getPos(o, c)
          if (!g) return a
          let b = rectangleFor(o.state, s, g)
          return b.length
            ? d
              ? EditorSelection.create(b.concat(a.ranges))
              : EditorSelection.create(b)
            : a
        }
      }
    : null
}
function rectangularSelection(o) {
  let e =
    (o == null ? void 0 : o.eventFilter) || ((s) => s.altKey && s.button == 0)
  return EditorView.mouseSelectionStyle.of((s, a) =>
    e(a) ? rectangleSelectionStyle(s, a) : null
  )
}
const keys = {
    Alt: [18, (o) => !!o.altKey],
    Control: [17, (o) => !!o.ctrlKey],
    Shift: [16, (o) => !!o.shiftKey],
    Meta: [91, (o) => !!o.metaKey]
  },
  showCrosshair = { style: 'cursor: crosshair' }
function crosshairCursor(o = {}) {
  let [e, s] = keys[o.key || 'Alt'],
    a = ViewPlugin.fromClass(
      class {
        constructor(c) {
          ;(this.view = c), (this.isDown = !1)
        }
        set(c) {
          this.isDown != c && ((this.isDown = c), this.view.update([]))
        }
      },
      {
        eventObservers: {
          keydown(c) {
            this.set(c.keyCode == e || s(c))
          },
          keyup(c) {
            ;(c.keyCode == e || !s(c)) && this.set(!1)
          },
          mousemove(c) {
            this.set(s(c))
          }
        }
      }
    )
  return [
    a,
    EditorView.contentAttributes.of((c) => {
      var h
      return !((h = c.plugin(a)) === null || h === void 0) && h.isDown
        ? showCrosshair
        : null
    })
  ]
}
const Outside = '-10000px'
class TooltipViewManager {
  constructor(e, s, a) {
    ;(this.facet = s),
      (this.createTooltipView = a),
      (this.input = e.state.facet(s)),
      (this.tooltips = this.input.filter((c) => c)),
      (this.tooltipViews = this.tooltips.map(a))
  }
  update(e) {
    var s
    let a = e.state.facet(this.facet),
      c = a.filter((d) => d)
    if (a === this.input) {
      for (let d of this.tooltipViews) d.update && d.update(e)
      return !1
    }
    let h = []
    for (let d = 0; d < c.length; d++) {
      let g = c[d],
        b = -1
      if (g) {
        for (let $ = 0; $ < this.tooltips.length; $++) {
          let _ = this.tooltips[$]
          _ && _.create == g.create && (b = $)
        }
        if (b < 0) h[d] = this.createTooltipView(g)
        else {
          let $ = (h[d] = this.tooltipViews[b])
          $.update && $.update(e)
        }
      }
    }
    for (let d of this.tooltipViews)
      h.indexOf(d) < 0 &&
        (d.dom.remove(), (s = d.destroy) === null || s === void 0 || s.call(d))
    return (this.input = a), (this.tooltips = c), (this.tooltipViews = h), !0
  }
}
function windowSpace(o) {
  let { win: e } = o
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth }
}
const tooltipConfig = Facet.define({
    combine: (o) => {
      var e, s, a
      return {
        position: browser.ios
          ? 'absolute'
          : ((e = o.find((c) => c.position)) === null || e === void 0
              ? void 0
              : e.position) || 'fixed',
        parent:
          ((s = o.find((c) => c.parent)) === null || s === void 0
            ? void 0
            : s.parent) || null,
        tooltipSpace:
          ((a = o.find((c) => c.tooltipSpace)) === null || a === void 0
            ? void 0
            : a.tooltipSpace) || windowSpace
      }
    }
  }),
  knownHeight = new WeakMap(),
  tooltipPlugin = ViewPlugin.fromClass(
    class {
      constructor(o) {
        ;(this.view = o),
          (this.inView = !0),
          (this.madeAbsolute = !1),
          (this.lastTransaction = 0),
          (this.measureTimeout = -1)
        let e = o.state.facet(tooltipConfig)
        ;(this.position = e.position),
          (this.parent = e.parent),
          (this.classes = o.themeClasses),
          this.createContainer(),
          (this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }),
          (this.manager = new TooltipViewManager(o, showTooltip, (s) =>
            this.createTooltip(s)
          )),
          (this.intersectionObserver =
            typeof IntersectionObserver == 'function'
              ? new IntersectionObserver(
                  (s) => {
                    Date.now() > this.lastTransaction - 50 &&
                      s.length > 0 &&
                      s[s.length - 1].intersectionRatio < 1 &&
                      this.measureSoon()
                  },
                  { threshold: [1] }
                )
              : null),
          this.observeIntersection(),
          o.win.addEventListener(
            'resize',
            (this.measureSoon = this.measureSoon.bind(this))
          ),
          this.maybeMeasure()
      }
      createContainer() {
        this.parent
          ? ((this.container = document.createElement('div')),
            (this.container.style.position = 'relative'),
            (this.container.className = this.view.themeClasses),
            this.parent.appendChild(this.container))
          : (this.container = this.view.dom)
      }
      observeIntersection() {
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect()
          for (let o of this.manager.tooltipViews)
            this.intersectionObserver.observe(o.dom)
        }
      }
      measureSoon() {
        this.measureTimeout < 0 &&
          (this.measureTimeout = setTimeout(() => {
            ;(this.measureTimeout = -1), this.maybeMeasure()
          }, 50))
      }
      update(o) {
        o.transactions.length && (this.lastTransaction = Date.now())
        let e = this.manager.update(o)
        e && this.observeIntersection()
        let s = e || o.geometryChanged,
          a = o.state.facet(tooltipConfig)
        if (a.position != this.position && !this.madeAbsolute) {
          this.position = a.position
          for (let c of this.manager.tooltipViews)
            c.dom.style.position = this.position
          s = !0
        }
        if (a.parent != this.parent) {
          this.parent && this.container.remove(),
            (this.parent = a.parent),
            this.createContainer()
          for (let c of this.manager.tooltipViews)
            this.container.appendChild(c.dom)
          s = !0
        } else
          this.parent &&
            this.view.themeClasses != this.classes &&
            (this.classes = this.container.className = this.view.themeClasses)
        s && this.maybeMeasure()
      }
      createTooltip(o) {
        let e = o.create(this.view)
        if (
          (e.dom.classList.add('cm-tooltip'),
          o.arrow && !e.dom.querySelector('.cm-tooltip > .cm-tooltip-arrow'))
        ) {
          let s = document.createElement('div')
          ;(s.className = 'cm-tooltip-arrow'), e.dom.appendChild(s)
        }
        return (
          (e.dom.style.position = this.position),
          (e.dom.style.top = Outside),
          this.container.appendChild(e.dom),
          e.mount && e.mount(this.view),
          e
        )
      }
      destroy() {
        var o, e
        this.view.win.removeEventListener('resize', this.measureSoon)
        for (let s of this.manager.tooltipViews)
          s.dom.remove(), (o = s.destroy) === null || o === void 0 || o.call(s)
        ;(e = this.intersectionObserver) === null ||
          e === void 0 ||
          e.disconnect(),
          clearTimeout(this.measureTimeout)
      }
      readMeasure() {
        let o = this.view.dom.getBoundingClientRect(),
          e = 1,
          s = 1,
          a = !1
        if (this.position == 'fixed') {
          let c = this.manager.tooltipViews
          a =
            c.length > 0 &&
            c[0].dom.offsetParent != this.container.ownerDocument.body
        }
        if (a || this.position == 'absolute')
          if (this.parent) {
            let c = this.parent.getBoundingClientRect()
            c.width &&
              c.height &&
              ((e = c.width / this.parent.offsetWidth),
              (s = c.height / this.parent.offsetHeight))
          } else ({ scaleX: e, scaleY: s } = this.view.viewState)
        return {
          editor: o,
          parent: this.parent ? this.container.getBoundingClientRect() : o,
          pos: this.manager.tooltips.map((c, h) => {
            let d = this.manager.tooltipViews[h]
            return d.getCoords
              ? d.getCoords(c.pos)
              : this.view.coordsAtPos(c.pos)
          }),
          size: this.manager.tooltipViews.map(({ dom: c }) =>
            c.getBoundingClientRect()
          ),
          space: this.view.state.facet(tooltipConfig).tooltipSpace(this.view),
          scaleX: e,
          scaleY: s,
          makeAbsolute: a
        }
      }
      writeMeasure(o) {
        var e
        if (o.makeAbsolute) {
          ;(this.madeAbsolute = !0), (this.position = 'absolute')
          for (let g of this.manager.tooltipViews)
            g.dom.style.position = 'absolute'
        }
        let { editor: s, space: a, scaleX: c, scaleY: h } = o,
          d = []
        for (let g = 0; g < this.manager.tooltips.length; g++) {
          let b = this.manager.tooltips[g],
            $ = this.manager.tooltipViews[g],
            { dom: _ } = $,
            j = o.pos[g],
            _e = o.size[g]
          if (
            !j ||
            j.bottom <= Math.max(s.top, a.top) ||
            j.top >= Math.min(s.bottom, a.bottom) ||
            j.right < Math.max(s.left, a.left) - 0.1 ||
            j.left > Math.min(s.right, a.right) + 0.1
          ) {
            _.style.top = Outside
            continue
          }
          let et = b.arrow ? $.dom.querySelector('.cm-tooltip-arrow') : null,
            tt = et ? 7 : 0,
            rt = _e.right - _e.left,
            st =
              (e = knownHeight.get($)) !== null && e !== void 0
                ? e
                : _e.bottom - _e.top,
            nt = $.offset || noOffset,
            it = this.view.textDirection == Direction.LTR,
            ot =
              _e.width > a.right - a.left
                ? it
                  ? a.left
                  : a.right - _e.width
                : it
                ? Math.min(j.left - (et ? 14 : 0) + nt.x, a.right - rt)
                : Math.max(a.left, j.left - rt + (et ? 14 : 0) - nt.x),
            lt = !!b.above
          !b.strictSide &&
            (lt
              ? j.top - (_e.bottom - _e.top) - nt.y < a.top
              : j.bottom + (_e.bottom - _e.top) + nt.y > a.bottom) &&
            lt == a.bottom - j.bottom > j.top - a.top &&
            (lt = !lt)
          let at = (lt ? j.top - a.top : a.bottom - j.bottom) - tt
          if (at < st && $.resize !== !1) {
            if (at < this.view.defaultLineHeight) {
              _.style.top = Outside
              continue
            }
            knownHeight.set($, st), (_.style.height = (st = at) / h + 'px')
          } else _.style.height && (_.style.height = '')
          let ct = lt ? j.top - st - tt - nt.y : j.bottom + tt + nt.y,
            ut = ot + rt
          if ($.overlap !== !0)
            for (let ht of d)
              ht.left < ut &&
                ht.right > ot &&
                ht.top < ct + st &&
                ht.bottom > ct &&
                (ct = lt ? ht.top - st - 2 - tt : ht.bottom + tt + 2)
          if (
            (this.position == 'absolute'
              ? ((_.style.top = (ct - o.parent.top) / h + 'px'),
                (_.style.left = (ot - o.parent.left) / c + 'px'))
              : ((_.style.top = ct / h + 'px'), (_.style.left = ot / c + 'px')),
            et)
          ) {
            let ht = j.left + (it ? nt.x : -nt.x) - (ot + 14 - 7)
            et.style.left = ht / c + 'px'
          }
          $.overlap !== !0 &&
            d.push({ left: ot, top: ct, right: ut, bottom: ct + st }),
            _.classList.toggle('cm-tooltip-above', lt),
            _.classList.toggle('cm-tooltip-below', !lt),
            $.positioned && $.positioned(o.space)
        }
      }
      maybeMeasure() {
        if (
          this.manager.tooltips.length &&
          (this.view.inView && this.view.requestMeasure(this.measureReq),
          this.inView != this.view.inView &&
            ((this.inView = this.view.inView), !this.inView))
        )
          for (let o of this.manager.tooltipViews) o.dom.style.top = Outside
      }
    },
    {
      eventObservers: {
        scroll() {
          this.maybeMeasure()
        }
      }
    }
  ),
  baseTheme$4 = EditorView.baseTheme({
    '.cm-tooltip': { zIndex: 100, boxSizing: 'border-box' },
    '&light .cm-tooltip': {
      border: '1px solid #bbb',
      backgroundColor: '#f5f5f5'
    },
    '&light .cm-tooltip-section:not(:first-child)': {
      borderTop: '1px solid #bbb'
    },
    '&dark .cm-tooltip': { backgroundColor: '#333338', color: 'white' },
    '.cm-tooltip-arrow': {
      height: '7px',
      width: `${7 * 2}px`,
      position: 'absolute',
      zIndex: -1,
      overflow: 'hidden',
      '&:before, &:after': {
        content: "''",
        position: 'absolute',
        width: 0,
        height: 0,
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent'
      },
      '.cm-tooltip-above &': {
        bottom: '-7px',
        '&:before': { borderTop: '7px solid #bbb' },
        '&:after': { borderTop: '7px solid #f5f5f5', bottom: '1px' }
      },
      '.cm-tooltip-below &': {
        top: '-7px',
        '&:before': { borderBottom: '7px solid #bbb' },
        '&:after': { borderBottom: '7px solid #f5f5f5', top: '1px' }
      }
    },
    '&dark .cm-tooltip .cm-tooltip-arrow': {
      '&:before': { borderTopColor: '#333338', borderBottomColor: '#333338' },
      '&:after': {
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
      }
    }
  }),
  noOffset = { x: 0, y: 0 },
  showTooltip = Facet.define({ enables: [tooltipPlugin, baseTheme$4] }),
  showHoverTooltip = Facet.define()
class HoverTooltipHost {
  static create(e) {
    return new HoverTooltipHost(e)
  }
  constructor(e) {
    ;(this.view = e),
      (this.mounted = !1),
      (this.dom = document.createElement('div')),
      this.dom.classList.add('cm-tooltip-hover'),
      (this.manager = new TooltipViewManager(e, showHoverTooltip, (s) =>
        this.createHostedView(s)
      ))
  }
  createHostedView(e) {
    let s = e.create(this.view)
    return (
      s.dom.classList.add('cm-tooltip-section'),
      this.dom.appendChild(s.dom),
      this.mounted && s.mount && s.mount(this.view),
      s
    )
  }
  mount(e) {
    for (let s of this.manager.tooltipViews) s.mount && s.mount(e)
    this.mounted = !0
  }
  positioned(e) {
    for (let s of this.manager.tooltipViews) s.positioned && s.positioned(e)
  }
  update(e) {
    this.manager.update(e)
  }
  destroy() {
    var e
    for (let s of this.manager.tooltipViews)
      (e = s.destroy) === null || e === void 0 || e.call(s)
  }
}
const showHoverTooltipHost = showTooltip.compute([showHoverTooltip], (o) => {
  let e = o.facet(showHoverTooltip).filter((s) => s)
  return e.length === 0
    ? null
    : {
        pos: Math.min(...e.map((s) => s.pos)),
        end: Math.max(...e.filter((s) => s.end != null).map((s) => s.end)),
        create: HoverTooltipHost.create,
        above: e[0].above,
        arrow: e.some((s) => s.arrow)
      }
})
class HoverPlugin {
  constructor(e, s, a, c, h) {
    ;(this.view = e),
      (this.source = s),
      (this.field = a),
      (this.setHover = c),
      (this.hoverTime = h),
      (this.hoverTimeout = -1),
      (this.restartTimeout = -1),
      (this.pending = null),
      (this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }),
      (this.checkHover = this.checkHover.bind(this)),
      e.dom.addEventListener(
        'mouseleave',
        (this.mouseleave = this.mouseleave.bind(this))
      ),
      e.dom.addEventListener(
        'mousemove',
        (this.mousemove = this.mousemove.bind(this))
      )
  }
  update() {
    this.pending &&
      ((this.pending = null),
      clearTimeout(this.restartTimeout),
      (this.restartTimeout = setTimeout(() => this.startHover(), 20)))
  }
  get active() {
    return this.view.state.field(this.field)
  }
  checkHover() {
    if (((this.hoverTimeout = -1), this.active)) return
    let e = Date.now() - this.lastMove.time
    e < this.hoverTime
      ? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e))
      : this.startHover()
  }
  startHover() {
    clearTimeout(this.restartTimeout)
    let { view: e, lastMove: s } = this,
      a = e.docView.nearest(s.target)
    if (!a) return
    let c,
      h = 1
    if (a instanceof WidgetView) c = a.posAtStart
    else {
      if (((c = e.posAtCoords(s)), c == null)) return
      let g = e.coordsAtPos(c)
      if (
        !g ||
        s.y < g.top ||
        s.y > g.bottom ||
        s.x < g.left - e.defaultCharacterWidth ||
        s.x > g.right + e.defaultCharacterWidth
      )
        return
      let b = e
          .bidiSpans(e.state.doc.lineAt(c))
          .find((_) => _.from <= c && _.to >= c),
        $ = b && b.dir == Direction.RTL ? -1 : 1
      h = s.x < g.left ? -$ : $
    }
    let d = this.source(e, c, h)
    if (d != null && d.then) {
      let g = (this.pending = { pos: c })
      d.then(
        (b) => {
          this.pending == g &&
            ((this.pending = null),
            b && e.dispatch({ effects: this.setHover.of(b) }))
        },
        (b) => logException(e.state, b, 'hover tooltip')
      )
    } else d && e.dispatch({ effects: this.setHover.of(d) })
  }
  mousemove(e) {
    var s
    ;(this.lastMove = {
      x: e.clientX,
      y: e.clientY,
      target: e.target,
      time: Date.now()
    }),
      this.hoverTimeout < 0 &&
        (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime))
    let a = this.active
    if ((a && !isInTooltip(this.lastMove.target)) || this.pending) {
      let { pos: c } = a || this.pending,
        h = (s = a == null ? void 0 : a.end) !== null && s !== void 0 ? s : c
      ;(c == h
        ? this.view.posAtCoords(this.lastMove) != c
        : !isOverRange(this.view, c, h, e.clientX, e.clientY)) &&
        (this.view.dispatch({ effects: this.setHover.of(null) }),
        (this.pending = null))
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout),
      (this.hoverTimeout = -1),
      this.active &&
        !isInTooltip(e.relatedTarget) &&
        this.view.dispatch({ effects: this.setHover.of(null) })
  }
  destroy() {
    clearTimeout(this.hoverTimeout),
      this.view.dom.removeEventListener('mouseleave', this.mouseleave),
      this.view.dom.removeEventListener('mousemove', this.mousemove)
  }
}
function isInTooltip(o) {
  for (let e = o; e; e = e.parentNode)
    if (e.nodeType == 1 && e.classList.contains('cm-tooltip')) return !0
  return !1
}
function isOverRange(o, e, s, a, c, h) {
  let d = o.scrollDOM.getBoundingClientRect(),
    g = o.documentTop + o.documentPadding.top + o.contentHeight
  if (d.left > a || d.right < a || d.top > c || Math.min(d.bottom, g) < c)
    return !1
  let b = o.posAtCoords({ x: a, y: c }, !1)
  return b >= e && b <= s
}
function hoverTooltip(o, e = {}) {
  let s = StateEffect.define(),
    a = StateField.define({
      create() {
        return null
      },
      update(c, h) {
        if (
          c &&
          ((e.hideOnChange && (h.docChanged || h.selection)) ||
            (e.hideOn && e.hideOn(h, c)))
        )
          return null
        if (c && h.docChanged) {
          let d = h.changes.mapPos(c.pos, -1, MapMode.TrackDel)
          if (d == null) return null
          let g = Object.assign(Object.create(null), c)
          ;(g.pos = d),
            c.end != null && (g.end = h.changes.mapPos(c.end)),
            (c = g)
        }
        for (let d of h.effects)
          d.is(s) && (c = d.value), d.is(closeHoverTooltipEffect) && (c = null)
        return c
      },
      provide: (c) => showHoverTooltip.from(c)
    })
  return [
    a,
    ViewPlugin.define((c) => new HoverPlugin(c, o, a, s, e.hoverTime || 300)),
    showHoverTooltipHost
  ]
}
function getTooltip(o, e) {
  let s = o.plugin(tooltipPlugin)
  if (!s) return null
  let a = s.manager.tooltips.indexOf(e)
  return a < 0 ? null : s.manager.tooltipViews[a]
}
const closeHoverTooltipEffect = StateEffect.define(),
  panelConfig = Facet.define({
    combine(o) {
      let e, s
      for (let a of o) (e = e || a.topContainer), (s = s || a.bottomContainer)
      return { topContainer: e, bottomContainer: s }
    }
  })
function getPanel(o, e) {
  let s = o.plugin(panelPlugin),
    a = s ? s.specs.indexOf(e) : -1
  return a > -1 ? s.panels[a] : null
}
const panelPlugin = ViewPlugin.fromClass(
  class {
    constructor(o) {
      ;(this.input = o.state.facet(showPanel)),
        (this.specs = this.input.filter((s) => s)),
        (this.panels = this.specs.map((s) => s(o)))
      let e = o.state.facet(panelConfig)
      ;(this.top = new PanelGroup(o, !0, e.topContainer)),
        (this.bottom = new PanelGroup(o, !1, e.bottomContainer)),
        this.top.sync(this.panels.filter((s) => s.top)),
        this.bottom.sync(this.panels.filter((s) => !s.top))
      for (let s of this.panels)
        s.dom.classList.add('cm-panel'), s.mount && s.mount()
    }
    update(o) {
      let e = o.state.facet(panelConfig)
      this.top.container != e.topContainer &&
        (this.top.sync([]),
        (this.top = new PanelGroup(o.view, !0, e.topContainer))),
        this.bottom.container != e.bottomContainer &&
          (this.bottom.sync([]),
          (this.bottom = new PanelGroup(o.view, !1, e.bottomContainer))),
        this.top.syncClasses(),
        this.bottom.syncClasses()
      let s = o.state.facet(showPanel)
      if (s != this.input) {
        let a = s.filter((b) => b),
          c = [],
          h = [],
          d = [],
          g = []
        for (let b of a) {
          let $ = this.specs.indexOf(b),
            _
          $ < 0
            ? ((_ = b(o.view)), g.push(_))
            : ((_ = this.panels[$]), _.update && _.update(o)),
            c.push(_),
            (_.top ? h : d).push(_)
        }
        ;(this.specs = a),
          (this.panels = c),
          this.top.sync(h),
          this.bottom.sync(d)
        for (let b of g) b.dom.classList.add('cm-panel'), b.mount && b.mount()
      } else for (let a of this.panels) a.update && a.update(o)
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([])
    }
  },
  {
    provide: (o) =>
      EditorView.scrollMargins.of((e) => {
        let s = e.plugin(o)
        return (
          s && { top: s.top.scrollMargin(), bottom: s.bottom.scrollMargin() }
        )
      })
  }
)
class PanelGroup {
  constructor(e, s, a) {
    ;(this.view = e),
      (this.top = s),
      (this.container = a),
      (this.dom = void 0),
      (this.classes = ''),
      (this.panels = []),
      this.syncClasses()
  }
  sync(e) {
    for (let s of this.panels) s.destroy && e.indexOf(s) < 0 && s.destroy()
    ;(this.panels = e), this.syncDOM()
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), (this.dom = void 0))
      return
    }
    if (!this.dom) {
      ;(this.dom = document.createElement('div')),
        (this.dom.className = this.top
          ? 'cm-panels cm-panels-top'
          : 'cm-panels cm-panels-bottom'),
        (this.dom.style[this.top ? 'top' : 'bottom'] = '0')
      let s = this.container || this.view.dom
      s.insertBefore(this.dom, this.top ? s.firstChild : null)
    }
    let e = this.dom.firstChild
    for (let s of this.panels)
      if (s.dom.parentNode == this.dom) {
        for (; e != s.dom; ) e = rm(e)
        e = e.nextSibling
      } else this.dom.insertBefore(s.dom, e)
    for (; e; ) e = rm(e)
  }
  scrollMargin() {
    return !this.dom || this.container
      ? 0
      : Math.max(
          0,
          this.top
            ? this.dom.getBoundingClientRect().bottom -
                Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
            : Math.min(
                innerHeight,
                this.view.scrollDOM.getBoundingClientRect().bottom
              ) - this.dom.getBoundingClientRect().top
        )
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(' '))
        e && this.container.classList.remove(e)
      for (let e of (this.classes = this.view.themeClasses).split(' '))
        e && this.container.classList.add(e)
    }
  }
}
function rm(o) {
  let e = o.nextSibling
  return o.remove(), e
}
const showPanel = Facet.define({ enables: panelPlugin })
class GutterMarker extends RangeValue {
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e))
  }
  eq(e) {
    return !1
  }
  destroy(e) {}
}
GutterMarker.prototype.elementClass = ''
GutterMarker.prototype.toDOM = void 0
GutterMarker.prototype.mapMode = MapMode.TrackBefore
GutterMarker.prototype.startSide = GutterMarker.prototype.endSide = -1
GutterMarker.prototype.point = !0
const gutterLineClass = Facet.define(),
  defaults$1 = {
    class: '',
    renderEmptyElements: !1,
    elementStyle: '',
    markers: () => RangeSet.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {}
  },
  activeGutters = Facet.define()
function gutter(o) {
  return [
    gutters(),
    activeGutters.of(Object.assign(Object.assign({}, defaults$1), o))
  ]
}
const unfixGutters = Facet.define({ combine: (o) => o.some((e) => e) })
function gutters(o) {
  let e = [gutterView]
  return o && o.fixed === !1 && e.push(unfixGutters.of(!0)), e
}
const gutterView = ViewPlugin.fromClass(
  class {
    constructor(o) {
      ;(this.view = o),
        (this.prevViewport = o.viewport),
        (this.dom = document.createElement('div')),
        (this.dom.className = 'cm-gutters'),
        this.dom.setAttribute('aria-hidden', 'true'),
        (this.dom.style.minHeight =
          this.view.contentHeight / this.view.scaleY + 'px'),
        (this.gutters = o.state
          .facet(activeGutters)
          .map((e) => new SingleGutterView(o, e)))
      for (let e of this.gutters) this.dom.appendChild(e.dom)
      ;(this.fixed = !o.state.facet(unfixGutters)),
        this.fixed && (this.dom.style.position = 'sticky'),
        this.syncGutters(!1),
        o.scrollDOM.insertBefore(this.dom, o.contentDOM)
    }
    update(o) {
      if (this.updateGutters(o)) {
        let e = this.prevViewport,
          s = o.view.viewport,
          a = Math.min(e.to, s.to) - Math.max(e.from, s.from)
        this.syncGutters(a < (s.to - s.from) * 0.8)
      }
      o.geometryChanged &&
        (this.dom.style.minHeight = this.view.contentHeight + 'px'),
        this.view.state.facet(unfixGutters) != !this.fixed &&
          ((this.fixed = !this.fixed),
          (this.dom.style.position = this.fixed ? 'sticky' : '')),
        (this.prevViewport = o.view.viewport)
    }
    syncGutters(o) {
      let e = this.dom.nextSibling
      o && this.dom.remove()
      let s = RangeSet.iter(
          this.view.state.facet(gutterLineClass),
          this.view.viewport.from
        ),
        a = [],
        c = this.gutters.map(
          (h) =>
            new UpdateContext(
              h,
              this.view.viewport,
              -this.view.documentPadding.top
            )
        )
      for (let h of this.view.viewportLineBlocks)
        if ((a.length && (a = []), Array.isArray(h.type))) {
          let d = !0
          for (let g of h.type)
            if (g.type == BlockType.Text && d) {
              advanceCursor(s, a, g.from)
              for (let b of c) b.line(this.view, g, a)
              d = !1
            } else if (g.widget) for (let b of c) b.widget(this.view, g)
        } else if (h.type == BlockType.Text) {
          advanceCursor(s, a, h.from)
          for (let d of c) d.line(this.view, h, a)
        } else if (h.widget) for (let d of c) d.widget(this.view, h)
      for (let h of c) h.finish()
      o && this.view.scrollDOM.insertBefore(this.dom, e)
    }
    updateGutters(o) {
      let e = o.startState.facet(activeGutters),
        s = o.state.facet(activeGutters),
        a =
          o.docChanged ||
          o.heightChanged ||
          o.viewportChanged ||
          !RangeSet.eq(
            o.startState.facet(gutterLineClass),
            o.state.facet(gutterLineClass),
            o.view.viewport.from,
            o.view.viewport.to
          )
      if (e == s) for (let c of this.gutters) c.update(o) && (a = !0)
      else {
        a = !0
        let c = []
        for (let h of s) {
          let d = e.indexOf(h)
          d < 0
            ? c.push(new SingleGutterView(this.view, h))
            : (this.gutters[d].update(o), c.push(this.gutters[d]))
        }
        for (let h of this.gutters)
          h.dom.remove(), c.indexOf(h) < 0 && h.destroy()
        for (let h of c) this.dom.appendChild(h.dom)
        this.gutters = c
      }
      return a
    }
    destroy() {
      for (let o of this.gutters) o.destroy()
      this.dom.remove()
    }
  },
  {
    provide: (o) =>
      EditorView.scrollMargins.of((e) => {
        let s = e.plugin(o)
        return !s || s.gutters.length == 0 || !s.fixed
          ? null
          : e.textDirection == Direction.LTR
          ? { left: s.dom.offsetWidth * e.scaleX }
          : { right: s.dom.offsetWidth * e.scaleX }
      })
  }
)
function asArray(o) {
  return Array.isArray(o) ? o : [o]
}
function advanceCursor(o, e, s) {
  for (; o.value && o.from <= s; ) o.from == s && e.push(o.value), o.next()
}
class UpdateContext {
  constructor(e, s, a) {
    ;(this.gutter = e),
      (this.height = a),
      (this.i = 0),
      (this.cursor = RangeSet.iter(e.markers, s.from))
  }
  addElement(e, s, a) {
    let { gutter: c } = this,
      h = s.top - this.height
    if (this.i == c.elements.length) {
      let d = new GutterElement(e, s.height, h, a)
      c.elements.push(d), c.dom.appendChild(d.dom)
    } else c.elements[this.i].update(e, s.height, h, a)
    ;(this.height = s.bottom), this.i++
  }
  line(e, s, a) {
    let c = []
    advanceCursor(this.cursor, c, s.from), a.length && (c = c.concat(a))
    let h = this.gutter.config.lineMarker(e, s, c)
    h && c.unshift(h)
    let d = this.gutter
    ;(c.length == 0 && !d.config.renderEmptyElements) ||
      this.addElement(e, s, c)
  }
  widget(e, s) {
    let a = this.gutter.config.widgetMarker(e, s.widget, s)
    a && this.addElement(e, s, [a])
  }
  finish() {
    let e = this.gutter
    for (; e.elements.length > this.i; ) {
      let s = e.elements.pop()
      e.dom.removeChild(s.dom), s.destroy()
    }
  }
}
class SingleGutterView {
  constructor(e, s) {
    ;(this.view = e),
      (this.config = s),
      (this.elements = []),
      (this.spacer = null),
      (this.dom = document.createElement('div')),
      (this.dom.className =
        'cm-gutter' + (this.config.class ? ' ' + this.config.class : ''))
    for (let a in s.domEventHandlers)
      this.dom.addEventListener(a, (c) => {
        let h = c.target,
          d
        if (h != this.dom && this.dom.contains(h)) {
          for (; h.parentNode != this.dom; ) h = h.parentNode
          let b = h.getBoundingClientRect()
          d = (b.top + b.bottom) / 2
        } else d = c.clientY
        let g = e.lineBlockAtHeight(d - e.documentTop)
        s.domEventHandlers[a](e, g, c) && c.preventDefault()
      })
    ;(this.markers = asArray(s.markers(e))),
      s.initialSpacer &&
        ((this.spacer = new GutterElement(e, 0, 0, [s.initialSpacer(e)])),
        this.dom.appendChild(this.spacer.dom),
        (this.spacer.dom.style.cssText +=
          'visibility: hidden; pointer-events: none'))
  }
  update(e) {
    let s = this.markers
    if (
      ((this.markers = asArray(this.config.markers(e.view))),
      this.spacer && this.config.updateSpacer)
    ) {
      let c = this.config.updateSpacer(this.spacer.markers[0], e)
      c != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [c])
    }
    let a = e.view.viewport
    return (
      !RangeSet.eq(this.markers, s, a.from, a.to) ||
      (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
    )
  }
  destroy() {
    for (let e of this.elements) e.destroy()
  }
}
class GutterElement {
  constructor(e, s, a, c) {
    ;(this.height = -1),
      (this.above = 0),
      (this.markers = []),
      (this.dom = document.createElement('div')),
      (this.dom.className = 'cm-gutterElement'),
      this.update(e, s, a, c)
  }
  update(e, s, a, c) {
    this.height != s &&
      ((this.height = s), (this.dom.style.height = s / e.scaleY + 'px')),
      this.above != a &&
        (this.dom.style.marginTop = (this.above = a)
          ? a / e.scaleY + 'px'
          : ''),
      sameMarkers(this.markers, c) || this.setMarkers(e, c)
  }
  setMarkers(e, s) {
    let a = 'cm-gutterElement',
      c = this.dom.firstChild
    for (let h = 0, d = 0; ; ) {
      let g = d,
        b = h < s.length ? s[h++] : null,
        $ = !1
      if (b) {
        let _ = b.elementClass
        _ && (a += ' ' + _)
        for (let j = d; j < this.markers.length; j++)
          if (this.markers[j].compare(b)) {
            ;(g = j), ($ = !0)
            break
          }
      } else g = this.markers.length
      for (; d < g; ) {
        let _ = this.markers[d++]
        if (_.toDOM) {
          _.destroy(c)
          let j = c.nextSibling
          c.remove(), (c = j)
        }
      }
      if (!b) break
      b.toDOM &&
        ($ ? (c = c.nextSibling) : this.dom.insertBefore(b.toDOM(e), c)),
        $ && d++
    }
    ;(this.dom.className = a), (this.markers = s)
  }
  destroy() {
    this.setMarkers(null, [])
  }
}
function sameMarkers(o, e) {
  if (o.length != e.length) return !1
  for (let s = 0; s < o.length; s++) if (!o[s].compare(e[s])) return !1
  return !0
}
const lineNumberMarkers = Facet.define(),
  lineNumberConfig = Facet.define({
    combine(o) {
      return combineConfig(
        o,
        { formatNumber: String, domEventHandlers: {} },
        {
          domEventHandlers(e, s) {
            let a = Object.assign({}, e)
            for (let c in s) {
              let h = a[c],
                d = s[c]
              a[c] = h ? (g, b, $) => h(g, b, $) || d(g, b, $) : d
            }
            return a
          }
        }
      )
    }
  })
class NumberMarker extends GutterMarker {
  constructor(e) {
    super(), (this.number = e)
  }
  eq(e) {
    return this.number == e.number
  }
  toDOM() {
    return document.createTextNode(this.number)
  }
}
function formatNumber(o, e) {
  return o.state.facet(lineNumberConfig).formatNumber(e, o.state)
}
const lineNumberGutter = activeGutters.compute([lineNumberConfig], (o) => ({
  class: 'cm-lineNumbers',
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(lineNumberMarkers)
  },
  lineMarker(e, s, a) {
    return a.some((c) => c.toDOM)
      ? null
      : new NumberMarker(formatNumber(e, e.state.doc.lineAt(s.from).number))
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) =>
    e.startState.facet(lineNumberConfig) != e.state.facet(lineNumberConfig),
  initialSpacer(e) {
    return new NumberMarker(formatNumber(e, maxLineNumber(e.state.doc.lines)))
  },
  updateSpacer(e, s) {
    let a = formatNumber(s.view, maxLineNumber(s.view.state.doc.lines))
    return a == e.number ? e : new NumberMarker(a)
  },
  domEventHandlers: o.facet(lineNumberConfig).domEventHandlers
}))
function lineNumbers(o = {}) {
  return [lineNumberConfig.of(o), gutters(), lineNumberGutter]
}
function maxLineNumber(o) {
  let e = 9
  for (; e < o; ) e = e * 10 + 9
  return e
}
const activeLineGutterMarker = new (class extends GutterMarker {
    constructor() {
      super(...arguments), (this.elementClass = 'cm-activeLineGutter')
    }
  })(),
  activeLineGutterHighlighter = gutterLineClass.compute(['selection'], (o) => {
    let e = [],
      s = -1
    for (let a of o.selection.ranges) {
      let c = o.doc.lineAt(a.head).from
      c > s && ((s = c), e.push(activeLineGutterMarker.range(c)))
    }
    return RangeSet.of(e)
  })
function highlightActiveLineGutter() {
  return activeLineGutterHighlighter
}
const DefaultBufferLength = 1024
let nextPropID = 0
class Range {
  constructor(e, s) {
    ;(this.from = e), (this.to = s)
  }
}
class NodeProp {
  constructor(e = {}) {
    ;(this.id = nextPropID++),
      (this.perNode = !!e.perNode),
      (this.deserialize =
        e.deserialize ||
        (() => {
          throw new Error(
            "This node type doesn't define a deserialize function"
          )
        }))
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types")
    return (
      typeof e != 'function' && (e = NodeType.match(e)),
      (s) => {
        let a = e(s)
        return a === void 0 ? null : [this, a]
      }
    )
  }
}
NodeProp.closedBy = new NodeProp({ deserialize: (o) => o.split(' ') })
NodeProp.openedBy = new NodeProp({ deserialize: (o) => o.split(' ') })
NodeProp.group = new NodeProp({ deserialize: (o) => o.split(' ') })
NodeProp.contextHash = new NodeProp({ perNode: !0 })
NodeProp.lookAhead = new NodeProp({ perNode: !0 })
NodeProp.mounted = new NodeProp({ perNode: !0 })
class MountedTree {
  constructor(e, s, a) {
    ;(this.tree = e), (this.overlay = s), (this.parser = a)
  }
  static get(e) {
    return e && e.props && e.props[NodeProp.mounted.id]
  }
}
const noProps = Object.create(null)
class NodeType {
  constructor(e, s, a, c = 0) {
    ;(this.name = e), (this.props = s), (this.id = a), (this.flags = c)
  }
  static define(e) {
    let s = e.props && e.props.length ? Object.create(null) : noProps,
      a =
        (e.top ? 1 : 0) |
        (e.skipped ? 2 : 0) |
        (e.error ? 4 : 0) |
        (e.name == null ? 8 : 0),
      c = new NodeType(e.name || '', s, e.id, a)
    if (e.props) {
      for (let h of e.props)
        if ((Array.isArray(h) || (h = h(c)), h)) {
          if (h[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type")
          s[h[0].id] = h[1]
        }
    }
    return c
  }
  prop(e) {
    return this.props[e.id]
  }
  get isTop() {
    return (this.flags & 1) > 0
  }
  get isSkipped() {
    return (this.flags & 2) > 0
  }
  get isError() {
    return (this.flags & 4) > 0
  }
  get isAnonymous() {
    return (this.flags & 8) > 0
  }
  is(e) {
    if (typeof e == 'string') {
      if (this.name == e) return !0
      let s = this.prop(NodeProp.group)
      return s ? s.indexOf(e) > -1 : !1
    }
    return this.id == e
  }
  static match(e) {
    let s = Object.create(null)
    for (let a in e) for (let c of a.split(' ')) s[c] = e[a]
    return (a) => {
      for (
        let c = a.prop(NodeProp.group), h = -1;
        h < (c ? c.length : 0);
        h++
      ) {
        let d = s[h < 0 ? a.name : c[h]]
        if (d) return d
      }
    }
  }
}
NodeType.none = new NodeType('', Object.create(null), 0, 8)
class NodeSet {
  constructor(e) {
    this.types = e
    for (let s = 0; s < e.length; s++)
      if (e[s].id != s)
        throw new RangeError(
          'Node type ids should correspond to array positions when creating a node set'
        )
  }
  extend(...e) {
    let s = []
    for (let a of this.types) {
      let c = null
      for (let h of e) {
        let d = h(a)
        d && (c || (c = Object.assign({}, a.props)), (c[d[0].id] = d[1]))
      }
      s.push(c ? new NodeType(a.name, c, a.id, a.flags) : a)
    }
    return new NodeSet(s)
  }
}
const CachedNode = new WeakMap(),
  CachedInnerNode = new WeakMap()
var IterMode
;(function (o) {
  ;(o[(o.ExcludeBuffers = 1)] = 'ExcludeBuffers'),
    (o[(o.IncludeAnonymous = 2)] = 'IncludeAnonymous'),
    (o[(o.IgnoreMounts = 4)] = 'IgnoreMounts'),
    (o[(o.IgnoreOverlays = 8)] = 'IgnoreOverlays')
})(IterMode || (IterMode = {}))
class Tree {
  constructor(e, s, a, c, h) {
    if (
      ((this.type = e),
      (this.children = s),
      (this.positions = a),
      (this.length = c),
      (this.props = null),
      h && h.length)
    ) {
      this.props = Object.create(null)
      for (let [d, g] of h) this.props[typeof d == 'number' ? d : d.id] = g
    }
  }
  toString() {
    let e = MountedTree.get(this)
    if (e && !e.overlay) return e.tree.toString()
    let s = ''
    for (let a of this.children) {
      let c = a.toString()
      c && (s && (s += ','), (s += c))
    }
    return this.type.name
      ? (/\W/.test(this.type.name) && !this.type.isError
          ? JSON.stringify(this.type.name)
          : this.type.name) + (s.length ? '(' + s + ')' : '')
      : s
  }
  cursor(e = 0) {
    return new TreeCursor(this.topNode, e)
  }
  cursorAt(e, s = 0, a = 0) {
    let c = CachedNode.get(this) || this.topNode,
      h = new TreeCursor(c)
    return h.moveTo(e, s), CachedNode.set(this, h._tree), h
  }
  get topNode() {
    return new TreeNode(this, 0, 0, null)
  }
  resolve(e, s = 0) {
    let a = resolveNode(CachedNode.get(this) || this.topNode, e, s, !1)
    return CachedNode.set(this, a), a
  }
  resolveInner(e, s = 0) {
    let a = resolveNode(CachedInnerNode.get(this) || this.topNode, e, s, !0)
    return CachedInnerNode.set(this, a), a
  }
  resolveStack(e, s = 0) {
    return stackIterator(this, e, s)
  }
  iterate(e) {
    let { enter: s, leave: a, from: c = 0, to: h = this.length } = e,
      d = e.mode || 0,
      g = (d & IterMode.IncludeAnonymous) > 0
    for (let b = this.cursor(d | IterMode.IncludeAnonymous); ; ) {
      let $ = !1
      if (
        b.from <= h &&
        b.to >= c &&
        ((!g && b.type.isAnonymous) || s(b) !== !1)
      ) {
        if (b.firstChild()) continue
        $ = !0
      }
      for (; $ && a && (g || !b.type.isAnonymous) && a(b), !b.nextSibling(); ) {
        if (!b.parent()) return
        $ = !0
      }
    }
  }
  prop(e) {
    return e.perNode
      ? this.props
        ? this.props[e.id]
        : void 0
      : this.type.prop(e)
  }
  get propValues() {
    let e = []
    if (this.props) for (let s in this.props) e.push([+s, this.props[s]])
    return e
  }
  balance(e = {}) {
    return this.children.length <= 8
      ? this
      : balanceRange(
          NodeType.none,
          this.children,
          this.positions,
          0,
          this.children.length,
          0,
          this.length,
          (s, a, c) => new Tree(this.type, s, a, c, this.propValues),
          e.makeTree || ((s, a, c) => new Tree(NodeType.none, s, a, c))
        )
  }
  static build(e) {
    return buildTree(e)
  }
}
Tree.empty = new Tree(NodeType.none, [], [], 0)
class FlatBufferCursor {
  constructor(e, s) {
    ;(this.buffer = e), (this.index = s)
  }
  get id() {
    return this.buffer[this.index - 4]
  }
  get start() {
    return this.buffer[this.index - 3]
  }
  get end() {
    return this.buffer[this.index - 2]
  }
  get size() {
    return this.buffer[this.index - 1]
  }
  get pos() {
    return this.index
  }
  next() {
    this.index -= 4
  }
  fork() {
    return new FlatBufferCursor(this.buffer, this.index)
  }
}
class TreeBuffer {
  constructor(e, s, a) {
    ;(this.buffer = e), (this.length = s), (this.set = a)
  }
  get type() {
    return NodeType.none
  }
  toString() {
    let e = []
    for (let s = 0; s < this.buffer.length; )
      e.push(this.childString(s)), (s = this.buffer[s + 3])
    return e.join(',')
  }
  childString(e) {
    let s = this.buffer[e],
      a = this.buffer[e + 3],
      c = this.set.types[s],
      h = c.name
    if (
      (/\W/.test(h) && !c.isError && (h = JSON.stringify(h)), (e += 4), a == e)
    )
      return h
    let d = []
    for (; e < a; ) d.push(this.childString(e)), (e = this.buffer[e + 3])
    return h + '(' + d.join(',') + ')'
  }
  findChild(e, s, a, c, h) {
    let { buffer: d } = this,
      g = -1
    for (
      let b = e;
      b != s && !(checkSide(h, c, d[b + 1], d[b + 2]) && ((g = b), a > 0));
      b = d[b + 3]
    );
    return g
  }
  slice(e, s, a) {
    let c = this.buffer,
      h = new Uint16Array(s - e),
      d = 0
    for (let g = e, b = 0; g < s; ) {
      ;(h[b++] = c[g++]), (h[b++] = c[g++] - a)
      let $ = (h[b++] = c[g++] - a)
      ;(h[b++] = c[g++] - e), (d = Math.max(d, $))
    }
    return new TreeBuffer(h, d, this.set)
  }
}
function checkSide(o, e, s, a) {
  switch (o) {
    case -2:
      return s < e
    case -1:
      return a >= e && s < e
    case 0:
      return s < e && a > e
    case 1:
      return s <= e && a > e
    case 2:
      return a > e
    case 4:
      return !0
  }
}
function resolveNode(o, e, s, a) {
  for (
    var c;
    o.from == o.to ||
    (s < 1 ? o.from >= e : o.from > e) ||
    (s > -1 ? o.to <= e : o.to < e);

  ) {
    let d = !a && o instanceof TreeNode && o.index < 0 ? null : o.parent
    if (!d) return o
    o = d
  }
  let h = a ? 0 : IterMode.IgnoreOverlays
  if (a)
    for (let d = o, g = d.parent; g; d = g, g = d.parent)
      d instanceof TreeNode &&
        d.index < 0 &&
        ((c = g.enter(e, s, h)) === null || c === void 0 ? void 0 : c.from) !=
          d.from &&
        (o = g)
  for (;;) {
    let d = o.enter(e, s, h)
    if (!d) return o
    o = d
  }
}
class BaseNode {
  cursor(e = 0) {
    return new TreeCursor(this, e)
  }
  getChild(e, s = null, a = null) {
    let c = getChildren(this, e, s, a)
    return c.length ? c[0] : null
  }
  getChildren(e, s = null, a = null) {
    return getChildren(this, e, s, a)
  }
  resolve(e, s = 0) {
    return resolveNode(this, e, s, !1)
  }
  resolveInner(e, s = 0) {
    return resolveNode(this, e, s, !0)
  }
  matchContext(e) {
    return matchNodeContext(this, e)
  }
  enterUnfinishedNodesBefore(e) {
    let s = this.childBefore(e),
      a = this
    for (; s; ) {
      let c = s.lastChild
      if (!c || c.to != s.to) break
      c.type.isError && c.from == c.to
        ? ((a = s), (s = c.prevSibling))
        : (s = c)
    }
    return a
  }
  get node() {
    return this
  }
  get next() {
    return this.parent
  }
}
class TreeNode extends BaseNode {
  constructor(e, s, a, c) {
    super(),
      (this._tree = e),
      (this.from = s),
      (this.index = a),
      (this._parent = c)
  }
  get type() {
    return this._tree.type
  }
  get name() {
    return this._tree.type.name
  }
  get to() {
    return this.from + this._tree.length
  }
  nextChild(e, s, a, c, h = 0) {
    for (let d = this; ; ) {
      for (
        let { children: g, positions: b } = d._tree, $ = s > 0 ? g.length : -1;
        e != $;
        e += s
      ) {
        let _ = g[e],
          j = b[e] + d.from
        if (checkSide(c, a, j, j + _.length)) {
          if (_ instanceof TreeBuffer) {
            if (h & IterMode.ExcludeBuffers) continue
            let _e = _.findChild(0, _.buffer.length, s, a - j, c)
            if (_e > -1)
              return new BufferNode(new BufferContext(d, _, e, j), null, _e)
          } else if (
            h & IterMode.IncludeAnonymous ||
            !_.type.isAnonymous ||
            hasChild(_)
          ) {
            let _e
            if (
              !(h & IterMode.IgnoreMounts) &&
              (_e = MountedTree.get(_)) &&
              !_e.overlay
            )
              return new TreeNode(_e.tree, j, e, d)
            let et = new TreeNode(_, j, e, d)
            return h & IterMode.IncludeAnonymous || !et.type.isAnonymous
              ? et
              : et.nextChild(s < 0 ? _.children.length - 1 : 0, s, a, c)
          }
        }
      }
      if (
        h & IterMode.IncludeAnonymous ||
        !d.type.isAnonymous ||
        (d.index >= 0
          ? (e = d.index + s)
          : (e = s < 0 ? -1 : d._parent._tree.children.length),
        (d = d._parent),
        !d)
      )
        return null
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4)
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2)
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2)
  }
  enter(e, s, a = 0) {
    let c
    if (
      !(a & IterMode.IgnoreOverlays) &&
      (c = MountedTree.get(this._tree)) &&
      c.overlay
    ) {
      let h = e - this.from
      for (let { from: d, to: g } of c.overlay)
        if ((s > 0 ? d <= h : d < h) && (s < 0 ? g >= h : g > h))
          return new TreeNode(c.tree, c.overlay[0].from + this.from, -1, this)
    }
    return this.nextChild(0, 1, e, s, a)
  }
  nextSignificantParent() {
    let e = this
    for (; e.type.isAnonymous && e._parent; ) e = e._parent
    return e
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null
  }
  get nextSibling() {
    return this._parent && this.index >= 0
      ? this._parent.nextChild(this.index + 1, 1, 0, 4)
      : null
  }
  get prevSibling() {
    return this._parent && this.index >= 0
      ? this._parent.nextChild(this.index - 1, -1, 0, 4)
      : null
  }
  get tree() {
    return this._tree
  }
  toTree() {
    return this._tree
  }
  toString() {
    return this._tree.toString()
  }
}
function getChildren(o, e, s, a) {
  let c = o.cursor(),
    h = []
  if (!c.firstChild()) return h
  if (s != null) {
    for (; !c.type.is(s); ) if (!c.nextSibling()) return h
  }
  for (;;) {
    if (a != null && c.type.is(a)) return h
    if ((c.type.is(e) && h.push(c.node), !c.nextSibling()))
      return a == null ? h : []
  }
}
function matchNodeContext(o, e, s = e.length - 1) {
  for (let a = o.parent; s >= 0; a = a.parent) {
    if (!a) return !1
    if (!a.type.isAnonymous) {
      if (e[s] && e[s] != a.name) return !1
      s--
    }
  }
  return !0
}
class BufferContext {
  constructor(e, s, a, c) {
    ;(this.parent = e), (this.buffer = s), (this.index = a), (this.start = c)
  }
}
class BufferNode extends BaseNode {
  get name() {
    return this.type.name
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1]
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2]
  }
  constructor(e, s, a) {
    super(),
      (this.context = e),
      (this._parent = s),
      (this.index = a),
      (this.type = e.buffer.set.types[e.buffer.buffer[a]])
  }
  child(e, s, a) {
    let { buffer: c } = this.context,
      h = c.findChild(
        this.index + 4,
        c.buffer[this.index + 3],
        e,
        s - this.context.start,
        a
      )
    return h < 0 ? null : new BufferNode(this.context, this, h)
  }
  get firstChild() {
    return this.child(1, 0, 4)
  }
  get lastChild() {
    return this.child(-1, 0, 4)
  }
  childAfter(e) {
    return this.child(1, e, 2)
  }
  childBefore(e) {
    return this.child(-1, e, -2)
  }
  enter(e, s, a = 0) {
    if (a & IterMode.ExcludeBuffers) return null
    let { buffer: c } = this.context,
      h = c.findChild(
        this.index + 4,
        c.buffer[this.index + 3],
        s > 0 ? 1 : -1,
        e - this.context.start,
        s
      )
    return h < 0 ? null : new BufferNode(this.context, this, h)
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent()
  }
  externalSibling(e) {
    return this._parent
      ? null
      : this.context.parent.nextChild(this.context.index + e, e, 0, 4)
  }
  get nextSibling() {
    let { buffer: e } = this.context,
      s = e.buffer[this.index + 3]
    return s <
      (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
      ? new BufferNode(this.context, this._parent, s)
      : this.externalSibling(1)
  }
  get prevSibling() {
    let { buffer: e } = this.context,
      s = this._parent ? this._parent.index + 4 : 0
    return this.index == s
      ? this.externalSibling(-1)
      : new BufferNode(
          this.context,
          this._parent,
          e.findChild(s, this.index, -1, 0, 4)
        )
  }
  get tree() {
    return null
  }
  toTree() {
    let e = [],
      s = [],
      { buffer: a } = this.context,
      c = this.index + 4,
      h = a.buffer[this.index + 3]
    if (h > c) {
      let d = a.buffer[this.index + 1]
      e.push(a.slice(c, h, d)), s.push(0)
    }
    return new Tree(this.type, e, s, this.to - this.from)
  }
  toString() {
    return this.context.buffer.childString(this.index)
  }
}
function iterStack(o) {
  if (!o.length) return null
  if (o.length == 1) return o[0]
  let e = 0,
    s = o[0]
  for (let h = 1; h < o.length; h++) {
    let d = o[h]
    ;(d.from > s.from || d.to < s.to) && ((s = d), (e = h))
  }
  let a = s instanceof TreeNode && s.index < 0 ? null : s.parent,
    c = o.slice()
  return a ? (c[e] = a) : c.splice(e, 1), new StackIterator(c, s)
}
class StackIterator {
  constructor(e, s) {
    ;(this.heads = e), (this.node = s)
  }
  get next() {
    return iterStack(this.heads)
  }
}
function stackIterator(o, e, s) {
  let a = o.resolveInner(e, s),
    c = null
  for (let h = a instanceof TreeNode ? a : a.context.parent; h; h = h.parent)
    if (h.index < 0) {
      let d = h.parent
      ;(c || (c = [a])).push(d.resolve(e, s)), (h = d)
    } else {
      let d = MountedTree.get(h.tree)
      if (
        d &&
        d.overlay &&
        d.overlay[0].from <= e &&
        d.overlay[d.overlay.length - 1].to >= e
      ) {
        let g = new TreeNode(d.tree, d.overlay[0].from + h.from, 0, null)
        ;(c || (c = [a])).push(resolveNode(g, e, s, !1))
      }
    }
  return c ? iterStack(c) : a
}
class TreeCursor {
  get name() {
    return this.type.name
  }
  constructor(e, s = 0) {
    if (
      ((this.mode = s),
      (this.buffer = null),
      (this.stack = []),
      (this.index = 0),
      (this.bufferNode = null),
      e instanceof TreeNode)
    )
      this.yieldNode(e)
    else {
      ;(this._tree = e.context.parent), (this.buffer = e.context)
      for (let a = e._parent; a; a = a._parent) this.stack.unshift(a.index)
      ;(this.bufferNode = e), this.yieldBuf(e.index)
    }
  }
  yieldNode(e) {
    return e
      ? ((this._tree = e),
        (this.type = e.type),
        (this.from = e.from),
        (this.to = e.to),
        !0)
      : !1
  }
  yieldBuf(e, s) {
    this.index = e
    let { start: a, buffer: c } = this.buffer
    return (
      (this.type = s || c.set.types[c.buffer[e]]),
      (this.from = a + c.buffer[e + 1]),
      (this.to = a + c.buffer[e + 2]),
      !0
    )
  }
  yield(e) {
    return e
      ? e instanceof TreeNode
        ? ((this.buffer = null), this.yieldNode(e))
        : ((this.buffer = e.context), this.yieldBuf(e.index, e.type))
      : !1
  }
  toString() {
    return this.buffer
      ? this.buffer.buffer.childString(this.index)
      : this._tree.toString()
  }
  enterChild(e, s, a) {
    if (!this.buffer)
      return this.yield(
        this._tree.nextChild(
          e < 0 ? this._tree._tree.children.length - 1 : 0,
          e,
          s,
          a,
          this.mode
        )
      )
    let { buffer: c } = this.buffer,
      h = c.findChild(
        this.index + 4,
        c.buffer[this.index + 3],
        e,
        s - this.buffer.start,
        a
      )
    return h < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(h))
  }
  firstChild() {
    return this.enterChild(1, 0, 4)
  }
  lastChild() {
    return this.enterChild(-1, 0, 4)
  }
  childAfter(e) {
    return this.enterChild(1, e, 2)
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2)
  }
  enter(e, s, a = this.mode) {
    return this.buffer
      ? a & IterMode.ExcludeBuffers
        ? !1
        : this.enterChild(1, e, s)
      : this.yield(this._tree.enter(e, s, a))
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(
        this.mode & IterMode.IncludeAnonymous
          ? this._tree._parent
          : this._tree.parent
      )
    if (this.stack.length) return this.yieldBuf(this.stack.pop())
    let e =
      this.mode & IterMode.IncludeAnonymous
        ? this.buffer.parent
        : this.buffer.parent.nextSignificantParent()
    return (this.buffer = null), this.yieldNode(e)
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent
        ? this.yield(
            this._tree.index < 0
              ? null
              : this._tree._parent.nextChild(
                  this._tree.index + e,
                  e,
                  0,
                  4,
                  this.mode
                )
          )
        : !1
    let { buffer: s } = this.buffer,
      a = this.stack.length - 1
    if (e < 0) {
      let c = a < 0 ? 0 : this.stack[a] + 4
      if (this.index != c)
        return this.yieldBuf(s.findChild(c, this.index, -1, 0, 4))
    } else {
      let c = s.buffer[this.index + 3]
      if (c < (a < 0 ? s.buffer.length : s.buffer[this.stack[a] + 3]))
        return this.yieldBuf(c)
    }
    return a < 0
      ? this.yield(
          this.buffer.parent.nextChild(
            this.buffer.index + e,
            e,
            0,
            4,
            this.mode
          )
        )
      : !1
  }
  nextSibling() {
    return this.sibling(1)
  }
  prevSibling() {
    return this.sibling(-1)
  }
  atLastNode(e) {
    let s,
      a,
      { buffer: c } = this
    if (c) {
      if (e > 0) {
        if (this.index < c.buffer.buffer.length) return !1
      } else
        for (let h = 0; h < this.index; h++)
          if (c.buffer.buffer[h + 3] < this.index) return !1
      ;({ index: s, parent: a } = c)
    } else ({ index: s, _parent: a } = this._tree)
    for (; a; { index: s, _parent: a } = a)
      if (s > -1)
        for (
          let h = s + e, d = e < 0 ? -1 : a._tree.children.length;
          h != d;
          h += e
        ) {
          let g = a._tree.children[h]
          if (
            this.mode & IterMode.IncludeAnonymous ||
            g instanceof TreeBuffer ||
            !g.type.isAnonymous ||
            hasChild(g)
          )
            return !1
        }
    return !0
  }
  move(e, s) {
    if (s && this.enterChild(e, 0, 4)) return !0
    for (;;) {
      if (this.sibling(e)) return !0
      if (this.atLastNode(e) || !this.parent()) return !1
    }
  }
  next(e = !0) {
    return this.move(1, e)
  }
  prev(e = !0) {
    return this.move(-1, e)
  }
  moveTo(e, s = 0) {
    for (
      ;
      (this.from == this.to ||
        (s < 1 ? this.from >= e : this.from > e) ||
        (s > -1 ? this.to <= e : this.to < e)) &&
      this.parent();

    );
    for (; this.enterChild(1, e, s); );
    return this
  }
  get node() {
    if (!this.buffer) return this._tree
    let e = this.bufferNode,
      s = null,
      a = 0
    if (e && e.context == this.buffer)
      e: for (let c = this.index, h = this.stack.length; h >= 0; ) {
        for (let d = e; d; d = d._parent)
          if (d.index == c) {
            if (c == this.index) return d
            ;(s = d), (a = h + 1)
            break e
          }
        c = this.stack[--h]
      }
    for (let c = a; c < this.stack.length; c++)
      s = new BufferNode(this.buffer, s, this.stack[c])
    return (this.bufferNode = new BufferNode(this.buffer, s, this.index))
  }
  get tree() {
    return this.buffer ? null : this._tree._tree
  }
  iterate(e, s) {
    for (let a = 0; ; ) {
      let c = !1
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          a++
          continue
        }
        this.type.isAnonymous || (c = !0)
      }
      for (
        ;
        c && s && s(this), (c = this.type.isAnonymous), !this.nextSibling();

      ) {
        if (!a) return
        this.parent(), a--, (c = !0)
      }
    }
  }
  matchContext(e) {
    if (!this.buffer) return matchNodeContext(this.node, e)
    let { buffer: s } = this.buffer,
      { types: a } = s.set
    for (let c = e.length - 1, h = this.stack.length - 1; c >= 0; h--) {
      if (h < 0) return matchNodeContext(this.node, e, c)
      let d = a[s.buffer[this.stack[h]]]
      if (!d.isAnonymous) {
        if (e[c] && e[c] != d.name) return !1
        c--
      }
    }
    return !0
  }
}
function hasChild(o) {
  return o.children.some(
    (e) => e instanceof TreeBuffer || !e.type.isAnonymous || hasChild(e)
  )
}
function buildTree(o) {
  var e
  let {
      buffer: s,
      nodeSet: a,
      maxBufferLength: c = DefaultBufferLength,
      reused: h = [],
      minRepeatType: d = a.types.length
    } = o,
    g = Array.isArray(s) ? new FlatBufferCursor(s, s.length) : s,
    b = a.types,
    $ = 0,
    _ = 0
  function j(lt, at, ct, ut, ht) {
    let { id: pt, start: dt, end: Ot, size: St } = g,
      vt = _
    for (; St < 0; )
      if ((g.next(), St == -1)) {
        let ft = h[pt]
        ct.push(ft), ut.push(dt - lt)
        return
      } else if (St == -3) {
        $ = pt
        return
      } else if (St == -4) {
        _ = pt
        return
      } else throw new RangeError(`Unrecognized record size: ${St}`)
    let bt = b[pt],
      Ct,
      wt,
      kt = dt - lt
    if (Ot - dt <= c && (wt = rt(g.pos - at, ht))) {
      let ft = new Uint16Array(wt.size - wt.skip),
        gt = g.pos - wt.size,
        mt = ft.length
      for (; g.pos > gt; ) mt = st(wt.start, ft, mt)
      ;(Ct = new TreeBuffer(ft, Ot - wt.start, a)), (kt = wt.start - lt)
    } else {
      let ft = g.pos - St
      g.next()
      let gt = [],
        mt = [],
        yt = pt >= d ? pt : -1,
        xt = 0,
        Qt = Ot
      for (; g.pos > ft; )
        yt >= 0 && g.id == yt && g.size >= 0
          ? (g.end <= Qt - c &&
              (et(gt, mt, dt, xt, g.end, Qt, yt, vt),
              (xt = gt.length),
              (Qt = g.end)),
            g.next())
          : j(dt, ft, gt, mt, yt)
      if (
        (yt >= 0 &&
          xt > 0 &&
          xt < gt.length &&
          et(gt, mt, dt, xt, dt, Qt, yt, vt),
        gt.reverse(),
        mt.reverse(),
        yt > -1 && xt > 0)
      ) {
        let $t = _e(bt)
        Ct = balanceRange(bt, gt, mt, 0, gt.length, 0, Ot - dt, $t, $t)
      } else Ct = tt(bt, gt, mt, Ot - dt, vt - Ot)
    }
    ct.push(Ct), ut.push(kt)
  }
  function _e(lt) {
    return (at, ct, ut) => {
      let ht = 0,
        pt = at.length - 1,
        dt,
        Ot
      if (pt >= 0 && (dt = at[pt]) instanceof Tree) {
        if (!pt && dt.type == lt && dt.length == ut) return dt
        ;(Ot = dt.prop(NodeProp.lookAhead)) && (ht = ct[pt] + dt.length + Ot)
      }
      return tt(lt, at, ct, ut, ht)
    }
  }
  function et(lt, at, ct, ut, ht, pt, dt, Ot) {
    let St = [],
      vt = []
    for (; lt.length > ut; ) St.push(lt.pop()), vt.push(at.pop() + ct - ht)
    lt.push(tt(a.types[dt], St, vt, pt - ht, Ot - pt)), at.push(ht - ct)
  }
  function tt(lt, at, ct, ut, ht = 0, pt) {
    if ($) {
      let dt = [NodeProp.contextHash, $]
      pt = pt ? [dt].concat(pt) : [dt]
    }
    if (ht > 25) {
      let dt = [NodeProp.lookAhead, ht]
      pt = pt ? [dt].concat(pt) : [dt]
    }
    return new Tree(lt, at, ct, ut, pt)
  }
  function rt(lt, at) {
    let ct = g.fork(),
      ut = 0,
      ht = 0,
      pt = 0,
      dt = ct.end - c,
      Ot = { size: 0, start: 0, skip: 0 }
    e: for (let St = ct.pos - lt; ct.pos > St; ) {
      let vt = ct.size
      if (ct.id == at && vt >= 0) {
        ;(Ot.size = ut),
          (Ot.start = ht),
          (Ot.skip = pt),
          (pt += 4),
          (ut += 4),
          ct.next()
        continue
      }
      let bt = ct.pos - vt
      if (vt < 0 || bt < St || ct.start < dt) break
      let Ct = ct.id >= d ? 4 : 0,
        wt = ct.start
      for (ct.next(); ct.pos > bt; ) {
        if (ct.size < 0)
          if (ct.size == -3) Ct += 4
          else break e
        else ct.id >= d && (Ct += 4)
        ct.next()
      }
      ;(ht = wt), (ut += vt), (pt += Ct)
    }
    return (
      (at < 0 || ut == lt) && ((Ot.size = ut), (Ot.start = ht), (Ot.skip = pt)),
      Ot.size > 4 ? Ot : void 0
    )
  }
  function st(lt, at, ct) {
    let { id: ut, start: ht, end: pt, size: dt } = g
    if ((g.next(), dt >= 0 && ut < d)) {
      let Ot = ct
      if (dt > 4) {
        let St = g.pos - (dt - 4)
        for (; g.pos > St; ) ct = st(lt, at, ct)
      }
      ;(at[--ct] = Ot),
        (at[--ct] = pt - lt),
        (at[--ct] = ht - lt),
        (at[--ct] = ut)
    } else dt == -3 ? ($ = ut) : dt == -4 && (_ = ut)
    return ct
  }
  let nt = [],
    it = []
  for (; g.pos > 0; ) j(o.start || 0, o.bufferStart || 0, nt, it, -1)
  let ot =
    (e = o.length) !== null && e !== void 0
      ? e
      : nt.length
      ? it[0] + nt[0].length
      : 0
  return new Tree(b[o.topID], nt.reverse(), it.reverse(), ot)
}
const nodeSizeCache = new WeakMap()
function nodeSize(o, e) {
  if (!o.isAnonymous || e instanceof TreeBuffer || e.type != o) return 1
  let s = nodeSizeCache.get(e)
  if (s == null) {
    s = 1
    for (let a of e.children) {
      if (a.type != o || !(a instanceof Tree)) {
        s = 1
        break
      }
      s += nodeSize(o, a)
    }
    nodeSizeCache.set(e, s)
  }
  return s
}
function balanceRange(o, e, s, a, c, h, d, g, b) {
  let $ = 0
  for (let tt = a; tt < c; tt++) $ += nodeSize(o, e[tt])
  let _ = Math.ceil(($ * 1.5) / 8),
    j = [],
    _e = []
  function et(tt, rt, st, nt, it) {
    for (let ot = st; ot < nt; ) {
      let lt = ot,
        at = rt[ot],
        ct = nodeSize(o, tt[ot])
      for (ot++; ot < nt; ot++) {
        let ut = nodeSize(o, tt[ot])
        if (ct + ut >= _) break
        ct += ut
      }
      if (ot == lt + 1) {
        if (ct > _) {
          let ut = tt[lt]
          et(ut.children, ut.positions, 0, ut.children.length, rt[lt] + it)
          continue
        }
        j.push(tt[lt])
      } else {
        let ut = rt[ot - 1] + tt[ot - 1].length - at
        j.push(balanceRange(o, tt, rt, lt, ot, at, ut, null, b))
      }
      _e.push(at + it - h)
    }
  }
  return et(e, s, a, c, 0), (g || b)(j, _e, d)
}
class NodeWeakMap {
  constructor() {
    this.map = new WeakMap()
  }
  setBuffer(e, s, a) {
    let c = this.map.get(e)
    c || this.map.set(e, (c = new Map())), c.set(s, a)
  }
  getBuffer(e, s) {
    let a = this.map.get(e)
    return a && a.get(s)
  }
  set(e, s) {
    e instanceof BufferNode
      ? this.setBuffer(e.context.buffer, e.index, s)
      : e instanceof TreeNode && this.map.set(e.tree, s)
  }
  get(e) {
    return e instanceof BufferNode
      ? this.getBuffer(e.context.buffer, e.index)
      : e instanceof TreeNode
      ? this.map.get(e.tree)
      : void 0
  }
  cursorSet(e, s) {
    e.buffer
      ? this.setBuffer(e.buffer.buffer, e.index, s)
      : this.map.set(e.tree, s)
  }
  cursorGet(e) {
    return e.buffer
      ? this.getBuffer(e.buffer.buffer, e.index)
      : this.map.get(e.tree)
  }
}
class TreeFragment {
  constructor(e, s, a, c, h = !1, d = !1) {
    ;(this.from = e),
      (this.to = s),
      (this.tree = a),
      (this.offset = c),
      (this.open = (h ? 1 : 0) | (d ? 2 : 0))
  }
  get openStart() {
    return (this.open & 1) > 0
  }
  get openEnd() {
    return (this.open & 2) > 0
  }
  static addTree(e, s = [], a = !1) {
    let c = [new TreeFragment(0, e.length, e, 0, !1, a)]
    for (let h of s) h.to > e.length && c.push(h)
    return c
  }
  static applyChanges(e, s, a = 128) {
    if (!s.length) return e
    let c = [],
      h = 1,
      d = e.length ? e[0] : null
    for (let g = 0, b = 0, $ = 0; ; g++) {
      let _ = g < s.length ? s[g] : null,
        j = _ ? _.fromA : 1e9
      if (j - b >= a)
        for (; d && d.from < j; ) {
          let _e = d
          if (b >= _e.from || j <= _e.to || $) {
            let et = Math.max(_e.from, b) - $,
              tt = Math.min(_e.to, j) - $
            _e =
              et >= tt
                ? null
                : new TreeFragment(et, tt, _e.tree, _e.offset + $, g > 0, !!_)
          }
          if ((_e && c.push(_e), d.to > j)) break
          d = h < e.length ? e[h++] : null
        }
      if (!_) break
      ;(b = _.toA), ($ = _.toA - _.toB)
    }
    return c
  }
}
class Parser {
  startParse(e, s, a) {
    return (
      typeof e == 'string' && (e = new StringInput(e)),
      (a = a
        ? a.length
          ? a.map((c) => new Range(c.from, c.to))
          : [new Range(0, 0)]
        : [new Range(0, e.length)]),
      this.createParse(e, s || [], a)
    )
  }
  parse(e, s, a) {
    let c = this.startParse(e, s, a)
    for (;;) {
      let h = c.advance()
      if (h) return h
    }
  }
}
class StringInput {
  constructor(e) {
    this.string = e
  }
  get length() {
    return this.string.length
  }
  chunk(e) {
    return this.string.slice(e)
  }
  get lineChunks() {
    return !1
  }
  read(e, s) {
    return this.string.slice(e, s)
  }
}
new NodeProp({ perNode: !0 })
let nextTagID = 0
class Tag {
  constructor(e, s, a) {
    ;(this.set = e),
      (this.base = s),
      (this.modified = a),
      (this.id = nextTagID++)
  }
  static define(e) {
    if (e != null && e.base)
      throw new Error('Can not derive from a modified tag')
    let s = new Tag([], null, [])
    if ((s.set.push(s), e)) for (let a of e.set) s.set.push(a)
    return s
  }
  static defineModifier() {
    let e = new Modifier()
    return (s) =>
      s.modified.indexOf(e) > -1
        ? s
        : Modifier.get(
            s.base || s,
            s.modified.concat(e).sort((a, c) => a.id - c.id)
          )
  }
}
let nextModifierID = 0
class Modifier {
  constructor() {
    ;(this.instances = []), (this.id = nextModifierID++)
  }
  static get(e, s) {
    if (!s.length) return e
    let a = s[0].instances.find((g) => g.base == e && sameArray(s, g.modified))
    if (a) return a
    let c = [],
      h = new Tag(c, e, s)
    for (let g of s) g.instances.push(h)
    let d = powerSet(s)
    for (let g of e.set)
      if (!g.modified.length) for (let b of d) c.push(Modifier.get(g, b))
    return h
  }
}
function sameArray(o, e) {
  return o.length == e.length && o.every((s, a) => s == e[a])
}
function powerSet(o) {
  let e = [[]]
  for (let s = 0; s < o.length; s++)
    for (let a = 0, c = e.length; a < c; a++) e.push(e[a].concat(o[s]))
  return e.sort((s, a) => a.length - s.length)
}
function styleTags(o) {
  let e = Object.create(null)
  for (let s in o) {
    let a = o[s]
    Array.isArray(a) || (a = [a])
    for (let c of s.split(' '))
      if (c) {
        let h = [],
          d = 2,
          g = c
        for (let j = 0; ; ) {
          if (g == '...' && j > 0 && j + 3 == c.length) {
            d = 1
            break
          }
          let _e = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(g)
          if (!_e) throw new RangeError('Invalid path: ' + c)
          if (
            (h.push(
              _e[0] == '*' ? '' : _e[0][0] == '"' ? JSON.parse(_e[0]) : _e[0]
            ),
            (j += _e[0].length),
            j == c.length)
          )
            break
          let et = c[j++]
          if (j == c.length && et == '!') {
            d = 0
            break
          }
          if (et != '/') throw new RangeError('Invalid path: ' + c)
          g = c.slice(j)
        }
        let b = h.length - 1,
          $ = h[b]
        if (!$) throw new RangeError('Invalid path: ' + c)
        let _ = new Rule(a, d, b > 0 ? h.slice(0, b) : null)
        e[$] = _.sort(e[$])
      }
  }
  return ruleNodeProp.add(e)
}
const ruleNodeProp = new NodeProp()
class Rule {
  constructor(e, s, a, c) {
    ;(this.tags = e), (this.mode = s), (this.context = a), (this.next = c)
  }
  get opaque() {
    return this.mode == 0
  }
  get inherit() {
    return this.mode == 1
  }
  sort(e) {
    return !e || e.depth < this.depth
      ? ((this.next = e), this)
      : ((e.next = this.sort(e.next)), e)
  }
  get depth() {
    return this.context ? this.context.length : 0
  }
}
Rule.empty = new Rule([], 2, null)
function tagHighlighter(o, e) {
  let s = Object.create(null)
  for (let h of o)
    if (!Array.isArray(h.tag)) s[h.tag.id] = h.class
    else for (let d of h.tag) s[d.id] = h.class
  let { scope: a, all: c = null } = e || {}
  return {
    style: (h) => {
      let d = c
      for (let g of h)
        for (let b of g.set) {
          let $ = s[b.id]
          if ($) {
            d = d ? d + ' ' + $ : $
            break
          }
        }
      return d
    },
    scope: a
  }
}
function highlightTags(o, e) {
  let s = null
  for (let a of o) {
    let c = a.style(e)
    c && (s = s ? s + ' ' + c : c)
  }
  return s
}
function highlightTree(o, e, s, a = 0, c = o.length) {
  let h = new HighlightBuilder(a, Array.isArray(e) ? e : [e], s)
  h.highlightRange(o.cursor(), a, c, '', h.highlighters), h.flush(c)
}
class HighlightBuilder {
  constructor(e, s, a) {
    ;(this.at = e), (this.highlighters = s), (this.span = a), (this.class = '')
  }
  startSpan(e, s) {
    s != this.class &&
      (this.flush(e), e > this.at && (this.at = e), (this.class = s))
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class)
  }
  highlightRange(e, s, a, c, h) {
    let { type: d, from: g, to: b } = e
    if (g >= a || b <= s) return
    d.isTop && (h = this.highlighters.filter((et) => !et.scope || et.scope(d)))
    let $ = c,
      _ = getStyleTags(e) || Rule.empty,
      j = highlightTags(h, _.tags)
    if (
      (j &&
        ($ && ($ += ' '), ($ += j), _.mode == 1 && (c += (c ? ' ' : '') + j)),
      this.startSpan(Math.max(s, g), $),
      _.opaque)
    )
      return
    let _e = e.tree && e.tree.prop(NodeProp.mounted)
    if (_e && _e.overlay) {
      let et = e.node.enter(_e.overlay[0].from + g, 1),
        tt = this.highlighters.filter(
          (st) => !st.scope || st.scope(_e.tree.type)
        ),
        rt = e.firstChild()
      for (let st = 0, nt = g; ; st++) {
        let it = st < _e.overlay.length ? _e.overlay[st] : null,
          ot = it ? it.from + g : b,
          lt = Math.max(s, nt),
          at = Math.min(a, ot)
        if (lt < at && rt)
          for (
            ;
            e.from < at &&
            (this.highlightRange(e, lt, at, c, h),
            this.startSpan(Math.min(at, e.to), $),
            !(e.to >= ot || !e.nextSibling()));

          );
        if (!it || ot > a) break
        ;(nt = it.to + g),
          nt > s &&
            (this.highlightRange(
              et.cursor(),
              Math.max(s, it.from + g),
              Math.min(a, nt),
              '',
              tt
            ),
            this.startSpan(Math.min(a, nt), $))
      }
      rt && e.parent()
    } else if (e.firstChild()) {
      _e && (c = '')
      do
        if (!(e.to <= s)) {
          if (e.from >= a) break
          this.highlightRange(e, s, a, c, h),
            this.startSpan(Math.min(a, e.to), $)
        }
      while (e.nextSibling())
      e.parent()
    }
  }
}
function getStyleTags(o) {
  let e = o.type.prop(ruleNodeProp)
  for (; e && e.context && !o.matchContext(e.context); ) e = e.next
  return e || null
}
const t = Tag.define,
  comment = t(),
  name = t(),
  typeName = t(name),
  propertyName = t(name),
  literal = t(),
  string = t(literal),
  number = t(literal),
  content$1 = t(),
  heading = t(content$1),
  keyword = t(),
  operator = t(),
  punctuation = t(),
  bracket = t(punctuation),
  meta = t(),
  tags = {
    comment,
    lineComment: t(comment),
    blockComment: t(comment),
    docComment: t(comment),
    name,
    variableName: t(name),
    typeName,
    tagName: t(typeName),
    propertyName,
    attributeName: t(propertyName),
    className: t(name),
    labelName: t(name),
    namespace: t(name),
    macroName: t(name),
    literal,
    string,
    docString: t(string),
    character: t(string),
    attributeValue: t(string),
    number,
    integer: t(number),
    float: t(number),
    bool: t(literal),
    regexp: t(literal),
    escape: t(literal),
    color: t(literal),
    url: t(literal),
    keyword,
    self: t(keyword),
    null: t(keyword),
    atom: t(keyword),
    unit: t(keyword),
    modifier: t(keyword),
    operatorKeyword: t(keyword),
    controlKeyword: t(keyword),
    definitionKeyword: t(keyword),
    moduleKeyword: t(keyword),
    operator,
    derefOperator: t(operator),
    arithmeticOperator: t(operator),
    logicOperator: t(operator),
    bitwiseOperator: t(operator),
    compareOperator: t(operator),
    updateOperator: t(operator),
    definitionOperator: t(operator),
    typeOperator: t(operator),
    controlOperator: t(operator),
    punctuation,
    separator: t(punctuation),
    bracket,
    angleBracket: t(bracket),
    squareBracket: t(bracket),
    paren: t(bracket),
    brace: t(bracket),
    content: content$1,
    heading,
    heading1: t(heading),
    heading2: t(heading),
    heading3: t(heading),
    heading4: t(heading),
    heading5: t(heading),
    heading6: t(heading),
    contentSeparator: t(content$1),
    list: t(content$1),
    quote: t(content$1),
    emphasis: t(content$1),
    strong: t(content$1),
    link: t(content$1),
    monospace: t(content$1),
    strikethrough: t(content$1),
    inserted: t(),
    deleted: t(),
    changed: t(),
    invalid: t(),
    meta,
    documentMeta: t(meta),
    annotation: t(meta),
    processingInstruction: t(meta),
    definition: Tag.defineModifier(),
    constant: Tag.defineModifier(),
    function: Tag.defineModifier(),
    standard: Tag.defineModifier(),
    local: Tag.defineModifier(),
    special: Tag.defineModifier()
  }
tagHighlighter([
  { tag: tags.link, class: 'tok-link' },
  { tag: tags.heading, class: 'tok-heading' },
  { tag: tags.emphasis, class: 'tok-emphasis' },
  { tag: tags.strong, class: 'tok-strong' },
  { tag: tags.keyword, class: 'tok-keyword' },
  { tag: tags.atom, class: 'tok-atom' },
  { tag: tags.bool, class: 'tok-bool' },
  { tag: tags.url, class: 'tok-url' },
  { tag: tags.labelName, class: 'tok-labelName' },
  { tag: tags.inserted, class: 'tok-inserted' },
  { tag: tags.deleted, class: 'tok-deleted' },
  { tag: tags.literal, class: 'tok-literal' },
  { tag: tags.string, class: 'tok-string' },
  { tag: tags.number, class: 'tok-number' },
  {
    tag: [tags.regexp, tags.escape, tags.special(tags.string)],
    class: 'tok-string2'
  },
  { tag: tags.variableName, class: 'tok-variableName' },
  { tag: tags.local(tags.variableName), class: 'tok-variableName tok-local' },
  {
    tag: tags.definition(tags.variableName),
    class: 'tok-variableName tok-definition'
  },
  { tag: tags.special(tags.variableName), class: 'tok-variableName2' },
  {
    tag: tags.definition(tags.propertyName),
    class: 'tok-propertyName tok-definition'
  },
  { tag: tags.typeName, class: 'tok-typeName' },
  { tag: tags.namespace, class: 'tok-namespace' },
  { tag: tags.className, class: 'tok-className' },
  { tag: tags.macroName, class: 'tok-macroName' },
  { tag: tags.propertyName, class: 'tok-propertyName' },
  { tag: tags.operator, class: 'tok-operator' },
  { tag: tags.comment, class: 'tok-comment' },
  { tag: tags.meta, class: 'tok-meta' },
  { tag: tags.invalid, class: 'tok-invalid' },
  { tag: tags.punctuation, class: 'tok-punctuation' }
])
var _a
const languageDataProp = new NodeProp()
function defineLanguageFacet(o) {
  return Facet.define({ combine: o ? (e) => e.concat(o) : void 0 })
}
const sublanguageProp = new NodeProp()
class Language {
  constructor(e, s, a = [], c = '') {
    ;(this.data = e),
      (this.name = c),
      EditorState.prototype.hasOwnProperty('tree') ||
        Object.defineProperty(EditorState.prototype, 'tree', {
          get() {
            return syntaxTree(this)
          }
        }),
      (this.parser = s),
      (this.extension = [
        language.of(this),
        EditorState.languageData.of((h, d, g) => {
          let b = topNodeAt(h, d, g),
            $ = b.type.prop(languageDataProp)
          if (!$) return []
          let _ = h.facet($),
            j = b.type.prop(sublanguageProp)
          if (j) {
            let _e = b.resolve(d - b.from, g)
            for (let et of j)
              if (et.test(_e, h)) {
                let tt = h.facet(et.facet)
                return et.type == 'replace' ? tt : tt.concat(_)
              }
          }
          return _
        })
      ].concat(a))
  }
  isActiveAt(e, s, a = -1) {
    return topNodeAt(e, s, a).type.prop(languageDataProp) == this.data
  }
  findRegions(e) {
    let s = e.facet(language)
    if ((s == null ? void 0 : s.data) == this.data)
      return [{ from: 0, to: e.doc.length }]
    if (!s || !s.allowsNesting) return []
    let a = [],
      c = (h, d) => {
        if (h.prop(languageDataProp) == this.data) {
          a.push({ from: d, to: d + h.length })
          return
        }
        let g = h.prop(NodeProp.mounted)
        if (g) {
          if (g.tree.prop(languageDataProp) == this.data) {
            if (g.overlay)
              for (let b of g.overlay)
                a.push({ from: b.from + d, to: b.to + d })
            else a.push({ from: d, to: d + h.length })
            return
          } else if (g.overlay) {
            let b = a.length
            if ((c(g.tree, g.overlay[0].from + d), a.length > b)) return
          }
        }
        for (let b = 0; b < h.children.length; b++) {
          let $ = h.children[b]
          $ instanceof Tree && c($, h.positions[b] + d)
        }
      }
    return c(syntaxTree(e), 0), a
  }
  get allowsNesting() {
    return !0
  }
}
Language.setState = StateEffect.define()
function topNodeAt(o, e, s) {
  let a = o.facet(language),
    c = syntaxTree(o).topNode
  if (!a || a.allowsNesting)
    for (let h = c; h; h = h.enter(e, s, IterMode.ExcludeBuffers))
      h.type.isTop && (c = h)
  return c
}
class LRLanguage extends Language {
  constructor(e, s, a) {
    super(e, s, [], a), (this.parser = s)
  }
  static define(e) {
    let s = defineLanguageFacet(e.languageData)
    return new LRLanguage(
      s,
      e.parser.configure({
        props: [languageDataProp.add((a) => (a.isTop ? s : void 0))]
      }),
      e.name
    )
  }
  configure(e, s) {
    return new LRLanguage(this.data, this.parser.configure(e), s || this.name)
  }
  get allowsNesting() {
    return this.parser.hasWrappers()
  }
}
function syntaxTree(o) {
  let e = o.field(Language.state, !1)
  return e ? e.tree : Tree.empty
}
class DocInput {
  constructor(e) {
    ;(this.doc = e),
      (this.cursorPos = 0),
      (this.string = ''),
      (this.cursor = e.iter())
  }
  get length() {
    return this.doc.length
  }
  syncTo(e) {
    return (
      (this.string = this.cursor.next(e - this.cursorPos).value),
      (this.cursorPos = e + this.string.length),
      this.cursorPos - this.string.length
    )
  }
  chunk(e) {
    return this.syncTo(e), this.string
  }
  get lineChunks() {
    return !0
  }
  read(e, s) {
    let a = this.cursorPos - this.string.length
    return e < a || s >= this.cursorPos
      ? this.doc.sliceString(e, s)
      : this.string.slice(e - a, s - a)
  }
}
let currentContext = null
class ParseContext {
  constructor(e, s, a = [], c, h, d, g, b) {
    ;(this.parser = e),
      (this.state = s),
      (this.fragments = a),
      (this.tree = c),
      (this.treeLen = h),
      (this.viewport = d),
      (this.skipped = g),
      (this.scheduleOn = b),
      (this.parse = null),
      (this.tempSkipped = [])
  }
  static create(e, s, a) {
    return new ParseContext(e, s, [], Tree.empty, 0, a, [], null)
  }
  startParse() {
    return this.parser.startParse(new DocInput(this.state.doc), this.fragments)
  }
  work(e, s) {
    return (
      s != null && s >= this.state.doc.length && (s = void 0),
      this.tree != Tree.empty && this.isDone(s ?? this.state.doc.length)
        ? (this.takeTree(), !0)
        : this.withContext(() => {
            var a
            if (typeof e == 'number') {
              let c = Date.now() + e
              e = () => Date.now() > c
            }
            for (
              this.parse || (this.parse = this.startParse()),
                s != null &&
                  (this.parse.stoppedAt == null || this.parse.stoppedAt > s) &&
                  s < this.state.doc.length &&
                  this.parse.stopAt(s);
              ;

            ) {
              let c = this.parse.advance()
              if (c)
                if (
                  ((this.fragments = this.withoutTempSkipped(
                    TreeFragment.addTree(
                      c,
                      this.fragments,
                      this.parse.stoppedAt != null
                    )
                  )),
                  (this.treeLen =
                    (a = this.parse.stoppedAt) !== null && a !== void 0
                      ? a
                      : this.state.doc.length),
                  (this.tree = c),
                  (this.parse = null),
                  this.treeLen < (s ?? this.state.doc.length))
                )
                  this.parse = this.startParse()
                else return !0
              if (e()) return !1
            }
          })
    )
  }
  takeTree() {
    let e, s
    this.parse &&
      (e = this.parse.parsedPos) >= this.treeLen &&
      ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) &&
        this.parse.stopAt(e),
      this.withContext(() => {
        for (; !(s = this.parse.advance()); );
      }),
      (this.treeLen = e),
      (this.tree = s),
      (this.fragments = this.withoutTempSkipped(
        TreeFragment.addTree(this.tree, this.fragments, !0)
      )),
      (this.parse = null))
  }
  withContext(e) {
    let s = currentContext
    currentContext = this
    try {
      return e()
    } finally {
      currentContext = s
    }
  }
  withoutTempSkipped(e) {
    for (let s; (s = this.tempSkipped.pop()); )
      e = cutFragments(e, s.from, s.to)
    return e
  }
  changes(e, s) {
    let { fragments: a, tree: c, treeLen: h, viewport: d, skipped: g } = this
    if ((this.takeTree(), !e.empty)) {
      let b = []
      if (
        (e.iterChangedRanges(($, _, j, _e) =>
          b.push({ fromA: $, toA: _, fromB: j, toB: _e })
        ),
        (a = TreeFragment.applyChanges(a, b)),
        (c = Tree.empty),
        (h = 0),
        (d = { from: e.mapPos(d.from, -1), to: e.mapPos(d.to, 1) }),
        this.skipped.length)
      ) {
        g = []
        for (let $ of this.skipped) {
          let _ = e.mapPos($.from, 1),
            j = e.mapPos($.to, -1)
          _ < j && g.push({ from: _, to: j })
        }
      }
    }
    return new ParseContext(this.parser, s, a, c, h, d, g, this.scheduleOn)
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return !1
    this.viewport = e
    let s = this.skipped.length
    for (let a = 0; a < this.skipped.length; a++) {
      let { from: c, to: h } = this.skipped[a]
      c < e.to &&
        h > e.from &&
        ((this.fragments = cutFragments(this.fragments, c, h)),
        this.skipped.splice(a--, 1))
    }
    return this.skipped.length >= s ? !1 : (this.reset(), !0)
  }
  reset() {
    this.parse && (this.takeTree(), (this.parse = null))
  }
  skipUntilInView(e, s) {
    this.skipped.push({ from: e, to: s })
  }
  static getSkippingParser(e) {
    return new (class extends Parser {
      createParse(s, a, c) {
        let h = c[0].from,
          d = c[c.length - 1].to
        return {
          parsedPos: h,
          advance() {
            let b = currentContext
            if (b) {
              for (let $ of c) b.tempSkipped.push($)
              e &&
                (b.scheduleOn = b.scheduleOn
                  ? Promise.all([b.scheduleOn, e])
                  : e)
            }
            return (this.parsedPos = d), new Tree(NodeType.none, [], [], d - h)
          },
          stoppedAt: null,
          stopAt() {}
        }
      }
    })()
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length)
    let s = this.fragments
    return this.treeLen >= e && s.length && s[0].from == 0 && s[0].to >= e
  }
  static get() {
    return currentContext
  }
}
function cutFragments(o, e, s) {
  return TreeFragment.applyChanges(o, [{ fromA: e, toA: s, fromB: e, toB: s }])
}
class LanguageState {
  constructor(e) {
    ;(this.context = e), (this.tree = e.tree)
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this
    let s = this.context.changes(e.changes, e.state),
      a =
        this.context.treeLen == e.startState.doc.length
          ? void 0
          : Math.max(e.changes.mapPos(this.context.treeLen), s.viewport.to)
    return s.work(20, a) || s.takeTree(), new LanguageState(s)
  }
  static init(e) {
    let s = Math.min(3e3, e.doc.length),
      a = ParseContext.create(e.facet(language).parser, e, { from: 0, to: s })
    return a.work(20, s) || a.takeTree(), new LanguageState(a)
  }
}
Language.state = StateField.define({
  create: LanguageState.init,
  update(o, e) {
    for (let s of e.effects) if (s.is(Language.setState)) return s.value
    return e.startState.facet(language) != e.state.facet(language)
      ? LanguageState.init(e.state)
      : o.apply(e)
  }
})
let requestIdle = (o) => {
  let e = setTimeout(() => o(), 500)
  return () => clearTimeout(e)
}
typeof requestIdleCallback < 'u' &&
  (requestIdle = (o) => {
    let e = -1,
      s = setTimeout(() => {
        e = requestIdleCallback(o, { timeout: 500 - 100 })
      }, 100)
    return () => (e < 0 ? clearTimeout(s) : cancelIdleCallback(e))
  })
const isInputPending =
    typeof navigator < 'u' &&
    !((_a = navigator.scheduling) === null || _a === void 0) &&
    _a.isInputPending
      ? () => navigator.scheduling.isInputPending()
      : null,
  parseWorker = ViewPlugin.fromClass(
    class {
      constructor(e) {
        ;(this.view = e),
          (this.working = null),
          (this.workScheduled = 0),
          (this.chunkEnd = -1),
          (this.chunkBudget = -1),
          (this.work = this.work.bind(this)),
          this.scheduleWork()
      }
      update(e) {
        let s = this.view.state.field(Language.state).context
        ;(s.updateViewport(e.view.viewport) ||
          this.view.viewport.to > s.treeLen) &&
          this.scheduleWork(),
          e.docChanged &&
            (this.view.hasFocus && (this.chunkBudget += 50),
            this.scheduleWork()),
          this.checkAsyncSchedule(s)
      }
      scheduleWork() {
        if (this.working) return
        let { state: e } = this.view,
          s = e.field(Language.state)
        ;(s.tree != s.context.tree || !s.context.isDone(e.doc.length)) &&
          (this.working = requestIdle(this.work))
      }
      work(e) {
        this.working = null
        let s = Date.now()
        if (
          (this.chunkEnd < s &&
            (this.chunkEnd < 0 || this.view.hasFocus) &&
            ((this.chunkEnd = s + 3e4), (this.chunkBudget = 3e3)),
          this.chunkBudget <= 0)
        )
          return
        let {
            state: a,
            viewport: { to: c }
          } = this.view,
          h = a.field(Language.state)
        if (h.tree == h.context.tree && h.context.isDone(c + 1e5)) return
        let d =
            Date.now() +
            Math.min(
              this.chunkBudget,
              100,
              e && !isInputPending ? Math.max(25, e.timeRemaining() - 5) : 1e9
            ),
          g = h.context.treeLen < c && a.doc.length > c + 1e3,
          b = h.context.work(
            () => (isInputPending && isInputPending()) || Date.now() > d,
            c + (g ? 0 : 1e5)
          )
        ;(this.chunkBudget -= Date.now() - s),
          (b || this.chunkBudget <= 0) &&
            (h.context.takeTree(),
            this.view.dispatch({
              effects: Language.setState.of(new LanguageState(h.context))
            })),
          this.chunkBudget > 0 && !(b && !g) && this.scheduleWork(),
          this.checkAsyncSchedule(h.context)
      }
      checkAsyncSchedule(e) {
        e.scheduleOn &&
          (this.workScheduled++,
          e.scheduleOn
            .then(() => this.scheduleWork())
            .catch((s) => logException(this.view.state, s))
            .then(() => this.workScheduled--),
          (e.scheduleOn = null))
      }
      destroy() {
        this.working && this.working()
      }
      isWorking() {
        return !!(this.working || this.workScheduled > 0)
      }
    },
    {
      eventHandlers: {
        focus() {
          this.scheduleWork()
        }
      }
    }
  ),
  language = Facet.define({
    combine(o) {
      return o.length ? o[0] : null
    },
    enables: (o) => [
      Language.state,
      parseWorker,
      EditorView.contentAttributes.compute([o], (e) => {
        let s = e.facet(o)
        return s && s.name ? { 'data-language': s.name } : {}
      })
    ]
  })
class LanguageSupport {
  constructor(e, s = []) {
    ;(this.language = e), (this.support = s), (this.extension = [e, s])
  }
}
const indentService = Facet.define(),
  indentUnit = Facet.define({
    combine: (o) => {
      if (!o.length) return '  '
      let e = o[0]
      if (!e || /\S/.test(e) || Array.from(e).some((s) => s != e[0]))
        throw new Error('Invalid indent unit: ' + JSON.stringify(o[0]))
      return e
    }
  })
function getIndentUnit(o) {
  let e = o.facet(indentUnit)
  return e.charCodeAt(0) == 9 ? o.tabSize * e.length : e.length
}
function indentString(o, e) {
  let s = '',
    a = o.tabSize,
    c = o.facet(indentUnit)[0]
  if (c == '	') {
    for (; e >= a; ) (s += '	'), (e -= a)
    c = ' '
  }
  for (let h = 0; h < e; h++) s += c
  return s
}
function getIndentation(o, e) {
  o instanceof EditorState && (o = new IndentContext(o))
  for (let a of o.state.facet(indentService)) {
    let c = a(o, e)
    if (c !== void 0) return c
  }
  let s = syntaxTree(o.state)
  return s.length >= e ? syntaxIndentation(o, s, e) : null
}
class IndentContext {
  constructor(e, s = {}) {
    ;(this.state = e), (this.options = s), (this.unit = getIndentUnit(e))
  }
  lineAt(e, s = 1) {
    let a = this.state.doc.lineAt(e),
      { simulateBreak: c, simulateDoubleBreak: h } = this.options
    return c != null && c >= a.from && c <= a.to
      ? h && c == e
        ? { text: '', from: e }
        : (s < 0 ? c < e : c <= e)
        ? { text: a.text.slice(c - a.from), from: c }
        : { text: a.text.slice(0, c - a.from), from: a.from }
      : a
  }
  textAfterPos(e, s = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return ''
    let { text: a, from: c } = this.lineAt(e, s)
    return a.slice(e - c, Math.min(a.length, e + 100 - c))
  }
  column(e, s = 1) {
    let { text: a, from: c } = this.lineAt(e, s),
      h = this.countColumn(a, e - c),
      d = this.options.overrideIndentation
        ? this.options.overrideIndentation(c)
        : -1
    return d > -1 && (h += d - this.countColumn(a, a.search(/\S|$/))), h
  }
  countColumn(e, s = e.length) {
    return countColumn(e, this.state.tabSize, s)
  }
  lineIndent(e, s = 1) {
    let { text: a, from: c } = this.lineAt(e, s),
      h = this.options.overrideIndentation
    if (h) {
      let d = h(c)
      if (d > -1) return d
    }
    return this.countColumn(a, a.search(/\S|$/))
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null
  }
}
const indentNodeProp = new NodeProp()
function syntaxIndentation(o, e, s) {
  return indentFrom(e.resolveInner(s).enterUnfinishedNodesBefore(s), s, o)
}
function ignoreClosed(o) {
  return o.pos == o.options.simulateBreak && o.options.simulateDoubleBreak
}
function indentStrategy(o) {
  let e = o.type.prop(indentNodeProp)
  if (e) return e
  let s = o.firstChild,
    a
  if (s && (a = s.type.prop(NodeProp.closedBy))) {
    let c = o.lastChild,
      h = c && a.indexOf(c.name) > -1
    return (d) =>
      delimitedStrategy(
        d,
        !0,
        1,
        void 0,
        h && !ignoreClosed(d) ? c.from : void 0
      )
  }
  return o.parent == null ? topIndent : null
}
function indentFrom(o, e, s) {
  for (; o; o = o.parent) {
    let a = indentStrategy(o)
    if (a) return a(TreeIndentContext.create(s, e, o))
  }
  return null
}
function topIndent() {
  return 0
}
class TreeIndentContext extends IndentContext {
  constructor(e, s, a) {
    super(e.state, e.options), (this.base = e), (this.pos = s), (this.node = a)
  }
  static create(e, s, a) {
    return new TreeIndentContext(e, s, a)
  }
  get textAfter() {
    return this.textAfterPos(this.pos)
  }
  get baseIndent() {
    return this.baseIndentFor(this.node)
  }
  baseIndentFor(e) {
    let s = this.state.doc.lineAt(e.from)
    for (;;) {
      let a = e.resolve(s.from)
      for (; a.parent && a.parent.from == a.from; ) a = a.parent
      if (isParent(a, e)) break
      s = this.state.doc.lineAt(a.from)
    }
    return this.lineIndent(s.from)
  }
  continue() {
    let e = this.node.parent
    return e ? indentFrom(e, this.pos, this.base) : 0
  }
}
function isParent(o, e) {
  for (let s = e; s; s = s.parent) if (o == s) return !0
  return !1
}
function bracketedAligned(o) {
  let e = o.node,
    s = e.childAfter(e.from),
    a = e.lastChild
  if (!s) return null
  let c = o.options.simulateBreak,
    h = o.state.doc.lineAt(s.from),
    d = c == null || c <= h.from ? h.to : Math.min(h.to, c)
  for (let g = s.to; ; ) {
    let b = e.childAfter(g)
    if (!b || b == a) return null
    if (!b.type.isSkipped) return b.from < d ? s : null
    g = b.to
  }
}
function delimitedIndent({ closing: o, align: e = !0, units: s = 1 }) {
  return (a) => delimitedStrategy(a, e, s, o)
}
function delimitedStrategy(o, e, s, a, c) {
  let h = o.textAfter,
    d = h.match(/^\s*/)[0].length,
    g = (a && h.slice(d, d + a.length) == a) || c == o.pos + d,
    b = e ? bracketedAligned(o) : null
  return b
    ? g
      ? o.column(b.from)
      : o.column(b.to)
    : o.baseIndent + (g ? 0 : o.unit * s)
}
const flatIndent = (o) => o.baseIndent
function continuedIndent({ except: o, units: e = 1 } = {}) {
  return (s) => {
    let a = o && o.test(s.textAfter)
    return s.baseIndent + (a ? 0 : e * s.unit)
  }
}
const DontIndentBeyond = 200
function indentOnInput() {
  return EditorState.transactionFilter.of((o) => {
    if (
      !o.docChanged ||
      (!o.isUserEvent('input.type') && !o.isUserEvent('input.complete'))
    )
      return o
    let e = o.startState.languageDataAt(
      'indentOnInput',
      o.startState.selection.main.head
    )
    if (!e.length) return o
    let s = o.newDoc,
      { head: a } = o.newSelection.main,
      c = s.lineAt(a)
    if (a > c.from + DontIndentBeyond) return o
    let h = s.sliceString(c.from, a)
    if (!e.some(($) => $.test(h))) return o
    let { state: d } = o,
      g = -1,
      b = []
    for (let { head: $ } of d.selection.ranges) {
      let _ = d.doc.lineAt($)
      if (_.from == g) continue
      g = _.from
      let j = getIndentation(d, _.from)
      if (j == null) continue
      let _e = /^\s*/.exec(_.text)[0],
        et = indentString(d, j)
      _e != et && b.push({ from: _.from, to: _.from + _e.length, insert: et })
    }
    return b.length ? [o, { changes: b, sequential: !0 }] : o
  })
}
const foldService = Facet.define(),
  foldNodeProp = new NodeProp()
function foldInside(o) {
  let e = o.firstChild,
    s = o.lastChild
  return e && e.to < s.from
    ? { from: e.to, to: s.type.isError ? o.to : s.from }
    : null
}
function syntaxFolding(o, e, s) {
  let a = syntaxTree(o)
  if (a.length < s) return null
  let c = a.resolveInner(s, 1),
    h = null
  for (let d = c; d; d = d.parent) {
    if (d.to <= s || d.from > s) continue
    if (h && d.from < e) break
    let g = d.type.prop(foldNodeProp)
    if (
      g &&
      (d.to < a.length - 50 || a.length == o.doc.length || !isUnfinished(d))
    ) {
      let b = g(d, o)
      b && b.from <= s && b.from >= e && b.to > s && (h = b)
    }
  }
  return h
}
function isUnfinished(o) {
  let e = o.lastChild
  return e && e.to == o.to && e.type.isError
}
function foldable(o, e, s) {
  for (let a of o.facet(foldService)) {
    let c = a(o, e, s)
    if (c) return c
  }
  return syntaxFolding(o, e, s)
}
function mapRange(o, e) {
  let s = e.mapPos(o.from, 1),
    a = e.mapPos(o.to, -1)
  return s >= a ? void 0 : { from: s, to: a }
}
const foldEffect = StateEffect.define({ map: mapRange }),
  unfoldEffect = StateEffect.define({ map: mapRange })
function selectedLines(o) {
  let e = []
  for (let { head: s } of o.state.selection.ranges)
    e.some((a) => a.from <= s && a.to >= s) || e.push(o.lineBlockAt(s))
  return e
}
const foldState = StateField.define({
  create() {
    return Decoration.none
  },
  update(o, e) {
    o = o.map(e.changes)
    for (let s of e.effects)
      if (s.is(foldEffect) && !foldExists(o, s.value.from, s.value.to)) {
        let { preparePlaceholder: a } = e.state.facet(foldConfig),
          c = a
            ? Decoration.replace({
                widget: new PreparedFoldWidget(a(e.state, s.value))
              })
            : foldWidget
        o = o.update({ add: [c.range(s.value.from, s.value.to)] })
      } else
        s.is(unfoldEffect) &&
          (o = o.update({
            filter: (a, c) => s.value.from != a || s.value.to != c,
            filterFrom: s.value.from,
            filterTo: s.value.to
          }))
    if (e.selection) {
      let s = !1,
        { head: a } = e.selection.main
      o.between(a, a, (c, h) => {
        c < a && h > a && (s = !0)
      }),
        s &&
          (o = o.update({
            filterFrom: a,
            filterTo: a,
            filter: (c, h) => h <= a || c >= a
          }))
    }
    return o
  },
  provide: (o) => EditorView.decorations.from(o),
  toJSON(o, e) {
    let s = []
    return (
      o.between(0, e.doc.length, (a, c) => {
        s.push(a, c)
      }),
      s
    )
  },
  fromJSON(o) {
    if (!Array.isArray(o) || o.length % 2)
      throw new RangeError('Invalid JSON for fold state')
    let e = []
    for (let s = 0; s < o.length; ) {
      let a = o[s++],
        c = o[s++]
      if (typeof a != 'number' || typeof c != 'number')
        throw new RangeError('Invalid JSON for fold state')
      e.push(foldWidget.range(a, c))
    }
    return Decoration.set(e, !0)
  }
})
function findFold(o, e, s) {
  var a
  let c = null
  return (
    (a = o.field(foldState, !1)) === null ||
      a === void 0 ||
      a.between(e, s, (h, d) => {
        ;(!c || c.from > h) && (c = { from: h, to: d })
      }),
    c
  )
}
function foldExists(o, e, s) {
  let a = !1
  return (
    o.between(e, e, (c, h) => {
      c == e && h == s && (a = !0)
    }),
    a
  )
}
function maybeEnable(o, e) {
  return o.field(foldState, !1)
    ? e
    : e.concat(StateEffect.appendConfig.of(codeFolding()))
}
const foldCode = (o) => {
    for (let e of selectedLines(o)) {
      let s = foldable(o.state, e.from, e.to)
      if (s)
        return (
          o.dispatch({
            effects: maybeEnable(o.state, [
              foldEffect.of(s),
              announceFold(o, s)
            ])
          }),
          !0
        )
    }
    return !1
  },
  unfoldCode = (o) => {
    if (!o.state.field(foldState, !1)) return !1
    let e = []
    for (let s of selectedLines(o)) {
      let a = findFold(o.state, s.from, s.to)
      a && e.push(unfoldEffect.of(a), announceFold(o, a, !1))
    }
    return e.length && o.dispatch({ effects: e }), e.length > 0
  }
function announceFold(o, e, s = !0) {
  let a = o.state.doc.lineAt(e.from).number,
    c = o.state.doc.lineAt(e.to).number
  return EditorView.announce.of(
    `${o.state.phrase(
      s ? 'Folded lines' : 'Unfolded lines'
    )} ${a} ${o.state.phrase('to')} ${c}.`
  )
}
const foldAll = (o) => {
    let { state: e } = o,
      s = []
    for (let a = 0; a < e.doc.length; ) {
      let c = o.lineBlockAt(a),
        h = foldable(e, c.from, c.to)
      h && s.push(foldEffect.of(h)), (a = (h ? o.lineBlockAt(h.to) : c).to + 1)
    }
    return (
      s.length && o.dispatch({ effects: maybeEnable(o.state, s) }), !!s.length
    )
  },
  unfoldAll = (o) => {
    let e = o.state.field(foldState, !1)
    if (!e || !e.size) return !1
    let s = []
    return (
      e.between(0, o.state.doc.length, (a, c) => {
        s.push(unfoldEffect.of({ from: a, to: c }))
      }),
      o.dispatch({ effects: s }),
      !0
    )
  },
  foldKeymap = [
    { key: 'Ctrl-Shift-[', mac: 'Cmd-Alt-[', run: foldCode },
    { key: 'Ctrl-Shift-]', mac: 'Cmd-Alt-]', run: unfoldCode },
    { key: 'Ctrl-Alt-[', run: foldAll },
    { key: 'Ctrl-Alt-]', run: unfoldAll }
  ],
  defaultConfig = {
    placeholderDOM: null,
    preparePlaceholder: null,
    placeholderText: '…'
  },
  foldConfig = Facet.define({
    combine(o) {
      return combineConfig(o, defaultConfig)
    }
  })
function codeFolding(o) {
  let e = [foldState, baseTheme$1$2]
  return o && e.push(foldConfig.of(o)), e
}
function widgetToDOM(o, e) {
  let { state: s } = o,
    a = s.facet(foldConfig),
    c = (d) => {
      let g = o.lineBlockAt(o.posAtDOM(d.target)),
        b = findFold(o.state, g.from, g.to)
      b && o.dispatch({ effects: unfoldEffect.of(b) }), d.preventDefault()
    }
  if (a.placeholderDOM) return a.placeholderDOM(o, c, e)
  let h = document.createElement('span')
  return (
    (h.textContent = a.placeholderText),
    h.setAttribute('aria-label', s.phrase('folded code')),
    (h.title = s.phrase('unfold')),
    (h.className = 'cm-foldPlaceholder'),
    (h.onclick = c),
    h
  )
}
const foldWidget = Decoration.replace({
  widget: new (class extends WidgetType {
    toDOM(o) {
      return widgetToDOM(o, null)
    }
  })()
})
class PreparedFoldWidget extends WidgetType {
  constructor(e) {
    super(), (this.value = e)
  }
  eq(e) {
    return this.value == e.value
  }
  toDOM(e) {
    return widgetToDOM(e, this.value)
  }
}
const foldGutterDefaults = {
  openText: '⌄',
  closedText: '›',
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
}
class FoldMarker extends GutterMarker {
  constructor(e, s) {
    super(), (this.config = e), (this.open = s)
  }
  eq(e) {
    return this.config == e.config && this.open == e.open
  }
  toDOM(e) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open)
    let s = document.createElement('span')
    return (
      (s.textContent = this.open
        ? this.config.openText
        : this.config.closedText),
      (s.title = e.state.phrase(this.open ? 'Fold line' : 'Unfold line')),
      s
    )
  }
}
function foldGutter(o = {}) {
  let e = Object.assign(Object.assign({}, foldGutterDefaults), o),
    s = new FoldMarker(e, !0),
    a = new FoldMarker(e, !1),
    c = ViewPlugin.fromClass(
      class {
        constructor(d) {
          ;(this.from = d.viewport.from), (this.markers = this.buildMarkers(d))
        }
        update(d) {
          ;(d.docChanged ||
            d.viewportChanged ||
            d.startState.facet(language) != d.state.facet(language) ||
            d.startState.field(foldState, !1) != d.state.field(foldState, !1) ||
            syntaxTree(d.startState) != syntaxTree(d.state) ||
            e.foldingChanged(d)) &&
            (this.markers = this.buildMarkers(d.view))
        }
        buildMarkers(d) {
          let g = new RangeSetBuilder()
          for (let b of d.viewportLineBlocks) {
            let $ = findFold(d.state, b.from, b.to)
              ? a
              : foldable(d.state, b.from, b.to)
              ? s
              : null
            $ && g.add(b.from, b.from, $)
          }
          return g.finish()
        }
      }
    ),
    { domEventHandlers: h } = e
  return [
    c,
    gutter({
      class: 'cm-foldGutter',
      markers(d) {
        var g
        return (
          ((g = d.plugin(c)) === null || g === void 0 ? void 0 : g.markers) ||
          RangeSet.empty
        )
      },
      initialSpacer() {
        return new FoldMarker(e, !1)
      },
      domEventHandlers: Object.assign(Object.assign({}, h), {
        click: (d, g, b) => {
          if (h.click && h.click(d, g, b)) return !0
          let $ = findFold(d.state, g.from, g.to)
          if ($) return d.dispatch({ effects: unfoldEffect.of($) }), !0
          let _ = foldable(d.state, g.from, g.to)
          return _ ? (d.dispatch({ effects: foldEffect.of(_) }), !0) : !1
        }
      })
    }),
    codeFolding()
  ]
}
const baseTheme$1$2 = EditorView.baseTheme({
  '.cm-foldPlaceholder': {
    backgroundColor: '#eee',
    border: '1px solid #ddd',
    color: '#888',
    borderRadius: '.2em',
    margin: '0 1px',
    padding: '0 1px',
    cursor: 'pointer'
  },
  '.cm-foldGutter span': { padding: '0 1px', cursor: 'pointer' }
})
class HighlightStyle {
  constructor(e, s) {
    this.specs = e
    let a
    function c(g) {
      let b = StyleModule.newName()
      return ((a || (a = Object.create(null)))['.' + b] = g), b
    }
    const h = typeof s.all == 'string' ? s.all : s.all ? c(s.all) : void 0,
      d = s.scope
    ;(this.scope =
      d instanceof Language
        ? (g) => g.prop(languageDataProp) == d.data
        : d
        ? (g) => g == d
        : void 0),
      (this.style = tagHighlighter(
        e.map((g) => ({
          tag: g.tag,
          class: g.class || c(Object.assign({}, g, { tag: null }))
        })),
        { all: h }
      ).style),
      (this.module = a ? new StyleModule(a) : null),
      (this.themeType = s.themeType)
  }
  static define(e, s) {
    return new HighlightStyle(e, s || {})
  }
}
const highlighterFacet = Facet.define(),
  fallbackHighlighter = Facet.define({
    combine(o) {
      return o.length ? [o[0]] : null
    }
  })
function getHighlighters(o) {
  let e = o.facet(highlighterFacet)
  return e.length ? e : o.facet(fallbackHighlighter)
}
function syntaxHighlighting(o, e) {
  let s = [treeHighlighter],
    a
  return (
    o instanceof HighlightStyle &&
      (o.module && s.push(EditorView.styleModule.of(o.module)),
      (a = o.themeType)),
    e != null && e.fallback
      ? s.push(fallbackHighlighter.of(o))
      : a
      ? s.push(
          highlighterFacet.computeN([EditorView.darkTheme], (c) =>
            c.facet(EditorView.darkTheme) == (a == 'dark') ? [o] : []
          )
        )
      : s.push(highlighterFacet.of(o)),
    s
  )
}
class TreeHighlighter {
  constructor(e) {
    ;(this.markCache = Object.create(null)),
      (this.tree = syntaxTree(e.state)),
      (this.decorations = this.buildDeco(e, getHighlighters(e.state)))
  }
  update(e) {
    let s = syntaxTree(e.state),
      a = getHighlighters(e.state),
      c = a != getHighlighters(e.startState)
    s.length < e.view.viewport.to && !c && s.type == this.tree.type
      ? (this.decorations = this.decorations.map(e.changes))
      : (s != this.tree || e.viewportChanged || c) &&
        ((this.tree = s), (this.decorations = this.buildDeco(e.view, a)))
  }
  buildDeco(e, s) {
    if (!s || !this.tree.length) return Decoration.none
    let a = new RangeSetBuilder()
    for (let { from: c, to: h } of e.visibleRanges)
      highlightTree(
        this.tree,
        s,
        (d, g, b) => {
          a.add(
            d,
            g,
            this.markCache[b] ||
              (this.markCache[b] = Decoration.mark({ class: b }))
          )
        },
        c,
        h
      )
    return a.finish()
  }
}
const treeHighlighter = Prec.high(
    ViewPlugin.fromClass(TreeHighlighter, { decorations: (o) => o.decorations })
  ),
  defaultHighlightStyle = HighlightStyle.define([
    { tag: tags.meta, color: '#404740' },
    { tag: tags.link, textDecoration: 'underline' },
    { tag: tags.heading, textDecoration: 'underline', fontWeight: 'bold' },
    { tag: tags.emphasis, fontStyle: 'italic' },
    { tag: tags.strong, fontWeight: 'bold' },
    { tag: tags.strikethrough, textDecoration: 'line-through' },
    { tag: tags.keyword, color: '#708' },
    {
      tag: [
        tags.atom,
        tags.bool,
        tags.url,
        tags.contentSeparator,
        tags.labelName
      ],
      color: '#219'
    },
    { tag: [tags.literal, tags.inserted], color: '#164' },
    { tag: [tags.string, tags.deleted], color: '#a11' },
    {
      tag: [tags.regexp, tags.escape, tags.special(tags.string)],
      color: '#e40'
    },
    { tag: tags.definition(tags.variableName), color: '#00f' },
    { tag: tags.local(tags.variableName), color: '#30a' },
    { tag: [tags.typeName, tags.namespace], color: '#085' },
    { tag: tags.className, color: '#167' },
    { tag: [tags.special(tags.variableName), tags.macroName], color: '#256' },
    { tag: tags.definition(tags.propertyName), color: '#00c' },
    { tag: tags.comment, color: '#940' },
    { tag: tags.invalid, color: '#f00' }
  ]),
  baseTheme$3 = EditorView.baseTheme({
    '&.cm-focused .cm-matchingBracket': { backgroundColor: '#328c8252' },
    '&.cm-focused .cm-nonmatchingBracket': { backgroundColor: '#bb555544' }
  }),
  DefaultScanDist = 1e4,
  DefaultBrackets = '()[]{}',
  bracketMatchingConfig = Facet.define({
    combine(o) {
      return combineConfig(o, {
        afterCursor: !0,
        brackets: DefaultBrackets,
        maxScanDistance: DefaultScanDist,
        renderMatch: defaultRenderMatch
      })
    }
  }),
  matchingMark = Decoration.mark({ class: 'cm-matchingBracket' }),
  nonmatchingMark = Decoration.mark({ class: 'cm-nonmatchingBracket' })
function defaultRenderMatch(o) {
  let e = [],
    s = o.matched ? matchingMark : nonmatchingMark
  return (
    e.push(s.range(o.start.from, o.start.to)),
    o.end && e.push(s.range(o.end.from, o.end.to)),
    e
  )
}
const bracketMatchingState = StateField.define({
    create() {
      return Decoration.none
    },
    update(o, e) {
      if (!e.docChanged && !e.selection) return o
      let s = [],
        a = e.state.facet(bracketMatchingConfig)
      for (let c of e.state.selection.ranges) {
        if (!c.empty) continue
        let h =
          matchBrackets(e.state, c.head, -1, a) ||
          (c.head > 0 && matchBrackets(e.state, c.head - 1, 1, a)) ||
          (a.afterCursor &&
            (matchBrackets(e.state, c.head, 1, a) ||
              (c.head < e.state.doc.length &&
                matchBrackets(e.state, c.head + 1, -1, a))))
        h && (s = s.concat(a.renderMatch(h, e.state)))
      }
      return Decoration.set(s, !0)
    },
    provide: (o) => EditorView.decorations.from(o)
  }),
  bracketMatchingUnique = [bracketMatchingState, baseTheme$3]
function bracketMatching(o = {}) {
  return [bracketMatchingConfig.of(o), bracketMatchingUnique]
}
const bracketMatchingHandle = new NodeProp()
function matchingNodes(o, e, s) {
  let a = o.prop(e < 0 ? NodeProp.openedBy : NodeProp.closedBy)
  if (a) return a
  if (o.name.length == 1) {
    let c = s.indexOf(o.name)
    if (c > -1 && c % 2 == (e < 0 ? 1 : 0)) return [s[c + e]]
  }
  return null
}
function findHandle(o) {
  let e = o.type.prop(bracketMatchingHandle)
  return e ? e(o.node) : o
}
function matchBrackets(o, e, s, a = {}) {
  let c = a.maxScanDistance || DefaultScanDist,
    h = a.brackets || DefaultBrackets,
    d = syntaxTree(o),
    g = d.resolveInner(e, s)
  for (let b = g; b; b = b.parent) {
    let $ = matchingNodes(b.type, s, h)
    if ($ && b.from < b.to) {
      let _ = findHandle(b)
      if (_ && (s > 0 ? e >= _.from && e < _.to : e > _.from && e <= _.to))
        return matchMarkedBrackets(o, e, s, b, _, $, h)
    }
  }
  return matchPlainBrackets(o, e, s, d, g.type, c, h)
}
function matchMarkedBrackets(o, e, s, a, c, h, d) {
  let g = a.parent,
    b = { from: c.from, to: c.to },
    $ = 0,
    _ = g == null ? void 0 : g.cursor()
  if (_ && (s < 0 ? _.childBefore(a.from) : _.childAfter(a.to)))
    do
      if (s < 0 ? _.to <= a.from : _.from >= a.to) {
        if ($ == 0 && h.indexOf(_.type.name) > -1 && _.from < _.to) {
          let j = findHandle(_)
          return {
            start: b,
            end: j ? { from: j.from, to: j.to } : void 0,
            matched: !0
          }
        } else if (matchingNodes(_.type, s, d)) $++
        else if (matchingNodes(_.type, -s, d)) {
          if ($ == 0) {
            let j = findHandle(_)
            return {
              start: b,
              end: j && j.from < j.to ? { from: j.from, to: j.to } : void 0,
              matched: !1
            }
          }
          $--
        }
      }
    while (s < 0 ? _.prevSibling() : _.nextSibling())
  return { start: b, matched: !1 }
}
function matchPlainBrackets(o, e, s, a, c, h, d) {
  let g = s < 0 ? o.sliceDoc(e - 1, e) : o.sliceDoc(e, e + 1),
    b = d.indexOf(g)
  if (b < 0 || (b % 2 == 0) != s > 0) return null
  let $ = { from: s < 0 ? e - 1 : e, to: s > 0 ? e + 1 : e },
    _ = o.doc.iterRange(e, s > 0 ? o.doc.length : 0),
    j = 0
  for (let _e = 0; !_.next().done && _e <= h; ) {
    let et = _.value
    s < 0 && (_e += et.length)
    let tt = e + _e * s
    for (
      let rt = s > 0 ? 0 : et.length - 1, st = s > 0 ? et.length : -1;
      rt != st;
      rt += s
    ) {
      let nt = d.indexOf(et[rt])
      if (!(nt < 0 || a.resolveInner(tt + rt, 1).type != c))
        if ((nt % 2 == 0) == s > 0) j++
        else {
          if (j == 1)
            return {
              start: $,
              end: { from: tt + rt, to: tt + rt + 1 },
              matched: nt >> 1 == b >> 1
            }
          j--
        }
    }
    s > 0 && (_e += et.length)
  }
  return _.done ? { start: $, matched: !1 } : null
}
const noTokens = Object.create(null),
  typeArray = [NodeType.none],
  warned = [],
  defaultTable = Object.create(null)
for (let [o, e] of [
  ['variable', 'variableName'],
  ['variable-2', 'variableName.special'],
  ['string-2', 'string.special'],
  ['def', 'variableName.definition'],
  ['tag', 'tagName'],
  ['attribute', 'attributeName'],
  ['type', 'typeName'],
  ['builtin', 'variableName.standard'],
  ['qualifier', 'modifier'],
  ['error', 'invalid'],
  ['header', 'heading'],
  ['property', 'propertyName']
])
  defaultTable[o] = createTokenType(noTokens, e)
function warnForPart(o, e) {
  warned.indexOf(o) > -1 || (warned.push(o), console.warn(e))
}
function createTokenType(o, e) {
  let s = null
  for (let h of e.split('.')) {
    let d = o[h] || tags[h]
    d
      ? typeof d == 'function'
        ? s
          ? (s = d(s))
          : warnForPart(h, `Modifier ${h} used at start of tag`)
        : s
        ? warnForPart(h, `Tag ${h} used as modifier`)
        : (s = d)
      : warnForPart(h, `Unknown highlighting tag ${h}`)
  }
  if (!s) return 0
  let a = e.replace(/ /g, '_'),
    c = NodeType.define({
      id: typeArray.length,
      name: a,
      props: [styleTags({ [a]: s })]
    })
  return typeArray.push(c), c.id
}
const toggleComment = (o) => {
  let { state: e } = o,
    s = e.doc.lineAt(e.selection.main.from),
    a = getConfig(o.state, s.from)
  return a.line
    ? toggleLineComment(o)
    : a.block
    ? toggleBlockCommentByLine(o)
    : !1
}
function command(o, e) {
  return ({ state: s, dispatch: a }) => {
    if (s.readOnly) return !1
    let c = o(e, s)
    return c ? (a(s.update(c)), !0) : !1
  }
}
const toggleLineComment = command(changeLineComment, 0),
  toggleBlockComment = command(changeBlockComment, 0),
  toggleBlockCommentByLine = command(
    (o, e) => changeBlockComment(o, e, selectedLineRanges(e)),
    0
  )
function getConfig(o, e) {
  let s = o.languageDataAt('commentTokens', e)
  return s.length ? s[0] : {}
}
const SearchMargin = 50
function findBlockComment(o, { open: e, close: s }, a, c) {
  let h = o.sliceDoc(a - SearchMargin, a),
    d = o.sliceDoc(c, c + SearchMargin),
    g = /\s*$/.exec(h)[0].length,
    b = /^\s*/.exec(d)[0].length,
    $ = h.length - g
  if (h.slice($ - e.length, $) == e && d.slice(b, b + s.length) == s)
    return {
      open: { pos: a - g, margin: g && 1 },
      close: { pos: c + b, margin: b && 1 }
    }
  let _, j
  c - a <= 2 * SearchMargin
    ? (_ = j = o.sliceDoc(a, c))
    : ((_ = o.sliceDoc(a, a + SearchMargin)),
      (j = o.sliceDoc(c - SearchMargin, c)))
  let _e = /^\s*/.exec(_)[0].length,
    et = /\s*$/.exec(j)[0].length,
    tt = j.length - et - s.length
  return _.slice(_e, _e + e.length) == e && j.slice(tt, tt + s.length) == s
    ? {
        open: {
          pos: a + _e + e.length,
          margin: /\s/.test(_.charAt(_e + e.length)) ? 1 : 0
        },
        close: {
          pos: c - et - s.length,
          margin: /\s/.test(j.charAt(tt - 1)) ? 1 : 0
        }
      }
    : null
}
function selectedLineRanges(o) {
  let e = []
  for (let s of o.selection.ranges) {
    let a = o.doc.lineAt(s.from),
      c = s.to <= a.to ? a : o.doc.lineAt(s.to),
      h = e.length - 1
    h >= 0 && e[h].to > a.from
      ? (e[h].to = c.to)
      : e.push({ from: a.from + /^\s*/.exec(a.text)[0].length, to: c.to })
  }
  return e
}
function changeBlockComment(o, e, s = e.selection.ranges) {
  let a = s.map((h) => getConfig(e, h.from).block)
  if (!a.every((h) => h)) return null
  let c = s.map((h, d) => findBlockComment(e, a[d], h.from, h.to))
  if (o != 2 && !c.every((h) => h))
    return {
      changes: e.changes(
        s.map((h, d) =>
          c[d]
            ? []
            : [
                { from: h.from, insert: a[d].open + ' ' },
                { from: h.to, insert: ' ' + a[d].close }
              ]
        )
      )
    }
  if (o != 1 && c.some((h) => h)) {
    let h = []
    for (let d = 0, g; d < c.length; d++)
      if ((g = c[d])) {
        let b = a[d],
          { open: $, close: _ } = g
        h.push(
          { from: $.pos - b.open.length, to: $.pos + $.margin },
          { from: _.pos - _.margin, to: _.pos + b.close.length }
        )
      }
    return { changes: h }
  }
  return null
}
function changeLineComment(o, e, s = e.selection.ranges) {
  let a = [],
    c = -1
  for (let { from: h, to: d } of s) {
    let g = a.length,
      b = 1e9,
      $ = getConfig(e, h).line
    if ($) {
      for (let _ = h; _ <= d; ) {
        let j = e.doc.lineAt(_)
        if (j.from > c && (h == d || d > j.from)) {
          c = j.from
          let _e = /^\s*/.exec(j.text)[0].length,
            et = _e == j.length,
            tt = j.text.slice(_e, _e + $.length) == $ ? _e : -1
          _e < j.text.length && _e < b && (b = _e),
            a.push({
              line: j,
              comment: tt,
              token: $,
              indent: _e,
              empty: et,
              single: !1
            })
        }
        _ = j.to + 1
      }
      if (b < 1e9)
        for (let _ = g; _ < a.length; _++)
          a[_].indent < a[_].line.text.length && (a[_].indent = b)
      a.length == g + 1 && (a[g].single = !0)
    }
  }
  if (o != 2 && a.some((h) => h.comment < 0 && (!h.empty || h.single))) {
    let h = []
    for (let { line: g, token: b, indent: $, empty: _, single: j } of a)
      (j || !_) && h.push({ from: g.from + $, insert: b + ' ' })
    let d = e.changes(h)
    return { changes: d, selection: e.selection.map(d, 1) }
  } else if (o != 1 && a.some((h) => h.comment >= 0)) {
    let h = []
    for (let { line: d, comment: g, token: b } of a)
      if (g >= 0) {
        let $ = d.from + g,
          _ = $ + b.length
        d.text[_ - d.from] == ' ' && _++, h.push({ from: $, to: _ })
      }
    return { changes: h }
  }
  return null
}
const fromHistory = Annotation.define(),
  isolateHistory = Annotation.define(),
  invertedEffects = Facet.define(),
  historyConfig = Facet.define({
    combine(o) {
      return combineConfig(
        o,
        { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, s) => s },
        {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (e, s) => (a, c) => e(a, c) || s(a, c)
        }
      )
    }
  })
function changeEnd(o) {
  let e = 0
  return o.iterChangedRanges((s, a) => (e = a)), e
}
const historyField_ = StateField.define({
  create() {
    return HistoryState.empty
  },
  update(o, e) {
    let s = e.state.facet(historyConfig),
      a = e.annotation(fromHistory)
    if (a) {
      let b = e.docChanged
          ? EditorSelection.single(changeEnd(e.changes))
          : void 0,
        $ = HistEvent.fromTransaction(e, b),
        _ = a.side,
        j = _ == 0 ? o.undone : o.done
      return (
        $
          ? (j = updateBranch(j, j.length, s.minDepth, $))
          : (j = addSelection(j, e.startState.selection)),
        new HistoryState(_ == 0 ? a.rest : j, _ == 0 ? j : a.rest)
      )
    }
    let c = e.annotation(isolateHistory)
    if (
      ((c == 'full' || c == 'before') && (o = o.isolate()),
      e.annotation(Transaction.addToHistory) === !1)
    )
      return e.changes.empty ? o : o.addMapping(e.changes.desc)
    let h = HistEvent.fromTransaction(e),
      d = e.annotation(Transaction.time),
      g = e.annotation(Transaction.userEvent)
    return (
      h
        ? (o = o.addChanges(h, d, g, s, e))
        : e.selection &&
          (o = o.addSelection(e.startState.selection, d, g, s.newGroupDelay)),
      (c == 'full' || c == 'after') && (o = o.isolate()),
      o
    )
  },
  toJSON(o) {
    return {
      done: o.done.map((e) => e.toJSON()),
      undone: o.undone.map((e) => e.toJSON())
    }
  },
  fromJSON(o) {
    return new HistoryState(
      o.done.map(HistEvent.fromJSON),
      o.undone.map(HistEvent.fromJSON)
    )
  }
})
function history(o = {}) {
  return [
    historyField_,
    historyConfig.of(o),
    EditorView.domEventHandlers({
      beforeinput(e, s) {
        let a =
          e.inputType == 'historyUndo'
            ? undo
            : e.inputType == 'historyRedo'
            ? redo
            : null
        return a ? (e.preventDefault(), a(s)) : !1
      }
    })
  ]
}
function cmd(o, e) {
  return function ({ state: s, dispatch: a }) {
    if (!e && s.readOnly) return !1
    let c = s.field(historyField_, !1)
    if (!c) return !1
    let h = c.pop(o, s, e)
    return h ? (a(h), !0) : !1
  }
}
const undo = cmd(0, !1),
  redo = cmd(1, !1),
  undoSelection = cmd(0, !0),
  redoSelection = cmd(1, !0)
class HistEvent {
  constructor(e, s, a, c, h) {
    ;(this.changes = e),
      (this.effects = s),
      (this.mapped = a),
      (this.startSelection = c),
      (this.selectionsAfter = h)
  }
  setSelAfter(e) {
    return new HistEvent(
      this.changes,
      this.effects,
      this.mapped,
      this.startSelection,
      e
    )
  }
  toJSON() {
    var e, s, a
    return {
      changes:
        (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (s = this.mapped) === null || s === void 0 ? void 0 : s.toJSON(),
      startSelection:
        (a = this.startSelection) === null || a === void 0
          ? void 0
          : a.toJSON(),
      selectionsAfter: this.selectionsAfter.map((c) => c.toJSON())
    }
  }
  static fromJSON(e) {
    return new HistEvent(
      e.changes && ChangeSet.fromJSON(e.changes),
      [],
      e.mapped && ChangeDesc.fromJSON(e.mapped),
      e.startSelection && EditorSelection.fromJSON(e.startSelection),
      e.selectionsAfter.map(EditorSelection.fromJSON)
    )
  }
  static fromTransaction(e, s) {
    let a = none$1
    for (let c of e.startState.facet(invertedEffects)) {
      let h = c(e)
      h.length && (a = a.concat(h))
    }
    return !a.length && e.changes.empty
      ? null
      : new HistEvent(
          e.changes.invert(e.startState.doc),
          a,
          void 0,
          s || e.startState.selection,
          none$1
        )
  }
  static selection(e) {
    return new HistEvent(void 0, none$1, void 0, void 0, e)
  }
}
function updateBranch(o, e, s, a) {
  let c = e + 1 > s + 20 ? e - s - 1 : 0,
    h = o.slice(c, e)
  return h.push(a), h
}
function isAdjacent(o, e) {
  let s = [],
    a = !1
  return (
    o.iterChangedRanges((c, h) => s.push(c, h)),
    e.iterChangedRanges((c, h, d, g) => {
      for (let b = 0; b < s.length; ) {
        let $ = s[b++],
          _ = s[b++]
        g >= $ && d <= _ && (a = !0)
      }
    }),
    a
  )
}
function eqSelectionShape(o, e) {
  return (
    o.ranges.length == e.ranges.length &&
    o.ranges.filter((s, a) => s.empty != e.ranges[a].empty).length === 0
  )
}
function conc(o, e) {
  return o.length ? (e.length ? o.concat(e) : o) : e
}
const none$1 = [],
  MaxSelectionsPerEvent = 200
function addSelection(o, e) {
  if (o.length) {
    let s = o[o.length - 1],
      a = s.selectionsAfter.slice(
        Math.max(0, s.selectionsAfter.length - MaxSelectionsPerEvent)
      )
    return a.length && a[a.length - 1].eq(e)
      ? o
      : (a.push(e), updateBranch(o, o.length - 1, 1e9, s.setSelAfter(a)))
  } else return [HistEvent.selection([e])]
}
function popSelection(o) {
  let e = o[o.length - 1],
    s = o.slice()
  return (
    (s[o.length - 1] = e.setSelAfter(
      e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)
    )),
    s
  )
}
function addMappingToBranch(o, e) {
  if (!o.length) return o
  let s = o.length,
    a = none$1
  for (; s; ) {
    let c = mapEvent(o[s - 1], e, a)
    if ((c.changes && !c.changes.empty) || c.effects.length) {
      let h = o.slice(0, s)
      return (h[s - 1] = c), h
    } else (e = c.mapped), s--, (a = c.selectionsAfter)
  }
  return a.length ? [HistEvent.selection(a)] : none$1
}
function mapEvent(o, e, s) {
  let a = conc(
    o.selectionsAfter.length ? o.selectionsAfter.map((g) => g.map(e)) : none$1,
    s
  )
  if (!o.changes) return HistEvent.selection(a)
  let c = o.changes.map(e),
    h = e.mapDesc(o.changes, !0),
    d = o.mapped ? o.mapped.composeDesc(h) : h
  return new HistEvent(
    c,
    StateEffect.mapEffects(o.effects, e),
    d,
    o.startSelection.map(h),
    a
  )
}
const joinableUserEvent = /^(input\.type|delete)($|\.)/
class HistoryState {
  constructor(e, s, a = 0, c = void 0) {
    ;(this.done = e),
      (this.undone = s),
      (this.prevTime = a),
      (this.prevUserEvent = c)
  }
  isolate() {
    return this.prevTime ? new HistoryState(this.done, this.undone) : this
  }
  addChanges(e, s, a, c, h) {
    let d = this.done,
      g = d[d.length - 1]
    return (
      g &&
      g.changes &&
      !g.changes.empty &&
      e.changes &&
      (!a || joinableUserEvent.test(a)) &&
      ((!g.selectionsAfter.length &&
        s - this.prevTime < c.newGroupDelay &&
        c.joinToEvent(h, isAdjacent(g.changes, e.changes))) ||
        a == 'input.type.compose')
        ? (d = updateBranch(
            d,
            d.length - 1,
            c.minDepth,
            new HistEvent(
              e.changes.compose(g.changes),
              conc(e.effects, g.effects),
              g.mapped,
              g.startSelection,
              none$1
            )
          ))
        : (d = updateBranch(d, d.length, c.minDepth, e)),
      new HistoryState(d, none$1, s, a)
    )
  }
  addSelection(e, s, a, c) {
    let h = this.done.length
      ? this.done[this.done.length - 1].selectionsAfter
      : none$1
    return h.length > 0 &&
      s - this.prevTime < c &&
      a == this.prevUserEvent &&
      a &&
      /^select($|\.)/.test(a) &&
      eqSelectionShape(h[h.length - 1], e)
      ? this
      : new HistoryState(addSelection(this.done, e), this.undone, s, a)
  }
  addMapping(e) {
    return new HistoryState(
      addMappingToBranch(this.done, e),
      addMappingToBranch(this.undone, e),
      this.prevTime,
      this.prevUserEvent
    )
  }
  pop(e, s, a) {
    let c = e == 0 ? this.done : this.undone
    if (c.length == 0) return null
    let h = c[c.length - 1]
    if (a && h.selectionsAfter.length)
      return s.update({
        selection: h.selectionsAfter[h.selectionsAfter.length - 1],
        annotations: fromHistory.of({ side: e, rest: popSelection(c) }),
        userEvent: e == 0 ? 'select.undo' : 'select.redo',
        scrollIntoView: !0
      })
    if (h.changes) {
      let d = c.length == 1 ? none$1 : c.slice(0, c.length - 1)
      return (
        h.mapped && (d = addMappingToBranch(d, h.mapped)),
        s.update({
          changes: h.changes,
          selection: h.startSelection,
          effects: h.effects,
          annotations: fromHistory.of({ side: e, rest: d }),
          filter: !1,
          userEvent: e == 0 ? 'undo' : 'redo',
          scrollIntoView: !0
        })
      )
    } else return null
  }
}
HistoryState.empty = new HistoryState(none$1, none$1)
const historyKeymap = [
  { key: 'Mod-z', run: undo, preventDefault: !0 },
  { key: 'Mod-y', mac: 'Mod-Shift-z', run: redo, preventDefault: !0 },
  { linux: 'Ctrl-Shift-z', run: redo, preventDefault: !0 },
  { key: 'Mod-u', run: undoSelection, preventDefault: !0 },
  { key: 'Alt-u', mac: 'Mod-Shift-u', run: redoSelection, preventDefault: !0 }
]
function updateSel(o, e) {
  return EditorSelection.create(o.ranges.map(e), o.mainIndex)
}
function setSel(o, e) {
  return o.update({ selection: e, scrollIntoView: !0, userEvent: 'select' })
}
function moveSel({ state: o, dispatch: e }, s) {
  let a = updateSel(o.selection, s)
  return a.eq(o.selection) ? !1 : (e(setSel(o, a)), !0)
}
function rangeEnd(o, e) {
  return EditorSelection.cursor(e ? o.to : o.from)
}
function cursorByChar(o, e) {
  return moveSel(o, (s) => (s.empty ? o.moveByChar(s, e) : rangeEnd(s, e)))
}
function ltrAtCursor(o) {
  return o.textDirectionAt(o.state.selection.main.head) == Direction.LTR
}
const cursorCharLeft = (o) => cursorByChar(o, !ltrAtCursor(o)),
  cursorCharRight = (o) => cursorByChar(o, ltrAtCursor(o))
function cursorByGroup(o, e) {
  return moveSel(o, (s) => (s.empty ? o.moveByGroup(s, e) : rangeEnd(s, e)))
}
const cursorGroupLeft = (o) => cursorByGroup(o, !ltrAtCursor(o)),
  cursorGroupRight = (o) => cursorByGroup(o, ltrAtCursor(o))
function interestingNode(o, e, s) {
  if (e.type.prop(s)) return !0
  let a = e.to - e.from
  return (
    (a && (a > 2 || /[^\s,.;:]/.test(o.sliceDoc(e.from, e.to)))) || e.firstChild
  )
}
function moveBySyntax(o, e, s) {
  let a = syntaxTree(o).resolveInner(e.head),
    c = s ? NodeProp.closedBy : NodeProp.openedBy
  for (let b = e.head; ; ) {
    let $ = s ? a.childAfter(b) : a.childBefore(b)
    if (!$) break
    interestingNode(o, $, c) ? (a = $) : (b = s ? $.to : $.from)
  }
  let h = a.type.prop(c),
    d,
    g
  return (
    h &&
    (d = s ? matchBrackets(o, a.from, 1) : matchBrackets(o, a.to, -1)) &&
    d.matched
      ? (g = s ? d.end.to : d.end.from)
      : (g = s ? a.to : a.from),
    EditorSelection.cursor(g, s ? -1 : 1)
  )
}
const cursorSyntaxLeft = (o) =>
    moveSel(o, (e) => moveBySyntax(o.state, e, !ltrAtCursor(o))),
  cursorSyntaxRight = (o) =>
    moveSel(o, (e) => moveBySyntax(o.state, e, ltrAtCursor(o)))
function cursorByLine(o, e) {
  return moveSel(o, (s) => {
    if (!s.empty) return rangeEnd(s, e)
    let a = o.moveVertically(s, e)
    return a.head != s.head ? a : o.moveToLineBoundary(s, e)
  })
}
const cursorLineUp = (o) => cursorByLine(o, !1),
  cursorLineDown = (o) => cursorByLine(o, !0)
function pageInfo(o) {
  let e = o.scrollDOM.clientHeight < o.scrollDOM.scrollHeight - 2,
    s = 0,
    a = 0,
    c
  if (e) {
    for (let h of o.state.facet(EditorView.scrollMargins)) {
      let d = h(o)
      d != null && d.top && (s = Math.max(d == null ? void 0 : d.top, s)),
        d != null &&
          d.bottom &&
          (a = Math.max(d == null ? void 0 : d.bottom, a))
    }
    c = o.scrollDOM.clientHeight - s - a
  } else c = (o.dom.ownerDocument.defaultView || window).innerHeight
  return {
    marginTop: s,
    marginBottom: a,
    selfScroll: e,
    height: Math.max(o.defaultLineHeight, c - 5)
  }
}
function cursorByPage(o, e) {
  let s = pageInfo(o),
    { state: a } = o,
    c = updateSel(a.selection, (d) =>
      d.empty ? o.moveVertically(d, e, s.height) : rangeEnd(d, e)
    )
  if (c.eq(a.selection)) return !1
  let h
  if (s.selfScroll) {
    let d = o.coordsAtPos(a.selection.main.head),
      g = o.scrollDOM.getBoundingClientRect(),
      b = g.top + s.marginTop,
      $ = g.bottom - s.marginBottom
    d &&
      d.top > b &&
      d.bottom < $ &&
      (h = EditorView.scrollIntoView(c.main.head, {
        y: 'start',
        yMargin: d.top - b
      }))
  }
  return o.dispatch(setSel(a, c), { effects: h }), !0
}
const cursorPageUp = (o) => cursorByPage(o, !1),
  cursorPageDown = (o) => cursorByPage(o, !0)
function moveByLineBoundary(o, e, s) {
  let a = o.lineBlockAt(e.head),
    c = o.moveToLineBoundary(e, s)
  if (
    (c.head == e.head &&
      c.head != (s ? a.to : a.from) &&
      (c = o.moveToLineBoundary(e, s, !1)),
    !s && c.head == a.from && a.length)
  ) {
    let h = /^\s*/.exec(
      o.state.sliceDoc(a.from, Math.min(a.from + 100, a.to))
    )[0].length
    h && e.head != a.from + h && (c = EditorSelection.cursor(a.from + h))
  }
  return c
}
const cursorLineBoundaryForward = (o) =>
    moveSel(o, (e) => moveByLineBoundary(o, e, !0)),
  cursorLineBoundaryBackward = (o) =>
    moveSel(o, (e) => moveByLineBoundary(o, e, !1)),
  cursorLineBoundaryLeft = (o) =>
    moveSel(o, (e) => moveByLineBoundary(o, e, !ltrAtCursor(o))),
  cursorLineBoundaryRight = (o) =>
    moveSel(o, (e) => moveByLineBoundary(o, e, ltrAtCursor(o))),
  cursorLineStart = (o) =>
    moveSel(o, (e) => EditorSelection.cursor(o.lineBlockAt(e.head).from, 1)),
  cursorLineEnd = (o) =>
    moveSel(o, (e) => EditorSelection.cursor(o.lineBlockAt(e.head).to, -1))
function toMatchingBracket(o, e, s) {
  let a = !1,
    c = updateSel(o.selection, (h) => {
      let d =
        matchBrackets(o, h.head, -1) ||
        matchBrackets(o, h.head, 1) ||
        (h.head > 0 && matchBrackets(o, h.head - 1, 1)) ||
        (h.head < o.doc.length && matchBrackets(o, h.head + 1, -1))
      if (!d || !d.end) return h
      a = !0
      let g = d.start.from == h.head ? d.end.to : d.end.from
      return s ? EditorSelection.range(h.anchor, g) : EditorSelection.cursor(g)
    })
  return a ? (e(setSel(o, c)), !0) : !1
}
const cursorMatchingBracket = ({ state: o, dispatch: e }) =>
  toMatchingBracket(o, e, !1)
function extendSel(o, e) {
  let s = updateSel(o.state.selection, (a) => {
    let c = e(a)
    return EditorSelection.range(
      a.anchor,
      c.head,
      c.goalColumn,
      c.bidiLevel || void 0
    )
  })
  return s.eq(o.state.selection) ? !1 : (o.dispatch(setSel(o.state, s)), !0)
}
function selectByChar(o, e) {
  return extendSel(o, (s) => o.moveByChar(s, e))
}
const selectCharLeft = (o) => selectByChar(o, !ltrAtCursor(o)),
  selectCharRight = (o) => selectByChar(o, ltrAtCursor(o))
function selectByGroup(o, e) {
  return extendSel(o, (s) => o.moveByGroup(s, e))
}
const selectGroupLeft = (o) => selectByGroup(o, !ltrAtCursor(o)),
  selectGroupRight = (o) => selectByGroup(o, ltrAtCursor(o)),
  selectSyntaxLeft = (o) =>
    extendSel(o, (e) => moveBySyntax(o.state, e, !ltrAtCursor(o))),
  selectSyntaxRight = (o) =>
    extendSel(o, (e) => moveBySyntax(o.state, e, ltrAtCursor(o)))
function selectByLine(o, e) {
  return extendSel(o, (s) => o.moveVertically(s, e))
}
const selectLineUp = (o) => selectByLine(o, !1),
  selectLineDown = (o) => selectByLine(o, !0)
function selectByPage(o, e) {
  return extendSel(o, (s) => o.moveVertically(s, e, pageInfo(o).height))
}
const selectPageUp = (o) => selectByPage(o, !1),
  selectPageDown = (o) => selectByPage(o, !0),
  selectLineBoundaryForward = (o) =>
    extendSel(o, (e) => moveByLineBoundary(o, e, !0)),
  selectLineBoundaryBackward = (o) =>
    extendSel(o, (e) => moveByLineBoundary(o, e, !1)),
  selectLineBoundaryLeft = (o) =>
    extendSel(o, (e) => moveByLineBoundary(o, e, !ltrAtCursor(o))),
  selectLineBoundaryRight = (o) =>
    extendSel(o, (e) => moveByLineBoundary(o, e, ltrAtCursor(o))),
  selectLineStart = (o) =>
    extendSel(o, (e) => EditorSelection.cursor(o.lineBlockAt(e.head).from)),
  selectLineEnd = (o) =>
    extendSel(o, (e) => EditorSelection.cursor(o.lineBlockAt(e.head).to)),
  cursorDocStart = ({ state: o, dispatch: e }) => (
    e(setSel(o, { anchor: 0 })), !0
  ),
  cursorDocEnd = ({ state: o, dispatch: e }) => (
    e(setSel(o, { anchor: o.doc.length })), !0
  ),
  selectDocStart = ({ state: o, dispatch: e }) => (
    e(setSel(o, { anchor: o.selection.main.anchor, head: 0 })), !0
  ),
  selectDocEnd = ({ state: o, dispatch: e }) => (
    e(setSel(o, { anchor: o.selection.main.anchor, head: o.doc.length })), !0
  ),
  selectAll = ({ state: o, dispatch: e }) => (
    e(
      o.update({
        selection: { anchor: 0, head: o.doc.length },
        userEvent: 'select'
      })
    ),
    !0
  ),
  selectLine = ({ state: o, dispatch: e }) => {
    let s = selectedLineBlocks(o).map(({ from: a, to: c }) =>
      EditorSelection.range(a, Math.min(c + 1, o.doc.length))
    )
    return (
      e(
        o.update({ selection: EditorSelection.create(s), userEvent: 'select' })
      ),
      !0
    )
  },
  selectParentSyntax = ({ state: o, dispatch: e }) => {
    let s = updateSel(o.selection, (a) => {
      var c
      let h = syntaxTree(o).resolveInner(a.head, 1)
      for (
        ;
        !(
          (h.from < a.from && h.to >= a.to) ||
          (h.to > a.to && h.from <= a.from) ||
          !(!((c = h.parent) === null || c === void 0) && c.parent)
        );

      )
        h = h.parent
      return EditorSelection.range(h.to, h.from)
    })
    return e(setSel(o, s)), !0
  },
  simplifySelection = ({ state: o, dispatch: e }) => {
    let s = o.selection,
      a = null
    return (
      s.ranges.length > 1
        ? (a = EditorSelection.create([s.main]))
        : s.main.empty ||
          (a = EditorSelection.create([EditorSelection.cursor(s.main.head)])),
      a ? (e(setSel(o, a)), !0) : !1
    )
  }
function deleteBy(o, e) {
  if (o.state.readOnly) return !1
  let s = 'delete.selection',
    { state: a } = o,
    c = a.changeByRange((h) => {
      let { from: d, to: g } = h
      if (d == g) {
        let b = e(d)
        b < d
          ? ((s = 'delete.backward'), (b = skipAtomic(o, b, !1)))
          : b > d && ((s = 'delete.forward'), (b = skipAtomic(o, b, !0))),
          (d = Math.min(d, b)),
          (g = Math.max(g, b))
      } else (d = skipAtomic(o, d, !1)), (g = skipAtomic(o, g, !0))
      return d == g
        ? { range: h }
        : { changes: { from: d, to: g }, range: EditorSelection.cursor(d) }
    })
  return c.changes.empty
    ? !1
    : (o.dispatch(
        a.update(c, {
          scrollIntoView: !0,
          userEvent: s,
          effects:
            s == 'delete.selection'
              ? EditorView.announce.of(a.phrase('Selection deleted'))
              : void 0
        })
      ),
      !0)
}
function skipAtomic(o, e, s) {
  if (o instanceof EditorView)
    for (let a of o.state.facet(EditorView.atomicRanges).map((c) => c(o)))
      a.between(e, e, (c, h) => {
        c < e && h > e && (e = s ? h : c)
      })
  return e
}
const deleteByChar = (o, e) =>
    deleteBy(o, (s) => {
      let { state: a } = o,
        c = a.doc.lineAt(s),
        h,
        d
      if (
        !e &&
        s > c.from &&
        s < c.from + 200 &&
        !/[^ \t]/.test((h = c.text.slice(0, s - c.from)))
      ) {
        if (h[h.length - 1] == '	') return s - 1
        let g = countColumn(h, a.tabSize),
          b = g % getIndentUnit(a) || getIndentUnit(a)
        for (let $ = 0; $ < b && h[h.length - 1 - $] == ' '; $++) s--
        d = s
      } else
        (d = findClusterBreak(c.text, s - c.from, e, e) + c.from),
          d == s && c.number != (e ? a.doc.lines : 1) && (d += e ? 1 : -1)
      return d
    }),
  deleteCharBackward = (o) => deleteByChar(o, !1),
  deleteCharForward = (o) => deleteByChar(o, !0),
  deleteByGroup = (o, e) =>
    deleteBy(o, (s) => {
      let a = s,
        { state: c } = o,
        h = c.doc.lineAt(a),
        d = c.charCategorizer(a)
      for (let g = null; ; ) {
        if (a == (e ? h.to : h.from)) {
          a == s && h.number != (e ? c.doc.lines : 1) && (a += e ? 1 : -1)
          break
        }
        let b = findClusterBreak(h.text, a - h.from, e) + h.from,
          $ = h.text.slice(Math.min(a, b) - h.from, Math.max(a, b) - h.from),
          _ = d($)
        if (g != null && _ != g) break
        ;($ != ' ' || a != s) && (g = _), (a = b)
      }
      return a
    }),
  deleteGroupBackward = (o) => deleteByGroup(o, !1),
  deleteGroupForward = (o) => deleteByGroup(o, !0),
  deleteToLineEnd = (o) =>
    deleteBy(o, (e) => {
      let s = o.lineBlockAt(e).to
      return e < s ? s : Math.min(o.state.doc.length, e + 1)
    }),
  deleteToLineStart = (o) =>
    deleteBy(o, (e) => {
      let s = o.lineBlockAt(e).from
      return e > s ? s : Math.max(0, e - 1)
    }),
  splitLine = ({ state: o, dispatch: e }) => {
    if (o.readOnly) return !1
    let s = o.changeByRange((a) => ({
      changes: { from: a.from, to: a.to, insert: Text.of(['', '']) },
      range: EditorSelection.cursor(a.from)
    }))
    return e(o.update(s, { scrollIntoView: !0, userEvent: 'input' })), !0
  },
  transposeChars = ({ state: o, dispatch: e }) => {
    if (o.readOnly) return !1
    let s = o.changeByRange((a) => {
      if (!a.empty || a.from == 0 || a.from == o.doc.length) return { range: a }
      let c = a.from,
        h = o.doc.lineAt(c),
        d =
          c == h.from
            ? c - 1
            : findClusterBreak(h.text, c - h.from, !1) + h.from,
        g =
          c == h.to ? c + 1 : findClusterBreak(h.text, c - h.from, !0) + h.from
      return {
        changes: {
          from: d,
          to: g,
          insert: o.doc.slice(c, g).append(o.doc.slice(d, c))
        },
        range: EditorSelection.cursor(g)
      }
    })
    return s.changes.empty
      ? !1
      : (e(o.update(s, { scrollIntoView: !0, userEvent: 'move.character' })),
        !0)
  }
function selectedLineBlocks(o) {
  let e = [],
    s = -1
  for (let a of o.selection.ranges) {
    let c = o.doc.lineAt(a.from),
      h = o.doc.lineAt(a.to)
    if (
      (!a.empty && a.to == h.from && (h = o.doc.lineAt(a.to - 1)),
      s >= c.number)
    ) {
      let d = e[e.length - 1]
      ;(d.to = h.to), d.ranges.push(a)
    } else e.push({ from: c.from, to: h.to, ranges: [a] })
    s = h.number + 1
  }
  return e
}
function moveLine(o, e, s) {
  if (o.readOnly) return !1
  let a = [],
    c = []
  for (let h of selectedLineBlocks(o)) {
    if (s ? h.to == o.doc.length : h.from == 0) continue
    let d = o.doc.lineAt(s ? h.to + 1 : h.from - 1),
      g = d.length + 1
    if (s) {
      a.push(
        { from: h.to, to: d.to },
        { from: h.from, insert: d.text + o.lineBreak }
      )
      for (let b of h.ranges)
        c.push(
          EditorSelection.range(
            Math.min(o.doc.length, b.anchor + g),
            Math.min(o.doc.length, b.head + g)
          )
        )
    } else {
      a.push(
        { from: d.from, to: h.from },
        { from: h.to, insert: o.lineBreak + d.text }
      )
      for (let b of h.ranges)
        c.push(EditorSelection.range(b.anchor - g, b.head - g))
    }
  }
  return a.length
    ? (e(
        o.update({
          changes: a,
          scrollIntoView: !0,
          selection: EditorSelection.create(c, o.selection.mainIndex),
          userEvent: 'move.line'
        })
      ),
      !0)
    : !1
}
const moveLineUp = ({ state: o, dispatch: e }) => moveLine(o, e, !1),
  moveLineDown = ({ state: o, dispatch: e }) => moveLine(o, e, !0)
function copyLine(o, e, s) {
  if (o.readOnly) return !1
  let a = []
  for (let c of selectedLineBlocks(o))
    s
      ? a.push({
          from: c.from,
          insert: o.doc.slice(c.from, c.to) + o.lineBreak
        })
      : a.push({ from: c.to, insert: o.lineBreak + o.doc.slice(c.from, c.to) })
  return (
    e(
      o.update({ changes: a, scrollIntoView: !0, userEvent: 'input.copyline' })
    ),
    !0
  )
}
const copyLineUp = ({ state: o, dispatch: e }) => copyLine(o, e, !1),
  copyLineDown = ({ state: o, dispatch: e }) => copyLine(o, e, !0),
  deleteLine = (o) => {
    if (o.state.readOnly) return !1
    let { state: e } = o,
      s = e.changes(
        selectedLineBlocks(e).map(
          ({ from: c, to: h }) => (
            c > 0 ? c-- : h < e.doc.length && h++, { from: c, to: h }
          )
        )
      ),
      a = updateSel(e.selection, (c) => o.moveVertically(c, !0)).map(s)
    return (
      o.dispatch({
        changes: s,
        selection: a,
        scrollIntoView: !0,
        userEvent: 'delete.line'
      }),
      !0
    )
  }
function isBetweenBrackets(o, e) {
  if (/\(\)|\[\]|\{\}/.test(o.sliceDoc(e - 1, e + 1))) return { from: e, to: e }
  let s = syntaxTree(o).resolveInner(e),
    a = s.childBefore(e),
    c = s.childAfter(e),
    h
  return a &&
    c &&
    a.to <= e &&
    c.from >= e &&
    (h = a.type.prop(NodeProp.closedBy)) &&
    h.indexOf(c.name) > -1 &&
    o.doc.lineAt(a.to).from == o.doc.lineAt(c.from).from &&
    !/\S/.test(o.sliceDoc(a.to, c.from))
    ? { from: a.to, to: c.from }
    : null
}
const insertNewlineAndIndent = newlineAndIndent(!1),
  insertBlankLine = newlineAndIndent(!0)
function newlineAndIndent(o) {
  return ({ state: e, dispatch: s }) => {
    if (e.readOnly) return !1
    let a = e.changeByRange((c) => {
      let { from: h, to: d } = c,
        g = e.doc.lineAt(h),
        b = !o && h == d && isBetweenBrackets(e, h)
      o && (h = d = (d <= g.to ? g : e.doc.lineAt(d)).to)
      let $ = new IndentContext(e, {
          simulateBreak: h,
          simulateDoubleBreak: !!b
        }),
        _ = getIndentation($, h)
      for (
        _ == null &&
        (_ = countColumn(/^\s*/.exec(e.doc.lineAt(h).text)[0], e.tabSize));
        d < g.to && /\s/.test(g.text[d - g.from]);

      )
        d++
      b
        ? ({ from: h, to: d } = b)
        : h > g.from &&
          h < g.from + 100 &&
          !/\S/.test(g.text.slice(0, h)) &&
          (h = g.from)
      let j = ['', indentString(e, _)]
      return (
        b && j.push(indentString(e, $.lineIndent(g.from, -1))),
        {
          changes: { from: h, to: d, insert: Text.of(j) },
          range: EditorSelection.cursor(h + 1 + j[1].length)
        }
      )
    })
    return s(e.update(a, { scrollIntoView: !0, userEvent: 'input' })), !0
  }
}
function changeBySelectedLine(o, e) {
  let s = -1
  return o.changeByRange((a) => {
    let c = []
    for (let d = a.from; d <= a.to; ) {
      let g = o.doc.lineAt(d)
      g.number > s &&
        (a.empty || a.to > g.from) &&
        (e(g, c, a), (s = g.number)),
        (d = g.to + 1)
    }
    let h = o.changes(c)
    return {
      changes: c,
      range: EditorSelection.range(h.mapPos(a.anchor, 1), h.mapPos(a.head, 1))
    }
  })
}
const indentSelection = ({ state: o, dispatch: e }) => {
    if (o.readOnly) return !1
    let s = Object.create(null),
      a = new IndentContext(o, {
        overrideIndentation: (h) => {
          let d = s[h]
          return d ?? -1
        }
      }),
      c = changeBySelectedLine(o, (h, d, g) => {
        let b = getIndentation(a, h.from)
        if (b == null) return
        ;/\S/.test(h.text) || (b = 0)
        let $ = /^\s*/.exec(h.text)[0],
          _ = indentString(o, b)
        ;($ != _ || g.from < h.from + $.length) &&
          ((s[h.from] = b),
          d.push({ from: h.from, to: h.from + $.length, insert: _ }))
      })
    return c.changes.empty || e(o.update(c, { userEvent: 'indent' })), !0
  },
  indentMore = ({ state: o, dispatch: e }) =>
    o.readOnly
      ? !1
      : (e(
          o.update(
            changeBySelectedLine(o, (s, a) => {
              a.push({ from: s.from, insert: o.facet(indentUnit) })
            }),
            { userEvent: 'input.indent' }
          )
        ),
        !0),
  indentLess = ({ state: o, dispatch: e }) =>
    o.readOnly
      ? !1
      : (e(
          o.update(
            changeBySelectedLine(o, (s, a) => {
              let c = /^\s*/.exec(s.text)[0]
              if (!c) return
              let h = countColumn(c, o.tabSize),
                d = 0,
                g = indentString(o, Math.max(0, h - getIndentUnit(o)))
              for (
                ;
                d < c.length &&
                d < g.length &&
                c.charCodeAt(d) == g.charCodeAt(d);

              )
                d++
              a.push({
                from: s.from + d,
                to: s.from + c.length,
                insert: g.slice(d)
              })
            }),
            { userEvent: 'delete.dedent' }
          )
        ),
        !0),
  emacsStyleKeymap = [
    {
      key: 'Ctrl-b',
      run: cursorCharLeft,
      shift: selectCharLeft,
      preventDefault: !0
    },
    { key: 'Ctrl-f', run: cursorCharRight, shift: selectCharRight },
    { key: 'Ctrl-p', run: cursorLineUp, shift: selectLineUp },
    { key: 'Ctrl-n', run: cursorLineDown, shift: selectLineDown },
    { key: 'Ctrl-a', run: cursorLineStart, shift: selectLineStart },
    { key: 'Ctrl-e', run: cursorLineEnd, shift: selectLineEnd },
    { key: 'Ctrl-d', run: deleteCharForward },
    { key: 'Ctrl-h', run: deleteCharBackward },
    { key: 'Ctrl-k', run: deleteToLineEnd },
    { key: 'Ctrl-Alt-h', run: deleteGroupBackward },
    { key: 'Ctrl-o', run: splitLine },
    { key: 'Ctrl-t', run: transposeChars },
    { key: 'Ctrl-v', run: cursorPageDown }
  ],
  standardKeymap = [
    {
      key: 'ArrowLeft',
      run: cursorCharLeft,
      shift: selectCharLeft,
      preventDefault: !0
    },
    {
      key: 'Mod-ArrowLeft',
      mac: 'Alt-ArrowLeft',
      run: cursorGroupLeft,
      shift: selectGroupLeft,
      preventDefault: !0
    },
    {
      mac: 'Cmd-ArrowLeft',
      run: cursorLineBoundaryLeft,
      shift: selectLineBoundaryLeft,
      preventDefault: !0
    },
    {
      key: 'ArrowRight',
      run: cursorCharRight,
      shift: selectCharRight,
      preventDefault: !0
    },
    {
      key: 'Mod-ArrowRight',
      mac: 'Alt-ArrowRight',
      run: cursorGroupRight,
      shift: selectGroupRight,
      preventDefault: !0
    },
    {
      mac: 'Cmd-ArrowRight',
      run: cursorLineBoundaryRight,
      shift: selectLineBoundaryRight,
      preventDefault: !0
    },
    {
      key: 'ArrowUp',
      run: cursorLineUp,
      shift: selectLineUp,
      preventDefault: !0
    },
    { mac: 'Cmd-ArrowUp', run: cursorDocStart, shift: selectDocStart },
    { mac: 'Ctrl-ArrowUp', run: cursorPageUp, shift: selectPageUp },
    {
      key: 'ArrowDown',
      run: cursorLineDown,
      shift: selectLineDown,
      preventDefault: !0
    },
    { mac: 'Cmd-ArrowDown', run: cursorDocEnd, shift: selectDocEnd },
    { mac: 'Ctrl-ArrowDown', run: cursorPageDown, shift: selectPageDown },
    { key: 'PageUp', run: cursorPageUp, shift: selectPageUp },
    { key: 'PageDown', run: cursorPageDown, shift: selectPageDown },
    {
      key: 'Home',
      run: cursorLineBoundaryBackward,
      shift: selectLineBoundaryBackward,
      preventDefault: !0
    },
    { key: 'Mod-Home', run: cursorDocStart, shift: selectDocStart },
    {
      key: 'End',
      run: cursorLineBoundaryForward,
      shift: selectLineBoundaryForward,
      preventDefault: !0
    },
    { key: 'Mod-End', run: cursorDocEnd, shift: selectDocEnd },
    { key: 'Enter', run: insertNewlineAndIndent },
    { key: 'Mod-a', run: selectAll },
    { key: 'Backspace', run: deleteCharBackward, shift: deleteCharBackward },
    { key: 'Delete', run: deleteCharForward },
    { key: 'Mod-Backspace', mac: 'Alt-Backspace', run: deleteGroupBackward },
    { key: 'Mod-Delete', mac: 'Alt-Delete', run: deleteGroupForward },
    { mac: 'Mod-Backspace', run: deleteToLineStart },
    { mac: 'Mod-Delete', run: deleteToLineEnd }
  ].concat(
    emacsStyleKeymap.map((o) => ({ mac: o.key, run: o.run, shift: o.shift }))
  ),
  defaultKeymap = [
    {
      key: 'Alt-ArrowLeft',
      mac: 'Ctrl-ArrowLeft',
      run: cursorSyntaxLeft,
      shift: selectSyntaxLeft
    },
    {
      key: 'Alt-ArrowRight',
      mac: 'Ctrl-ArrowRight',
      run: cursorSyntaxRight,
      shift: selectSyntaxRight
    },
    { key: 'Alt-ArrowUp', run: moveLineUp },
    { key: 'Shift-Alt-ArrowUp', run: copyLineUp },
    { key: 'Alt-ArrowDown', run: moveLineDown },
    { key: 'Shift-Alt-ArrowDown', run: copyLineDown },
    { key: 'Escape', run: simplifySelection },
    { key: 'Mod-Enter', run: insertBlankLine },
    { key: 'Alt-l', mac: 'Ctrl-l', run: selectLine },
    { key: 'Mod-i', run: selectParentSyntax, preventDefault: !0 },
    { key: 'Mod-[', run: indentLess },
    { key: 'Mod-]', run: indentMore },
    { key: 'Mod-Alt-\\', run: indentSelection },
    { key: 'Shift-Mod-k', run: deleteLine },
    { key: 'Shift-Mod-\\', run: cursorMatchingBracket },
    { key: 'Mod-/', run: toggleComment },
    { key: 'Alt-A', run: toggleBlockComment }
  ].concat(standardKeymap),
  indentWithTab = { key: 'Tab', run: indentMore, shift: indentLess }
function crelt() {
  var o = arguments[0]
  typeof o == 'string' && (o = document.createElement(o))
  var e = 1,
    s = arguments[1]
  if (s && typeof s == 'object' && s.nodeType == null && !Array.isArray(s)) {
    for (var a in s)
      if (Object.prototype.hasOwnProperty.call(s, a)) {
        var c = s[a]
        typeof c == 'string' ? o.setAttribute(a, c) : c != null && (o[a] = c)
      }
    e++
  }
  for (; e < arguments.length; e++) add(o, arguments[e])
  return o
}
function add(o, e) {
  if (typeof e == 'string') o.appendChild(document.createTextNode(e))
  else if (e != null)
    if (e.nodeType != null) o.appendChild(e)
    else if (Array.isArray(e)) for (var s = 0; s < e.length; s++) add(o, e[s])
    else throw new RangeError('Unsupported child node: ' + e)
}
const basicNormalize =
  typeof String.prototype.normalize == 'function'
    ? (o) => o.normalize('NFKD')
    : (o) => o
class SearchCursor {
  constructor(e, s, a = 0, c = e.length, h, d) {
    ;(this.test = d),
      (this.value = { from: 0, to: 0 }),
      (this.done = !1),
      (this.matches = []),
      (this.buffer = ''),
      (this.bufferPos = 0),
      (this.iter = e.iterRange(a, c)),
      (this.bufferStart = a),
      (this.normalize = h ? (g) => h(basicNormalize(g)) : basicNormalize),
      (this.query = this.normalize(s))
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (
        ((this.bufferStart += this.buffer.length),
        this.iter.next(),
        this.iter.done)
      )
        return -1
      ;(this.bufferPos = 0), (this.buffer = this.iter.value)
    }
    return codePointAt(this.buffer, this.bufferPos)
  }
  next() {
    for (; this.matches.length; ) this.matches.pop()
    return this.nextOverlapping()
  }
  nextOverlapping() {
    for (;;) {
      let e = this.peek()
      if (e < 0) return (this.done = !0), this
      let s = fromCodePoint(e),
        a = this.bufferStart + this.bufferPos
      this.bufferPos += codePointSize(e)
      let c = this.normalize(s)
      for (let h = 0, d = a; ; h++) {
        let g = c.charCodeAt(h),
          b = this.match(g, d)
        if (h == c.length - 1) {
          if (b) return (this.value = b), this
          break
        }
        d == a && h < s.length && s.charCodeAt(h) == g && d++
      }
    }
  }
  match(e, s) {
    let a = null
    for (let c = 0; c < this.matches.length; c += 2) {
      let h = this.matches[c],
        d = !1
      this.query.charCodeAt(h) == e &&
        (h == this.query.length - 1
          ? (a = { from: this.matches[c + 1], to: s + 1 })
          : (this.matches[c]++, (d = !0))),
        d || (this.matches.splice(c, 2), (c -= 2))
    }
    return (
      this.query.charCodeAt(0) == e &&
        (this.query.length == 1
          ? (a = { from: s, to: s + 1 })
          : this.matches.push(1, s)),
      a &&
        this.test &&
        !this.test(a.from, a.to, this.buffer, this.bufferPos) &&
        (a = null),
      a
    )
  }
}
typeof Symbol < 'u' &&
  (SearchCursor.prototype[Symbol.iterator] = function () {
    return this
  })
const empty = { from: -1, to: -1, match: /.*/.exec('') },
  baseFlags = 'gm' + (/x/.unicode == null ? '' : 'u')
class RegExpCursor {
  constructor(e, s, a, c = 0, h = e.length) {
    if (
      ((this.text = e),
      (this.to = h),
      (this.curLine = ''),
      (this.done = !1),
      (this.value = empty),
      /\\[sWDnr]|\n|\r|\[\^/.test(s))
    )
      return new MultilineRegExpCursor(e, s, a, c, h)
    ;(this.re = new RegExp(
      s,
      baseFlags + (a != null && a.ignoreCase ? 'i' : '')
    )),
      (this.test = a == null ? void 0 : a.test),
      (this.iter = e.iter())
    let d = e.lineAt(c)
    ;(this.curLineStart = d.from),
      (this.matchPos = toCharEnd(e, c)),
      this.getLine(this.curLineStart)
  }
  getLine(e) {
    this.iter.next(e),
      this.iter.lineBreak
        ? (this.curLine = '')
        : ((this.curLine = this.iter.value),
          this.curLineStart + this.curLine.length > this.to &&
            (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)),
          this.iter.next())
  }
  nextLine() {
    ;(this.curLineStart = this.curLineStart + this.curLine.length + 1),
      this.curLineStart > this.to ? (this.curLine = '') : this.getLine(0)
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e
      let s = this.matchPos <= this.to && this.re.exec(this.curLine)
      if (s) {
        let a = this.curLineStart + s.index,
          c = a + s[0].length
        if (
          ((this.matchPos = toCharEnd(this.text, c + (a == c ? 1 : 0))),
          a == this.curLineStart + this.curLine.length && this.nextLine(),
          (a < c || a > this.value.to) && (!this.test || this.test(a, c, s)))
        )
          return (this.value = { from: a, to: c, match: s }), this
        e = this.matchPos - this.curLineStart
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), (e = 0)
      else return (this.done = !0), this
    }
  }
}
const flattened = new WeakMap()
class FlattenedDoc {
  constructor(e, s) {
    ;(this.from = e), (this.text = s)
  }
  get to() {
    return this.from + this.text.length
  }
  static get(e, s, a) {
    let c = flattened.get(e)
    if (!c || c.from >= a || c.to <= s) {
      let g = new FlattenedDoc(s, e.sliceString(s, a))
      return flattened.set(e, g), g
    }
    if (c.from == s && c.to == a) return c
    let { text: h, from: d } = c
    return (
      d > s && ((h = e.sliceString(s, d) + h), (d = s)),
      c.to < a && (h += e.sliceString(c.to, a)),
      flattened.set(e, new FlattenedDoc(d, h)),
      new FlattenedDoc(s, h.slice(s - d, a - d))
    )
  }
}
class MultilineRegExpCursor {
  constructor(e, s, a, c, h) {
    ;(this.text = e),
      (this.to = h),
      (this.done = !1),
      (this.value = empty),
      (this.matchPos = toCharEnd(e, c)),
      (this.re = new RegExp(
        s,
        baseFlags + (a != null && a.ignoreCase ? 'i' : '')
      )),
      (this.test = a == null ? void 0 : a.test),
      (this.flat = FlattenedDoc.get(e, c, this.chunkEnd(c + 5e3)))
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to
  }
  next() {
    for (;;) {
      let e = (this.re.lastIndex = this.matchPos - this.flat.from),
        s = this.re.exec(this.flat.text)
      if (
        (s &&
          !s[0] &&
          s.index == e &&
          ((this.re.lastIndex = e + 1), (s = this.re.exec(this.flat.text))),
        s)
      ) {
        let a = this.flat.from + s.index,
          c = a + s[0].length
        if (
          (this.flat.to >= this.to ||
            s.index + s[0].length <= this.flat.text.length - 10) &&
          (!this.test || this.test(a, c, s))
        )
          return (
            (this.value = { from: a, to: c, match: s }),
            (this.matchPos = toCharEnd(this.text, c + (a == c ? 1 : 0))),
            this
          )
      }
      if (this.flat.to == this.to) return (this.done = !0), this
      this.flat = FlattenedDoc.get(
        this.text,
        this.flat.from,
        this.chunkEnd(this.flat.from + this.flat.text.length * 2)
      )
    }
  }
}
typeof Symbol < 'u' &&
  (RegExpCursor.prototype[Symbol.iterator] = MultilineRegExpCursor.prototype[
    Symbol.iterator
  ] =
    function () {
      return this
    })
function validRegExp(o) {
  try {
    return new RegExp(o, baseFlags), !0
  } catch {
    return !1
  }
}
function toCharEnd(o, e) {
  if (e >= o.length) return e
  let s = o.lineAt(e),
    a
  for (
    ;
    e < s.to && (a = s.text.charCodeAt(e - s.from)) >= 56320 && a < 57344;

  )
    e++
  return e
}
function createLineDialog(o) {
  let e = String(o.state.doc.lineAt(o.state.selection.main.head).number),
    s = crelt('input', { class: 'cm-textfield', name: 'line', value: e }),
    a = crelt(
      'form',
      {
        class: 'cm-gotoLine',
        onkeydown: (h) => {
          h.keyCode == 27
            ? (h.preventDefault(),
              o.dispatch({ effects: dialogEffect.of(!1) }),
              o.focus())
            : h.keyCode == 13 && (h.preventDefault(), c())
        },
        onsubmit: (h) => {
          h.preventDefault(), c()
        }
      },
      crelt('label', o.state.phrase('Go to line'), ': ', s),
      ' ',
      crelt(
        'button',
        { class: 'cm-button', type: 'submit' },
        o.state.phrase('go')
      )
    )
  function c() {
    let h = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(s.value)
    if (!h) return
    let { state: d } = o,
      g = d.doc.lineAt(d.selection.main.head),
      [, b, $, _, j] = h,
      _e = _ ? +_.slice(1) : 0,
      et = $ ? +$ : g.number
    if ($ && j) {
      let st = et / 100
      b && (st = st * (b == '-' ? -1 : 1) + g.number / d.doc.lines),
        (et = Math.round(d.doc.lines * st))
    } else $ && b && (et = et * (b == '-' ? -1 : 1) + g.number)
    let tt = d.doc.line(Math.max(1, Math.min(d.doc.lines, et))),
      rt = EditorSelection.cursor(
        tt.from + Math.max(0, Math.min(_e, tt.length))
      )
    o.dispatch({
      effects: [
        dialogEffect.of(!1),
        EditorView.scrollIntoView(rt.from, { y: 'center' })
      ],
      selection: rt
    }),
      o.focus()
  }
  return { dom: a }
}
const dialogEffect = StateEffect.define(),
  dialogField = StateField.define({
    create() {
      return !0
    },
    update(o, e) {
      for (let s of e.effects) s.is(dialogEffect) && (o = s.value)
      return o
    },
    provide: (o) => showPanel.from(o, (e) => (e ? createLineDialog : null))
  }),
  gotoLine = (o) => {
    let e = getPanel(o, createLineDialog)
    if (!e) {
      let s = [dialogEffect.of(!0)]
      o.state.field(dialogField, !1) == null &&
        s.push(StateEffect.appendConfig.of([dialogField, baseTheme$1$1])),
        o.dispatch({ effects: s }),
        (e = getPanel(o, createLineDialog))
    }
    return e && e.dom.querySelector('input').select(), !0
  },
  baseTheme$1$1 = EditorView.baseTheme({
    '.cm-panel.cm-gotoLine': {
      padding: '2px 6px 4px',
      '& label': { fontSize: '80%' }
    }
  }),
  defaultHighlightOptions = {
    highlightWordAroundCursor: !1,
    minSelectionLength: 1,
    maxMatches: 100,
    wholeWords: !1
  },
  highlightConfig = Facet.define({
    combine(o) {
      return combineConfig(o, defaultHighlightOptions, {
        highlightWordAroundCursor: (e, s) => e || s,
        minSelectionLength: Math.min,
        maxMatches: Math.min
      })
    }
  })
function highlightSelectionMatches(o) {
  let e = [defaultTheme, matchHighlighter]
  return o && e.push(highlightConfig.of(o)), e
}
const matchDeco = Decoration.mark({ class: 'cm-selectionMatch' }),
  mainMatchDeco = Decoration.mark({
    class: 'cm-selectionMatch cm-selectionMatch-main'
  })
function insideWordBoundaries(o, e, s, a) {
  return (
    (s == 0 || o(e.sliceDoc(s - 1, s)) != CharCategory.Word) &&
    (a == e.doc.length || o(e.sliceDoc(a, a + 1)) != CharCategory.Word)
  )
}
function insideWord(o, e, s, a) {
  return (
    o(e.sliceDoc(s, s + 1)) == CharCategory.Word &&
    o(e.sliceDoc(a - 1, a)) == CharCategory.Word
  )
}
const matchHighlighter = ViewPlugin.fromClass(
    class {
      constructor(o) {
        this.decorations = this.getDeco(o)
      }
      update(o) {
        ;(o.selectionSet || o.docChanged || o.viewportChanged) &&
          (this.decorations = this.getDeco(o.view))
      }
      getDeco(o) {
        let e = o.state.facet(highlightConfig),
          { state: s } = o,
          a = s.selection
        if (a.ranges.length > 1) return Decoration.none
        let c = a.main,
          h,
          d = null
        if (c.empty) {
          if (!e.highlightWordAroundCursor) return Decoration.none
          let b = s.wordAt(c.head)
          if (!b) return Decoration.none
          ;(d = s.charCategorizer(c.head)), (h = s.sliceDoc(b.from, b.to))
        } else {
          let b = c.to - c.from
          if (b < e.minSelectionLength || b > 200) return Decoration.none
          if (e.wholeWords) {
            if (
              ((h = s.sliceDoc(c.from, c.to)),
              (d = s.charCategorizer(c.head)),
              !(
                insideWordBoundaries(d, s, c.from, c.to) &&
                insideWord(d, s, c.from, c.to)
              ))
            )
              return Decoration.none
          } else if (((h = s.sliceDoc(c.from, c.to).trim()), !h))
            return Decoration.none
        }
        let g = []
        for (let b of o.visibleRanges) {
          let $ = new SearchCursor(s.doc, h, b.from, b.to)
          for (; !$.next().done; ) {
            let { from: _, to: j } = $.value
            if (
              (!d || insideWordBoundaries(d, s, _, j)) &&
              (c.empty && _ <= c.from && j >= c.to
                ? g.push(mainMatchDeco.range(_, j))
                : (_ >= c.to || j <= c.from) && g.push(matchDeco.range(_, j)),
              g.length > e.maxMatches)
            )
              return Decoration.none
          }
        }
        return Decoration.set(g)
      }
    },
    { decorations: (o) => o.decorations }
  ),
  defaultTheme = EditorView.baseTheme({
    '.cm-selectionMatch': { backgroundColor: '#99ff7780' },
    '.cm-searchMatch .cm-selectionMatch': { backgroundColor: 'transparent' }
  }),
  selectWord = ({ state: o, dispatch: e }) => {
    let { selection: s } = o,
      a = EditorSelection.create(
        s.ranges.map((c) => o.wordAt(c.head) || EditorSelection.cursor(c.head)),
        s.mainIndex
      )
    return a.eq(s) ? !1 : (e(o.update({ selection: a })), !0)
  }
function findNextOccurrence(o, e) {
  let { main: s, ranges: a } = o.selection,
    c = o.wordAt(s.head),
    h = c && c.from == s.from && c.to == s.to
  for (let d = !1, g = new SearchCursor(o.doc, e, a[a.length - 1].to); ; )
    if ((g.next(), g.done)) {
      if (d) return null
      ;(g = new SearchCursor(
        o.doc,
        e,
        0,
        Math.max(0, a[a.length - 1].from - 1)
      )),
        (d = !0)
    } else {
      if (d && a.some((b) => b.from == g.value.from)) continue
      if (h) {
        let b = o.wordAt(g.value.from)
        if (!b || b.from != g.value.from || b.to != g.value.to) continue
      }
      return g.value
    }
}
const selectNextOccurrence = ({ state: o, dispatch: e }) => {
    let { ranges: s } = o.selection
    if (s.some((h) => h.from === h.to))
      return selectWord({ state: o, dispatch: e })
    let a = o.sliceDoc(s[0].from, s[0].to)
    if (o.selection.ranges.some((h) => o.sliceDoc(h.from, h.to) != a)) return !1
    let c = findNextOccurrence(o, a)
    return c
      ? (e(
          o.update({
            selection: o.selection.addRange(
              EditorSelection.range(c.from, c.to),
              !1
            ),
            effects: EditorView.scrollIntoView(c.to)
          })
        ),
        !0)
      : !1
  },
  searchConfigFacet = Facet.define({
    combine(o) {
      return combineConfig(o, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: (e) => new SearchPanel(e),
        scrollToMatch: (e) => EditorView.scrollIntoView(e)
      })
    }
  })
class SearchQuery {
  constructor(e) {
    ;(this.search = e.search),
      (this.caseSensitive = !!e.caseSensitive),
      (this.literal = !!e.literal),
      (this.regexp = !!e.regexp),
      (this.replace = e.replace || ''),
      (this.valid =
        !!this.search && (!this.regexp || validRegExp(this.search))),
      (this.unquoted = this.unquote(this.search)),
      (this.wholeWord = !!e.wholeWord)
  }
  unquote(e) {
    return this.literal
      ? e
      : e.replace(/\\([nrt\\])/g, (s, a) =>
          a == 'n'
            ? `
`
            : a == 'r'
            ? '\r'
            : a == 't'
            ? '	'
            : '\\'
        )
  }
  eq(e) {
    return (
      this.search == e.search &&
      this.replace == e.replace &&
      this.caseSensitive == e.caseSensitive &&
      this.regexp == e.regexp &&
      this.wholeWord == e.wholeWord
    )
  }
  create() {
    return this.regexp ? new RegExpQuery(this) : new StringQuery(this)
  }
  getCursor(e, s = 0, a) {
    let c = e.doc ? e : EditorState.create({ doc: e })
    return (
      a == null && (a = c.doc.length),
      this.regexp ? regexpCursor(this, c, s, a) : stringCursor(this, c, s, a)
    )
  }
}
class QueryType {
  constructor(e) {
    this.spec = e
  }
}
function stringCursor(o, e, s, a) {
  return new SearchCursor(
    e.doc,
    o.unquoted,
    s,
    a,
    o.caseSensitive ? void 0 : (c) => c.toLowerCase(),
    o.wholeWord
      ? stringWordTest(e.doc, e.charCategorizer(e.selection.main.head))
      : void 0
  )
}
function stringWordTest(o, e) {
  return (s, a, c, h) => (
    (h > s || h + c.length < a) &&
      ((h = Math.max(0, s - 2)),
      (c = o.sliceString(h, Math.min(o.length, a + 2)))),
    (e(charBefore(c, s - h)) != CharCategory.Word ||
      e(charAfter(c, s - h)) != CharCategory.Word) &&
      (e(charAfter(c, a - h)) != CharCategory.Word ||
        e(charBefore(c, a - h)) != CharCategory.Word)
  )
}
class StringQuery extends QueryType {
  constructor(e) {
    super(e)
  }
  nextMatch(e, s, a) {
    let c = stringCursor(this.spec, e, a, e.doc.length).nextOverlapping()
    return (
      c.done && (c = stringCursor(this.spec, e, 0, s).nextOverlapping()),
      c.done ? null : c.value
    )
  }
  prevMatchInRange(e, s, a) {
    for (let c = a; ; ) {
      let h = Math.max(s, c - 1e4 - this.spec.unquoted.length),
        d = stringCursor(this.spec, e, h, c),
        g = null
      for (; !d.nextOverlapping().done; ) g = d.value
      if (g) return g
      if (h == s) return null
      c -= 1e4
    }
  }
  prevMatch(e, s, a) {
    return (
      this.prevMatchInRange(e, 0, s) ||
      this.prevMatchInRange(e, a, e.doc.length)
    )
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace)
  }
  matchAll(e, s) {
    let a = stringCursor(this.spec, e, 0, e.doc.length),
      c = []
    for (; !a.next().done; ) {
      if (c.length >= s) return null
      c.push(a.value)
    }
    return c
  }
  highlight(e, s, a, c) {
    let h = stringCursor(
      this.spec,
      e,
      Math.max(0, s - this.spec.unquoted.length),
      Math.min(a + this.spec.unquoted.length, e.doc.length)
    )
    for (; !h.next().done; ) c(h.value.from, h.value.to)
  }
}
function regexpCursor(o, e, s, a) {
  return new RegExpCursor(
    e.doc,
    o.search,
    {
      ignoreCase: !o.caseSensitive,
      test: o.wholeWord
        ? regexpWordTest(e.charCategorizer(e.selection.main.head))
        : void 0
    },
    s,
    a
  )
}
function charBefore(o, e) {
  return o.slice(findClusterBreak(o, e, !1), e)
}
function charAfter(o, e) {
  return o.slice(e, findClusterBreak(o, e))
}
function regexpWordTest(o) {
  return (e, s, a) =>
    !a[0].length ||
    ((o(charBefore(a.input, a.index)) != CharCategory.Word ||
      o(charAfter(a.input, a.index)) != CharCategory.Word) &&
      (o(charAfter(a.input, a.index + a[0].length)) != CharCategory.Word ||
        o(charBefore(a.input, a.index + a[0].length)) != CharCategory.Word))
}
class RegExpQuery extends QueryType {
  nextMatch(e, s, a) {
    let c = regexpCursor(this.spec, e, a, e.doc.length).next()
    return (
      c.done && (c = regexpCursor(this.spec, e, 0, s).next()),
      c.done ? null : c.value
    )
  }
  prevMatchInRange(e, s, a) {
    for (let c = 1; ; c++) {
      let h = Math.max(s, a - c * 1e4),
        d = regexpCursor(this.spec, e, h, a),
        g = null
      for (; !d.next().done; ) g = d.value
      if (g && (h == s || g.from > h + 10)) return g
      if (h == s) return null
    }
  }
  prevMatch(e, s, a) {
    return (
      this.prevMatchInRange(e, 0, s) ||
      this.prevMatchInRange(e, a, e.doc.length)
    )
  }
  getReplacement(e) {
    return this.spec.unquote(
      this.spec.replace.replace(/\$([$&\d+])/g, (s, a) =>
        a == '$'
          ? '$'
          : a == '&'
          ? e.match[0]
          : a != '0' && +a < e.match.length
          ? e.match[a]
          : s
      )
    )
  }
  matchAll(e, s) {
    let a = regexpCursor(this.spec, e, 0, e.doc.length),
      c = []
    for (; !a.next().done; ) {
      if (c.length >= s) return null
      c.push(a.value)
    }
    return c
  }
  highlight(e, s, a, c) {
    let h = regexpCursor(
      this.spec,
      e,
      Math.max(0, s - 250),
      Math.min(a + 250, e.doc.length)
    )
    for (; !h.next().done; ) c(h.value.from, h.value.to)
  }
}
const setSearchQuery = StateEffect.define(),
  togglePanel$1 = StateEffect.define(),
  searchState = StateField.define({
    create(o) {
      return new SearchState(defaultQuery(o).create(), null)
    },
    update(o, e) {
      for (let s of e.effects)
        s.is(setSearchQuery)
          ? (o = new SearchState(s.value.create(), o.panel))
          : s.is(togglePanel$1) &&
            (o = new SearchState(o.query, s.value ? createSearchPanel : null))
      return o
    },
    provide: (o) => showPanel.from(o, (e) => e.panel)
  })
class SearchState {
  constructor(e, s) {
    ;(this.query = e), (this.panel = s)
  }
}
const matchMark = Decoration.mark({ class: 'cm-searchMatch' }),
  selectedMatchMark = Decoration.mark({
    class: 'cm-searchMatch cm-searchMatch-selected'
  }),
  searchHighlighter = ViewPlugin.fromClass(
    class {
      constructor(o) {
        ;(this.view = o),
          (this.decorations = this.highlight(o.state.field(searchState)))
      }
      update(o) {
        let e = o.state.field(searchState)
        ;(e != o.startState.field(searchState) ||
          o.docChanged ||
          o.selectionSet ||
          o.viewportChanged) &&
          (this.decorations = this.highlight(e))
      }
      highlight({ query: o, panel: e }) {
        if (!e || !o.spec.valid) return Decoration.none
        let { view: s } = this,
          a = new RangeSetBuilder()
        for (let c = 0, h = s.visibleRanges, d = h.length; c < d; c++) {
          let { from: g, to: b } = h[c]
          for (; c < d - 1 && b > h[c + 1].from - 2 * 250; ) b = h[++c].to
          o.highlight(s.state, g, b, ($, _) => {
            let j = s.state.selection.ranges.some(
              (_e) => _e.from == $ && _e.to == _
            )
            a.add($, _, j ? selectedMatchMark : matchMark)
          })
        }
        return a.finish()
      }
    },
    { decorations: (o) => o.decorations }
  )
function searchCommand(o) {
  return (e) => {
    let s = e.state.field(searchState, !1)
    return s && s.query.spec.valid ? o(e, s) : openSearchPanel(e)
  }
}
const findNext = searchCommand((o, { query: e }) => {
    let { to: s } = o.state.selection.main,
      a = e.nextMatch(o.state, s, s)
    if (!a) return !1
    let c = EditorSelection.single(a.from, a.to),
      h = o.state.facet(searchConfigFacet)
    return (
      o.dispatch({
        selection: c,
        effects: [announceMatch(o, a), h.scrollToMatch(c.main, o)],
        userEvent: 'select.search'
      }),
      selectSearchInput(o),
      !0
    )
  }),
  findPrevious = searchCommand((o, { query: e }) => {
    let { state: s } = o,
      { from: a } = s.selection.main,
      c = e.prevMatch(s, a, a)
    if (!c) return !1
    let h = EditorSelection.single(c.from, c.to),
      d = o.state.facet(searchConfigFacet)
    return (
      o.dispatch({
        selection: h,
        effects: [announceMatch(o, c), d.scrollToMatch(h.main, o)],
        userEvent: 'select.search'
      }),
      selectSearchInput(o),
      !0
    )
  }),
  selectMatches = searchCommand((o, { query: e }) => {
    let s = e.matchAll(o.state, 1e3)
    return !s || !s.length
      ? !1
      : (o.dispatch({
          selection: EditorSelection.create(
            s.map((a) => EditorSelection.range(a.from, a.to))
          ),
          userEvent: 'select.search.matches'
        }),
        !0)
  }),
  selectSelectionMatches = ({ state: o, dispatch: e }) => {
    let s = o.selection
    if (s.ranges.length > 1 || s.main.empty) return !1
    let { from: a, to: c } = s.main,
      h = [],
      d = 0
    for (let g = new SearchCursor(o.doc, o.sliceDoc(a, c)); !g.next().done; ) {
      if (h.length > 1e3) return !1
      g.value.from == a && (d = h.length),
        h.push(EditorSelection.range(g.value.from, g.value.to))
    }
    return (
      e(
        o.update({
          selection: EditorSelection.create(h, d),
          userEvent: 'select.search.matches'
        })
      ),
      !0
    )
  },
  replaceNext = searchCommand((o, { query: e }) => {
    let { state: s } = o,
      { from: a, to: c } = s.selection.main
    if (s.readOnly) return !1
    let h = e.nextMatch(s, a, a)
    if (!h) return !1
    let d = [],
      g,
      b,
      $ = []
    if (
      (h.from == a &&
        h.to == c &&
        ((b = s.toText(e.getReplacement(h))),
        d.push({ from: h.from, to: h.to, insert: b }),
        (h = e.nextMatch(s, h.from, h.to)),
        $.push(
          EditorView.announce.of(
            s.phrase('replaced match on line $', s.doc.lineAt(a).number) + '.'
          )
        )),
      h)
    ) {
      let _ = d.length == 0 || d[0].from >= h.to ? 0 : h.to - h.from - b.length
      ;(g = EditorSelection.single(h.from - _, h.to - _)),
        $.push(announceMatch(o, h)),
        $.push(s.facet(searchConfigFacet).scrollToMatch(g.main, o))
    }
    return (
      o.dispatch({
        changes: d,
        selection: g,
        effects: $,
        userEvent: 'input.replace'
      }),
      !0
    )
  }),
  replaceAll = searchCommand((o, { query: e }) => {
    if (o.state.readOnly) return !1
    let s = e.matchAll(o.state, 1e9).map((c) => {
      let { from: h, to: d } = c
      return { from: h, to: d, insert: e.getReplacement(c) }
    })
    if (!s.length) return !1
    let a = o.state.phrase('replaced $ matches', s.length) + '.'
    return (
      o.dispatch({
        changes: s,
        effects: EditorView.announce.of(a),
        userEvent: 'input.replace.all'
      }),
      !0
    )
  })
function createSearchPanel(o) {
  return o.state.facet(searchConfigFacet).createPanel(o)
}
function defaultQuery(o, e) {
  var s, a, c, h, d
  let g = o.selection.main,
    b = g.empty || g.to > g.from + 100 ? '' : o.sliceDoc(g.from, g.to)
  if (e && !b) return e
  let $ = o.facet(searchConfigFacet)
  return new SearchQuery({
    search: (
      (s = e == null ? void 0 : e.literal) !== null && s !== void 0
        ? s
        : $.literal
    )
      ? b
      : b.replace(/\n/g, '\\n'),
    caseSensitive:
      (a = e == null ? void 0 : e.caseSensitive) !== null && a !== void 0
        ? a
        : $.caseSensitive,
    literal:
      (c = e == null ? void 0 : e.literal) !== null && c !== void 0
        ? c
        : $.literal,
    regexp:
      (h = e == null ? void 0 : e.regexp) !== null && h !== void 0
        ? h
        : $.regexp,
    wholeWord:
      (d = e == null ? void 0 : e.wholeWord) !== null && d !== void 0
        ? d
        : $.wholeWord
  })
}
function getSearchInput(o) {
  let e = getPanel(o, createSearchPanel)
  return e && e.dom.querySelector('[main-field]')
}
function selectSearchInput(o) {
  let e = getSearchInput(o)
  e && e == o.root.activeElement && e.select()
}
const openSearchPanel = (o) => {
    let e = o.state.field(searchState, !1)
    if (e && e.panel) {
      let s = getSearchInput(o)
      if (s && s != o.root.activeElement) {
        let a = defaultQuery(o.state, e.query.spec)
        a.valid && o.dispatch({ effects: setSearchQuery.of(a) }),
          s.focus(),
          s.select()
      }
    } else
      o.dispatch({
        effects: [
          togglePanel$1.of(!0),
          e
            ? setSearchQuery.of(defaultQuery(o.state, e.query.spec))
            : StateEffect.appendConfig.of(searchExtensions)
        ]
      })
    return !0
  },
  closeSearchPanel = (o) => {
    let e = o.state.field(searchState, !1)
    if (!e || !e.panel) return !1
    let s = getPanel(o, createSearchPanel)
    return (
      s && s.dom.contains(o.root.activeElement) && o.focus(),
      o.dispatch({ effects: togglePanel$1.of(!1) }),
      !0
    )
  },
  searchKeymap = [
    { key: 'Mod-f', run: openSearchPanel, scope: 'editor search-panel' },
    {
      key: 'F3',
      run: findNext,
      shift: findPrevious,
      scope: 'editor search-panel',
      preventDefault: !0
    },
    {
      key: 'Mod-g',
      run: findNext,
      shift: findPrevious,
      scope: 'editor search-panel',
      preventDefault: !0
    },
    { key: 'Escape', run: closeSearchPanel, scope: 'editor search-panel' },
    { key: 'Mod-Shift-l', run: selectSelectionMatches },
    { key: 'Alt-g', run: gotoLine },
    { key: 'Mod-d', run: selectNextOccurrence, preventDefault: !0 }
  ]
class SearchPanel {
  constructor(e) {
    this.view = e
    let s = (this.query = e.state.field(searchState).query.spec)
    ;(this.commit = this.commit.bind(this)),
      (this.searchField = crelt('input', {
        value: s.search,
        placeholder: phrase(e, 'Find'),
        'aria-label': phrase(e, 'Find'),
        class: 'cm-textfield',
        name: 'search',
        form: '',
        'main-field': 'true',
        onchange: this.commit,
        onkeyup: this.commit
      })),
      (this.replaceField = crelt('input', {
        value: s.replace,
        placeholder: phrase(e, 'Replace'),
        'aria-label': phrase(e, 'Replace'),
        class: 'cm-textfield',
        name: 'replace',
        form: '',
        onchange: this.commit,
        onkeyup: this.commit
      })),
      (this.caseField = crelt('input', {
        type: 'checkbox',
        name: 'case',
        form: '',
        checked: s.caseSensitive,
        onchange: this.commit
      })),
      (this.reField = crelt('input', {
        type: 'checkbox',
        name: 're',
        form: '',
        checked: s.regexp,
        onchange: this.commit
      })),
      (this.wordField = crelt('input', {
        type: 'checkbox',
        name: 'word',
        form: '',
        checked: s.wholeWord,
        onchange: this.commit
      }))
    function a(c, h, d) {
      return crelt(
        'button',
        { class: 'cm-button', name: c, onclick: h, type: 'button' },
        d
      )
    }
    this.dom = crelt(
      'div',
      { onkeydown: (c) => this.keydown(c), class: 'cm-search' },
      [
        this.searchField,
        a('next', () => findNext(e), [phrase(e, 'next')]),
        a('prev', () => findPrevious(e), [phrase(e, 'previous')]),
        a('select', () => selectMatches(e), [phrase(e, 'all')]),
        crelt('label', null, [this.caseField, phrase(e, 'match case')]),
        crelt('label', null, [this.reField, phrase(e, 'regexp')]),
        crelt('label', null, [this.wordField, phrase(e, 'by word')]),
        ...(e.state.readOnly
          ? []
          : [
              crelt('br'),
              this.replaceField,
              a('replace', () => replaceNext(e), [phrase(e, 'replace')]),
              a('replaceAll', () => replaceAll(e), [phrase(e, 'replace all')])
            ]),
        crelt(
          'button',
          {
            name: 'close',
            onclick: () => closeSearchPanel(e),
            'aria-label': phrase(e, 'close'),
            type: 'button'
          },
          ['×']
        )
      ]
    )
  }
  commit() {
    let e = new SearchQuery({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    })
    e.eq(this.query) ||
      ((this.query = e), this.view.dispatch({ effects: setSearchQuery.of(e) }))
  }
  keydown(e) {
    runScopeHandlers(this.view, e, 'search-panel')
      ? e.preventDefault()
      : e.keyCode == 13 && e.target == this.searchField
      ? (e.preventDefault(), (e.shiftKey ? findPrevious : findNext)(this.view))
      : e.keyCode == 13 &&
        e.target == this.replaceField &&
        (e.preventDefault(), replaceNext(this.view))
  }
  update(e) {
    for (let s of e.transactions)
      for (let a of s.effects)
        a.is(setSearchQuery) &&
          !a.value.eq(this.query) &&
          this.setQuery(a.value)
  }
  setQuery(e) {
    ;(this.query = e),
      (this.searchField.value = e.search),
      (this.replaceField.value = e.replace),
      (this.caseField.checked = e.caseSensitive),
      (this.reField.checked = e.regexp),
      (this.wordField.checked = e.wholeWord)
  }
  mount() {
    this.searchField.select()
  }
  get pos() {
    return 80
  }
  get top() {
    return this.view.state.facet(searchConfigFacet).top
  }
}
function phrase(o, e) {
  return o.state.phrase(e)
}
const AnnounceMargin = 30,
  Break = /[\s\.,:;?!]/
function announceMatch(o, { from: e, to: s }) {
  let a = o.state.doc.lineAt(e),
    c = o.state.doc.lineAt(s).to,
    h = Math.max(a.from, e - AnnounceMargin),
    d = Math.min(c, s + AnnounceMargin),
    g = o.state.sliceDoc(h, d)
  if (h != a.from) {
    for (let b = 0; b < AnnounceMargin; b++)
      if (!Break.test(g[b + 1]) && Break.test(g[b])) {
        g = g.slice(b)
        break
      }
  }
  if (d != c) {
    for (let b = g.length - 1; b > g.length - AnnounceMargin; b--)
      if (!Break.test(g[b - 1]) && Break.test(g[b])) {
        g = g.slice(0, b)
        break
      }
  }
  return EditorView.announce.of(
    `${o.state.phrase('current match')}. ${g} ${o.state.phrase('on line')} ${
      a.number
    }.`
  )
}
const baseTheme$2 = EditorView.baseTheme({
    '.cm-panel.cm-search': {
      padding: '2px 6px 4px',
      position: 'relative',
      '& [name=close]': {
        position: 'absolute',
        top: '0',
        right: '4px',
        backgroundColor: 'inherit',
        border: 'none',
        font: 'inherit',
        padding: 0,
        margin: 0
      },
      '& input, & button, & label': { margin: '.2em .6em .2em 0' },
      '& input[type=checkbox]': { marginRight: '.2em' },
      '& label': { fontSize: '80%', whiteSpace: 'pre' }
    },
    '&light .cm-searchMatch': { backgroundColor: '#ffff0054' },
    '&dark .cm-searchMatch': { backgroundColor: '#00ffff8a' },
    '&light .cm-searchMatch-selected': { backgroundColor: '#ff6a0054' },
    '&dark .cm-searchMatch-selected': { backgroundColor: '#ff00ff8a' }
  }),
  searchExtensions = [searchState, Prec.low(searchHighlighter), baseTheme$2]
class CompletionContext {
  constructor(e, s, a) {
    ;(this.state = e),
      (this.pos = s),
      (this.explicit = a),
      (this.abortListeners = [])
  }
  tokenBefore(e) {
    let s = syntaxTree(this.state).resolveInner(this.pos, -1)
    for (; s && e.indexOf(s.name) < 0; ) s = s.parent
    return s
      ? {
          from: s.from,
          to: this.pos,
          text: this.state.sliceDoc(s.from, this.pos),
          type: s.type
        }
      : null
  }
  matchBefore(e) {
    let s = this.state.doc.lineAt(this.pos),
      a = Math.max(s.from, this.pos - 250),
      c = s.text.slice(a - s.from, this.pos - s.from),
      h = c.search(ensureAnchor(e, !1))
    return h < 0 ? null : { from: a + h, to: this.pos, text: c.slice(h) }
  }
  get aborted() {
    return this.abortListeners == null
  }
  addEventListener(e, s) {
    e == 'abort' && this.abortListeners && this.abortListeners.push(s)
  }
}
function toSet(o) {
  let e = Object.keys(o).join(''),
    s = /\w/.test(e)
  return (
    s && (e = e.replace(/\w/g, '')),
    `[${s ? '\\w' : ''}${e.replace(/[^\w\s]/g, '\\$&')}]`
  )
}
function prefixMatch(o) {
  let e = Object.create(null),
    s = Object.create(null)
  for (let { label: c } of o) {
    e[c[0]] = !0
    for (let h = 1; h < c.length; h++) s[c[h]] = !0
  }
  let a = toSet(e) + toSet(s) + '*$'
  return [new RegExp('^' + a), new RegExp(a)]
}
function completeFromList(o) {
  let e = o.map((c) => (typeof c == 'string' ? { label: c } : c)),
    [s, a] = e.every((c) => /^\w+$/.test(c.label))
      ? [/\w*$/, /\w+$/]
      : prefixMatch(e)
  return (c) => {
    let h = c.matchBefore(a)
    return h || c.explicit
      ? { from: h ? h.from : c.pos, options: e, validFor: s }
      : null
  }
}
function ifNotIn(o, e) {
  return (s) => {
    for (let a = syntaxTree(s.state).resolveInner(s.pos, -1); a; a = a.parent) {
      if (o.indexOf(a.name) > -1) return null
      if (a.type.isTop) break
    }
    return e(s)
  }
}
class Option {
  constructor(e, s, a, c) {
    ;(this.completion = e),
      (this.source = s),
      (this.match = a),
      (this.score = c)
  }
}
function cur(o) {
  return o.selection.main.from
}
function ensureAnchor(o, e) {
  var s
  let { source: a } = o,
    c = e && a[0] != '^',
    h = a[a.length - 1] != '$'
  return !c && !h
    ? o
    : new RegExp(
        `${c ? '^' : ''}(?:${a})${h ? '$' : ''}`,
        (s = o.flags) !== null && s !== void 0 ? s : o.ignoreCase ? 'i' : ''
      )
}
const pickedCompletion = Annotation.define()
function insertCompletionText(o, e, s, a) {
  let { main: c } = o.selection,
    h = s - c.from,
    d = a - c.from
  return Object.assign(
    Object.assign(
      {},
      o.changeByRange((g) =>
        g != c &&
        s != a &&
        o.sliceDoc(g.from + h, g.from + d) != o.sliceDoc(s, a)
          ? { range: g }
          : {
              changes: {
                from: g.from + h,
                to: a == c.from ? g.to : g.from + d,
                insert: e
              },
              range: EditorSelection.cursor(g.from + h + e.length)
            }
      )
    ),
    { scrollIntoView: !0, userEvent: 'input.complete' }
  )
}
const SourceCache = new WeakMap()
function asSource(o) {
  if (!Array.isArray(o)) return o
  let e = SourceCache.get(o)
  return e || SourceCache.set(o, (e = completeFromList(o))), e
}
const startCompletionEffect = StateEffect.define(),
  closeCompletionEffect = StateEffect.define()
class FuzzyMatcher {
  constructor(e) {
    ;(this.pattern = e),
      (this.chars = []),
      (this.folded = []),
      (this.any = []),
      (this.precise = []),
      (this.byWord = []),
      (this.score = 0),
      (this.matched = [])
    for (let s = 0; s < e.length; ) {
      let a = codePointAt(e, s),
        c = codePointSize(a)
      this.chars.push(a)
      let h = e.slice(s, s + c),
        d = h.toUpperCase()
      this.folded.push(codePointAt(d == h ? h.toLowerCase() : d, 0)), (s += c)
    }
    this.astral = e.length != this.chars.length
  }
  ret(e, s) {
    return (this.score = e), (this.matched = s), !0
  }
  match(e) {
    if (this.pattern.length == 0) return this.ret(-100, [])
    if (e.length < this.pattern.length) return !1
    let { chars: s, folded: a, any: c, precise: h, byWord: d } = this
    if (s.length == 1) {
      let it = codePointAt(e, 0),
        ot = codePointSize(it),
        lt = ot == e.length ? 0 : -100
      if (it != s[0])
        if (it == a[0]) lt += -200
        else return !1
      return this.ret(lt, [0, ot])
    }
    let g = e.indexOf(this.pattern)
    if (g == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [
        0,
        this.pattern.length
      ])
    let b = s.length,
      $ = 0
    if (g < 0) {
      for (let it = 0, ot = Math.min(e.length, 200); it < ot && $ < b; ) {
        let lt = codePointAt(e, it)
        ;(lt == s[$] || lt == a[$]) && (c[$++] = it), (it += codePointSize(lt))
      }
      if ($ < b) return !1
    }
    let _ = 0,
      j = 0,
      _e = !1,
      et = 0,
      tt = -1,
      rt = -1,
      st = /[a-z]/.test(e),
      nt = !0
    for (let it = 0, ot = Math.min(e.length, 200), lt = 0; it < ot && j < b; ) {
      let at = codePointAt(e, it)
      g < 0 &&
        (_ < b && at == s[_] && (h[_++] = it),
        et < b &&
          (at == s[et] || at == a[et]
            ? (et == 0 && (tt = it), (rt = it + 1), et++)
            : (et = 0)))
      let ct,
        ut =
          at < 255
            ? (at >= 48 && at <= 57) || (at >= 97 && at <= 122)
              ? 2
              : at >= 65 && at <= 90
              ? 1
              : 0
            : (ct = fromCodePoint(at)) != ct.toLowerCase()
            ? 1
            : ct != ct.toUpperCase()
            ? 2
            : 0
      ;(!it || (ut == 1 && st) || (lt == 0 && ut != 0)) &&
        (s[j] == at || (a[j] == at && (_e = !0))
          ? (d[j++] = it)
          : d.length && (nt = !1)),
        (lt = ut),
        (it += codePointSize(at))
    }
    return j == b && d[0] == 0 && nt
      ? this.result(-100 + (_e ? -200 : 0), d, e)
      : et == b && tt == 0
      ? this.ret(-200 - e.length + (rt == e.length ? 0 : -100), [0, rt])
      : g > -1
      ? this.ret(-700 - e.length, [g, g + this.pattern.length])
      : et == b
      ? this.ret(-200 + -700 - e.length, [tt, rt])
      : j == b
      ? this.result(-100 + (_e ? -200 : 0) + -700 + (nt ? 0 : -1100), d, e)
      : s.length == 2
      ? !1
      : this.result((c[0] ? -700 : 0) + -200 + -1100, c, e)
  }
  result(e, s, a) {
    let c = [],
      h = 0
    for (let d of s) {
      let g = d + (this.astral ? codePointSize(codePointAt(a, d)) : 1)
      h && c[h - 1] == d ? (c[h - 1] = g) : ((c[h++] = d), (c[h++] = g))
    }
    return this.ret(e - a.length, c)
  }
}
const completionConfig = Facet.define({
  combine(o) {
    return combineConfig(
      o,
      {
        activateOnTyping: !0,
        selectOnOpen: !0,
        override: null,
        closeOnBlur: !0,
        maxRenderedOptions: 100,
        defaultKeymap: !0,
        tooltipClass: () => '',
        optionClass: () => '',
        aboveCursor: !1,
        icons: !0,
        addToOptions: [],
        positionInfo: defaultPositionInfo,
        compareCompletions: (e, s) => e.label.localeCompare(s.label),
        interactionDelay: 75
      },
      {
        defaultKeymap: (e, s) => e && s,
        closeOnBlur: (e, s) => e && s,
        icons: (e, s) => e && s,
        tooltipClass: (e, s) => (a) => joinClass(e(a), s(a)),
        optionClass: (e, s) => (a) => joinClass(e(a), s(a)),
        addToOptions: (e, s) => e.concat(s)
      }
    )
  }
})
function joinClass(o, e) {
  return o ? (e ? o + ' ' + e : o) : e
}
function defaultPositionInfo(o, e, s, a, c, h) {
  let d = o.textDirection == Direction.RTL,
    g = d,
    b = !1,
    $ = 'top',
    _,
    j,
    _e = e.left - c.left,
    et = c.right - e.right,
    tt = a.right - a.left,
    rt = a.bottom - a.top
  if (
    (g && _e < Math.min(tt, et)
      ? (g = !1)
      : !g && et < Math.min(tt, _e) && (g = !0),
    tt <= (g ? _e : et))
  )
    (_ = Math.max(c.top, Math.min(s.top, c.bottom - rt)) - e.top),
      (j = Math.min(400, g ? _e : et))
  else {
    ;(b = !0), (j = Math.min(400, (d ? e.right : c.right - e.left) - 30))
    let it = c.bottom - e.bottom
    it >= rt || it > e.top
      ? (_ = s.bottom - e.top)
      : (($ = 'bottom'), (_ = e.bottom - s.top))
  }
  let st = (e.bottom - e.top) / h.offsetHeight,
    nt = (e.right - e.left) / h.offsetWidth
  return {
    style: `${$}: ${_ / st}px; max-width: ${j / nt}px`,
    class:
      'cm-completionInfo-' +
      (b ? (d ? 'left-narrow' : 'right-narrow') : g ? 'left' : 'right')
  }
}
function optionContent(o) {
  let e = o.addToOptions.slice()
  return (
    o.icons &&
      e.push({
        render(s) {
          let a = document.createElement('div')
          return (
            a.classList.add('cm-completionIcon'),
            s.type &&
              a.classList.add(
                ...s.type.split(/\s+/g).map((c) => 'cm-completionIcon-' + c)
              ),
            a.setAttribute('aria-hidden', 'true'),
            a
          )
        },
        position: 20
      }),
    e.push(
      {
        render(s, a, c) {
          let h = document.createElement('span')
          h.className = 'cm-completionLabel'
          let d = s.displayLabel || s.label,
            g = 0
          for (let b = 0; b < c.length; ) {
            let $ = c[b++],
              _ = c[b++]
            $ > g && h.appendChild(document.createTextNode(d.slice(g, $)))
            let j = h.appendChild(document.createElement('span'))
            j.appendChild(document.createTextNode(d.slice($, _))),
              (j.className = 'cm-completionMatchedText'),
              (g = _)
          }
          return (
            g < d.length && h.appendChild(document.createTextNode(d.slice(g))),
            h
          )
        },
        position: 50
      },
      {
        render(s) {
          if (!s.detail) return null
          let a = document.createElement('span')
          return (
            (a.className = 'cm-completionDetail'), (a.textContent = s.detail), a
          )
        },
        position: 80
      }
    ),
    e.sort((s, a) => s.position - a.position).map((s) => s.render)
  )
}
function rangeAroundSelected(o, e, s) {
  if (o <= s) return { from: 0, to: o }
  if ((e < 0 && (e = 0), e <= o >> 1)) {
    let c = Math.floor(e / s)
    return { from: c * s, to: (c + 1) * s }
  }
  let a = Math.floor((o - e) / s)
  return { from: o - (a + 1) * s, to: o - a * s }
}
class CompletionTooltip {
  constructor(e, s, a) {
    ;(this.view = e),
      (this.stateField = s),
      (this.applyCompletion = a),
      (this.info = null),
      (this.infoDestroy = null),
      (this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: (b) => this.placeInfo(b),
        key: this
      }),
      (this.space = null),
      (this.currentClass = '')
    let c = e.state.field(s),
      { options: h, selected: d } = c.open,
      g = e.state.facet(completionConfig)
    ;(this.optionContent = optionContent(g)),
      (this.optionClass = g.optionClass),
      (this.tooltipClass = g.tooltipClass),
      (this.range = rangeAroundSelected(h.length, d, g.maxRenderedOptions)),
      (this.dom = document.createElement('div')),
      (this.dom.className = 'cm-tooltip-autocomplete'),
      this.updateTooltipClass(e.state),
      this.dom.addEventListener('mousedown', (b) => {
        for (let $ = b.target, _; $ && $ != this.dom; $ = $.parentNode)
          if (
            $.nodeName == 'LI' &&
            (_ = /-(\d+)$/.exec($.id)) &&
            +_[1] < h.length
          ) {
            this.applyCompletion(e, h[+_[1]]), b.preventDefault()
            return
          }
      }),
      this.dom.addEventListener('focusout', (b) => {
        let $ = e.state.field(this.stateField, !1)
        $ &&
          $.tooltip &&
          e.state.facet(completionConfig).closeOnBlur &&
          b.relatedTarget != e.contentDOM &&
          e.dispatch({ effects: closeCompletionEffect.of(null) })
      }),
      (this.list = this.dom.appendChild(
        this.createListBox(h, c.id, this.range)
      )),
      this.list.addEventListener('scroll', () => {
        this.info && this.view.requestMeasure(this.placeInfoReq)
      })
  }
  mount() {
    this.updateSel()
  }
  update(e) {
    var s, a, c
    let h = e.state.field(this.stateField),
      d = e.startState.field(this.stateField)
    this.updateTooltipClass(e.state),
      h != d &&
        (this.updateSel(),
        ((s = h.open) === null || s === void 0 ? void 0 : s.disabled) !=
          ((a = d.open) === null || a === void 0 ? void 0 : a.disabled) &&
          this.dom.classList.toggle(
            'cm-tooltip-autocomplete-disabled',
            !!(!((c = h.open) === null || c === void 0) && c.disabled)
          ))
  }
  updateTooltipClass(e) {
    let s = this.tooltipClass(e)
    if (s != this.currentClass) {
      for (let a of this.currentClass.split(' '))
        a && this.dom.classList.remove(a)
      for (let a of s.split(' ')) a && this.dom.classList.add(a)
      this.currentClass = s
    }
  }
  positioned(e) {
    ;(this.space = e), this.info && this.view.requestMeasure(this.placeInfoReq)
  }
  updateSel() {
    let e = this.view.state.field(this.stateField),
      s = e.open
    if (
      (((s.selected > -1 && s.selected < this.range.from) ||
        s.selected >= this.range.to) &&
        ((this.range = rangeAroundSelected(
          s.options.length,
          s.selected,
          this.view.state.facet(completionConfig).maxRenderedOptions
        )),
        this.list.remove(),
        (this.list = this.dom.appendChild(
          this.createListBox(s.options, e.id, this.range)
        )),
        this.list.addEventListener('scroll', () => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        })),
      this.updateSelectedOption(s.selected))
    ) {
      this.destroyInfo()
      let { completion: a } = s.options[s.selected],
        { info: c } = a
      if (!c) return
      let h = typeof c == 'string' ? document.createTextNode(c) : c(a)
      if (!h) return
      'then' in h
        ? h
            .then((d) => {
              d &&
                this.view.state.field(this.stateField, !1) == e &&
                this.addInfoPane(d, a)
            })
            .catch((d) => logException(this.view.state, d, 'completion info'))
        : this.addInfoPane(h, a)
    }
  }
  addInfoPane(e, s) {
    this.destroyInfo()
    let a = (this.info = document.createElement('div'))
    if (((a.className = 'cm-tooltip cm-completionInfo'), e.nodeType != null))
      a.appendChild(e), (this.infoDestroy = null)
    else {
      let { dom: c, destroy: h } = e
      a.appendChild(c), (this.infoDestroy = h || null)
    }
    this.dom.appendChild(a), this.view.requestMeasure(this.placeInfoReq)
  }
  updateSelectedOption(e) {
    let s = null
    for (
      let a = this.list.firstChild, c = this.range.from;
      a;
      a = a.nextSibling, c++
    )
      a.nodeName != 'LI' || !a.id
        ? c--
        : c == e
        ? a.hasAttribute('aria-selected') ||
          (a.setAttribute('aria-selected', 'true'), (s = a))
        : a.hasAttribute('aria-selected') && a.removeAttribute('aria-selected')
    return s && scrollIntoView(this.list, s), s
  }
  measureInfo() {
    let e = this.dom.querySelector('[aria-selected]')
    if (!e || !this.info) return null
    let s = this.dom.getBoundingClientRect(),
      a = this.info.getBoundingClientRect(),
      c = e.getBoundingClientRect(),
      h = this.space
    if (!h) {
      let d = this.dom.ownerDocument.defaultView || window
      h = { left: 0, top: 0, right: d.innerWidth, bottom: d.innerHeight }
    }
    return c.top > Math.min(h.bottom, s.bottom) - 10 ||
      c.bottom < Math.max(h.top, s.top) + 10
      ? null
      : this.view.state
          .facet(completionConfig)
          .positionInfo(this.view, s, c, a, h, this.dom)
  }
  placeInfo(e) {
    this.info &&
      (e
        ? (e.style && (this.info.style.cssText = e.style),
          (this.info.className =
            'cm-tooltip cm-completionInfo ' + (e.class || '')))
        : (this.info.style.cssText = 'top: -1e6px'))
  }
  createListBox(e, s, a) {
    const c = document.createElement('ul')
    ;(c.id = s),
      c.setAttribute('role', 'listbox'),
      c.setAttribute('aria-expanded', 'true'),
      c.setAttribute('aria-label', this.view.state.phrase('Completions'))
    let h = null
    for (let d = a.from; d < a.to; d++) {
      let { completion: g, match: b } = e[d],
        { section: $ } = g
      if ($) {
        let _e = typeof $ == 'string' ? $ : $.name
        if (_e != h && (d > a.from || a.from == 0))
          if (((h = _e), typeof $ != 'string' && $.header))
            c.appendChild($.header($))
          else {
            let et = c.appendChild(document.createElement('completion-section'))
            et.textContent = _e
          }
      }
      const _ = c.appendChild(document.createElement('li'))
      ;(_.id = s + '-' + d), _.setAttribute('role', 'option')
      let j = this.optionClass(g)
      j && (_.className = j)
      for (let _e of this.optionContent) {
        let et = _e(g, this.view.state, b)
        et && _.appendChild(et)
      }
    }
    return (
      a.from && c.classList.add('cm-completionListIncompleteTop'),
      a.to < e.length && c.classList.add('cm-completionListIncompleteBottom'),
      c
    )
  }
  destroyInfo() {
    this.info &&
      (this.infoDestroy && this.infoDestroy(),
      this.info.remove(),
      (this.info = null))
  }
  destroy() {
    this.destroyInfo()
  }
}
function completionTooltip(o, e) {
  return (s) => new CompletionTooltip(s, o, e)
}
function scrollIntoView(o, e) {
  let s = o.getBoundingClientRect(),
    a = e.getBoundingClientRect(),
    c = s.height / o.offsetHeight
  a.top < s.top
    ? (o.scrollTop -= (s.top - a.top) / c)
    : a.bottom > s.bottom && (o.scrollTop += (a.bottom - s.bottom) / c)
}
function score(o) {
  return (
    (o.boost || 0) * 100 +
    (o.apply ? 10 : 0) +
    (o.info ? 5 : 0) +
    (o.type ? 1 : 0)
  )
}
function sortOptions(o, e) {
  let s = [],
    a = null,
    c = (b) => {
      s.push(b)
      let { section: $ } = b.completion
      if ($) {
        a || (a = [])
        let _ = typeof $ == 'string' ? $ : $.name
        a.some((j) => j.name == _) ||
          a.push(typeof $ == 'string' ? { name: _ } : $)
      }
    }
  for (let b of o)
    if (b.hasResult()) {
      let $ = b.result.getMatch
      if (b.result.filter === !1)
        for (let _ of b.result.options)
          c(new Option(_, b.source, $ ? $(_) : [], 1e9 - s.length))
      else {
        let _ = new FuzzyMatcher(e.sliceDoc(b.from, b.to))
        for (let j of b.result.options)
          if (_.match(j.label)) {
            let _e = j.displayLabel ? ($ ? $(j, _.matched) : []) : _.matched
            c(new Option(j, b.source, _e, _.score + (j.boost || 0)))
          }
      }
    }
  if (a) {
    let b = Object.create(null),
      $ = 0,
      _ = (j, _e) => {
        var et, tt
        return (
          ((et = j.rank) !== null && et !== void 0 ? et : 1e9) -
            ((tt = _e.rank) !== null && tt !== void 0 ? tt : 1e9) ||
          (j.name < _e.name ? -1 : 1)
        )
      }
    for (let j of a.sort(_)) ($ -= 1e5), (b[j.name] = $)
    for (let j of s) {
      let { section: _e } = j.completion
      _e && (j.score += b[typeof _e == 'string' ? _e : _e.name])
    }
  }
  let h = [],
    d = null,
    g = e.facet(completionConfig).compareCompletions
  for (let b of s.sort(
    ($, _) => _.score - $.score || g($.completion, _.completion)
  )) {
    let $ = b.completion
    !d ||
    d.label != $.label ||
    d.detail != $.detail ||
    (d.type != null && $.type != null && d.type != $.type) ||
    d.apply != $.apply ||
    d.boost != $.boost
      ? h.push(b)
      : score(b.completion) > score(d) && (h[h.length - 1] = b),
      (d = b.completion)
  }
  return h
}
class CompletionDialog {
  constructor(e, s, a, c, h, d) {
    ;(this.options = e),
      (this.attrs = s),
      (this.tooltip = a),
      (this.timestamp = c),
      (this.selected = h),
      (this.disabled = d)
  }
  setSelected(e, s) {
    return e == this.selected || e >= this.options.length
      ? this
      : new CompletionDialog(
          this.options,
          makeAttrs(s, e),
          this.tooltip,
          this.timestamp,
          e,
          this.disabled
        )
  }
  static build(e, s, a, c, h) {
    let d = sortOptions(e, s)
    if (!d.length)
      return c && e.some((b) => b.state == 1)
        ? new CompletionDialog(
            c.options,
            c.attrs,
            c.tooltip,
            c.timestamp,
            c.selected,
            !0
          )
        : null
    let g = s.facet(completionConfig).selectOnOpen ? 0 : -1
    if (c && c.selected != g && c.selected != -1) {
      let b = c.options[c.selected].completion
      for (let $ = 0; $ < d.length; $++)
        if (d[$].completion == b) {
          g = $
          break
        }
    }
    return new CompletionDialog(
      d,
      makeAttrs(a, g),
      {
        pos: e.reduce((b, $) => ($.hasResult() ? Math.min(b, $.from) : b), 1e8),
        create: completionTooltip(completionState, applyCompletion),
        above: h.aboveCursor
      },
      c ? c.timestamp : Date.now(),
      g,
      !1
    )
  }
  map(e) {
    return new CompletionDialog(
      this.options,
      this.attrs,
      Object.assign(Object.assign({}, this.tooltip), {
        pos: e.mapPos(this.tooltip.pos)
      }),
      this.timestamp,
      this.selected,
      this.disabled
    )
  }
}
class CompletionState {
  constructor(e, s, a) {
    ;(this.active = e), (this.id = s), (this.open = a)
  }
  static start() {
    return new CompletionState(
      none,
      'cm-ac-' + Math.floor(Math.random() * 2e6).toString(36),
      null
    )
  }
  update(e) {
    let { state: s } = e,
      a = s.facet(completionConfig),
      h = (
        a.override || s.languageDataAt('autocomplete', cur(s)).map(asSource)
      ).map((g) =>
        (
          this.active.find(($) => $.source == g) ||
          new ActiveSource(g, this.active.some(($) => $.state != 0) ? 1 : 0)
        ).update(e, a)
      )
    h.length == this.active.length &&
      h.every((g, b) => g == this.active[b]) &&
      (h = this.active)
    let d = this.open
    d && e.docChanged && (d = d.map(e.changes)),
      e.selection ||
      h.some((g) => g.hasResult() && e.changes.touchesRange(g.from, g.to)) ||
      !sameResults(h, this.active)
        ? (d = CompletionDialog.build(h, s, this.id, d, a))
        : d && d.disabled && !h.some((g) => g.state == 1) && (d = null),
      !d &&
        h.every((g) => g.state != 1) &&
        h.some((g) => g.hasResult()) &&
        (h = h.map((g) => (g.hasResult() ? new ActiveSource(g.source, 0) : g)))
    for (let g of e.effects)
      g.is(setSelectedEffect) && (d = d && d.setSelected(g.value, this.id))
    return h == this.active && d == this.open
      ? this
      : new CompletionState(h, this.id, d)
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null
  }
  get attrs() {
    return this.open ? this.open.attrs : baseAttrs
  }
}
function sameResults(o, e) {
  if (o == e) return !0
  for (let s = 0, a = 0; ; ) {
    for (; s < o.length && !o[s].hasResult; ) s++
    for (; a < e.length && !e[a].hasResult; ) a++
    let c = s == o.length,
      h = a == e.length
    if (c || h) return c == h
    if (o[s++].result != e[a++].result) return !1
  }
}
const baseAttrs = { 'aria-autocomplete': 'list' }
function makeAttrs(o, e) {
  let s = {
    'aria-autocomplete': 'list',
    'aria-haspopup': 'listbox',
    'aria-controls': o
  }
  return e > -1 && (s['aria-activedescendant'] = o + '-' + e), s
}
const none = []
function getUserEvent(o) {
  return o.isUserEvent('input.type')
    ? 'input'
    : o.isUserEvent('delete.backward')
    ? 'delete'
    : null
}
class ActiveSource {
  constructor(e, s, a = -1) {
    ;(this.source = e), (this.state = s), (this.explicitPos = a)
  }
  hasResult() {
    return !1
  }
  update(e, s) {
    let a = getUserEvent(e),
      c = this
    a
      ? (c = c.handleUserEvent(e, a, s))
      : e.docChanged
      ? (c = c.handleChange(e))
      : e.selection && c.state != 0 && (c = new ActiveSource(c.source, 0))
    for (let h of e.effects)
      if (h.is(startCompletionEffect))
        c = new ActiveSource(c.source, 1, h.value ? cur(e.state) : -1)
      else if (h.is(closeCompletionEffect)) c = new ActiveSource(c.source, 0)
      else if (h.is(setActiveEffect))
        for (let d of h.value) d.source == c.source && (c = d)
    return c
  }
  handleUserEvent(e, s, a) {
    return s == 'delete' || !a.activateOnTyping
      ? this.map(e.changes)
      : new ActiveSource(this.source, 1)
  }
  handleChange(e) {
    return e.changes.touchesRange(cur(e.startState))
      ? new ActiveSource(this.source, 0)
      : this.map(e.changes)
  }
  map(e) {
    return e.empty || this.explicitPos < 0
      ? this
      : new ActiveSource(this.source, this.state, e.mapPos(this.explicitPos))
  }
}
class ActiveResult extends ActiveSource {
  constructor(e, s, a, c, h) {
    super(e, 2, s), (this.result = a), (this.from = c), (this.to = h)
  }
  hasResult() {
    return !0
  }
  handleUserEvent(e, s, a) {
    var c
    let h = e.changes.mapPos(this.from),
      d = e.changes.mapPos(this.to, 1),
      g = cur(e.state)
    if (
      (this.explicitPos < 0 ? g <= h : g < this.from) ||
      g > d ||
      (s == 'delete' && cur(e.startState) == this.from)
    )
      return new ActiveSource(
        this.source,
        s == 'input' && a.activateOnTyping ? 1 : 0
      )
    let b = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos),
      $
    return checkValid(this.result.validFor, e.state, h, d)
      ? new ActiveResult(this.source, b, this.result, h, d)
      : this.result.update &&
        ($ = this.result.update(
          this.result,
          h,
          d,
          new CompletionContext(e.state, g, b >= 0)
        ))
      ? new ActiveResult(
          this.source,
          b,
          $,
          $.from,
          (c = $.to) !== null && c !== void 0 ? c : cur(e.state)
        )
      : new ActiveSource(this.source, 1, b)
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to)
      ? new ActiveSource(this.source, 0)
      : this.map(e.changes)
  }
  map(e) {
    return e.empty
      ? this
      : new ActiveResult(
          this.source,
          this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos),
          this.result,
          e.mapPos(this.from),
          e.mapPos(this.to, 1)
        )
  }
}
function checkValid(o, e, s, a) {
  if (!o) return !1
  let c = e.sliceDoc(s, a)
  return typeof o == 'function' ? o(c, s, a, e) : ensureAnchor(o, !0).test(c)
}
const setActiveEffect = StateEffect.define({
    map(o, e) {
      return o.map((s) => s.map(e))
    }
  }),
  setSelectedEffect = StateEffect.define(),
  completionState = StateField.define({
    create() {
      return CompletionState.start()
    },
    update(o, e) {
      return o.update(e)
    },
    provide: (o) => [
      showTooltip.from(o, (e) => e.tooltip),
      EditorView.contentAttributes.from(o, (e) => e.attrs)
    ]
  })
function applyCompletion(o, e) {
  const s = e.completion.apply || e.completion.label
  let a = o.state
    .field(completionState)
    .active.find((c) => c.source == e.source)
  return a instanceof ActiveResult
    ? (typeof s == 'string'
        ? o.dispatch(
            Object.assign(
              Object.assign({}, insertCompletionText(o.state, s, a.from, a.to)),
              { annotations: pickedCompletion.of(e.completion) }
            )
          )
        : s(o, e.completion, a.from, a.to),
      !0)
    : !1
}
function moveCompletionSelection(o, e = 'option') {
  return (s) => {
    let a = s.state.field(completionState, !1)
    if (
      !a ||
      !a.open ||
      a.open.disabled ||
      Date.now() - a.open.timestamp <
        s.state.facet(completionConfig).interactionDelay
    )
      return !1
    let c = 1,
      h
    e == 'page' &&
      (h = getTooltip(s, a.open.tooltip)) &&
      (c = Math.max(
        2,
        Math.floor(
          h.dom.offsetHeight / h.dom.querySelector('li').offsetHeight
        ) - 1
      ))
    let { length: d } = a.open.options,
      g =
        a.open.selected > -1
          ? a.open.selected + c * (o ? 1 : -1)
          : o
          ? 0
          : d - 1
    return (
      g < 0
        ? (g = e == 'page' ? 0 : d - 1)
        : g >= d && (g = e == 'page' ? d - 1 : 0),
      s.dispatch({ effects: setSelectedEffect.of(g) }),
      !0
    )
  }
}
const acceptCompletion = (o) => {
    let e = o.state.field(completionState, !1)
    return o.state.readOnly ||
      !e ||
      !e.open ||
      e.open.selected < 0 ||
      e.open.disabled ||
      Date.now() - e.open.timestamp <
        o.state.facet(completionConfig).interactionDelay
      ? !1
      : applyCompletion(o, e.open.options[e.open.selected])
  },
  startCompletion = (o) =>
    o.state.field(completionState, !1)
      ? (o.dispatch({ effects: startCompletionEffect.of(!0) }), !0)
      : !1,
  closeCompletion = (o) => {
    let e = o.state.field(completionState, !1)
    return !e || !e.active.some((s) => s.state != 0)
      ? !1
      : (o.dispatch({ effects: closeCompletionEffect.of(null) }), !0)
  }
class RunningQuery {
  constructor(e, s) {
    ;(this.active = e),
      (this.context = s),
      (this.time = Date.now()),
      (this.updates = []),
      (this.done = void 0)
  }
}
const DebounceTime = 50,
  MaxUpdateCount = 50,
  MinAbortTime = 1e3,
  completionPlugin = ViewPlugin.fromClass(
    class {
      constructor(o) {
        ;(this.view = o),
          (this.debounceUpdate = -1),
          (this.running = []),
          (this.debounceAccept = -1),
          (this.composing = 0)
        for (let e of o.state.field(completionState).active)
          e.state == 1 && this.startQuery(e)
      }
      update(o) {
        let e = o.state.field(completionState)
        if (
          !o.selectionSet &&
          !o.docChanged &&
          o.startState.field(completionState) == e
        )
          return
        let s = o.transactions.some(
          (a) => (a.selection || a.docChanged) && !getUserEvent(a)
        )
        for (let a = 0; a < this.running.length; a++) {
          let c = this.running[a]
          if (
            s ||
            (c.updates.length + o.transactions.length > MaxUpdateCount &&
              Date.now() - c.time > MinAbortTime)
          ) {
            for (let h of c.context.abortListeners)
              try {
                h()
              } catch (d) {
                logException(this.view.state, d)
              }
            ;(c.context.abortListeners = null), this.running.splice(a--, 1)
          } else c.updates.push(...o.transactions)
        }
        if (
          (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
          (this.debounceUpdate = e.active.some(
            (a) =>
              a.state == 1 &&
              !this.running.some((c) => c.active.source == a.source)
          )
            ? setTimeout(() => this.startUpdate(), DebounceTime)
            : -1),
          this.composing != 0)
        )
          for (let a of o.transactions)
            getUserEvent(a) == 'input'
              ? (this.composing = 2)
              : this.composing == 2 && a.selection && (this.composing = 3)
      }
      startUpdate() {
        this.debounceUpdate = -1
        let { state: o } = this.view,
          e = o.field(completionState)
        for (let s of e.active)
          s.state == 1 &&
            !this.running.some((a) => a.active.source == s.source) &&
            this.startQuery(s)
      }
      startQuery(o) {
        let { state: e } = this.view,
          s = cur(e),
          a = new CompletionContext(e, s, o.explicitPos == s),
          c = new RunningQuery(o, a)
        this.running.push(c),
          Promise.resolve(o.source(a)).then(
            (h) => {
              c.context.aborted || ((c.done = h || null), this.scheduleAccept())
            },
            (h) => {
              this.view.dispatch({ effects: closeCompletionEffect.of(null) }),
                logException(this.view.state, h)
            }
          )
      }
      scheduleAccept() {
        this.running.every((o) => o.done !== void 0)
          ? this.accept()
          : this.debounceAccept < 0 &&
            (this.debounceAccept = setTimeout(
              () => this.accept(),
              DebounceTime
            ))
      }
      accept() {
        var o
        this.debounceAccept > -1 && clearTimeout(this.debounceAccept),
          (this.debounceAccept = -1)
        let e = [],
          s = this.view.state.facet(completionConfig)
        for (let a = 0; a < this.running.length; a++) {
          let c = this.running[a]
          if (c.done === void 0) continue
          if ((this.running.splice(a--, 1), c.done)) {
            let d = new ActiveResult(
              c.active.source,
              c.active.explicitPos,
              c.done,
              c.done.from,
              (o = c.done.to) !== null && o !== void 0
                ? o
                : cur(
                    c.updates.length ? c.updates[0].startState : this.view.state
                  )
            )
            for (let g of c.updates) d = d.update(g, s)
            if (d.hasResult()) {
              e.push(d)
              continue
            }
          }
          let h = this.view.state
            .field(completionState)
            .active.find((d) => d.source == c.active.source)
          if (h && h.state == 1)
            if (c.done == null) {
              let d = new ActiveSource(c.active.source, 0)
              for (let g of c.updates) d = d.update(g, s)
              d.state != 1 && e.push(d)
            } else this.startQuery(h)
        }
        e.length && this.view.dispatch({ effects: setActiveEffect.of(e) })
      }
    },
    {
      eventHandlers: {
        blur(o) {
          let e = this.view.state.field(completionState, !1)
          if (
            e &&
            e.tooltip &&
            this.view.state.facet(completionConfig).closeOnBlur
          ) {
            let s = e.open && getTooltip(this.view, e.open.tooltip)
            ;(!s || !s.dom.contains(o.relatedTarget)) &&
              this.view.dispatch({ effects: closeCompletionEffect.of(null) })
          }
        },
        compositionstart() {
          this.composing = 1
        },
        compositionend() {
          this.composing == 3 &&
            setTimeout(
              () =>
                this.view.dispatch({ effects: startCompletionEffect.of(!1) }),
              20
            ),
            (this.composing = 0)
        }
      }
    }
  ),
  baseTheme$1 = EditorView.baseTheme({
    '.cm-tooltip.cm-tooltip-autocomplete': {
      '& > ul': {
        fontFamily: 'monospace',
        whiteSpace: 'nowrap',
        overflow: 'hidden auto',
        maxWidth_fallback: '700px',
        maxWidth: 'min(700px, 95vw)',
        minWidth: '250px',
        maxHeight: '10em',
        height: '100%',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        '& > li, & > completion-section': {
          padding: '1px 3px',
          lineHeight: 1.2
        },
        '& > li': {
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
          cursor: 'pointer'
        },
        '& > completion-section': {
          display: 'list-item',
          borderBottom: '1px solid silver',
          paddingLeft: '0.5em',
          opacity: 0.7
        }
      }
    },
    '&light .cm-tooltip-autocomplete ul li[aria-selected]': {
      background: '#17c',
      color: 'white'
    },
    '&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]': {
      background: '#777'
    },
    '&dark .cm-tooltip-autocomplete ul li[aria-selected]': {
      background: '#347',
      color: 'white'
    },
    '&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]': {
      background: '#444'
    },
    '.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after':
      { content: '"···"', opacity: 0.5, display: 'block', textAlign: 'center' },
    '.cm-tooltip.cm-completionInfo': {
      position: 'absolute',
      padding: '3px 9px',
      width: 'max-content',
      maxWidth: '400px',
      boxSizing: 'border-box'
    },
    '.cm-completionInfo.cm-completionInfo-left': { right: '100%' },
    '.cm-completionInfo.cm-completionInfo-right': { left: '100%' },
    '.cm-completionInfo.cm-completionInfo-left-narrow': { right: '30px' },
    '.cm-completionInfo.cm-completionInfo-right-narrow': { left: '30px' },
    '&light .cm-snippetField': { backgroundColor: '#00000022' },
    '&dark .cm-snippetField': { backgroundColor: '#ffffff22' },
    '.cm-snippetFieldPosition': {
      verticalAlign: 'text-top',
      width: 0,
      height: '1.15em',
      display: 'inline-block',
      margin: '0 -0.7px -.7em',
      borderLeft: '1.4px dotted #888'
    },
    '.cm-completionMatchedText': { textDecoration: 'underline' },
    '.cm-completionDetail': { marginLeft: '0.5em', fontStyle: 'italic' },
    '.cm-completionIcon': {
      fontSize: '90%',
      width: '.8em',
      display: 'inline-block',
      textAlign: 'center',
      paddingRight: '.6em',
      opacity: '0.6',
      boxSizing: 'content-box'
    },
    '.cm-completionIcon-function, .cm-completionIcon-method': {
      '&:after': { content: "'ƒ'" }
    },
    '.cm-completionIcon-class': { '&:after': { content: "'○'" } },
    '.cm-completionIcon-interface': { '&:after': { content: "'◌'" } },
    '.cm-completionIcon-variable': { '&:after': { content: "'𝑥'" } },
    '.cm-completionIcon-constant': { '&:after': { content: "'𝐶'" } },
    '.cm-completionIcon-type': { '&:after': { content: "'𝑡'" } },
    '.cm-completionIcon-enum': { '&:after': { content: "'∪'" } },
    '.cm-completionIcon-property': { '&:after': { content: "'□'" } },
    '.cm-completionIcon-keyword': { '&:after': { content: "'🔑︎'" } },
    '.cm-completionIcon-namespace': { '&:after': { content: "'▢'" } },
    '.cm-completionIcon-text': {
      '&:after': { content: "'abc'", fontSize: '50%', verticalAlign: 'middle' }
    }
  })
class FieldPos {
  constructor(e, s, a, c) {
    ;(this.field = e), (this.line = s), (this.from = a), (this.to = c)
  }
}
class FieldRange {
  constructor(e, s, a) {
    ;(this.field = e), (this.from = s), (this.to = a)
  }
  map(e) {
    let s = e.mapPos(this.from, -1, MapMode.TrackDel),
      a = e.mapPos(this.to, 1, MapMode.TrackDel)
    return s == null || a == null ? null : new FieldRange(this.field, s, a)
  }
}
class Snippet {
  constructor(e, s) {
    ;(this.lines = e), (this.fieldPositions = s)
  }
  instantiate(e, s) {
    let a = [],
      c = [s],
      h = e.doc.lineAt(s),
      d = /^\s*/.exec(h.text)[0]
    for (let b of this.lines) {
      if (a.length) {
        let $ = d,
          _ = /^\t*/.exec(b)[0].length
        for (let j = 0; j < _; j++) $ += e.facet(indentUnit)
        c.push(s + $.length - _), (b = $ + b.slice(_))
      }
      a.push(b), (s += b.length + 1)
    }
    let g = this.fieldPositions.map(
      (b) => new FieldRange(b.field, c[b.line] + b.from, c[b.line] + b.to)
    )
    return { text: a, ranges: g }
  }
  static parse(e) {
    let s = [],
      a = [],
      c = [],
      h
    for (let d of e.split(/\r\n?|\n/)) {
      for (; (h = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(d)); ) {
        let g = h[1] ? +h[1] : null,
          b = h[2] || h[3] || '',
          $ = -1
        for (let _ = 0; _ < s.length; _++)
          (g != null ? s[_].seq == g : b && s[_].name == b) && ($ = _)
        if ($ < 0) {
          let _ = 0
          for (
            ;
            _ < s.length && (g == null || (s[_].seq != null && s[_].seq < g));

          )
            _++
          s.splice(_, 0, { seq: g, name: b }), ($ = _)
          for (let j of c) j.field >= $ && j.field++
        }
        c.push(new FieldPos($, a.length, h.index, h.index + b.length)),
          (d = d.slice(0, h.index) + b + d.slice(h.index + h[0].length))
      }
      for (let g; (g = /\\([{}])/.exec(d)); ) {
        d = d.slice(0, g.index) + g[1] + d.slice(g.index + g[0].length)
        for (let b of c)
          b.line == a.length && b.from > g.index && (b.from--, b.to--)
      }
      a.push(d)
    }
    return new Snippet(a, c)
  }
}
let fieldMarker = Decoration.widget({
    widget: new (class extends WidgetType {
      toDOM() {
        let o = document.createElement('span')
        return (o.className = 'cm-snippetFieldPosition'), o
      }
      ignoreEvent() {
        return !1
      }
    })()
  }),
  fieldRange = Decoration.mark({ class: 'cm-snippetField' })
class ActiveSnippet {
  constructor(e, s) {
    ;(this.ranges = e),
      (this.active = s),
      (this.deco = Decoration.set(
        e.map((a) =>
          (a.from == a.to ? fieldMarker : fieldRange).range(a.from, a.to)
        )
      ))
  }
  map(e) {
    let s = []
    for (let a of this.ranges) {
      let c = a.map(e)
      if (!c) return null
      s.push(c)
    }
    return new ActiveSnippet(s, this.active)
  }
  selectionInsideField(e) {
    return e.ranges.every((s) =>
      this.ranges.some(
        (a) => a.field == this.active && a.from <= s.from && a.to >= s.to
      )
    )
  }
}
const setActive = StateEffect.define({
    map(o, e) {
      return o && o.map(e)
    }
  }),
  moveToField = StateEffect.define(),
  snippetState = StateField.define({
    create() {
      return null
    },
    update(o, e) {
      for (let s of e.effects) {
        if (s.is(setActive)) return s.value
        if (s.is(moveToField) && o) return new ActiveSnippet(o.ranges, s.value)
      }
      return (
        o && e.docChanged && (o = o.map(e.changes)),
        o && e.selection && !o.selectionInsideField(e.selection) && (o = null),
        o
      )
    },
    provide: (o) =>
      EditorView.decorations.from(o, (e) => (e ? e.deco : Decoration.none))
  })
function fieldSelection(o, e) {
  return EditorSelection.create(
    o
      .filter((s) => s.field == e)
      .map((s) => EditorSelection.range(s.from, s.to))
  )
}
function snippet(o) {
  let e = Snippet.parse(o)
  return (s, a, c, h) => {
    let { text: d, ranges: g } = e.instantiate(s.state, c),
      b = {
        changes: { from: c, to: h, insert: Text.of(d) },
        scrollIntoView: !0,
        annotations: a ? pickedCompletion.of(a) : void 0
      }
    if ((g.length && (b.selection = fieldSelection(g, 0)), g.length > 1)) {
      let $ = new ActiveSnippet(g, 0),
        _ = (b.effects = [setActive.of($)])
      s.state.field(snippetState, !1) === void 0 &&
        _.push(
          StateEffect.appendConfig.of([
            snippetState,
            addSnippetKeymap,
            snippetPointerHandler,
            baseTheme$1
          ])
        )
    }
    s.dispatch(s.state.update(b))
  }
}
function moveField(o) {
  return ({ state: e, dispatch: s }) => {
    let a = e.field(snippetState, !1)
    if (!a || (o < 0 && a.active == 0)) return !1
    let c = a.active + o,
      h = o > 0 && !a.ranges.some((d) => d.field == c + o)
    return (
      s(
        e.update({
          selection: fieldSelection(a.ranges, c),
          effects: setActive.of(h ? null : new ActiveSnippet(a.ranges, c)),
          scrollIntoView: !0
        })
      ),
      !0
    )
  }
}
const clearSnippet = ({ state: o, dispatch: e }) =>
    o.field(snippetState, !1)
      ? (e(o.update({ effects: setActive.of(null) })), !0)
      : !1,
  nextSnippetField = moveField(1),
  prevSnippetField = moveField(-1),
  defaultSnippetKeymap = [
    { key: 'Tab', run: nextSnippetField, shift: prevSnippetField },
    { key: 'Escape', run: clearSnippet }
  ],
  snippetKeymap = Facet.define({
    combine(o) {
      return o.length ? o[0] : defaultSnippetKeymap
    }
  }),
  addSnippetKeymap = Prec.highest(
    keymap.compute([snippetKeymap], (o) => o.facet(snippetKeymap))
  )
function snippetCompletion(o, e) {
  return Object.assign(Object.assign({}, e), { apply: snippet(o) })
}
const snippetPointerHandler = EditorView.domEventHandlers({
    mousedown(o, e) {
      let s = e.state.field(snippetState, !1),
        a
      if (!s || (a = e.posAtCoords({ x: o.clientX, y: o.clientY })) == null)
        return !1
      let c = s.ranges.find((h) => h.from <= a && h.to >= a)
      return !c || c.field == s.active
        ? !1
        : (e.dispatch({
            selection: fieldSelection(s.ranges, c.field),
            effects: setActive.of(
              s.ranges.some((h) => h.field > c.field)
                ? new ActiveSnippet(s.ranges, c.field)
                : null
            ),
            scrollIntoView: !0
          }),
          !0)
    }
  }),
  defaults = {
    brackets: ['(', '[', '{', "'", '"'],
    before: ')]}:;>',
    stringPrefixes: []
  },
  closeBracketEffect = StateEffect.define({
    map(o, e) {
      let s = e.mapPos(o, -1, MapMode.TrackAfter)
      return s ?? void 0
    }
  }),
  closedBracket = new (class extends RangeValue {})()
closedBracket.startSide = 1
closedBracket.endSide = -1
const bracketState = StateField.define({
  create() {
    return RangeSet.empty
  },
  update(o, e) {
    if (e.selection) {
      let s = e.state.doc.lineAt(e.selection.main.head).from,
        a = e.startState.doc.lineAt(e.startState.selection.main.head).from
      s != e.changes.mapPos(a, -1) && (o = RangeSet.empty)
    }
    o = o.map(e.changes)
    for (let s of e.effects)
      s.is(closeBracketEffect) &&
        (o = o.update({ add: [closedBracket.range(s.value, s.value + 1)] }))
    return o
  }
})
function closeBrackets() {
  return [inputHandler, bracketState]
}
const definedClosing = '()[]{}<>'
function closing(o) {
  for (let e = 0; e < definedClosing.length; e += 2)
    if (definedClosing.charCodeAt(e) == o) return definedClosing.charAt(e + 1)
  return fromCodePoint(o < 128 ? o : o + 1)
}
function config(o, e) {
  return o.languageDataAt('closeBrackets', e)[0] || defaults
}
const android$1 =
    typeof navigator == 'object' && /Android\b/.test(navigator.userAgent),
  inputHandler = EditorView.inputHandler.of((o, e, s, a) => {
    if ((android$1 ? o.composing : o.compositionStarted) || o.state.readOnly)
      return !1
    let c = o.state.selection.main
    if (
      a.length > 2 ||
      (a.length == 2 && codePointSize(codePointAt(a, 0)) == 1) ||
      e != c.from ||
      s != c.to
    )
      return !1
    let h = insertBracket(o.state, a)
    return h ? (o.dispatch(h), !0) : !1
  }),
  deleteBracketPair = ({ state: o, dispatch: e }) => {
    if (o.readOnly) return !1
    let a = config(o, o.selection.main.head).brackets || defaults.brackets,
      c = null,
      h = o.changeByRange((d) => {
        if (d.empty) {
          let g = prevChar(o.doc, d.head)
          for (let b of a)
            if (b == g && nextChar(o.doc, d.head) == closing(codePointAt(b, 0)))
              return {
                changes: { from: d.head - b.length, to: d.head + b.length },
                range: EditorSelection.cursor(d.head - b.length)
              }
        }
        return { range: (c = d) }
      })
    return (
      c || e(o.update(h, { scrollIntoView: !0, userEvent: 'delete.backward' })),
      !c
    )
  },
  closeBracketsKeymap = [{ key: 'Backspace', run: deleteBracketPair }]
function insertBracket(o, e) {
  let s = config(o, o.selection.main.head),
    a = s.brackets || defaults.brackets
  for (let c of a) {
    let h = closing(codePointAt(c, 0))
    if (e == c)
      return h == c
        ? handleSame(o, c, a.indexOf(c + c + c) > -1, s)
        : handleOpen(o, c, h, s.before || defaults.before)
    if (e == h && closedBracketAt(o, o.selection.main.from))
      return handleClose(o, c, h)
  }
  return null
}
function closedBracketAt(o, e) {
  let s = !1
  return (
    o.field(bracketState).between(0, o.doc.length, (a) => {
      a == e && (s = !0)
    }),
    s
  )
}
function nextChar(o, e) {
  let s = o.sliceString(e, e + 2)
  return s.slice(0, codePointSize(codePointAt(s, 0)))
}
function prevChar(o, e) {
  let s = o.sliceString(e - 2, e)
  return codePointSize(codePointAt(s, 0)) == s.length ? s : s.slice(1)
}
function handleOpen(o, e, s, a) {
  let c = null,
    h = o.changeByRange((d) => {
      if (!d.empty)
        return {
          changes: [
            { insert: e, from: d.from },
            { insert: s, from: d.to }
          ],
          effects: closeBracketEffect.of(d.to + e.length),
          range: EditorSelection.range(d.anchor + e.length, d.head + e.length)
        }
      let g = nextChar(o.doc, d.head)
      return !g || /\s/.test(g) || a.indexOf(g) > -1
        ? {
            changes: { insert: e + s, from: d.head },
            effects: closeBracketEffect.of(d.head + e.length),
            range: EditorSelection.cursor(d.head + e.length)
          }
        : { range: (c = d) }
    })
  return c ? null : o.update(h, { scrollIntoView: !0, userEvent: 'input.type' })
}
function handleClose(o, e, s) {
  let a = null,
    c = o.changeByRange((h) =>
      h.empty && nextChar(o.doc, h.head) == s
        ? {
            changes: { from: h.head, to: h.head + s.length, insert: s },
            range: EditorSelection.cursor(h.head + s.length)
          }
        : (a = { range: h })
    )
  return a ? null : o.update(c, { scrollIntoView: !0, userEvent: 'input.type' })
}
function handleSame(o, e, s, a) {
  let c = a.stringPrefixes || defaults.stringPrefixes,
    h = null,
    d = o.changeByRange((g) => {
      if (!g.empty)
        return {
          changes: [
            { insert: e, from: g.from },
            { insert: e, from: g.to }
          ],
          effects: closeBracketEffect.of(g.to + e.length),
          range: EditorSelection.range(g.anchor + e.length, g.head + e.length)
        }
      let b = g.head,
        $ = nextChar(o.doc, b),
        _
      if ($ == e) {
        if (nodeStart(o, b))
          return {
            changes: { insert: e + e, from: b },
            effects: closeBracketEffect.of(b + e.length),
            range: EditorSelection.cursor(b + e.length)
          }
        if (closedBracketAt(o, b)) {
          let _e =
            s && o.sliceDoc(b, b + e.length * 3) == e + e + e ? e + e + e : e
          return {
            changes: { from: b, to: b + _e.length, insert: _e },
            range: EditorSelection.cursor(b + _e.length)
          }
        }
      } else {
        if (
          s &&
          o.sliceDoc(b - 2 * e.length, b) == e + e &&
          (_ = canStartStringAt(o, b - 2 * e.length, c)) > -1 &&
          nodeStart(o, _)
        )
          return {
            changes: { insert: e + e + e + e, from: b },
            effects: closeBracketEffect.of(b + e.length),
            range: EditorSelection.cursor(b + e.length)
          }
        if (
          o.charCategorizer(b)($) != CharCategory.Word &&
          canStartStringAt(o, b, c) > -1 &&
          !probablyInString(o, b, e, c)
        )
          return {
            changes: { insert: e + e, from: b },
            effects: closeBracketEffect.of(b + e.length),
            range: EditorSelection.cursor(b + e.length)
          }
      }
      return { range: (h = g) }
    })
  return h ? null : o.update(d, { scrollIntoView: !0, userEvent: 'input.type' })
}
function nodeStart(o, e) {
  let s = syntaxTree(o).resolveInner(e + 1)
  return s.parent && s.from == e
}
function probablyInString(o, e, s, a) {
  let c = syntaxTree(o).resolveInner(e, -1),
    h = a.reduce((d, g) => Math.max(d, g.length), 0)
  for (let d = 0; d < 5; d++) {
    let g = o.sliceDoc(c.from, Math.min(c.to, c.from + s.length + h)),
      b = g.indexOf(s)
    if (!b || (b > -1 && a.indexOf(g.slice(0, b)) > -1)) {
      let _ = c.firstChild
      for (; _ && _.from == c.from && _.to - _.from > s.length + b; ) {
        if (o.sliceDoc(_.to - s.length, _.to) == s) return !1
        _ = _.firstChild
      }
      return !0
    }
    let $ = c.to == e && c.parent
    if (!$) break
    c = $
  }
  return !1
}
function canStartStringAt(o, e, s) {
  let a = o.charCategorizer(e)
  if (a(o.sliceDoc(e - 1, e)) != CharCategory.Word) return e
  for (let c of s) {
    let h = e - c.length
    if (o.sliceDoc(h, e) == c && a(o.sliceDoc(h - 1, h)) != CharCategory.Word)
      return h
  }
  return -1
}
function autocompletion(o = {}) {
  return [
    completionState,
    completionConfig.of(o),
    completionPlugin,
    completionKeymapExt,
    baseTheme$1
  ]
}
const completionKeymap = [
    { key: 'Ctrl-Space', run: startCompletion },
    { key: 'Escape', run: closeCompletion },
    { key: 'ArrowDown', run: moveCompletionSelection(!0) },
    { key: 'ArrowUp', run: moveCompletionSelection(!1) },
    { key: 'PageDown', run: moveCompletionSelection(!0, 'page') },
    { key: 'PageUp', run: moveCompletionSelection(!1, 'page') },
    { key: 'Enter', run: acceptCompletion }
  ],
  completionKeymapExt = Prec.highest(
    keymap.computeN([completionConfig], (o) =>
      o.facet(completionConfig).defaultKeymap ? [completionKeymap] : []
    )
  )
class SelectedDiagnostic {
  constructor(e, s, a) {
    ;(this.from = e), (this.to = s), (this.diagnostic = a)
  }
}
class LintState {
  constructor(e, s, a) {
    ;(this.diagnostics = e), (this.panel = s), (this.selected = a)
  }
  static init(e, s, a) {
    let c = e,
      h = a.facet(lintConfig).markerFilter
    h && (c = h(c))
    let d = Decoration.set(
      c.map((g) =>
        g.from == g.to ||
        (g.from == g.to - 1 && a.doc.lineAt(g.from).to == g.from)
          ? Decoration.widget({
              widget: new DiagnosticWidget(g),
              diagnostic: g
            }).range(g.from)
          : Decoration.mark({
              attributes: {
                class:
                  'cm-lintRange cm-lintRange-' +
                  g.severity +
                  (g.markClass ? ' ' + g.markClass : '')
              },
              diagnostic: g
            }).range(g.from, g.to)
      ),
      !0
    )
    return new LintState(d, s, findDiagnostic(d))
  }
}
function findDiagnostic(o, e = null, s = 0) {
  let a = null
  return (
    o.between(s, 1e9, (c, h, { spec: d }) => {
      if (!(e && d.diagnostic != e))
        return (a = new SelectedDiagnostic(c, h, d.diagnostic)), !1
    }),
    a
  )
}
function hideTooltip(o, e) {
  let s = o.startState.doc.lineAt(e.pos)
  return !!(
    o.effects.some((a) => a.is(setDiagnosticsEffect)) ||
    o.changes.touchesRange(s.from, s.to)
  )
}
function maybeEnableLint(o, e) {
  return o.field(lintState, !1)
    ? e
    : e.concat(StateEffect.appendConfig.of(lintExtensions))
}
const setDiagnosticsEffect = StateEffect.define(),
  togglePanel = StateEffect.define(),
  movePanelSelection = StateEffect.define(),
  lintState = StateField.define({
    create() {
      return new LintState(Decoration.none, null, null)
    },
    update(o, e) {
      if (e.docChanged) {
        let s = o.diagnostics.map(e.changes),
          a = null
        if (o.selected) {
          let c = e.changes.mapPos(o.selected.from, 1)
          a =
            findDiagnostic(s, o.selected.diagnostic, c) ||
            findDiagnostic(s, null, c)
        }
        o = new LintState(s, o.panel, a)
      }
      for (let s of e.effects)
        s.is(setDiagnosticsEffect)
          ? (o = LintState.init(s.value, o.panel, e.state))
          : s.is(togglePanel)
          ? (o = new LintState(
              o.diagnostics,
              s.value ? LintPanel.open : null,
              o.selected
            ))
          : s.is(movePanelSelection) &&
            (o = new LintState(o.diagnostics, o.panel, s.value))
      return o
    },
    provide: (o) => [
      showPanel.from(o, (e) => e.panel),
      EditorView.decorations.from(o, (e) => e.diagnostics)
    ]
  }),
  activeMark = Decoration.mark({ class: 'cm-lintRange cm-lintRange-active' })
function lintTooltip(o, e, s) {
  let { diagnostics: a } = o.state.field(lintState),
    c = [],
    h = 2e8,
    d = 0
  a.between(e - (s < 0 ? 1 : 0), e + (s > 0 ? 1 : 0), (b, $, { spec: _ }) => {
    e >= b &&
      e <= $ &&
      (b == $ || ((e > b || s > 0) && (e < $ || s < 0))) &&
      (c.push(_.diagnostic), (h = Math.min(b, h)), (d = Math.max($, d)))
  })
  let g = o.state.facet(lintConfig).tooltipFilter
  return (
    g && (c = g(c)),
    c.length
      ? {
          pos: h,
          end: d,
          above: o.state.doc.lineAt(h).to < d,
          create() {
            return { dom: diagnosticsTooltip(o, c) }
          }
        }
      : null
  )
}
function diagnosticsTooltip(o, e) {
  return crelt(
    'ul',
    { class: 'cm-tooltip-lint' },
    e.map((s) => renderDiagnostic(o, s, !1))
  )
}
const openLintPanel = (o) => {
    let e = o.state.field(lintState, !1)
    ;(!e || !e.panel) &&
      o.dispatch({ effects: maybeEnableLint(o.state, [togglePanel.of(!0)]) })
    let s = getPanel(o, LintPanel.open)
    return s && s.dom.querySelector('.cm-panel-lint ul').focus(), !0
  },
  closeLintPanel = (o) => {
    let e = o.state.field(lintState, !1)
    return !e || !e.panel
      ? !1
      : (o.dispatch({ effects: togglePanel.of(!1) }), !0)
  },
  nextDiagnostic = (o) => {
    let e = o.state.field(lintState, !1)
    if (!e) return !1
    let s = o.state.selection.main,
      a = e.diagnostics.iter(s.to + 1)
    return !a.value &&
      ((a = e.diagnostics.iter(0)),
      !a.value || (a.from == s.from && a.to == s.to))
      ? !1
      : (o.dispatch({
          selection: { anchor: a.from, head: a.to },
          scrollIntoView: !0
        }),
        !0)
  },
  lintKeymap = [
    { key: 'Mod-Shift-m', run: openLintPanel, preventDefault: !0 },
    { key: 'F8', run: nextDiagnostic }
  ],
  lintConfig = Facet.define({
    combine(o) {
      return Object.assign(
        { sources: o.map((e) => e.source) },
        combineConfig(
          o.map((e) => e.config),
          {
            delay: 750,
            markerFilter: null,
            tooltipFilter: null,
            needsRefresh: null
          },
          { needsRefresh: (e, s) => (e ? (s ? (a) => e(a) || s(a) : e) : s) }
        )
      )
    }
  })
function assignKeys(o) {
  let e = []
  if (o)
    e: for (let { name: s } of o) {
      for (let a = 0; a < s.length; a++) {
        let c = s[a]
        if (
          /[a-zA-Z]/.test(c) &&
          !e.some((h) => h.toLowerCase() == c.toLowerCase())
        ) {
          e.push(c)
          continue e
        }
      }
      e.push('')
    }
  return e
}
function renderDiagnostic(o, e, s) {
  var a
  let c = s ? assignKeys(e.actions) : []
  return crelt(
    'li',
    { class: 'cm-diagnostic cm-diagnostic-' + e.severity },
    crelt(
      'span',
      { class: 'cm-diagnosticText' },
      e.renderMessage ? e.renderMessage() : e.message
    ),
    (a = e.actions) === null || a === void 0
      ? void 0
      : a.map((h, d) => {
          let g = !1,
            b = (_e) => {
              if ((_e.preventDefault(), g)) return
              g = !0
              let et = findDiagnostic(o.state.field(lintState).diagnostics, e)
              et && h.apply(o, et.from, et.to)
            },
            { name: $ } = h,
            _ = c[d] ? $.indexOf(c[d]) : -1,
            j =
              _ < 0
                ? $
                : [$.slice(0, _), crelt('u', $.slice(_, _ + 1)), $.slice(_ + 1)]
          return crelt(
            'button',
            {
              type: 'button',
              class: 'cm-diagnosticAction',
              onclick: b,
              onmousedown: b,
              'aria-label': ` Action: ${$}${
                _ < 0 ? '' : ` (access key "${c[d]})"`
              }.`
            },
            j
          )
        }),
    e.source && crelt('div', { class: 'cm-diagnosticSource' }, e.source)
  )
}
class DiagnosticWidget extends WidgetType {
  constructor(e) {
    super(), (this.diagnostic = e)
  }
  eq(e) {
    return e.diagnostic == this.diagnostic
  }
  toDOM() {
    return crelt('span', {
      class: 'cm-lintPoint cm-lintPoint-' + this.diagnostic.severity
    })
  }
}
class PanelItem {
  constructor(e, s) {
    ;(this.diagnostic = s),
      (this.id = 'item_' + Math.floor(Math.random() * 4294967295).toString(16)),
      (this.dom = renderDiagnostic(e, s, !0)),
      (this.dom.id = this.id),
      this.dom.setAttribute('role', 'option')
  }
}
class LintPanel {
  constructor(e) {
    ;(this.view = e), (this.items = [])
    let s = (c) => {
        if (c.keyCode == 27) closeLintPanel(this.view), this.view.focus()
        else if (c.keyCode == 38 || c.keyCode == 33)
          this.moveSelection(
            (this.selectedIndex - 1 + this.items.length) % this.items.length
          )
        else if (c.keyCode == 40 || c.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length)
        else if (c.keyCode == 36) this.moveSelection(0)
        else if (c.keyCode == 35) this.moveSelection(this.items.length - 1)
        else if (c.keyCode == 13) this.view.focus()
        else if (
          c.keyCode >= 65 &&
          c.keyCode <= 90 &&
          this.selectedIndex >= 0
        ) {
          let { diagnostic: h } = this.items[this.selectedIndex],
            d = assignKeys(h.actions)
          for (let g = 0; g < d.length; g++)
            if (d[g].toUpperCase().charCodeAt(0) == c.keyCode) {
              let b = findDiagnostic(
                this.view.state.field(lintState).diagnostics,
                h
              )
              b && h.actions[g].apply(e, b.from, b.to)
            }
        } else return
        c.preventDefault()
      },
      a = (c) => {
        for (let h = 0; h < this.items.length; h++)
          this.items[h].dom.contains(c.target) && this.moveSelection(h)
      }
    ;(this.list = crelt('ul', {
      tabIndex: 0,
      role: 'listbox',
      'aria-label': this.view.state.phrase('Diagnostics'),
      onkeydown: s,
      onclick: a
    })),
      (this.dom = crelt(
        'div',
        { class: 'cm-panel-lint' },
        this.list,
        crelt(
          'button',
          {
            type: 'button',
            name: 'close',
            'aria-label': this.view.state.phrase('close'),
            onclick: () => closeLintPanel(this.view)
          },
          '×'
        )
      )),
      this.update()
  }
  get selectedIndex() {
    let e = this.view.state.field(lintState).selected
    if (!e) return -1
    for (let s = 0; s < this.items.length; s++)
      if (this.items[s].diagnostic == e.diagnostic) return s
    return -1
  }
  update() {
    let { diagnostics: e, selected: s } = this.view.state.field(lintState),
      a = 0,
      c = !1,
      h = null
    for (
      e.between(0, this.view.state.doc.length, (d, g, { spec: b }) => {
        let $ = -1,
          _
        for (let j = a; j < this.items.length; j++)
          if (this.items[j].diagnostic == b.diagnostic) {
            $ = j
            break
          }
        $ < 0
          ? ((_ = new PanelItem(this.view, b.diagnostic)),
            this.items.splice(a, 0, _),
            (c = !0))
          : ((_ = this.items[$]),
            $ > a && (this.items.splice(a, $ - a), (c = !0))),
          s && _.diagnostic == s.diagnostic
            ? _.dom.hasAttribute('aria-selected') ||
              (_.dom.setAttribute('aria-selected', 'true'), (h = _))
            : _.dom.hasAttribute('aria-selected') &&
              _.dom.removeAttribute('aria-selected'),
          a++
      });
      a < this.items.length &&
      !(this.items.length == 1 && this.items[0].diagnostic.from < 0);

    )
      (c = !0), this.items.pop()
    this.items.length == 0 &&
      (this.items.push(
        new PanelItem(this.view, {
          from: -1,
          to: -1,
          severity: 'info',
          message: this.view.state.phrase('No diagnostics')
        })
      ),
      (c = !0)),
      h
        ? (this.list.setAttribute('aria-activedescendant', h.id),
          this.view.requestMeasure({
            key: this,
            read: () => ({
              sel: h.dom.getBoundingClientRect(),
              panel: this.list.getBoundingClientRect()
            }),
            write: ({ sel: d, panel: g }) => {
              let b = g.height / this.list.offsetHeight
              d.top < g.top
                ? (this.list.scrollTop -= (g.top - d.top) / b)
                : d.bottom > g.bottom &&
                  (this.list.scrollTop += (d.bottom - g.bottom) / b)
            }
          }))
        : this.selectedIndex < 0 &&
          this.list.removeAttribute('aria-activedescendant'),
      c && this.sync()
  }
  sync() {
    let e = this.list.firstChild
    function s() {
      let a = e
      ;(e = a.nextSibling), a.remove()
    }
    for (let a of this.items)
      if (a.dom.parentNode == this.list) {
        for (; e != a.dom; ) s()
        e = a.dom.nextSibling
      } else this.list.insertBefore(a.dom, e)
    for (; e; ) s()
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) return
    let s = this.view.state.field(lintState),
      a = findDiagnostic(s.diagnostics, this.items[e].diagnostic)
    a &&
      this.view.dispatch({
        selection: { anchor: a.from, head: a.to },
        scrollIntoView: !0,
        effects: movePanelSelection.of(a)
      })
  }
  static open(e) {
    return new LintPanel(e)
  }
}
function svg(o, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(
    o
  )}</svg>')`
}
function underline(o) {
  return svg(
    `<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${o}" fill="none" stroke-width=".7"/>`,
    'width="6" height="3"'
  )
}
const baseTheme = EditorView.baseTheme({
    '.cm-diagnostic': {
      padding: '3px 6px 3px 8px',
      marginLeft: '-1px',
      display: 'block',
      whiteSpace: 'pre-wrap'
    },
    '.cm-diagnostic-error': { borderLeft: '5px solid #d11' },
    '.cm-diagnostic-warning': { borderLeft: '5px solid orange' },
    '.cm-diagnostic-info': { borderLeft: '5px solid #999' },
    '.cm-diagnostic-hint': { borderLeft: '5px solid #66d' },
    '.cm-diagnosticAction': {
      font: 'inherit',
      border: 'none',
      padding: '2px 4px',
      backgroundColor: '#444',
      color: 'white',
      borderRadius: '3px',
      marginLeft: '8px',
      cursor: 'pointer'
    },
    '.cm-diagnosticSource': { fontSize: '70%', opacity: 0.7 },
    '.cm-lintRange': {
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'repeat-x',
      paddingBottom: '0.7px'
    },
    '.cm-lintRange-error': { backgroundImage: underline('#d11') },
    '.cm-lintRange-warning': { backgroundImage: underline('orange') },
    '.cm-lintRange-info': { backgroundImage: underline('#999') },
    '.cm-lintRange-hint': { backgroundImage: underline('#66d') },
    '.cm-lintRange-active': { backgroundColor: '#ffdd9980' },
    '.cm-tooltip-lint': { padding: 0, margin: 0 },
    '.cm-lintPoint': {
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '-2px',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
        borderBottom: '4px solid #d11'
      }
    },
    '.cm-lintPoint-warning': { '&:after': { borderBottomColor: 'orange' } },
    '.cm-lintPoint-info': { '&:after': { borderBottomColor: '#999' } },
    '.cm-lintPoint-hint': { '&:after': { borderBottomColor: '#66d' } },
    '.cm-panel.cm-panel-lint': {
      position: 'relative',
      '& ul': {
        maxHeight: '100px',
        overflowY: 'auto',
        '& [aria-selected]': {
          backgroundColor: '#ddd',
          '& u': { textDecoration: 'underline' }
        },
        '&:focus [aria-selected]': {
          background_fallback: '#bdf',
          backgroundColor: 'Highlight',
          color_fallback: 'white',
          color: 'HighlightText'
        },
        '& u': { textDecoration: 'none' },
        padding: 0,
        margin: 0
      },
      '& [name=close]': {
        position: 'absolute',
        top: '0',
        right: '2px',
        background: 'inherit',
        border: 'none',
        font: 'inherit',
        padding: 0,
        margin: 0
      }
    }
  }),
  lintExtensions = [
    lintState,
    EditorView.decorations.compute([lintState], (o) => {
      let { selected: e, panel: s } = o.field(lintState)
      return !e || !s || e.from == e.to
        ? Decoration.none
        : Decoration.set([activeMark.range(e.from, e.to)])
    }),
    hoverTooltip(lintTooltip, { hideOn: hideTooltip }),
    baseTheme
  ]
var basicSetup = function (e) {
  e === void 0 && (e = {})
  var s = []
  e.closeBracketsKeymap !== !1 && (s = s.concat(closeBracketsKeymap)),
    e.defaultKeymap !== !1 && (s = s.concat(defaultKeymap)),
    e.searchKeymap !== !1 && (s = s.concat(searchKeymap)),
    e.historyKeymap !== !1 && (s = s.concat(historyKeymap)),
    e.foldKeymap !== !1 && (s = s.concat(foldKeymap)),
    e.completionKeymap !== !1 && (s = s.concat(completionKeymap)),
    e.lintKeymap !== !1 && (s = s.concat(lintKeymap))
  var a = []
  return (
    e.lineNumbers !== !1 && a.push(lineNumbers()),
    e.highlightActiveLineGutter !== !1 && a.push(highlightActiveLineGutter()),
    e.highlightSpecialChars !== !1 && a.push(highlightSpecialChars()),
    e.history !== !1 && a.push(history()),
    e.foldGutter !== !1 && a.push(foldGutter()),
    e.drawSelection !== !1 && a.push(drawSelection()),
    e.dropCursor !== !1 && a.push(dropCursor()),
    e.allowMultipleSelections !== !1 &&
      a.push(EditorState.allowMultipleSelections.of(!0)),
    e.indentOnInput !== !1 && a.push(indentOnInput()),
    e.syntaxHighlighting !== !1 &&
      a.push(syntaxHighlighting(defaultHighlightStyle, { fallback: !0 })),
    e.bracketMatching !== !1 && a.push(bracketMatching()),
    e.closeBrackets !== !1 && a.push(closeBrackets()),
    e.autocompletion !== !1 && a.push(autocompletion()),
    e.rectangularSelection !== !1 && a.push(rectangularSelection()),
    e.crosshairCursor !== !1 && a.push(crosshairCursor()),
    e.highlightActiveLine !== !1 && a.push(highlightActiveLine()),
    e.highlightSelectionMatches !== !1 && a.push(highlightSelectionMatches()),
    e.tabSize &&
      typeof e.tabSize == 'number' &&
      a.push(indentUnit.of(' '.repeat(e.tabSize))),
    a.concat([keymap.of(s.flat())]).filter(Boolean)
  )
}
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#ffffff',
  ivory = '#abb2bf',
  stone = '#7d8799',
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = '#2c313a',
  background = '#282c34',
  tooltipBackground = '#353a42',
  selection = '#3E4451',
  cursor = '#528bff',
  oneDarkTheme = EditorView.theme(
    {
      '&': { color: ivory, backgroundColor: background },
      '.cm-content': { caretColor: cursor },
      '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
      '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
        { backgroundColor: selection },
      '.cm-panels': { backgroundColor: darkBackground, color: ivory },
      '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
      '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
      '.cm-searchMatch': {
        backgroundColor: '#72a1ff59',
        outline: '1px solid #457dff'
      },
      '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: '#6199ff2f'
      },
      '.cm-activeLine': { backgroundColor: '#6699ff0b' },
      '.cm-selectionMatch': { backgroundColor: '#aafe661a' },
      '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
        backgroundColor: '#bad0f847'
      },
      '.cm-gutters': {
        backgroundColor: background,
        color: stone,
        border: 'none'
      },
      '.cm-activeLineGutter': { backgroundColor: highlightBackground },
      '.cm-foldPlaceholder': {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#ddd'
      },
      '.cm-tooltip': { border: 'none', backgroundColor: tooltipBackground },
      '.cm-tooltip .cm-tooltip-arrow:before': {
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
      },
      '.cm-tooltip .cm-tooltip-arrow:after': {
        borderTopColor: tooltipBackground,
        borderBottomColor: tooltipBackground
      },
      '.cm-tooltip-autocomplete': {
        '& > ul > li[aria-selected]': {
          backgroundColor: highlightBackground,
          color: ivory
        }
      }
    },
    { dark: !0 }
  ),
  oneDarkHighlightStyle = HighlightStyle.define([
    { tag: tags.keyword, color: violet },
    {
      tag: [
        tags.name,
        tags.deleted,
        tags.character,
        tags.propertyName,
        tags.macroName
      ],
      color: coral
    },
    { tag: [tags.function(tags.variableName), tags.labelName], color: malibu },
    {
      tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)],
      color: whiskey
    },
    { tag: [tags.definition(tags.name), tags.separator], color: ivory },
    {
      tag: [
        tags.typeName,
        tags.className,
        tags.number,
        tags.changed,
        tags.annotation,
        tags.modifier,
        tags.self,
        tags.namespace
      ],
      color: chalky
    },
    {
      tag: [
        tags.operator,
        tags.operatorKeyword,
        tags.url,
        tags.escape,
        tags.regexp,
        tags.link,
        tags.special(tags.string)
      ],
      color: cyan
    },
    { tag: [tags.meta, tags.comment], color: stone },
    { tag: tags.strong, fontWeight: 'bold' },
    { tag: tags.emphasis, fontStyle: 'italic' },
    { tag: tags.strikethrough, textDecoration: 'line-through' },
    { tag: tags.link, color: stone, textDecoration: 'underline' },
    { tag: tags.heading, fontWeight: 'bold', color: coral },
    {
      tag: [tags.atom, tags.bool, tags.special(tags.variableName)],
      color: whiskey
    },
    {
      tag: [tags.processingInstruction, tags.string, tags.inserted],
      color: sage
    },
    { tag: tags.invalid, color: invalid }
  ]),
  oneDark = [oneDarkTheme, syntaxHighlighting(oneDarkHighlightStyle)]
var defaultLightThemeOption = EditorView.theme(
    { '&': { backgroundColor: '#fff' } },
    { dark: !1 }
  ),
  getDefaultExtensions = function (e) {
    e === void 0 && (e = {})
    var {
        indentWithTab: s = !0,
        editable: a = !0,
        readOnly: c = !1,
        theme: h = 'light',
        placeholder: d = '',
        basicSetup: g = !0
      } = e,
      b = []
    switch (
      (s && b.unshift(keymap.of([indentWithTab])),
      g &&
        (typeof g == 'boolean'
          ? b.unshift(basicSetup())
          : b.unshift(basicSetup(g))),
      d && b.unshift(placeholder(d)),
      h)
    ) {
      case 'light':
        b.push(defaultLightThemeOption)
        break
      case 'dark':
        b.push(oneDark)
        break
      case 'none':
        break
      default:
        b.push(h)
        break
    }
    return (
      a === !1 && b.push(EditorView.editable.of(!1)),
      c && b.push(EditorState.readOnly.of(!0)),
      [...b]
    )
  },
  getStatistics = (o) => ({
    line: o.state.doc.lineAt(o.state.selection.main.from),
    lineCount: o.state.doc.lines,
    lineBreak: o.state.lineBreak,
    length: o.state.doc.length,
    readOnly: o.state.readOnly,
    tabSize: o.state.tabSize,
    selection: o.state.selection,
    selectionAsSingle: o.state.selection.asSingle().main,
    ranges: o.state.selection.ranges,
    selectionCode: o.state.sliceDoc(
      o.state.selection.main.from,
      o.state.selection.main.to
    ),
    selections: o.state.selection.ranges.map((e) =>
      o.state.sliceDoc(e.from, e.to)
    ),
    selectedText: o.state.selection.ranges.some((e) => !e.empty)
  }),
  External = Annotation.define(),
  emptyExtensions = []
function useCodeMirror(o) {
  var {
      value: e,
      selection: s,
      onChange: a,
      onStatistics: c,
      onCreateEditor: h,
      onUpdate: d,
      extensions: g = emptyExtensions,
      autoFocus: b,
      theme: $ = 'light',
      height: _ = null,
      minHeight: j = null,
      maxHeight: _e = null,
      width: et = null,
      minWidth: tt = null,
      maxWidth: rt = null,
      placeholder: st = '',
      editable: nt = !0,
      readOnly: it = !1,
      indentWithTab: ot = !0,
      basicSetup: lt = !0,
      root: at,
      initialState: ct
    } = o,
    [ut, ht] = reactExports.useState(),
    [pt, dt] = reactExports.useState(),
    [Ot, St] = reactExports.useState(),
    vt = EditorView.theme({
      '&': {
        height: _,
        minHeight: j,
        maxHeight: _e,
        width: et,
        minWidth: tt,
        maxWidth: rt
      },
      '& .cm-scroller': { height: '100% !important' }
    }),
    bt = EditorView.updateListener.of((kt) => {
      if (
        kt.docChanged &&
        typeof a == 'function' &&
        !kt.transactions.some((mt) => mt.annotation(External))
      ) {
        var ft = kt.state.doc,
          gt = ft.toString()
        a(gt, kt)
      }
      c && c(getStatistics(kt))
    }),
    Ct = getDefaultExtensions({
      theme: $,
      editable: nt,
      readOnly: it,
      placeholder: st,
      indentWithTab: ot,
      basicSetup: lt
    }),
    wt = [bt, vt, ...Ct]
  return (
    d && typeof d == 'function' && wt.push(EditorView.updateListener.of(d)),
    (wt = wt.concat(g)),
    reactExports.useEffect(() => {
      if (ut && !Ot) {
        var kt = { doc: e, selection: s, extensions: wt },
          ft = ct
            ? EditorState.fromJSON(ct.json, kt, ct.fields)
            : EditorState.create(kt)
        if ((St(ft), !pt)) {
          var gt = new EditorView({ state: ft, parent: ut, root: at })
          dt(gt), h && h(gt, ft)
        }
      }
      return () => {
        pt && (St(void 0), dt(void 0))
      }
    }, [ut, Ot]),
    reactExports.useEffect(() => ht(o.container), [o.container]),
    reactExports.useEffect(
      () => () => {
        pt && (pt.destroy(), dt(void 0))
      },
      [pt]
    ),
    reactExports.useEffect(() => {
      b && pt && pt.focus()
    }, [b, pt]),
    reactExports.useEffect(() => {
      pt && pt.dispatch({ effects: StateEffect.reconfigure.of(wt) })
    }, [$, g, _, j, _e, et, tt, rt, st, nt, it, ot, lt, a, d]),
    reactExports.useEffect(() => {
      if (e !== void 0) {
        var kt = pt ? pt.state.doc.toString() : ''
        pt &&
          e !== kt &&
          pt.dispatch({
            changes: { from: 0, to: kt.length, insert: e || '' },
            annotations: [External.of(!0)]
          })
      }
    }, [e, pt]),
    {
      state: Ot,
      setState: St,
      view: pt,
      setView: dt,
      container: ut,
      setContainer: ht
    }
  )
}
var _excluded = [
    'className',
    'value',
    'selection',
    'extensions',
    'onChange',
    'onStatistics',
    'onCreateEditor',
    'onUpdate',
    'autoFocus',
    'theme',
    'height',
    'minHeight',
    'maxHeight',
    'width',
    'minWidth',
    'maxWidth',
    'basicSetup',
    'placeholder',
    'indentWithTab',
    'editable',
    'readOnly',
    'root',
    'initialState'
  ],
  ReactCodeMirror = reactExports.forwardRef((o, e) => {
    var {
        className: s,
        value: a = '',
        selection: c,
        extensions: h = [],
        onChange: d,
        onStatistics: g,
        onCreateEditor: b,
        onUpdate: $,
        autoFocus: _,
        theme: j = 'light',
        height: _e,
        minHeight: et,
        maxHeight: tt,
        width: rt,
        minWidth: st,
        maxWidth: nt,
        basicSetup: it,
        placeholder: ot,
        indentWithTab: lt,
        editable: at,
        readOnly: ct,
        root: ut,
        initialState: ht
      } = o,
      pt = _objectWithoutPropertiesLoose(o, _excluded),
      dt = reactExports.useRef(null),
      {
        state: Ot,
        view: St,
        container: vt
      } = useCodeMirror({
        container: dt.current,
        root: ut,
        value: a,
        autoFocus: _,
        theme: j,
        height: _e,
        minHeight: et,
        maxHeight: tt,
        width: rt,
        minWidth: st,
        maxWidth: nt,
        basicSetup: it,
        placeholder: ot,
        indentWithTab: lt,
        editable: at,
        readOnly: ct,
        selection: c,
        onChange: d,
        onStatistics: g,
        onCreateEditor: b,
        onUpdate: $,
        extensions: h,
        initialState: ht
      })
    if (
      (reactExports.useImperativeHandle(
        e,
        () => ({ editor: dt.current, state: Ot, view: St }),
        [dt, vt, Ot, St]
      ),
      typeof a != 'string')
    )
      throw new Error('value must be typeof string but got ' + typeof a)
    var bt = typeof j == 'string' ? 'cm-theme-' + j : 'cm-theme'
    return jsxRuntimeExports.jsx(
      'div',
      _extends({ ref: dt, className: '' + bt + (s ? ' ' + s : '') }, pt)
    )
  })
ReactCodeMirror.displayName = 'CodeMirror'
class Stack {
  constructor(e, s, a, c, h, d, g, b, $, _ = 0, j) {
    ;(this.p = e),
      (this.stack = s),
      (this.state = a),
      (this.reducePos = c),
      (this.pos = h),
      (this.score = d),
      (this.buffer = g),
      (this.bufferBase = b),
      (this.curContext = $),
      (this.lookAhead = _),
      (this.parent = j)
  }
  toString() {
    return `[${this.stack.filter((e, s) => s % 3 == 0).concat(this.state)}]@${
      this.pos
    }${this.score ? '!' + this.score : ''}`
  }
  static start(e, s, a = 0) {
    let c = e.parser.context
    return new Stack(
      e,
      [],
      s,
      a,
      a,
      0,
      [],
      0,
      c ? new StackContext(c, c.start) : null,
      0,
      null
    )
  }
  get context() {
    return this.curContext ? this.curContext.context : null
  }
  pushState(e, s) {
    this.stack.push(this.state, s, this.bufferBase + this.buffer.length),
      (this.state = e)
  }
  reduce(e) {
    var s
    let a = e >> 19,
      c = e & 65535,
      { parser: h } = this.p,
      d = h.dynamicPrecedence(c)
    if ((d && (this.score += d), a == 0)) {
      this.pushState(h.getGoto(this.state, c, !0), this.reducePos),
        c < h.minRepeatTerm &&
          this.storeNode(c, this.reducePos, this.reducePos, 4, !0),
        this.reduceContext(c, this.reducePos)
      return
    }
    let g = this.stack.length - (a - 1) * 3 - (e & 262144 ? 6 : 0),
      b = g ? this.stack[g - 2] : this.p.ranges[0].from,
      $ = this.reducePos - b
    $ >= 2e3 &&
      !(
        !((s = this.p.parser.nodeSet.types[c]) === null || s === void 0) &&
        s.isAnonymous
      ) &&
      (b == this.p.lastBigReductionStart
        ? (this.p.bigReductionCount++, (this.p.lastBigReductionSize = $))
        : this.p.lastBigReductionSize < $ &&
          ((this.p.bigReductionCount = 1),
          (this.p.lastBigReductionStart = b),
          (this.p.lastBigReductionSize = $)))
    let _ = g ? this.stack[g - 1] : 0,
      j = this.bufferBase + this.buffer.length - _
    if (c < h.minRepeatTerm || e & 131072) {
      let _e = h.stateFlag(this.state, 1) ? this.pos : this.reducePos
      this.storeNode(c, b, _e, j + 4, !0)
    }
    if (e & 262144) this.state = this.stack[g]
    else {
      let _e = this.stack[g - 3]
      this.state = h.getGoto(_e, c, !0)
    }
    for (; this.stack.length > g; ) this.stack.pop()
    this.reduceContext(c, b)
  }
  storeNode(e, s, a, c = 4, h = !1) {
    if (
      e == 0 &&
      (!this.stack.length ||
        this.stack[this.stack.length - 1] <
          this.buffer.length + this.bufferBase)
    ) {
      let d = this,
        g = this.buffer.length
      if (
        (g == 0 &&
          d.parent &&
          ((g = d.bufferBase - d.parent.bufferBase), (d = d.parent)),
        g > 0 && d.buffer[g - 4] == 0 && d.buffer[g - 1] > -1)
      ) {
        if (s == a) return
        if (d.buffer[g - 2] >= s) {
          d.buffer[g - 2] = a
          return
        }
      }
    }
    if (!h || this.pos == a) this.buffer.push(e, s, a, c)
    else {
      let d = this.buffer.length
      if (d > 0 && this.buffer[d - 4] != 0)
        for (; d > 0 && this.buffer[d - 2] > a; )
          (this.buffer[d] = this.buffer[d - 4]),
            (this.buffer[d + 1] = this.buffer[d - 3]),
            (this.buffer[d + 2] = this.buffer[d - 2]),
            (this.buffer[d + 3] = this.buffer[d - 1]),
            (d -= 4),
            c > 4 && (c -= 4)
      ;(this.buffer[d] = e),
        (this.buffer[d + 1] = s),
        (this.buffer[d + 2] = a),
        (this.buffer[d + 3] = c)
    }
  }
  shift(e, s, a, c) {
    if (e & 131072) this.pushState(e & 65535, this.pos)
    else if (e & 262144)
      (this.pos = c),
        this.shiftContext(s, a),
        s <= this.p.parser.maxNode && this.buffer.push(s, a, c, 4)
    else {
      let h = e,
        { parser: d } = this.p
      ;(c > this.pos || s <= d.maxNode) &&
        ((this.pos = c), d.stateFlag(h, 1) || (this.reducePos = c)),
        this.pushState(h, a),
        this.shiftContext(s, a),
        s <= d.maxNode && this.buffer.push(s, a, c, 4)
    }
  }
  apply(e, s, a, c) {
    e & 65536 ? this.reduce(e) : this.shift(e, s, a, c)
  }
  useNode(e, s) {
    let a = this.p.reused.length - 1
    ;(a < 0 || this.p.reused[a] != e) && (this.p.reused.push(e), a++)
    let c = this.pos
    ;(this.reducePos = this.pos = c + e.length),
      this.pushState(s, c),
      this.buffer.push(a, c, this.reducePos, -1),
      this.curContext &&
        this.updateContext(
          this.curContext.tracker.reuse(
            this.curContext.context,
            e,
            this,
            this.p.stream.reset(this.pos - e.length)
          )
        )
  }
  split() {
    let e = this,
      s = e.buffer.length
    for (; s > 0 && e.buffer[s - 2] > e.reducePos; ) s -= 4
    let a = e.buffer.slice(s),
      c = e.bufferBase + s
    for (; e && c == e.bufferBase; ) e = e.parent
    return new Stack(
      this.p,
      this.stack.slice(),
      this.state,
      this.reducePos,
      this.pos,
      this.score,
      a,
      c,
      this.curContext,
      this.lookAhead,
      e
    )
  }
  recoverByDelete(e, s) {
    let a = e <= this.p.parser.maxNode
    a && this.storeNode(e, this.pos, s, 4),
      this.storeNode(0, this.pos, s, a ? 8 : 4),
      (this.pos = this.reducePos = s),
      (this.score -= 190)
  }
  canShift(e) {
    for (let s = new SimulatedStack(this); ; ) {
      let a =
        this.p.parser.stateSlot(s.state, 4) ||
        this.p.parser.hasAction(s.state, e)
      if (a == 0) return !1
      if (!(a & 65536)) return !0
      s.reduce(a)
    }
  }
  recoverByInsert(e) {
    if (this.stack.length >= 300) return []
    let s = this.p.parser.nextStates(this.state)
    if (s.length > 8 || this.stack.length >= 120) {
      let c = []
      for (let h = 0, d; h < s.length; h += 2)
        (d = s[h + 1]) != this.state &&
          this.p.parser.hasAction(d, e) &&
          c.push(s[h], d)
      if (this.stack.length < 120)
        for (let h = 0; c.length < 8 && h < s.length; h += 2) {
          let d = s[h + 1]
          c.some((g, b) => b & 1 && g == d) || c.push(s[h], d)
        }
      s = c
    }
    let a = []
    for (let c = 0; c < s.length && a.length < 4; c += 2) {
      let h = s[c + 1]
      if (h == this.state) continue
      let d = this.split()
      d.pushState(h, this.pos),
        d.storeNode(0, d.pos, d.pos, 4, !0),
        d.shiftContext(s[c], this.pos),
        (d.score -= 200),
        a.push(d)
    }
    return a
  }
  forceReduce() {
    let { parser: e } = this.p,
      s = e.stateSlot(this.state, 5)
    if (!(s & 65536)) return !1
    if (!e.validAction(this.state, s)) {
      let a = s >> 19,
        c = s & 65535,
        h = this.stack.length - a * 3
      if (h < 0 || e.getGoto(this.stack[h], c, !1) < 0) {
        let d = this.findForcedReduction()
        if (d == null) return !1
        s = d
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), (this.score -= 100)
    }
    return (this.reducePos = this.pos), this.reduce(s), !0
  }
  findForcedReduction() {
    let { parser: e } = this.p,
      s = [],
      a = (c, h) => {
        if (!s.includes(c))
          return (
            s.push(c),
            e.allActions(c, (d) => {
              if (!(d & 393216))
                if (d & 65536) {
                  let g = (d >> 19) - h
                  if (g > 1) {
                    let b = d & 65535,
                      $ = this.stack.length - g * 3
                    if ($ >= 0 && e.getGoto(this.stack[$], b, !1) >= 0)
                      return (g << 19) | 65536 | b
                  }
                } else {
                  let g = a(d, h + 1)
                  if (g != null) return g
                }
            })
          )
      }
    return a(this.state, 0)
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0)
        break
      }
    return this
  }
  get deadEnd() {
    if (this.stack.length != 3) return !1
    let { parser: e } = this.p
    return (
      e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4)
    )
  }
  restart() {
    ;(this.state = this.stack[0]), (this.stack.length = 0)
  }
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length) return !1
    for (let s = 0; s < this.stack.length; s += 3)
      if (this.stack[s] != e.stack[s]) return !1
    return !0
  }
  get parser() {
    return this.p.parser
  }
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e]
  }
  shiftContext(e, s) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.shift(
          this.curContext.context,
          e,
          this,
          this.p.stream.reset(s)
        )
      )
  }
  reduceContext(e, s) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.reduce(
          this.curContext.context,
          e,
          this,
          this.p.stream.reset(s)
        )
      )
  }
  emitContext() {
    let e = this.buffer.length - 1
    ;(e < 0 || this.buffer[e] != -3) &&
      this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
  }
  emitLookAhead() {
    let e = this.buffer.length - 1
    ;(e < 0 || this.buffer[e] != -4) &&
      this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let s = new StackContext(this.curContext.tracker, e)
      s.hash != this.curContext.hash && this.emitContext(),
        (this.curContext = s)
    }
  }
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = e))
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(),
      this.lookAhead > 0 && this.emitLookAhead()
  }
}
class StackContext {
  constructor(e, s) {
    ;(this.tracker = e),
      (this.context = s),
      (this.hash = e.strict ? e.hash(s) : 0)
  }
}
class SimulatedStack {
  constructor(e) {
    ;(this.start = e),
      (this.state = e.state),
      (this.stack = e.stack),
      (this.base = this.stack.length)
  }
  reduce(e) {
    let s = e & 65535,
      a = e >> 19
    a == 0
      ? (this.stack == this.start.stack && (this.stack = this.stack.slice()),
        this.stack.push(this.state, 0, 0),
        (this.base += 3))
      : (this.base -= (a - 1) * 3)
    let c = this.start.p.parser.getGoto(this.stack[this.base - 3], s, !0)
    this.state = c
  }
}
class StackBufferCursor {
  constructor(e, s, a) {
    ;(this.stack = e),
      (this.pos = s),
      (this.index = a),
      (this.buffer = e.buffer),
      this.index == 0 && this.maybeNext()
  }
  static create(e, s = e.bufferBase + e.buffer.length) {
    return new StackBufferCursor(e, s, s - e.bufferBase)
  }
  maybeNext() {
    let e = this.stack.parent
    e != null &&
      ((this.index = this.stack.bufferBase - e.bufferBase),
      (this.stack = e),
      (this.buffer = e.buffer))
  }
  get id() {
    return this.buffer[this.index - 4]
  }
  get start() {
    return this.buffer[this.index - 3]
  }
  get end() {
    return this.buffer[this.index - 2]
  }
  get size() {
    return this.buffer[this.index - 1]
  }
  next() {
    ;(this.index -= 4), (this.pos -= 4), this.index == 0 && this.maybeNext()
  }
  fork() {
    return new StackBufferCursor(this.stack, this.pos, this.index)
  }
}
function decodeArray(o, e = Uint16Array) {
  if (typeof o != 'string') return o
  let s = null
  for (let a = 0, c = 0; a < o.length; ) {
    let h = 0
    for (;;) {
      let d = o.charCodeAt(a++),
        g = !1
      if (d == 126) {
        h = 65535
        break
      }
      d >= 92 && d--, d >= 34 && d--
      let b = d - 32
      if ((b >= 46 && ((b -= 46), (g = !0)), (h += b), g)) break
      h *= 46
    }
    s ? (s[c++] = h) : (s = new e(h))
  }
  return s
}
class CachedToken {
  constructor() {
    ;(this.start = -1),
      (this.value = -1),
      (this.end = -1),
      (this.extended = -1),
      (this.lookAhead = 0),
      (this.mask = 0),
      (this.context = 0)
  }
}
const nullToken = new CachedToken()
class InputStream {
  constructor(e, s) {
    ;(this.input = e),
      (this.ranges = s),
      (this.chunk = ''),
      (this.chunkOff = 0),
      (this.chunk2 = ''),
      (this.chunk2Pos = 0),
      (this.next = -1),
      (this.token = nullToken),
      (this.rangeIndex = 0),
      (this.pos = this.chunkPos = s[0].from),
      (this.range = s[0]),
      (this.end = s[s.length - 1].to),
      this.readNext()
  }
  resolveOffset(e, s) {
    let a = this.range,
      c = this.rangeIndex,
      h = this.pos + e
    for (; h < a.from; ) {
      if (!c) return null
      let d = this.ranges[--c]
      ;(h -= a.from - d.to), (a = d)
    }
    for (; s < 0 ? h > a.to : h >= a.to; ) {
      if (c == this.ranges.length - 1) return null
      let d = this.ranges[++c]
      ;(h += d.from - a.to), (a = d)
    }
    return h
  }
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to) return e
    for (let s of this.ranges) if (s.to > e) return Math.max(e, s.from)
    return this.end
  }
  peek(e) {
    let s = this.chunkOff + e,
      a,
      c
    if (s >= 0 && s < this.chunk.length)
      (a = this.pos + e), (c = this.chunk.charCodeAt(s))
    else {
      let h = this.resolveOffset(e, 1)
      if (h == null) return -1
      if (
        ((a = h),
        a >= this.chunk2Pos && a < this.chunk2Pos + this.chunk2.length)
      )
        c = this.chunk2.charCodeAt(a - this.chunk2Pos)
      else {
        let d = this.rangeIndex,
          g = this.range
        for (; g.to <= a; ) g = this.ranges[++d]
        ;(this.chunk2 = this.input.chunk((this.chunk2Pos = a))),
          a + this.chunk2.length > g.to &&
            (this.chunk2 = this.chunk2.slice(0, g.to - a)),
          (c = this.chunk2.charCodeAt(0))
      }
    }
    return a >= this.token.lookAhead && (this.token.lookAhead = a + 1), c
  }
  acceptToken(e, s = 0) {
    let a = s ? this.resolveOffset(s, -1) : this.pos
    if (a == null || a < this.token.start)
      throw new RangeError('Token end out of bounds')
    ;(this.token.value = e), (this.token.end = a)
  }
  getChunk() {
    if (
      this.pos >= this.chunk2Pos &&
      this.pos < this.chunk2Pos + this.chunk2.length
    ) {
      let { chunk: e, chunkPos: s } = this
      ;(this.chunk = this.chunk2),
        (this.chunkPos = this.chunk2Pos),
        (this.chunk2 = e),
        (this.chunk2Pos = s),
        (this.chunkOff = this.pos - this.chunkPos)
    } else {
      ;(this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos)
      let e = this.input.chunk(this.pos),
        s = this.pos + e.length
      ;(this.chunk =
        s > this.range.to ? e.slice(0, this.range.to - this.pos) : e),
        (this.chunkPos = this.pos),
        (this.chunkOff = 0)
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length &&
      (this.getChunk(), this.chunkOff == this.chunk.length)
      ? (this.next = -1)
      : (this.next = this.chunk.charCodeAt(this.chunkOff))
  }
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone()
      ;(e -= this.range.to - this.pos),
        (this.range = this.ranges[++this.rangeIndex]),
        (this.pos = this.range.from)
    }
    return (
      (this.pos += e),
      this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1),
      this.readNext()
    )
  }
  setDone() {
    return (
      (this.pos = this.chunkPos = this.end),
      (this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
      (this.chunk = ''),
      (this.next = -1)
    )
  }
  reset(e, s) {
    if (
      (s
        ? ((this.token = s),
          (s.start = e),
          (s.lookAhead = e + 1),
          (s.value = s.extended = -1))
        : (this.token = nullToken),
      this.pos != e)
    ) {
      if (((this.pos = e), e == this.end)) return this.setDone(), this
      for (; e < this.range.from; ) this.range = this.ranges[--this.rangeIndex]
      for (; e >= this.range.to; ) this.range = this.ranges[++this.rangeIndex]
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length
        ? (this.chunkOff = e - this.chunkPos)
        : ((this.chunk = ''), (this.chunkOff = 0)),
        this.readNext()
    }
    return this
  }
  read(e, s) {
    if (e >= this.chunkPos && s <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, s - this.chunkPos)
    if (e >= this.chunk2Pos && s <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, s - this.chunk2Pos)
    if (e >= this.range.from && s <= this.range.to) return this.input.read(e, s)
    let a = ''
    for (let c of this.ranges) {
      if (c.from >= s) break
      c.to > e && (a += this.input.read(Math.max(c.from, e), Math.min(c.to, s)))
    }
    return a
  }
}
class TokenGroup {
  constructor(e, s) {
    ;(this.data = e), (this.id = s)
  }
  token(e, s) {
    let { parser: a } = s.p
    readToken(this.data, e, s, this.id, a.data, a.tokenPrecTable)
  }
}
TokenGroup.prototype.contextual =
  TokenGroup.prototype.fallback =
  TokenGroup.prototype.extend =
    !1
class LocalTokenGroup {
  constructor(e, s, a) {
    ;(this.precTable = s),
      (this.elseToken = a),
      (this.data = typeof e == 'string' ? decodeArray(e) : e)
  }
  token(e, s) {
    let a = e.pos,
      c = 0
    for (;;) {
      let h = e.next < 0,
        d = e.resolveOffset(1, 1)
      if (
        (readToken(this.data, e, s, 0, this.data, this.precTable),
        e.token.value > -1)
      )
        break
      if (this.elseToken == null) return
      if ((h || c++, d == null)) break
      e.reset(d, e.token)
    }
    c && (e.reset(a, e.token), e.acceptToken(this.elseToken, c))
  }
}
LocalTokenGroup.prototype.contextual =
  TokenGroup.prototype.fallback =
  TokenGroup.prototype.extend =
    !1
class ExternalTokenizer {
  constructor(e, s = {}) {
    ;(this.token = e),
      (this.contextual = !!s.contextual),
      (this.fallback = !!s.fallback),
      (this.extend = !!s.extend)
  }
}
function readToken(o, e, s, a, c, h) {
  let d = 0,
    g = 1 << a,
    { dialect: b } = s.p.parser
  e: for (; g & o[d]; ) {
    let $ = o[d + 1]
    for (let et = d + 3; et < $; et += 2)
      if ((o[et + 1] & g) > 0) {
        let tt = o[et]
        if (
          b.allows(tt) &&
          (e.token.value == -1 ||
            e.token.value == tt ||
            overrides(tt, e.token.value, c, h))
        ) {
          e.acceptToken(tt)
          break
        }
      }
    let _ = e.next,
      j = 0,
      _e = o[d + 2]
    if (
      e.next < 0 &&
      _e > j &&
      o[$ + _e * 3 - 3] == 65535 &&
      o[$ + _e * 3 - 3] == 65535
    ) {
      d = o[$ + _e * 3 - 1]
      continue e
    }
    for (; j < _e; ) {
      let et = (j + _e) >> 1,
        tt = $ + et + (et << 1),
        rt = o[tt],
        st = o[tt + 1] || 65536
      if (_ < rt) _e = et
      else if (_ >= st) j = et + 1
      else {
        ;(d = o[tt + 2]), e.advance()
        continue e
      }
    }
    break
  }
}
function findOffset(o, e, s) {
  for (let a = e, c; (c = o[a]) != 65535; a++) if (c == s) return a - e
  return -1
}
function overrides(o, e, s, a) {
  let c = findOffset(s, a, e)
  return c < 0 || findOffset(s, a, o) < c
}
const verbose = typeof process < 'u' && process.env && /\bparse\b/.test({}.LOG)
let stackIDs = null
function cutAt(o, e, s) {
  let a = o.cursor(IterMode.IncludeAnonymous)
  for (a.moveTo(e); ; )
    if (!(s < 0 ? a.childBefore(e) : a.childAfter(e)))
      for (;;) {
        if ((s < 0 ? a.to < e : a.from > e) && !a.type.isError)
          return s < 0
            ? Math.max(0, Math.min(a.to - 1, e - 25))
            : Math.min(o.length, Math.max(a.from + 1, e + 25))
        if (s < 0 ? a.prevSibling() : a.nextSibling()) break
        if (!a.parent()) return s < 0 ? 0 : o.length
      }
}
class FragmentCursor {
  constructor(e, s) {
    ;(this.fragments = e),
      (this.nodeSet = s),
      (this.i = 0),
      (this.fragment = null),
      (this.safeFrom = -1),
      (this.safeTo = -1),
      (this.trees = []),
      (this.start = []),
      (this.index = []),
      this.nextFragment()
  }
  nextFragment() {
    let e = (this.fragment =
      this.i == this.fragments.length ? null : this.fragments[this.i++])
    if (e) {
      for (
        this.safeFrom = e.openStart
          ? cutAt(e.tree, e.from + e.offset, 1) - e.offset
          : e.from,
          this.safeTo = e.openEnd
            ? cutAt(e.tree, e.to + e.offset, -1) - e.offset
            : e.to;
        this.trees.length;

      )
        this.trees.pop(), this.start.pop(), this.index.pop()
      this.trees.push(e.tree),
        this.start.push(-e.offset),
        this.index.push(0),
        (this.nextStart = this.safeFrom)
    } else this.nextStart = 1e9
  }
  nodeAt(e) {
    if (e < this.nextStart) return null
    for (; this.fragment && this.safeTo <= e; ) this.nextFragment()
    if (!this.fragment) return null
    for (;;) {
      let s = this.trees.length - 1
      if (s < 0) return this.nextFragment(), null
      let a = this.trees[s],
        c = this.index[s]
      if (c == a.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop()
        continue
      }
      let h = a.children[c],
        d = this.start[s] + a.positions[c]
      if (d > e) return (this.nextStart = d), null
      if (h instanceof Tree) {
        if (d == e) {
          if (d < this.safeFrom) return null
          let g = d + h.length
          if (g <= this.safeTo) {
            let b = h.prop(NodeProp.lookAhead)
            if (!b || g + b < this.fragment.to) return h
          }
        }
        this.index[s]++,
          d + h.length >= Math.max(this.safeFrom, e) &&
            (this.trees.push(h), this.start.push(d), this.index.push(0))
      } else this.index[s]++, (this.nextStart = d + h.length)
    }
  }
}
class TokenCache {
  constructor(e, s) {
    ;(this.stream = s),
      (this.tokens = []),
      (this.mainToken = null),
      (this.actions = []),
      (this.tokens = e.tokenizers.map((a) => new CachedToken()))
  }
  getActions(e) {
    let s = 0,
      a = null,
      { parser: c } = e.p,
      { tokenizers: h } = c,
      d = c.stateSlot(e.state, 3),
      g = e.curContext ? e.curContext.hash : 0,
      b = 0
    for (let $ = 0; $ < h.length; $++) {
      if (!((1 << $) & d)) continue
      let _ = h[$],
        j = this.tokens[$]
      if (
        !(a && !_.fallback) &&
        ((_.contextual || j.start != e.pos || j.mask != d || j.context != g) &&
          (this.updateCachedToken(j, _, e), (j.mask = d), (j.context = g)),
        j.lookAhead > j.end + 25 && (b = Math.max(j.lookAhead, b)),
        j.value != 0)
      ) {
        let _e = s
        if (
          (j.extended > -1 && (s = this.addActions(e, j.extended, j.end, s)),
          (s = this.addActions(e, j.value, j.end, s)),
          !_.extend && ((a = j), s > _e))
        )
          break
      }
    }
    for (; this.actions.length > s; ) this.actions.pop()
    return (
      b && e.setLookAhead(b),
      !a &&
        e.pos == this.stream.end &&
        ((a = new CachedToken()),
        (a.value = e.p.parser.eofTerm),
        (a.start = a.end = e.pos),
        (s = this.addActions(e, a.value, a.end, s))),
      (this.mainToken = a),
      this.actions
    )
  }
  getMainToken(e) {
    if (this.mainToken) return this.mainToken
    let s = new CachedToken(),
      { pos: a, p: c } = e
    return (
      (s.start = a),
      (s.end = Math.min(a + 1, c.stream.end)),
      (s.value = a == c.stream.end ? c.parser.eofTerm : 0),
      s
    )
  }
  updateCachedToken(e, s, a) {
    let c = this.stream.clipPos(a.pos)
    if ((s.token(this.stream.reset(c, e), a), e.value > -1)) {
      let { parser: h } = a.p
      for (let d = 0; d < h.specialized.length; d++)
        if (h.specialized[d] == e.value) {
          let g = h.specializers[d](this.stream.read(e.start, e.end), a)
          if (g >= 0 && a.p.parser.dialect.allows(g >> 1)) {
            g & 1 ? (e.extended = g >> 1) : (e.value = g >> 1)
            break
          }
        }
    } else (e.value = 0), (e.end = this.stream.clipPos(c + 1))
  }
  putAction(e, s, a, c) {
    for (let h = 0; h < c; h += 3) if (this.actions[h] == e) return c
    return (
      (this.actions[c++] = e),
      (this.actions[c++] = s),
      (this.actions[c++] = a),
      c
    )
  }
  addActions(e, s, a, c) {
    let { state: h } = e,
      { parser: d } = e.p,
      { data: g } = d
    for (let b = 0; b < 2; b++)
      for (let $ = d.stateSlot(h, b ? 2 : 1); ; $ += 3) {
        if (g[$] == 65535)
          if (g[$ + 1] == 1) $ = pair(g, $ + 2)
          else {
            c == 0 &&
              g[$ + 1] == 2 &&
              (c = this.putAction(pair(g, $ + 2), s, a, c))
            break
          }
        g[$] == s && (c = this.putAction(pair(g, $ + 1), s, a, c))
      }
    return c
  }
}
class Parse {
  constructor(e, s, a, c) {
    ;(this.parser = e),
      (this.input = s),
      (this.ranges = c),
      (this.recovering = 0),
      (this.nextStackID = 9812),
      (this.minStackPos = 0),
      (this.reused = []),
      (this.stoppedAt = null),
      (this.lastBigReductionStart = -1),
      (this.lastBigReductionSize = 0),
      (this.bigReductionCount = 0),
      (this.stream = new InputStream(s, c)),
      (this.tokens = new TokenCache(e, this.stream)),
      (this.topTerm = e.top[1])
    let { from: h } = c[0]
    ;(this.stacks = [Stack.start(this, e.top[0], h)]),
      (this.fragments =
        a.length && this.stream.end - h > e.bufferLength * 4
          ? new FragmentCursor(a, e.nodeSet)
          : null)
  }
  get parsedPos() {
    return this.minStackPos
  }
  advance() {
    let e = this.stacks,
      s = this.minStackPos,
      a = (this.stacks = []),
      c,
      h
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [d] = e
      for (
        ;
        d.forceReduce() &&
        d.stack.length &&
        d.stack[d.stack.length - 2] >= this.lastBigReductionStart;

      );
      this.bigReductionCount = this.lastBigReductionSize = 0
    }
    for (let d = 0; d < e.length; d++) {
      let g = e[d]
      for (;;) {
        if (((this.tokens.mainToken = null), g.pos > s)) a.push(g)
        else {
          if (this.advanceStack(g, a, e)) continue
          {
            c || ((c = []), (h = [])), c.push(g)
            let b = this.tokens.getMainToken(g)
            h.push(b.value, b.end)
          }
        }
        break
      }
    }
    if (!a.length) {
      let d = c && findFinished(c)
      if (d)
        return (
          verbose && console.log('Finish with ' + this.stackID(d)),
          this.stackToTree(d)
        )
      if (this.parser.strict)
        throw (
          (verbose &&
            c &&
            console.log(
              'Stuck with token ' +
                (this.tokens.mainToken
                  ? this.parser.getName(this.tokens.mainToken.value)
                  : 'none')
            ),
          new SyntaxError('No parse at ' + s))
        )
      this.recovering || (this.recovering = 5)
    }
    if (this.recovering && c) {
      let d =
        this.stoppedAt != null && c[0].pos > this.stoppedAt
          ? c[0]
          : this.runRecovery(c, h, a)
      if (d)
        return (
          verbose && console.log('Force-finish ' + this.stackID(d)),
          this.stackToTree(d.forceAll())
        )
    }
    if (this.recovering) {
      let d = this.recovering == 1 ? 1 : this.recovering * 3
      if (a.length > d)
        for (a.sort((g, b) => b.score - g.score); a.length > d; ) a.pop()
      a.some((g) => g.reducePos > s) && this.recovering--
    } else if (a.length > 1) {
      e: for (let d = 0; d < a.length - 1; d++) {
        let g = a[d]
        for (let b = d + 1; b < a.length; b++) {
          let $ = a[b]
          if (
            g.sameState($) ||
            (g.buffer.length > 500 && $.buffer.length > 500)
          )
            if ((g.score - $.score || g.buffer.length - $.buffer.length) > 0)
              a.splice(b--, 1)
            else {
              a.splice(d--, 1)
              continue e
            }
        }
      }
      a.length > 12 && a.splice(12, a.length - 12)
    }
    this.minStackPos = a[0].pos
    for (let d = 1; d < a.length; d++)
      a[d].pos < this.minStackPos && (this.minStackPos = a[d].pos)
    return null
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward")
    this.stoppedAt = e
  }
  advanceStack(e, s, a) {
    let c = e.pos,
      { parser: h } = this,
      d = verbose ? this.stackID(e) + ' -> ' : ''
    if (this.stoppedAt != null && c > this.stoppedAt)
      return e.forceReduce() ? e : null
    if (this.fragments) {
      let $ = e.curContext && e.curContext.tracker.strict,
        _ = $ ? e.curContext.hash : 0
      for (let j = this.fragments.nodeAt(c); j; ) {
        let _e =
          this.parser.nodeSet.types[j.type.id] == j.type
            ? h.getGoto(e.state, j.type.id)
            : -1
        if (
          _e > -1 &&
          j.length &&
          (!$ || (j.prop(NodeProp.contextHash) || 0) == _)
        )
          return (
            e.useNode(j, _e),
            verbose &&
              console.log(
                d + this.stackID(e) + ` (via reuse of ${h.getName(j.type.id)})`
              ),
            !0
          )
        if (
          !(j instanceof Tree) ||
          j.children.length == 0 ||
          j.positions[0] > 0
        )
          break
        let et = j.children[0]
        if (et instanceof Tree && j.positions[0] == 0) j = et
        else break
      }
    }
    let g = h.stateSlot(e.state, 4)
    if (g > 0)
      return (
        e.reduce(g),
        verbose &&
          console.log(
            d + this.stackID(e) + ` (via always-reduce ${h.getName(g & 65535)})`
          ),
        !0
      )
    if (e.stack.length >= 15e3)
      for (; e.stack.length > 9e3 && e.forceReduce(); );
    let b = this.tokens.getActions(e)
    for (let $ = 0; $ < b.length; ) {
      let _ = b[$++],
        j = b[$++],
        _e = b[$++],
        et = $ == b.length || !a,
        tt = et ? e : e.split(),
        rt = this.tokens.mainToken
      if (
        (tt.apply(_, j, rt ? rt.start : tt.pos, _e),
        verbose &&
          console.log(
            d +
              this.stackID(tt) +
              ` (via ${
                _ & 65536 ? `reduce of ${h.getName(_ & 65535)}` : 'shift'
              } for ${h.getName(j)} @ ${c}${tt == e ? '' : ', split'})`
          ),
        et)
      )
        return !0
      tt.pos > c ? s.push(tt) : a.push(tt)
    }
    return !1
  }
  advanceFully(e, s) {
    let a = e.pos
    for (;;) {
      if (!this.advanceStack(e, null, null)) return !1
      if (e.pos > a) return pushStackDedup(e, s), !0
    }
  }
  runRecovery(e, s, a) {
    let c = null,
      h = !1
    for (let d = 0; d < e.length; d++) {
      let g = e[d],
        b = s[d << 1],
        $ = s[(d << 1) + 1],
        _ = verbose ? this.stackID(g) + ' -> ' : ''
      if (
        g.deadEnd &&
        (h ||
          ((h = !0),
          g.restart(),
          verbose && console.log(_ + this.stackID(g) + ' (restarted)'),
          this.advanceFully(g, a)))
      )
        continue
      let j = g.split(),
        _e = _
      for (
        let et = 0;
        j.forceReduce() &&
        et < 10 &&
        (verbose && console.log(_e + this.stackID(j) + ' (via force-reduce)'),
        !this.advanceFully(j, a));
        et++
      )
        verbose && (_e = this.stackID(j) + ' -> ')
      for (let et of g.recoverByInsert(b))
        verbose && console.log(_ + this.stackID(et) + ' (via recover-insert)'),
          this.advanceFully(et, a)
      this.stream.end > g.pos
        ? ($ == g.pos && ($++, (b = 0)),
          g.recoverByDelete(b, $),
          verbose &&
            console.log(
              _ +
                this.stackID(g) +
                ` (via recover-delete ${this.parser.getName(b)})`
            ),
          pushStackDedup(g, a))
        : (!c || c.score < g.score) && (c = g)
    }
    return c
  }
  stackToTree(e) {
    return (
      e.close(),
      Tree.build({
        buffer: StackBufferCursor.create(e),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: e.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm
      })
    )
  }
  stackID(e) {
    let s = (stackIDs || (stackIDs = new WeakMap())).get(e)
    return (
      s || stackIDs.set(e, (s = String.fromCodePoint(this.nextStackID++))),
      s + e
    )
  }
}
function pushStackDedup(o, e) {
  for (let s = 0; s < e.length; s++) {
    let a = e[s]
    if (a.pos == o.pos && a.sameState(o)) {
      e[s].score < o.score && (e[s] = o)
      return
    }
  }
  e.push(o)
}
class Dialect {
  constructor(e, s, a) {
    ;(this.source = e), (this.flags = s), (this.disabled = a)
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0
  }
}
const id = (o) => o
class ContextTracker {
  constructor(e) {
    ;(this.start = e.start),
      (this.shift = e.shift || id),
      (this.reduce = e.reduce || id),
      (this.reuse = e.reuse || id),
      (this.hash = e.hash || (() => 0)),
      (this.strict = e.strict !== !1)
  }
}
class LRParser extends Parser {
  constructor(e) {
    if ((super(), (this.wrappers = []), e.version != 14))
      throw new RangeError(
        `Parser version (${e.version}) doesn't match runtime version (14)`
      )
    let s = e.nodeNames.split(' ')
    this.minRepeatTerm = s.length
    for (let g = 0; g < e.repeatNodeCount; g++) s.push('')
    let a = Object.keys(e.topRules).map((g) => e.topRules[g][1]),
      c = []
    for (let g = 0; g < s.length; g++) c.push([])
    function h(g, b, $) {
      c[g].push([b, b.deserialize(String($))])
    }
    if (e.nodeProps)
      for (let g of e.nodeProps) {
        let b = g[0]
        typeof b == 'string' && (b = NodeProp[b])
        for (let $ = 1; $ < g.length; ) {
          let _ = g[$++]
          if (_ >= 0) h(_, b, g[$++])
          else {
            let j = g[$ + -_]
            for (let _e = -_; _e > 0; _e--) h(g[$++], b, j)
            $++
          }
        }
      }
    ;(this.nodeSet = new NodeSet(
      s.map((g, b) =>
        NodeType.define({
          name: b >= this.minRepeatTerm ? void 0 : g,
          id: b,
          props: c[b],
          top: a.indexOf(b) > -1,
          error: b == 0,
          skipped: e.skippedNodes && e.skippedNodes.indexOf(b) > -1
        })
      )
    )),
      e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)),
      (this.strict = !1),
      (this.bufferLength = DefaultBufferLength)
    let d = decodeArray(e.tokenData)
    ;(this.context = e.context),
      (this.specializerSpecs = e.specialized || []),
      (this.specialized = new Uint16Array(this.specializerSpecs.length))
    for (let g = 0; g < this.specializerSpecs.length; g++)
      this.specialized[g] = this.specializerSpecs[g].term
    ;(this.specializers = this.specializerSpecs.map(getSpecializer)),
      (this.states = decodeArray(e.states, Uint32Array)),
      (this.data = decodeArray(e.stateData)),
      (this.goto = decodeArray(e.goto)),
      (this.maxTerm = e.maxTerm),
      (this.tokenizers = e.tokenizers.map((g) =>
        typeof g == 'number' ? new TokenGroup(d, g) : g
      )),
      (this.topRules = e.topRules),
      (this.dialects = e.dialects || {}),
      (this.dynamicPrecedences = e.dynamicPrecedences || null),
      (this.tokenPrecTable = e.tokenPrec),
      (this.termNames = e.termNames || null),
      (this.maxNode = this.nodeSet.types.length - 1),
      (this.dialect = this.parseDialect()),
      (this.top = this.topRules[Object.keys(this.topRules)[0]])
  }
  createParse(e, s, a) {
    let c = new Parse(this, e, s, a)
    for (let h of this.wrappers) c = h(c, e, s, a)
    return c
  }
  getGoto(e, s, a = !1) {
    let c = this.goto
    if (s >= c[0]) return -1
    for (let h = c[s + 1]; ; ) {
      let d = c[h++],
        g = d & 1,
        b = c[h++]
      if (g && a) return b
      for (let $ = h + (d >> 1); h < $; h++) if (c[h] == e) return b
      if (g) return -1
    }
  }
  hasAction(e, s) {
    let a = this.data
    for (let c = 0; c < 2; c++)
      for (let h = this.stateSlot(e, c ? 2 : 1), d; ; h += 3) {
        if ((d = a[h]) == 65535)
          if (a[h + 1] == 1) d = a[(h = pair(a, h + 2))]
          else {
            if (a[h + 1] == 2) return pair(a, h + 2)
            break
          }
        if (d == s || d == 0) return pair(a, h + 1)
      }
    return 0
  }
  stateSlot(e, s) {
    return this.states[e * 6 + s]
  }
  stateFlag(e, s) {
    return (this.stateSlot(e, 0) & s) > 0
  }
  validAction(e, s) {
    return !!this.allActions(e, (a) => (a == s ? !0 : null))
  }
  allActions(e, s) {
    let a = this.stateSlot(e, 4),
      c = a ? s(a) : void 0
    for (let h = this.stateSlot(e, 1); c == null; h += 3) {
      if (this.data[h] == 65535)
        if (this.data[h + 1] == 1) h = pair(this.data, h + 2)
        else break
      c = s(pair(this.data, h + 1))
    }
    return c
  }
  nextStates(e) {
    let s = []
    for (let a = this.stateSlot(e, 1); ; a += 3) {
      if (this.data[a] == 65535)
        if (this.data[a + 1] == 1) a = pair(this.data, a + 2)
        else break
      if (!(this.data[a + 2] & 1)) {
        let c = this.data[a + 1]
        s.some((h, d) => d & 1 && h == c) || s.push(this.data[a], c)
      }
    }
    return s
  }
  configure(e) {
    let s = Object.assign(Object.create(LRParser.prototype), this)
    if ((e.props && (s.nodeSet = this.nodeSet.extend(...e.props)), e.top)) {
      let a = this.topRules[e.top]
      if (!a) throw new RangeError(`Invalid top rule name ${e.top}`)
      s.top = a
    }
    return (
      e.tokenizers &&
        (s.tokenizers = this.tokenizers.map((a) => {
          let c = e.tokenizers.find((h) => h.from == a)
          return c ? c.to : a
        })),
      e.specializers &&
        ((s.specializers = this.specializers.slice()),
        (s.specializerSpecs = this.specializerSpecs.map((a, c) => {
          let h = e.specializers.find((g) => g.from == a.external)
          if (!h) return a
          let d = Object.assign(Object.assign({}, a), { external: h.to })
          return (s.specializers[c] = getSpecializer(d)), d
        }))),
      e.contextTracker && (s.context = e.contextTracker),
      e.dialect && (s.dialect = this.parseDialect(e.dialect)),
      e.strict != null && (s.strict = e.strict),
      e.wrap && (s.wrappers = s.wrappers.concat(e.wrap)),
      e.bufferLength != null && (s.bufferLength = e.bufferLength),
      s
    )
  }
  hasWrappers() {
    return this.wrappers.length > 0
  }
  getName(e) {
    return this.termNames
      ? this.termNames[e]
      : String((e <= this.maxNode && this.nodeSet.types[e].name) || e)
  }
  get eofTerm() {
    return this.maxNode + 1
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]]
  }
  dynamicPrecedence(e) {
    let s = this.dynamicPrecedences
    return s == null ? 0 : s[e] || 0
  }
  parseDialect(e) {
    let s = Object.keys(this.dialects),
      a = s.map(() => !1)
    if (e)
      for (let h of e.split(' ')) {
        let d = s.indexOf(h)
        d >= 0 && (a[d] = !0)
      }
    let c = null
    for (let h = 0; h < s.length; h++)
      if (!a[h])
        for (let d = this.dialects[s[h]], g; (g = this.data[d++]) != 65535; )
          (c || (c = new Uint8Array(this.maxTerm + 1)))[g] = 1
    return new Dialect(e, a, c)
  }
  static deserialize(e) {
    return new LRParser(e)
  }
}
function pair(o, e) {
  return o[e] | (o[e + 1] << 16)
}
function findFinished(o) {
  let e = null
  for (let s of o) {
    let a = s.p.stoppedAt
    ;(s.pos == s.p.stream.end || (a != null && s.pos > a)) &&
      s.p.parser.stateFlag(s.state, 2) &&
      (!e || e.score < s.score) &&
      (e = s)
  }
  return e
}
function getSpecializer(o) {
  if (o.external) {
    let e = o.extend ? 1 : 0
    return (s, a) => (o.external(s, a) << 1) | e
  }
  return o.get
}
const jsonHighlighting = styleTags({
    String: tags.string,
    Number: tags.number,
    'True False': tags.bool,
    PropertyName: tags.propertyName,
    Null: tags.null,
    ',': tags.separator,
    '[ ]': tags.squareBracket,
    '{ }': tags.brace
  }),
  parser$1 = LRParser.deserialize({
    version: 14,
    states:
      "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",
    stateData:
      '#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O',
    goto: '!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R',
    nodeNames:
      '⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array',
    maxTerm: 25,
    nodeProps: [
      ['openedBy', 7, '{', 12, '['],
      ['closedBy', 8, '}', 13, ']']
    ],
    propSources: [jsonHighlighting],
    skippedNodes: [0],
    repeatNodeCount: 2,
    tokenData:
      "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
    tokenizers: [0],
    topRules: { JsonText: [0, 1] },
    tokenPrec: 0
  }),
  jsonLanguage = LRLanguage.define({
    name: 'json',
    parser: parser$1.configure({
      props: [
        indentNodeProp.add({
          Object: continuedIndent({ except: /^\s*\}/ }),
          Array: continuedIndent({ except: /^\s*\]/ })
        }),
        foldNodeProp.add({ 'Object Array': foldInside })
      ]
    }),
    languageData: {
      closeBrackets: { brackets: ['[', '{', '"'] },
      indentOnInput: /^\s*[\}\]]$/
    }
  })
function json() {
  return new LanguageSupport(jsonLanguage)
}
const noSemi = 304,
  incdec = 1,
  incdecPrefix = 2,
  insertSemi = 305,
  spaces = 307,
  newline = 308,
  LineComment = 3,
  BlockComment = 4,
  space = [
    9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197,
    8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288
  ],
  braceR = 125,
  semicolon = 59,
  slash = 47,
  star = 42,
  plus = 43,
  minus = 45,
  trackNewline = new ContextTracker({
    start: !1,
    shift(o, e) {
      return e == LineComment || e == BlockComment || e == spaces
        ? o
        : e == newline
    },
    strict: !1
  }),
  insertSemicolon = new ExternalTokenizer(
    (o, e) => {
      let { next: s } = o
      ;(s == braceR || s == -1 || e.context) && o.acceptToken(insertSemi)
    },
    { contextual: !0, fallback: !0 }
  ),
  noSemicolon = new ExternalTokenizer(
    (o, e) => {
      let { next: s } = o,
        a
      space.indexOf(s) > -1 ||
        (s == slash && ((a = o.peek(1)) == slash || a == star)) ||
        (s != braceR &&
          s != semicolon &&
          s != -1 &&
          !e.context &&
          o.acceptToken(noSemi))
    },
    { contextual: !0 }
  ),
  incdecToken = new ExternalTokenizer(
    (o, e) => {
      let { next: s } = o
      if ((s == plus || s == minus) && (o.advance(), s == o.next)) {
        o.advance()
        let a = !e.context && e.canShift(incdec)
        o.acceptToken(a ? incdec : incdecPrefix)
      }
    },
    { contextual: !0 }
  ),
  jsHighlight = styleTags({
    'get set async static': tags.modifier,
    'for while do if else switch try catch finally return throw break continue default case':
      tags.controlKeyword,
    'in of await yield void typeof delete instanceof': tags.operatorKeyword,
    'let var const function class extends': tags.definitionKeyword,
    'import export from': tags.moduleKeyword,
    'with debugger as new': tags.keyword,
    TemplateString: tags.special(tags.string),
    super: tags.atom,
    BooleanLiteral: tags.bool,
    this: tags.self,
    null: tags.null,
    Star: tags.modifier,
    VariableName: tags.variableName,
    'CallExpression/VariableName TaggedTemplateExpression/VariableName':
      tags.function(tags.variableName),
    VariableDefinition: tags.definition(tags.variableName),
    Label: tags.labelName,
    PropertyName: tags.propertyName,
    PrivatePropertyName: tags.special(tags.propertyName),
    'CallExpression/MemberExpression/PropertyName': tags.function(
      tags.propertyName
    ),
    'FunctionDeclaration/VariableDefinition': tags.function(
      tags.definition(tags.variableName)
    ),
    'ClassDeclaration/VariableDefinition': tags.definition(tags.className),
    PropertyDefinition: tags.definition(tags.propertyName),
    PrivatePropertyDefinition: tags.definition(tags.special(tags.propertyName)),
    UpdateOp: tags.updateOperator,
    'LineComment Hashbang': tags.lineComment,
    BlockComment: tags.blockComment,
    Number: tags.number,
    String: tags.string,
    Escape: tags.escape,
    ArithOp: tags.arithmeticOperator,
    LogicOp: tags.logicOperator,
    BitOp: tags.bitwiseOperator,
    CompareOp: tags.compareOperator,
    RegExp: tags.regexp,
    Equals: tags.definitionOperator,
    Arrow: tags.function(tags.punctuation),
    ': Spread': tags.punctuation,
    '( )': tags.paren,
    '[ ]': tags.squareBracket,
    '{ }': tags.brace,
    'InterpolationStart InterpolationEnd': tags.special(tags.brace),
    '.': tags.derefOperator,
    ', ;': tags.separator,
    '@': tags.meta,
    TypeName: tags.typeName,
    TypeDefinition: tags.definition(tags.typeName),
    'type enum interface implements namespace module declare':
      tags.definitionKeyword,
    'abstract global Privacy readonly override': tags.modifier,
    'is keyof unique infer': tags.operatorKeyword,
    JSXAttributeValue: tags.attributeValue,
    JSXText: tags.content,
    'JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag':
      tags.angleBracket,
    'JSXIdentifier JSXNameSpacedName': tags.tagName,
    'JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName':
      tags.attributeName,
    'JSXBuiltin/JSXIdentifier': tags.standard(tags.tagName)
  }),
  spec_identifier = {
    __proto__: null,
    export: 16,
    as: 21,
    from: 29,
    default: 32,
    async: 37,
    function: 38,
    extends: 48,
    this: 52,
    true: 60,
    false: 60,
    null: 72,
    void: 76,
    typeof: 80,
    super: 98,
    new: 132,
    delete: 148,
    yield: 157,
    await: 161,
    class: 166,
    public: 223,
    private: 223,
    protected: 223,
    readonly: 225,
    instanceof: 244,
    satisfies: 247,
    in: 248,
    const: 250,
    import: 282,
    keyof: 337,
    unique: 341,
    infer: 347,
    is: 383,
    abstract: 403,
    implements: 405,
    type: 407,
    let: 410,
    var: 412,
    using: 415,
    interface: 421,
    enum: 425,
    namespace: 431,
    module: 433,
    declare: 437,
    global: 441,
    for: 460,
    of: 469,
    while: 472,
    with: 476,
    do: 480,
    if: 484,
    else: 486,
    switch: 490,
    case: 496,
    try: 502,
    catch: 506,
    finally: 510,
    return: 514,
    throw: 518,
    break: 522,
    continue: 526,
    debugger: 530
  },
  spec_word = {
    __proto__: null,
    async: 119,
    get: 121,
    set: 123,
    declare: 183,
    public: 185,
    private: 185,
    protected: 185,
    static: 187,
    abstract: 189,
    override: 191,
    readonly: 197,
    accessor: 199,
    new: 387
  },
  spec_LessThan = { __proto__: null, '<': 139 },
  parser = LRParser.deserialize({
    version: 14,
    states:
      "$6zO%TQUOOO%[QUOOO'_QWOOP(lOSOOO*zQ(CjO'#CgO+ROpO'#ChO+aO!bO'#ChO+oO07`O'#D[O.QQUO'#DbO.bQUO'#DmO%[QUO'#DwO0fQUO'#EPOOQ(CY'#EX'#EXO1PQSO'#EUOOQO'#Ej'#EjOOQO'#Id'#IdO1XQSO'#GlO1dQSO'#EiO1iQSO'#EiO3kQ(CjO'#JeO6[Q(CjO'#JfO6xQSO'#FXO6}Q#tO'#FpOOQ(CY'#Fa'#FaO7YO&jO'#FaO7hQ,UO'#FwO9OQSO'#FvOOQ(CY'#Jf'#JfOOQ(CW'#Je'#JeO9TQSO'#GpOOQQ'#KQ'#KQO9`QSO'#IQO9eQ(C[O'#IROOQQ'#JR'#JROOQQ'#IV'#IVQ`QUOOO`QUOOO%[QUO'#DoO9mQUO'#D{O9tQUO'#D}O9ZQSO'#GlO9{Q,UO'#CmO:ZQSO'#EhO:fQSO'#EsO:kQ,UO'#F`O;YQSO'#GlOOQO'#KR'#KRO;_QSO'#KRO;mQSO'#GtO;mQSO'#GuO;mQSO'#GwO9ZQSO'#GzO<dQSO'#G}O={QSO'#CcO>]QSO'#HZO>eQSO'#HaO>eQSO'#HcO`QUO'#HeO>eQSO'#HgO>eQSO'#HjO>jQSO'#HpO>oQ(C]O'#HvO%[QUO'#HxO>zQ(C]O'#HzO?VQ(C]O'#H|O9eQ(C[O'#IOO?bQ(CjO'#CgO@dQWO'#DgQOQSOOO%[QUO'#D}O@zQSO'#EQO9{Q,UO'#EhOAVQSO'#EhOAbQ`O'#F`OOQQ'#Ce'#CeOOQ(CW'#Dl'#DlOOQ(CW'#Ji'#JiO%[QUO'#JiOOQO'#Jm'#JmOOQO'#Ia'#IaOBbQWO'#EaOOQ(CW'#E`'#E`OC^Q(C`O'#EaOChQWO'#ETOOQO'#Jl'#JlOC|QWO'#JmOEZQWO'#ETOChQWO'#EaPEhO?MpO'#C`POOO)CDp)CDpOOOO'#IW'#IWOEsOpO,59SOOQ(CY,59S,59SOOOO'#IX'#IXOFRO!bO,59SO%[QUO'#D^OOOO'#IZ'#IZOFaO07`O,59vOOQ(CY,59v,59vOFoQUO'#I[OGSQSO'#JgOIUQbO'#JgO+}QUO'#JgOI]QSO,59|OIsQSO'#EjOJQQSO'#JuOJ]QSO'#JtOJ]QSO'#JtOJeQSO,5;WOJjQSO'#JsOOQ(CY,5:X,5:XOJqQUO,5:XOLrQ(CjO,5:cOMcQSO,5:kOM|Q(C[O'#JrONTQSO'#JqO9TQSO'#JqONiQSO'#JqONqQSO,5;VONvQSO'#JqO!#OQbO'#JfOOQ(CY'#Cg'#CgO%[QUO'#EPO!#nQ`O,5:pOOQO'#Jn'#JnOOQO-E<b-E<bO9ZQSO,5=WO!$UQSO,5=WO!$ZQUO,5;TO!&^Q,UO'#EeO!'qQSO,5;TO!)ZQ,UO'#DqO!)bQUO'#DvO!)lQWO,5;^O!)tQWO,5;^O%[QUO,5;^OOQQ'#FP'#FPOOQQ'#FR'#FRO%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_OOQQ'#FV'#FVO!*SQUO,5;pOOQ(CY,5;u,5;uOOQ(CY,5;v,5;vO!,VQSO,5;vOOQ(CY,5;w,5;wO%[QUO'#IhO!,_Q(C[O,5<dO!&^Q,UO,5;_O!,|Q,UO,5;_O%[QUO,5;sO!-TQ#tO'#FfO!.QQ#tO'#JyO!-lQ#tO'#JyO!.XQ#tO'#JyOOQO'#Jy'#JyO!.mQ#tO,5<OOOOO,5<[,5<[O!/OQUO'#FrOOOO'#Ig'#IgO7YO&jO,5;{O!/VQ#tO'#FtOOQ(CY,5;{,5;{O!/vQ7[O'#CsOOQ(CY'#Cw'#CwO!0ZQSO'#CwO!0`O07`O'#C{O!0|Q,UO,5<aO!1TQSO,5<cO!2jQMhO'#GRO!2wQSO'#GSO!2|QSO'#GSO!3RQMhO'#GWO!4QQWO'#G[O!4sQ7[O'#J`OOQ(CY'#J`'#J`O!4}QSO'#J_O!5]QSO'#J^O!5eQSO'#CrOOQ(CY'#Cu'#CuOOQ(CY'#DP'#DPOOQ(CY'#DR'#DRO1SQSO'#DTO!'vQ,UO'#FyO!'vQ,UO'#F{O!5mQSO'#F}O!5rQSO'#GOO!2|QSO'#GUO!'vQ,UO'#GZO!5wQSO'#EkO!6fQSO,5<bOOQ(CW'#Cp'#CpO!6nQSO'#ElO!7hQWO'#EmOOQ(CW'#Js'#JsO!7oQ(C[O'#KSO9eQ(C[O,5=[O`QUO,5>lOOQQ'#JZ'#JZOOQQ,5>m,5>mOOQQ-E<T-E<TO!9qQ(CjO,5:ZO!<_Q(CjO,5:gO%[QUO,5:gO!>xQ(CjO,5:iOOQO,5@m,5@mO!?iQ,UO,5=WO!?wQ(C[O'#J[O9OQSO'#J[O!@YQ(C[O,59XO!@eQWO,59XO!@mQ,UO,59XO9{Q,UO,59XO!@xQSO,5;TO!AQQSO'#HYO!AcQSO'#KVO%[QUO,5;xO!7cQWO,5;zO!AkQSO,5=sO!ApQSO,5=sO!AuQSO,5=sO9eQ(C[O,5=sO;mQSO,5=cOOQO'#Cs'#CsO!BTQWO,5=`O!B]Q,UO,5=aO!BhQSO,5=cO!BmQ`O,5=fO!BuQSO'#KRO>jQSO'#HPO9ZQSO'#HRO!BzQSO'#HRO9{Q,UO'#HTO!CPQSO'#HTOOQQ,5=i,5=iO!CUQSO'#HUO!C^QSO'#CmO!CcQSO,58}O!CmQSO,58}O!ErQUO,58}OOQQ,58},58}O!FSQ(C[O,58}O%[QUO,58}O!H_QUO'#H]OOQQ'#H^'#H^OOQQ'#H_'#H_O`QUO,5=uO!HuQSO,5=uO`QUO,5={O`QUO,5=}O!HzQSO,5>PO`QUO,5>RO!IPQSO,5>UO!IUQUO,5>[OOQQ,5>b,5>bO%[QUO,5>bO9eQ(C[O,5>dOOQQ,5>f,5>fO!M`QSO,5>fOOQQ,5>h,5>hO!M`QSO,5>hOOQQ,5>j,5>jO!MeQWO'#DYO%[QUO'#JiO!NSQWO'#JiO!NqQWO'#DhO# SQWO'#DhO##eQUO'#DhO##lQSO'#JhO##tQSO,5:RO##yQSO'#EnO#$XQSO'#JvO#$aQSO,5;XO#$fQWO'#DhO#$sQWO'#ESOOQ(CY,5:l,5:lO%[QUO,5:lO#$zQSO,5:lO>jQSO,5;SO!@eQWO,5;SO!@mQ,UO,5;SO9{Q,UO,5;SO#%SQSO,5@TO#%XQ!LQO,5:pOOQO-E<_-E<_O#&_Q(C`O,5:{OChQWO,5:oO#&iQWO,5:oOChQWO,5:{O!@YQ(C[O,5:oOOQ(CW'#Ed'#EdOOQO,5:{,5:{O%[QUO,5:{O#&vQ(C[O,5:{O#'RQ(C[O,5:{O!@eQWO,5:oOOQO,5;R,5;RO#'aQ(C[O,5:{POOO'#IU'#IUP#'uO?MpO,58zPOOO,58z,58zOOOO-E<U-E<UOOQ(CY1G.n1G.nOOOO-E<V-E<VO#(QQ`O,59xOOOO-E<X-E<XOOQ(CY1G/b1G/bO#(VQbO,5>vO+}QUO,5>vOOQO,5>|,5>|O#(aQUO'#I[OOQO-E<Y-E<YO#(nQSO,5@RO#(vQbO,5@RO#(}QSO,5@`OOQ(CY1G/h1G/hO%[QUO,5@aO#)VQSO'#IbOOQO-E<`-E<`O#(}QSO,5@`OOQ(CW1G0r1G0rOOQ(CY1G/s1G/sOOQ(CY1G0V1G0VO%[QUO,5@^O#)kQ(C[O,5@^O#)|Q(C[O,5@^O#*TQSO,5@]O9TQSO,5@]O#*]QSO,5@]O#*kQSO'#IeO#*TQSO,5@]OOQ(CW1G0q1G0qO!)lQWO,5:rO!)wQWO,5:rOOQO,5:t,5:tO#+]QSO,5:tO#+eQ,UO1G2rO9ZQSO1G2rOOQ(CY1G0o1G0oO#+sQ(CjO1G0oO#,xQ(ChO,5;POOQ(CY'#GQ'#GQO#-fQ(CjO'#J`O!$ZQUO1G0oO#/nQ,UO'#JjO#/xQSO,5:]O#/}QbO'#JkO%[QUO'#JkO#0XQSO,5:bOOQ(CY'#DY'#DYOOQ(CY1G0x1G0xO%[QUO1G0xOOQ(CY1G1b1G1bO#0^QSO1G0xO#2uQ(CjO1G0yO#2|Q(CjO1G0yO#5gQ(CjO1G0yO#5nQ(CjO1G0yO#7xQ(CjO1G0yO#8`Q(CjO1G0yO#;YQ(CjO1G0yO#;aQ(CjO1G0yO#=zQ(CjO1G0yO#>RQ(CjO1G0yO#?yQ(CjO1G0yO#ByQ$IUO'#CgO#DwQ$IUO1G1[O#EOQ$IUO'#JfO!,YQSO1G1bO#E`Q(CjO,5?SOOQ(CW-E<f-E<fO#FSQ(CjO1G0yOOQ(CY1G0y1G0yO#H_Q(CjO1G1_O#IRQ#tO,5<SO#IZQ#tO,5<TO#IcQ#tO'#FkO#IzQSO'#FjOOQO'#Jz'#JzOOQO'#If'#IfO#JPQ#tO1G1jOOQ(CY1G1j1G1jOOOO1G1u1G1uO#JbQ$IUO'#JeO#JlQSO,5<^O!*SQUO,5<^OOOO-E<e-E<eOOQ(CY1G1g1G1gO#JqQWO'#JyOOQ(CY,5<`,5<`O#JyQWO,5<`OOQ(CY,59c,59cO!&^Q,UO'#C}OOOO'#IY'#IYO#KOO07`O,59gOOQ(CY,59g,59gO%[QUO1G1{O!5rQSO'#IjO#KZQ,UO,5<tOOQ(CY,5<q,5<qOOQO'#Gg'#GgO!'vQ,UO,5=QOOQO'#Gi'#GiO!'vQ,UO,5=SO!&^Q,UO,5=UOOQO1G1}1G1}O#KbQ`O'#CpO#KuQ`O,5<mO#K|QSO'#J}O9ZQSO'#J}O#L[QSO,5<oO!'vQ,UO,5<nO#LaQSO'#GTO#LlQSO,5<nO#LqQ`O'#GQO#MOQ`O'#KOO#MYQSO'#KOO!&^Q,UO'#KOO#M_QSO,5<rO#MdQWO'#G]O!3{QWO'#G]O#MuQSO'#G_O#MzQSO'#GaO!2|QSO'#GdO#NPQ(C[O'#IlO#N[QWO,5<vOOQ(CY,5<v,5<vO#NcQWO'#G]O#NqQWO'#G^O#NyQWO'#G^OOQ(CY,5=V,5=VO!'vQ,UO,5?yO!'vQ,UO,5?yO$ OQSO'#ImO$ ZQSO,5?xO$ cQSO,59^O$!SQ,UO,59oOOQ(CY,59o,59oO$!uQ,UO,5<eO$#hQ,UO,5<gO@[QSO,5<iOOQ(CY,5<j,5<jO$#rQSO,5<pO$#wQ,UO,5<uO$$XQSO'#JqO!$ZQUO1G1|O$$^QSO1G1|O9TQSO'#JtO9TQSO'#EnO%[QUO'#EnO9TQSO'#IoO$$cQ(C[O,5@nOOQQ1G2v1G2vOOQQ1G4W1G4WOOQ(CY1G/u1G/uO!,VQSO1G/uO$&hQ(CjO1G0ROOQQ1G2r1G2rO!&^Q,UO1G2rO%[QUO1G2rO$'XQSO1G2rO$'dQ,UO'#EeOOQ(CW,5?v,5?vO$'nQ(C[O,5?vOOQQ1G.s1G.sO!@YQ(C[O1G.sO!@eQWO1G.sO!@mQ,UO1G.sO$(PQSO1G0oO$(UQSO'#CgO$(aQSO'#KWO$(iQSO,5=tO$(nQSO'#KWO$(sQSO'#KWO$)OQSO'#IuO$)^QSO,5@qO$)fQbO1G1dOOQ(CY1G1f1G1fO9ZQSO1G3_O@[QSO1G3_O$)mQSO1G3_O$)rQSO1G3_OOQQ1G3_1G3_O!BhQSO1G2}O!&^Q,UO1G2zO$)wQSO1G2zOOQQ1G2{1G2{O!&^Q,UO1G2{O$)|QSO1G2{O$*UQWO'#GyOOQQ1G2}1G2}O!3{QWO'#IqO!BmQ`O1G3QOOQQ1G3Q1G3QOOQQ,5=k,5=kO$*^Q,UO,5=mO9ZQSO,5=mO#MzQSO,5=oO9OQSO,5=oO!@eQWO,5=oO!@mQ,UO,5=oO9{Q,UO,5=oO$*lQSO'#KUO$*wQSO,5=pOOQQ1G.i1G.iO$*|Q(C[O1G.iO@[QSO1G.iO$+XQSO1G.iO9eQ(C[O1G.iO$-^QbO,5@sO$-nQSO,5@sO9TQSO,5@sO$-yQUO,5=wO$.QQSO,5=wOOQQ1G3a1G3aO`QUO1G3aOOQQ1G3g1G3gOOQQ1G3i1G3iO>eQSO1G3kO$.VQUO1G3mO$2ZQUO'#HlOOQQ1G3p1G3pO$2hQSO'#HrO>jQSO'#HtOOQQ1G3v1G3vO$2pQUO1G3vO9eQ(C[O1G3|OOQQ1G4O1G4OOOQ(CW'#GX'#GXO9eQ(C[O1G4QO9eQ(C[O1G4SO$6wQSO,5@TO!*SQUO,5;YO9TQSO,5;YO>jQSO,5:SO!*SQUO,5:SO!@eQWO,5:SO$6|Q$IUO,5:SOOQO,5;Y,5;YO$7WQWO'#I]O$7nQSO,5@SOOQ(CY1G/m1G/mO$7vQWO'#IcO$8QQSO,5@bOOQ(CW1G0s1G0sO# SQWO,5:SOOQO'#I`'#I`O$8YQWO,5:nOOQ(CY,5:n,5:nO#$}QSO1G0WOOQ(CY1G0W1G0WO%[QUO1G0WOOQ(CY1G0n1G0nO>jQSO1G0nO!@eQWO1G0nO!@mQ,UO1G0nOOQ(CW1G5o1G5oO!@YQ(C[O1G0ZOOQO1G0g1G0gO%[QUO1G0gO$8aQ(C[O1G0gO$8lQ(C[O1G0gO!@eQWO1G0ZOChQWO1G0ZO$8zQ(C[O1G0gOOQO1G0Z1G0ZO$9`Q(CjO1G0gPOOO-E<S-E<SPOOO1G.f1G.fOOOO1G/d1G/dO$9jQ`O,5<dO$9rQbO1G4bOOQO1G4h1G4hO%[QUO,5>vO$9|QSO1G5mO$:UQSO1G5zO$:^QbO1G5{O9TQSO,5>|O$:hQ(CjO1G5xO%[QUO1G5xO$:xQ(C[O1G5xO$;ZQSO1G5wO$;ZQSO1G5wO9TQSO1G5wO$;cQSO,5?PO9TQSO,5?POOQO,5?P,5?PO$;wQSO,5?PO$$XQSO,5?POOQO-E<c-E<cOOQO1G0^1G0^OOQO1G0`1G0`O!,YQSO1G0`OOQQ7+(^7+(^O!&^Q,UO7+(^O%[QUO7+(^O$<VQSO7+(^O$<bQ,UO7+(^O$<pQ(CjO,59oO$>xQ(CjO,5<eO$ATQ(CjO,5<gO$C`Q(CjO,5<uOOQ(CY7+&Z7+&ZO$EqQ(CjO7+&ZO$FeQ,UO'#I^O$FoQSO,5@UOOQ(CY1G/w1G/wO$FwQUO'#I_O$GUQSO,5@VO$G^QbO,5@VOOQ(CY1G/|1G/|O$GhQSO7+&dOOQ(CY7+&d7+&dO$GmQ$IUO,5:cO%[QUO7+&vO$GwQ$IUO,5:ZO$HUQ$IUO,5:gO$H`Q$IUO,5:iOOQ(CY7+&|7+&|OOQO1G1n1G1nOOQO1G1o1G1oO$HjQ#tO,5<VO!*SQUO,5<UOOQO-E<d-E<dOOQ(CY7+'U7+'UOOOO7+'a7+'aOOOO1G1x1G1xO$HuQSO1G1xOOQ(CY1G1z1G1zO$HzQ`O,59iOOOO-E<W-E<WOOQ(CY1G/R1G/RO$IRQ(CjO7+'gOOQ(CY,5?U,5?UO$IuQ`O,5?UOOQ(CY1G2`1G2`P!&^Q,UO'#IjPOQ(CY-E<h-E<hO$JeQ,UO1G2lO$KWQ,UO1G2nO$KbQ`O1G2pOOQ(CY1G2X1G2XO$KiQSO'#IiO$KwQSO,5@iO$KwQSO,5@iO$LPQSO,5@iO$L[QSO,5@iOOQO1G2Z1G2ZO$LjQ,UO1G2YO!'vQ,UO1G2YO$LzQMhO'#IkO$M[QSO,5@jO!&^Q,UO,5@jO$MdQ`O,5@jOOQ(CY1G2^1G2^OOQ(CW,5<w,5<wOOQ(CW,5<x,5<xO$$XQSO,5<xOCXQSO,5<xO!@eQWO,5<wOOQO'#G`'#G`O$MnQSO,5<yOOQ(CW,5<{,5<{O$$XQSO,5=OOOQO,5?W,5?WOOQO-E<j-E<jOOQ(CY1G2b1G2bO!3{QWO,5<wO$MvQSO,5<xO#MuQSO,5<yO!3{QWO,5<xO$NRQ,UO1G5eO$N]Q,UO1G5eOOQO,5?X,5?XOOQO-E<k-E<kOOQO1G.x1G.xO!7cQWO,59qO%[QUO,59qO$NjQSO1G2TO!'vQ,UO1G2[O$NoQ(CjO7+'hOOQ(CY7+'h7+'hO!$ZQUO7+'hO% cQSO,5;YOOQ(CW,5?Z,5?ZOOQ(CW-E<m-E<mOOQ(CY7+%a7+%aO% hQ`O'#KPO#$}QSO7+(^O% rQbO7+(^O$<YQSO7+(^O% yQ(ChO'#CgO%!^Q(ChO,5<|O%#OQSO,5<|OOQ(CW1G5b1G5bOOQQ7+$_7+$_O!@YQ(C[O7+$_O!@eQWO7+$_O!$ZQUO7+&ZO%#TQSO'#ItO%#iQSO,5@rOOQO1G3`1G3`O9ZQSO,5@rO%#iQSO,5@rO%#qQSO,5@rOOQO,5?a,5?aOOQO-E<s-E<sOOQ(CY7+'O7+'OO%#vQSO7+(yO9eQ(C[O7+(yO9ZQSO7+(yO@[QSO7+(yOOQQ7+(i7+(iO%#{Q(ChO7+(fO!&^Q,UO7+(fO%$VQ`O7+(gOOQQ7+(g7+(gO!&^Q,UO7+(gO%$^QSO'#KTO%$iQSO,5=eOOQO,5?],5?]OOQO-E<o-E<oOOQQ7+(l7+(lO%%xQWO'#HSOOQQ1G3X1G3XO!&^Q,UO1G3XO%[QUO1G3XO%&PQSO1G3XO%&[Q,UO1G3XO9eQ(C[O1G3ZO#MzQSO1G3ZO9OQSO1G3ZO!@eQWO1G3ZO!@mQ,UO1G3ZO%&jQSO'#IsO%&uQSO,5@pO%&}QWO,5@pOOQ(CW1G3[1G3[OOQQ7+$T7+$TO@[QSO7+$TO9eQ(C[O7+$TO%'YQSO7+$TO%[QUO1G6_O%[QUO1G6`O%'_Q(C[O1G6_O%'iQUO1G3cO%'pQSO1G3cO%'uQUO1G3cOOQQ7+({7+({O9eQ(C[O7+)VO`QUO7+)XOOQQ'#KZ'#KZOOQQ'#Iv'#IvO%'|QUO,5>WOOQQ,5>W,5>WO%[QUO'#HmO%(ZQSO'#HoOOQQ,5>^,5>^O9TQSO,5>^OOQQ,5>`,5>`OOQQ7+)b7+)bOOQQ7+)h7+)hOOQQ7+)l7+)lOOQQ7+)n7+)nO%(`QWO1G5oO%(tQ$IUO1G0tO%)OQSO1G0tOOQO1G/n1G/nO%)ZQ$IUO1G/nO>jQSO1G/nO!*SQUO'#DhOOQO,5>w,5>wOOQO-E<Z-E<ZOOQO,5>},5>}OOQO-E<a-E<aO!@eQWO1G/nOOQO-E<^-E<^OOQ(CY1G0Y1G0YOOQ(CY7+%r7+%rO#$}QSO7+%rOOQ(CY7+&Y7+&YO>jQSO7+&YO!@eQWO7+&YOOQO7+%u7+%uO$9`Q(CjO7+&ROOQO7+&R7+&RO%[QUO7+&RO%)eQ(C[O7+&RO!@YQ(C[O7+%uO!@eQWO7+%uO%)pQ(C[O7+&RO%*OQ(CjO7++dO%[QUO7++dO%*`QSO7++cO%*`QSO7++cOOQO1G4k1G4kO9TQSO1G4kO%*hQSO1G4kOOQO7+%z7+%zO#$}QSO<<KxO% rQbO<<KxO%*vQSO<<KxOOQQ<<Kx<<KxO!&^Q,UO<<KxO%[QUO<<KxO%+OQSO<<KxO%+ZQ(CjO1G2lO%-fQ(CjO1G2nO%/qQ(CjO1G2YO%2SQ,UO,5>xOOQO-E<[-E<[O%2^QbO,5>yO%[QUO,5>yOOQO-E<]-E<]O%2hQSO1G5qOOQ(CY<<JO<<JOO%2pQ$IUO1G0oO%4zQ$IUO1G0yO%5RQ$IUO1G0yO%7VQ$IUO1G0yO%7^Q$IUO1G0yO%9RQ$IUO1G0yO%9iQ$IUO1G0yO%;|Q$IUO1G0yO%<TQ$IUO1G0yO%>XQ$IUO1G0yO%>`Q$IUO1G0yO%@WQ$IUO1G0yO%@kQ(CjO<<JbO%ApQ$IUO1G0yO%CfQ$IUO'#J`O%EiQ$IUO1G1_O%EvQ$IUO1G0RO!*SQUO'#FmOOQO'#J{'#J{OOQO1G1q1G1qO%FQQSO1G1pO%FVQ$IUO,5?SOOOO7+'d7+'dOOOO1G/T1G/TOOQ(CY1G4p1G4pO!'vQ,UO7+([O%FaQSO,5?TO9ZQSO,5?TOOQO-E<g-E<gO%FoQSO1G6TO%FoQSO1G6TO%FwQSO1G6TO%GSQ,UO7+'tO%GdQ`O,5?VO%GnQSO,5?VO!&^Q,UO,5?VOOQO-E<i-E<iO%GsQ`O1G6UO%G}QSO1G6UOOQ(CW1G2d1G2dO$$XQSO1G2dOOQ(CW1G2c1G2cO%HVQSO1G2eO!&^Q,UO1G2eOOQ(CW1G2j1G2jO!@eQWO1G2cOCXQSO1G2dO%H[QSO1G2eO%HdQSO1G2dO!'vQ,UO7++POOQ(CY1G/]1G/]O%HoQSO1G/]OOQ(CY7+'o7+'oO%HtQ,UO7+'vO%IUQ(CjO<<KSOOQ(CY<<KS<<KSO%IxQSO1G0tO!&^Q,UO'#InO%I}QSO,5@kO!&^Q,UO1G2hOOQQ<<Gy<<GyO!@YQ(C[O<<GyO%JVQ(CjO<<IuOOQ(CY<<Iu<<IuOOQO,5?`,5?`O%JyQSO,5?`O$(sQSO,5?`OOQO-E<r-E<rO%KOQSO1G6^O%KOQSO1G6^O9ZQSO1G6^O@[QSO<<LeOOQQ<<Le<<LeO%KWQSO<<LeO9eQ(C[O<<LeOOQQ<<LQ<<LQO%#{Q(ChO<<LQOOQQ<<LR<<LRO%$VQ`O<<LRO%K]QWO'#IpO%KhQSO,5@oO!*SQUO,5@oOOQQ1G3P1G3PO%KpQUO'#JiOOQO'#Ir'#IrO9eQ(C[O'#IrO%KzQWO,5=nOOQQ,5=n,5=nO%LRQWO'#EaO%LgQSO7+(sO%LlQSO7+(sOOQQ7+(s7+(sO!&^Q,UO7+(sO%[QUO7+(sO%LtQSO7+(sOOQQ7+(u7+(uO9eQ(C[O7+(uO#MzQSO7+(uO9OQSO7+(uO!@eQWO7+(uO%MPQSO,5?_OOQO-E<q-E<qOOQO'#HV'#HVO%M[QSO1G6[O9eQ(C[O<<GoOOQQ<<Go<<GoO@[QSO<<GoO%MdQSO7++yO%MiQSO7++zO%[QUO7++yO%[QUO7++zOOQQ7+(}7+(}O%MnQSO7+(}O%MsQUO7+(}O%MzQSO7+(}OOQQ<<Lq<<LqOOQQ<<Ls<<LsOOQQ-E<t-E<tOOQQ1G3r1G3rO%NPQSO,5>XOOQQ,5>Z,5>ZO%NUQSO1G3xO9TQSO7+&`O!*SQUO7+&`OOQO7+%Y7+%YO%NZQ$IUO1G5{O>jQSO7+%YOOQ(CY<<I^<<I^OOQ(CY<<It<<ItO>jQSO<<ItOOQO<<Im<<ImO$9`Q(CjO<<ImO%[QUO<<ImOOQO<<Ia<<IaO!@YQ(C[O<<IaO%NeQ(C[O<<ImO%NpQ(CjO<= OO& QQSO<<N}OOQO7+*V7+*VO9TQSO7+*VOOQQANAdANAdO& YQSOANAdO!&^Q,UOANAdO#$}QSOANAdO% rQbOANAdO%[QUOANAdO& bQ(CjO7+'tO&#sQ(CjO7+'vO&&UQbO1G4eO&&`Q$IUO7+&ZO&&mQ$IUO,59oO&(pQ$IUO,5<eO&*sQ$IUO,5<gO&,vQ$IUO,5<uO&.lQ$IUO7+'gO&.yQ$IUO7+'hO&/WQSO,5<XOOQO7+'[7+'[O&/]Q,UO<<KvOOQO1G4o1G4oO&/dQSO1G4oO&/oQSO1G4oO&/}QSO7++oO&/}QSO7++oO!&^Q,UO1G4qO&0VQ`O1G4qO&0aQSO7++pOOQ(CW7+(O7+(OO$$XQSO7+(PO&0iQ`O7+(POOQ(CW7+'}7+'}O$$XQSO7+(OO&0pQSO7+(PO!&^Q,UO7+(POCXQSO7+(OO&0uQ,UO<<NkOOQ(CY7+$w7+$wO&1PQ`O,5?YOOQO-E<l-E<lO&1ZQ(ChO7+(SOOQQAN=eAN=eO9ZQSO1G4zOOQO1G4z1G4zO&1kQSO1G4zO&1pQSO7++xO&1pQSO7++xO9eQ(C[OANBPO@[QSOANBPOOQQANBPANBPOOQQANAlANAlOOQQANAmANAmO&1xQSO,5?[OOQO-E<n-E<nO&2TQ$IUO1G6ZO&4eQbO'#CgOOQO,5?^,5?^OOQO-E<p-E<pOOQQ1G3Y1G3YO%KpQUO,5<yOOQQ<<L_<<L_O!&^Q,UO<<L_O%LgQSO<<L_O&4oQSO<<L_O%[QUO<<L_OOQQ<<La<<LaO9eQ(C[O<<LaO#MzQSO<<LaO9OQSO<<LaO&4wQWO1G4yO&5SQSO7++vOOQQAN=ZAN=ZO9eQ(C[OAN=ZOOQQ<= e<= eOOQQ<= f<= fO&5[QSO<= eO&5aQSO<= fOOQQ<<Li<<LiO&5fQSO<<LiO&5kQUO<<LiOOQQ1G3s1G3sO>jQSO7+)dO&5rQSO<<IzO&5}Q$IUO<<IzOOQO<<Ht<<HtOOQ(CYAN?`AN?`OOQOAN?XAN?XO$9`Q(CjOAN?XOOQOAN>{AN>{O%[QUOAN?XOOQO<<Mq<<MqOOQQG27OG27OO!&^Q,UOG27OO#$}QSOG27OO&6XQSOG27OO% rQbOG27OO&6aQ$IUO<<JbO&6nQ$IUO1G2YO&8dQ$IUO1G2lO&:gQ$IUO1G2nO&<jQ$IUO<<KSO&<wQ$IUO<<IuOOQO1G1s1G1sO!'vQ,UOANAbOOQO7+*Z7+*ZO&=UQSO7+*ZO&=aQSO<= ZO&=iQ`O7+*]OOQ(CW<<Kk<<KkO$$XQSO<<KkOOQ(CW<<Kj<<KjO&=sQ`O<<KkO$$XQSO<<KjOOQO7+*f7+*fO9ZQSO7+*fO&=zQSO<= dOOQQG27kG27kO9eQ(C[OG27kO!*SQUO1G4vO&>SQSO7++uO%LgQSOANAyOOQQANAyANAyO!&^Q,UOANAyO&>[QSOANAyOOQQANA{ANA{O9eQ(C[OANA{O#MzQSOANA{OOQO'#HW'#HWOOQO7+*e7+*eOOQQG22uG22uOOQQANEPANEPOOQQANEQANEQOOQQANBTANBTO&>dQSOANBTOOQQ<<MO<<MOO!*SQUOAN?fOOQOG24sG24sO$9`Q(CjOG24sO#$}QSOLD,jOOQQLD,jLD,jO!&^Q,UOLD,jO&>iQSOLD,jO&>qQ$IUO7+'tO&@gQ$IUO7+'vO&B]Q,UOG26|OOQO<<Mu<<MuOOQ(CWANAVANAVO$$XQSOANAVOOQ(CWANAUANAUOOQO<<NQ<<NQOOQQLD-VLD-VO&BmQ$IUO7+*bOOQQG27eG27eO%LgQSOG27eO!&^Q,UOG27eOOQQG27gG27gO9eQ(C[OG27gOOQQG27oG27oO&BwQ$IUOG25QOOQOLD*_LD*_OOQQ!$(!U!$(!UO#$}QSO!$(!UO!&^Q,UO!$(!UO&CRQ(CjOG26|OOQ(CWG26qG26qOOQQLD-PLD-PO%LgQSOLD-POOQQLD-RLD-ROOQQ!)9Ep!)9EpO#$}QSO!)9EpOOQQ!$(!k!$(!kOOQQ!.K;[!.K;[O&EdQ$IUOG26|O!*SQUO'#DwO1PQSO'#EUO&GYQbO'#JeO!*SQUO'#DoO&GaQUO'#D{O&GhQbO'#CgO&JOQbO'#CgO!*SQUO'#D}O&J`QUO,5;TO!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO'#IhO&LcQSO,5<dO&LkQ,UO,5;_O&NOQ,UO,5;_O!*SQUO,5;sO1SQSO'#DTO1SQSO'#DTO!&^Q,UO'#FyO&LkQ,UO'#FyO!&^Q,UO'#F{O&LkQ,UO'#F{O!&^Q,UO'#GZO&LkQ,UO'#GZO!*SQUO,5:gO!*SQUO,5@aO&J`QUO1G0oO&NVQ$IUO'#CgO!*SQUO1G1{O!&^Q,UO,5=QO&LkQ,UO,5=QO!&^Q,UO,5=SO&LkQ,UO,5=SO!&^Q,UO,5<nO&LkQ,UO,5<nO&J`QUO1G1|O!*SQUO7+&vO!&^Q,UO1G2YO&LkQ,UO1G2YO!&^Q,UO1G2[O&LkQ,UO1G2[O&J`QUO7+'hO&J`QUO7+&ZO!&^Q,UOANAbO&LkQ,UOANAbO&NaQSO'#EiO&NfQSO'#EiO&NnQSO'#FXO&NsQSO'#EsO&NxQSO'#JuO' TQSO'#JsO' `QSO,5;TO' eQ,UO,5<aO' lQSO'#GSO' qQSO'#GSO' vQSO,5<bO'!OQSO,5;TO'!WQ$IUO1G1[O'!_QSO,5<nO'!dQSO,5<nO'!iQSO,5<pO'!nQSO,5<pO'!sQSO1G1|O'!xQSO1G0oO'!}Q,UO<<KvO'#UQ,UO<<KvO7hQ,UO'#FwO9OQSO'#FvOAVQSO'#EhO!*SQUO,5;pO!2|QSO'#GSO!2|QSO'#GSO!2|QSO'#GUO!2|QSO'#GUO!'vQ,UO7+([O!'vQ,UO7+([O$KbQ`O1G2pO$KbQ`O1G2pO!&^Q,UO,5=UO!&^Q,UO,5=U",
    stateData:
      "'$_~O'oOS'pOSROS'qRQ~OPYOQYOW!VO_qObzOcyOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!YXO!duO!iZO!lYO!mYO!nYO!pvO!rwO!uxO!y]O#q!PO$R|O$VfO%a}O%c!QO%e!OO%f!OO%g!OO%j!RO%l!SO%o!TO%p!TO%r!UO&O!WO&U!XO&W!YO&Y!ZO&[![O&_!]O&e!^O&k!_O&m!`O&o!aO&q!bO&s!cO'vSO'xTO'{UO(TVO(c[O(piO~OUtO~P`OPYOQYOb!jOc!iOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!Y!eO!duO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$R!kO$VfO'v!dO'xTO'{UO(TVO(c[O(piO~O_!vOm!nO}!oO!]!xO!^!uO!_!uO!y9rO!}!pO#O!pO#P!wO#Q!pO#R!pO#U!yO#V!yO'w!lO'xTO'{UO(W!mO(c!sO~O'q!zO~OPZXYZX_ZXlZXzZX{ZX}ZX!WZX!fZX!gZX!iZX!mZX#YZX#edX#hZX#iZX#jZX#kZX#lZX#mZX#nZX#oZX#pZX#rZX#tZX#vZX#wZX#|ZX'mZX(TZX(dZX(kZX(lZX~O!b${X~P(qO]!|O'x#OO'y!|O'z#OO~O]#PO'z#OO'{#OO'|#PO~Or#RO!P#SO(U#SO(V#UO~OPYOQYOb!jOc!iOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!Y!eO!duO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$R!kO$VfO'v9vO'xTO'{UO(TVO(c[O(piO~O!V#YO!W#VO!T(ZP!T(hP~P+}O!X#bO~P`OPYOQYOb!jOc!iOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!Y!eO!duO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$R!kO$VfO'xTO'{UO(TVO(c[O(piO~Oj#lO!V#hO!y]O#c#kO#d#hO'v9wO!h(eP~P.iO!i#nO'v#mO~O!u#rO!y]O%a#sO~O#e#tO~O!b#uO#e#tO~OP$]OY$dOl$QOz#yO{#zO}#{O!W$aO!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO#v$XO#w$YO(TVO(d$ZO(k#|O(l#}O~O_(XX'm(XX'k(XX!h(XX!T(XX!Y(XX%b(XX!b(XX~P1qO#Y$eO#|$eOP(YXY(YXl(YXz(YX{(YX}(YX!W(YX!f(YX!i(YX!m(YX#h(YX#i(YX#j(YX#k(YX#l(YX#m(YX#n(YX#o(YX#p(YX#r(YX#t(YX#v(YX#w(YX(T(YX(d(YX(k(YX(l(YX!Y(YX%b(YX~O_(YX!g(YX'm(YX'k(YX!T(YX!h(YXp(YX!b(YX~P4XO#Y$eO~O$X$gO$Z$fO$b$lO~O!Y$mO$VfO$e$nO$g$pO~Oj%SOl$tOm$sOn$sOt%TOv%UOx%VO}${O!Y$|O!d%[O!i$xO#d%]O$R%YO$n%WO$p%XO$s%ZO'v$rO'xTO'{UO(P%RO(T$uOe(QP~O!i%^O~O}%aO!Y%bO'v%`O~O!b%fO~O_%gO'm%gO~O'w!lO~P%[O%g%nO~P%[O!i%^O'v%`O'w!lO(P%RO~Oc%uO!i%^O'v%`O~O#p$SO~Oz%zO!Y%wO!i%yO%c%}O'v%`O'w!lO'xTO'{UO^(yP~O!u#rO~O%l&PO}(uX!Y(uX'v(uX~O'v&QO~O!r&VO#q!PO%c!QO%e!OO%f!OO%g!OO%j!RO%l!SO%o!TO%p!TO~Ob&[Oc&ZO!u&XO%a&YO%t&WO~P;rOb&_OcyO!Y&^O!r&VO!uxO!y]O#q!PO%a}O%e!OO%f!OO%g!OO%j!RO%l!SO%o!TO%p!TO%r!UO~O`&bO#Y&eO%c&`O'w!lO~P<wO!i&fO!r&jO~O!i#nO~O!YXO~O_%gO'l&rO'm%gO~O_%gO'l&uO'm%gO~O_%gO'l&wO'm%gO~O'kZX!TZXpZX!hZX&SZX!YZX%bZX!bZX~P(qO!]'UO!^&}O!_&}O'w!lO'xTO'{UO~Om&{O}&zO!V'OO(W&yO!X([P!X(jP~P@OOh'XO!Y'VO'v%`O~Oc'^O!i%^O'v%`O~Oz%zO!i%yO~Om!nO}!oO!y9rO!}!pO#O!pO#Q!pO#R!pO'w!lO'xTO'{UO(W!mO(c!sO~O!]'dO!^'cO!_'cO#P!pO#U'eO#V'eO~PAjO_%gO!b#uO!i%^O'm%gO(P%RO(d'gO~O!m'kO#Y'iO~PBxOm!nO}!oO'xTO'{UO(W!mO(c!sO~O!YXOm(aX}(aX!](aX!^(aX!_(aX!y(aX!}(aX#O(aX#P(aX#Q(aX#R(aX#U(aX#V(aX'w(aX'x(aX'{(aX(W(aX(c(aX~O!^'cO!_'cO'w!lO~PChO'r'oO's'oO't'qO~O]!|O'x'sO'y!|O'z'sO~O]#PO'z'sO'{'sO'|#PO~Or#RO!P#SO(U#SO(V'wO~O!V'yO!T'OX!T'UX!W'OX!W'UX~P+}O!W'{O!T(ZX~OP$]OY$dOl$QOz#yO{#zO}#{O!W'{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO#v$XO#w$YO(TVO(d$ZO(k#|O(l#}O~O!T(ZX~PG[O!T(QO~O!T(gX!W(gX!b(gX!h(gX(d(gX~O#Y(gX#e#^X!X(gX~PIbO#Y(RO!T(iX!W(iX~O!W(SO!T(hX~O!T(VO~O#Y$eO~PIbO!X(WO~P`Oz#yO{#zO}#{O!g#wO!i#xO(TVOP!kaY!kal!ka!W!ka!f!ka!m!ka#h!ka#i!ka#j!ka#k!ka#l!ka#m!ka#n!ka#o!ka#p!ka#r!ka#t!ka#v!ka#w!ka(d!ka(k!ka(l!ka~O_!ka'm!ka'k!ka!T!ka!h!kap!ka!Y!ka%b!ka!b!ka~PJxO!h(XO~O!b#uO#Y(YO(d'gO!W(fX_(fX'm(fX~O!h(fX~PMhO}%aO!Y%bO!y]O#c(_O#d(^O'v%`O~O!W(`O!h(eX~O!h(bO~O}%aO!Y%bO#d(^O'v%`O~OP(YXY(YXl(YXz(YX{(YX}(YX!W(YX!f(YX!g(YX!i(YX!m(YX#h(YX#i(YX#j(YX#k(YX#l(YX#m(YX#n(YX#o(YX#p(YX#r(YX#t(YX#v(YX#w(YX(T(YX(d(YX(k(YX(l(YX~O!b#uO!h(YX~P! UOz(cO{(dO!g#wO!i#xO!y!xa}!xa~O!u!xa%a!xa!Y!xa#c!xa#d!xa'v!xa~P!#YO!u(hO~OPYOQYOb!jOc!iOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!YXO!duO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$R!kO$VfO'v!dO'xTO'{UO(TVO(c[O(piO~Oj%SOl$tOm$sOn$sOt%TOv%UOx:[O}${O!Y$|O!d;fO!i$xO#d:bO$R%YO$n:^O$p:`O$s%ZO'v(lO'xTO'{UO(P%RO(T$uO~O#e(nO~Oj%SOl$tOm$sOn$sOt%TOv%UOx%VO}${O!Y$|O!d%[O!i$xO#d%]O$R%YO$n%WO$p%XO$s%ZO'v(lO'xTO'{UO(P%RO(T$uO~Oe(^P~P!'vO!V(rO!h(_P~P%[O(W(tO(c[O~O}(vO!i#xO(W(tO(c[O~OP9qOQ9qOb;bOc!iOjkOl9qOmkOnkOtkOv9qOx9qO}WO!RkO!SkO!Y!eO!d9tO!iZO!l9qO!m9qO!n9qO!p9uO!r9xO!u!hO$R!kO$VfO'v)UO'xTO'{UO(TVO(c[O(p;`O~O{)XO!i#xO~O!W$aO_$la'm$la'k$la!h$la!T$la!Y$la%b$la!b$la~O#q)]O~P!&^Oz)`O!b)_O!Y$YX$U$YX$X$YX$Z$YX$b$YX~O!b)_O!Y(mX$U(mX$X(mX$Z(mX$b(mX~Oz)`O~P!-lOz)`O!Y(mX$U(mX$X(mX$Z(mX$b(mX~O!Y)bO$U)fO$X)aO$Z)aO$b)gO~O!V)jO~P!*SO$X$gO$Z$fO$b)nO~Oh$tXz$tX}$tX!g$tX(k$tX(l$tX~OegXe$tXhgX!WgX#YgX~P!/bOm)pO~Or)qO(U)rO(V)tO~Oh)}Oz)vO})wO(k)yO(l){O~Oe)uO~P!0kOe*OO~Oj%SOl$tOm$sOn$sOt%TOv%UOx:[O}${O!Y$|O!d;fO!i$xO#d:bO$R%YO$n:^O$p:`O$s%ZO'xTO'{UO(P%RO(T$uO~O!V*SO'v*PO!h(qP~P!1YO#e*UO~O!i*VO~O!V*[O'v*XO!T(rP~P!1YOl*hO}*`O!]*fO!^*_O!_*_O!i*VO#U*gO%X*bO'w!lO(W!mO~O!X*eO~P!3`O!g#wOh(SXz(SX}(SX(k(SX(l(SX!W(SX#Y(SX~Oe(SX#z(SX~P!4XOh*kO#Y*jOe(RX!W(RX~O!W*lOe(QX~O'v&QOe(QP~O!i*sO~O'v(lO~Oj*wO}%aO!V#hO!Y%bO!y]O#c#kO#d#hO'v%`O!h(eP~O!b#uO#e*xO~O}%aO!V*zO!W(SO!Y%bO'v%`O!T(hP~Om'RO}*|O!V*{O'xTO'{UO(W(tO~O!X(jP~P!7SO!W*}O_(vX'm(vX~OP$]OY$dOl$QOz#yO{#zO}#{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO#v$XO#w$YO(TVO(d$ZO(k#|O(l#}O~O_!ca!W!ca'm!ca'k!ca!T!ca!h!cap!ca!Y!ca%b!ca!b!ca~P!7zOz#yO{#zO}#{O!g#wO!i#xO(TVOP!oaY!oal!oa!W!oa!f!oa!m!oa#h!oa#i!oa#j!oa#k!oa#l!oa#m!oa#n!oa#o!oa#p!oa#r!oa#t!oa#v!oa#w!oa(d!oa(k!oa(l!oa~O_!oa'm!oa'k!oa!T!oa!h!oap!oa!Y!oa%b!oa!b!oa~P!:eOz#yO{#zO}#{O!g#wO!i#xO(TVOP!qaY!qal!qa!W!qa!f!qa!m!qa#h!qa#i!qa#j!qa#k!qa#l!qa#m!qa#n!qa#o!qa#p!qa#r!qa#t!qa#v!qa#w!qa(d!qa(k!qa(l!qa~O_!qa'm!qa'k!qa!T!qa!h!qap!qa!Y!qa%b!qa!b!qa~P!=OOh+WO!Y'VO%b+VO(P%RO~O!b+YO_(OX!Y(OX'm(OX!W(OX~O_%gO!YXO'm%gO~O!i%^O(P%RO~O!i%^O'v%`O(P%RO~O!b#uO#e(nO~O%c+fO'v+bO'xTO'{UO!X(zP~O!W+gO^(yX~OY+kO~O^+lO~O!Y%wO'v%`O'w!lO^(yP~O#Y+qO(P%RO~Oh+tO!Y$|O(P%RO~O!Y+vO~Oz+xO!YXO~O%g%nO~O!u+}O~Oc,SO~O'v#mO!X(xP~Oc%uO~O%c!QO'v&QO~P<wOY,YO^,XO~OPYOQYObzOcyOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!duO!iZO!lYO!mYO!nYO!pvO!uxO!y]O$VfO%a}O'xTO'{UO(TVO(c[O(piO~O!Y!eO!r!gO$R!kO'v!dO~P!CuO^,XO_%gO'm%gO~OPYOQYOb!jOc!iOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!Y!eO!duO!iZO!lYO!mYO!nYO!pvO!u!hO$R!kO$VfO'v!dO'xTO'{UO(TVO(c[O(piO~O_,_O!rwO#q!OO%e!OO%f!OO%g!OO~P!F_O!i&fO~O&U,eO~O!Y,gO~O&g,iO&i,jOP&daQ&daW&da_&dab&dac&daj&dal&dam&dan&dat&dav&dax&da}&da!R&da!S&da!Y&da!d&da!i&da!l&da!m&da!n&da!p&da!r&da!u&da!y&da#q&da$R&da$V&da%a&da%c&da%e&da%f&da%g&da%j&da%l&da%o&da%p&da%r&da&O&da&U&da&W&da&Y&da&[&da&_&da&e&da&k&da&m&da&o&da&q&da&s&da'k&da'v&da'x&da'{&da(T&da(c&da(p&da!X&da&]&da`&da&b&da~O'v,oO~O!W|X!W!`X!X|X!X!`X!b|X!b!`X!i!`X#Y|X(P!`X~O!b,tO#Y,sO!W#bX!W(]X!X#bX!X(]X!b(]X!i(]X(P(]X~O!b,vO!i%^O(P%RO!W![X!X![X~Om!nO}!oO'xTO'{UO(W!mO~OP9qOQ9qOb;bOc!iOjkOl9qOmkOnkOtkOv9qOx9qO}WO!RkO!SkO!Y!eO!d9tO!iZO!l9qO!m9qO!n9qO!p9uO!r9xO!u!hO$R!kO$VfO'xTO'{UO(TVO(c[O(p;`O~O'v:gO~P# eO!W,zO!X([X~O!X,|O~O!b,tO#Y,sO!W#bX!X#bX~O!W,}O!X(jX~O!X-PO~O!^-QO!_-QO'w!lO~P# SO!X-TO~P'_Oh-WO!Y'VO~O!T-]O~Om!xa!]!xa!^!xa!_!xa!}!xa#O!xa#P!xa#Q!xa#R!xa#U!xa#V!xa'w!xa'x!xa'{!xa(W!xa(c!xa~P!#YO!m-bO#Y-`O~PBxO!^-dO!_-dO'w!lO~PChO_%gO#Y-`O'm%gO~O_%gO!b#uO#Y-`O'm%gO~O_%gO!b#uO!m-bO#Y-`O'm%gO(d'gO~O'r'oO's'oO't-iO~Op-jO~O!T'Oa!W'Oa~P!7zO!V-nO!T'OX!W'OX~P%[O!W'{O!T(Za~O!T(Za~PG[O!W(SO!T(ha~O}%aO!V-rO!Y%bO'v%`O!T'UX!W'UX~O#Y-tO!W(fa!h(fa_(fa'm(fa~O!b#uO~P#)kO!W(`O!h(ea~O}%aO!Y%bO#d-xO'v%`O~Oj-}O}%aO!V-zO!Y%bO!y]O#c-|O#d-zO'v%`O!W'XX!h'XX~O{.RO!i#xO~Oh.UO!Y'VO%b.TO(P%RO~O_#]i!W#]i'm#]i'k#]i!T#]i!h#]ip#]i!Y#]i%b#]i!b#]i~P!7zOh;lOz)vO})wO(k)yO(l){O~O#e#Xa_#Xa#Y#Xa'm#Xa!W#Xa!h#Xa!Y#Xa!T#Xa~P#,gO#e(SXP(SXY(SX_(SXl(SX{(SX!f(SX!i(SX!m(SX#h(SX#i(SX#j(SX#k(SX#l(SX#m(SX#n(SX#o(SX#p(SX#r(SX#t(SX#v(SX#w(SX'm(SX(T(SX(d(SX!h(SX!T(SX'k(SXp(SX!Y(SX%b(SX!b(SX~P!4XO!W._Oe(^X~P!0kOe.aO~O!W.bO!h(_X~P!7zO!h.eO~O!T.gO~OP$]Oz#yO{#zO}#{O!g#wO!i#xO!m$]O(TVOY#gi_#gil#gi!W#gi!f#gi#i#gi#j#gi#k#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi'm#gi(d#gi(k#gi(l#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~O#h#gi~P#0cO#h$OO~P#0cOP$]Oz#yO{#zO}#{O!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO(TVOY#gi_#gi!W#gi!f#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi'm#gi(d#gi(k#gi(l#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~Ol#gi~P#3TOl$QO~P#3TOP$]Ol$QOz#yO{#zO}#{O!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO(TVO_#gi!W#gi#r#gi#t#gi#v#gi#w#gi'm#gi(d#gi(k#gi(l#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~OY#gi!f#gi#m#gi#n#gi#o#gi#p#gi~P#5uOY$dO!f$SO#m$SO#n$SO#o$cO#p$SO~P#5uOP$]OY$dOl$QOz#yO{#zO}#{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO(TVO_#gi!W#gi#t#gi#v#gi#w#gi'm#gi(d#gi(l#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~O(k#gi~P#8vO(k#|O~P#8vOP$]OY$dOl$QOz#yO{#zO}#{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO(TVO(k#|O_#gi!W#gi#v#gi#w#gi'm#gi(d#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~O(l#gi~P#;hO(l#}O~P#;hOP$]OY$dOl$QOz#yO{#zO}#{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO#v$XO(TVO(k#|O(l#}O~O_#gi!W#gi#w#gi'm#gi(d#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~P#>YOPZXYZXlZXzZX{ZX}ZX!fZX!gZX!iZX!mZX#YZX#edX#hZX#iZX#jZX#kZX#lZX#mZX#nZX#oZX#pZX#rZX#tZX#vZX#wZX#|ZX(TZX(dZX(kZX(lZX!WZX!XZX~O#zZX~P#@sOP$]OY:YOl9|Oz#yO{#zO}#{O!f:OO!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O#m:OO#n:OO#o:XO#p:OO#r:PO#t:RO#v:TO#w:UO(TVO(d$ZO(k#|O(l#}O~O#z.iO~P#CQO#Y:ZO#|:ZO#z(YX!X(YX~P! UO_'[a!W'[a'm'[a'k'[a!h'[a!T'[ap'[a!Y'[a%b'[a!b'[a~P!7zOP#giY#gi_#gil#gi{#gi!W#gi!f#gi!g#gi!i#gi!m#gi#h#gi#i#gi#j#gi#k#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi'm#gi(T#gi(d#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~P#,gO_#{i!W#{i'm#{i'k#{i!T#{i!h#{ip#{i!Y#{i%b#{i!b#{i~P!7zO$X.nO$Z.nO~O$X.oO$Z.oO~O!b)_O#Y.pO!Y$_X$U$_X$X$_X$Z$_X$b$_X~O!V.qO~O!Y)bO$U.sO$X)aO$Z)aO$b.tO~O!W:VO!X(XX~P#CQO!X.uO~O!b)_O$b(mX~O$b.wO~Or)qO(U)rO(V.zO~O!T/OO~P!&^O!WdX!bdX!hdX!h$tX(ddX~P!/bO!h/UO~P#,gO!W/VO!b#uO(d'gO!h(qX~O!h/[O~O!V*SO'v%`O!h(qP~O#e/^O~O!T$tX!W$tX!b${X~P!/bO!W/_O!T(rX~P#,gO!b/aO~O!T/cO~Ol/gO!b#uO!i%^O(P%RO(d'gO~O'v/iO~O!b+YO~O_%gO!W/mO'm%gO~O!X/oO~P!3`O!^/pO!_/pO'w!lO(W!mO~O}/rO(W!mO~O#U/sO~O'v&QOe'aX!W'aX~O!W*lOe(Qa~Oe/xO~Oz/yO{/yO}/zOhwa(kwa(lwa!Wwa#Ywa~Oewa#zwa~P$ hOz)vO})wOh$ma(k$ma(l$ma!W$ma#Y$ma~Oe$ma#z$ma~P$!^Oz)vO})wOh$oa(k$oa(l$oa!W$oa#Y$oa~Oe$oa#z$oa~P$#PO#e/|O~Oe$}a!W$}a#Y$}a#z$}a~P!0kO!b#uO~O#e0PO~O!W*}O_(va'm(va~Oz#yO{#zO}#{O!g#wO!i#xO(TVOP!oiY!oil!oi!W!oi!f!oi!m!oi#h!oi#i!oi#j!oi#k!oi#l!oi#m!oi#n!oi#o!oi#p!oi#r!oi#t!oi#v!oi#w!oi(d!oi(k!oi(l!oi~O_!oi'm!oi'k!oi!T!oi!h!oip!oi!Y!oi%b!oi!b!oi~P$$nOh.UO!Y'VO%b.TO~Oj0ZO'v0YO~P!1]O!b+YO_(Oa!Y(Oa'm(Oa!W(Oa~O#e0aO~OYZX!WdX!XdX~O!W0bO!X(zX~O!X0dO~OY0eO~O'v+bO'xTO'{UO~O!Y%wO'v%`O^'iX!W'iX~O!W+gO^(ya~O!h0jO~P!7zOY0mO~O^0nO~O#Y0qO~Oh0tO!Y$|O~O(W(tO!X(wP~Oh0}O!Y0zO%b0|O(P%RO~OY1XO!W1VO!X(xX~O!X1YO~O^1[O_%gO'm%gO~O'v#mO'xTO'{UO~O#Y$eO#|$eOP(YXY(YXl(YXz(YX{(YX}(YX!W(YX!f(YX!i(YX!m(YX#h(YX#i(YX#j(YX#k(YX#l(YX#m(YX#n(YX#o(YX#r(YX#t(YX#v(YX#w(YX(T(YX(d(YX(k(YX(l(YX~O#p1_O&S1`O_(YX!g(YX~P$+dO#Y$eO#p1_O&S1`O~O_1bO~P%[O_1dO~O&]1gOP&ZiQ&ZiW&Zi_&Zib&Zic&Zij&Zil&Zim&Zin&Zit&Ziv&Zix&Zi}&Zi!R&Zi!S&Zi!Y&Zi!d&Zi!i&Zi!l&Zi!m&Zi!n&Zi!p&Zi!r&Zi!u&Zi!y&Zi#q&Zi$R&Zi$V&Zi%a&Zi%c&Zi%e&Zi%f&Zi%g&Zi%j&Zi%l&Zi%o&Zi%p&Zi%r&Zi&O&Zi&U&Zi&W&Zi&Y&Zi&[&Zi&_&Zi&e&Zi&k&Zi&m&Zi&o&Zi&q&Zi&s&Zi'k&Zi'v&Zi'x&Zi'{&Zi(T&Zi(c&Zi(p&Zi!X&Zi`&Zi&b&Zi~O`1mO!X1kO&b1lO~P`O!YXO!i1oO~O&i,jOP&diQ&diW&di_&dib&dic&dij&dil&dim&din&dit&div&dix&di}&di!R&di!S&di!Y&di!d&di!i&di!l&di!m&di!n&di!p&di!r&di!u&di!y&di#q&di$R&di$V&di%a&di%c&di%e&di%f&di%g&di%j&di%l&di%o&di%p&di%r&di&O&di&U&di&W&di&Y&di&[&di&_&di&e&di&k&di&m&di&o&di&q&di&s&di'k&di'v&di'x&di'{&di(T&di(c&di(p&di!X&di&]&di`&di&b&di~O!T1uO~O!W![a!X![a~P#CQOm!nO}!oO!V1{O(W!mO!W'PX!X'PX~P@OO!W,zO!X([a~O!W'VX!X'VX~P!7SO!W,}O!X(ja~O!X2SO~P'_O_%gO#Y2]O'm%gO~O_%gO!b#uO#Y2]O'm%gO~O_%gO!b#uO!m2aO#Y2]O'm%gO(d'gO~O_%gO'm%gO~P!7zO!W$aOp$la~O!T'Oi!W'Oi~P!7zO!W'{O!T(Zi~O!W(SO!T(hi~O!T(ii!W(ii~P!7zO!W(fi!h(fi_(fi'm(fi~P!7zO#Y2cO!W(fi!h(fi_(fi'm(fi~O!W(`O!h(ei~O}%aO!Y%bO!y]O#c2hO#d2gO'v%`O~O}%aO!Y%bO#d2gO'v%`O~Oh2oO!Y'VO%b2nO~Oh2oO!Y'VO%b2nO(P%RO~O#ewaPwaYwa_walwa!fwa!gwa!iwa!mwa#hwa#iwa#jwa#kwa#lwa#mwa#nwa#owa#pwa#rwa#twa#vwa#wwa'mwa(Twa(dwa!hwa!Twa'kwapwa!Ywa%bwa!bwa~P$ hO#e$maP$maY$ma_$mal$ma{$ma!f$ma!g$ma!i$ma!m$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#o$ma#p$ma#r$ma#t$ma#v$ma#w$ma'm$ma(T$ma(d$ma!h$ma!T$ma'k$map$ma!Y$ma%b$ma!b$ma~P$!^O#e$oaP$oaY$oa_$oal$oa{$oa!f$oa!g$oa!i$oa!m$oa#h$oa#i$oa#j$oa#k$oa#l$oa#m$oa#n$oa#o$oa#p$oa#r$oa#t$oa#v$oa#w$oa'm$oa(T$oa(d$oa!h$oa!T$oa'k$oap$oa!Y$oa%b$oa!b$oa~P$#PO#e$}aP$}aY$}a_$}al$}a{$}a!W$}a!f$}a!g$}a!i$}a!m$}a#h$}a#i$}a#j$}a#k$}a#l$}a#m$}a#n$}a#o$}a#p$}a#r$}a#t$}a#v$}a#w$}a'm$}a(T$}a(d$}a!h$}a!T$}a'k$}a#Y$}ap$}a!Y$}a%b$}a!b$}a~P#,gO_#]q!W#]q'm#]q'k#]q!T#]q!h#]qp#]q!Y#]q%b#]q!b#]q~P!7zOe'QX!W'QX~P!'vO!W._Oe(^a~O!V2wO!W'RX!h'RX~P%[O!W.bO!h(_a~O!W.bO!h(_a~P!7zO!T2zO~O#z!ka!X!ka~PJxO#z!ca!W!ca!X!ca~P#CQO#z!oa!X!oa~P!:eO#z!qa!X!qa~P!=OO!Y3^O$VfO$`3_O~O!X3cO~Op3dO~P#,gO_$iq!W$iq'm$iq'k$iq!T$iq!h$iqp$iq!Y$iq%b$iq!b$iq~P!7zO!T3eO~P#,gOz)vO})wO(l){Oh%Yi(k%Yi!W%Yi#Y%Yi~Oe%Yi#z%Yi~P$I|Oz)vO})wOh%[i(k%[i(l%[i!W%[i#Y%[i~Oe%[i#z%[i~P$JoO(d$ZO~P#,gO!V3hO'v%`O!W']X!h']X~O!W/VO!h(qa~O!W/VO!b#uO!h(qa~O!W/VO!b#uO(d'gO!h(qa~Oe$vi!W$vi#Y$vi#z$vi~P!0kO!V3pO'v*XO!T'_X!W'_X~P!1YO!W/_O!T(ra~O!W/_O!T(ra~P#,gO!b#uO#p3xO~Ol3{O!b#uO(d'gO~Oe(Ri!W(Ri~P!0kO#Y4OOe(Ri!W(Ri~P!0kO!h4RO~O_$jq!W$jq'm$jq'k$jq!T$jq!h$jqp$jq!Y$jq%b$jq!b$jq~P!7zO!T4VO~O!W4WO!Y(sX~P#,gO!g#wO~P4XO_$tX!Y$tX%VZX'm$tX!W$tX~P!/bO%V4YO_iXhiXziX}iX!YiX'miX(kiX(liX!WiX~O%V4YO~O%c4aO'v+bO'xTO'{UO!W'hX!X'hX~O!W0bO!X(za~OY4eO~O^4fO~O_%gO'm%gO~P#,gO!Y$|O~P#,gO!W4nO#Y4pO!X(wX~O!X4qO~Om!nO}4rO!]!xO!^!uO!_!uO!y9rO!}!pO#O!pO#P!pO#Q!pO#R!pO#U4wO#V!yO'w!lO'xTO'{UO(W!mO(c!sO~O!X4vO~P%$nOh4|O!Y0zO%b4{O~Oh4|O!Y0zO%b4{O(P%RO~O'v#mO!W'gX!X'gX~O!W1VO!X(xa~O'xTO'{UO(W5VO~O^5ZO~O#p5^O&S5_O~PMhO!h5`O~P%[O_5bO~O_5bO~P%[O`1mO!X5gO&b1lO~P`O!b5iO~O!b5kO!W(]i!X(]i!b(]i!i(]i(P(]i~O!W#bi!X#bi~P#CQO#Y5lO!W#bi!X#bi~O!W![i!X![i~P#CQO_%gO#Y5uO'm%gO~O_%gO!b#uO#Y5uO'm%gO~O!W(fq!h(fq_(fq'm(fq~P!7zO!W(`O!h(eq~O}%aO!Y%bO#d5|O'v%`O~O!Y'VO%b6PO~Oh6SO!Y'VO%b6PO~O#e%YiP%YiY%Yi_%Yil%Yi{%Yi!f%Yi!g%Yi!i%Yi!m%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#o%Yi#p%Yi#r%Yi#t%Yi#v%Yi#w%Yi'm%Yi(T%Yi(d%Yi!h%Yi!T%Yi'k%Yip%Yi!Y%Yi%b%Yi!b%Yi~P$I|O#e%[iP%[iY%[i_%[il%[i{%[i!f%[i!g%[i!i%[i!m%[i#h%[i#i%[i#j%[i#k%[i#l%[i#m%[i#n%[i#o%[i#p%[i#r%[i#t%[i#v%[i#w%[i'm%[i(T%[i(d%[i!h%[i!T%[i'k%[ip%[i!Y%[i%b%[i!b%[i~P$JoO#e$viP$viY$vi_$vil$vi{$vi!W$vi!f$vi!g$vi!i$vi!m$vi#h$vi#i$vi#j$vi#k$vi#l$vi#m$vi#n$vi#o$vi#p$vi#r$vi#t$vi#v$vi#w$vi'm$vi(T$vi(d$vi!h$vi!T$vi'k$vi#Y$vip$vi!Y$vi%b$vi!b$vi~P#,gOe'Qa!W'Qa~P!0kO!W'Ra!h'Ra~P!7zO!W.bO!h(_i~O#z#]i!W#]i!X#]i~P#CQOP$]Oz#yO{#zO}#{O!g#wO!i#xO!m$]O(TVOY#gil#gi!f#gi#i#gi#j#gi#k#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi#z#gi(d#gi(k#gi(l#gi!W#gi!X#gi~O#h#gi~P%2}O#h9zO~P%2}OP$]Oz#yO{#zO}#{O!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O(TVOY#gi!f#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi#z#gi(d#gi(k#gi(l#gi!W#gi!X#gi~Ol#gi~P%5YOl9|O~P%5YOP$]Ol9|Oz#yO{#zO}#{O!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O(TVO#r#gi#t#gi#v#gi#w#gi#z#gi(d#gi(k#gi(l#gi!W#gi!X#gi~OY#gi!f#gi#m#gi#n#gi#o#gi#p#gi~P%7eOY:YO!f:OO#m:OO#n:OO#o:XO#p:OO~P%7eOP$]OY:YOl9|Oz#yO{#zO}#{O!f:OO!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O#m:OO#n:OO#o:XO#p:OO#r:PO(TVO#t#gi#v#gi#w#gi#z#gi(d#gi(l#gi!W#gi!X#gi~O(k#gi~P%:PO(k#|O~P%:POP$]OY:YOl9|Oz#yO{#zO}#{O!f:OO!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O#m:OO#n:OO#o:XO#p:OO#r:PO#t:RO(TVO(k#|O#v#gi#w#gi#z#gi(d#gi!W#gi!X#gi~O(l#gi~P%<[O(l#}O~P%<[OP$]OY:YOl9|Oz#yO{#zO}#{O!f:OO!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O#m:OO#n:OO#o:XO#p:OO#r:PO#t:RO#v:TO(TVO(k#|O(l#}O~O#w#gi#z#gi(d#gi!W#gi!X#gi~P%>gO_#xy!W#xy'm#xy'k#xy!T#xy!h#xyp#xy!Y#xy%b#xy!b#xy~P!7zOh;mOz)vO})wO(k)yO(l){O~OP#giY#gil#gi{#gi!f#gi!g#gi!i#gi!m#gi#h#gi#i#gi#j#gi#k#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi#z#gi(T#gi(d#gi!W#gi!X#gi~P%A_O!g#wOP(SXY(SXh(SXl(SXz(SX{(SX}(SX!f(SX!i(SX!m(SX#h(SX#i(SX#j(SX#k(SX#l(SX#m(SX#n(SX#o(SX#p(SX#r(SX#t(SX#v(SX#w(SX#z(SX(T(SX(d(SX(k(SX(l(SX!W(SX!X(SX~O#z#{i!W#{i!X#{i~P#CQO#z!oi!X!oi~P$$nO!X6`O~O!W'[a!X'[a~P#CQO!b#uO(d'gO!W']a!h']a~O!W/VO!h(qi~O!W/VO!b#uO!h(qi~Oe$vq!W$vq#Y$vq#z$vq~P!0kO!T'_a!W'_a~P#,gO!b6gO~O!W/_O!T(ri~P#,gO!W/_O!T(ri~O!T6kO~O!b#uO#p6pO~Ol6qO!b#uO(d'gO~O!T6sO~Oe$xq!W$xq#Y$xq#z$xq~P!0kO_$jy!W$jy'm$jy'k$jy!T$jy!h$jyp$jy!Y$jy%b$jy!b$jy~P!7zO!b5kO~O!W4WO!Y(sa~O_#]y!W#]y'm#]y'k#]y!T#]y!h#]yp#]y!Y#]y%b#]y!b#]y~P!7zOY6xO~O!W0bO!X(zi~O^7OO~O(W(tO!W'dX!X'dX~O!W4nO!X(wa~OjkO'v7VO~P.iO!X7YO~P%$nOm!nO}7ZO'xTO'{UO(W!mO(c!sO~O!Y0zO~O!Y0zO%b7]O~Oh7`O!Y0zO%b7]O~OY7eO!W'ga!X'ga~O!W1VO!X(xi~O!h7iO~O!h7jO~O!h7mO~O!h7mO~P%[O_7oO~O!b7pO~O!h7qO~O!W(ii!X(ii~P#CQO_%gO#Y7yO'm%gO~O!W(fy!h(fy_(fy'm(fy~P!7zO!W(`O!h(ey~O!Y'VO%b7|O~O#e$vqP$vqY$vq_$vql$vq{$vq!W$vq!f$vq!g$vq!i$vq!m$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#o$vq#p$vq#r$vq#t$vq#v$vq#w$vq'm$vq(T$vq(d$vq!h$vq!T$vq'k$vq#Y$vqp$vq!Y$vq%b$vq!b$vq~P#,gO#e$xqP$xqY$xq_$xql$xq{$xq!W$xq!f$xq!g$xq!i$xq!m$xq#h$xq#i$xq#j$xq#k$xq#l$xq#m$xq#n$xq#o$xq#p$xq#r$xq#t$xq#v$xq#w$xq'm$xq(T$xq(d$xq!h$xq!T$xq'k$xq#Y$xqp$xq!Y$xq%b$xq!b$xq~P#,gO!W'Ri!h'Ri~P!7zO#z#]q!W#]q!X#]q~P#CQOz/yO{/yO}/zOPwaYwahwalwa!fwa!gwa!iwa!mwa#hwa#iwa#jwa#kwa#lwa#mwa#nwa#owa#pwa#rwa#twa#vwa#wwa#zwa(Twa(dwa(kwa(lwa!Wwa!Xwa~Oz)vO})wOP$maY$mah$mal$ma{$ma!f$ma!g$ma!i$ma!m$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#o$ma#p$ma#r$ma#t$ma#v$ma#w$ma#z$ma(T$ma(d$ma(k$ma(l$ma!W$ma!X$ma~Oz)vO})wOP$oaY$oah$oal$oa{$oa!f$oa!g$oa!i$oa!m$oa#h$oa#i$oa#j$oa#k$oa#l$oa#m$oa#n$oa#o$oa#p$oa#r$oa#t$oa#v$oa#w$oa#z$oa(T$oa(d$oa(k$oa(l$oa!W$oa!X$oa~OP$}aY$}al$}a{$}a!f$}a!g$}a!i$}a!m$}a#h$}a#i$}a#j$}a#k$}a#l$}a#m$}a#n$}a#o$}a#p$}a#r$}a#t$}a#v$}a#w$}a#z$}a(T$}a(d$}a!W$}a!X$}a~P%A_O#z$iq!W$iq!X$iq~P#CQO#z$jq!W$jq!X$jq~P#CQO!X8WO~O#z8XO~P!0kO!b#uO!W']i!h']i~O!b#uO(d'gO!W']i!h']i~O!W/VO!h(qq~O!T'_i!W'_i~P#,gO!W/_O!T(rq~O!T8_O~P#,gO!T8_O~Oe(Ry!W(Ry~P!0kO!W'ba!Y'ba~P#,gO_%Uq!Y%Uq'm%Uq!W%Uq~P#,gOY8dO~O!W0bO!X(zq~O#Y8hO!W'da!X'da~O!W4nO!X(wi~P#CQOPZXYZXlZXzZX{ZX}ZX!TZX!WZX!fZX!gZX!iZX!mZX#YZX#edX#hZX#iZX#jZX#kZX#lZX#mZX#nZX#oZX#pZX#rZX#tZX#vZX#wZX#|ZX(TZX(dZX(kZX(lZX~O!b%SX#p%SX~P&2_O!Y0zO%b8lO~O'xTO'{UO(W8qO~O!W1VO!X(xq~O!h8tO~O!h8uO~O!h8vO~O!h8vO~P%[O#Y8yO!W#by!X#by~O!W#by!X#by~P#CQO!Y'VO%b9OO~O#z#xy!W#xy!X#xy~P#CQOP$viY$vil$vi{$vi!f$vi!g$vi!i$vi!m$vi#h$vi#i$vi#j$vi#k$vi#l$vi#m$vi#n$vi#o$vi#p$vi#r$vi#t$vi#v$vi#w$vi#z$vi(T$vi(d$vi!W$vi!X$vi~P%A_Oz)vO})wO(l){OP%YiY%Yih%Yil%Yi{%Yi!f%Yi!g%Yi!i%Yi!m%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#o%Yi#p%Yi#r%Yi#t%Yi#v%Yi#w%Yi#z%Yi(T%Yi(d%Yi(k%Yi!W%Yi!X%Yi~Oz)vO})wOP%[iY%[ih%[il%[i{%[i!f%[i!g%[i!i%[i!m%[i#h%[i#i%[i#j%[i#k%[i#l%[i#m%[i#n%[i#o%[i#p%[i#r%[i#t%[i#v%[i#w%[i#z%[i(T%[i(d%[i(k%[i(l%[i!W%[i!X%[i~O#z$jy!W$jy!X$jy~P#CQO#z#]y!W#]y!X#]y~P#CQO!b#uO!W']q!h']q~O!W/VO!h(qy~O!T'_q!W'_q~P#,gO!T9VO~P#,gO!W0bO!X(zy~O!W4nO!X(wq~O!Y0zO%b9^O~O!h9aO~O!Y'VO%b9fO~OP$vqY$vql$vq{$vq!f$vq!g$vq!i$vq!m$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#o$vq#p$vq#r$vq#t$vq#v$vq#w$vq#z$vq(T$vq(d$vq!W$vq!X$vq~P%A_OP$xqY$xql$xq{$xq!f$xq!g$xq!i$xq!m$xq#h$xq#i$xq#j$xq#k$xq#l$xq#m$xq#n$xq#o$xq#p$xq#r$xq#t$xq#v$xq#w$xq#z$xq(T$xq(d$xq!W$xq!X$xq~P%A_Oe%^!Z!W%^!Z#Y%^!Z#z%^!Z~P!0kO!W'dq!X'dq~P#CQO!W#b!Z!X#b!Z~P#CQO#e%^!ZP%^!ZY%^!Z_%^!Zl%^!Z{%^!Z!W%^!Z!f%^!Z!g%^!Z!i%^!Z!m%^!Z#h%^!Z#i%^!Z#j%^!Z#k%^!Z#l%^!Z#m%^!Z#n%^!Z#o%^!Z#p%^!Z#r%^!Z#t%^!Z#v%^!Z#w%^!Z'm%^!Z(T%^!Z(d%^!Z!h%^!Z!T%^!Z'k%^!Z#Y%^!Zp%^!Z!Y%^!Z%b%^!Z!b%^!Z~P#,gOP%^!ZY%^!Zl%^!Z{%^!Z!f%^!Z!g%^!Z!i%^!Z!m%^!Z#h%^!Z#i%^!Z#j%^!Z#k%^!Z#l%^!Z#m%^!Z#n%^!Z#o%^!Z#p%^!Z#r%^!Z#t%^!Z#v%^!Z#w%^!Z#z%^!Z(T%^!Z(d%^!Z!W%^!Z!X%^!Z~P%A_Op(XX~P1qO'w!lO~P!*SO!TdX!WdX#YdX~P&2_OPZXYZXlZXzZX{ZX}ZX!WZX!WdX!fZX!gZX!iZX!mZX#YZX#YdX#edX#hZX#iZX#jZX#kZX#lZX#mZX#nZX#oZX#pZX#rZX#tZX#vZX#wZX#|ZX(TZX(dZX(kZX(lZX~O!bdX!hZX!hdX(ddX~P&GuOP9qOQ9qOb;bOc!iOjkOl9qOmkOnkOtkOv9qOx9qO}WO!RkO!SkO!YXO!d9tO!iZO!l9qO!m9qO!n9qO!p9uO!r9xO!u!hO$R!kO$VfO'v)UO'xTO'{UO(TVO(c[O(p;`O~O!W:VO!X$la~Oj%SOl$tOm$sOn$sOt%TOv%UOx:]O}${O!Y$|O!d;gO!i$xO#d:cO$R%YO$n:_O$p:aO$s%ZO'v(lO'xTO'{UO(P%RO(T$uO~O#q)]O~P&LkO!XZX!XdX~P&GuO#e9yO~O!b#uO#e9yO~O#Y:ZO~O#p:OO~O#Y:eO!W(iX!X(iX~O#Y:ZO!W(gX!X(gX~O#e:fO~Oe:hO~P!0kO#e:mO~O#e:nO~O!b#uO#e:oO~O!b#uO#e:fO~O#z:pO~P#CQO#e:qO~O#e:rO~O#e:sO~O#e:tO~O#e:uO~O#e:vO~O#z:wO~P!0kO#z:xO~P!0kO$V~!g!}#O#Q#R#U#c#d#o(p$n$p$s%V%a%b%c%j%l%o%p%r%t~'qR$V(p#i!S'o'w#jm#h#klz'p(W'p'v$X$Z$X~",
    goto: "$'R)OPPPP)PPP)SP)eP*t.xPPPP5YPP5pP;l>sP?WP?WPPP?WP@xP?WP?WP?WP@|PPARPAlPFdPPPFhPPPPFhIiPPPIoJjPFhPLxPPPP! WFhPPPFhPFhP!#fFhP!&z!'|!(VP!(y!(}!(yPPPPP!,Y!'|PP!,v!-pP!0dFhFh!0i!3s!8Y!8Y!<OPPP!<VFhPPPPPPPPPPP!?dP!@uPPFh!BSPFhPFhFhFhFhPFh!CfPP!FnP!IrP!Iv!JQ!JU!JUP!FkP!JY!JYP!M^P!MbFhFh!Mh#!k?WP?WP?W?WP##v?W?W#%r?W#(R?W#)w?W?W#*f#,d#,d#,h#,p#,d#,xP#,dP?W#-b?W#.k?W?W5YPPP#/wPPP#0b#0bP#0bP#0x#0bPP#1OP#0uP#0u#1c#0u#1}#2T5V)S#2W)SP#2_#2_#2_P)SP)SP)SP)SPP)SP#2e#2hP#2h)SP#2lP#2oP)SP)SP)SP)SP)SP)S)SPP#2u#2{#3W#3^#3d#3j#3p#4O#4U#4[#4f#4l#4v#5V#5]#5}#6a#6g#6m#6{#7b#8s#9R#9X#9_#9e#9k#9u#9{#:R#:]#:o#:uPPPPPPPPPP#:{PPPPPPP#;p#>wP#@W#@_#@gPPPP#Du#Gl#NT#NW#NZ$ S$ V$ Y$ a$ iPP$ o$ s$!k$#j$#n$$SPP$$W$$^$$bP$$e$$i$$l$%b$%y$&b$&f$&i$&l$&r$&u$&y$&}R!{RoqOXst!Z#c%f&i&k&l&n,b,g1g1jY!uQ'V-S0z4uQ%lvQ%tyQ%{|Q&a!VS&}!e,zQ']!iS'c!r!xS*_$|*dQ+`%uQ+m%}Q,R&ZQ-Q'UQ-['^Q-d'dQ/p*fQ1U,SR:d9u%OdOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|,_,b,g-W-`-n-t.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2w4r4|5^5_5b5u7Z7`7o7yS#p]9r!r)W$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cQ*o%VQ+e%wQ,T&^Q,[&fQ.X:[Q0W+WQ0[+YQ0g+fQ1^,YQ2k.UQ4`0bQ5T1VQ6R2oQ6X:]Q6z4aR8P6S&|kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;ct!nQ!r!u!x!y&}'U'V'c'd'e,z-Q-S-d0z4u4w$^$si#u#w$c$d$x${%W%X%])q)w)z)|)}*U*[*j*k+V+Y+q+t.T._/P/^/_/a/|0q0t0|2n3f3p3x4O4W4Y4{6P6g6p7]7|8X8l9O9^9f:X:Y:^:_:`:a:b:c:i:j:k:l:m:n:q:r:s:t:w:x;`;h;i;l;mQ&O|Q&{!eS'R%b,}Q+e%wQ/{*sQ0g+fQ0l+lQ1],XQ1^,YQ4`0bQ4i0nQ5W1XQ5X1[Q6z4aQ6}4fQ7h5ZQ8g7OR8r7ernOXst!V!Z#c%f&`&i&k&l&n,b,g1g1jR,V&b&v^OPXYstuvwz!Z!`!g!j!o#R#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'X'i'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;b;c[#[WZ#V#Y'O'y!S%cm#g#h#k%^%a(S(^(_(`*z*{*},^,t-r-x-y-z-|1o2g2h5k5|Q%oxQ%syS%x|%}Q&U!TQ'Y!hQ'[!iQ(g#rS*R$x*VS+_%t%uQ+c%wQ+|&XQ,Q&ZS-Z']'^Q.W(hQ/Z*SQ0`+`Q0f+fQ0h+gQ0k+kQ1P+}S1T,R,SQ2X-[Q3g/VQ4_0bQ4c0eQ4h0mQ5S1UQ6d3hQ6y4aQ6|4eQ8c6xR9X8dv$zi#w%W%X%])z)|*U*j*k._/^/|3f4O8X;`;h;i!S%qy!i!t%s%t%u&|'[']'^'b'l*^+_+`,w-Z-[-c/h0`2Q2X2`3zQ+X%oQ+r&RQ+u&SQ,P&ZQ.V(gQ1O+|U1S,Q,R,SQ2p.WQ4}1PS5R1T1UQ7d5S#O;d#u$c$d$x${)q)w)}*[+V+Y+q+t.T/P/_/a0q0t0|2n3p3x4W4Y4{6P6g6p7]7|8l9O9^9f:^:`:b:i:k:m:q:s:w;l;mg;e:X:Y:_:a:c:j:l:n:r:t:xW%Pi%R*l;`S&R!Q&`Q&S!RQ&T!SR+p&P$_%Oi#u#w$c$d$x${%W%X%])q)w)z)|)}*U*[*j*k+V+Y+q+t.T._/P/^/_/a/|0q0t0|2n3f3p3x4O4W4Y4{6P6g6p7]7|8X8l9O9^9f:X:Y:^:_:`:a:b:c:i:j:k:l:m:n:q:r:s:t:w:x;`;h;i;l;mT)r$u)sV*p%V:[:]U'R!e%b,}S(u#y#zQ+j%zS.P(c(dQ0u+vQ4P/yR7S4n&|kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;c$i$`c#X#d%j%k%m'x(O(j(q(y(z({(|(})O)P)Q)R)S)T)V)Y)^)h+T+i,x-g-l-q-s.^.d.h.j.k.l.{/}1v1y2Z2b2v2{2|2}3O3P3Q3R3S3T3U3V3W3X3[3]3b4T4]5n5t5y6V6W6]6^7U7s7w8Q8U8V8{9Z9b9s;VT#SV#T&}kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cQ'P!eR1|,zv!nQ!e!r!u!x!y&}'U'V'c'd'e,z-Q-S-d0z4u4wS*^$|*dS/h*_*fQ/q*gQ0w+xQ3z/pR3}/snqOXst!Z#c%f&i&k&l&n,b,g1g1jQ&p!^Q'm!wS(i#t9yQ+]%rQ+z&UQ+{&WQ-X'ZQ-f'fS.](n:fS0O*x:oQ0^+^Q0y+yQ1n,iQ1p,jQ1x,uQ2V-YQ2Y-^S4U0P:uQ4Z0_S4^0a:vQ5m1zQ5q2WQ5v2_Q6w4[Q7t5oQ7u5rQ7x5wR8x7q$d$_c#X#d%k%m'x(O(j(q(y(z({(|(})O)P)Q)R)S)T)V)Y)^)h+T+i,x-g-l-q-s.^.d.h.k.l.{/}1v1y2Z2b2v2{2|2}3O3P3Q3R3S3T3U3V3W3X3[3]3b4T4]5n5t5y6V6W6]6^7U7s7w8Q8U8V8{9Z9b9s;VS(f#o'`U*i$}(m3ZS+S%j.jQ2l0WQ6O2kQ8O6RR9P8P$d$^c#X#d%k%m'x(O(j(q(y(z({(|(})O)P)Q)R)S)T)V)Y)^)h+T+i,x-g-l-q-s.^.d.h.k.l.{/}1v1y2Z2b2v2{2|2}3O3P3Q3R3S3T3U3V3W3X3[3]3b4T4]5n5t5y6V6W6]6^7U7s7w8Q8U8V8{9Z9b9s;VS(e#o'`S(w#z$_S+R%j.jS.Q(d(fQ.m)XQ0T+SR2i.R&|kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cS#p]9rQ&k!XQ&l!YQ&n![Q&o!]R1f,eQ'W!hQ+U%oQ-V'YS.S(g+XQ2T-UW2m.V.W0V0XQ5p2UU5}2j2l2pS7{6O6QS8}7}8OS9d8|9PQ9l9eR9o9mU!vQ'V-ST4s0z4u!Q_OXZ`st!V!Z#c#g%^%f&`&b&i&k&l&n(`,b,g-y1g1j]!pQ!r'V-S0z4uT#p]9r%Y{OPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&f&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7yS(u#y#zS.P(c(d!s:|$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cY!tQ'V-S0z4uQ'b!rS'l!u!xS'n!y4wS-c'c'dQ-e'eR2`-dQ'k!tS([#f1aS-b'b'nQ/Y*RQ/f*^Q2a-eQ3l/ZS3u/g/qQ6c3gS6n3{3}Q8Z6dR8b6qQ#vbQ'j!tS(Z#f1aS(]#l*wQ*y%_Q+Z%pQ+a%vU-a'b'k'nQ-u([Q/X*RQ/e*^Q/k*aQ0]+[Q1Q,OS2^-b-eQ2f-}S3k/Y/ZS3t/f/qQ3w/jQ3y/lQ5P1RQ5x2aQ6b3gQ6f3lS6j3u3}Q6o3|Q7b5QS8Y6c6dQ8^6kQ8`6nQ8o7cQ9T8ZQ9U8_Q9W8bQ9`8pQ9h9VQ;P:zQ;[;TR;];UV!vQ'V-S%YaOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&f&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7yS#vz!j!r:y$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cR;P;b%YbOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&f&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7yQ%_j!S%py!i!t%s%t%u&|'[']'^'b'l*^+_+`,w-Z-[-c/h0`2Q2X2`3zS%vz!jQ+[%qQ,O&ZW1R,P,Q,R,SU5Q1S1T1US7c5R5SQ8p7d!r:z$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cQ;T;aR;U;b$|eOPXYstuvw!Z!`!g!o#R#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&i&k&l&n&r&z'X'i'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7yY#aWZ#V#Y'y!S%cm#g#h#k%^%a(S(^(_(`*z*{*},^,t-r-x-y-z-|1o2g2h5k5|Q,]&f!p:{$[$m)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cR;O'OS'S!e%bR2O,}%OdOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|,_,b,g-W-`-n-t.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2w4r4|5^5_5b5u7Z7`7o7y!r)W$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cQ,[&fQ0W+WQ2k.UQ6R2oR8P6S!f$Uc#X%j'x(O(j(q)Q)R)S)T)Y)^+i-g-l-q-s.^.d.{/}2Z2b2v3X4T4]5t5y6V7w8{9s!T:Q)V)h,x.j1v1y2{3T3U3V3W3[3b5n6W6]6^7U7s8Q8U8V9Z9b;V!b$Wc#X%j'x(O(j(q)S)T)Y)^+i-g-l-q-s.^.d.{/}2Z2b2v3X4T4]5t5y6V7w8{9s!P:S)V)h,x.j1v1y2{3V3W3[3b5n6W6]6^7U7s8Q8U8V9Z9b;V!^$[c#X%j'x(O(j(q)Y)^+i-g-l-q-s.^.d.{/}2Z2b2v3X4T4]5t5y6V7w8{9sQ3f/Tz;c)V)h,x.j1v1y2{3[3b5n6W6]6^7U7s8Q8U8V9Z9b;VQ;h;jR;i;k&|kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cS$nh$oR3_.p'TgOPWXYZhstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m$o%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.p.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cT$jf$pQ$hfS)a$k)eR)m$pT$if$pT)c$k)e'ThOPWXYZhstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m$o%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.p.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cT$nh$oQ$qhR)l$o%YjOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&f&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7y!s;a$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;c#clOPXZst!Z!`!o#R#c#n#{$m%f&b&e&f&i&k&l&n&r&z'X(v)j*|+W,_,b,g-W.U.q/z0}1_1`1b1d1g1j1l2o3^4r4|5^5_5b6S7Z7`7ov$}i#w%W%X%])z)|*U*j*k._/^/|3f4O8X;`;h;i#O(m#u$c$d$x${)q)w)}*[+V+Y+q+t.T/P/_/a0q0t0|2n3p3x4W4Y4{6P6g6p7]7|8l9O9^9f:^:`:b:i:k:m:q:s:w;l;mQ*t%ZQ.|)vg3Z:X:Y:_:a:c:j:l:n:r:t:xv$yi#w%W%X%])z)|*U*j*k._/^/|3f4O8X;`;h;iQ*W$zS*a$|*dQ*u%[Q/l*b#O;R#u$c$d$x${)q)w)}*[+V+Y+q+t.T/P/_/a0q0t0|2n3p3x4W4Y4{6P6g6p7]7|8l9O9^9f:^:`:b:i:k:m:q:s:w;l;mf;S:X:Y:_:a:c:j:l:n:r:t:xQ;W;dQ;X;eQ;Y;fR;Z;gv$}i#w%W%X%])z)|*U*j*k._/^/|3f4O8X;`;h;i#O(m#u$c$d$x${)q)w)}*[+V+Y+q+t.T/P/_/a0q0t0|2n3p3x4W4Y4{6P6g6p7]7|8l9O9^9f:^:`:b:i:k:m:q:s:w;l;mg3Z:X:Y:_:a:c:j:l:n:r:t:xnoOXst!Z#c%f&i&k&l&n,b,g1g1jQ*Z${Q,p&uQ,q&wR3o/_$^%Oi#u#w$c$d$x${%W%X%])q)w)z)|)}*U*[*j*k+V+Y+q+t.T._/P/^/_/a/|0q0t0|2n3f3p3x4O4W4Y4{6P6g6p7]7|8X8l9O9^9f:X:Y:^:_:`:a:b:c:i:j:k:l:m:n:q:r:s:t:w:x;`;h;i;l;mQ+s&SQ0s+uQ4l0rR7R4mT*c$|*dS*c$|*dT4t0z4uS/j*`4rT3|/r7ZQ+Z%pQ/k*aQ0]+[Q1Q,OQ5P1RQ7b5QQ8o7cR9`8pn)z$v(o*v/]/t/u2t3m4S6a6r9S;Q;^;_!Y:i(k)[*Q*Y.[.x.}/T/b0U0p0r2s3n3r4k4m6T6U6h6l6t6v8]8a9g;j;k]:j3Y6[8R9Q9R9pp)|$v(o*v/R/]/t/u2t3m4S6a6r9S;Q;^;_![:k(k)[*Q*Y.[.x.}/T/b0U0p0r2q2s3n3r4k4m6T6U6h6l6t6v8]8a9g;j;k_:l3Y6[8R8S9Q9R9prnOXst!V!Z#c%f&`&i&k&l&n,b,g1g1jQ&]!UR,_&frnOXst!V!Z#c%f&`&i&k&l&n,b,g1g1jR&]!UQ+w&TR0o+psnOXst!V!Z#c%f&`&i&k&l&n,b,g1g1jQ0{+|S4z1O1PU7[4x4y4}S8k7^7_S9[8j8mQ9i9]R9n9jQ&d!VR,W&`R5W1XS%x|%}R0h+gQ&i!WR,b&jR,h&oT1h,g1jR,l&pQ,k&pR1q,lQ'p!zR-h'pSsOtQ#cXT%is#cQ!}TR'r!}Q#QUR't#QQ)s$uR.y)sQ#TVR'v#TQ#WWU'|#W'}-oQ'}#XR-o(OQ,{'PR1},{Q.`(oR2u.`Q.c(qS2x.c2yR2y.dQ-S'VR2R-SY!rQ'V-S0z4uR'a!rS#^W%aU(T#^(U-pQ(U#_R-p(PQ-O'SR2P-Ot`OXst!V!Z#c%f&`&b&i&k&l&n,b,g1g1jS#gZ%^U#q`#g-yR-y(`Q(a#iQ-v(]W.O(a-v2d5zQ2d-wR5z2eQ)e$kR.r)eQ$ohR)k$oQ$bcU)Z$b-k:WQ-k9sR:W)hQ/W*RW3i/W3j6e8[U3j/X/Y/ZS6e3k3lR8[6f#o)x$v(k(o)[*Q*Y*q*r*v.Y.Z.[.x.}/R/S/T/]/b/t/u0U0p0r2q2r2s2t3Y3m3n3r4S4k4m6T6U6Y6Z6[6a6h6l6r6t6v8R8S8T8]8a9Q9R9S9g9p;Q;^;_;j;kQ/`*YU3q/`3s6iQ3s/bR6i3rQ*d$|R/n*dQ*m%QR/w*mQ4X0UR6u4XQ+O%dR0S+OQ4o0uS7T4o8iR8i7UQ+y&UR0x+yQ4u0zR7X4uQ1W,TS5U1W7fR7f5WQ0c+cW4b0c4d6{8eQ4d0fQ6{4cR8e6|Q+h%xR0i+hQ1j,gR5f1jYrOXst#cQ&m!ZQ+Q%fQ,a&iQ,c&kQ,d&lQ,f&nQ1e,bS1h,g1jR5e1gQ%hpQ&q!_Q&t!aQ&v!bQ&x!cQ'h!tQ+P%eQ+]%rQ+o&OQ,V&dQ,n&sW-_'b'j'k'nQ-f'fQ/m*cQ0^+^S1Z,W,ZQ1r,mQ1s,pQ1t,qQ2Y-^W2[-a-b-e-gQ4Z0_Q4g0lQ4j0pQ5O1QQ5Y1]Q5d1fU5s2Z2^2aQ5v2_Q6w4[Q7P4iQ7Q4kQ7W4tQ7a5PQ7g5XS7v5t5xQ7x5wQ8f6}Q8n7bQ8s7hQ8z7wQ9Y8gQ9_8oQ9c8{R9k9`Q%ryQ'Z!iQ'f!tU+^%s%t%uQ,u&|U-Y'[']'^S-^'b'lQ/d*^S0_+_+`Q1z,wS2W-Z-[Q2_-cQ3v/hQ4[0`Q5o2QQ5r2XQ5w2`R6m3zS$wi;`R*n%RU%Qi%R;`R/v*lQ$viS(k#u+YQ(o#wS)[$c$dQ*Q$xQ*Y${Q*q%WQ*r%XQ*v%]Q.Y:^Q.Z:`Q.[:bQ.x)qS.})w/PQ/R)zQ/S)|Q/T)}Q/]*UQ/b*[Q/t*jQ/u*kh0U+V.T0|2n4{6P7]7|8l9O9^9fQ0p+qQ0r+tQ2q:iQ2r:kQ2s:mQ2t._S3Y:X:YQ3m/^Q3n/_Q3r/aQ4S/|Q4k0qQ4m0tQ6T:qQ6U:sQ6Y:_Q6Z:aQ6[:cQ6a3fQ6h3pQ6l3xQ6r4OQ6t4WQ6v4YQ8R:nQ8S:jQ8T:lQ8]6gQ8a6pQ9Q:rQ9R:tQ9S8XQ9g:wQ9p:xQ;Q;`Q;^;hQ;_;iQ;j;lR;k;mnpOXst!Z#c%f&i&k&l&n,b,g1g1jQ!fPS#eZ#nQ&s!`U'_!o4r7ZQ'u#RQ(x#{Q)i$mS,Z&b&eQ,`&fQ,m&rQ,r&zQ-U'XQ.f(vQ.v)jQ0Q*|Q0X+WQ1c,_Q2U-WQ2l.UQ3a.qQ4Q/zQ4y0}Q5[1_Q5]1`Q5a1bQ5c1dQ5h1lQ6O2oQ6_3^Q7_4|Q7k5^Q7l5_Q7n5bQ8O6SQ8m7`R8w7o#WcOPXZst!Z!`!o#c#n#{%f&b&e&f&i&k&l&n&r&z'X(v*|+W,_,b,g-W.U/z0}1_1`1b1d1g1j1l2o4r4|5^5_5b6S7Z7`7oQ#XWQ#dYQ%juQ%kvS%mw!gS'x#V'{Q(O#YQ(j#tQ(q#xQ(y$OQ(z$PQ({$QQ(|$RQ(}$SQ)O$TQ)P$UQ)Q$VQ)R$WQ)S$XQ)T$YQ)V$[Q)Y$aQ)^$eW)h$m)j.q3^Q+T%lQ+i%yS,x'O1{Q-g'iS-l'y-nQ-q(RQ-s(YQ.^(nQ.d(rQ.h9qQ.j9tQ.k9uQ.l9xQ.{)uQ/}*xQ1v,sQ1y,vQ2Z-`Q2b-tQ2v.bQ2{9yQ2|9zQ2}9{Q3O9|Q3P9}Q3Q:OQ3R:PQ3S:QQ3T:RQ3U:SQ3V:TQ3W:UQ3X.iQ3[:ZQ3]:dQ3b:VQ4T0PQ4]0aQ5n:eQ5t2]Q5y2cQ6V2wQ6W:fQ6]:hQ6^:oQ7U4pQ7s5lQ7w5uQ8Q:pQ8U:uQ8V:vQ8{7yQ9Z8hQ9b8yQ9s#RR;V;cR#ZWR'Q!eY!tQ'V-S0z4uS&|!e,zQ'b!rS'l!u!xS'n!y4wS,w&}'US-c'c'dQ-e'eQ2Q-QR2`-dR(p#wR(s#xQ!fQT-R'V-S]!qQ!r'V-S0z4uQ#o]R'`9rT#jZ%^S#iZ%^S%dm,^U(]#g#h#kS-w(^(_Q-{(`Q0R*}Q2e-xU2f-y-z-|S5{2g2hR7z5|`#]W#V#Y%a'y(S*z-rr#fZm#g#h#k%^(^(_(`*}-x-y-z-|2g2h5|Q1a,^Q1w,tQ5j1oQ7r5kT:}'O*{T#`W%aS#_W%aS'z#V(SS(P#Y*zS,y'O*{T-m'y-rT'T!e%bQ$kfR)o$pT)d$k)eR3`.pT*T$x*VR*]${Q0V+VQ2j.TQ4x0|Q6Q2nQ7^4{Q7}6PQ8j7]Q8|7|Q9]8lQ9e9OQ9j9^R9m9fnqOXst!Z#c%f&i&k&l&n,b,g1g1jQ&c!VR,V&`tmOXst!U!V!Z#c%f&`&i&k&l&n,b,g1g1jR,^&fT%em,^R0v+vR,U&^Q%||R+n%}R+d%wT&g!W&jT&h!W&jT1i,g1j",
    nodeNames:
      '⚠ ArithOp ArithOp LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem',
    maxTerm: 367,
    context: trackNewline,
    nodeProps: [
      [
        'group',
        -26,
        7,
        15,
        17,
        63,
        200,
        204,
        208,
        209,
        211,
        214,
        217,
        227,
        229,
        235,
        237,
        239,
        241,
        244,
        250,
        256,
        258,
        260,
        262,
        264,
        266,
        267,
        'Statement',
        -32,
        11,
        12,
        26,
        29,
        30,
        36,
        46,
        49,
        50,
        52,
        57,
        65,
        73,
        77,
        79,
        81,
        82,
        104,
        105,
        114,
        115,
        132,
        135,
        137,
        138,
        139,
        140,
        142,
        143,
        163,
        164,
        166,
        'Expression',
        -23,
        25,
        27,
        31,
        35,
        37,
        39,
        167,
        169,
        171,
        172,
        174,
        175,
        176,
        178,
        179,
        180,
        182,
        183,
        184,
        194,
        196,
        198,
        199,
        'Type',
        -3,
        85,
        97,
        103,
        'ClassItem'
      ],
      [
        'openedBy',
        32,
        'InterpolationStart',
        51,
        '[',
        55,
        '{',
        70,
        '(',
        144,
        'JSXStartTag',
        156,
        'JSXStartTag JSXStartCloseTag'
      ],
      [
        'closedBy',
        34,
        'InterpolationEnd',
        45,
        ']',
        56,
        '}',
        71,
        ')',
        145,
        'JSXSelfCloseEndTag JSXEndTag',
        161,
        'JSXEndTag'
      ]
    ],
    propSources: [jsHighlight],
    skippedNodes: [0, 3, 4, 270],
    repeatNodeCount: 33,
    tokenData:
      "$Fl(CSR!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#8g!R![#:v![!]#Gv!]!^#IS!^!_#J^!_!`#Nu!`!a$#a!a!b$(n!b!c$,m!c!}Er!}#O$-w#O#P$/R#P#Q$4j#Q#R$5t#R#SEr#S#T$7R#T#o$8]#o#p$<m#p#q$=c#q#r$>s#r#s$@P#s$f%Z$f$g+g$g#BYEr#BY#BZ$AZ#BZ$ISEr$IS$I_$AZ$I_$I|Er$I|$I}$Df$I}$JO$Df$JO$JTEr$JT$JU$AZ$JU$KVEr$KV$KW$AZ$KW&FUEr&FU&FV$AZ&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$AZ?HUOEr(n%d_$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$e&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$e&j'|!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU'|!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$e&j'ypOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU'ypOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z(CS+rq$e&j'yp'|!b'o(;dOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z(CS.ST'z#S$e&j'p(;dO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c(CS.n_$e&j'yp'|!b'p(;dOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`/x`$e&j!m$Ip'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S1V`#r$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S2d_#r$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2b3l_'x$(n$e&j'|!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k*r4r_$e&j'|!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k)`5vX$e&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q)`6jT$`#t$e&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#t6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y#t7bO$`#t#t7eP;=`<%l6y)`7kP;=`<%l5q*r7w]$`#t$e&j'|!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}%W8uZ'|!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p%W9oU$`#t'|!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}%W:UP;=`<%l8p*r:[P;=`<%l4k#%|:hh$e&j'yp'|!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__US$e&j'yp'|!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]US$e&j'|!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXUS$e&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSUSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWUS'|!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]US$e&j'ypOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWUS'ypOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYUS'yp'|!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S#%|C}i$e&j(c!L^'yp'|!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr#%|EoP;=`<%lCr(CSFRk$e&j'yp'|!b(W!LY'v&;d$X#tOY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$e&j'yp'|!b$X#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv(CSJPP;=`<%lEr%#SJ_`$e&j'yp'|!b#j$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SKl_$e&j#|$Id'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%DfLva(l%<v$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SNW`$e&j#v$Id'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2b! c_'{$)`$e&j'ypOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b*Q!!i_$e&j'ypOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b)`!#mX$e&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h#t!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y#t!$oP;=`<%l!$Y)`!$uP;=`<%l!#h*Q!%R]$`#t$e&j'ypOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r$f!&PZ'ypOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z$f!&yU$`#t'ypOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r$f!'`P;=`<%l!%z*Q!'fP;=`<%l!!b(*Q!'t_!i(!b$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'l!)O_!hM|$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h!*[b$e&j'yp'|!b'w#)d#k$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S!+o`$e&j'yp'|!b#h$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&-O!,|`$e&j'yp'|!bl&%`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&C[!.Z_!W&;l$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!/ec$e&j'yp'|!bz'<nOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!0ya$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!2Z_!VMt$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!3eg$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!5Vg$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!6wc$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!8_c$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!9uf$e&j'yp'|!b#i$IdOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpxz!;Zz{#,f{!P!;Z!P!Q#-{!Q!^!;Z!^!_#'Z!_!`#5k!`!a#7Q!a!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z(r!;fb$e&j'yp'|!b!SSOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpx!P!;Z!P!Q#%Z!Q!^!;Z!^!_#'Z!_!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z(Q!<w`$e&j'|!b!SSOY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eb!Q!^!<n!^!_!GY!_!}!<n!}#O!Ja#O#P!Dj#P#o!<n#o#p!GY#p;'S!<n;'S;=`!Kj<%lO!<n&n!>Q^$e&j!SSOY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@Y!_!}!=y!}#O!Bw#O#P!Dj#P#o!=y#o#p!@Y#p;'S!=y;'S;=`!E[<%lO!=y&n!?Ta$e&j!SSO!^&c!_#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&cS!@_X!SSOY!@YZ!P!@Y!P!Q!@z!Q!}!@Y!}#O!Ac#O#P!Bb#P;'S!@Y;'S;=`!Bq<%lO!@YS!APU!SS#Z#[!@z#]#^!@z#a#b!@z#g#h!@z#i#j!@z#m#n!@zS!AfVOY!AcZ#O!Ac#O#P!A{#P#Q!@Y#Q;'S!Ac;'S;=`!B[<%lO!AcS!BOSOY!AcZ;'S!Ac;'S;=`!B[<%lO!AcS!B_P;=`<%l!AcS!BeSOY!@YZ;'S!@Y;'S;=`!Bq<%lO!@YS!BtP;=`<%l!@Y&n!B|[$e&jOY!BwYZ&cZ!^!Bw!^!_!Ac!_#O!Bw#O#P!Cr#P#Q!=y#Q#o!Bw#o#p!Ac#p;'S!Bw;'S;=`!Dd<%lO!Bw&n!CwX$e&jOY!BwYZ&cZ!^!Bw!^!_!Ac!_#o!Bw#o#p!Ac#p;'S!Bw;'S;=`!Dd<%lO!Bw&n!DgP;=`<%l!Bw&n!DoX$e&jOY!=yYZ&cZ!^!=y!^!_!@Y!_#o!=y#o#p!@Y#p;'S!=y;'S;=`!E[<%lO!=y&n!E_P;=`<%l!=y(Q!Eki$e&j'|!b!SSOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#Z&}#Z#[!Eb#[#]&}#]#^!Eb#^#a&}#a#b!Eb#b#g&}#g#h!Eb#h#i&}#i#j!Eb#j#m&}#m#n!Eb#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!f!GaZ'|!b!SSOY!GYZw!GYwx!@Yx!P!GY!P!Q!HS!Q!}!GY!}#O!Ic#O#P!Bb#P;'S!GY;'S;=`!JZ<%lO!GY!f!HZb'|!b!SSOY'}Zw'}x#O'}#P#Z'}#Z#[!HS#[#]'}#]#^!HS#^#a'}#a#b!HS#b#g'}#g#h!HS#h#i'}#i#j!HS#j#m'}#m#n!HS#n;'S'};'S;=`(f<%lO'}!f!IhX'|!bOY!IcZw!Icwx!Acx#O!Ic#O#P!A{#P#Q!GY#Q;'S!Ic;'S;=`!JT<%lO!Ic!f!JWP;=`<%l!Ic!f!J^P;=`<%l!GY(Q!Jh^$e&j'|!bOY!JaYZ&cZw!Jawx!Bwx!^!Ja!^!_!Ic!_#O!Ja#O#P!Cr#P#Q!<n#Q#o!Ja#o#p!Ic#p;'S!Ja;'S;=`!Kd<%lO!Ja(Q!KgP;=`<%l!Ja(Q!KmP;=`<%l!<n'`!Ky`$e&j'yp!SSOY!KpYZ&cZr!Kprs!=ys!P!Kp!P!Q!L{!Q!^!Kp!^!_!Ns!_!}!Kp!}#O##z#O#P!Dj#P#o!Kp#o#p!Ns#p;'S!Kp;'S;=`#%T<%lO!Kp'`!MUi$e&j'yp!SSOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#Z(r#Z#[!L{#[#](r#]#^!L{#^#a(r#a#b!L{#b#g(r#g#h!L{#h#i(r#i#j!L{#j#m(r#m#n!L{#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rt!NzZ'yp!SSOY!NsZr!Nsrs!@Ys!P!Ns!P!Q# m!Q!}!Ns!}#O#!|#O#P!Bb#P;'S!Ns;'S;=`##t<%lO!Nst# tb'yp!SSOY)rZr)rs#O)r#P#Z)r#Z#[# m#[#])r#]#^# m#^#a)r#a#b# m#b#g)r#g#h# m#h#i)r#i#j# m#j#m)r#m#n# m#n;'S)r;'S;=`*Z<%lO)rt##RX'ypOY#!|Zr#!|rs!Acs#O#!|#O#P!A{#P#Q!Ns#Q;'S#!|;'S;=`##n<%lO#!|t##qP;=`<%l#!|t##wP;=`<%l!Ns'`#$R^$e&j'ypOY##zYZ&cZr##zrs!Bws!^##z!^!_#!|!_#O##z#O#P!Cr#P#Q!Kp#Q#o##z#o#p#!|#p;'S##z;'S;=`#$}<%lO##z'`#%QP;=`<%l##z'`#%WP;=`<%l!Kp(r#%fk$e&j'yp'|!b!SSOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#Z%Z#Z#[#%Z#[#]%Z#]#^#%Z#^#a%Z#a#b#%Z#b#g%Z#g#h#%Z#h#i%Z#i#j#%Z#j#m%Z#m#n#%Z#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#W#'d]'yp'|!b!SSOY#'ZZr#'Zrs!GYsw#'Zwx!Nsx!P#'Z!P!Q#(]!Q!}#'Z!}#O#)w#O#P!Bb#P;'S#'Z;'S;=`#*w<%lO#'Z#W#(fe'yp'|!b!SSOY*gZr*grs'}sw*gwx)rx#O*g#P#Z*g#Z#[#(]#[#]*g#]#^#(]#^#a*g#a#b#(]#b#g*g#g#h#(]#h#i*g#i#j#(]#j#m*g#m#n#(]#n;'S*g;'S;=`+Z<%lO*g#W#*OZ'yp'|!bOY#)wZr#)wrs!Icsw#)wwx#!|x#O#)w#O#P!A{#P#Q#'Z#Q;'S#)w;'S;=`#*q<%lO#)w#W#*tP;=`<%l#)w#W#*zP;=`<%l#'Z(r#+W`$e&j'yp'|!bOY#*}YZ&cZr#*}rs!Jasw#*}wx##zx!^#*}!^!_#)w!_#O#*}#O#P!Cr#P#Q!;Z#Q#o#*}#o#p#)w#p;'S#*};'S;=`#,Y<%lO#*}(r#,]P;=`<%l#*}(r#,cP;=`<%l!;Z(CS#,sb$e&j'yp'|!b'q(;d!SSOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpx!P!;Z!P!Q#%Z!Q!^!;Z!^!_#'Z!_!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z(CS#.W_$e&j'yp'|!bR(;dOY#-{YZ&cZr#-{rs#/Vsw#-{wx#2gx!^#-{!^!_#4f!_#O#-{#O#P#0X#P#o#-{#o#p#4f#p;'S#-{;'S;=`#5e<%lO#-{(Bb#/`]$e&j'|!bR(;dOY#/VYZ&cZw#/Vwx#0Xx!^#/V!^!_#1j!_#O#/V#O#P#0X#P#o#/V#o#p#1j#p;'S#/V;'S;=`#2a<%lO#/V(AO#0`X$e&jR(;dOY#0XYZ&cZ!^#0X!^!_#0{!_#o#0X#o#p#0{#p;'S#0X;'S;=`#1d<%lO#0X(;d#1QSR(;dOY#0{Z;'S#0{;'S;=`#1^<%lO#0{(;d#1aP;=`<%l#0{(AO#1gP;=`<%l#0X(<v#1qW'|!bR(;dOY#1jZw#1jwx#0{x#O#1j#O#P#0{#P;'S#1j;'S;=`#2Z<%lO#1j(<v#2^P;=`<%l#1j(Bb#2dP;=`<%l#/V(Ap#2p]$e&j'ypR(;dOY#2gYZ&cZr#2grs#0Xs!^#2g!^!_#3i!_#O#2g#O#P#0X#P#o#2g#o#p#3i#p;'S#2g;'S;=`#4`<%lO#2g(<U#3pW'ypR(;dOY#3iZr#3irs#0{s#O#3i#O#P#0{#P;'S#3i;'S;=`#4Y<%lO#3i(<U#4]P;=`<%l#3i(Ap#4cP;=`<%l#2g(=h#4oY'yp'|!bR(;dOY#4fZr#4frs#1jsw#4fwx#3ix#O#4f#O#P#0{#P;'S#4f;'S;=`#5_<%lO#4f(=h#5bP;=`<%l#4f(CS#5hP;=`<%l#-{%#W#5xb$e&j#|$Id'yp'|!b!SSOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpx!P!;Z!P!Q#%Z!Q!^!;Z!^!_#'Z!_!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z+h#7_b$U#t$e&j'yp'|!b!SSOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpx!P!;Z!P!Q#%Z!Q!^!;Z!^!_#'Z!_!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z$/l#8rp$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#:v![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#:v#S#U%Z#U#V#>Q#V#X%Z#X#Y!4|#Y#b%Z#b#c#<v#c#d#AY#d#l%Z#l#m#D[#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#;Rk$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#:v![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#:v#S#X%Z#X#Y!4|#Y#b%Z#b#c#<v#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#=R_$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#>Zd$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#?i!R!S#?i!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#?i#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#?tf$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#?i!R!S#?i!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#?i#S#b%Z#b#c#<v#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#Acc$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#Bn!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#Bn#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#Bye$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#Bn!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#Bn#S#b%Z#b#c#<v#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#Deg$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#E|![!^%Z!^!_*g!_!c%Z!c!i#E|!i#O%Z#O#P&c#P#R%Z#R#S#E|#S#T%Z#T#Z#E|#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#FXi$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#E|![!^%Z!^!_*g!_!c%Z!c!i#E|!i#O%Z#O#P&c#P#R%Z#R#S#E|#S#T%Z#T#Z#E|#Z#b%Z#b#c#<v#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#HT_!b$b$e&j#z%<f'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#I___l$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS#Jm^(P!*v!f'.r'yp'|!b$V)d(pSOY*gZr*grs'}sw*gwx)rx!P*g!P!Q#Ki!Q!^*g!^!_#L_!_!`#NP!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#KrX$g&j'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#LhZ#l$Id'yp'|!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#MZ!`#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#MdX#|$Id'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#NYX#m$Id'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Gh$ Qa#Y%?x$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$!V!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#W$!b_#e$Ih$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh$#paeBf#m$Id$b#|$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$$u!`!a$&P!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$%Q_#m$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$&[a#l$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$'a!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$'l`#l$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h$(yc(d$Ip$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P$*U!P!^%Z!^!_*g!_!a%Z!a!b$+`!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+`$*a_{'#p$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$+k`$e&j#w$Id'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&^$,x_!y!Ln$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(@^$.S_}(8n$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/WZ$e&jO!^$/y!^!_$0a!_#i$/y#i#j$0f#j#l$/y#l#m$2X#m#o$/y#o#p$0a#p;'S$/y;'S;=`$4d<%lO$/y(n$0QT]#S$e&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0fO]#S(n$0k[$e&jO!Q&c!Q![$1a![!^&c!_!c&c!c!i$1a!i#T&c#T#Z$1a#Z#o&c#o#p$3w#p;'S&c;'S;=`&w<%lO&c(n$1fZ$e&jO!Q&c!Q![$2X![!^&c!_!c&c!c!i$2X!i#T&c#T#Z$2X#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2^Z$e&jO!Q&c!Q![$3P![!^&c!_!c&c!c!i$3P!i#T&c#T#Z$3P#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3UZ$e&jO!Q&c!Q![$/y![!^&c!_!c&c!c!i$/y!i#T&c#T#Z$/y#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$3zR!Q![$4T!c!i$4T#T#Z$4T#S$4WS!Q![$4T!c!i$4T#T#Z$4T#q#r$0a(n$4gP;=`<%l$/y!2r$4u_!T!+S$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$6P`#t$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&,v$7^_$e&j'yp'|!b(T&%WOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$8lk$e&j'yp'|!b(W!LY'v&;d$Z#tOY%ZYZ&cZr%Zrs&}st%Ztu$8]uw%Zwx(rx}%Z}!O$:a!O!Q%Z!Q![$8]![!^%Z!^!_*g!_!c%Z!c!}$8]!}#O%Z#O#P&c#P#R%Z#R#S$8]#S#T%Z#T#o$8]#o#p*g#p$g%Z$g;'S$8];'S;=`$<g<%lO$8]+d$:lk$e&j'yp'|!b$Z#tOY%ZYZ&cZr%Zrs&}st%Ztu$:auw%Zwx(rx}%Z}!O$:a!O!Q%Z!Q![$:a![!^%Z!^!_*g!_!c%Z!c!}$:a!}#O%Z#O#P&c#P#R%Z#R#S$:a#S#T%Z#T#o$:a#o#p*g#p$g%Z$g;'S$:a;'S;=`$<a<%lO$:a+d$<dP;=`<%l$:a(CS$<jP;=`<%l$8]!5p$<vX!Y!3l'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Df$=na(k%<v$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+`#q;'S%Z;'S;=`+a<%lO%Z%#`$?Q_!X$I`p`$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(r$@[_!nS$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$Al|$e&j'yp'|!b'o(;d(W!LY'v&;d$X#tOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$AZ#BZ$ISEr$IS$I_$AZ$I_$JTEr$JT$JU$AZ$JU$KVEr$KV$KW$AZ$KW&FUEr&FU&FV$AZ&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$AZ?HUOEr(CS$Dwk$e&j'yp'|!b'p(;d(W!LY'v&;d$X#tOY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
    tokenizers: [
      noSemicolon,
      incdecToken,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      insertSemicolon,
      new LocalTokenGroup(
        "$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOr~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!P~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(V~~",
        141,
        328
      ),
      new LocalTokenGroup("j~RQYZXz{^~^O's~~aP!P!Qd~iO't~~", 25, 310)
    ],
    topRules: {
      Script: [0, 5],
      SingleExpression: [1, 268],
      SingleClassItem: [2, 269]
    },
    dialects: { jsx: 12801, ts: 12803 },
    dynamicPrecedences: { 67: 1, 77: 1, 79: 1, 164: 1, 192: 1 },
    specialized: [
      { term: 314, get: (o) => spec_identifier[o] || -1 },
      { term: 330, get: (o) => spec_word[o] || -1 },
      { term: 68, get: (o) => spec_LessThan[o] || -1 }
    ],
    tokenPrec: 12827
  }),
  snippets = [
    snippetCompletion('function ${name}(${params}) {\n	${}\n}', {
      label: 'function',
      detail: 'definition',
      type: 'keyword'
    }),
    snippetCompletion(
      'for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}',
      { label: 'for', detail: 'loop', type: 'keyword' }
    ),
    snippetCompletion('for (let ${name} of ${collection}) {\n	${}\n}', {
      label: 'for',
      detail: 'of loop',
      type: 'keyword'
    }),
    snippetCompletion('do {\n	${}\n} while (${})', {
      label: 'do',
      detail: 'loop',
      type: 'keyword'
    }),
    snippetCompletion('while (${}) {\n	${}\n}', {
      label: 'while',
      detail: 'loop',
      type: 'keyword'
    }),
    snippetCompletion(
      `try {
	\${}
} catch (\${error}) {
	\${}
}`,
      { label: 'try', detail: '/ catch block', type: 'keyword' }
    ),
    snippetCompletion('if (${}) {\n	${}\n}', {
      label: 'if',
      detail: 'block',
      type: 'keyword'
    }),
    snippetCompletion(
      `if (\${}) {
	\${}
} else {
	\${}
}`,
      { label: 'if', detail: '/ else block', type: 'keyword' }
    ),
    snippetCompletion(
      `class \${name} {
	constructor(\${params}) {
		\${}
	}
}`,
      { label: 'class', detail: 'definition', type: 'keyword' }
    ),
    snippetCompletion('import {${names}} from "${module}"\n${}', {
      label: 'import',
      detail: 'named',
      type: 'keyword'
    }),
    snippetCompletion('import ${name} from "${module}"\n${}', {
      label: 'import',
      detail: 'default',
      type: 'keyword'
    })
  ],
  typescriptSnippets = snippets.concat([
    snippetCompletion('interface ${name} {\n	${}\n}', {
      label: 'interface',
      detail: 'definition',
      type: 'keyword'
    }),
    snippetCompletion('type ${name} = ${type}', {
      label: 'type',
      detail: 'definition',
      type: 'keyword'
    }),
    snippetCompletion('enum ${name} {\n	${}\n}', {
      label: 'enum',
      detail: 'definition',
      type: 'keyword'
    })
  ]),
  cache = new NodeWeakMap(),
  ScopeNodes = new Set([
    'Script',
    'Block',
    'FunctionExpression',
    'FunctionDeclaration',
    'ArrowFunction',
    'MethodDeclaration',
    'ForStatement'
  ])
function defID(o) {
  return (e, s) => {
    let a = e.node.getChild('VariableDefinition')
    return a && s(a, o), !0
  }
}
const functionContext = ['FunctionDeclaration'],
  gatherCompletions = {
    FunctionDeclaration: defID('function'),
    ClassDeclaration: defID('class'),
    ClassExpression: () => !0,
    EnumDeclaration: defID('constant'),
    TypeAliasDeclaration: defID('type'),
    NamespaceDeclaration: defID('namespace'),
    VariableDefinition(o, e) {
      o.matchContext(functionContext) || e(o, 'variable')
    },
    TypeDefinition(o, e) {
      e(o, 'type')
    },
    __proto__: null
  }
function getScope(o, e) {
  let s = cache.get(e)
  if (s) return s
  let a = [],
    c = !0
  function h(d, g) {
    let b = o.sliceString(d.from, d.to)
    a.push({ label: b, type: g })
  }
  return (
    e.cursor(IterMode.IncludeAnonymous).iterate((d) => {
      if (c) c = !1
      else if (d.name) {
        let g = gatherCompletions[d.name]
        if ((g && g(d, h)) || ScopeNodes.has(d.name)) return !1
      } else if (d.to - d.from > 8192) {
        for (let g of getScope(o, d.node)) a.push(g)
        return !1
      }
    }),
    cache.set(e, a),
    a
  )
}
const Identifier = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
  dontComplete = [
    'TemplateString',
    'String',
    'RegExp',
    'LineComment',
    'BlockComment',
    'VariableDefinition',
    'TypeDefinition',
    'Label',
    'PropertyDefinition',
    'PropertyName',
    'PrivatePropertyDefinition',
    'PrivatePropertyName',
    '.',
    '?.'
  ]
function localCompletionSource(o) {
  let e = syntaxTree(o.state).resolveInner(o.pos, -1)
  if (dontComplete.indexOf(e.name) > -1) return null
  let s =
    e.name == 'VariableName' ||
    (e.to - e.from < 20 && Identifier.test(o.state.sliceDoc(e.from, e.to)))
  if (!s && !o.explicit) return null
  let a = []
  for (let c = e; c; c = c.parent)
    ScopeNodes.has(c.name) && (a = a.concat(getScope(o.state.doc, c)))
  return { options: a, from: s ? e.from : o.pos, validFor: Identifier }
}
const javascriptLanguage = LRLanguage.define({
    name: 'javascript',
    parser: parser.configure({
      props: [
        indentNodeProp.add({
          IfStatement: continuedIndent({ except: /^\s*({|else\b)/ }),
          TryStatement: continuedIndent({
            except: /^\s*({|catch\b|finally\b)/
          }),
          LabeledStatement: flatIndent,
          SwitchBody: (o) => {
            let e = o.textAfter,
              s = /^\s*\}/.test(e),
              a = /^\s*(case|default)\b/.test(e)
            return o.baseIndent + (s ? 0 : a ? 1 : 2) * o.unit
          },
          Block: delimitedIndent({ closing: '}' }),
          ArrowFunction: (o) => o.baseIndent + o.unit,
          'TemplateString BlockComment': () => null,
          'Statement Property': continuedIndent({ except: /^{/ }),
          JSXElement(o) {
            let e = /^\s*<\//.test(o.textAfter)
            return o.lineIndent(o.node.from) + (e ? 0 : o.unit)
          },
          JSXEscape(o) {
            let e = /\s*\}/.test(o.textAfter)
            return o.lineIndent(o.node.from) + (e ? 0 : o.unit)
          },
          'JSXOpenTag JSXSelfClosingTag'(o) {
            return o.column(o.node.from) + o.unit
          }
        }),
        foldNodeProp.add({
          'Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType':
            foldInside,
          BlockComment(o) {
            return { from: o.from + 2, to: o.to - 2 }
          }
        })
      ]
    }),
    languageData: {
      closeBrackets: { brackets: ['(', '[', '{', "'", '"', '`'] },
      commentTokens: { line: '//', block: { open: '/*', close: '*/' } },
      indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
      wordChars: '$'
    }
  }),
  jsxSublanguage = {
    test: (o) => /^JSX/.test(o.name),
    facet: defineLanguageFacet({
      commentTokens: { block: { open: '{/*', close: '*/}' } }
    })
  },
  typescriptLanguage = javascriptLanguage.configure(
    { dialect: 'ts' },
    'typescript'
  ),
  jsxLanguage = javascriptLanguage.configure({
    dialect: 'jsx',
    props: [sublanguageProp.add((o) => (o.isTop ? [jsxSublanguage] : void 0))]
  }),
  tsxLanguage = javascriptLanguage.configure(
    {
      dialect: 'jsx ts',
      props: [sublanguageProp.add((o) => (o.isTop ? [jsxSublanguage] : void 0))]
    },
    'typescript'
  )
let kwCompletion = (o) => ({ label: o, type: 'keyword' })
const keywords =
    'break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield'
      .split(' ')
      .map(kwCompletion),
  typescriptKeywords = keywords.concat(
    ['declare', 'implements', 'private', 'protected', 'public'].map(
      kwCompletion
    )
  )
function javascript(o = {}) {
  let e = o.jsx
      ? o.typescript
        ? tsxLanguage
        : jsxLanguage
      : o.typescript
      ? typescriptLanguage
      : javascriptLanguage,
    s = o.typescript
      ? typescriptSnippets.concat(typescriptKeywords)
      : snippets.concat(keywords)
  return new LanguageSupport(e, [
    javascriptLanguage.data.of({
      autocomplete: ifNotIn(dontComplete, completeFromList(s))
    }),
    javascriptLanguage.data.of({ autocomplete: localCompletionSource }),
    o.jsx ? autoCloseTags : []
  ])
}
function findOpenTag(o) {
  for (;;) {
    if (
      o.name == 'JSXOpenTag' ||
      o.name == 'JSXSelfClosingTag' ||
      o.name == 'JSXFragmentTag'
    )
      return o
    if (o.name == 'JSXEscape' || !o.parent) return null
    o = o.parent
  }
}
function elementName(o, e, s = o.length) {
  for (let a = e == null ? void 0 : e.firstChild; a; a = a.nextSibling)
    if (
      a.name == 'JSXIdentifier' ||
      a.name == 'JSXBuiltin' ||
      a.name == 'JSXNamespacedName' ||
      a.name == 'JSXMemberExpression'
    )
      return o.sliceString(a.from, Math.min(a.to, s))
  return ''
}
const android =
    typeof navigator == 'object' && /Android\b/.test(navigator.userAgent),
  autoCloseTags = EditorView.inputHandler.of((o, e, s, a, c) => {
    if (
      (android ? o.composing : o.compositionStarted) ||
      o.state.readOnly ||
      e != s ||
      (a != '>' && a != '/') ||
      !javascriptLanguage.isActiveAt(o.state, e, -1)
    )
      return !1
    let h = c(),
      { state: d } = h,
      g = d.changeByRange((b) => {
        var $
        let { head: _ } = b,
          j = syntaxTree(d).resolveInner(_ - 1, -1),
          _e
        if (
          (j.name == 'JSXStartTag' && (j = j.parent),
          !(
            d.doc.sliceString(_ - 1, _) != a ||
            (j.name == 'JSXAttributeValue' && j.to > _)
          ))
        ) {
          if (a == '>' && j.name == 'JSXFragmentTag')
            return { range: b, changes: { from: _, insert: '</>' } }
          if (a == '/' && j.name == 'JSXStartCloseTag') {
            let et = j.parent,
              tt = et.parent
            if (
              tt &&
              et.from == _ - 2 &&
              ((_e = elementName(d.doc, tt.firstChild, _)) ||
                (($ = tt.firstChild) === null || $ === void 0
                  ? void 0
                  : $.name) == 'JSXFragmentTag')
            ) {
              let rt = `${_e}>`
              return {
                range: EditorSelection.cursor(_ + rt.length, -1),
                changes: { from: _, insert: rt }
              }
            }
          } else if (a == '>') {
            let et = findOpenTag(j)
            if (
              et &&
              !/^\/?>|^<\//.test(d.doc.sliceString(_, _ + 2)) &&
              (_e = elementName(d.doc, et, _))
            )
              return { range: b, changes: { from: _, insert: `</${_e}>` } }
          }
        }
        return { range: b }
      })
    return g.changes.empty
      ? !1
      : (o.dispatch([
          h,
          d.update(g, { userEvent: 'input.complete', scrollIntoView: !0 })
        ]),
        !0)
  }),
  editor$1 = '_editor_1hmz9_1',
  css$3 = { editor: editor$1 }
function CodeEditor({ lang: o, value: e, onChange: s, height: a }) {
  const c = reactExports.useMemo(
    () => [o === 'json' ? json() : javascript({ typescript: !0 })],
    [o]
  )
  return jsxRuntimeExports.jsx(ReactCodeMirror, {
    value: e,
    className: css$3.editor,
    extensions: c,
    onChange: s,
    height: a || '400px',
    autoFocus: !0
  })
}
const generateGraphQL = (function () {
    function o($, _) {
      const j = {
          indent: (_ || {}).indent || 0,
          indentChar: (_ || {}).indentChar
        },
        _e = [],
        et = (tt) => {
          const rt = $[tt]
          if (rt) {
            let st = d(j.indent, j.indentChar) + tt
            st = b(st, rt.$name)
            const { $variables: nt, $directives: it, $fields: ot } = rt
            if (nt) {
              const ct = [],
                ut = d(j.indent + 1, j.indentChar)
              Object.keys(nt).forEach((ht) => {
                const pt = nt[ht]
                pt && ct.push(ut + ht + ': ' + pt)
              }),
                ct.length &&
                  (st +=
                    ` (
` +
                    ct.join(`
`) +
                    `
` +
                    d(j.indent, j.indentChar) +
                    ')')
            }
            it && (st = b(st, h(it, j.indent, j.indentChar)))
            const lt = []
            ot && ot.forEach((ct) => lt.push(ct)), lt.push(rt)
            const at = s(lt, j)
            at && _e.push(st + ' ' + at)
          }
        }
      return (
        et('query'),
        et('mutation'),
        et('subscription'),
        g($.fragments, (tt) => {
          const rt = e(tt, j)
          rt && _e.push(rt)
        }),
        _e.join(`

`)
      )
    }
    function e($, _) {
      const j = [],
        _e = d(_.indent, _.indentChar)
      return (
        Object.keys($).forEach((et) => {
          const tt = $[et]
          if (tt) {
            const rt = s(tt, _)
            rt &&
              j.push(
                b(
                  _e + 'fragment ' + et + ' on ' + tt.$on,
                  h(tt.$directives, _.indent, _.indentChar)
                ) +
                  ' ' +
                  rt
              )
          }
        }),
        j.join(`

`)
      )
    }
    function s($, _) {
      const { indent: j, indentChar: _e } = _,
        et = [],
        tt = d(j + 1, _e),
        rt = (st, nt) => {
          if (nt.$content) et.push(tt + nt.$content)
          else {
            let it = ''
            nt.$alias && (it = nt.$alias + ': '),
              (it += st),
              nt.$args &&
                (it = b(it, a(nt.$args, { indent: j + 1, indentChar: _e }))),
              nt.$directives && (it = b(it, h(nt.$directives, j + 1, _e))),
              nt.$body
                ? (it += ' ' + nt.$body)
                : (it = b(it, s(nt, { indent: j + 1, indentChar: _e }))),
              et.push(tt + it)
          }
        }
      return (
        g($, (st) => {
          Object.keys(st).forEach((nt) => {
            const it = st[nt]
            nt[0] === '$'
              ? nt === '$fragments' &&
                g(it, (ot) => {
                  if (ot.spread)
                    et.push(
                      b(tt + '...' + ot.spread, h(ot.directives, j + 1, _e))
                    )
                  else {
                    const { inline: lt } = ot
                    let at = tt + '...'
                    lt.$on && (at += ' on ' + lt.$on)
                    const ct = s(lt, { indent: j + 1, indentChar: _e })
                    ct &&
                      et.push(b(at, h(lt.$directives, j + 1, _e)) + ' ' + ct)
                  }
                })
              : it &&
                (typeof it == 'boolean' || typeof it == 'number'
                  ? et.push(tt + nt)
                  : typeof it == 'string'
                  ? et.push(tt + it + ': ' + nt)
                  : Array.isArray(it)
                  ? it.forEach((ot) => rt(nt, ot))
                  : rt(nt, it))
          })
        }),
        et.length
          ? `{
` +
            et.join(`
`) +
            `
` +
            d(j, _e) +
            '}'
          : ''
      )
    }
    function a($, _) {
      const { object: j, indent: _e, indentChar: et } = _,
        tt = d(_e + 1, et),
        rt = []
      let st = !1
      if (
        (Object.keys($).forEach((nt) => {
          if (nt[0] === '$') nt === '$keep' && j && $[nt] && (st = !0)
          else {
            const it = c($[nt], _e, et)
            it && rt.push(tt + nt + ': ' + it)
          }
        }),
        rt.length)
      ) {
        const nt =
          rt.join(`
`) +
          `
` +
          d(_e, et)
        return j
          ? `{
` +
              nt +
              '}'
          : `(
` +
              nt +
              ')'
      }
      return st ? '{}' : ''
    }
    function c($, _, j) {
      if ($ !== void 0) {
        const _e = typeof $
        if (_e === 'number' || _e === 'boolean' || $ === null) return '' + $
        if (_e === 'string') return JSON.stringify($)
        if (Array.isArray($)) {
          const et = []
          return (
            $.forEach((tt) => {
              const rt = c(tt, _, j)
              rt && et.push(rt)
            }),
            '[' + et.join(', ') + ']'
          )
        } else {
          const et = ['$enum', '$var', '$raw']
          for (let tt = 0; tt < et.length; tt += 1)
            if ($[et[tt]] !== void 0) return '' + $[et[tt]]
          return a($, { indent: _ + 1, object: !0, indentChar: j })
        }
      }
      return ''
    }
    function h($, _, j) {
      if (typeof $ == 'string') return $
      if (Array.isArray($)) return $.map((_e) => h(_e, _, j)).join(' ')
      if ($) {
        let _e = $.name || ''
        return (
          _e && $.args && (_e = b(_e, a($.args, { indent: _, indentChar: j }))),
          _e
        )
      }
      return ''
    }
    function d($, _) {
      return Array($ + 1).join(_ || '  ')
    }
    function g($, _) {
      Array.isArray($) ? $.forEach(_) : $ && _($)
    }
    function b($, _) {
      return _ ? $ + ' ' + _ : $
    }
    return o
  })(),
  codeViewer = '_codeViewer_oxqp2_1',
  css$2 = { codeViewer }
function CodeViewer({ lang: o, value: e }) {
  const s = reactExports.useRef(null)
  return (
    reactExports.useEffect(() => {
      const a = s.current
      if (a && e) {
        const c = document.createElement('pre'),
          h = document.createElement('code'),
          d = document.createTextNode(e)
        ;(c.className = `language-${o}`),
          (h.className = `language-${o}`),
          h.appendChild(d),
          c.appendChild(h),
          (a.innerHTML = ''),
          a.appendChild(c)
        const g = window.Prism
        g && (console.log(h), g.highlightElement(h))
      } else a && (a.innerHTML = '')
    }, [s, e, o]),
    jsxRuntimeExports.jsx('div', { ref: s, className: css$2.codeViewer })
  )
}
const container = '_container_1p7eb_1',
  content = '_content_1p7eb_4',
  inputContainer = '_inputContainer_1p7eb_11',
  left = '_left_1p7eb_14',
  right = '_right_1p7eb_15',
  sep = '_sep_1p7eb_21',
  editor = '_editor_1p7eb_25',
  viewer = '_viewer_1p7eb_28',
  error = '_error_1p7eb_34',
  actions = '_actions_1p7eb_38',
  css$1 = {
    container,
    content,
    inputContainer,
    left,
    right,
    sep,
    editor,
    viewer,
    error,
    actions
  },
  btn = '_btn_igsec_1',
  css = { btn }
var classnames = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (o) {
  ;(function () {
    var e = {}.hasOwnProperty
    function s() {
      for (var a = [], c = 0; c < arguments.length; c++) {
        var h = arguments[c]
        if (h) {
          var d = typeof h
          if (d === 'string' || d === 'number') a.push(h)
          else if (Array.isArray(h)) {
            if (h.length) {
              var g = s.apply(null, h)
              g && a.push(g)
            }
          } else if (d === 'object') {
            if (
              h.toString !== Object.prototype.toString &&
              !h.toString.toString().includes('[native code]')
            ) {
              a.push(h.toString())
              continue
            }
            for (var b in h) e.call(h, b) && h[b] && a.push(b)
          }
        }
      }
      return a.join(' ')
    }
    o.exports ? ((s.default = s), (o.exports = s)) : (window.classNames = s)
  })()
})(classnames)
var classnamesExports = classnames.exports
const classNames = getDefaultExportFromCjs(classnamesExports)
function Button(o) {
  return jsxRuntimeExports.jsx('button', {
    ...o,
    className: classNames(css.btn, o.className)
  })
}
async function copyToClipboard(o) {
  const e = async () =>
      navigator.clipboard
        ? navigator.clipboard
            .writeText(o)
            .then(() => !0)
            .catch(() => !1)
        : !1,
    s = () => {
      const a = document.createElement('textarea')
      ;(a.value = o),
        (a.style.top = '0'),
        (a.style.left = '0'),
        (a.style.position = 'fixed'),
        document.body.appendChild(a),
        a.focus(),
        a.select()
      let c = !1
      try {
        c = document.execCommand('copy')
      } catch {}
      return document.body.removeChild(a), c
    }
  return (await e()) ? !0 : s()
}
function GraphQL() {
  const [o, e] = reactExports.useState(() => {
      const b = localStorage.getItem('@mygql/graphql')
      return b === null ? getInitialValue() : b
    }),
    [s, a] = reactExports.useState(!1),
    c = reactExports.useRef({}),
    h = reactExports.useCallback((b) => {
      e(b), a(!1)
    }, []),
    { error: d, value: g } = reactExports.useMemo(() => {
      const { value: b, error: $ } = parseInput(o)
      if ($) return { error: `${$.message || 'unknown error.'}` }
      if (b)
        try {
          const _ = generateGraphQL(b)
          return localStorage.setItem('@mygql/graphql', o), { value: _ }
        } catch (_) {
          return { error: `${_.message || 'unknown error.'}` }
        }
      else localStorage.setItem('@mygql/graphql', o)
      return {}
    }, [o])
  return jsxRuntimeExports.jsx('div', {
    className: css$1.container,
    children: jsxRuntimeExports.jsxs('div', {
      className: css$1.content,
      children: [
        jsxRuntimeExports.jsx('h2', {
          children: 'Generate GraphQL query from JavaScript object'
        }),
        jsxRuntimeExports.jsxs('div', {
          className: css$1.inputContainer,
          children: [
            jsxRuntimeExports.jsxs('div', {
              className: css$1.left,
              children: [
                jsxRuntimeExports.jsx('div', {
                  className: css$1.editor,
                  children: jsxRuntimeExports.jsx(CodeEditor, {
                    value: o,
                    onChange: h,
                    height: '400px'
                  })
                }),
                jsxRuntimeExports.jsx('div', {
                  className: css$1.actions,
                  children: jsxRuntimeExports.jsx(Button, {
                    onClick: () => {
                      e(getInitialValue())
                    },
                    children: 'Reset'
                  })
                })
              ]
            }),
            jsxRuntimeExports.jsx('div', { className: css$1.sep }),
            jsxRuntimeExports.jsxs('div', {
              className: css$1.right,
              children: [
                jsxRuntimeExports.jsxs('div', {
                  className: css$1.viewer,
                  children: [
                    g &&
                      jsxRuntimeExports.jsx(CodeViewer, {
                        value: g,
                        lang: 'graphql'
                      }),
                    d
                      ? jsxRuntimeExports.jsxs('div', {
                          className: css$1.error,
                          children: ['Invalid input: ', d]
                        })
                      : null
                  ]
                }),
                g &&
                  jsxRuntimeExports.jsx('div', {
                    className: css$1.actions,
                    children: jsxRuntimeExports.jsx(Button, {
                      onClick: () => {
                        g &&
                          (c.current.timer !== void 0 &&
                            clearTimeout(c.current.timer),
                          copyToClipboard(g).then(() => {
                            a(!0),
                              (c.current.timer = setTimeout(() => {
                                a(!1)
                              }, 3e3))
                          }))
                      },
                      children: s ? 'Copied!' : 'Copy'
                    })
                  })
              ]
            })
          ]
        })
      ]
    })
  })
}
function parseInput(input) {
  let lines = input
      .replace(
        '\r',
        `
`
      )
      .split(/\n+/),
    i = 0
  for (
    i = 0;
    i < lines.length &&
    !lines[i].replace(/\s+/g, '').startsWith('generateGraphQL({');
    i += 1
  );
  for (
    lines = lines.slice(i), lines.reverse(), i = 0;
    i < lines.length && !lines[i].replace(/\s+/g, '').endsWith('})');
    i += 1
  );
  ;(lines = lines.slice(i)), lines.reverse()
  const inputCode = lines
    .join(
      `
`
    )
    .trim()
  let value, error
  if (inputCode) {
    const code = [
      '(function () { ',
      '  return function (generateGraphQL) {',
      inputCode,
      '  }',
      '})()'
    ].join(`
`)
    try {
      const fn = eval(code)
      fn((o) => {
        value = o
      })
    } catch (o) {
      error = o
    }
  }
  return { value, error }
}
function getInitialValue() {
  return [
    'import generateGraphQL from "@mygql/graphql"',
    '',
    'generateGraphQL({',
    '  query: {',
    '    countries: {',
    '      $args: {',
    '        filter: {',
    '          continent: { in: ["AF"] }',
    '        }',
    '      },',
    '',
    '      code: true,',
    '      name: true',
    '    }',
    '  }',
    '})',
    ''
  ].join(`
`)
}
function Playground() {
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: jsxRuntimeExports.jsx(GraphQL, {})
  })
}
client
  .createRoot(document.getElementById('root'))
  .render(
    jsxRuntimeExports.jsx(React.StrictMode, {
      children: jsxRuntimeExports.jsx(Playground, {})
    })
  )
