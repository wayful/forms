import * as Er from "react";
import A, { createContext as Ae, useContext as Ie, forwardRef as _r, useEffect as Rr, useImperativeHandle as Cr, useMemo as Sr } from "react";
import { chakra as Y, FormControl as Pr, Flex as Tr, FormLabel as Fr, FormErrorMessage as Or, Text as jr, createStylesContext as wr, forwardRef as G, omitThemingProps as kr, useMultiStyleConfig as Lr, useStyles as Ne } from "@chakra-ui/react";
import { useForm as Dr, Controller as $r, useFieldArray as Ar, useWatch as We } from "react-hook-form";
var ie = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Ir() {
  if (De)
    return W;
  De = 1;
  var n = A, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(m, f, R) {
    var h, y = {}, x = null, T = null;
    R !== void 0 && (x = "" + R), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (T = f.ref);
    for (h in f)
      s.call(f, h) && !v.hasOwnProperty(h) && (y[h] = f[h]);
    if (m && m.defaultProps)
      for (h in f = m.defaultProps, f)
        y[h] === void 0 && (y[h] = f[h]);
    return { $$typeof: a, type: m, key: x, ref: T, props: y, _owner: u.current };
  }
  return W.Fragment = i, W.jsx = b, W.jsxs = b, W;
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
var $e;
function Nr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var n = A, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), F = Symbol.iterator, w = "@@iterator";
    function M(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[w];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        K("error", e, t);
      }
    }
    function K(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, d = o.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var p = t.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var X = !1, Be = !1, qe = !1, ze = !1, Je = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === v || Je || e === u || e === R || e === h || ze || e === T || X || Be || qe || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === y || e.$$typeof === b || e.$$typeof === m || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function He(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case v:
          return "Profiler";
        case u:
          return "StrictMode";
        case R:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return fe(r) + ".Consumer";
          case b:
            var t = e;
            return fe(t._context) + ".Provider";
          case f:
            return He(e, e.render, "ForwardRef");
          case y:
            var o = e.displayName || null;
            return o !== null ? o : O(e.type) || "Memo";
          case x: {
            var d = e, p = d._payload, c = d._init;
            try {
              return O(c(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, I = 0, de, me, ve, pe, he, ge, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ke() {
      {
        if (I === 0) {
          de = console.log, me = console.info, ve = console.warn, pe = console.error, he = console.group, ge = console.groupCollapsed, be = console.groupEnd;
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
        I++;
      }
    }
    function Xe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: de
            }),
            info: L({}, e, {
              value: me
            }),
            warn: L({}, e, {
              value: ve
            }),
            error: L({}, e, {
              value: pe
            }),
            group: L({}, e, {
              value: he
            }),
            groupCollapsed: L({}, e, {
              value: ge
            }),
            groupEnd: L({}, e, {
              value: be
            })
          });
        }
        I < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = k.ReactCurrentDispatcher, Q;
    function U(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (d) {
            var o = d.stack.trim().match(/\n( *(at )?)/);
            Q = o && o[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, B;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ze();
    }
    function xe(e, r) {
      if (!e || ee)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      ee = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = Z.current, Z.current = null, Ke();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (j) {
              o = j;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (j) {
              o = j;
            }
            e.call(c.prototype);
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
          for (var l = j.stack.split(`
`), S = o.stack.split(`
`), E = l.length - 1, _ = S.length - 1; E >= 1 && _ >= 0 && l[E] !== S[_]; )
            _--;
          for (; E >= 1 && _ >= 0; E--, _--)
            if (l[E] !== S[_]) {
              if (E !== 1 || _ !== 1)
                do
                  if (E--, _--, _ < 0 || l[E] !== S[_]) {
                    var P = `
` + l[E].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, P), P;
                  }
                while (E >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = p, Xe(), Error.prepareStackTrace = d;
      }
      var $ = e ? e.displayName || e.name : "", Le = $ ? U($) : "";
      return typeof e == "function" && B.set(e, Le), Le;
    }
    function Qe(e, r, t) {
      return xe(e, !1);
    }
    function er(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, er(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case R:
          return U("Suspense");
        case h:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Qe(e.render);
          case y:
            return q(e.type, r, t);
          case x: {
            var o = e, d = o._payload, p = o._init;
            try {
              return q(p(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Ee = {}, _e = k.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function rr(e, r, t, o, d) {
      {
        var p = Function.call.bind(z);
        for (var c in e)
          if (p(e, c)) {
            var l = void 0;
            try {
              if (typeof e[c] != "function") {
                var S = Error((o || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              l = e[c](r, c, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              l = E;
            }
            l && !(l instanceof Error) && (J(d), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, c, typeof l), J(null)), l instanceof Error && !(l.message in Ee) && (Ee[l.message] = !0, J(d), C("Failed %s type: %s", t, l.message), J(null));
          }
      }
    }
    var tr = Array.isArray;
    function re(e) {
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
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Ce(e) {
      if (ar(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), Re(e);
    }
    var N = k.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Pe, te;
    te = {};
    function ir(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = O(N.current.type);
        te[t] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(N.current.type), e.ref), te[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Se || (Se = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Pe || (Pe = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, o, d, p, c) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function dr(e, r, t, o, d) {
      {
        var p, c = {}, l = null, S = null;
        t !== void 0 && (Ce(t), l = "" + t), sr(r) && (Ce(r.key), l = "" + r.key), ir(r) && (S = r.ref, lr(r, d));
        for (p in r)
          z.call(r, p) && !or.hasOwnProperty(p) && (c[p] = r[p]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (p in E)
            c[p] === void 0 && (c[p] = E[p]);
        }
        if (l || S) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && ur(c, _), S && cr(c, _);
        }
        return fr(e, l, S, d, o, N.current, c);
      }
    }
    var ne = k.ReactCurrentOwner, Te = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Fe() {
      {
        if (ne.current) {
          var e = O(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mr(e) {
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
    function vr(e) {
      {
        var r = Fe();
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
        var t = vr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ne.current && (o = " It was passed a child from " + O(e._owner.type) + "."), D(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), D(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            oe(o) && je(o, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = M(e);
          if (typeof d == "function" && d !== e.entries)
            for (var p = d.call(e), c; !(c = p.next()).done; )
              oe(c.value) && je(c.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = O(r);
          rr(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var d = O(r);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            D(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function ke(e, r, t, o, d, p) {
      {
        var c = Ge(e);
        if (!c) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = mr(d);
          S ? l += S : l += Fe();
          var E;
          e === null ? E = "null" : re(e) ? E = "array" : e !== void 0 && e.$$typeof === a ? (E = "<" + (O(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, l);
        }
        var _ = dr(e, r, t, d, p);
        if (_ == null)
          return _;
        if (c) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (re(P)) {
                for (var $ = 0; $ < P.length; $++)
                  we(P[$], e);
                Object.freeze && Object.freeze(P);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(P, e);
        }
        return e === s ? hr(_) : pr(_), _;
      }
    }
    function gr(e, r, t) {
      return ke(e, r, t, !0);
    }
    function br(e, r, t) {
      return ke(e, r, t, !1);
    }
    var yr = br, xr = gr;
    V.Fragment = s, V.jsx = yr, V.jsxs = xr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ie.exports = Ir() : ie.exports = Nr();
var g = ie.exports, Ve = (...n) => n.filter(Boolean).join(" ");
function Wr(n, a) {
  return `${n} returned \`undefined\`. Seems you forgot to wrap component within ${a}`;
}
function se(n = {}) {
  const {
    name: a,
    strict: i = !0,
    hookName: s = "useContext",
    providerName: u = "Provider",
    errorMessage: v,
    defaultValue: b
  } = n, m = Ae(b);
  m.displayName = a;
  function f() {
    var R;
    const h = Ie(m);
    if (!h && i) {
      const y = new Error(
        v ?? Wr(s, u)
      );
      throw y.name = "ContextError", (R = Error.captureStackTrace) == null || R.call(Error, y, f), y;
    }
    return h;
  }
  return [m.Provider, f, m];
}
const Vr = ({ isError: n = !1, isLoading: a = !1, ...i }) => ({
  ...Dr(i),
  isError: n,
  isLoading: a
}), [Yr, H] = se({
  strict: !1,
  name: "FormContext"
}), it = _r(({ _valid: n, _dirty: a, _loading: i, _validating: s, _submitted: u, _submitting: v, _submitSuccessful: b, children: m, ...f }, R) => {
  const h = Vr(f), { reset: y, formState: x, handleSubmit: T } = h, { onError: F, onSubmit: w, defaultValues: M, className: k, ...C } = f;
  Rr(() => y(M), [y, M]), Cr(R, () => ({ submit: T(w, F) }));
  const K = [
    x.isValid ? "valid" : "",
    x.isDirty ? "dirty" : "",
    x.isLoading ? "loading" : "",
    x.isValidating ? "validating" : "",
    x.isSubmitted ? "submitted" : "",
    x.isSubmitting ? "submitting" : "",
    x.isSubmitSuccessful ? "submitSuccessful" : ""
  ].join(" ").trim(), X = {
    display: "contents",
    ...n ? { '&[data-form-state*="valid"]': n } : {},
    ...a ? { '&[data-form-state*="dirty"]': a } : {},
    ...i ? { '&[data-form-state*="loading"]': i } : {},
    ...s ? { '&[data-form-state*="validating"]': s } : {},
    ...u ? { '&[data-form-state*="submitted"]': u } : {},
    ...v ? { '&[data-form-state*="submitting"]': v } : {},
    ...b ? { '&[data-form-state*="submitSuccessful"]': b } : {}
  };
  return /* @__PURE__ */ g.jsx(Yr, { value: h, children: /* @__PURE__ */ g.jsx(
    Y.form,
    {
      ref: R,
      ...C,
      sx: X,
      "data-form-state": K,
      className: Ve("formed-form", k),
      onSubmit: T(w, F),
      children: typeof m == "function" ? m(h) : m
    }
  ) });
}), Mr = ({ path: n, ...a }) => ({
  path: n
}), [Ur, le] = se({
  strict: !1,
  name: "FormFieldPathContext"
}), Br = ({ name: n, isRequired: a = !1, isControlled: i, valueAs: s, min: u, max: v, minLength: b, maxLength: m, ...f }) => {
  const R = le(), { register: h, control: y, formState: { errors: x } } = H(), T = {
    required: a,
    valueAsDate: s === "date",
    valueAsNumber: s === "number",
    setValueAs: typeof s == "function" ? s : void 0,
    minLength: b,
    maxLength: m
  }, F = R ? `${R.path}.${n}` : n, w = x[F];
  return {
    name: F,
    error: w,
    rules: T,
    control: y,
    register: h
  };
}, st = (n) => {
  var F;
  const { name: a, error: i, rules: s, register: u, control: v } = Br(n), { label: b, children: m, valueAs: f, isRequired: R, minLength: h, maxLength: y, isControlled: x = !1, ...T } = n;
  return /* @__PURE__ */ g.jsxs(Pr, { ...T, isInvalid: !!i, children: [
    /* @__PURE__ */ g.jsx(Tr, { justify: "space-between", children: b && /* @__PURE__ */ g.jsx(Fr, { htmlFor: a, children: b }) }),
    x ? /* @__PURE__ */ g.jsx($r, { name: a, rules: s, control: v, render: ({ field: w }) => A.cloneElement(A.Children.only(m), w) }) : A.cloneElement(A.Children.only(m), u(a, s)),
    i && /* @__PURE__ */ g.jsx(Or, { children: /* @__PURE__ */ g.jsxs(jr, { children: [
      "Error: ",
      (F = i.type) == null ? void 0 : F.toString()
    ] }) })
  ] });
}, qr = ({ children: n, ...a }) => {
  const i = Mr(a);
  return /* @__PURE__ */ g.jsx(Ur, { value: i, children: n });
}, zr = ({ name: n, ...a }) => {
  const i = le(), { control: s } = H(), u = i ? `${i.path}.${n}` : n, v = Ar({
    name: u,
    control: s
  });
  return {
    name: u,
    ...v
  };
}, lt = ({ children: n, ...a }) => {
  const i = zr(a), s = i.fields.map((u, v) => ({
    key: u.id,
    data: u,
    path: `${i.name}.${v}`,
    remove: () => i.remove(v)
  }));
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: n(s, i) });
}, Jr = ({ name: n, ...a }) => {
  const i = le(), s = i ? `${i.path}.${n}` : n, { control: u } = H(), v = We({ control: u, name: s });
  return {
    name: s,
    field: v
  };
}, ut = ({ children: n, ...a }) => {
  const { name: i, field: s } = Jr(a);
  return /* @__PURE__ */ g.jsx(qr, { path: i, children: typeof n == "function" ? n(s) : n });
}, ct = ({ children: n, path: a, ...i }) => {
  const { control: s } = H(), u = We({ control: s, name: a });
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: n(u) });
}, ft = {
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
function Gr(n = {}) {
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
const [Hr, Kr] = wr("List"), [Xr, dt] = se({
  strict: !1,
  name: "ListContext",
  hookName: "useListContext",
  providerName: "<List />"
}), Zr = G((n, a) => {
  const { className: i, children: s } = n, u = kr(n), v = Lr("List", n), { htmlProps: b, ...m } = Gr(u), f = Er.useMemo(() => m, [m]);
  return /* @__PURE__ */ g.jsx(Xr, { value: f, children: /* @__PURE__ */ g.jsx(Hr, { value: v, children: /* @__PURE__ */ g.jsx(
    Y.div,
    {
      ref: a,
      ...b,
      className: Ve("formed-list", i),
      __css: v.root,
      children: s
    }
  ) }) });
});
Zr.displayName = "List";
var ue = (...n) => n.filter(Boolean).join(" "), Ye = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function Me(n = {}) {
  const {
    strict: a = !0,
    errorMessage: i = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: s
  } = n, u = Ae(void 0);
  u.displayName = s;
  function v() {
    var b;
    const m = Ie(u);
    if (!m && a) {
      const f = new Error(i);
      throw f.name = "ContextError", (b = Error.captureStackTrace) == null || b.call(Error, f, v), f;
    }
    return m;
  }
  return [
    u.Provider,
    v,
    u
  ];
}
Me({
  strict: !1,
  name: "ListItemLabelContext"
});
const Ue = G((n, a) => {
  const { className: i, ...s } = n, u = Ne();
  return /* @__PURE__ */ g.jsx(
    Y.div,
    {
      ref: a,
      className: ue("list-item-label", i),
      ...s,
      __css: u.label
    }
  );
});
Ye && (Ue.displayName = "ListItemLabel");
function Qr(n) {
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
const [et, mt] = Me({
  strict: !1,
  name: "ListItemContext"
}), rt = G((n, a) => {
  const {
    className: i,
    isActive: s = !1,
    children: u,
    onClick: v,
    ...b
  } = n, m = Kr(), {
    // drag,
    // drop,
    // preview,
    // isDragging,
    htmlProps: f,
    // onClick,
    // onSelect,
    // isSelected,
    // isSelectable,
    // SelectHandle,
    // isDraggable,
    // DragHandle,
    ...R
  } = Qr(n), h = Sr(() => R, [R]), y = {
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
    ...m.item
  }, x = typeof n.children == "string" ? /* @__PURE__ */ g.jsx(Ue, { children: n.children }) : n.children;
  return /* @__PURE__ */ g.jsx(et, { value: h, children: /* @__PURE__ */ g.jsx(
    Y.div,
    {
      ref: a,
      ...f,
      className: ue("formed-list__item", i),
      __css: y,
      children: x
    }
  ) });
});
rt.displayName = "ListItem";
const tt = G((n, a) => {
  const i = Ne(), { className: s, ...u } = n;
  return /* @__PURE__ */ g.jsx(
    Y.div,
    {
      ref: a,
      className: ue("list-item-label"),
      ...u,
      __css: i.stat
    }
  );
});
Ye && (tt.displayName = "ListItemStat");
export {
  it as Form,
  st as FormField,
  lt as FormFieldArray,
  ut as FormFieldObject,
  qr as FormFieldPath,
  Ur as FormFieldPathProvider,
  ct as FormFieldWatch,
  Yr as FormProvider,
  Zr as List,
  rt as ListItem,
  Ue as ListItemLabel,
  tt as ListItemStat,
  ft as listTheme,
  Vr as useForm,
  H as useFormContext,
  Br as useFormField,
  zr as useFormFieldArray,
  Jr as useFormFieldObject,
  Mr as useFormFieldPath,
  le as useFormFieldPathContext
};
