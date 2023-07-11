import * as xr from "react";
import N, { forwardRef as Rr, useMemo as J, createContext as ie, useContext as se } from "react";
import { useFormContext as Ne, Controller as _r, useWatch as Cr, useFieldArray as Sr } from "react-hook-form";
import { chakra as Y, FormControl as Tr, Flex as Pr, FormLabel as wr, FormErrorMessage as Or, Text as jr, createStylesContext as Fr, forwardRef as G, omitThemingProps as kr, useMultiStyleConfig as Lr, useStyles as Ae } from "@chakra-ui/react";
var oe = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function $r() {
  if ($e)
    return W;
  $e = 1;
  var n = N, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(d, c, y) {
    var h, E = {}, C = null, _ = null;
    y !== void 0 && (C = "" + y), c.key !== void 0 && (C = "" + c.key), c.ref !== void 0 && (_ = c.ref);
    for (h in c)
      s.call(c, h) && !p.hasOwnProperty(h) && (E[h] = c[h]);
    if (d && d.defaultProps)
      for (h in c = d.defaultProps, c)
        E[h] === void 0 && (E[h] = c[h]);
    return { $$typeof: a, type: d, key: C, ref: _, props: E, _owner: v.current };
  }
  return W.Fragment = u, W.jsx = g, W.jsxs = g, W;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Dr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var n = N, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), w = Symbol.iterator, F = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[F];
      return typeof r == "function" ? r : null;
    }
    var L = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Me("error", e, t);
      }
    }
    function Me(e, r, t) {
      {
        var o = L.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var m = t.map(function(l) {
          return String(l);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Ue = !1, Be = !1, qe = !1, ze = !1, Je = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === p || Je || e === v || e === y || e === h || ze || e === _ || Ue || Be || qe || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === E || e.$$typeof === g || e.$$typeof === d || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case u:
          return "Portal";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case y:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return fe(r) + ".Consumer";
          case g:
            var t = e;
            return fe(t._context) + ".Provider";
          case c:
            return Ke(e, e.render, "ForwardRef");
          case E:
            var o = e.displayName || null;
            return o !== null ? o : O(e.type) || "Memo";
          case C: {
            var f = e, m = f._payload, l = f._init;
            try {
              return O(l(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, A = 0, de, ve, me, pe, he, ge, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function He() {
      {
        if (A === 0) {
          de = console.log, ve = console.info, me = console.warn, pe = console.error, he = console.group, ge = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Xe() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: de
            }),
            info: k({}, e, {
              value: ve
            }),
            warn: k({}, e, {
              value: me
            }),
            error: k({}, e, {
              value: pe
            }),
            group: k({}, e, {
              value: he
            }),
            groupCollapsed: k({}, e, {
              value: ge
            }),
            groupEnd: k({}, e, {
              value: be
            })
          });
        }
        A < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = L.ReactCurrentDispatcher, Z;
    function M(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            Z = o && o[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, U;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ze();
    }
    function Ee(e, r) {
      if (!e || Q)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      Q = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = X.current, X.current = null, He();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (j) {
              o = j;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (j) {
              o = j;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            o = j;
          }
          e();
        }
      } catch (j) {
        if (j && o && typeof j.stack == "string") {
          for (var i = j.stack.split(`
`), T = o.stack.split(`
`), b = i.length - 1, x = T.length - 1; b >= 1 && x >= 0 && i[b] !== T[x]; )
            x--;
          for (; b >= 1 && x >= 0; b--, x--)
            if (i[b] !== T[x]) {
              if (b !== 1 || x !== 1)
                do
                  if (b--, x--, x < 0 || i[b] !== T[x]) {
                    var P = `
` + i[b].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, P), P;
                  }
                while (b >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = m, Xe(), Error.prepareStackTrace = f;
      }
      var D = e ? e.displayName || e.name : "", Le = D ? M(D) : "";
      return typeof e == "function" && U.set(e, Le), Le;
    }
    function Qe(e, r, t) {
      return Ee(e, !1);
    }
    function er(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, er(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case y:
          return M("Suspense");
        case h:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Qe(e.render);
          case E:
            return B(e.type, r, t);
          case C: {
            var o = e, f = o._payload, m = o._init;
            try {
              return B(m(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, xe = {}, Re = L.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function rr(e, r, t, o, f) {
      {
        var m = Function.call.bind(q);
        for (var l in e)
          if (m(e, l)) {
            var i = void 0;
            try {
              if (typeof e[l] != "function") {
                var T = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              i = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              i = b;
            }
            i && !(i instanceof Error) && (z(f), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof i), z(null)), i instanceof Error && !(i.message in xe) && (xe[i.message] = !0, z(f), S("Failed %s type: %s", t, i.message), z(null));
          }
      }
    }
    var tr = Array.isArray;
    function ee(e) {
      return tr(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ar(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Ce(e) {
      if (ar(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), _e(e);
    }
    var I = L.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Te, re;
    re = {};
    function ir(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = O(I.current.type);
        re[t] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(I.current.type), e.ref), re[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Se || (Se = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, o, f, m, l) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function dr(e, r, t, o, f) {
      {
        var m, l = {}, i = null, T = null;
        t !== void 0 && (Ce(t), i = "" + t), sr(r) && (Ce(r.key), i = "" + r.key), ir(r) && (T = r.ref, lr(r, f));
        for (m in r)
          q.call(r, m) && !or.hasOwnProperty(m) && (l[m] = r[m]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (m in b)
            l[m] === void 0 && (l[m] = b[m]);
        }
        if (i || T) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ur(l, x), T && cr(l, x);
        }
        return fr(e, i, T, f, o, I.current, l);
      }
    }
    var te = L.ReactCurrentOwner, Pe = L.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function we() {
      {
        if (te.current) {
          var e = O(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function mr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = mr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var o = "";
        e && e._owner && e._owner !== te.current && (o = " It was passed a child from " + O(e._owner.type) + "."), $(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), $(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ae(o) && je(o, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = H(e);
          if (typeof f == "function" && f !== e.entries)
            for (var m = f.call(e), l; !(l = m.next()).done; )
              ae(l.value) && je(l.value, r);
        }
      }
    }
    function pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = O(r);
          rr(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var f = O(r);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            $(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function ke(e, r, t, o, f, m) {
      {
        var l = Ge(e);
        if (!l) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = vr(f);
          T ? i += T : i += we();
          var b;
          e === null ? b = "null" : ee(e) ? b = "array" : e !== void 0 && e.$$typeof === a ? (b = "<" + (O(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, i);
        }
        var x = dr(e, r, t, f, m);
        if (x == null)
          return x;
        if (l) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (ee(P)) {
                for (var D = 0; D < P.length; D++)
                  Fe(P[D], e);
                Object.freeze && Object.freeze(P);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(P, e);
        }
        return e === s ? hr(x) : pr(x), x;
      }
    }
    function gr(e, r, t) {
      return ke(e, r, t, !0);
    }
    function br(e, r, t) {
      return ke(e, r, t, !1);
    }
    var yr = br, Er = gr;
    V.Fragment = s, V.jsx = yr, V.jsxs = Er;
  }()), V;
}
process.env.NODE_ENV === "production" ? oe.exports = $r() : oe.exports = Dr();
var R = oe.exports, Ie = (...n) => n.filter(Boolean).join(" ");
const Zr = Rr(({
  onError: n,
  onSubmit: a,
  children: u,
  _valid: s,
  _dirty: v,
  _loading: p,
  _validating: g,
  _submitted: d,
  _submitting: c,
  _submitSuccessful: y,
  className: h,
  ...E
}, C) => {
  const { formState: _, handleSubmit: w } = Ne(), F = J(() => [
    _.isValid ? "valid" : "",
    _.isDirty ? "dirty" : "",
    _.isLoading ? "loading" : "",
    _.isValidating ? "validating" : "",
    _.isSubmitted ? "submitted" : "",
    _.isSubmitting ? "submitting" : "",
    _.isSubmitSuccessful ? "submitSuccessful" : ""
  ].join(" ").trim(), [_]), H = J(() => ({
    display: "contents",
    ...s ? { '&[data-form-state*="valid"]': s } : {},
    ...v ? { '&[data-form-state*="dirty"]': v } : {},
    ...p ? { '&[data-form-state*="loading"]': p } : {},
    ...g ? { '&[data-form-state*="validating"]': g } : {},
    ...d ? { '&[data-form-state*="submitted"]': d } : {},
    ...c ? { '&[data-form-state*="submitting"]': c } : {},
    ...y ? { '&[data-form-state*="submitSuccessful"]': y } : {}
  }), [s, v, p, g, d, c, y]);
  return /* @__PURE__ */ R.jsx(
    Y.form,
    {
      ref: C,
      ...E,
      sx: H,
      "data-form-state": F,
      className: Ie("formed-form", h),
      onSubmit: w(a, n),
      children: u
    }
  );
}), le = ie(null), K = () => se(le), Qr = ({ children: n, ...a }) => /* @__PURE__ */ R.jsx(le.Provider, { value: a, children: n }), et = (n) => {
  const a = K(), u = a ? `${a.path}.${n.name}` : n.name, s = J(() => ({ path: u }), [u]);
  return /* @__PURE__ */ R.jsx(le.Provider, { value: s, children: n.children });
}, Nr = ({ name: n, isRequired: a = !1, isControlled: u, valueAs: s, min: v, max: p, minLength: g, maxLength: d, ...c }) => {
  const y = K(), { register: h, control: E, formState: { errors: C } } = Ne(), _ = y ? `${y.path}.${n}` : n, w = {
    required: a,
    valueAsDate: s === "date",
    valueAsNumber: s === "number",
    setValueAs: typeof s == "function" ? s : void 0,
    minLength: g,
    maxLength: d
  }, F = C[_];
  return {
    name: _,
    error: F,
    rules: w,
    control: E,
    register: h
  };
}, rt = (n) => {
  var w;
  const { name: a, error: u, rules: s, register: v, control: p } = Nr(n), { label: g, children: d, valueAs: c, isRequired: y, minLength: h, maxLength: E, isControlled: C = !1, ..._ } = n;
  return /* @__PURE__ */ R.jsxs(Tr, { ..._, isInvalid: !!u, children: [
    /* @__PURE__ */ R.jsx(Pr, { justify: "space-between", children: g && /* @__PURE__ */ R.jsx(wr, { htmlFor: a, children: g }) }),
    C ? /* @__PURE__ */ R.jsx(_r, { name: a, rules: s, control: p, render: ({ field: F }) => N.cloneElement(N.Children.only(d), F) }) : N.cloneElement(N.Children.only(d), v(a, s)),
    u && /* @__PURE__ */ R.jsx(Or, { children: /* @__PURE__ */ R.jsxs(jr, { children: [
      "Error: ",
      (w = u.type) == null ? void 0 : w.toString()
    ] }) })
  ] });
}, Ar = (n) => {
  const a = K(), u = a ? `${a.path}.${n.name}` : n.name;
  return Cr({ ...n, name: u });
}, tt = ({ children: n, ...a }) => {
  const u = Ar(a);
  return /* @__PURE__ */ R.jsx(R.Fragment, { children: n(u) });
}, nt = (n) => {
  const a = K(), u = a ? `${a.path}.${n.name}` : n.name, s = Sr({ ...n, name: u });
  return {
    ...s,
    fragments: s.fields.map((v, p) => ({
      id: v.id,
      index: p,
      path: `${u}.${p}`,
      remove: () => s.remove(p)
    }))
  };
}, at = {
  parts: ["list", "item", "label", "drag", "checkbox"],
  baseStyle: ({ colorMode: n, colorScheme: a }) => ({
    list: {
      width: "100%"
    },
    item: {
      borderRadius: "md",
      textStyle: "paragraph",
      color: n === "light" ? "@TODO" : `${a}.400`,
      _active: {
        color: n === "light" ? "@TODO" : `${a}.white`,
        bg: n === "light" ? "@TODO" : `${a}.800`
      },
      _hover: {
        bg: n === "light" ? "@TODO" : `${a}.800`
        // color: colorMode === 'light' ? `@TODO` : `${colorScheme}.400`,
      }
    },
    // button: {
    //   flex: 1,
    //   // display: 'flex',
    //   // textAlign: 'start',
    //   // alignItems: 'center',
    //   userSelect: 'none',
    //   // textDecoration: 'none',
    //   _active: {
    //     bg: colorMode === 'light' ? `@TODO` : `${colorScheme}.white`,
    //     color: colorMode === 'light' ? `@TODO` : `${colorScheme}.900`,
    //   },
    //   outline: 0,
    //   _focus: {
    //     boxShadow: 'outline',
    //   },
    // },
    label: {
      flex: 1,
      textAlign: "start",
      borderRadius: "md",
      py: "10px",
      px: "12px",
      textStyle: "body"
    },
    stat: {
      flex: 0,
      textAlign: "start",
      borderRadius: "md",
      py: "10px",
      px: "12px",
      color: n === "light" ? "@TODO" : `${a}.600`,
      textStyle: "meta"
    },
    drag: {
      cursor: "move",
      display: "flex",
      alignItems: "center",
      paddingStart: "10px",
      paddingEnd: "10px",
      borderRadius: "md",
      _hover: {
        bg: n === "light" ? `${a}.200` : `${a}.700`
      }
    },
    checkbox: {
      paddingStart: "10px",
      paddingEnd: "10px",
      borderRadius: "md"
    }
  }),
  sizes: {
    // sm: {
    //   item: {
    //     px: 2,
    //     py: 2,
    //     fontSize: 'xl'
    //   },
    //   checkbox: {
    //     size: 'sm'
    //   }
    // },
    md: {
      // item: {
      //   px: 2.5,
      //   py: 2.5,
      //   fontSize: '2xl'
      // }
    }
    // lg: {
    //   item: {
    //     px: 2.5,
    //     py: 2.5,
    //     fontSize: '4xl'
    //   }
    // },
  },
  variants: {},
  defaultProps: {
    size: "md",
    colorScheme: "gray"
  }
};
function Ir(n = {}) {
  const {
    // onChange,
    // children,
    ...a
  } = n;
  return {
    // children,
    htmlProps: a
    // ...selectable,
    // ...draggable
  };
}
function Wr(n, a) {
  return `${n} returned \`undefined\`. Seems you forgot to wrap component within ${a}`;
}
function Vr(n = {}) {
  const {
    name: a,
    strict: u = !0,
    hookName: s = "useContext",
    providerName: v = "Provider",
    errorMessage: p,
    defaultValue: g
  } = n, d = ie(g);
  d.displayName = a;
  function c() {
    var y;
    const h = se(d);
    if (!h && u) {
      const E = new Error(
        p ?? Wr(s, v)
      );
      throw E.name = "ContextError", (y = Error.captureStackTrace) == null || y.call(Error, E, c), E;
    }
    return h;
  }
  return [d.Provider, c, d];
}
const [Yr, Mr] = Fr("List"), [Ur, ot] = Vr({
  strict: !1,
  name: "ListContext",
  hookName: "useListContext",
  providerName: "<List />"
}), Br = G((n, a) => {
  const { className: u, children: s } = n, v = kr(n), p = Lr("List", n), { htmlProps: g, ...d } = Ir(v), c = xr.useMemo(() => d, [d]);
  return /* @__PURE__ */ R.jsx(Ur, { value: c, children: /* @__PURE__ */ R.jsx(Yr, { value: p, children: /* @__PURE__ */ R.jsx(
    Y.div,
    {
      ref: a,
      ...g,
      className: Ie("formed-list", u),
      __css: p.root,
      children: s
    }
  ) }) });
});
Br.displayName = "List";
var ue = (...n) => n.filter(Boolean).join(" "), We = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function Ve(n = {}) {
  const {
    strict: a = !0,
    errorMessage: u = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: s
  } = n, v = ie(void 0);
  v.displayName = s;
  function p() {
    var g;
    const d = se(v);
    if (!d && a) {
      const c = new Error(u);
      throw c.name = "ContextError", (g = Error.captureStackTrace) == null || g.call(Error, c, p), c;
    }
    return d;
  }
  return [
    v.Provider,
    p,
    v
  ];
}
Ve({
  strict: !1,
  name: "ListItemLabelContext"
});
const Ye = G((n, a) => {
  const { className: u, ...s } = n, v = Ae();
  return /* @__PURE__ */ R.jsx(
    Y.div,
    {
      ref: a,
      className: ue("list-item-label", u),
      ...s,
      __css: v.label
    }
  );
});
We && (Ye.displayName = "ListItemLabel");
function qr(n) {
  const { ...a } = n;
  return {
    htmlProps: a
    // drag,
    // preview,
    // drop,
    // isDragging,
    // value: props.value,
    // onClick: props.onClick,
    // isSelected: !!props.value && value.includes(props.value),
    // isSelectable,
    // onSelect,
    // SelectHandle,
    // isDraggable,
    // DragHandle
  };
}
const [zr, it] = Ve({
  strict: !1,
  name: "ListItemContext"
}), Jr = G((n, a) => {
  const {
    className: u,
    isActive: s = !1,
    children: v,
    onClick: p,
    ...g
  } = n, d = Mr(), {
    // drag,
    // drop,
    // preview,
    // isDragging,
    htmlProps: c,
    // onClick,
    // onSelect,
    // isSelected,
    // isSelectable,
    // SelectHandle,
    // isDraggable,
    // DragHandle,
    ...y
  } = qr(n), h = J(() => y, [y]), E = {
    width: "100%",
    display: "flex",
    // opacity: isDragging ? 0 : 1,
    "> *:first-child:not(:last-child)": {
      borderEnd: 0,
      borderEndRadius: 0
    },
    "> *:not(:first-child):last-child": {
      borderStartRadius: 0
    },
    "> *:not(:first-child):not(:last-child)": {
      borderEnd: 0,
      borderRadius: 0
    },
    "> button:not(:first-child) > *:first-child": {
      borderStartRadius: 0
    },
    ...d.item
  }, C = typeof n.children == "string" ? /* @__PURE__ */ R.jsx(Ye, { children: n.children }) : n.children;
  return /* @__PURE__ */ R.jsx(zr, { value: h, children: /* @__PURE__ */ R.jsx(
    Y.div,
    {
      ref: a,
      ...c,
      className: ue("formed-list__item", u),
      __css: E,
      children: C
    }
  ) });
});
Jr.displayName = "ListItem";
const Gr = G((n, a) => {
  const u = Ae(), { className: s, ...v } = n;
  return /* @__PURE__ */ R.jsx(
    Y.div,
    {
      ref: a,
      className: ue("list-item-label"),
      ...v,
      __css: u.stat
    }
  );
});
We && (Gr.displayName = "ListItemStat");
export {
  Zr as Form,
  rt as FormField,
  et as FormFieldPath,
  tt as FormFieldWatch,
  Qr as FormFragmentProvider,
  Br as List,
  Jr as ListItem,
  Ye as ListItemLabel,
  Gr as ListItemStat,
  at as listTheme,
  nt as useFormFieldArray,
  Ar as useFormFieldWatch,
  K as useFormFragmentContext
};
