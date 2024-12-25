(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var $s={exports:{}},hi={},Hs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),gf=Symbol.for("react.portal"),mf=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),kf=Symbol.for("react.memo"),Cf=Symbol.for("react.lazy"),pu=Symbol.iterator;function xf(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ws=Object.assign,Bs={};function wt(e,n,t){this.props=e,this.context=n,this.refs=Bs,this.updater=t||Vs}wt.prototype.isReactComponent={};wt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};wt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qs(){}Qs.prototype=wt.prototype;function fl(e,n,t){this.props=e,this.context=n,this.refs=Bs,this.updater=t||Vs}var dl=fl.prototype=new Qs;dl.constructor=fl;Ws(dl,wt.prototype);dl.isPureReactComponent=!0;var hu=Array.isArray,Gs=Object.prototype.hasOwnProperty,pl={current:null},Ks={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Gs.call(n,r)&&!Ks.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:ur,type:e,key:o,ref:l,props:i,_owner:pl.current}}function Of(e,n){return{$$typeof:ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function _f(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var gu=/\/+/g;function Mi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_f(""+e.key):n.toString(36)}function Pr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ur:case gf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Mi(l,0):r,hu(i)?(t="",e!=null&&(t=e.replace(gu,"$&/")+"/"),Pr(i,n,t,"",function(f){return f})):i!=null&&(hl(i)&&(i=Of(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(gu,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",hu(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Mi(o,u);l+=Pr(o,n,t,s,i)}else if(s=xf(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Mi(o,u++),l+=Pr(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function pr(e,n,t){if(e==null)return e;var r=[],i=0;return Pr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Df(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Lr={transition:null},Nf={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:pl};function Ys(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:pr,forEach:function(e,n,t){pr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return pr(e,function(){n++}),n},toArray:function(e){return pr(e,function(n){return n})||[]},only:function(e){if(!hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=wt;L.Fragment=mf;L.Profiler=yf;L.PureComponent=fl;L.StrictMode=vf;L.Suspense=Ef;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;L.act=Ys;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ws({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=pl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Gs.call(n,s)&&!Ks.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:ur,type:e.type,key:i,ref:o,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Sf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wf,_context:e},e.Consumer=e};L.createElement=Xs;L.createFactory=function(e){var n=Xs.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Tf,render:e}};L.isValidElement=hl;L.lazy=function(e){return{$$typeof:Cf,_payload:{_status:-1,_result:e},_init:Df}};L.memo=function(e,n){return{$$typeof:kf,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=n}};L.unstable_act=Ys;L.useCallback=function(e,n){return pe.current.useCallback(e,n)};L.useContext=function(e){return pe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};L.useEffect=function(e,n){return pe.current.useEffect(e,n)};L.useId=function(){return pe.current.useId()};L.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return pe.current.useMemo(e,n)};L.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};L.useRef=function(e){return pe.current.useRef(e)};L.useState=function(e){return pe.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return pe.current.useTransition()};L.version="18.3.1";Hs.exports=L;var U=Hs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If=U,Pf=Symbol.for("react.element"),Lf=Symbol.for("react.fragment"),Rf=Object.prototype.hasOwnProperty,zf=If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mf={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Rf.call(n,r)&&!Mf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Pf,type:e,key:o,ref:l,props:i,_owner:zf.current}}hi.Fragment=Lf;hi.jsx=Zs;hi.jsxs=Zs;$s.exports=hi;var j=$s.exports,qs={exports:{}},xe={},Js={exports:{}},bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,I){var P=O.length;O.push(I);e:for(;0<P;){var B=P-1>>>1,q=O[B];if(0<i(q,I))O[B]=I,O[P]=q,P=B;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],P=O.pop();if(P!==I){O[0]=P;e:for(var B=0,q=O.length,_n=q>>>1;B<_n;){var Se=2*(B+1)-1,Bn=O[Se],Dn=Se+1,dr=O[Dn];if(0>i(Bn,P))Dn<q&&0>i(dr,Bn)?(O[B]=dr,O[Dn]=P,B=Dn):(O[B]=Bn,O[Se]=P,B=Se);else if(Dn<q&&0>i(dr,P))O[B]=dr,O[Dn]=P,B=Dn;else break e}}return I}function i(O,I){var P=O.sortIndex-I.sortIndex;return P!==0?P:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],f=[],h=1,m=null,g=3,v=!1,w=!1,p=!1,E=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(O){for(var I=t(f);I!==null;){if(I.callback===null)r(f);else if(I.startTime<=O)r(f),I.sortIndex=I.expirationTime,n(s,I);else break;I=t(f)}}function y(O){if(p=!1,d(O),!w)if(t(s)!==null)w=!0,on(S);else{var I=t(f);I!==null&&Wn(y,I.startTime-O)}}function S(O,I){w=!1,p&&(p=!1,c(x),x=-1),v=!0;var P=g;try{for(d(I),m=t(s);m!==null&&(!(m.expirationTime>I)||O&&!X());){var B=m.callback;if(typeof B=="function"){m.callback=null,g=m.priorityLevel;var q=B(m.expirationTime<=I);I=e.unstable_now(),typeof q=="function"?m.callback=q:m===t(s)&&r(s),d(I)}else r(s);m=t(s)}if(m!==null)var _n=!0;else{var Se=t(f);Se!==null&&Wn(y,Se.startTime-I),_n=!1}return _n}finally{m=null,g=P,v=!1}}var T=!1,C=null,x=-1,R=5,D=-1;function X(){return!(e.unstable_now()-D<R)}function ne(){if(C!==null){var O=e.unstable_now();D=O;var I=!0;try{I=C(!0,O)}finally{I?_e():(T=!1,C=null)}}else T=!1}var _e;if(typeof a=="function")_e=function(){a(ne)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,N=A.port2;A.port1.onmessage=ne,_e=function(){N.postMessage(null)}}else _e=function(){E(ne,0)};function on(O){C=O,T||(T=!0,_e())}function Wn(O,I){x=E(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,on(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var P=g;g=I;try{return O()}finally{g=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var P=g;g=O;try{return I()}finally{g=P}},e.unstable_scheduleCallback=function(O,I,P){var B=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?B+P:B):P=B,O){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=P+q,O={id:h++,callback:I,priorityLevel:O,startTime:P,expirationTime:q,sortIndex:-1},P>B?(O.sortIndex=P,n(f,O),t(s)===null&&O===t(f)&&(p?(c(x),x=-1):p=!0,Wn(y,P-B))):(O.sortIndex=q,n(s,O),w||v||(w=!0,on(S))),O},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(O){var I=g;return function(){var P=g;g=I;try{return O.apply(this,arguments)}finally{g=P}}}})(bs);Js.exports=bs;var jf=Js.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff=U,Ce=jf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ea=new Set,Bt={};function Hn(e,n){dt(e,n),dt(e+"Capture",n)}function dt(e,n){for(Bt[e]=n,e=0;e<n.length;e++)ea.add(n[e])}var be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ho=Object.prototype.hasOwnProperty,Af=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},vu={};function Uf(e){return ho.call(vu,e)?!0:ho.call(mu,e)?!1:Af.test(e)?vu[e]=!0:(mu[e]=!0,!1)}function $f(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hf(e,n,t,r){if(n===null||typeof n>"u"||$f(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(gl,ml);le[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(gl,ml);le[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(gl,ml);le[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function vl(e,n,t,r){var i=le.hasOwnProperty(n)?le[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Hf(n,t,i,r)&&(t=null),r||i===null?Uf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var rn=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),go=Symbol.for("react.profiler"),na=Symbol.for("react.provider"),ta=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),mo=Symbol.for("react.suspense"),vo=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),ra=Symbol.for("react.offscreen"),yu=Symbol.iterator;function Et(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,ji;function It(e){if(ji===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ji=n&&n[1]||""}return`
`+ji+e}var Fi=!1;function Ai(e,n){if(!e||Fi)return"";Fi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Fi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?It(e):""}function Vf(e){switch(e.tag){case 5:return It(e.type);case 16:return It("Lazy");case 13:return It("Suspense");case 19:return It("SuspenseList");case 0:case 2:case 15:return e=Ai(e.type,!1),e;case 11:return e=Ai(e.type.render,!1),e;case 1:return e=Ai(e.type,!0),e;default:return""}}function yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Xn:return"Portal";case go:return"Profiler";case yl:return"StrictMode";case mo:return"Suspense";case vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ta:return(e.displayName||"Context")+".Consumer";case na:return(e._context.displayName||"Context")+".Provider";case wl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sl:return n=e.displayName||null,n!==null?n:yo(e.type)||"Memo";case un:n=e._payload,e=e._init;try{return yo(e(n))}catch{}}return null}function Wf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yo(n);case 8:return n===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ia(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bf(e){var n=ia(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gr(e){e._valueTracker||(e._valueTracker=Bf(e))}function oa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ia(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function wu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=En(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function la(e,n){n=n.checked,n!=null&&vl(e,"checked",n,!1)}function So(e,n){la(e,n);var t=En(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?To(e,n.type,t):n.hasOwnProperty("defaultValue")&&To(e,n.type,En(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Su(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function To(e,n,t){(n!=="number"||Br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pt=Array.isArray;function lt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+En(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Eo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Pt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:En(t)}}function ua(e,n){var t=En(n.value),r=En(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Eu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function sa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ko(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?sa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,aa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Qt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qf=["Webkit","ms","Moz","O"];Object.keys(zt).forEach(function(e){Qf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),zt[n]=zt[e]})});function ca(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||zt.hasOwnProperty(e)&&zt[e]?(""+n).trim():n+"px"}function fa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ca(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Gf=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Co(e,n){if(n){if(Gf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function xo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oo=null;function Tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _o=null,ut=null,st=null;function ku(e){if(e=cr(e)){if(typeof _o!="function")throw Error(k(280));var n=e.stateNode;n&&(n=wi(n),_o(e.stateNode,e.type,n))}}function da(e){ut?st?st.push(e):st=[e]:ut=e}function pa(){if(ut){var e=ut,n=st;if(st=ut=null,ku(e),n)for(e=0;e<n.length;e++)ku(n[e])}}function ha(e,n){return e(n)}function ga(){}var Ui=!1;function ma(e,n,t){if(Ui)return e(n,t);Ui=!0;try{return ha(e,n,t)}finally{Ui=!1,(ut!==null||st!==null)&&(ga(),pa())}}function Gt(e,n){var t=e.stateNode;if(t===null)return null;var r=wi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Do=!1;if(be)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){Do=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{Do=!1}function Kf(e,n,t,r,i,o,l,u,s){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(h){this.onError(h)}}var Mt=!1,Qr=null,Gr=!1,No=null,Xf={onError:function(e){Mt=!0,Qr=e}};function Yf(e,n,t,r,i,o,l,u,s){Mt=!1,Qr=null,Kf.apply(Xf,arguments)}function Zf(e,n,t,r,i,o,l,u,s){if(Yf.apply(this,arguments),Mt){if(Mt){var f=Qr;Mt=!1,Qr=null}else throw Error(k(198));Gr||(Gr=!0,No=f)}}function Vn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function va(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Cu(e){if(Vn(e)!==e)throw Error(k(188))}function qf(e){var n=e.alternate;if(!n){if(n=Vn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Cu(i),e;if(o===r)return Cu(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function ya(e){return e=qf(e),e!==null?wa(e):null}function wa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=wa(e);if(n!==null)return n;e=e.sibling}return null}var Sa=Ce.unstable_scheduleCallback,xu=Ce.unstable_cancelCallback,Jf=Ce.unstable_shouldYield,bf=Ce.unstable_requestPaint,Z=Ce.unstable_now,ed=Ce.unstable_getCurrentPriorityLevel,El=Ce.unstable_ImmediatePriority,Ta=Ce.unstable_UserBlockingPriority,Kr=Ce.unstable_NormalPriority,nd=Ce.unstable_LowPriority,Ea=Ce.unstable_IdlePriority,gi=null,Ge=null;function td(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(gi,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:od,rd=Math.log,id=Math.LN2;function od(e){return e>>>=0,e===0?32:31-(rd(e)/id|0)|0}var vr=64,yr=4194304;function Lt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=Lt(u):(o&=l,o!==0&&(r=Lt(o)))}else l=t&~i,l!==0?r=Lt(l):o!==0&&(r=Lt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-$e(n),i=1<<t,r|=e[t],n&=~i;return r}function ld(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-$e(o),u=1<<l,s=i[l];s===-1?(!(u&t)||u&r)&&(i[l]=ld(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function Io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ka(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function $i(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$e(n),e[n]=t}function sd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-$e(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function kl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-$e(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var F=0;function Ca(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xa,Cl,Oa,_a,Da,Po=!1,wr=[],hn=null,gn=null,mn=null,Kt=new Map,Xt=new Map,an=[],ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,n){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Kt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xt.delete(n.pointerId)}}function Ct(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=cr(n),n!==null&&Cl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function cd(e,n,t,r,i){switch(n){case"focusin":return hn=Ct(hn,e,n,t,r,i),!0;case"dragenter":return gn=Ct(gn,e,n,t,r,i),!0;case"mouseover":return mn=Ct(mn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Kt.set(o,Ct(Kt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Xt.set(o,Ct(Xt.get(o)||null,e,n,t,r,i)),!0}return!1}function Na(e){var n=Pn(e.target);if(n!==null){var t=Vn(n);if(t!==null){if(n=t.tag,n===13){if(n=va(t),n!==null){e.blockedOn=n,Da(e.priority,function(){Oa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Lo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Oo=r,t.target.dispatchEvent(r),Oo=null}else return n=cr(t),n!==null&&Cl(n),e.blockedOn=t,!1;n.shift()}return!0}function _u(e,n,t){Rr(e)&&t.delete(n)}function fd(){Po=!1,hn!==null&&Rr(hn)&&(hn=null),gn!==null&&Rr(gn)&&(gn=null),mn!==null&&Rr(mn)&&(mn=null),Kt.forEach(_u),Xt.forEach(_u)}function xt(e,n){e.blockedOn===n&&(e.blockedOn=null,Po||(Po=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,fd)))}function Yt(e){function n(i){return xt(i,e)}if(0<wr.length){xt(wr[0],e);for(var t=1;t<wr.length;t++){var r=wr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(hn!==null&&xt(hn,e),gn!==null&&xt(gn,e),mn!==null&&xt(mn,e),Kt.forEach(n),Xt.forEach(n),t=0;t<an.length;t++)r=an[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(t=an[0],t.blockedOn===null);)Na(t),t.blockedOn===null&&an.shift()}var at=rn.ReactCurrentBatchConfig,Yr=!0;function dd(e,n,t,r){var i=F,o=at.transition;at.transition=null;try{F=1,xl(e,n,t,r)}finally{F=i,at.transition=o}}function pd(e,n,t,r){var i=F,o=at.transition;at.transition=null;try{F=4,xl(e,n,t,r)}finally{F=i,at.transition=o}}function xl(e,n,t,r){if(Yr){var i=Lo(e,n,t,r);if(i===null)Zi(e,n,r,Zr,t),Ou(e,r);else if(cd(i,e,n,t,r))r.stopPropagation();else if(Ou(e,r),n&4&&-1<ad.indexOf(e)){for(;i!==null;){var o=cr(i);if(o!==null&&xa(o),o=Lo(e,n,t,r),o===null&&Zi(e,n,r,Zr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Zi(e,n,r,null,t)}}var Zr=null;function Lo(e,n,t,r){if(Zr=null,e=Tl(r),e=Pn(e),e!==null)if(n=Vn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=va(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Zr=e,null}function Ia(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ed()){case El:return 1;case Ta:return 4;case Kr:case nd:return 16;case Ea:return 536870912;default:return 16}default:return 16}}var fn=null,Ol=null,zr=null;function Pa(){if(zr)return zr;var e,n=Ol,t=n.length,r,i="value"in fn?fn.value:fn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return zr=i.slice(e,1<r?1-r:void 0)}function Mr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function Du(){return!1}function Oe(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sr:Du,this.isPropagationStopped=Du,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),n}var St={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Oe(St),ar=K({},St,{view:0,detail:0}),hd=Oe(ar),Hi,Vi,Ot,mi=K({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ot&&(Ot&&e.type==="mousemove"?(Hi=e.screenX-Ot.screenX,Vi=e.screenY-Ot.screenY):Vi=Hi=0,Ot=e),Hi)},movementY:function(e){return"movementY"in e?e.movementY:Vi}}),Nu=Oe(mi),gd=K({},mi,{dataTransfer:0}),md=Oe(gd),vd=K({},ar,{relatedTarget:0}),Wi=Oe(vd),yd=K({},St,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=Oe(yd),Sd=K({},St,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Td=Oe(Sd),Ed=K({},St,{data:0}),Iu=Oe(Ed),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Od(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xd[e])?!!n[e]:!1}function Dl(){return Od}var _d=K({},ar,{key:function(e){if(e.key){var n=kd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dl,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dd=Oe(_d),Nd=K({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=Oe(Nd),Id=K({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dl}),Pd=Oe(Id),Ld=K({},St,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rd=Oe(Ld),zd=K({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=Oe(zd),jd=[9,13,27,32],Nl=be&&"CompositionEvent"in window,jt=null;be&&"documentMode"in document&&(jt=document.documentMode);var Fd=be&&"TextEvent"in window&&!jt,La=be&&(!Nl||jt&&8<jt&&11>=jt),Lu=" ",Ru=!1;function Ra(e,n){switch(e){case"keyup":return jd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Ad(e,n){switch(e){case"compositionend":return za(n);case"keypress":return n.which!==32?null:(Ru=!0,Lu);case"textInput":return e=n.data,e===Lu&&Ru?null:e;default:return null}}function Ud(e,n){if(Zn)return e==="compositionend"||!Nl&&Ra(e,n)?(e=Pa(),zr=Ol=fn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return La&&n.locale!=="ko"?null:n.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$d[e.type]:n==="textarea"}function Ma(e,n,t,r){da(r),n=qr(n,"onChange"),0<n.length&&(t=new _l("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ft=null,Zt=null;function Hd(e){Ga(e,0)}function vi(e){var n=bn(e);if(oa(n))return e}function Vd(e,n){if(e==="change")return n}var ja=!1;if(be){var Bi;if(be){var Qi="oninput"in document;if(!Qi){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Qi=typeof Mu.oninput=="function"}Bi=Qi}else Bi=!1;ja=Bi&&(!document.documentMode||9<document.documentMode)}function ju(){Ft&&(Ft.detachEvent("onpropertychange",Fa),Zt=Ft=null)}function Fa(e){if(e.propertyName==="value"&&vi(Zt)){var n=[];Ma(n,Zt,e,Tl(e)),ma(Hd,n)}}function Wd(e,n,t){e==="focusin"?(ju(),Ft=n,Zt=t,Ft.attachEvent("onpropertychange",Fa)):e==="focusout"&&ju()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(Zt)}function Qd(e,n){if(e==="click")return vi(n)}function Gd(e,n){if(e==="input"||e==="change")return vi(n)}function Kd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ve=typeof Object.is=="function"?Object.is:Kd;function qt(e,n){if(Ve(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ho.call(n,i)||!Ve(e[i],n[i]))return!1}return!0}function Fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,n){var t=Fu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fu(t)}}function Aa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Aa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ua(){for(var e=window,n=Br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Br(e.document)}return n}function Il(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Xd(e){var n=Ua(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Aa(t.ownerDocument.documentElement,t)){if(r!==null&&Il(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Au(t,o);var l=Au(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yd=be&&"documentMode"in document&&11>=document.documentMode,qn=null,Ro=null,At=null,zo=!1;function Uu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zo||qn==null||qn!==Br(r)||(r=qn,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),At&&qt(At,r)||(At=r,r=qr(Ro,"onSelect"),0<r.length&&(n=new _l("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=qn)))}function Tr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jn={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},Gi={},$a={};be&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function yi(e){if(Gi[e])return Gi[e];if(!Jn[e])return e;var n=Jn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $a)return Gi[e]=n[t];return e}var Ha=yi("animationend"),Va=yi("animationiteration"),Wa=yi("animationstart"),Ba=yi("transitionend"),Qa=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,n){Qa.set(e,n),Hn(n,[e])}for(var Ki=0;Ki<$u.length;Ki++){var Xi=$u[Ki],Zd=Xi.toLowerCase(),qd=Xi[0].toUpperCase()+Xi.slice(1);Cn(Zd,"on"+qd)}Cn(Ha,"onAnimationEnd");Cn(Va,"onAnimationIteration");Cn(Wa,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Ba,"onTransitionEnd");dt("onMouseEnter",["mouseout","mouseover"]);dt("onMouseLeave",["mouseout","mouseover"]);dt("onPointerEnter",["pointerout","pointerover"]);dt("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Hu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Zf(r,n,void 0,e),e.currentTarget=null}function Ga(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,f=u.currentTarget;if(u=u.listener,s!==o&&i.isPropagationStopped())break e;Hu(i,u,f),o=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,f=u.currentTarget,u=u.listener,s!==o&&i.isPropagationStopped())break e;Hu(i,u,f),o=s}}}if(Gr)throw e=No,Gr=!1,No=null,e}function H(e,n){var t=n[Uo];t===void 0&&(t=n[Uo]=new Set);var r=e+"__bubble";t.has(r)||(Ka(n,e,2,!1),t.add(r))}function Yi(e,n,t){var r=0;n&&(r|=4),Ka(t,e,r,n)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Jt(e){if(!e[Er]){e[Er]=!0,ea.forEach(function(t){t!=="selectionchange"&&(Jd.has(t)||Yi(t,!1,e),Yi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Er]||(n[Er]=!0,Yi("selectionchange",!1,n))}}function Ka(e,n,t,r){switch(Ia(n)){case 1:var i=dd;break;case 4:i=pd;break;default:i=xl}t=i.bind(null,n,t,e),i=void 0,!Do||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Zi(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Pn(u),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}u=u.parentNode}}r=r.return}ma(function(){var f=o,h=Tl(t),m=[];e:{var g=Qa.get(e);if(g!==void 0){var v=_l,w=e;switch(e){case"keypress":if(Mr(t)===0)break e;case"keydown":case"keyup":v=Dd;break;case"focusin":w="focus",v=Wi;break;case"focusout":w="blur",v=Wi;break;case"beforeblur":case"afterblur":v=Wi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Pd;break;case Ha:case Va:case Wa:v=wd;break;case Ba:v=Rd;break;case"scroll":v=hd;break;case"wheel":v=Md;break;case"copy":case"cut":case"paste":v=Td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Pu}var p=(n&4)!==0,E=!p&&e==="scroll",c=p?g!==null?g+"Capture":null:g;p=[];for(var a=f,d;a!==null;){d=a;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,c!==null&&(y=Gt(a,c),y!=null&&p.push(bt(a,y,d)))),E)break;a=a.return}0<p.length&&(g=new v(g,w,null,t,h),m.push({event:g,listeners:p}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&t!==Oo&&(w=t.relatedTarget||t.fromElement)&&(Pn(w)||w[en]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=t.relatedTarget||t.toElement,v=f,w=w?Pn(w):null,w!==null&&(E=Vn(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=f),v!==w)){if(p=Nu,y="onMouseLeave",c="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(p=Pu,y="onPointerLeave",c="onPointerEnter",a="pointer"),E=v==null?g:bn(v),d=w==null?g:bn(w),g=new p(y,a+"leave",v,t,h),g.target=E,g.relatedTarget=d,y=null,Pn(h)===f&&(p=new p(c,a+"enter",w,t,h),p.target=d,p.relatedTarget=E,y=p),E=y,v&&w)n:{for(p=v,c=w,a=0,d=p;d;d=Qn(d))a++;for(d=0,y=c;y;y=Qn(y))d++;for(;0<a-d;)p=Qn(p),a--;for(;0<d-a;)c=Qn(c),d--;for(;a--;){if(p===c||c!==null&&p===c.alternate)break n;p=Qn(p),c=Qn(c)}p=null}else p=null;v!==null&&Vu(m,g,v,p,!1),w!==null&&E!==null&&Vu(m,E,w,p,!0)}}e:{if(g=f?bn(f):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=Vd;else if(zu(g))if(ja)S=Gd;else{S=Bd;var T=Wd}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Qd);if(S&&(S=S(e,f))){Ma(m,S,t,h);break e}T&&T(e,g,f),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&To(g,"number",g.value)}switch(T=f?bn(f):window,e){case"focusin":(zu(T)||T.contentEditable==="true")&&(qn=T,Ro=f,At=null);break;case"focusout":At=Ro=qn=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,Uu(m,t,h);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":Uu(m,t,h)}var C;if(Nl)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Zn?Ra(e,t)&&(x="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(La&&t.locale!=="ko"&&(Zn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Zn&&(C=Pa()):(fn=h,Ol="value"in fn?fn.value:fn.textContent,Zn=!0)),T=qr(f,x),0<T.length&&(x=new Iu(x,e,null,t,h),m.push({event:x,listeners:T}),C?x.data=C:(C=za(t),C!==null&&(x.data=C)))),(C=Fd?Ad(e,t):Ud(e,t))&&(f=qr(f,"onBeforeInput"),0<f.length&&(h=new Iu("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:f}),h.data=C))}Ga(m,n)})}function bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function qr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gt(e,t),o!=null&&r.unshift(bt(e,o,i)),o=Gt(e,n),o!=null&&r.push(bt(e,o,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,s=u.alternate,f=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&f!==null&&(u=f,i?(s=Gt(t,o),s!=null&&l.unshift(bt(t,s,u))):i||(s=Gt(t,o),s!=null&&l.push(bt(t,s,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var bd=/\r\n?/g,e0=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(bd,`
`).replace(e0,"")}function kr(e,n,t){if(n=Wu(n),Wu(e)!==n&&t)throw Error(k(425))}function Jr(){}var Mo=null,jo=null;function Fo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ao=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Bu=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bu<"u"?function(e){return Bu.resolve(null).then(e).catch(r0)}:Ao;function r0(e){setTimeout(function(){throw e})}function qi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Yt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Yt(n)}function vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Qu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Tt,er="__reactProps$"+Tt,en="__reactContainer$"+Tt,Uo="__reactEvents$"+Tt,i0="__reactListeners$"+Tt,o0="__reactHandles$"+Tt;function Pn(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[en]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Qu(e);e!==null;){if(t=e[Qe])return t;e=Qu(e)}return n}e=t,t=e.parentNode}return null}function cr(e){return e=e[Qe]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function wi(e){return e[er]||null}var $o=[],et=-1;function xn(e){return{current:e}}function V(e){0>et||(e.current=$o[et],$o[et]=null,et--)}function $(e,n){et++,$o[et]=e.current,e.current=n}var kn={},ce=xn(kn),ve=xn(!1),jn=kn;function pt(e,n){var t=e.type.contextTypes;if(!t)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function br(){V(ve),V(ce)}function Gu(e,n,t){if(ce.current!==kn)throw Error(k(168));$(ce,n),$(ve,t)}function Xa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,Wf(e)||"Unknown",i));return K({},t,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,jn=ce.current,$(ce,e),$(ve,ve.current),!0}function Ku(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Xa(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,V(ve),V(ce),$(ce,e)):V(ve),$(ve,t)}var Ye=null,Si=!1,Ji=!1;function Ya(e){Ye===null?Ye=[e]:Ye.push(e)}function l0(e){Si=!0,Ya(e)}function On(){if(!Ji&&Ye!==null){Ji=!0;var e=0,n=F;try{var t=Ye;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ye=null,Si=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),Sa(El,On),i}finally{F=n,Ji=!1}}return null}var nt=[],tt=0,ni=null,ti=0,Ne=[],Ie=0,Fn=null,Ze=1,qe="";function Nn(e,n){nt[tt++]=ti,nt[tt++]=ni,ni=e,ti=n}function Za(e,n,t){Ne[Ie++]=Ze,Ne[Ie++]=qe,Ne[Ie++]=Fn,Fn=e;var r=Ze;e=qe;var i=32-$e(r)-1;r&=~(1<<i),t+=1;var o=32-$e(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ze=1<<32-$e(n)+i|t<<i|r,qe=o+e}else Ze=1<<o|t<<i|r,qe=e}function Pl(e){e.return!==null&&(Nn(e,1),Za(e,1,0))}function Ll(e){for(;e===ni;)ni=nt[--tt],nt[tt]=null,ti=nt[--tt],nt[tt]=null;for(;e===Fn;)Fn=Ne[--Ie],Ne[Ie]=null,qe=Ne[--Ie],Ne[Ie]=null,Ze=Ne[--Ie],Ne[Ie]=null}var ke=null,Ee=null,W=!1,Ue=null;function qa(e,n){var t=Le(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ke=e,Ee=vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ke=e,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Fn!==null?{id:Ze,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Le(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ke=e,Ee=null,!0):!1;default:return!1}}function Ho(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vo(e){if(W){var n=Ee;if(n){var t=n;if(!Xu(e,n)){if(Ho(e))throw Error(k(418));n=vn(t.nextSibling);var r=ke;n&&Xu(e,n)?qa(r,t):(e.flags=e.flags&-4097|2,W=!1,ke=e)}}else{if(Ho(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,ke=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Cr(e){if(e!==ke)return!1;if(!W)return Yu(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fo(e.type,e.memoizedProps)),n&&(n=Ee)){if(Ho(e))throw Ja(),Error(k(418));for(;n;)qa(e,n),n=vn(n.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ee=vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ee=null}}else Ee=ke?vn(e.stateNode.nextSibling):null;return!0}function Ja(){for(var e=Ee;e;)e=vn(e.nextSibling)}function ht(){Ee=ke=null,W=!1}function Rl(e){Ue===null?Ue=[e]:Ue.push(e)}var u0=rn.ReactCurrentBatchConfig;function _t(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function xr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Zu(e){var n=e._init;return n(e._payload)}function ba(e){function n(c,a){if(e){var d=c.deletions;d===null?(c.deletions=[a],c.flags|=16):d.push(a)}}function t(c,a){if(!e)return null;for(;a!==null;)n(c,a),a=a.sibling;return null}function r(c,a){for(c=new Map;a!==null;)a.key!==null?c.set(a.key,a):c.set(a.index,a),a=a.sibling;return c}function i(c,a){return c=Tn(c,a),c.index=0,c.sibling=null,c}function o(c,a,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<a?(c.flags|=2,a):d):(c.flags|=2,a)):(c.flags|=1048576,a)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function u(c,a,d,y){return a===null||a.tag!==6?(a=oo(d,c.mode,y),a.return=c,a):(a=i(a,d),a.return=c,a)}function s(c,a,d,y){var S=d.type;return S===Yn?h(c,a,d.props.children,y,d.key):a!==null&&(a.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===un&&Zu(S)===a.type)?(y=i(a,d.props),y.ref=_t(c,a,d),y.return=c,y):(y=Vr(d.type,d.key,d.props,null,c.mode,y),y.ref=_t(c,a,d),y.return=c,y)}function f(c,a,d,y){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=lo(d,c.mode,y),a.return=c,a):(a=i(a,d.children||[]),a.return=c,a)}function h(c,a,d,y,S){return a===null||a.tag!==7?(a=Mn(d,c.mode,y,S),a.return=c,a):(a=i(a,d),a.return=c,a)}function m(c,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=oo(""+a,c.mode,d),a.return=c,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case hr:return d=Vr(a.type,a.key,a.props,null,c.mode,d),d.ref=_t(c,null,a),d.return=c,d;case Xn:return a=lo(a,c.mode,d),a.return=c,a;case un:var y=a._init;return m(c,y(a._payload),d)}if(Pt(a)||Et(a))return a=Mn(a,c.mode,d,null),a.return=c,a;xr(c,a)}return null}function g(c,a,d,y){var S=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:u(c,a,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return d.key===S?s(c,a,d,y):null;case Xn:return d.key===S?f(c,a,d,y):null;case un:return S=d._init,g(c,a,S(d._payload),y)}if(Pt(d)||Et(d))return S!==null?null:h(c,a,d,y,null);xr(c,d)}return null}function v(c,a,d,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(d)||null,u(a,c,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hr:return c=c.get(y.key===null?d:y.key)||null,s(a,c,y,S);case Xn:return c=c.get(y.key===null?d:y.key)||null,f(a,c,y,S);case un:var T=y._init;return v(c,a,d,T(y._payload),S)}if(Pt(y)||Et(y))return c=c.get(d)||null,h(a,c,y,S,null);xr(a,y)}return null}function w(c,a,d,y){for(var S=null,T=null,C=a,x=a=0,R=null;C!==null&&x<d.length;x++){C.index>x?(R=C,C=null):R=C.sibling;var D=g(c,C,d[x],y);if(D===null){C===null&&(C=R);break}e&&C&&D.alternate===null&&n(c,C),a=o(D,a,x),T===null?S=D:T.sibling=D,T=D,C=R}if(x===d.length)return t(c,C),W&&Nn(c,x),S;if(C===null){for(;x<d.length;x++)C=m(c,d[x],y),C!==null&&(a=o(C,a,x),T===null?S=C:T.sibling=C,T=C);return W&&Nn(c,x),S}for(C=r(c,C);x<d.length;x++)R=v(C,c,x,d[x],y),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?x:R.key),a=o(R,a,x),T===null?S=R:T.sibling=R,T=R);return e&&C.forEach(function(X){return n(c,X)}),W&&Nn(c,x),S}function p(c,a,d,y){var S=Et(d);if(typeof S!="function")throw Error(k(150));if(d=S.call(d),d==null)throw Error(k(151));for(var T=S=null,C=a,x=a=0,R=null,D=d.next();C!==null&&!D.done;x++,D=d.next()){C.index>x?(R=C,C=null):R=C.sibling;var X=g(c,C,D.value,y);if(X===null){C===null&&(C=R);break}e&&C&&X.alternate===null&&n(c,C),a=o(X,a,x),T===null?S=X:T.sibling=X,T=X,C=R}if(D.done)return t(c,C),W&&Nn(c,x),S;if(C===null){for(;!D.done;x++,D=d.next())D=m(c,D.value,y),D!==null&&(a=o(D,a,x),T===null?S=D:T.sibling=D,T=D);return W&&Nn(c,x),S}for(C=r(c,C);!D.done;x++,D=d.next())D=v(C,c,x,D.value,y),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?x:D.key),a=o(D,a,x),T===null?S=D:T.sibling=D,T=D);return e&&C.forEach(function(ne){return n(c,ne)}),W&&Nn(c,x),S}function E(c,a,d,y){if(typeof d=="object"&&d!==null&&d.type===Yn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:e:{for(var S=d.key,T=a;T!==null;){if(T.key===S){if(S=d.type,S===Yn){if(T.tag===7){t(c,T.sibling),a=i(T,d.props.children),a.return=c,c=a;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===un&&Zu(S)===T.type){t(c,T.sibling),a=i(T,d.props),a.ref=_t(c,T,d),a.return=c,c=a;break e}t(c,T);break}else n(c,T);T=T.sibling}d.type===Yn?(a=Mn(d.props.children,c.mode,y,d.key),a.return=c,c=a):(y=Vr(d.type,d.key,d.props,null,c.mode,y),y.ref=_t(c,a,d),y.return=c,c=y)}return l(c);case Xn:e:{for(T=d.key;a!==null;){if(a.key===T)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){t(c,a.sibling),a=i(a,d.children||[]),a.return=c,c=a;break e}else{t(c,a);break}else n(c,a);a=a.sibling}a=lo(d,c.mode,y),a.return=c,c=a}return l(c);case un:return T=d._init,E(c,a,T(d._payload),y)}if(Pt(d))return w(c,a,d,y);if(Et(d))return p(c,a,d,y);xr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(t(c,a.sibling),a=i(a,d),a.return=c,c=a):(t(c,a),a=oo(d,c.mode,y),a.return=c,c=a),l(c)):t(c,a)}return E}var gt=ba(!0),ec=ba(!1),ri=xn(null),ii=null,rt=null,zl=null;function Ml(){zl=rt=ii=null}function jl(e){var n=ri.current;V(ri),e._currentValue=n}function Wo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){ii=e,zl=rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function ze(e){var n=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:n,next:null},rt===null){if(ii===null)throw Error(k(308));rt=e,ii.dependencies={lanes:0,firstContext:e}}else rt=rt.next=e;return n}var Ln=null;function Fl(e){Ln===null?Ln=[e]:Ln.push(e)}function nc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Fl(n)):(t.next=i.next,i.next=t),n.interleaved=t,nn(e,r)}function nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var sn=!1;function Al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,nn(e,t)}return i=r.interleaved,i===null?(n.next=n,Fl(r)):(n.next=i.next,i.next=n),r.interleaved=n,nn(e,t)}function jr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}function qu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function oi(e,n,t,r){var i=e.updateQueue;sn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,f=s.next;s.next=null,l===null?o=f:l.next=f,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==l&&(u===null?h.firstBaseUpdate=f:u.next=f,h.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,h=f=s=null,u=o;do{var g=u.lane,v=u.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,p=u;switch(g=n,v=t,p.tag){case 1:if(w=p.payload,typeof w=="function"){m=w.call(v,m,g);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=p.payload,g=typeof w=="function"?w.call(v,m,g):w,g==null)break e;m=K({},m,g);break e;case 2:sn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[u]:g.push(u))}else v={eventTime:v,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(f=h=v,s=m):h=h.next=v,l|=g;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;g=u,u=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=f,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Un|=l,e.lanes=l,e.memoizedState=m}}function Ju(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var fr={},Ke=xn(fr),nr=xn(fr),tr=xn(fr);function Rn(e){if(e===fr)throw Error(k(174));return e}function Ul(e,n){switch($(tr,n),$(nr,e),$(Ke,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ko(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ko(n,e)}V(Ke),$(Ke,n)}function mt(){V(Ke),V(nr),V(tr)}function rc(e){Rn(tr.current);var n=Rn(Ke.current),t=ko(n,e.type);n!==t&&($(nr,e),$(Ke,t))}function $l(e){nr.current===e&&(V(Ke),V(nr))}var Q=xn(0);function li(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var bi=[];function Hl(){for(var e=0;e<bi.length;e++)bi[e]._workInProgressVersionPrimary=null;bi.length=0}var Fr=rn.ReactCurrentDispatcher,eo=rn.ReactCurrentBatchConfig,An=0,G=null,b=null,te=null,ui=!1,Ut=!1,rr=0,s0=0;function ue(){throw Error(k(321))}function Vl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ve(e[t],n[t]))return!1;return!0}function Wl(e,n,t,r,i,o){if(An=o,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fr.current=e===null||e.memoizedState===null?d0:p0,e=t(r,i),Ut){o=0;do{if(Ut=!1,rr=0,25<=o)throw Error(k(301));o+=1,te=b=null,n.updateQueue=null,Fr.current=h0,e=t(r,i)}while(Ut)}if(Fr.current=si,n=b!==null&&b.next!==null,An=0,te=b=G=null,ui=!1,n)throw Error(k(300));return e}function Bl(){var e=rr!==0;return rr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Me(){if(b===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var n=te===null?G.memoizedState:te.next;if(n!==null)te=n,b=e;else{if(e===null)throw Error(k(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function ir(e,n){return typeof n=="function"?n(e):n}function no(e){var n=Me(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=b,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,s=null,f=o;do{var h=f.lane;if((An&h)===h)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(u=s=m,l=r):s=s.next=m,G.lanes|=h,Un|=h}f=f.next}while(f!==null&&f!==o);s===null?l=r:s.next=u,Ve(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,Un|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function to(e){var n=Me(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ve(o,n.memoizedState)||(me=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ic(){}function oc(e,n){var t=G,r=Me(),i=n(),o=!Ve(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,Ql(sc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,or(9,uc.bind(null,t,r,i,n),void 0,null),re===null)throw Error(k(349));An&30||lc(t,n,i)}return i}function lc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function uc(e,n,t,r){n.value=t,n.getSnapshot=r,ac(n)&&cc(e)}function sc(e,n,t){return t(function(){ac(n)&&cc(e)})}function ac(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ve(e,t)}catch{return!0}}function cc(e){var n=nn(e,1);n!==null&&He(n,e,1,-1)}function bu(e){var n=Be();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},n.queue=e,e=e.dispatch=f0.bind(null,G,e),[n.memoizedState,e]}function or(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function fc(){return Me().memoizedState}function Ar(e,n,t,r){var i=Be();G.flags|=e,i.memoizedState=or(1|n,t,void 0,r===void 0?null:r)}function Ti(e,n,t,r){var i=Me();r=r===void 0?null:r;var o=void 0;if(b!==null){var l=b.memoizedState;if(o=l.destroy,r!==null&&Vl(r,l.deps)){i.memoizedState=or(n,t,o,r);return}}G.flags|=e,i.memoizedState=or(1|n,t,o,r)}function es(e,n){return Ar(8390656,8,e,n)}function Ql(e,n){return Ti(2048,8,e,n)}function dc(e,n){return Ti(4,2,e,n)}function pc(e,n){return Ti(4,4,e,n)}function hc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gc(e,n,t){return t=t!=null?t.concat([e]):null,Ti(4,4,hc.bind(null,n,e),t)}function Gl(){}function mc(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function vc(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Vl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function yc(e,n,t){return An&21?(Ve(t,n)||(t=ka(),G.lanes|=t,Un|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function a0(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=eo.transition;eo.transition={};try{e(!1),n()}finally{F=t,eo.transition=r}}function wc(){return Me().memoizedState}function c0(e,n,t){var r=Sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sc(e))Tc(n,t);else if(t=nc(e,n,t,r),t!==null){var i=de();He(t,e,r,i),Ec(t,n,r)}}function f0(e,n,t){var r=Sn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))Tc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,Ve(u,l)){var s=n.interleaved;s===null?(i.next=i,Fl(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=nc(e,n,i,r),t!==null&&(i=de(),He(t,e,r,i),Ec(t,n,r))}}function Sc(e){var n=e.alternate;return e===G||n!==null&&n===G}function Tc(e,n){Ut=ui=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ec(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}var si={readContext:ze,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},d0={readContext:ze,useCallback:function(e,n){return Be().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:es,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ar(4194308,4,hc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ar(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ar(4,2,e,n)},useMemo:function(e,n){var t=Be();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Be();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=c0.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=Be();return e={current:e},n.memoizedState=e},useState:bu,useDebugValue:Gl,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=bu(!1),n=e[0];return e=a0.bind(null,e[1]),Be().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,i=Be();if(W){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),re===null)throw Error(k(349));An&30||lc(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,es(sc.bind(null,r,o,e),[e]),r.flags|=2048,or(9,uc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Be(),n=re.identifierPrefix;if(W){var t=qe,r=Ze;t=(r&~(1<<32-$e(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=rr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=s0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},p0={readContext:ze,useCallback:mc,useContext:ze,useEffect:Ql,useImperativeHandle:gc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:vc,useReducer:no,useRef:fc,useState:function(){return no(ir)},useDebugValue:Gl,useDeferredValue:function(e){var n=Me();return yc(n,b.memoizedState,e)},useTransition:function(){var e=no(ir)[0],n=Me().memoizedState;return[e,n]},useMutableSource:ic,useSyncExternalStore:oc,useId:wc,unstable_isNewReconciler:!1},h0={readContext:ze,useCallback:mc,useContext:ze,useEffect:Ql,useImperativeHandle:gc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:vc,useReducer:to,useRef:fc,useState:function(){return to(ir)},useDebugValue:Gl,useDeferredValue:function(e){var n=Me();return b===null?n.memoizedState=e:yc(n,b.memoizedState,e)},useTransition:function(){var e=to(ir)[0],n=Me().memoizedState;return[e,n]},useMutableSource:ic,useSyncExternalStore:oc,useId:wc,unstable_isNewReconciler:!1};function Fe(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Bo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=de(),i=Sn(e),o=Je(r,i);o.payload=n,t!=null&&(o.callback=t),n=yn(e,o,i),n!==null&&(He(n,e,i,r),jr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=de(),i=Sn(e),o=Je(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=yn(e,o,i),n!==null&&(He(n,e,i,r),jr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=de(),r=Sn(e),i=Je(t,r);i.tag=2,n!=null&&(i.callback=n),n=yn(e,i,r),n!==null&&(He(n,e,r,t),jr(n,e,r))}};function ns(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!qt(t,r)||!qt(i,o):!0}function kc(e,n,t){var r=!1,i=kn,o=n.contextType;return typeof o=="object"&&o!==null?o=ze(o):(i=ye(n)?jn:ce.current,r=n.contextTypes,o=(r=r!=null)?pt(e,i):kn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ei,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function ts(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ei.enqueueReplaceState(n,n.state,null)}function Qo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Al(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=ze(o):(o=ye(n)?jn:ce.current,i.context=pt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Bo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ei.enqueueReplaceState(i,i.state,null),oi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vt(e,n){try{var t="",r=n;do t+=Vf(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function ro(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Go(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function Cc(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ci||(ci=!0,tl=r),Go(e,n)},t}function xc(e,n,t){t=Je(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Go(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Go(e,n),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function rs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new g0;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=N0.bind(null,e,n,t),n.then(e,e))}function is(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function os(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,yn(t,n,1))),t.lanes|=1),e)}var m0=rn.ReactCurrentOwner,me=!1;function fe(e,n,t,r){n.child=e===null?ec(n,null,t,r):gt(n,e.child,t,r)}function ls(e,n,t,r,i){t=t.render;var o=n.ref;return ct(n,i),r=Wl(e,n,t,r,o,i),t=Bl(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,tn(e,n,i)):(W&&t&&Pl(n),n.flags|=1,fe(e,n,r,i),n.child)}function us(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!eu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Oc(e,n,o,r,i)):(e=Vr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:qt,t(l,r)&&e.ref===n.ref)return tn(e,n,i)}return n.flags|=1,e=Tn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Oc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(qt(o,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,tn(e,n,i)}return Ko(e,n,t,r,i)}function _c(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(ot,Te),Te|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(ot,Te),Te|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,$(ot,Te),Te|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,$(ot,Te),Te|=r;return fe(e,n,i,t),n.child}function Dc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ko(e,n,t,r,i){var o=ye(t)?jn:ce.current;return o=pt(n,o),ct(n,i),t=Wl(e,n,t,r,o,i),r=Bl(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,tn(e,n,i)):(W&&r&&Pl(n),n.flags|=1,fe(e,n,t,i),n.child)}function ss(e,n,t,r,i){if(ye(t)){var o=!0;ei(n)}else o=!1;if(ct(n,i),n.stateNode===null)Ur(e,n),kc(n,t,r),Qo(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var s=l.context,f=t.contextType;typeof f=="object"&&f!==null?f=ze(f):(f=ye(t)?jn:ce.current,f=pt(n,f));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==f)&&ts(n,l,r,f),sn=!1;var g=n.memoizedState;l.state=g,oi(n,r,l,i),s=n.memoizedState,u!==r||g!==s||ve.current||sn?(typeof h=="function"&&(Bo(n,t,h,r),s=n.memoizedState),(u=sn||ns(n,t,u,r,g,s,f))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,tc(e,n),u=n.memoizedProps,f=n.type===n.elementType?u:Fe(n.type,u),l.props=f,m=n.pendingProps,g=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=ye(t)?jn:ce.current,s=pt(n,s));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||g!==s)&&ts(n,l,r,s),sn=!1,g=n.memoizedState,l.state=g,oi(n,r,l,i);var w=n.memoizedState;u!==m||g!==w||ve.current||sn?(typeof v=="function"&&(Bo(n,t,v,r),w=n.memoizedState),(f=sn||ns(n,t,f,r,g,w,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),l.props=r,l.state=w,l.context=s,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Xo(e,n,t,r,o,i)}function Xo(e,n,t,r,i,o){Dc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Ku(n,t,!1),tn(e,n,o);r=n.stateNode,m0.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=gt(n,e.child,null,o),n.child=gt(n,null,u,o)):fe(e,n,u,o),n.memoizedState=r.state,i&&Ku(n,t,!0),n.child}function Nc(e){var n=e.stateNode;n.pendingContext?Gu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gu(e,n.context,!1),Ul(e,n.containerInfo)}function as(e,n,t,r,i){return ht(),Rl(i),n.flags|=256,fe(e,n,t,r),n.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Zo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ic(e,n,t){var r=n.pendingProps,i=Q.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(Q,i&1),e===null)return Vo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=xi(l,r,0,null),e=Mn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Zo(t),n.memoizedState=Yo,e):Kl(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return v0(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Tn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Tn(u,o):(o=Mn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Zo(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Yo,r}return o=e.child,e=o.sibling,r=Tn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Kl(e,n){return n=xi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Or(e,n,t,r){return r!==null&&Rl(r),gt(n,e.child,null,t),e=Kl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function v0(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=ro(Error(k(422))),Or(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=xi({mode:"visible",children:r.children},i,0,null),o=Mn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&gt(n,e.child,null,l),n.child.memoizedState=Zo(l),n.memoizedState=Yo,o);if(!(n.mode&1))return Or(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(k(419)),r=ro(o,r,void 0),Or(e,n,l,r)}if(u=(l&e.childLanes)!==0,me||u){if(r=re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nn(e,i),He(r,e,i,-1))}return bl(),r=ro(Error(k(421))),Or(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=I0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ee=vn(i.nextSibling),ke=n,W=!0,Ue=null,e!==null&&(Ne[Ie++]=Ze,Ne[Ie++]=qe,Ne[Ie++]=Fn,Ze=e.id,qe=e.overflow,Fn=n),n=Kl(n,r.children),n.flags|=4096,n)}function cs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Wo(e.return,n,t)}function io(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Pc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,n,r.children,t),r=Q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cs(e,t,n);else if(e.tag===19)cs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(Q,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),io(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}io(n,!0,t,null,o);break;case"together":io(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ur(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Un|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Tn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function y0(e,n,t){switch(n.tag){case 3:Nc(n),ht();break;case 5:rc(n);break;case 1:ye(n.type)&&ei(n);break;case 4:Ul(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;$(ri,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?($(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?Ic(e,n,t):($(Q,Q.current&1),e=tn(e,n,t),e!==null?e.sibling:null);$(Q,Q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Pc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(Q,Q.current),r)break;return null;case 22:case 23:return n.lanes=0,_c(e,n,t)}return tn(e,n,t)}var Lc,qo,Rc,zc;Lc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qo=function(){};Rc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Rn(Ke.current);var o=null;switch(t){case"input":i=wo(e,i),r=wo(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Eo(e,i),r=Eo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}Co(t,r);var l;t=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Bt.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&s!==u&&(s!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(f,t)),t=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Bt.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&H("scroll",e),o||u===s||(o=[])):(o=o||[]).push(f,s))}t&&(o=o||[]).push("style",t);var f=o;(n.updateQueue=f)&&(n.flags|=4)}};zc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Dt(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function w0(e,n,t){var r=n.pendingProps;switch(Ll(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ye(n.type)&&br(),se(n),null;case 3:return r=n.stateNode,mt(),V(ve),V(ce),Hl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ue!==null&&(ol(Ue),Ue=null))),qo(e,n),se(n),null;case 5:$l(n);var i=Rn(tr.current);if(t=n.type,e!==null&&n.stateNode!=null)Rc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return se(n),null}if(e=Rn(Ke.current),Cr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Qe]=n,r[er]=o,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Rt.length;i++)H(Rt[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":wu(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Tu(r,o),H("invalid",r)}Co(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,u,e),i=["children",""+u]):Bt.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&H("scroll",r)}switch(t){case"input":gr(r),Su(r,o,!0);break;case"textarea":gr(r),Eu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Qe]=n,e[er]=r,Lc(e,n,!1,!1),n.stateNode=e;e:{switch(l=xo(t,r),t){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rt.length;i++)H(Rt[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":wu(e,r),i=wo(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":Tu(e,r),i=Eo(e,r),H("invalid",e);break;default:i=r}Co(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?fa(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&aa(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Qt(e,s):typeof s=="number"&&Qt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&vl(e,o,s,l))}switch(t){case"input":gr(e),Su(e,r,!1);break;case"textarea":gr(e),Eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?lt(e,!!r.multiple,o,!1):r.defaultValue!=null&&lt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)zc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Rn(tr.current),Rn(Ke.current),Cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(o=r.nodeValue!==t)&&(e=ke,e!==null))switch(e.tag){case 3:kr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return se(n),null;case 13:if(V(Q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ee!==null&&n.mode&1&&!(n.flags&128))Ja(),ht(),n.flags|=98560,o=!1;else if(o=Cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Qe]=n}else ht(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),o=!1}else Ue!==null&&(ol(Ue),Ue=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?ee===0&&(ee=3):bl())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return mt(),qo(e,n),e===null&&Jt(n.stateNode.containerInfo),se(n),null;case 10:return jl(n.type._context),se(n),null;case 17:return ye(n.type)&&br(),se(n),null;case 19:if(V(Q),o=n.memoizedState,o===null)return se(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Dt(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=li(e),l!==null){for(n.flags|=128,Dt(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(Q,Q.current&1|2),n.child}e=e.sibling}o.tail!==null&&Z()>yt&&(n.flags|=128,r=!0,Dt(o,!1),n.lanes=4194304)}else{if(!r)if(e=li(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Dt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!W)return se(n),null}else 2*Z()-o.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,Dt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Z(),n.sibling=null,t=Q.current,$(Q,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return Jl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Te&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function S0(e,n){switch(Ll(n),n.tag){case 1:return ye(n.type)&&br(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mt(),V(ve),V(ce),Hl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $l(n),null;case 13:if(V(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));ht()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(Q),null;case 4:return mt(),null;case 10:return jl(n.type._context),null;case 22:case 23:return Jl(),null;case 24:return null;default:return null}}var _r=!1,ae=!1,T0=typeof WeakSet=="function"?WeakSet:Set,_=null;function it(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Y(e,n,r)}else t.current=null}function Jo(e,n,t){try{t()}catch(r){Y(e,n,r)}}var fs=!1;function E0(e,n){if(Mo=Yr,e=Ua(),Il(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,s=-1,f=0,h=0,m=e,g=null;n:for(;;){for(var v;m!==t||i!==0&&m.nodeType!==3||(u=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break n;if(g===t&&++f===i&&(u=l),g===o&&++h===r&&(s=l),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(jo={focusedElem:e,selectionRange:t},Yr=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var p=w.memoizedProps,E=w.memoizedState,c=n.stateNode,a=c.getSnapshotBeforeUpdate(n.elementType===n.type?p:Fe(n.type,p),E);c.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){Y(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return w=fs,fs=!1,w}function $t(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jo(n,t,o)}i=i.next}while(i!==r)}}function ki(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function bo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Mc(e){var n=e.alternate;n!==null&&(e.alternate=null,Mc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[er],delete n[Uo],delete n[i0],delete n[o0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jc(e){return e.tag===5||e.tag===3||e.tag===4}function ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(el(e,n,t),e=e.sibling;e!==null;)el(e,n,t),e=e.sibling}function nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nl(e,n,t),e=e.sibling;e!==null;)nl(e,n,t),e=e.sibling}var ie=null,Ae=!1;function ln(e,n,t){for(t=t.child;t!==null;)Fc(e,n,t),t=t.sibling}function Fc(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(gi,t)}catch{}switch(t.tag){case 5:ae||it(t,n);case 6:var r=ie,i=Ae;ie=null,ln(e,n,t),ie=r,Ae=i,ie!==null&&(Ae?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(Ae?(e=ie,t=t.stateNode,e.nodeType===8?qi(e.parentNode,t):e.nodeType===1&&qi(e,t),Yt(e)):qi(ie,t.stateNode));break;case 4:r=ie,i=Ae,ie=t.stateNode.containerInfo,Ae=!0,ln(e,n,t),ie=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Jo(t,n,l),i=i.next}while(i!==r)}ln(e,n,t);break;case 1:if(!ae&&(it(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){Y(t,n,u)}ln(e,n,t);break;case 21:ln(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,ln(e,n,t),ae=r):ln(e,n,t);break;default:ln(e,n,t)}}function ps(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new T0),n.forEach(function(r){var i=P0.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function je(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:ie=u.stateNode,Ae=!1;break e;case 3:ie=u.stateNode.containerInfo,Ae=!0;break e;case 4:ie=u.stateNode.containerInfo,Ae=!0;break e}u=u.return}if(ie===null)throw Error(k(160));Fc(o,l,i),ie=null,Ae=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(f){Y(i,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ac(n,e),n=n.sibling}function Ac(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(n,e),We(e),r&4){try{$t(3,e,e.return),ki(3,e)}catch(p){Y(e,e.return,p)}try{$t(5,e,e.return)}catch(p){Y(e,e.return,p)}}break;case 1:je(n,e),We(e),r&512&&t!==null&&it(t,t.return);break;case 5:if(je(n,e),We(e),r&512&&t!==null&&it(t,t.return),e.flags&32){var i=e.stateNode;try{Qt(i,"")}catch(p){Y(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&la(i,o),xo(u,l);var f=xo(u,o);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?fa(i,m):h==="dangerouslySetInnerHTML"?aa(i,m):h==="children"?Qt(i,m):vl(i,h,m,f)}switch(u){case"input":So(i,o);break;case"textarea":ua(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?lt(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?lt(i,!!o.multiple,o.defaultValue,!0):lt(i,!!o.multiple,o.multiple?[]:"",!1))}i[er]=o}catch(p){Y(e,e.return,p)}}break;case 6:if(je(n,e),We(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){Y(e,e.return,p)}}break;case 3:if(je(n,e),We(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Yt(n.containerInfo)}catch(p){Y(e,e.return,p)}break;case 4:je(n,e),We(e);break;case 13:je(n,e),We(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zl=Z())),r&4&&ps(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(f=ae)||h,je(n,e),ae=f):je(n,e),We(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(m=_=h;_!==null;){switch(g=_,v=g.child,g.tag){case 0:case 11:case 14:case 15:$t(4,g,g.return);break;case 1:it(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(p){Y(r,t,p)}}break;case 5:it(g,g.return);break;case 22:if(g.memoizedState!==null){gs(m);continue}}v!==null?(v.return=g,_=v):gs(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ca("display",l))}catch(p){Y(e,e.return,p)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(p){Y(e,e.return,p)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:je(n,e),We(e),r&4&&ps(e);break;case 21:break;default:je(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(jc(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qt(i,""),r.flags&=-33);var o=ds(e);nl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ds(e);el(e,u,l);break;default:throw Error(k(161))}}catch(s){Y(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function k0(e,n,t){_=e,Uc(e)}function Uc(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||_r;if(!l){var u=i.alternate,s=u!==null&&u.memoizedState!==null||ae;u=_r;var f=ae;if(_r=l,(ae=s)&&!f)for(_=i;_!==null;)l=_,s=l.child,l.tag===22&&l.memoizedState!==null?ms(i):s!==null?(s.return=l,_=s):ms(i);for(;o!==null;)_=o,Uc(o),o=o.sibling;_=i,_r=u,ae=f}hs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):hs(e)}}function hs(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||ki(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Fe(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ju(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ju(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Yt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||n.flags&512&&bo(n)}catch(g){Y(n,n.return,g)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function gs(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function ms(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ki(4,n)}catch(s){Y(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){Y(n,i,s)}}var o=n.return;try{bo(n)}catch(s){Y(n,o,s)}break;case 5:var l=n.return;try{bo(n)}catch(s){Y(n,l,s)}}}catch(s){Y(n,n.return,s)}if(n===e){_=null;break}var u=n.sibling;if(u!==null){u.return=n.return,_=u;break}_=n.return}}var C0=Math.ceil,ai=rn.ReactCurrentDispatcher,Xl=rn.ReactCurrentOwner,Re=rn.ReactCurrentBatchConfig,M=0,re=null,J=null,oe=0,Te=0,ot=xn(0),ee=0,lr=null,Un=0,Ci=0,Yl=0,Ht=null,ge=null,Zl=0,yt=1/0,Xe=null,ci=!1,tl=null,wn=null,Dr=!1,dn=null,fi=0,Vt=0,rl=null,$r=-1,Hr=0;function de(){return M&6?Z():$r!==-1?$r:$r=Z()}function Sn(e){return e.mode&1?M&2&&oe!==0?oe&-oe:u0.transition!==null?(Hr===0&&(Hr=ka()),Hr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ia(e.type)),e):1}function He(e,n,t,r){if(50<Vt)throw Vt=0,rl=null,Error(k(185));sr(e,t,r),(!(M&2)||e!==re)&&(e===re&&(!(M&2)&&(Ci|=t),ee===4&&cn(e,oe)),we(e,r),t===1&&M===0&&!(n.mode&1)&&(yt=Z()+500,Si&&On()))}function we(e,n){var t=e.callbackNode;ud(e,n);var r=Xr(e,e===re?oe:0);if(r===0)t!==null&&xu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&xu(t),n===1)e.tag===0?l0(vs.bind(null,e)):Ya(vs.bind(null,e)),t0(function(){!(M&6)&&On()}),t=null;else{switch(Ca(r)){case 1:t=El;break;case 4:t=Ta;break;case 16:t=Kr;break;case 536870912:t=Ea;break;default:t=Kr}t=Kc(t,$c.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function $c(e,n){if($r=-1,Hr=0,M&6)throw Error(k(327));var t=e.callbackNode;if(ft()&&e.callbackNode!==t)return null;var r=Xr(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=di(e,r);else{n=r;var i=M;M|=2;var o=Vc();(re!==e||oe!==n)&&(Xe=null,yt=Z()+500,zn(e,n));do try{_0();break}catch(u){Hc(e,u)}while(!0);Ml(),ai.current=o,M=i,J!==null?n=0:(re=null,oe=0,n=ee)}if(n!==0){if(n===2&&(i=Io(e),i!==0&&(r=i,n=il(e,i))),n===1)throw t=lr,zn(e,0),cn(e,r),we(e,Z()),t;if(n===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!x0(i)&&(n=di(e,r),n===2&&(o=Io(e),o!==0&&(r=o,n=il(e,o))),n===1))throw t=lr,zn(e,0),cn(e,r),we(e,Z()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:In(e,ge,Xe);break;case 3:if(cn(e,r),(r&130023424)===r&&(n=Zl+500-Z(),10<n)){if(Xr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ao(In.bind(null,e,ge,Xe),n);break}In(e,ge,Xe);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-$e(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*C0(r/1960))-r,10<r){e.timeoutHandle=Ao(In.bind(null,e,ge,Xe),r);break}In(e,ge,Xe);break;case 5:In(e,ge,Xe);break;default:throw Error(k(329))}}}return we(e,Z()),e.callbackNode===t?$c.bind(null,e):null}function il(e,n){var t=Ht;return e.current.memoizedState.isDehydrated&&(zn(e,n).flags|=256),e=di(e,n),e!==2&&(n=ge,ge=t,n!==null&&ol(n)),e}function ol(e){ge===null?ge=e:ge.push.apply(ge,e)}function x0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ve(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cn(e,n){for(n&=~Yl,n&=~Ci,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-$e(n),r=1<<t;e[t]=-1,n&=~r}}function vs(e){if(M&6)throw Error(k(327));ft();var n=Xr(e,0);if(!(n&1))return we(e,Z()),null;var t=di(e,n);if(e.tag!==0&&t===2){var r=Io(e);r!==0&&(n=r,t=il(e,r))}if(t===1)throw t=lr,zn(e,0),cn(e,n),we(e,Z()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,In(e,ge,Xe),we(e,Z()),null}function ql(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(yt=Z()+500,Si&&On())}}function $n(e){dn!==null&&dn.tag===0&&!(M&6)&&ft();var n=M;M|=1;var t=Re.transition,r=F;try{if(Re.transition=null,F=1,e)return e()}finally{F=r,Re.transition=t,M=n,!(M&6)&&On()}}function Jl(){Te=ot.current,V(ot)}function zn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,n0(t)),J!==null)for(t=J.return;t!==null;){var r=t;switch(Ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&br();break;case 3:mt(),V(ve),V(ce),Hl();break;case 5:$l(r);break;case 4:mt();break;case 13:V(Q);break;case 19:V(Q);break;case 10:jl(r.type._context);break;case 22:case 23:Jl()}t=t.return}if(re=e,J=e=Tn(e.current,null),oe=Te=n,ee=0,lr=null,Yl=Ci=Un=0,ge=Ht=null,Ln!==null){for(n=0;n<Ln.length;n++)if(t=Ln[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Ln=null}return e}function Hc(e,n){do{var t=J;try{if(Ml(),Fr.current=si,ui){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ui=!1}if(An=0,te=b=G=null,Ut=!1,rr=0,Xl.current=null,t===null||t.return===null){ee=1,lr=n,J=null;break}e:{var o=e,l=t.return,u=t,s=n;if(n=oe,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=is(l);if(v!==null){v.flags&=-257,os(v,l,u,o,n),v.mode&1&&rs(o,f,n),n=v,s=f;var w=n.updateQueue;if(w===null){var p=new Set;p.add(s),n.updateQueue=p}else w.add(s);break e}else{if(!(n&1)){rs(o,f,n),bl();break e}s=Error(k(426))}}else if(W&&u.mode&1){var E=is(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),os(E,l,u,o,n),Rl(vt(s,u));break e}}o=s=vt(s,u),ee!==4&&(ee=2),Ht===null?Ht=[o]:Ht.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=Cc(o,s,n);qu(o,c);break e;case 1:u=s;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(wn===null||!wn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=xc(o,u,n);qu(o,y);break e}}o=o.return}while(o!==null)}Bc(t)}catch(S){n=S,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function Vc(){var e=ai.current;return ai.current=si,e===null?si:e}function bl(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Un&268435455)&&!(Ci&268435455)||cn(re,oe)}function di(e,n){var t=M;M|=2;var r=Vc();(re!==e||oe!==n)&&(Xe=null,zn(e,n));do try{O0();break}catch(i){Hc(e,i)}while(!0);if(Ml(),M=t,ai.current=r,J!==null)throw Error(k(261));return re=null,oe=0,ee}function O0(){for(;J!==null;)Wc(J)}function _0(){for(;J!==null&&!Jf();)Wc(J)}function Wc(e){var n=Gc(e.alternate,e,Te);e.memoizedProps=e.pendingProps,n===null?Bc(e):J=n,Xl.current=null}function Bc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=S0(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(t=w0(t,n,Te),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);ee===0&&(ee=5)}function In(e,n,t){var r=F,i=Re.transition;try{Re.transition=null,F=1,D0(e,n,t,r)}finally{Re.transition=i,F=r}return null}function D0(e,n,t,r){do ft();while(dn!==null);if(M&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(sd(e,o),e===re&&(J=re=null,oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Dr||(Dr=!0,Kc(Kr,function(){return ft(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var l=F;F=1;var u=M;M|=4,Xl.current=null,E0(e,t),Ac(t,e),Xd(jo),Yr=!!Mo,jo=Mo=null,e.current=t,k0(t),bf(),M=u,F=l,Re.transition=o}else e.current=t;if(Dr&&(Dr=!1,dn=e,fi=i),o=e.pendingLanes,o===0&&(wn=null),td(t.stateNode),we(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=tl,tl=null,e;return fi&1&&e.tag!==0&&ft(),o=e.pendingLanes,o&1?e===rl?Vt++:(Vt=0,rl=e):Vt=0,On(),null}function ft(){if(dn!==null){var e=Ca(fi),n=Re.transition,t=F;try{if(Re.transition=null,F=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,fi=0,M&6)throw Error(k(331));var i=M;for(M|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var f=u[s];for(_=f;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:$t(8,h,o)}var m=h.child;if(m!==null)m.return=h,_=m;else for(;_!==null;){h=_;var g=h.sibling,v=h.return;if(Mc(h),h===f){_=null;break}if(g!==null){g.return=v,_=g;break}_=v}}}var w=o.alternate;if(w!==null){var p=w.child;if(p!==null){w.child=null;do{var E=p.sibling;p.sibling=null,p=E}while(p!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$t(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,_=c;break e}_=o.return}}var a=e.current;for(_=a;_!==null;){l=_;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,_=d;else e:for(l=a;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ki(9,u)}}catch(S){Y(u,u.return,S)}if(u===l){_=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,_=y;break e}_=u.return}}if(M=i,On(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(gi,e)}catch{}r=!0}return r}finally{F=t,Re.transition=n}}return!1}function ys(e,n,t){n=vt(t,n),n=Cc(e,n,1),e=yn(e,n,1),n=de(),e!==null&&(sr(e,1,n),we(e,n))}function Y(e,n,t){if(e.tag===3)ys(e,e,t);else for(;n!==null;){if(n.tag===3){ys(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=vt(t,e),e=xc(n,e,1),n=yn(n,e,1),e=de(),n!==null&&(sr(n,1,e),we(n,e));break}}n=n.return}}function N0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(oe&t)===t&&(ee===4||ee===3&&(oe&130023424)===oe&&500>Z()-Zl?zn(e,0):Yl|=t),we(e,n)}function Qc(e,n){n===0&&(e.mode&1?(n=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):n=1);var t=de();e=nn(e,n),e!==null&&(sr(e,n,t),we(e,t))}function I0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Qc(e,t)}function P0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Qc(e,t)}var Gc;Gc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,y0(e,n,t);me=!!(e.flags&131072)}else me=!1,W&&n.flags&1048576&&Za(n,ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ur(e,n),e=n.pendingProps;var i=pt(n,ce.current);ct(n,t),i=Wl(null,n,r,e,i,t);var o=Bl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(o=!0,ei(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Al(n),i.updater=Ei,n.stateNode=i,i._reactInternals=n,Qo(n,r,e,t),n=Xo(null,n,r,!0,o,t)):(n.tag=0,W&&o&&Pl(n),fe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ur(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=R0(r),e=Fe(r,e),i){case 0:n=Ko(null,n,r,e,t);break e;case 1:n=ss(null,n,r,e,t);break e;case 11:n=ls(null,n,r,e,t);break e;case 14:n=us(null,n,r,Fe(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fe(r,i),Ko(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fe(r,i),ss(e,n,r,i,t);case 3:e:{if(Nc(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,tc(e,n),oi(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=vt(Error(k(423)),n),n=as(e,n,r,t,i);break e}else if(r!==i){i=vt(Error(k(424)),n),n=as(e,n,r,t,i);break e}else for(Ee=vn(n.stateNode.containerInfo.firstChild),ke=n,W=!0,Ue=null,t=ec(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ht(),r===i){n=tn(e,n,t);break e}fe(e,n,r,t)}n=n.child}return n;case 5:return rc(n),e===null&&Vo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Fo(r,i)?l=null:o!==null&&Fo(r,o)&&(n.flags|=32),Dc(e,n),fe(e,n,l,t),n.child;case 6:return e===null&&Vo(n),null;case 13:return Ic(e,n,t);case 4:return Ul(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=gt(n,null,r,t):fe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fe(r,i),ls(e,n,r,i,t);case 7:return fe(e,n,n.pendingProps,t),n.child;case 8:return fe(e,n,n.pendingProps.children,t),n.child;case 12:return fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,$(ri,r._currentValue),r._currentValue=l,o!==null)if(Ve(o.value,l)){if(o.children===i.children&&!ve.current){n=tn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Je(-1,t&-t),s.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?s.next=s:(s.next=h.next,h.next=s),f.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Wo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Wo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}fe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ct(n,t),i=ze(i),r=r(i),n.flags|=1,fe(e,n,r,t),n.child;case 14:return r=n.type,i=Fe(r,n.pendingProps),i=Fe(r.type,i),us(e,n,r,i,t);case 15:return Oc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fe(r,i),Ur(e,n),n.tag=1,ye(r)?(e=!0,ei(n)):e=!1,ct(n,t),kc(n,r,i),Qo(n,r,i,t),Xo(null,n,r,!0,e,t);case 19:return Pc(e,n,t);case 22:return _c(e,n,t)}throw Error(k(156,n.tag))};function Kc(e,n){return Sa(e,n)}function L0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,n,t,r){return new L0(e,n,t,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R0(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wl)return 11;if(e===Sl)return 14}return 2}function Tn(e,n){var t=e.alternate;return t===null?(t=Le(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Vr(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")eu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yn:return Mn(t.children,i,o,n);case yl:l=8,i|=8;break;case go:return e=Le(12,t,n,i|2),e.elementType=go,e.lanes=o,e;case mo:return e=Le(13,t,n,i),e.elementType=mo,e.lanes=o,e;case vo:return e=Le(19,t,n,i),e.elementType=vo,e.lanes=o,e;case ra:return xi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case na:l=10;break e;case ta:l=9;break e;case wl:l=11;break e;case Sl:l=14;break e;case un:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Le(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Mn(e,n,t,r){return e=Le(7,e,r,n),e.lanes=t,e}function xi(e,n,t,r){return e=Le(22,e,r,n),e.elementType=ra,e.lanes=t,e.stateNode={isHidden:!1},e}function oo(e,n,t){return e=Le(6,e,null,n),e.lanes=t,e}function lo(e,n,t){return n=Le(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function z0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$i(0),this.expirationTimes=$i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,n,t,r,i,o,l,u,s){return e=new z0(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Le(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Al(o),e}function M0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Xc(e){if(!e)return kn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(ye(t))return Xa(e,t,n)}return n}function Yc(e,n,t,r,i,o,l,u,s){return e=nu(t,r,!0,e,i,o,l,u,s),e.context=Xc(null),t=e.current,r=de(),i=Sn(t),o=Je(r,i),o.callback=n??null,yn(t,o,i),e.current.lanes=i,sr(e,i,r),we(e,r),e}function Oi(e,n,t,r){var i=n.current,o=de(),l=Sn(i);return t=Xc(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=yn(i,n,l),e!==null&&(He(e,i,l,o),jr(e,i,l)),l}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ws(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function tu(e,n){ws(e,n),(e=e.alternate)&&ws(e,n)}function j0(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}_i.prototype.render=ru.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Oi(e,n,null,null)};_i.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$n(function(){Oi(null,e,null,null)}),n[en]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var n=_a();e={blockedOn:null,target:e,priority:n};for(var t=0;t<an.length&&n!==0&&n<an[t].priority;t++);an.splice(t,0,e),t===0&&Na(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ss(){}function F0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=pi(l);o.call(f)}}var l=Yc(n,r,e,0,null,!1,!1,"",Ss);return e._reactRootContainer=l,e[en]=l.current,Jt(e.nodeType===8?e.parentNode:e),$n(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=pi(s);u.call(f)}}var s=nu(e,0,!1,null,null,!1,!1,"",Ss);return e._reactRootContainer=s,e[en]=s.current,Jt(e.nodeType===8?e.parentNode:e),$n(function(){Oi(n,s,t,r)}),s}function Ni(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var s=pi(l);u.call(s)}}Oi(n,l,e,i)}else l=F0(t,n,e,i,r);return pi(l)}xa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Lt(n.pendingLanes);t!==0&&(kl(n,t|1),we(n,Z()),!(M&6)&&(yt=Z()+500,On()))}break;case 13:$n(function(){var r=nn(e,1);if(r!==null){var i=de();He(r,e,1,i)}}),tu(e,1)}};Cl=function(e){if(e.tag===13){var n=nn(e,134217728);if(n!==null){var t=de();He(n,e,134217728,t)}tu(e,134217728)}};Oa=function(e){if(e.tag===13){var n=Sn(e),t=nn(e,n);if(t!==null){var r=de();He(t,e,n,r)}tu(e,n)}};_a=function(){return F};Da=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};_o=function(e,n,t){switch(n){case"input":if(So(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(k(90));oa(r),So(r,i)}}}break;case"textarea":ua(e,t);break;case"select":n=t.value,n!=null&&lt(e,!!t.multiple,n,!1)}};ha=ql;ga=$n;var A0={usingClientEntryPoint:!1,Events:[cr,bn,wi,da,pa,ql]},Nt={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U0={bundleType:Nt.bundleType,version:Nt.version,rendererPackageName:Nt.rendererPackageName,rendererConfig:Nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ya(e),e===null?null:e.stateNode},findFiberByHostInstance:Nt.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{gi=Nr.inject(U0),Ge=Nr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(n))throw Error(k(200));return M0(e,n,null,t)};xe.createRoot=function(e,n){if(!iu(e))throw Error(k(299));var t=!1,r="",i=Zc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=nu(e,1,!1,null,null,t,!1,r,i),e[en]=n.current,Jt(e.nodeType===8?e.parentNode:e),new ru(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=ya(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return $n(e)};xe.hydrate=function(e,n,t){if(!Di(n))throw Error(k(200));return Ni(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!iu(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Zc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Yc(n,null,e,1,t??null,i,!1,o,l),e[en]=n.current,Jt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new _i(n)};xe.render=function(e,n,t){if(!Di(n))throw Error(k(200));return Ni(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!Di(e))throw Error(k(40));return e._reactRootContainer?($n(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};xe.unstable_batchedUpdates=ql;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Di(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ni(e,n,t,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function qc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc)}catch(e){console.error(e)}}qc(),qs.exports=xe;var ou=qs.exports,Jc,Ts=ou;Jc=Ts.createRoot,Ts.hydrateRoot;const $0=U.createContext({dragDropManager:void 0});function De(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Es=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),uo=function(){return Math.random().toString(36).substring(7).split("").join(".")},ks={INIT:"@@redux/INIT"+uo(),REPLACE:"@@redux/REPLACE"+uo(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+uo()}};function H0(e){if(typeof e!="object"||e===null)return!1;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}function bc(e,n,t){var r;if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(De(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(De(1));return t(bc)(e,n)}if(typeof e!="function")throw new Error(De(2));var i=e,o=n,l=[],u=l,s=!1;function f(){u===l&&(u=l.slice())}function h(){if(s)throw new Error(De(3));return o}function m(p){if(typeof p!="function")throw new Error(De(4));if(s)throw new Error(De(5));var E=!0;return f(),u.push(p),function(){if(E){if(s)throw new Error(De(6));E=!1,f();var a=u.indexOf(p);u.splice(a,1),l=null}}}function g(p){if(!H0(p))throw new Error(De(7));if(typeof p.type>"u")throw new Error(De(8));if(s)throw new Error(De(9));try{s=!0,o=i(o,p)}finally{s=!1}for(var E=l=u,c=0;c<E.length;c++){var a=E[c];a()}return p}function v(p){if(typeof p!="function")throw new Error(De(10));i=p,g({type:ks.REPLACE})}function w(){var p,E=m;return p={subscribe:function(a){if(typeof a!="object"||a===null)throw new Error(De(11));function d(){a.next&&a.next(h())}d();var y=E(d);return{unsubscribe:y}}},p[Es]=function(){return this},p}return g({type:ks.INIT}),r={dispatch:g,subscribe:m,getState:h,replaceReducer:v},r[Es]=w,r}function z(e,n,...t){if(V0()&&n===void 0)throw new Error("invariant requires an error message argument");if(!e){let r;if(n===void 0)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;r=new Error(n.replace(/%s/g,function(){return t[i++]})),r.name="Invariant Violation"}throw r.framesToPop=1,r}}function V0(){return typeof process<"u"&&!0}function W0(e,n,t){return n.split(".").reduce((r,i)=>r&&r[i]?r[i]:t||null,e)}function B0(e,n){return e.filter(t=>t!==n)}function ef(e){return typeof e=="object"}function Q0(e,n){const t=new Map,r=o=>{t.set(o,t.has(o)?t.get(o)+1:1)};e.forEach(r),n.forEach(r);const i=[];return t.forEach((o,l)=>{o===1&&i.push(l)}),i}function G0(e,n){return e.filter(t=>n.indexOf(t)>-1)}const lu="dnd-core/INIT_COORDS",Ii="dnd-core/BEGIN_DRAG",uu="dnd-core/PUBLISH_DRAG_SOURCE",Pi="dnd-core/HOVER",Li="dnd-core/DROP",Ri="dnd-core/END_DRAG";function Cs(e,n){return{type:lu,payload:{sourceClientOffset:n||null,clientOffset:e||null}}}const K0={type:lu,payload:{clientOffset:null,sourceClientOffset:null}};function X0(e){return function(t=[],r={publishSource:!0}){const{publishSource:i=!0,clientOffset:o,getSourceClientOffset:l}=r,u=e.getMonitor(),s=e.getRegistry();e.dispatch(Cs(o)),Y0(t,u,s);const f=J0(t,u);if(f==null){e.dispatch(K0);return}let h=null;if(o){if(!l)throw new Error("getSourceClientOffset must be defined");Z0(l),h=l(f)}e.dispatch(Cs(o,h));const g=s.getSource(f).beginDrag(u,f);if(g==null)return;q0(g),s.pinSource(f);const v=s.getSourceType(f);return{type:Ii,payload:{itemType:v,item:g,sourceId:f,clientOffset:o||null,sourceClientOffset:h||null,isSourcePublic:!!i}}}}function Y0(e,n,t){z(!n.isDragging(),"Cannot call beginDrag while dragging."),e.forEach(function(r){z(t.getSource(r),"Expected sourceIds to be registered.")})}function Z0(e){z(typeof e=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function q0(e){z(ef(e),"Item must be an object.")}function J0(e,n){let t=null;for(let r=e.length-1;r>=0;r--)if(n.canDragSource(e[r])){t=e[r];break}return t}function b0(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function e2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){b0(e,i,t[i])})}return e}function n2(e){return function(t={}){const r=e.getMonitor(),i=e.getRegistry();t2(r),o2(r).forEach((l,u)=>{const s=r2(l,u,i,r),f={type:Li,payload:{dropResult:e2({},t,s)}};e.dispatch(f)})}}function t2(e){z(e.isDragging(),"Cannot call drop while not dragging."),z(!e.didDrop(),"Cannot call drop twice during one drag operation.")}function r2(e,n,t,r){const i=t.getTarget(e);let o=i?i.drop(r,e):void 0;return i2(o),typeof o>"u"&&(o=n===0?{}:r.getDropResult()),o}function i2(e){z(typeof e>"u"||ef(e),"Drop result must either be an object or undefined.")}function o2(e){const n=e.getTargetIds().filter(e.canDropOnTarget,e);return n.reverse(),n}function l2(e){return function(){const t=e.getMonitor(),r=e.getRegistry();u2(t);const i=t.getSourceId();return i!=null&&(r.getSource(i,!0).endDrag(t,i),r.unpinSource()),{type:Ri}}}function u2(e){z(e.isDragging(),"Cannot call endDrag while not dragging.")}function ll(e,n){return n===null?e===null:Array.isArray(e)?e.some(t=>t===n):e===n}function s2(e){return function(t,{clientOffset:r}={}){a2(t);const i=t.slice(0),o=e.getMonitor(),l=e.getRegistry(),u=o.getItemType();return f2(i,l,u),c2(i,o,l),d2(i,o,l),{type:Pi,payload:{targetIds:i,clientOffset:r||null}}}}function a2(e){z(Array.isArray(e),"Expected targetIds to be an array.")}function c2(e,n,t){z(n.isDragging(),"Cannot call hover while not dragging."),z(!n.didDrop(),"Cannot call hover after drop.");for(let r=0;r<e.length;r++){const i=e[r];z(e.lastIndexOf(i)===r,"Expected targetIds to be unique in the passed array.");const o=t.getTarget(i);z(o,"Expected targetIds to be registered.")}}function f2(e,n,t){for(let r=e.length-1;r>=0;r--){const i=e[r],o=n.getTargetType(i);ll(o,t)||e.splice(r,1)}}function d2(e,n,t){e.forEach(function(r){t.getTarget(r).hover(n,r)})}function p2(e){return function(){if(e.getMonitor().isDragging())return{type:uu}}}function h2(e){return{beginDrag:X0(e),publishDragSource:p2(e),hover:s2(e),drop:n2(e),endDrag:l2(e)}}class g2{receiveBackend(n){this.backend=n}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const n=this,{dispatch:t}=this.store;function r(o){return(...l)=>{const u=o.apply(n,l);typeof u<"u"&&t(u)}}const i=h2(this);return Object.keys(i).reduce((o,l)=>{const u=i[l];return o[l]=r(u),o},{})}dispatch(n){this.store.dispatch(n)}constructor(n,t){this.isSetUp=!1,this.handleRefCountChange=()=>{const r=this.store.getState().refCount>0;this.backend&&(r&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!r&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=n,this.monitor=t,n.subscribe(this.handleRefCountChange)}}function m2(e,n){return{x:e.x+n.x,y:e.y+n.y}}function nf(e,n){return{x:e.x-n.x,y:e.y-n.y}}function v2(e){const{clientOffset:n,initialClientOffset:t,initialSourceClientOffset:r}=e;return!n||!t||!r?null:nf(m2(n,r),t)}function y2(e){const{clientOffset:n,initialClientOffset:t}=e;return!n||!t?null:nf(n,t)}const Wt=[],su=[];Wt.__IS_NONE__=!0;su.__IS_ALL__=!0;function w2(e,n){return e===Wt?!1:e===su||typeof n>"u"?!0:G0(n,e).length>0}class S2{subscribeToStateChange(n,t={}){const{handlerIds:r}=t;z(typeof n=="function","listener must be a function."),z(typeof r>"u"||Array.isArray(r),"handlerIds, when specified, must be an array of strings.");let i=this.store.getState().stateId;const o=()=>{const l=this.store.getState(),u=l.stateId;try{u===i||u===i+1&&!w2(l.dirtyHandlerIds,r)||n()}finally{i=u}};return this.store.subscribe(o)}subscribeToOffsetChange(n){z(typeof n=="function","listener must be a function.");let t=this.store.getState().dragOffset;const r=()=>{const i=this.store.getState().dragOffset;i!==t&&(t=i,n())};return this.store.subscribe(r)}canDragSource(n){if(!n)return!1;const t=this.registry.getSource(n);return z(t,`Expected to find a valid source. sourceId=${n}`),this.isDragging()?!1:t.canDrag(this,n)}canDropOnTarget(n){if(!n)return!1;const t=this.registry.getTarget(n);if(z(t,`Expected to find a valid target. targetId=${n}`),!this.isDragging()||this.didDrop())return!1;const r=this.registry.getTargetType(n),i=this.getItemType();return ll(r,i)&&t.canDrop(this,n)}isDragging(){return!!this.getItemType()}isDraggingSource(n){if(!n)return!1;const t=this.registry.getSource(n,!0);if(z(t,`Expected to find a valid source. sourceId=${n}`),!this.isDragging()||!this.isSourcePublic())return!1;const r=this.registry.getSourceType(n),i=this.getItemType();return r!==i?!1:t.isDragging(this,n)}isOverTarget(n,t={shallow:!1}){if(!n)return!1;const{shallow:r}=t;if(!this.isDragging())return!1;const i=this.registry.getTargetType(n),o=this.getItemType();if(o&&!ll(i,o))return!1;const l=this.getTargetIds();if(!l.length)return!1;const u=l.indexOf(n);return r?u===l.length-1:u>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return v2(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return y2(this.store.getState().dragOffset)}constructor(n,t){this.store=n,this.registry=t}}const xs=typeof global<"u"?global:self,tf=xs.MutationObserver||xs.WebKitMutationObserver;function rf(e){return function(){const t=setTimeout(i,0),r=setInterval(i,50);function i(){clearTimeout(t),clearInterval(r),e()}}}function T2(e){let n=1;const t=new tf(e),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){n=-n,r.data=n}}const E2=typeof tf=="function"?T2:rf;class k2{enqueueTask(n){const{queue:t,requestFlush:r}=this;t.length||(r(),this.flushing=!0),t[t.length]=n}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:n}=this;for(;this.index<n.length;){const t=this.index;if(this.index++,n[t].call(),this.index>this.capacity){for(let r=0,i=n.length-this.index;r<i;r++)n[r]=n[r+this.index];n.length-=this.index,this.index=0}}n.length=0,this.index=0,this.flushing=!1},this.registerPendingError=n=>{this.pendingErrors.push(n),this.requestErrorThrow()},this.requestFlush=E2(this.flush),this.requestErrorThrow=rf(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class C2{call(){try{this.task&&this.task()}catch(n){this.onError(n)}finally{this.task=null,this.release(this)}}constructor(n,t){this.onError=n,this.release=t,this.task=null}}class x2{create(n){const t=this.freeTasks,r=t.length?t.pop():new C2(this.onError,i=>t[t.length]=i);return r.task=n,r}constructor(n){this.onError=n,this.freeTasks=[]}}const of=new k2,O2=new x2(of.registerPendingError);function _2(e){of.enqueueTask(O2.create(e))}const au="dnd-core/ADD_SOURCE",cu="dnd-core/ADD_TARGET",fu="dnd-core/REMOVE_SOURCE",zi="dnd-core/REMOVE_TARGET";function D2(e){return{type:au,payload:{sourceId:e}}}function N2(e){return{type:cu,payload:{targetId:e}}}function I2(e){return{type:fu,payload:{sourceId:e}}}function P2(e){return{type:zi,payload:{targetId:e}}}function L2(e){z(typeof e.canDrag=="function","Expected canDrag to be a function."),z(typeof e.beginDrag=="function","Expected beginDrag to be a function."),z(typeof e.endDrag=="function","Expected endDrag to be a function.")}function R2(e){z(typeof e.canDrop=="function","Expected canDrop to be a function."),z(typeof e.hover=="function","Expected hover to be a function."),z(typeof e.drop=="function","Expected beginDrag to be a function.")}function ul(e,n){if(n&&Array.isArray(e)){e.forEach(t=>ul(t,!1));return}z(typeof e=="string"||typeof e=="symbol",n?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var Pe;(function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"})(Pe||(Pe={}));let z2=0;function M2(){return z2++}function j2(e){const n=M2().toString();switch(e){case Pe.SOURCE:return`S${n}`;case Pe.TARGET:return`T${n}`;default:throw new Error(`Unknown Handler Role: ${e}`)}}function Os(e){switch(e[0]){case"S":return Pe.SOURCE;case"T":return Pe.TARGET;default:throw new Error(`Cannot parse handler ID: ${e}`)}}function _s(e,n){const t=e.entries();let r=!1;do{const{done:i,value:[,o]}=t.next();if(o===n)return!0;r=!!i}while(!r);return!1}class F2{addSource(n,t){ul(n),L2(t);const r=this.addHandler(Pe.SOURCE,n,t);return this.store.dispatch(D2(r)),r}addTarget(n,t){ul(n,!0),R2(t);const r=this.addHandler(Pe.TARGET,n,t);return this.store.dispatch(N2(r)),r}containsHandler(n){return _s(this.dragSources,n)||_s(this.dropTargets,n)}getSource(n,t=!1){return z(this.isSourceId(n),"Expected a valid source ID."),t&&n===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(n)}getTarget(n){return z(this.isTargetId(n),"Expected a valid target ID."),this.dropTargets.get(n)}getSourceType(n){return z(this.isSourceId(n),"Expected a valid source ID."),this.types.get(n)}getTargetType(n){return z(this.isTargetId(n),"Expected a valid target ID."),this.types.get(n)}isSourceId(n){return Os(n)===Pe.SOURCE}isTargetId(n){return Os(n)===Pe.TARGET}removeSource(n){z(this.getSource(n),"Expected an existing source."),this.store.dispatch(I2(n)),_2(()=>{this.dragSources.delete(n),this.types.delete(n)})}removeTarget(n){z(this.getTarget(n),"Expected an existing target."),this.store.dispatch(P2(n)),this.dropTargets.delete(n),this.types.delete(n)}pinSource(n){const t=this.getSource(n);z(t,"Expected an existing source."),this.pinnedSourceId=n,this.pinnedSource=t}unpinSource(){z(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(n,t,r){const i=j2(n);return this.types.set(i,t),n===Pe.SOURCE?this.dragSources.set(i,r):n===Pe.TARGET&&this.dropTargets.set(i,r),i}constructor(n){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=n}}const A2=(e,n)=>e===n;function U2(e,n){return!e&&!n?!0:!e||!n?!1:e.x===n.x&&e.y===n.y}function $2(e,n,t=A2){if(e.length!==n.length)return!1;for(let r=0;r<e.length;++r)if(!t(e[r],n[r]))return!1;return!0}function H2(e=Wt,n){switch(n.type){case Pi:break;case au:case cu:case zi:case fu:return Wt;case Ii:case uu:case Ri:case Li:default:return su}const{targetIds:t=[],prevTargetIds:r=[]}=n.payload,i=Q0(t,r);if(!(i.length>0||!$2(t,r)))return Wt;const l=r[r.length-1],u=t[t.length-1];return l!==u&&(l&&i.push(l),u&&i.push(u)),i}function V2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){V2(e,i,t[i])})}return e}const Ds={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function B2(e=Ds,n){const{payload:t}=n;switch(n.type){case lu:case Ii:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case Pi:return U2(e.clientOffset,t.clientOffset)?e:W2({},e,{clientOffset:t.clientOffset});case Ri:case Li:return Ds;default:return e}}function Q2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Gn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){Q2(e,i,t[i])})}return e}const G2={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function K2(e=G2,n){const{payload:t}=n;switch(n.type){case Ii:return Gn({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case uu:return Gn({},e,{isSourcePublic:!0});case Pi:return Gn({},e,{targetIds:t.targetIds});case zi:return e.targetIds.indexOf(t.targetId)===-1?e:Gn({},e,{targetIds:B0(e.targetIds,t.targetId)});case Li:return Gn({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case Ri:return Gn({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}function X2(e=0,n){switch(n.type){case au:case cu:return e+1;case fu:case zi:return e-1;default:return e}}function Y2(e=0){return e+1}function Z2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){Z2(e,i,t[i])})}return e}function J2(e={},n){return{dirtyHandlerIds:H2(e.dirtyHandlerIds,{type:n.type,payload:q2({},n.payload,{prevTargetIds:W0(e,"dragOperation.targetIds",[])})}),dragOffset:B2(e.dragOffset,n),refCount:X2(e.refCount,n),dragOperation:K2(e.dragOperation,n),stateId:Y2(e.stateId)}}function b2(e,n=void 0,t={},r=!1){const i=ep(r),o=new S2(i,new F2(i)),l=new g2(i,o),u=e(l,n,t);return l.receiveBackend(u),l}function ep(e){const n=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return bc(J2,e&&n&&n({name:"dnd-core",instanceId:"dnd-core"}))}function np(e,n){if(e==null)return{};var t=tp(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function tp(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}let Ns=0;const Wr=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var rp=U.memo(function(n){var{children:t}=n,r=np(n,["children"]);const[i,o]=ip(r);return U.useEffect(()=>{if(o){const l=lf();return++Ns,()=>{--Ns===0&&(l[Wr]=null)}}},[]),j.jsx($0.Provider,{value:i,children:t})});function ip(e){if("manager"in e)return[{dragDropManager:e.manager},!1];const n=op(e.backend,e.context,e.options,e.debugMode),t=!e.context;return[n,t]}function op(e,n=lf(),t,r){const i=n;return i[Wr]||(i[Wr]={dragDropManager:b2(e,n,t,r)}),i[Wr]}function lf(){return typeof global<"u"?global:window}function uf(e){let n=null;return()=>(n==null&&(n=e()),n)}function lp(e,n){return e.filter(t=>t!==n)}function up(e,n){const t=new Set,r=o=>t.add(o);e.forEach(r),n.forEach(r);const i=[];return t.forEach(o=>i.push(o)),i}class sp{enter(n){const t=this.entered.length,r=i=>this.isNodeInDocument(i)&&(!i.contains||i.contains(n));return this.entered=up(this.entered.filter(r),[n]),t===0&&this.entered.length>0}leave(n){const t=this.entered.length;return this.entered=lp(this.entered.filter(this.isNodeInDocument),n),t>0&&this.entered.length===0}reset(){this.entered=[]}constructor(n){this.entered=[],this.isNodeInDocument=n}}class ap{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(n=>{Object.defineProperty(this.item,n,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${n}" until the drop event.`),null}})})}loadDataTransfer(n){if(n){const t={};Object.keys(this.config.exposeProperties).forEach(r=>{const i=this.config.exposeProperties[r];i!=null&&(t[r]={value:i(n,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(n,t){return t===n.getSourceId()}endDrag(){}constructor(n){this.config=n,this.item={},this.initializeExposedProperties()}}const sf="__NATIVE_FILE__",af="__NATIVE_URL__",cf="__NATIVE_TEXT__",ff="__NATIVE_HTML__",Is=Object.freeze(Object.defineProperty({__proto__:null,FILE:sf,HTML:ff,TEXT:cf,URL:af},Symbol.toStringTag,{value:"Module"}));function so(e,n,t){const r=n.reduce((i,o)=>i||e.getData(o),"");return r??t}const sl={[sf]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[ff]:{exposeProperties:{html:(e,n)=>so(e,n,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[af]:{exposeProperties:{urls:(e,n)=>so(e,n,"").split(`
`),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[cf]:{exposeProperties:{text:(e,n)=>so(e,n,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function cp(e,n){const t=sl[e];if(!t)throw new Error(`native type ${e} has no configuration`);const r=new ap(t);return r.loadDataTransfer(n),r}function ao(e){if(!e)return null;const n=Array.prototype.slice.call(e.types||[]);return Object.keys(sl).filter(t=>{const r=sl[t];return r!=null&&r.matchesTypes?r.matchesTypes.some(i=>n.indexOf(i)>-1):!1})[0]||null}const fp=uf(()=>/firefox/i.test(navigator.userAgent)),df=uf(()=>!!window.safari);class Ps{interpolate(n){const{xs:t,ys:r,c1s:i,c2s:o,c3s:l}=this;let u=t.length-1;if(n===t[u])return r[u];let s=0,f=l.length-1,h;for(;s<=f;){h=Math.floor(.5*(s+f));const v=t[h];if(v<n)s=h+1;else if(v>n)f=h-1;else return r[h]}u=Math.max(0,f);const m=n-t[u],g=m*m;return r[u]+i[u]*m+o[u]*g+l[u]*m*g}constructor(n,t){const{length:r}=n,i=[];for(let v=0;v<r;v++)i.push(v);i.sort((v,w)=>n[v]<n[w]?-1:1);const o=[],l=[];let u,s;for(let v=0;v<r-1;v++)u=n[v+1]-n[v],s=t[v+1]-t[v],o.push(u),l.push(s/u);const f=[l[0]];for(let v=0;v<o.length-1;v++){const w=l[v],p=l[v+1];if(w*p<=0)f.push(0);else{u=o[v];const E=o[v+1],c=u+E;f.push(3*c/((c+E)/w+(c+u)/p))}}f.push(l[l.length-1]);const h=[],m=[];let g;for(let v=0;v<f.length-1;v++){g=l[v];const w=f[v],p=1/o[v],E=w+f[v+1]-g-g;h.push((g-w-E)*p),m.push(E*p*p)}this.xs=n,this.ys=t,this.c1s=f,this.c2s=h,this.c3s=m}}const dp=1;function pf(e){const n=e.nodeType===dp?e:e.parentElement;if(!n)return null;const{top:t,left:r}=n.getBoundingClientRect();return{x:r,y:t}}function Ir(e){return{x:e.clientX,y:e.clientY}}function pp(e){var n;return e.nodeName==="IMG"&&(fp()||!(!((n=document.documentElement)===null||n===void 0)&&n.contains(e)))}function hp(e,n,t,r){let i=e?n.width:t,o=e?n.height:r;return df()&&e&&(o/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:o}}function gp(e,n,t,r,i){const o=pp(n),u=pf(o?e:n),s={x:t.x-u.x,y:t.y-u.y},{offsetWidth:f,offsetHeight:h}=e,{anchorX:m,anchorY:g}=r,{dragPreviewWidth:v,dragPreviewHeight:w}=hp(o,n,f,h),p=()=>{let T=new Ps([0,.5,1],[s.y,s.y/h*w,s.y+w-h]).interpolate(g);return df()&&o&&(T+=(window.devicePixelRatio-1)*w),T},E=()=>new Ps([0,.5,1],[s.x,s.x/f*v,s.x+v-f]).interpolate(m),{offsetX:c,offsetY:a}=i,d=c===0||c,y=a===0||a;return{x:d?c:E(),y:y?a:p()}}class mp{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var n;return!((n=this.globalContext)===null||n===void 0)&&n.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var n;return((n=this.optionsArgs)===null||n===void 0?void 0:n.rootElement)||this.window}constructor(n,t){this.ownerDocument=null,this.globalContext=n,this.optionsArgs=t}}function vp(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ls(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){vp(e,i,t[i])})}return e}class yp{profile(){var n,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((n=this.dragStartSourceIds)===null||n===void 0?void 0:n.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((t=this.dragOverTargetIds)===null||t===void 0?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const n=this.rootElement;if(n!==void 0){if(n.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");n.__isReactDndBackendSetUp=!0,this.addEventListeners(n)}}teardown(){const n=this.rootElement;if(n!==void 0&&(n.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var t;(t=this.window)===null||t===void 0||t.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(n,t,r){return this.sourcePreviewNodeOptions.set(n,r),this.sourcePreviewNodes.set(n,t),()=>{this.sourcePreviewNodes.delete(n),this.sourcePreviewNodeOptions.delete(n)}}connectDragSource(n,t,r){this.sourceNodes.set(n,t),this.sourceNodeOptions.set(n,r);const i=l=>this.handleDragStart(l,n),o=l=>this.handleSelectStart(l);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",i),t.addEventListener("selectstart",o),()=>{this.sourceNodes.delete(n),this.sourceNodeOptions.delete(n),t.removeEventListener("dragstart",i),t.removeEventListener("selectstart",o),t.setAttribute("draggable","false")}}connectDropTarget(n,t){const r=l=>this.handleDragEnter(l,n),i=l=>this.handleDragOver(l,n),o=l=>this.handleDrop(l,n);return t.addEventListener("dragenter",r),t.addEventListener("dragover",i),t.addEventListener("drop",o),()=>{t.removeEventListener("dragenter",r),t.removeEventListener("dragover",i),t.removeEventListener("drop",o)}}addEventListeners(n){n.addEventListener&&(n.addEventListener("dragstart",this.handleTopDragStart),n.addEventListener("dragstart",this.handleTopDragStartCapture,!0),n.addEventListener("dragend",this.handleTopDragEndCapture,!0),n.addEventListener("dragenter",this.handleTopDragEnter),n.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.addEventListener("dragover",this.handleTopDragOver),n.addEventListener("dragover",this.handleTopDragOverCapture,!0),n.addEventListener("drop",this.handleTopDrop),n.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(n){n.removeEventListener&&(n.removeEventListener("dragstart",this.handleTopDragStart),n.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),n.removeEventListener("dragend",this.handleTopDragEndCapture,!0),n.removeEventListener("dragenter",this.handleTopDragEnter),n.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.removeEventListener("dragover",this.handleTopDragOver),n.removeEventListener("dragover",this.handleTopDragOverCapture,!0),n.removeEventListener("drop",this.handleTopDrop),n.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const n=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(n);return Ls({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const n=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions.get(n);return Ls({anchorX:.5,anchorY:.5,captureDraggingState:!1},t||{})}isDraggingNativeItem(){const n=this.monitor.getItemType();return Object.keys(Is).some(t=>Is[t]===n)}beginDragNativeItem(n,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=cp(n,t),this.currentNativeHandle=this.registry.addSource(n,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(n){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=n;const t=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var r;return(r=this.rootElement)===null||r===void 0?void 0:r.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},t)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var n;(n=this.window)===null||n===void 0||n.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(n,t){n.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(n,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(n,t){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(n,t){this.dropTargetIds.unshift(t)}constructor(n,t,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=i=>{const o=this.sourceNodes.get(i);return o&&pf(o)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=i=>!!(i&&this.document&&this.document.body&&this.document.body.contains(i)),this.endDragIfSourceWasRemovedFromDOM=()=>{const i=this.currentDragSourceNode;i==null||this.isNodeInDocument(i)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=i=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(i||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=i=>{if(i.defaultPrevented)return;const{dragStartSourceIds:o}=this;this.dragStartSourceIds=null;const l=Ir(i);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(o||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:l});const{dataTransfer:u}=i,s=ao(u);if(this.monitor.isDragging()){if(u&&typeof u.setDragImage=="function"){const h=this.monitor.getSourceId(),m=this.sourceNodes.get(h),g=this.sourcePreviewNodes.get(h)||m;if(g){const{anchorX:v,anchorY:w,offsetX:p,offsetY:E}=this.getCurrentSourcePreviewNodeOptions(),d=gp(m,g,l,{anchorX:v,anchorY:w},{offsetX:p,offsetY:E});u.setDragImage(g,d.x,d.y)}}try{u==null||u.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(i.target);const{captureDraggingState:f}=this.getCurrentSourcePreviewNodeOptions();f?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(s)this.beginDragNativeItem(s);else{if(u&&!u.types&&(i.target&&!i.target.hasAttribute||!i.target.hasAttribute("draggable")))return;i.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=i=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}if(!this.enterLeaveCounter.enter(i.target)||this.monitor.isDragging())return;const{dataTransfer:u}=i,s=ao(u);s&&this.beginDragNativeItem(s,u)},this.handleTopDragEnter=i=>{const{dragEnterTargetIds:o}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=i.altKey,o.length>0&&this.actions.hover(o,{clientOffset:Ir(i)}),o.some(u=>this.monitor.canDropOnTarget(u))&&(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=i=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}},this.handleTopDragOver=i=>{const{dragOverTargetIds:o}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}this.altKeyPressed=i.altKey,this.lastClientOffset=Ir(i),this.scheduleHover(o),(o||[]).some(u=>this.monitor.canDropOnTarget(u))?(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?i.preventDefault():(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=i=>{this.isDraggingNativeItem()&&i.preventDefault(),this.enterLeaveCounter.leave(i.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=i=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var o;i.preventDefault(),(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}else ao(i.dataTransfer)&&i.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=i=>{const{dropTargetIds:o}=this;this.dropTargetIds=[],this.actions.hover(o,{clientOffset:Ir(i)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=i=>{const o=i.target;typeof o.dragDrop=="function"&&(o.tagName==="INPUT"||o.tagName==="SELECT"||o.tagName==="TEXTAREA"||o.isContentEditable||(i.preventDefault(),o.dragDrop()))},this.options=new mp(t,r),this.actions=n.getActions(),this.monitor=n.getMonitor(),this.registry=n.getRegistry(),this.enterLeaveCounter=new sp(this.isNodeInDocument)}}const wp=function(n,t,r){return new yp(n,t,r)},Rs="",pn=50,du=U.createContext({});function Sp(e,n){const t=[];for(const r of e){const{s:i,e:o}=r;let l=Math.floor(i/n)+1,u=i;for(;u<o;){const s=(l-1)*n,f=l*n;t.push({...r,line:l,s:Math.max(u,s),e:Math.min(o,f)}),l++,u=Math.min(o,f)}}return t}function Tp(e,n){const t=[],r={};for(const i of e){const{line:o}=i;r[o]||(r[o]=[]),r[o].push({...i})}for(const[i,o]of Object.entries(r)){const l=(i-1)*n,u=i*n;o.sort((f,h)=>f.s-h.s);let s=l;for(const f of o){const{s:h,e:m}=f;s<h&&t.push({line:Number(i),s,e:h,isFill:!0}),t.push({...f,line:Number(i),s:h,e:m}),s=m}s<u&&t.push({line:Number(i),s,e:u,isFill:!0})}return t}const Ep=({children:e})=>{const[n,t]=U.useState([{s:2,e:25},{s:15,e:28},{s:2e3,e:2700},{s:2550,e:3e3}]),[r,i]=U.useState([]),[o,l]=U.useState(""),[u,s]=U.useState(o.split(Rs)),[f,h]=U.useState(!1),[m,g]=U.useState({start:0,end:0}),[v,w]=U.useState({}),p=U.useRef(0),E=U.useRef(0);U.useEffect(()=>{p.current=performance.now();const C=n.slice().sort((A,N)=>A.s-N.s).map((A,N)=>({...A,index:N,tailOverlapped:-1,headOverlapped:-1}));let x=C[0];for(let A=1;A<C.length;A++){const N=C[A];N.s<x.e&&(x.tailOverlapped=N.s,N.headOverlapped=x.e),x=N}const R=C.reduce((A,N)=>N.headOverlapped!==-1&&N.tailOverlapped!==-1?[...A,{s:N.s,e:N.headOverlapped,index:N.index,overLapped:!0},{s:N.headOverlapped,e:N.tailOverlapped,index:N.index,overLapped:!1},{s:N.tailOverlapped,e:N.e,index:N.index,overLapped:!0}]:N.headOverlapped!==-1?[...A,{s:N.s,e:N.headOverlapped,index:N.index,overLapped:!0},{s:N.headOverlapped,e:N.e,index:N.index,overLapped:!1}]:N.tailOverlapped!==-1?[...A,{s:N.s,e:N.tailOverlapped,index:N.index,overLapped:!1},{s:N.tailOverlapped,e:N.e,index:N.index,overLapped:!0}]:[...A,{...N,index:N.index,overLapped:!1}],[]),D=[],X=new Set;for(const A of R){const N=`${A.s}-${A.e}`;X.has(N)||(X.add(N),D.push(A))}let ne=0;const _e=D.map((A,N)=>{A.overLapped&&ne++;const on=(N-ne)%2===0;return{...A,isEven:on,isOdd:!on}});return i(_e),()=>{}},[n]),U.useEffect(()=>{const T=m.start*pn,C=(m.end+1)*pn;console.log({resolvedCursors:r});const x=r.filter(ne=>ne.s<C&&ne.e>T);console.log({slimed:x});const R=Sp(x,pn);console.log({splitted:R});const D=Tp(R,pn);console.log({gapFilled:D});const X=D.reduce((ne,_e)=>{const{line:A}=_e;return ne[A-1]||(ne[A-1]=[]),ne[A-1].push({..._e}),ne},{});return console.log({linesPart:X}),w(X),()=>{}},[m,r]);const a=n.reduce((T,C,x)=>[...T,{pos:C.s,type:"s",origin:x},{pos:C.e,type:"e",origin:x}],[]).slice().sort((T,C)=>T.pos-C.pos),d=T=>{l(T),s(T.split(Rs))},y=T=>{t(T)},S=(T,C)=>{g({start:T,end:C})};return E.current=performance.now(),j.jsxs(du.Provider,{value:{resolvedCursors:r,text:o,content:u,sortedCursorPositions:a,isDragging:f,setCursors:y,setText:d,setIsDragging:h,setLineRange:S,visibleLinesPart:v},children:[j.jsx(rp,{backend:wp,children:e}),ou.createPortal(j.jsxs("div",{className:"absolute top-0 right-0 bg-gray-100 p-2 text-sm",children:["字符长度: ",j.jsx("p",{children:o.length}),"分段: ",j.jsx("pre",{children:JSON.stringify(n,null,2)}),"背景计算耗时:",j.jsx("p",{children:`Execution time: ${E.current-p.current} ms`}),"正在拖拽:",j.jsx("p",{children:f?"是":"否"})]}),document.body)]})};function al(){return al=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},al.apply(null,arguments)}function zs(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cl(e,n){return cl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},cl(e,n)}function kp(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,cl(e,n)}var Ms=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function Cp(e,n){return!!(e===n||Ms(e)&&Ms(n))}function xp(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!Cp(e[t],n[t]))return!1;return!0}function co(e,n){n===void 0&&(n=xp);var t,r=[],i,o=!1;function l(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return o&&t===this&&n(u,r)||(i=e.apply(this,u),o=!0,t=this,r=u),i}return l}var Op=typeof performance=="object"&&typeof performance.now=="function",js=Op?function(){return performance.now()}:function(){return Date.now()};function Fs(e){cancelAnimationFrame(e.id)}function _p(e,n){var t=js();function r(){js()-t>=n?e.call(null):i.id=requestAnimationFrame(r)}var i={id:requestAnimationFrame(r)};return i}var fo=-1;function As(e){if(e===void 0&&(e=!1),fo===-1||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(n),fo=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return fo}var Kn=null;function Us(e){if(e===void 0&&(e=!1),Kn===null||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var r=document.createElement("div"),i=r.style;return i.width="100px",i.height="100px",n.appendChild(r),document.body.appendChild(n),n.scrollLeft>0?Kn="positive-descending":(n.scrollLeft=1,n.scrollLeft===0?Kn="negative":Kn="positive-ascending"),document.body.removeChild(n),Kn}return Kn}var Dp=150,Np=function(n,t){return n};function Ip(e){var n,t=e.getItemOffset,r=e.getEstimatedTotalSize,i=e.getItemSize,o=e.getOffsetForIndexAndAlignment,l=e.getStartIndexForOffset,u=e.getStopIndexForStartIndex,s=e.initInstanceProps,f=e.shouldResetStyleCacheOnItemSizeChange,h=e.validateProps;return n=function(m){kp(g,m);function g(w){var p;return p=m.call(this,w)||this,p._instanceProps=s(p.props,zs(p)),p._outerRef=void 0,p._resetIsScrollingTimeoutId=null,p.state={instance:zs(p),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof p.props.initialScrollOffset=="number"?p.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},p._callOnItemsRendered=void 0,p._callOnItemsRendered=co(function(E,c,a,d){return p.props.onItemsRendered({overscanStartIndex:E,overscanStopIndex:c,visibleStartIndex:a,visibleStopIndex:d})}),p._callOnScroll=void 0,p._callOnScroll=co(function(E,c,a){return p.props.onScroll({scrollDirection:E,scrollOffset:c,scrollUpdateWasRequested:a})}),p._getItemStyle=void 0,p._getItemStyle=function(E){var c=p.props,a=c.direction,d=c.itemSize,y=c.layout,S=p._getItemStyleCache(f&&d,f&&y,f&&a),T;if(S.hasOwnProperty(E))T=S[E];else{var C=t(p.props,E,p._instanceProps),x=i(p.props,E,p._instanceProps),R=a==="horizontal"||y==="horizontal",D=a==="rtl",X=R?C:0;S[E]=T={position:"absolute",left:D?void 0:X,right:D?X:void 0,top:R?0:C,height:R?"100%":x,width:R?x:"100%"}}return T},p._getItemStyleCache=void 0,p._getItemStyleCache=co(function(E,c,a){return{}}),p._onScrollHorizontal=function(E){var c=E.currentTarget,a=c.clientWidth,d=c.scrollLeft,y=c.scrollWidth;p.setState(function(S){if(S.scrollOffset===d)return null;var T=p.props.direction,C=d;if(T==="rtl")switch(Us()){case"negative":C=-d;break;case"positive-descending":C=y-a-d;break}return C=Math.max(0,Math.min(C,y-a)),{isScrolling:!0,scrollDirection:S.scrollOffset<C?"forward":"backward",scrollOffset:C,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._onScrollVertical=function(E){var c=E.currentTarget,a=c.clientHeight,d=c.scrollHeight,y=c.scrollTop;p.setState(function(S){if(S.scrollOffset===y)return null;var T=Math.max(0,Math.min(y,d-a));return{isScrolling:!0,scrollDirection:S.scrollOffset<T?"forward":"backward",scrollOffset:T,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._outerRefSetter=function(E){var c=p.props.outerRef;p._outerRef=E,typeof c=="function"?c(E):c!=null&&typeof c=="object"&&c.hasOwnProperty("current")&&(c.current=E)},p._resetIsScrollingDebounced=function(){p._resetIsScrollingTimeoutId!==null&&Fs(p._resetIsScrollingTimeoutId),p._resetIsScrollingTimeoutId=_p(p._resetIsScrolling,Dp)},p._resetIsScrolling=function(){p._resetIsScrollingTimeoutId=null,p.setState({isScrolling:!1},function(){p._getItemStyleCache(-1,null)})},p}g.getDerivedStateFromProps=function(p,E){return Pp(p,E),h(p),null};var v=g.prototype;return v.scrollTo=function(p){p=Math.max(0,p),this.setState(function(E){return E.scrollOffset===p?null:{scrollDirection:E.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},v.scrollToItem=function(p,E){E===void 0&&(E="auto");var c=this.props,a=c.itemCount,d=c.layout,y=this.state.scrollOffset;p=Math.max(0,Math.min(p,a-1));var S=0;if(this._outerRef){var T=this._outerRef;d==="vertical"?S=T.scrollWidth>T.clientWidth?As():0:S=T.scrollHeight>T.clientHeight?As():0}this.scrollTo(o(this.props,p,E,y,this._instanceProps,S))},v.componentDidMount=function(){var p=this.props,E=p.direction,c=p.initialScrollOffset,a=p.layout;if(typeof c=="number"&&this._outerRef!=null){var d=this._outerRef;E==="horizontal"||a==="horizontal"?d.scrollLeft=c:d.scrollTop=c}this._callPropsCallbacks()},v.componentDidUpdate=function(){var p=this.props,E=p.direction,c=p.layout,a=this.state,d=a.scrollOffset,y=a.scrollUpdateWasRequested;if(y&&this._outerRef!=null){var S=this._outerRef;if(E==="horizontal"||c==="horizontal")if(E==="rtl")switch(Us()){case"negative":S.scrollLeft=-d;break;case"positive-ascending":S.scrollLeft=d;break;default:var T=S.clientWidth,C=S.scrollWidth;S.scrollLeft=C-T-d;break}else S.scrollLeft=d;else S.scrollTop=d}this._callPropsCallbacks()},v.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&Fs(this._resetIsScrollingTimeoutId)},v.render=function(){var p=this.props,E=p.children,c=p.className,a=p.direction,d=p.height,y=p.innerRef,S=p.innerElementType,T=p.innerTagName,C=p.itemCount,x=p.itemData,R=p.itemKey,D=R===void 0?Np:R,X=p.layout,ne=p.outerElementType,_e=p.outerTagName,A=p.style,N=p.useIsScrolling,on=p.width,Wn=this.state.isScrolling,O=a==="horizontal"||X==="horizontal",I=O?this._onScrollHorizontal:this._onScrollVertical,P=this._getRangeToRender(),B=P[0],q=P[1],_n=[];if(C>0)for(var Se=B;Se<=q;Se++)_n.push(U.createElement(E,{data:x,key:D(Se,x),index:Se,isScrolling:N?Wn:void 0,style:this._getItemStyle(Se)}));var Bn=r(this.props,this._instanceProps);return U.createElement(ne||_e||"div",{className:c,onScroll:I,ref:this._outerRefSetter,style:al({position:"relative",height:d,width:on,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},A)},U.createElement(S||T||"div",{children:_n,ref:y,style:{height:O?"100%":Bn,pointerEvents:Wn?"none":void 0,width:O?Bn:"100%"}}))},v._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var p=this.props.itemCount;if(p>0){var E=this._getRangeToRender(),c=E[0],a=E[1],d=E[2],y=E[3];this._callOnItemsRendered(c,a,d,y)}}if(typeof this.props.onScroll=="function"){var S=this.state,T=S.scrollDirection,C=S.scrollOffset,x=S.scrollUpdateWasRequested;this._callOnScroll(T,C,x)}},v._getRangeToRender=function(){var p=this.props,E=p.itemCount,c=p.overscanCount,a=this.state,d=a.isScrolling,y=a.scrollDirection,S=a.scrollOffset;if(E===0)return[0,0,0,0];var T=l(this.props,S,this._instanceProps),C=u(this.props,T,S,this._instanceProps),x=!d||y==="backward"?Math.max(1,c):1,R=!d||y==="forward"?Math.max(1,c):1;return[Math.max(0,T-x),Math.max(0,Math.min(E-1,C+R)),T,C]},g}(U.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var Pp=function(n,t){n.children,n.direction,n.height,n.layout,n.innerTagName,n.outerTagName,n.width,t.instance},Lp=Ip({getItemOffset:function(n,t){var r=n.itemSize;return t*r},getItemSize:function(n,t){var r=n.itemSize;return r},getEstimatedTotalSize:function(n){var t=n.itemCount,r=n.itemSize;return r*t},getOffsetForIndexAndAlignment:function(n,t,r,i,o,l){var u=n.direction,s=n.height,f=n.itemCount,h=n.itemSize,m=n.layout,g=n.width,v=u==="horizontal"||m==="horizontal",w=v?g:s,p=Math.max(0,f*h-w),E=Math.min(p,t*h),c=Math.max(0,t*h-w+h+l);switch(r==="smart"&&(i>=c-w&&i<=E+w?r="auto":r="center"),r){case"start":return E;case"end":return c;case"center":{var a=Math.round(c+(E-c)/2);return a<Math.ceil(w/2)?0:a>p+Math.floor(w/2)?p:a}case"auto":default:return i>=c&&i<=E?i:i<c?c:E}},getStartIndexForOffset:function(n,t){var r=n.itemCount,i=n.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/i)))},getStopIndexForStartIndex:function(n,t,r){var i=n.direction,o=n.height,l=n.itemCount,u=n.itemSize,s=n.layout,f=n.width,h=i==="horizontal"||s==="horizontal",m=t*u,g=h?f:o,v=Math.ceil((g+r-m)/u);return Math.max(0,Math.min(l-1,t+v-1))},initInstanceProps:function(n){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(n){n.itemSize}});function hf(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=hf(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function po(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=hf(e))&&(r&&(r+=" "),r+=n);return r}function Rp(){const{text:e,setLineRange:n,visibleLinesPart:t}=U.useContext(du),[r,i]=U.useState({startIndex:0,endIndex:0}),o=U.useMemo(()=>{const l=[];for(let u=0;u<e.length;u+=pn)l.push(e.slice(u,u+pn));return l},[e]);return j.jsxs(j.Fragment,{children:[j.jsx(Lp,{height:600,itemCount:o.length,itemSize:30,width:"100%",onItemsRendered:({visibleStartIndex:l,visibleStopIndex:u})=>{n(l,u),i({startIndex:l,endIndex:u})},children:({index:l,style:u})=>{const s=o[l],f=t[l];return j.jsxs("div",{style:u,children:[j.jsx("div",{className:"",children:j.jsx("span",{className:po(),children:s})}),f&&j.jsx("div",{className:po("absolute left-0 top-0"),children:f.map((h,m)=>{const g=h.s-l*pn,v=h.e-l*pn;return j.jsx("span",{className:po(h.overLapped&&"bg-gray-300",!h.overLapped&&h.isEven&&!h.isFill&&"bg-red-300",!h.overLapped&&h.isOdd&&!h.isFill&&"bg-green-300",h.isFill&&"bg-transparent"),children:s.slice(g,v)},m)})})]})}}),ou.createPortal(j.jsxs("div",{className:"absolute right-0 bottom-0 bg-gray-100 p-2 text-sm",children:[j.jsx("p",{children:"Visible Range:"}),j.jsxs("p",{children:["Start: ",r.startIndex]}),j.jsxs("p",{children:["End: ",r.endIndex]})]}),document.body)]})}function zp({text:e}){const{setText:n}=U.useContext(du);return U.useEffect(()=>{n(e)},[]),j.jsx("div",{className:"relative w-[800px] h-[600px] border border-red-500 overflow-y-scroll",children:j.jsx(Rp,{})})}function Mp({text:e}){return j.jsx(Ep,{children:j.jsx(zp,{text:e})})}const jp=`晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]
`;function Fp(){return j.jsxs("div",{className:"p-10",children:[j.jsx("h1",{className:"font-bold",children:"Text Range Selection"}),j.jsx("hr",{className:"my-2"}),j.jsx(Mp,{text:jp})]})}Jc(document.getElementById("root")).render(j.jsx(Fp,{}));
