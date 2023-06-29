(function(v,C){typeof exports=="object"&&typeof module<"u"?C(exports,require("react"),require("@chakra-ui/react"),require("react-hook-form")):typeof define=="function"&&define.amd?define(["exports","react","@chakra-ui/react","react-hook-form"],C):(v=typeof globalThis<"u"?globalThis:v||self,C(v["@formed/ui"]={},v.React,v.react,v.reactHookForm))})(this,function(v,C,F,W){"use strict";function Ze(t){const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const o in t)if(o!=="default"){const s=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(a,o,s.get?s:{enumerable:!0,get:()=>t[o]})}}return a.default=t,Object.freeze(a)}const Qe=Ze(C);var Z={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function er(){if(de)return V;de=1;var t=C,a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function g(m,f,P){var b,E={},_=null,j=null;P!==void 0&&(_=""+P),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(j=f.ref);for(b in f)s.call(f,b)&&!h.hasOwnProperty(b)&&(E[b]=f[b]);if(m&&m.defaultProps)for(b in f=m.defaultProps,f)E[b]===void 0&&(E[b]=f[b]);return{$$typeof:a,type:m,key:_,ref:j,props:E,_owner:l.current}}return V.Fragment=o,V.jsx=g,V.jsxs=g,V}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function rr(){return me||(me=1,process.env.NODE_ENV!=="production"&&function(){var t=C,a=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),w=Symbol.iterator,D="@@iterator";function z(e){if(e===null||typeof e!="object")return null;var r=w&&e[w]||e[D];return typeof r=="function"?r:null}var A=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function S(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];te("error",e,n)}}function te(e,r,n){{var i=A.ReactDebugCurrentFrame,d=i.getStackAddendum();d!==""&&(r+="%s",n=n.concat([d]));var p=n.map(function(c){return String(c)});p.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,p)}}var ne=!1,hr=!1,pr=!1,br=!1,yr=!1,Te;Te=Symbol.for("react.module.reference");function gr(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===h||yr||e===l||e===P||e===b||br||e===j||ne||hr||pr||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===E||e.$$typeof===g||e.$$typeof===m||e.$$typeof===f||e.$$typeof===Te||e.getModuleId!==void 0))}function Er(e,r,n){var i=e.displayName;if(i)return i;var d=r.displayName||r.name||"";return d!==""?n+"("+d+")":n}function Oe(e){return e.displayName||"Context"}function k(e){if(e==null)return null;if(typeof e.tag=="number"&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case o:return"Portal";case h:return"Profiler";case l:return"StrictMode";case P:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return Oe(r)+".Consumer";case g:var n=e;return Oe(n._context)+".Provider";case f:return Er(e,e.render,"ForwardRef");case E:var i=e.displayName||null;return i!==null?i:k(e.type)||"Memo";case _:{var d=e,p=d._payload,c=d._init;try{return k(c(p))}catch{return null}}}return null}var I=Object.assign,U=0,je,we,ke,Le,De,Ae,Ie;function $e(){}$e.__reactDisabledLog=!0;function _r(){{if(U===0){je=console.log,we=console.info,ke=console.warn,Le=console.error,De=console.group,Ae=console.groupCollapsed,Ie=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function xr(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:je}),info:I({},e,{value:we}),warn:I({},e,{value:ke}),error:I({},e,{value:Le}),group:I({},e,{value:De}),groupCollapsed:I({},e,{value:Ae}),groupEnd:I({},e,{value:Ie})})}U<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ae=A.ReactCurrentDispatcher,oe;function J(e,r,n){{if(oe===void 0)try{throw Error()}catch(d){var i=d.stack.trim().match(/\n( *(at )?)/);oe=i&&i[1]||""}return`
`+oe+e}}var ie=!1,G;{var Rr=typeof WeakMap=="function"?WeakMap:Map;G=new Rr}function Ne(e,r){if(!e||ie)return"";{var n=G.get(e);if(n!==void 0)return n}var i;ie=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var p;p=ae.current,ae.current=null,_r();try{if(r){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(L){i=L}Reflect.construct(e,[],c)}else{try{c.call()}catch(L){i=L}e.call(c.prototype)}}else{try{throw Error()}catch(L){i=L}e()}}catch(L){if(L&&i&&typeof L.stack=="string"){for(var u=L.stack.split(`
`),T=i.stack.split(`
`),x=u.length-1,R=T.length-1;x>=1&&R>=0&&u[x]!==T[R];)R--;for(;x>=1&&R>=0;x--,R--)if(u[x]!==T[R]){if(x!==1||R!==1)do if(x--,R--,R<0||u[x]!==T[R]){var O=`
`+u[x].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,O),O}while(x>=1&&R>=0);break}}}finally{ie=!1,ae.current=p,xr(),Error.prepareStackTrace=d}var N=e?e.displayName||e.name:"",He=N?J(N):"";return typeof e=="function"&&G.set(e,He),He}function Cr(e,r,n){return Ne(e,!1)}function Fr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function K(e,r,n){if(e==null)return"";if(typeof e=="function")return Ne(e,Fr(e));if(typeof e=="string")return J(e);switch(e){case P:return J("Suspense");case b:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Cr(e.render);case E:return K(e.type,r,n);case _:{var i=e,d=i._payload,p=i._init;try{return K(p(d),r,n)}catch{}}}return""}var X=Object.prototype.hasOwnProperty,We={},Ve=A.ReactDebugCurrentFrame;function H(e){if(e){var r=e._owner,n=K(e.type,e._source,r?r.type:null);Ve.setExtraStackFrame(n)}else Ve.setExtraStackFrame(null)}function Pr(e,r,n,i,d){{var p=Function.call.bind(X);for(var c in e)if(p(e,c)){var u=void 0;try{if(typeof e[c]!="function"){var T=Error((i||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}u=e[c](r,c,i,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(x){u=x}u&&!(u instanceof Error)&&(H(d),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",n,c,typeof u),H(null)),u instanceof Error&&!(u.message in We)&&(We[u.message]=!0,H(d),S("Failed %s type: %s",n,u.message),H(null))}}}var Sr=Array.isArray;function se(e){return Sr(e)}function Tr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Or(e){try{return Ye(e),!1}catch{return!0}}function Ye(e){return""+e}function Me(e){if(Or(e))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Tr(e)),Ye(e)}var q=A.ReactCurrentOwner,jr={key:!0,ref:!0,__self:!0,__source:!0},Ue,qe,ue;ue={};function wr(e){if(X.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function kr(e){if(X.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Lr(e,r){if(typeof e.ref=="string"&&q.current&&r&&q.current.stateNode!==r){var n=k(q.current.type);ue[n]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k(q.current.type),e.ref),ue[n]=!0)}}function Dr(e,r){{var n=function(){Ue||(Ue=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function Ar(e,r){{var n=function(){qe||(qe=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var Ir=function(e,r,n,i,d,p,c){var u={$$typeof:a,type:e,key:r,ref:n,props:c,_owner:p};return u._store={},Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function $r(e,r,n,i,d){{var p,c={},u=null,T=null;n!==void 0&&(Me(n),u=""+n),kr(r)&&(Me(r.key),u=""+r.key),wr(r)&&(T=r.ref,Lr(r,d));for(p in r)X.call(r,p)&&!jr.hasOwnProperty(p)&&(c[p]=r[p]);if(e&&e.defaultProps){var x=e.defaultProps;for(p in x)c[p]===void 0&&(c[p]=x[p])}if(u||T){var R=typeof e=="function"?e.displayName||e.name||"Unknown":e;u&&Dr(c,R),T&&Ar(c,R)}return Ir(e,u,T,d,i,q.current,c)}}var le=A.ReactCurrentOwner,Be=A.ReactDebugCurrentFrame;function $(e){if(e){var r=e._owner,n=K(e.type,e._source,r?r.type:null);Be.setExtraStackFrame(n)}else Be.setExtraStackFrame(null)}var ce;ce=!1;function fe(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function ze(){{if(le.current){var e=k(le.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Nr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+r+":"+n+"."}return""}}var Je={};function Wr(e){{var r=ze();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function Ge(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=Wr(r);if(Je[n])return;Je[n]=!0;var i="";e&&e._owner&&e._owner!==le.current&&(i=" It was passed a child from "+k(e._owner.type)+"."),$(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,i),$(null)}}function Ke(e,r){{if(typeof e!="object")return;if(se(e))for(var n=0;n<e.length;n++){var i=e[n];fe(i)&&Ge(i,r)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var d=z(e);if(typeof d=="function"&&d!==e.entries)for(var p=d.call(e),c;!(c=p.next()).done;)fe(c.value)&&Ge(c.value,r)}}}function Vr(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===E))n=r.propTypes;else return;if(n){var i=k(r);Pr(n,e.props,"prop",i,e)}else if(r.PropTypes!==void 0&&!ce){ce=!0;var d=k(r);S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",d||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Yr(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var i=r[n];if(i!=="children"&&i!=="key"){$(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i),$(null);break}}e.ref!==null&&($(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),$(null))}}function Xe(e,r,n,i,d,p){{var c=gr(e);if(!c){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var T=Nr(d);T?u+=T:u+=ze();var x;e===null?x="null":se(e)?x="array":e!==void 0&&e.$$typeof===a?(x="<"+(k(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,u)}var R=$r(e,r,n,d,p);if(R==null)return R;if(c){var O=r.children;if(O!==void 0)if(i)if(se(O)){for(var N=0;N<O.length;N++)Ke(O[N],e);Object.freeze&&Object.freeze(O)}else S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ke(O,e)}return e===s?Yr(R):Vr(R),R}}function Mr(e,r,n){return Xe(e,r,n,!0)}function Ur(e,r,n){return Xe(e,r,n,!1)}var qr=Ur,Br=Mr;Y.Fragment=s,Y.jsx=qr,Y.jsxs=Br}()),Y}process.env.NODE_ENV==="production"?Z.exports=er():Z.exports=rr();var y=Z.exports,ve=(...t)=>t.filter(Boolean).join(" ");function tr(t,a){return`${t} returned \`undefined\`. Seems you forgot to wrap component within ${a}`}function Q(t={}){const{name:a,strict:o=!0,hookName:s="useContext",providerName:l="Provider",errorMessage:h,defaultValue:g}=t,m=C.createContext(g);m.displayName=a;function f(){var P;const b=C.useContext(m);if(!b&&o){const E=new Error(h??tr(s,l));throw E.name="ContextError",(P=Error.captureStackTrace)==null||P.call(Error,E,f),E}return b}return[m.Provider,f,m]}const he=({isError:t=!1,isLoading:a=!1,...o})=>({...W.useForm(o),isError:t,isLoading:a}),[pe,M]=Q({strict:!1,name:"FormContext"}),nr=C.forwardRef(({_valid:t,_dirty:a,_loading:o,_validating:s,_submitted:l,_submitting:h,_submitSuccessful:g,children:m,...f},P)=>{const b=he(f),{reset:E,formState:_,handleSubmit:j}=b,{onError:w,onSubmit:D,defaultValues:z,className:A,...S}=f;C.useEffect(()=>E(z),[E,z]),C.useImperativeHandle(P,()=>({submit:j(D,w)}));const te=[_.isValid?"valid":"",_.isDirty?"dirty":"",_.isLoading?"loading":"",_.isValidating?"validating":"",_.isSubmitted?"submitted":"",_.isSubmitting?"submitting":"",_.isSubmitSuccessful?"submitSuccessful":""].join(" ").trim(),ne={display:"contents",...t?{'&[data-form-state*="valid"]':t}:{},...a?{'&[data-form-state*="dirty"]':a}:{},...o?{'&[data-form-state*="loading"]':o}:{},...s?{'&[data-form-state*="validating"]':s}:{},...l?{'&[data-form-state*="submitted"]':l}:{},...h?{'&[data-form-state*="submitting"]':h}:{},...g?{'&[data-form-state*="submitSuccessful"]':g}:{}};return y.jsx(pe,{value:b,children:y.jsx(F.chakra.form,{ref:P,...S,sx:ne,"data-form-state":te,className:ve("formed-form",A),onSubmit:j(D,w),children:typeof m=="function"?m(b):m})})}),be=({path:t,...a})=>({path:t}),[ye,B]=Q({strict:!1,name:"FormFieldPathContext"}),ge=({name:t,isRequired:a=!1,isControlled:o,valueAs:s,min:l,max:h,minLength:g,maxLength:m,...f})=>{const P=B(),{register:b,control:E,formState:{errors:_}}=M(),j={required:a,valueAsDate:s==="date",valueAsNumber:s==="number",setValueAs:typeof s=="function"?s:void 0,minLength:g,maxLength:m},w=P?`${P.path}.${t}`:t,D=_[w];return{name:w,error:D,rules:j,control:E,register:b}},ar=t=>{var w;const{name:a,error:o,rules:s,register:l,control:h}=ge(t),{label:g,children:m,valueAs:f,isRequired:P,minLength:b,maxLength:E,isControlled:_=!1,...j}=t;return y.jsxs(F.FormControl,{...j,isInvalid:!!o,children:[y.jsx(F.Flex,{justify:"space-between",children:g&&y.jsx(F.FormLabel,{htmlFor:a,children:g})}),_?y.jsx(W.Controller,{name:a,rules:s,control:h,render:({field:D})=>C.cloneElement(C.Children.only(m),D)}):C.cloneElement(C.Children.only(m),l(a,s)),o&&y.jsx(F.FormErrorMessage,{children:y.jsxs(F.Text,{children:["Error: ",(w=o.type)==null?void 0:w.toString()]})})]})},Ee=({children:t,...a})=>{const o=be(a);return y.jsx(ye,{value:o,children:t})},_e=({name:t,...a})=>{const o=B(),{control:s}=M(),l=o?`${o.path}.${t}`:t,h=W.useFieldArray({name:l,control:s});return{name:l,...h}},or=({children:t,...a})=>{const o=_e(a),s=o.fields.map((l,h)=>({key:l.id,data:l,path:`${o.name}.${h}`,remove:()=>o.remove(h)}));return y.jsx(y.Fragment,{children:t(s,o)})},xe=({name:t,...a})=>{const o=B(),s=o?`${o.path}.${t}`:t,{control:l}=M(),h=W.useWatch({control:l,name:s});return{name:s,field:h}},ir=({children:t,...a})=>{const{name:o,field:s}=xe(a);return y.jsx(Ee,{path:o,children:typeof t=="function"?t(s):t})},sr=({children:t,path:a,...o})=>{const{control:s}=M(),l=W.useWatch({control:s,name:a});return y.jsx(y.Fragment,{children:t(l)})},ur={parts:["list","item","label","drag","checkbox"],baseStyle:({colorMode:t,colorScheme:a})=>({list:{width:"100%"},item:{borderRadius:"md",textStyle:"paragraph",color:t==="light"?"@TODO":`${a}.400`,_active:{color:t==="light"?"@TODO":`${a}.white`,bg:t==="light"?"@TODO":`${a}.800`},_hover:{bg:t==="light"?"@TODO":`${a}.800`}},label:{flex:1,textAlign:"start",borderRadius:"md",py:"10px",px:"12px",textStyle:"body"},stat:{flex:0,textAlign:"start",borderRadius:"md",py:"10px",px:"12px",color:t==="light"?"@TODO":`${a}.600`,textStyle:"meta"},drag:{cursor:"move",display:"flex",alignItems:"center",paddingStart:"10px",paddingEnd:"10px",borderRadius:"md",_hover:{bg:t==="light"?`${a}.200`:`${a}.700`}},checkbox:{paddingStart:"10px",paddingEnd:"10px",borderRadius:"md"}}),sizes:{md:{}},variants:{},defaultProps:{size:"md",colorScheme:"gray"}};function lr(t={}){const{...a}=t;return{htmlProps:a}}const[cr,fr]=F.createStylesContext("List"),[dr,zr]=Q({strict:!1,name:"ListContext",hookName:"useListContext",providerName:"<List />"}),Re=F.forwardRef((t,a)=>{const{className:o,children:s}=t,l=F.omitThemingProps(t),h=F.useMultiStyleConfig("List",t),{htmlProps:g,...m}=lr(l),f=Qe.useMemo(()=>m,[m]);return y.jsx(dr,{value:f,children:y.jsx(cr,{value:h,children:y.jsx(F.chakra.div,{ref:a,...g,className:ve("formed-list",o),__css:h.root,children:s})})})});Re.displayName="List";var ee=(...t)=>t.filter(Boolean).join(" "),Ce=process.env.NODE_ENV!=="production";process.env.NODE_ENV;function Fe(t={}){const{strict:a=!0,errorMessage:o="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:s}=t,l=C.createContext(void 0);l.displayName=s;function h(){var g;const m=C.useContext(l);if(!m&&a){const f=new Error(o);throw f.name="ContextError",(g=Error.captureStackTrace)==null||g.call(Error,f,h),f}return m}return[l.Provider,h,l]}Fe({strict:!1,name:"ListItemLabelContext"});const re=F.forwardRef((t,a)=>{const{className:o,...s}=t,l=F.useStyles();return y.jsx(F.chakra.div,{ref:a,className:ee("list-item-label",o),...s,__css:l.label})});Ce&&(re.displayName="ListItemLabel");function mr(t){const{...a}=t;return{htmlProps:a}}const[vr,Jr]=Fe({strict:!1,name:"ListItemContext"}),Pe=F.forwardRef((t,a)=>{const{className:o,isActive:s=!1,children:l,onClick:h,...g}=t,m=fr(),{htmlProps:f,...P}=mr(t),b=C.useMemo(()=>P,[P]),E={width:"100%",display:"flex","> *:first-child:not(:last-child)":{borderEnd:0,borderEndRadius:0},"> *:not(:first-child):last-child":{borderStartRadius:0},"> *:not(:first-child):not(:last-child)":{borderEnd:0,borderRadius:0},"> button:not(:first-child) > *:first-child":{borderStartRadius:0},...m.item},_=typeof t.children=="string"?y.jsx(re,{children:t.children}):t.children;return y.jsx(vr,{value:b,children:y.jsx(F.chakra.div,{ref:a,...f,className:ee("formed-list__item",o),__css:E,children:_})})});Pe.displayName="ListItem";const Se=F.forwardRef((t,a)=>{const o=F.useStyles(),{className:s,...l}=t;return y.jsx(F.chakra.div,{ref:a,className:ee("list-item-label"),...l,__css:o.stat})});Ce&&(Se.displayName="ListItemStat"),v.Form=nr,v.FormField=ar,v.FormFieldArray=or,v.FormFieldObject=ir,v.FormFieldPath=Ee,v.FormFieldPathProvider=ye,v.FormFieldWatch=sr,v.FormProvider=pe,v.List=Re,v.ListItem=Pe,v.ListItemLabel=re,v.ListItemStat=Se,v.listTheme=ur,v.useForm=he,v.useFormContext=M,v.useFormField=ge,v.useFormFieldArray=_e,v.useFormFieldObject=xe,v.useFormFieldPath=be,v.useFormFieldPathContext=B,Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});
