(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Us={exports:{}},hi={},$s={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),hf=Symbol.for("react.portal"),gf=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),wf=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Ef=Symbol.for("react.memo"),xf=Symbol.for("react.lazy"),pu=Symbol.iterator;function kf(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Hs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Ws={};function gt(e,n,t){this.props=e,this.context=n,this.refs=Ws,this.updater=t||Hs}gt.prototype.isReactComponent={};gt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};gt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bs(){}Bs.prototype=gt.prototype;function dl(e,n,t){this.props=e,this.context=n,this.refs=Ws,this.updater=t||Hs}var pl=dl.prototype=new Bs;pl.constructor=dl;Vs(pl,gt.prototype);pl.isPureReactComponent=!0;var hu=Array.isArray,Qs=Object.prototype.hasOwnProperty,hl={current:null},Gs={key:!0,ref:!0,__self:!0,__source:!0};function Ks(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Qs.call(n,r)&&!Gs.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:or,type:e,key:o,ref:l,props:i,_owner:hl.current}}function Cf(e,n){return{$$typeof:or,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Of(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var gu=/\/+/g;function Fi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Of(""+e.key):n.toString(36)}function Nr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case or:case hf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Fi(l,0):r,hu(i)?(t="",e!=null&&(t=e.replace(gu,"$&/")+"/"),Nr(i,n,t,"",function(f){return f})):i!=null&&(gl(i)&&(i=Cf(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(gu,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",hu(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Fi(o,u);l+=Nr(o,n,t,s,i)}else if(s=kf(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Fi(o,u++),l+=Nr(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function dr(e,n,t){if(e==null)return e;var r=[],i=0;return Nr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function _f(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Pr={transition:null},If={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:hl};function Xs(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:dr,forEach:function(e,n,t){dr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return dr(e,function(){n++}),n},toArray:function(e){return dr(e,function(n){return n})||[]},only:function(e){if(!gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=gt;L.Fragment=gf;L.Profiler=mf;L.PureComponent=dl;L.StrictMode=vf;L.Suspense=Tf;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;L.act=Xs;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vs({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=hl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Qs.call(n,s)&&!Gs.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:or,type:e.type,key:i,ref:o,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:wf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yf,_context:e},e.Consumer=e};L.createElement=Ks;L.createFactory=function(e){var n=Ks.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Sf,render:e}};L.isValidElement=gl;L.lazy=function(e){return{$$typeof:xf,_payload:{_status:-1,_result:e},_init:_f}};L.memo=function(e,n){return{$$typeof:Ef,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=n}};L.unstable_act=Xs;L.useCallback=function(e,n){return ce.current.useCallback(e,n)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,n){return ce.current.useEffect(e,n)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ce.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";$s.exports=L;var j=$s.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=j,Nf=Symbol.for("react.element"),Pf=Symbol.for("react.fragment"),Rf=Object.prototype.hasOwnProperty,Lf=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zf={key:!0,ref:!0,__self:!0,__source:!0};function Ys(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Rf.call(n,r)&&!zf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Nf,type:e,key:o,ref:l,props:i,_owner:Lf.current}}hi.Fragment=Pf;hi.jsx=Ys;hi.jsxs=Ys;Us.exports=hi;var R=Us.exports,Zs={exports:{}},Ee={},qs={exports:{}},Js={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,D){var N=O.length;O.push(D);e:for(;0<N;){var W=N-1>>>1,Y=O[W];if(0<i(Y,D))O[W]=D,O[N]=Y,N=W;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],N=O.pop();if(N!==D){O[0]=N;e:for(var W=0,Y=O.length,xn=Y>>>1;W<xn;){var me=2*(W+1)-1,$n=O[me],kn=me+1,fr=O[kn];if(0>i($n,N))kn<Y&&0>i(fr,$n)?(O[W]=fr,O[kn]=N,W=kn):(O[W]=$n,O[me]=N,W=me);else if(kn<Y&&0>i(fr,N))O[W]=fr,O[kn]=N,W=kn;else break e}}return D}function i(O,D){var N=O.sortIndex-D.sortIndex;return N!==0?N:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],f=[],g=1,v=null,h=3,m=!1,w=!1,p=!1,T=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(O){for(var D=t(f);D!==null;){if(D.callback===null)r(f);else if(D.startTime<=O)r(f),D.sortIndex=D.expirationTime,n(s,D);else break;D=t(f)}}function y(O){if(p=!1,d(O),!w)if(t(s)!==null)w=!0,yt(S);else{var D=t(f);D!==null&&Un(y,D.startTime-O)}}function S(O,D){w=!1,p&&(p=!1,c(k),k=-1),m=!0;var N=h;try{for(d(D),v=t(s);v!==null&&(!(v.expirationTime>D)||O&&!V());){var W=v.callback;if(typeof W=="function"){v.callback=null,h=v.priorityLevel;var Y=W(v.expirationTime<=D);D=e.unstable_now(),typeof Y=="function"?v.callback=Y:v===t(s)&&r(s),d(D)}else r(s);v=t(s)}if(v!==null)var xn=!0;else{var me=t(f);me!==null&&Un(y,me.startTime-D),xn=!1}return xn}finally{v=null,h=N,m=!1}}var x=!1,C=null,k=-1,P=5,I=-1;function V(){return!(e.unstable_now()-I<P)}function Tn(){if(C!==null){var O=e.unstable_now();I=O;var D=!0;try{D=C(!0,O)}finally{D?En():(x=!1,C=null)}}else x=!1}var En;if(typeof a=="function")En=function(){a(Tn)};else if(typeof MessageChannel<"u"){var cr=new MessageChannel,ji=cr.port2;cr.port1.onmessage=Tn,En=function(){ji.postMessage(null)}}else En=function(){T(Tn,0)};function yt(O){C=O,x||(x=!0,En())}function Un(O,D){k=T(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,yt(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var N=h;h=D;try{return O()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=h;h=O;try{return D()}finally{h=N}},e.unstable_scheduleCallback=function(O,D,N){var W=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?W+N:W):N=W,O){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,O={id:g++,callback:D,priorityLevel:O,startTime:N,expirationTime:Y,sortIndex:-1},N>W?(O.sortIndex=N,n(f,O),t(s)===null&&O===t(f)&&(p?(c(k),k=-1):p=!0,Un(y,N-W))):(O.sortIndex=Y,n(s,O),w||m||(w=!0,yt(S))),O},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(O){var D=h;return function(){var N=h;h=D;try{return O.apply(this,arguments)}finally{h=N}}}})(Js);qs.exports=Js;var Mf=qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf=j,Te=Mf;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bs=new Set,Ht={};function Fn(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Ht[e]=n,e=0;e<n.length;e++)bs.add(n[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),go=Object.prototype.hasOwnProperty,Ff=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vu={},mu={};function Af(e){return go.call(mu,e)?!0:go.call(vu,e)?!1:Ff.test(e)?mu[e]=!0:(vu[e]=!0,!1)}function Uf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $f(e,n,t,r){if(n===null||typeof n>"u"||Uf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var vl=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(vl,ml);re[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(vl,ml);re[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(vl,ml);re[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,n,t,r){var i=re.hasOwnProperty(n)?re[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($f(n,t,i,r)&&(t=null),r||i===null?Af(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var be=jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),wl=Symbol.for("react.strict_mode"),vo=Symbol.for("react.profiler"),ea=Symbol.for("react.provider"),na=Symbol.for("react.context"),Sl=Symbol.for("react.forward_ref"),mo=Symbol.for("react.suspense"),yo=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),ta=Symbol.for("react.offscreen"),yu=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Ai;function _t(e){if(Ai===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ai=n&&n[1]||""}return`
`+Ai+e}var Ui=!1;function $i(e,n){if(!e||Ui)return"";Ui=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Ui=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_t(e):""}function Hf(e){switch(e.tag){case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return e=$i(e.type,!1),e;case 11:return e=$i(e.type.render,!1),e;case 1:return e=$i(e.type,!0),e;default:return""}}function wo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Bn:return"Portal";case vo:return"Profiler";case wl:return"StrictMode";case mo:return"Suspense";case yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case na:return(e.displayName||"Context")+".Consumer";case ea:return(e._context.displayName||"Context")+".Provider";case Sl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return n=e.displayName||null,n!==null?n:wo(e.type)||"Memo";case nn:n=e._payload,e=e._init;try{return wo(e(n))}catch{}}return null}function Vf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wo(n);case 8:return n===wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ra(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wf(e){var n=ra(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function hr(e){e._valueTracker||(e._valueTracker=Wf(e))}function ia(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ra(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function So(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function wu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function oa(e,n){n=n.checked,n!=null&&yl(e,"checked",n,!1)}function To(e,n){oa(e,n);var t=vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Eo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Eo(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Su(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Eo(e,n,t){(n!=="number"||Br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var It=Array.isArray;function tt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function xo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(It(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function la(e,n){var t=vn(n.value),r=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Eu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ua(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ko(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ua(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,sa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Pt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bf=["Webkit","ms","Moz","O"];Object.keys(Pt).forEach(function(e){Bf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Pt[n]=Pt[e]})});function aa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Pt.hasOwnProperty(e)&&Pt[e]?(""+n).trim():n+"px"}function ca(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=aa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Qf=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Co(e,n){if(n){if(Qf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _o=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Io=null,rt=null,it=null;function xu(e){if(e=sr(e)){if(typeof Io!="function")throw Error(E(280));var n=e.stateNode;n&&(n=wi(n),Io(e.stateNode,e.type,n))}}function fa(e){rt?it?it.push(e):it=[e]:rt=e}function da(){if(rt){var e=rt,n=it;if(it=rt=null,xu(e),n)for(e=0;e<n.length;e++)xu(n[e])}}function pa(e,n){return e(n)}function ha(){}var Hi=!1;function ga(e,n,t){if(Hi)return e(n,t);Hi=!0;try{return pa(e,n,t)}finally{Hi=!1,(rt!==null||it!==null)&&(ha(),da())}}function Wt(e,n){var t=e.stateNode;if(t===null)return null;var r=wi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var Do=!1;if(Ye)try{var St={};Object.defineProperty(St,"passive",{get:function(){Do=!0}}),window.addEventListener("test",St,St),window.removeEventListener("test",St,St)}catch{Do=!1}function Gf(e,n,t,r,i,o,l,u,s){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(g){this.onError(g)}}var Rt=!1,Qr=null,Gr=!1,No=null,Kf={onError:function(e){Rt=!0,Qr=e}};function Xf(e,n,t,r,i,o,l,u,s){Rt=!1,Qr=null,Gf.apply(Kf,arguments)}function Yf(e,n,t,r,i,o,l,u,s){if(Xf.apply(this,arguments),Rt){if(Rt){var f=Qr;Rt=!1,Qr=null}else throw Error(E(198));Gr||(Gr=!0,No=f)}}function An(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function va(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ku(e){if(An(e)!==e)throw Error(E(188))}function Zf(e){var n=e.alternate;if(!n){if(n=An(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return ku(i),e;if(o===r)return ku(i),n;o=o.sibling}throw Error(E(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function ma(e){return e=Zf(e),e!==null?ya(e):null}function ya(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ya(e);if(n!==null)return n;e=e.sibling}return null}var wa=Te.unstable_scheduleCallback,Cu=Te.unstable_cancelCallback,qf=Te.unstable_shouldYield,Jf=Te.unstable_requestPaint,X=Te.unstable_now,bf=Te.unstable_getCurrentPriorityLevel,xl=Te.unstable_ImmediatePriority,Sa=Te.unstable_UserBlockingPriority,Kr=Te.unstable_NormalPriority,ed=Te.unstable_LowPriority,Ta=Te.unstable_IdlePriority,gi=null,Ve=null;function nd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(gi,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:id,td=Math.log,rd=Math.LN2;function id(e){return e>>>=0,e===0?32:31-(td(e)/rd|0)|0}var vr=64,mr=4194304;function Dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=Dt(u):(o&=l,o!==0&&(r=Dt(o)))}else l=t&~i,l!==0?r=Dt(l):o!==0&&(r=Dt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-je(n),i=1<<t,r|=e[t],n&=~i;return r}function od(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-je(o),u=1<<l,s=i[l];s===-1?(!(u&t)||u&r)&&(i[l]=od(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ea(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-je(n),e[n]=t}function ud(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-je(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function kl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-je(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var F=0;function xa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ka,Cl,Ca,Oa,_a,Ro=!1,yr=[],sn=null,an=null,cn=null,Bt=new Map,Qt=new Map,rn=[],sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,n){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Bt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function Tt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=sr(n),n!==null&&Cl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ad(e,n,t,r,i){switch(n){case"focusin":return sn=Tt(sn,e,n,t,r,i),!0;case"dragenter":return an=Tt(an,e,n,t,r,i),!0;case"mouseover":return cn=Tt(cn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Bt.set(o,Tt(Bt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qt.set(o,Tt(Qt.get(o)||null,e,n,t,r,i)),!0}return!1}function Ia(e){var n=_n(e.target);if(n!==null){var t=An(n);if(t!==null){if(n=t.tag,n===13){if(n=va(t),n!==null){e.blockedOn=n,_a(e.priority,function(){Ca(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Lo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);_o=r,t.target.dispatchEvent(r),_o=null}else return n=sr(t),n!==null&&Cl(n),e.blockedOn=t,!1;n.shift()}return!0}function _u(e,n,t){Rr(e)&&t.delete(n)}function cd(){Ro=!1,sn!==null&&Rr(sn)&&(sn=null),an!==null&&Rr(an)&&(an=null),cn!==null&&Rr(cn)&&(cn=null),Bt.forEach(_u),Qt.forEach(_u)}function Et(e,n){e.blockedOn===n&&(e.blockedOn=null,Ro||(Ro=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,cd)))}function Gt(e){function n(i){return Et(i,e)}if(0<yr.length){Et(yr[0],e);for(var t=1;t<yr.length;t++){var r=yr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Et(sn,e),an!==null&&Et(an,e),cn!==null&&Et(cn,e),Bt.forEach(n),Qt.forEach(n),t=0;t<rn.length;t++)r=rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(t=rn[0],t.blockedOn===null);)Ia(t),t.blockedOn===null&&rn.shift()}var ot=be.ReactCurrentBatchConfig,Yr=!0;function fd(e,n,t,r){var i=F,o=ot.transition;ot.transition=null;try{F=1,Ol(e,n,t,r)}finally{F=i,ot.transition=o}}function dd(e,n,t,r){var i=F,o=ot.transition;ot.transition=null;try{F=4,Ol(e,n,t,r)}finally{F=i,ot.transition=o}}function Ol(e,n,t,r){if(Yr){var i=Lo(e,n,t,r);if(i===null)Ji(e,n,r,Zr,t),Ou(e,r);else if(ad(i,e,n,t,r))r.stopPropagation();else if(Ou(e,r),n&4&&-1<sd.indexOf(e)){for(;i!==null;){var o=sr(i);if(o!==null&&ka(o),o=Lo(e,n,t,r),o===null&&Ji(e,n,r,Zr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ji(e,n,r,null,t)}}var Zr=null;function Lo(e,n,t,r){if(Zr=null,e=El(r),e=_n(e),e!==null)if(n=An(e),n===null)e=null;else if(t=n.tag,t===13){if(e=va(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Zr=e,null}function Da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bf()){case xl:return 1;case Sa:return 4;case Kr:case ed:return 16;case Ta:return 536870912;default:return 16}default:return 16}}var ln=null,_l=null,Lr=null;function Na(){if(Lr)return Lr;var e,n=_l,t=n.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Lr=i.slice(e,1<r?1-r:void 0)}function zr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function Iu(){return!1}function xe(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wr:Iu,this.isPropagationStopped=Iu,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=xe(vt),ur=G({},vt,{view:0,detail:0}),pd=xe(ur),Wi,Bi,xt,vi=G({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xt&&(xt&&e.type==="mousemove"?(Wi=e.screenX-xt.screenX,Bi=e.screenY-xt.screenY):Bi=Wi=0,xt=e),Wi)},movementY:function(e){return"movementY"in e?e.movementY:Bi}}),Du=xe(vi),hd=G({},vi,{dataTransfer:0}),gd=xe(hd),vd=G({},ur,{relatedTarget:0}),Qi=xe(vd),md=G({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),yd=xe(md),wd=G({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sd=xe(wd),Td=G({},vt,{data:0}),Nu=xe(Td),Ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kd[e])?!!n[e]:!1}function Dl(){return Cd}var Od=G({},ur,{key:function(e){if(e.key){var n=Ed[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dl,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_d=xe(Od),Id=G({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=xe(Id),Dd=G({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dl}),Nd=xe(Dd),Pd=G({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rd=xe(Pd),Ld=G({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=xe(Ld),Md=[9,13,27,32],Nl=Ye&&"CompositionEvent"in window,Lt=null;Ye&&"documentMode"in document&&(Lt=document.documentMode);var jd=Ye&&"TextEvent"in window&&!Lt,Pa=Ye&&(!Nl||Lt&&8<Lt&&11>=Lt),Ru=" ",Lu=!1;function Ra(e,n){switch(e){case"keyup":return Md.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function La(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function Fd(e,n){switch(e){case"compositionend":return La(n);case"keypress":return n.which!==32?null:(Lu=!0,Ru);case"textInput":return e=n.data,e===Ru&&Lu?null:e;default:return null}}function Ad(e,n){if(Gn)return e==="compositionend"||!Nl&&Ra(e,n)?(e=Na(),Lr=_l=ln=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pa&&n.locale!=="ko"?null:n.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ud[e.type]:n==="textarea"}function za(e,n,t,r){fa(r),n=qr(n,"onChange"),0<n.length&&(t=new Il("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var zt=null,Kt=null;function $d(e){Qa(e,0)}function mi(e){var n=Yn(e);if(ia(n))return e}function Hd(e,n){if(e==="change")return n}var Ma=!1;if(Ye){var Gi;if(Ye){var Ki="oninput"in document;if(!Ki){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Ki=typeof Mu.oninput=="function"}Gi=Ki}else Gi=!1;Ma=Gi&&(!document.documentMode||9<document.documentMode)}function ju(){zt&&(zt.detachEvent("onpropertychange",ja),Kt=zt=null)}function ja(e){if(e.propertyName==="value"&&mi(Kt)){var n=[];za(n,Kt,e,El(e)),ga($d,n)}}function Vd(e,n,t){e==="focusin"?(ju(),zt=n,Kt=t,zt.attachEvent("onpropertychange",ja)):e==="focusout"&&ju()}function Wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Kt)}function Bd(e,n){if(e==="click")return mi(n)}function Qd(e,n){if(e==="input"||e==="change")return mi(n)}function Gd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ae=typeof Object.is=="function"?Object.is:Gd;function Xt(e,n){if(Ae(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!go.call(n,i)||!Ae(e[i],n[i]))return!1}return!0}function Fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,n){var t=Fu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fu(t)}}function Fa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Aa(){for(var e=window,n=Br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Br(e.document)}return n}function Pl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Kd(e){var n=Aa(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Fa(t.ownerDocument.documentElement,t)){if(r!==null&&Pl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Au(t,o);var l=Au(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=Ye&&"documentMode"in document&&11>=document.documentMode,Kn=null,zo=null,Mt=null,Mo=!1;function Uu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Mo||Kn==null||Kn!==Br(r)||(r=Kn,"selectionStart"in r&&Pl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mt&&Xt(Mt,r)||(Mt=r,r=qr(zo,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kn)))}function Sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xn={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Xi={},Ua={};Ye&&(Ua=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function yi(e){if(Xi[e])return Xi[e];if(!Xn[e])return e;var n=Xn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ua)return Xi[e]=n[t];return e}var $a=yi("animationend"),Ha=yi("animationiteration"),Va=yi("animationstart"),Wa=yi("transitionend"),Ba=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){Ba.set(e,n),Fn(n,[e])}for(var Yi=0;Yi<$u.length;Yi++){var Zi=$u[Yi],Yd=Zi.toLowerCase(),Zd=Zi[0].toUpperCase()+Zi.slice(1);yn(Yd,"on"+Zd)}yn($a,"onAnimationEnd");yn(Ha,"onAnimationIteration");yn(Va,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Wa,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));function Hu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Yf(r,n,void 0,e),e.currentTarget=null}function Qa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,f=u.currentTarget;if(u=u.listener,s!==o&&i.isPropagationStopped())break e;Hu(i,u,f),o=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,f=u.currentTarget,u=u.listener,s!==o&&i.isPropagationStopped())break e;Hu(i,u,f),o=s}}}if(Gr)throw e=No,Gr=!1,No=null,e}function U(e,n){var t=n[$o];t===void 0&&(t=n[$o]=new Set);var r=e+"__bubble";t.has(r)||(Ga(n,e,2,!1),t.add(r))}function qi(e,n,t){var r=0;n&&(r|=4),Ga(t,e,r,n)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Yt(e){if(!e[Tr]){e[Tr]=!0,bs.forEach(function(t){t!=="selectionchange"&&(qd.has(t)||qi(t,!1,e),qi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Tr]||(n[Tr]=!0,qi("selectionchange",!1,n))}}function Ga(e,n,t,r){switch(Da(n)){case 1:var i=fd;break;case 4:i=dd;break;default:i=Ol}t=i.bind(null,n,t,e),i=void 0,!Do||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ji(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;u!==null;){if(l=_n(u),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}u=u.parentNode}}r=r.return}ga(function(){var f=o,g=El(t),v=[];e:{var h=Ba.get(e);if(h!==void 0){var m=Il,w=e;switch(e){case"keypress":if(zr(t)===0)break e;case"keydown":case"keyup":m=_d;break;case"focusin":w="focus",m=Qi;break;case"focusout":w="blur",m=Qi;break;case"beforeblur":case"afterblur":m=Qi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Nd;break;case $a:case Ha:case Va:m=yd;break;case Wa:m=Rd;break;case"scroll":m=pd;break;case"wheel":m=zd;break;case"copy":case"cut":case"paste":m=Sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pu}var p=(n&4)!==0,T=!p&&e==="scroll",c=p?h!==null?h+"Capture":null:h;p=[];for(var a=f,d;a!==null;){d=a;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,c!==null&&(y=Wt(a,c),y!=null&&p.push(Zt(a,y,d)))),T)break;a=a.return}0<p.length&&(h=new m(h,w,null,t,g),v.push({event:h,listeners:p}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&t!==_o&&(w=t.relatedTarget||t.fromElement)&&(_n(w)||w[Ze]))break e;if((m||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,m?(w=t.relatedTarget||t.toElement,m=f,w=w?_n(w):null,w!==null&&(T=An(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=f),m!==w)){if(p=Du,y="onMouseLeave",c="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(p=Pu,y="onPointerLeave",c="onPointerEnter",a="pointer"),T=m==null?h:Yn(m),d=w==null?h:Yn(w),h=new p(y,a+"leave",m,t,g),h.target=T,h.relatedTarget=d,y=null,_n(g)===f&&(p=new p(c,a+"enter",w,t,g),p.target=d,p.relatedTarget=T,y=p),T=y,m&&w)n:{for(p=m,c=w,a=0,d=p;d;d=Hn(d))a++;for(d=0,y=c;y;y=Hn(y))d++;for(;0<a-d;)p=Hn(p),a--;for(;0<d-a;)c=Hn(c),d--;for(;a--;){if(p===c||c!==null&&p===c.alternate)break n;p=Hn(p),c=Hn(c)}p=null}else p=null;m!==null&&Vu(v,h,m,p,!1),w!==null&&T!==null&&Vu(v,T,w,p,!0)}}e:{if(h=f?Yn(f):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=Hd;else if(zu(h))if(Ma)S=Qd;else{S=Wd;var x=Vd}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Bd);if(S&&(S=S(e,f))){za(v,S,t,g);break e}x&&x(e,h,f),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&Eo(h,"number",h.value)}switch(x=f?Yn(f):window,e){case"focusin":(zu(x)||x.contentEditable==="true")&&(Kn=x,zo=f,Mt=null);break;case"focusout":Mt=zo=Kn=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,Uu(v,t,g);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":Uu(v,t,g)}var C;if(Nl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Gn?Ra(e,t)&&(k="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(Pa&&t.locale!=="ko"&&(Gn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Gn&&(C=Na()):(ln=g,_l="value"in ln?ln.value:ln.textContent,Gn=!0)),x=qr(f,k),0<x.length&&(k=new Nu(k,e,null,t,g),v.push({event:k,listeners:x}),C?k.data=C:(C=La(t),C!==null&&(k.data=C)))),(C=jd?Fd(e,t):Ad(e,t))&&(f=qr(f,"onBeforeInput"),0<f.length&&(g=new Nu("onBeforeInput","beforeinput",null,t,g),v.push({event:g,listeners:f}),g.data=C))}Qa(v,n)})}function Zt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function qr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wt(e,t),o!=null&&r.unshift(Zt(e,o,i)),o=Wt(e,n),o!=null&&r.push(Zt(e,o,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,s=u.alternate,f=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&f!==null&&(u=f,i?(s=Wt(t,o),s!=null&&l.unshift(Zt(t,s,u))):i||(s=Wt(t,o),s!=null&&l.push(Zt(t,s,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Jd=/\r\n?/g,bd=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(bd,"")}function Er(e,n,t){if(n=Wu(n),Wu(e)!==n&&t)throw Error(E(425))}function Jr(){}var jo=null,Fo=null;function Ao(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uo=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,Bu=typeof Promise=="function"?Promise:void 0,n0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bu<"u"?function(e){return Bu.resolve(null).then(e).catch(t0)}:Uo;function t0(e){setTimeout(function(){throw e})}function bi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Gt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Gt(n)}function fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Qu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var mt=Math.random().toString(36).slice(2),He="__reactFiber$"+mt,qt="__reactProps$"+mt,Ze="__reactContainer$"+mt,$o="__reactEvents$"+mt,r0="__reactListeners$"+mt,i0="__reactHandles$"+mt;function _n(e){var n=e[He];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ze]||t[He]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Qu(e);e!==null;){if(t=e[He])return t;e=Qu(e)}return n}e=t,t=e.parentNode}return null}function sr(e){return e=e[He]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function wi(e){return e[qt]||null}var Ho=[],Zn=-1;function wn(e){return{current:e}}function $(e){0>Zn||(e.current=Ho[Zn],Ho[Zn]=null,Zn--)}function A(e,n){Zn++,Ho[Zn]=e.current,e.current=n}var mn={},ue=wn(mn),he=wn(!1),Rn=mn;function at(e,n){var t=e.type.contextTypes;if(!t)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function br(){$(he),$(ue)}function Gu(e,n,t){if(ue.current!==mn)throw Error(E(168));A(ue,n),A(he,t)}function Ka(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(E(108,Vf(e)||"Unknown",i));return G({},t,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Rn=ue.current,A(ue,e),A(he,he.current),!0}function Ku(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=Ka(e,n,Rn),r.__reactInternalMemoizedMergedChildContext=e,$(he),$(ue),A(ue,e)):$(he),A(he,t)}var Qe=null,Si=!1,eo=!1;function Xa(e){Qe===null?Qe=[e]:Qe.push(e)}function o0(e){Si=!0,Xa(e)}function Sn(){if(!eo&&Qe!==null){eo=!0;var e=0,n=F;try{var t=Qe;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Qe=null,Si=!1}catch(i){throw Qe!==null&&(Qe=Qe.slice(e+1)),wa(xl,Sn),i}finally{F=n,eo=!1}}return null}var qn=[],Jn=0,ni=null,ti=0,Ce=[],Oe=0,Ln=null,Ge=1,Ke="";function Cn(e,n){qn[Jn++]=ti,qn[Jn++]=ni,ni=e,ti=n}function Ya(e,n,t){Ce[Oe++]=Ge,Ce[Oe++]=Ke,Ce[Oe++]=Ln,Ln=e;var r=Ge;e=Ke;var i=32-je(r)-1;r&=~(1<<i),t+=1;var o=32-je(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ge=1<<32-je(n)+i|t<<i|r,Ke=o+e}else Ge=1<<o|t<<i|r,Ke=e}function Rl(e){e.return!==null&&(Cn(e,1),Ya(e,1,0))}function Ll(e){for(;e===ni;)ni=qn[--Jn],qn[Jn]=null,ti=qn[--Jn],qn[Jn]=null;for(;e===Ln;)Ln=Ce[--Oe],Ce[Oe]=null,Ke=Ce[--Oe],Ce[Oe]=null,Ge=Ce[--Oe],Ce[Oe]=null}var Se=null,we=null,H=!1,Me=null;function Za(e,n){var t=Ie(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,we=fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ln!==null?{id:Ge,overflow:Ke}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ie(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,we=null,!0):!1;default:return!1}}function Vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wo(e){if(H){var n=we;if(n){var t=n;if(!Xu(e,n)){if(Vo(e))throw Error(E(418));n=fn(t.nextSibling);var r=Se;n&&Xu(e,n)?Za(r,t):(e.flags=e.flags&-4097|2,H=!1,Se=e)}}else{if(Vo(e))throw Error(E(418));e.flags=e.flags&-4097|2,H=!1,Se=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function xr(e){if(e!==Se)return!1;if(!H)return Yu(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ao(e.type,e.memoizedProps)),n&&(n=we)){if(Vo(e))throw qa(),Error(E(418));for(;n;)Za(e,n),n=fn(n.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=Se?fn(e.stateNode.nextSibling):null;return!0}function qa(){for(var e=we;e;)e=fn(e.nextSibling)}function ct(){we=Se=null,H=!1}function zl(e){Me===null?Me=[e]:Me.push(e)}var l0=be.ReactCurrentBatchConfig;function kt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function kr(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Zu(e){var n=e._init;return n(e._payload)}function Ja(e){function n(c,a){if(e){var d=c.deletions;d===null?(c.deletions=[a],c.flags|=16):d.push(a)}}function t(c,a){if(!e)return null;for(;a!==null;)n(c,a),a=a.sibling;return null}function r(c,a){for(c=new Map;a!==null;)a.key!==null?c.set(a.key,a):c.set(a.index,a),a=a.sibling;return c}function i(c,a){return c=gn(c,a),c.index=0,c.sibling=null,c}function o(c,a,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<a?(c.flags|=2,a):d):(c.flags|=2,a)):(c.flags|=1048576,a)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function u(c,a,d,y){return a===null||a.tag!==6?(a=uo(d,c.mode,y),a.return=c,a):(a=i(a,d),a.return=c,a)}function s(c,a,d,y){var S=d.type;return S===Qn?g(c,a,d.props.children,y,d.key):a!==null&&(a.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nn&&Zu(S)===a.type)?(y=i(a,d.props),y.ref=kt(c,a,d),y.return=c,y):(y=Hr(d.type,d.key,d.props,null,c.mode,y),y.ref=kt(c,a,d),y.return=c,y)}function f(c,a,d,y){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=so(d,c.mode,y),a.return=c,a):(a=i(a,d.children||[]),a.return=c,a)}function g(c,a,d,y,S){return a===null||a.tag!==7?(a=Pn(d,c.mode,y,S),a.return=c,a):(a=i(a,d),a.return=c,a)}function v(c,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=uo(""+a,c.mode,d),a.return=c,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case pr:return d=Hr(a.type,a.key,a.props,null,c.mode,d),d.ref=kt(c,null,a),d.return=c,d;case Bn:return a=so(a,c.mode,d),a.return=c,a;case nn:var y=a._init;return v(c,y(a._payload),d)}if(It(a)||wt(a))return a=Pn(a,c.mode,d,null),a.return=c,a;kr(c,a)}return null}function h(c,a,d,y){var S=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:u(c,a,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pr:return d.key===S?s(c,a,d,y):null;case Bn:return d.key===S?f(c,a,d,y):null;case nn:return S=d._init,h(c,a,S(d._payload),y)}if(It(d)||wt(d))return S!==null?null:g(c,a,d,y,null);kr(c,d)}return null}function m(c,a,d,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(d)||null,u(a,c,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pr:return c=c.get(y.key===null?d:y.key)||null,s(a,c,y,S);case Bn:return c=c.get(y.key===null?d:y.key)||null,f(a,c,y,S);case nn:var x=y._init;return m(c,a,d,x(y._payload),S)}if(It(y)||wt(y))return c=c.get(d)||null,g(a,c,y,S,null);kr(a,y)}return null}function w(c,a,d,y){for(var S=null,x=null,C=a,k=a=0,P=null;C!==null&&k<d.length;k++){C.index>k?(P=C,C=null):P=C.sibling;var I=h(c,C,d[k],y);if(I===null){C===null&&(C=P);break}e&&C&&I.alternate===null&&n(c,C),a=o(I,a,k),x===null?S=I:x.sibling=I,x=I,C=P}if(k===d.length)return t(c,C),H&&Cn(c,k),S;if(C===null){for(;k<d.length;k++)C=v(c,d[k],y),C!==null&&(a=o(C,a,k),x===null?S=C:x.sibling=C,x=C);return H&&Cn(c,k),S}for(C=r(c,C);k<d.length;k++)P=m(C,c,k,d[k],y),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?k:P.key),a=o(P,a,k),x===null?S=P:x.sibling=P,x=P);return e&&C.forEach(function(V){return n(c,V)}),H&&Cn(c,k),S}function p(c,a,d,y){var S=wt(d);if(typeof S!="function")throw Error(E(150));if(d=S.call(d),d==null)throw Error(E(151));for(var x=S=null,C=a,k=a=0,P=null,I=d.next();C!==null&&!I.done;k++,I=d.next()){C.index>k?(P=C,C=null):P=C.sibling;var V=h(c,C,I.value,y);if(V===null){C===null&&(C=P);break}e&&C&&V.alternate===null&&n(c,C),a=o(V,a,k),x===null?S=V:x.sibling=V,x=V,C=P}if(I.done)return t(c,C),H&&Cn(c,k),S;if(C===null){for(;!I.done;k++,I=d.next())I=v(c,I.value,y),I!==null&&(a=o(I,a,k),x===null?S=I:x.sibling=I,x=I);return H&&Cn(c,k),S}for(C=r(c,C);!I.done;k++,I=d.next())I=m(C,c,k,I.value,y),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?k:I.key),a=o(I,a,k),x===null?S=I:x.sibling=I,x=I);return e&&C.forEach(function(Tn){return n(c,Tn)}),H&&Cn(c,k),S}function T(c,a,d,y){if(typeof d=="object"&&d!==null&&d.type===Qn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case pr:e:{for(var S=d.key,x=a;x!==null;){if(x.key===S){if(S=d.type,S===Qn){if(x.tag===7){t(c,x.sibling),a=i(x,d.props.children),a.return=c,c=a;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nn&&Zu(S)===x.type){t(c,x.sibling),a=i(x,d.props),a.ref=kt(c,x,d),a.return=c,c=a;break e}t(c,x);break}else n(c,x);x=x.sibling}d.type===Qn?(a=Pn(d.props.children,c.mode,y,d.key),a.return=c,c=a):(y=Hr(d.type,d.key,d.props,null,c.mode,y),y.ref=kt(c,a,d),y.return=c,c=y)}return l(c);case Bn:e:{for(x=d.key;a!==null;){if(a.key===x)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){t(c,a.sibling),a=i(a,d.children||[]),a.return=c,c=a;break e}else{t(c,a);break}else n(c,a);a=a.sibling}a=so(d,c.mode,y),a.return=c,c=a}return l(c);case nn:return x=d._init,T(c,a,x(d._payload),y)}if(It(d))return w(c,a,d,y);if(wt(d))return p(c,a,d,y);kr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(t(c,a.sibling),a=i(a,d),a.return=c,c=a):(t(c,a),a=uo(d,c.mode,y),a.return=c,c=a),l(c)):t(c,a)}return T}var ft=Ja(!0),ba=Ja(!1),ri=wn(null),ii=null,bn=null,Ml=null;function jl(){Ml=bn=ii=null}function Fl(e){var n=ri.current;$(ri),e._currentValue=n}function Bo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function lt(e,n){ii=e,Ml=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Ml!==e)if(e={context:e,memoizedValue:n,next:null},bn===null){if(ii===null)throw Error(E(308));bn=e,ii.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return n}var In=null;function Al(e){In===null?In=[e]:In.push(e)}function ec(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Al(n)):(t.next=i.next,i.next=t),n.interleaved=t,qe(e,r)}function qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var tn=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,qe(e,t)}return i=r.interleaved,i===null?(n.next=n,Al(r)):(n.next=i.next,i.next=n),r.interleaved=n,qe(e,t)}function Mr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}function qu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function oi(e,n,t,r){var i=e.updateQueue;tn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,f=s.next;s.next=null,l===null?o=f:l.next=f,l=s;var g=e.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==l&&(u===null?g.firstBaseUpdate=f:u.next=f,g.lastBaseUpdate=s))}if(o!==null){var v=i.baseState;l=0,g=f=s=null,u=o;do{var h=u.lane,m=u.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:m,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,p=u;switch(h=n,m=t,p.tag){case 1:if(w=p.payload,typeof w=="function"){v=w.call(m,v,h);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=p.payload,h=typeof w=="function"?w.call(m,v,h):w,h==null)break e;v=G({},v,h);break e;case 2:tn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[u]:h.push(u))}else m={eventTime:m,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(f=g=m,s=v):g=g.next=m,l|=h;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;h=u,u=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(s=v),i.baseState=s,i.firstBaseUpdate=f,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Mn|=l,e.lanes=l,e.memoizedState=v}}function Ju(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ar={},We=wn(ar),Jt=wn(ar),bt=wn(ar);function Dn(e){if(e===ar)throw Error(E(174));return e}function $l(e,n){switch(A(bt,n),A(Jt,e),A(We,ar),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ko(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ko(n,e)}$(We),A(We,n)}function dt(){$(We),$(Jt),$(bt)}function tc(e){Dn(bt.current);var n=Dn(We.current),t=ko(n,e.type);n!==t&&(A(Jt,e),A(We,t))}function Hl(e){Jt.current===e&&($(We),$(Jt))}var B=wn(0);function li(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var no=[];function Vl(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var jr=be.ReactCurrentDispatcher,to=be.ReactCurrentBatchConfig,zn=0,Q=null,q=null,b=null,ui=!1,jt=!1,er=0,u0=0;function ie(){throw Error(E(321))}function Wl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ae(e[t],n[t]))return!1;return!0}function Bl(e,n,t,r,i,o){if(zn=o,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,jr.current=e===null||e.memoizedState===null?f0:d0,e=t(r,i),jt){o=0;do{if(jt=!1,er=0,25<=o)throw Error(E(301));o+=1,b=q=null,n.updateQueue=null,jr.current=p0,e=t(r,i)}while(jt)}if(jr.current=si,n=q!==null&&q.next!==null,zn=0,b=q=Q=null,ui=!1,n)throw Error(E(300));return e}function Ql(){var e=er!==0;return er=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?Q.memoizedState=b=e:b=b.next=e,b}function Pe(){if(q===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var n=b===null?Q.memoizedState:b.next;if(n!==null)b=n,q=e;else{if(e===null)throw Error(E(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},b===null?Q.memoizedState=b=e:b=b.next=e}return b}function nr(e,n){return typeof n=="function"?n(e):n}function ro(e){var n=Pe(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=q,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,s=null,f=o;do{var g=f.lane;if((zn&g)===g)s!==null&&(s=s.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var v={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};s===null?(u=s=v,l=r):s=s.next=v,Q.lanes|=g,Mn|=g}f=f.next}while(f!==null&&f!==o);s===null?l=r:s.next=u,Ae(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,Mn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function io(e){var n=Pe(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ae(o,n.memoizedState)||(pe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function rc(){}function ic(e,n){var t=Q,r=Pe(),i=n(),o=!Ae(r.memoizedState,i);if(o&&(r.memoizedState=i,pe=!0),r=r.queue,Gl(uc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,tr(9,lc.bind(null,t,r,i,n),void 0,null),ee===null)throw Error(E(349));zn&30||oc(t,n,i)}return i}function oc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function lc(e,n,t,r){n.value=t,n.getSnapshot=r,sc(n)&&ac(e)}function uc(e,n,t){return t(function(){sc(n)&&ac(e)})}function sc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ae(e,t)}catch{return!0}}function ac(e){var n=qe(e,1);n!==null&&Fe(n,e,1,-1)}function bu(e){var n=$e();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},n.queue=e,e=e.dispatch=c0.bind(null,Q,e),[n.memoizedState,e]}function tr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function cc(){return Pe().memoizedState}function Fr(e,n,t,r){var i=$e();Q.flags|=e,i.memoizedState=tr(1|n,t,void 0,r===void 0?null:r)}function Ti(e,n,t,r){var i=Pe();r=r===void 0?null:r;var o=void 0;if(q!==null){var l=q.memoizedState;if(o=l.destroy,r!==null&&Wl(r,l.deps)){i.memoizedState=tr(n,t,o,r);return}}Q.flags|=e,i.memoizedState=tr(1|n,t,o,r)}function es(e,n){return Fr(8390656,8,e,n)}function Gl(e,n){return Ti(2048,8,e,n)}function fc(e,n){return Ti(4,2,e,n)}function dc(e,n){return Ti(4,4,e,n)}function pc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hc(e,n,t){return t=t!=null?t.concat([e]):null,Ti(4,4,pc.bind(null,n,e),t)}function Kl(){}function gc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function vc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Wl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function mc(e,n,t){return zn&21?(Ae(t,n)||(t=Ea(),Q.lanes|=t,Mn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function s0(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=to.transition;to.transition={};try{e(!1),n()}finally{F=t,to.transition=r}}function yc(){return Pe().memoizedState}function a0(e,n,t){var r=hn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},wc(e))Sc(n,t);else if(t=ec(e,n,t,r),t!==null){var i=ae();Fe(t,e,r,i),Tc(t,n,r)}}function c0(e,n,t){var r=hn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(wc(e))Sc(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,Ae(u,l)){var s=n.interleaved;s===null?(i.next=i,Al(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=ec(e,n,i,r),t!==null&&(i=ae(),Fe(t,e,r,i),Tc(t,n,r))}}function wc(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function Sc(e,n){jt=ui=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Tc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}var si={readContext:Ne,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},f0={readContext:Ne,useCallback:function(e,n){return $e().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:es,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fr(4194308,4,pc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fr(4,2,e,n)},useMemo:function(e,n){var t=$e();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=$e();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=a0.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var n=$e();return e={current:e},n.memoizedState=e},useState:bu,useDebugValue:Kl,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=bu(!1),n=e[0];return e=s0.bind(null,e[1]),$e().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Q,i=$e();if(H){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),ee===null)throw Error(E(349));zn&30||oc(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,es(uc.bind(null,r,o,e),[e]),r.flags|=2048,tr(9,lc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=$e(),n=ee.identifierPrefix;if(H){var t=Ke,r=Ge;t=(r&~(1<<32-je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=er++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=u0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},d0={readContext:Ne,useCallback:gc,useContext:Ne,useEffect:Gl,useImperativeHandle:hc,useInsertionEffect:fc,useLayoutEffect:dc,useMemo:vc,useReducer:ro,useRef:cc,useState:function(){return ro(nr)},useDebugValue:Kl,useDeferredValue:function(e){var n=Pe();return mc(n,q.memoizedState,e)},useTransition:function(){var e=ro(nr)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:rc,useSyncExternalStore:ic,useId:yc,unstable_isNewReconciler:!1},p0={readContext:Ne,useCallback:gc,useContext:Ne,useEffect:Gl,useImperativeHandle:hc,useInsertionEffect:fc,useLayoutEffect:dc,useMemo:vc,useReducer:io,useRef:cc,useState:function(){return io(nr)},useDebugValue:Kl,useDeferredValue:function(e){var n=Pe();return q===null?n.memoizedState=e:mc(n,q.memoizedState,e)},useTransition:function(){var e=io(nr)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:rc,useSyncExternalStore:ic,useId:yc,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Qo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ei={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ae(),i=hn(e),o=Xe(r,i);o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,i),n!==null&&(Fe(n,e,i,r),Mr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ae(),i=hn(e),o=Xe(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,i),n!==null&&(Fe(n,e,i,r),Mr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),r=hn(e),i=Xe(t,r);i.tag=2,n!=null&&(i.callback=n),n=dn(e,i,r),n!==null&&(Fe(n,e,r,t),Mr(n,e,r))}};function ns(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Xt(t,r)||!Xt(i,o):!0}function Ec(e,n,t){var r=!1,i=mn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(i=ge(n)?Rn:ue.current,r=n.contextTypes,o=(r=r!=null)?at(e,i):mn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ei,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function ts(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ei.enqueueReplaceState(n,n.state,null)}function Go(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ul(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Ne(o):(o=ge(n)?Rn:ue.current,i.context=at(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Qo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ei.enqueueReplaceState(i,i.state,null),oi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",r=n;do t+=Hf(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function oo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ko(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function xc(e,n,t){t=Xe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ci||(ci=!0,rl=r),Ko(e,n)},t}function kc(e,n,t){t=Xe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ko(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ko(e,n),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function rs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new h0;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=I0.bind(null,e,n,t),n.then(e,e))}function is(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function os(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Xe(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var g0=be.ReactCurrentOwner,pe=!1;function se(e,n,t,r){n.child=e===null?ba(n,null,t,r):ft(n,e.child,t,r)}function ls(e,n,t,r,i){t=t.render;var o=n.ref;return lt(n,i),r=Bl(e,n,t,r,o,i),t=Ql(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Je(e,n,i)):(H&&t&&Rl(n),n.flags|=1,se(e,n,r,i),n.child)}function us(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!nu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Cc(e,n,o,r,i)):(e=Hr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Xt,t(l,r)&&e.ref===n.ref)return Je(e,n,i)}return n.flags|=1,e=gn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Cc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Xt(o,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Je(e,n,i)}return Xo(e,n,t,r,i)}function Oc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(nt,ye),ye|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,A(nt,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,A(nt,ye),ye|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,A(nt,ye),ye|=r;return se(e,n,i,t),n.child}function _c(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Xo(e,n,t,r,i){var o=ge(t)?Rn:ue.current;return o=at(n,o),lt(n,i),t=Bl(e,n,t,r,o,i),r=Ql(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Je(e,n,i)):(H&&r&&Rl(n),n.flags|=1,se(e,n,t,i),n.child)}function ss(e,n,t,r,i){if(ge(t)){var o=!0;ei(n)}else o=!1;if(lt(n,i),n.stateNode===null)Ar(e,n),Ec(n,t,r),Go(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var s=l.context,f=t.contextType;typeof f=="object"&&f!==null?f=Ne(f):(f=ge(t)?Rn:ue.current,f=at(n,f));var g=t.getDerivedStateFromProps,v=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==f)&&ts(n,l,r,f),tn=!1;var h=n.memoizedState;l.state=h,oi(n,r,l,i),s=n.memoizedState,u!==r||h!==s||he.current||tn?(typeof g=="function"&&(Qo(n,t,g,r),s=n.memoizedState),(u=tn||ns(n,t,u,r,h,s,f))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),l.props=r,l.state=s,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,nc(e,n),u=n.memoizedProps,f=n.type===n.elementType?u:Le(n.type,u),l.props=f,v=n.pendingProps,h=l.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ne(s):(s=ge(t)?Rn:ue.current,s=at(n,s));var m=t.getDerivedStateFromProps;(g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==v||h!==s)&&ts(n,l,r,s),tn=!1,h=n.memoizedState,l.state=h,oi(n,r,l,i);var w=n.memoizedState;u!==v||h!==w||he.current||tn?(typeof m=="function"&&(Qo(n,t,m,r),w=n.memoizedState),(f=tn||ns(n,t,f,r,h,w,s)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),l.props=r,l.state=w,l.context=s,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Yo(e,n,t,r,o,i)}function Yo(e,n,t,r,i,o){_c(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&Ku(n,t,!1),Je(e,n,o);r=n.stateNode,g0.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=ft(n,e.child,null,o),n.child=ft(n,null,u,o)):se(e,n,u,o),n.memoizedState=r.state,i&&Ku(n,t,!0),n.child}function Ic(e){var n=e.stateNode;n.pendingContext?Gu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gu(e,n.context,!1),$l(e,n.containerInfo)}function as(e,n,t,r,i){return ct(),zl(i),n.flags|=256,se(e,n,t,r),n.child}var Zo={dehydrated:null,treeContext:null,retryLane:0};function qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dc(e,n,t){var r=n.pendingProps,i=B.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(B,i&1),e===null)return Wo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ci(l,r,0,null),e=Pn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=qo(t),n.memoizedState=Zo,e):Xl(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return v0(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=gn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=gn(u,o):(o=Pn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?qo(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Zo,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Xl(e,n){return n=Ci({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Cr(e,n,t,r){return r!==null&&zl(r),ft(n,e.child,null,t),e=Xl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function v0(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=oo(Error(E(422))),Cr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Ci({mode:"visible",children:r.children},i,0,null),o=Pn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ft(n,e.child,null,l),n.child.memoizedState=qo(l),n.memoizedState=Zo,o);if(!(n.mode&1))return Cr(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(E(419)),r=oo(o,r,void 0),Cr(e,n,l,r)}if(u=(l&e.childLanes)!==0,pe||u){if(r=ee,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,qe(e,i),Fe(r,e,i,-1))}return eu(),r=oo(Error(E(421))),Cr(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=D0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,we=fn(i.nextSibling),Se=n,H=!0,Me=null,e!==null&&(Ce[Oe++]=Ge,Ce[Oe++]=Ke,Ce[Oe++]=Ln,Ge=e.id,Ke=e.overflow,Ln=n),n=Xl(n,r.children),n.flags|=4096,n)}function cs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Bo(e.return,n,t)}function lo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Nc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(se(e,n,r.children,t),r=B.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cs(e,t,n);else if(e.tag===19)cs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(B,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&li(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),lo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}lo(n,!0,t,null,o);break;case"together":lo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ar(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=gn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function m0(e,n,t){switch(n.tag){case 3:Ic(n),ct();break;case 5:tc(n);break;case 1:ge(n.type)&&ei(n);break;case 4:$l(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;A(ri,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(A(B,B.current&1),n.flags|=128,null):t&n.child.childLanes?Dc(e,n,t):(A(B,B.current&1),e=Je(e,n,t),e!==null?e.sibling:null);A(B,B.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Nc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(B,B.current),r)break;return null;case 22:case 23:return n.lanes=0,Oc(e,n,t)}return Je(e,n,t)}var Pc,Jo,Rc,Lc;Pc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Jo=function(){};Rc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Dn(We.current);var o=null;switch(t){case"input":i=So(e,i),r=So(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=xo(e,i),r=xo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}Co(t,r);var l;t=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ht.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&s!==u&&(s!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(t||(t={}),t[l]=s[l])}else t||(o||(o=[]),o.push(f,t)),t=s;else f==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(f,s)):f==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(f,""+s):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ht.hasOwnProperty(f)?(s!=null&&f==="onScroll"&&U("scroll",e),o||u===s||(o=[])):(o=o||[]).push(f,s))}t&&(o=o||[]).push("style",t);var f=o;(n.updateQueue=f)&&(n.flags|=4)}};Lc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function y0(e,n,t){var r=n.pendingProps;switch(Ll(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return ge(n.type)&&br(),oe(n),null;case 3:return r=n.stateNode,dt(),$(he),$(ue),Vl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(ll(Me),Me=null))),Jo(e,n),oe(n),null;case 5:Hl(n);var i=Dn(bt.current);if(t=n.type,e!==null&&n.stateNode!=null)Rc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return oe(n),null}if(e=Dn(We.current),xr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[He]=n,r[qt]=o,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Nt.length;i++)U(Nt[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":wu(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Tu(r,o),U("invalid",r)}Co(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Er(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Er(r.textContent,u,e),i=["children",""+u]):Ht.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&U("scroll",r)}switch(t){case"input":hr(r),Su(r,o,!0);break;case"textarea":hr(r),Eu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ua(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[He]=n,e[qt]=r,Pc(e,n,!1,!1),n.stateNode=e;e:{switch(l=Oo(t,r),t){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nt.length;i++)U(Nt[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":wu(e,r),i=So(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),U("invalid",e);break;case"textarea":Tu(e,r),i=xo(e,r),U("invalid",e);break;default:i=r}Co(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?ca(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sa(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Vt(e,s):typeof s=="number"&&Vt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ht.hasOwnProperty(o)?s!=null&&o==="onScroll"&&U("scroll",e):s!=null&&yl(e,o,s,l))}switch(t){case"input":hr(e),Su(e,r,!1);break;case"textarea":hr(e),Eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tt(e,!!r.multiple,o,!1):r.defaultValue!=null&&tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)Lc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Dn(bt.current),Dn(We.current),xr(n)){if(r=n.stateNode,t=n.memoizedProps,r[He]=n,(o=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Er(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[He]=n,n.stateNode=r}return oe(n),null;case 13:if($(B),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&we!==null&&n.mode&1&&!(n.flags&128))qa(),ct(),n.flags|=98560,o=!1;else if(o=xr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[He]=n}else ct(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),o=!1}else Me!==null&&(ll(Me),Me=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||B.current&1?J===0&&(J=3):eu())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return dt(),Jo(e,n),e===null&&Yt(n.stateNode.containerInfo),oe(n),null;case 10:return Fl(n.type._context),oe(n),null;case 17:return ge(n.type)&&br(),oe(n),null;case 19:if($(B),o=n.memoizedState,o===null)return oe(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Ct(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=li(e),l!==null){for(n.flags|=128,Ct(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return A(B,B.current&1|2),n.child}e=e.sibling}o.tail!==null&&X()>ht&&(n.flags|=128,r=!0,Ct(o,!1),n.lanes=4194304)}else{if(!r)if(e=li(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!H)return oe(n),null}else 2*X()-o.renderingStartTime>ht&&t!==1073741824&&(n.flags|=128,r=!0,Ct(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=X(),n.sibling=null,t=B.current,A(B,r?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return bl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ye&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function w0(e,n){switch(Ll(n),n.tag){case 1:return ge(n.type)&&br(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dt(),$(he),$(ue),Vl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Hl(n),null;case 13:if($(B),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(B),null;case 4:return dt(),null;case 10:return Fl(n.type._context),null;case 22:case 23:return bl(),null;case 24:return null;default:return null}}var Or=!1,le=!1,S0=typeof WeakSet=="function"?WeakSet:Set,_=null;function et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function bo(e,n,t){try{t()}catch(r){K(e,n,r)}}var fs=!1;function T0(e,n){if(jo=Yr,e=Aa(),Pl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,s=-1,f=0,g=0,v=e,h=null;n:for(;;){for(var m;v!==t||i!==0&&v.nodeType!==3||(u=l+i),v!==o||r!==0&&v.nodeType!==3||(s=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(m=v.firstChild)!==null;)h=v,v=m;for(;;){if(v===e)break n;if(h===t&&++f===i&&(u=l),h===o&&++g===r&&(s=l),(m=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=m}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fo={focusedElem:e,selectionRange:t},Yr=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var p=w.memoizedProps,T=w.memoizedState,c=n.stateNode,a=c.getSnapshotBeforeUpdate(n.elementType===n.type?p:Le(n.type,p),T);c.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){K(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return w=fs,fs=!1,w}function Ft(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&bo(n,t,o)}i=i.next}while(i!==r)}}function xi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function el(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function zc(e){var n=e.alternate;n!==null&&(e.alternate=null,zc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[qt],delete n[$o],delete n[r0],delete n[i0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(nl(e,n,t),e=e.sibling;e!==null;)nl(e,n,t),e=e.sibling}function tl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tl(e,n,t),e=e.sibling;e!==null;)tl(e,n,t),e=e.sibling}var ne=null,ze=!1;function en(e,n,t){for(t=t.child;t!==null;)jc(e,n,t),t=t.sibling}function jc(e,n,t){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(gi,t)}catch{}switch(t.tag){case 5:le||et(t,n);case 6:var r=ne,i=ze;ne=null,en(e,n,t),ne=r,ze=i,ne!==null&&(ze?(e=ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ne.removeChild(t.stateNode));break;case 18:ne!==null&&(ze?(e=ne,t=t.stateNode,e.nodeType===8?bi(e.parentNode,t):e.nodeType===1&&bi(e,t),Gt(e)):bi(ne,t.stateNode));break;case 4:r=ne,i=ze,ne=t.stateNode.containerInfo,ze=!0,en(e,n,t),ne=r,ze=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&bo(t,n,l),i=i.next}while(i!==r)}en(e,n,t);break;case 1:if(!le&&(et(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){K(t,n,u)}en(e,n,t);break;case 21:en(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,en(e,n,t),le=r):en(e,n,t);break;default:en(e,n,t)}}function ps(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new S0),n.forEach(function(r){var i=N0.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:ne=u.stateNode,ze=!1;break e;case 3:ne=u.stateNode.containerInfo,ze=!0;break e;case 4:ne=u.stateNode.containerInfo,ze=!0;break e}u=u.return}if(ne===null)throw Error(E(160));jc(o,l,i),ne=null,ze=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(f){K(i,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Fc(n,e),n=n.sibling}function Fc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),Ue(e),r&4){try{Ft(3,e,e.return),xi(3,e)}catch(p){K(e,e.return,p)}try{Ft(5,e,e.return)}catch(p){K(e,e.return,p)}}break;case 1:Re(n,e),Ue(e),r&512&&t!==null&&et(t,t.return);break;case 5:if(Re(n,e),Ue(e),r&512&&t!==null&&et(t,t.return),e.flags&32){var i=e.stateNode;try{Vt(i,"")}catch(p){K(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&oa(i,o),Oo(u,l);var f=Oo(u,o);for(l=0;l<s.length;l+=2){var g=s[l],v=s[l+1];g==="style"?ca(i,v):g==="dangerouslySetInnerHTML"?sa(i,v):g==="children"?Vt(i,v):yl(i,g,v,f)}switch(u){case"input":To(i,o);break;case"textarea":la(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?tt(i,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?tt(i,!!o.multiple,o.defaultValue,!0):tt(i,!!o.multiple,o.multiple?[]:"",!1))}i[qt]=o}catch(p){K(e,e.return,p)}}break;case 6:if(Re(n,e),Ue(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){K(e,e.return,p)}}break;case 3:if(Re(n,e),Ue(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Gt(n.containerInfo)}catch(p){K(e,e.return,p)}break;case 4:Re(n,e),Ue(e);break;case 13:Re(n,e),Ue(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ql=X())),r&4&&ps(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(le=(f=le)||g,Re(n,e),le=f):Re(n,e),Ue(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(_=e,g=e.child;g!==null;){for(v=_=g;_!==null;){switch(h=_,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ft(4,h,h.return);break;case 1:et(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(p){K(r,t,p)}}break;case 5:et(h,h.return);break;case 22:if(h.memoizedState!==null){gs(v);continue}}m!==null?(m.return=h,_=m):gs(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=v.stateNode,s=v.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=aa("display",l))}catch(p){K(e,e.return,p)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(p){K(e,e.return,p)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Re(n,e),Ue(e),r&4&&ps(e);break;case 21:break;default:Re(n,e),Ue(e)}}function Ue(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Mc(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vt(i,""),r.flags&=-33);var o=ds(e);tl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ds(e);nl(e,u,l);break;default:throw Error(E(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function E0(e,n,t){_=e,Ac(e)}function Ac(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Or;if(!l){var u=i.alternate,s=u!==null&&u.memoizedState!==null||le;u=Or;var f=le;if(Or=l,(le=s)&&!f)for(_=i;_!==null;)l=_,s=l.child,l.tag===22&&l.memoizedState!==null?vs(i):s!==null?(s.return=l,_=s):vs(i);for(;o!==null;)_=o,Ac(o),o=o.sibling;_=i,Or=u,le=f}hs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):hs(e)}}function hs(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||xi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ju(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ju(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Gt(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}le||n.flags&512&&el(n)}catch(h){K(n,n.return,h)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function gs(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function vs(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{xi(4,n)}catch(s){K(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){K(n,i,s)}}var o=n.return;try{el(n)}catch(s){K(n,o,s)}break;case 5:var l=n.return;try{el(n)}catch(s){K(n,l,s)}}}catch(s){K(n,n.return,s)}if(n===e){_=null;break}var u=n.sibling;if(u!==null){u.return=n.return,_=u;break}_=n.return}}var x0=Math.ceil,ai=be.ReactCurrentDispatcher,Yl=be.ReactCurrentOwner,De=be.ReactCurrentBatchConfig,M=0,ee=null,Z=null,te=0,ye=0,nt=wn(0),J=0,rr=null,Mn=0,ki=0,Zl=0,At=null,de=null,ql=0,ht=1/0,Be=null,ci=!1,rl=null,pn=null,_r=!1,un=null,fi=0,Ut=0,il=null,Ur=-1,$r=0;function ae(){return M&6?X():Ur!==-1?Ur:Ur=X()}function hn(e){return e.mode&1?M&2&&te!==0?te&-te:l0.transition!==null?($r===0&&($r=Ea()),$r):(e=F,e!==0||(e=window.event,e=e===void 0?16:Da(e.type)),e):1}function Fe(e,n,t,r){if(50<Ut)throw Ut=0,il=null,Error(E(185));lr(e,t,r),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(ki|=t),J===4&&on(e,te)),ve(e,r),t===1&&M===0&&!(n.mode&1)&&(ht=X()+500,Si&&Sn()))}function ve(e,n){var t=e.callbackNode;ld(e,n);var r=Xr(e,e===ee?te:0);if(r===0)t!==null&&Cu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Cu(t),n===1)e.tag===0?o0(ms.bind(null,e)):Xa(ms.bind(null,e)),n0(function(){!(M&6)&&Sn()}),t=null;else{switch(xa(r)){case 1:t=xl;break;case 4:t=Sa;break;case 16:t=Kr;break;case 536870912:t=Ta;break;default:t=Kr}t=Gc(t,Uc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Uc(e,n){if(Ur=-1,$r=0,M&6)throw Error(E(327));var t=e.callbackNode;if(ut()&&e.callbackNode!==t)return null;var r=Xr(e,e===ee?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=di(e,r);else{n=r;var i=M;M|=2;var o=Hc();(ee!==e||te!==n)&&(Be=null,ht=X()+500,Nn(e,n));do try{O0();break}catch(u){$c(e,u)}while(!0);jl(),ai.current=o,M=i,Z!==null?n=0:(ee=null,te=0,n=J)}if(n!==0){if(n===2&&(i=Po(e),i!==0&&(r=i,n=ol(e,i))),n===1)throw t=rr,Nn(e,0),on(e,r),ve(e,X()),t;if(n===6)on(e,r);else{if(i=e.current.alternate,!(r&30)&&!k0(i)&&(n=di(e,r),n===2&&(o=Po(e),o!==0&&(r=o,n=ol(e,o))),n===1))throw t=rr,Nn(e,0),on(e,r),ve(e,X()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:On(e,de,Be);break;case 3:if(on(e,r),(r&130023424)===r&&(n=ql+500-X(),10<n)){if(Xr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Uo(On.bind(null,e,de,Be),n);break}On(e,de,Be);break;case 4:if(on(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-je(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x0(r/1960))-r,10<r){e.timeoutHandle=Uo(On.bind(null,e,de,Be),r);break}On(e,de,Be);break;case 5:On(e,de,Be);break;default:throw Error(E(329))}}}return ve(e,X()),e.callbackNode===t?Uc.bind(null,e):null}function ol(e,n){var t=At;return e.current.memoizedState.isDehydrated&&(Nn(e,n).flags|=256),e=di(e,n),e!==2&&(n=de,de=t,n!==null&&ll(n)),e}function ll(e){de===null?de=e:de.push.apply(de,e)}function k0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ae(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function on(e,n){for(n&=~Zl,n&=~ki,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-je(n),r=1<<t;e[t]=-1,n&=~r}}function ms(e){if(M&6)throw Error(E(327));ut();var n=Xr(e,0);if(!(n&1))return ve(e,X()),null;var t=di(e,n);if(e.tag!==0&&t===2){var r=Po(e);r!==0&&(n=r,t=ol(e,r))}if(t===1)throw t=rr,Nn(e,0),on(e,n),ve(e,X()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,On(e,de,Be),ve(e,X()),null}function Jl(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(ht=X()+500,Si&&Sn())}}function jn(e){un!==null&&un.tag===0&&!(M&6)&&ut();var n=M;M|=1;var t=De.transition,r=F;try{if(De.transition=null,F=1,e)return e()}finally{F=r,De.transition=t,M=n,!(M&6)&&Sn()}}function bl(){ye=nt.current,$(nt)}function Nn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,e0(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(Ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&br();break;case 3:dt(),$(he),$(ue),Vl();break;case 5:Hl(r);break;case 4:dt();break;case 13:$(B);break;case 19:$(B);break;case 10:Fl(r.type._context);break;case 22:case 23:bl()}t=t.return}if(ee=e,Z=e=gn(e.current,null),te=ye=n,J=0,rr=null,Zl=ki=Mn=0,de=At=null,In!==null){for(n=0;n<In.length;n++)if(t=In[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}In=null}return e}function $c(e,n){do{var t=Z;try{if(jl(),jr.current=si,ui){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ui=!1}if(zn=0,b=q=Q=null,jt=!1,er=0,Yl.current=null,t===null||t.return===null){J=1,rr=n,Z=null;break}e:{var o=e,l=t.return,u=t,s=n;if(n=te,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=s,g=u,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var m=is(l);if(m!==null){m.flags&=-257,os(m,l,u,o,n),m.mode&1&&rs(o,f,n),n=m,s=f;var w=n.updateQueue;if(w===null){var p=new Set;p.add(s),n.updateQueue=p}else w.add(s);break e}else{if(!(n&1)){rs(o,f,n),eu();break e}s=Error(E(426))}}else if(H&&u.mode&1){var T=is(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),os(T,l,u,o,n),zl(pt(s,u));break e}}o=s=pt(s,u),J!==4&&(J=2),At===null?At=[o]:At.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=xc(o,s,n);qu(o,c);break e;case 1:u=s;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(pn===null||!pn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=kc(o,u,n);qu(o,y);break e}}o=o.return}while(o!==null)}Wc(t)}catch(S){n=S,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function Hc(){var e=ai.current;return ai.current=si,e===null?si:e}function eu(){(J===0||J===3||J===2)&&(J=4),ee===null||!(Mn&268435455)&&!(ki&268435455)||on(ee,te)}function di(e,n){var t=M;M|=2;var r=Hc();(ee!==e||te!==n)&&(Be=null,Nn(e,n));do try{C0();break}catch(i){$c(e,i)}while(!0);if(jl(),M=t,ai.current=r,Z!==null)throw Error(E(261));return ee=null,te=0,J}function C0(){for(;Z!==null;)Vc(Z)}function O0(){for(;Z!==null&&!qf();)Vc(Z)}function Vc(e){var n=Qc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?Wc(e):Z=n,Yl.current=null}function Wc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=w0(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Z=null;return}}else if(t=y0(t,n,ye),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);J===0&&(J=5)}function On(e,n,t){var r=F,i=De.transition;try{De.transition=null,F=1,_0(e,n,t,r)}finally{De.transition=i,F=r}return null}function _0(e,n,t,r){do ut();while(un!==null);if(M&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(ud(e,o),e===ee&&(Z=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_r||(_r=!0,Gc(Kr,function(){return ut(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=De.transition,De.transition=null;var l=F;F=1;var u=M;M|=4,Yl.current=null,T0(e,t),Fc(t,e),Kd(Fo),Yr=!!jo,Fo=jo=null,e.current=t,E0(t),Jf(),M=u,F=l,De.transition=o}else e.current=t;if(_r&&(_r=!1,un=e,fi=i),o=e.pendingLanes,o===0&&(pn=null),nd(t.stateNode),ve(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=rl,rl=null,e;return fi&1&&e.tag!==0&&ut(),o=e.pendingLanes,o&1?e===il?Ut++:(Ut=0,il=e):Ut=0,Sn(),null}function ut(){if(un!==null){var e=xa(fi),n=De.transition,t=F;try{if(De.transition=null,F=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,fi=0,M&6)throw Error(E(331));var i=M;for(M|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var f=u[s];for(_=f;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:Ft(8,g,o)}var v=g.child;if(v!==null)v.return=g,_=v;else for(;_!==null;){g=_;var h=g.sibling,m=g.return;if(zc(g),g===f){_=null;break}if(h!==null){h.return=m,_=h;break}_=m}}}var w=o.alternate;if(w!==null){var p=w.child;if(p!==null){w.child=null;do{var T=p.sibling;p.sibling=null,p=T}while(p!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ft(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,_=c;break e}_=o.return}}var a=e.current;for(_=a;_!==null;){l=_;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,_=d;else e:for(l=a;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:xi(9,u)}}catch(S){K(u,u.return,S)}if(u===l){_=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,_=y;break e}_=u.return}}if(M=i,Sn(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(gi,e)}catch{}r=!0}return r}finally{F=t,De.transition=n}}return!1}function ys(e,n,t){n=pt(t,n),n=xc(e,n,1),e=dn(e,n,1),n=ae(),e!==null&&(lr(e,1,n),ve(e,n))}function K(e,n,t){if(e.tag===3)ys(e,e,t);else for(;n!==null;){if(n.tag===3){ys(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=pt(t,e),e=kc(n,e,1),n=dn(n,e,1),e=ae(),n!==null&&(lr(n,1,e),ve(n,e));break}}n=n.return}}function I0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(J===4||J===3&&(te&130023424)===te&&500>X()-ql?Nn(e,0):Zl|=t),ve(e,n)}function Bc(e,n){n===0&&(e.mode&1?(n=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):n=1);var t=ae();e=qe(e,n),e!==null&&(lr(e,n,t),ve(e,t))}function D0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bc(e,t)}function N0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),Bc(e,t)}var Qc;Qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||he.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,m0(e,n,t);pe=!!(e.flags&131072)}else pe=!1,H&&n.flags&1048576&&Ya(n,ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ar(e,n),e=n.pendingProps;var i=at(n,ue.current);lt(n,t),i=Bl(null,n,r,e,i,t);var o=Ql();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ge(r)?(o=!0,ei(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ul(n),i.updater=Ei,n.stateNode=i,i._reactInternals=n,Go(n,r,e,t),n=Yo(null,n,r,!0,o,t)):(n.tag=0,H&&o&&Rl(n),se(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ar(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=R0(r),e=Le(r,e),i){case 0:n=Xo(null,n,r,e,t);break e;case 1:n=ss(null,n,r,e,t);break e;case 11:n=ls(null,n,r,e,t);break e;case 14:n=us(null,n,r,Le(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Xo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),ss(e,n,r,i,t);case 3:e:{if(Ic(n),e===null)throw Error(E(387));r=n.pendingProps,o=n.memoizedState,i=o.element,nc(e,n),oi(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=pt(Error(E(423)),n),n=as(e,n,r,t,i);break e}else if(r!==i){i=pt(Error(E(424)),n),n=as(e,n,r,t,i);break e}else for(we=fn(n.stateNode.containerInfo.firstChild),Se=n,H=!0,Me=null,t=ba(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ct(),r===i){n=Je(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return tc(n),e===null&&Wo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ao(r,i)?l=null:o!==null&&Ao(r,o)&&(n.flags|=32),_c(e,n),se(e,n,l,t),n.child;case 6:return e===null&&Wo(n),null;case 13:return Dc(e,n,t);case 4:return $l(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ft(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),ls(e,n,r,i,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,A(ri,r._currentValue),r._currentValue=l,o!==null)if(Ae(o.value,l)){if(o.children===i.children&&!he.current){n=Je(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Xe(-1,t&-t),s.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Bo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Bo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}se(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,lt(n,t),i=Ne(i),r=r(i),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,i=Le(r,n.pendingProps),i=Le(r.type,i),us(e,n,r,i,t);case 15:return Cc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Ar(e,n),n.tag=1,ge(r)?(e=!0,ei(n)):e=!1,lt(n,t),Ec(n,r,i),Go(n,r,i,t),Yo(null,n,r,!0,e,t);case 19:return Nc(e,n,t);case 22:return Oc(e,n,t)}throw Error(E(156,n.tag))};function Gc(e,n){return wa(e,n)}function P0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,n,t,r){return new P0(e,n,t,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R0(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sl)return 11;if(e===Tl)return 14}return 2}function gn(e,n){var t=e.alternate;return t===null?(t=Ie(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Hr(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")nu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Qn:return Pn(t.children,i,o,n);case wl:l=8,i|=8;break;case vo:return e=Ie(12,t,n,i|2),e.elementType=vo,e.lanes=o,e;case mo:return e=Ie(13,t,n,i),e.elementType=mo,e.lanes=o,e;case yo:return e=Ie(19,t,n,i),e.elementType=yo,e.lanes=o,e;case ta:return Ci(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ea:l=10;break e;case na:l=9;break e;case Sl:l=11;break e;case Tl:l=14;break e;case nn:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Ie(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Pn(e,n,t,r){return e=Ie(7,e,r,n),e.lanes=t,e}function Ci(e,n,t,r){return e=Ie(22,e,r,n),e.elementType=ta,e.lanes=t,e.stateNode={isHidden:!1},e}function uo(e,n,t){return e=Ie(6,e,null,n),e.lanes=t,e}function so(e,n,t){return n=Ie(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function L0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(e,n,t,r,i,o,l,u,s){return e=new L0(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ie(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(o),e}function z0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Kc(e){if(!e)return mn;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(ge(t))return Ka(e,t,n)}return n}function Xc(e,n,t,r,i,o,l,u,s){return e=tu(t,r,!0,e,i,o,l,u,s),e.context=Kc(null),t=e.current,r=ae(),i=hn(t),o=Xe(r,i),o.callback=n??null,dn(t,o,i),e.current.lanes=i,lr(e,i,r),ve(e,r),e}function Oi(e,n,t,r){var i=n.current,o=ae(),l=hn(i);return t=Kc(t),n.context===null?n.context=t:n.pendingContext=t,n=Xe(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dn(i,n,l),e!==null&&(Fe(e,i,l,o),Mr(e,i,l)),l}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ws(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ru(e,n){ws(e,n),(e=e.alternate)&&ws(e,n)}function M0(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}_i.prototype.render=iu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));Oi(e,n,null,null)};_i.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jn(function(){Oi(null,e,null,null)}),n[Ze]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var n=Oa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rn.length&&n!==0&&n<rn[t].priority;t++);rn.splice(t,0,e),t===0&&Ia(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ss(){}function j0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=pi(l);o.call(f)}}var l=Xc(n,r,e,0,null,!1,!1,"",Ss);return e._reactRootContainer=l,e[Ze]=l.current,Yt(e.nodeType===8?e.parentNode:e),jn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=pi(s);u.call(f)}}var s=tu(e,0,!1,null,null,!1,!1,"",Ss);return e._reactRootContainer=s,e[Ze]=s.current,Yt(e.nodeType===8?e.parentNode:e),jn(function(){Oi(n,s,t,r)}),s}function Di(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var s=pi(l);u.call(s)}}Oi(n,l,e,i)}else l=j0(t,n,e,i,r);return pi(l)}ka=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Dt(n.pendingLanes);t!==0&&(kl(n,t|1),ve(n,X()),!(M&6)&&(ht=X()+500,Sn()))}break;case 13:jn(function(){var r=qe(e,1);if(r!==null){var i=ae();Fe(r,e,1,i)}}),ru(e,1)}};Cl=function(e){if(e.tag===13){var n=qe(e,134217728);if(n!==null){var t=ae();Fe(n,e,134217728,t)}ru(e,134217728)}};Ca=function(e){if(e.tag===13){var n=hn(e),t=qe(e,n);if(t!==null){var r=ae();Fe(t,e,n,r)}ru(e,n)}};Oa=function(){return F};_a=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};Io=function(e,n,t){switch(n){case"input":if(To(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(E(90));ia(r),To(r,i)}}}break;case"textarea":la(e,t);break;case"select":n=t.value,n!=null&&tt(e,!!t.multiple,n,!1)}};pa=Jl;ha=jn;var F0={usingClientEntryPoint:!1,Events:[sr,Yn,wi,fa,da,Jl]},Ot={findFiberByHostInstance:_n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ma(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||M0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{gi=Ir.inject(A0),Ve=Ir}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;Ee.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(n))throw Error(E(200));return z0(e,n,null,t)};Ee.createRoot=function(e,n){if(!ou(e))throw Error(E(299));var t=!1,r="",i=Yc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=tu(e,1,!1,null,null,t,!1,r,i),e[Ze]=n.current,Yt(e.nodeType===8?e.parentNode:e),new iu(n)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=ma(n),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return jn(e)};Ee.hydrate=function(e,n,t){if(!Ii(n))throw Error(E(200));return Di(null,e,n,!0,t)};Ee.hydrateRoot=function(e,n,t){if(!ou(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=Yc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Xc(n,null,e,1,t??null,i,!1,o,l),e[Ze]=n.current,Yt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new _i(n)};Ee.render=function(e,n,t){if(!Ii(n))throw Error(E(200));return Di(null,e,n,!1,t)};Ee.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(E(40));return e._reactRootContainer?(jn(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ee.unstable_batchedUpdates=Jl;Ee.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ii(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Di(e,n,t,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function Zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zc)}catch(e){console.error(e)}}Zc(),Zs.exports=Ee;var lu=Zs.exports,qc,Ts=lu;qc=Ts.createRoot,Ts.hydrateRoot;const U0=e=>e.reduce((i,o,l)=>{if(l>0){const u=i[l-1];o.s<u.e&&(u.tailOverlappedPos=o.s,u.tailOverlappedIndex=o.index,o.headOverlappedPos=u.e,o.headOverlappedIndex=u.index)}return[...i,{...o}]},[]).flatMap(i=>i.headOverlappedPos&&i.tailOverlappedPos?[{s:i.s,e:i.headOverlappedPos,index:-1,hoverIndex:[i.headOverlappedIndex,i.index],overlapped:[i.headOverlappedIndex],isOverlapped:!0},{s:i.headOverlappedPos,e:i.tailOverlappedPos,index:i.index,hoverIndex:[i.index],overlapped:[i.headOverlappedIndex,i.tailOverlappedIndex],isOverlapped:!1},{s:i.tailOverlappedPos,e:i.e,index:-1,hoverIndex:[i.tailOverlappedIndex,i.index],overlapped:[i.tailOverlappedIndex],isOverlapped:!0}]:i.headOverlappedPos?[{s:i.s,e:i.headOverlappedPos,index:-1,overlapped:[i.headOverlappedIndex],hoverIndex:[i.headOverlappedIndex,i.index],isOverlapped:!0},{s:i.headOverlappedPos,e:i.e,index:i.index,hoverIndex:[i.index],overlapped:[i.headOverlappedIndex],isOverlapped:!1}]:i.tailOverlappedPos?[{s:i.s,e:i.tailOverlappedPos,index:i.index,hoverIndex:[i.index],overlapped:[i.tailOverlappedIndex],isOverlapped:!1},{s:i.tailOverlappedPos,e:i.e,index:-1,overlapped:[i.tailOverlappedIndex],hoverIndex:[i.tailOverlappedIndex,i.index],isOverlapped:!0}]:[{s:i.s,e:i.e,index:i.index,hoverIndex:[i.index],overlapped:[],isOverlapped:!1}]).reduce((i,o)=>{const l=i[i.length-1];return l&&l.s===o.s&&l.e===o.e?l.overlapped=[...l.overlapped||[],...o.overlapped||[]].filter((u,s,f)=>f.indexOf(u)===s):i.push(o),i},[]),$0=(e,n)=>{const t=[];let r=0,i=0;for(const{s:o,e:l,index:u,overlapped:s,isOverlapped:f,hoverIndex:g}of e)o>r&&t.push({s:r,e:o,index:-1,hoverIndex:[i++],overlapped:[],isOverlapped:!1,isGap:!0}),t.push({s:o,e:l,index:u,hoverIndex:g,overlapped:s,isGap:!1,isOverlapped:f}),r=l;return r<n&&t.push({s:r,e:n,index:-1,hoverIndex:[i++],overlapped:[],isOverlapped:!1,isGap:!0}),t},H0=(e,n,t,r)=>{const i=[];for(const{s:o,e:l,index:u,hoverIndex:s,overlapped:f,isGap:g,isOverlapped:v}of e){const h=Math.floor(o/n),m=Math.floor(l/n);for(let w=h;w<=m;w++){const p=w*n,T=(w+1)*n,c=Math.max(o,p),a=Math.min(l,T);c<a&&w>=t&&w<r&&i.push({s:c,e:a,index:u,hoverIndex:s,overlapped:f,isGap:g,lineNumber:w,isOverlapped:v})}}return i},V0=j.createContext({dragDropManager:void 0});function ke(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Es=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ao=function(){return Math.random().toString(36).substring(7).split("").join(".")},xs={INIT:"@@redux/INIT"+ao(),REPLACE:"@@redux/REPLACE"+ao(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ao()}};function W0(e){if(typeof e!="object"||e===null)return!1;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}function Jc(e,n,t){var r;if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ke(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ke(1));return t(Jc)(e,n)}if(typeof e!="function")throw new Error(ke(2));var i=e,o=n,l=[],u=l,s=!1;function f(){u===l&&(u=l.slice())}function g(){if(s)throw new Error(ke(3));return o}function v(p){if(typeof p!="function")throw new Error(ke(4));if(s)throw new Error(ke(5));var T=!0;return f(),u.push(p),function(){if(T){if(s)throw new Error(ke(6));T=!1,f();var a=u.indexOf(p);u.splice(a,1),l=null}}}function h(p){if(!W0(p))throw new Error(ke(7));if(typeof p.type>"u")throw new Error(ke(8));if(s)throw new Error(ke(9));try{s=!0,o=i(o,p)}finally{s=!1}for(var T=l=u,c=0;c<T.length;c++){var a=T[c];a()}return p}function m(p){if(typeof p!="function")throw new Error(ke(10));i=p,h({type:xs.REPLACE})}function w(){var p,T=v;return p={subscribe:function(a){if(typeof a!="object"||a===null)throw new Error(ke(11));function d(){a.next&&a.next(g())}d();var y=T(d);return{unsubscribe:y}}},p[Es]=function(){return this},p}return h({type:xs.INIT}),r={dispatch:h,subscribe:v,getState:g,replaceReducer:m},r[Es]=w,r}function z(e,n,...t){if(B0()&&n===void 0)throw new Error("invariant requires an error message argument");if(!e){let r;if(n===void 0)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;r=new Error(n.replace(/%s/g,function(){return t[i++]})),r.name="Invariant Violation"}throw r.framesToPop=1,r}}function B0(){return typeof process<"u"&&!0}function Q0(e,n,t){return n.split(".").reduce((r,i)=>r&&r[i]?r[i]:t||null,e)}function G0(e,n){return e.filter(t=>t!==n)}function bc(e){return typeof e=="object"}function K0(e,n){const t=new Map,r=o=>{t.set(o,t.has(o)?t.get(o)+1:1)};e.forEach(r),n.forEach(r);const i=[];return t.forEach((o,l)=>{o===1&&i.push(l)}),i}function X0(e,n){return e.filter(t=>n.indexOf(t)>-1)}const uu="dnd-core/INIT_COORDS",Ni="dnd-core/BEGIN_DRAG",su="dnd-core/PUBLISH_DRAG_SOURCE",Pi="dnd-core/HOVER",Ri="dnd-core/DROP",Li="dnd-core/END_DRAG";function ks(e,n){return{type:uu,payload:{sourceClientOffset:n||null,clientOffset:e||null}}}const Y0={type:uu,payload:{clientOffset:null,sourceClientOffset:null}};function Z0(e){return function(t=[],r={publishSource:!0}){const{publishSource:i=!0,clientOffset:o,getSourceClientOffset:l}=r,u=e.getMonitor(),s=e.getRegistry();e.dispatch(ks(o)),q0(t,u,s);const f=e2(t,u);if(f==null){e.dispatch(Y0);return}let g=null;if(o){if(!l)throw new Error("getSourceClientOffset must be defined");J0(l),g=l(f)}e.dispatch(ks(o,g));const h=s.getSource(f).beginDrag(u,f);if(h==null)return;b0(h),s.pinSource(f);const m=s.getSourceType(f);return{type:Ni,payload:{itemType:m,item:h,sourceId:f,clientOffset:o||null,sourceClientOffset:g||null,isSourcePublic:!!i}}}}function q0(e,n,t){z(!n.isDragging(),"Cannot call beginDrag while dragging."),e.forEach(function(r){z(t.getSource(r),"Expected sourceIds to be registered.")})}function J0(e){z(typeof e=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function b0(e){z(bc(e),"Item must be an object.")}function e2(e,n){let t=null;for(let r=e.length-1;r>=0;r--)if(n.canDragSource(e[r])){t=e[r];break}return t}function n2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function t2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){n2(e,i,t[i])})}return e}function r2(e){return function(t={}){const r=e.getMonitor(),i=e.getRegistry();i2(r),u2(r).forEach((l,u)=>{const s=o2(l,u,i,r),f={type:Ri,payload:{dropResult:t2({},t,s)}};e.dispatch(f)})}}function i2(e){z(e.isDragging(),"Cannot call drop while not dragging."),z(!e.didDrop(),"Cannot call drop twice during one drag operation.")}function o2(e,n,t,r){const i=t.getTarget(e);let o=i?i.drop(r,e):void 0;return l2(o),typeof o>"u"&&(o=n===0?{}:r.getDropResult()),o}function l2(e){z(typeof e>"u"||bc(e),"Drop result must either be an object or undefined.")}function u2(e){const n=e.getTargetIds().filter(e.canDropOnTarget,e);return n.reverse(),n}function s2(e){return function(){const t=e.getMonitor(),r=e.getRegistry();a2(t);const i=t.getSourceId();return i!=null&&(r.getSource(i,!0).endDrag(t,i),r.unpinSource()),{type:Li}}}function a2(e){z(e.isDragging(),"Cannot call endDrag while not dragging.")}function ul(e,n){return n===null?e===null:Array.isArray(e)?e.some(t=>t===n):e===n}function c2(e){return function(t,{clientOffset:r}={}){f2(t);const i=t.slice(0),o=e.getMonitor(),l=e.getRegistry(),u=o.getItemType();return p2(i,l,u),d2(i,o,l),h2(i,o,l),{type:Pi,payload:{targetIds:i,clientOffset:r||null}}}}function f2(e){z(Array.isArray(e),"Expected targetIds to be an array.")}function d2(e,n,t){z(n.isDragging(),"Cannot call hover while not dragging."),z(!n.didDrop(),"Cannot call hover after drop.");for(let r=0;r<e.length;r++){const i=e[r];z(e.lastIndexOf(i)===r,"Expected targetIds to be unique in the passed array.");const o=t.getTarget(i);z(o,"Expected targetIds to be registered.")}}function p2(e,n,t){for(let r=e.length-1;r>=0;r--){const i=e[r],o=n.getTargetType(i);ul(o,t)||e.splice(r,1)}}function h2(e,n,t){e.forEach(function(r){t.getTarget(r).hover(n,r)})}function g2(e){return function(){if(e.getMonitor().isDragging())return{type:su}}}function v2(e){return{beginDrag:Z0(e),publishDragSource:g2(e),hover:c2(e),drop:r2(e),endDrag:s2(e)}}class m2{receiveBackend(n){this.backend=n}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const n=this,{dispatch:t}=this.store;function r(o){return(...l)=>{const u=o.apply(n,l);typeof u<"u"&&t(u)}}const i=v2(this);return Object.keys(i).reduce((o,l)=>{const u=i[l];return o[l]=r(u),o},{})}dispatch(n){this.store.dispatch(n)}constructor(n,t){this.isSetUp=!1,this.handleRefCountChange=()=>{const r=this.store.getState().refCount>0;this.backend&&(r&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!r&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=n,this.monitor=t,n.subscribe(this.handleRefCountChange)}}function y2(e,n){return{x:e.x+n.x,y:e.y+n.y}}function ef(e,n){return{x:e.x-n.x,y:e.y-n.y}}function w2(e){const{clientOffset:n,initialClientOffset:t,initialSourceClientOffset:r}=e;return!n||!t||!r?null:ef(y2(n,r),t)}function S2(e){const{clientOffset:n,initialClientOffset:t}=e;return!n||!t?null:ef(n,t)}const $t=[],au=[];$t.__IS_NONE__=!0;au.__IS_ALL__=!0;function T2(e,n){return e===$t?!1:e===au||typeof n>"u"?!0:X0(n,e).length>0}class E2{subscribeToStateChange(n,t={}){const{handlerIds:r}=t;z(typeof n=="function","listener must be a function."),z(typeof r>"u"||Array.isArray(r),"handlerIds, when specified, must be an array of strings.");let i=this.store.getState().stateId;const o=()=>{const l=this.store.getState(),u=l.stateId;try{u===i||u===i+1&&!T2(l.dirtyHandlerIds,r)||n()}finally{i=u}};return this.store.subscribe(o)}subscribeToOffsetChange(n){z(typeof n=="function","listener must be a function.");let t=this.store.getState().dragOffset;const r=()=>{const i=this.store.getState().dragOffset;i!==t&&(t=i,n())};return this.store.subscribe(r)}canDragSource(n){if(!n)return!1;const t=this.registry.getSource(n);return z(t,`Expected to find a valid source. sourceId=${n}`),this.isDragging()?!1:t.canDrag(this,n)}canDropOnTarget(n){if(!n)return!1;const t=this.registry.getTarget(n);if(z(t,`Expected to find a valid target. targetId=${n}`),!this.isDragging()||this.didDrop())return!1;const r=this.registry.getTargetType(n),i=this.getItemType();return ul(r,i)&&t.canDrop(this,n)}isDragging(){return!!this.getItemType()}isDraggingSource(n){if(!n)return!1;const t=this.registry.getSource(n,!0);if(z(t,`Expected to find a valid source. sourceId=${n}`),!this.isDragging()||!this.isSourcePublic())return!1;const r=this.registry.getSourceType(n),i=this.getItemType();return r!==i?!1:t.isDragging(this,n)}isOverTarget(n,t={shallow:!1}){if(!n)return!1;const{shallow:r}=t;if(!this.isDragging())return!1;const i=this.registry.getTargetType(n),o=this.getItemType();if(o&&!ul(i,o))return!1;const l=this.getTargetIds();if(!l.length)return!1;const u=l.indexOf(n);return r?u===l.length-1:u>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return w2(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return S2(this.store.getState().dragOffset)}constructor(n,t){this.store=n,this.registry=t}}const Cs=typeof global<"u"?global:self,nf=Cs.MutationObserver||Cs.WebKitMutationObserver;function tf(e){return function(){const t=setTimeout(i,0),r=setInterval(i,50);function i(){clearTimeout(t),clearInterval(r),e()}}}function x2(e){let n=1;const t=new nf(e),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){n=-n,r.data=n}}const k2=typeof nf=="function"?x2:tf;class C2{enqueueTask(n){const{queue:t,requestFlush:r}=this;t.length||(r(),this.flushing=!0),t[t.length]=n}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:n}=this;for(;this.index<n.length;){const t=this.index;if(this.index++,n[t].call(),this.index>this.capacity){for(let r=0,i=n.length-this.index;r<i;r++)n[r]=n[r+this.index];n.length-=this.index,this.index=0}}n.length=0,this.index=0,this.flushing=!1},this.registerPendingError=n=>{this.pendingErrors.push(n),this.requestErrorThrow()},this.requestFlush=k2(this.flush),this.requestErrorThrow=tf(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class O2{call(){try{this.task&&this.task()}catch(n){this.onError(n)}finally{this.task=null,this.release(this)}}constructor(n,t){this.onError=n,this.release=t,this.task=null}}class _2{create(n){const t=this.freeTasks,r=t.length?t.pop():new O2(this.onError,i=>t[t.length]=i);return r.task=n,r}constructor(n){this.onError=n,this.freeTasks=[]}}const rf=new C2,I2=new _2(rf.registerPendingError);function D2(e){rf.enqueueTask(I2.create(e))}const cu="dnd-core/ADD_SOURCE",fu="dnd-core/ADD_TARGET",du="dnd-core/REMOVE_SOURCE",zi="dnd-core/REMOVE_TARGET";function N2(e){return{type:cu,payload:{sourceId:e}}}function P2(e){return{type:fu,payload:{targetId:e}}}function R2(e){return{type:du,payload:{sourceId:e}}}function L2(e){return{type:zi,payload:{targetId:e}}}function z2(e){z(typeof e.canDrag=="function","Expected canDrag to be a function."),z(typeof e.beginDrag=="function","Expected beginDrag to be a function."),z(typeof e.endDrag=="function","Expected endDrag to be a function.")}function M2(e){z(typeof e.canDrop=="function","Expected canDrop to be a function."),z(typeof e.hover=="function","Expected hover to be a function."),z(typeof e.drop=="function","Expected beginDrag to be a function.")}function sl(e,n){if(n&&Array.isArray(e)){e.forEach(t=>sl(t,!1));return}z(typeof e=="string"||typeof e=="symbol",n?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var _e;(function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"})(_e||(_e={}));let j2=0;function F2(){return j2++}function A2(e){const n=F2().toString();switch(e){case _e.SOURCE:return`S${n}`;case _e.TARGET:return`T${n}`;default:throw new Error(`Unknown Handler Role: ${e}`)}}function Os(e){switch(e[0]){case"S":return _e.SOURCE;case"T":return _e.TARGET;default:throw new Error(`Cannot parse handler ID: ${e}`)}}function _s(e,n){const t=e.entries();let r=!1;do{const{done:i,value:[,o]}=t.next();if(o===n)return!0;r=!!i}while(!r);return!1}class U2{addSource(n,t){sl(n),z2(t);const r=this.addHandler(_e.SOURCE,n,t);return this.store.dispatch(N2(r)),r}addTarget(n,t){sl(n,!0),M2(t);const r=this.addHandler(_e.TARGET,n,t);return this.store.dispatch(P2(r)),r}containsHandler(n){return _s(this.dragSources,n)||_s(this.dropTargets,n)}getSource(n,t=!1){return z(this.isSourceId(n),"Expected a valid source ID."),t&&n===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(n)}getTarget(n){return z(this.isTargetId(n),"Expected a valid target ID."),this.dropTargets.get(n)}getSourceType(n){return z(this.isSourceId(n),"Expected a valid source ID."),this.types.get(n)}getTargetType(n){return z(this.isTargetId(n),"Expected a valid target ID."),this.types.get(n)}isSourceId(n){return Os(n)===_e.SOURCE}isTargetId(n){return Os(n)===_e.TARGET}removeSource(n){z(this.getSource(n),"Expected an existing source."),this.store.dispatch(R2(n)),D2(()=>{this.dragSources.delete(n),this.types.delete(n)})}removeTarget(n){z(this.getTarget(n),"Expected an existing target."),this.store.dispatch(L2(n)),this.dropTargets.delete(n),this.types.delete(n)}pinSource(n){const t=this.getSource(n);z(t,"Expected an existing source."),this.pinnedSourceId=n,this.pinnedSource=t}unpinSource(){z(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(n,t,r){const i=A2(n);return this.types.set(i,t),n===_e.SOURCE?this.dragSources.set(i,r):n===_e.TARGET&&this.dropTargets.set(i,r),i}constructor(n){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=n}}const $2=(e,n)=>e===n;function H2(e,n){return!e&&!n?!0:!e||!n?!1:e.x===n.x&&e.y===n.y}function V2(e,n,t=$2){if(e.length!==n.length)return!1;for(let r=0;r<e.length;++r)if(!t(e[r],n[r]))return!1;return!0}function W2(e=$t,n){switch(n.type){case Pi:break;case cu:case fu:case zi:case du:return $t;case Ni:case su:case Li:case Ri:default:return au}const{targetIds:t=[],prevTargetIds:r=[]}=n.payload,i=K0(t,r);if(!(i.length>0||!V2(t,r)))return $t;const l=r[r.length-1],u=t[t.length-1];return l!==u&&(l&&i.push(l),u&&i.push(u)),i}function B2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Q2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){B2(e,i,t[i])})}return e}const Is={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function G2(e=Is,n){const{payload:t}=n;switch(n.type){case uu:case Ni:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case Pi:return H2(e.clientOffset,t.clientOffset)?e:Q2({},e,{clientOffset:t.clientOffset});case Li:case Ri:return Is;default:return e}}function K2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Vn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){K2(e,i,t[i])})}return e}const X2={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Y2(e=X2,n){const{payload:t}=n;switch(n.type){case Ni:return Vn({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case su:return Vn({},e,{isSourcePublic:!0});case Pi:return Vn({},e,{targetIds:t.targetIds});case zi:return e.targetIds.indexOf(t.targetId)===-1?e:Vn({},e,{targetIds:G0(e.targetIds,t.targetId)});case Ri:return Vn({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case Li:return Vn({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}function Z2(e=0,n){switch(n.type){case cu:case fu:return e+1;case du:case zi:return e-1;default:return e}}function q2(e=0){return e+1}function J2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){J2(e,i,t[i])})}return e}function ep(e={},n){return{dirtyHandlerIds:W2(e.dirtyHandlerIds,{type:n.type,payload:b2({},n.payload,{prevTargetIds:Q0(e,"dragOperation.targetIds",[])})}),dragOffset:G2(e.dragOffset,n),refCount:Z2(e.refCount,n),dragOperation:Y2(e.dragOperation,n),stateId:q2(e.stateId)}}function np(e,n=void 0,t={},r=!1){const i=tp(r),o=new E2(i,new U2(i)),l=new m2(i,o),u=e(l,n,t);return l.receiveBackend(u),l}function tp(e){const n=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return Jc(ep,e&&n&&n({name:"dnd-core",instanceId:"dnd-core"}))}function rp(e,n){if(e==null)return{};var t=ip(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function ip(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}let Ds=0;const Vr=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var op=j.memo(function(n){var{children:t}=n,r=rp(n,["children"]);const[i,o]=lp(r);return j.useEffect(()=>{if(o){const l=of();return++Ds,()=>{--Ds===0&&(l[Vr]=null)}}},[]),R.jsx(V0.Provider,{value:i,children:t})});function lp(e){if("manager"in e)return[{dragDropManager:e.manager},!1];const n=up(e.backend,e.context,e.options,e.debugMode),t=!e.context;return[n,t]}function up(e,n=of(),t,r){const i=n;return i[Vr]||(i[Vr]={dragDropManager:np(e,n,t,r)}),i[Vr]}function of(){return typeof global<"u"?global:window}function lf(e){let n=null;return()=>(n==null&&(n=e()),n)}function sp(e,n){return e.filter(t=>t!==n)}function ap(e,n){const t=new Set,r=o=>t.add(o);e.forEach(r),n.forEach(r);const i=[];return t.forEach(o=>i.push(o)),i}class cp{enter(n){const t=this.entered.length,r=i=>this.isNodeInDocument(i)&&(!i.contains||i.contains(n));return this.entered=ap(this.entered.filter(r),[n]),t===0&&this.entered.length>0}leave(n){const t=this.entered.length;return this.entered=sp(this.entered.filter(this.isNodeInDocument),n),t>0&&this.entered.length===0}reset(){this.entered=[]}constructor(n){this.entered=[],this.isNodeInDocument=n}}class fp{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(n=>{Object.defineProperty(this.item,n,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${n}" until the drop event.`),null}})})}loadDataTransfer(n){if(n){const t={};Object.keys(this.config.exposeProperties).forEach(r=>{const i=this.config.exposeProperties[r];i!=null&&(t[r]={value:i(n,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(n,t){return t===n.getSourceId()}endDrag(){}constructor(n){this.config=n,this.item={},this.initializeExposedProperties()}}const uf="__NATIVE_FILE__",sf="__NATIVE_URL__",af="__NATIVE_TEXT__",cf="__NATIVE_HTML__",Ns=Object.freeze(Object.defineProperty({__proto__:null,FILE:uf,HTML:cf,TEXT:af,URL:sf},Symbol.toStringTag,{value:"Module"}));function co(e,n,t){const r=n.reduce((i,o)=>i||e.getData(o),"");return r??t}const al={[uf]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[cf]:{exposeProperties:{html:(e,n)=>co(e,n,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[sf]:{exposeProperties:{urls:(e,n)=>co(e,n,"").split(`
`),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[af]:{exposeProperties:{text:(e,n)=>co(e,n,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function dp(e,n){const t=al[e];if(!t)throw new Error(`native type ${e} has no configuration`);const r=new fp(t);return r.loadDataTransfer(n),r}function fo(e){if(!e)return null;const n=Array.prototype.slice.call(e.types||[]);return Object.keys(al).filter(t=>{const r=al[t];return r!=null&&r.matchesTypes?r.matchesTypes.some(i=>n.indexOf(i)>-1):!1})[0]||null}const pp=lf(()=>/firefox/i.test(navigator.userAgent)),ff=lf(()=>!!window.safari);class Ps{interpolate(n){const{xs:t,ys:r,c1s:i,c2s:o,c3s:l}=this;let u=t.length-1;if(n===t[u])return r[u];let s=0,f=l.length-1,g;for(;s<=f;){g=Math.floor(.5*(s+f));const m=t[g];if(m<n)s=g+1;else if(m>n)f=g-1;else return r[g]}u=Math.max(0,f);const v=n-t[u],h=v*v;return r[u]+i[u]*v+o[u]*h+l[u]*v*h}constructor(n,t){const{length:r}=n,i=[];for(let m=0;m<r;m++)i.push(m);i.sort((m,w)=>n[m]<n[w]?-1:1);const o=[],l=[];let u,s;for(let m=0;m<r-1;m++)u=n[m+1]-n[m],s=t[m+1]-t[m],o.push(u),l.push(s/u);const f=[l[0]];for(let m=0;m<o.length-1;m++){const w=l[m],p=l[m+1];if(w*p<=0)f.push(0);else{u=o[m];const T=o[m+1],c=u+T;f.push(3*c/((c+T)/w+(c+u)/p))}}f.push(l[l.length-1]);const g=[],v=[];let h;for(let m=0;m<f.length-1;m++){h=l[m];const w=f[m],p=1/o[m],T=w+f[m+1]-h-h;g.push((h-w-T)*p),v.push(T*p*p)}this.xs=n,this.ys=t,this.c1s=f,this.c2s=g,this.c3s=v}}const hp=1;function df(e){const n=e.nodeType===hp?e:e.parentElement;if(!n)return null;const{top:t,left:r}=n.getBoundingClientRect();return{x:r,y:t}}function Dr(e){return{x:e.clientX,y:e.clientY}}function gp(e){var n;return e.nodeName==="IMG"&&(pp()||!(!((n=document.documentElement)===null||n===void 0)&&n.contains(e)))}function vp(e,n,t,r){let i=e?n.width:t,o=e?n.height:r;return ff()&&e&&(o/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:o}}function mp(e,n,t,r,i){const o=gp(n),u=df(o?e:n),s={x:t.x-u.x,y:t.y-u.y},{offsetWidth:f,offsetHeight:g}=e,{anchorX:v,anchorY:h}=r,{dragPreviewWidth:m,dragPreviewHeight:w}=vp(o,n,f,g),p=()=>{let x=new Ps([0,.5,1],[s.y,s.y/g*w,s.y+w-g]).interpolate(h);return ff()&&o&&(x+=(window.devicePixelRatio-1)*w),x},T=()=>new Ps([0,.5,1],[s.x,s.x/f*m,s.x+m-f]).interpolate(v),{offsetX:c,offsetY:a}=i,d=c===0||c,y=a===0||a;return{x:d?c:T(),y:y?a:p()}}class yp{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var n;return!((n=this.globalContext)===null||n===void 0)&&n.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var n;return((n=this.optionsArgs)===null||n===void 0?void 0:n.rootElement)||this.window}constructor(n,t){this.ownerDocument=null,this.globalContext=n,this.optionsArgs=t}}function wp(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Rs(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){wp(e,i,t[i])})}return e}class Sp{profile(){var n,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((n=this.dragStartSourceIds)===null||n===void 0?void 0:n.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((t=this.dragOverTargetIds)===null||t===void 0?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const n=this.rootElement;if(n!==void 0){if(n.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");n.__isReactDndBackendSetUp=!0,this.addEventListeners(n)}}teardown(){const n=this.rootElement;if(n!==void 0&&(n.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var t;(t=this.window)===null||t===void 0||t.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(n,t,r){return this.sourcePreviewNodeOptions.set(n,r),this.sourcePreviewNodes.set(n,t),()=>{this.sourcePreviewNodes.delete(n),this.sourcePreviewNodeOptions.delete(n)}}connectDragSource(n,t,r){this.sourceNodes.set(n,t),this.sourceNodeOptions.set(n,r);const i=l=>this.handleDragStart(l,n),o=l=>this.handleSelectStart(l);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",i),t.addEventListener("selectstart",o),()=>{this.sourceNodes.delete(n),this.sourceNodeOptions.delete(n),t.removeEventListener("dragstart",i),t.removeEventListener("selectstart",o),t.setAttribute("draggable","false")}}connectDropTarget(n,t){const r=l=>this.handleDragEnter(l,n),i=l=>this.handleDragOver(l,n),o=l=>this.handleDrop(l,n);return t.addEventListener("dragenter",r),t.addEventListener("dragover",i),t.addEventListener("drop",o),()=>{t.removeEventListener("dragenter",r),t.removeEventListener("dragover",i),t.removeEventListener("drop",o)}}addEventListeners(n){n.addEventListener&&(n.addEventListener("dragstart",this.handleTopDragStart),n.addEventListener("dragstart",this.handleTopDragStartCapture,!0),n.addEventListener("dragend",this.handleTopDragEndCapture,!0),n.addEventListener("dragenter",this.handleTopDragEnter),n.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.addEventListener("dragover",this.handleTopDragOver),n.addEventListener("dragover",this.handleTopDragOverCapture,!0),n.addEventListener("drop",this.handleTopDrop),n.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(n){n.removeEventListener&&(n.removeEventListener("dragstart",this.handleTopDragStart),n.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),n.removeEventListener("dragend",this.handleTopDragEndCapture,!0),n.removeEventListener("dragenter",this.handleTopDragEnter),n.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.removeEventListener("dragover",this.handleTopDragOver),n.removeEventListener("dragover",this.handleTopDragOverCapture,!0),n.removeEventListener("drop",this.handleTopDrop),n.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const n=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(n);return Rs({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const n=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions.get(n);return Rs({anchorX:.5,anchorY:.5,captureDraggingState:!1},t||{})}isDraggingNativeItem(){const n=this.monitor.getItemType();return Object.keys(Ns).some(t=>Ns[t]===n)}beginDragNativeItem(n,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=dp(n,t),this.currentNativeHandle=this.registry.addSource(n,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(n){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=n;const t=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var r;return(r=this.rootElement)===null||r===void 0?void 0:r.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},t)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var n;(n=this.window)===null||n===void 0||n.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(n,t){n.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(n,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(n,t){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(n,t){this.dropTargetIds.unshift(t)}constructor(n,t,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=i=>{const o=this.sourceNodes.get(i);return o&&df(o)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=i=>!!(i&&this.document&&this.document.body&&this.document.body.contains(i)),this.endDragIfSourceWasRemovedFromDOM=()=>{const i=this.currentDragSourceNode;i==null||this.isNodeInDocument(i)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=i=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(i||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=i=>{if(i.defaultPrevented)return;const{dragStartSourceIds:o}=this;this.dragStartSourceIds=null;const l=Dr(i);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(o||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:l});const{dataTransfer:u}=i,s=fo(u);if(this.monitor.isDragging()){if(u&&typeof u.setDragImage=="function"){const g=this.monitor.getSourceId(),v=this.sourceNodes.get(g),h=this.sourcePreviewNodes.get(g)||v;if(h){const{anchorX:m,anchorY:w,offsetX:p,offsetY:T}=this.getCurrentSourcePreviewNodeOptions(),d=mp(v,h,l,{anchorX:m,anchorY:w},{offsetX:p,offsetY:T});u.setDragImage(h,d.x,d.y)}}try{u==null||u.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(i.target);const{captureDraggingState:f}=this.getCurrentSourcePreviewNodeOptions();f?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(s)this.beginDragNativeItem(s);else{if(u&&!u.types&&(i.target&&!i.target.hasAttribute||!i.target.hasAttribute("draggable")))return;i.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=i=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}if(!this.enterLeaveCounter.enter(i.target)||this.monitor.isDragging())return;const{dataTransfer:u}=i,s=fo(u);s&&this.beginDragNativeItem(s,u)},this.handleTopDragEnter=i=>{const{dragEnterTargetIds:o}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=i.altKey,o.length>0&&this.actions.hover(o,{clientOffset:Dr(i)}),o.some(u=>this.monitor.canDropOnTarget(u))&&(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=i=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}},this.handleTopDragOver=i=>{const{dragOverTargetIds:o}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}this.altKeyPressed=i.altKey,this.lastClientOffset=Dr(i),this.scheduleHover(o),(o||[]).some(u=>this.monitor.canDropOnTarget(u))?(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?i.preventDefault():(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=i=>{this.isDraggingNativeItem()&&i.preventDefault(),this.enterLeaveCounter.leave(i.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=i=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var o;i.preventDefault(),(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}else fo(i.dataTransfer)&&i.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=i=>{const{dropTargetIds:o}=this;this.dropTargetIds=[],this.actions.hover(o,{clientOffset:Dr(i)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=i=>{const o=i.target;typeof o.dragDrop=="function"&&(o.tagName==="INPUT"||o.tagName==="SELECT"||o.tagName==="TEXTAREA"||o.isContentEditable||(i.preventDefault(),o.dragDrop()))},this.options=new yp(t,r),this.actions=n.getActions(),this.monitor=n.getMonitor(),this.registry=n.getRegistry(),this.enterLeaveCounter=new cp(this.isNodeInDocument)}}const Tp=function(n,t,r){return new Sp(n,t,r)},ir=50,Mi=j.createContext({}),Ep=({children:e})=>{const[n,t]=j.useState(0),[r,i]=j.useState(""),[o,l]=j.useState([]),[u,s]=j.useState([]),[f,g]=j.useState([]),[v,h]=j.useState(null),[m,w]=j.useState([]),[p,T]=j.useState(!1),[c,a]=j.useState({isGap:!1,rangeIndex:[],overlapped:!1}),d=k=>{i(k),t(k.length)},y=k=>{const P=k.slice().sort((I,V)=>I.s-V.s);s(P.slice().flatMap((I,V)=>[{pos:I.s,type:"s",index:V},{pos:I.e,type:"e",index:V}])),l(P.map((I,V)=>({...I,index:V})))},S=(k,P)=>{h({s:k,e:P})},x=k=>{T(k)},C=(k,P,I)=>{a({rangeIndex:k,isGap:P,overlapped:I})};return j.useEffect(()=>{const k=U0(Array.from(o)),P=$0(k,n);g(P)},[o,n]),j.useEffect(()=>{if(!v||f.length===0)return;console.log({lineRange:v,gapFilled:f});const k=H0(f,ir,v.s,v.e);console.log({_byLine:k}),w(k)},[f,v]),R.jsxs(Mi.Provider,{value:{charCount:n,fullText:r,byLine:m,textRanges:o,cursorPositions:u,isDragging:p,hoverObj:c,setCharCount:t,setFullText:d,setTextRanges:y,setNewLineRange:S,setIsDragging:x,setRangeHover:C},children:[R.jsx(op,{backend:Tp,children:e}),lu.createPortal(R.jsxs("div",{className:"absolute top-0 right-0 bg-gray-100 p-2 text-sm",children:["字符长度: ",R.jsx("p",{children:n}),"正在拖动: ",R.jsx("p",{children:p?"是":"否"}),"激活范围: ",R.jsx("pre",{children:JSON.stringify(c,null,2)})]}),document.body)]})};function cl(){return cl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},cl.apply(null,arguments)}function Ls(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fl(e,n){return fl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},fl(e,n)}function xp(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,fl(e,n)}var zs=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function kp(e,n){return!!(e===n||zs(e)&&zs(n))}function Cp(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!kp(e[t],n[t]))return!1;return!0}function po(e,n){n===void 0&&(n=Cp);var t,r=[],i,o=!1;function l(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return o&&t===this&&n(u,r)||(i=e.apply(this,u),o=!0,t=this,r=u),i}return l}var Op=typeof performance=="object"&&typeof performance.now=="function",Ms=Op?function(){return performance.now()}:function(){return Date.now()};function js(e){cancelAnimationFrame(e.id)}function _p(e,n){var t=Ms();function r(){Ms()-t>=n?e.call(null):i.id=requestAnimationFrame(r)}var i={id:requestAnimationFrame(r)};return i}var ho=-1;function Fs(e){if(e===void 0&&(e=!1),ho===-1||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(n),ho=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return ho}var Wn=null;function As(e){if(e===void 0&&(e=!1),Wn===null||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var r=document.createElement("div"),i=r.style;return i.width="100px",i.height="100px",n.appendChild(r),document.body.appendChild(n),n.scrollLeft>0?Wn="positive-descending":(n.scrollLeft=1,n.scrollLeft===0?Wn="negative":Wn="positive-ascending"),document.body.removeChild(n),Wn}return Wn}var Ip=150,Dp=function(n,t){return n};function Np(e){var n,t=e.getItemOffset,r=e.getEstimatedTotalSize,i=e.getItemSize,o=e.getOffsetForIndexAndAlignment,l=e.getStartIndexForOffset,u=e.getStopIndexForStartIndex,s=e.initInstanceProps,f=e.shouldResetStyleCacheOnItemSizeChange,g=e.validateProps;return n=function(v){xp(h,v);function h(w){var p;return p=v.call(this,w)||this,p._instanceProps=s(p.props,Ls(p)),p._outerRef=void 0,p._resetIsScrollingTimeoutId=null,p.state={instance:Ls(p),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof p.props.initialScrollOffset=="number"?p.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},p._callOnItemsRendered=void 0,p._callOnItemsRendered=po(function(T,c,a,d){return p.props.onItemsRendered({overscanStartIndex:T,overscanStopIndex:c,visibleStartIndex:a,visibleStopIndex:d})}),p._callOnScroll=void 0,p._callOnScroll=po(function(T,c,a){return p.props.onScroll({scrollDirection:T,scrollOffset:c,scrollUpdateWasRequested:a})}),p._getItemStyle=void 0,p._getItemStyle=function(T){var c=p.props,a=c.direction,d=c.itemSize,y=c.layout,S=p._getItemStyleCache(f&&d,f&&y,f&&a),x;if(S.hasOwnProperty(T))x=S[T];else{var C=t(p.props,T,p._instanceProps),k=i(p.props,T,p._instanceProps),P=a==="horizontal"||y==="horizontal",I=a==="rtl",V=P?C:0;S[T]=x={position:"absolute",left:I?void 0:V,right:I?V:void 0,top:P?0:C,height:P?"100%":k,width:P?k:"100%"}}return x},p._getItemStyleCache=void 0,p._getItemStyleCache=po(function(T,c,a){return{}}),p._onScrollHorizontal=function(T){var c=T.currentTarget,a=c.clientWidth,d=c.scrollLeft,y=c.scrollWidth;p.setState(function(S){if(S.scrollOffset===d)return null;var x=p.props.direction,C=d;if(x==="rtl")switch(As()){case"negative":C=-d;break;case"positive-descending":C=y-a-d;break}return C=Math.max(0,Math.min(C,y-a)),{isScrolling:!0,scrollDirection:S.scrollOffset<C?"forward":"backward",scrollOffset:C,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._onScrollVertical=function(T){var c=T.currentTarget,a=c.clientHeight,d=c.scrollHeight,y=c.scrollTop;p.setState(function(S){if(S.scrollOffset===y)return null;var x=Math.max(0,Math.min(y,d-a));return{isScrolling:!0,scrollDirection:S.scrollOffset<x?"forward":"backward",scrollOffset:x,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._outerRefSetter=function(T){var c=p.props.outerRef;p._outerRef=T,typeof c=="function"?c(T):c!=null&&typeof c=="object"&&c.hasOwnProperty("current")&&(c.current=T)},p._resetIsScrollingDebounced=function(){p._resetIsScrollingTimeoutId!==null&&js(p._resetIsScrollingTimeoutId),p._resetIsScrollingTimeoutId=_p(p._resetIsScrolling,Ip)},p._resetIsScrolling=function(){p._resetIsScrollingTimeoutId=null,p.setState({isScrolling:!1},function(){p._getItemStyleCache(-1,null)})},p}h.getDerivedStateFromProps=function(p,T){return Pp(p,T),g(p),null};var m=h.prototype;return m.scrollTo=function(p){p=Math.max(0,p),this.setState(function(T){return T.scrollOffset===p?null:{scrollDirection:T.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},m.scrollToItem=function(p,T){T===void 0&&(T="auto");var c=this.props,a=c.itemCount,d=c.layout,y=this.state.scrollOffset;p=Math.max(0,Math.min(p,a-1));var S=0;if(this._outerRef){var x=this._outerRef;d==="vertical"?S=x.scrollWidth>x.clientWidth?Fs():0:S=x.scrollHeight>x.clientHeight?Fs():0}this.scrollTo(o(this.props,p,T,y,this._instanceProps,S))},m.componentDidMount=function(){var p=this.props,T=p.direction,c=p.initialScrollOffset,a=p.layout;if(typeof c=="number"&&this._outerRef!=null){var d=this._outerRef;T==="horizontal"||a==="horizontal"?d.scrollLeft=c:d.scrollTop=c}this._callPropsCallbacks()},m.componentDidUpdate=function(){var p=this.props,T=p.direction,c=p.layout,a=this.state,d=a.scrollOffset,y=a.scrollUpdateWasRequested;if(y&&this._outerRef!=null){var S=this._outerRef;if(T==="horizontal"||c==="horizontal")if(T==="rtl")switch(As()){case"negative":S.scrollLeft=-d;break;case"positive-ascending":S.scrollLeft=d;break;default:var x=S.clientWidth,C=S.scrollWidth;S.scrollLeft=C-x-d;break}else S.scrollLeft=d;else S.scrollTop=d}this._callPropsCallbacks()},m.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&js(this._resetIsScrollingTimeoutId)},m.render=function(){var p=this.props,T=p.children,c=p.className,a=p.direction,d=p.height,y=p.innerRef,S=p.innerElementType,x=p.innerTagName,C=p.itemCount,k=p.itemData,P=p.itemKey,I=P===void 0?Dp:P,V=p.layout,Tn=p.outerElementType,En=p.outerTagName,cr=p.style,ji=p.useIsScrolling,yt=p.width,Un=this.state.isScrolling,O=a==="horizontal"||V==="horizontal",D=O?this._onScrollHorizontal:this._onScrollVertical,N=this._getRangeToRender(),W=N[0],Y=N[1],xn=[];if(C>0)for(var me=W;me<=Y;me++)xn.push(j.createElement(T,{data:k,key:I(me,k),index:me,isScrolling:ji?Un:void 0,style:this._getItemStyle(me)}));var $n=r(this.props,this._instanceProps);return j.createElement(Tn||En||"div",{className:c,onScroll:D,ref:this._outerRefSetter,style:cl({position:"relative",height:d,width:yt,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},cr)},j.createElement(S||x||"div",{children:xn,ref:y,style:{height:O?"100%":$n,pointerEvents:Un?"none":void 0,width:O?$n:"100%"}}))},m._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var p=this.props.itemCount;if(p>0){var T=this._getRangeToRender(),c=T[0],a=T[1],d=T[2],y=T[3];this._callOnItemsRendered(c,a,d,y)}}if(typeof this.props.onScroll=="function"){var S=this.state,x=S.scrollDirection,C=S.scrollOffset,k=S.scrollUpdateWasRequested;this._callOnScroll(x,C,k)}},m._getRangeToRender=function(){var p=this.props,T=p.itemCount,c=p.overscanCount,a=this.state,d=a.isScrolling,y=a.scrollDirection,S=a.scrollOffset;if(T===0)return[0,0,0,0];var x=l(this.props,S,this._instanceProps),C=u(this.props,x,S,this._instanceProps),k=!d||y==="backward"?Math.max(1,c):1,P=!d||y==="forward"?Math.max(1,c):1;return[Math.max(0,x-k),Math.max(0,Math.min(T-1,C+P)),x,C]},h}(j.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var Pp=function(n,t){n.children,n.direction,n.height,n.layout,n.innerTagName,n.outerTagName,n.width,t.instance},Rp=Np({getItemOffset:function(n,t){var r=n.itemSize;return t*r},getItemSize:function(n,t){var r=n.itemSize;return r},getEstimatedTotalSize:function(n){var t=n.itemCount,r=n.itemSize;return r*t},getOffsetForIndexAndAlignment:function(n,t,r,i,o,l){var u=n.direction,s=n.height,f=n.itemCount,g=n.itemSize,v=n.layout,h=n.width,m=u==="horizontal"||v==="horizontal",w=m?h:s,p=Math.max(0,f*g-w),T=Math.min(p,t*g),c=Math.max(0,t*g-w+g+l);switch(r==="smart"&&(i>=c-w&&i<=T+w?r="auto":r="center"),r){case"start":return T;case"end":return c;case"center":{var a=Math.round(c+(T-c)/2);return a<Math.ceil(w/2)?0:a>p+Math.floor(w/2)?p:a}case"auto":default:return i>=c&&i<=T?i:i<c?c:T}},getStartIndexForOffset:function(n,t){var r=n.itemCount,i=n.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/i)))},getStopIndexForStartIndex:function(n,t,r){var i=n.direction,o=n.height,l=n.itemCount,u=n.itemSize,s=n.layout,f=n.width,g=i==="horizontal"||s==="horizontal",v=t*u,h=g?f:o,m=Math.ceil((h+r-v)/u);return Math.max(0,Math.min(l-1,t+m-1))},initInstanceProps:function(n){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(n){n.itemSize}});function pf(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=pf(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Wr(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=pf(e))&&(r&&(r+=" "),r+=n);return r}function Lp({text:e}){return R.jsx(R.Fragment,{})}const zp=({text:e,part:n})=>{const{hoverObj:t,setRangeHover:r}=j.useContext(Mi),[i,o]=j.useState(!1),[l,u]=j.useState(!1),s=n.isOverlapped,f=n.index%2===1,g=n.index%2===0,v=n.isGap;j.useEffect(()=>{if(!t.isGap&&!v&&n.hoverIndex.includes(t.rangeIndex[0])){o(!0);return}if(t.isGap&&v&&n.hoverIndex.includes(t.rangeIndex[0])){o(!0);return}o(!1)},[t]);const h=(m,w,p)=>{l||r(m,w,p),u(!l)};return R.jsx("span",{className:Wr("cursor-pointer",i&&"bg-yellow-300",!i&&s&&"bg-gray-300",!i&&!s&&g&&"bg-red-300",!i&&!s&&f&&"bg-green-300",!i&&v&&"bg-transparent"),onClick:()=>h(n.hoverIndex,v,s),children:e})},Mp=({parts:e,lineIndex:n,text:t})=>R.jsx(R.Fragment,{children:e.map((r,i)=>{const o=r.s-n*ir,l=r.e-n*ir,u=t.slice(o,l);return R.jsx(R.Fragment,{children:R.jsx(zp,{text:u,part:r})},i)})});function jp(){const{setNewLineRange:e,fullText:n,byLine:t}=j.useContext(Mi),[r,i]=j.useState({startIndex:0,endIndex:0}),o=j.useMemo(()=>{const u=[];for(let s=0;s<n.length;s+=ir)u.push(n.slice(s,s+ir));return u},[n]),l=j.useMemo(()=>t.reduce((u,s)=>(u[s.lineNumber]||(u[s.lineNumber]=[]),u[s.lineNumber].push(s),u),{}),[t]);return console.log({byLineByKey:l}),R.jsxs(R.Fragment,{children:[R.jsx(Rp,{height:600,itemCount:o.length,itemSize:30,width:"100%",onItemsRendered:({visibleStartIndex:u,visibleStopIndex:s})=>{e(u,s),i({startIndex:u,endIndex:s})},children:({index:u,style:s})=>{const f=o[u],g=l[u];return R.jsxs("div",{style:s,children:[R.jsx("div",{className:"",children:R.jsx("span",{className:Wr(),children:f})}),R.jsx("div",{className:Wr("absolute left-0 top-0"),children:g&&R.jsx(Mp,{parts:g,lineIndex:u,text:f})}),R.jsx("div",{className:Wr("absolute left-0 top-0"),children:R.jsx(Lp,{text:f})})]})}}),lu.createPortal(R.jsxs("div",{className:"absolute right-0 bottom-0 bg-gray-100 p-2 text-sm",children:[R.jsx("p",{children:"Visible Range:"}),R.jsxs("p",{children:["Start: ",r.startIndex]}),R.jsxs("p",{children:["End: ",r.endIndex]})]}),document.body)]})}function Fp({text:e}){const{setFullText:n,setTextRanges:t}=j.useContext(Mi);return j.useEffect(()=>{n(e),t([{s:0,e:10},{s:5,e:20},{s:15,e:25}])},[]),R.jsx("div",{className:"relative w-[800px] h-[600px] border border-red-500 overflow-y-scroll",children:R.jsx(jp,{})})}function Ap({text:e}){return R.jsx(Ep,{children:R.jsx(Fp,{text:e})})}const Up=`晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]
`;function $p(){return R.jsxs("div",{className:"p-10",children:[R.jsx("h1",{className:"font-bold",children:"Text Range Selection"}),R.jsx("hr",{className:"my-2"}),R.jsx(Ap,{text:Up})]})}qc(document.getElementById("root")).render(R.jsx($p,{}));
