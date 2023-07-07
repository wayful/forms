import * as _r from "react";
import A, { createContext as Ie, useContext as Ne, forwardRef as Rr, useEffect as Cr, useImperativeHandle as Sr, useMemo as Pr } from "react";
import { chakra as Y, FormControl as Tr, Flex as Fr, FormLabel as Or, FormErrorMessage as jr, Text as wr, createStylesContext as kr, forwardRef as H, omitThemingProps as Lr, useMultiStyleConfig as Dr, useStyles as We } from "@chakra-ui/react";
import { useForm as $r, Controller as Ar, useFieldArray as Ir, useWatch as Ve } from "react-hook-form";
var se = { exports: {} }, W = {};
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
function Nr() {
  if ($e)
    return W;
  $e = 1;
  var n = A, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(m, f, R) {
    var p, y = {}, x = null, T = null;
    R !== void 0 && (x = "" + R), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (T = f.ref);
    for (p in f)
      s.call(f, p) && !h.hasOwnProperty(p) && (y[p] = f[p]);
    if (m && m.defaultProps)
      for (p in f = m.defaultProps, f)
        y[p] === void 0 && (y[p] = f[p]);
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
var Ae;
function Wr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var n = A, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), F = Symbol.iterator, w = "@@iterator";
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
        X("error", e, t);
      }
    }
    function X(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, d = o.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var v = t.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Z = !1, qe = !1, ze = !1, Je = !1, Ge = !1, fe;
    fe = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === h || Ge || e === u || e === R || e === p || Je || e === T || Z || qe || ze || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === y || e.$$typeof === b || e.$$typeof === m || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function de(e) {
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
        case h:
          return "Profiler";
        case u:
          return "StrictMode";
        case R:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return de(r) + ".Consumer";
          case b:
            var t = e;
            return de(t._context) + ".Provider";
          case f:
            return Ke(e, e.render, "ForwardRef");
          case y:
            var o = e.displayName || null;
            return o !== null ? o : O(e.type) || "Memo";
          case x: {
            var d = e, v = d._payload, c = d._init;
            try {
              return O(c(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, I = 0, me, ve, pe, he, ge, be, ye;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Xe() {
      {
        if (I === 0) {
          me = console.log, ve = console.info, pe = console.warn, he = console.error, ge = console.group, be = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
    function Ze() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: me
            }),
            info: L({}, e, {
              value: ve
            }),
            warn: L({}, e, {
              value: pe
            }),
            error: L({}, e, {
              value: he
            }),
            group: L({}, e, {
              value: ge
            }),
            groupCollapsed: L({}, e, {
              value: be
            }),
            groupEnd: L({}, e, {
              value: ye
            })
          });
        }
        I < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = k.ReactCurrentDispatcher, ee;
    function U(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (d) {
            var o = d.stack.trim().match(/\n( *(at )?)/);
            ee = o && o[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, B;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Qe();
    }
    function Ee(e, r) {
      if (!e || re)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      re = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = Q.current, Q.current = null, Xe();
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
        re = !1, Q.current = v, Ze(), Error.prepareStackTrace = d;
      }
      var $ = e ? e.displayName || e.name : "", De = $ ? U($) : "";
      return typeof e == "function" && B.set(e, De), De;
    }
    function er(e, r, t) {
      return Ee(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, rr(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case R:
          return U("Suspense");
        case p:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return er(e.render);
          case y:
            return q(e.type, r, t);
          case x: {
            var o = e, d = o._payload, v = o._init;
            try {
              return q(v(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, _e = {}, Re = k.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function tr(e, r, t, o, d) {
      {
        var v = Function.call.bind(z);
        for (var c in e)
          if (v(e, c)) {
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
            l && !(l instanceof Error) && (J(d), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, c, typeof l), J(null)), l instanceof Error && !(l.message in _e) && (_e[l.message] = !0, J(d), C("Failed %s type: %s", t, l.message), J(null));
          }
      }
    }
    var nr = Array.isArray;
    function te(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function or(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Se(e) {
      if (or(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Ce(e);
    }
    var N = k.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Te, ne;
    ne = {};
    function sr(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = O(N.current.type);
        ne[t] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(N.current.type), e.ref), ne[t] = !0);
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, t, o, d, v, c) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
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
    function mr(e, r, t, o, d) {
      {
        var v, c = {}, l = null, S = null;
        t !== void 0 && (Se(t), l = "" + t), lr(r) && (Se(r.key), l = "" + r.key), sr(r) && (S = r.ref, ur(r, d));
        for (v in r)
          z.call(r, v) && !ir.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (v in E)
            c[v] === void 0 && (c[v] = E[v]);
        }
        if (l || S) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && cr(c, _), S && fr(c, _);
        }
        return dr(e, l, S, d, o, N.current, c);
      }
    }
    var ae = k.ReactCurrentOwner, Fe = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Oe() {
      {
        if (ae.current) {
          var e = O(ae.current.type);
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
    var je = {};
    function pr(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = pr(r);
        if (je[t])
          return;
        je[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ae.current && (o = " It was passed a child from " + O(e._owner.type) + "."), D(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), D(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ie(o) && we(o, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = M(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), c; !(c = v.next()).done; )
              ie(c.value) && we(c.value, r);
        }
      }
    }
    function hr(e) {
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
          tr(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var d = O(r);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(e) {
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
    function Le(e, r, t, o, d, v) {
      {
        var c = He(e);
        if (!c) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = vr(d);
          S ? l += S : l += Oe();
          var E;
          e === null ? E = "null" : te(e) ? E = "array" : e !== void 0 && e.$$typeof === a ? (E = "<" + (O(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, l);
        }
        var _ = mr(e, r, t, d, v);
        if (_ == null)
          return _;
        if (c) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (te(P)) {
                for (var $ = 0; $ < P.length; $++)
                  ke(P[$], e);
                Object.freeze && Object.freeze(P);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(P, e);
        }
        return e === s ? gr(_) : hr(_), _;
      }
    }
    function br(e, r, t) {
      return Le(e, r, t, !0);
    }
    function yr(e, r, t) {
      return Le(e, r, t, !1);
    }
    var xr = yr, Er = br;
    V.Fragment = s, V.jsx = xr, V.jsxs = Er;
  }()), V;
}
process.env.NODE_ENV === "production" ? se.exports = Nr() : se.exports = Wr();
var g = se.exports, Ye = (...n) => n.filter(Boolean).join(" ");
function Vr(n, a) {
  return `${n} returned \`undefined\`. Seems you forgot to wrap component within ${a}`;
}
function le(n = {}) {
  const {
    name: a,
    strict: i = !0,
    hookName: s = "useContext",
    providerName: u = "Provider",
    errorMessage: h,
    defaultValue: b
  } = n, m = Ie(b);
  m.displayName = a;
  function f() {
    var R;
    const p = Ne(m);
    if (!p && i) {
      const y = new Error(
        h ?? Vr(s, u)
      );
      throw y.name = "ContextError", (R = Error.captureStackTrace) == null || R.call(Error, y, f), y;
    }
    return p;
  }
  return [m.Provider, f, m];
}
const Yr = ({ isError: n = !1, isLoading: a = !1, ...i }) => ({
  ...$r(i),
  isError: n,
  isLoading: a
}), [Mr, K] = le({
  strict: !1,
  name: "FormContext"
}), st = Rr(({ _valid: n, _dirty: a, _loading: i, _validating: s, _submitted: u, _submitting: h, _submitSuccessful: b, children: m, ...f }, R) => {
  const p = Yr(f), { reset: y, formState: x, handleSubmit: T } = p, { onError: F, onSubmit: w, defaultValues: M, className: k, ...C } = f;
  Cr(() => y(M), [y, M]), Sr(R, () => ({ submit: T(w, F) }));
  const X = [
    x.isValid ? "valid" : "",
    x.isDirty ? "dirty" : "",
    x.isLoading ? "loading" : "",
    x.isValidating ? "validating" : "",
    x.isSubmitted ? "submitted" : "",
    x.isSubmitting ? "submitting" : "",
    x.isSubmitSuccessful ? "submitSuccessful" : ""
  ].join(" ").trim(), Z = {
    display: "contents",
    ...n ? { '&[data-form-state*="valid"]': n } : {},
    ...a ? { '&[data-form-state*="dirty"]': a } : {},
    ...i ? { '&[data-form-state*="loading"]': i } : {},
    ...s ? { '&[data-form-state*="validating"]': s } : {},
    ...u ? { '&[data-form-state*="submitted"]': u } : {},
    ...h ? { '&[data-form-state*="submitting"]': h } : {},
    ...b ? { '&[data-form-state*="submitSuccessful"]': b } : {}
  };
  return /* @__PURE__ */ g.jsx(Mr, { value: p, children: /* @__PURE__ */ g.jsx(
    Y.form,
    {
      ref: R,
      ...C,
      sx: Z,
      "data-form-state": X,
      className: Ye("formed-form", k),
      onSubmit: T(w, F),
      children: typeof m == "function" ? m(p) : m
    }
  ) });
}), Ur = ({ path: n, ...a }) => ({
  path: n
}), [Br, ue] = le({
  strict: !1,
  name: "FormFieldPathContext"
}), qr = ({ name: n, isRequired: a = !1, isControlled: i, valueAs: s, min: u, max: h, minLength: b, maxLength: m, ...f }) => {
  const R = ue(), { register: p, control: y, formState: { errors: x } } = K(), T = {
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
    register: p
  };
}, lt = (n) => {
  var F;
  const { name: a, error: i, rules: s, register: u, control: h } = qr(n), { label: b, children: m, valueAs: f, isRequired: R, minLength: p, maxLength: y, isControlled: x = !1, ...T } = n;
  return /* @__PURE__ */ g.jsxs(Tr, { ...T, isInvalid: !!i, children: [
    /* @__PURE__ */ g.jsx(Fr, { justify: "space-between", children: b && /* @__PURE__ */ g.jsx(Or, { htmlFor: a, children: b }) }),
    x ? /* @__PURE__ */ g.jsx(Ar, { name: a, rules: s, control: h, render: ({ field: w }) => A.cloneElement(A.Children.only(m), w) }) : A.cloneElement(A.Children.only(m), u(a, s)),
    i && /* @__PURE__ */ g.jsx(jr, { children: /* @__PURE__ */ g.jsxs(wr, { children: [
      "Error: ",
      (F = i.type) == null ? void 0 : F.toString()
    ] }) })
  ] });
}, zr = ({ children: n, ...a }) => {
  const i = Ur(a);
  return /* @__PURE__ */ g.jsx(Br, { value: i, children: n });
}, G = /* @__PURE__ */ new Map(), Jr = ({ name: n, ...a }) => {
  const i = ue(), { control: s } = K(), u = i ? `${i.path}.${n}` : n, h = Ir({
    name: u,
    control: s
  });
  return G.has(u) && G.set(u, h), console.log(G.get(u)), {
    name: u,
    ...G.get(u)
  };
}, ut = ({ children: n, ...a }) => {
  const i = Jr(a);
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: n(i.fields, i) });
}, Gr = ({ name: n, ...a }) => {
  const i = ue(), s = i ? `${i.path}.${n}` : n, { control: u } = K(), h = Ve({ control: u, name: s });
  return {
    name: s,
    field: h
  };
}, ct = ({ children: n, ...a }) => {
  const { name: i, field: s } = Gr(a);
  return /* @__PURE__ */ g.jsx(zr, { path: i, children: typeof n == "function" ? n(s) : n });
}, ft = ({ children: n, path: a, ...i }) => {
  const { control: s } = K(), u = Ve({ control: s, name: a });
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: n(u) });
}, dt = {
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
function Hr(n = {}) {
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
const [Kr, Xr] = kr("List"), [Zr, mt] = le({
  strict: !1,
  name: "ListContext",
  hookName: "useListContext",
  providerName: "<List />"
}), Qr = H((n, a) => {
  const { className: i, children: s } = n, u = Lr(n), h = Dr("List", n), { htmlProps: b, ...m } = Hr(u), f = _r.useMemo(() => m, [m]);
  return /* @__PURE__ */ g.jsx(Zr, { value: f, children: /* @__PURE__ */ g.jsx(Kr, { value: h, children: /* @__PURE__ */ g.jsx(
    Y.div,
    {
      ref: a,
      ...b,
      className: Ye("formed-list", i),
      __css: h.root,
      children: s
    }
  ) }) });
});
Qr.displayName = "List";
var ce = (...n) => n.filter(Boolean).join(" "), Me = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function Ue(n = {}) {
  const {
    strict: a = !0,
    errorMessage: i = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: s
  } = n, u = Ie(void 0);
  u.displayName = s;
  function h() {
    var b;
    const m = Ne(u);
    if (!m && a) {
      const f = new Error(i);
      throw f.name = "ContextError", (b = Error.captureStackTrace) == null || b.call(Error, f, h), f;
    }
    return m;
  }
  return [
    u.Provider,
    h,
    u
  ];
}
Ue({
  strict: !1,
  name: "ListItemLabelContext"
});
const Be = H((n, a) => {
  const { className: i, ...s } = n, u = We();
  return /* @__PURE__ */ g.jsx(
    Y.div,
    {
      ref: a,
      className: ce("list-item-label", i),
      ...s,
      __css: u.label
    }
  );
});
Me && (Be.displayName = "ListItemLabel");
function et(n) {
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
const [rt, vt] = Ue({
  strict: !1,
  name: "ListItemContext"
}), tt = H((n, a) => {
  const {
    className: i,
    isActive: s = !1,
    children: u,
    onClick: h,
    ...b
  } = n, m = Xr(), {
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
  } = et(n), p = Pr(() => R, [R]), y = {
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
  }, x = typeof n.children == "string" ? /* @__PURE__ */ g.jsx(Be, { children: n.children }) : n.children;
  return /* @__PURE__ */ g.jsx(rt, { value: p, children: /* @__PURE__ */ g.jsx(
    Y.div,
    {
      ref: a,
      ...f,
      className: ce("formed-list__item", i),
      __css: y,
      children: x
    }
  ) });
});
tt.displayName = "ListItem";
const nt = H((n, a) => {
  const i = We(), { className: s, ...u } = n;
  return /* @__PURE__ */ g.jsx(
    Y.div,
    {
      ref: a,
      className: ce("list-item-label"),
      ...u,
      __css: i.stat
    }
  );
});
Me && (nt.displayName = "ListItemStat");
export {
  st as Form,
  lt as FormField,
  ut as FormFieldArray,
  ct as FormFieldObject,
  zr as FormFieldPath,
  Br as FormFieldPathProvider,
  ft as FormFieldWatch,
  Mr as FormProvider,
  Qr as List,
  tt as ListItem,
  Be as ListItemLabel,
  nt as ListItemStat,
  dt as listTheme,
  Yr as useForm,
  K as useFormContext,
  qr as useFormField,
  Jr as useFormFieldArray,
  Gr as useFormFieldObject,
  Ur as useFormFieldPath,
  ue as useFormFieldPathContext
};
