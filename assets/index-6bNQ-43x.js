(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ku={exports:{}},mi={},Yu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),Id=Symbol.for("react.portal"),kd=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Md=Symbol.for("react.suspense"),zd=Symbol.for("react.memo"),jd=Symbol.for("react.lazy"),Ss=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qu=Object.assign,Zu={};function yt(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Xu}yt.prototype.isReactComponent={};yt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};yt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ju(){}Ju.prototype=yt.prototype;function wl(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Xu}var Sl=wl.prototype=new Ju;Sl.constructor=wl;qu(Sl,yt.prototype);Sl.isPureReactComponent=!0;var Ts=Array.isArray,ea=Object.prototype.hasOwnProperty,Tl={current:null},na={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)ea.call(n,r)&&!na.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ar,type:e,key:o,ref:l,props:i,_owner:Tl.current}}function Ad(e,n){return{$$typeof:ar,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function Ud(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Es=/\/+/g;function Ui(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ud(""+e.key):n.toString(36)}function Mr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ar:case Id:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ui(l,0):r,Ts(i)?(t="",e!=null&&(t=e.replace(Es,"$&/")+"/"),Mr(i,n,t,"",function(d){return d})):i!=null&&(El(i)&&(i=Ad(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Es,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Ts(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Ui(o,s);l+=Mr(o,n,t,u,i)}else if(u=Fd(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Ui(o,s++),l+=Mr(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function vr(e,n,t){if(e==null)return e;var r=[],i=0;return Mr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Hd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},zr={transition:null},$d={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:zr,ReactCurrentOwner:Tl};function ra(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:vr,forEach:function(e,n,t){vr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vr(e,function(){n++}),n},toArray:function(e){return vr(e,function(n){return n})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=yt;M.Fragment=kd;M.Profiler=_d;M.PureComponent=wl;M.StrictMode=Pd;M.Suspense=Md;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$d;M.act=ra;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qu({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Tl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)ea.call(n,u)&&!na.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ar,type:e.type,key:i,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Rd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nd,_context:e},e.Consumer=e};M.createElement=ta;M.createFactory=function(e){var n=ta.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Ld,render:e}};M.isValidElement=El;M.lazy=function(e){return{$$typeof:jd,_payload:{_status:-1,_result:e},_init:Hd}};M.memo=function(e,n){return{$$typeof:zd,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=zr.transition;zr.transition={};try{e()}finally{zr.transition=n}};M.unstable_act=ra;M.useCallback=function(e,n){return de.current.useCallback(e,n)};M.useContext=function(e){return de.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return de.current.useDeferredValue(e)};M.useEffect=function(e,n){return de.current.useEffect(e,n)};M.useId=function(){return de.current.useId()};M.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return de.current.useMemo(e,n)};M.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};M.useRef=function(e){return de.current.useRef(e)};M.useState=function(e){return de.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return de.current.useTransition()};M.version="18.3.1";Yu.exports=M;var k=Yu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=k,Wd=Symbol.for("react.element"),Bd=Symbol.for("react.fragment"),Qd=Object.prototype.hasOwnProperty,Gd=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bd={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Qd.call(n,r)&&!bd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Wd,type:e,key:o,ref:l,props:i,_owner:Gd.current}}mi.Fragment=Bd;mi.jsx=ia;mi.jsxs=ia;Ku.exports=mi;var _=Ku.exports,oa={exports:{}},Ce={},la={exports:{}},sa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,N){var L=x.length;x.push(N);e:for(;0<L;){var W=L-1>>>1,Y=x[W];if(0<i(Y,N))x[W]=N,x[L]=Y,L=W;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var N=x[0],L=x.pop();if(L!==N){x[0]=L;e:for(var W=0,Y=x.length,Cn=Y>>>1;W<Cn;){var ye=2*(W+1)-1,$n=x[ye],On=ye+1,gr=x[On];if(0>i($n,L))On<Y&&0>i(gr,$n)?(x[W]=gr,x[On]=L,W=On):(x[W]=$n,x[ye]=L,W=ye);else if(On<Y&&0>i(gr,L))x[W]=gr,x[On]=L,W=On;else break e}}return N}function i(x,N){var L=x.sortIndex-N.sortIndex;return L!==0?L:x.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],g=1,v=null,h=3,m=!1,y=!1,p=!1,S=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var N=t(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=x)r(d),N.sortIndex=N.expirationTime,n(u,N);else break;N=t(d)}}function w(x){if(p=!1,f(x),!y)if(t(u)!==null)y=!0,Ct(T);else{var N=t(d);N!==null&&Hn(w,N.startTime-x)}}function T(x,N){y=!1,p&&(p=!1,c(I),I=-1),m=!0;var L=h;try{for(f(N),v=t(u);v!==null&&(!(v.expirationTime>N)||x&&!F());){var W=v.callback;if(typeof W=="function"){v.callback=null,h=v.priorityLevel;var Y=W(v.expirationTime<=N);N=e.unstable_now(),typeof Y=="function"?v.callback=Y:v===t(u)&&r(u),f(N)}else r(u);v=t(u)}if(v!==null)var Cn=!0;else{var ye=t(d);ye!==null&&Hn(w,ye.startTime-N),Cn=!1}return Cn}finally{v=null,h=L,m=!1}}var C=!1,O=null,I=-1,z=5,P=-1;function F(){return!(e.unstable_now()-P<z)}function ie(){if(O!==null){var x=e.unstable_now();P=x;var N=!0;try{N=O(!0,x)}finally{N?En():(C=!1,O=null)}}else C=!1}var En;if(typeof a=="function")En=function(){a(ie)};else if(typeof MessageChannel<"u"){var hr=new MessageChannel,Ai=hr.port2;hr.port1.onmessage=ie,En=function(){Ai.postMessage(null)}}else En=function(){S(ie,0)};function Ct(x){O=x,C||(C=!0,En())}function Hn(x,N){I=S(function(){x(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Ct(T))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var L=h;h=N;try{return x()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=h;h=x;try{return N()}finally{h=L}},e.unstable_scheduleCallback=function(x,N,L){var W=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?W+L:W):L=W,x){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=L+Y,x={id:g++,callback:N,priorityLevel:x,startTime:L,expirationTime:Y,sortIndex:-1},L>W?(x.sortIndex=L,n(d,x),t(u)===null&&x===t(d)&&(p?(c(I),I=-1):p=!0,Hn(w,L-W))):(x.sortIndex=Y,n(u,x),y||m||(y=!0,Ct(T))),x},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(x){var N=h;return function(){var L=h;h=N;try{return x.apply(this,arguments)}finally{h=L}}}})(sa);la.exports=sa;var Kd=la.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=k,Ee=Kd;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ua=new Set,Gt={};function An(e,n){ct(e,n),ct(e+"Capture",n)}function ct(e,n){for(Gt[e]=n,e=0;e<n.length;e++)ua.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=Object.prototype.hasOwnProperty,Xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cs={},Os={};function qd(e){return So.call(Os,e)?!0:So.call(Cs,e)?!1:Xd.test(e)?Os[e]=!0:(Cs[e]=!0,!1)}function Zd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jd(e,n,t,r){if(n===null||typeof n>"u"||Zd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cl=/[\-:]([a-z])/g;function Ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Cl,Ol);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Cl,Ol);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Cl,Ol);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function xl(e,n,t,r){var i=re.hasOwnProperty(n)?re[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Jd(n,t,i,r)&&(t=null),r||i===null?qd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var en=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),aa=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),Eo=Symbol.for("react.suspense"),Co=Symbol.for("react.suspense_list"),kl=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),da=Symbol.for("react.offscreen"),xs=Symbol.iterator;function Ot(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Hi;function Rt(e){if(Hi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hi=n&&n[1]||""}return`
`+Hi+e}var $i=!1;function Vi(e,n){if(!e||$i)return"";$i=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{$i=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Rt(e):""}function ef(e){switch(e.tag){case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function Oo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Qn:return"Portal";case To:return"Profiler";case Dl:return"StrictMode";case Eo:return"Suspense";case Co:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case aa:return(e._context.displayName||"Context")+".Provider";case Il:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kl:return n=e.displayName||null,n!==null?n:Oo(e.type)||"Memo";case tn:n=e._payload,e=e._init;try{return Oo(e(n))}catch{}}return null}function nf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oo(n);case 8:return n===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tf(e){var n=fa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yr(e){e._valueTracker||(e._valueTracker=tf(e))}function pa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xo(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ds(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ha(e,n){n=n.checked,n!=null&&xl(e,"checked",n,!1)}function Do(e,n){ha(e,n);var t=mn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Io(e,n.type,t):n.hasOwnProperty("defaultValue")&&Io(e,n.type,mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Is(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Io(e,n,t){(n!=="number"||br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Lt=Array.isArray;function rt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+mn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ko(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ks(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Lt(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mn(t)}}function ga(e,n){var t=mn(n.value),r=mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ps(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function va(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Po(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?va(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,ma=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rf=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(e){rf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jt[n]=jt[e]})});function ya(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jt.hasOwnProperty(e)&&jt[e]?(""+n).trim():n+"px"}function wa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ya(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var of=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _o(e,n){if(n){if(of[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function No(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=null;function Pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lo=null,it=null,ot=null;function _s(e){if(e=fr(e)){if(typeof Lo!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Ei(n),Lo(e.stateNode,e.type,n))}}function Sa(e){it?ot?ot.push(e):ot=[e]:it=e}function Ta(){if(it){var e=it,n=ot;if(ot=it=null,_s(e),n)for(e=0;e<n.length;e++)_s(n[e])}}function Ea(e,n){return e(n)}function Ca(){}var Wi=!1;function Oa(e,n,t){if(Wi)return e(n,t);Wi=!0;try{return Ea(e,n,t)}finally{Wi=!1,(it!==null||ot!==null)&&(Ca(),Ta())}}function Kt(e,n){var t=e.stateNode;if(t===null)return null;var r=Ei(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var Mo=!1;if(Xe)try{var xt={};Object.defineProperty(xt,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",xt,xt),window.removeEventListener("test",xt,xt)}catch{Mo=!1}function lf(e,n,t,r,i,o,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(g){this.onError(g)}}var Ft=!1,Kr=null,Yr=!1,zo=null,sf={onError:function(e){Ft=!0,Kr=e}};function uf(e,n,t,r,i,o,l,s,u){Ft=!1,Kr=null,lf.apply(sf,arguments)}function af(e,n,t,r,i,o,l,s,u){if(uf.apply(this,arguments),Ft){if(Ft){var d=Kr;Ft=!1,Kr=null}else throw Error(E(198));Yr||(Yr=!0,zo=d)}}function Un(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function xa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ns(e){if(Un(e)!==e)throw Error(E(188))}function cf(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ns(i),e;if(o===r)return Ns(i),n;o=o.sibling}throw Error(E(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===t){l=!0,t=i,r=o;break}if(s===r){l=!0,r=i,t=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===t){l=!0,t=o,r=i;break}if(s===r){l=!0,r=o,t=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function Da(e){return e=cf(e),e!==null?Ia(e):null}function Ia(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ia(e);if(n!==null)return n;e=e.sibling}return null}var ka=Ee.unstable_scheduleCallback,Rs=Ee.unstable_cancelCallback,df=Ee.unstable_shouldYield,ff=Ee.unstable_requestPaint,K=Ee.unstable_now,pf=Ee.unstable_getCurrentPriorityLevel,_l=Ee.unstable_ImmediatePriority,Pa=Ee.unstable_UserBlockingPriority,Xr=Ee.unstable_NormalPriority,hf=Ee.unstable_LowPriority,_a=Ee.unstable_IdlePriority,yi=null,We=null;function gf(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:yf,vf=Math.log,mf=Math.LN2;function yf(e){return e>>>=0,e===0?32:31-(vf(e)/mf|0)|0}var Sr=64,Tr=4194304;function Mt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~i;s!==0?r=Mt(s):(o&=l,o!==0&&(r=Mt(o)))}else l=t&~i,l!==0?r=Mt(l):o!==0&&(r=Mt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Fe(n),i=1<<t,r|=e[t],n&=~i;return r}function wf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Fe(o),s=1<<l,u=i[l];u===-1?(!(s&t)||s&r)&&(i[l]=wf(s,n)):u<=n&&(e.expiredLanes|=s),o&=~s}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Na(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Bi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Fe(n),e[n]=t}function Tf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Fe(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Nl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Fe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var A=0;function Ra(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var La,Rl,Ma,za,ja,Fo=!1,Er=[],an=null,cn=null,dn=null,Yt=new Map,Xt=new Map,on=[],Ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ls(e,n){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Yt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xt.delete(n.pointerId)}}function Dt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=fr(n),n!==null&&Rl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Cf(e,n,t,r,i){switch(n){case"focusin":return an=Dt(an,e,n,t,r,i),!0;case"dragenter":return cn=Dt(cn,e,n,t,r,i),!0;case"mouseover":return dn=Dt(dn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Yt.set(o,Dt(Yt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Xt.set(o,Dt(Xt.get(o)||null,e,n,t,r,i)),!0}return!1}function Fa(e){var n=In(e.target);if(n!==null){var t=Un(n);if(t!==null){if(n=t.tag,n===13){if(n=xa(t),n!==null){e.blockedOn=n,ja(e.priority,function(){Ma(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ao(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ro=r,t.target.dispatchEvent(r),Ro=null}else return n=fr(t),n!==null&&Rl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ms(e,n,t){jr(e)&&t.delete(n)}function Of(){Fo=!1,an!==null&&jr(an)&&(an=null),cn!==null&&jr(cn)&&(cn=null),dn!==null&&jr(dn)&&(dn=null),Yt.forEach(Ms),Xt.forEach(Ms)}function It(e,n){e.blockedOn===n&&(e.blockedOn=null,Fo||(Fo=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Of)))}function qt(e){function n(i){return It(i,e)}if(0<Er.length){It(Er[0],e);for(var t=1;t<Er.length;t++){var r=Er[t];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&It(an,e),cn!==null&&It(cn,e),dn!==null&&It(dn,e),Yt.forEach(n),Xt.forEach(n),t=0;t<on.length;t++)r=on[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(t=on[0],t.blockedOn===null);)Fa(t),t.blockedOn===null&&on.shift()}var lt=en.ReactCurrentBatchConfig,Zr=!0;function xf(e,n,t,r){var i=A,o=lt.transition;lt.transition=null;try{A=1,Ll(e,n,t,r)}finally{A=i,lt.transition=o}}function Df(e,n,t,r){var i=A,o=lt.transition;lt.transition=null;try{A=4,Ll(e,n,t,r)}finally{A=i,lt.transition=o}}function Ll(e,n,t,r){if(Zr){var i=Ao(e,n,t,r);if(i===null)eo(e,n,r,Jr,t),Ls(e,r);else if(Cf(i,e,n,t,r))r.stopPropagation();else if(Ls(e,r),n&4&&-1<Ef.indexOf(e)){for(;i!==null;){var o=fr(i);if(o!==null&&La(o),o=Ao(e,n,t,r),o===null&&eo(e,n,r,Jr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else eo(e,n,r,null,t)}}var Jr=null;function Ao(e,n,t,r){if(Jr=null,e=Pl(r),e=In(e),e!==null)if(n=Un(e),n===null)e=null;else if(t=n.tag,t===13){if(e=xa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jr=e,null}function Aa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pf()){case _l:return 1;case Pa:return 4;case Xr:case hf:return 16;case _a:return 536870912;default:return 16}default:return 16}}var sn=null,Ml=null,Fr=null;function Ua(){if(Fr)return Fr;var e,n=Ml,t=n.length,r,i="value"in sn?sn.value:sn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Ar(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function zs(){return!1}function Oe(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cr:zs,this.isPropagationStopped=zs,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Oe(wt),dr=G({},wt,{view:0,detail:0}),If=Oe(dr),Qi,Gi,kt,wi=G({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kt&&(kt&&e.type==="mousemove"?(Qi=e.screenX-kt.screenX,Gi=e.screenY-kt.screenY):Gi=Qi=0,kt=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Gi}}),js=Oe(wi),kf=G({},wi,{dataTransfer:0}),Pf=Oe(kf),_f=G({},dr,{relatedTarget:0}),bi=Oe(_f),Nf=G({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=Oe(Nf),Lf=G({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=Oe(Lf),zf=G({},wt,{data:0}),Fs=Oe(zf),jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Af[e])?!!n[e]:!1}function jl(){return Uf}var Hf=G({},dr,{key:function(e){if(e.key){var n=jf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$f=Oe(Hf),Vf=G({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),As=Oe(Vf),Wf=G({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Bf=Oe(Wf),Qf=G({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gf=Oe(Qf),bf=G({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kf=Oe(bf),Yf=[9,13,27,32],Fl=Xe&&"CompositionEvent"in window,At=null;Xe&&"documentMode"in document&&(At=document.documentMode);var Xf=Xe&&"TextEvent"in window&&!At,Ha=Xe&&(!Fl||At&&8<At&&11>=At),Us=" ",Hs=!1;function $a(e,n){switch(e){case"keyup":return Yf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Va(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function qf(e,n){switch(e){case"compositionend":return Va(n);case"keypress":return n.which!==32?null:(Hs=!0,Us);case"textInput":return e=n.data,e===Us&&Hs?null:e;default:return null}}function Zf(e,n){if(bn)return e==="compositionend"||!Fl&&$a(e,n)?(e=Ua(),Fr=Ml=sn=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ha&&n.locale!=="ko"?null:n.data;default:return null}}var Jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jf[e.type]:n==="textarea"}function Wa(e,n,t,r){Sa(r),n=ei(n,"onChange"),0<n.length&&(t=new zl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ut=null,Zt=null;function e0(e){ec(e,0)}function Si(e){var n=Xn(e);if(pa(n))return e}function n0(e,n){if(e==="change")return n}var Ba=!1;if(Xe){var Ki;if(Xe){var Yi="oninput"in document;if(!Yi){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),Yi=typeof Vs.oninput=="function"}Ki=Yi}else Ki=!1;Ba=Ki&&(!document.documentMode||9<document.documentMode)}function Ws(){Ut&&(Ut.detachEvent("onpropertychange",Qa),Zt=Ut=null)}function Qa(e){if(e.propertyName==="value"&&Si(Zt)){var n=[];Wa(n,Zt,e,Pl(e)),Oa(e0,n)}}function t0(e,n,t){e==="focusin"?(Ws(),Ut=n,Zt=t,Ut.attachEvent("onpropertychange",Qa)):e==="focusout"&&Ws()}function r0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Zt)}function i0(e,n){if(e==="click")return Si(n)}function o0(e,n){if(e==="input"||e==="change")return Si(n)}function l0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:l0;function Jt(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!So.call(n,i)||!Ue(e[i],n[i]))return!1}return!0}function Bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qs(e,n){var t=Bs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bs(t)}}function Ga(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ga(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ba(){for(var e=window,n=br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=br(e.document)}return n}function Al(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function s0(e){var n=ba(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ga(t.ownerDocument.documentElement,t)){if(r!==null&&Al(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qs(t,o);var l=Qs(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u0=Xe&&"documentMode"in document&&11>=document.documentMode,Kn=null,Uo=null,Ht=null,Ho=!1;function Gs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ho||Kn==null||Kn!==br(r)||(r=Kn,"selectionStart"in r&&Al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ht&&Jt(Ht,r)||(Ht=r,r=ei(Uo,"onSelect"),0<r.length&&(n=new zl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kn)))}function Or(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Yn={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},Xi={},Ka={};Xe&&(Ka=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Ti(e){if(Xi[e])return Xi[e];if(!Yn[e])return e;var n=Yn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ka)return Xi[e]=n[t];return e}var Ya=Ti("animationend"),Xa=Ti("animationiteration"),qa=Ti("animationstart"),Za=Ti("transitionend"),Ja=new Map,bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,n){Ja.set(e,n),An(n,[e])}for(var qi=0;qi<bs.length;qi++){var Zi=bs[qi],a0=Zi.toLowerCase(),c0=Zi[0].toUpperCase()+Zi.slice(1);wn(a0,"on"+c0)}wn(Ya,"onAnimationEnd");wn(Xa,"onAnimationIteration");wn(qa,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Za,"onTransitionEnd");ct("onMouseEnter",["mouseout","mouseover"]);ct("onMouseLeave",["mouseout","mouseover"]);ct("onPointerEnter",["pointerout","pointerover"]);ct("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zt));function Ks(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,af(r,n,void 0,e),e.currentTarget=null}function ec(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Ks(i,s,d),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Ks(i,s,d),o=u}}}if(Yr)throw e=zo,Yr=!1,zo=null,e}function H(e,n){var t=n[Qo];t===void 0&&(t=n[Qo]=new Set);var r=e+"__bubble";t.has(r)||(nc(n,e,2,!1),t.add(r))}function Ji(e,n,t){var r=0;n&&(r|=4),nc(t,e,r,n)}var xr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[xr]){e[xr]=!0,ua.forEach(function(t){t!=="selectionchange"&&(d0.has(t)||Ji(t,!1,e),Ji(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xr]||(n[xr]=!0,Ji("selectionchange",!1,n))}}function nc(e,n,t,r){switch(Aa(n)){case 1:var i=xf;break;case 4:i=Df;break;default:i=Ll}t=i.bind(null,n,t,e),i=void 0,!Mo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function eo(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=In(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Oa(function(){var d=o,g=Pl(t),v=[];e:{var h=Ja.get(e);if(h!==void 0){var m=zl,y=e;switch(e){case"keypress":if(Ar(t)===0)break e;case"keydown":case"keyup":m=$f;break;case"focusin":y="focus",m=bi;break;case"focusout":y="blur",m=bi;break;case"beforeblur":case"afterblur":m=bi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Bf;break;case Ya:case Xa:case qa:m=Rf;break;case Za:m=Gf;break;case"scroll":m=If;break;case"wheel":m=Kf;break;case"copy":case"cut":case"paste":m=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=As}var p=(n&4)!==0,S=!p&&e==="scroll",c=p?h!==null?h+"Capture":null:h;p=[];for(var a=d,f;a!==null;){f=a;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,c!==null&&(w=Kt(a,c),w!=null&&p.push(nr(a,w,f)))),S)break;a=a.return}0<p.length&&(h=new m(h,y,null,t,g),v.push({event:h,listeners:p}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&t!==Ro&&(y=t.relatedTarget||t.fromElement)&&(In(y)||y[qe]))break e;if((m||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=t.relatedTarget||t.toElement,m=d,y=y?In(y):null,y!==null&&(S=Un(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=d),m!==y)){if(p=js,w="onMouseLeave",c="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(p=As,w="onPointerLeave",c="onPointerEnter",a="pointer"),S=m==null?h:Xn(m),f=y==null?h:Xn(y),h=new p(w,a+"leave",m,t,g),h.target=S,h.relatedTarget=f,w=null,In(g)===d&&(p=new p(c,a+"enter",y,t,g),p.target=f,p.relatedTarget=S,w=p),S=w,m&&y)n:{for(p=m,c=y,a=0,f=p;f;f=Vn(f))a++;for(f=0,w=c;w;w=Vn(w))f++;for(;0<a-f;)p=Vn(p),a--;for(;0<f-a;)c=Vn(c),f--;for(;a--;){if(p===c||c!==null&&p===c.alternate)break n;p=Vn(p),c=Vn(c)}p=null}else p=null;m!==null&&Ys(v,h,m,p,!1),y!==null&&S!==null&&Ys(v,S,y,p,!0)}}e:{if(h=d?Xn(d):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=n0;else if($s(h))if(Ba)T=o0;else{T=r0;var C=t0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=i0);if(T&&(T=T(e,d))){Wa(v,T,t,g);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Io(h,"number",h.value)}switch(C=d?Xn(d):window,e){case"focusin":($s(C)||C.contentEditable==="true")&&(Kn=C,Uo=d,Ht=null);break;case"focusout":Ht=Uo=Kn=null;break;case"mousedown":Ho=!0;break;case"contextmenu":case"mouseup":case"dragend":Ho=!1,Gs(v,t,g);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Gs(v,t,g)}var O;if(Fl)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else bn?$a(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Ha&&t.locale!=="ko"&&(bn||I!=="onCompositionStart"?I==="onCompositionEnd"&&bn&&(O=Ua()):(sn=g,Ml="value"in sn?sn.value:sn.textContent,bn=!0)),C=ei(d,I),0<C.length&&(I=new Fs(I,e,null,t,g),v.push({event:I,listeners:C}),O?I.data=O:(O=Va(t),O!==null&&(I.data=O)))),(O=Xf?qf(e,t):Zf(e,t))&&(d=ei(d,"onBeforeInput"),0<d.length&&(g=new Fs("onBeforeInput","beforeinput",null,t,g),v.push({event:g,listeners:d}),g.data=O))}ec(v,n)})}function nr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ei(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Kt(e,t),o!=null&&r.unshift(nr(e,o,i)),o=Kt(e,n),o!=null&&r.push(nr(e,o,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var s=t,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,i?(u=Kt(t,o),u!=null&&l.unshift(nr(t,u,s))):i||(u=Kt(t,o),u!=null&&l.push(nr(t,u,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var f0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(f0,`
`).replace(p0,"")}function Dr(e,n,t){if(n=Xs(n),Xs(e)!==n&&t)throw Error(E(425))}function ni(){}var $o=null,Vo=null;function Wo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bo=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,qs=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof qs<"u"?function(e){return qs.resolve(null).then(e).catch(v0)}:Bo;function v0(e){setTimeout(function(){throw e})}function no(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),qt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);qt(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Zs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var St=Math.random().toString(36).slice(2),Ve="__reactFiber$"+St,tr="__reactProps$"+St,qe="__reactContainer$"+St,Qo="__reactEvents$"+St,m0="__reactListeners$"+St,y0="__reactHandles$"+St;function In(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[qe]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Zs(e);e!==null;){if(t=e[Ve])return t;e=Zs(e)}return n}e=t,t=e.parentNode}return null}function fr(e){return e=e[Ve]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ei(e){return e[tr]||null}var Go=[],qn=-1;function Sn(e){return{current:e}}function $(e){0>qn||(e.current=Go[qn],Go[qn]=null,qn--)}function U(e,n){qn++,Go[qn]=e.current,e.current=n}var yn={},ue=Sn(yn),ge=Sn(!1),Rn=yn;function dt(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function ti(){$(ge),$(ue)}function Js(e,n,t){if(ue.current!==yn)throw Error(E(168));U(ue,n),U(ge,t)}function tc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(E(108,nf(e)||"Unknown",i));return G({},t,r)}function ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Rn=ue.current,U(ue,e),U(ge,ge.current),!0}function eu(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=tc(e,n,Rn),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(ue),U(ue,e)):$(ge),U(ge,t)}var Ge=null,Ci=!1,to=!1;function rc(e){Ge===null?Ge=[e]:Ge.push(e)}function w0(e){Ci=!0,rc(e)}function Tn(){if(!to&&Ge!==null){to=!0;var e=0,n=A;try{var t=Ge;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ge=null,Ci=!1}catch(i){throw Ge!==null&&(Ge=Ge.slice(e+1)),ka(_l,Tn),i}finally{A=n,to=!1}}return null}var Zn=[],Jn=0,ii=null,oi=0,De=[],Ie=0,Ln=null,be=1,Ke="";function xn(e,n){Zn[Jn++]=oi,Zn[Jn++]=ii,ii=e,oi=n}function ic(e,n,t){De[Ie++]=be,De[Ie++]=Ke,De[Ie++]=Ln,Ln=e;var r=be;e=Ke;var i=32-Fe(r)-1;r&=~(1<<i),t+=1;var o=32-Fe(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,be=1<<32-Fe(n)+i|t<<i|r,Ke=o+e}else be=1<<o|t<<i|r,Ke=e}function Ul(e){e.return!==null&&(xn(e,1),ic(e,1,0))}function Hl(e){for(;e===ii;)ii=Zn[--Jn],Zn[Jn]=null,oi=Zn[--Jn],Zn[Jn]=null;for(;e===Ln;)Ln=De[--Ie],De[Ie]=null,Ke=De[--Ie],De[Ie]=null,be=De[--Ie],De[Ie]=null}var Te=null,Se=null,V=!1,je=null;function oc(e,n){var t=Pe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function nu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Te=e,Se=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Te=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ln!==null?{id:be,overflow:Ke}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Te=e,Se=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ko(e){if(V){var n=Se;if(n){var t=n;if(!nu(e,n)){if(bo(e))throw Error(E(418));n=fn(t.nextSibling);var r=Te;n&&nu(e,n)?oc(r,t):(e.flags=e.flags&-4097|2,V=!1,Te=e)}}else{if(bo(e))throw Error(E(418));e.flags=e.flags&-4097|2,V=!1,Te=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Ir(e){if(e!==Te)return!1;if(!V)return tu(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wo(e.type,e.memoizedProps)),n&&(n=Se)){if(bo(e))throw lc(),Error(E(418));for(;n;)oc(e,n),n=fn(n.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Se=fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=Te?fn(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=Se;e;)e=fn(e.nextSibling)}function ft(){Se=Te=null,V=!1}function $l(e){je===null?je=[e]:je.push(e)}var S0=en.ReactCurrentBatchConfig;function Pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function kr(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ru(e){var n=e._init;return n(e._payload)}function sc(e){function n(c,a){if(e){var f=c.deletions;f===null?(c.deletions=[a],c.flags|=16):f.push(a)}}function t(c,a){if(!e)return null;for(;a!==null;)n(c,a),a=a.sibling;return null}function r(c,a){for(c=new Map;a!==null;)a.key!==null?c.set(a.key,a):c.set(a.index,a),a=a.sibling;return c}function i(c,a){return c=vn(c,a),c.index=0,c.sibling=null,c}function o(c,a,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<a?(c.flags|=2,a):f):(c.flags|=2,a)):(c.flags|=1048576,a)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function s(c,a,f,w){return a===null||a.tag!==6?(a=ao(f,c.mode,w),a.return=c,a):(a=i(a,f),a.return=c,a)}function u(c,a,f,w){var T=f.type;return T===Gn?g(c,a,f.props.children,w,f.key):a!==null&&(a.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tn&&ru(T)===a.type)?(w=i(a,f.props),w.ref=Pt(c,a,f),w.return=c,w):(w=Qr(f.type,f.key,f.props,null,c.mode,w),w.ref=Pt(c,a,f),w.return=c,w)}function d(c,a,f,w){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=co(f,c.mode,w),a.return=c,a):(a=i(a,f.children||[]),a.return=c,a)}function g(c,a,f,w,T){return a===null||a.tag!==7?(a=Nn(f,c.mode,w,T),a.return=c,a):(a=i(a,f),a.return=c,a)}function v(c,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=ao(""+a,c.mode,f),a.return=c,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case mr:return f=Qr(a.type,a.key,a.props,null,c.mode,f),f.ref=Pt(c,null,a),f.return=c,f;case Qn:return a=co(a,c.mode,f),a.return=c,a;case tn:var w=a._init;return v(c,w(a._payload),f)}if(Lt(a)||Ot(a))return a=Nn(a,c.mode,f,null),a.return=c,a;kr(c,a)}return null}function h(c,a,f,w){var T=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:s(c,a,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return f.key===T?u(c,a,f,w):null;case Qn:return f.key===T?d(c,a,f,w):null;case tn:return T=f._init,h(c,a,T(f._payload),w)}if(Lt(f)||Ot(f))return T!==null?null:g(c,a,f,w,null);kr(c,f)}return null}function m(c,a,f,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return c=c.get(f)||null,s(a,c,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mr:return c=c.get(w.key===null?f:w.key)||null,u(a,c,w,T);case Qn:return c=c.get(w.key===null?f:w.key)||null,d(a,c,w,T);case tn:var C=w._init;return m(c,a,f,C(w._payload),T)}if(Lt(w)||Ot(w))return c=c.get(f)||null,g(a,c,w,T,null);kr(a,w)}return null}function y(c,a,f,w){for(var T=null,C=null,O=a,I=a=0,z=null;O!==null&&I<f.length;I++){O.index>I?(z=O,O=null):z=O.sibling;var P=h(c,O,f[I],w);if(P===null){O===null&&(O=z);break}e&&O&&P.alternate===null&&n(c,O),a=o(P,a,I),C===null?T=P:C.sibling=P,C=P,O=z}if(I===f.length)return t(c,O),V&&xn(c,I),T;if(O===null){for(;I<f.length;I++)O=v(c,f[I],w),O!==null&&(a=o(O,a,I),C===null?T=O:C.sibling=O,C=O);return V&&xn(c,I),T}for(O=r(c,O);I<f.length;I++)z=m(O,c,I,f[I],w),z!==null&&(e&&z.alternate!==null&&O.delete(z.key===null?I:z.key),a=o(z,a,I),C===null?T=z:C.sibling=z,C=z);return e&&O.forEach(function(F){return n(c,F)}),V&&xn(c,I),T}function p(c,a,f,w){var T=Ot(f);if(typeof T!="function")throw Error(E(150));if(f=T.call(f),f==null)throw Error(E(151));for(var C=T=null,O=a,I=a=0,z=null,P=f.next();O!==null&&!P.done;I++,P=f.next()){O.index>I?(z=O,O=null):z=O.sibling;var F=h(c,O,P.value,w);if(F===null){O===null&&(O=z);break}e&&O&&F.alternate===null&&n(c,O),a=o(F,a,I),C===null?T=F:C.sibling=F,C=F,O=z}if(P.done)return t(c,O),V&&xn(c,I),T;if(O===null){for(;!P.done;I++,P=f.next())P=v(c,P.value,w),P!==null&&(a=o(P,a,I),C===null?T=P:C.sibling=P,C=P);return V&&xn(c,I),T}for(O=r(c,O);!P.done;I++,P=f.next())P=m(O,c,I,P.value,w),P!==null&&(e&&P.alternate!==null&&O.delete(P.key===null?I:P.key),a=o(P,a,I),C===null?T=P:C.sibling=P,C=P);return e&&O.forEach(function(ie){return n(c,ie)}),V&&xn(c,I),T}function S(c,a,f,w){if(typeof f=="object"&&f!==null&&f.type===Gn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:e:{for(var T=f.key,C=a;C!==null;){if(C.key===T){if(T=f.type,T===Gn){if(C.tag===7){t(c,C.sibling),a=i(C,f.props.children),a.return=c,c=a;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tn&&ru(T)===C.type){t(c,C.sibling),a=i(C,f.props),a.ref=Pt(c,C,f),a.return=c,c=a;break e}t(c,C);break}else n(c,C);C=C.sibling}f.type===Gn?(a=Nn(f.props.children,c.mode,w,f.key),a.return=c,c=a):(w=Qr(f.type,f.key,f.props,null,c.mode,w),w.ref=Pt(c,a,f),w.return=c,c=w)}return l(c);case Qn:e:{for(C=f.key;a!==null;){if(a.key===C)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){t(c,a.sibling),a=i(a,f.children||[]),a.return=c,c=a;break e}else{t(c,a);break}else n(c,a);a=a.sibling}a=co(f,c.mode,w),a.return=c,c=a}return l(c);case tn:return C=f._init,S(c,a,C(f._payload),w)}if(Lt(f))return y(c,a,f,w);if(Ot(f))return p(c,a,f,w);kr(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(t(c,a.sibling),a=i(a,f),a.return=c,c=a):(t(c,a),a=ao(f,c.mode,w),a.return=c,c=a),l(c)):t(c,a)}return S}var pt=sc(!0),uc=sc(!1),li=Sn(null),si=null,et=null,Vl=null;function Wl(){Vl=et=si=null}function Bl(e){var n=li.current;$(li),e._currentValue=n}function Yo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function st(e,n){si=e,Vl=et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Vl!==e)if(e={context:e,memoizedValue:n,next:null},et===null){if(si===null)throw Error(E(308));et=e,si.dependencies={lanes:0,firstContext:e}}else et=et.next=e;return n}var kn=null;function Ql(e){kn===null?kn=[e]:kn.push(e)}function ac(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ql(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ze(e,r)}function Ze(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var rn=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ze(e,t)}return i=r.interleaved,i===null?(n.next=n,Ql(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ze(e,t)}function Ur(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nl(e,t)}}function iu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ui(e,n,t,r){var i=e.updateQueue;rn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?o=d:l.next=d,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(o!==null){var v=i.baseState;l=0,g=d=u=null,s=o;do{var h=s.lane,m=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,p=s;switch(h=n,m=t,p.tag){case 1:if(y=p.payload,typeof y=="function"){v=y.call(m,v,h);break e}v=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=p.payload,h=typeof y=="function"?y.call(m,v,h):y,h==null)break e;v=G({},v,h);break e;case 2:rn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=m,u=v):g=g.next=m,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=v),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);zn|=l,e.lanes=l,e.memoizedState=v}}function ou(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var pr={},Be=Sn(pr),rr=Sn(pr),ir=Sn(pr);function Pn(e){if(e===pr)throw Error(E(174));return e}function bl(e,n){switch(U(ir,n),U(rr,e),U(Be,pr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Po(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Po(n,e)}$(Be),U(Be,n)}function ht(){$(Be),$(rr),$(ir)}function dc(e){Pn(ir.current);var n=Pn(Be.current),t=Po(n,e.type);n!==t&&(U(rr,e),U(Be,t))}function Kl(e){rr.current===e&&($(Be),$(rr))}var B=Sn(0);function ai(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ro=[];function Yl(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var Hr=en.ReactCurrentDispatcher,io=en.ReactCurrentBatchConfig,Mn=0,Q=null,q=null,J=null,ci=!1,$t=!1,or=0,T0=0;function oe(){throw Error(E(321))}function Xl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function ql(e,n,t,r,i,o){if(Mn=o,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Hr.current=e===null||e.memoizedState===null?x0:D0,e=t(r,i),$t){o=0;do{if($t=!1,or=0,25<=o)throw Error(E(301));o+=1,J=q=null,n.updateQueue=null,Hr.current=I0,e=t(r,i)}while($t)}if(Hr.current=di,n=q!==null&&q.next!==null,Mn=0,J=q=Q=null,ci=!1,n)throw Error(E(300));return e}function Zl(){var e=or!==0;return or=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?Q.memoizedState=J=e:J=J.next=e,J}function Re(){if(q===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var n=J===null?Q.memoizedState:J.next;if(n!==null)J=n,q=e;else{if(e===null)throw Error(E(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},J===null?Q.memoizedState=J=e:J=J.next=e}return J}function lr(e,n){return typeof n=="function"?n(e):n}function oo(e){var n=Re(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=q,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,d=o;do{var g=d.lane;if((Mn&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=v,l=r):u=u.next=v,Q.lanes|=g,zn|=g}d=d.next}while(d!==null&&d!==o);u===null?l=r:u.next=s,Ue(r,n.memoizedState)||(he=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function lo(e){var n=Re(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ue(o,n.memoizedState)||(he=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function fc(){}function pc(e,n){var t=Q,r=Re(),i=n(),o=!Ue(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Jl(vc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,sr(9,gc.bind(null,t,r,i,n),void 0,null),ee===null)throw Error(E(349));Mn&30||hc(t,n,i)}return i}function hc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function gc(e,n,t,r){n.value=t,n.getSnapshot=r,mc(n)&&yc(e)}function vc(e,n,t){return t(function(){mc(n)&&yc(e)})}function mc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function yc(e){var n=Ze(e,1);n!==null&&Ae(n,e,1,-1)}function lu(e){var n=$e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},n.queue=e,e=e.dispatch=O0.bind(null,Q,e),[n.memoizedState,e]}function sr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function wc(){return Re().memoizedState}function $r(e,n,t,r){var i=$e();Q.flags|=e,i.memoizedState=sr(1|n,t,void 0,r===void 0?null:r)}function Oi(e,n,t,r){var i=Re();r=r===void 0?null:r;var o=void 0;if(q!==null){var l=q.memoizedState;if(o=l.destroy,r!==null&&Xl(r,l.deps)){i.memoizedState=sr(n,t,o,r);return}}Q.flags|=e,i.memoizedState=sr(1|n,t,o,r)}function su(e,n){return $r(8390656,8,e,n)}function Jl(e,n){return Oi(2048,8,e,n)}function Sc(e,n){return Oi(4,2,e,n)}function Tc(e,n){return Oi(4,4,e,n)}function Ec(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cc(e,n,t){return t=t!=null?t.concat([e]):null,Oi(4,4,Ec.bind(null,n,e),t)}function es(){}function Oc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Xl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function xc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Xl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Dc(e,n,t){return Mn&21?(Ue(t,n)||(t=Na(),Q.lanes|=t,zn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function E0(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=io.transition;io.transition={};try{e(!1),n()}finally{A=t,io.transition=r}}function Ic(){return Re().memoizedState}function C0(e,n,t){var r=gn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},kc(e))Pc(n,t);else if(t=ac(e,n,t,r),t!==null){var i=ce();Ae(t,e,r,i),_c(t,n,r)}}function O0(e,n,t){var r=gn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(kc(e))Pc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,s=o(l,t);if(i.hasEagerState=!0,i.eagerState=s,Ue(s,l)){var u=n.interleaved;u===null?(i.next=i,Ql(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=ac(e,n,i,r),t!==null&&(i=ce(),Ae(t,e,r,i),_c(t,n,r))}}function kc(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function Pc(e,n){$t=ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _c(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nl(e,t)}}var di={readContext:Ne,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},x0={readContext:Ne,useCallback:function(e,n){return $e().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:su,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,$r(4194308,4,Ec.bind(null,n,e),t)},useLayoutEffect:function(e,n){return $r(4194308,4,e,n)},useInsertionEffect:function(e,n){return $r(4,2,e,n)},useMemo:function(e,n){var t=$e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=$e();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=C0.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var n=$e();return e={current:e},n.memoizedState=e},useState:lu,useDebugValue:es,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=lu(!1),n=e[0];return e=E0.bind(null,e[1]),$e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Q,i=$e();if(V){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),ee===null)throw Error(E(349));Mn&30||hc(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,su(vc.bind(null,r,o,e),[e]),r.flags|=2048,sr(9,gc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=$e(),n=ee.identifierPrefix;if(V){var t=Ke,r=be;t=(r&~(1<<32-Fe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=or++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=T0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},D0={readContext:Ne,useCallback:Oc,useContext:Ne,useEffect:Jl,useImperativeHandle:Cc,useInsertionEffect:Sc,useLayoutEffect:Tc,useMemo:xc,useReducer:oo,useRef:wc,useState:function(){return oo(lr)},useDebugValue:es,useDeferredValue:function(e){var n=Re();return Dc(n,q.memoizedState,e)},useTransition:function(){var e=oo(lr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:fc,useSyncExternalStore:pc,useId:Ic,unstable_isNewReconciler:!1},I0={readContext:Ne,useCallback:Oc,useContext:Ne,useEffect:Jl,useImperativeHandle:Cc,useInsertionEffect:Sc,useLayoutEffect:Tc,useMemo:xc,useReducer:lo,useRef:wc,useState:function(){return lo(lr)},useDebugValue:es,useDeferredValue:function(e){var n=Re();return q===null?n.memoizedState=e:Dc(n,q.memoizedState,e)},useTransition:function(){var e=lo(lr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:fc,useSyncExternalStore:pc,useId:Ic,unstable_isNewReconciler:!1};function Me(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xi={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ce(),i=gn(e),o=Ye(r,i);o.payload=n,t!=null&&(o.callback=t),n=pn(e,o,i),n!==null&&(Ae(n,e,i,r),Ur(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ce(),i=gn(e),o=Ye(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=pn(e,o,i),n!==null&&(Ae(n,e,i,r),Ur(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),r=gn(e),i=Ye(t,r);i.tag=2,n!=null&&(i.callback=n),n=pn(e,i,r),n!==null&&(Ae(n,e,r,t),Ur(n,e,r))}};function uu(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Jt(t,r)||!Jt(i,o):!0}function Nc(e,n,t){var r=!1,i=yn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(i=ve(n)?Rn:ue.current,r=n.contextTypes,o=(r=r!=null)?dt(e,i):yn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function au(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xi.enqueueReplaceState(n,n.state,null)}function qo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Gl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ne(o):(o=ve(n)?Rn:ue.current,i.context=dt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Xo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&xi.enqueueReplaceState(i,i.state,null),ui(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gt(e,n){try{var t="",r=n;do t+=ef(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function so(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Zo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function Rc(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){pi||(pi=!0,ul=r),Zo(e,n)},t}function Lc(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Zo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Zo(e,n),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function cu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new k0;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=V0.bind(null,e,n,t),n.then(e,e))}function du(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function fu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,pn(t,n,1))),t.lanes|=1),e)}var P0=en.ReactCurrentOwner,he=!1;function ae(e,n,t,r){n.child=e===null?uc(n,null,t,r):pt(n,e.child,t,r)}function pu(e,n,t,r,i){t=t.render;var o=n.ref;return st(n,i),r=ql(e,n,t,r,o,i),t=Zl(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Je(e,n,i)):(V&&t&&Ul(n),n.flags|=1,ae(e,n,r,i),n.child)}function hu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!us(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Mc(e,n,o,r,i)):(e=Qr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Jt,t(l,r)&&e.ref===n.ref)return Je(e,n,i)}return n.flags|=1,e=vn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Mc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Jt(o,r)&&e.ref===n.ref)if(he=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,Je(e,n,i)}return Jo(e,n,t,r,i)}function zc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(tt,we),we|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(tt,we),we|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,U(tt,we),we|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,U(tt,we),we|=r;return ae(e,n,i,t),n.child}function jc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Jo(e,n,t,r,i){var o=ve(t)?Rn:ue.current;return o=dt(n,o),st(n,i),t=ql(e,n,t,r,o,i),r=Zl(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Je(e,n,i)):(V&&r&&Ul(n),n.flags|=1,ae(e,n,t,i),n.child)}function gu(e,n,t,r,i){if(ve(t)){var o=!0;ri(n)}else o=!1;if(st(n,i),n.stateNode===null)Vr(e,n),Nc(n,t,r),qo(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var u=l.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=ve(t)?Rn:ue.current,d=dt(n,d));var g=t.getDerivedStateFromProps,v=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&au(n,l,r,d),rn=!1;var h=n.memoizedState;l.state=h,ui(n,r,l,i),u=n.memoizedState,s!==r||h!==u||ge.current||rn?(typeof g=="function"&&(Xo(n,t,g,r),u=n.memoizedState),(s=rn||uu(n,t,s,r,h,u,d))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,cc(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:Me(n.type,s),l.props=d,v=n.pendingProps,h=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ne(u):(u=ve(t)?Rn:ue.current,u=dt(n,u));var m=t.getDerivedStateFromProps;(g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||h!==u)&&au(n,l,r,u),rn=!1,h=n.memoizedState,l.state=h,ui(n,r,l,i);var y=n.memoizedState;s!==v||h!==y||ge.current||rn?(typeof m=="function"&&(Xo(n,t,m,r),y=n.memoizedState),(d=rn||uu(n,t,d,r,h,y,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),l.props=r,l.state=y,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return el(e,n,t,r,o,i)}function el(e,n,t,r,i,o){jc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&eu(n,t,!1),Je(e,n,o);r=n.stateNode,P0.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=pt(n,e.child,null,o),n.child=pt(n,null,s,o)):ae(e,n,s,o),n.memoizedState=r.state,i&&eu(n,t,!0),n.child}function Fc(e){var n=e.stateNode;n.pendingContext?Js(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Js(e,n.context,!1),bl(e,n.containerInfo)}function vu(e,n,t,r,i){return ft(),$l(i),n.flags|=256,ae(e,n,t,r),n.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,n,t){var r=n.pendingProps,i=B.current,o=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(B,i&1),e===null)return Ko(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ki(l,r,0,null),e=Nn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=tl(t),n.memoizedState=nl,e):ns(n,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return _0(e,n,l,r,s,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=vn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=vn(s,o):(o=Nn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?tl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=nl,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ns(e,n){return n=ki({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Pr(e,n,t,r){return r!==null&&$l(r),pt(n,e.child,null,t),e=ns(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _0(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=so(Error(E(422))),Pr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=ki({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&pt(n,e.child,null,l),n.child.memoizedState=tl(l),n.memoizedState=nl,o);if(!(n.mode&1))return Pr(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=so(o,r,void 0),Pr(e,n,l,r)}if(s=(l&e.childLanes)!==0,he||s){if(r=ee,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ze(e,i),Ae(r,e,i,-1))}return ss(),r=so(Error(E(421))),Pr(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=W0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Se=fn(i.nextSibling),Te=n,V=!0,je=null,e!==null&&(De[Ie++]=be,De[Ie++]=Ke,De[Ie++]=Ln,be=e.id,Ke=e.overflow,Ln=n),n=ns(n,r.children),n.flags|=4096,n)}function mu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yo(e.return,n,t)}function uo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Uc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,t,n);else if(e.tag===19)mu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ai(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),uo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ai(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}uo(n,!0,t,null,o);break;case"together":uo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),zn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function N0(e,n,t){switch(n.tag){case 3:Fc(n),ft();break;case 5:dc(n);break;case 1:ve(n.type)&&ri(n);break;case 4:bl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;U(li,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(U(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?Ac(e,n,t):(U(B,B.current&1),e=Je(e,n,t),e!==null?e.sibling:null);U(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Uc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,zc(e,n,t)}return Je(e,n,t)}var Hc,rl,$c,Vc;Hc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};rl=function(){};$c=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Pn(Be.current);var o=null;switch(t){case"input":i=xo(e,i),r=xo(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=ko(e,i),r=ko(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ni)}_o(t,r);var l;t=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gt.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(d,t)),t=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&H("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Vc=function(e,n,t,r){t!==r&&(n.flags|=4)};function _t(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function R0(e,n,t){var r=n.pendingProps;switch(Hl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return ve(n.type)&&ti(),le(n),null;case 3:return r=n.stateNode,ht(),$(ge),$(ue),Yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,je!==null&&(dl(je),je=null))),rl(e,n),le(n),null;case 5:Kl(n);var i=Pn(ir.current);if(t=n.type,e!==null&&n.stateNode!=null)$c(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return le(n),null}if(e=Pn(Be.current),Ir(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ve]=n,r[tr]=o,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<zt.length;i++)H(zt[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ds(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":ks(r,o),H("invalid",r)}_o(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Dr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Dr(r.textContent,s,e),i=["children",""+s]):Gt.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&H("scroll",r)}switch(t){case"input":yr(r),Is(r,o,!0);break;case"textarea":yr(r),Ps(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ni)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=va(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ve]=n,e[tr]=r,Hc(e,n,!1,!1),n.stateNode=e;e:{switch(l=No(t,r),t){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<zt.length;i++)H(zt[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Ds(e,r),i=xo(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),H("invalid",e);break;case"textarea":ks(e,r),i=ko(e,r),H("invalid",e);break;default:i=r}_o(t,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?wa(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ma(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&bt(e,u):typeof u=="number"&&bt(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gt.hasOwnProperty(o)?u!=null&&o==="onScroll"&&H("scroll",e):u!=null&&xl(e,o,u,l))}switch(t){case"input":yr(e),Is(e,r,!1);break;case"textarea":yr(e),Ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rt(e,!!r.multiple,o,!1):r.defaultValue!=null&&rt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ni)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Vc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Pn(ir.current),Pn(Be.current),Ir(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ve]=n,(o=r.nodeValue!==t)&&(e=Te,e!==null))switch(e.tag){case 3:Dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ve]=n,n.stateNode=r}return le(n),null;case 13:if($(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Se!==null&&n.mode&1&&!(n.flags&128))lc(),ft(),n.flags|=98560,o=!1;else if(o=Ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Ve]=n}else ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),o=!1}else je!==null&&(dl(je),je=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):ss())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return ht(),rl(e,n),e===null&&er(n.stateNode.containerInfo),le(n),null;case 10:return Bl(n.type._context),le(n),null;case 17:return ve(n.type)&&ti(),le(n),null;case 19:if($(B),o=n.memoizedState,o===null)return le(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)_t(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ai(e),l!==null){for(n.flags|=128,_t(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&K()>vt&&(n.flags|=128,r=!0,_t(o,!1),n.lanes=4194304)}else{if(!r)if(e=ai(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),_t(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!V)return le(n),null}else 2*K()-o.renderingStartTime>vt&&t!==1073741824&&(n.flags|=128,r=!0,_t(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=K(),n.sibling=null,t=B.current,U(B,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return ls(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?we&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function L0(e,n){switch(Hl(n),n.tag){case 1:return ve(n.type)&&ti(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),$(ge),$(ue),Yl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Kl(n),null;case 13:if($(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(B),null;case 4:return ht(),null;case 10:return Bl(n.type._context),null;case 22:case 23:return ls(),null;case 24:return null;default:return null}}var _r=!1,se=!1,M0=typeof WeakSet=="function"?WeakSet:Set,D=null;function nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){b(e,n,r)}else t.current=null}function il(e,n,t){try{t()}catch(r){b(e,n,r)}}var yu=!1;function z0(e,n){if($o=Zr,e=ba(),Al(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,s=-1,u=-1,d=0,g=0,v=e,h=null;n:for(;;){for(var m;v!==t||i!==0&&v.nodeType!==3||(s=l+i),v!==o||r!==0&&v.nodeType!==3||(u=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(m=v.firstChild)!==null;)h=v,v=m;for(;;){if(v===e)break n;if(h===t&&++d===i&&(s=l),h===o&&++g===r&&(u=l),(m=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=m}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vo={focusedElem:e,selectionRange:t},Zr=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var p=y.memoizedProps,S=y.memoizedState,c=n.stateNode,a=c.getSnapshotBeforeUpdate(n.elementType===n.type?p:Me(n.type,p),S);c.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){b(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return y=yu,yu=!1,y}function Vt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&il(n,t,o)}i=i.next}while(i!==r)}}function Di(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ol(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wc(e){var n=e.alternate;n!==null&&(e.alternate=null,Wc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ve],delete n[tr],delete n[Qo],delete n[m0],delete n[y0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ni));else if(r!==4&&(e=e.child,e!==null))for(ll(e,n,t),e=e.sibling;e!==null;)ll(e,n,t),e=e.sibling}function sl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sl(e,n,t),e=e.sibling;e!==null;)sl(e,n,t),e=e.sibling}var ne=null,ze=!1;function nn(e,n,t){for(t=t.child;t!==null;)Qc(e,n,t),t=t.sibling}function Qc(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(yi,t)}catch{}switch(t.tag){case 5:se||nt(t,n);case 6:var r=ne,i=ze;ne=null,nn(e,n,t),ne=r,ze=i,ne!==null&&(ze?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(ze?(e=ne,t=t.stateNode,e.nodeType===8?no(e.parentNode,t):e.nodeType===1&&no(e,t),qt(e)):no(ne,t.stateNode));break;case 4:r=ne,i=ze,ne=t.stateNode.containerInfo,ze=!0,nn(e,n,t),ne=r,ze=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&il(t,n,l),i=i.next}while(i!==r)}nn(e,n,t);break;case 1:if(!se&&(nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){b(t,n,s)}nn(e,n,t);break;case 21:nn(e,n,t);break;case 22:t.mode&1?(se=(r=se)||t.memoizedState!==null,nn(e,n,t),se=r):nn(e,n,t);break;default:nn(e,n,t)}}function Su(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new M0),n.forEach(function(r){var i=B0.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,ze=!1;break e;case 3:ne=s.stateNode.containerInfo,ze=!0;break e;case 4:ne=s.stateNode.containerInfo,ze=!0;break e}s=s.return}if(ne===null)throw Error(E(160));Qc(o,l,i),ne=null,ze=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){b(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gc(n,e),n=n.sibling}function Gc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),He(e),r&4){try{Vt(3,e,e.return),Di(3,e)}catch(p){b(e,e.return,p)}try{Vt(5,e,e.return)}catch(p){b(e,e.return,p)}}break;case 1:Le(n,e),He(e),r&512&&t!==null&&nt(t,t.return);break;case 5:if(Le(n,e),He(e),r&512&&t!==null&&nt(t,t.return),e.flags&32){var i=e.stateNode;try{bt(i,"")}catch(p){b(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ha(i,o),No(s,l);var d=No(s,o);for(l=0;l<u.length;l+=2){var g=u[l],v=u[l+1];g==="style"?wa(i,v):g==="dangerouslySetInnerHTML"?ma(i,v):g==="children"?bt(i,v):xl(i,g,v,d)}switch(s){case"input":Do(i,o);break;case"textarea":ga(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?rt(i,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?rt(i,!!o.multiple,o.defaultValue,!0):rt(i,!!o.multiple,o.multiple?[]:"",!1))}i[tr]=o}catch(p){b(e,e.return,p)}}break;case 6:if(Le(n,e),He(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){b(e,e.return,p)}}break;case 3:if(Le(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{qt(n.containerInfo)}catch(p){b(e,e.return,p)}break;case 4:Le(n,e),He(e);break;case 13:Le(n,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(is=K())),r&4&&Su(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(se=(d=se)||g,Le(n,e),se=d):Le(n,e),He(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(D=e,g=e.child;g!==null;){for(v=D=g;D!==null;){switch(h=D,m=h.child,h.tag){case 0:case 11:case 14:case 15:Vt(4,h,h.return);break;case 1:nt(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(p){b(r,t,p)}}break;case 5:nt(h,h.return);break;case 22:if(h.memoizedState!==null){Eu(v);continue}}m!==null?(m.return=h,D=m):Eu(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=v.stateNode,u=v.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ya("display",l))}catch(p){b(e,e.return,p)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(p){b(e,e.return,p)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Le(n,e),He(e),r&4&&Su(e);break;case 21:break;default:Le(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Bc(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bt(i,""),r.flags&=-33);var o=wu(e);sl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=wu(e);ll(e,s,l);break;default:throw Error(E(161))}}catch(u){b(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function j0(e,n,t){D=e,bc(e)}function bc(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||_r;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||se;s=_r;var d=se;if(_r=l,(se=u)&&!d)for(D=i;D!==null;)l=D,u=l.child,l.tag===22&&l.memoizedState!==null?Cu(i):u!==null?(u.return=l,D=u):Cu(i);for(;o!==null;)D=o,bc(o),o=o.sibling;D=i,_r=s,se=d}Tu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):Tu(e)}}function Tu(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||Di(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!se)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Me(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ou(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ou(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&qt(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}se||n.flags&512&&ol(n)}catch(h){b(n,n.return,h)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function Eu(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function Cu(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Di(4,n)}catch(u){b(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){b(n,i,u)}}var o=n.return;try{ol(n)}catch(u){b(n,o,u)}break;case 5:var l=n.return;try{ol(n)}catch(u){b(n,l,u)}}}catch(u){b(n,n.return,u)}if(n===e){D=null;break}var s=n.sibling;if(s!==null){s.return=n.return,D=s;break}D=n.return}}var F0=Math.ceil,fi=en.ReactCurrentDispatcher,ts=en.ReactCurrentOwner,_e=en.ReactCurrentBatchConfig,j=0,ee=null,X=null,te=0,we=0,tt=Sn(0),Z=0,ur=null,zn=0,Ii=0,rs=0,Wt=null,pe=null,is=0,vt=1/0,Qe=null,pi=!1,ul=null,hn=null,Nr=!1,un=null,hi=0,Bt=0,al=null,Wr=-1,Br=0;function ce(){return j&6?K():Wr!==-1?Wr:Wr=K()}function gn(e){return e.mode&1?j&2&&te!==0?te&-te:S0.transition!==null?(Br===0&&(Br=Na()),Br):(e=A,e!==0||(e=window.event,e=e===void 0?16:Aa(e.type)),e):1}function Ae(e,n,t,r){if(50<Bt)throw Bt=0,al=null,Error(E(185));cr(e,t,r),(!(j&2)||e!==ee)&&(e===ee&&(!(j&2)&&(Ii|=t),Z===4&&ln(e,te)),me(e,r),t===1&&j===0&&!(n.mode&1)&&(vt=K()+500,Ci&&Tn()))}function me(e,n){var t=e.callbackNode;Sf(e,n);var r=qr(e,e===ee?te:0);if(r===0)t!==null&&Rs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Rs(t),n===1)e.tag===0?w0(Ou.bind(null,e)):rc(Ou.bind(null,e)),g0(function(){!(j&6)&&Tn()}),t=null;else{switch(Ra(r)){case 1:t=_l;break;case 4:t=Pa;break;case 16:t=Xr;break;case 536870912:t=_a;break;default:t=Xr}t=nd(t,Kc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Kc(e,n){if(Wr=-1,Br=0,j&6)throw Error(E(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var r=qr(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=gi(e,r);else{n=r;var i=j;j|=2;var o=Xc();(ee!==e||te!==n)&&(Qe=null,vt=K()+500,_n(e,n));do try{H0();break}catch(s){Yc(e,s)}while(!0);Wl(),fi.current=o,j=i,X!==null?n=0:(ee=null,te=0,n=Z)}if(n!==0){if(n===2&&(i=jo(e),i!==0&&(r=i,n=cl(e,i))),n===1)throw t=ur,_n(e,0),ln(e,r),me(e,K()),t;if(n===6)ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!A0(i)&&(n=gi(e,r),n===2&&(o=jo(e),o!==0&&(r=o,n=cl(e,o))),n===1))throw t=ur,_n(e,0),ln(e,r),me(e,K()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:Dn(e,pe,Qe);break;case 3:if(ln(e,r),(r&130023424)===r&&(n=is+500-K(),10<n)){if(qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bo(Dn.bind(null,e,pe,Qe),n);break}Dn(e,pe,Qe);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Fe(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*F0(r/1960))-r,10<r){e.timeoutHandle=Bo(Dn.bind(null,e,pe,Qe),r);break}Dn(e,pe,Qe);break;case 5:Dn(e,pe,Qe);break;default:throw Error(E(329))}}}return me(e,K()),e.callbackNode===t?Kc.bind(null,e):null}function cl(e,n){var t=Wt;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=gi(e,n),e!==2&&(n=pe,pe=t,n!==null&&dl(n)),e}function dl(e){pe===null?pe=e:pe.push.apply(pe,e)}function A0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ue(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ln(e,n){for(n&=~rs,n&=~Ii,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Fe(n),r=1<<t;e[t]=-1,n&=~r}}function Ou(e){if(j&6)throw Error(E(327));ut();var n=qr(e,0);if(!(n&1))return me(e,K()),null;var t=gi(e,n);if(e.tag!==0&&t===2){var r=jo(e);r!==0&&(n=r,t=cl(e,r))}if(t===1)throw t=ur,_n(e,0),ln(e,n),me(e,K()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Dn(e,pe,Qe),me(e,K()),null}function os(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(vt=K()+500,Ci&&Tn())}}function jn(e){un!==null&&un.tag===0&&!(j&6)&&ut();var n=j;j|=1;var t=_e.transition,r=A;try{if(_e.transition=null,A=1,e)return e()}finally{A=r,_e.transition=t,j=n,!(j&6)&&Tn()}}function ls(){we=tt.current,$(tt)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,h0(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Hl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ti();break;case 3:ht(),$(ge),$(ue),Yl();break;case 5:Kl(r);break;case 4:ht();break;case 13:$(B);break;case 19:$(B);break;case 10:Bl(r.type._context);break;case 22:case 23:ls()}t=t.return}if(ee=e,X=e=vn(e.current,null),te=we=n,Z=0,ur=null,rs=Ii=zn=0,pe=Wt=null,kn!==null){for(n=0;n<kn.length;n++)if(t=kn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}kn=null}return e}function Yc(e,n){do{var t=X;try{if(Wl(),Hr.current=di,ci){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ci=!1}if(Mn=0,J=q=Q=null,$t=!1,or=0,ts.current=null,t===null||t.return===null){Z=1,ur=n,X=null;break}e:{var o=e,l=t.return,s=t,u=n;if(n=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var m=du(l);if(m!==null){m.flags&=-257,fu(m,l,s,o,n),m.mode&1&&cu(o,d,n),n=m,u=d;var y=n.updateQueue;if(y===null){var p=new Set;p.add(u),n.updateQueue=p}else y.add(u);break e}else{if(!(n&1)){cu(o,d,n),ss();break e}u=Error(E(426))}}else if(V&&s.mode&1){var S=du(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),fu(S,l,s,o,n),$l(gt(u,s));break e}}o=u=gt(u,s),Z!==4&&(Z=2),Wt===null?Wt=[o]:Wt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=Rc(o,u,n);iu(o,c);break e;case 1:s=u;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(hn===null||!hn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=Lc(o,s,n);iu(o,w);break e}}o=o.return}while(o!==null)}Zc(t)}catch(T){n=T,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function Xc(){var e=fi.current;return fi.current=di,e===null?di:e}function ss(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(zn&268435455)&&!(Ii&268435455)||ln(ee,te)}function gi(e,n){var t=j;j|=2;var r=Xc();(ee!==e||te!==n)&&(Qe=null,_n(e,n));do try{U0();break}catch(i){Yc(e,i)}while(!0);if(Wl(),j=t,fi.current=r,X!==null)throw Error(E(261));return ee=null,te=0,Z}function U0(){for(;X!==null;)qc(X)}function H0(){for(;X!==null&&!df();)qc(X)}function qc(e){var n=ed(e.alternate,e,we);e.memoizedProps=e.pendingProps,n===null?Zc(e):X=n,ts.current=null}function Zc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=L0(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(t=R0(t,n,we),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);Z===0&&(Z=5)}function Dn(e,n,t){var r=A,i=_e.transition;try{_e.transition=null,A=1,$0(e,n,t,r)}finally{_e.transition=i,A=r}return null}function $0(e,n,t,r){do ut();while(un!==null);if(j&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Tf(e,o),e===ee&&(X=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Nr||(Nr=!0,nd(Xr,function(){return ut(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=_e.transition,_e.transition=null;var l=A;A=1;var s=j;j|=4,ts.current=null,z0(e,t),Gc(t,e),s0(Vo),Zr=!!$o,Vo=$o=null,e.current=t,j0(t),ff(),j=s,A=l,_e.transition=o}else e.current=t;if(Nr&&(Nr=!1,un=e,hi=i),o=e.pendingLanes,o===0&&(hn=null),gf(t.stateNode),me(e,K()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(pi)throw pi=!1,e=ul,ul=null,e;return hi&1&&e.tag!==0&&ut(),o=e.pendingLanes,o&1?e===al?Bt++:(Bt=0,al=e):Bt=0,Tn(),null}function ut(){if(un!==null){var e=Ra(hi),n=_e.transition,t=A;try{if(_e.transition=null,A=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,hi=0,j&6)throw Error(E(331));var i=j;for(j|=4,D=e.current;D!==null;){var o=D,l=o.child;if(D.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(D=d;D!==null;){var g=D;switch(g.tag){case 0:case 11:case 15:Vt(8,g,o)}var v=g.child;if(v!==null)v.return=g,D=v;else for(;D!==null;){g=D;var h=g.sibling,m=g.return;if(Wc(g),g===d){D=null;break}if(h!==null){h.return=m,D=h;break}D=m}}}var y=o.alternate;if(y!==null){var p=y.child;if(p!==null){y.child=null;do{var S=p.sibling;p.sibling=null,p=S}while(p!==null)}}D=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,D=l;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vt(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,D=c;break e}D=o.return}}var a=e.current;for(D=a;D!==null;){l=D;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,D=f;else e:for(l=a;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Di(9,s)}}catch(T){b(s,s.return,T)}if(s===l){D=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,D=w;break e}D=s.return}}if(j=i,Tn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(yi,e)}catch{}r=!0}return r}finally{A=t,_e.transition=n}}return!1}function xu(e,n,t){n=gt(t,n),n=Rc(e,n,1),e=pn(e,n,1),n=ce(),e!==null&&(cr(e,1,n),me(e,n))}function b(e,n,t){if(e.tag===3)xu(e,e,t);else for(;n!==null;){if(n.tag===3){xu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=gt(t,e),e=Lc(n,e,1),n=pn(n,e,1),e=ce(),n!==null&&(cr(n,1,e),me(n,e));break}}n=n.return}}function V0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(Z===4||Z===3&&(te&130023424)===te&&500>K()-is?_n(e,0):rs|=t),me(e,n)}function Jc(e,n){n===0&&(e.mode&1?(n=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):n=1);var t=ce();e=Ze(e,n),e!==null&&(cr(e,n,t),me(e,t))}function W0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Jc(e,t)}function B0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),Jc(e,t)}var ed;ed=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ge.current)he=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return he=!1,N0(e,n,t);he=!!(e.flags&131072)}else he=!1,V&&n.flags&1048576&&ic(n,oi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Vr(e,n),e=n.pendingProps;var i=dt(n,ue.current);st(n,t),i=ql(null,n,r,e,i,t);var o=Zl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(o=!0,ri(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gl(n),i.updater=xi,n.stateNode=i,i._reactInternals=n,qo(n,r,e,t),n=el(null,n,r,!0,o,t)):(n.tag=0,V&&o&&Ul(n),ae(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Vr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=G0(r),e=Me(r,e),i){case 0:n=Jo(null,n,r,e,t);break e;case 1:n=gu(null,n,r,e,t);break e;case 11:n=pu(null,n,r,e,t);break e;case 14:n=hu(null,n,r,Me(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),Jo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),gu(e,n,r,i,t);case 3:e:{if(Fc(n),e===null)throw Error(E(387));r=n.pendingProps,o=n.memoizedState,i=o.element,cc(e,n),ui(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=gt(Error(E(423)),n),n=vu(e,n,r,t,i);break e}else if(r!==i){i=gt(Error(E(424)),n),n=vu(e,n,r,t,i);break e}else for(Se=fn(n.stateNode.containerInfo.firstChild),Te=n,V=!0,je=null,t=uc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ft(),r===i){n=Je(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return dc(n),e===null&&Ko(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Wo(r,i)?l=null:o!==null&&Wo(r,o)&&(n.flags|=32),jc(e,n),ae(e,n,l,t),n.child;case 6:return e===null&&Ko(n),null;case 13:return Ac(e,n,t);case 4:return bl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=pt(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),pu(e,n,r,i,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,U(li,r._currentValue),r._currentValue=l,o!==null)if(Ue(o.value,l)){if(o.children===i.children&&!ge.current){n=Je(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ye(-1,t&-t),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Yo(o.return,t,n),s.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Yo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,st(n,t),i=Ne(i),r=r(i),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,i=Me(r,n.pendingProps),i=Me(r.type,i),hu(e,n,r,i,t);case 15:return Mc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),Vr(e,n),n.tag=1,ve(r)?(e=!0,ri(n)):e=!1,st(n,t),Nc(n,r,i),qo(n,r,i,t),el(null,n,r,!0,e,t);case 19:return Uc(e,n,t);case 22:return zc(e,n,t)}throw Error(E(156,n.tag))};function nd(e,n){return ka(e,n)}function Q0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,n,t,r){return new Q0(e,n,t,r)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G0(e){if(typeof e=="function")return us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Il)return 11;if(e===kl)return 14}return 2}function vn(e,n){var t=e.alternate;return t===null?(t=Pe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Qr(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")us(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Gn:return Nn(t.children,i,o,n);case Dl:l=8,i|=8;break;case To:return e=Pe(12,t,n,i|2),e.elementType=To,e.lanes=o,e;case Eo:return e=Pe(13,t,n,i),e.elementType=Eo,e.lanes=o,e;case Co:return e=Pe(19,t,n,i),e.elementType=Co,e.lanes=o,e;case da:return ki(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aa:l=10;break e;case ca:l=9;break e;case Il:l=11;break e;case kl:l=14;break e;case tn:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Pe(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Nn(e,n,t,r){return e=Pe(7,e,r,n),e.lanes=t,e}function ki(e,n,t,r){return e=Pe(22,e,r,n),e.elementType=da,e.lanes=t,e.stateNode={isHidden:!1},e}function ao(e,n,t){return e=Pe(6,e,null,n),e.lanes=t,e}function co(e,n,t){return n=Pe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function b0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function as(e,n,t,r,i,o,l,s,u){return e=new b0(e,n,t,s,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Pe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gl(o),e}function K0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function td(e){if(!e)return yn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(ve(t))return tc(e,t,n)}return n}function rd(e,n,t,r,i,o,l,s,u){return e=as(t,r,!0,e,i,o,l,s,u),e.context=td(null),t=e.current,r=ce(),i=gn(t),o=Ye(r,i),o.callback=n??null,pn(t,o,i),e.current.lanes=i,cr(e,i,r),me(e,r),e}function Pi(e,n,t,r){var i=n.current,o=ce(),l=gn(i);return t=td(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=pn(i,n,l),e!==null&&(Ae(e,i,l,o),Ur(e,i,l)),l}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cs(e,n){Du(e,n),(e=e.alternate)&&Du(e,n)}function Y0(){return null}var id=typeof reportError=="function"?reportError:function(e){console.error(e)};function ds(e){this._internalRoot=e}_i.prototype.render=ds.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));Pi(e,n,null,null)};_i.prototype.unmount=ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jn(function(){Pi(null,e,null,null)}),n[qe]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var n=za();e={blockedOn:null,target:e,priority:n};for(var t=0;t<on.length&&n!==0&&n<on[t].priority;t++);on.splice(t,0,e),t===0&&Fa(e)}};function fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function X0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=vi(l);o.call(d)}}var l=rd(n,r,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=l,e[qe]=l.current,er(e.nodeType===8?e.parentNode:e),jn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=vi(u);s.call(d)}}var u=as(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=u,e[qe]=u.current,er(e.nodeType===8?e.parentNode:e),jn(function(){Pi(n,u,t,r)}),u}function Ri(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=vi(l);s.call(u)}}Pi(n,l,e,i)}else l=X0(t,n,e,i,r);return vi(l)}La=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Mt(n.pendingLanes);t!==0&&(Nl(n,t|1),me(n,K()),!(j&6)&&(vt=K()+500,Tn()))}break;case 13:jn(function(){var r=Ze(e,1);if(r!==null){var i=ce();Ae(r,e,1,i)}}),cs(e,1)}};Rl=function(e){if(e.tag===13){var n=Ze(e,134217728);if(n!==null){var t=ce();Ae(n,e,134217728,t)}cs(e,134217728)}};Ma=function(e){if(e.tag===13){var n=gn(e),t=Ze(e,n);if(t!==null){var r=ce();Ae(t,e,n,r)}cs(e,n)}};za=function(){return A};ja=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};Lo=function(e,n,t){switch(n){case"input":if(Do(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ei(r);if(!i)throw Error(E(90));pa(r),Do(r,i)}}}break;case"textarea":ga(e,t);break;case"select":n=t.value,n!=null&&rt(e,!!t.multiple,n,!1)}};Ea=os;Ca=jn;var q0={usingClientEntryPoint:!1,Events:[fr,Xn,Ei,Sa,Ta,os]},Nt={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z0={bundleType:Nt.bundleType,version:Nt.version,rendererPackageName:Nt.rendererPackageName,rendererConfig:Nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Da(e),e===null?null:e.stateNode},findFiberByHostInstance:Nt.findFiberByHostInstance||Y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{yi=Rr.inject(Z0),We=Rr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q0;Ce.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fs(n))throw Error(E(200));return K0(e,n,null,t)};Ce.createRoot=function(e,n){if(!fs(e))throw Error(E(299));var t=!1,r="",i=id;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=as(e,1,!1,null,null,t,!1,r,i),e[qe]=n.current,er(e.nodeType===8?e.parentNode:e),new ds(n)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Da(n),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return jn(e)};Ce.hydrate=function(e,n,t){if(!Ni(n))throw Error(E(200));return Ri(null,e,n,!0,t)};Ce.hydrateRoot=function(e,n,t){if(!fs(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=id;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=rd(n,null,e,1,t??null,i,!1,o,l),e[qe]=n.current,er(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new _i(n)};Ce.render=function(e,n,t){if(!Ni(n))throw Error(E(200));return Ri(null,e,n,!1,t)};Ce.unmountComponentAtNode=function(e){if(!Ni(e))throw Error(E(40));return e._reactRootContainer?(jn(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};Ce.unstable_batchedUpdates=os;Ce.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ni(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ri(e,n,t,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od)}catch(e){console.error(e)}}od(),oa.exports=Ce;var ps=oa.exports,ld,ku=ps;ld=ku.createRoot,ku.hydrateRoot;const J0=e=>e.reduce((i,o,l)=>{if(l>0){const s=i[l-1];o.s<s.e&&(s.tailOverlappedPos=o.s,s.tailOverlappedIndex=o.index,o.headOverlappedPos=s.e,o.headOverlappedIndex=s.index)}return[...i,{...o}]},[]).flatMap(i=>i.headOverlappedPos&&i.tailOverlappedPos?[{s:i.s,e:i.headOverlappedPos,index:-1,hoverIndex:[i.headOverlappedIndex,i.index],overlapped:[i.headOverlappedIndex],isOverlapped:!0},{s:i.headOverlappedPos,e:i.tailOverlappedPos,index:i.index,hoverIndex:[i.index],overlapped:[i.headOverlappedIndex,i.tailOverlappedIndex],isOverlapped:!1},{s:i.tailOverlappedPos,e:i.e,index:-1,hoverIndex:[i.tailOverlappedIndex,i.index],overlapped:[i.tailOverlappedIndex],isOverlapped:!0}]:i.headOverlappedPos?[{s:i.s,e:i.headOverlappedPos,index:-1,overlapped:[i.headOverlappedIndex],hoverIndex:[i.headOverlappedIndex,i.index],isOverlapped:!0},{s:i.headOverlappedPos,e:i.e,index:i.index,hoverIndex:[i.index],overlapped:[i.headOverlappedIndex],isOverlapped:!1}]:i.tailOverlappedPos?[{s:i.s,e:i.tailOverlappedPos,index:i.index,hoverIndex:[i.index],overlapped:[i.tailOverlappedIndex],isOverlapped:!1},{s:i.tailOverlappedPos,e:i.e,index:-1,overlapped:[i.tailOverlappedIndex],hoverIndex:[i.tailOverlappedIndex,i.index],isOverlapped:!0}]:[{s:i.s,e:i.e,index:i.index,hoverIndex:[i.index],overlapped:[],isOverlapped:!1}]).reduce((i,o)=>{const l=i[i.length-1];return l&&l.s===o.s&&l.e===o.e?l.overlapped=[...l.overlapped||[],...o.overlapped||[]].filter((s,u,d)=>d.indexOf(s)===u):i.push(o),i},[]),e2=(e,n)=>{const t=[];let r=0,i=0;for(const{s:o,e:l,index:s,overlapped:u,isOverlapped:d,hoverIndex:g}of e)o>r&&t.push({s:r,e:o,index:-1,hoverIndex:[i++],overlapped:[],isOverlapped:!1,isGap:!0}),t.push({s:o,e:l,index:s,hoverIndex:g,overlapped:u,isGap:!1,isOverlapped:d}),r=l;return r<n&&t.push({s:r,e:n,index:-1,hoverIndex:[i++],overlapped:[],isOverlapped:!1,isGap:!0}),t},n2=(e,n,t,r)=>{const i=[];for(const{s:o,e:l,index:s,hoverIndex:u,overlapped:d,isGap:g,isOverlapped:v}of e){const h=Math.floor(o/n),m=Math.floor(l/n);for(let y=h;y<=m;y++){const p=y*n,S=(y+1)*n,c=Math.max(o,p),a=Math.min(l,S);c<a&&y>=t&&y<r&&i.push({s:c,e:a,index:s,hoverIndex:u,overlapped:d,isGap:g,lineNumber:y,isOverlapped:v})}}return i},sd=k.createContext({dragDropManager:void 0});function xe(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Pu=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),fo=function(){return Math.random().toString(36).substring(7).split("").join(".")},_u={INIT:"@@redux/INIT"+fo(),REPLACE:"@@redux/REPLACE"+fo(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+fo()}};function t2(e){if(typeof e!="object"||e===null)return!1;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}function ud(e,n,t){var r;if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(xe(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(xe(1));return t(ud)(e,n)}if(typeof e!="function")throw new Error(xe(2));var i=e,o=n,l=[],s=l,u=!1;function d(){s===l&&(s=l.slice())}function g(){if(u)throw new Error(xe(3));return o}function v(p){if(typeof p!="function")throw new Error(xe(4));if(u)throw new Error(xe(5));var S=!0;return d(),s.push(p),function(){if(S){if(u)throw new Error(xe(6));S=!1,d();var a=s.indexOf(p);s.splice(a,1),l=null}}}function h(p){if(!t2(p))throw new Error(xe(7));if(typeof p.type>"u")throw new Error(xe(8));if(u)throw new Error(xe(9));try{u=!0,o=i(o,p)}finally{u=!1}for(var S=l=s,c=0;c<S.length;c++){var a=S[c];a()}return p}function m(p){if(typeof p!="function")throw new Error(xe(10));i=p,h({type:_u.REPLACE})}function y(){var p,S=v;return p={subscribe:function(a){if(typeof a!="object"||a===null)throw new Error(xe(11));function f(){a.next&&a.next(g())}f();var w=S(f);return{unsubscribe:w}}},p[Pu]=function(){return this},p}return h({type:_u.INIT}),r={dispatch:h,subscribe:v,getState:g,replaceReducer:m},r[Pu]=y,r}function R(e,n,...t){if(r2()&&n===void 0)throw new Error("invariant requires an error message argument");if(!e){let r;if(n===void 0)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;r=new Error(n.replace(/%s/g,function(){return t[i++]})),r.name="Invariant Violation"}throw r.framesToPop=1,r}}function r2(){return typeof process<"u"&&!0}function i2(e,n,t){return n.split(".").reduce((r,i)=>r&&r[i]?r[i]:t||null,e)}function o2(e,n){return e.filter(t=>t!==n)}function ad(e){return typeof e=="object"}function l2(e,n){const t=new Map,r=o=>{t.set(o,t.has(o)?t.get(o)+1:1)};e.forEach(r),n.forEach(r);const i=[];return t.forEach((o,l)=>{o===1&&i.push(l)}),i}function s2(e,n){return e.filter(t=>n.indexOf(t)>-1)}const hs="dnd-core/INIT_COORDS",Li="dnd-core/BEGIN_DRAG",gs="dnd-core/PUBLISH_DRAG_SOURCE",Mi="dnd-core/HOVER",zi="dnd-core/DROP",ji="dnd-core/END_DRAG";function Nu(e,n){return{type:hs,payload:{sourceClientOffset:n||null,clientOffset:e||null}}}const u2={type:hs,payload:{clientOffset:null,sourceClientOffset:null}};function a2(e){return function(t=[],r={publishSource:!0}){const{publishSource:i=!0,clientOffset:o,getSourceClientOffset:l}=r,s=e.getMonitor(),u=e.getRegistry();e.dispatch(Nu(o)),c2(t,s,u);const d=p2(t,s);if(d==null){e.dispatch(u2);return}let g=null;if(o){if(!l)throw new Error("getSourceClientOffset must be defined");d2(l),g=l(d)}e.dispatch(Nu(o,g));const h=u.getSource(d).beginDrag(s,d);if(h==null)return;f2(h),u.pinSource(d);const m=u.getSourceType(d);return{type:Li,payload:{itemType:m,item:h,sourceId:d,clientOffset:o||null,sourceClientOffset:g||null,isSourcePublic:!!i}}}}function c2(e,n,t){R(!n.isDragging(),"Cannot call beginDrag while dragging."),e.forEach(function(r){R(t.getSource(r),"Expected sourceIds to be registered.")})}function d2(e){R(typeof e=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function f2(e){R(ad(e),"Item must be an object.")}function p2(e,n){let t=null;for(let r=e.length-1;r>=0;r--)if(n.canDragSource(e[r])){t=e[r];break}return t}function h2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){h2(e,i,t[i])})}return e}function v2(e){return function(t={}){const r=e.getMonitor(),i=e.getRegistry();m2(r),S2(r).forEach((l,s)=>{const u=y2(l,s,i,r),d={type:zi,payload:{dropResult:g2({},t,u)}};e.dispatch(d)})}}function m2(e){R(e.isDragging(),"Cannot call drop while not dragging."),R(!e.didDrop(),"Cannot call drop twice during one drag operation.")}function y2(e,n,t,r){const i=t.getTarget(e);let o=i?i.drop(r,e):void 0;return w2(o),typeof o>"u"&&(o=n===0?{}:r.getDropResult()),o}function w2(e){R(typeof e>"u"||ad(e),"Drop result must either be an object or undefined.")}function S2(e){const n=e.getTargetIds().filter(e.canDropOnTarget,e);return n.reverse(),n}function T2(e){return function(){const t=e.getMonitor(),r=e.getRegistry();E2(t);const i=t.getSourceId();return i!=null&&(r.getSource(i,!0).endDrag(t,i),r.unpinSource()),{type:ji}}}function E2(e){R(e.isDragging(),"Cannot call endDrag while not dragging.")}function fl(e,n){return n===null?e===null:Array.isArray(e)?e.some(t=>t===n):e===n}function C2(e){return function(t,{clientOffset:r}={}){O2(t);const i=t.slice(0),o=e.getMonitor(),l=e.getRegistry(),s=o.getItemType();return D2(i,l,s),x2(i,o,l),I2(i,o,l),{type:Mi,payload:{targetIds:i,clientOffset:r||null}}}}function O2(e){R(Array.isArray(e),"Expected targetIds to be an array.")}function x2(e,n,t){R(n.isDragging(),"Cannot call hover while not dragging."),R(!n.didDrop(),"Cannot call hover after drop.");for(let r=0;r<e.length;r++){const i=e[r];R(e.lastIndexOf(i)===r,"Expected targetIds to be unique in the passed array.");const o=t.getTarget(i);R(o,"Expected targetIds to be registered.")}}function D2(e,n,t){for(let r=e.length-1;r>=0;r--){const i=e[r],o=n.getTargetType(i);fl(o,t)||e.splice(r,1)}}function I2(e,n,t){e.forEach(function(r){t.getTarget(r).hover(n,r)})}function k2(e){return function(){if(e.getMonitor().isDragging())return{type:gs}}}function P2(e){return{beginDrag:a2(e),publishDragSource:k2(e),hover:C2(e),drop:v2(e),endDrag:T2(e)}}class _2{receiveBackend(n){this.backend=n}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const n=this,{dispatch:t}=this.store;function r(o){return(...l)=>{const s=o.apply(n,l);typeof s<"u"&&t(s)}}const i=P2(this);return Object.keys(i).reduce((o,l)=>{const s=i[l];return o[l]=r(s),o},{})}dispatch(n){this.store.dispatch(n)}constructor(n,t){this.isSetUp=!1,this.handleRefCountChange=()=>{const r=this.store.getState().refCount>0;this.backend&&(r&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!r&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=n,this.monitor=t,n.subscribe(this.handleRefCountChange)}}function N2(e,n){return{x:e.x+n.x,y:e.y+n.y}}function cd(e,n){return{x:e.x-n.x,y:e.y-n.y}}function R2(e){const{clientOffset:n,initialClientOffset:t,initialSourceClientOffset:r}=e;return!n||!t||!r?null:cd(N2(n,r),t)}function L2(e){const{clientOffset:n,initialClientOffset:t}=e;return!n||!t?null:cd(n,t)}const Qt=[],vs=[];Qt.__IS_NONE__=!0;vs.__IS_ALL__=!0;function M2(e,n){return e===Qt?!1:e===vs||typeof n>"u"?!0:s2(n,e).length>0}class z2{subscribeToStateChange(n,t={}){const{handlerIds:r}=t;R(typeof n=="function","listener must be a function."),R(typeof r>"u"||Array.isArray(r),"handlerIds, when specified, must be an array of strings.");let i=this.store.getState().stateId;const o=()=>{const l=this.store.getState(),s=l.stateId;try{s===i||s===i+1&&!M2(l.dirtyHandlerIds,r)||n()}finally{i=s}};return this.store.subscribe(o)}subscribeToOffsetChange(n){R(typeof n=="function","listener must be a function.");let t=this.store.getState().dragOffset;const r=()=>{const i=this.store.getState().dragOffset;i!==t&&(t=i,n())};return this.store.subscribe(r)}canDragSource(n){if(!n)return!1;const t=this.registry.getSource(n);return R(t,`Expected to find a valid source. sourceId=${n}`),this.isDragging()?!1:t.canDrag(this,n)}canDropOnTarget(n){if(!n)return!1;const t=this.registry.getTarget(n);if(R(t,`Expected to find a valid target. targetId=${n}`),!this.isDragging()||this.didDrop())return!1;const r=this.registry.getTargetType(n),i=this.getItemType();return fl(r,i)&&t.canDrop(this,n)}isDragging(){return!!this.getItemType()}isDraggingSource(n){if(!n)return!1;const t=this.registry.getSource(n,!0);if(R(t,`Expected to find a valid source. sourceId=${n}`),!this.isDragging()||!this.isSourcePublic())return!1;const r=this.registry.getSourceType(n),i=this.getItemType();return r!==i?!1:t.isDragging(this,n)}isOverTarget(n,t={shallow:!1}){if(!n)return!1;const{shallow:r}=t;if(!this.isDragging())return!1;const i=this.registry.getTargetType(n),o=this.getItemType();if(o&&!fl(i,o))return!1;const l=this.getTargetIds();if(!l.length)return!1;const s=l.indexOf(n);return r?s===l.length-1:s>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return R2(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return L2(this.store.getState().dragOffset)}constructor(n,t){this.store=n,this.registry=t}}const Ru=typeof global<"u"?global:self,dd=Ru.MutationObserver||Ru.WebKitMutationObserver;function fd(e){return function(){const t=setTimeout(i,0),r=setInterval(i,50);function i(){clearTimeout(t),clearInterval(r),e()}}}function j2(e){let n=1;const t=new dd(e),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){n=-n,r.data=n}}const F2=typeof dd=="function"?j2:fd;class A2{enqueueTask(n){const{queue:t,requestFlush:r}=this;t.length||(r(),this.flushing=!0),t[t.length]=n}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:n}=this;for(;this.index<n.length;){const t=this.index;if(this.index++,n[t].call(),this.index>this.capacity){for(let r=0,i=n.length-this.index;r<i;r++)n[r]=n[r+this.index];n.length-=this.index,this.index=0}}n.length=0,this.index=0,this.flushing=!1},this.registerPendingError=n=>{this.pendingErrors.push(n),this.requestErrorThrow()},this.requestFlush=F2(this.flush),this.requestErrorThrow=fd(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class U2{call(){try{this.task&&this.task()}catch(n){this.onError(n)}finally{this.task=null,this.release(this)}}constructor(n,t){this.onError=n,this.release=t,this.task=null}}class H2{create(n){const t=this.freeTasks,r=t.length?t.pop():new U2(this.onError,i=>t[t.length]=i);return r.task=n,r}constructor(n){this.onError=n,this.freeTasks=[]}}const pd=new A2,$2=new H2(pd.registerPendingError);function V2(e){pd.enqueueTask($2.create(e))}const ms="dnd-core/ADD_SOURCE",ys="dnd-core/ADD_TARGET",ws="dnd-core/REMOVE_SOURCE",Fi="dnd-core/REMOVE_TARGET";function W2(e){return{type:ms,payload:{sourceId:e}}}function B2(e){return{type:ys,payload:{targetId:e}}}function Q2(e){return{type:ws,payload:{sourceId:e}}}function G2(e){return{type:Fi,payload:{targetId:e}}}function b2(e){R(typeof e.canDrag=="function","Expected canDrag to be a function."),R(typeof e.beginDrag=="function","Expected beginDrag to be a function."),R(typeof e.endDrag=="function","Expected endDrag to be a function.")}function K2(e){R(typeof e.canDrop=="function","Expected canDrop to be a function."),R(typeof e.hover=="function","Expected hover to be a function."),R(typeof e.drop=="function","Expected beginDrag to be a function.")}function pl(e,n){if(n&&Array.isArray(e)){e.forEach(t=>pl(t,!1));return}R(typeof e=="string"||typeof e=="symbol",n?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var ke;(function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"})(ke||(ke={}));let Y2=0;function X2(){return Y2++}function q2(e){const n=X2().toString();switch(e){case ke.SOURCE:return`S${n}`;case ke.TARGET:return`T${n}`;default:throw new Error(`Unknown Handler Role: ${e}`)}}function Lu(e){switch(e[0]){case"S":return ke.SOURCE;case"T":return ke.TARGET;default:throw new Error(`Cannot parse handler ID: ${e}`)}}function Mu(e,n){const t=e.entries();let r=!1;do{const{done:i,value:[,o]}=t.next();if(o===n)return!0;r=!!i}while(!r);return!1}class Z2{addSource(n,t){pl(n),b2(t);const r=this.addHandler(ke.SOURCE,n,t);return this.store.dispatch(W2(r)),r}addTarget(n,t){pl(n,!0),K2(t);const r=this.addHandler(ke.TARGET,n,t);return this.store.dispatch(B2(r)),r}containsHandler(n){return Mu(this.dragSources,n)||Mu(this.dropTargets,n)}getSource(n,t=!1){return R(this.isSourceId(n),"Expected a valid source ID."),t&&n===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(n)}getTarget(n){return R(this.isTargetId(n),"Expected a valid target ID."),this.dropTargets.get(n)}getSourceType(n){return R(this.isSourceId(n),"Expected a valid source ID."),this.types.get(n)}getTargetType(n){return R(this.isTargetId(n),"Expected a valid target ID."),this.types.get(n)}isSourceId(n){return Lu(n)===ke.SOURCE}isTargetId(n){return Lu(n)===ke.TARGET}removeSource(n){R(this.getSource(n),"Expected an existing source."),this.store.dispatch(Q2(n)),V2(()=>{this.dragSources.delete(n),this.types.delete(n)})}removeTarget(n){R(this.getTarget(n),"Expected an existing target."),this.store.dispatch(G2(n)),this.dropTargets.delete(n),this.types.delete(n)}pinSource(n){const t=this.getSource(n);R(t,"Expected an existing source."),this.pinnedSourceId=n,this.pinnedSource=t}unpinSource(){R(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(n,t,r){const i=q2(n);return this.types.set(i,t),n===ke.SOURCE?this.dragSources.set(i,r):n===ke.TARGET&&this.dropTargets.set(i,r),i}constructor(n){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=n}}const J2=(e,n)=>e===n;function ep(e,n){return!e&&!n?!0:!e||!n?!1:e.x===n.x&&e.y===n.y}function np(e,n,t=J2){if(e.length!==n.length)return!1;for(let r=0;r<e.length;++r)if(!t(e[r],n[r]))return!1;return!0}function tp(e=Qt,n){switch(n.type){case Mi:break;case ms:case ys:case Fi:case ws:return Qt;case Li:case gs:case ji:case zi:default:return vs}const{targetIds:t=[],prevTargetIds:r=[]}=n.payload,i=l2(t,r);if(!(i.length>0||!np(t,r)))return Qt;const l=r[r.length-1],s=t[t.length-1];return l!==s&&(l&&i.push(l),s&&i.push(s)),i}function rp(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ip(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){rp(e,i,t[i])})}return e}const zu={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function op(e=zu,n){const{payload:t}=n;switch(n.type){case hs:case Li:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case Mi:return ep(e.clientOffset,t.clientOffset)?e:ip({},e,{clientOffset:t.clientOffset});case ji:case zi:return zu;default:return e}}function lp(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Wn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){lp(e,i,t[i])})}return e}const sp={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function up(e=sp,n){const{payload:t}=n;switch(n.type){case Li:return Wn({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case gs:return Wn({},e,{isSourcePublic:!0});case Mi:return Wn({},e,{targetIds:t.targetIds});case Fi:return e.targetIds.indexOf(t.targetId)===-1?e:Wn({},e,{targetIds:o2(e.targetIds,t.targetId)});case zi:return Wn({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case ji:return Wn({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}function ap(e=0,n){switch(n.type){case ms:case ys:return e+1;case ws:case Fi:return e-1;default:return e}}function cp(e=0){return e+1}function dp(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fp(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){dp(e,i,t[i])})}return e}function pp(e={},n){return{dirtyHandlerIds:tp(e.dirtyHandlerIds,{type:n.type,payload:fp({},n.payload,{prevTargetIds:i2(e,"dragOperation.targetIds",[])})}),dragOffset:op(e.dragOffset,n),refCount:ap(e.refCount,n),dragOperation:up(e.dragOperation,n),stateId:cp(e.stateId)}}function hp(e,n=void 0,t={},r=!1){const i=gp(r),o=new z2(i,new Z2(i)),l=new _2(i,o),s=e(l,n,t);return l.receiveBackend(s),l}function gp(e){const n=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return ud(pp,e&&n&&n({name:"dnd-core",instanceId:"dnd-core"}))}function vp(e,n){if(e==null)return{};var t=mp(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function mp(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}let ju=0;const Gr=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var yp=k.memo(function(n){var{children:t}=n,r=vp(n,["children"]);const[i,o]=wp(r);return k.useEffect(()=>{if(o){const l=hd();return++ju,()=>{--ju===0&&(l[Gr]=null)}}},[]),_.jsx(sd.Provider,{value:i,children:t})});function wp(e){if("manager"in e)return[{dragDropManager:e.manager},!1];const n=Sp(e.backend,e.context,e.options,e.debugMode),t=!e.context;return[n,t]}function Sp(e,n=hd(),t,r){const i=n;return i[Gr]||(i[Gr]={dragDropManager:hp(e,n,t,r)}),i[Gr]}function hd(){return typeof global<"u"?global:window}var Tp=function e(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){if(n.constructor!==t.constructor)return!1;var r,i,o;if(Array.isArray(n)){if(r=n.length,r!=t.length)return!1;for(i=r;i--!==0;)if(!e(n[i],t[i]))return!1;return!0}if(n.constructor===RegExp)return n.source===t.source&&n.flags===t.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===t.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===t.toString();if(o=Object.keys(n),r=o.length,r!==Object.keys(t).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=r;i--!==0;){var l=o[i];if(!e(n[l],t[l]))return!1}return!0}return n!==n&&t!==t};const Ep=Dd(Tp),Fn=typeof window<"u"?k.useLayoutEffect:k.useEffect;function Cp(e,n,t){const[r,i]=k.useState(()=>n(e)),o=k.useCallback(()=>{const l=n(e);Ep(r,l)||(i(l),t&&t())},[r,e,t]);return Fn(o),[r,o]}function Op(e,n,t){const[r,i]=Cp(e,n,t);return Fn(function(){const l=e.getHandlerId();if(l!=null)return e.subscribeToStateChange(i,{handlerIds:[l]})},[e,i]),r}function gd(e,n,t){return Op(n,e||(()=>({})),()=>t.reconnect())}function vd(e,n){const t=[...n||[]];return n==null&&typeof e!="function"&&t.push(e),k.useMemo(()=>typeof e=="function"?e():e,t)}function xp(e){return k.useMemo(()=>e.hooks.dragSource(),[e])}function Dp(e){return k.useMemo(()=>e.hooks.dragPreview(),[e])}let po=!1,ho=!1;class Ip{receiveHandlerId(n){this.sourceId=n}getHandlerId(){return this.sourceId}canDrag(){R(!po,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return po=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{po=!1}}isDragging(){if(!this.sourceId)return!1;R(!ho,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return ho=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{ho=!1}}subscribeToStateChange(n,t){return this.internalMonitor.subscribeToStateChange(n,t)}isDraggingSource(n){return this.internalMonitor.isDraggingSource(n)}isOverTarget(n,t){return this.internalMonitor.isOverTarget(n,t)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(n){return this.internalMonitor.subscribeToOffsetChange(n)}canDragSource(n){return this.internalMonitor.canDragSource(n)}canDropOnTarget(n){return this.internalMonitor.canDropOnTarget(n)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(n){this.sourceId=null,this.internalMonitor=n.getMonitor()}}let go=!1;class kp{receiveHandlerId(n){this.targetId=n}getHandlerId(){return this.targetId}subscribeToStateChange(n,t){return this.internalMonitor.subscribeToStateChange(n,t)}canDrop(){if(!this.targetId)return!1;R(!go,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return go=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{go=!1}}isOver(n){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,n):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(n){this.targetId=null,this.internalMonitor=n.getMonitor()}}function Pp(e,n,t){const r=t.getRegistry(),i=r.addTarget(e,n);return[i,()=>r.removeTarget(i)]}function _p(e,n,t){const r=t.getRegistry(),i=r.addSource(e,n);return[i,()=>r.removeSource(i)]}function hl(e,n,t,r){let i;if(i!==void 0)return!!i;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;const o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;const s=Object.prototype.hasOwnProperty.bind(n);for(let u=0;u<o.length;u++){const d=o[u];if(!s(d))return!1;const g=e[d],v=n[d];if(i=void 0,i===!1||i===void 0&&g!==v)return!1}return!0}function gl(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Np(e){if(typeof e.type=="string")return;const n=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${n} into a <div>, or turn it into a drag source or a drop target itself.`)}function Rp(e){return(n=null,t=null)=>{if(!k.isValidElement(n)){const o=n;return e(o,t),o}const r=n;return Np(r),Lp(r,t?o=>e(o,t):e)}}function md(e){const n={};return Object.keys(e).forEach(t=>{const r=e[t];if(t.endsWith("Ref"))n[t]=e[t];else{const i=Rp(r);n[t]=()=>i}}),n}function Fu(e,n){typeof e=="function"?e(n):e.current=n}function Lp(e,n){const t=e.ref;return R(typeof t!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),t?k.cloneElement(e,{ref:r=>{Fu(t,r),Fu(n,r)}}):k.cloneElement(e,{ref:n})}class Mp{receiveHandlerId(n){this.handlerId!==n&&(this.handlerId=n,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(n){this.dragSourceOptionsInternal=n}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(n){this.dragPreviewOptionsInternal=n}reconnect(){const n=this.reconnectDragSource();this.reconnectDragPreview(n)}reconnectDragSource(){const n=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return t&&this.disconnectDragSource(),this.handlerId?n?(t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=n,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,n,this.dragSourceOptions)),t):(this.lastConnectedDragSource=n,t):t}reconnectDragPreview(n=!1){const t=this.dragPreview,r=n||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(r&&this.disconnectDragPreview(),!!this.handlerId){if(!t){this.lastConnectedDragPreview=t;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!hl(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!hl(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(n){this.hooks=md({dragSource:(t,r)=>{this.clearDragSource(),this.dragSourceOptions=r||null,gl(t)?this.dragSourceRef=t:this.dragSourceNode=t,this.reconnectDragSource()},dragPreview:(t,r)=>{this.clearDragPreview(),this.dragPreviewOptions=r||null,gl(t)?this.dragPreviewRef=t:this.dragPreviewNode=t,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=n}}class zp{get connectTarget(){return this.dropTarget}reconnect(){const n=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();n&&this.disconnectDropTarget();const t=this.dropTarget;if(this.handlerId){if(!t){this.lastConnectedDropTarget=t;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions))}}receiveHandlerId(n){n!==this.handlerId&&(this.handlerId=n,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(n){this.dropTargetOptionsInternal=n}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!hl(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(n){this.hooks=md({dropTarget:(t,r)=>{this.clearDropTarget(),this.dropTargetOptions=r,gl(t)?this.dropTargetRef=t:this.dropTargetNode=t,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=n}}function Tt(){const{dragDropManager:e}=k.useContext(sd);return R(e!=null,"Expected drag drop context"),e}function jp(e,n){const t=Tt(),r=k.useMemo(()=>new Mp(t.getBackend()),[t]);return Fn(()=>(r.dragSourceOptions=e||null,r.reconnect(),()=>r.disconnectDragSource()),[r,e]),Fn(()=>(r.dragPreviewOptions=n||null,r.reconnect(),()=>r.disconnectDragPreview()),[r,n]),r}function Fp(){const e=Tt();return k.useMemo(()=>new Ip(e),[e])}class Ap{beginDrag(){const n=this.spec,t=this.monitor;let r=null;return typeof n.item=="object"?r=n.item:typeof n.item=="function"?r=n.item(t):r={},r??null}canDrag(){const n=this.spec,t=this.monitor;return typeof n.canDrag=="boolean"?n.canDrag:typeof n.canDrag=="function"?n.canDrag(t):!0}isDragging(n,t){const r=this.spec,i=this.monitor,{isDragging:o}=r;return o?o(i):t===n.getSourceId()}endDrag(){const n=this.spec,t=this.monitor,r=this.connector,{end:i}=n;i&&i(t.getItem(),t),r.reconnect()}constructor(n,t,r){this.spec=n,this.monitor=t,this.connector=r}}function Up(e,n,t){const r=k.useMemo(()=>new Ap(e,n,t),[n,t]);return k.useEffect(()=>{r.spec=e},[e]),r}function Hp(e){return k.useMemo(()=>{const n=e.type;return R(n!=null,"spec.type must be defined"),n},[e])}function $p(e,n,t){const r=Tt(),i=Up(e,n,t),o=Hp(e);Fn(function(){if(o!=null){const[s,u]=_p(o,i,r);return n.receiveHandlerId(s),t.receiveHandlerId(s),u}},[r,n,t,i,o])}function Vp(e,n){const t=vd(e,n);R(!t.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const r=Fp(),i=jp(t.options,t.previewOptions);return $p(t,r,i),[gd(t.collect,r,i),xp(i),Dp(i)]}function Wp(e){return k.useMemo(()=>e.hooks.dropTarget(),[e])}function Bp(e){const n=Tt(),t=k.useMemo(()=>new zp(n.getBackend()),[n]);return Fn(()=>(t.dropTargetOptions=e||null,t.reconnect(),()=>t.disconnectDropTarget()),[e]),t}function Qp(){const e=Tt();return k.useMemo(()=>new kp(e),[e])}function Gp(e){const{accept:n}=e;return k.useMemo(()=>(R(e.accept!=null,"accept must be defined"),Array.isArray(n)?n:[n]),[n])}class bp{canDrop(){const n=this.spec,t=this.monitor;return n.canDrop?n.canDrop(t.getItem(),t):!0}hover(){const n=this.spec,t=this.monitor;n.hover&&n.hover(t.getItem(),t)}drop(){const n=this.spec,t=this.monitor;if(n.drop)return n.drop(t.getItem(),t)}constructor(n,t){this.spec=n,this.monitor=t}}function Kp(e,n){const t=k.useMemo(()=>new bp(e,n),[n]);return k.useEffect(()=>{t.spec=e},[e]),t}function Yp(e,n,t){const r=Tt(),i=Kp(e,n),o=Gp(e);Fn(function(){const[s,u]=Pp(o,i,r);return n.receiveHandlerId(s),t.receiveHandlerId(s),u},[r,n,i,t,o.map(l=>l.toString()).join("|")])}function Xp(e,n){const t=vd(e,n),r=Qp(),i=Bp(t.options);return Yp(t,r,i),[gd(t.collect,r,i),Wp(i)]}function yd(e){let n=null;return()=>(n==null&&(n=e()),n)}function qp(e,n){return e.filter(t=>t!==n)}function Zp(e,n){const t=new Set,r=o=>t.add(o);e.forEach(r),n.forEach(r);const i=[];return t.forEach(o=>i.push(o)),i}class Jp{enter(n){const t=this.entered.length,r=i=>this.isNodeInDocument(i)&&(!i.contains||i.contains(n));return this.entered=Zp(this.entered.filter(r),[n]),t===0&&this.entered.length>0}leave(n){const t=this.entered.length;return this.entered=qp(this.entered.filter(this.isNodeInDocument),n),t>0&&this.entered.length===0}reset(){this.entered=[]}constructor(n){this.entered=[],this.isNodeInDocument=n}}class e1{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(n=>{Object.defineProperty(this.item,n,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${n}" until the drop event.`),null}})})}loadDataTransfer(n){if(n){const t={};Object.keys(this.config.exposeProperties).forEach(r=>{const i=this.config.exposeProperties[r];i!=null&&(t[r]={value:i(n,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(n,t){return t===n.getSourceId()}endDrag(){}constructor(n){this.config=n,this.item={},this.initializeExposedProperties()}}const wd="__NATIVE_FILE__",Sd="__NATIVE_URL__",Td="__NATIVE_TEXT__",Ed="__NATIVE_HTML__",Au=Object.freeze(Object.defineProperty({__proto__:null,FILE:wd,HTML:Ed,TEXT:Td,URL:Sd},Symbol.toStringTag,{value:"Module"}));function vo(e,n,t){const r=n.reduce((i,o)=>i||e.getData(o),"");return r??t}const vl={[wd]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[Ed]:{exposeProperties:{html:(e,n)=>vo(e,n,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[Sd]:{exposeProperties:{urls:(e,n)=>vo(e,n,"").split(`
`),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[Td]:{exposeProperties:{text:(e,n)=>vo(e,n,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function n1(e,n){const t=vl[e];if(!t)throw new Error(`native type ${e} has no configuration`);const r=new e1(t);return r.loadDataTransfer(n),r}function mo(e){if(!e)return null;const n=Array.prototype.slice.call(e.types||[]);return Object.keys(vl).filter(t=>{const r=vl[t];return r!=null&&r.matchesTypes?r.matchesTypes.some(i=>n.indexOf(i)>-1):!1})[0]||null}const t1=yd(()=>/firefox/i.test(navigator.userAgent)),Cd=yd(()=>!!window.safari);class Uu{interpolate(n){const{xs:t,ys:r,c1s:i,c2s:o,c3s:l}=this;let s=t.length-1;if(n===t[s])return r[s];let u=0,d=l.length-1,g;for(;u<=d;){g=Math.floor(.5*(u+d));const m=t[g];if(m<n)u=g+1;else if(m>n)d=g-1;else return r[g]}s=Math.max(0,d);const v=n-t[s],h=v*v;return r[s]+i[s]*v+o[s]*h+l[s]*v*h}constructor(n,t){const{length:r}=n,i=[];for(let m=0;m<r;m++)i.push(m);i.sort((m,y)=>n[m]<n[y]?-1:1);const o=[],l=[];let s,u;for(let m=0;m<r-1;m++)s=n[m+1]-n[m],u=t[m+1]-t[m],o.push(s),l.push(u/s);const d=[l[0]];for(let m=0;m<o.length-1;m++){const y=l[m],p=l[m+1];if(y*p<=0)d.push(0);else{s=o[m];const S=o[m+1],c=s+S;d.push(3*c/((c+S)/y+(c+s)/p))}}d.push(l[l.length-1]);const g=[],v=[];let h;for(let m=0;m<d.length-1;m++){h=l[m];const y=d[m],p=1/o[m],S=y+d[m+1]-h-h;g.push((h-y-S)*p),v.push(S*p*p)}this.xs=n,this.ys=t,this.c1s=d,this.c2s=g,this.c3s=v}}const r1=1;function Od(e){const n=e.nodeType===r1?e:e.parentElement;if(!n)return null;const{top:t,left:r}=n.getBoundingClientRect();return{x:r,y:t}}function Lr(e){return{x:e.clientX,y:e.clientY}}function i1(e){var n;return e.nodeName==="IMG"&&(t1()||!(!((n=document.documentElement)===null||n===void 0)&&n.contains(e)))}function o1(e,n,t,r){let i=e?n.width:t,o=e?n.height:r;return Cd()&&e&&(o/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:o}}function l1(e,n,t,r,i){const o=i1(n),s=Od(o?e:n),u={x:t.x-s.x,y:t.y-s.y},{offsetWidth:d,offsetHeight:g}=e,{anchorX:v,anchorY:h}=r,{dragPreviewWidth:m,dragPreviewHeight:y}=o1(o,n,d,g),p=()=>{let C=new Uu([0,.5,1],[u.y,u.y/g*y,u.y+y-g]).interpolate(h);return Cd()&&o&&(C+=(window.devicePixelRatio-1)*y),C},S=()=>new Uu([0,.5,1],[u.x,u.x/d*m,u.x+m-d]).interpolate(v),{offsetX:c,offsetY:a}=i,f=c===0||c,w=a===0||a;return{x:f?c:S(),y:w?a:p()}}class s1{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var n;return!((n=this.globalContext)===null||n===void 0)&&n.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var n;return((n=this.optionsArgs)===null||n===void 0?void 0:n.rootElement)||this.window}constructor(n,t){this.ownerDocument=null,this.globalContext=n,this.optionsArgs=t}}function u1(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Hu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){u1(e,i,t[i])})}return e}class a1{profile(){var n,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((n=this.dragStartSourceIds)===null||n===void 0?void 0:n.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((t=this.dragOverTargetIds)===null||t===void 0?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const n=this.rootElement;if(n!==void 0){if(n.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");n.__isReactDndBackendSetUp=!0,this.addEventListeners(n)}}teardown(){const n=this.rootElement;if(n!==void 0&&(n.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var t;(t=this.window)===null||t===void 0||t.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(n,t,r){return this.sourcePreviewNodeOptions.set(n,r),this.sourcePreviewNodes.set(n,t),()=>{this.sourcePreviewNodes.delete(n),this.sourcePreviewNodeOptions.delete(n)}}connectDragSource(n,t,r){this.sourceNodes.set(n,t),this.sourceNodeOptions.set(n,r);const i=l=>this.handleDragStart(l,n),o=l=>this.handleSelectStart(l);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",i),t.addEventListener("selectstart",o),()=>{this.sourceNodes.delete(n),this.sourceNodeOptions.delete(n),t.removeEventListener("dragstart",i),t.removeEventListener("selectstart",o),t.setAttribute("draggable","false")}}connectDropTarget(n,t){const r=l=>this.handleDragEnter(l,n),i=l=>this.handleDragOver(l,n),o=l=>this.handleDrop(l,n);return t.addEventListener("dragenter",r),t.addEventListener("dragover",i),t.addEventListener("drop",o),()=>{t.removeEventListener("dragenter",r),t.removeEventListener("dragover",i),t.removeEventListener("drop",o)}}addEventListeners(n){n.addEventListener&&(n.addEventListener("dragstart",this.handleTopDragStart),n.addEventListener("dragstart",this.handleTopDragStartCapture,!0),n.addEventListener("dragend",this.handleTopDragEndCapture,!0),n.addEventListener("dragenter",this.handleTopDragEnter),n.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.addEventListener("dragover",this.handleTopDragOver),n.addEventListener("dragover",this.handleTopDragOverCapture,!0),n.addEventListener("drop",this.handleTopDrop),n.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(n){n.removeEventListener&&(n.removeEventListener("dragstart",this.handleTopDragStart),n.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),n.removeEventListener("dragend",this.handleTopDragEndCapture,!0),n.removeEventListener("dragenter",this.handleTopDragEnter),n.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.removeEventListener("dragover",this.handleTopDragOver),n.removeEventListener("dragover",this.handleTopDragOverCapture,!0),n.removeEventListener("drop",this.handleTopDrop),n.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const n=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(n);return Hu({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const n=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions.get(n);return Hu({anchorX:.5,anchorY:.5,captureDraggingState:!1},t||{})}isDraggingNativeItem(){const n=this.monitor.getItemType();return Object.keys(Au).some(t=>Au[t]===n)}beginDragNativeItem(n,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=n1(n,t),this.currentNativeHandle=this.registry.addSource(n,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(n){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=n;const t=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var r;return(r=this.rootElement)===null||r===void 0?void 0:r.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},t)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var n;(n=this.window)===null||n===void 0||n.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(n,t){n.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(n,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(n,t){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(n,t){this.dropTargetIds.unshift(t)}constructor(n,t,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=i=>{const o=this.sourceNodes.get(i);return o&&Od(o)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=i=>!!(i&&this.document&&this.document.body&&this.document.body.contains(i)),this.endDragIfSourceWasRemovedFromDOM=()=>{const i=this.currentDragSourceNode;i==null||this.isNodeInDocument(i)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=i=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(i||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=i=>{if(i.defaultPrevented)return;const{dragStartSourceIds:o}=this;this.dragStartSourceIds=null;const l=Lr(i);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(o||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:l});const{dataTransfer:s}=i,u=mo(s);if(this.monitor.isDragging()){if(s&&typeof s.setDragImage=="function"){const g=this.monitor.getSourceId(),v=this.sourceNodes.get(g),h=this.sourcePreviewNodes.get(g)||v;if(h){const{anchorX:m,anchorY:y,offsetX:p,offsetY:S}=this.getCurrentSourcePreviewNodeOptions(),f=l1(v,h,l,{anchorX:m,anchorY:y},{offsetX:p,offsetY:S});s.setDragImage(h,f.x,f.y)}}try{s==null||s.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(i.target);const{captureDraggingState:d}=this.getCurrentSourcePreviewNodeOptions();d?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(u)this.beginDragNativeItem(u);else{if(s&&!s.types&&(i.target&&!i.target.hasAttribute||!i.target.hasAttribute("draggable")))return;i.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=i=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}if(!this.enterLeaveCounter.enter(i.target)||this.monitor.isDragging())return;const{dataTransfer:s}=i,u=mo(s);u&&this.beginDragNativeItem(u,s)},this.handleTopDragEnter=i=>{const{dragEnterTargetIds:o}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=i.altKey,o.length>0&&this.actions.hover(o,{clientOffset:Lr(i)}),o.some(s=>this.monitor.canDropOnTarget(s))&&(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=i=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}},this.handleTopDragOver=i=>{const{dragOverTargetIds:o}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}this.altKeyPressed=i.altKey,this.lastClientOffset=Lr(i),this.scheduleHover(o),(o||[]).some(s=>this.monitor.canDropOnTarget(s))?(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?i.preventDefault():(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=i=>{this.isDraggingNativeItem()&&i.preventDefault(),this.enterLeaveCounter.leave(i.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=i=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var o;i.preventDefault(),(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}else mo(i.dataTransfer)&&i.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=i=>{const{dropTargetIds:o}=this;this.dropTargetIds=[],this.actions.hover(o,{clientOffset:Lr(i)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=i=>{const o=i.target;typeof o.dragDrop=="function"&&(o.tagName==="INPUT"||o.tagName==="SELECT"||o.tagName==="TEXTAREA"||o.isContentEditable||(i.preventDefault(),o.dragDrop()))},this.options=new s1(t,r),this.actions=n.getActions(),this.monitor=n.getMonitor(),this.registry=n.getRegistry(),this.enterLeaveCounter=new Jp(this.isNodeInDocument)}}const c1=function(n,t,r){return new a1(n,t,r)},mt=50,Et=k.createContext({}),d1=({children:e})=>{const[n,t]=k.useState([]),[r,i]=k.useState(""),[o,l]=k.useState([]),[s,u]=k.useState(0),[d,g]=k.useState([]),[v,h]=k.useState([]),[m,y]=k.useState(null),[p,S]=k.useState([]),[c,a]=k.useState(!1),[f,w]=k.useState({isGap:!1,activatedRangeIndex:-1,overlapped:!1,status:"idle"}),T=P=>{i(P),u(P.length)};k.useEffect(()=>{const P=n.slice().sort((F,ie)=>F.s-ie.s);g(P.slice().flatMap((F,ie)=>[{pos:F.s,type:"s",index:ie},{pos:F.e,type:"e",index:ie}])),l(P.map((F,ie)=>({...F,index:ie})))},[n]);const C=(P,F)=>{y({s:P,e:F})},O=()=>{a(!0)},I=()=>{a(!1)},z=(P,F,ie)=>{w({...f,activatedRangeIndex:P,isGap:F,overlapped:ie,status:"activated"})};return k.useEffect(()=>{const P=J0(Array.from(o)),F=e2(P,s);h(F)},[o,s]),k.useEffect(()=>{if(!m||v.length===0)return;const P=n2(v,mt,m.s,m.e);console.log({_byLine:P}),S(P)},[v,m]),_.jsxs(Et.Provider,{value:{charCount:s,fullText:r,byLine:p,cursorPositions:d,isDragging:c,activatedObject:f,setCharCount:u,setFullText:T,setTextRanges:t,setNewLineRange:C,setIsDragging:O,setIsDropping:I,setActivatedRange:z},children:[_.jsx(yp,{debugMode:!0,backend:c1,children:e}),ps.createPortal(_.jsxs("div",{className:"absolute top-0 right-0 bg-gray-100 p-2 text-sm",children:["字符长度: ",_.jsx("p",{children:s}),"激活范围: ",_.jsx("pre",{children:JSON.stringify(f,null,2)}),"Range分段: ",_.jsx("pre",{children:JSON.stringify(n,null,2)}),"正在拖动: ",_.jsx("p",{children:c?"是":"否"})]}),document.body)]})};function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ml.apply(null,arguments)}function $u(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yl(e,n){return yl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},yl(e,n)}function f1(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,yl(e,n)}var Vu=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function p1(e,n){return!!(e===n||Vu(e)&&Vu(n))}function h1(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!p1(e[t],n[t]))return!1;return!0}function yo(e,n){n===void 0&&(n=h1);var t,r=[],i,o=!1;function l(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return o&&t===this&&n(s,r)||(i=e.apply(this,s),o=!0,t=this,r=s),i}return l}var g1=typeof performance=="object"&&typeof performance.now=="function",Wu=g1?function(){return performance.now()}:function(){return Date.now()};function Bu(e){cancelAnimationFrame(e.id)}function v1(e,n){var t=Wu();function r(){Wu()-t>=n?e.call(null):i.id=requestAnimationFrame(r)}var i={id:requestAnimationFrame(r)};return i}var wo=-1;function Qu(e){if(e===void 0&&(e=!1),wo===-1||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(n),wo=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return wo}var Bn=null;function Gu(e){if(e===void 0&&(e=!1),Bn===null||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var r=document.createElement("div"),i=r.style;return i.width="100px",i.height="100px",n.appendChild(r),document.body.appendChild(n),n.scrollLeft>0?Bn="positive-descending":(n.scrollLeft=1,n.scrollLeft===0?Bn="negative":Bn="positive-ascending"),document.body.removeChild(n),Bn}return Bn}var m1=150,y1=function(n,t){return n};function w1(e){var n,t=e.getItemOffset,r=e.getEstimatedTotalSize,i=e.getItemSize,o=e.getOffsetForIndexAndAlignment,l=e.getStartIndexForOffset,s=e.getStopIndexForStartIndex,u=e.initInstanceProps,d=e.shouldResetStyleCacheOnItemSizeChange,g=e.validateProps;return n=function(v){f1(h,v);function h(y){var p;return p=v.call(this,y)||this,p._instanceProps=u(p.props,$u(p)),p._outerRef=void 0,p._resetIsScrollingTimeoutId=null,p.state={instance:$u(p),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof p.props.initialScrollOffset=="number"?p.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},p._callOnItemsRendered=void 0,p._callOnItemsRendered=yo(function(S,c,a,f){return p.props.onItemsRendered({overscanStartIndex:S,overscanStopIndex:c,visibleStartIndex:a,visibleStopIndex:f})}),p._callOnScroll=void 0,p._callOnScroll=yo(function(S,c,a){return p.props.onScroll({scrollDirection:S,scrollOffset:c,scrollUpdateWasRequested:a})}),p._getItemStyle=void 0,p._getItemStyle=function(S){var c=p.props,a=c.direction,f=c.itemSize,w=c.layout,T=p._getItemStyleCache(d&&f,d&&w,d&&a),C;if(T.hasOwnProperty(S))C=T[S];else{var O=t(p.props,S,p._instanceProps),I=i(p.props,S,p._instanceProps),z=a==="horizontal"||w==="horizontal",P=a==="rtl",F=z?O:0;T[S]=C={position:"absolute",left:P?void 0:F,right:P?F:void 0,top:z?0:O,height:z?"100%":I,width:z?I:"100%"}}return C},p._getItemStyleCache=void 0,p._getItemStyleCache=yo(function(S,c,a){return{}}),p._onScrollHorizontal=function(S){var c=S.currentTarget,a=c.clientWidth,f=c.scrollLeft,w=c.scrollWidth;p.setState(function(T){if(T.scrollOffset===f)return null;var C=p.props.direction,O=f;if(C==="rtl")switch(Gu()){case"negative":O=-f;break;case"positive-descending":O=w-a-f;break}return O=Math.max(0,Math.min(O,w-a)),{isScrolling:!0,scrollDirection:T.scrollOffset<O?"forward":"backward",scrollOffset:O,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._onScrollVertical=function(S){var c=S.currentTarget,a=c.clientHeight,f=c.scrollHeight,w=c.scrollTop;p.setState(function(T){if(T.scrollOffset===w)return null;var C=Math.max(0,Math.min(w,f-a));return{isScrolling:!0,scrollDirection:T.scrollOffset<C?"forward":"backward",scrollOffset:C,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._outerRefSetter=function(S){var c=p.props.outerRef;p._outerRef=S,typeof c=="function"?c(S):c!=null&&typeof c=="object"&&c.hasOwnProperty("current")&&(c.current=S)},p._resetIsScrollingDebounced=function(){p._resetIsScrollingTimeoutId!==null&&Bu(p._resetIsScrollingTimeoutId),p._resetIsScrollingTimeoutId=v1(p._resetIsScrolling,m1)},p._resetIsScrolling=function(){p._resetIsScrollingTimeoutId=null,p.setState({isScrolling:!1},function(){p._getItemStyleCache(-1,null)})},p}h.getDerivedStateFromProps=function(p,S){return S1(p,S),g(p),null};var m=h.prototype;return m.scrollTo=function(p){p=Math.max(0,p),this.setState(function(S){return S.scrollOffset===p?null:{scrollDirection:S.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},m.scrollToItem=function(p,S){S===void 0&&(S="auto");var c=this.props,a=c.itemCount,f=c.layout,w=this.state.scrollOffset;p=Math.max(0,Math.min(p,a-1));var T=0;if(this._outerRef){var C=this._outerRef;f==="vertical"?T=C.scrollWidth>C.clientWidth?Qu():0:T=C.scrollHeight>C.clientHeight?Qu():0}this.scrollTo(o(this.props,p,S,w,this._instanceProps,T))},m.componentDidMount=function(){var p=this.props,S=p.direction,c=p.initialScrollOffset,a=p.layout;if(typeof c=="number"&&this._outerRef!=null){var f=this._outerRef;S==="horizontal"||a==="horizontal"?f.scrollLeft=c:f.scrollTop=c}this._callPropsCallbacks()},m.componentDidUpdate=function(){var p=this.props,S=p.direction,c=p.layout,a=this.state,f=a.scrollOffset,w=a.scrollUpdateWasRequested;if(w&&this._outerRef!=null){var T=this._outerRef;if(S==="horizontal"||c==="horizontal")if(S==="rtl")switch(Gu()){case"negative":T.scrollLeft=-f;break;case"positive-ascending":T.scrollLeft=f;break;default:var C=T.clientWidth,O=T.scrollWidth;T.scrollLeft=O-C-f;break}else T.scrollLeft=f;else T.scrollTop=f}this._callPropsCallbacks()},m.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&Bu(this._resetIsScrollingTimeoutId)},m.render=function(){var p=this.props,S=p.children,c=p.className,a=p.direction,f=p.height,w=p.innerRef,T=p.innerElementType,C=p.innerTagName,O=p.itemCount,I=p.itemData,z=p.itemKey,P=z===void 0?y1:z,F=p.layout,ie=p.outerElementType,En=p.outerTagName,hr=p.style,Ai=p.useIsScrolling,Ct=p.width,Hn=this.state.isScrolling,x=a==="horizontal"||F==="horizontal",N=x?this._onScrollHorizontal:this._onScrollVertical,L=this._getRangeToRender(),W=L[0],Y=L[1],Cn=[];if(O>0)for(var ye=W;ye<=Y;ye++)Cn.push(k.createElement(S,{data:I,key:P(ye,I),index:ye,isScrolling:Ai?Hn:void 0,style:this._getItemStyle(ye)}));var $n=r(this.props,this._instanceProps);return k.createElement(ie||En||"div",{className:c,onScroll:N,ref:this._outerRefSetter,style:ml({position:"relative",height:f,width:Ct,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},hr)},k.createElement(T||C||"div",{children:Cn,ref:w,style:{height:x?"100%":$n,pointerEvents:Hn?"none":void 0,width:x?$n:"100%"}}))},m._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var p=this.props.itemCount;if(p>0){var S=this._getRangeToRender(),c=S[0],a=S[1],f=S[2],w=S[3];this._callOnItemsRendered(c,a,f,w)}}if(typeof this.props.onScroll=="function"){var T=this.state,C=T.scrollDirection,O=T.scrollOffset,I=T.scrollUpdateWasRequested;this._callOnScroll(C,O,I)}},m._getRangeToRender=function(){var p=this.props,S=p.itemCount,c=p.overscanCount,a=this.state,f=a.isScrolling,w=a.scrollDirection,T=a.scrollOffset;if(S===0)return[0,0,0,0];var C=l(this.props,T,this._instanceProps),O=s(this.props,C,T,this._instanceProps),I=!f||w==="backward"?Math.max(1,c):1,z=!f||w==="forward"?Math.max(1,c):1;return[Math.max(0,C-I),Math.max(0,Math.min(S-1,O+z)),C,O]},h}(k.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var S1=function(n,t){n.children,n.direction,n.height,n.layout,n.innerTagName,n.outerTagName,n.width,t.instance},T1=w1({getItemOffset:function(n,t){var r=n.itemSize;return t*r},getItemSize:function(n,t){var r=n.itemSize;return r},getEstimatedTotalSize:function(n){var t=n.itemCount,r=n.itemSize;return r*t},getOffsetForIndexAndAlignment:function(n,t,r,i,o,l){var s=n.direction,u=n.height,d=n.itemCount,g=n.itemSize,v=n.layout,h=n.width,m=s==="horizontal"||v==="horizontal",y=m?h:u,p=Math.max(0,d*g-y),S=Math.min(p,t*g),c=Math.max(0,t*g-y+g+l);switch(r==="smart"&&(i>=c-y&&i<=S+y?r="auto":r="center"),r){case"start":return S;case"end":return c;case"center":{var a=Math.round(c+(S-c)/2);return a<Math.ceil(y/2)?0:a>p+Math.floor(y/2)?p:a}case"auto":default:return i>=c&&i<=S?i:i<c?c:S}},getStartIndexForOffset:function(n,t){var r=n.itemCount,i=n.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/i)))},getStopIndexForStartIndex:function(n,t,r){var i=n.direction,o=n.height,l=n.itemCount,s=n.itemSize,u=n.layout,d=n.width,g=i==="horizontal"||u==="horizontal",v=t*s,h=g?d:o,m=Math.ceil((h+r-v)/s);return Math.max(0,Math.min(l-1,t+m-1))},initInstanceProps:function(n){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(n){n.itemSize}});function xd(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=xd(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function at(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=xd(e))&&(r&&(r+=" "),r+=n);return r}const E1="";function C1({children:e,index:n,onDrop:t}){const[{isOver:r},i]=Xp(()=>({accept:"CURSOR",drop:o=>{t(o,n)},collect:o=>({isOver:!!o.isOver()})}),[n]);return _.jsx("span",{ref:i,className:at("text-transparent",r&&"bg-gray-200"),children:e})}function O1({text:e,lineIndex:n}){const{setTextRanges:t,setIsDropping:r}=k.useContext(Et),i=(o,l)=>{const s=l+n*mt;r(),t(u=>u.map((d,g)=>{if(o.index===g){if(o.type==="s")return{...d,s};if(o.type==="e")return{...d,e:s}}return d}))};return _.jsx(_.Fragment,{children:e.split(E1).map((o,l)=>_.jsx(C1,{index:l,onDrop:i,children:o},l))})}function bu({pos:e}){const{setIsDragging:n}=k.useContext(Et),[{isDragging:t},r]=Vp(()=>({type:"CURSOR",item:()=>e,collect:i=>({isDragging:!!i.isDragging()})}));return k.useEffect(()=>{t&&n()},[t,n]),_.jsx("span",{className:at("font-extrabold text-pink-500","absolute z-50 cursor-move",t&&"opacity-50"),ref:r,children:"|"})}const x1=({partText:e,part:n})=>{const{activatedObject:t,setActivatedRange:r,cursorPositions:i}=k.useContext(Et),[o,l]=k.useState(!1),[s,u]=k.useState(null),[d,g]=k.useState(null),v=n.isOverlapped,h=n.index%2===1,m=n.index%2===0,y=n.isGap;k.useEffect(()=>{if(!t.isGap&&!y&&n.hoverIndex.includes(t.activatedRangeIndex)){l(!0);return}if(t.isGap&&y&&n.hoverIndex.includes(t.activatedRangeIndex)){l(!0);return}l(!1)},[t]),k.useEffect(()=>{if(o){const{activatedRangeIndex:S}=t;if(n.index===-1)if(S<Math.max(...n.hoverIndex)){const c=i.find(a=>a.pos===n.e&&a.type==="e");c&&g(c)}else{const c=i.find(a=>a.pos===n.s&&a.type==="s");c&&u(c)}else if(n.overlapped&&n.overlapped.length>0){const c=i.find(f=>f.pos===n.s&&f.type==="s");c&&u(c);const a=i.find(f=>f.pos===n.e&&f.type==="e");a&&g(a)}else{const c=i.find(f=>f.pos===n.s&&f.type==="s");c&&u(c);const a=i.find(f=>f.pos===n.e&&f.type==="e");a&&g(a)}}},[o]);const p=(S,c,a)=>{const f=Math.max(...S);r(f,c,a)};return _.jsxs(_.Fragment,{children:[s&&_.jsx(bu,{pos:s}),_.jsx("span",{className:at("cursor-pointer",o&&"bg-yellow-300",!o&&!v&&m&&"bg-red-300",!o&&!v&&h&&"bg-green-300",!o&&v&&"bg-gray-300",!o&&y&&"bg-transparent"),onClick:()=>p(n.hoverIndex,y,v),children:e}),d&&_.jsx(bu,{pos:d})]})},D1=({parts:e,lineIndex:n,lineText:t})=>_.jsx(_.Fragment,{children:e.map((r,i)=>{const o=r.s-n*mt,l=r.e-n*mt,s=t.slice(o,l);return _.jsx(x1,{partText:s,part:r},i)})});function I1(){const{setNewLineRange:e,fullText:n,byLine:t,isDragging:r}=k.useContext(Et),[i,o]=k.useState({startIndex:0,endIndex:0}),l=k.useMemo(()=>{const u=[];for(let d=0;d<n.length;d+=mt)u.push(n.slice(d,d+mt));return u},[n]),s=k.useMemo(()=>t.reduce((u,d)=>(u[d.lineNumber]||(u[d.lineNumber]=[]),u[d.lineNumber].push(d),u),{}),[t]);return console.log({byLineGroupedByKey:s}),_.jsxs(_.Fragment,{children:[_.jsx(T1,{height:600,itemCount:l.length,itemSize:40,width:"100%",onItemsRendered:({visibleStartIndex:u,visibleStopIndex:d})=>{e(u,d),o({startIndex:u,endIndex:d})},children:({index:u,style:d})=>{const g=l[u],v=s[u];return _.jsxs("div",{style:d,children:[_.jsx("div",{className:"",children:_.jsx("span",{className:at(),children:g})}),_.jsx("div",{className:at("absolute left-0 top-0"),children:v&&_.jsx(D1,{parts:v,lineIndex:u,lineText:g})}),_.jsx("div",{className:at("absolute left-0 top-0 ",!r&&"pointer-events-none"),children:_.jsx(O1,{text:g,lineIndex:u})})]})}}),ps.createPortal(_.jsxs("div",{className:"absolute right-0 bottom-0 bg-gray-100 p-2 text-sm",children:[_.jsx("p",{children:"Visible Range:"}),_.jsxs("p",{children:["Start: ",i.startIndex]}),_.jsxs("p",{children:["End: ",i.endIndex]})]}),document.body)]})}function k1({text:e}){const{setFullText:n,setTextRanges:t}=k.useContext(Et);return k.useEffect(()=>{n(e),t([{s:0,e:20},{s:15,e:30}])},[]),_.jsx("div",{className:"relative w-[900px] h-[550px] border border-red-500 overflow-y-scroll",children:_.jsx(I1,{})})}function P1({text:e}){return _.jsx(d1,{children:_.jsx(k1,{text:e})})}const _1=`晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

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
`;function N1(){return _.jsxs("div",{className:"p-10",children:[_.jsx("h1",{className:"font-bold",children:"Text Range Selection"}),_.jsx("hr",{className:"my-2"}),_.jsx(P1,{text:_1})]})}ld(document.getElementById("root")).render(_.jsx(N1,{}));
