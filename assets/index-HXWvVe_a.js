(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function If(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yu={exports:{}},yi={},Xu={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Pf=Symbol.for("react.portal"),_f=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),Lf=Symbol.for("react.provider"),Mf=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),jf=Symbol.for("react.suspense"),Ff=Symbol.for("react.memo"),Uf=Symbol.for("react.lazy"),Ss=Symbol.iterator;function Af(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Ju={};function Tt(e,n,t){this.props=e,this.context=n,this.refs=Ju,this.updater=t||qu}Tt.prototype.isReactComponent={};Tt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ea(){}ea.prototype=Tt.prototype;function wl(e,n,t){this.props=e,this.context=n,this.refs=Ju,this.updater=t||qu}var Sl=wl.prototype=new ea;Sl.constructor=wl;Zu(Sl,Tt.prototype);Sl.isPureReactComponent=!0;var Ts=Array.isArray,na=Object.prototype.hasOwnProperty,Tl={current:null},ta={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)na.call(n,r)&&!ta.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:cr,type:e,key:o,ref:l,props:i,_owner:Tl.current}}function Hf(e,n){return{$$typeof:cr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function $f(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Es=/\/+/g;function Ai(e,n){return typeof e=="object"&&e!==null&&e.key!=null?$f(""+e.key):n.toString(36)}function zr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case cr:case Pf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ai(l,0):r,Ts(i)?(t="",e!=null&&(t=e.replace(Es,"$&/")+"/"),zr(i,n,t,"",function(f){return f})):i!=null&&(El(i)&&(i=Hf(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Es,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Ts(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Ai(o,s);l+=zr(o,n,t,u,i)}else if(u=Af(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Ai(o,s++),l+=zr(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function vr(e,n,t){if(e==null)return e;var r=[],i=0;return zr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Vf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},jr={transition:null},Wf={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Tl};function ia(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:vr,forEach:function(e,n,t){vr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vr(e,function(){n++}),n},toArray:function(e){return vr(e,function(n){return n})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Tt;j.Fragment=_f;j.Profiler=Rf;j.PureComponent=wl;j.StrictMode=Nf;j.Suspense=jf;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wf;j.act=ia;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Tl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)na.call(n,u)&&!ta.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:cr,type:e.type,key:i,ref:o,props:r,_owner:l}};j.createContext=function(e){return e={$$typeof:Mf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lf,_context:e},e.Consumer=e};j.createElement=ra;j.createFactory=function(e){var n=ra.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:zf,render:e}};j.isValidElement=El;j.lazy=function(e){return{$$typeof:Uf,_payload:{_status:-1,_result:e},_init:Vf}};j.memo=function(e,n){return{$$typeof:Ff,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=jr.transition;jr.transition={};try{e()}finally{jr.transition=n}};j.unstable_act=ia;j.useCallback=function(e,n){return pe.current.useCallback(e,n)};j.useContext=function(e){return pe.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};j.useEffect=function(e,n){return pe.current.useEffect(e,n)};j.useId=function(){return pe.current.useId()};j.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return pe.current.useMemo(e,n)};j.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};j.useRef=function(e){return pe.current.useRef(e)};j.useState=function(e){return pe.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return pe.current.useTransition()};j.version="18.3.1";Xu.exports=j;var P=Xu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf=P,Qf=Symbol.for("react.element"),bf=Symbol.for("react.fragment"),Gf=Object.prototype.hasOwnProperty,Kf=Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yf={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Gf.call(n,r)&&!Yf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Qf,type:e,key:o,ref:l,props:i,_owner:Kf.current}}yi.Fragment=bf;yi.jsx=oa;yi.jsxs=oa;Yu.exports=yi;var L=Yu.exports,la={exports:{}},Oe={},sa={exports:{}},ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,R){var z=k.length;k.push(R);e:for(;0<z;){var B=z-1>>>1,q=k[B];if(0<i(q,R))k[B]=R,k[z]=q,z=B;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var R=k[0],z=k.pop();if(z!==R){k[0]=z;e:for(var B=0,q=k.length,In=q>>>1;B<In;){var Se=2*(B+1)-1,Qn=k[Se],Pn=Se+1,mr=k[Pn];if(0>i(Qn,z))Pn<q&&0>i(mr,Qn)?(k[B]=mr,k[Pn]=z,B=Pn):(k[B]=Qn,k[Se]=z,B=Se);else if(Pn<q&&0>i(mr,z))k[B]=mr,k[Pn]=z,B=Pn;else break e}}return R}function i(k,R){var z=k.sortIndex-R.sortIndex;return z!==0?z:k.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],f=[],g=1,m=null,h=3,v=!1,w=!1,p=!1,T=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(k){for(var R=t(f);R!==null;){if(R.callback===null)r(f);else if(R.startTime<=k)r(f),R.sortIndex=R.expirationTime,n(u,R);else break;R=t(f)}}function y(k){if(p=!1,d(k),!w)if(t(u)!==null)w=!0,U(S);else{var R=t(f);R!==null&&N(y,R.startTime-k)}}function S(k,R){w=!1,p&&(p=!1,c(C),C=-1),v=!0;var z=h;try{for(d(R),m=t(u);m!==null&&(!(m.expirationTime>R)||k&&!X());){var B=m.callback;if(typeof B=="function"){m.callback=null,h=m.priorityLevel;var q=B(m.expirationTime<=R);R=e.unstable_now(),typeof q=="function"?m.callback=q:m===t(u)&&r(u),d(R)}else r(u);m=t(u)}if(m!==null)var In=!0;else{var Se=t(f);Se!==null&&N(y,Se.startTime-R),In=!1}return In}finally{m=null,h=z,v=!1}}var D=!1,O=null,C=-1,_=5,I=-1;function X(){return!(e.unstable_now()-I<_)}function je(){if(O!==null){var k=e.unstable_now();I=k;var R=!0;try{R=O(!0,k)}finally{R?xe():(D=!1,O=null)}}else D=!1}var xe;if(typeof a=="function")xe=function(){a(je)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Ye=ce.port2;ce.port1.onmessage=je,xe=function(){Ye.postMessage(null)}}else xe=function(){T(je,0)};function U(k){O=k,D||(D=!0,xe())}function N(k,R){C=T(function(){k(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,U(S))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(k){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var z=h;h=R;try{return k()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,R){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var z=h;h=k;try{return R()}finally{h=z}},e.unstable_scheduleCallback=function(k,R,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,k){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,k={id:g++,callback:R,priorityLevel:k,startTime:z,expirationTime:q,sortIndex:-1},z>B?(k.sortIndex=z,n(f,k),t(u)===null&&k===t(f)&&(p?(c(C),C=-1):p=!0,N(y,z-B))):(k.sortIndex=q,n(u,k),w||v||(w=!0,U(S))),k},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(k){var R=h;return function(){var z=h;h=R;try{return k.apply(this,arguments)}finally{h=z}}}})(ua);sa.exports=ua;var Xf=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf=P,De=Xf;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aa=new Set,Gt={};function Wn(e,n){ht(e,n),ht(e+"Capture",n)}function ht(e,n){for(Gt[e]=n,e=0;e<n.length;e++)aa.add(n[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=Object.prototype.hasOwnProperty,Zf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cs={},Ds={};function Jf(e){return So.call(Ds,e)?!0:So.call(Cs,e)?!1:Zf.test(e)?Ds[e]=!0:(Cs[e]=!0,!1)}function ed(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nd(e,n,t,r){if(n===null||typeof n>"u"||ed(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cl=/[\-:]([a-z])/g;function Dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Cl,Dl);oe[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Cl,Dl);oe[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Cl,Dl);oe[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ol(e,n,t,r){var i=oe.hasOwnProperty(n)?oe[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(nd(n,t,i,r)&&(t=null),r||i===null?Jf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var sn=qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),ca=Symbol.for("react.provider"),fa=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),Eo=Symbol.for("react.suspense"),Co=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),da=Symbol.for("react.offscreen"),Os=Symbol.iterator;function Ot(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Hi;function Lt(e){if(Hi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hi=n&&n[1]||""}return`
`+Hi+e}var $i=!1;function Vi(e,n){if(!e||$i)return"";$i=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{$i=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Lt(e):""}function td(e){switch(e.tag){case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function Do(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Yn:return"Portal";case To:return"Profiler";case kl:return"StrictMode";case Eo:return"Suspense";case Co:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fa:return(e.displayName||"Context")+".Consumer";case ca:return(e._context.displayName||"Context")+".Provider";case xl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return n=e.displayName||null,n!==null?n:Do(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Do(e(n))}catch{}}return null}function rd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Do(n);case 8:return n===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function id(e){var n=pa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wr(e){e._valueTracker||(e._valueTracker=id(e))}function ha(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=pa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ks(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ga(e,n){n=n.checked,n!=null&&Ol(e,"checked",n,!1)}function ko(e,n){ga(e,n);var t=Cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?xo(e,n.type,t):n.hasOwnProperty("defaultValue")&&xo(e,n.type,Cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function xo(e,n,t){(n!=="number"||Kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Mt=Array.isArray;function st(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Cn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Io(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Is(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Mt(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Cn(t)}}function ma(e,n){var t=Cn(n.value),r=Cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ps(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function va(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Po(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?va(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,ya=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Kt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},od=["Webkit","ms","Moz","O"];Object.keys(Ft).forEach(function(e){od.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ft[n]=Ft[e]})});function wa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ft.hasOwnProperty(e)&&Ft[e]?(""+n).trim():n+"px"}function Sa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=wa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var ld=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _o(e,n){if(n){if(ld[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function No(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=null;function Pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lo=null,ut=null,at=null;function _s(e){if(e=pr(e)){if(typeof Lo!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Ci(n),Lo(e.stateNode,e.type,n))}}function Ta(e){ut?at?at.push(e):at=[e]:ut=e}function Ea(){if(ut){var e=ut,n=at;if(at=ut=null,_s(e),n)for(e=0;e<n.length;e++)_s(n[e])}}function Ca(e,n){return e(n)}function Da(){}var Wi=!1;function Oa(e,n,t){if(Wi)return e(n,t);Wi=!0;try{return Ca(e,n,t)}finally{Wi=!1,(ut!==null||at!==null)&&(Da(),Ea())}}function Yt(e,n){var t=e.stateNode;if(t===null)return null;var r=Ci(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var Mo=!1;if(tn)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{Mo=!1}function sd(e,n,t,r,i,o,l,s,u){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(g){this.onError(g)}}var Ut=!1,Yr=null,Xr=!1,zo=null,ud={onError:function(e){Ut=!0,Yr=e}};function ad(e,n,t,r,i,o,l,s,u){Ut=!1,Yr=null,sd.apply(ud,arguments)}function cd(e,n,t,r,i,o,l,s,u){if(ad.apply(this,arguments),Ut){if(Ut){var f=Yr;Ut=!1,Yr=null}else throw Error(E(198));Xr||(Xr=!0,zo=f)}}function Bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ka(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ns(e){if(Bn(e)!==e)throw Error(E(188))}function fd(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ns(i),e;if(o===r)return Ns(i),n;o=o.sibling}throw Error(E(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===t){l=!0,t=i,r=o;break}if(s===r){l=!0,r=i,t=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===t){l=!0,t=o,r=i;break}if(s===r){l=!0,r=o,t=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function xa(e){return e=fd(e),e!==null?Ia(e):null}function Ia(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ia(e);if(n!==null)return n;e=e.sibling}return null}var Pa=De.unstable_scheduleCallback,Rs=De.unstable_cancelCallback,dd=De.unstable_shouldYield,pd=De.unstable_requestPaint,Y=De.unstable_now,hd=De.unstable_getCurrentPriorityLevel,_l=De.unstable_ImmediatePriority,_a=De.unstable_UserBlockingPriority,qr=De.unstable_NormalPriority,gd=De.unstable_LowPriority,Na=De.unstable_IdlePriority,wi=null,Ge=null;function md(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:wd,vd=Math.log,yd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(vd(e)/yd|0)|0}var Tr=64,Er=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~i;s!==0?r=zt(s):(o&=l,o!==0&&(r=zt(o)))}else l=t&~i,l!==0?r=zt(l):o!==0&&(r=zt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-$e(n),i=1<<t,r|=e[t],n&=~i;return r}function Sd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-$e(o),s=1<<l,u=i[l];u===-1?(!(s&t)||s&r)&&(i[l]=Sd(s,n)):u<=n&&(e.expiredLanes|=s),o&=~s}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ra(){var e=Tr;return Tr<<=1,!(Tr&4194240)&&(Tr=64),e}function Bi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function fr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$e(n),e[n]=t}function Ed(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-$e(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Nl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-$e(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var A=0;function La(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ma,Rl,za,ja,Fa,Fo=!1,Cr=[],gn=null,mn=null,vn=null,Xt=new Map,qt=new Map,fn=[],Cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ls(e,n){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Xt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qt.delete(n.pointerId)}}function xt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=pr(n),n!==null&&Rl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Dd(e,n,t,r,i){switch(n){case"focusin":return gn=xt(gn,e,n,t,r,i),!0;case"dragenter":return mn=xt(mn,e,n,t,r,i),!0;case"mouseover":return vn=xt(vn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Xt.set(o,xt(Xt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qt.set(o,xt(qt.get(o)||null,e,n,t,r,i)),!0}return!1}function Ua(e){var n=Rn(e.target);if(n!==null){var t=Bn(n);if(t!==null){if(n=t.tag,n===13){if(n=ka(t),n!==null){e.blockedOn=n,Fa(e.priority,function(){za(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Uo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ro=r,t.target.dispatchEvent(r),Ro=null}else return n=pr(t),n!==null&&Rl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ms(e,n,t){Fr(e)&&t.delete(n)}function Od(){Fo=!1,gn!==null&&Fr(gn)&&(gn=null),mn!==null&&Fr(mn)&&(mn=null),vn!==null&&Fr(vn)&&(vn=null),Xt.forEach(Ms),qt.forEach(Ms)}function It(e,n){e.blockedOn===n&&(e.blockedOn=null,Fo||(Fo=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Od)))}function Zt(e){function n(i){return It(i,e)}if(0<Cr.length){It(Cr[0],e);for(var t=1;t<Cr.length;t++){var r=Cr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&It(gn,e),mn!==null&&It(mn,e),vn!==null&&It(vn,e),Xt.forEach(n),qt.forEach(n),t=0;t<fn.length;t++)r=fn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)Ua(t),t.blockedOn===null&&fn.shift()}var ct=sn.ReactCurrentBatchConfig,Jr=!0;function kd(e,n,t,r){var i=A,o=ct.transition;ct.transition=null;try{A=1,Ll(e,n,t,r)}finally{A=i,ct.transition=o}}function xd(e,n,t,r){var i=A,o=ct.transition;ct.transition=null;try{A=4,Ll(e,n,t,r)}finally{A=i,ct.transition=o}}function Ll(e,n,t,r){if(Jr){var i=Uo(e,n,t,r);if(i===null)eo(e,n,r,ei,t),Ls(e,r);else if(Dd(i,e,n,t,r))r.stopPropagation();else if(Ls(e,r),n&4&&-1<Cd.indexOf(e)){for(;i!==null;){var o=pr(i);if(o!==null&&Ma(o),o=Uo(e,n,t,r),o===null&&eo(e,n,r,ei,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else eo(e,n,r,null,t)}}var ei=null;function Uo(e,n,t,r){if(ei=null,e=Pl(r),e=Rn(e),e!==null)if(n=Bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ka(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ei=e,null}function Aa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case _l:return 1;case _a:return 4;case qr:case gd:return 16;case Na:return 536870912;default:return 16}default:return 16}}var pn=null,Ml=null,Ur=null;function Ha(){if(Ur)return Ur;var e,n=Ml,t=n.length,r,i="value"in pn?pn.value:pn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Ur=i.slice(e,1<r?1-r:void 0)}function Ar(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function zs(){return!1}function ke(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Dr:zs,this.isPropagationStopped=zs,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),n}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=ke(Et),dr=G({},Et,{view:0,detail:0}),Id=ke(dr),Qi,bi,Pt,Si=G({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pt&&(Pt&&e.type==="mousemove"?(Qi=e.screenX-Pt.screenX,bi=e.screenY-Pt.screenY):bi=Qi=0,Pt=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),js=ke(Si),Pd=G({},Si,{dataTransfer:0}),_d=ke(Pd),Nd=G({},dr,{relatedTarget:0}),Gi=ke(Nd),Rd=G({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),Ld=ke(Rd),Md=G({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zd=ke(Md),jd=G({},Et,{data:0}),Fs=ke(jd),Fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ud={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ad[e])?!!n[e]:!1}function jl(){return Hd}var $d=G({},dr,{key:function(e){if(e.key){var n=Fd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ud[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vd=ke($d),Wd=G({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=ke(Wd),Bd=G({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Qd=ke(Bd),bd=G({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gd=ke(bd),Kd=G({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yd=ke(Kd),Xd=[9,13,27,32],Fl=tn&&"CompositionEvent"in window,At=null;tn&&"documentMode"in document&&(At=document.documentMode);var qd=tn&&"TextEvent"in window&&!At,$a=tn&&(!Fl||At&&8<At&&11>=At),As=" ",Hs=!1;function Va(e,n){switch(e){case"keyup":return Xd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function Zd(e,n){switch(e){case"compositionend":return Wa(n);case"keypress":return n.which!==32?null:(Hs=!0,As);case"textInput":return e=n.data,e===As&&Hs?null:e;default:return null}}function Jd(e,n){if(qn)return e==="compositionend"||!Fl&&Va(e,n)?(e=Ha(),Ur=Ml=pn=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $a&&n.locale!=="ko"?null:n.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!e0[e.type]:n==="textarea"}function Ba(e,n,t,r){Ta(r),n=ni(n,"onChange"),0<n.length&&(t=new zl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ht=null,Jt=null;function n0(e){nc(e,0)}function Ti(e){var n=et(e);if(ha(n))return e}function t0(e,n){if(e==="change")return n}var Qa=!1;if(tn){var Ki;if(tn){var Yi="oninput"in document;if(!Yi){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),Yi=typeof Vs.oninput=="function"}Ki=Yi}else Ki=!1;Qa=Ki&&(!document.documentMode||9<document.documentMode)}function Ws(){Ht&&(Ht.detachEvent("onpropertychange",ba),Jt=Ht=null)}function ba(e){if(e.propertyName==="value"&&Ti(Jt)){var n=[];Ba(n,Jt,e,Pl(e)),Oa(n0,n)}}function r0(e,n,t){e==="focusin"?(Ws(),Ht=n,Jt=t,Ht.attachEvent("onpropertychange",ba)):e==="focusout"&&Ws()}function i0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(Jt)}function o0(e,n){if(e==="click")return Ti(n)}function l0(e,n){if(e==="input"||e==="change")return Ti(n)}function s0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:s0;function er(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!So.call(n,i)||!We(e[i],n[i]))return!1}return!0}function Bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qs(e,n){var t=Bs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bs(t)}}function Ga(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ga(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ka(){for(var e=window,n=Kr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Kr(e.document)}return n}function Ul(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function u0(e){var n=Ka(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ga(t.ownerDocument.documentElement,t)){if(r!==null&&Ul(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qs(t,o);var l=Qs(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a0=tn&&"documentMode"in document&&11>=document.documentMode,Zn=null,Ao=null,$t=null,Ho=!1;function bs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ho||Zn==null||Zn!==Kr(r)||(r=Zn,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$t&&er($t,r)||($t=r,r=ni(Ao,"onSelect"),0<r.length&&(n=new zl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Zn)))}function Or(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jn={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},Xi={},Ya={};tn&&(Ya=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Ei(e){if(Xi[e])return Xi[e];if(!Jn[e])return e;var n=Jn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ya)return Xi[e]=n[t];return e}var Xa=Ei("animationend"),qa=Ei("animationiteration"),Za=Ei("animationstart"),Ja=Ei("transitionend"),ec=new Map,Gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,n){ec.set(e,n),Wn(n,[e])}for(var qi=0;qi<Gs.length;qi++){var Zi=Gs[qi],c0=Zi.toLowerCase(),f0=Zi[0].toUpperCase()+Zi.slice(1);On(c0,"on"+f0)}On(Xa,"onAnimationEnd");On(qa,"onAnimationIteration");On(Za,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Ja,"onTransitionEnd");ht("onMouseEnter",["mouseout","mouseover"]);ht("onMouseLeave",["mouseout","mouseover"]);ht("onPointerEnter",["pointerout","pointerover"]);ht("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));function Ks(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,cd(r,n,void 0,e),e.currentTarget=null}function nc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Ks(i,s,f),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,f=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Ks(i,s,f),o=u}}}if(Xr)throw e=zo,Xr=!1,zo=null,e}function $(e,n){var t=n[Qo];t===void 0&&(t=n[Qo]=new Set);var r=e+"__bubble";t.has(r)||(tc(n,e,2,!1),t.add(r))}function Ji(e,n,t){var r=0;n&&(r|=4),tc(t,e,r,n)}var kr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[kr]){e[kr]=!0,aa.forEach(function(t){t!=="selectionchange"&&(d0.has(t)||Ji(t,!1,e),Ji(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kr]||(n[kr]=!0,Ji("selectionchange",!1,n))}}function tc(e,n,t,r){switch(Aa(n)){case 1:var i=kd;break;case 4:i=xd;break;default:i=Ll}t=i.bind(null,n,t,e),i=void 0,!Mo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function eo(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Rn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Oa(function(){var f=o,g=Pl(t),m=[];e:{var h=ec.get(e);if(h!==void 0){var v=zl,w=e;switch(e){case"keypress":if(Ar(t)===0)break e;case"keydown":case"keyup":v=Vd;break;case"focusin":w="focus",v=Gi;break;case"focusout":w="blur",v=Gi;break;case"beforeblur":case"afterblur":v=Gi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Qd;break;case Xa:case qa:case Za:v=Ld;break;case Ja:v=Gd;break;case"scroll":v=Id;break;case"wheel":v=Yd;break;case"copy":case"cut":case"paste":v=zd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Us}var p=(n&4)!==0,T=!p&&e==="scroll",c=p?h!==null?h+"Capture":null:h;p=[];for(var a=f,d;a!==null;){d=a;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,c!==null&&(y=Yt(a,c),y!=null&&p.push(tr(a,y,d)))),T)break;a=a.return}0<p.length&&(h=new v(h,w,null,t,g),m.push({event:h,listeners:p}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==Ro&&(w=t.relatedTarget||t.fromElement)&&(Rn(w)||w[rn]))break e;if((v||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=t.relatedTarget||t.toElement,v=f,w=w?Rn(w):null,w!==null&&(T=Bn(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=f),v!==w)){if(p=js,y="onMouseLeave",c="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(p=Us,y="onPointerLeave",c="onPointerEnter",a="pointer"),T=v==null?h:et(v),d=w==null?h:et(w),h=new p(y,a+"leave",v,t,g),h.target=T,h.relatedTarget=d,y=null,Rn(g)===f&&(p=new p(c,a+"enter",w,t,g),p.target=d,p.relatedTarget=T,y=p),T=y,v&&w)n:{for(p=v,c=w,a=0,d=p;d;d=bn(d))a++;for(d=0,y=c;y;y=bn(y))d++;for(;0<a-d;)p=bn(p),a--;for(;0<d-a;)c=bn(c),d--;for(;a--;){if(p===c||c!==null&&p===c.alternate)break n;p=bn(p),c=bn(c)}p=null}else p=null;v!==null&&Ys(m,h,v,p,!1),w!==null&&T!==null&&Ys(m,T,w,p,!0)}}e:{if(h=f?et(f):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=t0;else if($s(h))if(Qa)S=l0;else{S=i0;var D=r0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=o0);if(S&&(S=S(e,f))){Ba(m,S,t,g);break e}D&&D(e,h,f),e==="focusout"&&(D=h._wrapperState)&&D.controlled&&h.type==="number"&&xo(h,"number",h.value)}switch(D=f?et(f):window,e){case"focusin":($s(D)||D.contentEditable==="true")&&(Zn=D,Ao=f,$t=null);break;case"focusout":$t=Ao=Zn=null;break;case"mousedown":Ho=!0;break;case"contextmenu":case"mouseup":case"dragend":Ho=!1,bs(m,t,g);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":bs(m,t,g)}var O;if(Fl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else qn?Va(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&($a&&t.locale!=="ko"&&(qn||C!=="onCompositionStart"?C==="onCompositionEnd"&&qn&&(O=Ha()):(pn=g,Ml="value"in pn?pn.value:pn.textContent,qn=!0)),D=ni(f,C),0<D.length&&(C=new Fs(C,e,null,t,g),m.push({event:C,listeners:D}),O?C.data=O:(O=Wa(t),O!==null&&(C.data=O)))),(O=qd?Zd(e,t):Jd(e,t))&&(f=ni(f,"onBeforeInput"),0<f.length&&(g=new Fs("onBeforeInput","beforeinput",null,t,g),m.push({event:g,listeners:f}),g.data=O))}nc(m,n)})}function tr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ni(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Yt(e,t),o!=null&&r.unshift(tr(e,o,i)),o=Yt(e,n),o!=null&&r.push(tr(e,o,i))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var s=t,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,i?(u=Yt(t,o),u!=null&&l.unshift(tr(t,u,s))):i||(u=Yt(t,o),u!=null&&l.push(tr(t,u,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var p0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(p0,`
`).replace(h0,"")}function xr(e,n,t){if(n=Xs(n),Xs(e)!==n&&t)throw Error(E(425))}function ti(){}var $o=null,Vo=null;function Wo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bo=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,qs=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof qs<"u"?function(e){return qs.resolve(null).then(e).catch(v0)}:Bo;function v0(e){setTimeout(function(){throw e})}function no(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Zt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Zt(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Zs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ct=Math.random().toString(36).slice(2),be="__reactFiber$"+Ct,rr="__reactProps$"+Ct,rn="__reactContainer$"+Ct,Qo="__reactEvents$"+Ct,y0="__reactListeners$"+Ct,w0="__reactHandles$"+Ct;function Rn(e){var n=e[be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rn]||t[be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Zs(e);e!==null;){if(t=e[be])return t;e=Zs(e)}return n}e=t,t=e.parentNode}return null}function pr(e){return e=e[be]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ci(e){return e[rr]||null}var bo=[],nt=-1;function kn(e){return{current:e}}function V(e){0>nt||(e.current=bo[nt],bo[nt]=null,nt--)}function H(e,n){nt++,bo[nt]=e.current,e.current=n}var Dn={},ae=kn(Dn),ve=kn(!1),Fn=Dn;function gt(e,n){var t=e.type.contextTypes;if(!t)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function ri(){V(ve),V(ae)}function Js(e,n,t){if(ae.current!==Dn)throw Error(E(168));H(ae,n),H(ve,t)}function rc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(E(108,rd(e)||"Unknown",i));return G({},t,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,Fn=ae.current,H(ae,e),H(ve,ve.current),!0}function eu(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=rc(e,n,Fn),r.__reactInternalMemoizedMergedChildContext=e,V(ve),V(ae),H(ae,e)):V(ve),H(ve,t)}var qe=null,Di=!1,to=!1;function ic(e){qe===null?qe=[e]:qe.push(e)}function S0(e){Di=!0,ic(e)}function xn(){if(!to&&qe!==null){to=!0;var e=0,n=A;try{var t=qe;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}qe=null,Di=!1}catch(i){throw qe!==null&&(qe=qe.slice(e+1)),Pa(_l,xn),i}finally{A=n,to=!1}}return null}var tt=[],rt=0,oi=null,li=0,Pe=[],_e=0,Un=null,Je=1,en="";function _n(e,n){tt[rt++]=li,tt[rt++]=oi,oi=e,li=n}function oc(e,n,t){Pe[_e++]=Je,Pe[_e++]=en,Pe[_e++]=Un,Un=e;var r=Je;e=en;var i=32-$e(r)-1;r&=~(1<<i),t+=1;var o=32-$e(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Je=1<<32-$e(n)+i|t<<i|r,en=o+e}else Je=1<<o|t<<i|r,en=e}function Al(e){e.return!==null&&(_n(e,1),oc(e,1,0))}function Hl(e){for(;e===oi;)oi=tt[--rt],tt[rt]=null,li=tt[--rt],tt[rt]=null;for(;e===Un;)Un=Pe[--_e],Pe[_e]=null,en=Pe[--_e],Pe[_e]=null,Je=Pe[--_e],Pe[_e]=null}var Ce=null,Ee=null,W=!1,He=null;function lc(e,n){var t=Re(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function nu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ce=e,Ee=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ce=e,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Un!==null?{id:Je,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Re(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ce=e,Ee=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ko(e){if(W){var n=Ee;if(n){var t=n;if(!nu(e,n)){if(Go(e))throw Error(E(418));n=yn(t.nextSibling);var r=Ce;n&&nu(e,n)?lc(r,t):(e.flags=e.flags&-4097|2,W=!1,Ce=e)}}else{if(Go(e))throw Error(E(418));e.flags=e.flags&-4097|2,W=!1,Ce=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Ir(e){if(e!==Ce)return!1;if(!W)return tu(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wo(e.type,e.memoizedProps)),n&&(n=Ee)){if(Go(e))throw sc(),Error(E(418));for(;n;)lc(e,n),n=yn(n.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ee=yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ee=null}}else Ee=Ce?yn(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=Ee;e;)e=yn(e.nextSibling)}function mt(){Ee=Ce=null,W=!1}function $l(e){He===null?He=[e]:He.push(e)}var T0=sn.ReactCurrentBatchConfig;function _t(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Pr(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ru(e){var n=e._init;return n(e._payload)}function uc(e){function n(c,a){if(e){var d=c.deletions;d===null?(c.deletions=[a],c.flags|=16):d.push(a)}}function t(c,a){if(!e)return null;for(;a!==null;)n(c,a),a=a.sibling;return null}function r(c,a){for(c=new Map;a!==null;)a.key!==null?c.set(a.key,a):c.set(a.index,a),a=a.sibling;return c}function i(c,a){return c=En(c,a),c.index=0,c.sibling=null,c}function o(c,a,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<a?(c.flags|=2,a):d):(c.flags|=2,a)):(c.flags|=1048576,a)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function s(c,a,d,y){return a===null||a.tag!==6?(a=ao(d,c.mode,y),a.return=c,a):(a=i(a,d),a.return=c,a)}function u(c,a,d,y){var S=d.type;return S===Xn?g(c,a,d.props.children,y,d.key):a!==null&&(a.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&ru(S)===a.type)?(y=i(a,d.props),y.ref=_t(c,a,d),y.return=c,y):(y=br(d.type,d.key,d.props,null,c.mode,y),y.ref=_t(c,a,d),y.return=c,y)}function f(c,a,d,y){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=co(d,c.mode,y),a.return=c,a):(a=i(a,d.children||[]),a.return=c,a)}function g(c,a,d,y,S){return a===null||a.tag!==7?(a=jn(d,c.mode,y,S),a.return=c,a):(a=i(a,d),a.return=c,a)}function m(c,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=ao(""+a,c.mode,d),a.return=c,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case yr:return d=br(a.type,a.key,a.props,null,c.mode,d),d.ref=_t(c,null,a),d.return=c,d;case Yn:return a=co(a,c.mode,d),a.return=c,a;case an:var y=a._init;return m(c,y(a._payload),d)}if(Mt(a)||Ot(a))return a=jn(a,c.mode,d,null),a.return=c,a;Pr(c,a)}return null}function h(c,a,d,y){var S=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:s(c,a,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return d.key===S?u(c,a,d,y):null;case Yn:return d.key===S?f(c,a,d,y):null;case an:return S=d._init,h(c,a,S(d._payload),y)}if(Mt(d)||Ot(d))return S!==null?null:g(c,a,d,y,null);Pr(c,d)}return null}function v(c,a,d,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(d)||null,s(a,c,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yr:return c=c.get(y.key===null?d:y.key)||null,u(a,c,y,S);case Yn:return c=c.get(y.key===null?d:y.key)||null,f(a,c,y,S);case an:var D=y._init;return v(c,a,d,D(y._payload),S)}if(Mt(y)||Ot(y))return c=c.get(d)||null,g(a,c,y,S,null);Pr(a,y)}return null}function w(c,a,d,y){for(var S=null,D=null,O=a,C=a=0,_=null;O!==null&&C<d.length;C++){O.index>C?(_=O,O=null):_=O.sibling;var I=h(c,O,d[C],y);if(I===null){O===null&&(O=_);break}e&&O&&I.alternate===null&&n(c,O),a=o(I,a,C),D===null?S=I:D.sibling=I,D=I,O=_}if(C===d.length)return t(c,O),W&&_n(c,C),S;if(O===null){for(;C<d.length;C++)O=m(c,d[C],y),O!==null&&(a=o(O,a,C),D===null?S=O:D.sibling=O,D=O);return W&&_n(c,C),S}for(O=r(c,O);C<d.length;C++)_=v(O,c,C,d[C],y),_!==null&&(e&&_.alternate!==null&&O.delete(_.key===null?C:_.key),a=o(_,a,C),D===null?S=_:D.sibling=_,D=_);return e&&O.forEach(function(X){return n(c,X)}),W&&_n(c,C),S}function p(c,a,d,y){var S=Ot(d);if(typeof S!="function")throw Error(E(150));if(d=S.call(d),d==null)throw Error(E(151));for(var D=S=null,O=a,C=a=0,_=null,I=d.next();O!==null&&!I.done;C++,I=d.next()){O.index>C?(_=O,O=null):_=O.sibling;var X=h(c,O,I.value,y);if(X===null){O===null&&(O=_);break}e&&O&&X.alternate===null&&n(c,O),a=o(X,a,C),D===null?S=X:D.sibling=X,D=X,O=_}if(I.done)return t(c,O),W&&_n(c,C),S;if(O===null){for(;!I.done;C++,I=d.next())I=m(c,I.value,y),I!==null&&(a=o(I,a,C),D===null?S=I:D.sibling=I,D=I);return W&&_n(c,C),S}for(O=r(c,O);!I.done;C++,I=d.next())I=v(O,c,C,I.value,y),I!==null&&(e&&I.alternate!==null&&O.delete(I.key===null?C:I.key),a=o(I,a,C),D===null?S=I:D.sibling=I,D=I);return e&&O.forEach(function(je){return n(c,je)}),W&&_n(c,C),S}function T(c,a,d,y){if(typeof d=="object"&&d!==null&&d.type===Xn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:e:{for(var S=d.key,D=a;D!==null;){if(D.key===S){if(S=d.type,S===Xn){if(D.tag===7){t(c,D.sibling),a=i(D,d.props.children),a.return=c,c=a;break e}}else if(D.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===an&&ru(S)===D.type){t(c,D.sibling),a=i(D,d.props),a.ref=_t(c,D,d),a.return=c,c=a;break e}t(c,D);break}else n(c,D);D=D.sibling}d.type===Xn?(a=jn(d.props.children,c.mode,y,d.key),a.return=c,c=a):(y=br(d.type,d.key,d.props,null,c.mode,y),y.ref=_t(c,a,d),y.return=c,c=y)}return l(c);case Yn:e:{for(D=d.key;a!==null;){if(a.key===D)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){t(c,a.sibling),a=i(a,d.children||[]),a.return=c,c=a;break e}else{t(c,a);break}else n(c,a);a=a.sibling}a=co(d,c.mode,y),a.return=c,c=a}return l(c);case an:return D=d._init,T(c,a,D(d._payload),y)}if(Mt(d))return w(c,a,d,y);if(Ot(d))return p(c,a,d,y);Pr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(t(c,a.sibling),a=i(a,d),a.return=c,c=a):(t(c,a),a=ao(d,c.mode,y),a.return=c,c=a),l(c)):t(c,a)}return T}var vt=uc(!0),ac=uc(!1),si=kn(null),ui=null,it=null,Vl=null;function Wl(){Vl=it=ui=null}function Bl(e){var n=si.current;V(si),e._currentValue=n}function Yo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ft(e,n){ui=e,Vl=it=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(Vl!==e)if(e={context:e,memoizedValue:n,next:null},it===null){if(ui===null)throw Error(E(308));it=e,ui.dependencies={lanes:0,firstContext:e}}else it=it.next=e;return n}var Ln=null;function Ql(e){Ln===null?Ln=[e]:Ln.push(e)}function cc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ql(n)):(t.next=i.next,i.next=t),n.interleaved=t,on(e,r)}function on(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,on(e,t)}return i=r.interleaved,i===null?(n.next=n,Ql(r)):(n.next=i.next,i.next=n),r.interleaved=n,on(e,t)}function Hr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nl(e,t)}}function iu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ai(e,n,t,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,f=u.next;u.next=null,l===null?o=f:l.next=f,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=f:s.next=f,g.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,g=f=u=null,s=o;do{var h=s.lane,v=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,p=s;switch(h=n,v=t,p.tag){case 1:if(w=p.payload,typeof w=="function"){m=w.call(v,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=p.payload,h=typeof w=="function"?w.call(v,m,h):w,h==null)break e;m=G({},m,h);break e;case 2:cn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(f=g=v,u=m):g=g.next=v,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=m),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Hn|=l,e.lanes=l,e.memoizedState=m}}function ou(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var hr={},Ke=kn(hr),ir=kn(hr),or=kn(hr);function Mn(e){if(e===hr)throw Error(E(174));return e}function Gl(e,n){switch(H(or,n),H(ir,e),H(Ke,hr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Po(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Po(n,e)}V(Ke),H(Ke,n)}function yt(){V(Ke),V(ir),V(or)}function dc(e){Mn(or.current);var n=Mn(Ke.current),t=Po(n,e.type);n!==t&&(H(ir,e),H(Ke,t))}function Kl(e){ir.current===e&&(V(Ke),V(ir))}var Q=kn(0);function ci(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ro=[];function Yl(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var $r=sn.ReactCurrentDispatcher,io=sn.ReactCurrentBatchConfig,An=0,b=null,J=null,ne=null,fi=!1,Vt=!1,lr=0,E0=0;function le(){throw Error(E(321))}function Xl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function ql(e,n,t,r,i,o){if(An=o,b=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$r.current=e===null||e.memoizedState===null?k0:x0,e=t(r,i),Vt){o=0;do{if(Vt=!1,lr=0,25<=o)throw Error(E(301));o+=1,ne=J=null,n.updateQueue=null,$r.current=I0,e=t(r,i)}while(Vt)}if($r.current=di,n=J!==null&&J.next!==null,An=0,ne=J=b=null,fi=!1,n)throw Error(E(300));return e}function Zl(){var e=lr!==0;return lr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?b.memoizedState=ne=e:ne=ne.next=e,ne}function ze(){if(J===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=ne===null?b.memoizedState:ne.next;if(n!==null)ne=n,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ne===null?b.memoizedState=ne=e:ne=ne.next=e}return ne}function sr(e,n){return typeof n=="function"?n(e):n}function oo(e){var n=ze(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,f=o;do{var g=f.lane;if((An&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,b.lanes|=g,Hn|=g}f=f.next}while(f!==null&&f!==o);u===null?l=r:u.next=s,We(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,b.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function lo(e){var n=ze(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);We(o,n.memoizedState)||(me=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function pc(){}function hc(e,n){var t=b,r=ze(),i=n(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,Jl(vc.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,ur(9,mc.bind(null,t,r,i,n),void 0,null),te===null)throw Error(E(349));An&30||gc(t,n,i)}return i}function gc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=b.updateQueue,n===null?(n={lastEffect:null,stores:null},b.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function mc(e,n,t,r){n.value=t,n.getSnapshot=r,yc(n)&&wc(e)}function vc(e,n,t){return t(function(){yc(n)&&wc(e)})}function yc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function wc(e){var n=on(e,1);n!==null&&Ve(n,e,1,-1)}function lu(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},n.queue=e,e=e.dispatch=O0.bind(null,b,e),[n.memoizedState,e]}function ur(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=b.updateQueue,n===null?(n={lastEffect:null,stores:null},b.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Sc(){return ze().memoizedState}function Vr(e,n,t,r){var i=Qe();b.flags|=e,i.memoizedState=ur(1|n,t,void 0,r===void 0?null:r)}function Oi(e,n,t,r){var i=ze();r=r===void 0?null:r;var o=void 0;if(J!==null){var l=J.memoizedState;if(o=l.destroy,r!==null&&Xl(r,l.deps)){i.memoizedState=ur(n,t,o,r);return}}b.flags|=e,i.memoizedState=ur(1|n,t,o,r)}function su(e,n){return Vr(8390656,8,e,n)}function Jl(e,n){return Oi(2048,8,e,n)}function Tc(e,n){return Oi(4,2,e,n)}function Ec(e,n){return Oi(4,4,e,n)}function Cc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dc(e,n,t){return t=t!=null?t.concat([e]):null,Oi(4,4,Cc.bind(null,n,e),t)}function es(){}function Oc(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Xl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function kc(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Xl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function xc(e,n,t){return An&21?(We(t,n)||(t=Ra(),b.lanes|=t,Hn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function C0(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=io.transition;io.transition={};try{e(!1),n()}finally{A=t,io.transition=r}}function Ic(){return ze().memoizedState}function D0(e,n,t){var r=Tn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Pc(e))_c(n,t);else if(t=cc(e,n,t,r),t!==null){var i=de();Ve(t,e,r,i),Nc(t,n,r)}}function O0(e,n,t){var r=Tn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))_c(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,s=o(l,t);if(i.hasEagerState=!0,i.eagerState=s,We(s,l)){var u=n.interleaved;u===null?(i.next=i,Ql(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=cc(e,n,i,r),t!==null&&(i=de(),Ve(t,e,r,i),Nc(t,n,r))}}function Pc(e){var n=e.alternate;return e===b||n!==null&&n===b}function _c(e,n){Vt=fi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Nc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nl(e,t)}}var di={readContext:Me,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},k0={readContext:Me,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:su,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Vr(4194308,4,Cc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Vr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Vr(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=D0.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:lu,useDebugValue:es,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=lu(!1),n=e[0];return e=C0.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=b,i=Qe();if(W){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),te===null)throw Error(E(349));An&30||gc(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,su(vc.bind(null,r,o,e),[e]),r.flags|=2048,ur(9,mc.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Qe(),n=te.identifierPrefix;if(W){var t=en,r=Je;t=(r&~(1<<32-$e(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=E0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},x0={readContext:Me,useCallback:Oc,useContext:Me,useEffect:Jl,useImperativeHandle:Dc,useInsertionEffect:Tc,useLayoutEffect:Ec,useMemo:kc,useReducer:oo,useRef:Sc,useState:function(){return oo(sr)},useDebugValue:es,useDeferredValue:function(e){var n=ze();return xc(n,J.memoizedState,e)},useTransition:function(){var e=oo(sr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:pc,useSyncExternalStore:hc,useId:Ic,unstable_isNewReconciler:!1},I0={readContext:Me,useCallback:Oc,useContext:Me,useEffect:Jl,useImperativeHandle:Dc,useInsertionEffect:Tc,useLayoutEffect:Ec,useMemo:kc,useReducer:lo,useRef:Sc,useState:function(){return lo(sr)},useDebugValue:es,useDeferredValue:function(e){var n=ze();return J===null?n.memoizedState=e:xc(n,J.memoizedState,e)},useTransition:function(){var e=lo(sr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:pc,useSyncExternalStore:hc,useId:Ic,unstable_isNewReconciler:!1};function Ue(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ki={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=de(),i=Tn(e),o=nn(r,i);o.payload=n,t!=null&&(o.callback=t),n=wn(e,o,i),n!==null&&(Ve(n,e,i,r),Hr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=de(),i=Tn(e),o=nn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=wn(e,o,i),n!==null&&(Ve(n,e,i,r),Hr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=de(),r=Tn(e),i=nn(t,r);i.tag=2,n!=null&&(i.callback=n),n=wn(e,i,r),n!==null&&(Ve(n,e,r,t),Hr(n,e,r))}};function uu(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!er(t,r)||!er(i,o):!0}function Rc(e,n,t){var r=!1,i=Dn,o=n.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=ye(n)?Fn:ae.current,r=n.contextTypes,o=(r=r!=null)?gt(e,i):Dn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ki,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function au(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ki.enqueueReplaceState(n,n.state,null)}function qo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},bl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=ye(n)?Fn:ae.current,i.context=gt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Xo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ki.enqueueReplaceState(i,i.state,null),ai(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wt(e,n){try{var t="",r=n;do t+=td(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function so(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Zo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){hi||(hi=!0,ul=r),Zo(e,n)},t}function Mc(e,n,t){t=nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Zo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Zo(e,n),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function cu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new P0;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=W0.bind(null,e,n,t),n.then(e,e))}function fu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function du(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,wn(t,n,1))),t.lanes|=1),e)}var _0=sn.ReactCurrentOwner,me=!1;function fe(e,n,t,r){n.child=e===null?ac(n,null,t,r):vt(n,e.child,t,r)}function pu(e,n,t,r,i){t=t.render;var o=n.ref;return ft(n,i),r=ql(e,n,t,r,o,i),t=Zl(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ln(e,n,i)):(W&&t&&Al(n),n.flags|=1,fe(e,n,r,i),n.child)}function hu(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!us(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,zc(e,n,o,r,i)):(e=br(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:er,t(l,r)&&e.ref===n.ref)return ln(e,n,i)}return n.flags|=1,e=En(o,r),e.ref=n.ref,e.return=n,n.child=e}function zc(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(er(o,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,ln(e,n,i)}return Jo(e,n,t,r,i)}function jc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(lt,Te),Te|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,H(lt,Te),Te|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,H(lt,Te),Te|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,H(lt,Te),Te|=r;return fe(e,n,i,t),n.child}function Fc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Jo(e,n,t,r,i){var o=ye(t)?Fn:ae.current;return o=gt(n,o),ft(n,i),t=ql(e,n,t,r,o,i),r=Zl(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,ln(e,n,i)):(W&&r&&Al(n),n.flags|=1,fe(e,n,t,i),n.child)}function gu(e,n,t,r,i){if(ye(t)){var o=!0;ii(n)}else o=!1;if(ft(n,i),n.stateNode===null)Wr(e,n),Rc(n,t,r),qo(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var u=l.context,f=t.contextType;typeof f=="object"&&f!==null?f=Me(f):(f=ye(t)?Fn:ae.current,f=gt(n,f));var g=t.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==f)&&au(n,l,r,f),cn=!1;var h=n.memoizedState;l.state=h,ai(n,r,l,i),u=n.memoizedState,s!==r||h!==u||ve.current||cn?(typeof g=="function"&&(Xo(n,t,g,r),u=n.memoizedState),(s=cn||uu(n,t,s,r,h,u,f))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=f,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,fc(e,n),s=n.memoizedProps,f=n.type===n.elementType?s:Ue(n.type,s),l.props=f,m=n.pendingProps,h=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=ye(t)?Fn:ae.current,u=gt(n,u));var v=t.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==u)&&au(n,l,r,u),cn=!1,h=n.memoizedState,l.state=h,ai(n,r,l,i);var w=n.memoizedState;s!==m||h!==w||ve.current||cn?(typeof v=="function"&&(Xo(n,t,v,r),w=n.memoizedState),(f=cn||uu(n,t,f,r,h,w,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),l.props=r,l.state=w,l.context=u,r=f):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return el(e,n,t,r,o,i)}function el(e,n,t,r,i,o){Fc(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&eu(n,t,!1),ln(e,n,o);r=n.stateNode,_0.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=vt(n,e.child,null,o),n.child=vt(n,null,s,o)):fe(e,n,s,o),n.memoizedState=r.state,i&&eu(n,t,!0),n.child}function Uc(e){var n=e.stateNode;n.pendingContext?Js(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Js(e,n.context,!1),Gl(e,n.containerInfo)}function mu(e,n,t,r,i){return mt(),$l(i),n.flags|=256,fe(e,n,t,r),n.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,n,t){var r=n.pendingProps,i=Q.current,o=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Q,i&1),e===null)return Ko(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Pi(l,r,0,null),e=jn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=tl(t),n.memoizedState=nl,e):ns(n,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return N0(e,n,l,r,s,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=En(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=En(s,o):(o=jn(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?tl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=nl,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ns(e,n){return n=Pi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _r(e,n,t,r){return r!==null&&$l(r),vt(n,e.child,null,t),e=ns(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function N0(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=so(Error(E(422))),_r(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Pi({mode:"visible",children:r.children},i,0,null),o=jn(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&vt(n,e.child,null,l),n.child.memoizedState=tl(l),n.memoizedState=nl,o);if(!(n.mode&1))return _r(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=so(o,r,void 0),_r(e,n,l,r)}if(s=(l&e.childLanes)!==0,me||s){if(r=te,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,on(e,i),Ve(r,e,i,-1))}return ss(),r=so(Error(E(421))),_r(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=B0.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ee=yn(i.nextSibling),Ce=n,W=!0,He=null,e!==null&&(Pe[_e++]=Je,Pe[_e++]=en,Pe[_e++]=Un,Je=e.id,en=e.overflow,Un=n),n=ns(n,r.children),n.flags|=4096,n)}function vu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yo(e.return,n,t)}function uo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Hc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,n,r.children,t),r=Q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vu(e,t,n);else if(e.tag===19)vu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Q,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ci(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),uo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ci(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}uo(n,!0,t,null,o);break;case"together":uo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Hn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=En(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=En(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function R0(e,n,t){switch(n.tag){case 3:Uc(n),mt();break;case 5:dc(n);break;case 1:ye(n.type)&&ii(n);break;case 4:Gl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;H(si,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(H(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?Ac(e,n,t):(H(Q,Q.current&1),e=ln(e,n,t),e!==null?e.sibling:null);H(Q,Q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Hc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Q,Q.current),r)break;return null;case 22:case 23:return n.lanes=0,jc(e,n,t)}return ln(e,n,t)}var $c,rl,Vc,Wc;$c=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};rl=function(){};Vc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Mn(Ke.current);var o=null;switch(t){case"input":i=Oo(e,i),r=Oo(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Io(e,i),r=Io(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ti)}_o(t,r);var l;t=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Gt.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var u=r[f];if(s=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(f,t)),t=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Gt.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&$("scroll",e),o||s===u||(o=[])):(o=o||[]).push(f,u))}t&&(o=o||[]).push("style",t);var f=o;(n.updateQueue=f)&&(n.flags|=4)}};Wc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Nt(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function L0(e,n,t){var r=n.pendingProps;switch(Hl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ye(n.type)&&ri(),se(n),null;case 3:return r=n.stateNode,yt(),V(ve),V(ae),Yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,He!==null&&(fl(He),He=null))),rl(e,n),se(n),null;case 5:Kl(n);var i=Mn(or.current);if(t=n.type,e!==null&&n.stateNode!=null)Vc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return se(n),null}if(e=Mn(Ke.current),Ir(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[be]=n,r[rr]=o,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<jt.length;i++)$(jt[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":ks(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Is(r,o),$("invalid",r)}_o(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,s,e),i=["children",""+s]):Gt.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&$("scroll",r)}switch(t){case"input":wr(r),xs(r,o,!0);break;case"textarea":wr(r),Ps(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ti)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=va(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[be]=n,e[rr]=r,$c(e,n,!1,!1),n.stateNode=e;e:{switch(l=No(t,r),t){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<jt.length;i++)$(jt[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":ks(e,r),i=Oo(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),$("invalid",e);break;case"textarea":Is(e,r),i=Io(e,r),$("invalid",e);break;default:i=r}_o(t,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Sa(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ya(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Kt(e,u):typeof u=="number"&&Kt(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gt.hasOwnProperty(o)?u!=null&&o==="onScroll"&&$("scroll",e):u!=null&&Ol(e,o,u,l))}switch(t){case"input":wr(e),xs(e,r,!1);break;case"textarea":wr(e),Ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?st(e,!!r.multiple,o,!1):r.defaultValue!=null&&st(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ti)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Wc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Mn(or.current),Mn(Ke.current),Ir(n)){if(r=n.stateNode,t=n.memoizedProps,r[be]=n,(o=r.nodeValue!==t)&&(e=Ce,e!==null))switch(e.tag){case 3:xr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[be]=n,n.stateNode=r}return se(n),null;case 13:if(V(Q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ee!==null&&n.mode&1&&!(n.flags&128))sc(),mt(),n.flags|=98560,o=!1;else if(o=Ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[be]=n}else mt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),o=!1}else He!==null&&(fl(He),He=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?ee===0&&(ee=3):ss())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return yt(),rl(e,n),e===null&&nr(n.stateNode.containerInfo),se(n),null;case 10:return Bl(n.type._context),se(n),null;case 17:return ye(n.type)&&ri(),se(n),null;case 19:if(V(Q),o=n.memoizedState,o===null)return se(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Nt(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ci(e),l!==null){for(n.flags|=128,Nt(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return H(Q,Q.current&1|2),n.child}e=e.sibling}o.tail!==null&&Y()>St&&(n.flags|=128,r=!0,Nt(o,!1),n.lanes=4194304)}else{if(!r)if(e=ci(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Nt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!W)return se(n),null}else 2*Y()-o.renderingStartTime>St&&t!==1073741824&&(n.flags|=128,r=!0,Nt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Y(),n.sibling=null,t=Q.current,H(Q,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return ls(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Te&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function M0(e,n){switch(Hl(n),n.tag){case 1:return ye(n.type)&&ri(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(),V(ve),V(ae),Yl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Kl(n),null;case 13:if(V(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));mt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(Q),null;case 4:return yt(),null;case 10:return Bl(n.type._context),null;case 22:case 23:return ls(),null;case 24:return null;default:return null}}var Nr=!1,ue=!1,z0=typeof WeakSet=="function"?WeakSet:Set,x=null;function ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function il(e,n,t){try{t()}catch(r){K(e,n,r)}}var yu=!1;function j0(e,n){if($o=Jr,e=Ka(),Ul(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,s=-1,u=-1,f=0,g=0,m=e,h=null;n:for(;;){for(var v;m!==t||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break n;if(h===t&&++f===i&&(s=l),h===o&&++g===r&&(u=l),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vo={focusedElem:e,selectionRange:t},Jr=!1,x=n;x!==null;)if(n=x,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,x=e;else for(;x!==null;){n=x;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var p=w.memoizedProps,T=w.memoizedState,c=n.stateNode,a=c.getSnapshotBeforeUpdate(n.elementType===n.type?p:Ue(n.type,p),T);c.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){K(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,x=e;break}x=n.return}return w=yu,yu=!1,w}function Wt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&il(n,t,o)}i=i.next}while(i!==r)}}function xi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ol(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Bc(e){var n=e.alternate;n!==null&&(e.alternate=null,Bc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[be],delete n[rr],delete n[Qo],delete n[y0],delete n[w0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qc(e){return e.tag===5||e.tag===3||e.tag===4}function wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ti));else if(r!==4&&(e=e.child,e!==null))for(ll(e,n,t),e=e.sibling;e!==null;)ll(e,n,t),e=e.sibling}function sl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sl(e,n,t),e=e.sibling;e!==null;)sl(e,n,t),e=e.sibling}var re=null,Ae=!1;function un(e,n,t){for(t=t.child;t!==null;)bc(e,n,t),t=t.sibling}function bc(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(wi,t)}catch{}switch(t.tag){case 5:ue||ot(t,n);case 6:var r=re,i=Ae;re=null,un(e,n,t),re=r,Ae=i,re!==null&&(Ae?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Ae?(e=re,t=t.stateNode,e.nodeType===8?no(e.parentNode,t):e.nodeType===1&&no(e,t),Zt(e)):no(re,t.stateNode));break;case 4:r=re,i=Ae,re=t.stateNode.containerInfo,Ae=!0,un(e,n,t),re=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&il(t,n,l),i=i.next}while(i!==r)}un(e,n,t);break;case 1:if(!ue&&(ot(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){K(t,n,s)}un(e,n,t);break;case 21:un(e,n,t);break;case 22:t.mode&1?(ue=(r=ue)||t.memoizedState!==null,un(e,n,t),ue=r):un(e,n,t);break;default:un(e,n,t)}}function Su(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new z0),n.forEach(function(r){var i=Q0.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Fe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Ae=!1;break e;case 3:re=s.stateNode.containerInfo,Ae=!0;break e;case 4:re=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(re===null)throw Error(E(160));bc(o,l,i),re=null,Ae=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){K(i,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gc(n,e),n=n.sibling}function Gc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(n,e),Be(e),r&4){try{Wt(3,e,e.return),xi(3,e)}catch(p){K(e,e.return,p)}try{Wt(5,e,e.return)}catch(p){K(e,e.return,p)}}break;case 1:Fe(n,e),Be(e),r&512&&t!==null&&ot(t,t.return);break;case 5:if(Fe(n,e),Be(e),r&512&&t!==null&&ot(t,t.return),e.flags&32){var i=e.stateNode;try{Kt(i,"")}catch(p){K(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ga(i,o),No(s,l);var f=No(s,o);for(l=0;l<u.length;l+=2){var g=u[l],m=u[l+1];g==="style"?Sa(i,m):g==="dangerouslySetInnerHTML"?ya(i,m):g==="children"?Kt(i,m):Ol(i,g,m,f)}switch(s){case"input":ko(i,o);break;case"textarea":ma(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?st(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?st(i,!!o.multiple,o.defaultValue,!0):st(i,!!o.multiple,o.multiple?[]:"",!1))}i[rr]=o}catch(p){K(e,e.return,p)}}break;case 6:if(Fe(n,e),Be(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){K(e,e.return,p)}}break;case 3:if(Fe(n,e),Be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Zt(n.containerInfo)}catch(p){K(e,e.return,p)}break;case 4:Fe(n,e),Be(e);break;case 13:Fe(n,e),Be(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(is=Y())),r&4&&Su(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(ue=(f=ue)||g,Fe(n,e),ue=f):Fe(n,e),Be(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(x=e,g=e.child;g!==null;){for(m=x=g;x!==null;){switch(h=x,v=h.child,h.tag){case 0:case 11:case 14:case 15:Wt(4,h,h.return);break;case 1:ot(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(p){K(r,t,p)}}break;case 5:ot(h,h.return);break;case 22:if(h.memoizedState!==null){Eu(m);continue}}v!==null?(v.return=h,x=v):Eu(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=wa("display",l))}catch(p){K(e,e.return,p)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(p){K(e,e.return,p)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Fe(n,e),Be(e),r&4&&Su(e);break;case 21:break;default:Fe(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Qc(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kt(i,""),r.flags&=-33);var o=wu(e);sl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=wu(e);ll(e,s,l);break;default:throw Error(E(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function F0(e,n,t){x=e,Kc(e)}function Kc(e,n,t){for(var r=(e.mode&1)!==0;x!==null;){var i=x,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Nr;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ue;s=Nr;var f=ue;if(Nr=l,(ue=u)&&!f)for(x=i;x!==null;)l=x,u=l.child,l.tag===22&&l.memoizedState!==null?Cu(i):u!==null?(u.return=l,x=u):Cu(i);for(;o!==null;)x=o,Kc(o),o=o.sibling;x=i,Nr=s,ue=f}Tu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,x=o):Tu(e)}}function Tu(e){for(;x!==null;){var n=x;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ue||xi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ue)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ue(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ou(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ou(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Zt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ue||n.flags&512&&ol(n)}catch(h){K(n,n.return,h)}}if(n===e){x=null;break}if(t=n.sibling,t!==null){t.return=n.return,x=t;break}x=n.return}}function Eu(e){for(;x!==null;){var n=x;if(n===e){x=null;break}var t=n.sibling;if(t!==null){t.return=n.return,x=t;break}x=n.return}}function Cu(e){for(;x!==null;){var n=x;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{xi(4,n)}catch(u){K(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){K(n,i,u)}}var o=n.return;try{ol(n)}catch(u){K(n,o,u)}break;case 5:var l=n.return;try{ol(n)}catch(u){K(n,l,u)}}}catch(u){K(n,n.return,u)}if(n===e){x=null;break}var s=n.sibling;if(s!==null){s.return=n.return,x=s;break}x=n.return}}var U0=Math.ceil,pi=sn.ReactCurrentDispatcher,ts=sn.ReactCurrentOwner,Le=sn.ReactCurrentBatchConfig,F=0,te=null,Z=null,ie=0,Te=0,lt=kn(0),ee=0,ar=null,Hn=0,Ii=0,rs=0,Bt=null,ge=null,is=0,St=1/0,Xe=null,hi=!1,ul=null,Sn=null,Rr=!1,hn=null,gi=0,Qt=0,al=null,Br=-1,Qr=0;function de(){return F&6?Y():Br!==-1?Br:Br=Y()}function Tn(e){return e.mode&1?F&2&&ie!==0?ie&-ie:T0.transition!==null?(Qr===0&&(Qr=Ra()),Qr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Aa(e.type)),e):1}function Ve(e,n,t,r){if(50<Qt)throw Qt=0,al=null,Error(E(185));fr(e,t,r),(!(F&2)||e!==te)&&(e===te&&(!(F&2)&&(Ii|=t),ee===4&&dn(e,ie)),we(e,r),t===1&&F===0&&!(n.mode&1)&&(St=Y()+500,Di&&xn()))}function we(e,n){var t=e.callbackNode;Td(e,n);var r=Zr(e,e===te?ie:0);if(r===0)t!==null&&Rs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Rs(t),n===1)e.tag===0?S0(Du.bind(null,e)):ic(Du.bind(null,e)),m0(function(){!(F&6)&&xn()}),t=null;else{switch(La(r)){case 1:t=_l;break;case 4:t=_a;break;case 16:t=qr;break;case 536870912:t=Na;break;default:t=qr}t=tf(t,Yc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yc(e,n){if(Br=-1,Qr=0,F&6)throw Error(E(327));var t=e.callbackNode;if(dt()&&e.callbackNode!==t)return null;var r=Zr(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=mi(e,r);else{n=r;var i=F;F|=2;var o=qc();(te!==e||ie!==n)&&(Xe=null,St=Y()+500,zn(e,n));do try{$0();break}catch(s){Xc(e,s)}while(!0);Wl(),pi.current=o,F=i,Z!==null?n=0:(te=null,ie=0,n=ee)}if(n!==0){if(n===2&&(i=jo(e),i!==0&&(r=i,n=cl(e,i))),n===1)throw t=ar,zn(e,0),dn(e,r),we(e,Y()),t;if(n===6)dn(e,r);else{if(i=e.current.alternate,!(r&30)&&!A0(i)&&(n=mi(e,r),n===2&&(o=jo(e),o!==0&&(r=o,n=cl(e,o))),n===1))throw t=ar,zn(e,0),dn(e,r),we(e,Y()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:Nn(e,ge,Xe);break;case 3:if(dn(e,r),(r&130023424)===r&&(n=is+500-Y(),10<n)){if(Zr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bo(Nn.bind(null,e,ge,Xe),n);break}Nn(e,ge,Xe);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-$e(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U0(r/1960))-r,10<r){e.timeoutHandle=Bo(Nn.bind(null,e,ge,Xe),r);break}Nn(e,ge,Xe);break;case 5:Nn(e,ge,Xe);break;default:throw Error(E(329))}}}return we(e,Y()),e.callbackNode===t?Yc.bind(null,e):null}function cl(e,n){var t=Bt;return e.current.memoizedState.isDehydrated&&(zn(e,n).flags|=256),e=mi(e,n),e!==2&&(n=ge,ge=t,n!==null&&fl(n)),e}function fl(e){ge===null?ge=e:ge.push.apply(ge,e)}function A0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~rs,n&=~Ii,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-$e(n),r=1<<t;e[t]=-1,n&=~r}}function Du(e){if(F&6)throw Error(E(327));dt();var n=Zr(e,0);if(!(n&1))return we(e,Y()),null;var t=mi(e,n);if(e.tag!==0&&t===2){var r=jo(e);r!==0&&(n=r,t=cl(e,r))}if(t===1)throw t=ar,zn(e,0),dn(e,n),we(e,Y()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e,ge,Xe),we(e,Y()),null}function os(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(St=Y()+500,Di&&xn())}}function $n(e){hn!==null&&hn.tag===0&&!(F&6)&&dt();var n=F;F|=1;var t=Le.transition,r=A;try{if(Le.transition=null,A=1,e)return e()}finally{A=r,Le.transition=t,F=n,!(F&6)&&xn()}}function ls(){Te=lt.current,V(lt)}function zn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,g0(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(Hl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ri();break;case 3:yt(),V(ve),V(ae),Yl();break;case 5:Kl(r);break;case 4:yt();break;case 13:V(Q);break;case 19:V(Q);break;case 10:Bl(r.type._context);break;case 22:case 23:ls()}t=t.return}if(te=e,Z=e=En(e.current,null),ie=Te=n,ee=0,ar=null,rs=Ii=Hn=0,ge=Bt=null,Ln!==null){for(n=0;n<Ln.length;n++)if(t=Ln[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Ln=null}return e}function Xc(e,n){do{var t=Z;try{if(Wl(),$r.current=di,fi){for(var r=b.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fi=!1}if(An=0,ne=J=b=null,Vt=!1,lr=0,ts.current=null,t===null||t.return===null){ee=1,ar=n,Z=null;break}e:{var o=e,l=t.return,s=t,u=n;if(n=ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=fu(l);if(v!==null){v.flags&=-257,du(v,l,s,o,n),v.mode&1&&cu(o,f,n),n=v,u=f;var w=n.updateQueue;if(w===null){var p=new Set;p.add(u),n.updateQueue=p}else w.add(u);break e}else{if(!(n&1)){cu(o,f,n),ss();break e}u=Error(E(426))}}else if(W&&s.mode&1){var T=fu(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),du(T,l,s,o,n),$l(wt(u,s));break e}}o=u=wt(u,s),ee!==4&&(ee=2),Bt===null?Bt=[o]:Bt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=Lc(o,u,n);iu(o,c);break e;case 1:s=u;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Sn===null||!Sn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=Mc(o,s,n);iu(o,y);break e}}o=o.return}while(o!==null)}Jc(t)}catch(S){n=S,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function qc(){var e=pi.current;return pi.current=di,e===null?di:e}function ss(){(ee===0||ee===3||ee===2)&&(ee=4),te===null||!(Hn&268435455)&&!(Ii&268435455)||dn(te,ie)}function mi(e,n){var t=F;F|=2;var r=qc();(te!==e||ie!==n)&&(Xe=null,zn(e,n));do try{H0();break}catch(i){Xc(e,i)}while(!0);if(Wl(),F=t,pi.current=r,Z!==null)throw Error(E(261));return te=null,ie=0,ee}function H0(){for(;Z!==null;)Zc(Z)}function $0(){for(;Z!==null&&!dd();)Zc(Z)}function Zc(e){var n=nf(e.alternate,e,Te);e.memoizedProps=e.pendingProps,n===null?Jc(e):Z=n,ts.current=null}function Jc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=M0(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,Z=null;return}}else if(t=L0(t,n,Te),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);ee===0&&(ee=5)}function Nn(e,n,t){var r=A,i=Le.transition;try{Le.transition=null,A=1,V0(e,n,t,r)}finally{Le.transition=i,A=r}return null}function V0(e,n,t,r){do dt();while(hn!==null);if(F&6)throw Error(E(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ed(e,o),e===te&&(Z=te=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Rr||(Rr=!0,tf(qr,function(){return dt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var l=A;A=1;var s=F;F|=4,ts.current=null,j0(e,t),Gc(t,e),u0(Vo),Jr=!!$o,Vo=$o=null,e.current=t,F0(t),pd(),F=s,A=l,Le.transition=o}else e.current=t;if(Rr&&(Rr=!1,hn=e,gi=i),o=e.pendingLanes,o===0&&(Sn=null),md(t.stateNode),we(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=ul,ul=null,e;return gi&1&&e.tag!==0&&dt(),o=e.pendingLanes,o&1?e===al?Qt++:(Qt=0,al=e):Qt=0,xn(),null}function dt(){if(hn!==null){var e=La(gi),n=Le.transition,t=A;try{if(Le.transition=null,A=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,gi=0,F&6)throw Error(E(331));var i=F;for(F|=4,x=e.current;x!==null;){var o=x,l=o.child;if(x.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(x=f;x!==null;){var g=x;switch(g.tag){case 0:case 11:case 15:Wt(8,g,o)}var m=g.child;if(m!==null)m.return=g,x=m;else for(;x!==null;){g=x;var h=g.sibling,v=g.return;if(Bc(g),g===f){x=null;break}if(h!==null){h.return=v,x=h;break}x=v}}}var w=o.alternate;if(w!==null){var p=w.child;if(p!==null){w.child=null;do{var T=p.sibling;p.sibling=null,p=T}while(p!==null)}}x=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,x=l;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wt(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,x=c;break e}x=o.return}}var a=e.current;for(x=a;x!==null;){l=x;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,x=d;else e:for(l=a;x!==null;){if(s=x,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xi(9,s)}}catch(S){K(s,s.return,S)}if(s===l){x=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,x=y;break e}x=s.return}}if(F=i,xn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{A=t,Le.transition=n}}return!1}function Ou(e,n,t){n=wt(t,n),n=Lc(e,n,1),e=wn(e,n,1),n=de(),e!==null&&(fr(e,1,n),we(e,n))}function K(e,n,t){if(e.tag===3)Ou(e,e,t);else for(;n!==null;){if(n.tag===3){Ou(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=wt(t,e),e=Mc(n,e,1),n=wn(n,e,1),e=de(),n!==null&&(fr(n,1,e),we(n,e));break}}n=n.return}}function W0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(ie&t)===t&&(ee===4||ee===3&&(ie&130023424)===ie&&500>Y()-is?zn(e,0):rs|=t),we(e,n)}function ef(e,n){n===0&&(e.mode&1?(n=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):n=1);var t=de();e=on(e,n),e!==null&&(fr(e,n,t),we(e,t))}function B0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ef(e,t)}function Q0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),ef(e,t)}var nf;nf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,R0(e,n,t);me=!!(e.flags&131072)}else me=!1,W&&n.flags&1048576&&oc(n,li,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Wr(e,n),e=n.pendingProps;var i=gt(n,ae.current);ft(n,t),i=ql(null,n,r,e,i,t);var o=Zl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(o=!0,ii(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bl(n),i.updater=ki,n.stateNode=i,i._reactInternals=n,qo(n,r,e,t),n=el(null,n,r,!0,o,t)):(n.tag=0,W&&o&&Al(n),fe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Wr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=G0(r),e=Ue(r,e),i){case 0:n=Jo(null,n,r,e,t);break e;case 1:n=gu(null,n,r,e,t);break e;case 11:n=pu(null,n,r,e,t);break e;case 14:n=hu(null,n,r,Ue(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ue(r,i),Jo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ue(r,i),gu(e,n,r,i,t);case 3:e:{if(Uc(n),e===null)throw Error(E(387));r=n.pendingProps,o=n.memoizedState,i=o.element,fc(e,n),ai(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=wt(Error(E(423)),n),n=mu(e,n,r,t,i);break e}else if(r!==i){i=wt(Error(E(424)),n),n=mu(e,n,r,t,i);break e}else for(Ee=yn(n.stateNode.containerInfo.firstChild),Ce=n,W=!0,He=null,t=ac(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(mt(),r===i){n=ln(e,n,t);break e}fe(e,n,r,t)}n=n.child}return n;case 5:return dc(n),e===null&&Ko(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Wo(r,i)?l=null:o!==null&&Wo(r,o)&&(n.flags|=32),Fc(e,n),fe(e,n,l,t),n.child;case 6:return e===null&&Ko(n),null;case 13:return Ac(e,n,t);case 4:return Gl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vt(n,null,r,t):fe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ue(r,i),pu(e,n,r,i,t);case 7:return fe(e,n,n.pendingProps,t),n.child;case 8:return fe(e,n,n.pendingProps.children,t),n.child;case 12:return fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,H(si,r._currentValue),r._currentValue=l,o!==null)if(We(o.value,l)){if(o.children===i.children&&!ve.current){n=ln(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=nn(-1,t&-t),u.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Yo(o.return,t,n),s.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Yo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}fe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ft(n,t),i=Me(i),r=r(i),n.flags|=1,fe(e,n,r,t),n.child;case 14:return r=n.type,i=Ue(r,n.pendingProps),i=Ue(r.type,i),hu(e,n,r,i,t);case 15:return zc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ue(r,i),Wr(e,n),n.tag=1,ye(r)?(e=!0,ii(n)):e=!1,ft(n,t),Rc(n,r,i),qo(n,r,i,t),el(null,n,r,!0,e,t);case 19:return Hc(e,n,t);case 22:return jc(e,n,t)}throw Error(E(156,n.tag))};function tf(e,n){return Pa(e,n)}function b0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,n,t,r){return new b0(e,n,t,r)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G0(e){if(typeof e=="function")return us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xl)return 11;if(e===Il)return 14}return 2}function En(e,n){var t=e.alternate;return t===null?(t=Re(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function br(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")us(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xn:return jn(t.children,i,o,n);case kl:l=8,i|=8;break;case To:return e=Re(12,t,n,i|2),e.elementType=To,e.lanes=o,e;case Eo:return e=Re(13,t,n,i),e.elementType=Eo,e.lanes=o,e;case Co:return e=Re(19,t,n,i),e.elementType=Co,e.lanes=o,e;case da:return Pi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ca:l=10;break e;case fa:l=9;break e;case xl:l=11;break e;case Il:l=14;break e;case an:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=Re(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function jn(e,n,t,r){return e=Re(7,e,r,n),e.lanes=t,e}function Pi(e,n,t,r){return e=Re(22,e,r,n),e.elementType=da,e.lanes=t,e.stateNode={isHidden:!1},e}function ao(e,n,t){return e=Re(6,e,null,n),e.lanes=t,e}function co(e,n,t){return n=Re(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function K0(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function as(e,n,t,r,i,o,l,s,u){return e=new K0(e,n,t,s,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Re(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(o),e}function Y0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function rf(e){if(!e)return Dn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(ye(t))return rc(e,t,n)}return n}function of(e,n,t,r,i,o,l,s,u){return e=as(t,r,!0,e,i,o,l,s,u),e.context=rf(null),t=e.current,r=de(),i=Tn(t),o=nn(r,i),o.callback=n??null,wn(t,o,i),e.current.lanes=i,fr(e,i,r),we(e,r),e}function _i(e,n,t,r){var i=n.current,o=de(),l=Tn(i);return t=rf(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=wn(i,n,l),e!==null&&(Ve(e,i,l,o),Hr(e,i,l)),l}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cs(e,n){ku(e,n),(e=e.alternate)&&ku(e,n)}function X0(){return null}var lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function fs(e){this._internalRoot=e}Ni.prototype.render=fs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));_i(e,n,null,null)};Ni.prototype.unmount=fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$n(function(){_i(null,e,null,null)}),n[rn]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var n=ja();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&Ua(e)}};function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xu(){}function q0(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=vi(l);o.call(f)}}var l=of(n,r,e,0,null,!1,!1,"",xu);return e._reactRootContainer=l,e[rn]=l.current,nr(e.nodeType===8?e.parentNode:e),$n(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=vi(u);s.call(f)}}var u=as(e,0,!1,null,null,!1,!1,"",xu);return e._reactRootContainer=u,e[rn]=u.current,nr(e.nodeType===8?e.parentNode:e),$n(function(){_i(n,u,t,r)}),u}function Li(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=vi(l);s.call(u)}}_i(n,l,e,i)}else l=q0(t,n,e,i,r);return vi(l)}Ma=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=zt(n.pendingLanes);t!==0&&(Nl(n,t|1),we(n,Y()),!(F&6)&&(St=Y()+500,xn()))}break;case 13:$n(function(){var r=on(e,1);if(r!==null){var i=de();Ve(r,e,1,i)}}),cs(e,1)}};Rl=function(e){if(e.tag===13){var n=on(e,134217728);if(n!==null){var t=de();Ve(n,e,134217728,t)}cs(e,134217728)}};za=function(e){if(e.tag===13){var n=Tn(e),t=on(e,n);if(t!==null){var r=de();Ve(t,e,n,r)}cs(e,n)}};ja=function(){return A};Fa=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};Lo=function(e,n,t){switch(n){case"input":if(ko(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ci(r);if(!i)throw Error(E(90));ha(r),ko(r,i)}}}break;case"textarea":ma(e,t);break;case"select":n=t.value,n!=null&&st(e,!!t.multiple,n,!1)}};Ca=os;Da=$n;var Z0={usingClientEntryPoint:!1,Events:[pr,et,Ci,Ta,Ea,os]},Rt={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J0={bundleType:Rt.bundleType,version:Rt.version,rendererPackageName:Rt.rendererPackageName,rendererConfig:Rt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xa(e),e===null?null:e.stateNode},findFiberByHostInstance:Rt.findFiberByHostInstance||X0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{wi=Lr.inject(J0),Ge=Lr}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;Oe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ds(n))throw Error(E(200));return Y0(e,n,null,t)};Oe.createRoot=function(e,n){if(!ds(e))throw Error(E(299));var t=!1,r="",i=lf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=as(e,1,!1,null,null,t,!1,r,i),e[rn]=n.current,nr(e.nodeType===8?e.parentNode:e),new fs(n)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=xa(n),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return $n(e)};Oe.hydrate=function(e,n,t){if(!Ri(n))throw Error(E(200));return Li(null,e,n,!0,t)};Oe.hydrateRoot=function(e,n,t){if(!ds(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=lf;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=of(n,null,e,1,t??null,i,!1,o,l),e[rn]=n.current,nr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ni(n)};Oe.render=function(e,n,t){if(!Ri(n))throw Error(E(200));return Li(null,e,n,!1,t)};Oe.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(E(40));return e._reactRootContainer?($n(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};Oe.unstable_batchedUpdates=os;Oe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ri(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Li(e,n,t,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function sf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf)}catch(e){console.error(e)}}sf(),la.exports=Oe;var ps=la.exports,uf,Iu=ps;uf=Iu.createRoot,Iu.hydrateRoot;const af=P.createContext({dragDropManager:void 0});function Ie(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Pu=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),fo=function(){return Math.random().toString(36).substring(7).split("").join(".")},_u={INIT:"@@redux/INIT"+fo(),REPLACE:"@@redux/REPLACE"+fo(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+fo()}};function e2(e){if(typeof e!="object"||e===null)return!1;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}function cf(e,n,t){var r;if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(Ie(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(Ie(1));return t(cf)(e,n)}if(typeof e!="function")throw new Error(Ie(2));var i=e,o=n,l=[],s=l,u=!1;function f(){s===l&&(s=l.slice())}function g(){if(u)throw new Error(Ie(3));return o}function m(p){if(typeof p!="function")throw new Error(Ie(4));if(u)throw new Error(Ie(5));var T=!0;return f(),s.push(p),function(){if(T){if(u)throw new Error(Ie(6));T=!1,f();var a=s.indexOf(p);s.splice(a,1),l=null}}}function h(p){if(!e2(p))throw new Error(Ie(7));if(typeof p.type>"u")throw new Error(Ie(8));if(u)throw new Error(Ie(9));try{u=!0,o=i(o,p)}finally{u=!1}for(var T=l=s,c=0;c<T.length;c++){var a=T[c];a()}return p}function v(p){if(typeof p!="function")throw new Error(Ie(10));i=p,h({type:_u.REPLACE})}function w(){var p,T=m;return p={subscribe:function(a){if(typeof a!="object"||a===null)throw new Error(Ie(11));function d(){a.next&&a.next(g())}d();var y=T(d);return{unsubscribe:y}}},p[Pu]=function(){return this},p}return h({type:_u.INIT}),r={dispatch:h,subscribe:m,getState:g,replaceReducer:v},r[Pu]=w,r}function M(e,n,...t){if(n2()&&n===void 0)throw new Error("invariant requires an error message argument");if(!e){let r;if(n===void 0)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;r=new Error(n.replace(/%s/g,function(){return t[i++]})),r.name="Invariant Violation"}throw r.framesToPop=1,r}}function n2(){return typeof process<"u"&&!0}function t2(e,n,t){return n.split(".").reduce((r,i)=>r&&r[i]?r[i]:t||null,e)}function r2(e,n){return e.filter(t=>t!==n)}function ff(e){return typeof e=="object"}function i2(e,n){const t=new Map,r=o=>{t.set(o,t.has(o)?t.get(o)+1:1)};e.forEach(r),n.forEach(r);const i=[];return t.forEach((o,l)=>{o===1&&i.push(l)}),i}function o2(e,n){return e.filter(t=>n.indexOf(t)>-1)}const hs="dnd-core/INIT_COORDS",Mi="dnd-core/BEGIN_DRAG",gs="dnd-core/PUBLISH_DRAG_SOURCE",zi="dnd-core/HOVER",ji="dnd-core/DROP",Fi="dnd-core/END_DRAG";function Nu(e,n){return{type:hs,payload:{sourceClientOffset:n||null,clientOffset:e||null}}}const l2={type:hs,payload:{clientOffset:null,sourceClientOffset:null}};function s2(e){return function(t=[],r={publishSource:!0}){const{publishSource:i=!0,clientOffset:o,getSourceClientOffset:l}=r,s=e.getMonitor(),u=e.getRegistry();e.dispatch(Nu(o)),u2(t,s,u);const f=f2(t,s);if(f==null){e.dispatch(l2);return}let g=null;if(o){if(!l)throw new Error("getSourceClientOffset must be defined");a2(l),g=l(f)}e.dispatch(Nu(o,g));const h=u.getSource(f).beginDrag(s,f);if(h==null)return;c2(h),u.pinSource(f);const v=u.getSourceType(f);return{type:Mi,payload:{itemType:v,item:h,sourceId:f,clientOffset:o||null,sourceClientOffset:g||null,isSourcePublic:!!i}}}}function u2(e,n,t){M(!n.isDragging(),"Cannot call beginDrag while dragging."),e.forEach(function(r){M(t.getSource(r),"Expected sourceIds to be registered.")})}function a2(e){M(typeof e=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function c2(e){M(ff(e),"Item must be an object.")}function f2(e,n){let t=null;for(let r=e.length-1;r>=0;r--)if(n.canDragSource(e[r])){t=e[r];break}return t}function d2(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p2(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){d2(e,i,t[i])})}return e}function h2(e){return function(t={}){const r=e.getMonitor(),i=e.getRegistry();g2(r),y2(r).forEach((l,s)=>{const u=m2(l,s,i,r),f={type:ji,payload:{dropResult:p2({},t,u)}};e.dispatch(f)})}}function g2(e){M(e.isDragging(),"Cannot call drop while not dragging."),M(!e.didDrop(),"Cannot call drop twice during one drag operation.")}function m2(e,n,t,r){const i=t.getTarget(e);let o=i?i.drop(r,e):void 0;return v2(o),typeof o>"u"&&(o=n===0?{}:r.getDropResult()),o}function v2(e){M(typeof e>"u"||ff(e),"Drop result must either be an object or undefined.")}function y2(e){const n=e.getTargetIds().filter(e.canDropOnTarget,e);return n.reverse(),n}function w2(e){return function(){const t=e.getMonitor(),r=e.getRegistry();S2(t);const i=t.getSourceId();return i!=null&&(r.getSource(i,!0).endDrag(t,i),r.unpinSource()),{type:Fi}}}function S2(e){M(e.isDragging(),"Cannot call endDrag while not dragging.")}function dl(e,n){return n===null?e===null:Array.isArray(e)?e.some(t=>t===n):e===n}function T2(e){return function(t,{clientOffset:r}={}){E2(t);const i=t.slice(0),o=e.getMonitor(),l=e.getRegistry(),s=o.getItemType();return D2(i,l,s),C2(i,o,l),O2(i,o,l),{type:zi,payload:{targetIds:i,clientOffset:r||null}}}}function E2(e){M(Array.isArray(e),"Expected targetIds to be an array.")}function C2(e,n,t){M(n.isDragging(),"Cannot call hover while not dragging."),M(!n.didDrop(),"Cannot call hover after drop.");for(let r=0;r<e.length;r++){const i=e[r];M(e.lastIndexOf(i)===r,"Expected targetIds to be unique in the passed array.");const o=t.getTarget(i);M(o,"Expected targetIds to be registered.")}}function D2(e,n,t){for(let r=e.length-1;r>=0;r--){const i=e[r],o=n.getTargetType(i);dl(o,t)||e.splice(r,1)}}function O2(e,n,t){e.forEach(function(r){t.getTarget(r).hover(n,r)})}function k2(e){return function(){if(e.getMonitor().isDragging())return{type:gs}}}function x2(e){return{beginDrag:s2(e),publishDragSource:k2(e),hover:T2(e),drop:h2(e),endDrag:w2(e)}}class I2{receiveBackend(n){this.backend=n}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const n=this,{dispatch:t}=this.store;function r(o){return(...l)=>{const s=o.apply(n,l);typeof s<"u"&&t(s)}}const i=x2(this);return Object.keys(i).reduce((o,l)=>{const s=i[l];return o[l]=r(s),o},{})}dispatch(n){this.store.dispatch(n)}constructor(n,t){this.isSetUp=!1,this.handleRefCountChange=()=>{const r=this.store.getState().refCount>0;this.backend&&(r&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!r&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=n,this.monitor=t,n.subscribe(this.handleRefCountChange)}}function P2(e,n){return{x:e.x+n.x,y:e.y+n.y}}function df(e,n){return{x:e.x-n.x,y:e.y-n.y}}function _2(e){const{clientOffset:n,initialClientOffset:t,initialSourceClientOffset:r}=e;return!n||!t||!r?null:df(P2(n,r),t)}function N2(e){const{clientOffset:n,initialClientOffset:t}=e;return!n||!t?null:df(n,t)}const bt=[],ms=[];bt.__IS_NONE__=!0;ms.__IS_ALL__=!0;function R2(e,n){return e===bt?!1:e===ms||typeof n>"u"?!0:o2(n,e).length>0}class L2{subscribeToStateChange(n,t={}){const{handlerIds:r}=t;M(typeof n=="function","listener must be a function."),M(typeof r>"u"||Array.isArray(r),"handlerIds, when specified, must be an array of strings.");let i=this.store.getState().stateId;const o=()=>{const l=this.store.getState(),s=l.stateId;try{s===i||s===i+1&&!R2(l.dirtyHandlerIds,r)||n()}finally{i=s}};return this.store.subscribe(o)}subscribeToOffsetChange(n){M(typeof n=="function","listener must be a function.");let t=this.store.getState().dragOffset;const r=()=>{const i=this.store.getState().dragOffset;i!==t&&(t=i,n())};return this.store.subscribe(r)}canDragSource(n){if(!n)return!1;const t=this.registry.getSource(n);return M(t,`Expected to find a valid source. sourceId=${n}`),this.isDragging()?!1:t.canDrag(this,n)}canDropOnTarget(n){if(!n)return!1;const t=this.registry.getTarget(n);if(M(t,`Expected to find a valid target. targetId=${n}`),!this.isDragging()||this.didDrop())return!1;const r=this.registry.getTargetType(n),i=this.getItemType();return dl(r,i)&&t.canDrop(this,n)}isDragging(){return!!this.getItemType()}isDraggingSource(n){if(!n)return!1;const t=this.registry.getSource(n,!0);if(M(t,`Expected to find a valid source. sourceId=${n}`),!this.isDragging()||!this.isSourcePublic())return!1;const r=this.registry.getSourceType(n),i=this.getItemType();return r!==i?!1:t.isDragging(this,n)}isOverTarget(n,t={shallow:!1}){if(!n)return!1;const{shallow:r}=t;if(!this.isDragging())return!1;const i=this.registry.getTargetType(n),o=this.getItemType();if(o&&!dl(i,o))return!1;const l=this.getTargetIds();if(!l.length)return!1;const s=l.indexOf(n);return r?s===l.length-1:s>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return _2(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return N2(this.store.getState().dragOffset)}constructor(n,t){this.store=n,this.registry=t}}const Ru=typeof global<"u"?global:self,pf=Ru.MutationObserver||Ru.WebKitMutationObserver;function hf(e){return function(){const t=setTimeout(i,0),r=setInterval(i,50);function i(){clearTimeout(t),clearInterval(r),e()}}}function M2(e){let n=1;const t=new pf(e),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){n=-n,r.data=n}}const z2=typeof pf=="function"?M2:hf;class j2{enqueueTask(n){const{queue:t,requestFlush:r}=this;t.length||(r(),this.flushing=!0),t[t.length]=n}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:n}=this;for(;this.index<n.length;){const t=this.index;if(this.index++,n[t].call(),this.index>this.capacity){for(let r=0,i=n.length-this.index;r<i;r++)n[r]=n[r+this.index];n.length-=this.index,this.index=0}}n.length=0,this.index=0,this.flushing=!1},this.registerPendingError=n=>{this.pendingErrors.push(n),this.requestErrorThrow()},this.requestFlush=z2(this.flush),this.requestErrorThrow=hf(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class F2{call(){try{this.task&&this.task()}catch(n){this.onError(n)}finally{this.task=null,this.release(this)}}constructor(n,t){this.onError=n,this.release=t,this.task=null}}class U2{create(n){const t=this.freeTasks,r=t.length?t.pop():new F2(this.onError,i=>t[t.length]=i);return r.task=n,r}constructor(n){this.onError=n,this.freeTasks=[]}}const gf=new j2,A2=new U2(gf.registerPendingError);function H2(e){gf.enqueueTask(A2.create(e))}const vs="dnd-core/ADD_SOURCE",ys="dnd-core/ADD_TARGET",ws="dnd-core/REMOVE_SOURCE",Ui="dnd-core/REMOVE_TARGET";function $2(e){return{type:vs,payload:{sourceId:e}}}function V2(e){return{type:ys,payload:{targetId:e}}}function W2(e){return{type:ws,payload:{sourceId:e}}}function B2(e){return{type:Ui,payload:{targetId:e}}}function Q2(e){M(typeof e.canDrag=="function","Expected canDrag to be a function."),M(typeof e.beginDrag=="function","Expected beginDrag to be a function."),M(typeof e.endDrag=="function","Expected endDrag to be a function.")}function b2(e){M(typeof e.canDrop=="function","Expected canDrop to be a function."),M(typeof e.hover=="function","Expected hover to be a function."),M(typeof e.drop=="function","Expected beginDrag to be a function.")}function pl(e,n){if(n&&Array.isArray(e)){e.forEach(t=>pl(t,!1));return}M(typeof e=="string"||typeof e=="symbol",n?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var Ne;(function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"})(Ne||(Ne={}));let G2=0;function K2(){return G2++}function Y2(e){const n=K2().toString();switch(e){case Ne.SOURCE:return`S${n}`;case Ne.TARGET:return`T${n}`;default:throw new Error(`Unknown Handler Role: ${e}`)}}function Lu(e){switch(e[0]){case"S":return Ne.SOURCE;case"T":return Ne.TARGET;default:throw new Error(`Cannot parse handler ID: ${e}`)}}function Mu(e,n){const t=e.entries();let r=!1;do{const{done:i,value:[,o]}=t.next();if(o===n)return!0;r=!!i}while(!r);return!1}class X2{addSource(n,t){pl(n),Q2(t);const r=this.addHandler(Ne.SOURCE,n,t);return this.store.dispatch($2(r)),r}addTarget(n,t){pl(n,!0),b2(t);const r=this.addHandler(Ne.TARGET,n,t);return this.store.dispatch(V2(r)),r}containsHandler(n){return Mu(this.dragSources,n)||Mu(this.dropTargets,n)}getSource(n,t=!1){return M(this.isSourceId(n),"Expected a valid source ID."),t&&n===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(n)}getTarget(n){return M(this.isTargetId(n),"Expected a valid target ID."),this.dropTargets.get(n)}getSourceType(n){return M(this.isSourceId(n),"Expected a valid source ID."),this.types.get(n)}getTargetType(n){return M(this.isTargetId(n),"Expected a valid target ID."),this.types.get(n)}isSourceId(n){return Lu(n)===Ne.SOURCE}isTargetId(n){return Lu(n)===Ne.TARGET}removeSource(n){M(this.getSource(n),"Expected an existing source."),this.store.dispatch(W2(n)),H2(()=>{this.dragSources.delete(n),this.types.delete(n)})}removeTarget(n){M(this.getTarget(n),"Expected an existing target."),this.store.dispatch(B2(n)),this.dropTargets.delete(n),this.types.delete(n)}pinSource(n){const t=this.getSource(n);M(t,"Expected an existing source."),this.pinnedSourceId=n,this.pinnedSource=t}unpinSource(){M(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(n,t,r){const i=Y2(n);return this.types.set(i,t),n===Ne.SOURCE?this.dragSources.set(i,r):n===Ne.TARGET&&this.dropTargets.set(i,r),i}constructor(n){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=n}}const q2=(e,n)=>e===n;function Z2(e,n){return!e&&!n?!0:!e||!n?!1:e.x===n.x&&e.y===n.y}function J2(e,n,t=q2){if(e.length!==n.length)return!1;for(let r=0;r<e.length;++r)if(!t(e[r],n[r]))return!1;return!0}function ep(e=bt,n){switch(n.type){case zi:break;case vs:case ys:case Ui:case ws:return bt;case Mi:case gs:case Fi:case ji:default:return ms}const{targetIds:t=[],prevTargetIds:r=[]}=n.payload,i=i2(t,r);if(!(i.length>0||!J2(t,r)))return bt;const l=r[r.length-1],s=t[t.length-1];return l!==s&&(l&&i.push(l),s&&i.push(s)),i}function np(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function tp(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){np(e,i,t[i])})}return e}const zu={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function rp(e=zu,n){const{payload:t}=n;switch(n.type){case hs:case Mi:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case zi:return Z2(e.clientOffset,t.clientOffset)?e:tp({},e,{clientOffset:t.clientOffset});case Fi:case ji:return zu;default:return e}}function ip(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Gn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){ip(e,i,t[i])})}return e}const op={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function lp(e=op,n){const{payload:t}=n;switch(n.type){case Mi:return Gn({},e,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case gs:return Gn({},e,{isSourcePublic:!0});case zi:return Gn({},e,{targetIds:t.targetIds});case Ui:return e.targetIds.indexOf(t.targetId)===-1?e:Gn({},e,{targetIds:r2(e.targetIds,t.targetId)});case ji:return Gn({},e,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case Fi:return Gn({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}function sp(e=0,n){switch(n.type){case vs:case ys:return e+1;case ws:case Ui:return e-1;default:return e}}function up(e=0){return e+1}function ap(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function cp(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){ap(e,i,t[i])})}return e}function fp(e={},n){return{dirtyHandlerIds:ep(e.dirtyHandlerIds,{type:n.type,payload:cp({},n.payload,{prevTargetIds:t2(e,"dragOperation.targetIds",[])})}),dragOffset:rp(e.dragOffset,n),refCount:sp(e.refCount,n),dragOperation:lp(e.dragOperation,n),stateId:up(e.stateId)}}function dp(e,n=void 0,t={},r=!1){const i=pp(r),o=new L2(i,new X2(i)),l=new I2(i,o),s=e(l,n,t);return l.receiveBackend(s),l}function pp(e){const n=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return cf(fp,e&&n&&n({name:"dnd-core",instanceId:"dnd-core"}))}function hp(e,n){if(e==null)return{};var t=gp(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function gp(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}let ju=0;const Gr=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var mp=P.memo(function(n){var{children:t}=n,r=hp(n,["children"]);const[i,o]=vp(r);return P.useEffect(()=>{if(o){const l=mf();return++ju,()=>{--ju===0&&(l[Gr]=null)}}},[]),L.jsx(af.Provider,{value:i,children:t})});function vp(e){if("manager"in e)return[{dragDropManager:e.manager},!1];const n=yp(e.backend,e.context,e.options,e.debugMode),t=!e.context;return[n,t]}function yp(e,n=mf(),t,r){const i=n;return i[Gr]||(i[Gr]={dragDropManager:dp(e,n,t,r)}),i[Gr]}function mf(){return typeof global<"u"?global:window}var wp=function e(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){if(n.constructor!==t.constructor)return!1;var r,i,o;if(Array.isArray(n)){if(r=n.length,r!=t.length)return!1;for(i=r;i--!==0;)if(!e(n[i],t[i]))return!1;return!0}if(n.constructor===RegExp)return n.source===t.source&&n.flags===t.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===t.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===t.toString();if(o=Object.keys(n),r=o.length,r!==Object.keys(t).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=r;i--!==0;){var l=o[i];if(!e(n[l],t[l]))return!1}return!0}return n!==n&&t!==t};const Sp=If(wp),Vn=typeof window<"u"?P.useLayoutEffect:P.useEffect;function Tp(e,n,t){const[r,i]=P.useState(()=>n(e)),o=P.useCallback(()=>{const l=n(e);Sp(r,l)||(i(l),t&&t())},[r,e,t]);return Vn(o),[r,o]}function Ep(e,n,t){const[r,i]=Tp(e,n,t);return Vn(function(){const l=e.getHandlerId();if(l!=null)return e.subscribeToStateChange(i,{handlerIds:[l]})},[e,i]),r}function vf(e,n,t){return Ep(n,e||(()=>({})),()=>t.reconnect())}function yf(e,n){const t=[...n||[]];return n==null&&typeof e!="function"&&t.push(e),P.useMemo(()=>typeof e=="function"?e():e,t)}function Cp(e){return P.useMemo(()=>e.hooks.dragSource(),[e])}function Dp(e){return P.useMemo(()=>e.hooks.dragPreview(),[e])}let po=!1,ho=!1;class Op{receiveHandlerId(n){this.sourceId=n}getHandlerId(){return this.sourceId}canDrag(){M(!po,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return po=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{po=!1}}isDragging(){if(!this.sourceId)return!1;M(!ho,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return ho=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{ho=!1}}subscribeToStateChange(n,t){return this.internalMonitor.subscribeToStateChange(n,t)}isDraggingSource(n){return this.internalMonitor.isDraggingSource(n)}isOverTarget(n,t){return this.internalMonitor.isOverTarget(n,t)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(n){return this.internalMonitor.subscribeToOffsetChange(n)}canDragSource(n){return this.internalMonitor.canDragSource(n)}canDropOnTarget(n){return this.internalMonitor.canDropOnTarget(n)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(n){this.sourceId=null,this.internalMonitor=n.getMonitor()}}let go=!1;class kp{receiveHandlerId(n){this.targetId=n}getHandlerId(){return this.targetId}subscribeToStateChange(n,t){return this.internalMonitor.subscribeToStateChange(n,t)}canDrop(){if(!this.targetId)return!1;M(!go,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return go=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{go=!1}}isOver(n){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,n):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(n){this.targetId=null,this.internalMonitor=n.getMonitor()}}function xp(e,n,t){const r=t.getRegistry(),i=r.addTarget(e,n);return[i,()=>r.removeTarget(i)]}function Ip(e,n,t){const r=t.getRegistry(),i=r.addSource(e,n);return[i,()=>r.removeSource(i)]}function hl(e,n,t,r){let i;if(i!==void 0)return!!i;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;const o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;const s=Object.prototype.hasOwnProperty.bind(n);for(let u=0;u<o.length;u++){const f=o[u];if(!s(f))return!1;const g=e[f],m=n[f];if(i=void 0,i===!1||i===void 0&&g!==m)return!1}return!0}function gl(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Pp(e){if(typeof e.type=="string")return;const n=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${n} into a <div>, or turn it into a drag source or a drop target itself.`)}function _p(e){return(n=null,t=null)=>{if(!P.isValidElement(n)){const o=n;return e(o,t),o}const r=n;return Pp(r),Np(r,t?o=>e(o,t):e)}}function wf(e){const n={};return Object.keys(e).forEach(t=>{const r=e[t];if(t.endsWith("Ref"))n[t]=e[t];else{const i=_p(r);n[t]=()=>i}}),n}function Fu(e,n){typeof e=="function"?e(n):e.current=n}function Np(e,n){const t=e.ref;return M(typeof t!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),t?P.cloneElement(e,{ref:r=>{Fu(t,r),Fu(n,r)}}):P.cloneElement(e,{ref:n})}class Rp{receiveHandlerId(n){this.handlerId!==n&&(this.handlerId=n,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(n){this.dragSourceOptionsInternal=n}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(n){this.dragPreviewOptionsInternal=n}reconnect(){const n=this.reconnectDragSource();this.reconnectDragPreview(n)}reconnectDragSource(){const n=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return t&&this.disconnectDragSource(),this.handlerId?n?(t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=n,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,n,this.dragSourceOptions)),t):(this.lastConnectedDragSource=n,t):t}reconnectDragPreview(n=!1){const t=this.dragPreview,r=n||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(r&&this.disconnectDragPreview(),!!this.handlerId){if(!t){this.lastConnectedDragPreview=t;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!hl(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!hl(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(n){this.hooks=wf({dragSource:(t,r)=>{this.clearDragSource(),this.dragSourceOptions=r||null,gl(t)?this.dragSourceRef=t:this.dragSourceNode=t,this.reconnectDragSource()},dragPreview:(t,r)=>{this.clearDragPreview(),this.dragPreviewOptions=r||null,gl(t)?this.dragPreviewRef=t:this.dragPreviewNode=t,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=n}}class Lp{get connectTarget(){return this.dropTarget}reconnect(){const n=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();n&&this.disconnectDropTarget();const t=this.dropTarget;if(this.handlerId){if(!t){this.lastConnectedDropTarget=t;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions))}}receiveHandlerId(n){n!==this.handlerId&&(this.handlerId=n,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(n){this.dropTargetOptionsInternal=n}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!hl(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(n){this.hooks=wf({dropTarget:(t,r)=>{this.clearDropTarget(),this.dropTargetOptions=r,gl(t)?this.dropTargetRef=t:this.dropTargetNode=t,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=n}}function Dt(){const{dragDropManager:e}=P.useContext(af);return M(e!=null,"Expected drag drop context"),e}function Mp(e,n){const t=Dt(),r=P.useMemo(()=>new Rp(t.getBackend()),[t]);return Vn(()=>(r.dragSourceOptions=e||null,r.reconnect(),()=>r.disconnectDragSource()),[r,e]),Vn(()=>(r.dragPreviewOptions=n||null,r.reconnect(),()=>r.disconnectDragPreview()),[r,n]),r}function zp(){const e=Dt();return P.useMemo(()=>new Op(e),[e])}class jp{beginDrag(){const n=this.spec,t=this.monitor;let r=null;return typeof n.item=="object"?r=n.item:typeof n.item=="function"?r=n.item(t):r={},r??null}canDrag(){const n=this.spec,t=this.monitor;return typeof n.canDrag=="boolean"?n.canDrag:typeof n.canDrag=="function"?n.canDrag(t):!0}isDragging(n,t){const r=this.spec,i=this.monitor,{isDragging:o}=r;return o?o(i):t===n.getSourceId()}endDrag(){const n=this.spec,t=this.monitor,r=this.connector,{end:i}=n;i&&i(t.getItem(),t),r.reconnect()}constructor(n,t,r){this.spec=n,this.monitor=t,this.connector=r}}function Fp(e,n,t){const r=P.useMemo(()=>new jp(e,n,t),[n,t]);return P.useEffect(()=>{r.spec=e},[e]),r}function Up(e){return P.useMemo(()=>{const n=e.type;return M(n!=null,"spec.type must be defined"),n},[e])}function Ap(e,n,t){const r=Dt(),i=Fp(e,n,t),o=Up(e);Vn(function(){if(o!=null){const[s,u]=Ip(o,i,r);return n.receiveHandlerId(s),t.receiveHandlerId(s),u}},[r,n,t,i,o])}function Hp(e,n){const t=yf(e,n);M(!t.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const r=zp(),i=Mp(t.options,t.previewOptions);return Ap(t,r,i),[vf(t.collect,r,i),Cp(i),Dp(i)]}function $p(e){return P.useMemo(()=>e.hooks.dropTarget(),[e])}function Vp(e){const n=Dt(),t=P.useMemo(()=>new Lp(n.getBackend()),[n]);return Vn(()=>(t.dropTargetOptions=e||null,t.reconnect(),()=>t.disconnectDropTarget()),[e]),t}function Wp(){const e=Dt();return P.useMemo(()=>new kp(e),[e])}function Bp(e){const{accept:n}=e;return P.useMemo(()=>(M(e.accept!=null,"accept must be defined"),Array.isArray(n)?n:[n]),[n])}class Qp{canDrop(){const n=this.spec,t=this.monitor;return n.canDrop?n.canDrop(t.getItem(),t):!0}hover(){const n=this.spec,t=this.monitor;n.hover&&n.hover(t.getItem(),t)}drop(){const n=this.spec,t=this.monitor;if(n.drop)return n.drop(t.getItem(),t)}constructor(n,t){this.spec=n,this.monitor=t}}function bp(e,n){const t=P.useMemo(()=>new Qp(e,n),[n]);return P.useEffect(()=>{t.spec=e},[e]),t}function Gp(e,n,t){const r=Dt(),i=bp(e,n),o=Bp(e);Vn(function(){const[s,u]=xp(o,i,r);return n.receiveHandlerId(s),t.receiveHandlerId(s),u},[r,n,i,t,o.map(l=>l.toString()).join("|")])}function Kp(e,n){const t=yf(e,n),r=Wp(),i=Vp(t.options);return Gp(t,r,i),[vf(t.collect,r,i),$p(i)]}function Sf(e){let n=null;return()=>(n==null&&(n=e()),n)}function Yp(e,n){return e.filter(t=>t!==n)}function Xp(e,n){const t=new Set,r=o=>t.add(o);e.forEach(r),n.forEach(r);const i=[];return t.forEach(o=>i.push(o)),i}class qp{enter(n){const t=this.entered.length,r=i=>this.isNodeInDocument(i)&&(!i.contains||i.contains(n));return this.entered=Xp(this.entered.filter(r),[n]),t===0&&this.entered.length>0}leave(n){const t=this.entered.length;return this.entered=Yp(this.entered.filter(this.isNodeInDocument),n),t>0&&this.entered.length===0}reset(){this.entered=[]}constructor(n){this.entered=[],this.isNodeInDocument=n}}class Zp{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(n=>{Object.defineProperty(this.item,n,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${n}" until the drop event.`),null}})})}loadDataTransfer(n){if(n){const t={};Object.keys(this.config.exposeProperties).forEach(r=>{const i=this.config.exposeProperties[r];i!=null&&(t[r]={value:i(n,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(n,t){return t===n.getSourceId()}endDrag(){}constructor(n){this.config=n,this.item={},this.initializeExposedProperties()}}const Tf="__NATIVE_FILE__",Ef="__NATIVE_URL__",Cf="__NATIVE_TEXT__",Df="__NATIVE_HTML__",Uu=Object.freeze(Object.defineProperty({__proto__:null,FILE:Tf,HTML:Df,TEXT:Cf,URL:Ef},Symbol.toStringTag,{value:"Module"}));function mo(e,n,t){const r=n.reduce((i,o)=>i||e.getData(o),"");return r??t}const ml={[Tf]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[Df]:{exposeProperties:{html:(e,n)=>mo(e,n,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[Ef]:{exposeProperties:{urls:(e,n)=>mo(e,n,"").split(`
`),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[Cf]:{exposeProperties:{text:(e,n)=>mo(e,n,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function Jp(e,n){const t=ml[e];if(!t)throw new Error(`native type ${e} has no configuration`);const r=new Zp(t);return r.loadDataTransfer(n),r}function vo(e){if(!e)return null;const n=Array.prototype.slice.call(e.types||[]);return Object.keys(ml).filter(t=>{const r=ml[t];return r!=null&&r.matchesTypes?r.matchesTypes.some(i=>n.indexOf(i)>-1):!1})[0]||null}const e1=Sf(()=>/firefox/i.test(navigator.userAgent)),Of=Sf(()=>!!window.safari);class Au{interpolate(n){const{xs:t,ys:r,c1s:i,c2s:o,c3s:l}=this;let s=t.length-1;if(n===t[s])return r[s];let u=0,f=l.length-1,g;for(;u<=f;){g=Math.floor(.5*(u+f));const v=t[g];if(v<n)u=g+1;else if(v>n)f=g-1;else return r[g]}s=Math.max(0,f);const m=n-t[s],h=m*m;return r[s]+i[s]*m+o[s]*h+l[s]*m*h}constructor(n,t){const{length:r}=n,i=[];for(let v=0;v<r;v++)i.push(v);i.sort((v,w)=>n[v]<n[w]?-1:1);const o=[],l=[];let s,u;for(let v=0;v<r-1;v++)s=n[v+1]-n[v],u=t[v+1]-t[v],o.push(s),l.push(u/s);const f=[l[0]];for(let v=0;v<o.length-1;v++){const w=l[v],p=l[v+1];if(w*p<=0)f.push(0);else{s=o[v];const T=o[v+1],c=s+T;f.push(3*c/((c+T)/w+(c+s)/p))}}f.push(l[l.length-1]);const g=[],m=[];let h;for(let v=0;v<f.length-1;v++){h=l[v];const w=f[v],p=1/o[v],T=w+f[v+1]-h-h;g.push((h-w-T)*p),m.push(T*p*p)}this.xs=n,this.ys=t,this.c1s=f,this.c2s=g,this.c3s=m}}const n1=1;function kf(e){const n=e.nodeType===n1?e:e.parentElement;if(!n)return null;const{top:t,left:r}=n.getBoundingClientRect();return{x:r,y:t}}function Mr(e){return{x:e.clientX,y:e.clientY}}function t1(e){var n;return e.nodeName==="IMG"&&(e1()||!(!((n=document.documentElement)===null||n===void 0)&&n.contains(e)))}function r1(e,n,t,r){let i=e?n.width:t,o=e?n.height:r;return Of()&&e&&(o/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:o}}function i1(e,n,t,r,i){const o=t1(n),s=kf(o?e:n),u={x:t.x-s.x,y:t.y-s.y},{offsetWidth:f,offsetHeight:g}=e,{anchorX:m,anchorY:h}=r,{dragPreviewWidth:v,dragPreviewHeight:w}=r1(o,n,f,g),p=()=>{let D=new Au([0,.5,1],[u.y,u.y/g*w,u.y+w-g]).interpolate(h);return Of()&&o&&(D+=(window.devicePixelRatio-1)*w),D},T=()=>new Au([0,.5,1],[u.x,u.x/f*v,u.x+v-f]).interpolate(m),{offsetX:c,offsetY:a}=i,d=c===0||c,y=a===0||a;return{x:d?c:T(),y:y?a:p()}}class o1{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var n;return!((n=this.globalContext)===null||n===void 0)&&n.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var n;return((n=this.optionsArgs)===null||n===void 0?void 0:n.rootElement)||this.window}constructor(n,t){this.ownerDocument=null,this.globalContext=n,this.optionsArgs=t}}function l1(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Hu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),r.forEach(function(i){l1(e,i,t[i])})}return e}class s1{profile(){var n,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((n=this.dragStartSourceIds)===null||n===void 0?void 0:n.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((t=this.dragOverTargetIds)===null||t===void 0?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const n=this.rootElement;if(n!==void 0){if(n.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");n.__isReactDndBackendSetUp=!0,this.addEventListeners(n)}}teardown(){const n=this.rootElement;if(n!==void 0&&(n.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var t;(t=this.window)===null||t===void 0||t.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(n,t,r){return this.sourcePreviewNodeOptions.set(n,r),this.sourcePreviewNodes.set(n,t),()=>{this.sourcePreviewNodes.delete(n),this.sourcePreviewNodeOptions.delete(n)}}connectDragSource(n,t,r){this.sourceNodes.set(n,t),this.sourceNodeOptions.set(n,r);const i=l=>this.handleDragStart(l,n),o=l=>this.handleSelectStart(l);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",i),t.addEventListener("selectstart",o),()=>{this.sourceNodes.delete(n),this.sourceNodeOptions.delete(n),t.removeEventListener("dragstart",i),t.removeEventListener("selectstart",o),t.setAttribute("draggable","false")}}connectDropTarget(n,t){const r=l=>this.handleDragEnter(l,n),i=l=>this.handleDragOver(l,n),o=l=>this.handleDrop(l,n);return t.addEventListener("dragenter",r),t.addEventListener("dragover",i),t.addEventListener("drop",o),()=>{t.removeEventListener("dragenter",r),t.removeEventListener("dragover",i),t.removeEventListener("drop",o)}}addEventListeners(n){n.addEventListener&&(n.addEventListener("dragstart",this.handleTopDragStart),n.addEventListener("dragstart",this.handleTopDragStartCapture,!0),n.addEventListener("dragend",this.handleTopDragEndCapture,!0),n.addEventListener("dragenter",this.handleTopDragEnter),n.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.addEventListener("dragover",this.handleTopDragOver),n.addEventListener("dragover",this.handleTopDragOverCapture,!0),n.addEventListener("drop",this.handleTopDrop),n.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(n){n.removeEventListener&&(n.removeEventListener("dragstart",this.handleTopDragStart),n.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),n.removeEventListener("dragend",this.handleTopDragEndCapture,!0),n.removeEventListener("dragenter",this.handleTopDragEnter),n.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.removeEventListener("dragover",this.handleTopDragOver),n.removeEventListener("dragover",this.handleTopDragOverCapture,!0),n.removeEventListener("drop",this.handleTopDrop),n.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const n=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(n);return Hu({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const n=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions.get(n);return Hu({anchorX:.5,anchorY:.5,captureDraggingState:!1},t||{})}isDraggingNativeItem(){const n=this.monitor.getItemType();return Object.keys(Uu).some(t=>Uu[t]===n)}beginDragNativeItem(n,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=Jp(n,t),this.currentNativeHandle=this.registry.addSource(n,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(n){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=n;const t=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var r;return(r=this.rootElement)===null||r===void 0?void 0:r.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},t)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var n;(n=this.window)===null||n===void 0||n.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(n,t){n.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(n,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(n,t){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(n,t){this.dropTargetIds.unshift(t)}constructor(n,t,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=i=>{const o=this.sourceNodes.get(i);return o&&kf(o)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=i=>!!(i&&this.document&&this.document.body&&this.document.body.contains(i)),this.endDragIfSourceWasRemovedFromDOM=()=>{const i=this.currentDragSourceNode;i==null||this.isNodeInDocument(i)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=i=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(i||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=i=>{if(i.defaultPrevented)return;const{dragStartSourceIds:o}=this;this.dragStartSourceIds=null;const l=Mr(i);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(o||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:l});const{dataTransfer:s}=i,u=vo(s);if(this.monitor.isDragging()){if(s&&typeof s.setDragImage=="function"){const g=this.monitor.getSourceId(),m=this.sourceNodes.get(g),h=this.sourcePreviewNodes.get(g)||m;if(h){const{anchorX:v,anchorY:w,offsetX:p,offsetY:T}=this.getCurrentSourcePreviewNodeOptions(),d=i1(m,h,l,{anchorX:v,anchorY:w},{offsetX:p,offsetY:T});s.setDragImage(h,d.x,d.y)}}try{s==null||s.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(i.target);const{captureDraggingState:f}=this.getCurrentSourcePreviewNodeOptions();f?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(u)this.beginDragNativeItem(u);else{if(s&&!s.types&&(i.target&&!i.target.hasAttribute||!i.target.hasAttribute("draggable")))return;i.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=i=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}if(!this.enterLeaveCounter.enter(i.target)||this.monitor.isDragging())return;const{dataTransfer:s}=i,u=vo(s);u&&this.beginDragNativeItem(u,s)},this.handleTopDragEnter=i=>{const{dragEnterTargetIds:o}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=i.altKey,o.length>0&&this.actions.hover(o,{clientOffset:Mr(i)}),o.some(s=>this.monitor.canDropOnTarget(s))&&(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=i=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}},this.handleTopDragOver=i=>{const{dragOverTargetIds:o}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}this.altKeyPressed=i.altKey,this.lastClientOffset=Mr(i),this.scheduleHover(o),(o||[]).some(s=>this.monitor.canDropOnTarget(s))?(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?i.preventDefault():(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=i=>{this.isDraggingNativeItem()&&i.preventDefault(),this.enterLeaveCounter.leave(i.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=i=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var o;i.preventDefault(),(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}else vo(i.dataTransfer)&&i.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=i=>{const{dropTargetIds:o}=this;this.dropTargetIds=[],this.actions.hover(o,{clientOffset:Mr(i)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=i=>{const o=i.target;typeof o.dragDrop=="function"&&(o.tagName==="INPUT"||o.tagName==="SELECT"||o.tagName==="TEXTAREA"||o.isContentEditable||(i.preventDefault(),o.dragDrop()))},this.options=new o1(t,r),this.actions=n.getActions(),this.monitor=n.getMonitor(),this.registry=n.getRegistry(),this.enterLeaveCounter=new qp(this.isNodeInDocument)}}const u1=function(n,t,r){return new s1(n,t,r)};function a1(e,n){const t=[];for(const r of e){const{s:i,e:o}=r;let l=Math.floor(i/n)+1,s=i;for(;s<o;){const u=(l-1)*n,f=l*n;t.push({...r,line:l,s:Math.max(s,u),e:Math.min(o,f)}),l++,s=Math.min(o,f)}}return t}function c1(e,n){const t=[],r={};for(const i of e){const{line:o}=i;r[o]||(r[o]=[]),r[o].push({...i})}for(const[i,o]of Object.entries(r)){const l=(i-1)*n,s=i*n;o.sort((f,g)=>f.s-g.s);let u=l;for(const f of o){const{s:g,e:m}=f;u<g&&t.push({line:Number(i),s:u,e:g,isFill:!0}),t.push({...f,line:Number(i),s:g,e:m}),u=m}u<s&&t.push({line:Number(i),s:u,e:s,isFill:!0})}return t}const $u="",Ze=50,gr=P.createContext({}),f1=({children:e})=>{const[n,t]=P.useState([{s:2,e:25},{s:15,e:28},{s:50,e:120},{s:2e3,e:2700},{s:2550,e:3e3}]),[r,i]=P.useState([]),[o,l]=P.useState(""),[s,u]=P.useState(o.split($u)),[f,g]=P.useState(!1),[m,h]=P.useState({start:0,end:0}),[v,w]=P.useState({}),p=P.useRef(0),T=P.useRef(0),c=P.useRef(0),a=P.useRef(0);P.useEffect(()=>{p.current=performance.now();const _=n.slice().sort((U,N)=>U.s-N.s).map((U,N)=>({...U,index:N,tailOverlapped:-1,headOverlapped:-1}));let I=_[0];for(let U=1;U<_.length;U++){const N=_[U];N.s<I.e&&(I.tailOverlapped=N.s,N.headOverlapped=I.e),I=N}const X=_.reduce((U,N)=>N.headOverlapped!==-1&&N.tailOverlapped!==-1?[...U,{s:N.s,e:N.headOverlapped,index:N.index,overLapped:!0},{s:N.headOverlapped,e:N.tailOverlapped,index:N.index,overLapped:!1},{s:N.tailOverlapped,e:N.e,index:N.index,overLapped:!0}]:N.headOverlapped!==-1?[...U,{s:N.s,e:N.headOverlapped,index:N.index,overLapped:!0},{s:N.headOverlapped,e:N.e,index:N.index,overLapped:!1}]:N.tailOverlapped!==-1?[...U,{s:N.s,e:N.tailOverlapped,index:N.index,overLapped:!1},{s:N.tailOverlapped,e:N.e,index:N.index,overLapped:!0}]:[...U,{...N,index:N.index,overLapped:!1}],[]),je=[],xe=new Set;for(const U of X){const N=`${U.s}-${U.e}`;xe.has(N)||(xe.add(N),je.push(U))}let ce=0;const Ye=je.map((U,N)=>{U.overLapped&&ce++;const k=(N-ce)%2===0;return{...U,isEven:k,isOdd:!k}});return console.log({oddEven:Ye}),i(Ye),T.current=performance.now(),()=>{}},[n]),P.useEffect(()=>{const C=m.start*Ze,_=(m.end+1)*Ze;c.current=C,a.current=_;const I=r.filter(ce=>ce.s<_&&ce.e>C),X=a1(I,Ze),xe=c1(X,Ze).reduce((ce,Ye)=>{const{line:U}=Ye;return ce[U-1]||(ce[U-1]=[]),ce[U-1].push({...Ye}),ce},{});return w(xe),()=>{}},[m,r]);const d=C=>{l(C),u(C.split($u))},y=C=>{t(C)},S=(C,_)=>{h({start:C,end:_})},O=n.reduce((C,_,I)=>[...C,{pos:_.s,type:"s",origin:I},{pos:_.e,type:"e",origin:I}],[]).slice().sort((C,_)=>C.pos-_.pos).filter(C=>c.current<=C.pos&&C.pos<=a.current).map(C=>({...C,lineNumber:Math.floor(C.pos/Ze)})).reduce((C,_)=>{const{lineNumber:I}=_;return C[I]||(C[I]=[]),C[I].push({..._}),C},{});return console.log({sortedCursorPositions:O}),L.jsxs(gr.Provider,{value:{resolvedCursors:r,text:o,content:s,isDragging:f,setCursors:y,setText:d,setIsDragging:g,setLineRange:S,visibleLinesPart:v,sortedCursorPositions:O},children:[L.jsx(mp,{backend:u1,children:e}),ps.createPortal(L.jsxs("div",{className:"absolute top-0 right-0 bg-gray-100 p-2 text-sm",children:["字符长度: ",L.jsx("p",{children:o.length}),"分段: ",L.jsx("pre",{children:JSON.stringify(n,null,2)}),"背景计算耗时:",L.jsx("p",{children:`Execution time: ${T.current-p.current} ms`}),"正在拖拽:",L.jsx("p",{children:f?"是":"否"})]}),document.body)]})};function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vl.apply(null,arguments)}function Vu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yl(e,n){return yl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},yl(e,n)}function d1(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,yl(e,n)}var Wu=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function p1(e,n){return!!(e===n||Wu(e)&&Wu(n))}function h1(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!p1(e[t],n[t]))return!1;return!0}function yo(e,n){n===void 0&&(n=h1);var t,r=[],i,o=!1;function l(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return o&&t===this&&n(s,r)||(i=e.apply(this,s),o=!0,t=this,r=s),i}return l}var g1=typeof performance=="object"&&typeof performance.now=="function",Bu=g1?function(){return performance.now()}:function(){return Date.now()};function Qu(e){cancelAnimationFrame(e.id)}function m1(e,n){var t=Bu();function r(){Bu()-t>=n?e.call(null):i.id=requestAnimationFrame(r)}var i={id:requestAnimationFrame(r)};return i}var wo=-1;function bu(e){if(e===void 0&&(e=!1),wo===-1||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(n),wo=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return wo}var Kn=null;function Gu(e){if(e===void 0&&(e=!1),Kn===null||e){var n=document.createElement("div"),t=n.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var r=document.createElement("div"),i=r.style;return i.width="100px",i.height="100px",n.appendChild(r),document.body.appendChild(n),n.scrollLeft>0?Kn="positive-descending":(n.scrollLeft=1,n.scrollLeft===0?Kn="negative":Kn="positive-ascending"),document.body.removeChild(n),Kn}return Kn}var v1=150,y1=function(n,t){return n};function w1(e){var n,t=e.getItemOffset,r=e.getEstimatedTotalSize,i=e.getItemSize,o=e.getOffsetForIndexAndAlignment,l=e.getStartIndexForOffset,s=e.getStopIndexForStartIndex,u=e.initInstanceProps,f=e.shouldResetStyleCacheOnItemSizeChange,g=e.validateProps;return n=function(m){d1(h,m);function h(w){var p;return p=m.call(this,w)||this,p._instanceProps=u(p.props,Vu(p)),p._outerRef=void 0,p._resetIsScrollingTimeoutId=null,p.state={instance:Vu(p),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof p.props.initialScrollOffset=="number"?p.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},p._callOnItemsRendered=void 0,p._callOnItemsRendered=yo(function(T,c,a,d){return p.props.onItemsRendered({overscanStartIndex:T,overscanStopIndex:c,visibleStartIndex:a,visibleStopIndex:d})}),p._callOnScroll=void 0,p._callOnScroll=yo(function(T,c,a){return p.props.onScroll({scrollDirection:T,scrollOffset:c,scrollUpdateWasRequested:a})}),p._getItemStyle=void 0,p._getItemStyle=function(T){var c=p.props,a=c.direction,d=c.itemSize,y=c.layout,S=p._getItemStyleCache(f&&d,f&&y,f&&a),D;if(S.hasOwnProperty(T))D=S[T];else{var O=t(p.props,T,p._instanceProps),C=i(p.props,T,p._instanceProps),_=a==="horizontal"||y==="horizontal",I=a==="rtl",X=_?O:0;S[T]=D={position:"absolute",left:I?void 0:X,right:I?X:void 0,top:_?0:O,height:_?"100%":C,width:_?C:"100%"}}return D},p._getItemStyleCache=void 0,p._getItemStyleCache=yo(function(T,c,a){return{}}),p._onScrollHorizontal=function(T){var c=T.currentTarget,a=c.clientWidth,d=c.scrollLeft,y=c.scrollWidth;p.setState(function(S){if(S.scrollOffset===d)return null;var D=p.props.direction,O=d;if(D==="rtl")switch(Gu()){case"negative":O=-d;break;case"positive-descending":O=y-a-d;break}return O=Math.max(0,Math.min(O,y-a)),{isScrolling:!0,scrollDirection:S.scrollOffset<O?"forward":"backward",scrollOffset:O,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._onScrollVertical=function(T){var c=T.currentTarget,a=c.clientHeight,d=c.scrollHeight,y=c.scrollTop;p.setState(function(S){if(S.scrollOffset===y)return null;var D=Math.max(0,Math.min(y,d-a));return{isScrolling:!0,scrollDirection:S.scrollOffset<D?"forward":"backward",scrollOffset:D,scrollUpdateWasRequested:!1}},p._resetIsScrollingDebounced)},p._outerRefSetter=function(T){var c=p.props.outerRef;p._outerRef=T,typeof c=="function"?c(T):c!=null&&typeof c=="object"&&c.hasOwnProperty("current")&&(c.current=T)},p._resetIsScrollingDebounced=function(){p._resetIsScrollingTimeoutId!==null&&Qu(p._resetIsScrollingTimeoutId),p._resetIsScrollingTimeoutId=m1(p._resetIsScrolling,v1)},p._resetIsScrolling=function(){p._resetIsScrollingTimeoutId=null,p.setState({isScrolling:!1},function(){p._getItemStyleCache(-1,null)})},p}h.getDerivedStateFromProps=function(p,T){return S1(p,T),g(p),null};var v=h.prototype;return v.scrollTo=function(p){p=Math.max(0,p),this.setState(function(T){return T.scrollOffset===p?null:{scrollDirection:T.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},v.scrollToItem=function(p,T){T===void 0&&(T="auto");var c=this.props,a=c.itemCount,d=c.layout,y=this.state.scrollOffset;p=Math.max(0,Math.min(p,a-1));var S=0;if(this._outerRef){var D=this._outerRef;d==="vertical"?S=D.scrollWidth>D.clientWidth?bu():0:S=D.scrollHeight>D.clientHeight?bu():0}this.scrollTo(o(this.props,p,T,y,this._instanceProps,S))},v.componentDidMount=function(){var p=this.props,T=p.direction,c=p.initialScrollOffset,a=p.layout;if(typeof c=="number"&&this._outerRef!=null){var d=this._outerRef;T==="horizontal"||a==="horizontal"?d.scrollLeft=c:d.scrollTop=c}this._callPropsCallbacks()},v.componentDidUpdate=function(){var p=this.props,T=p.direction,c=p.layout,a=this.state,d=a.scrollOffset,y=a.scrollUpdateWasRequested;if(y&&this._outerRef!=null){var S=this._outerRef;if(T==="horizontal"||c==="horizontal")if(T==="rtl")switch(Gu()){case"negative":S.scrollLeft=-d;break;case"positive-ascending":S.scrollLeft=d;break;default:var D=S.clientWidth,O=S.scrollWidth;S.scrollLeft=O-D-d;break}else S.scrollLeft=d;else S.scrollTop=d}this._callPropsCallbacks()},v.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&Qu(this._resetIsScrollingTimeoutId)},v.render=function(){var p=this.props,T=p.children,c=p.className,a=p.direction,d=p.height,y=p.innerRef,S=p.innerElementType,D=p.innerTagName,O=p.itemCount,C=p.itemData,_=p.itemKey,I=_===void 0?y1:_,X=p.layout,je=p.outerElementType,xe=p.outerTagName,ce=p.style,Ye=p.useIsScrolling,U=p.width,N=this.state.isScrolling,k=a==="horizontal"||X==="horizontal",R=k?this._onScrollHorizontal:this._onScrollVertical,z=this._getRangeToRender(),B=z[0],q=z[1],In=[];if(O>0)for(var Se=B;Se<=q;Se++)In.push(P.createElement(T,{data:C,key:I(Se,C),index:Se,isScrolling:Ye?N:void 0,style:this._getItemStyle(Se)}));var Qn=r(this.props,this._instanceProps);return P.createElement(je||xe||"div",{className:c,onScroll:R,ref:this._outerRefSetter,style:vl({position:"relative",height:d,width:U,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},ce)},P.createElement(S||D||"div",{children:In,ref:y,style:{height:k?"100%":Qn,pointerEvents:N?"none":void 0,width:k?Qn:"100%"}}))},v._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var p=this.props.itemCount;if(p>0){var T=this._getRangeToRender(),c=T[0],a=T[1],d=T[2],y=T[3];this._callOnItemsRendered(c,a,d,y)}}if(typeof this.props.onScroll=="function"){var S=this.state,D=S.scrollDirection,O=S.scrollOffset,C=S.scrollUpdateWasRequested;this._callOnScroll(D,O,C)}},v._getRangeToRender=function(){var p=this.props,T=p.itemCount,c=p.overscanCount,a=this.state,d=a.isScrolling,y=a.scrollDirection,S=a.scrollOffset;if(T===0)return[0,0,0,0];var D=l(this.props,S,this._instanceProps),O=s(this.props,D,S,this._instanceProps),C=!d||y==="backward"?Math.max(1,c):1,_=!d||y==="forward"?Math.max(1,c):1;return[Math.max(0,D-C),Math.max(0,Math.min(T-1,O+_)),D,O]},h}(P.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var S1=function(n,t){n.children,n.direction,n.height,n.layout,n.innerTagName,n.outerTagName,n.width,t.instance},T1=w1({getItemOffset:function(n,t){var r=n.itemSize;return t*r},getItemSize:function(n,t){var r=n.itemSize;return r},getEstimatedTotalSize:function(n){var t=n.itemCount,r=n.itemSize;return r*t},getOffsetForIndexAndAlignment:function(n,t,r,i,o,l){var s=n.direction,u=n.height,f=n.itemCount,g=n.itemSize,m=n.layout,h=n.width,v=s==="horizontal"||m==="horizontal",w=v?h:u,p=Math.max(0,f*g-w),T=Math.min(p,t*g),c=Math.max(0,t*g-w+g+l);switch(r==="smart"&&(i>=c-w&&i<=T+w?r="auto":r="center"),r){case"start":return T;case"end":return c;case"center":{var a=Math.round(c+(T-c)/2);return a<Math.ceil(w/2)?0:a>p+Math.floor(w/2)?p:a}case"auto":default:return i>=c&&i<=T?i:i<c?c:T}},getStartIndexForOffset:function(n,t){var r=n.itemCount,i=n.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/i)))},getStopIndexForStartIndex:function(n,t,r){var i=n.direction,o=n.height,l=n.itemCount,s=n.itemSize,u=n.layout,f=n.width,g=i==="horizontal"||u==="horizontal",m=t*s,h=g?f:o,v=Math.ceil((h+r-m)/s);return Math.max(0,Math.min(l-1,t+v-1))},initInstanceProps:function(n){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(n){n.itemSize}});function xf(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=xf(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function pt(){for(var e,n,t=0,r="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=xf(e))&&(r&&(r+=" "),r+=n);return r}const E1="";function C1({children:e,index:n,onDrop:t}){const[{isOver:r},i]=Kp(()=>({accept:"CURSOR",drop:o=>{t(o,n)},collect:o=>({isOver:!!o.isOver()})}),[n]);return L.jsx("span",{ref:i,className:pt("text-transparent",r&&"bg-gray-200"),children:e})}function D1({text:e}){const{setCursors:n}=P.useContext(gr),t=(r,i)=>{n(o=>o.map((l,s)=>{if(r.origin===s){if(r.type==="s")return{...l,s:i};if(r.type==="e")return{...l,e:i}}return l}))};return L.jsx(L.Fragment,{children:e.split(E1).map((r,i)=>L.jsx(C1,{index:i,onDrop:t,children:r},i))})}const Ku=["text-red-500","text-blue-500","text-green-500","text-yellow-500","text-purple-500","text-pink-500"];function O1({pos:e}){const{setIsDragging:n}=P.useContext(gr),[{isDragging:t},r]=Hp(()=>({type:"CURSOR",item:()=>e,collect:i=>({isDragging:!!i.isDragging()})}));return P.useEffect(()=>{n(t)},[t]),L.jsx("span",{className:pt("font-extrabold","absolute z-50 cursor-move",Ku[e.origin%Ku.length],t&&"opacity-50"),ref:r,children:"|"})}const k1=({parts:e,index:n,text:t,cursors:r})=>{const o=r&&r.length>0?r.reduce((l,s)=>({...l,[s.pos]:s}),{}):{};return L.jsx(L.Fragment,{children:e.map((l,s)=>{const u=l.s-n*Ze,f=l.e-n*Ze,g=o[l.s];return L.jsxs(L.Fragment,{children:[g&&L.jsx(O1,{pos:g}),L.jsx("span",{className:pt(l.overLapped&&"bg-gray-300",!l.overLapped&&l.isEven&&!l.isFill&&"bg-red-300",!l.overLapped&&l.isOdd&&!l.isFill&&"bg-green-300",l.isFill&&"bg-transparent"),children:t.slice(u,f)})]},s)})})};function x1(){const{text:e,setLineRange:n,visibleLinesPart:t,sortedCursorPositions:r}=P.useContext(gr),[i,o]=P.useState({startIndex:0,endIndex:0}),l=P.useMemo(()=>{const s=[];for(let u=0;u<e.length;u+=Ze)s.push(e.slice(u,u+Ze));return s},[e]);return L.jsxs(L.Fragment,{children:[L.jsx(T1,{height:600,itemCount:l.length,itemSize:30,width:"100%",onItemsRendered:({visibleStartIndex:s,visibleStopIndex:u})=>{n(s,u),o({startIndex:s,endIndex:u})},children:({index:s,style:u})=>{const f=l[s],g=t[s],m=r[s];return L.jsxs("div",{style:u,children:[L.jsx("div",{className:"",children:L.jsx("span",{className:pt(),children:f})}),L.jsx("div",{className:pt("absolute left-0 top-0"),children:g&&L.jsx(k1,{parts:g,index:s,text:f,cursors:m})}),L.jsx("div",{className:pt("absolute left-0 top-0"),children:L.jsx(D1,{text:f})})]})}}),ps.createPortal(L.jsxs("div",{className:"absolute right-0 bottom-0 bg-gray-100 p-2 text-sm",children:[L.jsx("p",{children:"Visible Range:"}),L.jsxs("p",{children:["Start: ",i.startIndex]}),L.jsxs("p",{children:["End: ",i.endIndex]})]}),document.body)]})}function I1({text:e}){const{setText:n}=P.useContext(gr);return P.useEffect(()=>{n(e)},[]),L.jsx("div",{className:"relative w-[800px] h-[600px] border border-red-500 overflow-y-scroll",children:L.jsx(x1,{})})}function P1({text:e}){return L.jsx(f1,{children:L.jsx(I1,{text:e})})}const _1=`晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]


晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]

晋穆帝永和九年（353年）三月初，王羲之与儿子王凝之、王徽之、王操之、王献之，孙统、李充、孙绰、谢安、支遁、太原王蕴、许询、广汉王彬之、高平郗昙、馀姚令谢胜等“少长群贤”共42人[2]在会稽山阴集会，为兰亭集会，是时有二十六人得诗三十七首[3]，后辑为《兰亭诗》。《兰亭集序》为王羲之为《兰亭诗》写的序言。王羲之以特选的鼠须笔和蚕茧纸书写，首先写聚会盛况，描述环境——“茂林修竹、清流激湍”，“天朗气清，惠风和畅”。之后笔锋突变，格调转为悲伤，写欢乐时光不长久及人生短暂，然而他并不宣扬“及时行乐”，而是斥了庄子的“一死生、齐彭殇”的论调。通篇语言流畅，不勉强藻饰、通俗自然，结合骈句、骈散，灵活自如，堪称历代名篇。

据传唐太宗非常喜爱此作品，但王书真迹在王羲之七世孙智永的徒弟袁辨才手中，袁辨才不愿意割爱，唐太宗便派御史萧翼去骗取，后被唐太宗作为殉葬品[4]，宋朝陆游在古诗《跋冯氏兰亭》中因此感慨道：“茧纸藏昭陵，千载不复见。此本得其骨，殊胜兰亭面。”[5]但唐太宗的昭陵疑似于五代十国时被温韬所盗[6]，而被盗物品的名单中并没有《兰亭集序》，[a]因此一般相信《兰亭集序》藏于唐高宗与武则天合葬的乾陵中。

唐太宗得到真迹时[7]，即令虞世南、褚遂良、冯承素、欧阳询等人临摹翻刻，分赐皇子、近臣，世称“唐人摹本”。今存的摹本以“神龙本”最为著名，该帖共28行，324字，章法、结构、笔法都颇得原本神韵，被认为是最好的摹本。石刻则首推“定武本”[b][9]。宋末元初赵孟𫖯也深受兰亭集序影响。

乾隆四十四年（1779年）春，清高宗乾隆集各家的兰亭序摹本及兰亭诗等作，摹刻为“兰亭八柱”置于圆明园，大致上按照书者的时代排序，其中仅有其臣下于敏中因补柳公权阙笔擢升紧接在柳公权之后的第六柱[c]。

1965年，中国大陆发生了一场关于《兰亭序》是否王羲之所作的学术辩论，参看兰亭论辩。

2022年10月12日，意大利女宇航员萨曼塔·克里斯托福雷蒂于国际空间站从距离地球420公里的高空，以每小时28000公里的速度飞越北京市上空时，在自己的Twitter账号上引用了本文中的“仰观宇宙之大，俯察品类之盛。所以游目骋怀，足以极视听之娱，信可乐也。”一句来表达自己俯瞰寰宇时飞扬的心绪，瞬间在中国社交平台引发广泛热议。[10]
`;function N1(){return L.jsxs("div",{className:"p-10",children:[L.jsx("h1",{className:"font-bold",children:"Text Range Selection"}),L.jsx("hr",{className:"my-2"}),L.jsx(P1,{text:_1})]})}uf(document.getElementById("root")).render(L.jsx(N1,{}));
